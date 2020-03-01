var batch2020jan = [{
"x": "Zapier accidentally broke our integration, which we fixed thanks to Adam and Mary and Nikki. Emailed affected users and cleaned it all up! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1212885935823577088",
      "https://github.com/beeminder/beeminder/issues/981", // has postmortem and stuff
      "https://github.com/beeminder/beeminder/pull/982",
      "https://github.com/beeminder/beeminder/pull/984"],
"d": "2019-12-20",
"t": "2020-01-02",
}, { // ------------------------------------------------------------------------
"x": "Google was granting us more permissions than we asked for for GmailZero; we made it so when people re-auth we drop the previous permissions we no longer need",
"u":["https://twitter.com/beemuvi/status/1213254244221894656",
     "https://github.com/beeminder/beeminder/commit/c3f57e27b81aad41140e1b5e465ee5fc2e5ec66a",
     "https://github.com/beeminder/beeminder/commit/616a9da24cf7726dafc05cc1c6ffc274e3fd194b",
     "https://github.com/beeminder/beeminder/pull/999"],
"d": "2020-01-02",
"t": "2020-01-03",
}, { // ------------------------------------------------------------------------
"x": "Added missing arrows on the GmailZero dropdowns for picking labels and read/unread status. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1213254348945289216",
      "https://github.com/beeminder/beeminder/issues/992",
      "https://github.com/beeminder/beeminder/pull/995"],
"d": "2020-01-02",
"t": "2020-01-03",
}, { // ------------------------------------------------------------------------
"x": "Another GmailZero tweak: we now alphabetize the labels in the dropdown (except INBOX, which is always on top)",
"u": ["https://twitter.com/beemuvi/status/1214338515518906368",
      "https://github.com/beeminder/beeminder/pull/1008",
      "https://github.com/beeminder/beeminder/issues/994"],
"d": "2020-01-02",
"t": "2020-01-06",
}, { // ------------------------------------------------------------------------
"x": "Your gallery of archived goals is now alphabetized. The previous order was ... we're not sure. Whatever order the database felt like giving them to us in?",
"u": ["https://twitter.com/beemuvi/status/1214690759472902145",
      "https://github.com/beeminder/beeminder/pull/1019",
      "https://github.com/beeminder/beeminder/issues/1007"],
"d": "2020-01-06",
"t": "2020-01-07",
}, { // ------------------------------------------------------------------------
"x": "Strava integration #bugfix: we weren't picking up updates to your workouts, like if you edited your distance in Strava (hopefully for legit reasons!)",
"u": ["https://twitter.com/beemuvi/status/1214707562915880961",
      "https://github.com/beeminder/beeminder/pull/1015"],
"d": "2020-01-03",
"t": "2020-01-07",
"c": "We were just failing to save the updates to the existing datapoint. :facepalm: This also meant that you could change your data on Beeminder's side and we'd fail to overwrite with Strava's version of reality like we intended",
}, { // ------------------------------------------------------------------------
"x": "Creating a Strava goal with one of the \"effort-weighted time\" metrics (walking counts as half-time) used the wrong units (miles instead of hours)! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1215733631089397760",
      "https://github.com/beeminder/beeminder/issues/1011",
      "https://github.com/beeminder/beeminder/pull/1022"],
"d": "2020-01-07",
"t": "2020-01-10",
}, { // ------------------------------------------------------------------------
"x": "Fixed a security bug with http://beeminder.com/widgets that could leak some limited information about private goals! Now widgets do a proper Slytherin 404. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1216880198848667649",
      "https://github.com/beeminder/beeminder/issues/1026",
      "https://github.com/beeminder/beeminder/pull/1027"],
"d": "2020-01-10",
"t": "2020-01-13",
}, { // ------------------------------------------------------------------------
"x": "Another GmailZero #bugfix where if you weren't auth'd yet then goal creation would skip over the part where you pick your label after auth'ing",
"u": ["https://twitter.com/beemuvi/status/1216881509480583168",
      "https://github.com/beeminder/beeminder/issues/1005",
      "https://github.com/beeminder/beeminder/pull/1021"],
"d": "2020-01-06",
"t": "2020-01-13",
"c": "Fixed this by modeling GmailZero on the RescueTime integration",
}, { // ------------------------------------------------------------------------
"x": "We were giving a 500 error if you tried to unset your precision setting entirely; now it gives a nice error telling you it has to be a number. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1217241127062884353",
      "https://github.com/beeminder/beeminder/issues/1016",
      "https://github.com/beeminder/beeminder/pull/1030"],
