var batch2019jan = [{
"x": "Better URL for <a href=\"http://beeminder.com/survivor\">survivor</a> (still redirects to the ugly one for now though) and fixed a broken image on the signup page (wasn't broken for long, but still). #mini",
"u": ["https://twitter.com/beemuvi/status/1080362247480733696",
      "https://github.com/beeminder/beeminder/commit/a09ccc95eb0eb24d084d9841be5bf6259abad9d0",
      "https://github.com/beeminder/beeminder/commit/86441a1ad7a07ccc35d88a3104a4e7903306992c"],
"d": "2018-12-27",
"t": "2019-01-01",
}, { // ------------------------------------------------------------------------
"x": "http://beeminder.com/survivor goals now sorted by last-entered datapoint (and briefly brought back the masked bee for private goals but then just disallowed them)",
"u": ["https://twitter.com/beemuvi/status/1080721333321756673",
      "https://github.com/beeminder/beeminder/commit/2a3e152ef4aa82d4fa4fd93793f856e697efc013"],
"d": "2018-12-30",
"t": "2019-01-02",
}, { // ------------------------------------------------------------------------
"x": "Added clarification to the yellow brick road captcha (cf UVI#2471) that it's a captcha because at least one new user tried to answer it aspirationally",
"u": ["https://twitter.com/beemuvi/status/1080725922683138049",
      "https://github.com/beeminder/beeminder/pull/430"],
"d": "2018-12-21",
"t": "2019-01-02",
"c": "This one is a stretch since we had it phrased much like that, changed it, and changed it back when we noticed the problem. But there was other rearranging and changing of the questions on on the signup page so one way or another we're not overcounting UVIs here!",
}, { // ------------------------------------------------------------------------
"x": "Clozemaster integration #bugfix for users with dots in their usernames which caused all manner of confusion when setting up goals. HT jay.dugger",
"u": ["https://twitter.com/beemuvi/status/1081076398729486337",
      "https://github.com/beeminder/beeminder/commit/e596bc128683eff9a9c1d7b2e78733884ba103ba"],
"d": "2018-12-28",
"t": "2019-01-03",
"c": "Andy fixed this in one place but it was broken in another place for creating goals, I think, and Bee fixed that",
}, { // ------------------------------------------------------------------------
"x": "Toggl integration #bugfix: if you had no projects in Toggl, goal setup would fail with a wrong error, \"no such Toggl user found\"",
"u": ["https://twitter.com/beemuvi/status/1081499154201829376",
      "https://github.com/beeminder/beeminder/commit/c43f786acec98f859683c4110a058115cec6cae2"],
"d": "2018-12-20",
"t": "2019-01-04",
}, { // ------------------------------------------------------------------------
"x": "On Toggl goal page if you had no projects in Toggl we'd give a 500 error. #bugfix (similar to previous but on goal settings page)",
"u": ["https://twitter.com/beemuvi/status/1081500015648882689",
      "https://github.com/beeminder/beeminder/commit/79246d553be7b474a04ba25daa965407f943fb1c"],
"d": "2019-01-01",
"t": "2019-01-04",
}, { // ------------------------------------------------------------------------
"x": "Exclamation explanation: the little \"!\" to the left of goals on the dashboard indicating scheduled archive now has a tooltip explaining what & when",
"u": ["https://twitter.com/beemuvi/status/1082543208280731650",
      "https://github.com/beeminder/beeminder/commit/464f3ce3adfad4d1a86c65d402fca5cd961ba55d"],
"t": "2019-01-07",
"c": "For greppability: tooltip = hovertext",
}, { // ------------------------------------------------------------------------
"x": "The road editor (and soon to be engine that generates all the graphs!) at http://road.beeminder.com is now noticeably faster",
"u": ["https://twitter.com/beemuvi/status/1082899298008719361",
      "https://github.com/beeminder/road/commit/e05329bc9783499cb475b7bf311471404c935858"],
"t": "2019-01-08",
"c": "There are a lot more UVIs we could milk from all the work Uluc has been doing on javascript Beebrain",
}, { // ------------------------------------------------------------------------
"x": "Trello integration was not respecting rate units setting, e.g. if you created a goal of 12 cards per year, it'd create a goal with 12 cards per week. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1082899776763420672",
      "https://github.com/beeminder/beeminder/commit/42246658a6f77e5fce292e41e3310030282b26f4",
      "https://github.com/beeminder/beeminder/issues/428",
      "https://forum.beeminder.com/t/bug-new-goal-10-cards-a-day-result-in-10-cards-a-week-goal-trello-integration/4648"],
"d": "2019-01-08",
"t": "2019-01-08",
}, { // ------------------------------------------------------------------------
"x": "The link in the warning about unsetting autoratchet aka max safety buffer before scheduling a break was broken (linked to the current page/tab). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1083272206967160832",
      "https://github.com/beeminder/beeminder/commit/f244ab48e729df487fd0d165890d971963b9a66f"],
"d": "2019-01-09",
"t": "2019-01-09",
"c": "git blame blames andy!",
}, { // ------------------------------------------------------------------------
"x": "Various improvements to the road.beeminder.com version of the graphs (axis on top, nicer tick marks)",
"u": ["https://twitter.com/beemuvi/status/1083624517946138625",
      "https://github.com/beeminder/road/commit/954413231acd4d6a6079e134d29a7cc89e092db9"],
"t": "2019-01-10",
}, { // ------------------------------------------------------------------------
"x": "Daily beemail subscribers now have a BETA checkbox in graph settings to opt in to the new version of the graphs",
"u": ["https://twitter.com/beemuvi/status/1083625333494968320",
      "https://github.com/beeminder/beeminder/commit/f4e96862151b86088a868f9da6b005bb827aacd8"],
"d": "2019-01-10",
"t": "2019-01-10",
}, { // ------------------------------------------------------------------------
"x": "Fixed weird error with IFTTT \"datapoint added\" trigger where if an admin edited your goal, the trigger would re-fire for all of the goal's datapoints. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1083991010948988933",
      "https://github.com/beeminder/beeminder/commit/f5fcdeb46e7a1b2d96f20df2e3197c95cc80ee83",
      "https://github.com/beeminder/beeminder/commit/a5c1ebcc69bc8df45401219128d3693d6f1da45e",
      "https://github.com/beeminder/beeminder/commit/cbfec5ae26759216e3e09cbcf6039ba3e3140a38",
      "https://github.com/beeminder/beeminder/commit/055be62e519c3cb5fa95b132e540198f09c2d4cc"],
"t": "2019-01-11",
"c": "The moral of this story is serialization and Types. We store the timestamp of the last check each time IFTTT checks the trigger, and then we send any datapoints that were added since IFTTT last checked. That time was getting stored in the goal's ii (integration info) field, and when an admin submits the admin form, that field was getting changed from a time into an iso8601 type string (because we cast to json for that data) so then it was getting re-serialized into the db as a string, and then next time IFTTT checks we're comparing a string and a time, and for whatever reason, Ruby's like \"Hey, this string. We'll happily cast that to a time that makes no sense\", and so then it looks like IFTTT hasn't checked since the 1970s and so we send all the data. What I probably should have done from the first was store the ID of the last seen datapoint and use that for the trigger, rather than the \"last checked\" timestamp.",
}, { // ------------------------------------------------------------------------
"x": "We now show the Toggl settings for all Toggl goals (we weren't showing them at all if you had no filters set). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1085071194372464641",
      "https://github.com/beeminder/beeminder/pull/447"],
"d": "2019-01-11",
"t": "2019-01-14",
}, { // ------------------------------------------------------------------------
"x": "If you changed your tags in Toggl settings we had a bug that made us no longer update your goal. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1085071288727531521",
      "https://github.com/beeminder/beeminder/pull/447"],
"d": "2019-01-11",
"t": "2019-01-14",
"c": "We were storing the ID when you saved from settings, but we in fact need the tag name for the integration. We corrected data for affected users and confirmed that it is now fetching data rightly for them once again.",
}, { // ------------------------------------------------------------------------
"x": "In Toggl settings, non-lowercase tags would never appear selected due to us buggily only storing the lowercase version of all tags. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1085074242696208384",
      "https://github.com/beeminder/beeminder/pull/447"],
"d": "2019-01-11",
"t": "2019-01-14",
"c": "Also manually corrected the handful of goals affected by this",
}, { // ------------------------------------------------------------------------
"x": "The survivor contest introduced a rare bug with legit check emails (a couple of them didn't go out) when adding Mary to the bcc. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1085818154708754434",
      "https://github.com/beeminder/beeminder/commit/a17aff3e6f4744aad4200f509af563c8cf5fe19f"],
"t": "2019-01-16",
"c": "Only happened when a survivor goal derailed that was not also bccing support; we fixed the two derailed ones and emailed the (one) user.",
}, { // ------------------------------------------------------------------------
"x": "Some fields on autodata integration goal creation were too narrow. Was especially buggy for Trello were you couldn't tell what one field was for. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1085819411741589504",
      "https://github.com/beeminder/beeminder/issues/449",
      "https://github.com/beeminder/beeminder/commit/3105dcccc08ce38a3304fdb4f174afe651ae1ea1"],
"c": "Fixed for Trello, Clozemaster, GmailZero, Habitica, Toggl",
}, { // ------------------------------------------------------------------------
"x": "Toggl treats ongoing timers as having a negative duration, weirdly. We'd sometimes count those as negative datapoints, which was buggy. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1086176704127676416",
      "https://github.com/beeminder/beeminder/commit/6e2ef4b201870875860da5b60534bb62447263a6",
      "https://github.com/beeminder/beeminder/issues/370"],
"d": "2019-01-16",
"t": "2019-01-17",
"c": "The rest of the story has to do with different Toggl clients not always setting the field for whether a timer is stopped. Now we just filter out negative durations as well as unstopped timers.",
}, { // ------------------------------------------------------------------------
"x": "We were embarrassingly negligent with a scheduled Withings API update, broke the integration, scrambled to fix it, and now we get to count it as a UVI! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1086526350502969345",
      "https://github.com/beeminder/beeminder/commit/2651a811bcabd09ffb5603e3bcac80585e7ed11f"],
"t": "2019-01-18",
}, { // ------------------------------------------------------------------------
"x": "We were missing some Todoist tasks if you marked them done right after creating a goal. Now we never miss any! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1086526709090766849",
      "https://github.com/beeminder/beeminder/issues/452"],
"t": "2019-01-18",
"c": "HT Beeminder user kirubel123. Solved this by doing a fetch on_create. Details: Todoist structures their API as a series of changes (like a transaction log; they call it a Sync API) so that we ask for any changes since [lastchecked], and so for the very first check, there's no changes, because there's nothing to compare against. So we weren't checking the data early enough.",
}, { // ------------------------------------------------------------------------
"x": "Javascript-generated graphs live for all daily+weekly beemail subscribers (still static images for now but visually slightly different & better in a few ways)",
"u": ["https://twitter.com/beemuvi/status/1087654366197145601"],
"t": "2019-01-21",
"c": "No deploy for this, just an update query in production",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "All graphs now generated by new Javascript engine! Some small improvements now (like hashtag comments not shifted right) and the way is paved for larger ones!",
"u": ["https://twitter.com/beemuvi/status/1087982401941372928"],
"d": "2019-01-22",
"t": "2019-01-22",
}, { // ------------------------------------------------------------------------
"x": "If you removed a beeminded language course from your profile on Clozemaster the goal would silently fail. Now we fail loudly, with a banner. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1087983310196928514",
      "https://github.com/beeminder/beeminder/commit/aa294a879707b9824291243831e1163b20c6df0d"],
"t": "2019-01-22",
"c": "Error handling FTW!"
}, { // ------------------------------------------------------------------------
"x": "If you tried to go to bmndr.com/user/goal.fiz (or were a bot trying bmndr.com/user/goal.xml) we'd barf all over the page. Now we give a normalish error. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1088297191490244608",
      "https://github.com/beeminder/beeminder/commit/ef9d27bd6a0d5ef623569bed8eecc53c11616438"],
"t": "2019-01-23",
"c": "The .fiz case would show a version of your gallery with crazy bad formatting and the .xml case would give a 500 error!",
}, { // ------------------------------------------------------------------------
"x": "Changed checkbox webcopy to be about opting back in to Python graphs, for daily beemail peeps. And changed placeholder text w/ \"bethaknee.com\" to \"mydomain.com\"",
"u": ["https://twitter.com/beemuvi/status/1088703040536731648",
      "https://github.com/beeminder/beeminder/commit/1ca6467fa49cb6473fc9a3dfad0c7d889d868f94",
      "https://github.com/beeminder/beeminder/commit/ec95eae7f055bbb932b2aeb3fd784a1e900d6825"],
}, { // ------------------------------------------------------------------------
"x": "For road errors about duplicate road rows, we now show the dates human-readably. #mini",
"u": ["https://twitter.com/beemuvi/status/1088705387434455040",
      "https://github.com/beeminder/road/commit/00073c2b3688149f7dc5d6e42e3518a19ee5535f"],
"t": "2019-01-24",
"c": "I think pybrain showed these like 20190124, jsbrain originally showed them as unixtime, now shows them like 2019.01.24",
}, { // ------------------------------------------------------------------------
"x": "The numbers on the y-axis now have commas, plus several bugfixes getting us to seemingly complete parity with the Python graphs",
"u": ["https://twitter.com/beemuvi/status/1089066053768863744",
      "https://github.com/beeminder/road/commit/74db91e73b08cda86cd4ef1e432f43cabbad0d0c",
      "https://github.com/beeminder/road/commit/1995ebdc61f89aa14771517306ef5c4db87c7424"],
"t": "2019-01-25",
"c": "From now on we can count each change or bugfix in jsbrain as a UVI!",
}, { // ------------------------------------------------------------------------
"x": "The purple steppy line is no longer ever missing its first vertical segment. #bugfix #beebrain (and the choice of x-axis tick marks are maybe a bit better!)",
"u": ["https://twitter.com/beemuvi/status/1090164577763880960",
      "https://github.com/beeminder/road/issues/38"],
"t": "2019-01-28",
}, { // ------------------------------------------------------------------------
"x": "Fitbit weight goal creation: alignment/margins/padding of input fields. Units dropdown next to weight field. Killed weird floating dropdown arrow. #bugfix #css",
"u": ["https://twitter.com/beemuvi/status/1090165950869979136",
      "https://github.com/beeminder/beeminder/issues/318"],
"d": "2019-01-28",
"t": "2019-01-28",
"c": "We fucked this all up when adding the maxflux stuff :(",
}, { // ------------------------------------------------------------------------
"x": "Also in Fitbit weight goal creation, we now include units after the \"how much does your weight fluctuate\" question, for helpfulness.",
"u": ["https://twitter.com/beemuvi/status/1090166074325196800",
      "https://github.com/beeminder/beeminder/issues/318"],
"d": "2019-01-28",
"t": "2019-01-28",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Commitwall! It's no longer possible to create a goal without giving Beeminder a payment method so Beeminder is always a credible threat",
"u": ["https://twitter.com/beemuvi/status/1090972261098504192",
      "https://github.com/beeminder/beeminder/commit/dd2cb2d4ced12860dbeea01589b9c2bce651eb10",
      "https://github.com/beeminder/beeminder/issues/464"],
"d": "2019-01-30",
"t": "2019-01-30",
}, { // ------------------------------------------------------------------------
"x": "Nicer \"Set up your pledge\" screen when creating goals -- better distinguishes starting pledge from max pledge",
"u": ["https://twitter.com/beemuvi/status/1090972412278013958",
      "https://github.com/beeminder/beeminder/issues/464"],
"d": "2019-01-30",
"t": "2019-01-30",
}, { // ------------------------------------------------------------------------
"x": "As part of Commitwall, we now always show the pledge setup screen instead of skipping it if you didn't have a credit card on file. #mini",
"u": ["https://twitter.com/beemuvi/status/1091220065872039936",
      "https://github.com/beeminder/beeminder/commit/dd2cb2d4ced12860dbeea01589b9c2bce651eb10",
      "https://github.com/beeminder/beeminder/issues/464"],
"d": "2019-01-30",
"t": "2019-01-31",
}, { // ------------------------------------------------------------------------
"x": "Along for the ride with Commitwall: there's now a screen to collect your credit card or PayPal right there in goal creation. Yay for less friction!",
"u": ["https://twitter.com/beemuvi/status/1091220204510560256",
      "https://github.com/beeminder/beeminder/commit/dd2cb2d4ced12860dbeea01589b9c2bce651eb10",
      "https://github.com/beeminder/beeminder/issues/464"],
"d": "2019-01-30",
"t": "2019-01-31",
}, { // ------------------------------------------------------------------------
"x": "To help you feel ok about Commitwall, there's a \"Why?\" link that pops up a nice modal with reassuring copy to reassure you",
"u": ["https://twitter.com/beemuvi/status/1091220305664651264",
      "https://github.com/beeminder/beeminder/commit/dd2cb2d4ced12860dbeea01589b9c2bce651eb10",
      "https://github.com/beeminder/beeminder/issues/464"],
"d": "2019-01-30",
"t": "2019-01-31",
}, { // ------------------------------------------------------------------------
"x": "Finally, you no longer ever see the old commitwall where you go to create a goal and we throw a big wall of text in your face begging you to add a credit card",
"u": ["https://twitter.com/beemuvi/status/1091220407451930624",
      "https://github.com/beeminder/beeminder/commit/dd2cb2d4ced12860dbeea01589b9c2bce651eb10",
      "https://github.com/beeminder/beeminder/issues/464"],
"d": "2019-01-30",
"t": "2019-01-31",
}, /* --------------------------------------------------------- end 2019jan */ ]

