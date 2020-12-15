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
"c": "That server is fisher2. See also the comments on UVI#3321 which fixed a bug that this UVI indirectly introduced.",
}, { // ------------------------------------------------------------------------
"x": "http://beeminder.com/breaks was actually ignoring the break rate passed in when scheduling a break and just using 0 instead. Especially bad for do-less! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1233554622608019456",
      "https://github.com/beeminder/beeminder/pull/1140/commits/d3e64a67fd91ed4e515bbf1a94cfece770999050",
      "https://github.com/beeminder/beeminder/issues/1048"], // rates were set to 0
"d": "2020-02-28",
"t": "2020-02-28",
}, { // ------------------------------------------------------------------------
"x": "http://beeminder.com/breaks now drastically prettier", // #1 in twitter thread
"u": ["https://twitter.com/beemuvi/status/1233556643377565696",
      "https://github.com/beeminder/beeminder/pull/1140/commits/7807c96b05b87bea384a39944854cc9e5ffd2d58"],
"d": "2020-02-28",
"t": "2020-02-28",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "Added fancy Beeminder-style checkboxes. #css", // also part of #1 in twitter thread
"u": ["https://twitter.com/beemuvi/status/1233556643377565696",
      "https://github.com/beeminder/beeminder/pull/1140/commits/7807c96b05b87bea384a39944854cc9e5ffd2d58"],
"d": "2020-02-28",
"t": "2020-02-28",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Got rid of the strikethrough effect for goals you're not taking a break on; now we gray things out instead. #css", // #2 in twitter thread
"u": ["https://twitter.com/beemuvi/status/1234637116572725248",
      "https://github.com/beeminder/beeminder/pull/1140/commits/7807c96b05b87bea384a39944854cc9e5ffd2d58",
      "https://github.com/beeminder/beeminder/issues/1059"],  // nothing-set thing
"d": "2020-02-28",
"t": "2020-03-02",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed margins, line height, & spacing in the intro paragraph. #css", // #3 in twitter thread
"u": ["https://twitter.com/beemuvi/status/1234994742150057984",
      "https://github.com/beeminder/beeminder/pull/1140"], // no gissue for this
"d": "2020-02-28",
"t": "2020-03-03",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed myriad tiny alignment issues (left-justify, text baseline is all the same across a row, moved take-a-break checkbox closer to its form etc). #css", //4
"u": ["https://twitter.com/beemuvi/status/1234994860144254976",
      "https://github.com/beeminder/beeminder/issues/1058"], // take-a-break checkbox closer to the break column
"d": "2020-02-28",
"t": "2020-03-03",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "In the do-less section, added the field for amount of weekend buffer for weekends off (#bugfix) and updated the header to say 'max safe *buffer*' not 'days'", //5
"u": ["https://twitter.com/beemuvi/status/1234995075190382594",
      "https://github.com/beeminder/beeminder/issues/1050"], // weekend rate for do-less goals
"d": "2020-02-28",
"t": "2020-03-03",
}, /* --------------------------------------------------------- end 2020feb */ ]

var batch2020mar = [{  
"x": "On http://beeminder.com/breaks if you turned on weekends-off and scheduled a break on that same goal at the same time, the weekend would clobber the break. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1235729946670059520",
      "https://github.com/beeminder/beeminder/pull/1149",
      "https://github.com/beeminder/beeminder/issues/1141"],
"d": "2020-03-05",
"t": "2020-03-05",
"c": "Switched the order of the operations and it's ok now. This was the last Mendoza!",
}, { // ------------------------------------------------------------------------
"x": "Fixed the hover effect on checkboxes site-wide so that the hover effect doesn't misleadingly happen if the checkbox is disabled/grayed-out. #bugfix #css",
"u": ["https://twitter.com/beemuvi/status/1235730846268583940",
      "https://github.com/beeminder/beeminder/pull/1149"],
"d": "2020-03-05",
"t": "2020-03-05",
}, { // ------------------------------------------------------------------------
"x": "The 'load all datapoints' link was inconsistently, uglily button-y in Safari. Now just an ordinary link, and the spacing is a little improved. #bugfix #css",
"u": ["https://twitter.com/beemuvi/status/1236031445308600321",
      "https://github.com/beeminder/beeminder/pull/1151",
      "https://github.com/beeminder/beeminder/issues/1150"],
"d": "2020-03-05",
"t": "2020-03-06",
}, { // ------------------------------------------------------------------------
"x": "Updated our Withings landing page to include pointers to our Withings help docs and to Withings's blog post about us",
"u": ["https://twitter.com/beemuvi/status/1237164087399731201",
      "https://github.com/beeminder/beeminder/issues/244",
      "https://github.com/beeminder/beeminder/pull/1153"],
"d": "2020-03-09",
"t": "2020-03-09",
}, { // ------------------------------------------------------------------------
"x": "Tweaked some copy on http://beeminder.com/withings, like changing the middle piece of the triptych from 'Just Do It' to 'Weigh In'",
"u": ["https://twitter.com/beemuvi/status/1237164268274864129",
      "https://github.com/beeminder/beeminder/issues/244",
      "https://github.com/beeminder/beeminder/pull/1153"],
"d": "2020-03-09",
"t": "2020-03-09",
}, { // ------------------------------------------------------------------------
"x": "Also added a customized Withings-specific contract image. Most of our integration landing pages have them. Some of 'em are pretty funny, if we do say ourself.",
"u": ["https://twitter.com/beemuvi/status/1237519303496200192",
      "https://github.com/beeminder/beeminder/issues/244",
      "https://github.com/beeminder/beeminder/pull/1153"],
"d": "2020-03-09",
"t": "2020-03-10",
}, { // ------------------------------------------------------------------------
"x": "Used an actual weight loss graph for the example in the 'Track' section of the Withings autodata integration landing page",
"u": ["https://twitter.com/beemuvi/status/1237887016957706240",
      "https://github.com/beeminder/beeminder/pull/1154"],
"d": "2020-03-10",
"t": "2020-03-11",
}, { // ---------------------------------------------------------------------
"x": "Finally, more copy improvements and added hovertexts on the links (plus a new link to a classic Beeminder blog post) on the Withings landing page",
"u": ["https://twitter.com/beemuvi/status/1237887180476796928",
      "https://github.com/beeminder/beeminder/pull/1157"],
"d": "2020-03-10",
"t": "2020-03-11",
}, { // ------------------------------------------------------------------------
"x": "We updated the Apple Health help docs with guidance on sync issues: https://help.beeminder.com/article/61-apple-health (& updated the list of supported metrics)",
"u": ["https://twitter.com/beemuvi/status/1238217067595087872"],
"d": "2020-03-11",
"t": "2020-03-12",
}, { // ------------------------------------------------------------------------
"x": "We managed to break our PayPal integration and didn't charge any PayPal users for anything for a week. #bugfix and emailed everyone and retried the charges!",
"u": ["https://twitter.com/beemuvi/status/1238602106853928960",
      "https://github.com/beeminder/beeminder/pull/1124"],
"t": "2020-03-13",
"c": "No commit for this -- the fix was to add the field we were passing in on Braintree's side of things so it stopped choking. We did include the URL of the commit that introduced the problem, for reference.",
}, { // ------------------------------------------------------------------------
"x": "Visual improvements to the Yellow Brick Half-Plane graphs: made the orange/blue/green guiding lines (and the razor road itself) significantly fainter/subtler",
"u": ["https://twitter.com/beemuvi/status/1238613439154499584",
      "https://github.com/beeminder/road/commit/3841bf2055d9e79e512c07fa051526ff97288f50",
      "https://github.com/beeminder/road/commit/2335ecadaec1d7ebea6f8660e54246f145dddd1d"],
"d": "2020-03-13",
"t": "2020-03-13",
"c": "Also the shaded YBR (between the blue and red lines) is a bit brighter to match the old status quo for now",
}, { // ------------------------------------------------------------------------
"x": "We were missing sending out an email when you changed your password between Feb 29 & Mar 11 (and a couple more failures after that, long story). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1239694233923026945",
      "https://github.com/beeminder/beeminder/pull/1156",
      "https://github.com/beeminder/beeminder/commit/4e6d2b3dc1a9498d2c062a8c437f6f55cc363f51",
      "https://github.com/beeminder/beeminder/issues/1097",
      "https://github.com/beeminder/beeminder/issues/1102"],
"d": "2020-03-11",
"t": "2020-03-16",
"c": "The long story is that the fix didn't go to all the servers right away. And a longer story: We broke a similar thing around Feb 7 with legit check emails (and made sure to resend them all, a bit delayed, in that case) that we probably should've tweeted as a separate UVI but we waited too long so we just added a link to the commit and related gissues for that here as well. And yet another similar thing with charge alert emails.",
}, { // ------------------------------------------------------------------------
"x": "Made http://beeminder.com/premium downgrade buttons just say \"downgrade\" instead of \"downgrade to ___\" since the \"to ___\" was clear from context. Also for consistency.",
"u": ["https://twitter.com/beemuvi/status/1239694385228345344",
      "https://github.com/beeminder/beeminder/pull/1161"],
"d": "2020-03-16",
"t": "2020-03-16",
"c": "The consistency is that the other buttons say e.g. 'add plan', not 'add Infinibee plan'",
}, { // ------------------------------------------------------------------------
"x": "Fixed a margin thing with \"downgrading on DATE\" buttons, where the text overflowed the edge of the button. #css #bugfix",
"u": ["https://twitter.com/beemuvi/status/1240057797867233281",
      "https://github.com/beeminder/beeminder/pull/1161"],
"d": "2020-03-16",
"t": "2020-03-17",
}, { // ------------------------------------------------------------------------
"x": "We now tell you (in a pop-up) when you downgrade your premium subscription level that you keep your perks until your next payment would have been",
"u": ["https://twitter.com/beemuvi/status/1240355548609957891",
      "https://github.com/beeminder/beeminder/pull/1161"],
"d": "2020-03-16",
"t": "2020-03-18",
}, { // ------------------------------------------------------------------------
"x": "Made the buttons in the downgrade dialog on http://beeminder.com/premium match the rest of Beeminder. #css",
"u": ["https://twitter.com/beemuvi/status/1240420766484553728",
      "https://github.com/beeminder/beeminder/pull/1165",
      "https://github.com/beeminder/beeminder/commit/fa7576fbd05aa25d58bc3e85c6796043ee3d16da"],
"d": "2020-03-18",
"t": "2020-03-18",
}, { // ------------------------------------------------------------------------
"x": "Webcopy change for downgrading / removing a premium subscription: \"your subscription has been removed\" &rarr; \"your subscription is downgrading\"",
"u": ["https://twitter.com/beemuvi/status/1240422194645098497",
      "https://github.com/beeminder/beeminder/pull/1165",
      "https://github.com/beeminder/beeminder/commit/4bbffe0d2665bded52f6c98df3f90a59f64b4013"],
"d": "2020-03-18",
"t": "2020-03-18",
}, { // ------------------------------------------------------------------------
"x": "Bug we've been shirk-n-turking (manually fixing as it happened) since we introduced it with UVI#3004: proper prorated credit for premium upgrades. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1241140877763829761",
      "https://github.com/beeminder/beeminder/pull/1165",
      "https://github.com/beeminder/beeminder/commit/4493b9abb2fea8e26894ee6b49a300b4915da329"],
"d": "2020-03-18",
"t": "2020-03-20",
}, { // ------------------------------------------------------------------------
"x": "Lifetime premium subscribers were getting quoted wrong prices for upgrades! Now we say e.g. \"$16/month ($8 for you)\" to a lifetime Infinibee subscriber. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1241140992851333120",
      "https://github.com/beeminder/beeminder/pull/1168",
      "https://github.com/beeminder/beeminder/issues/1167"],
"d": "2020-03-18",
"t": "2020-03-20",
}, { // ------------------------------------------------------------------------
"x": "Copy fix: \"You are switching to ___ &amp; will be charged $__ per lifetime until you cancel, starting now.\" &rarr; \"You are adding a lifetime subscription to ...\"",
"u": ["https://twitter.com/beemuvi/status/1242237797622112256",
      "https://github.com/beeminder/beeminder/pull/1168",
      "https://github.com/beeminder/beeminder/issues/1167"],
"d": "2020-03-18",
"t": "2020-03-23",
}, { // ------------------------------------------------------------------------
"x": "Nicer formatting for doc.beeminder.com documents and other related tweaks like giving the pages meta descriptions. #css",
"u": ["https://twitter.com/beemuvi/status/1242599910643359744",
      "https://github.com/bsoule/expost"],
"d": "2020-03-23",
"t": "2020-03-24",
"c": "We could milk this for a lot of UVIs (expost docs are responsive now, there's a sidebar css class, etc etc) but it's not part of Beeminder proper so we're compromising and lumping it into one",
}, { // ------------------------------------------------------------------------
"x": "On your goal page, we linkify stuff you put in your goal description, but we weren't linkifying on the dashboard, so you got ugly '<a href=...' stuff. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1242600958728626176",
      "https://github.com/beeminder/beeminder/issues/1171",
      "https://github.com/beeminder/beeminder/pull/1176"],
"d": "2020-03-24",
"t": "2020-03-24",
"c": "See also UVI#2813 and sorta UVI#3276. The part about only premium users doesn't matter much now that we have the commitwall to filter out spammers.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Premium credit! It's now a thing we can give you! Drastically more than you wanted to know at https://doc.beeminder.com/credit",
"u": ["https://twitter.com/beemuvi/status/1242962138936696832",
      "https://github.com/beeminder/beeminder/issues/1170",
      "https://github.com/beeminder/beeminder/pull/1174"],
"d": "2020-03-25",
"t": "2020-03-25",
}, { // ------------------------------------------------------------------------
"x": "Updated https://beeminder.com/widgets to show \"goalname: description\" in the goal selection dropdown. Had been showing only descriptions which made no sense. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1243308924737949696",
      "https://github.com/beeminder/beeminder/issues/1162",
      "https://github.com/beeminder/beeminder/commit/7b183d7a9472f657dc528dc3a1122527dde43c28"],
"d": "2020-01-10",
"t": "2020-03-26",
"c": "Turns out we did this as part of UVI#3252 but forgot to log it as its own UVI even though it totally was. HT @shanaqui for catching this. This is all part of the http://doc.beeminder.com/slug quagmire.",
}, { // ------------------------------------------------------------------------
"x": "Yellow Brick Half-Plane graphs now include the thicker yellow guiding line on weight loss goals indicating the most your weight fluctuates day to day",
"u": ["https://twitter.com/beemuvi/status/1243309185430728704",
      "https://github.com/beeminder/road/issues/97",
      "https://github.com/beeminder/road/commit/d2bd106489705818b02d841c5424455d90ba447d"],
"d": "2020-03-26",
"t": "2020-03-26",
"c": "Known as maxflux in Beebrain",
}, { // ------------------------------------------------------------------------
"x": "Updates to http://beeminder.com/api -- Documented the sort order for the Goals endpoint + various copyediting, formatting, tweaking, fixing things throughout the docs",
"u": ["https://twitter.com/beemuvi/status/1243685722579554304",
      "https://forum.beeminder.com/t/does-the-goals-endpoint-always-return-goals-sorted-by-losedate-ascending/6477?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1177",
      "https://github.com/beeminder/apidocs/commit/f1615746d8356a5895102d3055a1af4c6c909222",
      "https://github.com/beeminder/apidocs/commit/6f966ed7f62ba246f47d55c0c07932daa4c424db"],
"d": "2020-03-27",
"t": "2020-03-27",
}, { // ------------------------------------------------------------------------
"x": "Oops, previous (like 6-for-1!) UVI for the <a href=\"http://beeminder.com/api\">API docs</a> introduced a formatting bug with lists inside a bulleted list. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1244044580695109635",
      "https://github.com/beeminder/apidocs/commit/30cd924b5d564c5882d6e6b4393770b88ad18349"],
"d": "2020-03-27",
"t": "2020-03-28",
}, { // ------------------------------------------------------------------------
"x": "Added a loadbalancer & upgraded Rails, which may not be user-visible enough but in the process we broke the \"load more datapoints\" button & fixed it. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1244045164923904002",
      "https://github.com/beeminder/beeminder/pull/1187"],
"d": "2020-03-27",
"t": "2020-03-28",
}, { // ------------------------------------------------------------------------
"x": "And we missed a spot with the loadbalancer and broke oauth (eg, logging in via Google) for some hours. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1244407589930070017",
      "https://github.com/beeminder/beeminder/pull/1192"],
"d": "2020-03-29",
"t": "2020-03-29",
"c": "Missed the oauth base URL config thing moving www2 back to www",
}, { // ------------------------------------------------------------------------
"x": "One more: our server/rails upgrades messed up our Javascript for autodata goal creation for several integrations including Duolingo and Todoist. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1244767256078254081",
      "https://github.com/beeminder/beeminder/pull/1195"],
"d": "2020-03-30",
"t": "2020-03-30",
"c": "Was broken the whole weekend!",
}, { // ------------------------------------------------------------------------
"x": "Turns out our fix in UVI#3130 only worked sometimes, randomly. Now refreshing the graph when you edit the YBR works all the time, deterministically. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1244767561234841600",
      "https://github.com/beeminder/beeminder/issues/764",
      "https://github.com/beeminder/beeminder/pull/1186"],
"d": "2020-03-30",
"t": "2020-03-30",
"c": "Clarification: It always regenerated the graph, you would just sometimes have to refresh the page to see it",
}, { // ------------------------------------------------------------------------
"x": "Autoratchet (setting a max safety buffer) wasn't always getting applied for do-less goals! Sorry about that! HT Neal Chau #bugfix",
"u": ["https://twitter.com/beemuvi/status/1245136305270296576",
      "https://github.com/beeminder/beeminder/issues/1175",
      "https://github.com/beeminder/beeminder/pull/1207"],
"d": "2020-03-31",
"t": "2020-03-31",
"c": "We had accidentally been considering days of buffer instead of goal-units of buffer in deciding whether a goal was ratchetable",
}, { // ------------------------------------------------------------------------
"x": "Some buggy API clients were accidentally requesting full history of data every time so we added a helpful check + error message for the diff_since parameter",
"u": ["https://twitter.com/beemuvi/status/1245136521939705856",
      "https://github.com/beeminder/beeminder/issues/1203",
      "https://github.com/beeminder/beeminder/pull/1209"],
"d": "2020-03-31",
"t": "2020-03-31",
}, /* --------------------------------------------------------- end 2020mar */ ]