"d": "2020-01-10",
"t": "2020-01-14",
"c": "Internally: the quantum field",
}, { // ------------------------------------------------------------------------
"x": "Fixed some ugly trailing .0s in the Goal Progress section of the Statistics tab and things that ought to be showing as times (HH:MM) if timey. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1217603365049257984",
      "https://github.com/beeminder/beeminder/pull/1041",
      "https://github.com/beeminder/beeminder/issues/955"],
"d": "2020-01-15",
"t": "2020-01-15",
}, { // ------------------------------------------------------------------------
"x": "In a bunch of places the timey (HH:MM) setting wasn't being respected. Checking the box wasn't making datapoints show as timey, etc. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1217603670080020480",
      "https://github.com/beeminder/beeminder/issues/1037",
      "https://github.com/beeminder/beeminder/pull/1038"],
"d": "2020-01-15",
"t": "2020-01-15",
"c": "We accidentally left the internal refactor of hhmmformat->timey unfinished! For some goals the datapoints would show as timey but not the baremin/hardcap and for others it would be vice versa depending on if gunits was 'hours' or if the timey checkbox was set. It was a big mess. E.g., when you made a RescueTime goal we'd set it up as hhmmformat and not timey. If you had a goal with units in hours we'd display datapoints values time and baremin/hardcap not. Conversely if you set the 'timey' setting to true in your goal settings, you wouldn't see the datapoints values change to timey, just the baremin/hardcap headers.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "New feature! Schedule breaks for all your goals at once! http://beeminder.com/breaks (still very beta; report bugs if you try it!)",
"u": ["https://twitter.com/beemuvi/status/1217945227849134080",
      "https://github.com/beeminder/beeminder/commit/7232e5dff35bc298f2eabdb14ce215fe8c6188ee",
      "https://github.com/beeminder/beeminder/issues/1043"],
"d": "2020-01-16",
}, { // ------------------------------------------------------------------------
"x": "We were failing silently and opaquely when you gave a goalname that was too long when creating a new goal. Now we give an actual error. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1218335262452805632",
      "https://github.com/beeminder/beeminder/issues/946",
      "https://github.com/beeminder/beeminder/pull/1049"],
"d": "2020-01-17",
"t": "2020-01-17",
}, { // ------------------------------------------------------------------------
"x": "For non-do-less goals we used calendar day not Beeminder day when ratcheting and if it was after an earlybird deadline you got 1 too few safe days! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1218335631815794691",
      "https://github.com/beeminder/beeminder/issues/949",
      "https://github.com/beeminder/beeminder/pull/1045"],
"d": "2020-01-16",
"t": "2020-01-17",
}, { // ------------------------------------------------------------------------
"x": "Although it's the same #bugfix there was a subjectively very different, more severe special case: ratcheting to 0 safe days in that scenario instaderailed you!",
"u": ["https://twitter.com/beemuvi/status/1219378880521240578",
      "https://github.com/beeminder/beeminder/issues/949",
      "https://github.com/beeminder/beeminder/pull/1045"],
"d": "2020-01-16",
"t": "2020-01-20",
}, { // ------------------------------------------------------------------------
"x": "Another #bugfix from UVI#3083: if you derailed and then changed an earlybird deadline to be later we'd wrongly show you in the red again",
"u": ["https://twitter.com/beemuvi/status/1219384848462139393",
      "https://github.com/beeminder/beeminder/issues/256",
      "https://github.com/beeminder/beeminder/issues/114"],
"t": "2020-01-20",
"c": "You wouldn't actually derail at the new later deadline. Not a new bugfix, just confirmed that it was fixed by red-yesterday.",
}, { // ------------------------------------------------------------------------
"x": "Improved error detection on http://beeminder.com/breaks -- it was not removing the angry red if you broke a cell and then fixed it. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1219740749022937088",
      "https://github.com/beeminder/beeminder/commit/fede428094ba284e801f0730d1603a5e8068f6ae",
      "https://github.com/beeminder/beeminder/pull/1046",
      "https://github.com/beeminder/beeminder/issues/1043"],
