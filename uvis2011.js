batches['2011feb'] = [{
"x": "Created <a href=\"http://twitter.com/beemuvi\" title=\"@beemuvi is just for tweeting UVIs; Beeminder's main Twitter account is @bmndr\">this twitter acct</a> to log user-visible improvements (UVIs) to Beeminder. (Yes, this is a UVI. Everything counts no matter how small!)",
"d": "2011-02-20",
"e": "2011-02-20", // "2011-02-20 19:14:06 +0000",
"l": "https://twitter.com/beemuvi/status/39402430655373312",
"s": "Very first UVI! Back then this counted but nowadays we don't count things that are too ancillary like making Twitter accounts or writing blog posts. We did count a few UVIs for creating this fancy changelog but decided that's too ancillary now too.",
}, { // ------------------------------------------------------------------------
"x": "Added ridiculous dog-dressed-as-a-bee picture. Yes, \"improvement\" is allowed to be in big fat scare quotes.",
"l": "https://twitter.com/beemuvi/status/39405230130991104",
"e": "2011-02-20 19:25:13 +0000",
}, { // ------------------------------------------------------------------------
"x": "Now suppressing reminder emails if you already entered something. (If buggy the bug fixes also count as UVIs! Purposefully super generous.)",
"l": "https://twitter.com/beemuvi/status/39410628175200256",
"e": "2011-02-20 19:46:40 +0000",
}, { // ------------------------------------------------------------------------
"x": "As predicted: bug fix! Suppressed oversuppressing of reminder emails.",
"l": "https://twitter.com/beemuvi/status/39442308222943232",
"e": "2011-02-20 21:52:33 +0000",
}, { // ------------------------------------------------------------------------
"x": "Set up http://bmndr.com/meta/uvi to force ourselves to average at least 1 user-visible improvement (UVI) per day (certain exemptions apply).",
"l": "https://twitter.com/beemuvi/status/39739599475576832",
"e": "2011-02-21 17:33:53 +0000",
}, { // ------------------------------------------------------------------------
"x": "Rudimentary stats at bottom of graph pages.",
"l": "https://twitter.com/beemuvi/status/40267278511648768",
"e": "2011-02-23 04:30:41 +0000",
}, { // ------------------------------------------------------------------------
"x": "Add \".json\" to your graph URL to get graph params & output as JSON. Eg http://bmndr.com/d/meta.json (will work after your next datapoint)",
"l": "https://twitter.com/beemuvi/status/40656544131457024",
"e": "2011-02-24 06:17:30 +0000",
}, { // ------------------------------------------------------------------------
"x": "JSON output has timestamps in unixtime. (Plus introduced and then fixed a bug; not sure if we should count that.)",
"l": "https://twitter.com/beemuvi/status/41138773358149632",
"e": "2011-02-25 14:13:42 +0000",
}, { // ------------------------------------------------------------------------
"x": "Check out the stats at the bottom of your graph page now; much nicer!",
"l": "https://twitter.com/beemuvi/status/41201736186216448",
"e": "2011-02-25 18:23:54 +0000",
}, { // ------------------------------------------------------------------------
"x": "Made all rates consistently use the specified units in the JSON output.",
"l": "https://twitter.com/beemuvi/status/41201771376418816",
"e": "2011-02-25 18:24:02 +0000",
} /* ---------------------------------------------------------- end 2011feb */ ]

