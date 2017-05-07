'use strict';

const PATH = 'pub/twex/data/js/tweets' // filesystem path to Twitter's export
const TURL = 'https://twitter.com/'
const BURL = TURL + 'beemuvi'
const MONA = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', // month array
              'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

let express = require('express')
let app = express()
let fs = require('fs')

app.use(express.static('pub'))
app.set('port', process.env.PORT || 5000)
app.listen(process.env.PORT, () => 
  console.log('UVI app is running on port ' + app.get('port')))

// Replace URLs with full versions based on object from tweet.entities.urls
// Twitter supplies a display_url but it's sometimes truncated which is lame.
function replaceUrl(str, url) {
  let repl = '<a href="' + url.expanded_url + '">' 
    + url.expanded_url.replace(/^https?\:\/\/(?:www\.)?/, '') + '</a>'
  let [start, end] = url.indices
  return str.substr(0, start) + repl + str.substr(end, str.length)
}

// Replace user mentions w/ hyperlinks per tweet.entities.user_mentions object.
function replaceMention(str, mention) {
  let repl = '<a href="' + TURL + mention.screen_name + '">@'
                                + mention.screen_name + '</a>'
  let [start, end] = mention.indices
  return str.substr(0, start) + repl + str.substr(end, str.length)
}

// Replace hashtags w/ hyperlinks per tweet.entities.hashtags object
// Not currently used cuz we don't want hashtags to be links.
function replaceHashtag(str, hashtag) {
  let repl = '<a href="' + TURL + 'hashtag/' + hashtag.text + '?src=hash">#'
                                             + hashtag.text + '</a>'
  let [start, end] = hashtag.indices
  return str.substr(0, start) + repl + str.substr(end, str.length)
}

// This is a freaking 3rd-order function: it takes a function and returns a
// function that returns a function. Specifically, it takes a replace* function
// like above and returns a function that maps a data object (like a hash with
// shortened and expanded versions of a URL, and the index of where to replace
// one with the other) to a function that maps a tweet string into a new tweet 
// string. Also the string->string function (that the function this function
// returns returns [sic!]) gets a weight attribute set on it so we know what
// order to apply all the string->string replacer functions. Namely, we need to
// do the replacements from right to left else we'll mess up the indices for 
// subsequent replacements.
// Reference: https://gist.github.com/bezhermoso/8cd3de18b2028533f0aa
function genReplacer(replfunc) {
  return data => {
    let f = str => replfunc(str, data)
    f.weight = data.indices[0] // apparently we can set random keys on functions
    return f
  }
}

// Take a tweet object from a Twitter export and expand the shortened URLs and
// if it's a retweet then prepend the "RT @user: " (even though that may make it
// longer than 140 characters!) and return the tweet text.
// The URL-expanding works by taking the url objects (and hashtag and 
// user-mention objects if we cared about those) and turning each one into a 
// string->string function closure that does the replacement on the tweet for 
// the given url object. Then we sort those functions and do the reduce to apply
// them one after another to the original tweet text. So, yeah, 3rd-order 
// functions, lexical closures, and map-reduce. I am the Hipster Hacker.
function rendertweet(tweet) {
  let rs = tweet.retweeted_status
  if (rs) { tweet = tweet.retweeted_status }

  let t = tweet.entities.urls           .map(genReplacer(replaceUrl))
  //.concat(tweet.entities.hashtags     .map(genReplacer(replaceHashtag)))
    .concat(tweet.entities.user_mentions.map(genReplacer(replaceMention)))
    .sort((a,b) => b.weight-a.weight) // do the replacements right to left
    .reduce((tweet, replacer) => replacer(tweet), tweet.text)

  if (rs) { 
    let u = tweet.user.screen_name
    t = `RT <a href="${TURL}${u}">@${u}</a>: ` + t 
  }
  return t
}