const batch2020apr = [{  
"x": "There's no such thing as lanes in the Yellow Brick Half-Plane new world order but we made the API lane field backward-compatible to not break clients. #YBHP",
"u": ["https://github.com/beeminder/road/commit/4a277094534da2f9af5e3569a0da6ea41359af68",
      "https://forum.beeminder.com/t/api-changes-in-the-yellow-brick-half-plane-new-world-order/6493"],
"d": "2020-04-01",
"t": "2020-04-01",
}, { // ------------------------------------------------------------------------
"x": "The new pledge schedule from UVI#3097 is now opt-in instead of opt-out. Less confusion this way (for now) w/ people expecting $0 initial pledges. HT @TomFrankly",
"u": ["https://twitter.com/beemuvi/status/1245859868365344780",
      "https://github.com/beeminder/beeminder/issues/1213",
      "https://github.com/beeminder/beeminder/pull/1217"],
"d": "2020-04-02",
"t": "2020-04-02",
}, { // ------------------------------------------------------------------------
"x": "Some yellow brick half-plane graphs were showing the wrong number of safe days (missed a spot with purging all the horrible lane-related code). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1245860792097861633",
      "https://github.com/beeminder/road/commit/d7a0a615c7e21966331e7a8e2bb730373f42abb8"],
"d": "2020-04-02",
"t": "2020-04-02",
}, { // ------------------------------------------------------------------------
"x": "UVI#3342 broke Complice! Eek! Now slightly \"smarter\" (though all quite a mess now, design-wise, sadly) so diff_since=0 is allowed in the case that skinny=true",
"u": ["https://twitter.com/beemuvi/status/1246224898508247040",
      "https://github.com/malcolmocean/beeminderjs/issues/6",
      "https://github.com/beeminder/beeminder/pull/1216",
      "https://github.com/beeminder/beeminder/pull/1219",
      "https://github.com/beeminder/beeminder/issues/1203"],
"d": "2020-04-03",
"t": "2020-04-03",
"c": "One more layer of duct tape. Oy. New error copy: \"Nonsensical diff_since timestamp: it's from before you started beeminding! (Though diff_since=0 is allowed in the case of skinny=true.) The intended use is to retrieve a filtered list of goals/datapoints updated since diff_since. This helps both your app and Beeminder's beleaguered servers.\"",
}, { // ------------------------------------------------------------------------
"x": "Made YBHP graphs give an error if you set lane width > 0 and removed an accidentally visible placeholder from the y-axis on graphs that are blank due to errors",
"u": ["https://twitter.com/beemuvi/status/1247311782441390080",
      "https://github.com/beeminder/road/commit/fe87cb9714812271c9e3de76f9d356924275aed5",
      "https://github.com/beeminder/road/commit/46ca2bfd8b7cc2d7bdde7262416c6364c1c70208"],
"d": "2020-04-06",
"t": "2020-04-06",
"c": "Specifically abslnw. Way better to fail loudly than let everything be broken. And the placeholder was 'deneme' which I think means something like 'ignore this' or 'test' in Turkish.",
}, { // ------------------------------------------------------------------------
"x": "Brought our Withings help docs up to date, including max daily fluctuation, plus myriad copy improvements. https://help.beeminder.com/article/90-withings",
"u": ["https://twitter.com/beemuvi/status/1247312012616404995"],
"t": "2020-04-06",
}, { // ------------------------------------------------------------------------
"x": "UVI#2713 wasn't enough; we now show timezone directly in the graph header along with the deadline in case your browser and Beeminder disagree on your timezone",
"u": ["https://twitter.com/beemuvi/status/1247672849172533249",
      "https://github.com/beeminder/beeminder/issues/274",
      "https://github.com/beeminder/beeminder/pull/1224"],
"d": "2020-04-06",
"t": "2020-04-07",
}, { // ------------------------------------------------------------------------
"x": "Display of timezones above the graph now much prettier: we show the standard abbreviation like 'PDT' if there is one, else the canonical city like 'Los Angeles'",
"u": ["https://twitter.com/beemuvi/status/1248031844295012353",
      "https://github.com/beeminder/beeminder/pull/1227",
      "https://github.com/beeminder/beeminder/pull/1230",
      "https://github.com/beeminder/beeminder/commit/9a8a53e49fe41c47952e1a704d7ebf759bcdeca0"],
"d": "2020-04-08",
"t": "2020-04-08",
}, { // ------------------------------------------------------------------------
"x": "Again, that's just if the browser's and the user's stored timezone differ. Also we improved the tooltip/hovertext showing both, including nicer UTC offsets.",
"u": ["https://twitter.com/beemuvi/status/1248031984330231809",
      "https://github.com/beeminder/beeminder/pull/1234"],
"d": "2020-04-08",
"t": "2020-04-08",
}, { // ------------------------------------------------------------------------
"x": "More error checking in http://beeminder.com/breaks -- we no longer silently fail if you clear the dates and submit them blank. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1248391682938122240",
      "https://github.com/beeminder/beeminder/pull/1232",
      "https://github.com/beeminder/beeminder/pull/1233"],
"d": "2020-04-08",
"t": "2020-04-09",
}, { // ------------------------------------------------------------------------
"x": "Insidious rare bug with http://beeminder.com/breaks that would break (bad kind of 'break') weekends-off-enabled goals next time we tried to schedule a weekend. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1248391844477595648",
      "https://github.com/beeminder/beeminder/pull/1232",
      "https://github.com/beeminder/beeminder/pull/1233"],
"d": "2020-04-08",
"t": "2020-04-09",
}, { // ------------------------------------------------------------------------
"x": "Huge facepalm: UVI#3342 broke Beedroid (one of the \"buggy API clients\" apparently): was impossible to sync goals after first logging in. Ouch/sorry! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1248421301829505025",
      "https://github.com/beeminder/beeminder/pull/1237",
      "https://github.com/beeminder/beeminder/pull/1238"],
"d": "2020-04-09",
"t": "2020-04-09",
}, { // ------------------------------------------------------------------------
"x": "Two typo fixes: a comma splice (or was it asyndeton??) in a tagline and a missing word (\"in case you'd like try it\") in our webcopy. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1249847789267247104",
      "https://github.com/beeminder/beeminder/issues/1225",
      "https://github.com/beeminder/beeminder/pull/1226",
      "https://forum.beeminder.com/t/grammar-nerd-interlude-embarrassing-comma-splices-also-uvi-criteria/6542?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1240"],
"d": "2020-04-13",
"t": "2020-04-13",
"c": "Vote was 8 to 6 on typo fixes being legit UVIs. Our compromise is that it takes more than one typo fix to count!",
}, { // ------------------------------------------------------------------------
"x": "Warn you of your max safety buffer (autoratchet), if you have one, when setting your (initial post-restart) safety buffer while restarting a goal",
"u": ["https://twitter.com/beemuvi/status/1249849041317322759",
      "https://github.com/beeminder/beeminder/issues/937",
      "https://github.com/beeminder/beeminder/pull/1243"],
"d": "2020-04-13",
"t": "2020-04-13",
}, { // ------------------------------------------------------------------------
"x": "Facepalm: Previous UVI broke goal restarts altogether! We pretty quickly #bugfix'd it and emailed the 2 people affected.",
"u": ["https://twitter.com/beemuvi/status/1250202076753190913",
      "https://github.com/beeminder/beeminder/pull/1244"],
"d": "2020-04-14",
"t": "2020-04-14",
}, { // ------------------------------------------------------------------------
"x": "New hovertext on the word \"due\" above your graph with a better descriptor of how safe you are / what you have to do to get safe. Also in API as \"safesum\".",
"u": ["https://twitter.com/beemuvi/status/1250571348021145602",
      "https://github.com/beeminder/beeminder/issues/830",
      "http://doc.beeminder.com/safesum",
      "https://github.com/beeminder/beeminder/pull/953"],
"d": "2020-04-15",
"t": "2020-04-15",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "Got rid of the dumb \"0.0\" in \"initial datapoint of 0.0 on the 5th\" when creating a goal. It's just zero. Good old \"0\". A lot behind the scenes there though.",
"u": ["https://twitter.com/beemuvi/status/1250573914658336769",
      "https://github.com/beeminder/beeminder/issues/948",
      "https://github.com/beeminder/beeminder/pull/950"],
"d": "2020-04-15",
"t": "2020-04-15",
"c": "Similar to UVI#3214 and UVI#3255 (and, um, UVI#355 and UVI#1271 and UVI#1839 and UVI#2198) which we should've made more universal rather than all piecemeal like this",
}, { // ------------------------------------------------------------------------
"x": "When recommitting after derailing, we'd lose the first future row if you had zero recommit mercy and had future changes scheduled. #bugfix HT @phdoerfler",
"u": ["https://twitter.com/beemuvi/status/1250936619651096576",
      "https://github.com/beeminder/beeminder/issues/1261",
      "https://github.com/beeminder/beeminder/pull/1262"],
"d": "2020-04-16",
"t": "2020-04-16",
}, { // ------------------------------------------------------------------------
"x": "Yet another fix with removing trailing .0 decimals when stringifying numbers, this time in the dashboard & goal page add-data widgets. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1250940740114411520",
      "https://github.com/beeminder/beeminder/pull/1257"],
"d": "2020-04-16",
"t": "2020-04-16",
}, { // ------------------------------------------------------------------------
"x": "If you updated the goal description above the header then updated things in goal settings (eg, fine print), we'd clobber the updated description! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1251298242714726401",
      "https://github.com/beeminder/beeminder/issues/437",
      "https://github.com/beeminder/beeminder/pull/1266"],
"d": "2020-04-17",
"t": "2020-04-17",
"c": "This was only if you did the two without a page refresh in between, because \"goal description\" is included in that goal settings form as well as above the graph, but updating it above the graph didn't update the one down below.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We made Megabreak (UVI#3257) official (not that awful name though!). It's now in the main menu and we blogged about it and everything!",
"u": ["https://twitter.com/beemuvi/status/1252385271275905024",
      "https://github.com/beeminder/beeminder/pull/1272",
      "https://blog.beeminder.com/megabreak"],
"d": "2020-04-20",
"t": "2020-04-20",
}, { // ------------------------------------------------------------------------
"x": "In fact, Megabreak is so official (again, the feature, not the name \"Megabreak\"!) that it has a <a href=\"https://help.beeminder.com/article/154-can-i-schedule-breaks-on-many-goals-at-once\">help doc</a>",
"u": ["https://twitter.com/beemuvi/status/1252385614139256834"],
"d": "2020-04-17",
"t": "2020-04-20",
}, { // ------------------------------------------------------------------------
"x": "Webcopy bug in Do Less section of Megabreak table: Do Less goals give safety buffer in goal units, not days. #bugfix Also blog.beeminder.com/glossary updates!",
"u": ["https://twitter.com/beemuvi/status/1252738846355099649",
      "https://github.com/beeminder/beeminder/issues/1273",
      "https://github.com/beeminder/beeminder/pull/1276"],
"d": "2020-04-21",
"t": "2020-04-21",
"c": "Changed the entry for 'auto-widening' to 'This isn't a thing anymore!' with a link to the death-to-autowidening post",
}, { // ------------------------------------------------------------------------
"x": "Zero-lane-width goals (custom and/or new YBHP goals) gave one too few days of mercy when recommitting! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1253107138114641921",
      "https://github.com/beeminder/beeminder/pull/1279",
      "https://github.com/beeminder/beeminder/issues/1010"],
"d": "2020-04-22",
"t": "2020-04-22",
"c": "Doesn't exactly resolve gissue #1010, but does for the YBHP NWO so, y'know, onward to the future!",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Version 5.6 (and 5.6.1 and 5.6.2) of the iOS app!",
"u": ["https://twitter.com/beemuvi/status/1253469964293435393"],
"d": "2020-04-18",
"t": "2020-04-23",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "Newly beemindable Apple Health metrics: Saturated fat and Sodium",
"u": ["https://twitter.com/beemuvi/status/1253469964293435393"],
"d": "2020-04-18",
"t": "2020-04-23",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Better, more prosaic, sometimes more concise descriptors of what you have to do by when",
"u": ["https://twitter.com/beemuvi/status/1253470310508052480"],
"d": "2020-04-18",
"t": "2020-04-23",
"c": "AKA safesum",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "A search button (originally just if you had >10 goals, which is when it makes sense, but that violated the Anti-Magic Principle so now everyone sees it)",
"u": ["https://twitter.com/beemuvi/status/1253791321271091200"],
"d": "2020-04-18",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We now show your timezone in settings. You can't edit it, mind you, but at least you can see what it's set to!",
"u": ["https://twitter.com/beemuvi/status/1253791600024535042"],
"d": "2020-04-18",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The deltas (how much you have to do to get in the orange/blue/green) are now centered below your graph",
"u": ["https://twitter.com/beemuvi/status/1253791743125803008"],
"d": "2020-04-18",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "If you entered invalid credentials, you were bombarded with multiple popups admonishing you, over and over. That was deemed excessive so now you get 1. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1253791873149177856",
      "https://github.com/beeminder/BeeSwift/issues/34"],
"d": "2020-04-18",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "If we really need you to upgrade in the future you'll now see a banner telling you your version is out of date",
"u": ["https://twitter.com/beemuvi/status/1253792005794103303"],
"d": "2020-04-18",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Between 5.6.1 until version 5.6.2 the app wouldn't display your most recent datapoint. Made things seem very broken! #bugfix HT Faire Soule-Reeves",
"u": ["https://twitter.com/beemuvi/status/1253792327665020933"],
"d": "2020-04-23",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Also the sort feature was sort of broken in 5.6 until 5.6.1. Sheepish-face-emoji! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1253792559408660481"],
"d": "2020-04-22",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Finally, a little improvement to the search feature: results stay filtered to your search after you view a goal and go back to the gallery",
"u": ["https://twitter.com/beemuvi/status/1253792807262683136"],
"d": "2020-04-23",
"t": "2020-04-24",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The app now understands that Beeminder days end at the deadline, not necessarily midnight. #bugfix HT Garrison Taylor",
"u": ["https://twitter.com/beemuvi/status/1253797080172093441",
      "https://github.com/beeminder/BeeSwift/issues/29"],
"d": "2020-04-18",
"t": "2020-04-24",
"c": "Originally tweeted these as '(__ of 10)' and prefixed this one with 'Turns out BeemiOS UVIs go up to 11'",
}, /* --------------------------------------------------------- end 2020apr */ ]

const batch2020may = [{  
}, { // ------------------------------------------------------------------------
"x": "The SVG URL in the JSON output at beeminder.com/username/goalname.json was broken. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1257454842232143874",
      "https://github.com/beeminder/beeminder/commit/ba4f94a4f1ed6d7e3ad6c14bd795e522fb0930d2",
      "https://github.com/beeminder/beeminder/issues/1023"],
"d": "2020-04-03",
"t": "2002-05-04",
"c": "See item 7 in list of 'Other Thoughts Not Part of this Gissue' in the linked gissue",
}, { // ------------------------------------------------------------------------
"x": "Sped up page loads by being smarter (using if-technology!) about not loading redundant snippets of html. Thanks @honeycombio!",
"u": ["https://twitter.com/beemuvi/status/1257456458607796226",
      "https://github.com/beeminder/beeminder/issues/1070"],
"d": "2020-04-29",
"t": "2020-05-04",
"c": "By 'snippet of html' we mean a partial. Namely the hookcheck modal for credit cards. Didn't apply to anyone who'd already added a payment method.",
}, { // ------------------------------------------------------------------------
"x": "Added a (currently stubbish) help page for our Toggl integration + more details on downgrading on the help page for premium subscriptions",
"u": ["https://twitter.com/beemuvi/status/1257819196945166337",
      "https://help.beeminder.com/article/155-toggl",
      "https://forum.beeminder.com/t/missing-toggl-help-page/6637",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription"],
"t": "2020-05-05",
"c": "Now specify that when you downgrade, you keep your current subscription perks until the current plan's subscription runs out",
}, { // ------------------------------------------------------------------------
"x": "Updated our help-wanted page, accidentally broke some links, fixed them again, and added clear update headers so no confusion about (lack of) current openings",
"u": ["https://twitter.com/beemuvi/status/1258183178893668352",
      "https://help.beeminder.com/collection/138-help-wanted"],
"t": "2020-05-06",
}, { // ------------------------------------------------------------------------
"x": "Yellow Brick Half-Plane goals were sometimes giving the wrong amount of safety buffer (a lane width had snuck in to some of the YBHP calculations!) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1258183904881590273",
      "https://github.com/beeminder/road/issues/113",
      "https://forum.beeminder.com/t/0-due-in-16-days-and-other-x-due-in-y-oddities/6636?u=dreev"],
"t": "2020-05-06",
}, { // ------------------------------------------------------------------------
"x": "The hovertext on graphs would sometimes, for crufty historical reasons, say \"Coasting on a currently flat yellow brick road\" when that wasn't true. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1258300677119283201",
      "https://github.com/beeminder/road/issues/114"],
"t": "2020-05-07",
}, { // ------------------------------------------------------------------------
"x": "We were sometimes drawing the thick yellow guiding line demarcating your max daily fluctuation (aka maxflux) in the totally wrong place. #bugfix #YBHP",
"u": ["https://twitter.com/beemuvi/status/1258300809487347715",
      "https://github.com/beeminder/road/issues/109",
      "https://forum.beeminder.com/t/road-editor-bugs-roundup/6685"],
"d": "2020-05-06",
"t": "2020-05-07",
}, { // ------------------------------------------------------------------------
"x": "We removed the custom absolute lane width setting, replaced with link to blog post about why we're killing it (also means you can switch to YBHP in 1 step now)",
"u": ["https://twitter.com/beemuvi/status/1258901678645850112",
      "https://blog.beeminder.com/lanes/",
      "https://github.com/beeminder/beeminder/issues/1293",
      "https://github.com/beeminder/beeminder/pull/1320"],
"d": "2020-05-01",
"t": "2020-05-08",
}, { // ------------------------------------------------------------------------
"x": "Custom lane width (abslnw/lanewidth) out of the API &amp; updated the API docs. And replaed mention of it in the help docs with Yellow Brick Half-Plane instead.",
"u": ["https://twitter.com/beemuvi/status/1258901977825607681",
      "https://github.com/beeminder/apidocs/commit/9fe009f0fcf29a2ca4edae36df3fd671feeb6521",
      "https://github.com/beeminder/beeminder/pull/1322",
      "https://help.beeminder.com/article/97-custom-goals"],
"d": "2020-05-01",
"t": "2020-05-08",
}, { // ------------------------------------------------------------------------
"x": "More help docs updates: lots of copy improvements to the page on Whittle Down goals and a new placeholder page for Yellow Brick Half-Plane",
"u": ["https://twitter.com/beemuvi/status/1259880866781659143",
      "https://help.beeminder.com/article/69-whittle-down-goals",
      "https://help.beeminder.com/article/156-ybhp"],
"d": "2020-05-08",
"t": "2020-05-11",
}, { // ------------------------------------------------------------------------
"x": "Version 5.6.3 of the iOS app fixed a bug where the refresh button didn't update the blurb saying how safe you are if you'd added data elsewhere. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1260351678886248448",
      "https://github.com/beeminder/BeeSwift/issues/38",
      "https://forum.beeminder.com/t/remaining-work-is-not-synced-but-app-pretends-everything-is-fine/6683"],