var batch2019feb = [{
"x": "Another improvement with the new graphs: the purple steppy line is drawn for all past datapoints, even ones before the start of the YBR. HT <a href=\"https://forum.beeminder.com/u/zedmango\">zedmango</a> #beebrain",
"u": ["https://twitter.com/beemuvi/status/1093021975709020160",
      "https://github.com/beeminder/road"],
"t": "2019-02-05", 
}, { // ------------------------------------------------------------------------
"x": "We now hide the OMG-please-give-us-your-credit-card banner on new goal pages since we're about to ask you for it anyhow. #commitwall",
"u": ["https://twitter.com/beemuvi/status/1093023702109700096",
      "https://github.com/beeminder/beeminder/commit/490ab96ab3af9e5b9a05b4d84bd7413b453dc028"],
"d": "2019-02-04",
"t": "2019-02-05",
}, { // ------------------------------------------------------------------------
"x": "Changed the webcopy on the \"why?\" popup modal (which is meant to reassure you about adding a credit card) to \"Why? Because credible threats! 💸\" #commitwall",
"u": ["https://twitter.com/beemuvi/status/1093023846423134208",
      "https://github.com/beeminder/beeminder/issues/480",
      "https://forum.beeminder.com/t/commitwall-is-live-credit-card-required-to-create-goals/4868?u=dreev"],
"d": "2019-02-04",
"t": "2019-02-05",
}, { // ------------------------------------------------------------------------
"x": "We updated our footer links to get rid of Google+ (RIP) and added LinkedIn and Instagram cuz that's the kind of hip company we are, fellow kids!",
"u": ["https://twitter.com/beemuvi/status/1093797359232811008",
      "https://github.com/beeminder/beeminder/issues/472",
      "https://github.com/beeminder/beeminder/commit/52e64582c66c2d6f71048a40009e755f372c9e7a"],
"d": "2019-02-04",
"t": "2019-02-07",
}, { // ------------------------------------------------------------------------
"x": "We cleaned up and clarified a couple things in our terms of service and even updated its changelog so you don't have to read the whole thing again",
"u": ["https://twitter.com/beemuvi/status/1093799544670703616",
      "https://github.com/beeminder/beeminder/commit/31c613967c12ce907554322cb284353c68248348",
      "https://github.com/beeminder/beeminder/commit/dde63fd89855b68619f1d59b7f04738bcc276a5d",
      "https://github.com/beeminder/beeminder/commit/125e4cbdd49c5f92a7b8a1eb2f90cd311c7490a7",
      "https://github.com/beeminder/beeminder/pull/481"],
"t": "2019-02-07",
}, { // ------------------------------------------------------------------------
"x": "Oops, changelog for the ToS changelog: accidentally said 2018 instead of 2019. Also ++'d the copyright date in the footer while we were at it. #mini",
"u": ["https://twitter.com/beemuvi/status/1094138646142214144",
      "https://github.com/beeminder/beeminder/pull/439",
      "https://github.com/beeminder/beeminder/commit/bdd58cc23168d7ca2456a91f604d55a509c5c3f9"],
"t": "2019-02-08",
"c": "Cheapo UVIs here but the previous one would've made plenty of sense to split into multiple ones! PS: Check out the html source of bmndr.com about the copyright date.",
}, { // ------------------------------------------------------------------------
"x": "Akrasia Horizon line was red, not blue, in the graph legend (because once upon a time, long long ago, in a kingdom far far away, it was red). HT @instigate_it ",
"u": ["https://twitter.com/beemuvi/status/1095228312333410304",
      "https://github.com/beeminder/beeminder/issues/471"],
"d": "2019-02-11",
"t": "2019-02-11",
}, { // ------------------------------------------------------------------------
"x": "Corrected a tiny falsehood in the API docs: create_all returns the last created Datapoint, not the whole list of created Datapoints. HT @dreev",
"u": ["https://twitter.com/beemuvi/status/1095228429610315776",
      "https://github.com/beeminder/apidocs/pull/7"],
"d": "2019-02-11",
"t": "2019-02-11",
}, { // ------------------------------------------------------------------------
"x": "Copyediting, added links, fixed spacing issues, and got rid of all instances of \"here\" as link anchor text in the http://help.beeminder.com Quick Start guides",
"u": ["https://twitter.com/beemuvi/status/1095621691382743041"],
"t": "2019-02-12",
}, { // ------------------------------------------------------------------------
"x": "Sometimes confirmation emails got stuck behind batches of graph refreshes; moved them to a higher priority queue, so hopefully no more delays!",
"u": ["https://twitter.com/beemuvi/status/1095927195313164290",
      "https://github.com/beeminder/beeminder/issues/494",
      "https://github.com/beeminder/beeminder/commit/cbdfc22461a7d9bf898318ada4940b1afa5dc710"],
"d": "2019-02-13",
"t": "2019-02-13",
"c": "Moved other user-account-related emails as well",
}, { // ------------------------------------------------------------------------
"x": "The styling (CSS) on the \"discount please\" button was broken (probably since the #redesign) and looked more like a link than a button. #bugfix #regression",
"u": ["https://twitter.com/beemuvi/status/1095927307921850368",
      "https://github.com/beeminder/beeminder/issues/272",
      "https://github.com/beeminder/beeminder/commit/f2f1196fcec23b5d5d07e65e3319baf6188c8b8d"],
"d": "2019-02-13",
"t": "2019-02-13",
"c": "This might make more sense as a normal inline link than a big ol' button but we do call it the \"discount please\" button",
}, { // ------------------------------------------------------------------------
"x": "When you are already premium, beeminder.com/premium now starts the discount slider at your current subscription frequency (had been always starting at monthly)",
"u": ["https://twitter.com/beemuvi/status/1096325847051493376",
      "https://github.com/beeminder/beeminder/commit/a860dc2ef74c7f87825208d8c2d7142a487da123"],
"d": "2019-02-13",
"t": "2019-02-14",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "UVI#439 stopped being true when we deployed UVI#1517 and we finally separated Google login from Gmail permissions again!",
"u": ["https://twitter.com/beemuvi/status/1098132186123796480",
      "https://github.com/beeminder/beeminder/issues/234"],
"d": "2019-02-15",
"t": "2019-02-19",
"c": "By Adam Wolf. UPDATE: We had the wrong tweet for UVI#439 at first and are now realizing we don't know what #439 was actually talking about.",
}, { // ------------------------------------------------------------------------
"x": "You now see both Google and Gmail as separate entries in http://beeminder.com/services",
"u": ["https://twitter.com/beemuvi/status/1098132727063207936",
      "https://github.com/beeminder/beeminder/issues/234"],
"d": "2019-02-15",
"t": "2019-02-19",
}, { // ------------------------------------------------------------------------
"x": "Fixed up the error banners to tell you to either re-add Gmail or re-add Google as needed (and updated all the existing goals accordingly)",
"u": ["https://twitter.com/beemuvi/status/1098132951643021313",
      "https://github.com/beeminder/beeminder/issues/234"],
"d": "2019-02-15",
"t": "2019-02-19",
}, { // ------------------------------------------------------------------------
"x": "That Gmail/Google auth split felt like more than 3 UVIs so we'll count this cheapo one: Additional clarification in <a href=\"https://www.beeminder.com/legalschmegal\">ToS</a> that we don't read or save your email",
"u": ["https://twitter.com/beemuvi/status/1098852993703632896",
      "https://github.com/beeminder/beeminder/pull/499"],
"d": "2019-02-14",
"t": "2019-02-21",
}, { // ------------------------------------------------------------------------
"x": "We accidentally broke our Strava integration for close to 12 hours! Deployed bad code, went to sleep, woke up to irate (not really) users! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1098853740033892353",
      "https://github.com/beeminder/beeminder/commit/1f3d198c3cf81218bf0cd187aa048ace8f96aec5",
      "https://github.com/beeminder/beeminder/commit/df28df8b999ba7ae1b012fe062ac7b499a91b738"],
"d": "2019-02-20",
"t": "2019-02-21",
}, { // ------------------------------------------------------------------------
"x": "The graph legend now shows you what it's not showing you, in a \"disabled graph features\" section. Just a small thorn in @dreev's side that made for an easy UVI!",
"u": ["https://twitter.com/beemuvi/status/1099213285683953664",
      "https://github.com/beeminder/beeminder/commit/2f052910da95fbaacf085fd319c7d2ba2f87f107"],
"d": "2019-02-22",
"t": "2019-02-22",
}, { // ------------------------------------------------------------------------
"x": "We were also misguidedly suppressing the yellow guiding lines in the legend in the first week. Now we're not.",
"u": ["https://twitter.com/beemuvi/status/1099218452718309378",
      "https://github.com/beeminder/beeminder/commit/2f052910da95fbaacf085fd319c7d2ba2f87f107"],
"d": "2019-02-22",
"t": "2019-02-22",
"c": "Pretty much a #bugfix even though we did it on purpose out of a misguided desire to not overwhelm newbees",
}, { // ------------------------------------------------------------------------
"x": "In http://beeminder.com/apps/new (registering a new Beeminder app) we had a broken link to the Autofetch Callback URL documentation. Now we don't!",
"u": ["https://twitter.com/beemuvi/status/1100305016550711297",
      "https://github.com/beeminder/beeminder/pull/529"],
"d": "2019-02-25",
"t": "2019-02-25",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "Fixed / cleaned up some other other internal links (aka anchor links) in the API docs while we were at it",
"u": ["https://twitter.com/beemuvi/status/1100305160264245248",
      "https://github.com/beeminder/apidocs/commit/e8a79a7478d6edc5224254ea9c64a312a0e277a7"],
"d": "2019-02-25",
"t": "2019-02-25",
"c": "Including fixing dreev's sticking in the markdown trick of {#foo} which doesn't actually work here and was just appearing as brokenness in one of the subheaders",
}, { // ------------------------------------------------------------------------
"x": "We updated http://beeminder.com/money to not say false things like \"it's free to create a goal -- no credit card required\". HT <a href=\"https://twitter.com/EricMueller\">@EricMueller</a> <a href=\"http://blog.beeminder.com/commitwall\">#commitwall</a>",
"u": ["https://twitter.com/beemuvi/status/1100842222516285440",
      "https://github.com/beeminder/beeminder/commit/ea0e3d263085b746b204bd5337b68571b9a10f41"],
"d": "2019-02-27",
"t": "2019-02-27",
}, { // ------------------------------------------------------------------------
"x": "Tagging (UVI#2080) had a critical bug: negating tags (#!tag) broke the javascript &amp; made it impossible to add datapoints on the dashboard! #bugfix HT @openmedi",
"u": ["https://twitter.com/beemuvi/status/1101027298361274368",
      "https://github.com/beeminder/beeminder/commit/78d4e34aa0ca0306fdb246c53f9f08d3e9585f72",
      "https://github.com/beeminder/beeminder/issues/448"],
"d": "2019-02-26",
"t": "2019-02-27",
}, { // ------------------------------------------------------------------------
"x": "New aggday method \"cap1\" (HT <a href=\"https://forum.beeminder.com/u/zedmango\">zedmango</a>) and brought the <a href=\"https://help.beeminder.com/article/97-custom-goals\">aggday documentation</a> up to date",
"u": ["https://twitter.com/beemuvi/status/1101388908414156801",
      "https://github.com/beeminder/road/issues/64",
      "https://forum.beeminder.com/t/request-cap1-aggday/4994?u=dreev"],
"d": "2019-02-28",
"t": "2019-02-28",
}, /* --------------------------------------------------------- end 2019feb */ ]

var batch2019mar = [{
"f": true,
"x": "We cranked up the image resolution on graphs to... literally infinity. That's right, next time your graph regenerates it will be an SVG image!",
"u": ["https://twitter.com/beemuvi/status/1101804577530175488",
      "https://github.com/beeminder/beeminder/pull/530"],
"d": "2019-03-01",
"t": "2019-03-01",
}, { // ------------------------------------------------------------------------
"x": "Revamped the \"<a href=\"https://help.beeminder.com/article/32-what-do-i-do-first\">What do I do first?</a>\" help page that we remembered we prominently link to on the page you land on after signing up",
"u": ["https://twitter.com/beemuvi/status/1101805645861289985"],
"d": "2019-03-01",
"t": "2019-03-01",
"c": "Mainly rearranged the list, lots of copyediting, cleanup, an update related to timezone setting, link to a blog post on burnout, etc",
}, { // ------------------------------------------------------------------------
"x": "The fancy new svg images weren't displaying the bull's eye, infinity symbol, jolly roger, etc. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1102849043779088384",
      "https://github.com/beeminder/beeminder/commit/4421e3e70015a65560f1a58dac64a5098ab6e4d8",
      "https://github.com/beeminder/beeminder/pull/535",
      "https://github.com/beeminder/beeminder/pull/536"],
"d": "2019-03-02",
"t": "2019-03-04",
"c": "Now using an object tag instead of an img tag. Lost title text / alt text on the graph and can't right click to select the image / copy paste / get source link.",
}, { // ------------------------------------------------------------------------
"x": "Leading zeros in the datapoint field no longer make the number be interpreted as (yes, this was true) base 8. Eg, \"011\" was parsed as 9. #bugfix Cf UVI#2441",
"u": ["https://twitter.com/beemuvi/status/1103235118724919296",
      "https://github.com/beeminder/beeminder/issues/450"],
"d": "2019-03-05",
"t": "2019-03-05",
"c": "This is a javascript eval thing (needed to support arithmetic in datapoints) and is in fact common in programming languages (it comes from C) to parse numbers with leading zeros as octal. Fix was to strip all leading zeros from numbers.",
}, { // ------------------------------------------------------------------------
"x": "Updated submit buttons in the tabs below your goal to have more specific labels (like \"update derail behavior\" instead of \"update goal\", etc etc)",
"u": ["https://twitter.com/beemuvi/status/1103235477837033472",
      "https://github.com/beeminder/beeminder/issues/515",
      "https://github.com/beeminder/beeminder/commit/02ae5d3f447e4c9c670641ee9294bb495f973131"],
"d": "2019-03-05",
"t": "2019-03-05",
"c": "Followed the convention that each submit button matches the section heading, and trello/todoist/toggl/runkeeper/urlminder/twitter/todoist all changed from \"update\" to \"update fill-in-the-blank\". Etc.",
}, { // ------------------------------------------------------------------------
"x": "Oops, the leading zeros #bugfix had a much worse bug and was stripping non-leading zeros! HT teoajantaival",
"u": ["https://twitter.com/beemuvi/status/1103405105544519680",
      "https://github.com/beeminder/beeminder/commit/54271a9cb8793d728c7ef99b0d69cae5db2069c1",
      "https://github.com/beeminder/beeminder/commit/030308b34effb3921becfe27ef71beda1b5f8991"],
"d": "2019-03-06",
"t": "2019-03-06",
}, { // ------------------------------------------------------------------------
"x": "And one more #bugfix to the bugfix with leading zeros: we now no longer strip the zero from, eg, \"1:02\" turning it into \"1:2\". HT @dehowell",
"u": ["https://twitter.com/beemuvi/status/1103971052902744064",
      "https://github.com/beeminder/beeminder/commit/60813c28188159a9f8ade0d209c5993128c8ebe4",
      "https://github.com/beeminder/beeminder/issues/541",
      "https://forum.beeminder.com/t/leading-zeros/5067"],
"d": "2019-03-06",
"t": "2019-03-07",
"c": "This was less severe since it didn't let you submit it at all instead of submitting an altered datapoint value!",
}, { // ------------------------------------------------------------------------
"x": "Deadlines for new Skritter goals now 4am again (cf UVI#1715), not the user's default. #bugfix #redesign #regression",
"u": ["https://twitter.com/beemuvi/status/1103971335724625920",
      "https://github.com/beeminder/beeminder/issues/511"],
"d": "2019-03-07",
"t": "2019-03-07",
"c": "Broken since elf, presumably",
}, { // ------------------------------------------------------------------------
"x": "Added error checking to the goalname change field so it won't let you submit invalid goalnames (before it would let you and then complain)",
"u": ["https://twitter.com/beemuvi/status/1104256659377930240",
      "https://github.com/beeminder/beeminder/issues/458"],
"d": "2019-03-07",
"t": "2019-03-08",
}, { // ------------------------------------------------------------------------
"x": "Made goals with the unfortunately named deadbeat flag not appear in http://bmndr.co/survivor & added a link to the derailing-is-not-failing blog post to http://bmndr.co/money",
"u": ["https://twitter.com/beemuvi/status/1105404154246135810",
      "https://github.com/beeminder/beeminder/issues/547",
      "https://github.com/beeminder/beeminder/issues/475"],
"t": "2019-03-11",
"c": "Also private goals but maybe they were already excluded? HT zedmango & drtall",
}, { // ------------------------------------------------------------------------
"x": "Removed the checkbox to opt in to the old graphs, and more importantly, stopped generating the old graphs for everyone in parallel which should speed them up!",
"u": ["https://twitter.com/beemuvi/status/1105404956167688192",
      "https://github.com/beeminder/beeminder/pull/548"],
"d": "2019-03-11",
"t": "2019-03-11",
"c": "Even more official death of pybrain!",
}, { // ------------------------------------------------------------------------
"x": "UVI#2577 subtly broke the todayta checkmarks so that you had to reload the dashboard to make them show up. #bugfix #regression",
"u": ["https://twitter.com/beemuvi/status/1105760784791957504",
      "https://github.com/beeminder/beeminder/pull/549"],
"d": "2019-03-12",
"t": "2019-03-12",
"c": "UVI#2577 messed up the javascript that handled this, by swapping the marks themselves from some old icon font thingie we were using to the replacement thingie (octicons from github) without updating the javascript that shows/hides the checkmark. Pretty embarrassing how that was broken for a year.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Folks were weaselproofing themselves thoughtlessly too often! Now have to prove you really mean it, typing \"I'm a weasel\" &amp; everything, not just check a box.",
"u": ["https://twitter.com/beemuvi/status/1105762303947890688",
      "https://github.com/beeminder/beeminder/issues/546"],
"c": "guys i swear this is an improvement for users and not just admins!"
}, { // ------------------------------------------------------------------------
"x": "Weaselproof-related copyediting (mainly that it's always \"weaselproof\" not \"weasel-proof\" or \"weasel proof\" now)",
"u": ["https://twitter.com/beemuvi/status/1106112403803009024",
      "https://github.com/beeminder/beeminder/commit/0623c498b8fa0f7c5233a921cbc7d2ea9123b352"],
"d": "2019-03-13",
"t": "2019-03-13",
}, { // ------------------------------------------------------------------------
"x": "Other changes to the weasel insurance webcopy, not to mention all the new webcopy @thatgirl added as part of deploying this, eg explaining how to unweaselproof",
"u": ["https://twitter.com/beemuvi/status/1106113854033936385",
      "https://github.com/beeminder/beeminder/commit/1a5c3dfde003da25e52dad7b3cd90e6ef8a0280d"],
"d": "2019-03-13",
"t": "2019-03-13",
}, { // ------------------------------------------------------------------------
"x": "The SVG graph image files are now much smaller, thanks to an insight from Philipp Dörfler (round the needlessly precise floats in the vector specifications)",
"u": ["https://twitter.com/beemuvi/status/1106438051444580352",
      "https://github.com/beeminder/road/issues/65",
      "https://forum.beeminder.com/t/svg-graphs/4995/11?u=dreev"],
"d": "2019-03-13",
"t": "2019-03-14",
"c": "By Uluc, HT phi",
}, { // ------------------------------------------------------------------------
"x": "Changed the section heading/label \"SAFETY BUFFER\" to \"REDUCE SAFETY BUFFER\" after learning that that was confusing lots of people",
"u": ["https://twitter.com/beemuvi/status/1106442204279521280",
      "https://github.com/beeminder/beeminder/commit/4d5b1e491e29dacdcfbd32801561dea3f8b953bf"],
"d": "2019-03-14",
"t": "2019-03-14",
}, { // ------------------------------------------------------------------------
"x": "We changed our name on Instagram from bmndr to beeminder and updated the link in the footer of the website accordingly. HT Philipp Dörfler",
"u": ["https://twitter.com/beemuvi/status/1106801264065560576",
      "https://github.com/beeminder/beeminder/commit/e9b22b7f87e31b43239ae8ac2b5dedc74c30729f",
      "https://forum.beeminder.com/t/insta-bmndr-beeminder-vs-website/5112"],
"d": "2019-03-15",
"t": "2019-03-15",
}, { // ------------------------------------------------------------------------
"x": "Had a nasty css bug that made the \"We'll adjust the road so you have ___ units\" form display as \"___ We'll adjust the road so you have units\" #bugfix",
"u": ["https://twitter.com/beemuvi/status/1106801409880551424",
      "https://github.com/beeminder/beeminder/issues/320"],
"d": "2019-03-14",
"t": "2019-03-15",
"c": "Same as UVI#2847, just in different locations. This one was for do-less safety buffer adjustments and all goal restarts. Probable #redesign #regression",
}, { // ------------------------------------------------------------------------
"x": "URLminder was erroneously shown in the list of services you can authorize Beeminder to access (and we gave a 500 error if you actually clicked it). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1107888686178328576",
      "https://github.com/beeminder/beeminder/commit/1c5e9a3b2fda4956ecbc4c96d0e568254a946cac",
      "https://github.com/beeminder/beeminder/issues/551"],
