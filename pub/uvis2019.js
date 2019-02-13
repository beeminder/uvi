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
}, { // ------------------------------------------------------------------------
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2019feb */ ]


var staged = [ { // note: sub-UVIs not allowed here in staging
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
after new beedroid: help page for android persistent notification
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
nokia back to withings?
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
wakatime integration?
}, { // ------------------------------------------------------------------------
project euler integration?
}, { // ------------------------------------------------------------------------
two-red-days-in-a-row bug:
offred bb param: https://github.com/beeminder/beeminder/commit/bff8c9f382c83458b94a3e3b4c162e2ace444215
}, { // ------------------------------------------------------------------------
~~~~~~----------------------------- CANDIDATES -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
TODO: title vs description crap in api docs
}, { // ------------------------------------------------------------------------
MINIS:
* maybe doesn't count, was workaround for yellatme bug: Fixed the email signatures in support emails to start with "--"
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
5. wording: "adjust the safety buffer"
6. proper buttons on the blog like at the end of blog.beeminder.com/strava
7. strava activity links on the datapoints page <= do that too for IFTTT and runkeeper where we get an event/recipe URI from the service
~~~~~~-------------------- TOO LATE / TOO LAME -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
* milk static-401 for more uvis? 
  - fixing/obviating the banner bug
  - make it all work the same via the API
* fixed some (most? many?) of the thing where flash banner shows up again after you leave current page & go to another page [maybe mostly only happens for admins?]
* Vimium users can now jump to the goals on the dashboard with hotkeys.
  We have no idea why this got better so we probably can't use it without corroboration that this is a genuine improvement! something about octicons apparently?
* max-height for the landing page images, same commit url as an old one above about runkeeper:
  https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3
*********************************************************************************************************************************************************************/

/* CHECKLIST FOR TWEETING UVIS
1. Compose the JSON at the bottom of pub/uvis2019.js
2. Copy to Twitter and tweet it
3. Paste the URL of the tweet into the JSON
4. Update Beeminder
5. Double check that the total number of tweets for @beemuvi matches the total at beeminder.com/changelog
*/