"d": "2020-05-06",
"t": "2020-05-12",
"c": "This version also purports to fix the blank screen on startup but it sounds like that may not be true",
}, { // ------------------------------------------------------------------------
"x": "The delta_text API output is now correct for Yellow Brick Half-Plane. This should also fix the multicolored numbers below the graph in the iOS app. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1260718803324768256",
      "https://forum.beeminder.com/t/ios-app-graphs-show-oldest-4-out-most-recent-5-data-points/6631/5?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1350",
      "https://github.com/beeminder/beeminder/pull/1351",
      "https://github.com/beeminder/BeeSwift/issues/36",
      "https://github.com/beeminder/beeminder/commit/e17305ccb7839c201b4b851bb608e5819770ea47"],
"d": "2020-05-13",
"t": "2020-05-13",
}, { // ------------------------------------------------------------------------
"x": "Also those multicolored numbers are now conservarounded correctly to the user-specified precision",
"u": ["https://twitter.com/beemuvi/status/1260719526427025409",
      "https://forum.beeminder.com/t/ios-app-graphs-show-oldest-4-out-most-recent-5-data-points/6631/5?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1350",
      "https://github.com/beeminder/beeminder/pull/1351",
      "https://github.com/beeminder/beeminder/commit/e17305ccb7839c201b4b851bb608e5819770ea47"],
"d": "2020-05-13",
"t": "2020-05-13",
}, { // ------------------------------------------------------------------------
"x": "We converted all existing absolute-lane-width (abslnw) goals to Yellow Brick Half-Plane and emailed everyone affected. Lanes delenda est! See UVI#3385",
"u": ["https://twitter.com/beemuvi/status/1261069695194509314",
      "https://github.com/beeminder/beeminder/pull/1354",
      "https://github.com/beeminder/beeminder/pull/1353"],
"d": "2020-05-14",
"t": "2020-05-14",
}, { // ------------------------------------------------------------------------
"x": "Newly created weightloss goals are now Yellow Brick Half-Plane! For normal users that just means they look a bit different, w/ a bright red line you can't cross",
"u": ["https://twitter.com/beemuvi/status/1261433854662815744",
      "https://github.com/beeminder/beeminder/issues/275",
      "https://github.com/beeminder/beeminder/issues/1343",
      "https://github.com/beeminder/beeminder/pull/1356"],
"d": "2020-05-14",
"t": "2020-05-15",
}, { // ------------------------------------------------------------------------
"x": "And everyone restarting any existing frozen/archived weight-loss goal, those will also be Yellow Brick Half-Plane style now!",
"u": ["https://twitter.com/beemuvi/status/1261435388729556992",
      "https://github.com/beeminder/beeminder/issues/1342",
      "https://github.com/beeminder/beeminder/pull/1357"],
"d": "2020-05-14",
"t": "2020-05-15",
}, { // ------------------------------------------------------------------------
"x": "There's now a thin red line visually highlighting the critical edge of your yellow brick road. Useful in and of itself but especially for converting to YBHP!",
"u": ["https://twitter.com/beemuvi/status/1262528356588777472",
      "https://help.beeminder.com/article/156-ybhp",
      "https://github.com/beeminder/road/issues/96",
      "https://github.com/beeminder/road/issues/120"],
"d": "2020-05-11",
"t": "2020-05-18",
"c": "These were sometimes all wrong at first and we didn't tweet them till they were more correct, although they're still not totally right (it's impossible for them to be totally right because road lanes are an abomination that need to die).",
}, { // ------------------------------------------------------------------------
"x": "Pledge settings now included in the Commitment tab instead of just a button to open a popup to edit them (like when you click the pledge above the graph)",
"u": ["https://twitter.com/beemuvi/status/1263256265569923072",
      "https://github.com/beeminder/beeminder/issues/961",
      "https://github.com/beeminder/beeminder/pull/1340"],
"d": "2020-05-15",
"t": "2020-05-20",
"c": "See also UVI#2151. We still have the popup for when you click the pledge amount. Out of laziness we had just reused that popup in the settings as well.",
}, { // ------------------------------------------------------------------------
"x": "For old users who managed to create a goal without a payment method, the Pledge section of the Commitment tab is now clear about that. #antimagic",
"u": ["https://twitter.com/beemuvi/status/1263256417366011904",
      "https://github.com/beeminder/beeminder/pull/1340"],
"d": "2020-05-15",
"t": "2020-05-20",
"c": "Ie, from pre-commitwall. Previously we had the Pledge header and just mysteriously missing content if you didn't have a credit card on file.",
}, { // ------------------------------------------------------------------------
"x": "The \"email me my full payment history\" (for users with more than 50 payments) button was broken since UVI#3321. #bugfix #regression",
"u": ["https://twitter.com/beemuvi/status/1263596493681750016",
      "https://github.com/beeminder/beeminder/issues/1361",
      "https://github.com/beeminder/beeminder/pull/1363",
      "https://github.com/beeminder/beeminder/pull/1389",
      "https://github.com/beeminder/beeminder/commit/41c56493f4ad4017f305467520bcc93a04b64e92"],
"d": "2020-05-15",
"t": "2020-05-21",
"c": "More Rails upgrade woes. Also our first fix to this had it sending mangled payment entries (base64 something something) but now is fixed for real.",
}, { // ------------------------------------------------------------------------
"x": "Our login-via-Facebook option broke so we fixed it, which involved appeasing the Facebook gods with a new privacy policy link. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1263980713008787456",
      "https://github.com/beeminder/beeminder/issues/1371",
      "https://github.com/beeminder/beeminder/pull/1372"],
"d": "2020-05-18",
"t": "2020-05-22",
}, { // ------------------------------------------------------------------------
"x": "Made the headers of various pages (\"pricing\", \"FAQ\", \"Team\", etc) consistently styled (all-caps, black-on-yellow). #css",
"u": ["https://twitter.com/beemuvi/status/1263981410567835648",
      "https://github.com/beeminder/beeminder/pull/1372"],
"d": "2020-05-18",
"t": "2020-05-22",
}, { // ------------------------------------------------------------------------
"x": "Date pickers on break settings & in road dial now have correct minimum date & don't let you pick a date that's too early, ie, inside akrasia horizon #bugfix",
"u": ["https://twitter.com/beemuvi/status/1264979866350350336",
      "https://github.com/beeminder/beeminder/issues/965",
      "https://github.com/beeminder/beeminder/pull/1387",
      "https://github.com/beeminder/beeminder/pull/1388"],
"d": "2020-05-20",
"t": "2020-05-25",
}, { // ------------------------------------------------------------------------
"x": "We added meta-data to our +/- stepper buttons so screen readers can interpret them, thus making Beeminder *slightly* more accessible to the visually impaired",
"u": ["https://twitter.com/beemuvi/status/1265430931990437889",
      "https://github.com/beeminder/beeminder/issues/1450",
      "https://github.com/beeminder/beeminder/pull/1360"],
"d": "2020-05-18",
"t": "2020-05-26",
"c": "User \"visible\", tee-hee",
}, { // ------------------------------------------------------------------------
"x": "Similarly for our tabs below the graph, which should now, we believe, be more comprehensible to screen readers / non-visual navigation",
"u": ["https://twitter.com/beemuvi/status/1265431405799960576",
      "https://github.com/beeminder/beeminder/issues/1450",
      "https://github.com/beeminder/beeminder/pull/1360"],
"d": "2020-05-18",
"t": "2020-05-26",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug where sometimes going to your normal goal URL didn't open the last bottom tab you had open. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1265765347702923265",
      "https://github.com/beeminder/beeminder/issues/1369",
      "https://github.com/beeminder/beeminder/pull/1365"],
"d": "2020-05-20",
"t": "2020-05-27",
}, { // ------------------------------------------------------------------------
"x": "And when following a direct/anchor link, the page automatically scrolls past the graph to the tab (but no magic scrolling when just clicking around)",
"u": ["https://twitter.com/beemuvi/status/1265765523637145600",
      "https://github.com/beeminder/beeminder/pull/1365"],
"d": "2020-05-20",
"t": "2020-05-27",
}, { // ------------------------------------------------------------------------
"x": "Anchor links (the \"#stuff\" part at the end of the URL) can also link to subsections of tabs (and does the auto-scrolling), eg, bmndr.com/d/mass#goal-safety",
"u": ["https://twitter.com/beemuvi/status/1266127129395073025",
      "https://github.com/beeminder/beeminder/issues/1369",
      "https://github.com/beeminder/beeminder/pull/1365"],
"d": "2020-05-20",
"t": "2020-05-28",
"c": "This involves javascript fanciness from Adam. This is the bigger UVI that probably should've come before the previous one about auto-scrolling.",
}, { // ------------------------------------------------------------------------
"x": "Updates, clarifications, adding links, and other copyediting to 4 different help doc articles!",
"u": ["https://twitter.com/beemuvi/status/1266518168941416454",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/4?u=dreev",
      "https://help.beeminder.com/article/120-whats-the-best-way-to-beemind ",
      "https://help.beeminder.com/article/122-why-does-beeminder-think-its-already-tomorrow ",
      "https://help.beeminder.com/article/32-what-do-i-do-first ",
      "https://help.beeminder.com/article/101-reminders"],
"d": "2020-05-22",
"t": "2020-05-29",
}, { // ------------------------------------------------------------------------
"x": "Another batch of edits to help doc articles, including removing things that have become wrong",
"u": ["https://twitter.com/beemuvi/status/1266518383438131206",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/5?u=dreev",
      "https://help.beeminder.com/article/104-supporters",
      "https://help.beeminder.com/article/106-goal-settings"],
"d": "2020-05-26",
"t": "2020-05-29",
}, /* --------------------------------------------------------- end 2020may */ ]

const batch2020jun = [{  
"x": "And a new help page for Pessimistic Presumptive Reports (PPRs)! These are all thanks to @shanaqui!",
"u": ["https://twitter.com/beemuvi/status/1267562697941331968",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports"],
"d": "2020-05-30",
"t": "2020-06-01",
}, { // ------------------------------------------------------------------------
"x": "And one more #mini since we kinda bundled a bunch of these help docs UVIs into 3 entries: the Do-Less help page now links to the PPR help page.",
"u": ["https://twitter.com/beemuvi/status/1267562793592451072",
      "https://help.beeminder.com/article/67-do-less-goals"],
"d": "2020-05-30",
"t": "2020-06-01",
}, { // ------------------------------------------------------------------------
"x": "We made the graph page load a little smoother by leaving room for the graph (so it doesn't have to rerender/reflow when the graph renders)",
"u": ["https://twitter.com/beemuvi/status/1267915027048132608",
      "https://github.com/beeminder/beeminder/issues/1377"],
"d": "2020-05-18",
"t": "2020-06-02",
"c": "By Adam. And the reflow is not eliminated in all circumstances, but that remaining work has been gissued.", 
}, { // ------------------------------------------------------------------------
"x": "Firefox (et al?) would change data in the data tab. Browser saw a partially completed form so it was 'helpfully' 'remembering' previous values. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1268319960230584321",
      "https://github.com/beeminder/beeminder/issues/1400",
      "https://github.com/beeminder/beeminder/pull/1405"],
"d": "2020-05-28",
"t": "2020-06-03",
"c": "Adding the autocomplete=off attribute to the input elements should stop that shit. It wasn't changing the datapoints themselves, unless you re-submitted a datapoint, but user was very confused when they e.g. added a new datapoint to the goal, and then what they see in the datapoint list is garbled because their browser was e.g. changing the date, or the comment or whatever.",
}, { // ------------------------------------------------------------------------
"x": "The red line demarcating the critical edge of the road (UVI#3394) now always visually matches the road and is always parallel to the centerline. #bugfix #YBHP",
"u": ["https://twitter.com/beemuvi/status/1268662278779400194",
      "https://github.com/beeminder/road/issues/96#issuecomment-629482046",
      "https://github.com/beeminder/road/commit/d632994a50e5cf19cc85965f70f908f080b7a4eb"],
"d": "2020-05-29",
"t": "2020-06-04",
}, { // ------------------------------------------------------------------------
"x": "We made some graphs with very shallow roads much faster to generate (they were trying to generate an unwieldy number of isolines). #YBHP",
"u": ["https://twitter.com/beemuvi/status/1268662365844672512",
      "https://github.com/beeminder/road/issues/119",
      "https://github.com/beeminder/beeminder/issues/1355"],
"d": "2020-05-25",
"t": "2020-06-04",  
}, { // ------------------------------------------------------------------------
"x": "Some YBHP graphs didn't show the thin yellow lines (or only would for part of the half-plane). Now we shade the whole good side yellow for such goals! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1269048864532647937",
      "https://github.com/beeminder/road/issues/104",
      "https://github.com/beeminder/road/commit/d40d3a54685ee882a5ab3f3c3305e3e79fe8e195"],
"d": "2020-05-25",
"t": "2020-06-05",
"c": "Interestingly, Beebrain is technically correct to not show them because they are isolines and it can't draw those in the DTD=infinity region!",
}, { // ------------------------------------------------------------------------
"x": "Now conservatively infer earlier end date (aka dayfloor) if road dialed with rate and value that implies end date not on a day boundary. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1269813432234110978",
      "https://forum.beeminder.com/t/bad-aim/6852/2?u=dreev",
      "https://github.com/beeminder/road/issues/98",
      "https://github.com/beeminder/beeminder/issues/333"],
"d": "2020-06-03",
"t": "2020-06-07",
"c": "AKA the crossbones bug! Caused all sorts of insidious problems.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "All new goals are Yellow Brick Half-Plane! We couldn't turn back now even if we wanted to! #YBHP",
"u": ["https://twitter.com/beemuvi/status/1269816180820160512",
      "https://github.com/beeminder/beeminder/issues/1410"],
"d": "2020-06-04",
"t": "2020-06-07",
}, { // ------------------------------------------------------------------------
"x": "Weight-loss goals and other goals that use a \"max daily fluctuation\" are now less cluttered, not showing the orange/blue/green lines",
"u": ["https://twitter.com/beemuvi/status/1270491137506041856",
      "https://github.com/beeminder/road/issues/102"],
"d": "2020-06-09",
"t": "2020-06-09",
}, { // ------------------------------------------------------------------------
"x": "We've now converted the first significant chunk of goals to Yellow Brick Half-Plane, namely, all daily beemail subscribers!",
"u": ["https://twitter.com/beemuvi/status/1270491350346022912",
      "https://github.com/beeminder/beeminder/pull/1435"],
"d": "2020-06-09",
"t": "2020-06-09",
}, { // ------------------------------------------------------------------------
"x": "When starting a new goal after its deadline and before midnight, the road would start technically-yesterday giving you 1 less initial safe day. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1270856692696145921",
      "https://github.com/beeminder/beeminder/issues/1253",
      "https://github.com/beeminder/beeminder/pull/1420"],
"d": "2020-06-04",
"t": "2020-06-10",
"c": "For earlybird deadlines, tini would be the previous day",
}, { // ------------------------------------------------------------------------
"x": "But that broke things for certain timezones (HT @lady_alys of Brisbane!) yielding correct road-start date but data in the future! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1270856949895069696",
      "https://github.com/beeminder/beeminder/issues/1430",
      "https://github.com/beeminder/beeminder/pull/1433 & https://github.com/beeminder/beeminder/pull/1436"],
"d": "2020-06-09",
"t": "2020-06-10",
"c": "Resulted in an ugly 'all datapoint are in the future' error message",
}, { // ------------------------------------------------------------------------
"x": "Twice, doing #YBHP conversions broke tons of goals that we painstakingly restored & emailed everyone affected. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1271216866967482368",
      "https://github.com/beeminder/beeminder/pull/1435",
      "https://blog.beeminder.com/ybhp/#BREAKING"],
"d": "2020-06-09",
"c": "2020-06-04 was the first time, where we shrunk"
}, { // ------------------------------------------------------------------------
"x": "As part of the switch to Yellow Brick Half-Plane, new goals by default start with just one day of safety buffer instead of two",
"u": ["https://twitter.com/beemuvi/status/1271577561613529088",
      "https://blog.beeminder.com/ybhp/",
      "https://github.com/beeminder/beeminder/issues/1144#issuecomment-642944271"],
"d": "2020-06-04",
"t": "2020-06-12",
"c": "It's just more natural to have the razor road start exactly where you are today with you right on it",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Version 5.6.4 of the iOS app!",
"u": ["https://twitter.com/beemuvi/status/1272677197803712512",
      "https://github.com/beeminder/BeeSwift/releases/tag/5.6.4"],
"d": "2020-06-09",
"t": "2020-06-15",
"c": "AKA BeemiOS",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "For datapoints shown like \"1,234\" if you used the stepper or edited it, it would change the comma to a decimal point! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1272677197803712512",
      "https://github.com/beeminder/BeeSwift/issues/45"],
"d": "2020-06-09",
"t": "2020-06-15",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "If you delete a datapoint, the datapoint now immediately disappears from the list of datapoints under the graph. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1272677515954274304",
      "https://github.com/beeminder/BeeSwift/issues/27"],
"d": "2020-06-09",
"t": "2020-06-15",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Similarly, if you edit a datapoint, it immediately updates under the graph, as does the value in the data entry field, to reflect the edit. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1272678259105214464",
      "https://github.com/beeminder/BeeSwift/issues/28"],
"d": "2020-06-09",
"t": "2020-06-15",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The intermittent blank white screen on startup is, we believe, vanquished for good. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1272680109724413955",
      "https://github.com/beeminder/BeeSwift/issues/37"],