"d": "2019-03-18",
"t": "2019-03-18",
"c": "This is in http://beeminder.com/settings/account",
}, { // ------------------------------------------------------------------------
"x": "Made improvements to the font size in flash banners, like making it smarter about when to use a smaller font in order to fit the whole message",
"d": "2019-03-18",
"t": "2019-03-18",
"u": ["https://twitter.com/beemuvi/status/1107899896395264000",
      "https://github.com/beeminder/beeminder/issues/542"],
"c": "In particular, we strip out the html tags before deciding how long the string is",
}, { // ------------------------------------------------------------------------
"x": "Relatedly, we now use a smaller font size on smaller screens in the flash banners (and embiggened the reduced font for longer messages)",
"u": ["https://twitter.com/beemuvi/status/1107899979916468227",
      "https://github.com/beeminder/beeminder/issues/542"],
"d": "2019-03-18",
"t": "2019-03-18",
}, { // ------------------------------------------------------------------------
"x": "Added missing links on http://beeminder.com/clozemaster: to @clozemaster itself and to the blog posts, http://blog.beeminder.com/clozemaster & http://blog.clozemaster.com/beeminder",
"u": ["https://twitter.com/beemuvi/status/1108264657238654976",
      "https://github.com/beeminder/beeminder/issues/497",
      "https://github.com/beeminder/beeminder/commit/a64d9a712b6f85df8efaa9ea6b2ff1a4382928bd"],
"d": "2019-03-19",
"t": "2019-03-19",
}, { // ------------------------------------------------------------------------
"x": "Our <a href=\"https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work\">help page about auto-canceling</a> was wrong. Only adding data (not logging in or making changes to your goals) prevents premium subscriptions from pausing!",
"u": ["https://twitter.com/beemuvi/status/1108602549261590528",
      "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work"],
"d": "2019-03-20",
"t": "2019-03-20",
}, { // ------------------------------------------------------------------------
"x": "Updated all the help pages in the Payments category (copyediting, minor corrections, formatting, clarifications). https://help.beeminder.com/category/6-payments",
"u": ["https://twitter.com/beemuvi/status/1108603473019301888",
      "https://help.beeminder.com/category/6-payments"],
"d": "2019-03-20",
"t": "2019-03-20",
}, { // ------------------------------------------------------------------------
"x": "We were inconsistently punctuating headlines on integration landing pages. Now there are no periods, because headlines don't use periods. #mini",
"u": ["https://twitter.com/beemuvi/status/1108604478222041088",
      "https://github.com/beeminder/beeminder/issues/558",
      "https://github.com/beeminder/beeminder/pull/559"],
"d": "2019-03-20",
"t": "2019-03-20",
"c": "This also meant ditching David Yang's line about putting some bite in your GTD. It had a good 8-year run.",
}, { // ------------------------------------------------------------------------
"x": "On some autodata goal creation pages (Strava, Trello, Clozemaster, GitHub) we fixed a CSS problem that made the initial safety buffer field way too wide",
"u": ["https://twitter.com/beemuvi/status/1108977646325493763",
      "https://github.com/beeminder/beeminder/issues/560"],
"d": "2019-03-21",
"t": "2019-03-21",
}, { // ------------------------------------------------------------------------
"x": "Did a full justify on the front page summary text. Looks way nicer than the centered version. HT @LawrenceEvalyn",
"u": ["https://twitter.com/beemuvi/status/1109352871609286656",
      "https://github.com/beeminder/beeminder/issues/561"],
"d": "2019-03-22",
"t": "2019-03-22",
"c": "Keyword: margins",
}, { // ------------------------------------------------------------------------
"x": "Updated all the help pages in the Goals category (copyediting, corrections, formatting, links, clarifications, updates). http://help.beeminder.com/category/50-goals",
"u": ["https://twitter.com/beemuvi/status/1109353298446831616",
      "http://help.beeminder.com/category/50-goals"],
"d": "2019-03-22",
"t": "2019-03-22",
}, { // ------------------------------------------------------------------------
"x": "Updated all the help pages in the Data category (copyediting, corrections, formatting, links, clarifications, updates). https://help.beeminder.com/category/35-data",
"u": ["https://twitter.com/beemuvi/status/1110447161739624448",
      "http://help.beeminder.com/category/50-goals"],
"d": "2019-03-25",
"t": "2019-03-25",
"c": "This is super time-consuming and Chelsea is amazing for writing all of this in the first place",
}, { // ------------------------------------------------------------------------
"x": "Updated all the help pages in the Derailing category (copyediting, links, clarifications). https://help.beeminder.com/category/8-derailing",
"u": ["https://twitter.com/beemuvi/status/1110753935109681152",
      "https://help.beeminder.com/category/8-derailing"],
"d": "2019-03-26",
"t": "2019-03-26",
}, { // ------------------------------------------------------------------------
"x": "Updated all the help pages in the Quitting category (copyediting, links, corrections). https://help.beeminder.com/category/43-quitting",
"u": ["https://twitter.com/beemuvi/status/1110772216885448704",
      "https://help.beeminder.com/category/43-quitting"],
"d": "2019-03-26",
"t": "2019-03-26",
}, { // ------------------------------------------------------------------------
"x": "The CSS (styling) of the modal (popup) when you click \"discount please!\" was embarrassingly broken/misaligned. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1111176724660666368",
      "https://github.com/beeminder/beeminder/issues/496"],
"d": "2019-03-27",
"t": "2019-03-27",
"c": "Also the \"moar free goals please\" button. Partially #redesign #regression",
}, { // ------------------------------------------------------------------------
"x": "Updated popup copy and hovertext for the \"discount please\" button to clarify that clicking the button immediately emails us",
"u": ["https://twitter.com/beemuvi/status/1111497812070416385",
      "https://github.com/beeminder/beeminder/commit/571d062bda21d93a0450b9019ef5c47b3d9ecaf0",
      "https://github.com/beeminder/beeminder/issues/569"],
"d": "2019-03-28",
"t": "2019-03-28",
}, { // ------------------------------------------------------------------------
"x": "Made the \"more free goals please\" button do that too (but the first time it just magically grants the free goal, and now says as much in the hovertext)",
"u": ["https://twitter.com/beemuvi/status/1111497838758789120",
      "https://github.com/beeminder/beeminder/commit/172afe73419385945e16cb769c02c87768e268b6"],
"d": "2019-03-28",
"t": "2019-03-28",
}, { // ------------------------------------------------------------------------
"x": "In the Clozemaster integration we'd fail to fetch your points if there was trailing whitespace in what you gave us as your Clozemaster username! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1111799812679073794",
      "https://github.com/beeminder/beeminder/commit/1ba88aca94c656f362012ace023cfa7e2f84dc66"],
"d": "2019-03-28",
"t": "2019-03-28",
"c": "E.g. maybe you pressed enter after typing your username, then realized that you needed to actually click the button or use a tab+enter or whatever. It was kind of insidious because the initial fetch was fine.",
}, /* --------------------------------------------------------- end 2019mar */ ]

var batch2019apr = [{
"x": "New copy, links to things (like this changelog!) on our /beebacksoon.html \"bee back in a bit\" page shown during downtime, sadly user-visible for ~3 hours today. #poppies",
"u": ["https://twitter.com/beemuvi/status/1112929257213157376",
      "https://github.com/beeminder/beeminder/commit/c19835f915cd554d76e2266b35f74ee458af01b0",
      "https://github.com/beeminder/beeminder/commit/2d49058a3f0b3bb621c0bec49ad97b6acc558587"],
"d": "2019-03-31",
"t": "2019-04-01",
"c": "Funny timing, deploying that the night before a bunch of downtime. Also we decided to not actually link to the poppy page, as we call it, since that could be confusing to ever accidentally land there."
}, { // ------------------------------------------------------------------------
"x": "Updated all the help pages in the Apps category (copyediting, corrections, clarifications, links). https://help.beeminder.com/category/59-apps",
"u": ["https://twitter.com/beemuvi/status/1113318961448251392",
      "https://help.beeminder.com/category/59-apps"],
"d": "2019-04-02",
"t": "2019-04-02",
}, { // ------------------------------------------------------------------------
"x": "Now we warn that changing autodata settings can derail you, for all autodata settings that you can change. And made it more noticeable.",
"u": ["https://twitter.com/beemuvi/status/1113319110245462016",
      "https://github.com/beeminder/beeminder/issues/486"],
"d": "2019-04-02",
"t": "2019-04-02",
"c": "We were giving warning for a few of them, but it was just bold text and didn't stand out. Now they all have a standard flag up top of the [autod] settings section that's yellowed to stand out.",
}, { // ------------------------------------------------------------------------
"x": "Include in goal settings what the goal is tracking for RescueTime goals, for the forgetful, etc, among us to know what exactly is being tracked",
"u": ["https://twitter.com/beemuvi/status/1113319248338620416",
      "https://github.com/beeminder/beeminder/pull/572"],
"d": "2019-04-02",
"t": "2019-04-02",
"c": "Maybe in the future allow changing this, since we do for many other autodata goals now",
}, { // ------------------------------------------------------------------------
"x": "Fixed a broken link to http://mind.tagti.me in the <a href=\"http://beeminder.com/faq\">FAQ</a> and updated the copy there about TagTime. HT @shanaqui",
"u": ["https://twitter.com/beemuvi/status/1114055016837345281",
      "https://github.com/beeminder/beeminder/pull/575",
      "https://github.com/beeminder/beeminder/commit/040be24f38c0ea25a6e1e1adbbc03912b7d19ff1",
      "https://github.com/beeminder/beeminder/commit/a5f609fe9bfd7cc78ba92859b8d8ce2a5009fe85"],
"t": "2019-04-04",
"c": "Also added a redirect for the broken link, minder.tagti.me",
}, { // ------------------------------------------------------------------------
"x": "In Toggl, Strava, Fitbit, et al, we were letting you type new units on goal creation, which we then ignored. Now we don't let you edit that field! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1114057404411285504",
      "https://github.com/beeminder/beeminder/pull/577"],
"d": "2019-04-04",
"t": "2019-04-04",
"c": "E.g., with Toggl a user tried writing in \"minutes\" where the stepper says \"hours\" and wound up with a goal for 5 hours per day rather than the 5 minutes they were expecting. Most autodata goals are opinionated about the units they track in!",
}, { // ------------------------------------------------------------------------
"x": "Updated old links from settings/payment to use the new URL: /payment (previously we were redirecting those links)",
"u": ["https://twitter.com/beemuvi/status/1114416546917433345",
      "https://github.com/beeminder/beeminder/pull/138",
      "https://github.com/beeminder/beeminder/commit/87d8e61f236eff903c1fc766d14b9cd6ea067fe6"],
"d": "2019-04-05",
"t": "2019-04-05",
"c": "Also now using the Rails routing helpers so that if we change the URL again the links will all point to whatever the new version is",
}, { // ------------------------------------------------------------------------
"x": "Sometimes Fitbit would send updates to 2 datapoints at once and, you guessed it, we had a race condition. Edge-skaters could get false derails! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1115506389219020800",
      "https://github.com/beeminder/beeminder/issues/508"],
"d": "2019-04-08",
"t": "2019-04-08",
"c": "Lots of details in the gissue. Fixed by updating instead of deleting datapoints. Forehead-slap.",
}, { // ------------------------------------------------------------------------
"x": "We no longer delete \"RECOMMITTED\" datapoints from Fitbit goals when adding autodata (which also means the triangles marking derailments stay put). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1115508099828178944",
      "https://github.com/beeminder/beeminder/pull/583/commits/ab840e5758d51eb168c793da327892be01e69581"],
"d": "2019-04-08",
"t": "2019-04-08",
"c": "Done as part of the previous bugfix. See UVI#2760 &amp; UVI#2768.",
}, { // ------------------------------------------------------------------------
"x": "Oops, yesterday's Fitbit UVI introduced a new bug: we weren't adding the real/new datapoint on RECOMMITTED days! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1115865217798479874",
      "https://github.com/beeminder/beeminder/commit/ad15570192c6b66b2f82788f9a4b31780a8b110e"],
"d": "2019-04-09",
"t": "2019-04-09",
}, { // ------------------------------------------------------------------------
"x": "Shortened the trip to our overview page: were using an old URL (/about) and redirecting. Now we just use the canonical URL (/overview). #mini",
"u": ["https://twitter.com/beemuvi/status/1115870746700546050",
      "https://github.com/beeminder/beeminder/commit/90166b2a262b549ec8627ac2e9f85c1cef5ed9cd"],
"d": "2019-04-09",
"t": "2019-04-09",
}, { // ------------------------------------------------------------------------
"x": "When setting a break, we'd let you set the end of the break beyond the end date of the goal, which caused graph errors. #bugfix HT @SayHiNeil",
"u": ["https://twitter.com/beemuvi/status/1116254102697078784",
      "https://github.com/beeminder/beeminder/issues/563",
      "https://github.com/beeminder/beeminder/pull/585"],
"d": "2019-04-10",
"t": "2019-04-10",
}, { // ------------------------------------------------------------------------
"x": "Yesterday's take-a-break bugfix included a brand new bug of its own: it wasn't submitting the break at all! [🐑ish] Break scheduling broken for ~24hrs. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1116587535583465473",
      "https://github.com/beeminder/beeminder/commit/1dc152c41cb1d2021db3a79d3a0db09aaad2d111",
      "https://github.com/beeminder/beeminder/commit/7931096ba0d106299fafb2e65b4ba3352b2db182"],
"d": "2019-04-11",
"t": "2019-04-11",
"c": "Oy, and then still broken for another hour or so -- needed a meta-meta-bugfix! Manually fixed up everyone affected during that window.",
}, { // ------------------------------------------------------------------------
"n": 2983,
"f": true,
"x": "(+) Beeminder iOS app version 5.4!",
"u": ["https://twitter.com/beemuvi/status/1118751296838750213"],
"d": "2019-04-12",
"t": "2019-04-17",
"c": "By Andy and Mary",
}, { // ------------------------------------------------------------------------
"n": 2983,
"s": true,
"x": "No more hanging spinner of doom! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1118751296838750213"],
"d": "2019-04-12",
"t": "2019-04-17",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Apple Health now consolidates data from multiple sources (watch, phone, different apps) rather than blindly adding it all together",
"u": ["https://twitter.com/beemuvi/status/1118751512723742722"],
"d": "2019-04-12",
"t": "2019-04-17",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The app now allows background updating so should be more likely to be up to date and in sync with Beeminder's servers as soon as you switch back to it",
"u": ["https://twitter.com/beemuvi/status/1119095470477852675"],
"d": "2019-04-12",
"t": "2019-04-18",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Apple Health data now syncs automatically, periodically, when your phone is unlocked, without having to open the Beeminder app to get it to fetch Health data!",
"u": ["https://twitter.com/beemuvi/status/1119095554854621184"],
"d": "2019-04-12",
"t": "2019-04-18",
}, { // ------------------------------------------------------------------------
"x": "UVI#2934 broke UVI#2762. This turned out to be very hard to fix but our SVG images now also magically refresh themselves! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1120565063985827841",
      "https://github.com/beeminder/beeminder/pull/588",
      "https://forum.beeminder.com/t/updating-source-of-the-object-tag/5109"],
