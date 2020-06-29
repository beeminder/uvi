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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2020jun */ ]


var staged = [ {
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Beedroid 3.3.0 coming shortly with like 10 little UVIs! <3",
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "The blurb about how much safety buffer you have had spurious extra spaces around the goal units"
}, { // ------------------------------------------------------------------------
3 PRs with safesum: (not all merged)
fixing an extra space in safesum if gunits is blank [deployed]
fixing an extra space in safesum before the time-due [monday]
https://github.com/beeminder/beeminder/issues/1382 -- extra space when gunits is blank
https://github.com/beeminder/beeminder/pull/1383 -- extra space
https://github.com/beeminder/beeminder/pull/1439 -- other extra space
https://github.com/beeminder/beeminder/issues/1408 -- sometimes extra space before the final time
https://github.com/beeminder/beeminder/commit/88d806d0cadefa546d45d4027cf06c62ab355352
https://forum.beeminder.com/t/a-touchy-subject/6818/8?u=dreev
"d": "2020-05-20",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
1. negative UVI? f4119b9b - temporarily remove twitter login
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: wrapping things in shn():
https://github.com/beeminder/beeminder/pull/950
dreev kinda wants to have a discussion about general principles for when to wrap things in shn(), when to conservaround, etc.
probably the answer is: wrap everything shown to the user in shn(); never conservaround datapoints, just dueby values.
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
fatcyclist mongoid pagination bug, waiting to tweet till bmndr.com/fatcyclist is non-hideous
https://github.com/beeminder/beeminder/pull/1196
https://github.com/beeminder/beeminder/issues/1188
https://github.com/beeminder/beeminder/commit/4e94d3a862039fb4f9d23e79ca4fd9a8628ce3e6
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
PR from andy: adds a private / undocumented api endpoint for alerting the app of the minimum ios version
https://github.com/beeminder/beeminder/pull/1214
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
actually killing panictime / sort threshold
https://github.com/beeminder/beeminder/pull/1197
}, { // ------------------------------------------------------------------------
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
8. Peasy API docs gissues: https://github.com/beeminder/beeminder/issues/963
9. Tiny copy change: https://github.com/beeminder/beeminder/issues/288
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

For posterity / in case we change our minds...
Nixed UVIs from Beedroid 3.0:
1. Made silent notification updates on recent Android versions actually silent. #bugfix
  Version 2.10.2. Not a net UVI.
2. Something something push notifications improved something something graphs that don't ever stop refreshing. #bugfix
  https://github.com/beeminder/beedroid/issues/36
  Not user-visible, we don't think.
3. Adjusted our Tasker integration
  Version 2.9.2. Not a net UVI.
4. Fixed a crash on Settings. #bugfix
  Version 2.9.1. Not a net UVI.
5. Adjusted spacing in Goal Detail View to add an extra row of data
  https://github.com/beeminder/beedroid-hist/pull/65"],
  Probably just avoiding a regression but we're not totally sure.
6. Made the Datapoint Edit View fit better
  Version 2.10.6. Probably any visual differences are covered by the catchall UVI about various minor visual differences.

*********************************************************************************************************************************************************************/

/* CHECKLIST FOR TWEETING UVIS
1. Compose the JSON at the bottom of pub/uvis2020.js
2. Copy to Twitter and tweet it as @beemuvi
3. Paste the URL of the tweet into the JSON
4. Update beeminder.com/meta/uvi
5. Double check that the total number of UVIs at beeminder.com/changelog matches the total in the stats tab at beeminder.com/meta/uvi
*/