// Take a string and return an escaped version so we can output it to JSON
function escape(s) {
  return s.replace(/\\/g, '\\\\')
          .replace(/\"/g, '\\"')
          .replace(/\n/g, '\\n')
          .replace(/\f/g, '\\f')
          .replace(/\r/g, '\\r')
}

// --------------------------------- 80chars ---------------------------------->
// This is basically just a script we can run by GET'ing this magic route.
// It slurps up all the tweets from the Twitter export and writes them to a new
// file in the Beeminder UVI format.
app.get("/magic-import-route", (req, resp) => {
  fs.readdir(PATH, (err, files) => {
    if (err || files.length <= 0) {
      console.log(`Can't open ${PATH} or no files in there`)
      resp.send(`No tweets to import.`)
      return
    }
    let n = 0
    let s = '// UVIs converted from Twitter export\n\n'
    files.forEach(f => {
      let yrmon = f.match(/^(\d+)_(\d+)\.js$/) // -> [filename, yearStr, monStr]
      let year = parseInt(yrmon[1]);
      let mon  = parseInt(yrmon[2]);
      if (!year || !mon || year < 2011 || year > 2017 || mon < 1 || mon > 12) {
        console.log(`Bad file: ${PATH}/${f}`)
        resp.send(`ERROR importing tweets`)
        return
      }
      let data = fs.readFileSync(`${PATH}/${f}`, 'utf8')
      data = data.replace(/Grailbird\.data\.tweets_\w+/, 'tweets')
      let tweets = []
      eval(data) // list of tweet objects now stored in variable 'tweets'
      tweets.reverse() // reverses in place
      s += `var import${year}${MONA[mon-1]} = [\n`
      tweets.forEach(t => {
        let rs = t.retweeted_status
        let id = rs ? rs.id_str     : t.id_str
        let ca = rs ? rs.created_at : t.created_at
        let tt = rendertweet(t)
        s += '{\n'
        s += `"n": ${n += 1},\n`
        s += `"x": "${escape(tt)}",\n`
        s += `"u": "${BURL}/${id}",\n`
        s += `"t": "${ca}",\n`
        s += '"c": "(auto-imported from Twitter)",\n'
        s += '}, /' + '*'.repeat(73) + '/ '
      })
      s += ']\n\n'
    })
    fs.writeFileSync('pub/import.js', s)
    console.log(`Imported ${n} tweets in ${files.length} files eg ${files[0]}`)
    resp.send(`Imported ${n} tweets in ${files.length} files eg ${files[0]}`)
  })
})
// --------------------------------- 80chars ---------------------------------->

/* TEST SUITE ******************************************************************
const testtweets = [ 
// 1. simple tweet with URL to expand ------------------------------------------
{ "source": "",
  "entities": {
    "user_mentions": [ ],
    "media": [ ],
    "hashtags": [ {
      "text": "mini",
      "indices": [ 94, 99 ]
    } ],
    "urls": [ {
      "indices": [ 38, 61 ],
      "url": "https:\/\/t.co\/arZxzvSs86",
      "expanded_url": "http:\/\/beeminder.com\/premium",
      "display_url": "beeminder.com\/premium"
    } ]
  },
  "geo": { },
  "id_str" : "852307170427191297",
  "text": "Fixed a typo and added an FAQ item to https:\/\/t.co\/arZxzvSs86 about the SMS bot being US-only #mini",
  "id": 852307170427191297,
  "created_at": "2017-04-12 23:47:19 +0000",
  "user": { }
},
// 2. retweet ------------------------------------------------------------------
{ "source" : "\u003Ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003ETwitter Web Client\u003C\/a\u003E",
  "entities" : {
    "user_mentions" : [ {
      "name" : "Beeminder",
      "screen_name" : "bmndr",
      "indices" : [ 3, 9 ],
      "id_str" : "121250669",
      "id" : 121250669
    }, {
      "name" : "Bethany Soule",
      "screen_name" : "thatgirl",
      "indices" : [ 119, 128 ],
      "id_str" : "6417302",
      "id" : 6417302
    } ],
    "media" : [ ],
    "hashtags" : [ ],
    "urls" : [ ]
  },
  "geo" : { },
  "id_str" : "53655142624530432",
  "text" : "RT @bmndr: Productivity hack: The sedimentary filing system. http:\/\/blog.bmndr.com\/sediment \"My sediments exactly!\" -- @thatgirl",
  "retweeted_status" : {
    "source" : "\u003Ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003ETwitter Web Client\u003C\/a\u003E",
    "entities" : {
      "user_mentions" : [ {
        "name" : "Bethany Soule",
        "screen_name" : "thatgirl",
        "indices" : [ 108, 117 ],
        "id_str" : "6417302",
        "id" : 6417302
      } ],
      "media" : [ ],
      "hashtags" : [ ],
      "urls" : [ ]
    },
    "geo" : { },
    "id_str" : "53655015067361280",
    "text" : "Productivity hack: The sedimentary filing system. http:\/\/blog.bmndr.com\/sediment \"My sediments exactly!\" -- @thatgirl",
    "id" : 53655015067361280,
    "created_at" : "2011-04-01 03:08:47 +0000",
    "user" : {
      "name" : "Beeminder",
      "screen_name" : "bmndr",
      "protected" : false,
      "id_str" : "121250669",
      "profile_image_url_https" : "https:\/\/pbs.twimg.com\/profile_images\/2904549018\/0e74ed0a3a7f082432483f5797235978_normal.png",
      "id" : 121250669,
      "verified" : false
    }
  },
  "id" : 53655142624530432,
  "created_at" : "2011-04-01 03:09:17 +0000",
  "user" : {
    "name" : "Beeminder Dogfood",
    "screen_name" : "beemuvi",
    "protected" : false,
    "id_str" : "255132533",
    "profile_image_url_https" : "https:\/\/pbs.twimg.com\/profile_images\/1249896638\/dogbee_normal.jpg",
    "id" : 255132533,
    "verified" : false
  }
},
// 3. unshortened URL
{
  "source" : "\u003Ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003ETwitter Web Client\u003C\/a\u003E",
  "entities" : {
    "user_mentions" : [ ],
    "media" : [ ],
    "hashtags" : [ ],
    "urls" : [ ]
  },
  "geo" : { },
  "id_str" : "51918487756603392",
  "text" : "For graphs that include a moving average, it's now exponentially smoothed with smoothing constant .1 a la http:\/\/dreev.es\/hackdiet",
  "id" : 51918487756603392,
  "created_at" : "2011-03-27 08:08:26 +0000",
  "user" : {
    "name" : "Beeminder Dogfood",
    "screen_name" : "beemuvi",
    "protected" : false,
    "id_str" : "255132533",
    "profile_image_url_https" : "https:\/\/pbs.twimg.com\/profile_images\/1249896638\/dogbee_normal.jpg",
    "id" : 255132533,
    "verified" : false
  }
},
// 4. unicode character (TODO: unicode character before a shortened URL?)
{
  "source" : "\u003Ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003ETwitter Web Client\u003C\/a\u003E",
  "entities" : {
    "user_mentions" : [ {
      "name" : "Beeminder",
      "screen_name" : "bmndr",
      "indices" : [ 3, 9 ],
      "id_str" : "121250669",
      "id" : 121250669
    } ],
    "media" : [ ],
    "hashtags" : [ ],
    "urls" : [ ]
  },
  "geo" : { },
  "id_str" : "63675585834135552",
  "text" : "RT @bmndr: We're listening and responding to your ideas at http:\/\/uservoice.beeminder.com . We \u2665 our beta users!",
  "retweeted_status" : {
    "source" : "\u003Ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003ETwitter Web Client\u003C\/a\u003E",
    "entities" : {
      "user_mentions" : [ ],
      "media" : [ ],
      "hashtags" : [ ],
      "urls" : [ ]
    },
    "geo" : { },
    "id_str" : "63675368019738624",
    "text" : "We're listening and responding to your ideas at http:\/\/uservoice.beeminder.com . We \u2665 our beta users!",
    "id" : 63675368019738624,
    "created_at" : "2011-04-28 18:46:05 +0000",
    "user" : {
      "name" : "Beeminder",
      "screen_name" : "bmndr",
      "protected" : false,
      "id_str" : "121250669",
      "profile_image_url_https" : "https:\/\/pbs.twimg.com\/profile_images\/2904549018\/0e74ed0a3a7f082432483f5797235978_normal.png",
      "id" : 121250669,
      "verified" : false
    }
  },
  "id" : 63675585834135552,
  "created_at" : "2011-04-28 18:46:57 +0000",
  "user" : {
    "name" : "Beeminder Dogfood",
    "screen_name" : "beemuvi",
    "protected" : false,
    "id_str" : "255132533",
    "profile_image_url_https" : "https:\/\/pbs.twimg.com\/profile_images\/1249896638\/dogbee_normal.jpg",
    "id" : 255132533,
    "verified" : false
  }
},
// 5. two shortened URLs
{
  "source" : "\u003Ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003ETwitter Web Client\u003C\/a\u003E",
  "entities" : {
    "user_mentions" : [ ],
    "media" : [ ],
    "hashtags" : [ {
      "text" : "mini",
      "indices" : [ 84, 89 ]
    } ],
    "urls" : [ {
      "indices" : [ 24, 47 ],
      "url" : "https:\/\/t.co\/IHfgJDAcHm",
      "expanded_url" : "http:\/\/beeminder.com\/services",
      "display_url" : "beeminder.com\/services"
    }, {
      "indices" : [ 60, 83 ],
      "url" : "https:\/\/t.co\/GFgIlNGVu2",
      "expanded_url" : "https:\/\/www.beeminder.com\/settings\/account#account-permissions",
      "display_url" : "beeminder.com\/settings\/accou\u2026"
    } ]
  },
  "geo" : { },
  "id_str" : "850484557644087296",
  "text" : "Fixed our redirect from https:\/\/t.co\/IHfgJDAcHm to point to https:\/\/t.co\/GFgIlNGVu2 #mini",
  "id" : 850484557644087296,
  "created_at" : "2017-04-07 23:04:54 +0000",
  "user" : {
    "name" : "Beeminder Dogfood",
    "screen_name" : "beemuvi",
    "protected" : false,
    "id_str" : "255132533",
    "profile_image_url_https" : "https:\/\/pbs.twimg.com\/profile_images\/1249896638\/dogbee_normal.jpg",
    "id" : 255132533,
    "verified" : false
  }
},
]

testtweets.map(t => console.log(rendertweet(t)))
*******************************************************************************/