"d": "2019-04-16",
"t": "2019-04-22",
}, { // ------------------------------------------------------------------------
"x": "Robusted that up further by showing a message when the image failed to reload properly, with the buzzing infinibee overlaid until it does",
"u": ["https://twitter.com/beemuvi/status/1120565252503035904",
      "https://github.com/beeminder/beeminder/pull/588",
      "https://forum.beeminder.com/t/updating-source-of-the-object-tag/5109"],
"d": "2019-04-16",
"t": "2019-04-22",
"c": "We actually detect that the SVG didn't load properly by testing whether that fallback is showing or not. That's to work around Chrome not firing an onError event for the failed load.",
}, { // ------------------------------------------------------------------------
"x": "Also turned off the infinibee-buzzing for other people's goals. A key #bugfix because if you loaded someone's goal page when it was buzzing it'd never stop.",
"u": ["https://twitter.com/beemuvi/status/1120565384199852032",
      "https://github.com/beeminder/beeminder/pull/588",
      "https://forum.beeminder.com/t/updating-source-of-the-object-tag/5109"],
"d": "2019-04-16",
"t": "2019-04-22",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Embarrassingly overdue but we got Nikki and Holly and Mary on the http://beeminder.com/aboutus page!",
"u": ["https://twitter.com/beemuvi/status/1121295811722145792",
      "https://github.com/beeminder/beeminder/commit/b6c03c9f98e2a5db87806a46ed350acf456e5a8e",
      "https://github.com/beeminder/beeminder/commit/3d610b730a576b2da45ee6419a10cf4bc0ef8d50",
      "https://github.com/beeminder/beeminder/commit/4a2b969422515961e7ff0c9af1078b8dc83371e5"],
"d": "2019-04-17",
"t": "2019-04-24",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "And added Austin too! http://beeminder.com/aboutus",
"u": ["https://twitter.com/beemuvi/status/1121640699147898880",
      "https://github.com/beeminder/beeminder/commit/0401dee1a54e17921e928761c92a63a6664ae64e"],
"d": "2019-04-25",
"t": "2019-04-25",
}, { // ------------------------------------------------------------------------
"x": "We now have http://help.beeminder.com doing double duty as our help-wanted page(s); see http://beeminder.com/jobs",
"u": ["https://twitter.com/beemuvi/status/1121998758076510208",
      "https://github.com/beeminder/beeminder/commit/93883f74a4c9fdc92dd0e65ad897802b4637bb05"],
"d": "2019-04-17",
"t": "2019-04-26",
}, { // ------------------------------------------------------------------------
"x": "Corrected lies in http://api.beeminder.com about the 'datasource' field for goals. To set it back to the default (manual), pass the empty string. Docs #bugfix",
"u": ["https://twitter.com/beemuvi/status/1122001729518571520",
      "https://github.com/beeminder/apidocs/commit/3c306aae267de90b334ec0dd0ef959f27ee83ed1"],
"d": "2019-04-21",
"t": "2019-04-26",
}, { // ------------------------------------------------------------------------
"x": "Zero-value datapoints were not always updating the graph! Buggiest case was when a 0-datapoint (for a cumulative goal) replaced a PPR. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1123513910605205505",
      "https://github.com/beeminder/beeminder/issues/296"],
"d": "2019-04-24",
"t": "2019-04-30",
"c": "Originally tweeted 2019-04-29 confusingly and slightly wrongly: \"Happened when there was no data for today, or when a 0-datapoint replaced a PPR\"",
}, { // ------------------------------------------------------------------------
"x": "Zero-value kyoom datapoints also failed to update the graph if they were the 1st datapoint of the day (they should turn the little triangle into a dot). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1123514039169048576",
      "https://github.com/beeminder/beeminder/issues/296"],
"d": "2019-04-24",
"t": "2019-04-30",
}, { // ------------------------------------------------------------------------
"x": "Couple #mini's: Fixed a typo (double period in a warning message) and fixed the margin in fine print settings. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1123514629886373888",
      "https://github.com/beeminder/beeminder/commit/6e50370f117799279c82abe153ef028a48bdff72",
      "https://github.com/beeminder/beeminder/commit/1c0a588b65c118737d2cd0acb1ea6ec81d1209f7"],
"t": "2019-04-30",
}, /* --------------------------------------------------------- end 2019apr */ ]

var batch2019may = [{
"x": "The so-called todayta checkmark was weirdly over-specific, only showing up if you'd entered data today AND that datapoint was the most recent datapoint. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1123809766059466753",
      "https://github.com/beeminder/beeminder/pull/601"],
"d": "2019-05-01",
"t": "2019-05-01",      
}, { // ------------------------------------------------------------------------
"x": "Dates of premium charges advanced by a day each time we charged you; a whole free day each period! Also bad for those trying to budget their monies. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1124203710970621953",
      "https://github.com/beeminder/beeminder/pull/564"],
"d": "2019-05-02",
"t": "2019-05-02",
}, { // ------------------------------------------------------------------------
"x": "There was no indicator that the date in the data entry form on the goal page was a dropdown menu. Added a little triangle guy to indicate its selectiness!",
"u": ["https://twitter.com/beemuvi/status/1124206434831355904",
      "https://github.com/beeminder/beeminder/issues/599"],
"d": "2019-05-02",
"t": "2019-05-02",
}, { // ------------------------------------------------------------------------
"x": "Tweaked the copy for our live chat to clarify it isn't always real-time; you may have to leave a message. And made the forum display pretty math via MathJax!",
"u": ["https://twitter.com/beemuvi/status/1124554268344586241"],
"t": "2019-05-03",
}, { // ------------------------------------------------------------------------
"x": "Updated the help pages in the Philosophy category (updates, prose tweaks, typography, link fixes). https://help.beeminder.com/category/33-philosophy",
"u": ["https://twitter.com/beemuvi/status/1125649376456536064",
      "https://help.beeminder.com/category/33-philosophy"],
"d": "2019-05-06",
"t": "2019-05-06",
}, { // ------------------------------------------------------------------------
"x": "Added more instructions & warnings about importing data via the bot for autodata goals (at the bottom of the Data tab)",
"u": ["https://twitter.com/beemuvi/status/1125670060037533696",
      "https://github.com/beeminder/beeminder/issues/598"],
"d": "2019-05-06",
"t": "2019-05-06",
"c": "The warning is usually you can't import data to an autodata goal without importing to the autodata source itself, cuz that's the master copy of the data",
}, { // ------------------------------------------------------------------------
"x": "UVI#2998 caused a bigger bug (in users' favor), adding extra months of free premium when upgrading. Oops. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1125955874797654016",
      "https://github.com/beeminder/beeminder/pull/604"],
"d": "2019-05-07",
"t": "2019-05-07",
}, { // ------------------------------------------------------------------------
"x": "Also made frequency upgrades/downgrades make more sense: if you upgrade, eg, from monthly to yearly, you pay for the rest of the year upfront",
"u": ["https://twitter.com/beemuvi/status/1125956016896528384",
      "https://github.com/beeminder/beeminder/pull/604"],
"d": "2019-05-07",
"t": "2019-05-07",
"c": "Similarly, a frequency downgrade (eg, yearly to monthly) just waits for your current period to run out then starts charging you at the new frequency",
}, { // ------------------------------------------------------------------------
"x": "And various webcopy updates and fixes to go along with that, not saying \"you are upgrading from Infinibee to Infinibee\" or \"per every\" and whatnot",
"u": ["https://twitter.com/beemuvi/status/1125956137189142528",
      "https://github.com/beeminder/beeminder/pull/604"],
"d": "2019-05-07",
"t": "2019-05-07",
}, { // ------------------------------------------------------------------------
"x": "Our Duolingo integration was briefly broken today, unable to pull in your totals, due to a change in their (formerly fully publicly accessible) API. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1126730623396093952",
      "https://github.com/beeminder/beeminder/pull/609",
      "https://github.com/beeminder/beeminder/issues/608"],
"d": "2019-05-09",
"t": "2019-05-09",
"c": "We made a Beeminder user on Duolingo and use its cookies to fetch users' data",
}, { // ------------------------------------------------------------------------
"x": "Our Toggl integration now works as advertised, tracking the union of all selected projects / tags / clients (had been the intersection of unions). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1126731570331578368",
      "https://github.com/beeminder/beeminder/pull/610"],
"d": "2019-05-09",
"t": "2019-05-09",
"c": "It was the union (OR) within each of {tags, projects, clients} but the intersection (AND) of those three categories. Eg, \"(tag1 OR tag2) AND (project1 OR project2) AND (client1 OR client2)\".",
}, { // ------------------------------------------------------------------------
"x": "Rearranged the instructions slightly on the Toggl setup page (put the \"tags OR projects OR clients\" up top)",
"u": ["https://twitter.com/beemuvi/status/1127083086909337600",
      "https://github.com/beeminder/beeminder/issues/438",
      "https://github.com/beeminder/beeminder/commit/e53e8102fa1d2a26ec41f4c23b46d1c9d422fb5d"],
"d": "2019-05-09",
"t": "2019-05-10",
}, { // ------------------------------------------------------------------------
"x": "UVI#3006 fixed Duolingo goal data fetching, but forgot goal creation, which also relies on checking your points totals on Duolingo! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1128171613764050945",
      "https://github.com/beeminder/beeminder/pull/614"],
"d": "2019-05-13",
"t": "2019-05-13",
}, { // ------------------------------------------------------------------------
"x": "Doh, UVI#2221 (review pending charges, cancel any you deem not legit when updating failed payment info) didn't apply to PayPal this whole time! Now it does.",
"u": ["https://twitter.com/beemuvi/status/1128171754365472768",
      "https://github.com/beeminder/beeminder/issues/384",
      "https://github.com/beeminder/beeminder/pull/615"],
"d": "2019-05-13",
"t": "2019-05-13",
}, { // ------------------------------------------------------------------------
"x": "UVI#3007 introduced a new bug: If you edited your Toggl settings to remove all filters, we would filter *everything* out. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1128527677650980864",
      "https://github.com/beeminder/beeminder/commit/de240b11c07da5366c543e822ebd52f1c3b59074?w=1"],
"d": "2019-05-11",
"t": "2019-05-14",
"c": "Lasted 2 days, only affected one user. There's a discrepancy in how we store filter data between initial goal setup vs if you edit Toggl settings from your goal page after the goal is set up. So we made the filterfix robust to both versions of filter data.",
}, { // ------------------------------------------------------------------------
"x": "Critical Gitminder #bugfix: if you closed an old enough gissue (ie, more than 30 gissues created and closed after it) we would miss it and not give you credit!",
"u": ["https://twitter.com/beemuvi/status/1128942178590314497",
      "https://github.com/beeminder/beeminder/pull/618"],
"d": "2019-05-15",
"t": "2019-05-15",
"c": "The GitHub endpoint is paginated at 30 gissues, and default sort order was by creation date, so that old gissue could get buried in the results by more recently-created-and-closed gissues. Now we specify a sort order based on the timestamp that the gissue was last updated, so we won't miss a closed gissue just because it was created a long time ago! PS: Original tweet mistakenly said 'could' instead of 'would'.",
}, { // ------------------------------------------------------------------------
"x": "New names for the http://beeminder.com/survivor categories: Ultimate Survivors, Penultimate Survivors, Casualties",
"u": ["https://twitter.com/beemuvi/status/1128943195612622848",
      "https://github.com/beeminder/beeminder/commit/4be44c3446d6739ab242fc7ee12d11b6a6b212ba",
      "https://github.com/beeminder/beeminder/commit/a0ea25a7e0690eec7d151ce7f2443f5b9f08448d"],
"d": "2019-05-15",
"t": "2019-05-15",
}, { // ------------------------------------------------------------------------
"x": "Tiny one that's mostly to make our lives easier in support but we added usernames to subject lines of emails like \"Couldn't charge your credit card\"",
"u": ["https://twitter.com/beemuvi/status/1129261066989391872",
      "https://github.com/beeminder/beeminder/issues/619"],
"d": "2019-05-15",
"t": "2019-05-16",
"c": "HT Mary",
}, { // ------------------------------------------------------------------------
"x": "The email list signup on the front page had a bug: If you later signed up as a real user it would sometimes give you a preassigned hideous username. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1129647105281183745",
      "https://github.com/beeminder/beeminder/issues/462"],
"d": "2019-05-17",
"t": "2019-05-17",
"c": "We weren't converting correctly to a 'real' user. Now we sidestep it altogether by creating a new thing called a wuser instead of dummy user."
}, { // ------------------------------------------------------------------------
"x": "Addendum to UVI#2934: You too can use SVG graph images, because we return the svg_url in the API output. Now documented at http://beeminder.com/api as well.",
"u": ["https://twitter.com/beemuvi/status/1129647314707070976",
      "https://github.com/beeminder/apidocs/commit/9f4a69041f60d4ec43b8214904499adb0b6b1b23"],
"d": "2019-05-17",
"t": "2019-05-17",
}, { // ------------------------------------------------------------------------
"x": "Oy, a truncated error message! Shortened it to: \"Oy! You're in a RECOMMITLOOP! Help debug it by sending hints to support@beeminder.com (pretty please?)\"",
"u": ["https://twitter.com/beemuvi/status/1130728094145232897",
      "https://forum.beeminder.com/t/not-all-of-the-recommit-bug-notification-is-visible/5357",
      "https://github.com/beeminder/beeminder/commit/0e6f6a73de577b844d7a8fd8c09fd8664200452c"],
"d": "2019-05-20",
"t": "2019-05-20",
"c": "HT Holly Williams",
}, { // ------------------------------------------------------------------------
"x": "Rare bug in graph generation that could try to create a wildly bounds-overflowing aura yielding an unrenderable (on some browsers) SVG file. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1131071962237636610",
      "https://github.com/beeminder/road/issues/74",
      "https://forum.beeminder.com/t/memory-hog/5231/10"],
"d": "2019-05-21",
"t": "2019-05-21",
}, { // ------------------------------------------------------------------------
"x": "The road matrix table at http://road.beeminder.com was not letting you move the start date of the yellow brick road more than a few months back. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1131074958174576640",
      "https://github.com/beeminder/road/issues/66"],
"d": "2019-05-21",
"t": "2019-05-21",
}, { // ------------------------------------------------------------------------
"x": "We no longer let you (try to) ratchet to 0 safety buffer on day 1 of a new goal (it would insta-derail on non-kyoom goals). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1131468115198398465",
      "https://github.com/beeminder/beeminder/issues/238",
      "https://github.com/beeminder/beeminder/pull/625"],
"d": "2019-05-22",
"t": "2019-05-22",
}, { // ------------------------------------------------------------------------
"x": "And to make sure that's Pareto-dominant, we tweaked it to only prevent day-0 beemergency ratcheting for non-kyoom (non-auto-summing) goals!",
"u": ["https://twitter.com/beemuvi/status/1131813919893229568",
      "https://github.com/beeminder/beeminder/pull/627"],
"d": "2019-05-23",
"t": "2019-05-23",
}, { // ------------------------------------------------------------------------
"x": "Also for those errors we now use our nice flash banners instead of the boring browser-native alerts. #mini",
"u": ["https://twitter.com/beemuvi/status/1131814108624408576",
      "https://github.com/beeminder/beeminder/pull/625"],
"d": "2019-05-22",
"t": "2019-05-22",
}, { // ------------------------------------------------------------------------
"x": "We were getting rate-limited by Withings, which could cause a fetch to silently fail. Now we catch the error and retry in a couple minutes. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1132183107824521217",
      "https://github.com/beeminder/beeminder/pull/628"],
