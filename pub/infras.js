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
}, { // ------------------------------------------------------------------------
"x": "Purged exprd related code from beebrain. We will throw a visible error if anyone restarts an exprd goal, or tries otherwise to send the parameter to beebrain",
"t": "2018-03-05",
"u": ["https://twitter.com/beeminfra/status/981810034496552961",
"https://github.com/beeminder/beeminder/commit/abcb31ad52c898ad7d1772c53631b924ca581e1b"],
}, { // ------------------------------------------------------------------------
"x": "Added a `write_bb_file` method on goal which makes grabbing test data easier, e.g., for specific bug goals.",
"t": "2018-04-18",
"u": ["https://twitter.com/beeminfra/status/987087396410806272"],
}, { // ------------------------------------------------------------------------
"x": "Collected a representative test suite of bb files for testing changes to beebrain with migration to jsbrain.",
"t": "2018-04-11",
"u": ["https://twitter.com/beeminfra/status/984553082955612160"],
}, { // ------------------------------------------------------------------------
"x": "Made an admin page that loads a user dossier from their email address from https://twitter.com/beeminfra/status/976941526218522624 for Beeminder admins answering support emails, since our old tool is at its end-of-life",
"t": "2018-04-26",
"u": "https://twitter.com/beeminfra/status/989619408015257600",
}, { // ------------------------------------------------------------------------
"x": "fixed admin's error with paypal refunds (we showed an error despite the refunds being successful)",
"t": "2018-05-03",
"u": "https://twitter.com/beeminfra/status/992097426885365760",
}, { // ------------------------------------------------------------------------
"u": ["https://github.com/beeminder/beeminder/commit/a532bb7feecb35f62e4e1b80b47a8a41fecce28e",
"https://twitter.com/beeminfra/status/994663004766593029"],
"d": "2018-05-10",
"t": "2018-05-10",
"x": "don't cc support for guilt trips & ifttt errors #wolfcrying",
}, { // ------------------------------------------------------------------------
"u": ["https://github.com/beeminder/beeminder/commit/a3dabbefa1c1cbdc0c4227a49fbdab125f93ad27", 
"https://twitter.com/beeminfra/status/994663068566142976"],
"d": "2018-05-10",
"t": "2018-05-10",
"x": "add a link to the admin edit page into the admin sidebar so admins don't have to remember urls",
}, { // ------------------------------------------------------------------------
"u": ["https://twitter.com/beeminfra/status/994663123515727872",
      "https://github.com/beeminder/beeminder/commit/ddf1860b907e2120a310082878c51c2b2af92b3e"],
"d": "2018-05-02",
"t": "2018-05-10",
"x": "code cleanup: remove unused and confusingly redundant \"wants_goal_update_emails\"",
}, { // ------------------------------------------------------------------------
"x": "Added a rudimentary admin query form for finding subsets of users without launching the production console.",
"u": ["https://twitter.com/beeminfra/status/1002289580832260096", "https://github.com/beeminder/beeminder/commit/6d02f06375f03d7bd7a8c89e4dbb565c52751d5b"],
"t": "2018-05-31",
"d": "2018-05-29",
}, { // ------------------------------------------------------------------------
"x": "add an easy access link to reminders fwomp page to admin sidebar",
"u": "https://twitter.com/beeminfra/status/1004804365910020096"
}, { // ------------------------------------------------------------------------
"x": "Add an airhorn for deadbeats creating new goals so we can decide if it's worth doing something about.",
"u": "https://twitter.com/beeminfra/status/1007334780361322496",
"t": "2018-06-14",
}, { // ------------------------------------------------------------------------
"x": "Tell Braintree (how we talk to PayPal) to use tlsv1.2 to be compliant with upcoming changes to PayPal's backend.",
"u": ["https://twitter.com/beeminfra/status/1011728365378662400",
      "https://github.com/beeminder/beeminder/commit/c018cb78724c4f08dda04aaaf6024427a29aee8a"],
"t": "2018-06-26",
"d": "2018-05-25",
}, { // ------------------------------------------------------------------------
"x": "Upgraded our Facebook API version to 2.8",
"u": "https://twitter.com/beeminfra/status/1014265253134123008",
"d": "2018-07-03",
"t": "2018-07-03",
}, { // ------------------------------------------------------------------------
"x": "Refactoring in the username format validator means we don't have as much overhead for keeping track of reserved URLs",
"u": ["https://twitter.com/beeminfra/status/1016749257628348417", "https://github.com/beeminder/beeminder/commit/4c630914c69e038f9a64d80615d43f75ae1f9d4a"],
"d": "2018-05-25",
"t": "2018-07-10",
"c": "looks for existence of slugs in routes and won't let a user take an existing route, so we don't have to update the list every time we add a new route."
}, { // ------------------------------------------------------------------------
"x": "Silenced 3 different retry errors in autodata fetch (as in, errors where we should just retry later, instead of alerting about these errors)",
"u": ["https://twitter.com/beeminfra/status/1021871841067991041", "https://github.com/beeminder/beeminder/commit/7a43363ed2038a1297b456a58e0d561b8665d62b"],
"t": "2018-07-24",
"d": "2018-07-02",
}, { // ------------------------------------------------------------------------
"x": "Removed the deprecated road settings controller and the associated tests",
"d": "2018-07-19",
"t": "2018-07-31",
"u": ["https://github.com/beeminder/beeminder/commit/19435a58863b75797441b1595f5c34c4ed11b277", "https://github.com/beeminder/beeminder/commit/2de47895874e08ff9f7d970d6ae1cd9de1fab6ee",
"https://twitter.com/beeminfra/status/1024371818428166145"],
}, { // ------------------------------------------------------------------------
"x": "Updated our README with missing instructions for getting a dev env up and running, re: email confirmation and database setup.", 
"u": ["https://github.com/beeminder/beeminder/commit/2f7e2a17c6e97c1cb30ad62b23aa7fac41d91a39", 
      "https://twitter.com/beeminfra/status/1026899888624230401"],
"t": "2018-08-06",
}, { // ------------------------------------------------------------------------
"x": "Fixed a false negative in our specs and removed some unnecessary wait-time in the same.",
"u": ["https://github.com/beeminder/beeminder/commit/ad2022e6f5758d55e5422e93ece27749f8889dd9",
     "https://twitter.com/beeminfra/status/1029534393587486720"],
"t": "2018-08-14",
}, { // ------------------------------------------------------------------------
"x": "added extra debug logging and alerts for figuring out recurrent <service unavailable> type airhorns from gmailzero and todoist integrations.",
"u": "https://twitter.com/beeminfra/status/1032137246286143490"
}, { // ------------------------------------------------------------------------
"x": "started tracking converted new-style weight roads that used to be wide-road goals. Also sleuthed out already restarted ones and updated the DB to mark them too.",
"u": "https://twitter.com/beeminfra/status/1032137297414696960"
}, { // ------------------------------------------------------------------------
"x": "Admins can now update user fine print & see fine print & datapoints always",
"u": ["https://github.com/beeminder/beeminder/commit/69d0876e40c1b2760c834f2735bfd02ad8815b91",
"https://twitter.com/beeminfra/status/1040128311236603904"],
"t": "2018-09-12",
}, { // ------------------------------------------------------------------------
}, /* ----------------------------------------------------------- end batch */ ]

var staged = [ { // note: sub-entries not allowed here in staging
}, /* ---------------------------------------------------------- end staged */ ]

/*
METASTAGED: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
https://github.com/beeminder/beeminder/commit/
}, { // ------------------------------------------------------------------------
#TODO: is this an infra, @dreeves?
https://github.com/beeminder/beeminder/commit/1f201ba568c0505a3b86253df4d8c56bea54be40
}, { // ------------------------------------------------------------------------
background job to weed out inactive intercom users (because we pay by the user)
https://github.com/beeminder/beeminder/commit/b0617f10255cf7fd302f9c27438032c9406f8d5f
}, { // ------------------------------------------------------------------------
whoops..  [above] made it impossible for admins to change which of t,v,rfin were set #bugfix
https://github.com/beeminder/beeminder/commit/137e9280f4003f84567440ef983e12dec2eab26a
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "significant refactor of recommit & restart behavior -- mostly pulling out shared functionality into a helper function."

TODO:
don't make title required and then do javascript contortions to deal with it

}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
*/
