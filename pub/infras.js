// Awaiting proglogs generalization...

var batch = [{
"x": "Timezones, asof-null, sadedgy, sadreset, and inferred tini/vini all purged from Beebrain!",
"u": "https://twitter.com/beeminfra/status/931291064794718208",
"t": "2017-11-16",
}, { // ------------------------------------------------------------------------
"x": "We improved our bee.sh script to give it a single command to deploy to all application servers",
"u": "https://twitter.com/beeminfra/status/933784267540250625",
}, { // ------------------------------------------------------------------------
"x": "We updated our tests to deal with recent changes in registration and with weightloss goal creation. (UVIs #2471 & #2474 & friends)",
"u": "https://twitter.com/beeminfra/status/936364866436132866",
}, { // ------------------------------------------------------------------------
"x": "Show admins the link to user's archived goals on their gallery page",
"u": "https://twitter.com/beeminfra/status/938891955823452161",
}, { // ------------------------------------------------------------------------
"x": "Actually store the maxflux that we get from users when they set up a new weightloss goal",
"u": "https://twitter.com/beeminfra/status/941428798431543296",
}, { // ------------------------------------------------------------------------
"x": "Silenced airhorns about autodata on frozen goals.",
"u": "https://twitter.com/beeminfra/status/943877535091212288"
}, { // ------------------------------------------------------------------------
"x": "Added missing hhmmformat goal field to the admin form.",
"u": ["https://twitter.com/beeminfra/status/943877851668819968",
      "https://github.com/beeminder/beeminder/commit/2d7bf31673dbfa9697aaa4a2fe54246a525d1549"]
}, { // ------------------------------------------------------------------------
"x": "Fixed a missing space in the formatting for translog entries for datapoint edits.",
"u": "https://twitter.com/beeminfra/status/949043176018395137",
"t": "2018-01-04",
}, { // ------------------------------------------------------------------------
"x": "bb.dflux is now called stdflux so we have differentiation between user collected field (maxflux), and bbrain calculated field (stdflux)",
"u": "https://twitter.com/beeminfra/status/951537816248320001",
"t": "2018-01-11",
}, { // ------------------------------------------------------------------------
"x": "Removed all the code for weightloss leniency and inferred tini/vini from Beebrain",
"u": "https://twitter.com/beeminfra/status/954123338225410048",
"t": "2018-01-18"
}, { // ------------------------------------------------------------------------
"x": "Added an alert for ourselves if someone restarts an old (ancient) exponential road.",
"u": "https://twitter.com/beeminfra/status/956656535052021760",
"t": "2018-01-25"
}, { // ------------------------------------------------------------------------
"x": "In addition to http://uvi.glitch.me/#2551, and https://twitter.com/beeminfra/status/956656535052021760, paving the way for getting rid of exprd param, we no longer send it to beebrain",
"u": "https://twitter.com/beeminfra/status/959198897481527296",
"t": "2018-02-01",
}, { // ------------------------------------------------------------------------
"x": "renamed some error handling methods in the application controller to get rid of underscores. E.g., render_404 => render404",
"u": ["https://twitter.com/beeminfra/status/961351834383233024",
      "https://github.com/beeminder/beeminder/commit/b03f5413bde70c93039f63cf2979360ac90b507a"],
"d": "2018-02-07",
"t": "2018-02-07",
}, { // ------------------------------------------------------------------------
  "x": "Removed a bunch of unused rails helper functions related to old goal UI.",
  "t": "2018-02-15",
  "d": "2017-10-25",
  "u": ["https://twitter.com/beeminfra/status/964270603342569472",
        "https://github.com/beeminder/beeminder/commit/85b3cf47d222039eff5533674138a23954c6b7e4"]
}, { // ------------------------------------------------------------------------
  "x": "Cleaned up a bunch of the css in admin sidebar and fixed broken hide/show for the pledge & road matrixes.",
  "t": "2018-02-22",
  "u": ["https://twitter.com/beeminfra/status/966808902066085888", 
        "https://github.com/beeminder/beeminder/commit/cb5abbb86d6360f9504ef5ffe35e67075d22290d",
        "https://github.com/beeminder/beeminder/commit/8661e536e4df0061b5c68328db73e1c73fa0ecd8"],
}, { // ------------------------------------------------------------------------
  "x": "Brought the admin pages layout into the asset pipeline, removed unused js & css, and ultimately fixed the beemail layout.",
  "t": "2018-03-01",
  "d": "2018-02-22",
  "u": ["https://twitter.com/beeminfra/status/969297921349795840", 
        "https://github.com/beeminder/beeminder/commit/e0f6ee089ec798cc807ec41b2cbb5db83cd76180",],
}, { // ------------------------------------------------------------------------
"x": "don't airhorn about \"couldn't save user\" if it is because they tried to add a non-US phone number",
"t": "2018-03-08",
"d": "2018-02-26",
"u": ["https://twitter.com/beeminfra/status/971868208507502592",
      "https://github.com/beeminder/beeminder/commit/51c03f26a86516fdf841edcca8f2337320a5d4cf"],
}, { // ------------------------------------------------------------------------
"x": "Give a generic debugging sample for dev purposes (instead of redirecting) for non admin users on our user lookup endpoint",
"t": "2018-03-08",
"d": "2018-03-08",
"u": ["https://twitter.com/beeminfra/status/971867973555113984",
      "https://github.com/beeminder/beeminder/commit/f617189b7b62295f9f85016bbcbcdc247099907f"],
}, { // ------------------------------------------------------------------------
"x": "Added a new endpoint with token authentication for admins to use for getting raplet info about users",
"t": "2018-03-22",
"d": "2018-03-16",
"u": ["https://twitter.com/beeminfra/status/976941526218522624",
"https://github.com/beeminder/beeminder/commit/deba84218bdd49d76180a3908e58b3694c8c3f93"],
}, { // ------------------------------------------------------------------------
"x": "Added a blacklist to contact mailer & email bot for domains that are spamming us a bunch.",
"t": "2018-03-29",
"d": "2018-03-25",
"u": ["https://twitter.com/beeminfra/status/979467913844334592", 
      "https://github.com/beeminder/beeminder/commit/77c63e38140bbaa74a9272fc6a21b990a9cf28b3"]
}, /* ----------------------------------------------------------- end batch */ ]

var staged = [ { // note: sub-entries not allowed here in staging
}, /* ---------------------------------------------------------- end staged */ ]

/*
METASTAGED: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
don't make title required and then do javascript contortions to deal with it
nilly email_freq fix in massmail jobs

}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
*/