"d": "2019-05-24",
"t": "2019-05-24",
}, { // ------------------------------------------------------------------------
"n": 3024,
"f": true,
"x": "(+) Beeminder Android app version 3.0!",
"u": ["https://twitter.com/beemuvi/status/1134688740557766656",
      "https://github.com/beeminder/beedroid-hist",
      "https://github.com/beeminder/beedroid"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "AKA Beedroid. By Adam Wolf.",
}, { // ------------------------------------------------------------------------
"n": 3024,
"s": true,
"x": "The first most obvious change is the permanotification, which, frustratingly, Android now requires for guaranteeing reminders at exact times",
"u": ["https://twitter.com/beemuvi/status/1134688740557766656"],
"d": "2019-05-27",
"t": "2019-05-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We made the permanotification link to <a href=\"https://help.beeminder.com/article/125-android-notification\">a help page</a> explaining how to make it shut up",
"u": ["https://twitter.com/beemuvi/status/1134689011652472833"],
"d": "2019-05-27",
"t": "2019-05-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "All the types of notifications are listed in Android settings (Apps -> Beeminder -> Notifications) where you can customize (or suppress them)",
"u": ["https://twitter.com/beemuvi/status/1134689089066639360",
      "https://github.com/beeminder/beedroid/issues/54"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.9. They're called notification channels and the most specific UVI here is making the name match the text for the permanotification. AWW - Actually maybe the most specific one is creating them.  We didn't have them before.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed a bug that would sometimes cause incessant reminders, like one a minute, even when the deadline was like an hour away. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1134689174223589376",
      "https://github.com/beeminder/beedroid/issues/3",
      "https://github.com/beeminder/beedroid-hist/pull/54"],
"d": "2019-05-27",
"t": "2019-05-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Switched to Crashalytics for crash/error reporting",
"u": ["https://twitter.com/beemuvi/status/1134689225108967424",
      "https://github.com/beeminder/beedroid-hist/pull/46/commits/b50a374c29489287436db0c25b9fd46990aa29d6"],
"d": "2019-05-27",
"t": "2019-05-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Zeno notifications now happen immediately at launch",
"u": ["https://twitter.com/beemuvi/status/1134689297020284928",
      "https://github.com/beeminder/beedroid-hist/pull/50"],
"d": "2019-05-27",
"t": "2019-05-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed bug in fwomp page (reminder settings for all goals): the zeno checkboxes are now clickable instead of getting covered up by the scrollbar. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1134689376313593856",
      "https://github.com/beeminder/beedroid/issues/64"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.0",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Goals are now sorted alphabetically for the 1-up widget configurator (the screen for creating new homescreen widgets for single goals)",
"u": ["https://twitter.com/beemuvi/status/1134689476876222464",
      "https://github.com/beeminder/beedroid-hist/pull/49"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.9.3",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "In the manual data entry screen, added some space between the year, month, and day since it sometimes looked like, eg, \"531\" instead of \"5 31\"",
"u": ["https://twitter.com/beemuvi/status/1134689579842265088",
      "https://github.com/beeminder/beedroid-hist/pull/53",
      "https://github.com/beeminder/beedroid/issues/73"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.2",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "New lumpy swipey indicator that maybe will help more people notice that there are 3 different data entry screens, since few people have realized that so far",
"u": ["https://twitter.com/beemuvi/status/1134689668564283392",
      "https://github.com/beeminder/beedroid-hist/pull/55",
      "https://github.com/beeminder/beedroid-hist/pull/56"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.3",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fancy new Troubleshooting Notifications screen that tells you lots of useful things and lets you create test notifications (immediately and scheduled), etc",
"u": ["https://twitter.com/beemuvi/status/1134689734939144200",
      "https://github.com/beeminder/beedroid-hist/pull/57"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.3",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "And beyond just troubleshooting, the Troubleshoot Notifications screen lets you recreate all zeno reminders for all goals that should have them",
"u": ["https://twitter.com/beemuvi/status/1134689803054661632",
      "https://github.com/beeminder/beedroid-hist/pull/57"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.3",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Beedroid now starts automatically when the device boots up",
"u": ["https://twitter.com/beemuvi/status/1134689934852313088",
      "https://github.com/beeminder/beedroid-hist/pull/61"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.7",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Minor visual changes, mostly with the goal of matching the previous status quo but there are various user-visible differences in buttons and such",
"u": ["https://twitter.com/beemuvi/status/1134689993371209732",
      "https://github.com/beeminder/beedroid/issues/60"],
"d": "2019-05-27",
"t": "2019-05-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Improvements to timey-wimey parsing, like handling \"HH:MM:SS\", and a #bugfix where \"H:MM\" didn't work depending on locale",
"u": ["https://twitter.com/beemuvi/status/1134690085314498560",
      "https://github.com/beeminder/beedroid/issues/50",
      "https://github.com/beeminder/beedroid/issues/51",
      "https://github.com/beeminder/beedroid/issues/55",
      "https://github.com/beeminder/beedroid-hist/pull/63"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.8. Timey-wimey parsing now uses the standard monster regex from d.glitch.me.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The zeno reminders configuration page now tells you if and when the next zeno reminder for each goal will come",
"u": ["https://twitter.com/beemuvi/status/1134690152511549440",
      "https://github.com/beeminder/beedroid-hist/pull/60"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.7",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The goals in the Zeno Configuration screen are now sorted alphabetically",
"u": ["https://twitter.com/beemuvi/status/1134690209981915138",
      "https://github.com/beeminder/beedroid-hist/pull/60"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.10.7. They were not sorted before, so however they were in the datastore. It *may* have been by next derail date, but it also may have been however Java saw fit, i.e. randomly",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We got rid of the notifications that said \"in panic\" and don't use that term anymore. It's all about beemergencies now.",
"u": ["https://twitter.com/beemuvi/status/1134690466027323392"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.9.3. We don't remember now when inpanic notificaions got killed and if this was just cleaning up the code but at some point we got rid of the \"in panic\" copy and didn't previously count that as a UVI so we're counting it now! AWW: There used to be zeno alerts and inpanic alerts, and as part of cleaning it up, we made it all zenos. Funnily enough, we'll be re-adding 'inpanic'-style alerts so we can use leaddays from the web, but they'll be done differently.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "If two goals were updated at the exact same time, going to a screen that showed them both would at least sometimes crash. #bugfix & HT Mary who reported it!",
"u": ["https://twitter.com/beemuvi/status/1134690880328151041",
      "https://github.com/beeminder/beedroid-hist/pull/47"],
"d": "2019-05-27",
"t": "2019-05-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Tons of mostly user-invisible work on notifications (eg switching GCM to FCM) that had the user-visible effect of stark improvements to latency/deliverability",
"u": ["https://twitter.com/beemuvi/status/1134691078290825217"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.9.3. We can't prove this particular thing but we've got at least one two-for-one UVI in this Beedroid batch so it seems fair. Plus the fact that everything would definitely have broken with new Android versions if we hadn't done all this!",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed an orientation crash. #bugfix (Plus a lot of improvements to the Send Feedback feature and debugging info but that's not very user-visible)",
"u": ["https://twitter.com/beemuvi/status/1134691160327241728",
      "https://github.com/beeminder/beedroid-hist/commit/ebe6a28405a181bf4182ba490002b1ad63ad3974"],
"d": "2019-05-27",
"t": "2019-05-31",
"c": "Version 2.9.2. Google's automated testing was showing that that line was causing a crash on some phones",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We now show onboarding copy when there are no goals to show! (We thought we'd done this a long time ago but they weren't showing up, so #bugfix)",
"u": ["https://twitter.com/beemuvi/status/1134691309669666816",
      "https://github.com/beeminder/beedroid/issues/14"],
"d": "2019-05-27",
"t": "2019-05-31",
}, /* --------------------------------------------------------- end 2019may */ ]

var batch2019jun = [{
"x": "Errors from Beebrain (like segments of the yellow brick road being out of order) were displaying on the graph as black rectangles instead of text. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1136113614631235587",
      "https://github.com/beeminder/road/issues/78"],
"d": "2019-06-04",
"t": "2019-06-04",
"c": "By Uluc Saranli"
}, { // ------------------------------------------------------------------------
"x": "GitHub goal creation #bugfix: If you hadn't already auth'd us to access your GitHub data and were creating a goal involving a specific repo, we'd not let you!",
"u": ["https://twitter.com/beemuvi/status/1136530822008197121",
      "https://github.com/beeminder/beeminder/pull/638"],
"d": "2019-06-05",
"t": "2019-06-05",
}, { // ------------------------------------------------------------------------
"x": "In Garmin goal creation we weren't letting you choose steps/sleep/active-time on non-Vivofit/Vivoki devices. #bugfix HT @phreeza",
"u": ["https://twitter.com/beemuvi/status/1136549260160262144",
      "https://github.com/beeminder/beeminder/issues/637",
      "https://github.com/beeminder/beeminder/pull/639"],
"d": "2019-06-05",
"t": "2019-06-05",
}, { // ------------------------------------------------------------------------
"x": "If you had a timey-wimey goal and you recorded a datapoint that was <30 seconds, we'd round it to \"00:00\". Misleading to say the least. Now we show eg \"00:00.5\"",
"u": ["https://twitter.com/beemuvi/status/1136862305352704000",
      "https://github.com/beeminder/beeminder/issues/444",
      "https://github.com/beeminder/beeminder/pull/641"],
"d": "2019-06-06",
"t": "2019-06-06",
}, { // ------------------------------------------------------------------------
"x": "Fixed typography things (bullet wrapping, title wrapping, margins) in the \"why?\" modal that is available when we ask for a credit card in goal creation",
"u": ["https://twitter.com/beemuvi/status/1137258024106582017",
      "https://github.com/beeminder/beeminder/pull/643"],
"d": "2019-06-07",
"t": "2019-06-07",
"c": "See UVI#2908 and UVI#2912",
}, { // ------------------------------------------------------------------------
"x": "UVI#2221 let you cancel not just derailment payments but premium subscription payments this whole time, which made no sense so now it doesn't",
"u": ["https://twitter.com/beemuvi/status/1137258346585571328",
      "https://github.com/beeminder/beeminder/issues/613"],
"d": "2019-06-07",
"t": "2019-06-07",
}, { // ------------------------------------------------------------------------
"x": "We still wanted to warn you about a failed/pending subscription charge (despite UVI#3051) when updating your card, so they're included in a secondary list",
"u": ["https://twitter.com/beemuvi/status/1138341382194487296",
      "https://github.com/beeminder/beeminder/issues/613"],
"d": "2019-06-07",
"t": "2019-06-10",
"c": "See screenshot in gissue",
}, { // ------------------------------------------------------------------------
"x": "Also adjusted margins, font sizes, and line height for listed charges (there was too much space when the description wrapped to 2 lines)",
"u": ["https://twitter.com/beemuvi/status/1138642362802921473",
      "https://github.com/beeminder/beeminder/issues/613"],
"d": "2019-06-07",
"t": "2019-06-11",
}, { // ------------------------------------------------------------------------
"n": 3054,
"x": "A bunch of small layout changes to the new goal screen",
"u": ["https://twitter.com/beemuvi/status/1138703486718078976",
      "https://github.com/beeminder/beeminder/pull/647"],
"d": "2019-06-11",
"t": "2019-06-11",
}, { // ------------------------------------------------------------------------
"n": 3054,
"s": true,
"x": "Most notably, shifting and resizing the manual-data icon so it doesn't look like part of the header",
"u": ["https://twitter.com/beemuvi/status/1138703486718078976",
      "https://github.com/beeminder/beeminder/pull/647"],
"d": "2019-06-11",
"t": "2019-06-11",
}, { // ------------------------------------------------------------------------
"n": 3055,
"s": true,
"x": "Increased the vertical space between the manual & autodata sections and added a large OR in that vertical space to highlight the difference",
"u": ["https://twitter.com/beemuvi/status/1138703747402461191",
      "https://github.com/beeminder/beeminder/pull/647"],
"d": "2019-06-11",
"t": "2019-06-11",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Increased the whitespace around the integration icons to make them match more / have more similar presence on the page with the <+> manual-data icon",
"u": ["https://twitter.com/beemuvi/status/1138703851215704064",
      "https://github.com/beeminder/beeminder/pull/647"],
"d": "2019-06-11",
"t": "2019-06-11",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "On the next screen for goal type (do-more, do-less, etc), fixed a problem with vertical alignment of icons. #css #bugfix",
"u": ["https://twitter.com/beemuvi/status/1138704037908377600",
      "https://github.com/beeminder/beeminder/pull/647"],
"d": "2019-06-11",
"t": "2019-06-11",
}, { // ------------------------------------------------------------------------
"x": "Doh, UVI#3054+ messed up the +/- stepper in goal creation & restart for 'commit to' (in manual goal types) and the pledge cap picker. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1139794198226296832",
      "https://github.com/beeminder/beeminder/pull/650"],
"d": "2019-06-14",
"t": "2019-06-14",
}, { // ------------------------------------------------------------------------
"x": "Fixed overhelpful Firefox defaults/autocomplete on dashboard & goal page; it remembered last date used for data entry even when you reloaded the page. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1140134844342530048",
      "https://github.com/beeminder/beeminder/issues/634"],
"d": "2019-06-15",
"t": "2019-06-15",
}, { // ------------------------------------------------------------------------
"x": "Rewrote the <a href=\"https://help.beeminder.com/article/125-android-notification\">help page copy about the Android permanotification</a> to emphasize how ok it is to turn that off and to better explain why it's there at all",
"u": ["https://twitter.com/beemuvi/status/1140147178326745089",
      "https://help.beeminder.com/article/125-android-notification"],
"d": "2019-06-15",
"t": "2019-06-15",
}, { // ------------------------------------------------------------------------
"x": "Fixed a tiny bug in the new user signup page where if you changed the timezone and then made some other error in the form it would lose your choice. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1140148418439872512",
      "https://github.com/beeminder/beeminder/issues/566"],
"d": "2019-06-15",
"t": "2019-06-15",
}, { // ------------------------------------------------------------------------
"x": "Bunch of webcopy tweaks in goal creation: mention SMS, \"Use an odometer\" to just \"Odometer\", nixed the \"www\" in the live URL, shortened/removed other things",
"u": ["https://twitter.com/beemuvi/status/1140898198833078272",
      "https://github.com/beeminder/beeminder/issues/659"],
"d": "2019-06-17",
"t": "2019-06-17",
}, { // ------------------------------------------------------------------------
"x": "On the \"select goal type\" screen in goal creation, small text letting you know that advanced goal types are a premium feature",
"u": ["https://twitter.com/beemuvi/status/1140898648592531457",
      "https://github.com/beeminder/beeminder/issues/659"],
"d": "2019-06-17",
"t": "2019-06-17",
}, { // ------------------------------------------------------------------------
"x": "Layout tweaks in goal creation: made the commit-to fields the same width (also fixed truncated placeholder text for goal units)",
"u": ["https://twitter.com/beemuvi/status/1140898889836351491",
      "https://github.com/beeminder/beeminder/issues/659"],
"d": "2019-06-17",
"t": "2019-06-17",
}, { // ------------------------------------------------------------------------
"x": "Updated the help pages in the <a href=\"https://help.beeminder.com/category/15-goal-settings\">Goal Settings category</a> (updates, fixes, prose tweaks, typography, link fixes)",
"u": ["https://twitter.com/beemuvi/status/1141664787803201537"],
"d": "2019-06-19",
"t": "2019-06-19",
}, { // ------------------------------------------------------------------------
"x": "Updated the help pages in the <a href=\"https://help.beeminder.com/category/107-account-settings\">Account Settings category</a> (updates, prose tweaks, link fixes)",
"u": ["https://twitter.com/beemuvi/status/1141887798099623936"],
"d": "2019-06-20",
"t": "2019-06-20",
}, { // ------------------------------------------------------------------------
"x": "Pledge cap UI in goal creation now has radio buttons to pick between two possible pledge caps instead of a stepper widget",
"u": ["https://twitter.com/beemuvi/status/1141999967294242816",
      "https://github.com/beeminder/beeminder/commit/1ec14d66f9af196e9818a18e8b8f062de863e3cc",
      "https://github.com/beeminder/beeminder/commit/8040a6c97139e3b0139d2b1b3623b422515cd2df"],
"d": "2019-06-20",
"t": "2019-06-20",
}, { // ------------------------------------------------------------------------
"x": "Also a bunch of a tweaking of the webcopy for picking initial and max stakes and explanatory text for how to change or cap pledges any time",
"u": ["https://twitter.com/beemuvi/status/1142287314732716034",
      "https://github.com/beeminder/beeminder/pull/666"],
"d": "2019-06-20",
"t": "2019-06-21",
}, { // ------------------------------------------------------------------------
"x": "More tweaking of the goal creation \"Pledge Your Money\" screen's webcopy, laying out the full pledge schedule, coining \"starting stakes\", calling it \"pledge cap\"",
"u": ["https://twitter.com/beemuvi/status/1142287441727897600",
      "https://github.com/beeminder/beeminder/commit/2c9162ad3957eeda044f7e3867666bebfa2fd458",
      "https://github.com/beeminder/beeminder/commit/450aca0d58994a8b48d354dee6cf5285ba97b25e"],
"d": "2019-06-20",
"t": "2019-06-21",
"c": "We called it \"pledge cap\" elsewhere but not on that page previously. Also fixed a couple things that were briefly deployed before baked.",
}, { // ------------------------------------------------------------------------
"x": "Further separated the first row of the reminders page (aka fwomp page) for goal defaults; jettisoned the explanatory hovertext now that it's obvious enough",
"u": ["https://twitter.com/beemuvi/status/1143434626293043200",
      "https://github.com/beeminder/beeminder/pull/670"],
"d": "2019-06-24",
"t": "2019-06-24",
"c": "For title text of slug column, no need to mention \"the first row of this page lets you set the defaults for your account\" since we moved the defaults into its own section",
}, { // ------------------------------------------------------------------------
"x": "Also on the fwomp/reminders page, do-less goals are now in a separate section (in anticipation of handling their reminders differently)",
"u": ["https://twitter.com/beemuvi/status/1143734504164487168",
      "https://github.com/beeminder/beeminder/pull/670"],
"d": "2019-06-24",
"t": "2019-06-25",
"c": "Also they're sorted separately",
}, { // ------------------------------------------------------------------------
"x": "Beedroid version 3.0.1 has an option to send us feedback (including debug logs) before logging in. Pretty helpful when the bug is you can't log in!",
"u": ["https://twitter.com/beemuvi/status/1144037542574088193",
      "https://github.com/beeminder/beedroid-hist/pull/68"],
"d": "2019-06-24",
"t": "2019-06-26",
}, { // ------------------------------------------------------------------------
"x": "Another mini-revamp of the pledge setup screen of goal creation: show the whole progression vertically with arrows, and no choice (on that screen) on pledge cap",
"u": ["https://twitter.com/beemuvi/status/1144510310012690432",
      "https://github.com/beeminder/beeminder/pull/675"],
"d": "2019-06-27",
"t": "2019-06-27",
"c": "Having only one choice for pledge cap (to go up one level) seemed petty / taunting / money-grubbing. Hopefully having it just not be on that screen at all that you set pledge cap will feel fine."
}, { // ------------------------------------------------------------------------
"x": "Added missing dropdown arrow indicators on some dropdowns in goal creation (Garmin, Habitica, and RescueTime). #css #affordance",
"u": ["https://twitter.com/beemuvi/status/1144511273935130624",
      "https://github.com/beeminder/beeminder/pull/676"],
"d": "2019-06-27",
"t": "2019-06-27",
"c": "Possible #redesign #regression but we're pretty unsure about that",
}, { // ------------------------------------------------------------------------
"x": "Okfine, we'll still let you pick a pledge cap during goal setup. We put the picker back, alongside the vertical-spelling-out. Click the little arrow to reveal.",
"u": ["https://twitter.com/beemuvi/status/1144843355093790721",
      "https://forum.beeminder.com/t/fussing-with-the-pledge-cap-ui-for-goal-creation/5502",
      "https://github.com/beeminder/beeminder/pull/677"],
"d": "2019-06-28",
"t": "2019-06-28",
}, /* --------------------------------------------------------- end 2019jun */ ]

var batch2019jul = [{
"x": "Beedroid version 3.0.2 handles SSL errors more gracefully/informatively (and maybe fixes a couple other things but we're saving those for when we're certain!)",
"u": ["https://twitter.com/beemuvi/status/1145914879225655296",
      "https://github.com/beeminder/beedroid/issues/98"],
"d": "2019-06-28",
"t": "2019-07-01",
}, { // ------------------------------------------------------------------------
"x": "Added the newest Duolingo course -- Arabic -- to the list of languages in the Beeminder integration!",
"u": ["https://twitter.com/beemuvi/status/1145939115063427072",
      "https://github.com/beeminder/beeminder/pull/679"],
"d": "2019-07-01",
"t": "2019-07-01",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "RescueTime goal creation wasn't letting you set your initial safety buffer. Now it does! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1146240016927977472",
      "https://github.com/beeminder/beeminder/pull/683"],
"d": "2019-07-02",
"t": "2019-07-02",
"c": "It was actually kind of intentional for the case of do-less RescueTime goals but not for a good reason and we intend to allow initial safety buffer for all do-less goals",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Yesterday's RescueTime bugfix prompted us to finally make it so you can choose an initial safety buffer on all do-less goals when you create them!",
"u": ["https://twitter.com/beemuvi/status/1146673465425973248",
      "https://github.com/beeminder/beeminder/pull/688"],
"d": "2019-07-03",
"t": "2019-07-03",
"c": "We're trying to remember if/why we intentionally didn't have this for do-less goals till now. It was really easy to add it!"
}, { // ------------------------------------------------------------------------
"x": "We now finally use HH:MM format (assuming you've checked that box for timey-wimey goals) in formatting beemergency reminders from the SMS bot. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1147030662974590976",
      "https://github.com/beeminder/beeminder/pull/687"],
"d": "2019-07-03",
"t": "2019-07-04",
}, { // ------------------------------------------------------------------------
"x": "The evaluating of arithmetical expressions was silently failing if the value was superficially right but syntactically wrong, like \"2++2\". #bugfix",
"u": ["https://twitter.com/beemuvi/status/1147030763646271490",
      "https://github.com/beeminder/beeminder/issues/689"],
"d": "2019-07-04",
"t": "2019-07-04",
}, { // ------------------------------------------------------------------------
"x": "The initial safety buffer checkbox/field was getting messed up if you started creating a do-more goal and then hit back and chose weight loss. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1147482599935266817",
      "https://github.com/beeminder/beeminder/issues/695"],
"d": "2019-07-05",
"t": "2019-07-05",
"c": "Specifically, weight loss goals have maxflux instead of days of safety buffer",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Changed the derail/rerail behavior: the road jumps to where you ended the beemergency day, not the post-eep day",
"u": ["https://twitter.com/beemuvi/status/1154623850576957441",
      "https://github.com/beeminder/beeminder/pull/696/commits/477dc30d9a7f2357774ce82b45ef85e1714be846"],
"d": "2019-07-07",
"t": "2019-07-25",
"c": "UVI#2760 (and tweaks to it in UVI#2761, UVI#2768, etc) was in anticipation of this, since this UVI means derailments are no longer indicated by red dots.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "In addition to the visual changes, now you can now ratchet to zero safety buffer any time! (Before this you couldn't do that the day after a derailment.)",
"u": ["https://twitter.com/beemuvi/status/1154624017040412672",
      "https://github.com/beeminder/beeminder/pull/696/commits/477dc30d9a7f2357774ce82b45ef85e1714be846"],
"d": "2019-07-07",
"t": "2019-07-25",
}, { // ------------------------------------------------------------------------
"x": "Doh, the road editor was broken for 2 days before we got the new rerail behavior hotness deployed to road.beeminder.com as well. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1154990742080638977",
      "https://forum.beeminder.com/t/road-editor-is-broken/5538",
      "https://github.com/beeminder/road/commit/dff4a8a635272140f833dc8711ec1afb331f9fa3"],
"d": "2019-07-09",
"t": "2019-07-26",
"c": "All this might be milkable for more UVIs, like how we made it smart enough to only start doing this as of the transition date, and how vprev is now a Beebrain out-param. Related infra TODO: clean up the 'offparis' param.",
}, { // ------------------------------------------------------------------------
"x": "Highly dubious UVI from one perspective and highly legit from another: Ended the year of grandfathering on the Infinibee price hike ($4/mo to $8/mo)",
"u": ["https://twitter.com/beemuvi/status/1156118727957467137",
      "https://github.com/beeminder/beeminder/pull/704"],
"d": "2019-07-29",
"t": "2019-07-29",
}, { // ------------------------------------------------------------------------
"x": "Changed a dash to an em dash in the goal settings UI webcopy which counts as a #typo #bugfix for us because we're very finicky about these things!",
"u": ["https://twitter.com/beemuvi/status/1156119535151280129",
      "https://github.com/beeminder/beeminder/pull/682",
      "https://github.com/beeminder/beeminder/commit/8b2c56262ef617acf93c1faac0361442b0a8282a"],
"d": "2019-07-02",
"t": "2019-07-29",
"c": "Also we accidentally typed \"&emdash;\" which made it blatantly buggy for like 12 hours so fixing that was perhaps the more substantial UVI",
}, { // ------------------------------------------------------------------------
"x": "The 'start with extra buffer' checkbox starts expanded for do-less goals, and unchecking it is now equivalent to choosing no extra buffer. Improvement + #bugfix",
"u": ["https://twitter.com/beemuvi/status/1156428897652629504",
      "https://github.com/beeminder/beeminder/issues/694",
      "https://github.com/beeminder/beeminder/pull/696",
      "https://github.com/beeminder/beeminder/pull/705"],
"d": "2019-07-30",
"t": "2019-07-30",
"c": "This is multiple UVIs in one (I guess we're making up for the last cheap-o one). We deployed the part where 'start with extra buffer' starts expanded on July 5 but at that point if you unchecked the box (because you didn't want to start with extra safety buffer) then it gave you 9 days of buffer! On July 30 we made it so unchecking the box actually gives you no extra buffer.",
//Part 1: UVI#3079 allowed do-less goals to specify how much safety buffer they start with by adding the "initial safety buffer" checkbox.
//Bug with 1: If you don't check the box, it still defaults to 9 days of buffer (the UI copy implies the default will be no extra buffer).
//Part 2: Make the checkbox be checked / expanded by default (because if you submit with a value we give you what you ask for).
//Bug with 2: That works fine, but if you uncheck the box and submit, you still get 9 days of buffer. In other words bug 1 totally still exists, you're just less likely to encounter it becasue we changed the default.
//Part 3: Actually fix that so unchecking the box means zero buffer (except actually 2 because of road width).
//(Above UVI#3088 covers both part 2 and part 3)
//Part 4 TODO: https://github.com/beeminder/beeminder/issues/707
}, { // ------------------------------------------------------------------------
"n": 3089,
"x": "Beedroid version 3.1.0",
"u": ["https://twitter.com/beemuvi/status/1156785591175958528"],
"d": "2019-07-31",
"t": "2019-07-31",
}, { // ------------------------------------------------------------------------
"n": 3089,
"s": true,
"x": "Beedroid no longer starts the whole app when you boot up the device. Why did we ever think that was a good idea? We didn't, Android development is hard.",
"u": ["https://twitter.com/beemuvi/status/1156785591175958528",
      "https://github.com/beeminder/beedroid/issues/102",
      "https://github.com/beeminder/beedroid-hist/pull/74"],
"d": "2019-07-31",
"t": "2019-07-31",
"c": "We started doing this in the previous version because of some Android requirement about not being able to start something in the background without there being something visible to the user. Turns out it suffices to just have a \"Starting Beeminder\" toast pop up for a split second.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Beedroid 3.1.0 also fixes some crashes. We don't know how they were happening but they were and now they're not! Also fixed the changelog formatting. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1156787226941935617",
      "https://github.com/beeminder/beedroid/issues/96",
      "https://github.com/beeminder/beedroid-hist/commit/43417e40a7f6d132940d9a166a965345a353ff1d",
      "https://github.com/beeminder/beedroid/issues/97"],
"d": "2019-07-31",
"t": "2019-07-31",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Removed custom notification sounds since trying to set them caused a crash in new Android versions (and you can still do it in general Android Settings) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1156787350921457665",
      "https://github.com/beeminder/beedroid/issues/92",
      "https://github.com/beeminder/beedroid-hist/pull/73"],
"d": "2019-07-31",
"t": "2019-07-31",
"c": "Cf https://commonsware.com/blog/2016/09/07/notifications-sounds-android-7p0-aggravation.html",
}, /* --------------------------------------------------------- end 2019jul */ ]

var batch2019aug = [{
"f": true,
"x": "Follow-on to UVI#3084, you can now choose zero-mercy derails (including as a default for all new goals in account-level settings)",
"u": ["https://twitter.com/beemuvi/status/1157520643186839553",
      "https://github.com/beeminder/beeminder/pull/706",
      "https://github.com/beeminder/beeminder/pull/708"],
"d": "2019-08-01",
"t": "2019-08-02",
}, { // ------------------------------------------------------------------------
"x": "Garmin sleep tracking didn't allow multiple sleep entries in a day. E.g., naps wouldn't register, nor post-midnight followed by pre-midnight bedtimes. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1157521721135493121",
      "https://github.com/beeminder/beeminder/pull/710",
      "https://github.com/beeminder/beeminder/issues/709"],
"d": "2019-08-01",
"t": "2019-08-02",
"c": "Or if you went to bed at 1am tonight, the 2nd, and then at 10pm tomorrow -- also the 2nd -- both those sleeps look like the same day to us, and one would overwrite the other. Now we disambiguate not by day, but by start time of the sleep record. So if your Garmin sends multiple updates throughout the night, we won't record each of those as separate entries, but if you nap in the afternoon or whatever we will record those as separate events.",
}, { // ------------------------------------------------------------------------
"x": "Standardized whitespace and added a missing period in the email bot replies",
"u": ["https://twitter.com/beemuvi/status/1158627953326137345",
      "https://github.com/beeminder/beeminder/pull/701"],
"d": "2019-08-05",
"t": "2019-08-05",
"c": "By Adam Wolf",
}, { // ------------------------------------------------------------------------
"x": "For do-less goals, added hard cap to data entry replies from the SMS and email bot as well as SMS reminders",
"u": ["https://twitter.com/beemuvi/status/1158628630110453766",
      "https://github.com/beeminder/beeminder/issues/522",
      "https://github.com/beeminder/beeminder/issues/713",
      "https://github.com/beeminder/beeminder/issues/714"],
"d": "2019-08-05",
"t": "2019-08-05",
"c": "By Adam Wolf",
}, { // ------------------------------------------------------------------------
"x": "Oops, previous UVI broke the SMS bot which stopped sending zeno alerts and reminders for some hours. #bugfix (and manually interceded for all affected users)",
"u": ["https://twitter.com/beemuvi/status/1158957219104223232",
      "https://github.com/beeminder/beeminder/pull/716"],
"d": "2019-08-06",
"t": "2019-08-06",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "New (currently optional) pledge schedule! $1, $5, $10, $20, $40, $80, $160, $320, $640, $1280, $2560",
"u": ["https://twitter.com/beemuvi/status/1159341971418124290",
      "https://github.com/beeminder/beeminder/pull/686",
      "https://forum.beeminder.com/t/lets-totally-change-the-pledge-schedule/5426?u=dreev"],
"d": "2019-08-06",
"t": "2019-08-07",
}, { // ------------------------------------------------------------------------
"f": true,
"n": 3097,
"x": "Version 5.4.1 of the Beeminder iOS app!",
"u": ["https://twitter.com/beemuvi/status/1159705081257721857"],
"d": "2019-08-07",
"t": "2019-08-08",
}, { // ------------------------------------------------------------------------
"n": 3097,
"s": true,
"x": "Added 3 new metrics -- dietary sugar, carbs, and fat -- to the Apple Health integration",
"u": ["https://twitter.com/beemuvi/status/1159705081257721857"],
"d": "2019-08-07",
"t": "2019-08-08",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The Today widget wasn't showing goals for some users so they couldn't add data! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1159705292411588608"],
"d": "2019-08-07",
"t": "2019-08-08",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Updated the syncing spinners to make it more apparent that syncing has happened",
"u": ["https://twitter.com/beemuvi/status/1160075721772916737"],
"d": "2019-08-07",
"t": "2019-08-08",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We now display the Beeminder-correct date if the goal's deadline has already passed for the day",
"u": ["https://twitter.com/beemuvi/status/1160075854933716992"],
"d": "2019-08-07",
"t": "2019-08-08",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed an alignment thing so that things look better on phones with curved bottom screens",
"u": ["https://twitter.com/beemuvi/status/1160076090703876096"],
"d": "2019-08-07",
"t": "2019-08-08",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The spinner would fail to disappear if you chose an existing username. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1160076242923581445"],
"d": "2019-08-07",
"t": "2019-08-08",
}, { // ------------------------------------------------------------------------
"x": "Opting in to the OG pledge schedule mostly worked but wasn't actually letting you start at $0 like it's supposed to. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1160078218059112448",
      "https://github.com/beeminder/beeminder/pull/724",
      "https://github.com/beeminder/beeminder/issues/720"],
"d": "2019-08-08",
"t": "2019-08-09",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "The infamous, enigmatic do-less loophole is closed: if you're in the red when you hit the deadline, you derail, no caveats!",
"u": ["https://twitter.com/beemuvi/status/1161903802825359360",
      "https://forum.beeminder.com/t/closing-the-do-less-loophole/5658",
      "https://github.com/beeminder/beeminder/issues/256",
      "https://github.com/beeminder/beeminder/commit/28ec21cde75c0ca7834dcc2037a270f27746cd76",
      "https://github.com/beeminder/road/pull/83",
      "https://github.com/beeminder/beeminder/pull/728"],
"d": "2019-08-12",
"t": "2019-08-14",
"c": "Technically: changed the derail condition to 'yesterday is red'.",
}, { // ------------------------------------------------------------------------
"x": "The SMS bot now uses emoji! ⏰🔥❗️ (yes, those ones in particular)",
"u": ["https://twitter.com/beemuvi/status/1162222397228896261",
      "https://forum.beeminder.com/t/wow-texts-from-beeminder-now-have-emojis/5627",
      "https://github.com/beeminder/beeminder/commit/488184d4032c17972a80b4eca11ee953bcd984b7"],
"d": "2019-08-06",
"t": "2019-08-15",
}, { // ------------------------------------------------------------------------
"x": "The new yesterday-is-red derail criterion introduced a bug for odometer (and some do-less) goals that would make them insta-derail upon creation! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1162636847727595521",
      "https://github.com/beeminder/road/pull/84",
      "https://github.com/beeminder/beeminder/issues/734",
      "https://github.com/beeminder/beeminder/issues/691",
      "https://github.com/beeminder/beeminder/issues/707"],
"d": "2019-08-16",
"t": "2019-08-16",
}, { // ------------------------------------------------------------------------
"x": "Replaced \"Emergency day\" in SMS reminders with \"Beemergency\". It's slightly shorter and we're gradually doubling down on \"Beemergency\" everywhere anyway!",
"u": ["https://twitter.com/beemuvi/status/1162637703403323392",
      "https://github.com/beeminder/beeminder/commit/bf83a552ef91eae59b80a0e20db0285fbefe0b1c"],
"d": "2019-08-10",
"t": "2019-08-17",
}, { // ------------------------------------------------------------------------
"x": "For do-less goals created w/ 0 safe days you'd derail at end of very 1st day (unless you can unsmoke a cigarette?). Now we put you just on the cusp of red.",
"u": ["https://twitter.com/beemuvi/status/1163649262636244992",
      "https://github.com/beeminder/beeminder/pull/743/commits/41f868db5c05fbf6df2fe18d34f049fb5b423be5",
      "https://github.com/beeminder/beeminder/issues/742"],
"d": "2019-08-19",
"t": "2019-08-19",
}, { // ------------------------------------------------------------------------
"x": "We broke (or did it never work?) the Reply-To for nonce transactional emails. Now we can (again?) send them as ourselves but have replies go to support. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1164034659556085760",
      "https://github.com/beeminder/beeminder/pull/712"],