"d": "2020-06-09",
"t": "2020-06-15",
"c": "The blank-screen-on-start bug that 5.6.3 purported to fix though we didn't include it as a UVI due to inklings that it wasn't really fixed",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "If the app fails to fetch the latest from Beeminder, there's no longer an alert (\"Error fetching goals\") waiting for you when you return to the app.",
"u": ["https://twitter.com/beemuvi/status/1272680777113677824",
      "https://github.com/beeminder/BeeSwift/commit/520e09646bc67b4eabf1d869a3cf085f36cd17c8"],
"d": "2020-06-09",
"t": "2020-06-15",
"c": "So-called background fetch, not related to autodata, just syncing with the Beeminder server."
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We now prompt you to turn on notifications when switching to a new device or on a reinstall of the app, if necessary",
"u": ["https://twitter.com/beemuvi/status/1272681613499838464",
      "https://github.com/beeminder/BeeSwift/issues/50"],
"d": "2020-06-09",
"t": "2020-06-15",
}, { // ------------------------------------------------------------------------
"x": "Webcopy/#css changes in the \"From the blog\" section of the front page, to not seem like the \"Guaranteed Fresh\" link is to the blog itself. HT @slatestarcodex",
"u": ["https://twitter.com/beemuvi/status/1273656060989943808",
      "https://github.com/beeminder/beeminder/issues/1427",
      "https://github.com/beeminder/beeminder/pull/1452"],
"d": "2020-06-16",
"t": "2020-06-18",
"c": "Mainly downpopping the 'Guaranteed Fresh' and linkifying just the word 'guaranteed' -- should fix the thing that threw off Scott Alexander",
}, { // ------------------------------------------------------------------------
"x": "Also updated that link to point to the newer blog post, and more webcopy and hovertext updates there",
"u": ["https://twitter.com/beemuvi/status/1273656138588807168",
      "https://github.com/beeminder/beeminder/issues/1427",
      "https://github.com/beeminder/beeminder/pull/1452"],
"d": "2020-06-16",
"t": "2020-06-18",
}, { // ------------------------------------------------------------------------
"x": "Webcopy tweaks for consistency: refer to ratcheting as manually reducing and autoratchet as automatically trimming your safety buffer. HT @philiphellyer",
"u": ["https://twitter.com/beemuvi/status/1273675927830982656",
      "https://github.com/beeminder/beeminder/commit/99b662e083a4524a010e181dbf914ba5fe7f3d0d"],
"d": "2020-06-13",
"t": "2020-06-18",
"c": "By Philip. New copy: \"WARNING: this will not play nicely with manually reducing or automatically trimming your safety buffer\" (was \"retro-ratchet\" and \"auto-cap\")",
}, { // ------------------------------------------------------------------------
"x": "UVI#3389 had an off-by-one error. Now the 3 colored numbers under the graph in the iOS app (delta_text in the API) are right for real. #bugfix HT @faireness",
"u": ["https://twitter.com/beemuvi/status/1273676165895475200",
      "https://github.com/beeminder/beeminder/commit/7eb142e02fbdb6ed5b422f4d113f2f3e6afb8920",
      "https://github.com/beeminder/beeminder/issues/1350",
      "https://github.com/beeminder/beeminder/pull/1445"],
"d": "2020-06-16",
"t": "2020-06-18",
"c": "For non-YBHP goals it was [-1, 0, 1] offsets from the quoted delta; in YBHP we want [0, 1 , 2]",
}, { // ------------------------------------------------------------------------
"x": "Added some tolerance to some floating point comparisons in Beebrain because we found a few cases of a dot exactly on the road that was red (!). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1275570395182018568",
      "https://github.com/beeminder/road/issues/128"],
"d": "2020-06-18",
"t": "2020-06-23",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We converted the last existing goal to Yellow Brick Half-Plane and removed the checkbox to opt out so there's now literally no such thing as non-YBHP",
"u": ["https://twitter.com/beemuvi/status/1275938580137783296",
      "https://blog.beeminder.com/ybhp/",
      "https://github.com/beeminder/beeminder/issues/1411",
      "https://github.com/beeminder/beeminder/pull/1458",
      "https://github.com/beeminder/beeminder/issues/275"],
"d": "2020-06-18",
"t": "2020-06-24",
}, { // ------------------------------------------------------------------------
"x": "We have a new @beemuvi avatar (also visible here on the changelog) plus we've made custom images for our last 6 blog posts because we're that fancy",
"u": ["https://twitter.com/beemuvi/status/1275939541359013888"],
"t": "2020-06-24",
"c": "By Faire",
}, { // ------------------------------------------------------------------------
"x": "UVI#3419 &amp; UVI#3420 introduced a bug where you couldn't create new goals if your default goal deadline was before 9:30am. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1276301945146191872",
      "https://github.com/beeminder/beeminder/issues/1464",
      "https://github.com/beeminder/beeminder/pull/1466"],
"d": "2020-06-25",
"t": "2020-06-25",
"c": "9:30am being the global default (aka the default default) for alertstart",
}, { // ------------------------------------------------------------------------
"x": "If your Beeminder API client had a registered post-deauth-callback URL, we were failing to alert you if there was an error trying to post to your URL. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1276660614467710977",
      "https://github.com/beeminder/beeminder/issues/1461"],
"d": "2020-06-26",
"t": "2020-06-26",
}, { // ------------------------------------------------------------------------
"x": "The blurb about how much safety buffer you have (aka safesum) was saying, eg, \"safe for 1 day\" on already-ended goals. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1276664506739945472",
      "https://github.com/beeminder/beeminder/issues/1419",
      "https://github.com/beeminder/beeminder/pull/1440"],
"d": "2020-06-25",
"t": "2020-06-26",
"c": "Reported by Andy, fixed by Adam. <3",
}, { // ------------------------------------------------------------------------
"x": "The blurb about how much safety buffer you have (aka safesum) had spurious extra spaces if goal units was blank. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1277748380203020288",
      "https://github.com/beeminder/beeminder/issues/1382",
      "https://github.com/beeminder/beeminder/pull/1383"],
"d": "2020-05-20",
"t": "2020-06-29",
"c": "Tweeted version of this was slightly wrong",
}, { // ------------------------------------------------------------------------
"x": "And another spurious space in safesum, this time before the due-time in cases where the hours in the time-of-day had 1 digit. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1278090103642927104",
      "https://forum.beeminder.com/t/a-touchy-subject/6818/8?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1408",
      "https://github.com/beeminder/beeminder/pull/1439",
      "https://github.com/beeminder/beeminder/pull/1479",
      "https://github.com/beeminder/beeminder/commit/88d806d0cadefa546d45d4027cf06c62ab355352"],
"d": "2020-06-30",
"t": "2020-06-30",
"c": "We'd normally call this a #mini and not count it as its own UVI but with the forum post and multiple PRs we figure it should count!",
}, { // ------------------------------------------------------------------------
"x": "Since around YBHP transition, do-less goals were being drawn with a thick yellow line for maxflux instead of the normal colored lines. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1278104514780790785",
      "https://github.com/beeminder/beeminder/issues/1486",
      "https://github.com/beeminder/beeminder/pull/1490"],
"d": "2020-06-30",
"t": "2020-06-30",
}, /* --------------------------------------------------------- end 2020jun */ ]


const batch2020jul = [{  
}, { // ------------------------------------------------------------------------
"x": "The help doc for URLminder now clarifies about sharable links vs public docs, points to the blog post which has new screenshots for Google Docs & Dropbox",
"u": ["https://twitter.com/beemuvi/status/1278461631865839616",
      "https://github.com/beeminder/beeminder/issues/1485",
      "https://help.beeminder.com/article/88-urlminder"],
"d": "2020-07-01",
"t": "2020-07-01",
}, { // ------------------------------------------------------------------------
"x": "In the iOS app, repeated notifications for the same goal no longer pile up as separate notifications -- the existing notification just updates itself. Phew!",
"u": ["https://twitter.com/beemuvi/status/1278839691840614400",
      "https://github.com/beeminder/beeminder/pull/1488"],
"d": "2020-07-02",
"t": "2020-07-02",
}, { // ------------------------------------------------------------------------
"x": "Added missing hovertext for lead days, alertstart, & deadline so UI is consistent in both places you find reminder settings (goal page & reminders page)",
"u": ["https://twitter.com/beemuvi/status/1278840168305197059",
      "https://github.com/beeminder/beeminder/issues/58",
      "https://github.com/beeminder/beeminder/pull/1500"],
"d": "2020-07-02",
"t": "2020-07-02",
}, { // ------------------------------------------------------------------------
"x": "Also added hovertext restoring some webcopy describing early bird vs nightowl deadlines (probably doesn't suffice to only have as a tooltip!). #regression",
"u": ["https://twitter.com/beemuvi/status/1279140073783488512",
      "https://forum.beeminder.com/t/is-6-30am-a-nightowl-or-earlybird-deadline/4763/5?u=dreev",
      "https://github.com/beeminder/beeminder/issues/58",
      "https://github.com/beeminder/beeminder/pull/1500"],
"d": "2020-07-02",
"t": "2020-07-03",
"c": "Yes, another redesign regression from around 2016 facepalm"
}, { // ------------------------------------------------------------------------
"x": "\"Load all datapoints\" link now suppressed (instead of giving a confusing error) if less than a page's worth of data to load. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1280288932538617857",
      "https://github.com/beeminder/beeminder/issues/1406",
      "https://github.com/beeminder/beeminder/pull/1509"],
"d": "2020-07-03",
"t": "2020-07-06",
"c": "Sounds prima facie like an anti-magic violation but it's ok because the grayed out \"load more data\" button makes it totally clear",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "TaskRatchet integration is official and is now featured on the front page!",
"u": ["https://twitter.com/beemuvi/status/1280290249122344961",
      "https://github.com/beeminder/beeminder/issues/1470",
      "https://github.com/beeminder/beeminder/pull/1511"],
"d": "2020-07-03",
"t": "2020-07-06",
}, { // ------------------------------------------------------------------------
"x": "\"Sort by date entered\" only worked correctly before loading/adding additional datapoints (used datapoints' dates after that). #bugfix HT Brent Yorgey",
"u": ["https://twitter.com/beemuvi/status/1280636952107081728",
      "https://github.com/beeminder/beeminder/issues/1508",
      "https://github.com/beeminder/beeminder/pull/1509"],
"d": "2020-07-03",
"t": "2020-07-07",
}, { // ------------------------------------------------------------------------
"x": "Added a fancy TaskRatchet integration landing page: beeminder.com/taskratchet",
"u": ["https://twitter.com/beemuvi/status/1280637325475635200",
      "https://github.com/beeminder/beeminder/pull/1511"],
"d": "2020-07-03",
"t": "2020-07-07",
}, { // ------------------------------------------------------------------------
"x": "Changed our privacy policy, can dox you at will now; j/k, boring stuff like new anchor link, removing reference to fitness expert. See bottom of https://bmndr.co/terms",
"u": ["https://twitter.com/beemuvi/status/1281013247483588608",
      "https://github.com/beeminder/beeminder/issues/1487",
      "https://github.com/beeminder/beeminder/pull/1504",
      "https://github.com/beeminder/beeminder/pull/1514"],
"d": "2020-07-06",
"t": "2020-07-08",
}, { // ------------------------------------------------------------------------
"x": "Multiple other privacy policy tweaks too boring to count as UVIs but we'll count the new canonical URL, beeminder.com/terms, and the better changelog",
"u": ["https://twitter.com/beemuvi/status/1281361098495541249",
      "https://github.com/beeminder/beeminder/pull/1527"],
"d": "2020-07-09",
"t": "2020-07-09",
}, { // ------------------------------------------------------------------------
"x": "Ok, one more little one: both Terms and Privacy are in the site footer now. Google's persnicketiness was the impetus for all this, btw.",
"u": ["https://twitter.com/beemuvi/status/1281361666010054656",
      "https://github.com/beeminder/beeminder/issues/1503"],
"d": "2020-07-06",
"t": "2020-07-09",
}, { // ------------------------------------------------------------------------
"x": "If for whatever rare reason could no longer send updates to ur iOS device we'd give ourselves (not you) a 500 error &amp; silently fail to update ur graph #bugfix",
"u": ["https://twitter.com/beemuvi/status/1281727412644929536",
      "https://twitter.com/beemuvi/status/1281727412644929536",
      "https://github.com/beeminder/beeminder/issues/1492",
      "https://github.com/beeminder/beeminder/pull/1493"],
"c": "I guess Andy introduced a syntax error in the code to prune iOS tokens. Only happened like once; was only briefly broken.",
}, { // ------------------------------------------------------------------------
"x": "None of the three types of calories goals for our @fitbit integration were showing the option for customizing initial safety buffer. Facepalm. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1282824806342090752",
      "https://github.com/beeminder/beeminder/issues/1431",
      "https://github.com/beeminder/beeminder/pull/1524"],
"d": "2020-07-08",
"t": "2020-07-13",
}, { // ------------------------------------------------------------------------
"x": "While we were at it, better distinguished the 3 @fitbit calories goal types: \"Calories burned (more)\", \"Calories eaten (less)\", \"Net Calories\"",
"u": ["https://twitter.com/beemuvi/status/1282825039893544960",
      "https://github.com/beeminder/beeminder/issues/1521",
      "https://github.com/beeminder/beeminder/pull/1524"],
"d": "2020-07-08",
"t": "2020-07-13",
}, { // ------------------------------------------------------------------------
"x": "Do-less @rescuetime goals are now consistent with manual do-less goals in defaulting \"start with extra leeway (safety buffer)\" to checked",
"u": ["https://twitter.com/beemuvi/status/1282825211457372160",
      "https://github.com/beeminder/beeminder/issues/1460",
      "https://github.com/beeminder/beeminder/pull/1524"],
"d": "2020-07-08",
"t": "2020-07-13",
}, { // ------------------------------------------------------------------------
"x": "Changed the default (i.e., no extra buffer requested) for do-less goals to be 1 day's worth of buffer, like do-more goals.",
"u": ["https://twitter.com/beemuvi/status/1283550848463691776",
      "https://github.com/beeminder/beeminder/issues/1520",
      "https://github.com/beeminder/beeminder/pull/1524"],
"d": "2020-07-08",
"t": "2020-07-15",
}, { // ------------------------------------------------------------------------
"x": "The hovertext on the graph thumbnails are now more concise and don't mention the archaic notions of lanes and centerlines",
"u": ["https://twitter.com/beemuvi/status/1283551764382269440",
      "https://github.com/beeminder/road/issues/136"],
"d": "2020-07-15",
"t": "2020-07-15",
}, { // ------------------------------------------------------------------------
"x": "Another dumb floating point comparison bug meant some rare cases of a datapoint's dot showing red on successfully completed goal. #bugfix HT Mary",
"u": ["https://twitter.com/beemuvi/status/1283866102611636224",
      "https://github.com/beeminder/road/issues/126"],
"d": "2020-07-15",
"t": "2020-07-16",
}, { // ------------------------------------------------------------------------
"x": "Changed all the email/webcopy to say things like \"you're in the orange\" instead of \"you're in the wrong lane\" and \"you're safe\" instead of \"on the road\"",
"u": ["https://twitter.com/beemuvi/status/1284268889388412929",
      "https://github.com/beeminder/beeminder/issues/1215",
      "https://github.com/beeminder/beeminder/pull/1540/commits/1475f1e4b1b2a122c58e17fc2a42cca73824a7e1"],
"d": "2020-07-16",
"t": "2020-07-17",
}, { // ------------------------------------------------------------------------
"x": "Also changed references to \"centerline\" to refer to \"the bright line\" everywhere in the web and email copy",
"u": ["https://twitter.com/beemuvi/status/1284269258688524289",
      "https://github.com/beeminder/road/issues/138",
      "https://github.com/beeminder/road/commit/85b16d7fe3dfdf1671ff2f5dbffc2b9d6e9772c2",
      "https://github.com/beeminder/beeminder/pull/1540/commits/1475f1e4b1b2a122c58e17fc2a42cca73824a7e1"],
"d": "2020-07-15",
"t": "2020-07-17",
}, { // ------------------------------------------------------------------------
"x": "Purged mentions of \"lanes\" and \"centerlines\" and \"critical edge\" from our help docs. Viva la Yellow Brick Half-Plane!",
"u": ["https://twitter.com/beemuvi/status/1285361210733375488",
      "https://help.beeminder.com/article/156-ybhp",
      "https://help.beeminder.com/article/118-how-do-i-interpret-the-graph",
      "https://help.beeminder.com/article/96-weight-gain-loss-goals",
      "https://help.beeminder.com/article/97-custom-goals",
      "https://help.beeminder.com/article/119-what-are-the-goal-statistics",
      "https://help.beeminder.com/article/99-road-editor",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports"],
"d": "2020-07-20",
"t": "2020-07-20",
}, { // ------------------------------------------------------------------------
"x": "If you had non-ascii characters in your @Runkeeper username/profile, we'd fail when you tried to add Runkeeper authorization to your Beeminder account. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1285723518211108866",
      "https://github.com/beeminder/beeminder/issues/1201",
      "https://github.com/beeminder/beeminder/issues/1534",
      "https://github.com/beeminder/beeminder/pull/1535"],
"d": "2020-07-17",
"t": "2020-07-21",
"c": "The problem was doublefold: 1) our Runkeeper oauth was mangling the response from Runkeeper because we weren't sending an explicit 'Accept-Charset' header. 2) we were attempting to use forceencode on the results from omniauth to clean up any such mangled outputs, but were doing it in such a way that it choked on the mangled encoding anyway.",
}, { // ------------------------------------------------------------------------
"x": "The previous fix for character encoding in Runkeeper's oauth caused a bug in our Slack oauth (for the Beeminder Slack bot, and Slack alerts)! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1285723930460860416",
      "https://github.com/beeminder/beeminder/issues/1550",
      "https://github.com/beeminder/beeminder/pull/1551"],
