'use strict';
// --------------------------------- 80chars ---------------------------------->

let express = require('express')
let app = express()
let fs = require('fs')

app.use(express.static('pub'))
let listener = app.listen(process.env.PORT, () => {
  console.log('UVI app is running on port ' + listener.address().port)
})



// See tweets.glitch.me for Twitter import code