"d": "2020-01-17",
"t": "2020-01-21",
}, { // ------------------------------------------------------------------------
"x": "Fixed a CSS alignment problem on http://beeminder.com/breaks (left-aligning the Break Details) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1220137725635878912",
      "https://github.com/beeminder/beeminder/commit/e8485d86b3ae5c32f5a2a547250c21fbd7a74264",
      "https://github.com/beeminder/beeminder/pull/1046",
      "https://github.com/beeminder/beeminder/issues/1043"],
"d": "2020-01-17",
"t": "2020-01-22",
}, { // ------------------------------------------------------------------------
"x": "We no longer say wrong things about how much Sleep As Android's SleepCloud Backup add-on costs. And we now explain that it's so we can read their data.",
"u": ["https://twitter.com/beemuvi/status/1220144708887822336",
      "https://github.com/beeminder/beeminder/pull/1055",
      "https://github.com/beeminder/beeminder/issues/1054"],
"d": "2020-01-22",
"t": "2020-01-22",
}, { // ------------------------------------------------------------------------
"x": "We now include datapoint text in the \"are you sure?\" confirmation that pops up when you delete a datapoint, for extra surety when confirming",
"u": ["https://twitter.com/beemuvi/status/1220509288080105473",
      "https://github.com/beeminder/beeminder/pull/1056",
      "https://github.com/beeminder/beeminder/issues/1053"],
"d": "2020-01-23",
"t": "2020-01-23",
}, { // ------------------------------------------------------------------------
"x": "We don't want to alter precision of datapoint values but some autodata sources can report things like 1.9999999999973 so we now use a cap of 6 decimal places",
"u": ["https://twitter.com/beemuvi/status/1220860749465014274",
      "https://github.com/beeminder/beeminder/pull/1057",
      "https://github.com/beeminder/beeminder/issues/1053"],
"d": "2020-01-23",
"t": "2020-01-24",
"c": "For recent datapoints shown on the dashboard and advanced data entry",
}, { // ------------------------------------------------------------------------
"x": "Rearranged the data settings and changed the button text to not erroneously imply that webhooks are a data source",
"u": ["https://twitter.com/beemuvi/status/1220866096426713088",
      "https://github.com/beeminder/beeminder/pull/1062",
      "https://github.com/beeminder/beeminder/commit/b1dd7f7a31d8beb71835784fda1b7f8d98783747",
      "https://github.com/beeminder/beeminder/issues/1052"],
"d": "2020-01-23",
"t": "2020-01-24",
}, { // ------------------------------------------------------------------------
"x": "Made button texts in settings consistent: \"save changes\" &rarr; \"update deadline &amp; reminder\", \"add\" &rarr; \"add supporter\", \"save settings\" &rarr; \"update custom settings\"",
"u": ["https://twitter.com/beemuvi/status/1220866290232856581",
      "https://github.com/beeminder/beeminder/pull/1062",
      "https://github.com/beeminder/beeminder/issues/1052"],
"d": "2020-01-23",
"t": "2020-01-24",
}, { // ------------------------------------------------------------------------
"x": "Eep-ectomy! We changed all the web copy to be consistent about \"beemergency\" and \"beemergency day\" instead of \"eep day\", cute as that was",
"u": ["https://twitter.com/beemuvi/status/1222323483692023809",
      "https://github.com/beeminder/beeminder/pull/1012",
      "https://github.com/beeminder/beeminder/pull/1013",
      "https://github.com/beeminder/beeminder/pull/1074",
      "https://github.com/beeminder/beeminder/issues/182",
      "https://github.com/beeminder/apidocs/commit/246acc80aeb8104158e812a3b0a3cabe7d8a1f34",
      "https://github.com/beeminder/apidocs/commit/ca854a99ccd56a4181aeae9243ad15c0adc896bc"],
"d": "2020-01-28",
"t": "2020-01-28",
}, { // ------------------------------------------------------------------------
"x": "Eep-ectomy part 2! We found additional instances in our API docs! Also we had instances of \"emergency day\" that we also changed to \"beemergency day\".",
"u": ["https://twitter.com/beemuvi/status/1222323538146627584",
      "https://github.com/beeminder/beeminder/pull/1012",
      "https://github.com/beeminder/beeminder/pull/1013",
      "https://github.com/beeminder/beeminder/pull/1074",
      "https://github.com/beeminder/beeminder/issues/182"],
"d": "2020-01-28",
"t": "2020-01-28",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We finally fully, officially killed auto-widening roads: noisy roads are now fixed at their current widths. We're emailing everyone affected.",
"u": ["https://twitter.com/beemuvi/status/1222685517029855232",
      "https://blog.beeminder.com/autowide/",
      "https://github.com/beeminder/beeminder/pull/1077"],
"d": "2020-01-29",
"t": "2020-01-29",
}, { // ------------------------------------------------------------------------
"x": "Eep-ectomy part 3! Updated http://help.beeminder.com to be consistent in always saying \"beemergency\" (or \"beemergency day\") instead of \"eep\" or \"emergency\"",
"u": ["https://twitter.com/beemuvi/status/1223040206632185856"],
"t": "2020-01-30",
"c": "By Nikki and Danny",
}, { // ------------------------------------------------------------------------
"x": "Brought help docs up to date for GmailZero & Withings: https://help.beeminder.com/article/82-gmail & https://help.beeminder.com/article/90-nokia-health-withings",
"u": ["https://twitter.com/beemuvi/status/1223040439118258177"],
"t": "2020-01-30",
"c": "By Nikki and Danny",
}, { // ------------------------------------------------------------------------
"x": "Put back the the \"About You\" and \"Your Site\" fields in Account Settings. #redesign #regression",
"u": ["https://twitter.com/beemuvi/status/1223407478630576131",
      "https://github.com/beeminder/beeminder/issues/1036",
      "https://github.com/beeminder/beeminder/pull/1084"],
"d": "2020-01-31",
"t": "2020-01-31",
}, /* --------------------------------------------------------- end 2020jan */ ]

