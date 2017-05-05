var batch2011feb = [{
"n": 1,
"x": "Created <a href=\"http://twitter.com/beemuvi\" title=\"@beemuvi is just for tweeting UVIs; Beeminder's main Twitter account is @bmndr\">this twitter acct</a> to log user-visible improvements (UVIs) to Beeminder. (Yes, this is a UVI. Everything counts no matter how small!)",
"d": "2011-02-20",
"t": "2011-02-20", // "2011-02-20 19:14:06 +0000",
"u": "https://twitter.com/beemuvi/status/39402430655373312",
"c": "Very first UVI! Back then this counted but nowadays we don't count things that are too ancillary like making Twitter accounts or writing blog posts. We did count a few UVIs for creating this fancy changelog but decided that's too ancillary now too.",
}, { // ------------------------------------------------------------------------
"x" : "Added ridiculous dog-dressed-as-a-bee picture. Yes, \"improvement\" is allowed to be in big fat scare quotes.",
"u" : "https://twitter.com/beemuvi/status/39405230130991104",
"t" : "2011-02-20 19:25:13 +0000",
}, { // ------------------------------------------------------------------------
"x" : "Now suppressing reminder emails if you already entered something. (If buggy the bug fixes also count as UVIs! Purposefully super generous.)",
"u" : "https://twitter.com/beemuvi/status/39410628175200256",
"t" : "2011-02-20 19:46:40 +0000",
}, { // ------------------------------------------------------------------------
"x" : "As predicted: bug fix! Suppressed oversuppressing of reminder emails.",
"u" : "https://twitter.com/beemuvi/status/39442308222943232",
"t" : "2011-02-20 21:52:33 +0000",
}, { // ------------------------------------------------------------------------
"x" : "Set up http://bmndr.com/meta/uvi to force ourselves to average at least 1 user-visible improvement (UVI) per day (certain exemptions apply).",
"u" : "https://twitter.com/beemuvi/status/39739599475576832",
"t" : "2011-02-21 17:33:53 +0000",
}, { // ------------------------------------------------------------------------
"x" : "Rudimentary stats at bottom of graph pages.",
"u" : "https://twitter.com/beemuvi/status/40267278511648768",
"t" : "2011-02-23 04:30:41 +0000",
}, { // ------------------------------------------------------------------------
"x" : "Add \".json\" to your graph URL to get graph params & output as JSON. Eg http://bmndr.com/d/meta.json (will work after your next datapoint)",
"u" : "https://twitter.com/beemuvi/status/40656544131457024",
"t" : "2011-02-24 06:17:30 +0000",
}, { // ------------------------------------------------------------------------
"x" : "JSON output has timestamps in unixtime. (Plus introduced and then fixed a bug; not sure if we should count that.)",
"u" : "https://twitter.com/beemuvi/status/41138773358149632",
"t" : "2011-02-25 14:13:42 +0000",
}, { // ------------------------------------------------------------------------
"x" : "Check out the stats at the bottom of your graph page now; much nicer!",
"u" : "https://twitter.com/beemuvi/status/41201736186216448",
"t" : "2011-02-25 18:23:54 +0000",
}, { // ------------------------------------------------------------------------
"x" : "Made all rates consistently use the specified units in the JSON output.",
"u" : "https://twitter.com/beemuvi/status/41201771376418816",
"t" : "2011-02-25 18:24:02 +0000",
}]

