// Awaiting proglogs generalization...

batches['2011feb'] = [{
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
"x": "A bunch more updates to the admin interface: rearranged a few things, updated the spacing between sections, simplified some things with the include statement.",
"u": ["https://twitter.com/beeminfra/status/1364681582976536576"]
}, { // ------------------------------------------------------------------------
"x": "Even better: made the admin interface accessible from a user's gallery page, not just goal page, so we don't have awkwardness with users w/no goals left.",
"u": ["https://twitter.com/beeminfra/status/1364681633891196928"]
}, { // ------------------------------------------------------------------------
"x": "removed an old unused controller and redundant routes associated with it (that now just redirect to the correct/new place)",
"u": ["https://twitter.com/beeminfra/status/1369814931017588737",
"https://github.com/beeminder/beeminder/pull/2109"],
"d": "2021-02-12",
"t": "2021-03-10"
}, { // ------------------------------------------------------------------------
"x": "We've been getting warnings in our test env that ActiveMailer has deprecated #deliver and we should be using deliver_now instead. Done.",
"u": ["https://github.com/beeminder/beeminder/pull/2152",
"https://twitter.com/beeminfra/status/1372336559547056128"]
}, { // ------------------------------------------------------------------------
"x": "Refactored the dashboard goal sorting javascript into its own module.",
"u": ["https://twitter.com/beeminfra/status/1374822865481125896",
"https://github.com/beeminder/beeminder/pull/2153"],
"d": "2021-03-22",
"t": "2021-03-24",
}, { // ------------------------------------------------------------------------
"x": "Fixed a problem that made deploys fail if the resque monitor wasn't already up and monitoring.",
"u": ["https://twitter.com/beeminfra/status/1377382129391165440",
"https://github.com/beeminder/beeminder/pull/2155"],
"d": "2021-03-19",
"t": "2021-03-31"
}, { // ------------------------------------------------------------------------
"x": "Wrote tests covering the ratchet bugs I fixed in UVI #3707 and #3708 so we won't unknowingly re-break it in the future (in that same exact way...)",
"u": ["https://github.com/beeminder/beeminder/commit/7752fe1cac59ff106d0dc14fbaa81ff36f496ae4",
"https://twitter.com/beeminfra/status/1379658978888609792"],
"d": "2021-04-01",
"t": "2021-04-06"
}, { // ------------------------------------------------------------------------
"x": "Updated some gems (mimemagic & capistrano-passenger) and turned up resque logging for diagnostic purposes.",
"u": ["https://twitter.com/beeminfra/status/1382457274891788291",
"https://github.com/beeminder/beeminder/pull/2200",
"https://github.com/beeminder/beeminder/pull/2195",
"https://github.com/beeminder/beeminder/pull/2181",
"https://github.com/beeminder/beeminder/pull/2213"],
"d": "2020-04-12",
"t": "2020-04-14",
}, { // ------------------------------------------------------------------------
"x": "Allow admins to give negative credit (mostly this is important for being able to fix mistakes)",
"u": ["https://github.com/beeminder/beeminder/pull/2236",
"https://twitter.com/beeminfra/status/1385001214585171977"],
"d": "2021-04-21",
"t": "2021-04-21"
}, { // ------------------------------------------------------------------------
"x": "Redecorating in the admin interfaces; regrouped some goal fields to make more sense, and added last active date ",
"u": ["https://github.com/beeminder/beeminder/pull/2237",
"https://twitter.com/beeminfra/status/1387551794679619584"],
"d": "2021-04-21",
}, { // ------------------------------------------------------------------------
"x": "We can now deploy test web servers and test worker servers on our machines with an ansible script",
"u": ["https://github.com/beeminder/beeploy/pull/25",
"https://twitter.com/beeminfra/status/1390088649803399168"],
"d": "2021-04-08",
"t": "2021-05-05",
"c": "we could a little bit do this before, but now it is fully automated push a button and voila"
}, { // ------------------------------------------------------------------------
"x": "Fixed up how we're using Let's Encrypt so that updating our SSL certificates is much less manual than before.",
"t": "2021-05-12",
"u": ["https://twitter.com/beeminfra/status/1392626604770168832"]
}, { // ------------------------------------------------------------------------
"x": "Deploying to our test web servers and test worker servers is similar to deploying to production now",
"u": ["https://twitter.com/beeminfra/status/1395148665002422275"],
"t": "2021-05-19"
}, { // ------------------------------------------------------------------------
"x": "Did a super satisfying spring cleaning of unused/unreferenced strings from our locales, and moved master copy back into the repo.",
"u": ["https://twitter.com/beeminfra/status/1397665524276891648",
"https://github.com/beeminder/beeminder/pull/2287"],
"d": "2021-05-11",
"t": "2021-05-26",
"c": "this was updates in stringles, and removing the padm.us pad from the equation. github lets a normal human edit text files pretty handily now, so no real advantage to having the master copy live in padm.us"
}, { // ------------------------------------------------------------------------
"x": "Did somesome nice refactoring of the lame-captcha code so it's DRY and easy to swap out new 'captcha' riddles or whatever.",
"u": ["https://twitter.com/beeminfra/status/1400226330831032323",
"https://github.com/beeminder/beeminder/pull/2318",
],
"t": "2021-06-02",
"d": "2021-05-25"
}, { // ------------------------------------------------------------------------
"x": "Github deprecated sending tokens in the URL params. We changed our integration code a while back, but we missed a spot in OAuth, and so now that's all ready too.",
"u": ["https://github.com/beeminder/beeminder/pull/228",
"https://twitter.com/beeminfra/status/1402768749346783234"]
}, { // ------------------------------------------------------------------------
"x": "Added more honeycomb hooks into graph & refresh jobs so we can get a handle on how long things wait on a worker etc etc.",
"u": ["https://github.com/beeminder/beeminder/pull/2271",
"https://twitter.com/beeminfra/status/1405258040639508480"],
"t": "2021-06-16"
}, { // ------------------------------------------------------------------------
"x": "Found some bad response codes in a few of our private api methods, which could lead to a 500 error, not, e.g. 422 if those requests went south.",
"u": ["https://github.com/beeminder/beeminder/pull/2329",
"https://twitter.com/beeminfra/status/1407788807584305155"],
"c": ":unacceptable is not a legit rails HTTP status code; but since the tagging interface is ajaxy, the 500 error did not evidence itself to users",
}, { // ------------------------------------------------------------------------
"x": "A couple minis with our Docker setup: stop docker-compose automatically when the dev server stops, and updated bootsnap gem to fix a Docker error",
"u": ["https://github.com/beeminder/beeminder/pull/2366",
"https://github.com/beeminder/beeminder/pull/2351",
"https://twitter.com/beeminfra/status/1410363263062134784"],
"t": "2021-06-30"
}, { // ------------------------------------------------------------------------
"x": "Cleaned up unused infrastructure (gem files, background jobs) from an old chat tool we're no longer using (intercom)",
"u": ["https://twitter.com/beeminfra/status/1412911500721750019",
      "https://github.com/beeminder/beeminder/pull/2384",
],
"t": "2021-07-07",
"c": "remove intercom from gemfile & remove weeder #2384"
}, { // ------------------------------------------------------------------------
"x": "#bugfix qual failures: first was on the order of a syntax error; the other a nondeterministic failure due to dirty db state & the order they were run in.",
"u": ["https://twitter.com/beeminfra/status/1415439534788022273",
      "https://github.com/beeminder/beeminder/issues/2312",
      "https://github.com/beeminder/beeminder/pull/2422",
      "https://github.com/beeminder/beeminder/pull/2360",
      "https://github.com/beeminder/beeminder/issues/2359"
      ],
"t": "2021-07-14",
"d": "2021-06-03",
"d": "2021-07-02"
}, { // ------------------------------------------------------------------------
"x": "Fixed a non-user-visible bug where any user with bad Google auth (or other scenarios) would cause a 500 every time they visit the new goal page!",
"c": "See gmailzero.rb line 206 or so",
"u": ["https://github.com/beeminder/beeminder/pull/2456",
"https://twitter.com/beeminfra/status/1417973284373602304"],
"d": "2021-07-20",
"t": "2021-07-21"
}, { // ------------------------------------------------------------------------
"x": "Fulfilled some admin wishes regarding our raplet (user dossier tool) adding info like timezone, total goal count, and other stuff",
"u": ["https://github.com/beeminder/beeminder/pull/2466",
"https://twitter.com/beeminfra/status/1420527652801187843"],
"d": "2021-07-26",
"t": "2021-07-28"
}, { // ------------------------------------------------------------------------
"x": "Stopped sending a certain type of derail alert to our support inbox when the pledge cap is $0, cuz it's not relevant for $0 goals and could be super self-spammy.",
"u": ["https://github.com/beeminder/beeminder/pull/2458",
"https://twitter.com/beeminfra/status/1420530238023364609"],
"d": "2021-07-21",
"t": "2021-07-28"
}, { // ------------------------------------------------------------------------
"x": "Fixed a warning from Yarn complaining about us not having a license in our package file. Cleaned that up to stop muddying our logs.",
"u": ["https://github.com/beeminder/beeminder/pull/2374","https://twitter.com/beeminfra/status/1425225010554105858"]
}, { // ------------------------------------------------------------------------
"x": "Fixed a problem with emailing users from our admin interface where the email would silently fail if the admin was initiating it from an archived goal page.",
"u": ["https://twitter.com/beeminfra/status/1428141803568439299",
      "https://github.com/beeminder/beeminder/issues/283",
      "https://github.com/beeminder/beeminder/pull/2474"],
"d": "2021-07-29",
"t": "2021-08-18"
}, { // ------------------------------------------------------------------------
"x": "In addition to fixing the disappearing email problem last week, we also made it so that you can email a user with no goals at all, directly from their gallery page.",
"u": ["https://github.com/beeminder/beeminder/pull/2474",
      "https://twitter.com/beeminfra/status/1430638903636107266"],
"d": "2021-07-29",
"t": "2021-08-25"
}, { // ------------------------------------------------------------------------
"x": "Fixed a timezone bug in the specs for our Premium page that made them fail at certain times of day.",
"u": ["https://twitter.com/beeminfra/status/1432837269581303808",
      "https://github.com/beeminder/beeminder/issues/2515"],
"d": "2021-08-31",
"t": "2021-08-31"
}, { // ------------------------------------------------------------------------
"x": "Fixed up our Withings integration for an upcoming deprecation / URL change for their api auth token endpoint.",
"u": ["https://twitter.com/beeminfra/status/1432837378427682823",
      "https://github.com/beeminder/beeminder/issues/2193",
      "https://github.com/beeminder/beeminder/pull/2508",
      "https://github.com/beeminder/beeminder/pull/2512"],
"d": "2021-08-31",
"t": "2021-08-31"
}, { // ------------------------------------------------------------------------
"x": "Cleaned up deprecated goal fields and added missing ones in admin's goal dashboard as well as improved descriptions and formatting.",
"u": ["https://github.com/beeminder/beeminder/pull/2543",
"https://twitter.com/beeminfra/status/1438290628559863811"],
"d": "2021-09-13",
"t": "2021-09-15"
}, { // ------------------------------------------------------------------------
"x": "UVI#3884 included much satisfying refactoring of modals behind the scenes, consolidating CSS, and a consistent naming scheme for partials.",
"u": ["https://github.com/beeminder/beeminder/pull/2553/commits",
"https://twitter.com/beeminfra/status/1440820626994855936"],
"t": "2021-09-22"
}, { // ------------------------------------------------------------------------
"x": "Super satisfying refactor of a view partial that was rendered in forms all over the site. Turned it into a helper function netting clearer code, fewer renders.",
"u": ["https://github.com/beeminder/beeminder/pull/2526",
"https://twitter.com/beeminfra/status/1443323756647047172"],
"d": "2021-09-02",
"t": "2021-09-29"
}, { // ------------------------------------------------------------------------
"x": "Upgraded our ORM (Mongoid) from a super ancient version to a somewhat less ancient version. Incrementally making steps towards upgrading all the things.",
"u": ["https://twitter.com/beeminfra/status/1445895610389860357",
"https://github.com/beeminder/beeminder/pull/2582"],
"d": "2021-09-27",
"t": "2021-10-06",
}, { // ------------------------------------------------------------------------
"x": "Removed an unlinked extra copy of jquery, and corrected a complaint about the jquery.min.map being missing, which was annoying in the context of dev.",
"u": ["https://github.com/beeminder/beeminder/pull/2616",
      "https://blog.jquery.com/2018/08/30/bad-map-file-for-jquery-1-9-1-in-the-jquery-cdn/",
      "https://twitter.com/beeminfra/status/1448344568768851970"],
"c": "The jquery.min.map thing has an explanation on jquery's blog."
}, { // ------------------------------------------------------------------------
"x": "Cleaned out infrastructure from an old version of Garmin's api related to the way we were expected to handle pushed notifications about user data.",
"u": ["https://twitter.com/beeminfra/status/1450947133444481030",
"https://github.com/beeminder/beeminder/pull/2615",
],
"c": "also incidentally got rid of a massive db table of pushed data and phew. that's a load off our db.",
"t": "2021-10-20"
}, { // ------------------------------------------------------------------------
"x": "Numerous opportunistic-refactoring commits tucked into other PRs, removing unused methods in goal model, unused legacy controllers, unused view helpers",
"u": ["https://twitter.com/beeminfra/status/1453500391790759936",
"https://github.com/beeminder/beeminder/commit/0fc36c0e71cba18b55cc1d385dee2bb0c24ced04",
"https://github.com/beeminder/beeminder/pull/2531",
"https://github.com/beeminder/beeminder/pull/2526/commits/214fdb74ba4d5a73d309966dbce9f6fe7ed8f5f0"],
"t": "2021-10-27"
}, { // ------------------------------------------------------------------------
"x": "Improvements to our internal stats page so all hours are included and slightly improved query performance, mostly thanks to DB upgrades",
"u": ["https://twitter.com/beeminfra/status/1456044273984434176",
"https://github.com/beeminder/beeminder/pull/2672",
"https://github.com/beeminder/beeminder/pull/2671",
"https://github.com/beeminder/beeminder/pull/2684"],
"t": "2021-11-03"
}, { // ------------------------------------------------------------------------
"x": "Some big improvements to our db server (fully automated setup, etc), and improved the way we backup the data.",
"u": ["https://github.com/beeminder/beeploy/pull/66",
"https://github.com/beeminder/beeploy/pull/67",
"https://twitter.com/beeminfra/status/1458595055250259970"],
"t": "2021-11-10"
}, { // ------------------------------------------------------------------------
"x": "Removed a hint from a mongo query that is 1) now properly indexed and 2) was causing a race condition at startup of a brand new dev environment.",
"u": ["https://twitter.com/beeminfra/status/1461135648316739588",
      "https://github.com/beeminder/beeminder/issues/2711",
      "https://github.com/beeminder/beeminder/pull/2744"],
"d": "2021-11-12",
"t": "2021-11-17"
}, { // ------------------------------------------------------------------------
"x": "Updated our docker dev environment for using Mongo 5, and removed a cache file from version control [mini].",
"u": ["https://twitter.com/beeminfra/status/1466182361620484097",
"https://github.com/beeminder/beeminder/issues/2682",
"https://github.com/beeminder/beeminder/pull/2695",
"https://github.com/beeminder/beeminder/pull/2696",
"https://github.com/beeminder/beeminder/issues/2677"],
"d": "2021-11-03",
"t": "2021-12-01"
}, { // ------------------------------------------------------------------------
"x": "Fixed a couple of the sample config files in the repo for ease of cloning the repo and starting up from scratch",
"u": ["https://twitter.com/beeminfra/status/1468730968903077888",
"https://github.com/beeminder/beeminder/issues/2726",
"https://github.com/beeminder/beeminder/pull/2786",
"https://github.com/beeminder/beeminder/pull/2785"],
"c": "mongoid sample and resque_schedule samples",
"t": "2021-12-08"
}, { // ------------------------------------------------------------------------
"x": "Added VCR & webmock to our specs (was only in minitest before); tell VCR to allow http connections when no cassette so it doesn't break every other spec.",
"u": ["https://twitter.com/beeminfra/status/1471188352607031296",
      "https://github.com/beeminder/beeminder/issues/2774",
      "https://github.com/beeminder/beeminder/pull/2775",
      "https://github.com/beeminder/beeminder/commit/669c619bfd5b1135bf015c4b06604948925cd4aa"],
"d": "2021-11-18",
"t": "2021-12-15",
}, { // ------------------------------------------------------------------------
"x": "Got dockerized dev environment working on m1 macs.",
"u": ["https://twitter.com/beeminfra/status/1473779288981655552",
      "https://github.com/beeminder/beeminder/issues/2727",
      "https://github.com/beeminder/beeminder/pull/2728"],
"d": "2021-11-22",
"t": "2021-12-22"
}, { // ------------------------------------------------------------------------
"x": "Some robustifying of our quals; improve db cleaning (quitting in the middle was leaving next run broken), hushed wolf crying, and satisfied deprecation warnings.",
"u": ["https://twitter.com/beeminfra/status/1476307094621982720",
      "https://github.com/beeminder/beeminder/issues/2783",
      "https://github.com/beeminder/beeminder/pull/2787",
      "https://github.com/beeminder/beeminder/issues/2784",
      "https://github.com/beeminder/beeminder/pull/2793",
      "https://github.com/beeminder/beeminder/pull/2788"],
"c": "adjusted class and path for metrics api test",
"d": "2021-11-23",
"t": "2021-12-29"
}, { // ------------------------------------------------------------------------
"x": "Added some infrastructure (a test job) and logging to test (and figure out) what's up with our background workers when they get stuck or time out.",
"u": ["https://twitter.com/beeminfra/status/1478830581811073024",
      "https://github.com/beeminder/beeminder/pull/2706",
      "https://github.com/beeminder/beeminder/pull/2707"],
"d": "2021-11-03",
"t": "2022-01-05"
}, { // ------------------------------------------------------------------------
"x": "Fixed a generic RuntimeError we were seeing because of a syntax error with re-raising an exception when a mailer times out.",
"u": ["https://twitter.com/beeminfra/status/1481419011279572993",
      "https://github.com/beeminder/beeminder/pull/2736"],
"t": "2022-01-12"
}, { // ------------------------------------------------------------------------
"x": "Document in Docker README how you would run a single specific test for both minitest and rspec cases.",
"u": ["https://twitter.com/beeminfra/status/1483939193436786689",
      "https://github.com/beeminder/beeminder/pull/2789"],
"t": "2022-01-19"
}, { // ------------------------------------------------------------------------
"x": "More improvements to quals: Fix a warning from IFTTT controller; also ignore honeycomb anywhere in the quals-environment.",
"u": ["https://twitter.com/beeminfra/status/1486468288699781126",
      "https://github.com/beeminder/beeminder/issues/2780",
      "https://github.com/beeminder/beeminder/pull/2791",
      "https://github.com/beeminder/beeminder/issues/1250",
      "https://github.com/beeminder/beeminder/pull/2703"],
"d": "2021-11-22",
"t": "2022-01-26"
}, { // ------------------------------------------------------------------------
"x": "Stop running yarn check before every Rails cmd (This matches future Rails behavior, and speeds up everything in dev.)",
"u": ["https://twitter.com/beeminfra/status/1488998252078776320",
      "https://github.com/beeminder/beeminder/issues/2750",
      "https://github.com/beeminder/beeminder/pull/2790"],
"d": "2021-11-22",
"t": "2022-02-02"
}, { // ------------------------------------------------------------------------
"x": "Many improvements to our scripts for adminning development docker environments: check if docker's running first stop potentially stale resque workers",
"u": ["https://github.com/beeminder/beeminder/pull/2805",
"https://github.com/beeminder/beeminder/pull/2680",
"https://twitter.com/beeminfra/status/1491563226210783235"],
"t": "2022-02-09"
}, { // ------------------------------------------------------------------------
"x": "Fixed a silent failure when you edited someone's gallery string (an admin thing): if a goal is archived or deleted we now pass that error up the chain correctly.",
"u": ["https://github.com/beeminder/beeminder/issues/2440",
      "https://github.com/beeminder/beeminder/pull/2912",
      "https://twitter.com/beeminfra/status/1494110638020636672"],
"d": "2022-01-11",
"t": "2022-02-16"
}, { // ------------------------------------------------------------------------
"x": "More improvements to dockerized dev env: add commands for launching dev and quals terminals to our control script; remove reference to old admin/dev scripts.",
"u": ["https://twitter.com/beeminfra/status/1496646307217219587",
"https://github.com/beeminder/beeminder/pull/2725",
"https://github.com/beeminder/beeminder/pull/2731",
"https://github.com/beeminder/beeminder/pull/2698"],
"t": "2022-02-23"
}, { // ------------------------------------------------------------------------
"x": "Quality quals: improved the dockerized running of our automated test suit (aka quals), addressing mongo slowness in docker, and adding a retry for failed specs.",
"u": ["https://twitter.com/beeminfra/status/1499145778400415746", 
      "https://github.com/beeminder/beeminder/pull/2917"],
"t": "2022-03-02",
}, { // ------------------------------------------------------------------------
"x": "Related to docker & automated test improvements, we've now got GitHub running our quals automatically on new PRs.",
"u": ["https://github.com/beeminder/beeminder/pull/2943",
"https://twitter.com/beeminfra/status/1499145778400415746"],
"t": "2022-03-09"
}, { // ------------------------------------------------------------------------
"x": "(Re)added a garish color to the website's header in the dev environment, because sometimes I get confused.",
"u": ["https://github.com/beeminder/beeminder/pull/2864",
"https://twitter.com/beeminfra/status/1504191115653648389",
],
"c": "Like \"Why isn't this thing I'm changing showing up?!!!\" Oh. Because you are looking at the deployed production site for the local change. Doh."
}, { // ------------------------------------------------------------------------
"x": "Our #gitgeyser slackchannel now gets notified of every user/premium plan churn & unchurn. It's not exactly top of mind, but much more accessible than before!",
"u": ["https://github.com/beeminder/beeminder/pull/2799",
"https://twitter.com/beeminfra/status/1506753709669158914"],
}, { // ------------------------------------------------------------------------
"x": "Improved error handling of Todoist ratelimits from an obscure unhelpful error (due to an error inside the error...), to the intended descriptive error.",
"u": ["https://twitter.com/beeminfra/status/1509266257282887681",
      "https://github.com/beeminder/beeminder/pull/3005",
      "https://github.com/beeminder/beeminder/issues/3003"],
"c": "We hit a rate limit, we waited, we hit it again, and we wanted to send ourselves an airhorn, but we died instead. (that dying did send us an airhorn, but it was less obvious and not the one we meant to send)",
"t": "2022-03-30"
}, { // ------------------------------------------------------------------------
"x": "Wait for jobs to finish successfully in quals so we notice if background worker has failures too",
"u": ["https://github.com/beeminder/beeminder/pull/3024",
      "https://twitter.com/beeminfra/status/1511856011757309961"],
"t": "2022-04-06"
}, { // ------------------------------------------------------------------------
"x": "Fixed an error in our admin interface where we were linking to a non-existent route for admin view of a goal.",
"u": ["https://github.com/beeminder/beeminder/pull/3029",
      "https://github.com/beeminder/beeminder/issues/2380",
      "https://twitter.com/beeminfra/status/1513995895372607493"],
"d": "2022-02-28",
"t": "2022-04-12"
}, { // ------------------------------------------------------------------------
"x": "We were incorrectly reporting users' timezone offset in our Helpscout widget. Now workerbees have correct info about user timezone when reading emails.",
"u": ["https://twitter.com/beeminfra/status/1516555265285312512",
"https://github.com/beeminder/beeminder/issues/3115",
"https://github.com/beeminder/beeminder/pull/3125"],
"d": "2022-04-11",
"t": "2022-04-19"
}, { // ------------------------------------------------------------------------
"x": "Capybara was having trouble finding things in bootstrap modals. Disabled animation in quals and make sure it's not in transition still. More reliable quals++",
"u": ["https://github.com/beeminder/beeminder/pull/3077",
"https://twitter.com/beeminfra/status/1519095036691976193"],
"d": "2022-04-15",
"t": "2022-04-26"
}, { // ------------------------------------------------------------------------
"x": "Print out the logs when GitHub Actions fails so we can figure out why...",
"u": ["https://twitter.com/beeminfra/status/1521608144639586304",
      "https://github.com/beeminder/beeminder/issues/3045",
      "https://github.com/beeminder/beeminder/pull/3046",
      "https://github.com/beeminder/beeminder/pull/3026",],
"d": "",
"t": "2022-05-03"
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug with certain query conditions in the beemailer, as well as adding some new conditions, and a new macro for a transactional email postscript.",
"u": ["https://twitter.com/beeminfra/status/1524111590932434944",
"https://github.com/beeminder/beeminder/pull/3181",
"https://github.com/beeminder/beeminder/pull/3058"],
"d": "2022-04-27",
"t": "2022-05-10"
}, { // ------------------------------------------------------------------------
"x": "Updated all our controllers from using legacy rails protected attributes, to using Strong Params. Part of project #upgradeallthethings",
"u": ["https://github.com/beeminder/beeminder/pull/3057",
      "https://twitter.com/beeminfra/status/1526711955305529344"],
"d": "2022-04-11",
"t": "2022-05-17",
}, { // ------------------------------------------------------------------------
"x": "Removed a redundant special case and simplified some things around meta graphs that are only for tracking meta data.",
"u": ["https://github.com/beeminder/beeminder/pull/2924",
      "https://github.com/beeminder/beeminder/pull/2920",
      "https://twitter.com/beeminfra/status/1529202979319885824"],
"c": "We had multiple different ways implemented to accomplish the same meta-goals exemption.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a misleading heisenbug in quals. Sometimes we would clean the db before we were done with the qual and see an exception about a user-less goal.",
"u": ["https://github.com/beeminder/beeminder/issues/3146",
      "https://github.com/beeminder/beeminder/pull/3147",
      "https://twitter.com/beeminfra/status/1531784573566128128"],
"t": "2022-05-31"
}, { // ------------------------------------------------------------------------
"x": "Fixed an error that was sometimes getting thrown when we are logging mailgun bounce notifications.",
"u": ["https://twitter.com/beeminfra/status/1534314193347911684",
      "https://github.com/beeminder/beeminder/pull/3105"],
"c": "we were expecting a delivery status message, but sometimes there isn't one.",
"d": "2022-04-06",
"t": "2022-06-07"
}, { // ------------------------------------------------------------------------
"x": "As part of project #upgradeallthethings, upgraded from the extremely geriatric Rails 4 version we'd been on, to the slightly less outdated Rails 5.2",
"u": ["https://twitter.com/beeminfra/status/1536838991822999552",
      "https://github.com/beeminder/beeminder/issues/2033",
      "https://github.com/beeminder/beeminder/issues/2034",
      "https://github.com/beeminder/beeminder/issues/2035",
      "https://github.com/beeminder/beeminder/pull/3132"],
"d": "2022-05-13",
"t": "2022-06-14",
"c": "There were no UVIs directly from this upgrade, but there were plenty of little things we missed in migrating that caused regressions and subsequent User-Visible fixes."
}, { // ------------------------------------------------------------------------
"x": "Added a missing gem necessary for running the rails console post our 5.2 upgrade; also added the new 5.2 servers to the translog script.",
"u": ["https://twitter.com/beeminfra/status/1539374788673646593",
      "https://github.com/beeminder/beeminder/pull/3254",
      "https://github.com/beeminder/beeminder/issues/3238",
      "https://github.com/beeminder/beeminder/pull/3244"],
"d": "2022-05-17",
"t": "2022-06-21"
}, { // ------------------------------------------------------------------------
"x": "Updated webpacker & redis now that we are off rails 4; has the side effect of making it possible to run our dev env locally on M1 macs now.",
"u": ["https://twitter.com/beeminfra/status/1541914336762900480",
      "https://github.com/beeminder/beeminder/pull/3315",
      "https://github.com/beeminder/beeminder/issues/3313",
      "https://github.com/beeminder/beeminder/issues/3314",
      "https://github.com/beeminder/beeminder/pull/3317"],
"d": "2022-06-10",
"t": "2022-06-28"
}, { // ------------------------------------------------------------------------
"x": "Another post 5.2 upgrade bugfix: silence some warning messages that would happen during deploy.",
"u": ["https://twitter.com/beeminfra/status/1544419008006479873",
"https://github.com/beeminder/beeminder/pull/3258",
"https://github.com/beeminder/beeploy/issues/78",
"https://github.com/beeminder/beeminder/pull/3257"],
"d": "2022-05-17"
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug that was not allowing admins to certain user-fields. (Strong params / rails 5.2 upgrade consequence.)",
"u": ["https://twitter.com/beeminfra/status/1546960508967845890",
      "https://github.com/beeminder/beeminder/pull/3268",
      "https://github.com/beeminder/beeminder/issues/3267"],
"d": "2022-05-20",
"t": "2022-07-12"
}, { // ------------------------------------------------------------------------
"x": "In concert with UVI#4176, added quals to cover the happy path & the error path in both goal creation and api for Focusmate integration. Also for missing oauth.",
"u": ["https://twitter.com/beeminfra/status/1549489578423222276",
      "https://changelog.beeminder.com/#4176",
      "https://github.com/beeminder/beeminder/pull/3322",
      "https://github.com/beeminder/beeminder/pull/3326"],
"d": "2022-06-13",
"t": "2022-07-19"
}, { // ------------------------------------------------------------------------
"x": "Fix the printed output of the Honeycomb queue metrics uploader. This didn't affect uploaded metrics, just the human readable output of the job.",
"u": ["https://twitter.com/beeminfra/status/1552018455431241730",
      "https://github.com/beeminder/beeminder/pull/3299",
      "https://github.com/beeminder/beeminder/issues/3298"],
"d": "2022-06-06",
"t": "2022-07-26"
}, { // ------------------------------------------------------------------------
"x": "Add Docker caching to Github Actions to cut our run time in half for running quals on Github",
"c": "This uses an alternate docker-compose file, and relies on a prebuilt base Beeminder image.",
"u": ["https://twitter.com/beeminfra/status/1554611765761019904",
      "https://github.com/beeminder/beeminder/issues/3004",
      "https://github.com/beeminder/beeminder/pull/3383",
      "https://github.com/beeminder/beeminder/pull/3384",
      "https://github.com/beeminder/beeminder/pull/3385"],
"d": "2022-07-26",
"t": "2022-08-02"
}, { // ------------------------------------------------------------------------
"x": "Reduce Github Actions timeout -- now that builds are faster, we can timeout sooner!",
"u": [
"https://twitter.com/beeminfra/status/1557131068737671168",
"https://github.com/beeminder/beeminder/issues/3004",
"https://github.com/beeminder/beeminder/pull/3388"],
"t": "2022-08-09"
}, { // ------------------------------------------------------------------------
"x": "Migrate to new Strava library. The one we were using is not maintained; new one handles stuff with webhooks and exposes ratelimit headers.",
"u": ["https://github.com/beeminder/beeminder/pull/3330",
      "https://github.com/beeminder/beeminder/issues/3351",
      "https://twitter.com/beeminfra/status/1559685418202775552"],
"d": "2022-06-24"
}, { // ------------------------------------------------------------------------
"x": "Added job information to \"vengeful god\" emails (aka when a background worker stalls and gets killed by the watchdog) so we know what got killed.",
"u": ["https://twitter.com/beeminfra/status/1562185703995322369", 
      "https://github.com/beeminder/beeminder/issues/3229",
      "https://github.com/beeminder/beeploy/pull/85",
      "https://github.com/beeminder/beeploy/pull/86"],
"d": "2022-05-11",
"t": "2022-08-23",
"c": "This adds the job class and the child command line to both Honeycomb and the emails, and it adds the last ten lines of log output for the child PID to the email. This output usually includes the job class and the arguments!",
}, { // ------------------------------------------------------------------------
"x": "Upgraded to a newer version of Resque-Web and moved it to the same machine as the scheduler (it's slightly more mistake proof if on the same host).",
"u": ["https://twitter.com/beeminfra/status/1564732995533434880",
      "https://github.com/beeminder/beeploy/pull/101",
      "https://github.com/beeminder/beeploy/issues/98",
      "https://github.com/beeminder/beeploy/issues/91",
      "https://github.com/beeminder/beeploy/pull/92"],
"d": "2022-08-01"
}, { // ------------------------------------------------------------------------
"x": "Be smarter about when Github runs quals; now GH runs quals on new PRs, and our deploy runs quals against the merge prior to deploy.",
"u": ["https://twitter.com/beeminfra/status/1567245554610208768",
      "https://github.com/beeminder/beeminder/issues/3421",
      "https://github.com/beeminder/beeminder/pull/3422"],
"d": "2022-08-04",
"t": "2022-09-06"
}, { // ------------------------------------------------------------------------
"x": "Added a private endpoint to check what release of beeminder code is running. This is for failing loudly if the deploy fails, and for Lighthouse CI integration.",
"u": ["https://twitter.com/beeminfra/status/1569787556442816512",
      "https://github.com/beeminder/beeminder/pull/3396",
      "https://github.com/beeminder/beeminder/issues/2741",
      "https://github.com/beeminder/beeminder/issues/3334",
      "https://github.com/beeminder/beeminder/pull/3397"],
"d": "2022-07-21",
"t": "2022-09-13"
}, { // ------------------------------------------------------------------------
"x": "Oh, and we set up a Lighthouse CI server for working on web standards / SEO stuff.",
"u": ["https://twitter.com/beeminfra/status/1572323165459849216",
      "https://github.com/beeminder/beeminder/issues/3334",
      "https://github.com/beeminder/beeploy/issues/96"],
"d": "2022-07-26",
"t": "2022-09-20",
"c": "mentioned lighthouse in last week's infra, without realizing i hadn't mentioned lighthouse CI yet."
}, { // ------------------------------------------------------------------------
"x": "Added a helpful script for checking development and production with Lighthouse, along with documentation, and a Rake task for setting up data for the checker.",
"u": ["https://twitter.com/beeminfra/status/1574897525198561280",
      "https://github.com/beeminder/beeminder/issues/3334",
      "https://github.com/beeminder/beeminder/pull/3401"],
"d": "2022-07-29",
"t": "2022-09-27",
}, { // ------------------------------------------------------------------------
"x": "Updated our Github actions config for Lighthouse stuff because it was causing a bunch of error messages on regular pushes and PRs.",
"u": ["https://twitter.com/beeminfra/status/1577432534908272640",
      "https://github.com/beeminder/beeminder/issues/3334",
      "https://github.com/beeminder/beeminder/pull/3420"],
"c": "we'd had it configured for experiments we were running in branches, but GH Actions was expecting the config on the main branch too, leading to errors/wolf-crying...",
"d": "2022-08-04",
"t": "2022-10-04"
}, { // ------------------------------------------------------------------------
"x": "Squelched Capybara's startup messages, and other noisy non-error output from our quals.",
"u": [
"https://github.com/beeminder/beeminder/pull/3673",
"https://github.com/beeminder/beeminder/issues/2784",
"https://github.com/beeminder/beeminder/pull/3585",
"https://github.com/beeminder/beeminder/pull/3670",
"https://twitter.com/beeminfra/status/1579969781264191489"
],
"d": "2022-09-27",
"t": "2022-10-11"
}, { // ------------------------------------------------------------------------
"x": "We've been moving quals out of minitest and into rspec. Even made a beeminder goal for whittling down the remainders: beeminder.com/meta/speckify",
"u": ["https://twitter.com/beeminfra/status/1582514659625955328",
      "https://github.com/beeminder/beeminder/pull/3609",
      "https://github.com/beeminder/beeminder/pull/3750",
      "https://github.com/beeminder/beeminder/pull/3747"],
"d": "2022-10-17",
"t": "2022-10-18"
}, { // ------------------------------------------------------------------------
"x": "Added the full goal url (so email clients will linkify it) to PND alerts for support workerbees.",
"u": ["https://github.com/beeminder/beeminder/pull/3758",
"https://github.com/beeminder/beeminder/issues/3227",
"https://twitter.com/beeminfra/status/1585031079693799424"],
"d": "2022-10-19",
"t": "2022-10-25"
}, { // ------------------------------------------------------------------------
"x": "Added the goal state to listing of a user's goal in the admin interface, #worker-bee-request",
"u": ["https://twitter.com/beeminfra/status/1587519911639015424",
      "https://github.com/beeminder/beeminder/pull/3758",
      "https://github.com/beeminder/beeminder/issues/3448"],
"d": "2022-10-19",
"t": "2022-11-01"
}, { // ------------------------------------------------------------------------
"x": "Changed the way we include support on certain emails so that helpscout can correctly classify them; #worker-bee-request",
"u": ["https://github.com/beeminder/beeminder/pull/3687",
      "https://github.com/beeminder/beeminder/issues/3160",
     "https://twitter.com/beeminfra/status/1590140941725495297"],
"d": "2022-10-04",
"t": "2022-11-08"
}, { // ------------------------------------------------------------------------
"x": "Better error messaging in our local control scripts if you've forgotten to set up your local key files.",
"u": ["https://github.com/beeminder/beeminder/pull/3686",
"https://github.com/beeminder/beeminder/issues/3685",
"https://twitter.com/beeminfra/status/1594418224078417922"],
"t": "2022-11-20"
}, { // ------------------------------------------------------------------------
"x": "More Honeycomb info around graph jobs: tell Honeycomb how big the graph is, and tell them about recommits within the GraphJob as well.",
"u": ["https://github.com/beeminder/beeminder/pull/3704",
"https://github.com/beeminder/beeminder/pull/3705",
"https://github.com/beeminder/beeminder/issues/3668",
"https://github.com/beeminder/beeminder/issues/3701",
"https://twitter.com/beeminfra/status/1597025036606779392"],
"t": "2022-11-27"
}, { // ------------------------------------------------------------------------
"x": "The autodata error banner went missing for admins about a month ago. Added it back so our support workerbees can see what's going on with your goal!",
"u": ["https://github.com/beeminder/beeminder/pull/3849",
"https://twitter.com/beeminfra/status/1598832915949170691"],
"d": "2022-11-30",
"t": "2022-12-02"
}, { // ------------------------------------------------------------------------
"x": "Added more granular / detailed status tracking to Beeminder::Charge objects, so we can e.g. query for refunded charges directly in our own database.",
"u": ["https://github.com/beeminder/beeminder/pull/3828",
"https://twitter.com/beeminfra/status/1601296909750407168"],
"d": "2022-11-16",
"t": "2022-12-09"
}, { // ------------------------------------------------------------------------
"x": "Added a simple little 'set_deadbeat_status' helper to the user model to DRY up some things we were doing around setting/unsetting this flag.",
"u": ["https://github.com/beeminder/beeminder/pull/3826",
"https://github.com/beeminder/beeminder/pull/3836",
"https://twitter.com/beeminfra/status/1603882972629073921"],
"d": "2022-12-16",
"t": "2022-11-16"
}, { // ------------------------------------------------------------------------
"x": "Moved the logic for lifecycle of a Donation (beemium perk) into the Charge object (added callbacks around charging card & refunds, added associations, and quals).",
"u": ["https://github.com/beeminder/beeminder/pull/3838",
"https://github.com/beeminder/beeminder/issues/596",
"https://twitter.com/beeminfra/status/1606442836416946176"],
"d": "2022-11-17",
"t": "2022-12-23"
}, { // ------------------------------------------------------------------------
"x": "Fixed a silly little dependency problem in our dev environment by loading util with rails so we can findu / findg without loading Goals first.",
"u": ["https://github.com/beeminder/beeminder/pull/3904",
"https://twitter.com/beeminfra/status/1608989379149836292"],
"t": '2022-12-30',
}, { // ------------------------------------------------------------------------
"x": "Updated VCR config so that 1) it errors on any unexpected HTTP hits, and 2) it errors if an interaction in a cassette isn't used.",
"c": "If we update a cassette, we want to be forced to take the old entries out. A step towards getting us to keep them up to date.",
"u": ["https://twitter.com/beeminfra/status/1611166727920054272",
      "https://github.com/beeminder/beeminder/issues/3816",
      "https://github.com/beeminder/beeminder/pull/3909"],
}, { // ------------------------------------------------------------------------
"x": "Fixed a regression introduced in PR#3839 that caused admin's \"latest charge\" helper in the admin sidebar to be out of date.",
"u": ["https://github.com/beeminder/beeminder/issues/3857",
      "https://github.com/beeminder/beeminder/pull/3839",
      "https://github.com/beeminder/beeminder/pull/3867",
      "https://twitter.com/beeminfra/status/1613605360203628545"],
"d": "2022-12-08",
"t": "2023-01-12"
}, { // ------------------------------------------------------------------------
"x": "Upgraded to Rails 6.0",
"u": ["https://twitter.com/beeminfra/status/1616599125423980545"],
"d": "",
"t": "2023-01-20"
}, { // ------------------------------------------------------------------------
"x": "As part of upgrading to Rails 6.0 we had to upgrade servers to use ruby 2.7; Added chruby to the servers and capistrano and ansible both work with it now.",
"u": ["https://github.com/beeminder/beeminder/issues/3861",
"https://github.com/beeminder/beeploy/issues/75",
"https://twitter.com/beeminfra/status/1619100662725492737"],
"t": "2023-01-27",
}, { // ------------------------------------------------------------------------
"x": "Newer version of rspec deprecated the \"should\" syntax, so had to do a gsub from \"should\" to \"expect\".",
"u": ["https://twitter.com/beeminfra/status/1621668539328528384",
      "https://github.com/beeminder/beeminder/issues/3859",
      "https://github.com/beeminder/beeminder/pull/3860"],
"t": "2023-02-03"
}, { // ------------------------------------------------------------------------
"x": "Upgrading ruby broke the background job that admins use to get a log of changes to your goal because that job was still trying to use the old ruby version.",
"u": ["https://twitter.com/beeminfra/status/1624195020495675392",
      "https://github.com/beeminder/beeminder/issues/3923",
      "https://github.com/beeminder/beeminder/pull/3924"],
"d": "2022-12-27",
"t": "2023-02-10"
}, { // ------------------------------------------------------------------------
"x": "Announce in our Slack when the translog fetcher is done, so workerbees can do other stuff whilst it is fetching.",
"u": ["https://github.com/beeminder/beeminder/issues/3925",
"https://twitter.com/beeminfra/status/1628182443999232001"],
"t": "2023-02-21",
}, { // ------------------------------------------------------------------------
"x": "Added a GH action to check for the string \"UVI\" in all our PRs to enforce that we explicitly describe the UVI/non status of a change.",
"u": ["https://twitter.com/beeminfra/status/1630727828290560001"],
"t": "2023-02-28"
}, { // ------------------------------------------------------------------------
"x": "Docker Compose uses a cache that GitHub Actions knows about; makes the quals check Action faster. The cache gets updated by a different Action.",
"d": "2022-12-14",
"u": ["https://twitter.com/beeminfra/status/1633252624509329408",
"https://github.com/beeminder/beeminder/issues/3872",
"https://github.com/beeminder/beeminder/issues/3877"]
}, { // ------------------------------------------------------------------------
"x": "Upgraded our ruby container to fix an error re nokogiri in our docker dev environment.",
"u": ["https://twitter.com/beeminfra/status/1635778309429813249",
"https://github.com/beeminder/beeminder/issues/3953",
"https://github.com/beeminder/beeminder/issues/3940"]
}, { // ------------------------------------------------------------------------
"x": "Github Actions needs development keys; also run actions when docker directory changes",
"u": [
      "https://twitter.com/beeminfra/status/1638298813747331073",
      "https://github.com/beeminder/beeminder/issues/3881",
      "https://github.com/beeminder/beeminder/pull/3882",
      "https://github.com/beeminder/beeminder/pull/3886",
      "https://github.com/beeminder/beeminder/pull/3899",
      "https://github.com/beeminder/beeminder/pull/3906",
      "https://github.com/beeminder/beeminder/issues/3955"],
"d": "2023-01-02",
"t": "2023-03-21",
}, { // ------------------------------------------------------------------------
"x": "Honeycomb maintenance: we needed to cull old unused columns because we were nearing the column limit.",
"u": ["https://github.com/beeminder/beeminder/issues/3910",
"https://twitter.com/beeminfra/status/1645576471392690177"],
"t": "2023-04-10"
}, { // ------------------------------------------------------------------------
"x": "Added some icons to a part of the admin section to help differentiate a list of links.",
"u": ["https://github.com/beeminder/beeminder/pull/4203",
"https://twitter.com/beeminfra/status/1648107512087060485"],
"t": "2023-04-17"
}, { // ------------------------------------------------------------------------
"x": "More work done on moving our minitest quals over into rspec",
"u": ["https://twitter.com/beeminfra/status/1650626777520431104",
"https://github.com/beeminder/beeminder/pull/4193",
"https://github.com/beeminder/beeminder/pull/4157",
"https://github.com/beeminder/beeminder/pull/4100",
"https://github.com/beeminder/beeminder/issues/3503"],
"d": "2023-02-16",
"t": "2023-04-24",
}, { // ------------------------------------------------------------------------
"x": "Fix BSD Findism re maxdepth from dev scripts that was causing problems with GNU find, causing problems with using the dev env scripts on Linux machines.",
"u": ["https://twitter.com/beeminfra/status/1653148745138319360",
"https://github.com/beeminder/beeminder/pull/3907",
"https://github.com/beeminder/beeminder/issues/3903",
"https://github.com/beeminder/beeminder/issues/3878"],
"t": "2023-05-01"
}, { // ------------------------------------------------------------------------
"x": "Ansible nginx & passenger stuff: Tweak restarts, update the load balancer config, reload after certs are updated etc.",
"u": ["https://twitter.com/beeminfra/status/1655702379415879682",
"https://github.com/beeminder/beeploy/pull/82",
"https://github.com/beeminder/beeploy/pull/94",
"https://github.com/beeminder/beeploy/issues/77",
"https://github.com/beeminder/beeploy/pull/88",
"https://github.com/beeminder/beeploy/issues/87"],
"t": "2023-05-08"
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500 error when admins try to visit certain meta goals because of buginess in the helper for grabbing a goal's latest charge",
"u": ["https://twitter.com/beeminfra/status/1658258013545975808",
"https://github.com/beeminder/beeminder/issues/3966",
"https://github.com/beeminder/beeminder/pull/3967"],
"t": "2023-05-15"
}, { // ------------------------------------------------------------------------
"x": "Fixed a complaint in the dev env after our upgrade from Rails 5.2=>6 by swapping some hyphens for underscores in our bundler config.",
"u": ["https://github.com/beeminder/beeminder/issues/3891",
"https://twitter.com/beeminfra/status/1660778642224594946"],
"t": "2023-05-22"
}, { // ------------------------------------------------------------------------
"x": "Improved rack attack docs & quals, and adjusted throttle rates; also split api & web auth throttles.",
"u": ["https://github.com/beeminder/beeminder/pull/4033",
"https://twitter.com/beeminfra/status/1663307235399958529"],
"t": "2023-05-29"
}, { // ------------------------------------------------------------------------
"x": "Added a gissue template for autodata integrations which includes the pre-launch checklist already loaded up for you.",
"u": ["https://twitter.com/beeminfra/status/1665832805719490560",
      "https://github.com/beeminder/beeminder/pull/4275",
],
"d": "2023-05-30",
"t": "2023-06-05",
"c": "this was one small step toward not forgetting about integration help docs in the future."
}, { // ------------------------------------------------------------------------
"x": "We now automatically capture info about flaky quals from github actions, so we can keep an eye on problem quals.",
"u": ["https://twitter.com/beeminfra/status/1668390353324605440",
"https://github.com/beeminder/beeminder/issues/3672",
"https://github.com/beeminder/beeminder/pull/4285"],
"t": "2023-06-12",
}, { // ------------------------------------------------------------------------
"x": "Clean up Rails backtraces by silencing output from some noisy frameworks & libraries.",
"u": ["https://twitter.com/beeminfra/status/1677802460243709952",
"https://github.com/beeminder/beeminder/pull/4331",
"https://github.com/beeminder/beeminder/issues/2856"],
"t": "2023-07-08"
}, { // ------------------------------------------------------------------------
"x": "Made deploy more robust, fixing a heisenbug with docker shared directory permissions.",
"u": ["https://github.com/beeminder/beeminder/issues/1956",
"https://github.com/beeminder/beeminder/pull/4243",
"https://twitter.com/beeminfra/status/1681803027282554881"]
}, { // ------------------------------------------------------------------------
"x": "Make it easier to see which qual failed in gh actions.",
"u": ["https://twitter.com/beeminfra/status/1684305559909175297",
"https://github.com/beeminder/beeminder/issues/4261",
"https://github.com/beeminder/beeminder/pull/4279"],
"t": "2023-07-26"
}, { // ------------------------------------------------------------------------
"x": "Fixed docker cache in github; did a cleanup in README",
"u": ["https://twitter.com/beeminfra/status/1686849093304451072",
"https://github.com/beeminder/beeminder/pull/4210",
"https://github.com/beeminder/beeminder/issues/4209",
"https://github.com/beeminder/beeminder/issues/3902",
"https://github.com/beeminder/beeminder/pull/4282"],
}, { // ------------------------------------------------------------------------
"x": "Quals for android-specific notifications page, and cleaned up Babel warnings about translating es6 to es5 from quals",
"u": ["https://twitter.com/beeminfra/status/1689416849170300936",
"https://github.com/beeminder/beeminder/issues/4109",
"https://github.com/beeminder/beeminder/issues/3968",
"https://github.com/beeminder/beeminder/pull/4280"],
"t": "2023-08-09"
}, { // ------------------------------------------------------------------------
"x": "Decreased the volume of some airlerts re a change in double derail behavior.",
"u": ["https://twitter.com/beeminfra/status/1691938736207212923",
"https://github.com/beeminder/beeminder/issues/3285",
"https://github.com/beeminder/beeminder/pull/4277"],
"t": "2023-08-16"
}, { // ------------------------------------------------------------------------
"x": "Fixed some date-related quals to adjust timezones and do time travel in the correct order for the desired results.",
"u": ["https://twitter.com/beeminfra/status/1694492596801073286",
      "https://github.com/beeminder/beeminder/pull/4434"],
"t": "2023-08-23",
"d": "2023-08-17"
}, { // ------------------------------------------------------------------------
"x": "Upgraded to Rails 6.1! We're the tortoise in the upgrade-all-the-things race that is life.",
"u": ["https://twitter.com/beeminfra/status/1697030399371948537",
"https://github.com/beeminder/beeminder/pull/4391"],
"d": "2023-08-02",
"t": "2023-08-30"
}, { // ------------------------------------------------------------------------
"x": "Moved factories from minitest into rspec, also bb_test_helper, and all the VCR stuff. We're within 400 lines of the goal: all specs, no minitest.",
"u": ["https://twitter.com/beeminfra/status/1699559638709227780",
"https://github.com/beeminder/beeminder/pull/4242",
"https://github.com/beeminder/beeminder/pull/4273",
"https://github.com/beeminder/beeminder/pull/4274"],
"t": "2023-09-06"
}, { // ------------------------------------------------------------------------
"x": "Fixed some airlerts that inverted code & subject, uglying up the logs.", 
"u": ["https://twitter.com/beeminfra/status/1702090890557415728",
"https://github.com/beeminder/beeminder/pull/4459"],
"d": "",
"t": "2023-09-13",
}, { // ------------------------------------------------------------------------
"x": "Rewrote blog scraping scripts for keeping the frontpage \"latest from the blog\" section up to date after new blog redesign.",
"u": ["https://github.com/beeminder/beeminder/pull/4451",
"https://twitter.com/beeminfra"],
"d": "2023-08-24",
"t": "2023-09-20"
}, { // ------------------------------------------------------------------------
"x": "Fix some debug/info logging around sending mail -- we were referencing a non-existent variable in a very rarely reached code-path. Not user-visible.",
"u": ["https://twitter.com/beeminfra/status/1707176434584920202","https://github.com/beeminder/beeminder/pull/4484"],
"d": "2023-09-19",
"t": "2023-09-27",
}, { // ------------------------------------------------------------------------
"x": "Send a message to slack when the translogs are ready so workerbees don't have to wait around for it.",
"u": ["https://twitter.com/beeminfra/status/1709662736467341428",
"https://github.com/beeminder/beeminder/issues/3925"]
}, { // ------------------------------------------------------------------------
"x": "Additionally, add a summary header to translogs fetched on server, giving status info etc, & include status in the slackhorn.",
"u": ["https://twitter.com/beeminfra/status/1712243020668776921",
"https://github.com/beeminder/beeminder/pull/4499"],
"t": "2023-10-11"
}, { // ------------------------------------------------------------------------
"x": "Add a line showing admins the last time the \"fetch translog\" button was clicked, for reference",
"u": ["https://twitter.com/beeminfra/status/1713995705822626258",
"https://github.com/beeminder/beeminder/issues/4498",
"https://github.com/beeminder/beeminder/pull/4505"],
"d": "2023-09-28",
"t": "2023-10-16"
}, { // ------------------------------------------------------------------------
"x": "Renamed some internals with how we avoid deadbeating & charging special test- and meta- accounts, and also added quals for it.",
"u": ["https://twitter.com/beeminfra/status/1716567379856273599",
"https://github.com/beeminder/beeminder/pull/4496/files"],
"d": "2023-09-27",
"t": "2023-10-23",
}, { // ------------------------------------------------------------------------
"x": "We automated some tasks for anonymizing and exporting data for a science experiment with Darden",
"u": ["https://twitter.com/beeminfra/status/1719862999325065549","https://github.com/beeminder/beeminder/pull/4514"],
"d": "2023-10-09",
"t": "2023-11-01"
}, { // ------------------------------------------------------------------------
"x": "Added an airhorn to gather more information about a semi-frequent error from Garmin",
"u": ["https://github.com/beeminder/beeminder/commit/b59391761f7d4824f0ac3b8cb41e1d53876fb568",
"https://twitter.com/beeminfra/status/1722409847747236096"],
"d": "2023-11-06",
"t": "2023-11-08"
}, { // ------------------------------------------------------------------------
"x": "Updates to the nginx config to serve & proxy websockets so we can do modern railsy Hotwire stuff.",
"u": ["https://github.com/beeminder/beeploy/issues/148",
"https://twitter.com/beeminfra/status/1724943061455913222",
"https://github.com/beeminder/beeploy/pull/153"],
"d": "2023-01-03",
"t": "2023-11-15"
}, { // ------------------------------------------------------------------------
"x": "Improved the translog fetching for admins to be more specific about errors it encounters, and differentiate between errors vs nothing found.",
"u": ["https://github.com/beeminder/beeminder/pull/4563",
"https://twitter.com/beeminfra/status/1727444664289206440"],
"d": "2023-11-21",
"t": "2023-11-22"
}, { // ------------------------------------------------------------------------
"x": "Finished moving quals out of minitest into rspec. Also cleaned up github action related to tracking of the move.",
"u": ["https://twitter.com/beeminfra/status/1729953590268350476",
"https://github.com/beeminder/beeminder/pull/4575",
"https://github.com/beeminder/beeminder/issues/3503",
"https://github.com/beeminder/beeminder/pull/4558",
"https://github.com/beeminder/beeminder/pull/4559"],
"d": "2023-11-16",
"t": "2023-11-29"
}, { // ------------------------------------------------------------------------
"x": "Reduced re-tries in quals runs: sometimes we would hit a race in feature quals. Now we're using `expects` so the qual waits on page load before continuing.",
"u": ["https://twitter.com/beeminfra/status/1732561254290723117",
"https://github.com/beeminder/beeminder/pull/4574",
"https://github.com/beeminder/beeminder/issues/4572"],
t: "2023-11-27"
}, { // ------------------------------------------------------------------------
"x": "Adding (and removing) additional logging to cover / elucidate problems in a couple different domains.",
"u": ["https://twitter.com/beeminfra/status/1735094136813084798",
"https://github.com/beeminder/beeminder/pull/4602",
"https://github.com/beeminder/beeminder/pull/4596",
"https://github.com/beeminder/beeminder/pull/4539"],
"t": "2023-12-13"
}, { // ------------------------------------------------------------------------
"x": "Did a big refactor of how we store info about credits (aka honey money), to make it all queryable etc.",
"c": "iou ledger-style refactor of credit",
"u": ["https://twitter.com/beeminfra/status/1737571208890393034",
"https://github.com/beeminder/beeminder/pull/4560",
"https://twitter.com/beeminfra/status/1737571208890393034"],
t: "2023-12-20"
}, { // ------------------------------------------------------------------------
"x": "Make it more obvious in admin's sidebar if a user is deadbeat.",
"u": ["https://twitter.com/beeminfra/status/1740160528880906694",
"https://github.com/beeminder/beeminder/pull/4615",
"https://github.com/beeminder/beeminder/issues/3263"]
}, { // ------------------------------------------------------------------------
"x": "Increase build timeout in some github workflows, so it is consistent across all jobs.",
"u": ["https://github.com/beeminder/beeminder/pull/4593",
"https://twitter.com/beeminfra/status/1742702438170452198"],
"t": "2024-01-03"
}, { // ------------------------------------------------------------------------
"x": "Don't hide deadbeat graphs from admins now that it is more obvious in sidebar. Also added some basic quals for \"admin sees deadbeat graph\"",
"u": ["https://twitter.com/beeminfra/status/1745234300977684897",
"https://github.com/beeminder/beeminder/issues/3263",
"https://github.com/beeminder/beeminder/pull/4615"],
"d": "2023-12-12",
"t": "2024-01-10"
}, { // ------------------------------------------------------------------------
"x": "Skip Github Actions when keyword is present in the PR title, so we can run CI fewer times when creating multiple PRs at the same time.",
"u": ["https://twitter.com/beeminfra/status/1747780417837768957",
"https://github.com/beeminder/beeminder/pull/4660",
"https://github.com/beeminder/beeminder/issues/4656"],
"d": "2023-12-22"
}, { // ------------------------------------------------------------------------
"x": "Adjusted an excessively noisy slackhorn about the manachecker. Turns out we don't actually care about that case.",
"u": ["https://twitter.com/beeminfra/status/1750305010683138172",
"https://github.com/beeminder/beeminder/pull/4689"],
"d": "2024-01-12"
}, { // ------------------------------------------------------------------------
"x": "Added the web-console gem for development debugging etc.",
"u": ["https://twitter.com/beeminfra/status/1752806761562767582",
"https://github.com/beeminder/beeminder/issues/3162",
"https://github.com/beeminder/beeminder/pull/4612"],
"d": "2023-12-12",
"t": "2024-01-31"
}, { // ------------------------------------------------------------------------
"x": "Retired one of our background worker servers, and moved logs off of it, adjusted the translog fetcher to check archived logs too.",
"u": ["https://twitter.com/beeminfra/status/1755357181619429541",
"https://github.com/beeminder/beeminder/issues/4669",
"https://github.com/beeminder/beeminder/pull/4677",
"https://github.com/beeminder/beeminder/pull/4670",
"https://github.com/beeminder/beeminder/pull/4672"],
"d": "2024-01-06",
"t": "2024-02-07",
}, { // ------------------------------------------------------------------------
"x": "Turned up debug logs for request-ids, habitica dailies, and rssminder integration.",
"u": ["https://twitter.com/beeminfra/status/1757925211645825303",
"https://github.com/beeminder/beeminder/pull/4710",
"https://github.com/beeminder/beeminder/pull/4714",
"https://github.com/beeminder/beeminder/pull/4717"],
"d": "2024-01-25"
}, { // ------------------------------------------------------------------------
"x": "Fixed error handling in three background jobs that were causing things to wind up on resque failed queue instead of giving us diagnostics.",
"u": ["https://twitter.com/beeminfra/status/1760466591379267664",
"https://github.com/beeminder/beeminder/pull/4700"],
"d": "2024-01-17",
"t": "2024-02-21"
}, { // ------------------------------------------------------------------------
"x": "Added a new spec helper for \"eventually equal\", for when we need more granular control on how long to block on the result",
"u": ["https://twitter.com/beeminfra/status/1762982037403979962",
"https://github.com/beeminder/beeminder/pull/4546/files"],
"c": "random little part of big breaks page hotwire update",
"t": "2024-02-28"
}, { // ------------------------------------------------------------------------
"x": "Pin bundler to a version that works with our ruby version.",
"u": ["https://github.com/beeminder/beeminder/pull/4671",
"https://twitter.com/beeminfra/status/1765536433555845510"],
"t": "2024-03-06",
"c": "Docker build fails without this because the latest version of bundler doesn't support ruby < 3"
}, { // ------------------------------------------------------------------------
"x": "Refactoring in the Habitica autodata integration to make the api client align with current best-practices.",
"u": ["https://twitter.com/beeminfra/status/1767707767169847573",
      "https://github.com/beeminder/beeminder/pull/4779"],
"t": "2024-03-12",
"d": "2024-03-08",
}, { // ------------------------------------------------------------------------
"x": "Improve Mime handling, stop ignoring the Accept header, & remove a monkeypatch from ca2012; brings us closer to Rails standards, and necessary for Turbo to work.", 
"u": ["https://twitter.com/beeminfra/status/1770596696550146080",
"https://github.com/beeminder/beeminder/pull/4568",
"https://github.com/beeminder/beeminder/issues/4567"],
"d": "2023-11-24",
"t": "2024-03-20"
}, { // ------------------------------------------------------------------------
"x": "Added baremin amounts to the translog per workerbee request, since a common issue in support is \"I swear the page said I only needed +2!\"",
"u": ["https://twitter.com/beeminfra/status/1773240891525808400",
      "https://github.com/beeminder/beeminder/issues/4530",
      "https://github.com/beeminder/beeminder/pull/4810"],
"d": "2024-03-27",
"t": "2024-03-27"
}, { // ------------------------------------------------------------------------
"x": "Fixed some annoying alignment issues in the admin user-edit form and removed excess padding.",
"u": [
"https://twitter.com/beeminfra/status/1775761996291674127",
"https://github.com/beeminder/beeminder/pull/4819"],
"d": "2024-04-03",
"t": "2024-04-03",
}, { // ------------------------------------------------------------------------
"x": "Focusmate changed their oauth url, and we updated our integration to point to the new endpoint.",
"u": ["https://github.com/beeminder/beeminder/issues/4799",
"https://github.com/beeminder/beeminder/pull/4813",
"https://twitter.com/beeminfra/status/1778205969589370984"],
"d": "2024-03-29",
"t": "2024-04-10"
}, { // ------------------------------------------------------------------------
"x": "Added a \"remove subscription\" button for admins to use in those cases where we refund and downgrade immediately.",
"u": ["https://twitter.com/beeminfra/status/1783267005891846614",
      "https://github.com/beeminder/beeminder/issues/3665",
      "https://github.com/beeminder/beeminder/pull/4819"],
"d": "2024-04-03",
"t": "2024-04-24"
}, { // ------------------------------------------------------------------------
"x": "Fixed that remove premium plan button after a rewording broke it. And change rounding of datapoints/day to make sense with users less than a day old.",
"u": ["https://twitter.com/beeminfra/status/1785790221914951851",
            "https://github.com/beeminder/beeminder/issues/3665",
"https://github.com/beeminder/beeminder/pull/4853"],
"c": "While technically correct, it was confusing to admins to see 3 datapoint added, divided by 0.00043 of a day calculating out to a daily average of 7142 datapoints.",
"d": "2024-04-17",
"t": "2024-05-01"
}, { // ------------------------------------------------------------------------
"x": "Added instructions on updating the resque schedule and master copy of said to the beeploy repo README.",
"u": ["https://twitter.com/beeminfra/status/1788336886131696066"],
"d": "2024-05-08",
"t": "2024-05-08"
}, { // ------------------------------------------------------------------------
"x": "Generate a webp image for every image asset at precompile time, and view helper for rendering picture tags from Rails 7.1",
"u": ["https://twitter.com/beeminfra/status/1790820385002565638",
      "https://github.com/beeminder/beeminder/issues/4585",
      "https://github.com/beeminder/beeminder/pull/4595",
      "https://github.com/beeminder/beeminder/pull/4587"],
"d": "2023-12-05",
"t": "2024-05-15"
}, { // ------------------------------------------------------------------------
"x": "Removed braintree and trello and admin javascript libraries from paths where they're not needed.",
"u": ["https://x.com/beeminfra/status/1792989967297151303",
"https://github.com/beeminder/beeminder/issues/4642",
"https://github.com/beeminder/beeminder/issues/3155",
"https://github.com/beeminder/beeminder/pull/4643",
"https://github.com/beeminder/beeminder/issues/4631",
"https://github.com/beeminder/beeminder/pull/4644",
"https://github.com/beeminder/beeminder/issues/4652",
"https://github.com/beeminder/beeminder/pull/4653"],
"d": "2023-12-20",
"t": "2024-05-21"
}, { // ------------------------------------------------------------------------
"x": "Finish autoincrease => pledge cap refactor, removing final vestiges from javascript for goal setup.",
"u": ["https://x.com/beeminfra/status/1795955939943628923",
"https://github.com/beeminder/beeminder/pull/4865"],
"d": "2024-04-24"
}, { // ------------------------------------------------------------------------
"x": "Fix cassette names for certain VCR recorded web responses after changing the names of their quals.",
"u": ["https://x.com/beeminfra/status/1798468103480967283",
      "https://github.com/beeminder/beeminder/pull/4863",
      "https://github.com/beeminder/beeminder/pull/4861"],
"d": "2024-04-25",
"t": "2024-06-05"
}, { // ------------------------------------------------------------------------
"x": "Use timey Rails helper in the more-free-goals-button email, because \"12 hours\" makes way more sense than \"0.00057 months\" for admins on the receiving end.",
"u": ["https://x.com/beeminfra/status/1801013515521835122",
      "https://github.com/beeminder/beeminder/issues/4763",
      "https://github.com/beeminder/beeminder/pull/4819"],
"d": "2024-04-03",
"t": "2024-06-12",
"c": "this was fixing a user-invisible problem... but introduced a user-visible problem. so this gissue/PR has related UVIs as well."
}, { // ------------------------------------------------------------------------
"x": "Several improvements for admin sidetray, bringing more info top-of-mind, and adding additional user tracking metrics, and fewer if-statements.",
"u": ["https://x.com/beeminfra/status/1803552586227916969",
"https://github.com/beeminder/beeminder/pull/4936",
"https://github.com/beeminder/beeminder/pull/4941"],
"d": "2024-06-14",
"t": "2024-06-19"
}, { // ------------------------------------------------------------------------
"x": "Moved charges-related section of admin sidebar to its own partial for #housekeeping",
"u": ["https://github.com/beeminder/beeminder/pull/4974",
"https://x.com/beeminfra/status/1816590226736971947"],
"d": "2024-07-24",
"t": "2024-07-25"
}, { // ------------------------------------------------------------------------
"x": "bugfix with server-support side of android app beta that made it impossible to rename goals if you were opted into the beta.",
"u": ["https://github.com/beeminder/beeminder/pull/4942",
"https://x.com/beeminfra/status/1819141105872785814"],
"d": "2024-06-17",
"t": "2024-08-01",
"c": "not a UVI because it was only visible to adam and nicky because of beta opt-in"
}, { // ------------------------------------------------------------------------
"x": "Set up new development app and keys for our Garmin integration after a change in how they handle non-production apps.",
"u": ["https://github.com/beeminder/beeminder/pull/4987",
"https://x.com/beeminfra/status/1821682476529676508"],
"d": "2024-08-08",
"t": "2024-08-08"
}, { // ------------------------------------------------------------------------
"x": "Opportunistically removed a bunch of unused view helper methods from application, goals, and users helpers.",
"u": ["https://github.com/beeminder/beeminder/pull/5001",
"https://x.com/beeminfra/status/1824216412078084449"],
"d": "2024-08-15",
"t": "2024-08-15"
}, { // ------------------------------------------------------------------------
"x": "Also removed a bunch of very very old infrastructure (routes, views, controller methods etc) for the very very old concept of front/back-burnering.",
"u": ["https://github.com/beeminder/beeminder/pull/5001",
"https://x.com/beeminfra/status/1826762471224607089"],
"d": "2024-08-15",
"t": "2024-08-15"
}, { // ------------------------------------------------------------------------
"x": "Doing housekeeping on expired FCM tokens on our side, per the recommendations in docs. Not user visible to beedroid users.",
"u": [
"https://x.com/beeminfra/status/1831479766912004190",
"https://github.com/beeminder/beeminder/pull/5012"],
"d": "2024-08-23",
"t": "2024-09-04"
}, { // ------------------------------------------------------------------------
"x":"Set up email reports and DMARC policy for background mail domain, and documented it all in the How-Beeminder-Sends-Email wiki.",
"u": [
"https://x.com/beeminfra/status/1834002019444781059",
"https://github.com/beeminder/beeminder/issues/4722",
],
"t": "2024-09-11"
}, { // ------------------------------------------------------------------------
"x": "Added relative tmin to admin interface as well as adding tmin quals.",
"u": ["https://x.com/beeminfra/status/1836546550564294851",
"https://github.com/beeminder/beeminder/pull/5020"],
"t": "2024-09-18"
}, { // ------------------------------------------------------------------------
"x": "Actually remove android tokens when we get a 404 response from FCM.",
"u": ["https://x.com/beeminfra/status/1839040905082450401",
"https://github.com/beeminder/beeminder/pull/5012"],
"d": "2024-08-23",
"t": "2024-09-25"
}, { // ------------------------------------------------------------------------
"x": "Along with the user-visible #bugfix, added a sanity check for format of ids in habitica api data, to catch future backwards-incompatible changes.",
"u": ["https://github.com/beeminder/beeminder/pull/5013/commits/07d734b8c081d96839a2a3ef073cc1fdcde437db",
"https://x.com/beeminfra/status/1844515161677365762"],
"t": "2024-10-10"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Job to migrate existing android tokens into new fcm token store along with timestamps.",
"u": ["https://x.com/beeminfra/status/1847051267006517472"],
"t": "2024-10-17"
}, { // ------------------------------------------------------------------------
"x": "Fixed a non-user-visible syntax error in Honeycomb tracking for the payment methods controller.",
"u": ["https://x.com/beeminfra/status/1848485979184636193",
"https://github.com/beeminder/beeminder/pull/4048",
"https://github.com/beeminder/beeminder/issues/4047"],
"d": "2024-01-07",
"t": "2024-10-21"
}, { // ------------------------------------------------------------------------
"x": "Fixed a long standing annoyance for admins/devs where the advanced entry box doesn't work on your test goals.",
"u": ["https://x.com/beeminfra/status/1852099482609160570","https://github.com/beeminder/beeminder/pull/5054"],
"c": "or at all in dev. it was from a namespace conflict with the admin bar."
}, { // ------------------------------------------------------------------------
"x": "Cleanup of whitespace, line lengths, commas, and :vcr declarations in elf spec.",
"u": ["https://github.com/beeminder/beeminder/pull/5062",
"https://x.com/beeminfra/status/1854671846047924639"],
"d": "2024-11-05",
"t": "2024-11-07"
}, { // ------------------------------------------------------------------------
"x": "Include the username in deleted goal email's subject line (for the workerbees).",
"u": ["https://github.com/beeminder/beeminder/pull/5026/files",
"https://x.com/beeminfra/status/1857224402812969160"]
}, { // ------------------------------------------------------------------------
"x": "Enabled HSTS a while back and now increased HSTS time period to one month.",
"u": ["https://x.com/beeminfra/status/1859738635765211383",
"https://github.com/beeminder/beeminder/issues/3150",
"https://github.com/beeminder/beeminder/pull/5086"],
"d": "2024-11-21",
"t": "2024-11-21"
}, { // ------------------------------------------------------------------------
"x": "Documented and refactored some confusing old names with manipulating graph matrixes.",
"c": "This included changing 'restart'=>'jumpline', and others.",
"u": ["https://x.com/beeminfra/status/1865191028086706212",
"https://github.com/beeminder/beeminder/pull/5093"],
"t": "2024-12-06",
"d": "2024-12-03"
}, { // ------------------------------------------------------------------------
"x": "Minor improvement to translogging -- fixed a bug in scheduling weekends that introduced a different time format to the graph matrix.",
"u": ["https://x.com/beeminfra/status/1867689539034395097",
"https://github.com/beeminder/beeminder/pull/5104/files"],
"d": "2024-12-13",
"t": "2024-12-13"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ----------------------------------------------------------- end batch */ ]