var batch2020feb = [{
"x": "Additional #regression #bugfix: Added \"About You\" to the gallery page (where \"Your Site\" has been showing this whole time)",
"u": ["https://twitter.com/beemuvi/status/1224474100283822080",
      "https://github.com/beeminder/beeminder/issues/1036",
      "https://github.com/beeminder/beeminder/pull/1084"],
"d": "2020-01-31",
"t": "2020-02-03",
}, { // ------------------------------------------------------------------------
"x": "We only linkify your site URL there if you're a premium subscriber (we were getting lots of spam signups in the olden days motivated by us linkifying that)",
"u": ["https://twitter.com/beemuvi/status/1224475657712754688",
      "https://github.com/beeminder/beeminder/issues/1036",
      "https://github.com/beeminder/beeminder/pull/1084"],
"d": "2020-01-31",
"t": "2020-02-03",
"c": "Similar to UVI#2813 but that one's for URLs in the goal description; this is for the \"Your Site\" URL",
}, { // ------------------------------------------------------------------------
"x": "We (i.e., @shanaqui) updated the Habitica autodata integration help page with some common issues. https://help.beeminder.com/article/83-habitica",
"u": ["https://twitter.com/beemuvi/status/1225221043091951616"],
"d": "2020-02-04",
"t": "2020-02-05",
"c": "By Nikki",
}, { // ------------------------------------------------------------------------
"x": "Changed the \"Load All Datapoints\" button to \"Load More Datapoints\" button since the former could bring your browser to its knees",
"u": ["https://twitter.com/beemuvi/status/1225580780384067595",
      "https://github.com/beeminder/beeminder/issues/1091"],
"d": "2020-02-05",
"t": "2020-02-06",
}, { // ------------------------------------------------------------------------
"x": "By the Pareto Dominance Principle, we decided to also keep \"Load All Datapoints\", just as a down-popped link",
"u": ["https://twitter.com/beemuvi/status/1225582482231185409",
      "https://github.com/beeminder/beeminder/issues/1091"],
"d": "2020-02-06",
"t": "2020-02-06",
}, { // ------------------------------------------------------------------------
"x": "Zooming on road.beeminder.com is smoother now; it was accidentally leaking the scroll event to the web page itself when the mouse was on the datapoints. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1225940168764342272",
      "https://github.com/beeminder/road/commit/5ac8f3a9ed05b0e87de9666a6854392d77fbfbab"],
"d": "2020-02-07",
"t": "2020-02-07",
"c": "#beebrain",
}, { // ------------------------------------------------------------------------
"x": "We introduced a bug with premium sign-up on Friday -- you'd get a 500 error if you tried to sign up without a coupon code! #bugfix (fixed as of last night!)",
"u": ["https://twitter.com/beemuvi/status/1227026365855096832",
      "https://github.com/beeminder/beeminder/pull/1099"],
"d": "2020-02-09",
"t": "2020-02-10",
"c": "The bug was because of the SSC Podcast airhorn Bee added which blithely assumed a coupon code existed and tried to downcase it.",
}, { // ------------------------------------------------------------------------
"x": "Updated help docs for custom goals to remove references to integery & noisy settings, other copyediting, typo fixing, and fussing with layout. https://help.beeminder.com/article/97-custom-goals",
"u": ["https://twitter.com/beemuvi/status/1227027932679303168"],
"d": "2020-02-10",
"t": "2020-02-10",
"c": "By Nikki mostly and Danny",
}, { // ------------------------------------------------------------------------
"x": "Better x-axis tick mark separation for smaller graphs",
"u": ["https://twitter.com/beemuvi/status/1227392622886436865",
      "https://github.com/beeminder/road/commit/347ddcaddcad1bc5c119ec41a8caf2e93ce99986"],
"d": "2020-02-07",
"t": "2020-02-11",
"c": "By Uluc. #beebrain",
}, { // ------------------------------------------------------------------------
"x": "Typo fix in our http://beeminder.com/premium copy (\"kindler\") #bugfix HT @propensive esp. for the creative rationalization involving funeral pyres",
"u": ["https://twitter.com/beemuvi/status/1227754407749545985",
      "https://github.com/beeminder/beeminder/compare/b711a5ede399...bb8fa22c079e"],
"d": "2020-02-12",
"t": "2020-02-12",
}, { // ------------------------------------------------------------------------
"x": "Nixed garish colored regions for Yellow Brick Half-Plane; now very similar to previous graphs but with thin colored lines showing amounts of safety buffer",
"u": ["https://twitter.com/beemuvi/status/1227754969975029760",
      "https://github.com/beeminder/road/commit/f1a6952eb9beb5510e7da498be6fef44774e2f2f"],
"d": "2020-02-11",
"t": "2020-02-12",
"c": "By Uluc. #beebrain #ybhp",
}, { // ------------------------------------------------------------------------
"x": "A bunch of tweaks to graph rendering including more consistent/subtle skull&amp;crossbones without the weird outline around it",
"u": ["https://twitter.com/beemuvi/status/1227754969975029760",
      "https://github.com/beeminder/road/commit/599f2cb64f9762b541850d8bdcf37768de56353e"],
"d": "2020-02-11",
"t": "2020-02-12",
"c": "#beebrain",
}, { // ------------------------------------------------------------------------
"x": "Watermarks are consistently/fully in the background and don't interact weirdly with any graph elements that overlap with them",
"u": ["https://twitter.com/beemuvi/status/1227755318278443009",
      "https://github.com/beeminder/road/commit/f0097097bb8b6bf1e15d312ce3e3cf43cd5c82ca",
      "https://github.com/beeminder/road/commit/969624852c4c499c822c139e60c8e843af275b5b",
      "https://github.com/beeminder/road/commit/599f2cb64f9762b541850d8bdcf37768de56353e"],
"d": "2020-02-11",
"t": "2020-02-12",
"c": "By Uluc. #beebrain",
}, { // ------------------------------------------------------------------------
"x": "The so-called pink zone is back for yellow brick half-plane graphs, in addition to the gray lines (UVI#3224). Let there be no doubt how verboten this zone is!",
"u": ["https://twitter.com/beemuvi/status/1228114279850598400",
      "https://github.com/beeminder/road/commit/88b3efc880b0fac9f5d391813033c3f2f504ab03"],
"d": "2020-02-13",
"t": "2020-02-13",
"c": "AKA nozone AKA oinkzone. #beebrain #ybhp",
}, { // ------------------------------------------------------------------------
"x": "Zero-width roads were sometimes showing the wrong color on the dashboard. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1228471798783545344",
      "https://github.com/beeminder/beeminder/issues/1082",
      "https://github.com/beeminder/road/commit/c1f41de84092cd4dfc7851384d14e841940d9cb5"],