var batch2011mar = [{
"n": 11,
"x": "Negative rates are no longer confusingly listed in the wrong order in the stats at the bottom of graphs.",
"u": "https://twitter.com/beemuvi/status/42701921961787392",
"t": "2011-03-01 21:45:06 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT @bmndr: New guest blog post by @kbmcgowan on Food Habits: http://blog.beeminder.com/foodhabits",
"u": "https://twitter.com/bmndr/status/42716792887590912",
"t": "2011-03-01 22:44:11 +0000",
"c": "Note from the future: Kevin's Twitter handle was KevinBMcGowan back then. Also from the future: we don't count blog posts as UVIs anymore.",
}, { // ------------------------------------------------------------------------
"x": "Bug fix in stats for flat roads.",
"u": "https://twitter.com/beemuvi/status/43589293670805504",
"t": "2011-03-04 08:31:12 +0000",
}, { // ------------------------------------------------------------------------
"x": "Cheapo bug fix for erroneous quoting of number of safety buffer days for weight loss graphs.",
"u": "https://twitter.com/beemuvi/status/43592281973981185",
"t": "2011-03-04 08:43:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Bugfix: Response emails were accidentally off the past couple days; fixed now. Thanks to user http://bmndr.com/laur for alerting us!",
"u": "https://twitter.com/beemuvi/status/43860139542986753",
"t": "2011-03-05 02:27:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "More useful subject lines in the response emails, like \"wrong lane!\" or whatnot.",
"u": "https://twitter.com/beemuvi/status/43948881972695040",
"t": "2011-03-05 08:20:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Clearer/conciser stats at bottom of graph pages. (Will take effect when you enter your next datapoint.) Progress, rate, lane, delta.",
"u": "https://twitter.com/beemuvi/status/43956886868996096",
"t": "2011-03-05 08:51:53 +0000",
}, { // ------------------------------------------------------------------------
"x": "Better handling of significant digits when displaying numbers. Cf http://stackoverflow.com/q/5208663",
"u": "https://twitter.com/beemuvi/status/44344772067999744",
"t": "2011-03-06 10:33:12 +0000",
}, { // ------------------------------------------------------------------------
"x": "In stats, we now display initial datapoint instead of start of YBR (typically the same for weight loss graphs but was confusing otherwise).",
"u": "https://twitter.com/beemuvi/status/44347748111228930",
"t": "2011-03-06 10:45:01 +0000",
}, { // ------------------------------------------------------------------------
"u": "https://twitter.com/dreev/status/44713552317132800",
"x": "RT @dreev: TimePie is now TagTime and is on github http://tagti.me @tagtm",
"t": "2011-03-07 10:58:36 +0000",
"c": "Note from the future: We finally got the tagtime.com domain on 2017-04-19, 6 years later"
}, { // ------------------------------------------------------------------------
"x": "Beeminder graphs should now always update within 5 minutes of stepping on your Withings scale.",
"u": "https://twitter.com/beemuvi/status/45019699121106946",
"t": "2011-03-08 07:15:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT @bmndr: Little Debbie Does Dog Food: http://blog.beeminder.com/lildeb",
"u": "https://twitter.com/bmndr/status/45699837148147712",
"t": "2011-03-10 04:17:44 +0000",
}, { // ------------------------------------------------------------------------
"x": "Reformatted reeminder emails and fixed resultant bug with bot response parsing.",
"u": "https://twitter.com/beemuvi/status/46036994433892352",
"t": "2011-03-11 02:37:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "Subtle bug fix: JSON output now properly escaping quotes. Eg, http://bmndr.com/jill/weight.json",
"u": "https://twitter.com/beemuvi/status/46313959162253312",
"t": "2011-03-11 20:58:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "Graphs w/ ztoday (\"zero today\") true will autoupdate daily. So reported safety buffer never stale. Eg, http://bmndr.com/brainshell",
"u": "https://twitter.com/beemuvi/status/46342465690681344",
"t": "2011-03-11 22:51:19 +0000",
}, { // ------------------------------------------------------------------------
"x": "Now using Disqus for comments on the blog. http://blog.beeminder.com",
"u": "https://twitter.com/beemuvi/status/47972153051709441",
"t": "2011-03-16 10:47:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Embarrassing bug fix: email address no longer accessible from JSON output! Eg, http://bmndr.com/d/sugar.json",
"u": "https://twitter.com/beemuvi/status/48311424581238784",
"t": "2011-03-17 09:15:15 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a weird bug caused by some interaction of Disqus and WordPress where you couldn't click on any links in Firefox. http://blog.beeminder.com",
"u": "https://twitter.com/beemuvi/status/49040624309121024",
"t": "2011-03-19 09:32:50 +0000",
}, { // ------------------------------------------------------------------------
"x": "http://blog.beeminder.com now renders properly on ipad. CSS bug fix by @thatgirl.",
"u": "https://twitter.com/beemuvi/status/49918809242468352",
"t": "2011-03-21 19:42:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT @bmndr: How to force yourself to not waste money on a long-term gym membership: http://blog.beeminder.com/gym (guest post by Jill Renaud)",
"u": "https://twitter.com/bmndr/status/50012175a175135232",
"t": "2011-03-22 01:53:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "What you're risking now shows up in the header of your graph page. E.g., Jill's gym goal: http://bmndr.com/jill/gym",
"u": "https://twitter.com/beemuvi/status/50309281530134528",
"t": "2011-03-22 21:34:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed wrapping weirdness in the headers. CSS tweaking by @thatgirl.",
"u": "https://twitter.com/beemuvi/status/50413925971406848",
"t": "2011-03-23 04:29:51 +0000",
}, { // ------------------------------------------------------------------------
"x": "The headers of graph pages now tell you where you are with respect to the yellow brick road.",
"u": "https://twitter.com/beemuvi/status/50887352347934721",
"t": "2011-03-24 11:51:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Html titles (the mouseover text for the tab or in the browser's title bar) now doesn't try to show html tags. Eg http://bmndr.com/d/tt",
"u": "https://twitter.com/beemuvi/status/51718899271598080",
"t": "2011-03-26 18:55:21 +0000",
}, { // ------------------------------------------------------------------------
"x": "For graphs that include a moving average, it's now exponentially smoothed with smoothing constant .1 a la http://dreev.es/hackdiet",
"u": "https://twitter.com/beemuvi/status/51918487756603392",
"t": "2011-03-27 08:08:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mouseovers for the thumbnails in galleries now say where you are with respect to the yellow brick road.",
"u": "https://twitter.com/beemuvi/status/52263862224945152",
"t": "2011-03-28 07:00:50 +0000",
}, { // ------------------------------------------------------------------------
"x": "And lane number in parens. Lane -1 is bottom lane, +1 the top, +n is n lane-widths above the road, etc which is generally safety buffer days",
"u": "https://twitter.com/beemuvi/status/52266954534305792",
"t": "2011-03-28 07:13:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Distance from yellow brick road should now always display as 0 instead of like 0.0000000000000023.",
"u": "https://twitter.com/beemuvi/status/52463198087024640",
"t": "2011-03-28 20:12:55 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a tiny inconsistency in the layout of the navigation bar on personal gallery pages like http://bmndr.com/bd thanks to @thatgirl.",
"u": "https://twitter.com/beemuvi/status/52575318518665216",
"t": "2011-03-29 03:38:27 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT @bmndr: Productivity hack: The sedimentary filing system. http://blog.beeminder.com/sediment \"My sediments exactly!\" -- @thatgirl",
"u": "https://twitter.com/beemuvi/status/53655142624530432",
"t": "2011-04-01 03:08:47 +0000",
"c": "Note from the future: Blog posts don't count as UVIs anymore, especially not this one which doesn't even have anything to do with Beeminder (rolls eyes at past selves)",
}]

// TODO: fill in missing batches here

var batch2017apr = [{
"n": 2241,
"f": true,
"x": "We upgraded our database and got graph regeneration times back down to ~5s. Phew! Now we may <a href=\"http://forum.beeminder.com/t/februarys-annoyingness-straw-poll/2995\" title=\"Forum post with our Annoyingness Straw Poll\">have to work on mass-editing of goals</a>",
"u": "https://twitter.com/beemuvi/status/849045469703528449",
}, { // ------------------------------------------------------------------------
"x": "We changed the smoothing constant for the purple line from .1 to .25. (<a href=\"http://forum.beeminder.com/t/any-way-to-control-exponential-moving-average-history/2938/7?u=dreev\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/849409757672812544",
}, { // ------------------------------------------------------------------------
"x": "We made a proper landing page for URLminder: http://beeminder.com/urlminder",
"u": "https://twitter.com/beemuvi/status/849771908128161793",
}, { // ------------------------------------------------------------------------
"x": "We now always fix Dropbox and Google Docs links when you add/edit them in Settings, not just when first creating the goal.",
"u": "https://twitter.com/beemuvi/status/849771959273443328",
}, { // ------------------------------------------------------------------------
"x": "Goals created via <a href=\"http://beemind.me\">Beemind.me</a> now act like proper autodata goals and magically fetch data before zeno'ing instead of just hourly!",
"u": "https://twitter.com/beemuvi/status/850135561683652608",
}, { // ------------------------------------------------------------------------
"x": "Our Twitter hashtag-minding integration was case-sensitive with the hashtags but Twitter search results aren't so now we're not either!",
"u": "https://twitter.com/beemuvi/status/850483794507255808",
}, { // ------------------------------------------------------------------------
"x": "We now allow dots in the names you give 3rd-party apps that use the Beeminder API, and we no longer let you change those names! #consistency",
"u": "https://twitter.com/beemuvi/status/850484164356841472",
}, { // ------------------------------------------------------------------------
"x": "We added a link to our newbee-friendly blog post about beeminding writing to the <a href=\"http://beeminder.com/urlminder\">URLminder landing page</a>. #mini",
"u": "https://twitter.com/beemuvi/status/850484239959076864",
}, { // ------------------------------------------------------------------------
"x": "Fixed our redirect from beeminder.com/services to point to https://www.beeminder.com/settings/account#account-permissions #mini",
"u": "https://twitter.com/beemuvi/status/850484557644087296",
}, { // ------------------------------------------------------------------------
"x": "Simplified http://forum.beeminder.com header, added an infinibee linking to Beeminder. (other improvements purely from Discourse don't count)",
"u": "https://twitter.com/beemuvi/status/852306113424801792",
}, { // ------------------------------------------------------------------------
"x": "Fixed a typo and added an FAQ item to http://beeminder.com/premium about the SMS bot being US-only #mini",
"u": "https://twitter.com/beemuvi/status/852307170427191297",
}, { // ------------------------------------------------------------------------
"x": "Also we now link to the FAQ item about SMS being US-only in the actual SMS settings, something we lost in the #redesign",
"u": "https://twitter.com/beemuvi/status/852317002890792961",
}, { // ------------------------------------------------------------------------
"x": "Closing another loophole: we now don't let you delete a goal that has a pending charge",
"u": "https://twitter.com/beemuvi/status/853029611386552321",
}, { // ------------------------------------------------------------------------
"x": "Also closed loophole where if you archived a goal and the archive took effect after derailing but before charging you, we wouldn't charge you",
"u": "https://twitter.com/beemuvi/status/853029721499590656",
}, { // ------------------------------------------------------------------------
"x": "And to minimize surprises, when you insta-archive a goal after derailing we warn you if there's a pending charge that'll still happen",
"u": "https://twitter.com/beemuvi/status/854120852920516609",
}, { // ------------------------------------------------------------------------
"x": "Safety buffer auto-trimming for do-less now asks for how much buffer you want in terms of, eg, cups of coffee (not days like do-more). #mini",
"u": "https://twitter.com/beemuvi/status/854457099840921600",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Big API improvement! 3rd-party apps can specify an autofetch callback so Beeminder tells them when to autofetch instead of polling",
"u": "https://twitter.com/beemuvi/status/854829206009593856",
}, { // ------------------------------------------------------------------------
"x": "Added documentation of the autofetch callback URL in beeminder.com/api (grep \"autofetch\") plus some other API docs cleanup",
"u": "https://twitter.com/beemuvi/status/854829557307719680",
}, { // ------------------------------------------------------------------------
"x": "And we now link nicely to the docs from beeminder.com/apps/new (milking this for 3 UVIs but it's a big deal guys!!)",
"u": "https://twitter.com/beemuvi/status/854829661095723008",
}, { // ------------------------------------------------------------------------
"x": "Another improvement for 3rd-party apps: you can explicitly register your app as the datasource for any goal. http://blog.beeminder.com/autofetch",
"u": "https://twitter.com/beemuvi/status/855528876302192640",
}, { // ------------------------------------------------------------------------
"n": 2261,
"f": true,
"x": "beeminder.com/changelog now points to an archive of all 2261 (as of this one) Beeminder UVIs!",
"u": "https://twitter.com/beemuvi/status/855570654602473476", // TODO: figure out why Twitter thinks it's just 2259 as of this one
"d": "2017-04-21",
}, { // ------------------------------------------------------------------------
"x": "A bunch of improvements to the styling, layout, and webcopy for beeminder.com/changelog -- it's almost pretty now, at least up to mid-2016",
"u": "https://twitter.com/beemuvi/status/856657403521126400",
"d": "2017-04-24",
}, { // ------------------------------------------------------------------------
"x": "Prettified the rest of beeminder.com/changelog and made http://beeminder.com/changelog#latest link to the bottom of the page",
"u": "https://twitter.com/beemuvi/status/857019759874850817",
"d": "2017-04-25",
"c": "Got rid of all the stuff dumped between <pre> tags",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the road editor that rejected the road if you got rid of everything except the start and end. #bugfix (<a href=\"https://trello.com/c/cnLvtiu5/818-road-editor-bug-removing-flat-spot\">Trello card</a>)",
"d": "2017-04-25",
"t": "2017-04-26",
"u": "https://twitter.com/beemuvi/status/857380213944066049",
"c": "JSON formatting error made us reject empty roads (i.e. only the initial & final rows)",
}, { // ------------------------------------------------------------------------
"x": "And a different road editor bug that made us reject most changes to the road for do-less goals. #bugfix (<a href=\"http://forum.beeminder.com/t/code-that-enforces-akrasia-horizon/3133/6?u=dreev\">forum thread</a>)",
"d": "2017-04-25",
"t": "2017-04-26",
"u": "https://twitter.com/beemuvi/status/857380935414595584",
"c": "The sadedgy parameter which we used to set on do-less goals made the user-set vini disagree with the Beebrain-computed vini. Possibly this only mattered for newish do-less goals? Like if the goal had ever derailed the vini thing might not really matter?",
}, { // ------------------------------------------------------------------------
"x": "The <a href=\"http://beeminder.com/api\">API</a> now returns the user-specified fine print for goals. (<a href=\"http://forum.beeminder.com/t/title-description-fields-returned-by-api-get-goal-request/3153\">forum thread</a>)",
"d": "2017-04-27",
"u": "https://twitter.com/beemuvi/status/857737322208444417",
"c": "HT Andy and Bee and user zzap",
}, { // ------------------------------------------------------------------------
"x": "Removed the deprecated 'edgy' parameter from the API docs and stopped setting it for all new goals",
"d": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858095193718796288",
}, { // ------------------------------------------------------------------------
"n": 2268,
"x": "Changed countdown format to be like \"1h 30m 59s\" (makes the difference from time-of-day more obvious) & no seconds if 2 or more days left",
"d": "2017-04-28",
"t": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858095475467079681",
}, { // ------------------------------------------------------------------------
"n": 2269,
"x": "Changed default format for time-to-derailment on dashboard to day/date instead of countdown; lots of simultaneous countdowns is nerveracking",
"d": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858098808311357441",
}]

var batch2017may = [ {
"n": 2270,
"x": "Fixed broken image for blog post on front page; trimmed whitespace when not displaying seconds; fixed formatting bug in API docs. #mini ×3",
"t": "2017-05-02",
"u": "https://twitter.com/beemuvi/status/859557387643961345",
"c": "We can't figuring out what that formatting bug actually was from looking at the commit so hopefully that's not lies. Fortunately it's a 3-for-1 UVI so there's an error margin!",
}, { // ------------------------------------------------------------------------
"n": 2271,
"x": "We were failing to update Todoist goals if you deleted the parent project of a project you had Beeminder tracking. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918078896783360",
"d": "2017-04-28",
"t": "2017-05-03",
}, { // ------------------------------------------------------------------------
"x": "If you (ie, a 3rd-party app developer) tried to set your app as the datasource for a goal we were giving a 500 error. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918808428855296",
"d": "2017-05-01",
"t": "2017-05-03",
"c": "Thanks Sergii Kalinchuk",
}]

/*
STAGED: ------10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
}, { // ------------------------------------------------------------------------
CANDIDATES: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
"x": "[We made dashboard sorting always pick the sensible order (increasing time to derailment, decreasing pledge, etc).] [not merged yet]",
*/
