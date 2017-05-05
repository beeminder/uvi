'use strict';

const TURL = 'https://twitter.com/'
const BURL = TURL + 'beemuvi'
const PATH = 'pub/twex/data/js/tweets'
const MONA = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', // month array
              'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

let express = require('express')
let app = express()
let fs = require('fs')

app.use(express.static('pub'))
app.listen(process.env.PORT, () => console.log('UVI app is running'))

// Take tweet text and escape quotes and expand URLs
function fixt(t, urls) {

}
/* TODO: expand URLs like so: {
  "source" : "",
  "entities" : {
    "user_mentions" : [ ],
    "media" : [ ],
    "hashtags" : [ {
      "text" : "mini",
      "indices" : [ 94, 99 ]
    } ],
    "urls" : [ {
      "indices" : [ 38, 61 ],
      "url" : "https:\/\/t.co\/arZxzvSs86",
      "expanded_url" : "http:\/\/beeminder.com\/premium",
      "display_url" : "beeminder.com\/premium"
    } ]
  },
  "geo" : { },
  "id_str" : "852307170427191297",
  "text" : "Fixed a typo and added an FAQ item to https:\/\/t.co\/arZxzvSs86 about the SMS bot being US-only #mini",
  "id" : 852307170427191297,
  "created_at" : "2017-04-12 23:47:19 +0000",
  "user" : { }
} */

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
    let tot = 0
    let s = '// UVIs converted from Twitter export\n\n'
    files.forEach(f => {
      let yrmon = f.match(/^(\d+)_(\d+)\.js$/)
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
      tot += tweets.length
      s += `var batch${year}${MONA[mon-1]} = [\n`
      tweets.forEach(t => {
        let rs = t.retweeted_status
        let id = rs ? rs.id_str     : t.id_str
        let ca = rs ? rs.created_at : t.created_at
        let tt = rs ? `RT @${rs.user.screen_name}: ${rs.text}` : t.text
        s += '{\n'
        s += `"x": "${tt.replace(/\"/g, '\\"')}",\n`
        s += `"u": "${BURL}/${id}",\n`
        s += `"t": "${ca}",\n`
        s += '"c": "(auto-imported from Twitter)",\n'
        s += '}, /' + '*'.repeat(73) + '/ '
      })
      s += ']\n\n'
      //console.log(`DEBUG: ${f} -- ${year}-${mon} -- ${tot}`)
    })
    console.log(`DEBUG: ${files.length} files, ${files[0]} etc, ${tot} tweets`)
    fs.writeFileSync('pub/import.js', s)
    resp.send('Done.')
  })
})
// --------------------------------- 80chars ---------------------------------->

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