"d": "2020-07-20",
"t": "2020-07-21",
}, { // ------------------------------------------------------------------------
"x": "\"Retroratchet\" is now just \"ratchet\". Updated the site copy, help docs, even the glossary!",
"u": ["https://twitter.com/beemuvi/status/1286081785164513282",
      "https://blog.beeminder.com/glossary/",
      "https://forum.beeminder.com/t/renaming-retroratchet-to-ratchet/6703",
      "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer",
      "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit",
      "https://help.beeminder.com/article/67-do-less-goals",
      "https://github.com/beeminder/beeminder/issues/1269",
      "https://github.com/beeminder/beeminder/pull/1557"],
"d": "2020-07-22",
"t": "2020-07-22",
"c": "Also made all the needed YBHP changes to the glossary but I guess we're not counting that as it's own UVI since it's part of the blog currently, even though that's a dump place for the glossary.",
}, { // ------------------------------------------------------------------------
"x": "When support replied to the email bot on your behalf we'd spam you about adding data from an \"unknown\" email address. We've now finally whitelisted ourselves.",
"u": ["https://twitter.com/beemuvi/status/1286085032944078849",
      "https://github.com/beeminder/beeminder/issues/827",
      "https://github.com/beeminder/beeminder/pull/1560"],
"d": "2020-07-22",
"t": "2020-07-22",
"c": "Regression caused by switching to HelpScout for support. The reason for support to reply to the bot on your behalf is generally that you sent the bot malformed data and it replied with support cc'd to complain. Then a human (one of us) would fix it for you and reply-all, to both you and the bot. All peachy, except for the part where Beeminder would then reply \"OMG data submitted from an unknown address!\".",
}, { // ------------------------------------------------------------------------
"x": "We officially added safebuf, the integer number of days of safety buffer (not just the losedate timestamp), to the API",
"u": ["https://twitter.com/beemuvi/status/1287899099975397377",
      "https://forum.beeminder.com/t/api-changes-in-the-yellow-brick-half-plane-new-world-order/6493/5?u=dreev",
      "https://github.com/beeminder/apidocs/pull/24"],
"d": "2020-07-25",
"t": "2020-07-27",
}, { // ------------------------------------------------------------------------
"x": "Our Misfit autodata integration was sometimes sending us duplicate datapoints. Our fault for not being robust to that; now we are! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1288250770547044352",
      "https://github.com/beeminder/beeminder/issues/781",
      "https://github.com/beeminder/beeminder/issues/1537",
      "https://github.com/beeminder/beeminder/pull/1556"],
"d": "2020-07-22",
"t": "2020-07-28",
"c": "Extremely cheap solution was to put Misfit on a queue with only worker so the whole thing is moot (as long as we have very few Misfit users!)",
}, { // ------------------------------------------------------------------------
"x": "We edited all the copy in the API docs to not talk about lanes and centerlines anymore and added instructions for inferring color from the safebuf parameter",
"u": ["https://twitter.com/beemuvi/status/1288253328879624192",
      "https://github.com/beeminder/apidocs/pull/24",
      "https://github.com/beeminder/beeminder/issues/1215"],
"d": "2020-07-25",
"t": "2020-07-28",
}, { // ------------------------------------------------------------------------
"x": "At some point we added some metadata to datapoints and we missed at least one and it caused at least one person's graph to give a 500 error. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1288618214813888513",
      "https://github.com/beeminder/beeminder/commit/4c3eee582362d9943c1d3bbc0865f75281e0615e"],
"d": "2020-07-20",
"t": "2020-07-29",
"c": "The fix is just to not freak out if the metadata is missing",
}, { // ------------------------------------------------------------------------
"x": "Letting you interact with your newly created Fitbit goal before it finished importing your Fitbit data could yield insta-derails or other wrongness. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1288618341385478145",
      "https://github.com/beeminder/beeminder/issues/1558",
      "https://github.com/beeminder/beeminder/pull/1559"],
"d": "2020-07-23",
"t": "2020-07-29",
}, { // ------------------------------------------------------------------------
"x": "The confirmation dialog for deleting datapoints would sometimes say \"[undefined]\" instead of the actual datapoint. #bugfix HT @phdoerfler & zzq",
"u": ["https://twitter.com/beemuvi/status/1288984798929674240",
      "https://forum.beeminder.com/t/bug-report-deleting-undefined-are-you-sure/6529/9",
      "https://github.com/beeminder/beeminder/issues/1568",
      "https://github.com/beeminder/beeminder/pull/1574 -- Rework htmlForDatapoint"],
"d": "2020-07-29",
"t": "2020-07-30",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Revamped the graph legend! New images, new words, new things that weren't documented like colored guidelines and the pink zone!",
"u": ["https://twitter.com/beemuvi/status/1288985279924015104",
      "https://github.com/beeminder/beeminder/issues/1584",
      "https://github.com/beeminder/beeminder/pull/1566"],
"d": "2020-07-24",
"t": "2020-07-30",
}, { // ------------------------------------------------------------------------
"x": "Also the legend images are higher resolution. We should probably be milking the legend revamp for several more UVIs!",
"u": ["https://twitter.com/beemuvi/status/1289276488974401536",
      "https://github.com/beeminder/beeminder/issues/1584",
      "https://github.com/beeminder/beeminder/pull/1566"],
"d": "2020-07-24",
"t": "2020-07-31",
}, { // ------------------------------------------------------------------------
"x": "Also a copy fix in the legend: \"above this bright red line\" to \"good side of this bright red line\"",
"u": ["https://twitter.com/beemuvi/status/1289276615986356224",
      "https://github.com/beeminder/beeminder/issues/1584",
      "https://github.com/beeminder/beeminder/pull/1566",
      "https://github.com/beeminder/beeminder/pull/1585"],
"d": "2020-07-30",
"t": "2020-07-31",
}, /* --------------------------------------------------------- end 2020jul */ ]

const batch2020aug = [{  
"x": "The pink shading & the grayed-out lines denoting the region your road can't intersect (the akrasia horizon constraint) were sometimes mismatched. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1290432162622091265",
      "https://github.com/beeminder/road/issues/100"],
"d": "2020-08-03",
"t": "2020-08-03",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "A related #bugfix in the road editor: when you dragged the yellow brick road, the pink shading would not stay put, defeating the point",
"u": ["https://twitter.com/beemuvi/status/1290432272160571393",
      "https://github.com/beeminder/road/issues/100"],
"d": "2020-08-03",
"t": "2020-08-03",
"c": "By Uluc. The gray diagonal lines were fine, just not the pink shading, ie, they didn't always match, even for static graphs; see previous UVI. Also we need to decide what to call that region: pinkzone, oinkzone, nozone, verboten zone?",
}, { // ------------------------------------------------------------------------
"x": "We broke the animated watermarks in http://road.beeminder.com/tutorial at some point (probably around UVI#3287) and have now fixed them again. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1290797280539242496",
      "https://github.com/beeminder/road/issues/140"],
"d": "2020-08-03",
"t": "2020-08-04",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "HTML-like characters (like less-than signs) in goal units or the y-axis label don't break things now. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1290797463268282370",
      "https://github.com/beeminder/road/issues/112"],
"d": "2020-08-03",
"t": "2020-08-04",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "The isolines (yellow guiding lines indicating different amounts of buffer) sometimes leaked onto the bad side of the yellow brick road! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1291157293267062786",
      "https://github.com/beeminder/road/issues/141"],
"d": "2020-08-03",
"t": "2020-08-05",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We now shade yellow any region of your graph in which you have an infinite amount of safety buffer (like having enough buffer to take you to the goal date)",
"u": ["https://twitter.com/beemuvi/status/1291157671513591809",
      "https://github.com/beeminder/road/issues/145",
      "https://github.com/beeminder/road/issues/124"],
"d": "2020-08-03",
"t": "2020-08-05",
"c": "By Uluc and dreev",
}, { // ------------------------------------------------------------------------
"x": "The new \"shade if infinitely safe\" feature included multiple fixes like always drawing enough yellow guiding lines (aka isolines). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1291513001988591616",
      "https://github.com/beeminder/road/issues/145"],
"d": "2020-08-03",
"t": "2020-08-06",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "And another #bugfix / improvement in deciding the density of the isolines so they're hopefully never so dense as to obscure watermarks, etc",
"u": ["https://twitter.com/beemuvi/status/1291513298370715648",
      "https://github.com/beeminder/road/issues/145"],
"d": "2020-08-03",
"t": "2020-08-06",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "Graph generation is now measurably faster, especially for rare graphs with an obscene number of yellow brick road segments",
"u": ["https://twitter.com/beemuvi/status/1291884993912815616",
      "https://github.com/beeminder/road/issues/144",
      "https://github.com/beeminder/road/commit/2cab17dee2ab038adf9af8b196aa705a0b13ce59",
      "https://github.com/beeminder/road/commit/d502bdd1cc7a7aea19647a15da8637c1bc60cfbd",
      "https://github.com/beeminder/road/commit/d3146b75a68f632edfb32dd58f3e9af2b42040cc",
      "https://github.com/beeminder/road/commit/af455cb26275bf89d68d2cd3dbda678ed7eec915"],
"d": "2020-08-06",
"t": "2020-08-07",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "We rewrote the FAQ item about so-called \"90% Variance\" to make it comport with the Yellow Brick Half-Plane New World Order",
"u": ["https://twitter.com/beemuvi/status/1291885632810151936",
      "https://www.beeminder.com/faq#qvar"],
"t": "2020-08-07",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Beeminder's Boss as a Service -- https://bossasaservice.life -- integration is Extra Official and is featured on the front page!",
"u": ["https://twitter.com/beemuvi/status/1295497339205894144",
      "https://blog.beeminder.com/baas/",
      "https://github.com/beeminder/beeminder/pull/1598"],
"d": "2020-08-09",
"t": "2020-08-17",
}, { // ------------------------------------------------------------------------
"x": "We also made a landing page, with help from @Manasvinik, for our Boss as a Service integration: http://beeminder.com/baas",
"u": ["https://twitter.com/beemuvi/status/1295497447926452225",
      "https://blog.beeminder.com/baas/",
      "https://github.com/beeminder/beeminder/pull/1598"],
"d": "2020-08-09",
"t": "2020-08-17",
"c": "Image by @faireness",
}, { // ------------------------------------------------------------------------
"x": "If your pagination parameter 'per' got to the API as a string, we gave a 500 error. Now we're robust to that and magically convert it. Oof. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1295858114642604034",
      "https://github.com/beeminder/beeminder/issues/1580",
      "https://github.com/beeminder/beeminder/pull/1581"],
"d": "2020-07-29",
"t": "2020-08-18",
"c": "Blatant violation of the Anti-Robustness Principle but consistency with the rest of the API dictates we do this. In version 2 of the API we can get this sort of thing right! (Also some ambiguity about whether this sort of thing is even the API client's fault?)",
}, { // ------------------------------------------------------------------------
"x": "Better error handling for the 'roadall' parameter in the API. We were giving a 500 error instead of an informative error for some nonsensical roads. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1295858898058924032",
      "https://github.com/beeminder/beeminder/issues/1608",
      "https://github.com/beeminder/beeminder/pull/1609"],
"d": "2020-08-18",
"t": "2020-08-18",
}, { // ------------------------------------------------------------------------
"x": "The bright red line on the graph no longer extends to the left of the goal start date or to the right of the goal end date. It was confusing when it did!",
"u": ["https://twitter.com/beemuvi/status/1296233151539208193",
      "https://github.com/beeminder/road/commit/c81edfd3a9ecf8898d5d0fd8975d3408babbb19c",
      "https://github.com/beeminder/road/commit/bd34707da6b2f009e7f218ff2e565fc444263661"],
"t": "2020-08-14",
"t": "2020-08-19",
}, { // ------------------------------------------------------------------------
"x": "Small visual improvements like crisper bright red line on some graphs and subtler shading of the pink zone (aka akrasia horizon constrained zone)",
"u": ["https://twitter.com/beemuvi/status/1296233376454590467",
      "https://github.com/beeminder/road/commit/596bdde8c41e8a47fc9f5bc53c8476e7218d30c6",
      "https://github.com/beeminder/road/commit/679e7366149a588e119de5a61481be4bf01717b7"],
"d": "2020-08-18",
"t": "2020-08-19",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "Fixed some spurious half-plane shading, as in wrongly shading the whole good side of the road yellow. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1296596575259512832",
      "https://github.com/beeminder/road/issues/130"],
"t": "2020-08-20",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "Yellow guidelines (aka isolines, especially helpful to make obvious what the good side of the road is) are now shown during visual editing of the road!",
"u": ["https://twitter.com/beemuvi/status/1296596713776406528",
      "https://github.com/beeminder/road/commit/591d477fc298586c354f3a3d63fa72e6695695f3"],
"d": "2020-08-14",
"t": "2020-08-20",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "In the visual road editor, the road is shown as a dashed line past the goal end date and before the goal start date so you can click to extend it",
"u": ["https://twitter.com/beemuvi/status/1296944468478709760",
      "https://github.com/beeminder/road/commit/bd34707da6b2f009e7f218ff2e565fc444263661"],
"d": "2020-08-14",
"t": "2020-08-21",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "When editing with the visual road editor, the previous position of the bright red line is shown as a dashed red line instead of orange, which made no sense",
"u": ["https://twitter.com/beemuvi/status/1296945345897705473",
      ],
"d": "2020-08-14",
"t": "2020-08-21",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "When editing the road with the visual editor, violating the akrasia horizon constraint makes the pink zone get brighter",
"u": ["https://twitter.com/beemuvi/status/1297308963139022848",
      "https://github.com/beeminder/road/commit/efba1ca6f410671a5edb552820772c76176a0d29"],
"t": "2020-08-22",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "Also when editing, we made the bright line red line always be red instead of black while editing and turning red when violating the akrasia horizon constraint",
"u": ["https://twitter.com/beemuvi/status/1297657534635900928",
      ],
"t": "2020-08-23",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "And then to make sure it was obvious enough we made the whole graph have a dashed red outline and show a message when the road crosses the pink zone",
"u": ["https://twitter.com/beemuvi/status/1297657655914188800",
      "https://github.com/beeminder/road/commit/c7ccb499ea50d77da7ec2554732f6cd2cfd3b893"],
"t": "2020-08-23",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "Better choices about how dense to make the yellow guiding lines (aka isolines) and fixed some bugs with dynamic display as you visually edit the road. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1297804267906936834",
      "https://github.com/beeminder/road/commit/596bdde8c41e8a47fc9f5bc53c8476e7218d30c6"],
"t": "2020-08-24",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "The pink rosy line no longer extends before the start of the yellow brick road. It was messed up when it tried to. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1297804770975993862",
      "https://github.com/beeminder/road/commit/c8fe8e1859807b2e644f6afdcac10def04d07ad0",
      "https://github.com/beeminder/road/commit/591d477fc298586c354f3a3d63fa72e6695695f3"],
"d": "2020-08-14",
"t": "2020-08-24",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "Fixed a rare bug where the isolines for a do-less goal could intersect each other and be all messed up. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1297804893923639297",
      "https://github.com/beeminder/road/issues/146",
      "https://github.com/beeminder/road/commit/17a11c334b430e6b617675d44d566e113f2e2f3a"],
"d": "2020-08-14",
"t": "2020-08-24",
"c": "By Uluc",
}, { // ------------------------------------------------------------------------
"x": "Improved the animations in http://road.beeminder.com/tutorial and updated the copy",
"u": ["https://twitter.com/beemuvi/status/1297805093153067010",
      "https://github.com/beeminder/road/commit/ff1a0c77c199f454686d6db5bbfaef55f9c55b26",
      "https://github.com/beeminder/road/commit/f981a3b6f3964283134cf33673f7f53f0ea45d02",
      "https://github.com/beeminder/road/commit/04c0f5e0f11ab41c989281230866efbae6008a62"],
"t": "2020-08-24",
"c": "By Uluc and Danny",
}, { // ------------------------------------------------------------------------
"x": "When you visited another user's Gmail goal it would try to fetch your own labels (yielded surprising errors sometimes, plus slowness). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1298377934026059777",
      "https://github.com/beeminder/beeminder/issues/1561",
      "https://github.com/beeminder/beeminder/issues/1545",
      "https://github.com/beeminder/beeminder/pull/1610"],
"d": "2020-08-20",
"t": "2020-08-25",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "We removed all the legacy Gmail settings from goal settings that we had due to the labels migration (see UVI#3235)",
"u": ["https://twitter.com/beemuvi/status/1298378097352294401",
      "https://blog.beeminder.com/gmailzerolabels/",
      "https://github.com/beeminder/beeminder/issues/1549",
      "https://github.com/beeminder/beeminder/issues/989",
      "https://github.com/beeminder/beeminder/issues/988"],
