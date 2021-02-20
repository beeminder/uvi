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
"x": "whoops..  https://twitter.com/beeminfra/status/1040128311236603904 made it impossible for admins to change which of t,v,rfin were set #bugfix",
"u": ["https://github.com/beeminder/beeminder/commit/137e9280f4003f84567440ef983e12dec2eab26a",
      "https://twitter.com/beeminfra/status/1042653749263577088"
],
"d": "2018-09-01",
"t": "2018-09-19"
}, { // ------------------------------------------------------------------------
"x": "added a background job to weed out inactive intercom users (since we pay by the user)",
"u": ["https://github.com/beeminder/beeminder/commit/b0617f10255cf7fd302f9c27438032c9406f8d5f",
"https://twitter.com/beeminfra/status/1045175113430134784"],
"t": "2018-09-26"
}, { // ------------------------------------------------------------------------
"x": "significant refactor of recommit & restart behavior -- mostly pulling out shared functionality into a helper function.",
"u": "https://twitter.com/beeminfra/status/1047735731278336001"
}, { // ------------------------------------------------------------------------
"x": "Removed a legacy route and controller from our original means of sending beemails via a mailgun route.",
"u": [
"https://twitter.com/beeminfra/status/1050333386567430145",
"https://github.com/beeminder/beeminder/commit/c5021c285911ad402d5a14c292b8b67f3bc5faed"
],
"t": "2018-10-10"
}, { // ------------------------------------------------------------------------
"x": "changed user key \"lastmailed\" to a hash so it can store timestamps for all kinds of noncey and other emails.",
"u": ["https://twitter.com/beeminfra/status/1052701328105848832"],
"t": "2018-10-17"
}, { // ------------------------------------------------------------------------
"x": "Put all the queries and instructions for writing new queries into one place for massmails. #refactor",
"u": "https://twitter.com/beeminfra/status/1055308425876332545",
"t": "2018-10-24"
}, { // ------------------------------------------------------------------------
"x": "Among other changes that make it easier to add new queries for massmails, we can use erb-style text substitutions in those emails",
"c": "This is in addition to some of the pre-defined macro substitutions that we make",
"u": "https://twitter.com/beeminfra/status/1057863251231305728",
"t": "2018-10-31"
}, { // ------------------------------------------------------------------------
"x": "made it so we can also query over the goals and send massmails to users that way, without duplicating the email for multiple goals per one user",
"u": ["https://twitter.com/beeminfra/status/1060385909625970688"]
}, { // ------------------------------------------------------------------------
"x": "Added error handling for an airhorn that was bugging us if you picked certain Fitbit goal types before actually authorizing Beeminder to read your Fitbit data.",
"u": ["https://twitter.com/beeminfra/status/1060386086046728193",
      "https://github.com/beeminder/beeminder/commit/0f4ea1863d667d3419e49d0027c6caabeda930c9"],
"c": "Weight or water goals, for some reason. UPDATE: not user-visible",
}, { // ------------------------------------------------------------------------
"x": "updated the regex in our deploy script that decides whether to bug you about your git state or not",
"t": "2018-11-21",
"d": "2018-08-30",
"u": ["https://twitter.com/beeminfra/status/1065485716816187392",
"https://github.com/beeminder/beeminder/commit/87d3a93e1f4e250a9158e5805d66bf09618052de"
]
}, { // ------------------------------------------------------------------------
"x": "show time of user's latest charge in the admin's timezone in the admin sidebar",
"u": ["https://github.com/beeminder/beeminder/commit/8a610a8f72de6fd8a4734e2dc0e225c5a916d1c7",
"https://twitter.com/beeminfra/status/1068054780969250817",
]
}, { // ------------------------------------------------------------------------
"x": "admins were getting a 500 error on a user's goal page where a latest charge was expected but not present. related to previous infra https://twitter.com/beeminfra/status/1068054780969250817",
"u": ["https://github.com/beeminder/beeminder/commit/0c761d06c9cb7be3108bd9379f4a4af92af51170",
"https://twitter.com/beeminfra/status/1070605475878588416",
]
}, { // ------------------------------------------------------------------------
"x": "Cleaned up unused routes and partials for an old precursor to the UVI changelog (http://changelog.beeminder.com/) which lived as a static html page.",
"d": "2018-12-12",
"u": ["https://github.com/beeminder/beeminder/commit/81f86a7f99b814b297d721d05ec73144407b88d5",
"https://github.com/beeminder/beeminder/commit/8fe4cb1a790649af29efccaa91d8e777a16a5187",
"https://twitter.com/beeminfra/status/1073122671871676420",
]
}, { // ------------------------------------------------------------------------
"x": "we piped the intentions (https://changelog.beeminder.com/#2851) that you give us at signup into our slack channel. now we see what you're thinking as you sign up.",
"u": "https://twitter.com/beeminfra/status/1075661394047987712"
}, { // ------------------------------------------------------------------------
"x": "added daily-active-users:monthly-active-users metrics for us. engage! :picard face:",
"u": ["https://github.com/beeminder/beeminder/commit/1a0635072f1a166d52c979a7875e4fb16a8f6713",
"https://twitter.com/beeminfra/status/1078194012375273472"
]
}, { // ------------------------------------------------------------------------
"x": "Refactoring our Toggl code in several places to DRY up the calls to their api.",
"u": ["https://twitter.com/beeminfra/status/1080708333416239104",
"https://github.com/beeminder/beeminder/commit/414131d14cb80dca9dbfcdb91347004829fdb799",
],
"t": "2019-01-02",
"d": "2018-10-22"
}, { // ------------------------------------------------------------------------
"x": "Added a convenience method for gathering payment info about goals. Also fixed an error in the massmailer for the yearly beemail query.",
"u": ["https://github.com/beeminder/beeminder/commit/89fab34ae3f62486b2e904d9f67e7cc3b1d35af0",
"https://github.com/beeminder/beeminder/commit/31eced111d5afa9e688dd3bf14eb4a77ce0e2454",
"https://twitter.com/beeminfra/status/1083230762650877953",
],
"t": "2019-01-09"
}, { // ------------------------------------------------------------------------
"x": "Clean up the URLs of referers and query strings before piping them into our slack channel for slightly less cruft cluttering up the intentions.",
"u": ["https://github.com/beeminder/beeminder/commit/9b7271829a5cd",
"https://github.com/beeminder/beeminder/commit/5efa7d40e90fa",
"https://twitter.com/beeminfra/status/1085812004873326592"],
"t": "2019-01-16",
"d": "2018-12-18"
}, { // ------------------------------------------------------------------------
"x": "moved our google analytics to google's tag manager",
"u": ["https://twitter.com/beeminfra/status/1088293364011683841",
"https://github.com/beeminder/beeminder/commit/6fb434fd986621ff74e882af462019bbec3e86ec",
"https://github.com/beeminder/beeminder/commit/690bc05b2ea09c53026c13e1dfe59bd34e91e988"
]
}, { // ------------------------------------------------------------------------
"x": "there's a snazzy script automatically comparing the outputs from the old python graphs & the new js graphs to easily flag differences between old & new",
"u": ["https://github.com/beeminder/beeminder/commit/29ab675530bb9a7",
"https://github.com/beeminder/beeminder/commit/a1b842283168f8b",
"https://twitter.com/beeminfra/status/1090940543297679361"]
}, { // ------------------------------------------------------------------------
"x": "We were accidentally registering for auto-data updates from withings for all of a user's new goals. It didn't mess up yr goals, but meant a lot of errors for us.",
"u": ["https://github.com/beeminder/beeminder/pull/460",
"https://twitter.com/beeminfra/status/1093426170194870272"]
}, { // ------------------------------------------------------------------------
"x": "Fixed a test of dashboard data entry that was broken and not testing quite the right thing anyhow.",
"u": ["https://github.com/beeminder/beeminder/commit/ef9ddde85ea5626e2c6cf1ec7776fd9e8cf8d4fa",
"https://twitter.com/beeminfra/status/1095969288416972800"],
"d": "2019-02-14"
}, { // ------------------------------------------------------------------------
"x": "Numerous updates to our README improving and updating instructions for setting up a dev environment. ht adamwolf ht dreev",
"u": ["https://github.com/beeminder/beeminder/commit/050572752ffd5c935ef41c148306f954b11f004e",
"https://github.com/beeminder/beeminder/commit/a2beedf4f19c466a630bd66923b874522b666df6",
"https://github.com/beeminder/beeminder/commit/4f68079a6de2bd16e15d86b3b9a36089e2b19632",
"https://twitter.com/beeminfra/status/1099219065501970433"],
"t": "2019-02-22"
}, { // ------------------------------------------------------------------------
"x": "adjusted some goal creation tests to work with new cc-in-goal-creation requirement, including adding a test for that final ask-for-cc step",
"u": ["https://github.com/beeminder/beeminder/commit/dda25843eb4874ece664669a0fefaa3768ebd511",
"https://twitter.com/beeminfra/status/1101774061577756672"],
"d": "2019-02-04",
"t": "2019-03-01",
}, { // ------------------------------------------------------------------------
"x": "Instructions in the readme for how to deploy changes to the js-based static road image generator.",
"u": ["https://twitter.com/beeminfra/status/1104265709364736000",
"https://github.com/beeminder/road/commit/57c2b4a391f18d159f456c3d3c64da55c7a49c69",]
}, { // ------------------------------------------------------------------------
"x": "Fixed intermittent auth errors from withings: tokens purportedly expire after 4 hours, but sometimes they seem to be expiring sooner.",
"c": "This wasn't really user visible -- mostly just spamming us with a bunch of alerts, but would recover and fetch user's data just fine before it started causing any problems that the user would notice.",
"u": ["https://github.com/beeminder/beeminder/commit/05d9f3a30c02428be2dee0f0e027c1e0d220c8c8",
"https://twitter.com/beeminfra/status/1106795770542383105"]
}, { // ------------------------------------------------------------------------
"x": "Fixed some mysterious test fails that were plaguing us after updating some js. Turns out the test engine can't handle es6 -- it's past time to update that.",
"u": ["https://github.com/beeminder/beeminder/commit/fbec9314c93bf66735c08d1b10d30f0b3755a7a9",
"https://twitter.com/beeminfra/status/1109333012213194752"],
"t": "2019-03-22"
}, { // ------------------------------------------------------------------------
"x": "Removed test bb files from beeminder repo (into their own test repo for test suite)",
"u": ["https://github.com/beeminder/beeminder/commit/4f7c84c0d63c4b9677211ff46bc580fad618f8b6",
"https://twitter.com/beeminfra/status/1111883651795439616"]
}, { // ------------------------------------------------------------------------
"x": "Added a rake task for initializing Beedroid client in dev environment for Android development",
"d": "2019-03-20",
"t": "2019-04-05",
"u": ["https://github.com/beeminder/beeminder/commit/8e7e9a1d53bcf77abdc21669f94fae0b92bebd63",
      "https://twitter.com/beeminfra/status/1114278247871553536"]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Silenced 3 airhorns; A sanity check in odometer restarts; and two intermittent / self-correcting autod things in Fitbit & in Withings",
"u": ["https://github.com/beeminder/beeminder/commit/c8b9ad99aaaf562c43766dcab81b31a765927223",
      "https://github.com/beeminder/beeminder/commit/70ba07f9a31ba307ec1d4ae42b73df1684773029",
      "https://github.com/beeminder/beeminder/commit/66bf9298815ef26176b749271eb99644ed097f85",
      "https://twitter.com/beeminfra/status/1116936982620278789"
],
"d": "2019-03-19",
"t": "2019-04-12"
}, { // ------------------------------------------------------------------------
"x": "Wait a beat before logging zapped customer. (Clears an unnecessary airhorn).",
"u": ["https://twitter.com/beeminfra/status/1119286296499740672",
      "https://github.com/beeminder/beeminder/commit/f65c667471d5993e29e90b71dafe789312ad5ec0"
     ],
"d": "2019-02-04",
"t": "2019-04-19"
}, { // ------------------------------------------------------------------------
"u": ["https://github.com/beeminder/beeminder/commit/10819fe85264c7812b6a5898df3b56e80453fe0d",
"https://twitter.com/beeminfra/status/1121997787187400704"],
"x": "Refactored internal names for 'fineprint' to match up with its external-facing name, cuz it was confusingly called 'usernotes' internally.",
"d": "2019-03-19",
"t": "2019-04-26"
}, { // ------------------------------------------------------------------------
"x": "Renamed the internal fields for admin notes on a user to the more concise 'dossier'. Helps clarify between multiple 'notes' fields about users & goals.",
"u": ["https://twitter.com/beeminfra/status/1124552163932327936",
"https://github.com/beeminder/beeminder/commit/f21e48888f5a8be46871a76e5b6b22b1721b16c1"],
"t": "2019-05-03",
"d": "2019-03-19"
}, { // ------------------------------------------------------------------------
"x": "svg fallbacks and reloading works for admins too, which is nice because we were getting lots of that when adminning folks' goals.",
"u": ["https://github.com/beeminder/beeminder/commit/ea345686f93a149b87c24ddba47ed78fa71e10bd",
"https://twitter.com/beeminfra/status/1127069573000286208"],
"d": "2019-04-16",
"t": "2019-05-10",
}, { // ------------------------------------------------------------------------
"x": "airhorn subscription upgrades and downgrades for the sake of sanity checking the slight changes to upgrade/downgrade behavior in https://changelog.beeminder.com/#3004",
"d": "2019-05-07",
"t": "2019-05-10",
"u": ["https://github.com/beeminder/beeminder/commit/f2bee60373ef36d69caf7674717c9c1e0dfe0235",
"https://twitter.com/beeminfra/status/1127069573000286208"]
}, { // ------------------------------------------------------------------------
"x": "2 vi-s for admins: added a reminder to goals with weekends off, and moved the runits in the goal form. Both are near the road now.",
"d": "2019-05-06",
"t": "2019-05-24",
"u": ["https://github.com/beeminder/beeminder/commit/8176120eb05da355f089c5858367b06a4b1ff787",
"https://twitter.com/beeminfra/status/1132159125662552064"]
}, { // ------------------------------------------------------------------------
"x": "Made test accounts for dronebee testing and only pretend charge them",
"t": "2019-05-31",
"d": "2019-05-02",
"u": ["https://github.com/beeminder/beeminder/commit/2942a7b2f965ad010ec5a348d5446531d80604d6",
"https://twitter.com/beeminfra/status/1134464696721915906"]
}, { // ------------------------------------------------------------------------
"x": "Rake task for anonymizing and dumping goal pledge, rate, completion & other info, For Science!",
"u": ["https://github.com/beeminder/beeminder/commit/0996723fb97c1082c888b7d68ae6ba103acfff8a",
      "https://github.com/beeminder/beeminder/commit/c9e25b3a904f61d014046ea18a1bcee19d9dfa0f",
"https://twitter.com/beeminfra/status/1137029442818125825"],
"d": "2019-05-29",
"t": "2019-06-07"
}, { // ------------------------------------------------------------------------
"x": "two very minor, unrelated code cleanup things; removing unused code from registration controller, making use of spaces consistent in user mailer.",
"u": ["https://github.com/beeminder/beeminder/commit/4c02190ffa65543e6e38f590e29b0795b0bfc27c",
"https://github.com/beeminder/beeminder/commit/660bef5841dad4bc087cdb41705a83109bb84e29",
"https://twitter.com/beeminfra/status/1139786958782136325"],
"d": "2019-05-15",
"t": "2019-06-14"
}, { // ------------------------------------------------------------------------
"x": "Added a test for a new version of hhmm formatting that we added to our time utils in https://changelog.beeminder.com/#3049",
"u": ["https://github.com/beeminder/beeminder/commit/745e709fe6074e71a9a2ef04051a09b18ff7d937",
"https://twitter.com/beeminfra/status/1142282362400595968"],
"t": "2019-06-21",
"d": "2019-06-07"
}, { // ------------------------------------------------------------------------
"x": "Updated tests to keep abreast of changes to the \"Pledge your money\" part of new goal creation",
"u": ["https://github.com/beeminder/beeminder/commit/9cb7e6f9fa64c0d54c6369cc0968a6a175aacdf2",
"https://github.com/beeminder/beeminder/commit/d40b39122ed2dd0b520e8c2ec769fb85b6e77227",
"https://github.com/beeminder/beeminder/commit/6130153761be9cf2037620e4f8b7f6bdd89c64af",
"https://github.com/beeminder/beeminder/commit/c6f816159ac9c57bfcd794fe74d4ed3e761c3213",
"https://twitter.com/beeminfra/status/1144828184724041728"
],
"d": "2019-06-25",
"t": "2019-06-28"
}, { // ------------------------------------------------------------------------
"x": "refactoring of pledge schedule, parameterizing all the min pledge, max pledge, etc, so that we can swap in different schedules to try out.",
"u": ["https://twitter.com/beeminfra/status/1147351139345502208",
],
"d": "2019-07-04",
"t": "2019-07-05"
}, { // ------------------------------------------------------------------------
"x": "Some utility functions for calculating subscription amounts, frequency multipliers, and for getting the nominal amount back based on the charged amount",
"t": "2019-07-31",
"d": "2019-07-26",
"u": ["https://github.com/beeminder/beeminder/commit/59052e43f2ba841112021efb6d4071c57bbb00f4",
"https://twitter.com/beeminfra/status/1156790284807598081"]
}, { // ------------------------------------------------------------------------
"x": "added additional logging info and error handling to help debug a persistent rescuetime error",
"d": "2019-08-07",
"t": "2019-08-07",
"u": ["https://github.com/beeminder/beeminder/pull/651"]
}, { // ------------------------------------------------------------------------
"x": "killed several unused airhorns (deadman, accounts error, and an unsubscribe)",
"d": "2019-08-07",
"t": "2019-08-07",
"u": ["https://github.com/beeminder/beeminder/pull/719"]
}, { // ------------------------------------------------------------------------
"x": "Wrote tests for reminder and zeno text for the sms and email bots (and refactored code to move them to a common location).",
"u": ["https://github.com/beeminder/beeminder/commit/d50ba57a3b0aa967fd0e90dc1a517c0cc7e2cc5e",
"https://github.com/beeminder/beeminder/commit/d29dd9b1d1559c8f689aed685f9146435af4cbbb",
"https://github.com/beeminder/beeminder/commit/ca5e5da87093d9c74bafe5d464e7bad858700e17"],
"t": "2019-08-19"
}, { // ------------------------------------------------------------------------
"x": "fixed an issue in capybara config that was causing circular dependency errors in tests.",
"u": ["https://github.com/beeminder/beeminder/pull/743/commits/76c5282d10b339da34b19387f144431bdcde959c",
"https://twitter.com/beeminfra/status/1166943405416407041"],
"t": "2019-08-28"
}, { // ------------------------------------------------------------------------
"x": "Added tests for amount of initial safety buffer at goal creation for weight loss, do more, & do less goals",
"u": ["https://github.com/beeminder/beeminder/pull/743/commits/76c5282d10b339da34b19387f144431bdcde959c",
"https://twitter.com/beeminfra/status/1166943513306521600"
],
"t": "2019-08-28"}, 
{ // ------------------------------------------------------------------------
"x": "Added tests for pledge caps and for increasing pledges (a Beemium perk) and decreasing pledges on the goal page.",
"u": ["https://github.com/beeminder/beeminder/pull/738/commits/9759d6487f77c271a7a4bce92b0be3ac233a4f93",
"https://twitter.com/beeminfra/status/1172033826618372098"]
}, { // ------------------------------------------------------------------------
"x": "Made it slightly easier for new devs to get their development environment up and running by checking in the jsnonce dir (for beebrain outputs)",
"u": ["https://github.com/beeminder/beeminder/pull/759",
"https://twitter.com/beeminfra/status/1174531837852450816"]
}, { // ------------------------------------------------------------------------
"x": "Moved the 'delete goal' button in the admin interface harder to accidentally click by separating it from other UI elements",
"u": ["https://github.com/beeminder/beeminder/pull/805",
"https://twitter.com/beeminfra/status/1177039299113472001"]
}, { // ------------------------------------------------------------------------
"x": "Added tests for the new behavior in api datapoints endpoint. Verify that nothing changes if new parameters aren't sent in, and sanity check new params.",
"u": ["https://github.com/beeminder/beeminder/commit/ffd9ee2a1499d59403b3bf3e9aec30cfc0b6e274","https://twitter.com/beeminfra/status/1179648613930037248"]
}, { // ------------------------------------------------------------------------
"x": "Automon! Fancy automated continuous testing for Beebrain using a suite of test goals. Does pixel diffs of the graphs and everything. Uluc is amazing.",
"u": ["https://github.com/beeminder/road/tree/master/automon", "https://twitter.com/beeminfra/status/1182268709361971201"],
}, { // ------------------------------------------------------------------------
"x": "A little refactor of variable names in the code that adds PPRs, to make things more clear.",
"u": ["https://github.com/beeminder/beeminder/commit/3d4ba74fcbebd2ff70a2bcb3ee034a754d5799e8", "https://twitter.com/beeminfra/status/1184610348394876929"]
}, { // ------------------------------------------------------------------------
"x": "don't load braintree's api in the test environment because it is slowing down tests unecessarily to make this many POSTs to them.",
"u": ["https://github.com/beeminder/beeminder/commit/279f7f997b30ff00128ef3bf17acf723f5400f68",
"https://twitter.com/beeminfra/status/1187165406642835456"]
}, { // ------------------------------------------------------------------------
"x": "Add the resque test worker to bee.sh startup scripts.",
"u": ["https://github.com/beeminder/beeminder/pull/876",
"https://twitter.com/beeminfra/status/1189746865345925120"]
}, { // ------------------------------------------------------------------------
"x": "Include the amount of a pending charge in the admin sidebar (plus a nicer helper for displaying it).",
"u": ["https://github.com/beeminder/beeminder/pull/880",
"https://twitter.com/beeminfra/status/1192212549699137536"]
}, { // ------------------------------------------------------------------------
"x": "added a little extra info and a link to archived goals for admins on a user's gallery page",
"u": ["https://github.com/beeminder/beeminder/commit/652e9e51a4ef9a69e11acc4c2caf591da336bbd7",
"https://twitter.com/beeminfra/status/1194764303296913408"]
}, { // ------------------------------------------------------------------------
"x": "Tests for CORS policy, and for millisecond datapoint timestamps.",
"u": ["https://github.com/beeminder/beeminder/commit/241080be92b515a9492b7d06f4d5c1edb035069c",
"https://github.com/beeminder/beeminder/commit/494ed4d00e941ca7a982d288dd512a7266c35cb4",
"https://twitter.com/beeminfra/status/1197284194390380545"]
}, { // ------------------------------------------------------------------------
"x": "Updated test expectations (i.e. in mailer/alert tests) because goals are now integery by default (yay!).",
"u": ["https://github.com/beeminder/beeminder/commit/86eb8c453b6919cacfa9cb63818cad2d7b355bcb",
     "https://twitter.com/beeminfra/status/1199822029559484416"]
}, { // ------------------------------------------------------------------------
"x": "conservaround refactoring: renamed and added some helper methods and we compute hardcap/buffer ourselves instead of parsing out of a string from beebrain.",
"u": ["https://github.com/beeminder/beeminder/commit/8b19f04b94127fc82a3db2bfa161320808bfe647", "https://github.com/beeminder/beeminder/commit/59ab9c44ea2c5381374462f7e7f5d5d493725a66",
"https://github.com/beeminder/beeminder/commit/36059d6536b9a2b18d4ce9a7b314a9901be5a9c0",
"https://twitter.com/beeminfra/status/1202316200862027776"],
"c": "yes, we tweeted some similar things as UVIs "
}, { // ------------------------------------------------------------------------
"x": "Our continuous testing tool for Beebrain, (we call it automon, pronounced \"ottoman\" because Turks), improves; fewer false positives on image diffs, etc.",
"u": ["https://twitter.com/beeminfra/status/1204894311009009665"]
}, { // ------------------------------------------------------------------------
"x": "Added rake tasks for database migrations for Gmailzero label changes.",
"c": "And used them too.. trying to be more responsible about leaving a paper trail for this kind of thing!",
"u": ["https://github.com/beeminder/beeminder/pull/980",
"https://github.com/beeminder/beeminder/commit/b0c4b3a063dc6083202f6bb8ec39fc246e804bfa",
"https://github.com/beeminder/beeminder/commit/477658f0300b4b915e846679ae75c08cb32955ef",
"https://twitter.com/beeminfra/status/1207427368878428161"]
}, { // ------------------------------------------------------------------------
"x": "Better error handling / info collection in the Gmailzero integration.",
"u": ["https://github.com/beeminder/beeminder/commit/4816713c5458f6a7ab989657fc7b1b0452ebd12f",
"https://github.com/beeminder/beeminder/commit/50fc632e0ec633dc8a06f88e65d296945b1a9d7b","https://twitter.com/beeminfra/status/1209964873645314048"]
}, { // ------------------------------------------------------------------------
"x": "Added tests for 4 platonic goal types with updated safety summary method added to goals.",
"u": ["https://github.com/beeminder/beeminder/pull/953/commits","https://twitter.com/beeminfra/status/1212461506534633472"]
}, { // ------------------------------------------------------------------------
"x": "Added a bunch of defensive programing and diagnostics to gmailzero.",
"u": ["https://github.com/beeminder/beeminder/commit/b6330ad3f3083a9c5c6959cf73a90289679c3a52","https://twitter.com/beeminfra/status/1214986468738785280"]
}, { // ------------------------------------------------------------------------
"x": "added user's intention statement (from signup) to admin bar",
"u": ["https://github.com/beeminder/beeminder/pull/1029","https://twitter.com/beeminfra/status/1217595337860210688"]
}, { // ------------------------------------------------------------------------
"x": "exclude testing & meta accounts from possible dogfooding recipients",
"u": ["https://github.com/beeminder/beeminder/pull/1051","https://twitter.com/beeminfra/status/1220129930010226688"],
}, { // ------------------------------------------------------------------------
"x": "We set up @honeycombio and oh my goodness is it the bees' knees",
"u": ["https://github.com/beeminder/beeminder/pull/1067",
      "https://twitter.com/beeminfra/status/1222683463691599872"],
}, { // ------------------------------------------------------------------------
"x": "background task for emailing noisy-road folks and updating their goals to have a fixed width (per blog.beeminder.com/manwide)",
"u": ["https://github.com/beeminder/beeminder/pull/1077",
"https://twitter.com/beeminfra/status/1225195544416415744"],
}, { // ------------------------------------------------------------------------
"x": "Tuned the settings for our background workers to allow them to use more memory (because we were getting a lot of squished jobs for over-running their limits).",
"u": "https://twitter.com/beeminfra/status/1227746970157998081"
}, { // ------------------------------------------------------------------------
"x": "Made a simple rake task to check the depth of our resque queues so we can do things like keep an eye on depths over time, alert ourselves, etc",
"u": ["https://twitter.com/beeminfra/status/1230285710868877312",
"https://github.com/beeminder/beeminder/commit/74ad112a4977e1ac7594d8ac4fb440b14dfdb673"]
}, { // ------------------------------------------------------------------------
"x": "robusted up the stats page so that we don't 500 on ourselves the next time a beeminder builder archives their beehours goal and then we can't find it.",
"u": ["https://github.com/beeminder/beeminder/pull/1120","https://twitter.com/beeminfra/status/1232807574057017345"]
}, { // ------------------------------------------------------------------------
"x": "Refactored our user mailing jobs to use resque like our other mailer.",
"u": ["https://twitter.com/beeminfra/status/1235348953438265344",
"https://github.com/beeminder/beeminder/pull/1130"]
}, { // ------------------------------------------------------------------------
"x": "Found and removed a special case in the development environment that was causing confusion: all users had some subscription perks automatically",
"u": ["https://github.com/beeminder/beeminder/commit/bd6122cc862206306cf9b24d26514e8113d84c19",
"https://twitter.com/beeminfra/status/1237851631514836992"],
"c": "this was probably a thing that someone did when they were working on developing something related to those perks and they probably just shouldn't have committed it"
}, { // ------------------------------------------------------------------------
"x": "Refactoring views for the Premium page. It's more manageable and less a pokey nest of html and ruby templating now.",
"d": "2020-03-16",
"t": "2020-03-18",
"u": ["https://github.com/beeminder/beeminder/pull/1161/commits",
"https://twitter.com/beeminfra/status/1240418921984868352"]
}, { // ------------------------------------------------------------------------
"x": "Added meta-info to charges in Stripe and Paypal for tighter association between an individual payment and the Beeminder event that triggered it.",
"u": ["https://github.com/beeminder/beeminder/pull/1124",
"https://twitter.com/beeminfra/status/1242890982959378432"
],
"d": "2020-02-21",
"t": "2020-03-25",
"c": "hoping this will help track down / identify a bug with double charging. but also it's a good idea anyway."
}, { // ------------------------------------------------------------------------
"x": "upgraded rails! (and myriad other libraries and things as well in the process of upgrading our install scripts and infrastructure)",
"u": ["https://github.com/beeminder/beeminder/pull/856",
"https://twitter.com/beeminfra/status/1245490354419204097"],
"d": "2020-03-27",
"t": "2020-04-01"
}, { // ------------------------------------------------------------------------
"x": "Added a load balancer so we can reboot web servers willy nilly and you'll never know!",
"u": ["https://twitter.com/beeminfra/status/1248033580325855232"],
"d": "2020-03-27",
"t": "2020-04-08",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug we had introduced into our deploy script -- quit the deploy if tests fail!",
"t": "2020-04-15",
"d": "2020-04-15",
"u": ["https://github.com/beeminder/beeminder/pull/1256",
"https://twitter.com/beeminfra/status/1250566474076307456"]
}, { // ------------------------------------------------------------------------
"x": "gissue templates! for Proper Bug Reports, and feature requests",
"d": "2020-04-14",
"t": "2020-04-22",
"u": ["https://github.com/beeminder/beeminder/commit/5ddbaf4062edd73598562d7572e9bc684831693f",
"https://github.com/beeminder/beeminder/commit/73c82ac356fa74bfa77eb55264e3bcac84cea227",
"https://twitter.com/beeminfra/status/1253074585655717890"]
}, { // ------------------------------------------------------------------------
"x": "Finally made a tidy script for pulling & collating translogs from multiple servers. Debugging me is so happy.",
"d": "2020-04-24",
"t": "2020-04-29",
"u": ["https://github.com/beeminder/beeminder/commit/aa723e50e07a3ca293a86609640f354f5f2263b2",
"https://twitter.com/beeminfra/status/1255608875388035072"
]
}, { // ------------------------------------------------------------------------
"x": "Trialling TrackJs for tracking js errors on Beeminder -- and hopefully helping us track down repro steps for a specific Heisenbug (initVal errors)",
"u": [
"https://github.com/beeminder/beeminder/pull/1298",
"https://twitter.com/beeminfra/status/1258172262085099521"]
}, { // ------------------------------------------------------------------------
"x": "Added tracking to our @trackjs config around goal creation to help track down an unpredictable and long-standing bug with the browser's localstorage",
"u": ["https://github.com/beeminder/beeminder/pull/1309",
      "https://twitter.com/beeminfra/status/1260719383548006401"
],
"t": "2020-05-13",
"d": "2020-04-29"
}, { // ------------------------------------------------------------------------
"x": "Fixed a silent error from trying to load gmail labels for ppl with no gmail goals. Not UVI, but it is nice to not spew errors into the browser console. #trackjs",
"u": ["https://github.com/beeminder/beeminder/pull/1310",
"https://twitter.com/beeminfra/status/1263231970584039430"]
}, { // ------------------------------------------------------------------------
"x": "added a new rough metric 'squeaks' to track how often each user needs admin intervention",
"u": ["https://github.com/beeminder/beeminder/pull/1329",
"https://twitter.com/beeminfra/status/1265779917951623168"]
}, { // ------------------------------------------------------------------------
"x": "added an alert to admins that they're seeing this juicy error page *because* they are an admin if oauth errors happen.",
"u": ["https://github.com/beeminder/beeminder/pull/1399",
"https://twitter.com/beeminfra/status/1268313977924096000"
]
}, { // ------------------------------------------------------------------------
"x": "Noticed that we were including multiple different versions of bootstrap libraries and cleaned that up so there is only one.",
"u": ["https://github.com/beeminder/beeminder/pull/1378",
"https://github.com/beeminder/beeminder/pull/1386",
     "https://twitter.com/beeminfra/status/1270797808249892864"]
}, { // ------------------------------------------------------------------------
"x": "Show iOS tokens in the admin interface for adminning purposes.",
"u": ["https://github.com/beeminder/beeminder/pull/1396",
"https://twitter.com/beeminfra/status/1273378074852069376"],
"t": "2020-06-17",
"d": "2020-05-27"
}, { // ------------------------------------------------------------------------
"x": "Deployed a new worker machine and got rid of the old underpowered one. also added our own loadbalancer so we can get logs for some periodic 503s.",
"u": ["https://twitter.com/beeminfra/status/1275933875181481984"],
"t": "2020-06-24",
"d": "~2020-04-04"
}, { // ------------------------------------------------------------------------
"x": "Include the hostname in airhorns so we can see if problems are specific to a particular machine or general",
"u": ["https://github.com/beeminder/beeminder/pull/1423",
"https://twitter.com/beeminfra/status/1278383938793172992"
],
"t": "2020-07-01",
"d": "2020-06-05"
}, { // ------------------------------------------------------------------------
"x": "Refactored airhorns to, essentially, include a loglevel (i.e. debug vs OMG)",
"u": ["https://twitter.com/beeminfra/status/1280994947081007107",
      "https://github.com/beeminder/beeminder/issues/1465"]
}, { // ------------------------------------------------------------------------
"x": "refactoring in safesum to make helper functions, rename some variables for clarity, that kind of thing.",
"u": ["https://github.com/beeminder/beeminder/pull/1439",
"https://github.com/beeminder/beeminder/pull/1494",
"https://twitter.com/beeminfra/status/1283532598514348032"],
"t": "2020-07-15",
"d": "2020-07-08"
}, { // ------------------------------------------------------------------------
"x": "Wrote tests for a timezone issue with goal starts and deadlines and initial datapoints. Testing timezones is funtimes!",
"u": ["https://github.com/beeminder/beeminder/commit/8b0d576ba7f901e15aabddbc8c8e7d8abfc98bd5",
"https://twitter.com/beeminfra/status/1286070909858545665"],
"d": "2020-06-10",
"t": "2020-07-22",
}, { // ------------------------------------------------------------------------
"x": "Updates to the specs as a result of the ybhp switchover (default amounts of buffer changed and stuff).",
"u": ["https://github.com/beeminder/beeminder/commit/213dc3591f3a9c04f764fe1ef2a70bd56558cc8f",
"https://twitter.com/beeminfra/status/1288622928678891520"],
"d": "2020-05",
"t": "2020-07-29"
}, { // ------------------------------------------------------------------------
"x": "Updated a script that collects goal information for science to optionally include anonymized datapoints.",
"u": ["https://github.com/beeminder/beeminder/commit/dc0e846ecfbfc1b14d9d73dbe5f0871dfc64e842",
"https://twitter.com/beeminfra/status/1291142261057568769"],
"d": "2020-05",
"t": "2020-08-05"
}, { // ------------------------------------------------------------------------
"x": "full translogs are finally available to admins again (and not just programmers)",
"u": ["https://github.com/beeminder/beeminder/pull/1574",
"https://twitter.com/beeminfra/status/1291142431476314112"],
"d": "2020-07-30",
"t": "2020-08-05"
}, { // ------------------------------------------------------------------------
"x": "Made a handy sidebar widget for our helpscout inbox that gives useful reference info about the user, pulled from the beeminder api.",
"u": ["https://github.com/beeminder/beeminder/pull/1594",
"https://twitter.com/beeminfra/status/1291142605435068417"],
"t": "2020-08-05",
"d": "2020-08-05"
}, { // ------------------------------------------------------------------------
"x": "Get refunds into our transaction log & include them in the sums for derev meta graph. Also stop double counting subscriptions in the same.",
"d": "2020-06-26",
"t": "2020-08-26",
"u": ["https://github.com/beeminder/beeminder/pull/1478",
"https://twitter.com/beeminfra/status/1298756974952108032",
"https://github.com/beeminder/beeminder/commit/6f2ade9662be4410e1f1e35660027860f464a4c0"]
}, { // ------------------------------------------------------------------------
"x": "Restructured how we do iOS token cleanup from push notifications, and removed a cronned cleanup job.",
"u": ["https://twitter.com/beeminfra/status/1301293060127559681",
      "https://github.com/beeminder/beeminder/pull/1488"]
}, { // ------------------------------------------------------------------------
"x": "Our garmin integration was still using an older api URL. We updated it use the new one, before the old one got turned off.",
"u": ["https://github.com/beeminder/beeminder/issues/1586", 
"https://twitter.com/beeminfra/status/1303830898874310656"
],
"c": "often these things wind up going on the UVI changelog becuase we wait until it actually breaks to make the change. eep."
}, { // ------------------------------------------------------------------------
"x": "Improved the premium summary info included in our Helpscout widget for workerbees.",
"u": ["https://github.com/beeminder/beeminder/pull/1616",
"https://twitter.com/beeminfra/status/1306378755779080192"],
"t": "2020-09-16",
"d": "2020-08-19"
}, { // ------------------------------------------------------------------------
"x": "An upgrade to FactoryBot from a while back broke at least one of our tests by a change in build vs create behavior. Use build instead and all is good now.",
"u": ["https://twitter.com/beeminfra/status/1308915313313017856",
"https://github.com/beeminder/beeminder/pull/1677"]
}, { // ------------------------------------------------------------------------
"x": "The Strava gem we use was pulled from RubyGem, so point the Gemfile at the git repo for backwards compatibility.",
"u": ["https://twitter.com/beeminfra/status/1311454474066567168",
      "https://github.com/beeminder/beeminder/pull/1653"]
}, { // ------------------------------------------------------------------------
"x": "Improve how we wait for graphs to generate in tests (when we have to wait for them)",
"u": ["https://twitter.com/beeminfra/status/1313981358176260096",
"https://github.com/beeminder/beeminder/pull/1678",
"https://github.com/beeminder/beeminder/pull/1705",
"https://github.com/beeminder/beeminder/pull/1733"],
"d": "2020-09-24",
"t": "2020-10-07"
}, { // ------------------------------------------------------------------------
"x": "Much refactoring of the retroratchet code, cleaning up some old kludges with the safety param that's passed in, etc, as part of all the ratchet UVIs",
"u": ["https://github.com/beeminder/beeminder/pull/1635",
      "https://twitter.com/beeminfra/status/1316511104449748993",
     ]
}, { // ------------------------------------------------------------------------
"x": "a couple fixes in our fb tracking code initialization, including not initializing in the test env.",
"u": ["https://github.com/beeminder/beeminder/pull/1633",
"https://twitter.com/beeminfra/status/1319057021677654021"],
"t": "2020-10-21"
}, { // ------------------------------------------------------------------------
"x": "removed param 'sadbrink' from the codebase. It was a gross hacky fix for a thing that's now moot! (still cleaning up from red-yesterday changes > 1 year ago :\)",
"u": ["https://github.com/beeminder/beeminder/issues/1270",
"https://twitter.com/beeminfra/status/1321587754799525888"],
"t": "2020-10-27"
}, { // ------------------------------------------------------------------------
"x": "updated our github authentication (use header instead of access token param) because they're going to deprecate the old way this year",
"u": ["https://github.com/beeminder/beeminder/pull/1617",
"https://twitter.com/beeminfra/status/1324154011176456195"],
"t": "2020-11-04",
}, { // ------------------------------------------------------------------------
"x": "Dramatic improvement to our automated testing (aka Quals) by upgrading from phantomjs to ChromeDriver, and VCR utility to mock 3rd party service calls",
"u": ["https://github.com/beeminder/beeminder/pull/1403",
"https://github.com/beeminder/beeminder/pull/1832",
"https://twitter.com/beeminfra/status/1326618558109949952"],
"t": "2020-11-11"
}, { // ------------------------------------------------------------------------
"x": "More code cleanup: removed lingering instances of exprd in road utils, removed references to lnw from ratchet algorithms, and other TODOS & deletions.",
"u": ["https://twitter.com/beeminfra/status/1329211477719359488",
"https://github.com/beeminder/beeminder/pull/1640/commits/ef7242e71be446af3b8d677f00355c46206bafa9",
"https://github.com/beeminder/beeminder/pull/1640/commits/291580b8e54e9a67ee3f89585941640d59695bf0",
]
}, { // ------------------------------------------------------------------------
"x": "Dockerized our dev environment so that it's basically trivial to set up and start developing on a new machine. thanks @adamwolf",
"u": ["https://twitter.com/beeminfra/status/1331752909835444226",
"https://github.com/beeminder/beeminder/pull/1657"],
"t": "2020-11-25",
}, { // ------------------------------------------------------------------------
"x": "We now have a script that takes the beeminder.com DNS configuration from AWS DNS and keeps all our short domains (e.g. bmndr.com) in sync.",
"u": ["https://github.com/beeminder/beeminder/issues/89", "https://twitter.com/beeminfra/status/1334295203130195969"],
"t": "2020-12-02"
}, { // ------------------------------------------------------------------------
"x": "Added useful info to honeycomb's trace of GraphJobs so we can keep an eye on graph regeneration / queue latency. @honeycombio <3 ",
"u": ["https://github.com/beeminder/beeminder/pull/1962",
"https://twitter.com/beeminfra/status/1336829865597648896"],
"t": "2020-12-09"
}, { // ------------------------------------------------------------------------
"x": "More docker work to dockerize our deploys and to clean up env variables and other things with jsbrain & the README",
"u": ["https://github.com/beeminder/beeminder/pull/1682",
"https://github.com/beeminder/beeminder/pull/1749",
"https://github.com/beeminder/beeminder/pull/1762",
"https://twitter.com/beeminfra/status/1336829987400216576"],
"t": "2020-12-09"
}, { // ------------------------------------------------------------------------
"x": "Don't do the dogfood winner selection for $0 dogfoodie derails. It's silly because it's a no-op, and doing so was making extra accounting work.",
"u": ["https://github.com/beeminder/beeminder/pull/1622",
"https://twitter.com/beeminfra/status/1341874431216381955"],
"t": "2020-12-23"
}, { // ------------------------------------------------------------------------
"x": "Internally fixed all instances of 'retroratchet' to 'ratchet'.",
"d": "2020-09-24",
"t": "2020-12-30",
"u": [
"https://twitter.com/beeminfra/status/1344441982790238209",
"https://github.com/beeminder/beeminder/pull/1640",
"https://github.com/beeminder/beeminder/pull/1640/commits/431eeadffbc3f97af688c04f61074823962a424d"]
}, { // ------------------------------------------------------------------------
"x": "Glorious, glorious shredding of code focused around switching between original and trial pledge schedule during goal creation.",
"u": ["https://github.com/beeminder/beeminder/pull/2017",
"https://twitter.com/beeminfra/status/1346954344579489793"],
"d": "2020-12-30",
"t": "2021-01-06",
}, { // ------------------------------------------------------------------------
x: "We were falsely alerting 'too many commits' in gitminder every time we got a non-200 response error. Skip the log when it's a 200-error response.",
u: ["https://github.com/beeminder/beeminder/pull/1981",
"https://twitter.com/beeminfra/status/1349505784640520193"],
"t": "2021-01-13",
"d": "2020-12-09",
}, { // ------------------------------------------------------------------------
"x": "Backend cleanup of abslnw and ybhp params from beebody code and removed from graph generation (so beebrain no longer has to ignore them).",
"u": ["https://github.com/beeminder/beeminder/pull/1996",
      "https://twitter.com/beeminfra/status/1352038831663443968"],
"t": "2021-01-20",
"d": "2020-12-18"
}, { // ------------------------------------------------------------------------
"x": "Started collecting more internal metrics about site and worker performance, plus useful info added to GraphJob honeycomb traces.",
"u": ["https://twitter.com/beeminfra/status/1354567559673126913",
"https://github.com/beeminder/beeminder/pull/1962",
"https://github.com/beeminder/beeminder/pull/1990"]
}, { // ------------------------------------------------------------------------
x: "We were failing to log our own error because of a missing local variable in the GmailZero setup jobs.",
u: ["https://github.com/beeminder/beeminder/pull/2046",
"https://twitter.com/beeminfra/status/1357123122760011776"]
}, { // ------------------------------------------------------------------------
x: "Updated our Stripe gem, and updated the Stripe api version we are targeting via api headers.",
"u": ["https://github.com/beeminder/beeminder/pull/2077",
"https://twitter.com/beeminfra/status/1359643791326547969"],
"t": "2021-02-10",
"d": "2021-01-22"
}, { // ------------------------------------------------------------------------
"x": "A couple updates to the admin interface: bugfix with the user's \"x goals remaining\" count, and added the PPR setting.",
"u": ["https://github.com/beeminder/beeminder/issues/2079",
"https://github.com/beeminder/beeminder/pull/2088",
"https://twitter.com/beeminfra/status/1362189553344241665"],
"t": "2021-02-17",
"d": "2021-01-25",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ----------------------------------------------------------- end batch */ ]

var staged = [ { // note: sub-entries not allowed here in staging
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]

/*
METASTAGED: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
https://github.com/beeminder/beeminder/commit/

}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------


## NEED HELP FROM ADAM:
* massive improvements to our ansible deployment scripts so that we can now spin up a new web server from scratch in about an hour 
* including adding some sexy test suite thingie into the mix with ansible [help?]
* a bunch of work to get honeycomb into our background workers so we can monitor stuff there too [did this actually resolve to a positive end?]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO:
don't make title required and then do javascript contortions to deal with it
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
GitHub APP [23:19]
`af940150` - use type attr on object as well
`c44cdf36` - load png last
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
*/