"d": "2019-08-05",
"t": "2019-08-20",
}, { // ------------------------------------------------------------------------
"x": "Better integeriness: there were corner cases, like do-more goals with negative amounts due, where values weren't being rounded to an integer. Now they are!",
"u": ["https://twitter.com/beemuvi/status/1164034948203835393",
      "https://github.com/beeminder/road/commit/9685e0f45679faa1af0927edbd8f8a826db4df52"],
"d": "2019-08-20",
"c": "By Danny. #beebrain #conservaround",
}, { // ------------------------------------------------------------------------
"x": "All SMS alerts now include bare min or hard cap",
"u": ["https://twitter.com/beemuvi/status/1164383369909526528",
      "https://github.com/beeminder/beeminder/issues/736",
      "https://github.com/beeminder/beeminder/commit/e9074e2dad61b867293f8c7d2ef1eb02197b8d52",
      "https://github.com/beeminder/beeminder/pull/739"],
"d": "2019-08-21",
"t": "2019-08-21",
"c": "Removing the colon after \"hard cap\" / \"bare min\" was also part of this PR but we think we did that before deploying it and so failed to milk that as a distinct UVI",
}, { // ------------------------------------------------------------------------
"x": "In 2014 we lost the feature that let you upload custom avatars (profile images) and we just now got it back!",
"u": ["https://twitter.com/beemuvi/status/1164810913368563712",
      "https://github.com/beeminder/beeminder/commit/1c7c6d0d5570704273930c0e0893f68b7bda7f95",
      "https://github.com/beeminder/beeminder/pull/749",
      "https://github.com/beeminder/beeminder/issues/79"],
"d": "2019-08-21",
"t": "2019-08-22",
}, { // ------------------------------------------------------------------------
"x": "Because that Pareto Dominance Principle violation really bothered us, we also reinstated all the ancient avatars & warned everyone we were Rip-Van-Winkling them",
"u": ["https://twitter.com/beemuvi/status/1164811144889921536",
      "https://github.com/beeminder/beeminder/issues/79",
      "https://github.com/beeminder/beeminder/pull/756"],
"d": "2019-08-22",
"t": "2019-08-22",
"c": "1200 people emailed"
}, { // ------------------------------------------------------------------------
"x": "UVI#3104 made most archived/frozen goals insta-derail when you restarted. For now we're kludgily adding a dummy datapoint & moving the road yesterday. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1165100770137538560",
      "https://github.com/beeminder/beeminder/issues/733",
      "https://github.com/beeminder/beeminder/commit/3e7b74e709356afa9ed84dd49092bc90bf6b0bef"],