"d": "2020-02-14",
"t": "2020-02-14",
"c": "#beebrain prereq for YBHP deployment",
}, { // ------------------------------------------------------------------------
"x": "Two tiny UVIs in one: made our Fitbit integration more robust to Fitbit's API timing out on us + opened yellow brick half-plane opt-in to anyone w/ custom goals",
"u": ["https://twitter.com/beemuvi/status/1229546632938541057",
      "https://github.com/beeminder/beeminder/pull/1113",
      "https://github.com/beeminder/beeminder/pull/1112"],
"d": "2020-02-14",
"t": "2020-02-17",
}, { // ------------------------------------------------------------------------
"x": "Fixed some bad links to our API that were showing up in Google search results (by adding redirects). HT @fredantell",
"u": ["https://twitter.com/beemuvi/status/1229548209376088064",
      "https://github.com/beeminder/beeminder/pull/1114",
      "https://github.com/beeminder/beeminder/issues/1096"],
"d": "2020-02-17",
"t": "2020-02-17",
}, { // ------------------------------------------------------------------------
"x": "Newly added datapoints were sorting to the bottom of the dashboard with sort-by = 'recently updated', rather than the top where they ought to've gone. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1229922524844085248",
      "https://github.com/beeminder/beeminder/pull/1116",
      "https://github.com/beeminder/beeminder/issues/1086"],