batches['2011mar'] = [{
"x": "Negative rates are no longer confusingly listed in the wrong order in the stats at the bottom of graphs.",
"l": "https://twitter.com/beemuvi/status/42701921961787392",
"e": "2011-03-01 21:45:06 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: New guest blog post by @kbmcgowan on Food Habits: http://blog.beeminder.com/foodhabits",
"l": "https://twitter.com/bmndr/status/42716792887590912",
"e": "2011-03-01 22:44:11 +0000",
"s": "Note from the future: Kevin's Twitter handle was KevinBMcGowan back then. Also from the future: we don't count blog posts as UVIs anymore.",
}, { // ------------------------------------------------------------------------
"x": "Bug fix in stats for flat roads.",
"l": "https://twitter.com/beemuvi/status/43589293670805504",
"e": "2011-03-04 08:31:12 +0000",
}, { // ------------------------------------------------------------------------
"x": "Cheapo bug fix for erroneous quoting of number of safety buffer days for weight loss graphs.",
"l": "https://twitter.com/beemuvi/status/43592281973981185",
"e": "2011-03-04 08:43:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Bugfix: Response emails were accidentally off the past couple days; fixed now. Thanks to user http://bmndr.com/laur for alerting us!",
"l": "https://twitter.com/beemuvi/status/43860139542986753",
"e": "2011-03-05 02:27:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "More useful subject lines in the response emails, like \"wrong lane!\" or whatnot.",
"l": "https://twitter.com/beemuvi/status/43948881972695040",
"e": "2011-03-05 08:20:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Clearer/conciser stats at bottom of graph pages. (Will take effect when you enter your next datapoint.) Progress, rate, lane, delta.",
"l": "https://twitter.com/beemuvi/status/43956886868996096",
"e": "2011-03-05 08:51:53 +0000",
}, { // ------------------------------------------------------------------------
"x": "Better handling of significant digits when displaying numbers. Cf http://stackoverflow.com/q/5208663",
"l": "https://twitter.com/beemuvi/status/44344772067999744",
"e": "2011-03-06 10:33:12 +0000",
}, { // ------------------------------------------------------------------------
"x": "In stats, we now display initial datapoint instead of start of YBR (typically the same for weight loss graphs but was confusing otherwise).",
"l": "https://twitter.com/beemuvi/status/44347748111228930",
"e": "2011-03-06 10:45:01 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT <a href=\"https://twitter.com/dreev\">@dreev</a>: TimePie is now TagTime and is on GitHub http://tagti.me @tagtm",
"l": "https://twitter.com/dreev/status/44713552317132800",
"e": "2011-03-07 10:58:36 +0000",
"s": "Note from the future: We finally got the tagtime.com domain on 2017-04-19, 6 years later"
}, { // ------------------------------------------------------------------------
"x": "Beeminder graphs should now always update within 5 minutes of stepping on your Withings scale.",
"l": "https://twitter.com/beemuvi/status/45019699121106946",
"e": "2011-03-08 07:15:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Little Debbie Does Dog Food: http://blog.beeminder.com/lildeb",
"l": "https://twitter.com/bmndr/status/45699837148147712",
"e": "2011-03-10 04:17:44 +0000",
}, { // ------------------------------------------------------------------------
"x": "Reformatted reeminder emails and fixed resultant bug with bot response parsing.",
"l": "https://twitter.com/beemuvi/status/46036994433892352",
"e": "2011-03-11 02:37:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "Subtle bug fix: JSON output now properly escaping quotes. Eg, http://bmndr.com/jill/weight.json",
"l": "https://twitter.com/beemuvi/status/46313959162253312",
"e": "2011-03-11 20:58:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "Graphs w/ ztoday (\"zero today\") true will autoupdate daily. So reported safety buffer never stale. Eg, http://bmndr.com/brainshell",
"l": "https://twitter.com/beemuvi/status/46342465690681344",
"e": "2011-03-11 22:51:19 +0000",
}, { // ------------------------------------------------------------------------
"x": "Now using Disqus for comments on the blog. http://blog.beeminder.com",
"l": "https://twitter.com/beemuvi/status/47972153051709441",
"e": "2011-03-16 10:47:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Embarrassing bug fix: email address no longer accessible from JSON output! Eg, http://bmndr.com/d/sugar.json",
"l": "https://twitter.com/beemuvi/status/48311424581238784",
"e": "2011-03-17 09:15:15 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a weird bug caused by some interaction of Disqus and WordPress where you couldn't click on any links in Firefox. http://blog.beeminder.com",
"l": "https://twitter.com/beemuvi/status/49040624309121024",
"e": "2011-03-19 09:32:50 +0000",
}, { // ------------------------------------------------------------------------
"x": "http://blog.beeminder.com now renders properly on ipad. CSS bug fix by <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>.",
"l": "https://twitter.com/beemuvi/status/49918809242468352",
"e": "2011-03-21 19:42:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: How to force yourself to not waste money on a long-term gym membership: http://blog.beeminder.com/gym (guest post by Jill Renaud)",
"l": "https://twitter.com/bmndr/status/50012175a175135232",
"e": "2011-03-22 01:53:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "What you're risking now shows up in the header of your graph page. E.g., Jill's gym goal: http://bmndr.com/jill/gym",
"l": "https://twitter.com/beemuvi/status/50309281530134528",
"e": "2011-03-22 21:34:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed wrapping weirdness in the headers. CSS tweaking by <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>.",
"l": "https://twitter.com/beemuvi/status/50413925971406848",
"e": "2011-03-23 04:29:51 +0000",
}, { // ------------------------------------------------------------------------
"x": "The headers of graph pages now tell you where you are with respect to the yellow brick road.",
"l": "https://twitter.com/beemuvi/status/50887352347934721",
"e": "2011-03-24 11:51:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Html titles (the mouseover text for the tab or in the browser's title bar) now doesn't try to show html tags. Eg http://bmndr.com/d/tt",
"l": "https://twitter.com/beemuvi/status/51718899271598080",
"e": "2011-03-26 18:55:21 +0000",
}, { // ------------------------------------------------------------------------
"x": "For graphs that include a moving average, it's now exponentially smoothed with smoothing constant .1 a la http://dreev.es/hackdiet",
"l": "https://twitter.com/beemuvi/status/51918487756603392",
"e": "2011-03-27 08:08:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mouseovers for the thumbnails in galleries now say where you are with respect to the yellow brick road.",
"l": "https://twitter.com/beemuvi/status/52263862224945152",
"e": "2011-03-28 07:00:50 +0000",
}, { // ------------------------------------------------------------------------
"x": "And lane number in parens. Lane -1 is bottom lane, +1 the top, +n is n lane-widths above the road, etc which is generally safety buffer days",
"l": "https://twitter.com/beemuvi/status/52266954534305792",
"e": "2011-03-28 07:13:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Distance from yellow brick road should now always display as 0 instead of like 0.0000000000000023.",
"l": "https://twitter.com/beemuvi/status/52463198087024640",
"e": "2011-03-28 20:12:55 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a tiny inconsistency in the layout of the navigation bar on personal gallery pages like http://bmndr.com/bd thanks to <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>.",
"l": "https://twitter.com/beemuvi/status/52575318518665216",
"e": "2011-03-29 03:38:27 +0000",
}, { // ------------------------------------------------------------------------
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Productivity hack: The sedimentary filing system. http://blog.beeminder.com/sediment \"My sediments exactly!\" -- <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>",
"l": "https://twitter.com/bmndr/status/53655015067361280",
"e": "2011-04-01 03:08:47 +0000",
"s": "Note from the future: Blog posts don't count as UVIs anymore, especially not this one which doesn't even have anything to do with Beeminder (rolls eyes at past selves)",
} /* ---------------------------------------------------------- end 2011mar */ ]

batches['2011apr'] = [{
"x": "Unix timestamps always output as integers in API. Matters because they serve as identifiers for datapoints. Also better error handling.",
"l": "https://twitter.com/beemuvi/status/53946493190684672",
"e": "2011-04-01 22:27:00 +0000",
}, /*************************************************************************/ {
"x": "New API output parameter \"runame\" that gives the rate units name, one of \"year\", \"month\", \"week\", \"day\", \"hour\".",
"l": "https://twitter.com/beemuvi/status/54745276807786496",
"e": "2011-04-04 03:21:05 +0000",
}, /*************************************************************************/ {
"x": "Stats at the bottom of your graph now tell you exactly what number you have to have tomorrow as a bare min/max to stay on your road.",
"l": "https://twitter.com/beemuvi/status/55116552869130240",
"e": "2011-04-05 03:56:24 +0000",
}, /*************************************************************************/ {
"x": "Email from the bot on an \"emergency day\" will always be clear about that in the subject, that you're below/above the YBR and about to lose.",
"l": "https://twitter.com/beemuvi/status/55402893456572416",
"e": "2011-04-05 22:54:13 +0000",
}, /*************************************************************************/ {
"x": "Weight loss graphs show the mean of all readings by default (customizable with the aggday param for how to aggregate datapoints on same day)",
"l": "https://twitter.com/beemuvi/status/55529488079007744",
"e": "2011-04-06 07:17:16 +0000",
}, /*************************************************************************/ {
"x": "Glitchiness with frames around thumbnails fixed, or at least a big improvement.",
"l": "https://twitter.com/beemuvi/status/56199795429224448",
"e": "2011-04-08 03:40:50 +0000",
}, /*************************************************************************/ {
"x": "Color-coded thumbnails! Such a big improvement it should count as two! Maybe I'll tweet it from <a href=\"https://twitter.com/bmndr\">@bmndr</a> and count that tweet as another UVI.",
"l": "https://twitter.com/beemuvi/status/56251323754098688",
"e": "2011-04-08 07:05:35 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Beeminder colors: Green = right side of the road, Blue = right lane, Orange = wrong lane, Red = emergency day. http://bmndr.com",
"l": "https://twitter.com/bmndr/status/56307829233033216",
"e": "2011-04-08 10:50:07 +0000",
}, /*************************************************************************/ {
"x": "Frames around thumbnails now exactly right. That was irking <a href=\"https://twitter.com/dreev\">@dreev</a> for a long time.",
"l": "https://twitter.com/beemuvi/status/56308294440058880",
"e": "2011-04-08 10:51:58 +0000",
}, /*************************************************************************/ {
"x": "Mouseover text for thumbnails clearer (and names the color in case you're colorblind).",
"l": "https://twitter.com/beemuvi/status/56308495825387520",
"e": "2011-04-08 10:52:46 +0000",
}, /*************************************************************************/ {
"x": "Stopped trying to squeeze in exactly how far above/below the road you are in the subject line of the bot emails. This still needs work.",
"l": "https://twitter.com/beemuvi/status/56511555717705728",
"e": "2011-04-09 00:19:39 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Case Study: Martin's Renovating. http://blog.beeminder.com/martin (Not the most exciting post but we gotta hew to http://bmndr.com/meta/blog !)",
"l": "https://twitter.com/bmndr/status/57138849540878337",
"e": "2011-04-10 17:52:17 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: Unixtimes in the API were slightly wrong due to a stupid time zone issue.",
"l": "https://twitter.com/beemuvi/status/57583428278829056",
"e": "2011-04-11 23:18:53 +0000",
}, /*************************************************************************/ {
"x": "Tweeted about #akrasia via <a href=\"https://twitter.com/bmndr\">@bmndr</a> et al. Cheap UVI, I know, but we're working our butts off on the back-end.",
"l": "https://twitter.com/beemuvi/status/57715298475839488",
"e": "2011-04-12 08:02:54 +0000",
}, /*************************************************************************/ {
"x": "Updates to the inaugural #akrasia post on http://blog.beeminder.com as well as a layout fix. Thx to <a href=\"https://twitter.com/davidmcraney\">@davidmcraney</a> and <a href=\"https://twitter.com/andrewchen\">@andrewchen</a> for links.",
"l": "https://twitter.com/beemuvi/status/57895629246050304",
"e": "2011-04-12 19:59:28 +0000",
}, /*************************************************************************/ {
"x": "Thought of a simple way to take 2 seconds off graph image generation time. Broke everything. Fixed it again.",
"l": "https://twitter.com/beemuvi/status/58608382331990016",
"e": "2011-04-14 19:11:41 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: What happens when you drive blind: http://blog.beeminder.com/blind #withings",
"l": "https://twitter.com/bmndr/status/60192281906520064",
"e": "2011-04-19 04:05:32 +0000",
}, /*************************************************************************/ {
"x": "The BeeBrain API -- http://beeminder.com/beebrain -- now sanity checks all parameters and gives helpful errors if any are wrong.",
"l": "https://twitter.com/beemuvi/status/60273264173383680",
"e": "2011-04-19 09:27:20 +0000",
}, /*************************************************************************/ {
"x": "Compromise on thumbnail speed issue: colors kept up to date but actual thumb image can lag up to a week.",
"l": "https://twitter.com/beemuvi/status/60617999543058432",
"e": "2011-04-20 08:17:11 +0000",
}, /*************************************************************************/ {
"x": "Oops, that made it add ever more colored borders, matryoshka-style. Fixed now! (PS: We're sooo close on launching new beeminder!)",
"l": "https://twitter.com/beemuvi/status/60622916672425984",
"e": "2011-04-20 08:36:44 +0000",
}, /*************************************************************************/ {
"x": "Typo fix by <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>: \"Coasting on a currnetly flat yellow brick road\". (Special prize for users who spot typos for us!)",
"l": "https://twitter.com/beemuvi/status/60786853820903425",
"e": "2011-04-20 19:28:09 +0000",
}, /*************************************************************************/ {
"x": "Image size for graphs can now be specified in the API. And default is a bit smaller (760 pixels). (Preparing for new layout!)",
"l": "https://twitter.com/beemuvi/status/60845582197067776",
"e": "2011-04-20 23:21:31 +0000",
}, /*************************************************************************/ {
"x": "Robustifying and somewhat OCD tweaking of thumbnail generation.",
"l": "https://twitter.com/beemuvi/status/61342865342734337",
"e": "2011-04-22 08:17:33 +0000",
}, /*************************************************************************/ {
"x": "Tiny bugfix for odometer graphs with multiple datapoints including a reset on the same day. Needed stable sort. Broke this ystrday actually.",
"l": "https://twitter.com/beemuvi/status/62205226307960834",
"e": "2011-04-24 17:24:16 +0000",
}, /*************************************************************************/ {
"x": "Shiny \"BMNDR\" logo. (Among many changes, to be tweeted shortly, that just happened as we finally switched to version 2 of Beeminder!)",
"l": "https://twitter.com/beemuvi/status/63068776983310336",
"e": "2011-04-27 02:35:42 +0000",
}, /*************************************************************************/ {
"x": "Edits to the about page: http://beeminder.com/about",
"l": "https://twitter.com/beemuvi/status/63137545948639232",
"e": "2011-04-27 07:08:58 +0000",
}, /*************************************************************************/ {
"x": "Better browsing of your data!",
"l": "https://twitter.com/beemuvi/status/63146323892908033",
"e": "2011-04-27 07:43:51 +0000",
}, /*************************************************************************/ {
"x": "Adorable bee as default avatar, thanks to <a href=\"https://twitter.com/amzabel\">@amzabel</a>.",
"l": "https://twitter.com/beemuvi/status/63147025633517568",
"e": "2011-04-27 07:46:38 +0000",
}, /*************************************************************************/ {
"x": "Edited the FAQ page: http://beeminder.com/faq",
"l": "https://twitter.com/beemuvi/status/63147259650514945",
"e": "2011-04-27 07:47:34 +0000",
}, /*************************************************************************/ {
"x": "Recent datapoints and a few stats in the sidebar (in addition to the more comprehensive stats at the bottom of the page).",
"l": "https://twitter.com/beemuvi/status/63316211131367424",
"e": "2011-04-27 18:58:55 +0000",
}, /*************************************************************************/ {
"x": "Stats above the graph is text instead of part of the image.",
"l": "https://twitter.com/beemuvi/status/63316369332117504",
"e": "2011-04-27 18:59:33 +0000",
}, /*************************************************************************/ {
"x": "When the bot replies to you it shows your recent data in canonicalized form. [Need to build up a safety buffer of UVIs before vacation!]",
"l": "https://twitter.com/beemuvi/status/63318054888669184",
"e": "2011-04-27 19:06:15 +0000",
}, /*************************************************************************/ {
"x": "Rewrote this page: http://beeminder.com/register",
"l": "https://twitter.com/beemuvi/status/63322105219002368",
"e": "2011-04-27 19:22:21 +0000",
}, /*************************************************************************/ {
"x": "See the link that says \"12 goals\" under, for example, Jill's gallery? http://bmndr.com/jill",
"l": "https://twitter.com/beemuvi/status/63325489103781888",
"e": "2011-04-27 19:35:47 +0000",
}, /*************************************************************************/ {
"x": "In the Recent Datapoints list, comments get truncated appropriately. Most of this spate of UVIs are thanks to <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>, btw.",
"l": "https://twitter.com/beemuvi/status/63326649642532864",
"e": "2011-04-27 19:40:24 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: <a href=\"https://twitter.com/dreev\">@dreev</a> learned something w/ Beeminder he never could've possibly known otherwise. Swiss cake rolls can go stale. http://dreev.es/ld",
"l": "https://twitter.com/bmndr/status/63359250122018817",
"e": "2011-04-27 21:49:57 +0000",
}, /*************************************************************************/ {
"x": "Fixed capitalization of nicknames in gallery view, eg, http://bmndr.com/grose",
"l": "https://twitter.com/beemuvi/status/63515259956248576",
"e": "2011-04-28 08:09:52 +0000",
}, /*************************************************************************/ {
"x": "Fixed an error in API/waitlist forms that redirected to contact page on submit. Try it now: http://bmndr.com/api",
"l": "https://twitter.com/beemuvi/status/63515489615355905",
"e": "2011-04-28 08:10:47 +0000",
}, /*************************************************************************/ {
"x": "Fixed links in recent datapoints, eg, http://bmndr.com/jamuraa/blog (and we think we're sanitizing them properly...)",
"l": "https://twitter.com/beemuvi/status/63516505928777728",
"e": "2011-04-28 08:14:49 +0000",
}, /*************************************************************************/ {
"x": "Thumbnails not lagged anymore (long story). Btw, despite the current deluge, this account averages one tweet (UVI) per day. For less: <a href=\"https://twitter.com/bmndr\">@bmndr</a>",
"l": "https://twitter.com/beemuvi/status/63517402243149824",
"e": "2011-04-28 08:18:23 +0000",
}, /*************************************************************************/ {
"x": "Oh yeah, & check out that shiny favicon! (<a href=\"https://twitter.com/thatgirl\">@thatgirl</a> again; almost got enough safety buffer on http://bmndr.com/meta/uvi for our vacation!)",
"l": "https://twitter.com/beemuvi/status/63524374598266880",
"e": "2011-04-28 08:46:05 +0000",
}, /*************************************************************************/ {
"x": "Better error handling for unparsable datapoints entered via the web interface.",
"l": "https://twitter.com/beemuvi/status/63669501048274945",
"e": "2011-04-28 18:22:46 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: We're listening and responding to your ideas at http://uservoice.beeminder.com . We ♥ our beta users!",
"l": "https://twitter.com/bmndr/status/63675368019738624",
"e": "2011-04-28 18:46:05 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: New blog post: Beeminder on Rails. http://blog.beeminder.com/rails",
"l": "https://twitter.com/bmndr/status/64021293254709249",
"e": "2011-04-29 17:40:40 +0000",
}, /*************************************************************************/ {
"x": "Main gallery on http://beeminder.com now shows the 20 most recently updated graphs.",
"l": "https://twitter.com/beemuvi/status/64182178212356096",
"e": "2011-04-30 04:19:58 +0000",
}, /*************************************************************************/ {
"x": "Layout tweaks: better spacing in the galleries and truncating goal titles and descriptions in the galleries more reasonably.",
"l": "https://twitter.com/beemuvi/status/64202402869411840",
"e": "2011-04-30 05:40:20 +0000",
}, /*************************************************************************/ {
"x": "Stats now refresh when graph does. Also CSV export is back, and a rare layout bug fixed. Vacation tomorrow; coasting on this safety buffer!",
"l": "https://twitter.com/beemuvi/status/64485957604343808",
"e": "2011-05-01 00:27:05 +0000",
}, /*************************************************************************/ {
"x": "Oh, and added a tagline to the front page and fixed the domain http://blog.beeminder.com and various fixes to legacy URLs.",
"l": "https://twitter.com/beemuvi/status/64486842740899841",
"e": "2011-05-01 00:30:36 +0000",
} /* ---------------------------------------------------------- end 2011apr */ ]

batches['2011may'] = [
{
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Post on <a href=\"https://twitter.com/msymtrs\">@msymtrs</a> blog about an experimental part of beeminder: (bee)minding how you spend your time. http://messymatters.com/tagtime",
"l": "https://twitter.com/bmndr/status/65018163489816576",
"e": "2011-05-02 11:41:52 +0000",
}, /*************************************************************************/ {
"x": "Changes in yellow brick road steepness now always occur at midnight. Potentially confusing otherwise.",
"l": "https://twitter.com/beemuvi/status/72103404587061248",
"e": "2011-05-22 00:56:05 +0000",
}, /*************************************************************************/ {
"x": "New blog post: Is there a danger of unintended consequences of Beeminder contracts? http://blog.beeminder.com/unintended",
"l": "https://twitter.com/beemuvi/status/72504640234725376",
"e": "2011-05-23 03:30:27 +0000",
}, /*************************************************************************/ {
"x": "Yellow brick road width no longer becomes zero when the road becomes flat.",
"l": "https://twitter.com/beemuvi/status/72858384558333953",
"e": "2011-05-24 02:56:07 +0000",
}, /*************************************************************************/ {
"x": "When you enter data in the web form a notification box appears and then disappears nice and discreetly. Or just stays put if no javascript.",
"l": "https://twitter.com/beemuvi/status/73229635600658433",
"e": "2011-05-25 03:31:20 +0000",
}, /*************************************************************************/ {
"x": "Fixed a bug where html tags showed up in the graph's title when viewing data, for graphs with links in the titles like http://bmndr.com/d/tt",
"l": "https://twitter.com/beemuvi/status/73754953692356608",
"e": "2011-05-26 14:18:45 +0000",
}, /*************************************************************************/ {
"x": "Moved user info to right of graph in goals pages, for consistency. Huge thanks to <a href=\"https://twitter.com/devinbaillie\">@devinbaillie</a> for suggesting it and all the beta testing.",
"l": "https://twitter.com/beemuvi/status/73822519618043904",
"e": "2011-05-26 18:47:14 +0000",
}, /*************************************************************************/ {
"x": "\"Export to CSV\" link now prominently shown in sidebar. #dataliberation",
"l": "https://twitter.com/beemuvi/status/74253694719373312",
"e": "2011-05-27 23:20:35 +0000",
}, /*************************************************************************/ {
"x": "Visual tweaks: made gray headers slightly darker and removed excess spacing at bottom of 'recent datapoints' sidebar.",
"l": "https://twitter.com/beemuvi/status/74253842933497856",
"e": "2011-05-27 23:21:10 +0000",
}, /*************************************************************************/ {
"x": "Stats tell you the bare minimum (or hard cap) for staying on your yellow brick road. See very bottom of, eg, http://bmndr.com/meta/uvi",
"l": "https://twitter.com/beemuvi/status/75044003703304193",
"e": "2011-05-30 03:40:59 +0000",
}, /*************************************************************************/ {
"x": "Tweaks to bare min / hard cap stats. Eg, see very bottom of http://bmndr.com/mc/smoking",
"l": "https://twitter.com/beemuvi/status/75388422096830464",
"e": "2011-05-31 02:29:35 +0000",
}, /* --------------------------------------------------------- end 2011may */ ]

batches['2011jun'] = [
{
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Going all soup-nazi on our users: http://blog.beeminder.com/akratics #akrasia",
"l": "https://twitter.com/bmndr/status/75774306155630593",
"e": "2011-06-01 04:02:57 +0000",
}, /*************************************************************************/ {
"x": "Consistent style for hyperlinks.",
"l": "https://twitter.com/beemuvi/status/76127840139100160",
"e": "2011-06-02 03:27:46 +0000",
}, /*************************************************************************/ {
"x": "Better submit buttons.",
"l": "https://twitter.com/beemuvi/status/76482838190505985",
"e": "2011-06-03 02:58:24 +0000",
}, /*************************************************************************/ {
"x": "Swapped the goal/risking/status lines with the graph summary line.",
"l": "https://twitter.com/beemuvi/status/76482986303959040",
"e": "2011-06-03 02:58:59 +0000",
}, /*************************************************************************/ {
"x": "Fixed a css bug with the header where blackspace next to logo/title was also a link.",
"l": "https://twitter.com/beemuvi/status/77180410060222464",
"e": "2011-06-05 01:10:18 +0000",
}, /*************************************************************************/ {
"x": "More prominent link to personal galleries in the sidebar. \"Your Name (X goals)\".",
"l": "https://twitter.com/beemuvi/status/77181185775767552",
"e": "2011-06-05 01:13:23 +0000",
}, /*************************************************************************/ {
"x": "Status and stats both update roughly, almost, maybe/sorta instantly(ish) now. Graph itself still ridiculous.",
"l": "https://twitter.com/beemuvi/status/77904802041954306",
"e": "2011-06-07 01:08:46 +0000",
}, /*************************************************************************/ {
"x": "Improvements to the display of the bare min / hard cap numbers. [Better rounding, non-noisy \"fatso\" graphs have negative hard caps.]",
"l": "https://twitter.com/beemuvi/status/78238559835918336",
"e": "2011-06-07 23:15:00 +0000",
}, /*************************************************************************/ {
"x": "Goal/Risking/Status lines on goal page look a little nicer now.",
"l": "https://twitter.com/beemuvi/status/78668428851949568",
"e": "2011-06-09 03:43:09 +0000",
}, /*************************************************************************/ {
"x": "Goal stats and progress in sidebars now.",
"l": "https://twitter.com/beemuvi/status/79024537982869504",
"e": "2011-06-10 03:18:12 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Blog post about some competition: <a href=\"https://twitter.com/TimeCarrot\">@TimeCarrot</a> = <a href=\"https://twitter.com/stickK\">@stickK</a> + <a href=\"https://twitter.com/rescuetime\">@rescuetime</a>. <a href=\"http://blog.beeminder.com/timecarrot\">blog.beeminder.com/timecarrot</a>",
"l": "https://twitter.com/bmndr/status/79385765548797952",
"e": "2011-06-11 03:13:36 +0000",
}, /*************************************************************************/ {
"x": "You should never again see Beeminder say \"1 more days\".",
"l": "https://twitter.com/beemuvi/status/79753720304369664",
"e": "2011-06-12 03:35:43 +0000",
}, /*************************************************************************/ {
"x": "There's more detailed info about your road's rate (plus the time units) in the sidebar now.",
"l": "https://twitter.com/beemuvi/status/80055779385810944",
"e": "2011-06-12 23:35:59 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: No longer shows max rate of like 4732894382% for <a href=\"http://bmndr.com/b/weight\">bmndr.com/b/weight</a>",
"l": "https://twitter.com/beemuvi/status/80061131930087424",
"e": "2011-06-12 23:57:15 +0000",
}, /*************************************************************************/ {
"x": "Tweaked font for stats in sidebar.",
"l": "https://twitter.com/beemuvi/status/80664548524306433",
"e": "2011-06-14 15:55:01 +0000",
}, /*************************************************************************/ {
"x": "Goal stats line up perfectly now.",
"l": "https://twitter.com/beemuvi/status/80847680242323456",
"e": "2011-06-15 04:02:43 +0000",
}, /*************************************************************************/ {
"x": "Fixed disappearing 'ago' in goal stats when you submit new data.",
"l": "https://twitter.com/beemuvi/status/80847752690540544",
"e": "2011-06-15 04:03:00 +0000",
}, /*************************************************************************/ {
"x": "Fixed an alignment error in the \"Status:\" line above goal.",
"l": "https://twitter.com/beemuvi/status/80848136146386944",
"e": "2011-06-15 04:04:32 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: BMNDR vs StickK: <a href=\"http://blog.beeminder.com/stickk\">blog.beeminder.com/stickk</a> Guest post by Josh Jordan (@bumbledraven).",
"l": "https://twitter.com/bmndr/status/81224613429915648",
"e": "2011-06-16 05:00:31 +0000",
}, /*************************************************************************/ {
"x": "New testimonials page: <a href=\"http://bmndr.com/testimonials\">bmndr.com/testimonials</a> [blush]",
"l": "https://twitter.com/beemuvi/status/81227436448165888",
"e": "2011-06-16 05:11:44 +0000",
}, /*************************************************************************/ {
"x": "Made stats box margins a bit wider so the lines shouldn't ever wrap anymore.",
"l": "https://twitter.com/beemuvi/status/82857198186807296",
"e": "2011-06-20 17:07:50 +0000",
}, /*************************************************************************/ {
"x": "The collapsing archives widget on the blog now shows counts for each month. Thanks to Rob Felty: <a href=\"http://robfelty.com/plugins/collapsing-archives\">robfelty.com/plugins/collapsing-archives</a>",
"l": "https://twitter.com/beemuvi/status/83274834339049473",
"e": "2011-06-21 20:47:22 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: spacing in the stats box was off after adding data to your graph (at least until you refreshed).",
"l": "https://twitter.com/beemuvi/status/83715311404191745",
"e": "2011-06-23 01:57:40 +0000",
}, /*************************************************************************/ {
"x": "It's now obvious when the submit button is tabbed to. Enter data, &lt;tab&gt;, &lt;enter&gt;, done.",
"l": "https://twitter.com/beemuvi/status/83715553239379968",
"e": "2011-06-23 01:58:37 +0000",
}, /*************************************************************************/ {
"x": "Fixed a Firefox-only bug in displaying gradients on buttons.",
"l": "https://twitter.com/beemuvi/status/83956151003254784",
"e": "2011-06-23 17:54:40 +0000",
}, /*************************************************************************/ {
"x": "Buttons at the top of the page (Graph, Data) are now bright when activated, which should be less confusing.",
"l": "https://twitter.com/beemuvi/status/84790848407085056",
"e": "2011-06-26 01:11:28 +0000",
}, /*************************************************************************/ {
"x": "Average YBR rate now included in stats sidebar. Ugly plaintext stats at bottom now obviated so we got rid of those.",
"l": "https://twitter.com/beemuvi/status/85170938324320256",
"e": "2011-06-27 02:21:48 +0000",
}, /*************************************************************************/ {
"x": "Graphs are framed with the color of the current dot: green = good side of road; blue = right lane; orange = wrong lane; red = off the road.",
"l": "https://twitter.com/beemuvi/status/85442651414994944",
"e": "2011-06-27 20:21:30 +0000",
}, /*************************************************************************/ {
"x": "Tweaked the green for indicating good side of the road. Easier to distinguish from the blue now.",
"l": "https://twitter.com/beemuvi/status/85442778800197632",
"e": "2011-06-27 20:22:00 +0000",
}, /*************************************************************************/ {
"x": "Link to the latest blog post in the navigation bar of all Beeminder pages. We're pretty proud of our blog!",
"l": "https://twitter.com/beemuvi/status/85443067276050432",
"e": "2011-06-27 20:23:09 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: A friendly reminder about our friendly mass of incandescent gas. <a href=\"http://blog.beeminder.com/solstice\">blog.beeminder.com/solstice</a>",
"l": "https://twitter.com/bmndr/status/85837249236840448",
"e": "2011-06-28 22:29:29 +0000",
}, /* --------------------------------------------------------- end 2011jun */ ]

batches['2011jul'] = [
{
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Commitment contracts with maximal flexibility: Beeminder's Force Majeure Clause. <a href=\"http://blog.beeminder.com/sos\">blog.beeminder.com/sos</a> #akrasia",
"l": "https://twitter.com/bmndr/status/86901351812055040",
"e": "2011-07-01 20:57:51 +0000",
}, /*************************************************************************/ {
"x": "Made the outline look nicer when you tab to submit button by softening the edges of the button and blending away the weird Chrome rendering",
"l": "https://twitter.com/beemuvi/status/87352490856685568",
"e": "2011-07-03 02:50:31 +0000",
}, /*************************************************************************/ {
"x": "Number of days of safety buffer included in the stats sidebar.",
"l": "https://twitter.com/beemuvi/status/87712910511579136",
"e": "2011-07-04 02:42:42 +0000",
}, /*************************************************************************/ {
"x": "Made it say 0 safety buffer days instead of \"n/a\" when you're on the wrong side of the centerline, and other tiny tweaks.",
"l": "https://twitter.com/beemuvi/status/87998352016416768",
"e": "2011-07-04 21:36:56 +0000",
}, /*************************************************************************/ {
"x": "Changes to the road width algorithm. Eg, road width never changes when you're in the wrong lane.",
"l": "https://twitter.com/beemuvi/status/88253720801972224",
"e": "2011-07-05 14:31:41 +0000",
}, /*************************************************************************/ {
"x": "Bug fixes: over-application of \"can't lose tomorrow guarantee\" and overwidening based on big deviations after not reporting.",
"l": "https://twitter.com/beemuvi/status/88343240734027776",
"e": "2011-07-05 20:27:24 +0000",
}, /*************************************************************************/ {
"x": "Prev datapts off the YBR shown in yellow instead of red. Road width can shrink so a past dot off the rd may not've been off-road at the time",
"l": "https://twitter.com/beemuvi/status/88623735023747072",
"e": "2011-07-06 15:01:59 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: the amount of safety buffer quoted in the header of the graph (and emails) now consistent with what's shown in the stats sidebar",
"l": "https://twitter.com/beemuvi/status/89507894873165825",
"e": "2011-07-09 01:35:19 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: some graphs have multiple datapoints per day and that could occasionally confuse the new road width algorithm",
"l": "https://twitter.com/beemuvi/status/89820674864066561",
"e": "2011-07-09 22:18:12 +0000",
}, /*************************************************************************/ {
"x": "Another bug fix w/ road width involving the rare/special case that all points are above the YBR (thought that couldn't happen!)",
"l": "https://twitter.com/beemuvi/status/89842646629093376",
"e": "2011-07-09 23:45:30 +0000",
}, /*************************************************************************/ {
"x": "Fixed ugly squished spacing in the list of recent datapoints that would happen when a comment was long enough to wrap",
"l": "https://twitter.com/beemuvi/status/90044870277861376",
"e": "2011-07-10 13:09:04 +0000",
}, /*************************************************************************/ {
"x": "Tweak to how multiple weights are averaged to get official weight of the day to close loophole where you dehydrate yourself, weigh 20 times",
"l": "https://twitter.com/beemuvi/status/90086318603902976",
"e": "2011-07-10 15:53:46 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: The Magical Widening Yellow Brick Road. <a href=\"http://blog.beeminder.com/roadwidth\">blog.beeminder.com/roadwidth</a>",
"l": "https://twitter.com/bmndr/status/90193364825292800",
"e": "2011-07-10 22:59:08 +0000",
}, /*************************************************************************/ {
"x": "Number of safety buffer days may now be negative to indicate how many days ago you went off the road. Also bug fixes with the computation.",
"l": "https://twitter.com/beemuvi/status/90422902654107648",
"e": "2011-07-11 14:11:14 +0000",
}, /*************************************************************************/ {
"x": "Another bug fix with the display of safety buffer, for cases where displaying a safety doesn't make sense.",
"l": "https://twitter.com/beemuvi/status/90628889805729793",
"e": "2011-07-12 03:49:45 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: Proper determination of officially being off the road: Off the road and not back on by midnight.",
"l": "https://twitter.com/beemuvi/status/91581484779057152",
"e": "2011-07-14 18:55:02 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Akrasia is the tendency to say \"I'll get serious tomorrow\" every day forever. <a href=\"http://www.google.com/search?q=akrasia\">google.com/search?q=akrasia</a> #akrasia",
"l": "https://twitter.com/bmndr/status/91774818046844928",
"e": "2011-07-15 07:43:16 +0000",
}, /*************************************************************************/ {
"x": "More improvements to the computation of number of safety buffer days for weight loss graphs, plus added new minimum road width (daily rate).",
"l": "https://twitter.com/beemuvi/status/91800785066790912",
"e": "2011-07-15 09:26:27 +0000",
}, /*************************************************************************/ {
"x": "Bug fix of a bug fix re: officially off the road (off *yesterday* and today, not previous and current datapoint off).",
"l": "https://twitter.com/beemuvi/status/91813707335733248",
"e": "2011-07-15 10:17:48 +0000",
}, /*************************************************************************/ {
"x": "Reminder emails from the bot automatically decay in frequency if you ignore them.",
"l": "https://twitter.com/beemuvi/status/93078165932621825",
"e": "2011-07-18 22:02:18 +0000",
}, /*************************************************************************/ {
"x": "Galleries of goals now sorted by last modification time (modification of either settings or data).",
"l": "https://twitter.com/beemuvi/status/93096458206724096",
"e": "2011-07-18 23:14:59 +0000",
}, /*************************************************************************/ {
"x": "Those notification boxes that briefly pop up above your graph when you add new data and whatnot are a lot less ugly now",
"l": "https://twitter.com/beemuvi/status/93707838278479872",
"e": "2011-07-20 15:44:24 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Akratics Anonymous is now a google group: <a href=\"http://blog.beeminder.com/akratics\">blog.beeminder.com/akratics</a> <a href=\"http://groups.google.com/group/akratics\">groups.google.com/group/akratics</a>",
"l": "https://twitter.com/bmndr/status/93839728394244096",
"e": "2011-07-21 00:28:29 +0000",
}, /*************************************************************************/ {
"x": "Subtle bug fix where the graph could fail to indicate when it was regenerating and require a manual refresh",
"l": "https://twitter.com/beemuvi/status/95184952697683968",
"e": "2011-07-24 17:33:55 +0000",
}, /*************************************************************************/ {
"x": "The title text of the graph thumbnails was sometimes contradicting itself about the number of safety buffer days. Now it isn't.",
"l": "https://twitter.com/beemuvi/status/95413070410682368",
"e": "2011-07-25 08:40:23 +0000",
}, /*************************************************************************/ {
"x": "Datapoints that aren't added explicitly (Bmndr assumes no change from yesterday if you don't report) are distinguishable from entered points",
"l": "https://twitter.com/beemuvi/status/95784186316718081",
"e": "2011-07-26 09:15:04 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: \"Sometimes it seems like a hard workout makes me gain weight. My question is: WTF?\" <a href=\"http://blog.beeminder.com/backfiring\">blog.beeminder.com/backfiring</a>",
"l": "https://twitter.com/bmndr/status/96068670190657536",
"e": "2011-07-27 04:05:30 +0000",
}, /*************************************************************************/ {
"x": "If you're at a kink in your yellow brick road the current rate shows the rate starting now, not the rate you just finished",
"l": "https://twitter.com/beemuvi/status/96788439197945856",
"e": "2011-07-29 03:45:36 +0000",
}, /*************************************************************************/ {
"x": "Fixed small/rare miscalc of road width for exponential graphs (eg weightloss). Was basing daily rate on current datapt, not road val.",
"l": "https://twitter.com/beemuvi/status/96981548926107648",
"e": "2011-07-29 16:32:57 +0000",
}, /*************************************************************************/ {
"x": "Rose-colored dotted line showing the akrasia horizon. Which is a harbinger of big things on the horizon, Beeminder-wise.",
"l": "https://twitter.com/beemuvi/status/97296190168772608",
"e": "2011-07-30 13:23:14 +0000",
}, /*************************************************************************/ {
"x": "Fixed glitches with the blue-green aura around the datapoints",
"l": "https://twitter.com/beemuvi/status/97308784891936768",
"e": "2011-07-30 14:13:16 +0000",
}, /*************************************************************************/ {
"x": "Thin yellow guide lines that indicate how many safety buffer days you have were sometimes not extending all the way to edges of the graph",
"l": "https://twitter.com/beemuvi/status/97494860159909888",
"e": "2011-07-31 02:32:40 +0000",
}, /*************************************************************************/ {
"x": "Miscellaneous tweaks to the graphs, like not letting points get too squished against the edge or showing more of the y-axis than necessary",
"l": "https://twitter.com/beemuvi/status/97530962623217667",
"e": "2011-07-31 04:56:08 +0000",
}, /* --------------------------------------------------------- end 2011jul */ ]

batches['2011aug'] = [
{
"x": "Bug fix: couple people's bot reminders not going out (and should always be sent within an hour of specified time now)",
"l": "https://twitter.com/beemuvi/status/98253774224764928",
"e": "2011-08-02 04:48:19 +0000",
}, /*************************************************************************/ {
"x": "Lighter pink for the rose-colored dots -- <a href=\"http://bmndr.com/about\">bmndr.com/about</a> -- among other tweaks. (And we're days away from the big stuff now!)",
"l": "https://twitter.com/beemuvi/status/98571154972884994",
"e": "2011-08-03 01:49:29 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: negative safety buffers (how many days ago you went off the road) were sometimes off by one.",
"l": "https://twitter.com/beemuvi/status/98650184501837824",
"e": "2011-08-03 07:03:31 +0000",
}, /*************************************************************************/ {
"x": "Safety buffer now properly accounts for upcoming changes in the road width (that got a little hairy with exponential yellow brick roads)",
"l": "https://twitter.com/beemuvi/status/98666211352649728",
"e": "2011-08-03 08:07:12 +0000",
}, /*************************************************************************/ {
"x": "There's now a sign-in link for existing beta users, so we can now tweet a bunch of features that are only available if you're signed in",
"l": "https://twitter.com/beemuvi/status/98810118845640704",
"e": "2011-08-03 17:39:02 +0000",
}, /*************************************************************************/ {
"x": "Signed-in users can change their name and picture (avatar). Eg <a href=\"https://twitter.com/dreev\">@dreev</a> is <a href=\"http://bmndr.com/d\">bmndr.com/d</a> and <a href=\"https://twitter.com/thatgirl\">@thatgirl</a> is <a href=\"http://bmndr.com/b\">bmndr.com/b</a>",
"l": "https://twitter.com/beemuvi/status/98811577259671552",
"e": "2011-08-03 17:44:50 +0000",
}, /*************************************************************************/ {
"x": "Signed-in users can twiddle: whether to get bot reminders, what days, what time of day. (recall the bot buzzes off automatically if ignored)",
"l": "https://twitter.com/beemuvi/status/98812189841948674",
"e": "2011-08-03 17:47:16 +0000",
}, /*************************************************************************/ {
"x": "Signed-in users can delete datapoints (careful, this is permanent!)",
"l": "https://twitter.com/beemuvi/status/98812424991408132",
"e": "2011-08-03 17:48:12 +0000",
}, /*************************************************************************/ {
"x": "When you don't report, your graph shows you flatlined up through today, but stops if you go off the road or hit your goal.",
"l": "https://twitter.com/beemuvi/status/98864211802861568",
"e": "2011-08-03 21:13:59 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Signed in users have a Road Dial (not really a dial) to adjust the steepness of the Yellow Brick Road as they go",
"l": "https://twitter.com/beemuvi/status/99526864497934336",
"e": "2011-08-05 17:07:08 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Signed in users can create new goals. (And thanks for all the awesome feedback from our beta users; keep it coming!)",
"l": "https://twitter.com/beemuvi/status/101158450960150528",
"e": "2011-08-10 05:10:28 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Signed in users will see a reset button to try again when you go off your yellow brick road",
"l": "https://twitter.com/beemuvi/status/101495496597704704",
"e": "2011-08-11 03:29:46 +0000",
}, /*************************************************************************/ {
"x": "Goal settings tab lets you change your goal's title and description and set your goal amount, or end date.",
"l": "https://twitter.com/beemuvi/status/101495833098321920",
"e": "2011-08-11 03:31:06 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Commitment contracts are built in. See <a href=\"http://bmndr.com/money\">bmndr.com/money</a>",
"l": "https://twitter.com/beemuvi/status/101816894595674113",
"e": "2011-08-12 00:46:53 +0000",
}, /*************************************************************************/ {
"x": "Changed the submit button in advanced graph settings form to actually say \"submit\". Did we mention there's an advanced graph settings form?",
"l": "https://twitter.com/beemuvi/status/101858442301542400",
"e": "2011-08-12 03:31:59 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: Multiple carets (like ^^ to mean \"yesterday\") weren't getting translated right when you entered datapoints.",
"l": "https://twitter.com/beemuvi/status/102223656415014913",
"e": "2011-08-13 03:43:13 +0000",
}, /*************************************************************************/ {
"x": "Flatline rule messed up <a href=\"http://bmndr.com/example\">bmndr.com/example</a> so now there's a setting in the api to show graphs how they looked at any point in the past.",
"l": "https://twitter.com/beemuvi/status/102461029065302016",
"e": "2011-08-13 19:26:27 +0000",
}, /*************************************************************************/ {
"x": "When first starting a weight loss graph, the road starts at the max of your 1st 3 weights.",
"l": "https://twitter.com/beemuvi/status/102479495788888065",
"e": "2011-08-13 20:39:50 +0000",
}, /*************************************************************************/ {
"x": "Much clearer version of <a href=\"http://bmndr.com/money\">bmndr.com/money</a> with example graphs.",
"l": "https://twitter.com/beemuvi/status/103597178018205696",
"e": "2011-08-16 22:41:06 +0000",
}, /*************************************************************************/ {
"x": "Added more FAQs to the pricing page, including some nerdy math. <a href=\"http://bmndr.com/money\">bmndr.com/money</a>",
"l": "https://twitter.com/beemuvi/status/103915654788296704",
"e": "2011-08-17 19:46:37 +0000",
}, /*************************************************************************/ {
"x": "Existing beta users who went off their roads before new pricing scheme can now reset with $0 at risk.",
"l": "https://twitter.com/beemuvi/status/104650710032977920",
"e": "2011-08-19 20:27:28 +0000",
}, /*************************************************************************/ {
"x": "Heading of your graph shows how much is at risk.",
"l": "https://twitter.com/beemuvi/status/104656302617280513",
"e": "2011-08-19 20:49:41 +0000",
}, /*************************************************************************/ {
"x": "Money money: Made the buttons and form look a little nicer on the reset/contracts page. Started adding some explanatory blurbs, etc.",
"l": "https://twitter.com/beemuvi/status/104656754817761282",
"e": "2011-08-19 20:51:29 +0000",
}, /*************************************************************************/ {
"x": "Money money: Don't have to re-enter credit card if you've already got one on file.",
"l": "https://twitter.com/beemuvi/status/104656853862060033",
"e": "2011-08-19 20:51:53 +0000",
}, /*************************************************************************/ {
"x": "Money money: Removed credit card security code from credit card form -- one less step between you and commitment.",
"l": "https://twitter.com/beemuvi/status/104657122532392961",
"e": "2011-08-19 20:52:57 +0000",
}, /*************************************************************************/ {
"x": "Bug fix in road dial [involving inserting road matrix rows] where if you tried to dial a graph that had been previously reset it would break",
"l": "https://twitter.com/beemuvi/status/105482919178551296",
"e": "2011-08-22 03:34:22 +0000",
}, /*************************************************************************/ {
"x": "Breadcrumb-style link to your gallery of goals as part of the title of your graph. (Thanks @dyng!)",
"l": "https://twitter.com/beemuvi/status/105762431887872001",
"e": "2011-08-22 22:05:03 +0000",
}, /*************************************************************************/ {
"x": "Firefox glitch: fixed the contract submit button (it was, ridiculously, displaying \"submit query\" as the button text in Firefox).",
"l": "https://twitter.com/beemuvi/status/106490665323610113",
"e": "2011-08-24 22:18:47 +0000",
}, /*************************************************************************/ {
"x": "Took out extra \"&gt;\" in breadcrumb because it looked terrible in Firefox.",
"l": "https://twitter.com/beemuvi/status/106490824048644096",
"e": "2011-08-24 22:19:25 +0000",
}, /*************************************************************************/ {
"x": "Fixed idiotbug where resets failed on grandfathered goals *because* we were allowing free resets on goals predating new pricing. Thx <a href=\"https://twitter.com/mwprog\">@mwprog</a>",
"l": "https://twitter.com/beemuvi/status/106491471489806336",
"e": "2011-08-24 22:21:59 +0000",
}, /*************************************************************************/ {
"x": "Less ugly alt text for thumbnails, which turned out to matter in Firefox on slow net connections. Also, consistent capitalization in titles.",
"l": "https://twitter.com/beemuvi/status/106768119200092160",
"e": "2011-08-25 16:41:17 +0000",
}, /*************************************************************************/ {
"x": "You can edit your datapoints (hurrah!). A little primitive but better than deleting & re-entering! Hat tip to Christopher Douglas.",
"l": "https://twitter.com/beemuvi/status/108381335671947264",
"e": "2011-08-30 03:31:38 +0000",
}, /*************************************************************************/ {
"x": "Titles were getting truncated more than necessary. When you're not logged in there's room to show more, eg: <a href=\"http://bmndr.com/meta/uvi\">bmndr.com/meta/uvi</a>",
"l": "https://twitter.com/beemuvi/status/108591639169204224",
"e": "2011-08-30 17:27:18 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: extending your goal date if it was less than a week away would mess up the shape of the yellow brick road. Thx <a href=\"https://twitter.com/robbieclarken\">@robbieclarken</a>",
"l": "https://twitter.com/beemuvi/status/108913641176309760",
"e": "2011-08-31 14:46:50 +0000",
}, /*************************************************************************/ {
"x": "Made <a href=\"http://bmndr.com/money\">bmndr.com/money</a> a little less painful to read. Thx Rob Felty! Aside: BMNDR discussion on goog+: <a href=\"http://profiles.googles.com/dreeves\">profiles.googles.com/dreeves</a>",
"l": "https://twitter.com/beemuvi/status/108937559362646016",
"e": "2011-08-31 16:21:52 +0000",
}, /*************************************************************************/ {
"x": "Closed loophole: those who don't manually add data (eg, via <a href=\"https://twitter.com/Withings\">@Withings</a> or <a href=\"https://twitter.com/tagtm\">@tagtm</a>) never got their graphs frozen. It's tough love, bitches.",
"l": "https://twitter.com/beemuvi/status/108971992069312513",
"e": "2011-08-31 18:38:42 +0000",
}, /* --------------------------------------------------------- end 2011aug */ ]

batches['2011sep'] = [
{
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: New blog post: The Road Dial and the Akrasia Horizon. <a href=\"http://blog.beeminder.com/dial\">blog.beeminder.com/dial</a> (commitment devices with maximal flexibility)",
"l": "https://twitter.com/bmndr/status/109114106589614080",
"e": "2011-09-01 04:03:24 +0000",
}, /*************************************************************************/ {
"x": "Better info in the money FAQ -- <a href=\"http://bmndr.com/money\">bmndr.com/money</a> -- about why it's safe to give us your credit card number, thanks to <a href=\"https://twitter.com/stripe\">@stripe</a>.",
"l": "https://twitter.com/beemuvi/status/109349382859653120",
"e": "2011-09-01 19:38:19 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: we were prematurely saying \"you made it!\" on your actual goal date even if you were actually off the road on that day.",
"l": "https://twitter.com/beemuvi/status/109643154931724289",
"e": "2011-09-02 15:05:39 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: time left shown in sidebar was based on noon on the goal date instead of midnight. Thx <a href=\"https://twitter.com/robbieclarken\">@robbieclarken</a>. PS, timezones coming soon.",
"l": "https://twitter.com/beemuvi/status/109702900325957632",
"e": "2011-09-02 19:03:04 +0000",
}, /*************************************************************************/ {
"x": "Better mouseover explanations about fee schedule and fine print when you start a new commitment contract.",
"l": "https://twitter.com/beemuvi/status/110743890931363840",
"e": "2011-09-05 15:59:35 +0000",
}, /*************************************************************************/ {
"x": "When you create a new goal you can make it secret. Some of us (<a href=\"https://twitter.com/dreev\">@dreev</a> & <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>) think this is a terrible idea and may disable it again!",
"l": "https://twitter.com/beemuvi/status/111551124275871744",
"e": "2011-09-07 21:27:15 +0000",
}, /*************************************************************************/ {
"x": "Improved the stats in the sidebar, added DELTA (how far you are from being in the right lane), and added mouseover explanations.",
"l": "https://twitter.com/beemuvi/status/111918194339483648",
"e": "2011-09-08 21:45:51 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Usernames and emails were case sensitive which occasionally caused confusion.",
"l": "https://twitter.com/beemuvi/status/111918472673497089",
"e": "2011-09-08 21:46:57 +0000",
}, /*************************************************************************/ {
"x": "Green: outperforming the road, Blue: right lane, Orange: wrong lane, Red: off the road. And now, Black = error generating graph, eg, no data",
"l": "https://twitter.com/beemuvi/status/111945756402913280",
"e": "2011-09-08 23:35:22 +0000",
}, /*************************************************************************/ {
"x": "Mouseover on the Goal Progress sidebar tells you what percent done you are (either going by time or by value). UVIs ~20% of the way to 1000!",
"l": "https://twitter.com/beemuvi/status/112010473460867074",
"e": "2011-09-09 03:52:32 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"https://twitter.com/jmccoh\">@jmccoh</a> Mouseover area for Goal Progress should now be easier to hit. Thanks! (Yes, this too is a UVI...)",
"l": "https://twitter.com/beemuvi/status/112018212341825536",
"e": "2011-09-09 04:23:17 +0000",
}, /*************************************************************************/ {
"x": "If you leave the date off when entering data on Beeminder it will helpfully explain that you have to give the date explicitly #cuzofreasons",
"l": "https://twitter.com/beemuvi/status/112353500347908097",
"e": "2011-09-10 02:35:36 +0000",
}, /*************************************************************************/ {
"x": "Changes to the bot emails to start nudging toward saner data format: Day of the month, amount, optional comment.",
"l": "https://twitter.com/beemuvi/status/112984991633391616",
"e": "2011-09-11 20:24:55 +0000",
}, /*************************************************************************/ {
"x": "Don't report number, we assume it stayed same as ystrday. for consistncy this now applies even when flatlining helps, eg a quit-smoking goal",
"l": "https://twitter.com/beemuvi/status/113503927718256641",
"e": "2011-09-13 06:46:59 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: The naming of Beeminder: <a href=\"http://blog.beeminder.com/beenamer\">blog.beeminder.com/beenamer</a> (and the story of its former name, Kibotzer)",
"l": "https://twitter.com/bmndr/status/114856760296210432",
"e": "2011-09-17 00:22:40 +0000",
}, /*************************************************************************/ {
"x": "Bug fix: Leniency rule for weight loss graphs (UVI#181) could cause a discontinuity in the yellow brick road when you reset",
"l": "https://twitter.com/beemuvi/status/115457769993281536",
"e": "2011-09-18 16:10:52 +0000",
}, /*************************************************************************/ {
"x": "If you don't specify a goal date it defaults to a year after the start (or reset) of your yellow brick road. (Wasn't always true before.)",
"l": "https://twitter.com/beemuvi/status/115458285741674496",
"e": "2011-09-18 16:12:55 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: if the title of your graph was a certain length it would wrap instead of truncate and mess up the alignment of the headers",
"l": "https://twitter.com/beemuvi/status/115915422133534720",
"e": "2011-09-19 22:29:24 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "You can now talk to the Beeminder bot via text message: <a href=\"http://blog.beeminder.com/textbot\">blog.beeminder.com/textbot</a>",
"l": "https://twitter.com/beemuvi/status/116644972001902592",
"e": "2011-09-21 22:48:23 +0000",
}, /*************************************************************************/ {
"x": "The whole site uses SSL now. No longer can your enemies sniff your net traffic and modify your weight to make you go off your road.",
"l": "https://twitter.com/beemuvi/status/116645721997967360",
"e": "2011-09-21 22:51:21 +0000",
}, /*************************************************************************/ {
"x": "Timezones! See \"My Account\" settings. Shout out to our beta users in Europe, South Africa, and Australia.",
"l": "https://twitter.com/beemuvi/status/116734428570595328",
"e": "2011-09-22 04:43:51 +0000",
}, /*************************************************************************/ {
"x": "Tweaks to the textbot: how it replies, making it auto-decay like the emails do so you don't have to explicitly tell it to stop bugging you.",
"l": "https://twitter.com/beemuvi/status/116904119335260160",
"e": "2011-09-22 15:58:08 +0000",
}, /*************************************************************************/ {
"x": "By default your timezone is NYC -- change it at <a href=\"http://bmndr.com/settings/account\">bmndr.com/settings/account</a> -- and your graph will refresh at 3am in whatever timezone you specify",
"l": "https://twitter.com/beemuvi/status/117011701941022720",
"e": "2011-09-22 23:05:38 +0000",
}, /*************************************************************************/ {
"x": "We no longer impose an initial week of flat yellow brick road when you start a new goal. See bottom of goal creation form.",
"l": "https://twitter.com/beemuvi/status/117355173285855232",
"e": "2011-09-23 21:50:28 +0000",
}, /*************************************************************************/ {
"x": "Improvements to reminder settings page, such as a link to your account settings to change timezone. Also sms bugfix with long sms responses.",
"l": "https://twitter.com/beemuvi/status/117355729773535233",
"e": "2011-09-23 21:52:41 +0000",
}, /*************************************************************************/ {
"x": "Reeminders should now come at the exact time you specify. Thanks again to <a href=\"https://twitter.com/gracenotesnyc\">@gracenotesnyc</a>!",
"l": "https://twitter.com/beemuvi/status/117673468404838400",
"e": "2011-09-24 18:55:15 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: The switch to SSL had broken the password reset mechanism. Thanks to Uluc Saranli and <a href=\"https://twitter.com/gracenotesnyc\">@gracenotesnyc</a>.",
"l": "https://twitter.com/beemuvi/status/118001511354736640",
"e": "2011-09-25 16:38:47 +0000",
}, /*************************************************************************/ {
"x": "Fixed a couple annoyances with the interface for setting initial value, goal, goal date, and rate on new goal creation page.",
"l": "https://twitter.com/beemuvi/status/118002145474785281",
"e": "2011-09-25 16:41:18 +0000",
}, /*************************************************************************/ {
"x": "Better data parsing: more intelligently disambiguates the date when given as just the day of the month, like: 25 228 \"up to 228 on the 25th\"",
"l": "https://twitter.com/beemuvi/status/118114874722238465",
"e": "2011-09-26 00:09:15 +0000",
}, /*************************************************************************/ {
"x": "Data format w/ month or year and month deprecated. You can use it but you'll never see any data displayed that way. See <a href=\"http://bmndr.com/faq\">bmndr.com/faq</a>",
"l": "https://twitter.com/beemuvi/status/118245410291724288",
"e": "2011-09-26 08:47:57 +0000",
}, /*************************************************************************/ {
"x": "Road reset page reassures you that all your data stays accessible when you reset with a new contract. (Also fixed an SSL issue.)",
"l": "https://twitter.com/beemuvi/status/118529487171354624",
"e": "2011-09-27 03:36:46 +0000",
}, /*************************************************************************/ {
"x": "Mouse over a datapoint to see details about it like when and how it was entered. Better explanation of \"slug\" in the new goal creation form.",
"l": "https://twitter.com/beemuvi/status/118747669534482432",
"e": "2011-09-27 18:03:45 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"https://twitter.com/jmccoh\">@jmccoh</a> Yes, it no longer lets you enter hyphens or other disallowed characters in the slug. Thanks for reminding us of that UVI :)",
"l": "https://twitter.com/beemuvi/status/118778347693162496",
"e": "2011-09-27 20:05:39 +0000",
}, /*************************************************************************/ {
"x": "Simplified <a href=\"http://bmndr.com/contract\">bmndr.com/contract</a> & your official weight each day is the min of all weights recorded. PS follow <a href=\"https://twitter.com/bmndr\">@bmndr</a> for the important stuff",
"l": "https://twitter.com/beemuvi/status/118814035432054784",
"e": "2011-09-27 22:27:28 +0000",
}, /*************************************************************************/ {
"x": "New taglines: \"Beeminder: Reminders with a sting\", \"Beeminder: Automated accountability\", and \"Beeminder: The Me-binder\"",
"l": "https://twitter.com/beemuvi/status/119434736560123905",
"e": "2011-09-29 15:33:54 +0000",
}, /*************************************************************************/ {
"x": "Warning on goal creation: \"Leave these blank for now unless you're sure what a realistic rate for your YBR is...ready to commit immediately\"",
"l": "https://twitter.com/beemuvi/status/119560366974963712",
"e": "2011-09-29 23:53:07 +0000",
}, /* --------------------------------------------------------- end 2011sep */ ]

batches['2011oct'] = [
{
"x": "Number of safety buffer days (how long till you go off the YBR if you do nothing) now in the subject of bot reminder emails & sms reminders",
"l": "https://twitter.com/beemuvi/status/120026613676126208",
"e": "2011-10-01 06:45:49 +0000",
}, /*************************************************************************/ {
"x": "Robustifying of the date disambiguator, accounting for users' timezones. Related bugfix. Plus unrelated bugfix with reminder emails.",
"l": "https://twitter.com/beemuvi/status/120698653030625280",
"e": "2011-10-03 03:16:16 +0000",
}, /*************************************************************************/ {
"x": "We no longer confusingly ask for \"goal statement\" when creating a goal. Instead we have a link to set it in context on your goal page later.",
"l": "https://twitter.com/beemuvi/status/120700285004943360",
"e": "2011-10-03 03:22:45 +0000",
}, /*************************************************************************/ {
"x": "Fixed a small glitch in goal creation page, and friendlified some errors like \"slug can only have letters & numbers\" vs \"slug is invalid\"",
"l": "https://twitter.com/beemuvi/status/120858433313452032",
"e": "2011-10-03 13:51:10 +0000",
}, /*************************************************************************/ {
"x": "Streamlined the sms reminder messages and error responses. Made \"iff\" not look like a typo (on page for starting new commitment contract).",
"l": "https://twitter.com/beemuvi/status/121275067878473728",
"e": "2011-10-04 17:26:44 +0000",
}, /*************************************************************************/ {
"x": "Some useful mouseover info for the main graph image. Note quite this yet -- <a href=\"https://beeminder.uservoice.com/forums/3011-general/suggestions/2280706-you-ve-added-some-good-mouseovers-how-about-putti\">beeminder.uservoice.com/forums/3011-general/suggestions/2280706-you-ve-added-some-good-mouseovers-how-about-putti</a> -- but we'll get there.",
"l": "https://twitter.com/beemuvi/status/121472689515937792",
"e": "2011-10-05 06:32:00 +0000",
}, /*************************************************************************/ {
"x": "Goal Archetypes! When you create a new goal you pick from 10 goal types, some general like Do More and some specific like Inbox Fewer.",
"l": "https://twitter.com/beemuvi/status/121830642982977536",
"e": "2011-10-06 06:14:23 +0000",
}, /*************************************************************************/ {
"x": "Removed some javascript diagnostics that was making <a href=\"https://twitter.com/bmndr\">@bmndr</a> glacial. Let us know if you see continued slowness or other glitches!",
"l": "https://twitter.com/beemuvi/status/121951541182742529",
"e": "2011-10-06 14:14:47 +0000",
}, /*************************************************************************/ {
"x": "Big improvements to the new goal creation form. Much less confusing now, though too much prose, and lots more to do...",
"l": "https://twitter.com/beemuvi/status/122213018410029057",
"e": "2011-10-07 07:33:48 +0000",
}, /*************************************************************************/ {
"x": "Couple small bug fixes thanks to the <a href=\"https://twitter.com/lesswrong\">@lesswrong</a> folks: <a href=\"http://lesswrong.com/lw/7z1/antiakrasia_tool_like_stickkcom_for_data_nerds\">lesswrong.com/lw/7z1/antiakrasia_tool_like_stickkcom_for_data_nerds</a> (plus various friendlifying of error messages & tweaks to prose)",
"l": "https://twitter.com/beemuvi/status/122447852575264768",
"e": "2011-10-07 23:06:57 +0000",
}, /*************************************************************************/ {
"x": "(Half-dozen UVIs packed into last tweet. Big safety buffer on <a href=\"http://bmndr.com/meta/uvi\">bmndr.com/meta/uvi</a> and we don't want to further overwhelm you.)",
"l": "https://twitter.com/beemuvi/status/122448423298404352",
"e": "2011-10-07 23:09:13 +0000",
}, /*************************************************************************/ {
"x": "Check out the Import/Export links on your graph page. Annoying to export dates as unixtime or do only supernerds care about export anyway?",
"l": "https://twitter.com/beemuvi/status/122576956792385536",
"e": "2011-10-08 07:39:58 +0000",
}, /*************************************************************************/ {
"x": "New Goal form only asks for starting value for types of goals that need one. Plus a bug fix in how text msgs are truncated thanks to <a href=\"https://twitter.com/jmccoh\">@jmccoh</a>",
"l": "https://twitter.com/beemuvi/status/122859798332051456",
"e": "2011-10-09 02:23:53 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/tagtm\">@tagtm</a>: TagTime can be integrated with Beeminder with far less fuss now. Let us know if you want to try it.",
"l": "https://twitter.com/tagtm/status/121686159633027072",
"e": "2011-10-05 20:40:15 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Massive UVI: We're proud & excited to announce that <a href=\"https://twitter.com/bmndr\">@bmndr</a> is now open to the public. Immense thanks to our beta users. <a href=\"http://bmndr.com\">bmndr.com</a>",
"l": "https://twitter.com/beemuvi/status/123657746368307200",
"e": "2011-10-11 07:14:38 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"https://twitter.com/jmccoh\">@jmccoh</a> Instead of teaching people about unixtime we (ie, <a href=\"https://twitter.com/thatgirl\">@thatgirl</a>) just fixed it so it exports as normal-person dates.",
"l": "https://twitter.com/beemuvi/status/123977138037723136",
"e": "2011-10-12 04:23:47 +0000",
}, /*************************************************************************/ {
"x": "Graphs that are auto-summed are visually distinct, w/ a link to explain auto-summing. <a href=\"http://bmndr.com/faq\">bmndr.com/faq</a> (also lots of new stuff in FAQ!)",
"l": "https://twitter.com/beemuvi/status/123978009161113601",
"e": "2011-10-12 04:27:15 +0000",
}, /*************************************************************************/ {
"x": "New blog post <a href=\"http://blog.beeminder.com/launch\">blog.beeminder.com/launch</a> & RT <a href=\"https://twitter.com/bmndr\">@bmndr</a> Beeminder in 3tweets: It's like <a href=\"https://twitter.com/stickK\">@stickK</a> -- cash commitment contracts to force yourself to...",
"l": "https://twitter.com/beemuvi/status/124278038010662914",
"e": "2011-10-13 00:19:27 +0000",
}, /*************************************************************************/ {
"x": "First attempt is free -- <a href=\"http://bmndr.com/money\">bmndr.com/money</a> -- but now, by popular demand, you can start a commitment contract immediately if you want to",
"l": "https://twitter.com/beemuvi/status/124505284839350272",
"e": "2011-10-13 15:22:27 +0000",
}, /*************************************************************************/ {
"x": "Fixed glitch with road dial. Better blurbs for goal types when creating new goal. New bee logo on <a href=\"http://uservoice.beeminder.com\">uservoice.beeminder.com</a> (3-for-1 UVI special)",
"l": "https://twitter.com/beemuvi/status/124727770348662784",
"e": "2011-10-14 06:06:32 +0000",
}, /*************************************************************************/ {
"x": "3 bugfixes: dealing w/ blank lines in data form, letters entered as phone number, bug pointed out by <a href=\"https://twitter.com/pennockd\">@pennockd</a> at <a href=\"http://blog.beeminder.com/launch\">blog.beeminder.com/launch</a>",
"l": "https://twitter.com/beemuvi/status/125276333772247041",
"e": "2011-10-15 18:26:20 +0000",
}, /*************************************************************************/ {
"x": "Fixed issue that made graph update when you first create a new goal extra slow. Multiple tweaks to goal creation form. Road dial glitch fix.",
"l": "https://twitter.com/beemuvi/status/125680842310828032",
"e": "2011-10-16 21:13:42 +0000",
}, /*************************************************************************/ {
"x": "Hover effect for links at the bottom of the page were screwy in Firefox (still investigating issues in Chromium/Linux). Thx for alerting us!",
"l": "https://twitter.com/beemuvi/status/126401740781268992",
"e": "2011-10-18 20:58:18 +0000",
}, /*************************************************************************/ {
"x": "Blogspam was showing up with javascript off. Thanks to <a href=\"https://twitter.com/pjeby\">@pjeby</a> for pointing it out at <a href=\"http://blog.beeminder.com/dial\">blog.beeminder.com/dial</a>",
"l": "https://twitter.com/beemuvi/status/126402530077978625",
"e": "2011-10-18 21:01:26 +0000",
}, /*************************************************************************/ {
"x": "All javascript libraries and everything now load via SSL so you should never see that scary crossed-out \"https\" in the address bar. (Right?)",
"l": "https://twitter.com/beemuvi/status/126531569530843136",
"e": "2011-10-19 05:34:11 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Data point editor didn't accept its own date format in some browsers. Sorry about our crappy cross-platform testing!",
"l": "https://twitter.com/beemuvi/status/126853683349700608",
"e": "2011-10-20 02:54:09 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: New blog post: The Want-Can-Will Test for Akrasia <a href=\"http://blog.beeminder.com/wantcanwill\">blog.beeminder.com/wantcanwill</a>",
"l": "https://twitter.com/bmndr/status/128320027890954240",
"e": "2011-10-24 04:00:53 +0000",
}, /*************************************************************************/ {
"x": "New blurb on frozen goals: \"You drove off the road! Was that legit? If so, please reset to try again, otherwise email support@beeminder.com\"",
"l": "https://twitter.com/beemuvi/status/128951507482714113",
"e": "2011-10-25 21:50:09 +0000",
}, /*************************************************************************/ {
"x": "Bugfix for certain browsers where datapt editor didn't accept its own date format. (mini vacation =&gt; shocking backlog on customer support!)",
"l": "https://twitter.com/beemuvi/status/129351047071272960",
"e": "2011-10-27 00:17:47 +0000",
}, /*************************************************************************/ {
"x": "Tweaks & streamlining of the blurbs in goal creation page. Tweaks to navbar on the blog (see bee icon). Goals with no datapoints deletable.",
"l": "https://twitter.com/beemuvi/status/129798661998788608",
"e": "2011-10-28 05:56:27 +0000",
}, /*************************************************************************/ {
"x": "Changed \"slug\" to pick url: <a href=\"http://bmndr.com/alice/___\">bmndr.com/alice/___</a> plus other tweaks. [Doh! doubletweeted last bugfix UVI; compensating w/ multi-UVI tweets]",
"l": "https://twitter.com/beemuvi/status/130150643599028224",
"e": "2011-10-29 05:15:06 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: slug was leaked in html source for secret goals. Luckily no one really has secret goals yet! [PS: call us out on double tweets!]",
"l": "https://twitter.com/beemuvi/status/130151738664697858",
"e": "2011-10-29 05:19:27 +0000",
}, /*************************************************************************/ {
"x": "New Beeminder taglines in rotation: <a href=\"http://doc.beeminder.com/beeminder-taglines\">doc.beeminder.com/beeminder-taglines</a> (latest: make a beeline for your goal)",
"l": "https://twitter.com/beemuvi/status/130403856705265664",
"e": "2011-10-29 22:01:16 +0000",
}, /*************************************************************************/ {
"x": "When you're signed in you see (under your avatar) the total amount you have pledged towards how many yellow brick roads. HT Rodrigo Belo",
"l": "https://twitter.com/beemuvi/status/130803014385668096",
"e": "2011-10-31 00:27:23 +0000",
}, /* ---------------------------------------------------------- end 2011oc */ ]

batches['2011nov'] = [
{
"x": "Bugfix in datepicker when setting goal date that made calendar show up 1st time you click date, but not 2nd time.",
"l": "https://twitter.com/beemuvi/status/131992467225591808",
"e": "2011-11-03 07:13:51 +0000",
}, /*************************************************************************/ {
"x": "Slight clarification to time format in remind time form (show AM if AM), other reminder form tweaks, full title in mouseovers in gallery.",
"l": "https://twitter.com/beemuvi/status/131993234439274497",
"e": "2011-11-03 07:16:54 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Chunky Time: how and why you can beemind things you only do in sporadic chunks of time. <a href=\"http://blog.beeminder.com/chunky\">blog.beeminder.com/chunky</a>",
"l": "https://twitter.com/bmndr/status/132141970561843200",
"e": "2011-11-03 17:07:55 +0000",
}, /*************************************************************************/ {
"x": "If graph generation chokes for one person it now shouldn't affect anyone else. If a graph ever takes more than a few minutes, let us know!",
"l": "https://twitter.com/beemuvi/status/133676383057620994",
"e": "2011-11-07 22:45:07 +0000",
}, /*************************************************************************/ {
"x": "Fixed stupid bug in datapoint editor where it would complain if you had any spaces in the field that wants a number. PS <a href=\"http://plus.google.com/118275811754025086770\">plus.google.com/118275811754025086770</a>",
"l": "https://twitter.com/beemuvi/status/134048371483754496",
"e": "2011-11-08 23:23:16 +0000",
}, /*************************************************************************/ {
"x": "Rough version of graph legend in the sidebar. Thanks <a href=\"https://twitter.com/rodguze\">@rodguze</a> of <a href=\"https://twitter.com/idonethis\">@idonethis</a> and other users who have suggested this!",
"l": "https://twitter.com/beemuvi/status/134408615216947201",
"e": "2011-11-09 23:14:45 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: hitting MAKEITSO while graph was busy would sometimes cause an error. & lots of server-side growing pains but that's not user-visbl!",
"l": "https://twitter.com/beemuvi/status/135249802731585536",
"e": "2011-11-12 06:57:20 +0000",
}, /*************************************************************************/ {
"x": "Check out our much-improved About page: <a href=\"http://beeminder.com/about\">beeminder.com/about</a>",
"l": "https://twitter.com/beemuvi/status/135917928590749696",
"e": "2011-11-14 03:12:14 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: New Beeminder dog food contracts: <a href=\"http://blog.beeminder.com/blogdog\">blog.beeminder.com/blogdog</a>",
"l": "https://twitter.com/bmndr/status/135950837548724224",
"e": "2011-11-14 05:23:00 +0000",
}, /*************************************************************************/ {
"x": "Baby step toward nixing the miasma of confusion around cumulative graphs: y-axis for \"Do More\" graphs now \"cumulative total\"",
"l": "https://twitter.com/beemuvi/status/136616261017796608",
"e": "2011-11-16 01:27:09 +0000",
}, /*************************************************************************/ {
"x": "Recent data & new data below the graph line up all nicely now. Cf <a href=\"https://twitter.com/dreev\">@dreev</a> & <a href=\"https://twitter.com/thatgirl\">@thatgirl</a> laundering stackoverflow points: <a href=\"http://stackoverflow.com/questions/8130429/make-a-list-of-values-line-up-with-a-textarea-and-labels\">stackoverflow.com/questions/8130429/make-a-list-of-values-line-up-with-a-textarea-and-labels</a>",
"l": "https://twitter.com/beemuvi/status/136617181684301824",
"e": "2011-11-16 01:30:48 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: the email bot would screw up if the comment for a data point was too long",
"l": "https://twitter.com/beemuvi/status/137017641561894912",
"e": "2011-11-17 04:02:06 +0000",
}, /*************************************************************************/ {
"x": "PSA: T minus one week to Thanksgiving. <a href=\"http://blog.beeminder.com/tg\">blog.beeminder.com/tg</a> (adjust your road dials while Thanksgiving is still beyond the akrasia horizon!)",
"l": "https://twitter.com/beemuvi/status/137384338210828288",
"e": "2011-11-18 04:19:13 +0000",
}, /*************************************************************************/ {
"x": "Thumbnails in galleries no longer take 2 refreshes to reflect newly added data. This matters a lot in conjunction with the next UVI...",
"l": "https://twitter.com/beemuvi/status/137744215198285824",
"e": "2011-11-19 04:09:14 +0000",
}, /*************************************************************************/ {
"x": "Graphs now have a watermark showing number of safety buffer days and how much you've pledged to stay on track",
"l": "https://twitter.com/beemuvi/status/137970042032754689",
"e": "2011-11-19 19:06:36 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: alerts now stay put so you can copy/paste, eg, the support email address. Thx <a href=\"https://twitter.com/jmillikin\">@jmillikin</a>; for this too: <a href=\"https://plus.google.com/117999270348804266828/posts/8HEWtm88ctr\">plus.google.com/117999270348804266828/posts/8HEWtm88ctr</a>",
"l": "https://twitter.com/beemuvi/status/138107755516006401",
"e": "2011-11-20 04:13:49 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: timezone/DST error for users in Sydney (but users in Perth were unaffected, strangely). (<a href=\"https://twitter.com/bmndr\">@bmndr</a> is big in Australia for some reason)",
"l": "https://twitter.com/beemuvi/status/138385065297182720",
"e": "2011-11-20 22:35:45 +0000",
}, /*************************************************************************/ {
"x": "Nicer rules: less than 7 datapoints means you can reset without pledging. We only want your $ after we've provided valuable pants-kicking!",
"l": "https://twitter.com/beemuvi/status/139158245519523841",
"e": "2011-11-23 01:48:05 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Announcing the Beeminder Mac Dashboard Widget: <a href=\"http://blog.beeminder.com/widget\">blog.beeminder.com/widget</a>",
"l": "https://twitter.com/bmndr/status/142051924462665728",
"e": "2011-12-01 01:26:32 +0000",
}, /* --------------------------------------------------------- end 2011nov */ ]

batches['2011dec'] = [
{
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Another post-hoc justification for the name \"beeminder\": You use <a href=\"https://twitter.com/bmndr\">@bmndr</a> because you want to be minded. <a href=\"http://blog.beeminder.com/beenamer\">blog.beeminder.com/beenamer</a>",
"l": "https://twitter.com/bmndr/status/142695414569771008",
"e": "2011-12-02 20:03:32 +0000",
}, /*************************************************************************/ {
"x": "As a compromise between this camp <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/2353108-let-us-delete-goals\">beeminder.uservoice.com/forums/3011-general/suggestions/2353108-let-us-delete-goals</a> and this camp <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/2365715-lack-of-ui-a-feature-proceed-carefully-and-implem\">beeminder.uservoice.com/forums/3011-general/suggestions/2365715-lack-of-ui-a-feature-proceed-carefully-and-implem</a> we're trying this compromise: ephemeral goals!",
"l": "https://twitter.com/beemuvi/status/142739528384385025",
"e": "2011-12-02 22:58:50 +0000",
}, /*************************************************************************/ {
"x": "The watermark on ephemeral (ie, temporary test) goals now says \"TEST\". Try creating a new goal if you're not sure what we're talking about.",
"l": "https://twitter.com/beemuvi/status/143120719432257536",
"e": "2011-12-04 00:13:33 +0000",
}, /*************************************************************************/ {
"x": "Some smart (ie, too-clever-for-their-own-good) phones were sending us fancy curly quotes around comments. The bot now understand those.",
"l": "https://twitter.com/beemuvi/status/143482510486151169",
"e": "2011-12-05 00:11:10 +0000",
}, /*************************************************************************/ {
"x": "Updated hover text for export & import links, with explanation of how to import by just pasting historical data into the web form.",
"l": "https://twitter.com/beemuvi/status/143794282619342849",
"e": "2011-12-05 20:50:03 +0000",
}, /*************************************************************************/ {
"x": "We got interviewed for the #quantifiedself blog and made the <a href=\"https://twitter.com/bmndr\">@bmndr</a> blog faster/robuster in anticipation. <a href=\"http://quantifiedself.com/2011/12/toolmaker-talk-bethany-soule-daniel-reeves-beeminder/\">quantifiedself.com/2011/12/toolmaker-talk-bethany-soule-daniel-reeves-beeminder/</a>",
"l": "https://twitter.com/beemuvi/status/144519593115918338",
"e": "2011-12-07 20:52:10 +0000",
}, /*************************************************************************/ {
"x": "You can now declutter your personal goal gallery by shoving graphs below the fold. HT <a href=\"https://twitter.com/dggoldst\">@dggoldst</a>",
"l": "https://twitter.com/beemuvi/status/144890706647982080",
"e": "2011-12-08 21:26:51 +0000",
}, /*************************************************************************/ {
"x": "Oops, previous UVI indirectly caused a bug where the graphs wouldn't un-opaque when they finished refreshing. Fixed now.",
"l": "https://twitter.com/beemuvi/status/144899232489406464",
"e": "2011-12-08 22:00:43 +0000",
}, /*************************************************************************/ {
"x": "Watermark on graphs will, from now on, show the amount that was pledged even after you reach the end of your yellow brick road.",
"l": "https://twitter.com/beemuvi/status/145536097450070016",
"e": "2011-12-10 16:11:24 +0000",
}, /*************************************************************************/ {
"x": "New version of TagTime on Android Market and, if that doesn't count as part of <a href=\"https://twitter.com/bmndr\">@bmndr</a>, also fixed glitches w/ shoving graphs below the fold",
"l": "https://twitter.com/beemuvi/status/145908703852363776",
"e": "2011-12-11 16:52:00 +0000",
}, /*************************************************************************/ {
"x": "UVI#283 was overzealous. We now let the browser cache thumbnails unless they've actually changed.",
"l": "https://twitter.com/beemuvi/status/146313032212037632",
"e": "2011-12-12 19:38:39 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: inconsistency between watermark and pledge amount after a pledge was paid. Also tightened security for entering datapoints.",
"l": "https://twitter.com/beemuvi/status/147254230086983680",
"e": "2011-12-15 09:58:38 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: You could sometimes create a new goal with no initial datapoint, which caused Beeminder all manner of confusion",
"l": "https://twitter.com/beemuvi/status/147412702522900480",
"e": "2011-12-15 20:28:21 +0000",
}, /*************************************************************************/ {
"x": "Two new versions of the default avatar (bitty bee larva and bee in profile). Which is better? (Click around in the main gallery to see them)",
"l": "https://twitter.com/beemuvi/status/147839682980483072",
"e": "2011-12-17 00:45:01 +0000",
}, /*************************************************************************/ {
"x": "Thanks to <a href=\"https://twitter.com/pruneau\">@pruneau</a> for prompting us to finally stop using \"safe days\" on Set-a-Limit graphs where that doesn't make sense",
"l": "https://twitter.com/beemuvi/status/148957555425681408",
"e": "2011-12-20 02:47:03 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Since road width depends on steepness, crossing a kink in the road could make it shrink out from under you",
"l": "https://twitter.com/beemuvi/status/149082809171054592",
"e": "2011-12-20 11:04:46 +0000",
}, /*************************************************************************/ {
"x": "Related bugfix: Bare min / hard cap now account properly for upcoming changes in road steepness",
"l": "https://twitter.com/beemuvi/status/149083039924895744",
"e": "2011-12-20 11:05:41 +0000",
}, /*************************************************************************/ {
"x": "We deployed a completely new design!",
"l": "https://twitter.com/beemuvi/status/149231875184013312",
"e": "2011-12-20 20:57:06 +0000",
}, /*************************************************************************/ {
"x": "This redesign should count as dozens of UVIs. But we'll just add this: just did a bunch of tweaking to the web copy. <a href=\"http://beeminder.com\">beeminder.com</a>",
"l": "https://twitter.com/beemuvi/status/149245485050363904",
"e": "2011-12-20 21:51:11 +0000",
}, /*************************************************************************/ {
"x": "Tweaks to menus, layouts, etc. And new tagline: Safety rope for slippery slopes. (Too obtuse? We mean slippery slopes of sloth...)",
"l": "https://twitter.com/beemuvi/status/149416454456999936",
"e": "2011-12-21 09:10:33 +0000",
}, /*************************************************************************/ {
"x": "Added some padding so the Feedback button doesn't overlap the text if you make your browser too skinny. HT Judy Soule.",
"l": "https://twitter.com/beemuvi/status/149635192154374145",
"e": "2011-12-21 23:39:44 +0000",
}, /*************************************************************************/ {
"x": "The mouseovers (like for the graph itself & for goal progress/stats) now refresh properly when you add a new datapoint. HT <a href=\"https://twitter.com/jsnikeris\">@jsnikeris</a> et al",
"l": "https://twitter.com/beemuvi/status/149637451781115905",
"e": "2011-12-21 23:48:43 +0000",
}, /*************************************************************************/ {
"x": "On new goal & new contract forms: clarify that goal date is extendable, glitch in display of credit card expiration month. HT <a href=\"https://twitter.com/jakehofman\">@jakehofman</a>",
"l": "https://twitter.com/beemuvi/status/149935455364853760",
"e": "2011-12-22 19:32:52 +0000",
}, /*************************************************************************/ {
"x": "Avatar upload says the max size (.5MB). HT <a href=\"https://twitter.com/johnleftwich\">@johnleftwich</a>. Also, gallery of featured beeminders: <a href=\"http://bmndr.com/featured\">bmndr.com/featured</a> Also, bug/glitch fixes.",
"l": "https://twitter.com/beemuvi/status/150185251753299968",
"e": "2011-12-23 12:05:28 +0000",
}, /*************************************************************************/ {
"x": "This is pretty nice: if you create a goal as a temporary/ephemeral goal and start using it, you can change your mind and make it permanent",
"l": "https://twitter.com/beemuvi/status/150185957545615360",
"e": "2011-12-23 12:08:17 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Chrome & firefox would let you double-submit data by double-clicking submit button. <a href=\"http://news.ycombinator.com/item?id=3389403\">news.ycombinator.com/item?id=3389403</a>",
"l": "https://twitter.com/beemuvi/status/150717424889626624",
"e": "2011-12-24 23:20:08 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Reminders now tell you the correct number of safe days even if you set your remind time to be right before the graph refresh time",
"l": "https://twitter.com/beemuvi/status/150718241109573632",
"e": "2011-12-24 23:23:23 +0000",
}, /*************************************************************************/ {
"x": "Removed limit of 60 for safe days; now shows true number of days till you go off the road or reach your goal, whichever comes first",
"l": "https://twitter.com/beemuvi/status/150718592642596864",
"e": "2011-12-24 23:24:47 +0000",
}, /*************************************************************************/ {
"x": "Y'know what bugs are the worst? Ones where people try to give you money and you give them an error instead of taking it. Fixed one of those.",
"l": "https://twitter.com/beemuvi/status/151210009131360258",
"e": "2011-12-26 07:57:30 +0000",
}, /*************************************************************************/ {
"x": "The \"My Account\" menu/dropdown should now work on the ipad, and possibly other tablets as well.",
"l": "https://twitter.com/beemuvi/status/151490276358234112",
"e": "2011-12-27 02:31:11 +0000",
}, /*************************************************************************/ {
"x": "Beeminder got prettier, plus a placeholder for historical graphs which are coming soon... (we'll tweet again when they're ready)",
"l": "https://twitter.com/beemuvi/status/152187274665267200",
"e": "2011-12-29 00:40:48 +0000",
}, /*************************************************************************/ {
"x": "Most people's historical graphs are now available. Let us know of glitches!",
"l": "https://twitter.com/beemuvi/status/152658519588474880",
"e": "2011-12-30 07:53:21 +0000",
}, /*************************************************************************/ {
"x": "Over Hooliday we learned that the less nerdy in our family find bmndr graphs intimidating so we added graph type \"Weight Loss for Non-Nerds\"",
"l": "https://twitter.com/beemuvi/status/152659370663084032",
"e": "2011-12-30 07:56:44 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: New blog post: Trackers vs Lifehackers <a href=\"http://blog.beeminder.com/trackhack\">blog.beeminder.com/trackhack</a> - list of data-tracking tools #quantifiedself",
"l": "https://twitter.com/bmndr/status/152999182435758080",
"e": "2011-12-31 06:27:02 +0000",
}, /* --------------------------------------------------------- end 2011dec */ ]