"d": "2019-08-23",
"t": "2019-08-23",
"c": "The right fix will be road gaps",
}, { // ------------------------------------------------------------------------
"x": "When restarting, goals we were always defaulting the rate units to 'per week'. Now we default to the goal's current/previous rate units.",
"u": ["https://twitter.com/beemuvi/status/1165100889796833280",
      "https://github.com/beeminder/beeminder/commit/fe100ccba498dbb8374573f7d62d0f7c9df02b04"],
"d": "2019-08-23",
"t": "2019-08-23",
}, { // ------------------------------------------------------------------------
"x": "Kind of kludgy but we're now filtering out spurious zeno alerts for goals more than 24 hours from derailing, which would, rarely, get sent until now. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1166206004456853504",
      "https://github.com/beeminder/beeminder/commit/074bbb98c941d020ae5f1bd1ee4c66b18a8f3d94",
      "https://github.com/beeminder/beeminder/pull/757",
      "https://github.com/beeminder/beeminder/pull/752",
      "https://github.com/beeminder/beeminder/issues/184",
      "https://github.com/beeminder/beeminder/issues/737",
      "https://github.com/beeminder/beeminder/issues/621"],
"d": "2019-08-26",
"t": "2019-08-26",
"c": "AKA far zenos. By Adam Wolf. lib/reminders.rb",
}, { // ------------------------------------------------------------------------
"x": "On the goal restart page we'd sometimes suggest a pledge cap that was lower than your actual current pledge. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1166621969770528769",
      "https://github.com/beeminder/beeminder/issues/761",
      "https://github.com/beeminder/beeminder/pull/762"],
"d": "2019-08-27",
"t": "2019-08-27",
}, { // ------------------------------------------------------------------------
"x": "Also, whatever the default is, we now prevent you from picking a pledge cap (aka max pledge) lower than the current pledge on the goal restart page",
"u": ["https://twitter.com/beemuvi/status/1166622106106388480",
      "https://github.com/beeminder/beeminder/issues/761",
      "https://github.com/beeminder/beeminder/pull/762"],
"d": "2019-08-27",
"t": "2019-08-27",
}, { // ------------------------------------------------------------------------
"x": "Removed the weird line in the pledge section of goal creation that said \"Click on the $ above your graph to change your pledge cap\"",
"u": ["https://twitter.com/beemuvi/status/1166946134582951936",
      "https://github.com/beeminder/beeminder/pull/762/commits/1daadd2daa9e051f65a83ae6fa600177981c6274",
      "https://blog.beeminder.com/paretocaps/"],
"d": "2019-08-27",
"t": "2019-08-28",
}, { // ------------------------------------------------------------------------
"x": "Beemium users can now pledge $0 without switching to the traditional pledge schedule",
"u": ["https://twitter.com/beemuvi/status/1167299230689452037",
      "https://github.com/beeminder/beeminder/issues/729",
      "https://github.com/beeminder/beeminder/pull/738"],
"d": "2019-08-29",
"t": "2019-08-29",
}, { // ------------------------------------------------------------------------
"x": "We accidentally weren't letting non-Beemium people jump their initial pledge if they chose $1 and then changed their mind and wanted to bump up to $5. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1167303565192265730",
      "https://github.com/beeminder/beeminder/pull/738"],
"d": "2019-08-29",
"t": "2019-08-29",
"c": "Possible moneyfire?",
}, /* --------------------------------------------------------- end 2019aug */ ]

var batch2019sep = [{
"x": "Duolingo Latin is here and beemindable!",
"u": ["https://twitter.com/beemuvi/status/1169108432009363457",
      "https://github.com/beeminder/beeminder/pull/765"],
"d": "2019-08-30",
"t": "2019-09-03",
}, { // ------------------------------------------------------------------------
"x": "UVI#3084 wasn't quite true because of UVI#3020 &amp; UVI#3021! Now you can ratchet to zero safety buffer on day one of any goal for real. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1169494587489964033",
      "https://github.com/beeminder/beeminder/pull/767"],
"d": "2019-09-03",
"t": "2019-09-04",
}, { // ------------------------------------------------------------------------
"x": "Beedroid version 3.2.1 makes everything not be pink (this was a real thing) in Android 10. Also a #bugfix from 3.2.0 that broke summary widgets in Android 9!",
"u": ["https://twitter.com/beemuvi/status/1169492201841127425",
      "https://forum.beeminder.com/t/all-my-widgets-are-in-the-pink/5641",
      "https://github.com/beeminder/beedroid-hist/tree/v3.2.1",
      "https://github.com/beeminder/beedroid/issues/107"],
"d": "2019-09-04",
"t": "2019-09-04",
"c": "By Adam. The summary widgets in Android 9 thing was probably replaced fast enough that no one saw it.",
}, { // ------------------------------------------------------------------------
"x": "We briefly broke goals created via the API (hello @CompliceGoals) for a few days after UVI#3097 (you'd get a 500 error when visiting the goal page). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1169845879106240513",
      "https://github.com/beeminder/beeminder/issues/755"],
"d": "2019-08-09",
"t": "2019-09-05",
"c": "Default pledge wasn't getting set up right",
}, { // ------------------------------------------------------------------------
"x": "We now say \"scheduled change\" (for when your pledge is going to drop) not \"pending change\" because it turns out that's very easy to misread as \"pending charge\"",
"u": ["https://twitter.com/beemuvi/status/1170229105456898049",
      "https://github.com/beeminder/beeminder/pull/773"],
"d": "2019-09-05",
"t": "2019-09-06",
}, { // ------------------------------------------------------------------------
"x": "Changed a couple instances of \"email support@beeminder\" to add the \".com\" and got rid of the lingering reference to Intercom chat on http://beeminder.com/contact",
"u": ["https://twitter.com/beemuvi/status/1170230569373843456",
      "https://github.com/beeminder/beeminder/pull/772",
      "https://github.com/beeminder/beeminder/commit/9c30a19578a4a76f3117f0040a83df3baa8b0f75",
      "https://github.com/beeminder/beeminder/pull/763"],
"t": "2019-09-06",
}, { // ------------------------------------------------------------------------
"x": "Graph generation (aka Beebrain) is now slightly but measurably faster thanks to magic from Uluc with reusing connections and such",
"u": ["https://twitter.com/beemuvi/status/1171315578134351872",
      "https://github.com/beeminder/road/commit/e6e68237e7308ef6823c6b918405cebda4a45828"],
"d": "2019-09-05",
"t": "2019-09-09",
}, { // ------------------------------------------------------------------------
"x": "We now actually refresh the graph image after updating road settings (i.e., the boring non-interactive road editor in the goal settings tab)",
"u": ["https://twitter.com/beemuvi/status/1171701583941259264",
      "https://github.com/beeminder/beeminder/issues/764",
      "https://github.com/beeminder/beeminder/pull/777"],
"d": "2019-09-10",
"t": "2019-09-10",
}, { // ------------------------------------------------------------------------
"x": "Allowing Beemium to pledge $0 on the new schedule (UVI#3120) also allowed non-Beemium to cap pledges at $0 (on the old schedge) and $1 (on the new). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1171702231604719617",
      "https://github.com/beeminder/beeminder/issues/779",
      "https://github.com/beeminder/beeminder/pull/778"],
"d": "2019-09-10",
"t": "2019-09-10",
}, { // ------------------------------------------------------------------------
"x": "We now sort the list of goal names that is sent to IFTTT so you can find the goal you want to connect more easily",
"u": ["https://twitter.com/beemuvi/status/1172041307117608960",
      "https://github.com/beeminder/beeminder/issues/584"],
"d": "2019-09-11",
"t": "2019-09-11",
"c": "Pro-tip: use ifttt.com/create if you're looking to make a custom applet (their recent redesign made this much harder to find)",
}, { // ------------------------------------------------------------------------
"x": "Withings née Nokia née Withings is now called Withings everywhere on Beeminder again (Withings literally bought itself back from Nokia), ie, we undid UVI#2647",
"u": ["https://twitter.com/beemuvi/status/1172430218134343680",
      "https://github.com/beeminder/beeminder/pull/784"],
"d": "2019-09-12",
"t": "2019-09-12",
"c": "We hadn't adjusted every mention of withings -> nokia yet, and good thing we waited. Now beeminder.com/nokia redirects to beeminder.com/withings and we purged other spots where we mention nokia",
}, { // ------------------------------------------------------------------------
"x": "We now include a 'resend activation' link for SMS whenever your number isn't activated w/ Beeminder so you can reactivate it if you injudiciously deactivate it",
"u": ["https://twitter.com/beemuvi/status/1172430359775965184",
      "https://github.com/beeminder/beeminder/pull/785"],
"d": "2019-09-12",
"t": "2019-09-12",
}, { // ------------------------------------------------------------------------
"x": "Adjusted the formatting of instructions & phone state (hanging instead of wrapping text) and made the part about the phone state (ie, activated or not) be red",
"u": ["https://twitter.com/beemuvi/status/1172430545910845441",
      "https://github.com/beeminder/beeminder/pull/785"],
"d": "2019-09-12",
"t": "2019-09-12",
"c": "It was supposed to be red all along but wasn't actually getting set to red",
}, { // ------------------------------------------------------------------------
"x": "We were inconsistent about \"Runkeeper\" vs \"RunKeeper\" -- they're definitely using \"Runkeeper\" currently, so we standardized on that too. #mini",
"u": ["https://twitter.com/beemuvi/status/1173817418919006208",
      "https://github.com/beeminder/beeminder/pull/788"],
"d": "2019-09-16",
"t": "2019-09-16",
}, { // ------------------------------------------------------------------------
"x": "Embarrassing typo fixes: misspelled \"language\" on the Clozemaster landing page and called Duolingo \"Runkeeper\" on the Duolingo landing page. #mini #bugfix",
"u": ["https://twitter.com/beemuvi/status/1173817711429742594",
      "https://github.com/beeminder/beeminder/pull/787",
      "https://github.com/beeminder/beeminder/pull/789"],
"d": "2019-09-16",
"t": "2019-09-16",
}, { // ------------------------------------------------------------------------
"x": "We thought we'd deftly upgraded to Todoist's new API with no user-impact but, alas, we missed something and broke the integration for some hours. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1174155939290603520",
      "https://github.com/beeminder/omniauth-todoist/pull/2"],
"d": "2019-09-13",
"t": "2019-09-17",
"c": "I guess it only affected new oauths, so didn't break the integration for existing users",
}, { // ------------------------------------------------------------------------
"x": "We now allow you to set a custom deadline for Twitter goals",
"u": ["https://twitter.com/beemuvi/status/1174539197375365120",
      "https://github.com/beeminder/beeminder/issues/721",
      "https://github.com/beeminder/beeminder/commit/6d31ef0a39df20fc900bdd5cd5b77d89a0620305"],
"d": "2019-09-18",
"t": "2019-09-18",
}, { // ------------------------------------------------------------------------
"x": "In the pledge schedule shown at goal setup we were repeating the $5 pledge so it looked like the schedge was $5 -> $5 -> $10 -> ... $CAP. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1174539516440236032",
      "https://github.com/beeminder/beeminder/pull/798",
      "https://github.com/beeminder/beeminder/issues/795"],
"d": "2019-09-18",
"t": "2019-09-18",
"c": "Introduced with recent bugfix for Beemium crap",
}, { // ------------------------------------------------------------------------
"x": "Goals with custom aggdays (especially binary and nonzero) were derailing on restart since God-knows-when. Now fixed along with UVI#3106 and UVI#3114. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1174896535374426118",
      "https://github.com/beeminder/beeminder/issues/489"],
"d": "2019-08-16",
"t": "2019-09-19",
"c": "We now get the correctly agg'd value for restart directly from Beebrain instead of incorrectly recalculating it in Ruby",
}, { // ------------------------------------------------------------------------
"x": "Clozemaster integration robustification: if the last autodata fetch of the day happens just after midnight, still count the data for what's now the previous day",
"u": ["https://twitter.com/beemuvi/status/1175283662339764225",
      "https://github.com/beeminder/beeminder/issues/630",
      "https://github.com/beeminder/beeminder/pull/803"],
"d": "2019-09-20",
"t": "2019-09-20",
}, { // ------------------------------------------------------------------------
"x": "Same for Todoist! If you're super edge-skating and get a Todoist task done after the last zeno but before the deadline, it should now count for the right day!",
"u": ["https://twitter.com/beemuvi/status/1175283737031925760",
      "https://github.com/beeminder/beeminder/pull/802"],
"d": "2019-09-20",
"t": "2019-09-20",
}, { // ------------------------------------------------------------------------
"x": "You can now set arbitrary deadlines on Clozemaster goals",
"u": ["https://twitter.com/beemuvi/status/1176400173569695744",
      "https://github.com/beeminder/beeminder/pull/807"],
"d": "2019-09-23",
"t": "2019-09-23",
}, { // ------------------------------------------------------------------------
"x": "Also in Clozemaster: we no longer add new datapoints if your score hasn't changed (matters for determining if you're still active, for, e.g., deadmanning)",
"u": ["https://twitter.com/beemuvi/status/1176400472363528193",
      "https://github.com/beeminder/beeminder/pull/807"],
"d": "2019-09-23",
"t": "2019-09-23",
"c": "Note that Clozemaster goals are odometer, non-kyoom.",
}, { // ------------------------------------------------------------------------
"x": "Soft launch / beta of our official Project Euler integration! http://beeminder.com/projecteuler",
"u": ["https://twitter.com/beemuvi/status/1176742356080418816",
      "https://github.com/beeminder/beeminder/pull/783"],
"d": "2019-09-20",
"t": "2019-09-24",
}, { // ------------------------------------------------------------------------
"x": "Added limits & sorts & pagination (oh my!) to the datapoints API endpoint -- http://api.beeminder.com/#dataall",
"u": ["https://twitter.com/beemuvi/status/1177096705839251456",
      "https://github.com/beeminder/beeminder/pull/811"],
"d": "2019-09-25",
"t": "2019-09-25",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Critical #bugfix: it was possible for do-less goals to get the PPR and derail you without ever warning you a derail was imminent. Broken since UVI#3104!",
"u": ["https://twitter.com/beemuvi/status/1177103266909286400",
      "https://github.com/beeminder/beeminder/issues/735",
      "https://github.com/beeminder/road/pull/86"],
"d": "2019-09-25",
"t": "2019-09-25",
}, { // ------------------------------------------------------------------------
"x": "Dropbox URLminder #bugfix: if there's no \"?dl=1\" on the end of the Dropbox URL we now correctly add it and thus correctly get your document's wordcount",
"u": ["https://twitter.com/beemuvi/status/1177491391603044353",
      "https://github.com/beeminder/beeminder/commit/7a4da23096c4a0f49d53322ee3a0406d0c0c4670"],
"d": "2019-09-26",
"t": "2019-09-26",
}, { // ------------------------------------------------------------------------
"x": "If you haven't entered data on a do-less goal, the triangular presumptive datapoint (like flatlining for do-more) is shown where the PPR would put it",
"u": ["https://twitter.com/beemuvi/status/1177682366166257664",
      "https://github.com/beeminder/road/commit/3de9d0d367045de512a931a2beb37c2861cbe8c0"],
"d": "2019-09-27",
"t": "2019-09-27",
"c": "By Uluc. And #beebrain doesn't currently know if PPRs are actually turned on so it does this regardless currently.",
}, { // ------------------------------------------------------------------------
"x": "As part of UVI#3147, we also stop sending zeno alerts if you actually add data (and if that data puts you in the blue or better)",
"u": ["https://twitter.com/beemuvi/status/1177724111994253312",
      "https://github.com/beeminder/road/pull/86"],
"d": "2019-09-25",
"t": "2019-09-27",
"c": "Sort of milking this (not that there's anything wrong with that). It's the same fix, just two aspects of it: (1) we zeno when anticipated PPR will derail you, and (2) we know not to anticipate that PPR if you've added data today.",
}, { // ------------------------------------------------------------------------
"x": "Tiny #bugfix: if for esoteric reasons you have a do-less goal with a negative slope, we no longer anticipate a negative PPR",
"u": ["https://twitter.com/beemuvi/status/1178903702519681024",
      "https://github.com/beeminder/beeminder/issues/819",
      "https://github.com/beeminder/road/commit/8375ff01c47040ee296a3f16e8cc09a76e0f1c06"],
"d": "2019-09-30",
"t": "2019-09-30",
"c": "HT Mary. Also applies to a (theoretical) RASH goal with a positive slope. #beebrain",
}, { // ------------------------------------------------------------------------
"x": "Additional very corner-casey #bugfix's to make the anticipated PPR always match what the actual PPR will be. Mainly do-less goals with zero rate.",
"u": ["https://twitter.com/beemuvi/status/1178904085078003712",
      "https://github.com/beeminder/road/commit/43751a51e4dc530b9365c4dd5a537a453e024cfa"],
"d": "2019-09-30",
"t": "2019-09-30",
}, { // ------------------------------------------------------------------------
"x": "The triangular presumptive datapoint as well as the last vertical segment of the purple steppy line are shown translucent/ghostily for anticipated PPRs",
"u": ["https://twitter.com/beemuvi/status/1178904222080749568",
      "https://github.com/beeminder/road/commit/6a0394436b30e7623c37a5579181984b46b92dc2"],
"d": "2019-09-30",
"t": "2019-09-30",
}, /* --------------------------------------------------------- end 2019sep */ ]