"d": "2020-02-18",
"t": "2020-02-18",
"c": "This was a javascript layer thing, so reloading the page would correct the sort problem. But now there's no problem!",
}, { // ------------------------------------------------------------------------
"x": "Myriad fixes, tweaks, & improvements to the isolines (thin lines in yellow brick half-plane graphs) for both static graphs and interactive ones in road editor",
"u": ["https://twitter.com/beemuvi/status/1229928488783601664",
      "https://github.com/beeminder/road/issues/95",
      "https://github.com/beeminder/road/commit/5c358df6f97847357817d519f66e1370a4a3bfa5",
      "https://github.com/beeminder/road/commit/46545e784e47e7fed50647ab475643ec03c0ac29",
      "https://github.com/beeminder/road/commit/0c4af65d42167155682f9b7b41e3dc439c54088d",
      "https://github.com/beeminder/road/commit/df6cfbc1be5ce536c1093c18b0fa9e683f77aae3",
      "https://github.com/beeminder/road/commit/5ac8f3a9ed05b0e87de9666a6854392d77fbfbab",
      "https://github.com/beeminder/road/commit/31403fba5a477950696f3d35badf8c6a588d9d96"],
"t": "2020-02-18",
}, { // ------------------------------------------------------------------------
"x": "More fixes & tweaks for the isolines, like special cases for vertical segments (we could milk this for a lot of UVIs but Uluc is too fast to keep up with)",
"u": ["https://twitter.com/beemuvi/status/1229928591657295873",
      "https://github.com/beeminder/road/commit/e626158bc17550a49e9096805f3b7020a1069f26",
      "https://github.com/beeminder/road/commit/ac0eccab4578ee0ada81a80f26400c677e19e044"],
"t": "2020-02-18",
}, { // ------------------------------------------------------------------------
"x": "If you delete your Duolingo account / change username (/ make it private?) we now notice and put up a banner letting you know we can no longer fetch your data",
"u": ["https://twitter.com/beemuvi/status/1230655886902751232",
      "https://github.com/beeminder/beeminder/pull/1123"],
"d": "2020-02-20",
"t": "2020-02-20",
}, { // ------------------------------------------------------------------------
"x": "A big deal for certain supernerds for now and probably normal people later: Added an urgency load metric to the user API output (and put it in the API docs)",
"u": ["https://twitter.com/beemuvi/status/1230656086341873665",
      "https://github.com/beeminder/beeminder/pull/1122"],
"d": "2020-02-20",
"t": "2020-02-20",
}, { // ------------------------------------------------------------------------
"x": "We (mostly @shanaqui again) added lots of exposition to the help docs for Do Less goals and did a bunch of editing to both that and the Do More docs",
"u": ["https://twitter.com/beemuvi/status/1230704579840376832",
      "https://help.beeminder.com/article/67-do-less-goals",
      "https://help.beeminder.com/article/66-do-more-goals"],
"c": "One thing in particular was adding the advice about turning a do-less-of-thing goal into a do-more goal for thing-free days",
}, { // ------------------------------------------------------------------------
"x": "After derailing, the weekends-off scheduler could interfere with your scheduled post-derail-mercy break, cutting it short. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1232104160901791744",
      "https://github.com/beeminder/beeminder/pull/1129",
      "https://github.com/beeminder/beeminder/issues/316"],