"d": "2020-08-20",
"t": "2020-08-25",
"c": "By Adam. Also handling all the stragglers which could probably be milked for another UVI if we wanted",
}, { // ------------------------------------------------------------------------
"x": "When showing a message after successfully authenticating to a third-party service, we now always show the actual capitalized name, not our internal code name",
"u": ["https://twitter.com/beemuvi/status/1298380507005071360",
      "https://github.com/beeminder/beeminder/issues/1630"],
"d": "2020-08-20",
"t": "2020-08-25",
"c": "By Adam. Part of the GmailZero PR but more general.",
}, { // ------------------------------------------------------------------------
"x": "In Gmail goal creation, we dynamically adjust the headline based on chosen goal parameters. \"I pledge to get my ___ down to...\". So slick!",
"u": ["https://twitter.com/beemuvi/status/1298380621065015297",
      "https://github.com/beeminder/beeminder/issues/1572"],
"d": "2020-08-20",
"t": "2020-08-25",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "Also the up/down stepper for what you're committing to has its label change dynamically: 'read messages' vs 'messages' vs 'unread messages'",
"u": ["https://twitter.com/beemuvi/status/1298380817819820032",
      "https://github.com/beeminder/beeminder/issues/1572"],
"d": "2020-08-20",
"t": "2020-08-25",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "Kind of a bug fix or UI improvement: we disable the Gmail label dropdown in your goal settings before we've fetched your labels",
"u": ["https://twitter.com/beemuvi/status/1298380922845200384",
      "https://github.com/beeminder/beeminder/pull/1610"],
"d": "2020-08-20",
"t": "2020-08-25",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "Also we updated the copy on GmailZero landing page, updated the link to point to the help page instead of the old blog post, etc.",
"u": ["https://twitter.com/beemuvi/status/1298381641547567104",
      "https://github.com/beeminder/beeminder/issues/1002",
      "https://github.com/beeminder/beeminder/pull/1610/commits/799121e320bbd085405d2094d3eb7769fcd5b441"],
"d": "2020-08-20",
"t": "2020-08-25",
"c": "By Adam. Eg, \"Be sure what you're committing to! Beeminder will charge you money if you don't stay on track!\" instead of the erroneous \"Break your pledge again, and you'll need to put your money where your mouth is\".",
}, { // ------------------------------------------------------------------------
"x": "Copy/typographical tweaks in goal settings: consistent periods/colons and a hovertext improvement (maybe also more GmailZero cleanup a la UVI#3504)",
"u": ["https://twitter.com/beemuvi/status/1298712112970137601",
      "https://github.com/beeminder/beeminder/issues/993"],
"d": "2020-08-19",
"t": "2020-08-26",
}, { // ------------------------------------------------------------------------
"x": "Help docs updates! Extra FAQ about PPRs; \"How do I delete a goal?\" page mentions that archiving takes 7 days; clarification on starting pledges",
"u": ["https://twitter.com/beemuvi/status/1298754642084376577",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
      "https://help.beeminder.com/article/47-how-do-i-delete-a-goal",
      "https://help.beeminder.com/article/21-can-i-change-the-pledge-on-my-goal",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/16?u=dreev"],
"d": "2020-08-18",
"t": "2020-08-26",
"c": "By Nicky",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Version 5.7 of the iOS app!",
"u": ["https://twitter.com/beemuvi/status/1299125464942800896",
      "https://forum.beeminder.com/t/nailing-down-the-changelog-for-beemios-version-5-7/7155"],
"d": "2020-08-20",
"t": "2020-08-27",
"c": "By apb and krugerk",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "There's now a cancel button in the search bar to make it easier to go back to showing all goals",
"u": ["https://twitter.com/beemuvi/status/1299125464942800896",
      "https://github.com/beeminder/BeeSwift/issues/53",
      "https://github.com/beeminder/BeeSwift/pull/65"],
"d": "2020-08-20",
"t": "2020-08-27",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Graph images on the gallery screen no longer flicker when the screen is first loaded or when you pull to refresh; more responsive placeholder images. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1299125597986123778",
      "https://github.com/beeminder/BeeSwift/issues/43",
      "https://github.com/beeminder/BeeSwift/pull/103",
      "https://github.com/beeminder/BeeSwift/pull/82"],
"d": "2020-08-20",
"t": "2020-08-27",
"c": "2 UVIs in 1! (This is 2 and 19 in the list on the forum.) Full version of 2nd one: The placeholder image that's displayed on the goal screen until the graph loads was itself taking awhile to load; now it's shown immediately.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "You can now see more up to 3 goals in the Today widget (click the expandy icon to see more than one)",
"u": ["https://twitter.com/beemuvi/status/1299463286384025600",
      "https://github.com/beeminder/BeeSwift/issues/92",
      "https://github.com/beeminder/BeeSwift/pull/93"],
"d": "2020-08-20",
"t": "2020-08-28",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Additional images and tweaks to make dark mode look better",
"u": ["https://twitter.com/beemuvi/status/1299463412557082624",
      "https://github.com/beeminder/BeeSwift/issues/94",
      "https://github.com/beeminder/BeeSwift/pull/95"],
"d": "2020-08-20",
"t": "2020-08-28",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Better sorting of goals to show which can be linked to Apple Health (sections: “Manual”, “Connected to Apple Health”, “Other Autodata Goals”)",
"u": ["https://twitter.com/beemuvi/status/1299463563229065216"],
"d": "2020-08-20",
"t": "2020-08-28",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Also w/ Apple Health: instructions blurb, pull-to-refresh, fixed scrolling glitch on goal screen for Apple Health goals, #bugfix w/ disappearing checkmark",
"u": ["https://twitter.com/beemuvi/status/1299463712688857088",
      "https://github.com/beeminder/BeeSwift/issues/85",
      "https://github.com/beeminder/BeeSwift/pull/122",
      "https://github.com/beeminder/BeeSwift/pull/99",
      "https://github.com/beeminder/BeeSwift/issues/116",
      "https://github.com/beeminder/BeeSwift/pull/121"],
"d": "2020-08-20",
"t": "2020-08-28",
"c": "4 UVIs in 1! This is 6, 7, 20, and 18 in the list on the forum. The scrolling glitch maybe only affected small screens.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Visual tweaks: Added padding around the Infinibee in the app icon, thumbnail placeholder image for Today Widget",
"u": ["https://twitter.com/beemuvi/status/1299463841823125506",
      "https://github.com/beeminder/BeeSwift/issues/25",
      "https://github.com/beeminder/BeeSwift/pull/139"],
"d": "2020-08-20",
"t": "2020-08-28",
"c": "2 UVIs in 1! This is 8 and 12 in the list on the forum.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The app badge now goes away if you log out of Beeminder + Sorting by recent data in the gallery now actually does so. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1299463950791094273",
      "https://github.com/beeminder/BeeSwift/issues/100",
      "https://github.com/beeminder/BeeSwift/pull/101"],
"d": "2020-08-20",
"t": "2020-08-28",
"c": "2 UVIs in 1! This is 9 and 11 in the list on the forum.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We no longer remind you to unlock your phone for health data if the app is in foreground",
"u": ["https://twitter.com/beemuvi/status/1299464153115930625",
      "https://github.com/beeminder/BeeSwift/issues/44",
      "https://github.com/beeminder/BeeSwift/pull/78"],
"d": "2020-08-20",
"t": "2020-08-28",
"c": "There might still be problems with this though, according to Faire.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Prettier log-in / sign-up screen with better errors",
"u": ["https://twitter.com/beemuvi/status/1299464409866104832",
      "https://github.com/beeminder/BeeSwift/pull/110"],
"d": "2020-08-20",
"t": "2020-08-28",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "You can now view/edit a goal in a webview and then hit “done” to go back to the normal app but never actually leave the app",
"u": ["https://twitter.com/beemuvi/status/1299464524706140163",
      "https://github.com/beeminder/BeeSwift/pull/128"],
"d": "2020-08-20",
"t": "2020-08-28",
}, { // ------------------------------------------------------------------------
"s": true,
"f": true,
"x": "Same for creating a new goal! This piggybacks on the website but very seamlessly so users’ perspective is you can create goals in the app now!",
"u": ["https://twitter.com/beemuvi/status/1299464643992117248",
      "https://github.com/beeminder/BeeSwift/pull/119"],
"d": "2020-08-20",
"t": "2020-08-28",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Less crashing! At least we fixed one particular kind of crash. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1299464767975825408",
      "https://github.com/beeminder/BeeSwift/issues/56"],
"d": "2020-08-20",
"t": "2020-08-28",
"c": "Involved layout updates on background thread",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Negative UVI: no more 3rd-party login (long Apple-y story)",
"u": ["https://twitter.com/beemuvi/status/1299464883801485312",
      "https://github.com/beeminder/BeeSwift/issues/",
      "https://github.com/beeminder/BeeSwift/pull/"],
"d": "2020-08-20",
"t": "2020-08-28",
"c": "The long story is that Apple doesn't let you support any 3rd-party logins without also supporting Apple's. Also no one cared about the 3rd-party logins we had, like Twitter. Also we crammed 19 UVIs into 13 above so we don't feel too guilty logging a negative UVI here.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Improvements to the open-source code repository itself, like elaborating on contributor guidelines",
"u": ["https://twitter.com/beemuvi/status/1299465019436875776",
      "https://github.com/beeminder/BeeSwift/pull/138"],
"d": "2020-08-20",
"t": "2020-08-28",
"c": "See previous note-to-selves about why we don't feel too guilty counting this questionable UVI!",
}, { // ------------------------------------------------------------------------
"x": "Critical #bugfix in our Twitter integration: we finally caught up with the new 280-character limit and hashtags in the 2nd half of tweets are picked up now",
"u": ["https://twitter.com/beemuvi/status/1300578764787576833",
      "https://forum.beeminder.com/t/twitter-integration-missed-a-tweet/7156?u=dreev",
      "https://github.com/beeminder/beeminder/issues/656",
      "https://github.com/beeminder/beeminder/pull/1619"],
"d": "2020-08-26",
"t": "2020-08-31",
"c": "HT narthur. Thanks to Bee for redoing the whole gem or whatever!",
}, { // ------------------------------------------------------------------------
"x": "Previous UVI broke reminders (for ~24 hours) for Twitter goals! meta #bugfix sheepish-emoji & doubly-sheepish-emoji",
"u": ["https://twitter.com/beemuvi/status/1300578907846893568",
      "https://github.com/beeminder/beeminder/issues/",
      "https://github.com/beeminder/beeminder/pull/1644"],
"d": "2020-08-27",
"t": "2020-08-31",
}, /* --------------------------------------------------------- end 2020aug */ ]

const batch2020sep = [{  
"x": "We now strip html out of user-entered stuff when showing error messages (and fixed a bug that that #bugfix caused with showing our own html!)",
"u": ["https://twitter.com/beemuvi/status/1300921854874378240",
      "https://forum.beeminder.com/t/xss-kind-of/7176?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1646",
      "https://github.com/beeminder/beeminder/pull/1648"],
"d": "2020-08-26",
"t": "2020-09-01",
"c": "By Adam and Bee",
}, { // ------------------------------------------------------------------------
"x": "We now spell \"autodata\" consistently (no space or hyphen) and fixed a sorta-typo while we were at it (\"swap data source\" &rarr; \"swap data sources\")",
"u": ["https://twitter.com/beemuvi/status/1301292750780866560",
      "https://github.com/beeminder/beeminder/issues/1642",
      "https://github.com/beeminder/beeminder/pull/1641"],
"d": "2020-09-02",
"t": "2020-09-02",
"c": "In the iOS app too but that won't appear till the next version hits the app store. We plan to add the beeswift gissue here.",
}, { // ------------------------------------------------------------------------
"x": "We chopped out the parts of the front page video that are no longer true (mainly due to commitwall, UVI#2904)",
"u": ["https://twitter.com/beemuvi/status/1301664704801075201",
      "https://github.com/beeminder/beeminder/issues/1591"],
"d": "2020-09-03",
"t": "2020-09-03",
}, { // ------------------------------------------------------------------------
"x": "Several tweaks and cleanup of the visual road editor UI: added space, tightened copy, changed title, moved credits to the README, etc",
"u": ["https://twitter.com/beemuvi/status/1302007166774247428",
      "https://github.com/beeminder/road/issues/153"],
"t": "2020-09-04",
}, { // ------------------------------------------------------------------------
"x": "7 more visual road editor UI tweaks: better errorcopy, instructions, descriptions of UI elements, spacing, button text, etc",
"u": ["https://twitter.com/beemuvi/status/1303076455836913664",
      "https://github.com/beeminder/road/issues/156"],
"d": "2020-09-07",
"t": "2020-09-07",
}, { // ------------------------------------------------------------------------
"x": "Since the previous UVI was 7-in-1 (!), here's sorta-but-not-really negative UVI: yanked the checkboxes to turn off showing all data and the context graph",
"u": ["https://twitter.com/beemuvi/status/1303076763610673153",
      "https://github.com/beeminder/road/issues/156"],
"d": "2020-09-07",
"t": "2020-09-07",
}, { // ------------------------------------------------------------------------
"x": "A bunch of minor webcopy changes like changing \"Paypal\" to \"PayPal\", fixing a tiny typo on the Complice landing page, and general prose-tightening",
"u": ["https://twitter.com/beemuvi/status/1303843050607620097",
      "https://github.com/beeminder/beeminder/issues/1592"],
"d": "2020-09-09",
"t": "2020-09-09",
}, { // ------------------------------------------------------------------------
"x": "Slightly bigger copy change: rephrased all instances of things like \"...then Beeminder will be free for you forever\" to keeping it goal-specific",
"u": ["https://twitter.com/beemuvi/status/1303843180748521472",
      "https://github.com/beeminder/beeminder/issues/1592"],
"d": "2020-09-09",
"t": "2020-09-09",
}, { // ------------------------------------------------------------------------
"x": "And still bigger copy changes: fixed cases where we still wrongly said you didn't have to add a credit card till the first time you derailed",
"u": ["https://twitter.com/beemuvi/status/1303843270183665664",
      "https://github.com/beeminder/beeminder/issues/1510",
      "https://github.com/beeminder/beeminder/issues/1592"],
"d": "2020-09-09",
"t": "2020-09-09",
}, { // ------------------------------------------------------------------------
"x": "And then more minor copy changes like adding hovertext to more links and intentional vagueness about if you can start at $0",
"u": ["https://twitter.com/beemuvi/status/1303843377713012738",
      "https://github.com/beeminder/beeminder/issues/1592"],
"d": "2020-09-09",
"t": "2020-09-09",
"c": "Also we scrapped the ancient Bitcoin link, emphasized the dozens of integrations on the overview page, etc etc etc. Could've milked all this for like a dozen UVIs!",
}, { // ------------------------------------------------------------------------
"x": "Tiny typo (huge thanks to @Mcarthur_Joe for spotting it!): we had a rogue space in the link text at the bottom of the Data tab. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1305958848860020737",
      "https://github.com/beeminder/beeminder/issues/1668"],
"d": "2020-09-11",
"t": "2020-09-15",
}, { // ------------------------------------------------------------------------
"x": "The blog is responsive / mobile-friendly now! HT @skalinchuk",
"u": ["https://twitter.com/beemuvi/status/1306373787907026944",
      "https://github.com/beeminder/beeminder/issues/1164"],
"d": "2020-09-13",
"t": "2020-09-16",
}, { // ------------------------------------------------------------------------
"x": "Red error banner now says \"Could not update avatar\" if you click \"update avatar\" button w/o first uploading an image (used to give a 500 error). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1306486231115558912",
      "https://github.com/beeminder/beeminder/issues/1691"],
"t": "2020-09-16",
}, { // ------------------------------------------------------------------------
"x": "Some red error messages were getting swallowed up by the server, resulting in some forms having silent failures when there was an error! Serious #bugfix",
"d": "2020-09-15",
"t": "2020-09-18",
"u": ["https://twitter.com/beemuvi/status/1307104003415846914",
      "https://github.com/beeminder/beeminder/issues/284"],
"c": "Gory details: We were deleting the 'error' key from the hash that Rails uses to pass these error messages back & forth between controller and browser. We noticed some specific error messages were missing at various points since gissue #284 was added, and found the workaround to use a different key ('alert') for them, instead of the Rails standard 'error'. However, there were many places that we were still using 'error' key, and so would have been vulnerable to silent failures. Here is a non-exhaustive list of places we might've been bit by this: restarting goals, changing reminders, adding breaks, some goal settings, payments page, and others. It was compounded by the fact that we also use JS to submit some forms and show error messages, which made it less obvious all along that the problem was _all error messages_ were broken (all error messages generated from Rails).",
}, { // ------------------------------------------------------------------------
"x": "We now always prepend \"Legacy\" to the names of the legacy premium plans. #mini",
"u": ["https://twitter.com/beemuvi/status/1308186894992252928",
      "https://github.com/beeminder/beeminder/issues/1615"],
"t": "2020-09-21",
}, { // ------------------------------------------------------------------------
"x": "Purged all mention of \"road width\". Specifically: in the FAQ, in the premium FAQ (buried in hovertext), and in the \"Beeminder Standard Contract\".",
"u": ["https://twitter.com/beemuvi/status/1308187013795868672",
      "https://www.beeminder.com/faq",
      "https://www.beeminder.com/premium",
      "https://www.beeminder.com/contract",
      "https://github.com/beeminder/beeminder/issues/1708"],
"d": "2020-09-21",
"t": "2020-09-21",
}, { // ------------------------------------------------------------------------
"x": "On weight loss graphs we now show a dotted yellow line offset from the bright red line (yellow brick road) by an amount equal to the 90% Variance",
"u": ["https://twitter.com/beemuvi/status/1308568560206143489",
      "https://www.beeminder.com/faq#qvar",
      "https://github.com/beeminder/road/issues/137"],
"d": "2020-09-22",
"t": "2020-09-22",
"c": "AKA stdflux line. I believe this dispatches the last PDP violation from laney roads -- weight goals now show you all the information that road width used to.",
}, { // ------------------------------------------------------------------------
"x": "We added a cheesy captcha to our contact page to thwart an influx of nasty spambots. Also fixed some dashes to be proper em dashes. #mini",
"u": ["https://twitter.com/beemuvi/status/1309240981582041088",
      "https://github.com/beeminder/beeminder/issues/517",
      "https://github.com/beeminder/beeminder/issues/1721"],
"d": "2020-09-24",
"t": "2020-09-24",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Ratcheting (reducing safety buffer on) a goal no longer changes the dates of future changes in your yellow brick road!",
"u": ["https://twitter.com/beemuvi/status/1309638571481903104",
      "https://github.com/beeminder/beeminder/pull/1640"],
"d": "2020-09-24",
"t": "2020-09-25",
"c": "AKA Ratcheting redo redresses 'ratcheting breaks breaks' bug (RRRRBBB)!",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "That ratchet revamp fixes lots of things, like auto-ratchet (capping your safety buffer) plays nice with weekends-off and scheduled breaks now!",
"u": ["https://twitter.com/beemuvi/status/1310713849906036742",
      "https://github.com/beeminder/beeminder/issues/1569",
      "https://github.com/beeminder/beeminder/issues/410"],
"d": "2020-09-24",
"t": "2020-09-28",
"c": "Gissue #1569 is actually about adding a footnote to premium but that's moot now that we actually fixed the thing!",
}, { // ------------------------------------------------------------------------
"x": "If you ratchet a goal with a final road segment defined in terms of going at some rate till hitting some value, it actually works consistently. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1311062080208822272",
      "https://github.com/beeminder/beeminder/issues/552"],
"d": "2020-09-24",
"t": "2020-09-29",
"c": "That's a [nil,v,r] segment and would sometimes cause BBE errors from Beebrain",
}, { // ------------------------------------------------------------------------
"x": "We no longer let you ratchet a road with upcoming nonmonotonicities (non-monotone roads can lead to insta-derails and other surprises when ratcheting)",
"u": ["https://twitter.com/beemuvi/status/1311438292106141696",
      "https://github.com/beeminder/beeminder/pull/1640/commits/d4c3f9d222948a0b741071ce133cee7532d1754e"],
"d": "2020-09-24",
"t": "2020-09-30",
"c": "For the non-math-nerds: a nonmonotonicity is a peak or valley on your graph",
}, /* --------------------------------------------------------- end 2020sep */ ]