var batch2019oct = [{
"x": "We'd sometimes give a bad date (unixtime 0, 1969-12-31!) to all the datapoints we fetched when we did the initial fetch for brand new Todoist goals. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1179633217466290176",
      "https://github.com/beeminder/beeminder/pull/820",
      "https://github.com/beeminder/beeminder/issues/818"],
"d": "2019-09-28",
"t": "2019-10-02",
"c": "We think this had happened before once or twice, don't know why it suddenly started happening a lot this last week. Clutch fix Saturday morning; excitement!",
}, { // ------------------------------------------------------------------------
"x": "There were rare circumstances (due to recent changes with PPRs) that we would skip regenerating graphs when seeming no-op data was added. Now we don't. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1180093889866125312",
      "https://github.com/beeminder/beeminder/pull/824",
      "https://github.com/beeminder/beeminder/issues/823",
      "https://github.com/beeminder/beeminder/issues/296"],
"t": "2019-10-03",
"c": "Ie, always rebrain, including when data's added via the API. Issue 823 explains why this started mattering. Namely, adding a zero to a do-less with PPRs off used to be safe to not rebrain.",
}, { // ------------------------------------------------------------------------
"x": "One more #bugfix with how the graphs calculate PPRs: doing so the same way today as well as all future days. Also always say 0 safe days if derailed.",
"u": ["https://twitter.com/beemuvi/status/1180094017289084928",
      "https://github.com/beeminder/road/commit/0fdd868f83897e9139b0d4bceafcc11df09cb1d8",
      "https://github.com/beeminder/road/commit/9dde3ecc68e024e54fafc1c219fdf1bc10015aa8"],
"d": "2019-10-03",
"t": "2019-10-03",
"c": "We had the naive '2x daily rate' always applied for today and the sophisticated version that makes sure that's not negative, uses +2 if 0 rate, etc, for future days",
}, { // ------------------------------------------------------------------------
"x": "We put the red triangle marking derailments where the aggregated datapoint for that day goes instead of showing it at the worst point of the day",
"u": ["https://twitter.com/beemuvi/status/1183500350340251649",
      "https://github.com/beeminder/road/issues/59",
      "https://github.com/beeminder/road/commit/a293ec8b5367234f1e2dc88d0cc871340a992908"],
"d": "2019-10-10",
"t": "2019-10-13",
"c": "By dreev. To do this really right we need to compute the aggregated datapoint as of the 'RECOMMITTED' datapoint, when the derail happened. #beebrain",
}, { // ------------------------------------------------------------------------
"x": "Tiny #bugfix: more consistent ghosty triangles (only ever show it ghosty when there's actually an anticipated PPR shown)",
"u": ["https://twitter.com/beemuvi/status/1184018778952097792",
      "https://github.com/beeminder/road/commit/543c35e2684631333defe2e00c2c953fb998bc4c"],
"d": "2019-10-10",
"t": "2019-10-14",
}, { // ------------------------------------------------------------------------
"x": "Another Beebrain #bugfix: don't let the ghosty PPR datapoint go out of bounds of the graph, or rather, don't let the bounds of the graph not include the PPR",
"u": ["https://twitter.com/beemuvi/status/1184029962900131841",
      "https://github.com/beeminder/road/issues/88",
      "https://github.com/beeminder/road/commit/511a0c632757864a4a23516fa00a6ea2ebb4066f",
      "https://github.com/beeminder/road/commit/eb4131aa0af84fa8cd0f7234b5f11c7b39827e32"],
"d": "2019-10-10",
"t": "2019-10-14",
}, { // ------------------------------------------------------------------------
"x": "Fixed our avatar (Gravatar) default image to use https so browsers like Firefox don't give us an orange padlock icon as if we're not fully secure or something",
"u": ["https://twitter.com/beemuvi/status/1184368530638045184",
      "https://github.com/beeminder/beeminder/issues/839"],
"d": "2019-10-10",
"t": "2019-10-14",
"c": "HT @ShapeOfMatter",
}, { // ------------------------------------------------------------------------
"x": "For indecisive or curious folks: if you switched to old pledge schedule then back to new schedge, even if you asked for a $5 goal, you'd get a $1 goal. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1184644848986415105",
      "https://github.com/beeminder/beeminder/issues/837",
      "https://github.com/beeminder/beeminder/pull/843"],
"d": "2019-10-10",
"t": "2019-10-16",
"c": "Steps to reproduce: click 'use old schedule', then click it a second time to unselect, then finish up the goal with $5 initial pledge selected",
}, { // ------------------------------------------------------------------------
"x": "If you have Pessimistic Presumptive Reports (PPRs) turned off (they're always off for autodata goals) then we no longer show a ghosty PPR on the graph. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1184644931656118272",
      "https://github.com/beeminder/beeminder/commit/f22f42e320f1c52455517ce43866b60aa062e08a",
      "https://github.com/beeminder/beeminder/issues/817",
      "https://github.com/beeminder/beeminder/issues/823",
      "https://github.com/beeminder/beeminder/pull/828"],
"d": "2019-10-11",
"t": "2019-10-16",
"c": "In effect now that we send the 'ppr' field to Beebrain",
}, { // ------------------------------------------------------------------------
"x": "Our early Strava adopters had old-style tokens, which Strava just got rid of. We migrated your tokens to avoid downtime with your goals. Related: UVI#2842",
"u": ["https://twitter.com/beemuvi/status/1184645362713120768",
      "https://github.com/beeminder/beeminder/issues/793"],
"d": "2019-10-14",
"t": "2019-10-16",
"c": "And we emailed a few people who we couldn't seamlessly migrate. Also, we made a minor tweak to refreshing the oauth tokens, also storing expiry, for robustness. Maybe this point is unnecessary / uninteresting / infratastic?",
}, { // ------------------------------------------------------------------------
"x": "Updated the webcopy at the top of http://beeminder.com/changelog in light of the new dogfood world order. #mini",
"u": ["https://twitter.com/beemuvi/status/1184645492522676224",
      "https://github.com/beeminder/uvi/pull/44"],
"d": "2019-10-14",
"t": "2019-10-16",
}, { // ------------------------------------------------------------------------
"x": "The emails that give your delta w.r.t. the yellow brick road now mention your goal units, which is slightly clearer. #beebrain",
"u": ["https://twitter.com/beemuvi/status/1184645607509544960",
      "https://github.com/beeminder/road/commit/4887570f05620a4f30185e7e38628a47cb8a61b4"],
"d": "2019-10-15",
"t": "2019-10-16",
"c": "Updated the deltasum Beebrain output field which goal_mailer uses.",
}, { // ------------------------------------------------------------------------
"x": "We now warn you when removing an autodata service, like \"Are you sure? You have 2 active Withings goals. If you remove the service your goals may derail.\"",
"u": ["https://twitter.com/beemuvi/status/1184645768189108225",
      "https://github.com/beeminder/beeminder/issues/415",
      "https://github.com/beeminder/beeminder/pull/848"],
"d": "2019-10-16",
"t": "2019-10-16",
"c": "We already had a banner that would warn you if the service was disconnected but better to also warn when the user's doing the disconnecting",
}, { // ------------------------------------------------------------------------
"x": "Autodestructing PPRs now even more autodestructing: if you edit another datapoint's date to be the same as a PPR, the PPR self-destructs. HT @PhilipHellyer",
"u": ["https://twitter.com/beemuvi/status/1185089453510950914",
      "https://github.com/beeminder/beeminder/issues/420",
      "https://github.com/beeminder/beeminder/commit/8dd0e3ec9e5cd26438b255ae958e839c7ef8913a"],
"d": "2019-10-17",
"t": "2019-10-17",
}, { // ------------------------------------------------------------------------
"x": "If you tried to unset mercy days (clear the field and then submit the form) we'd give a 500 error. Now you get a nice error that it has to be a number. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1185236066288070656",
      "https://github.com/beeminder/beeminder/pull/860",
      "https://github.com/beeminder/beeminder/issues/469",
      "https://github.com/beeminder/beeminder/commit/62866a3cf87e158ac673e67a1ebca5a15fdef9bd"],
"d": "2019-10-17",
"t": "2019-10-17",
"c": "Specifically: 'Days of Mercy must in the range 0-30', same as it says for an out of range number",
}, { // ------------------------------------------------------------------------
"x": "Per http://blog.beeminder.com/dogfood , we've listed \"A chance to win our derailment charges\" as a premium perk at http://beeminder.com/premium",
"u": ["https://twitter.com/beemuvi/status/1185443973738840064",
      "https://github.com/beeminder/beeminder/issues/862",
      "https://github.com/beeminder/beeminder/pull/863"],
"d": "2019-10-18",
"t": "2019-10-18",
}, { // ------------------------------------------------------------------------
"x": "Do-less retroratchet could derail you when there was an upcoming rate change scheduled in your road! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1186548775998767104",
      "https://github.com/beeminder/beeminder/issues/868",
      "https://github.com/beeminder/beeminder/pull/869"],
"d": "2019-10-21",
"t": "2019-10-21",
"c": "Because the automatic road adjustment would retroactively apply that final (i.e., after-change) road rate to the section before your ratchet",
}, { // ------------------------------------------------------------------------
"x": "Hashtags (cf UVI#2787) can now have unicode characters",
"u": ["https://twitter.com/beemuvi/status/1187273027001536512",
      "https://github.com/beeminder/road/issues/89"],
"d": "2019-10-21",
"t": "2019-10-21",
}, { // ------------------------------------------------------------------------
"x": "We added gunits (goal units), hhmmformat (timey-wimey), and todayta (data entered today) fields to the API and updated http://beeminder.com/api",
"u": ["https://twitter.com/beemuvi/status/1187273128256266240",
      "https://github.com/beeminder/beeminder/pull/865"],
"d": "2019-10-22",
"t": "2019-10-22",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "Oops, Stripe gives us amounts in cents instead of dollars and our CSV export of charges was inconsistent. Fixed with division technology. #bugfix HT phi",
"u": ["https://twitter.com/beemuvi/status/1187273295164346368",
      "https://github.com/beeminder/beeminder/issues/872",
      "https://forum.beeminder.com/t/some-long-standing-bugs-i-would-like-to-see-resolved/5921/7?u=dreev"],
"d": "2019-10-23",
"t": "2019-10-23",
}, { // ------------------------------------------------------------------------
"x": "We now prevent the creation of charges (via IFTTT or the API) that are less than $1 since those would fail anyway due to technical limitations of credit cards",
"u": ["https://twitter.com/beemuvi/status/1189280912657309696",
      "https://github.com/beeminder/beeminder/pull/874"],
"d": "2019-10-23",
"t": "2019-10-29",
}, { // ------------------------------------------------------------------------
"x": "The alert email we send if you create an invalid charge with our IFTTT channel now includes the (new) error message telling you that charges must be >= $1",
"u": ["https://twitter.com/beemuvi/status/1189281035839770630",
      "https://github.com/beeminder/beeminder/pull/878"],
"d": "2019-10-24",
"t": "2019-10-29",
}, { // ------------------------------------------------------------------------
"x": "Sneak peek of Yellow Brick Half-Plane visuals: daily beemail subscribers with zero-width custom goals can now check the YBHP box to see colored regions",
"u": ["https://twitter.com/beemuvi/status/1189281127107891205",
      "https://github.com/beeminder/beeminder/pull/884",
      "https://github.com/beeminder/beeminder/commit/e24f00c0d40f6be31af8887588f2f61ca9268145"],
"d": "2019-10-25",
"t": "2019-10-29",
}, { // ------------------------------------------------------------------------
"x": "We no longer suppress zeno alerts for do-zero (do-less with flat slope) goals. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1189281225921515522",
      "https://github.com/beeminder/beeminder/issues/870",
      "https://github.com/beeminder/beeminder/pull/873"],
"d": "2019-10-23",
"t": "2019-10-29",
"c": "This is related to the new Beebrain ghosty PPRs (UVI#3147-UVI#3162) but the suppression was happening all along (unless you were actually on the wrong side of the flat road).",
}, { // ------------------------------------------------------------------------
"x": "We would sometimes needlessly repeat a Duolingo autodata datapoint even when your XP hadn't changed. Now we don't. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1189281298923315206",
      "https://github.com/beeminder/beeminder/issues/891"],
"d": "2019-10-28",
"t": "2019-10-29",
"c": "This was because the internal sorting we used for datapoints was not by ID so we when checking the last datapoint we'd sometimes get something that wasn't actually the last datapoint.",
}, { // ------------------------------------------------------------------------
"x": "We now remember the sort you had picked for datapoints last time you were on the data tab and restore it when you come back",
"u": ["https://twitter.com/beemuvi/status/1191477802647736321",
      "https://github.com/beeminder/beeminder/issues/791"],
"d": "2019-10-30",
"t": "2019-11-04",
}, { // ------------------------------------------------------------------------
"x": "We now show the arrow indicator on Date Entered on the data tab when you first load the page. #bugfix #mini",
"u": ["https://twitter.com/beemuvi/status/1191478000421752832",
      "https://github.com/beeminder/beeminder/issues/791"],
"d": "2019-10-30",
"t": "2019-11-04",
"c": "We defaulted to sorting by Date Entered all along but only indicated that with the little arrow if you explicitly clicked on it",
}, { // ------------------------------------------------------------------------
"x": "Ascending/descending-ness of data sorting is no longer wonky/confusing: only toggle it if you click the header twice in a row, not for switching columns!",
"u": ["https://twitter.com/beemuvi/status/1191478206466904064",
      "https://github.com/beeminder/beeminder/issues/791"],
"d": "2019-10-30",
"t": "2019-11-04",
}, { // ------------------------------------------------------------------------
"x": "We weren't defaulting to descending order for dates the first time you clicked a column on the Data tab. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1191478390303293440",
      "https://github.com/beeminder/beeminder/issues/791"],
"d": "2019-10-30",
"t": "2019-11-04",
}, { // ------------------------------------------------------------------------
"x": "Submitting a datapoint to the API w/ a bad timestamp now gives a helpful error (\"did you give us milliseconds instead of seconds?\") instead of barfing. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1191750163217313792",
      "https://github.com/beeminder/beeminder/pull/902",
      "https://github.com/beeminder/beeminder/issues/897"],
"d": "2019-10-30",
"t": "2019-11-05",
"c": "Previously we would create the datapoint, and then choke on our own vomit.",
}, /* --------------------------------------------------------- end 2019oct */ ]


var batch2019nov = [{
"x": "Project Euler integration #bugfix: we weren't sending the reminder emails for Project Euler goals (fixed before public launch)",
"u": ["https://twitter.com/beemuvi/status/1191882388114038785",
      "https://github.com/beeminder/beeminder/issues/879"],
"d": "2019-10-24",
"t": "2019-11-05",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Project Euler integration is official! (Added to the front page gallery, etc, not to mention blogging about it.)",
"u": ["https://twitter.com/beemuvi/status/1191882548852359168",
      "https://blog.beeminder.com/projecteuler/",
      "https://github.com/beeminder/beeminder/pull/816"],
"t": "2019-11-05",
}, { // ------------------------------------------------------------------------
"x": "If all your goals are private we now say \"no public goals\" on your gallery page instead of just \"no goals\". HT @chriswaterguy",
"u": ["https://twitter.com/beemuvi/status/1192541786708692992",
      "https://twitter.com/chriswaterguy/status/1189663536143724544",
      "https://github.com/beeminder/beeminder/pull/916"],
"d": "2019-11-05",
"t": "2019-11-07",
}, { // ------------------------------------------------------------------------
"x": "Scheduling a break was causing \"duplicate road row\" errors around Daylight Savings Time. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1192542386691293184",
      "https://github.com/beeminder/beeminder/pull/914"],
"d": "2019-11-07",
"c": "We now de-dup the road as a final cleanup step when scheduling a break",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2019nov */ ]

  
var staged = [ {
}, { // ------------------------------------------------------------------------
"x": "Grammatical #bugfix: Say \"This goal gets its data automatically from the API\" instead of \"...from API\"",
"u": [
      "https://github.com/beeminder/beeminder/issues/918",
      "https://github.com/beeminder/beeminder/pull/919",
      "https://forum.beeminder.com/t/grammar-of-describtion-for-goals-without-manual-data-entry/5969/1"],
"d": "2019-11-07",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Version 5.5 of the Beeminder iOS app!",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]

/*********************************************************************************************************************************************************************
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
remove protocol & add trailing space to sms alert
"u": [
      "https://github.com/beeminder/beeminder/commit/63b192da1d1a84191d0bc77b2b19afecfe3e9d2d",
      "https://github.com/beeminder/beeminder/issues/780"],
"d": "2019-11-07",
}, { // ------------------------------------------------------------------------
CORS POLICY (not ready to be merged yet)
https://github.com/beeminder/beeminder/commit/72c36fc6cad02442ee2fd0b62888a015346a0a25
https://github.com/beeminder/beeminder/pull/906
https://github.com/beeminder/beeminder/issues/895
https://forum.beeminder.com/t/cors-support-and-workarounds/5935
https://github.com/beeminder/beeminder/pull/899
Date: 2019-10-29 (Tue)
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
BeemiOS 5.5 is in the app store; has the (hopefully final) fix for intermittently disappearing goals (née Nick Winter bug), fixes for Dark Mode so you can actually use the app if you have that enabled, and a couple other small things that iOS changed out from under us in 13.0 that made things weird
"d": "2019-11-06",
}, { // ------------------------------------------------------------------------
beebrain hashtags accept underscores again
https://github.com/beeminder/road/commit/8d336ac39b84efd2cdd5ecc29c2e5c472d268d4f
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Show Project Euler in goal creation & supported list",
"u": ["https://github.com/beeminder/beeminder/pull/816"],
"d": "2019-09-27",

(the pull request includes the following commits)
show PE in goal creation: "https://github.com/beeminder/beeminder/commit/e885ab199751eed5fc2be9d0e52a4ede33a93de2"
and supported list:       "https://github.com/beeminder/beeminder/commit/52f537febd03f9052a8be60dc2e5020112e65663"
cleanup exceptions:       "https://github.com/beeminder/beeminder/commit/d473752b4af1285f42a8456f5657f4a5a6f6f0d1"

"author": "adamwolf"
}, { // ------------------------------------------------------------------------
project euler improvements (fixed an airhorn which was caused by.. [adam wolf? was this user visible? maybe not?])
https://github.com/beeminder/beeminder/issues/879
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
https://github.com/beeminder/BeeSwift/pull/21
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
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