"d": "2020-02-24",
"t": "2020-02-24",
"c": "Three bugfixes with weekends-off in one!",
}, { // ------------------------------------------------------------------------
"x": "If you had a short break scheduled in your road, the weekends-off scheduler could overwrite that, unbreaking your break. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1232104413247893504",
      "https://github.com/beeminder/beeminder/pull/1129",
      "https://github.com/beeminder/beeminder/issues/528"],
"d": "2020-02-24",
"t": "2020-02-24",
"c": "Three bugfixes with weekends-off in one!",
}, { // ------------------------------------------------------------------------
"x": "We had a weird corner case where if you toggled weekends-off off and back on again, it would buggily flatten the whole current week of your road. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1232105793807237120",
      "https://github.com/beeminder/beeminder/pull/1129",
      "https://github.com/beeminder/beeminder/issues/329"],
"d": "2020-02-24",
"t": "2020-02-24",
"c": "Three bugfixes with weekends-off in one!",
}, { // ------------------------------------------------------------------------
"x": "We managed to break but then fix all of the doc.beeminder.com/* links. In case that's too cheap a UVI, we also wrote some copy for http://doc.beeminder.com",
"u": ["https://twitter.com/beemuvi/status/1232805973191847937"],
"t": "2020-02-26",
}, { // ------------------------------------------------------------------------
"x": "For the past several weeks we've had cases of mail delayed by several hours (upgrading Rails, long story) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1232820775301763072",
      "https://github.com/beeminder/beeminder/pull/1111"],
"c": "Something changed with usermailer in the Rails 4.0 to 4.2 upgrade and we were having to manually retry mail jobs",
}, { // ------------------------------------------------------------------------
"x": "We added a new server to process background jobs. The user-visibility is that your graphs should refresh faster when they hit their deadlines. Ekers beware!",
"u": ["https://twitter.com/beemuvi/status/1233189829493448704",
      "https://github.com/beeminder/beeploy"],
"t": "2020-02-27",
"c": "That server is fisher2",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2020feb */ ]

var staged = [ {
}, { // ------------------------------------------------------------------------
"x": "http://beeminder.com/breaks was actually ignoring the break rate passed in when scheduling a break and just using 0 instead. Especially bad for do-less! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1233554622608019456",
      "https://github.com/beeminder/beeminder/pull/1140/commits/d3e64a67fd91ed4e515bbf1a94cfece770999050",
      "https://github.com/beeminder/beeminder/issues/1048"],
"d": "2020-02-28",
"t": "2020-02-28",
}, { // ------------------------------------------------------------------------
"x": "beeminder.com/breaks now drastically prettier: (1) added fancy Beeminder-style checkboxes",
"u": ["https://twitter.com/beemuvi/status/1233556643377565696"
     ],
"d": "2020-02-28",
"t": "2020-02-28",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]