const batch2020oct = [{  
"x": "Relatedly, if you have an upcoming flat spot in your yellow brick road, the interface warns you, \"you may not be able to remove all of your buffer\"",
"u": ["https://twitter.com/beemuvi/status/1311744368177364992",
      "https://github.com/beeminder/beeminder/pull/1640/commits/b57f24190a5b24fd1a01a951e15eafb0501d06fc"],
"d": "2020-09-24",
"t": "2020-10-01",
}, { // ------------------------------------------------------------------------
"x": "Ratchet error messages used to say, e.g., \"Number of _days_ can't be less than zero\"; now says \"units\" when appropriate and \"days\" when appropriate. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1311956986825641985",
      "https://github.com/beeminder/beeminder/pull/1640/commits/80f26c8b149235d351e7aed4326d62e9b2762c63"],
"d": "2020-09-24",
"t": "2020-10-02",
}, { // ------------------------------------------------------------------------
"x": "Do-less and similar goals now include the actual goal units (not just \"units\") in the ratchet form, e.g., \"you have N units (cookies) of buffer on this goal\"",
"u": ["https://twitter.com/beemuvi/status/1313235575361560577",
      "https://github.com/beeminder/beeminder/pull/1640/commits/80f26c8b149235d351e7aed4326d62e9b2762c63"],
"d": "2020-09-24",
"c": "Baby steps. \"Do-less and similar\" means WEEN/RASH.",
}, { // ------------------------------------------------------------------------
"x": "Fixed some inconsistencies in ratchet error messages and how we quote hard caps on rationing goals, plus a wording tweak. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1313611702009655296",
      "https://github.com/beeminder/beeminder/pull/1640/commits/80f26c8b149235d351e7aed4326d62e9b2762c63",
      "https://github.com/beeminder/beeminder/pull/1640/commits/92ee1943fb007b3063171c2bd1b51911bc118ecc",
      "https://github.com/beeminder/beeminder/pull/1640/commits/352bb114af2378607cd1eb9b299cc97fc81ee9aa",
      "https://github.com/beeminder/beeminder/pull/1640/commits/ddec98c5606e966082b396a5846cdd3bddb777d6"],
"d": "2020-09-24",
"c": "Could've milked this for a few UVIs. (1) There were a couple different inconsistencies with the error messages in the ratchet form: sometimes they wouldn't show, and sometimes you'd get the error message but on a green banner. (2) Rationing goals (sloping down, good side up) would say, eg, 'you have -33 units', but they show the cap as a positive number above the goal and only accept positive values in the ratchet form, so we made it just say '33 units' for rationing goals. We ought to give rationing caps as a negative value, but given the status quo, and with ratchet forms expecting to get 'newsafety' from the user as a positive value, this is the expedient change, for consistency's sake. (3) Small wording tweak so it works for both RASH & WEEN: \"before you are above\" -> \"before you are off\".",
}, { // ------------------------------------------------------------------------
"x": "We now update the text box for do-less (and rationing) ratchets after ratcheting (we weren't updating the default value that's in the box before)",
"u": ["https://twitter.com/beemuvi/status/1313921710513516544",
      "https://github.com/beeminder/beeminder/pull/1640/commits/80f26c8b149235d351e7aed4326d62e9b2762c63"],
"d": "2020-09-24",
"t": "2020-10-07",
}, { // ------------------------------------------------------------------------
"x": "Also we now do a validation check on the lower &amp; upper limit for do-less ratcheting and don't allow you to submit values outside the range",
"u": ["https://twitter.com/beemuvi/status/1313922206523482113",
      "https://github.com/beeminder/beeminder/pull/1640/commits/80f26c8b149235d351e7aed4326d62e9b2762c63"],
"d": "2020-09-24",
"t": "2020-10-07",
"c": "We're using do-less as a stand-in for WEEN/RASH. We already had javascript validation on the bounds for the do-more ratchet, but it wasn't working for do-less ratchets. Now it works everywhere.",
}, { // ------------------------------------------------------------------------
"x": "If you ratcheted away some buffer and then did so again without reloading the page, we'd let you try to ratchet to now-impossible amounts. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1314662115081285632",
      "https://github.com/beeminder/beeminder/pull/1640/commits/80f26c8b149235d351e7aed4326d62e9b2762c63"],
"d": "2020-09-24",
"c": "Javascript validations yay! E.g., if you had 18 days of buffer and ratcheted to 6, we were letting you try to ratchet back to 10 (if you hadn't reloaded the page yet). Now that's caught by the Javascript before you submit the form.",
}, { // ------------------------------------------------------------------------
"x": "All those ratchet changes made some goal pages reeeally slow to load and even yielded some 500-errors on some archived/frozen/etc goals. Now all fixed! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1315796477814267904",
      "https://github.com/beeminder/beeminder/pull/1741",
      "https://github.com/beeminder/beeminder/issues/1740",
      "https://github.com/beeminder/beeminder/pull/1773",
      "https://github.com/beeminder/beeminder/commit/f770dd6a82e1696a3e82ee455da779c1e5c8f490",
      "https://github.com/beeminder/beeminder/commit/1f62609245b6e8ec078e048f734b0fb1027b3307",
      "https://github.com/beeminder/beeminder/commit/7c137f6d4ed8a102a2686cb330a352396b058031"],
"d": "2020-09-25",
"t": "2020-10-12",
"c": "Bounds checking for the monotonicity checker (gissue#1740). There was a separate 500-error fix in PR#1773 that we're not counting separately but it was that we were assuming bb[:delta] was present, but it might not be when first redirected to the goal page after restarting an old goal, and that assumption made the page 500 on that first pageload.",
}, { // ------------------------------------------------------------------------
"x": "Nice visual indicator when you're ratcheting away a flat spot as opposed to shifting your road up or down (usually up, for do-more)",
"u": ["https://twitter.com/beemuvi/status/1316153163250978816",
      "https://blog.beeminder.com/ratchet",
      "https://github.com/beeminder/beeminder/issues/1771",
      "https://github.com/beeminder/beeminder/pull/1773"],
"d": "2020-10-05",
"t": "2020-10-13",
"c": "AKA flat-ratchet. See the gissue for before &amp; after shots."
}, { // ------------------------------------------------------------------------
"x": "Also added lightning bolts to the \"ratchet\" button, brought back the briefly missing stepper buttons, and clarified \"This will reduce the length of your break\"",
"u": ["https://twitter.com/beemuvi/status/1316165707378257921",
      "https://github.com/beeminder/beeminder/issues/1771",
      "https://github.com/beeminder/beeminder/pull/1773"],
"d": "2020-10-05",
"t": "2020-10-13",
}, { // ------------------------------------------------------------------------
"x": "Ratchet forms now update after doing a ratchet (like changing \"you have an upcoming flat spot\" to \"you are on a flat spot\") without needing a page reload",
"u": ["https://twitter.com/beemuvi/status/1316457045814468609",
      "https://github.com/beeminder/beeminder/issues/1780",
      "https://github.com/beeminder/beeminder/pull/1773",
      "https://github.com/beeminder/beeminder/commit/3826f181b8218fc4f6198daba6057a8f71e4fbec",
      ],
"d": "2020-10-05",
"t": "2020-10-14",
"c": "Javascriptily? AJAXly? What's the term for this?",
}, { // ------------------------------------------------------------------------
"x": "Added 9 new taglines to the front page rotation, like \"Live deliberately\" (a Thoreau reference) and \"Mr Hyde, meet Dr Jekyll's fist\" (a Stevenson reference)",
"u": ["https://twitter.com/beemuvi/status/1317230996425564160",
      "https://github.com/beeminder/beeminder/issues/1756"],
"d": "2020-10-01",
"t": "2020-10-16",
"c": "Also we nixed a Noom-ish sounding one",
}, { // ------------------------------------------------------------------------
"x": "How mean are we? We ended an experiment that randomly gave extra free goals to people and yanked the \"discount please\" button on the premium page.",
"u": ["https://twitter.com/beemuvi/status/1317237759954702336",
      "https://forum.beeminder.com/t/fewer-free-goals/7279",
      "https://github.com/beeminder/beeminder/issues/1743",
      "https://github.com/beeminder/beeminder/pull/1744#issuecomment-702882824",
      "https://github.com/beeminder/beeminder/issues/1647 // discount-please button",
      "https://github.com/beeminder/beeminder/pull/1763"],
"d": "2020-10-01",
"t": "2020-10-16",
"c": "That was the 3-vs-7 paywall bucket test",
}, { // ------------------------------------------------------------------------
"x": "Insult to injury: The more-free-goals button grays out after several clicks (and changed/added webcopy around it). Even worse: made lifetime plans expensiver!",
"u": ["https://twitter.com/beemuvi/status/1317237893266513920",
      "https://github.com/beeminder/beeminder/issues/1775",
      "https://github.com/beeminder/beeminder/issues/1686",
      "https://github.com/beeminder/beeminder/pull/1814",
      "https://github.com/beeminder/beeminder/commit/e1f66b09d4931710530bd896a9a76bad0f1fc709",
      "https://github.com/beeminder/beeminder/issues/1932"], // fixed a bug with this later
"d": "2020-10-02",
"t": "2020-10-16",
"c": "Also we changed the support scripts to offer free goals in exchange for feedback, upside-down-support-style. And, specifically, 3X'd the lifetime prices, which, it has since been pointed out to us, miiiight make us seem like price-gouging jerks and maybe we should just stop offering new lifetime plans? TBD!",
}, { // ------------------------------------------------------------------------
"x": "Fixed a rare weirdness with drawing the purple steppy line on the graph: now it always starts from your first entered datapoint. HT @PhilipHellyer",
"u": ["https://twitter.com/beemuvi/status/1319064304893583360",
      "https://github.com/beeminder/road/issues/129"],
"d": "2020-10-06",
"t": "2020-10-21",
}, { // ------------------------------------------------------------------------
"x": "Sleep As Android now uses your timezone properly in automatic datapoint comments; relatedly: rare #bugfix with missing some sleep events on initial data fetch",
"u": ["https://twitter.com/beemuvi/status/1319404413677563905",
      "https://github.com/beeminder/beeminder/issues/1806",
      "https://github.com/beeminder/beeminder/issues/1807",
      "https://github.com/beeminder/beeminder/pull/1809"],
"d": "2020-10-08",
"t": "2020-10-22",
}, { // ------------------------------------------------------------------------
"x": "Fixed a rare-ish but blatant, baneful, borderline-bum-steer bug where in some timezones we'd mix up \"tomorrow\" and \"today\" in quoting your deadline! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1319753056616026112",
      "https://pumpkintime.glitch.me",
      "https://github.com/beeminder/beeminder/issues/221"],
"d": "2020-10-16",
"t": "2020-10-23",
"c": "Only borderline because the colors were correct so it would've been quite a stretch to be led astray by this bug. Also in the original tweet this was 'beswiking' instead of 'bum-steer'. Same thing, our bug classification system is just evolving.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Lots of (intended to be temporary) changes to the signup page which don't count as improvements but one does: being able to add a credit card as part of signup",
"u": ["https://twitter.com/beemuvi/status/1320874311448629249",
      "https://github.com/beeminder/beeminder/issues/1842"],
"d": "2020-10-16",
"t": "2020-10-26",
"c": "Codename: Freefull. We're waitlisting people for the free plan (!).",
}, { // ------------------------------------------------------------------------
"x": "We now remind you of what payment method you have on file (and about how Beeminder charges you for going off track) every time you create a goal",
"u": ["https://twitter.com/beemuvi/status/1320874439194537987",
      "https://github.com/beeminder/beeminder/issues/1842"],
"d": "2020-10-16",
"t": "2020-10-26",
}, { // ------------------------------------------------------------------------
"x": "The precision (aka quantum) setting is now a dropdown (and never shows scientific notation) so that's way less confusing",
"u": ["https://twitter.com/beemuvi/status/1321239237757317123",
      "https://github.com/beeminder/beeminder/issues/1702",
      "https://github.com/beeminder/beeminder/issues/1583"],
"d": "2020-10-23",
"t": "2020-10-27",
"c": "Like how people would think '0' meant zero decimal places!"
}, { // ------------------------------------------------------------------------
"x": "Minor things: copy tweak to refer to visual road editor as a prototype, and paired down the number of frequency options in the discount slider",
"u": ["https://twitter.com/beemuvi/status/1321591181071929344",
      "https://github.com/beeminder/beeminder/issues/288",
      "https://github.com/beeminder/beeminder/issues/1816",
      "https://github.com/beeminder/beeminder/pull/1815",
      "https://github.com/beeminder/beeminder/commit/ac6a14c74bce50c2c64ff24460a85fbfbc601d60"],
"d": "2020-10-21",
"c": "Frequency options went from [1,2,3,4,5,6,7,8,9,10,11,12,15,18,21,24,36,48,60,72,84,1000] to [1,2,4,6,12,24,1000]. Still mulling questions about lifetime plans.",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in ratchet while rushing to publish the blog post about it: we miscalculated the road value of some segments & didn't allow ratchet when we should have",
"u": ["https://twitter.com/beemuvi/status/1321962065674690560",
      "https://github.com/beeminder/beeminder/issues/1829",
      "https://github.com/beeminder/beeminder/pull/1830"],
"d": "2020-10-13",
"t": "2020-10-29",
"c": "Problem was a timestamp vs daystamp issue. Grrrrrr.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Beedroid version 3.3.1! A relatively elaborate update to the Beeminder Android app!",
"u": ["https://twitter.com/beemuvi/status/1322322090356142080",
      "https://github.com/beeminder/beedroid/issues/127",
      "https://github.com/beeminder/beedroid/issues/48",
      "https://github.com/beeminder/beedroid/issues/149",
      "https://github.com/beeminder/beedroid-hist/pull/100",
      "https://github.com/beeminder/beeminder/issues/1541",
      "https://github.com/beeminder/beeminder/issues/1628"],
"d": "2020-10-20",
"t": "2020-10-31",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "Primarily: Pretty pervasive improvements to notifications. Beemergency notifications now consistently created when not already there / updated when they are.",
"u": ["https://twitter.com/beemuvi/status/1322322090356142080"],
"d": "2020-10-20",
"t": "2020-10-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Also with notifications: Separate notification channel for \"goal is now safe\", not creating new notifications just because something about the goal changed",
"u": ["https://twitter.com/beemuvi/status/1322667252584341504"],
"d": "2020-10-20",
"t": "2020-10-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "More with notifications: Always making noise or vibrating or whatever it's allowed to do for beemergency notifications on the zeno schedule",
"u": ["https://twitter.com/beemuvi/status/1322667352522059777"],
"d": "2020-10-20",
"t": "2020-10-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Other notifications improvements and #bugfix's, like fixing some bum-steer bugs that sometimes prevented notifications from appearing",
"u": ["https://twitter.com/beemuvi/status/1322667492011991041"],
"d": "2020-10-20",
"t": "2020-10-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Kinda big for Beedroid: The due-by table! It tells you exactly how much you have to do on each upcoming day. It's in the slidey drawer on the graph image.",
"u": ["https://twitter.com/beemuvi/status/1322667812712833030"],
"d": "2020-10-20",
"t": "2020-10-31",
"c": "Also involved rewworking that whole panel removing info that you don't need cuz it's still visible on the goal page when it's slid out.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Better indications of how much safety buffer you have (aka safesum). Also we show goal units in more places.",
"u": ["https://twitter.com/beemuvi/status/1322667921928146944"],
"d": "2020-10-20",
"t": "2020-10-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed abbreviations for amounts of time, got rid of obsolete \"panic days\" setting and references to \"lanes\", smarter about when to show your username",
"u": ["https://twitter.com/beemuvi/status/1322668088316157953"],
"d": "2020-10-20",
"t": "2020-10-31",
"c": "Packing in a lot of UVIs in one here! The abbreviations thing is on the goal page, below the graph on the right side, like \"4 hours / wk\". The username thing suppresses it when you're the only account logged in (kind of an anti-magic violation but being the overwhelmingly common case, it seems too dogmatic to always show username; it might mean we just shouldn't support multiple accounts at all though!).",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed a rare syncing issue, fixed some crashes, and a rare weirdness with widgets. And a Tasker integration bug. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1322668221002997760"],
"d": "2020-10-20",
"t": "2020-10-31",
"c": "Also lots of UVIs in one here!",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The \"send feedback\" interface is now clearer / less confusing that it's generating an email for you to send to us",
"u": ["https://twitter.com/beemuvi/status/1322668343069872128"],
"d": "2020-10-20",
"t": "2020-10-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "And finally, we now redirect you to the website to sign up while the free plan is full (see UVI#3568)",
"u": ["https://twitter.com/beemuvi/status/1322668485239996416"],
"d": "2020-10-20",
"t": "2020-10-31",
}, /* --------------------------------------------------------- end 2020oct */ ]

