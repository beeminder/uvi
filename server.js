const TWURL = 'http://twitter.com/beemuvi'
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
        s += `"u": "${TWURL}/${id}",\n`
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