/*********************************************************************************************************************************************************************
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
MEGABREAK CSS
* added fancy beeminder-styled checkboxes
* added weekend-rate for do less goals
* fixed margins & line height & spacing in intro paragraph text
* fixed myriad tiny alignment issues (left justify, text baseline is all the same across a row, etc)
* made the disabled form fields more obviously downpopped
* made the take-a-break off/vs/on way more clear/downpopped
* moved the take-a-break checkbox closer to the form
* updated header for doless to use buffer instead of days
"u": ["https://github.com/beeminder/beeminder/pull/1140/commits/7807c96b05b87bea384a39944854cc9e5ffd2d58",
"https://github.com/beeminder/beeminder/issues/1059",
"https://github.com/beeminder/beeminder/issues/1058",
"https://github.com/beeminder/beeminder/issues/1050"]
i fixed a bunch of fussy stuff like alignment and margins and font spacing/lineheight on the text at the top, and i added our fancy-style checkboxes and made the “this is disabled because you don’t have permission for it” way more better and fixed the ugly shit with crossing stuff out when the “take a break” line is disabled
"d": "2020-02-28",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
GMAILZERO: change blog link (probably wait for other copy changes before tweeting)
https://github.com/beeminder/beeminder/commit/39cd4142c8fa119418ab5996187e77b53c3efb39
https://github.com/beeminder/beeminder/issues/1002
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
updated twitter gem [this might fix a bug with hashtag minding. need to check]
https://github.com/beeminder/beeminder/pull/1067
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TOO LAME???---v
}, { // ------------------------------------------------------------------------   
Wrap initial datapoint comment in shn.
by adam
https://github.com/beeminder/beeminder/issues/948
https://github.com/beeminder/beeminder/pull/950
https://github.com/beeminder/beeminder/commit/0435e5e5cc379df09b83111773c25183ed933c8f
}, { // ------------------------------------------------------------------------ 
}, { // ------------------------------------------------------------------------   
}, { // ------------------------------------------------------------------------
SAFESUM
1. Add safesum and test for safesum.
   https://github.com/beeminder/beeminder/commit/52a60651c8d48f340d3ef2958dccc75c01c31669
   https://github.com/beeminder/beeminder/pull/953
2. https://github.com/beeminder/beeminder/issues/830
}, { // ------------------------------------------------------------------------
RASH BUG -- will this count as user-visible?
https://github.com/beeminder/beeminder/issues/957
https://github.com/beeminder/beeminder/commit/d36a498b191218de3430e37e9f011be505a66335
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
SCHEDGE:
1. got rid of the "Increase the pledge each time you derail" checkbox on the goal page
}, { // ------------------------------------------------------------------------
fixes timeouts in jsbrain_server? https://github.com/beeminder/road/issues/51
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Super mini: removed \"Deprecated\" from the 'id' field in the api docs Goal resource -- https://changelog.beeminder.com/#2104 sort of myopically semi-broke the api, since we want you to use the slug as the identifier, but now you can change the goalname, so we'd definitely better keep the goal id around so api clients can piece things back together if someone goes and changes a goalname on them."
"c": "it's super mini, but took lots of words to say the things."
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
wakatime integration?
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~----------------------------- CANDIDATES -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
wordpress plugin: github.com/beeminder/beeminder-ping
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~---------------------------------- IDEAS -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
1. abslnw conversion for deathtonoisy means various UVIs like no more stupidly conservatively saying safe days to centerline because the stupid roadwidth could stupidly change
2. http://forum.beeminder.com/t/please-let-me-rename-archived-goals/2746
3. DREEV: skatesum in help.beeminder.com
4. DREEV: point to help.beeminder.com in blog.beeminder.com/newbees and vice versa
5. proper buttons on the blog like at the end of blog.beeminder.com/strava
6. strava activity links on the datapoints page <= do that too for IFTTT and runkeeper where we get an event/recipe URI from the service
7. https://forum.beeminder.com/t/api-create-goal-documentation-needs-updating/5547
~~~~~~-------------------- TOO LATE / TOO LAME -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
* killing intercom: https://github.com/beeminder/beeminder/issues/633
* milk static-401 for more uvis? 
  - fixing/obviating the banner bug
  - make it all work the same via the API
* fixed some (most? many?) of the thing where flash banner shows up again after you leave current page & go to another page [maybe mostly only happens for admins?]
* Vimium users can now jump to the goals on the dashboard with hotkeys.
  We have no idea why this got better so we probably can't use it without corroboration that this is a genuine improvement! something about octicons apparently?
* max-height for the landing page images, same commit url as an old one above about runkeeper:
  https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3
* small fix to the way we load new svg image after a graph reload -- should look a little smoother and less jumpy
https://github.com/beeminder/beeminder/commit/2a859386e81dade3cc63f07c2ceeda5a2c63a281
"c": "not sure if this will be a very minor improvement or a more noticeable one. was no better, possibly worse.

*********************************************************************************************************************************************************************/

/* CHECKLIST FOR TWEETING UVIS
1. Compose the JSON at the bottom of pub/uvis2019.js
2. Copy to Twitter and tweet it
3. Paste the URL of the tweet into the JSON
4. Update Beeminder
5. Double check that the total number of tweets for @beemuvi matches the total at beeminder.com/changelog
*/