const batch2020nov = [{  
"f": true,
"x": "BeemiOS version 5.8! New hotness (but mostly incremental improvements and bugfixes) in the Beeminder iOS app!",
"u": ["https://twitter.com/beemuvi/status/1324476341861801984",
      "https://github.com/beeminder/BeeSwift/pull/223",
],
"d": "2020-10-20",
"t": "2020-11-05",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "Better Apple Health integration instructions, link for forgotten password, pull-to-refresh for goals, more consistent autodata datapoint comments",
"u": ["https://twitter.com/beemuvi/status/1324476341861801984",
      "https://github.com/beeminder/BeeSwift/issues/170", // apple health instructions
      "https://github.com/beeminder/BeeSwift/issues/173", // reset passwd link
      "https://github.com/beeminder/BeeSwift/issues/84",  // pull-to-refresh
      "https://github.com/beeminder/BeeSwift/issues/195", // autodata comment consistency
],
"d": "2020-10-20",
"t": "2020-11-05",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Other #bugfix's like missing settings gear icon on older iOSes, showing duplicate datapoints, a crash, number on app badge wrongly shown after logging out",
"u": ["https://twitter.com/beemuvi/status/1324476644862566401",
      "https://github.com/beeminder/BeeSwift/issues/158", // missing gear icon
      "https://github.com/beeminder/BeeSwift/issues/166", // dup data
      "https://github.com/beeminder/BeeSwift/issues/179", // crasher
      "https://github.com/beeminder/BeeSwift/issues/40",  // app badge updated on signout
],
"d": "2020-10-20",
"t": "2020-11-05",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "That was a lot of UVIs packed into those couple entries! Also we no longer give a bogus error if you try to sign up while Beeminder's free plan is full!",
"u": ["https://twitter.com/beemuvi/status/1324476781609377793"],
"d": "2020-10-20",
"t": "2020-11-05",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Also fixed a weird black outline on the app icon and made countdowns (and maybe other things) on the goal screen appear more snappily",
"u": ["https://twitter.com/beemuvi/status/1324476969128394752",
      "https://github.com/beeminder/BeeSwift/issues/178"], // tiny black border
"d": "2020-10-20",
"t": "2020-11-05",
}, { // ------------------------------------------------------------------------
"x": "We rewrote the confirmation email and banner message to be extra clear that you have to confirm your email when signing up for 'keep abreast of the buzz'",
"u": ["https://twitter.com/beemuvi/status/1325965475566612485",
      "https://github.com/beeminder/beeminder/pull/1867"],
"d": "2020-10-23",
"t": "2020-11-09",
"c": "This also applied to the waitlist email for the free plan, but that's moot now.",
}, { // ------------------------------------------------------------------------
"x": "We purged all HTTP links everywhere in webcopy and emailcopy. Everything should be HTTPS now. Also some changes to beeminder.com/contract",
"u": ["https://twitter.com/beemuvi/status/1326319936772272129",
      "https://github.com/beeminder/beeminder/issues/347",
      "https://github.com/beeminder/beeminder/pull/1834", // http->https refactoring, plus blog blurbs
      "https://github.com/beeminder/beeminder/commit/73b04d6c8ef0452bde2ef48655518a73a68c8555", // missed some http's
      "https://github.com/beeminder/beeminder/issues/1215",
      "https://github.com/beeminder/beeminder/pull/1860",
      "https://github.com/beeminder/beeminder/commit/7966918d2308852f0f0da2158ba7504995c4633a",
      "https://github.com/beeminder/beeminder/commit/a6f811050dda7db804b3fd30ad3bfb4555d493ed"],
"d": "2020-10-14",
"t": "2020-11-10",
"c": "Changes to Ye Olde Beeminder Contract were a bit later and were just purging a rogue \"lane\" from pre-YBHP",
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500 error on signup (didn't actually prevent signups); no longer require email confirmation if already confirmed for 'keep abreast of the buzz' #bugfix",
"u": ["https://twitter.com/beemuvi/status/1326690458219601920",
      "https://github.com/beeminder/beeminder/issues/1875",
      "https://github.com/beeminder/beeminder/pull/1872"],
"d": "2020-10-25",
"t": "2020-11-11",
"c": "TODO: clean these notes up, probably pare them down: Sunday bugfix with waitlists/signups: the thing with sending email to support when someone confirms their email address was failing for *user* signups (not waitlist). The failure was with sending the email, and occurred after their email was confirmed, so it manifested as a one-time 500 page that looked sketchy, but was instantly resolved and didn't interfere with creating goals on their shiny new account etc. Wrong local var in the user-confirmation case",
}, { // ------------------------------------------------------------------------
"x": "Also no more need to confirm your email if you sign up via Google or something else that gives us a confirmed email address; now we send a welcome email instead",
"u": ["https://twitter.com/beemuvi/status/1327051276589273088",
      "https://github.com/beeminder/beeminder/issues/1878",
      "https://github.com/beeminder/beeminder/pull/1877"],
"d": "TODO: seen on 2020-10-27 but not sure the deploy date",
"t": "2020-11-12",
"c": "Also stuff with waitlisting, like adding premium credit for people on the waitlist that's applied to their new account when they sign up. But that's all moot now that Freefull is over.",
}, { // ------------------------------------------------------------------------
"x": "Removed some no-longer-relevant warnings from the interface about how scheduled breaks and ratcheting don't play nice together. Now they do!",
"u": ["https://twitter.com/beemuvi/status/1327410817696813057",
      "https://blog.beeminder.com/ratchet/",
      "https://github.com/beeminder/beeminder/issues/1836",
      "https://github.com/beeminder/beeminder/pull/1886"],
"d": "2020-10-29",
"t": "2020-11-13",
"c": "The warnings were weekends-off saying it doesn't play nice with ratcheting, and auto-ratchet saying it doesn't work with long breaks",
}, { // ------------------------------------------------------------------------
"x": "Embarrassingly we broke the \"Goals that people have been beeminding\" tabs on bmndr.com/overview months ago! #bugfix HT @GigusDev",
"u": ["https://twitter.com/beemuvi/status/1328495785286148098",
      "https://twitter.com/GigusDev/status/1323021859554791425",
      "https://github.com/beeminder/beeminder/issues/959"],
"d": "2020-11-01",
"t": "2020-11-16",
}, { // ------------------------------------------------------------------------
"x": "Now consistent with \"real time\" as the noun, \"real-time\" as the adjective. Also a case-sensitivity #bugfix with the waitlist though that's moot now!",
"u": ["https://twitter.com/beemuvi/status/1328821502154665984",
      "https://github.com/beeminder/beeminder/issues/1484",
      "https://github.com/beeminder/beeminder/pull/1892",
      "https://github.com/beeminder/beeminder/issues/1899",
      "https://github.com/beeminder/beeminder/pull/1903"],
"c": "Never 'realtime'. We were treating email addresses (for w8list) as case insensitive when you signed up, but case sensitive when we tried to confirm, so that if you gave us an email like JohnSmith@email.com we wouldn't be able to find you when you tried to confirm",
"d": "2020-11-04",
"t": "2020-11-17",
}, { // ------------------------------------------------------------------------
"x": "As part of reopening the free plan (kinda also a UVI), we now require a payment method in order to sign up and added a \"Why?\" popup to justify it",
"u": ["https://twitter.com/beemuvi/status/1329225950756626432",
      "https://github.com/beeminder/beeminder/pull/1905"],
"d": "2020-11-06",
"t": "2020-11-18",
}, { // ------------------------------------------------------------------------
"x": "The ratchet UI now warns if your road is infinitely flat (ratcheting makes no sense then), pointing you to the road dial to make it not be so you can ratchet",
"u": ["https://twitter.com/beemuvi/status/1329588771184996353",
      "https://github.com/beeminder/beeminder/issues/1772",
      "https://github.com/beeminder/beeminder/pull/1904"],
"d": "2020-11-09",
"t": "2020-11-19",
}, { // ------------------------------------------------------------------------
"x": "Beedroid (3.3.2) now aims you at the website to sign up; also the API gives a clearer message in rejecting signup via the API",
"u": ["https://twitter.com/beemuvi/status/1333567698601611264",
      "https://github.com/beeminder/beedroid/issues/165",
      "https://github.com/beeminder/beedroid-hist/pull/102",
      "https://github.com/beeminder/beeminder/pull/1908"],
"d": "2020-11-06",
"t": "2020-11-30",
"c": "From \"Beeminder isn't taking new signups right now but you can get on the waitlist on the website!\" to \"Beeminder signup is in flux and only works via the website. Apologies!\"",
}, /* --------------------------------------------------------- end 2020nov */ ]

const batch2020dec = [{  
"x": "Fixed the too-long placeholder text for goalname in goal creation and are now consistent about \"goalname\" instead of \"goal name\". HT Cantor Soule-Reeves",
"u": ["https://twitter.com/beemuvi/status/1333932982139174913",
      "https://github.com/beeminder/beeminder/issues/1526",
      "https://github.com/beeminder/beeminder/pull/1915"],
"d": "2020-11-16",
"t": "2020-12-01",
}, { // ------------------------------------------------------------------------
"x": "Fixed and rewrote the tooltips for the due-by table, making it make sense for every goal type. HT Uluc Saranli. Also improved http://road.beeminder.com/tutorial copy.",
"u": ["https://twitter.com/beemuvi/status/1334273834837442561",
      "https://github.com/beeminder/beeminder/issues/1918",
      "https://github.com/beeminder/beeminder/pull/1919",
      "https://github.com/beeminder/road/issues/159"],
"d": "2020-11-16",
"t": "2020-12-02",
}, { // ------------------------------------------------------------------------
"x": "Our @integromat integration is official! Made a landing page for it and added it to our front page gallery. http://beeminder.com/integromat",
"u": ["https://twitter.com/beemuvi/status/1334660741798920193",
      "https://twitter.com/bmndr/status/1332083813371973632",
      "https://github.com/beeminder/beeminder/issues/1824",
      "https://github.com/beeminder/beeminder/pull/1920"],
"d": "2020-11-16",
"t": "2020-12-03",
}, { // ------------------------------------------------------------------------
"x": "Important #bugfix in the email bot parser to be robust to some weird quoting that the Fastmail email client was doing. HT Andy Brett",
"u": ["https://twitter.com/beemuvi/status/1335023209465303042",
      "https://github.com/beeminder/beeminder/issues/1925",
      "https://github.com/beeminder/beeminder/pull/1926"],
"d": "2020-11-16",
"t": "2020-12-04",
"c": "By dreev. Robusted up the regex.",
}, { // ------------------------------------------------------------------------
"x": "Added Finnish and Scottish Gaelic to our Duolingo autodata integration! Also added more direct links to the integration on our Integromat landing page.",
"u": ["https://twitter.com/beemuvi/status/1336101209573244928",
      "https://forum.beeminder.com/t/duolingo-tracking-finnish-new-language/7489/4?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1935",
      "https://github.com/beeminder/beeminder/pull/1943"],
"d": "2020-11-24", // and 2020-11-20
"t": "2020-12-07",
}, { // ------------------------------------------------------------------------
"x": "Dropped the grayed-out checkbox and webcopy about the yellow brick half-plane migration; so lanes are truly but a distant memory now. Also fixed aggday=mode!",
"u": ["https://twitter.com/beemuvi/status/1336415728086347777",
      "https://github.com/beeminder/beeminder/issues/1945",
      "https://github.com/beeminder/road/issues/168"],
"t": "2020-12-08",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We removed the new pledge schedule :gasp-emoji: Back to just $0, $5, $10, $30, $90, $270, $810, $2430 for now. Also fixed erroneous $0 and $1 pledge caps!",
"u": [
      "https://github.com/beeminder/beeminder/issues/693",
      "https://github.com/beeminder/beeminder/pull/1922",
      "https://github.com/beeminder/beeminder/issues/1963",
      "https://github.com/beeminder/beeminder/pull/1960",
      "https://github.com/beeminder/beeminder/pull/1967"],
"d": "2020-12-04",
"c": "Also changed copy to mention that \"pledgeless\" really means \"sub-$5-pledge-capped\" which we can change back if we stick with just the OG schedge",
}, { // ------------------------------------------------------------------------
"x": "Added a bunch of explanation about weight loss goals to our help docs. https://help.beeminder.com/article/96-weight-gain-loss-goals",
"u": ["https://twitter.com/beemuvi/status/1337198110871748609",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/20?u=dreev"],
"d": "2020-11-30",
"t": "2020-12-10",
"c": "HT martinwachters",
}, { // ------------------------------------------------------------------------
"x": "An obscure rounding bug in Beebrain meant if you were right on the edge *and your value was a negative number* you could erroneously derail. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1337557503073112065",
      "https://github.com/beeminder/road/issues/165"],
"d": "2020-12-11",
"t": "2020-12-11",
}, { // ------------------------------------------------------------------------
"x": "We got a marked (and provable thanks to @StatusCake) performance improvement (and downtime reduction!) by migrating from @linode DNS to AWS Route53",
"u": ["https://twitter.com/beemuvi/status/1338649795901018112",
      "https://github.com/beeminder/beeminder/issues/1849",
      "https://github.com/beeminder/beeminder/issues/285"],
"d": "2020-11-14",
"t": "2020-12-14",
"c": "By Adam. Starting around the 14th is when the StatusCake graph gets drastically better",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2020dec */ ]


var staged = [ {
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
// ratchet revamp: double check that we got the following things from https://github.com/beeminder/beeminder/pull/1640
//* update the text box for WEEN/RASH ratchet after ratcheting
//* check the bounds on WEEN/RASH ratcheting and don't allow to submit an amount larger than current buffer
//  (we were only checking the bounds for MOAR/PHAT ratchets)
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]

/*********************************************************************************************************************************************************************
[[PSA: add dates please!]]
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
MINI beebrain things: skatesum daily rate & trimmean
https://github.com/beeminder/road/issues/169
https://github.com/beeminder/road/issues/170
pushed 2020-12-06
depl'd 2020-12-08
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
BEEDROID: 
1. FIX: Goalname that's a prefix of another goalname breaks search
   https://github.com/beeminder/beedroid/issues/72
   merged 2020-11-25, awaiting deploy to google play
2. FIX: low space sync bug
   https://github.com/beeminder/beedroid/issues/77
3. CLEANUP: removed the "check for graph updates" frequency setting and "panic buffer" setting
   https://github.com/beeminder/beedroid/issues/136
   https://github.com/beeminder/beedroid/issues/62
4. maybe something with beedroid's due-by table slide-out?
   https://github.com/beeminder/beedroid/issues/147
5. de-lane-ify the tally screen -- or was that part of the last release?
   https://github.com/beeminder/beedroid/issues/143
6. FIX: User reports "Tasker integration seems to break if goal is changed from manual to API"
   https://github.com/beeminder/beedroid/issues/140
7. Is this user-visible at all: Migrate to AndroidX
   https://github.com/beeminder/beedroid/issues/127
8. Sounds like this only affected beta versions: Widgets broken on upgrade from 3.3 beta 2 to beta 3
   https://github.com/beeminder/beedroid/issues/148
9. Stop showing user name when I am searching for goal
   https://github.com/beeminder/beedroid/issues/152
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
fixed the thing with blue error banners persisting through the next page load so you see an error about your rescuetime auth or whatever in a totally wrong place
https://github.com/beeminder/beeminder/issues/1968
https://github.com/beeminder/beeminder/pull/1969
is this part of that? https://github.com/beeminder/beeminder/commit/ff253064d4afce3b542e534670a663a9d1348fbb
these banners should use flash.now
* UVI: fixes the #1968 issue in goals controller
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
things with alias domains redirecting/expanding correctly
eg "blog.bmndr.co/nerds" actually works now
https://github.com/beeminder/beeminder/issues/89
"d": "2020-11-14"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: put this in the right spot for the beemios UVI for this
PR from andy: adds a private / undocumented api endpoint for alerting the app of the minimum ios version
https://github.com/beeminder/beeminder/pull/1214
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "(not yet deployed: gmailzero restarts of ancient goals get proper error, by Adam)",
// Set autod error after Gmailzero issues
// UVI: Users now get error messages when restarting really old Gmailzero goals instead of graph failures.
"u": [
      "https://github.com/beeminder/beeminder/issues/1650",
      "https://github.com/beeminder/beeminder/pull/1821"],
"c": "By Adam, merged on 2020-10-22 so deployed sometime after that. Failed to tweet/log it and then realized it was broken on 12-04.",
// TODO: see gissue 1965
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
AWAITING BEEBODY DATABASE CLEANUP:
giving a proper error if you somehow create road rows that start before the goal start date (tini)
https://github.com/beeminder/beeminder/issues/1623
https://github.com/beeminder/road/commit/e67e3e1df52652d00ec5d2abe645e803b1bc4fb4
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
// TODO: wait, why, this doesn't make sense, if it's not auto-summing you'd want the sum, right?
"x": "For the rare goals that are aggday=sum but not auto-summing, we no longer show the total due in the blurb that tells you your safety buffer",
"x": "Hide the total in the blurb with your safety buffer if the goal has a custom aggday of 'sum'. (Previously we were only hiding it when the goal is cumulative.)"
"u": [
      "https://github.com/beeminder/beeminder/issues/1285",
      "https://github.com/beeminder/beeminder/pull/1494"],
"d": "2020-07-08",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "The \"headsum\" API output field is now identical to the hovertext for graph thumbnails",
TODO: let's not tweet this till we rename refactor these "sum"-suffixed fields and come up with a better name than "headsum" for this one
titlesum?
https://github.com/beeminder/road/commit/ab6c09b9e91e9b167f81f18c06d864821822d2c2
https://github.com/beeminder/road/issues/136
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: gissue this or something:
dreev kinda wants to have a discussion about general principles for when to wrap things in shn(), when to conservaround, etc.
probably the answer is: wrap everything shown to the user in shn(); never conservaround datapoints, just dueby values.
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
fatcyclist mongoid pagination bug, waiting to tweet till bmndr.com/fatcyclist is non-hideous
https://github.com/beeminder/beeminder/pull/1196
https://github.com/beeminder/beeminder/issues/1188
https://github.com/beeminder/beeminder/commit/4e94d3a862039fb4f9d23e79ca4fd9a8628ce3e6
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
GMAILZERO: change blog link (probably wait for other copy changes before tweeting)
https://github.com/beeminder/beeminder/commit/39cd4142c8fa119418ab5996187e77b53c3efb39
https://github.com/beeminder/beeminder/issues/1002
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: already tweeted; merge links with existing UVI
Wrap initial datapoint comment in shn.
by adam
https://github.com/beeminder/beeminder/issues/948
https://github.com/beeminder/beeminder/pull/950
https://github.com/beeminder/beeminder/commit/0435e5e5cc379df09b83111773c25183ed933c8f
}, { // ------------------------------------------------------------------------   
}, { // ------------------------------------------------------------------------
SAFESUM
1. Add safesum and test for safesum.
   https://github.com/beeminder/beeminder/commit/52a60651c8d48f340d3ef2958dccc75c01c31669
   https://github.com/beeminder/beeminder/pull/953
2. https://github.com/beeminder/beeminder/issues/830
}, { // ------------------------------------------------------------------------
RASH BUG -- will this count as user-visible?
https://github.com/beeminder/beeminder/issues/957 [oh, this was tweeted, says this gissue? https://changelog.beeminder.com/#3234]
https://github.com/beeminder/beeminder/commit/d36a498b191218de3430e37e9f011be505a66335
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
SCHEDGE:
1. got rid of the "Increase the pledge each time you derail" checkbox on the goal page
}, { // ------------------------------------------------------------------------
fixes timeouts in jsbrain_server? https://github.com/beeminder/road/issues/51
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Super mini: removed \"Deprecated\" from the 'id' field in the api docs Goal resource -- https://changelog.beeminder.com/#2104 sort of myopically semi-broke the api, since we want you to use the slug as the identifier, but now you can change the goalname, so we'd definitely better keep the goal id around so api clients can piece things back together if someone goes and changes a goalname on them."
"c": "it's super mini, but took lots of words to say the things."
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~----------------------------- CANDIDATES -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
wordpress plugin: github.com/beeminder/beeminder-ping
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~---------------------------------- IDEAS -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
1. abslnw conversion for deathtonoisy means various UVIs like no more stupidly conservatively saying safe days to centerline because the stupid roadwidth could stupidly change
2. http://forum.beeminder.com/t/please-let-me-rename-archived-goals/2746
3. DREEV: point to help.beeminder.com in blog.beeminder.com/newbees and vice versa
4. proper buttons on the blog like at the end of blog.beeminder.com/strava
5. strava activity links on the datapoints page <= do that too for IFTTT and runkeeper where we get an event/recipe URI from the service
6. https://forum.beeminder.com/t/api-create-goal-documentation-needs-updating/5547
7. Peasy API docs gissues: https://github.com/beeminder/beeminder/issues/963
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
