var batch2013jan = [
{
"x": "Bethany's (<a href=\"https://twitter.com/thatgirl\">@thatgirl</a>) how-to video is on the front page now. We really need to redo it but we a/b tested and it's much better than nothing!",
"u": "https://twitter.com/beemuvi/status/287318784019161089",
"t": "2013-01-04 22:05:10 +0000",
}, /*************************************************************************/ {
"x": "API improvements: datapoints_count filter when fetching user, requestid parameter whn creating datapts, roadmatrix info <a href=\"http://beeminder.com/api\">beeminder.com/api</a>",
"u": "https://twitter.com/beemuvi/status/289481862940860416",
"t": "2013-01-10 21:20:29 +0000",
}, /*************************************************************************/ {
"x": "Does preventing our server being pwned by a rails vulnerability count as a UVI? We'll say no but the previous tweet was multiple UVIs in 1.",
"u": "https://twitter.com/beemuvi/status/289482738086584320",
"t": "2013-01-10 21:23:57 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: <a href=\"https://twitter.com/johnmarkos\">@johnmarkos</a> You can set your timezone under My Account -&gt; Profile. And as of yesterday it defaults to whatever your browser has set.",
"u": "https://twitter.com/bmndr/status/291297984803647488",
"t": "2013-01-15 21:37:06 +0000",
}, /*************************************************************************/ {
"x": "Default goal slug is now just the first word of whatever title you give. There were a few reasons the unwieldy slugs were a bad idea.",
"u": "https://twitter.com/beemuvi/status/291303175280029696",
"t": "2013-01-15 21:57:43 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: we were giving ugly errors when we didn't recognize certain timezones, like \"Asia/Dubai\" (&amp; note previous RT about timezone feature)",
"u": "https://twitter.com/beemuvi/status/291303320109330435",
"t": "2013-01-15 21:58:18 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: deleting a datapoint on Fitbit would cause Fitbit to tell Beeminder there was a new datapoint of zero; now we ignore 0's HT <a href=\"https://twitter.com/justynB\">@justynB</a>",
"u": "https://twitter.com/beemuvi/status/291316626928852992",
"t": "2013-01-15 22:51:10 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: settings breadcrumbs on all settings tabs, gray Start Contract btn upon click, sharper gallery thumbs, hide default goal statemt",
"u": "https://twitter.com/beemuvi/status/291676391794159617",
"t": "2013-01-16 22:40:45 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Rare error where updating credit card info along with re-railing would just ignore the new credit card info. #moneyburningbug",
"u": "https://twitter.com/beemuvi/status/292528455302647808",
"t": "2013-01-19 07:06:33 +0000",
}, /*************************************************************************/ {
"x": "Twas confusing how we showed Beeminder website itself as 1 of the auth'd clients in <a href=\"http://bmndr.com/apps\">bmndr.com/apps</a>, esp. if you revoked its access!",
"u": "https://twitter.com/beemuvi/status/293247233934118912",
"t": "2013-01-21 06:42:43 +0000",
}, /*************************************************************************/ {
"x": "Fixed the timezone bug where the graph would update for the following day if you updated between 11pm and midnight (some hackery involved)",
"u": "https://twitter.com/beemuvi/status/293501790043918336",
"t": "2013-01-21 23:34:14 +0000",
}, /*************************************************************************/ {
"x": "Bugfix w/ goal creation: we were creating initial datapoints according to servertime, not usertime (mostly benign til aforementiond hackery)",
"u": "https://twitter.com/beemuvi/status/293503141654171648",
"t": "2013-01-21 23:39:36 +0000",
}, /*************************************************************************/ {
"x": "Tweaks to the \"Your Account\" menu in the upper right, and put your timezone next to your avatar with a direct link to change it",
"u": "https://twitter.com/beemuvi/status/293625310266667008",
"t": "2013-01-22 07:45:03 +0000",
}, /*************************************************************************/ {
"x": "Countdown timers weren't live-updating in Chrome; now they are (Upgraded a jquery plugin). Also did this: <a href=\"https://trello.com/card/remove-underline-and-maybe-number-phases-of-goal-creation/4f079dbc30a67d1864012d6b/398\">trello.com/card/remove-underline-and-maybe-number-phases-of-goal-creation/4f079dbc30a67d1864012d6b/398</a>",
"u": "https://twitter.com/beemuvi/status/293627308235968513",
"t": "2013-01-22 07:53:00 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Temporary test goals are once again actually temporary. Blogging the details of this and other screw-ups shortly...",
"u": "https://twitter.com/beemuvi/status/294343104264273920",
"t": "2013-01-24 07:17:19 +0000",
}, /*************************************************************************/ {
"x": "API bugfix: diff_since operator precedence error caused us to return extra datapoints [fixed a while ago and forgot to tweet]",
"u": "https://twitter.com/beemuvi/status/295779725887033344",
"t": "2013-01-28 06:25:56 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: derail bug that made some goals do this weird limbo thing where the graph had skull&amp;crossbones, but the countdown gave an extra day",
"u": "https://twitter.com/beemuvi/status/295785071485546497",
"t": "2013-01-28 06:47:11 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: when creating new goal, the slug gave spurious/unfixable conflict error if the first word of title conflicted <a href=\"https://trello.com/card/bug-new-goal-slug-spurious-conflict-warning/4f079dbc30a67d1864012d6b/400\">trello.com/card/bug-new-goal-slug-spurious-conflict-warning/4f079dbc30a67d1864012d6b/400</a>",
"u": "https://twitter.com/beemuvi/status/296031296218624000",
"t": "2013-01-28 23:05:35 +0000",
}, /*************************************************************************/ {
"x": "Couple new taglines in rotation: \"Damoclean goal tracking\", \"Engineer yourself\" <a href=\"http://doc.beeminder.com/beeminder-taglines\">doc.beeminder.com/beeminder-taglines</a> HT <a href=\"https://twitter.com/shawnwillden\">@shawnwillden</a> (plus changelog link)",
"u": "https://twitter.com/beemuvi/status/296421930184101889",
"t": "2013-01-30 00:57:50 +0000",
}, /*************************************************************************/ {
"x": "3 UVIs in 1 to make up for previous cheapy: <a href=\"https://trello.com/card/possible-bug-with-associations-false/505b86f00c9dafca5be321cf/88\">trello.com/card/possible-bug-with-associations-false/505b86f00c9dafca5be321cf/88</a> (HT <a href=\"https://twitter.com/pjf\">@pjf</a>) <a href=\"https://trello.com/card/uncheck-start-flat-default-road-dial/4f079dbc30a67d1864012d6b/356\">trello.com/card/uncheck-start-flat-default-road-dial/4f079dbc30a67d1864012d6b/356</a> (HT <a href=\"https://twitter.com/LeahLibresco\">@LeahLibresco</a>) <a href=\"https://trello.com/card/500-on-gldt-2013-20-02/4f079dbc30a67d1864012d6b/379\">trello.com/card/500-on-gldt-2013-20-02/4f079dbc30a67d1864012d6b/379</a>",
"u": "https://twitter.com/beemuvi/status/296424583580491776",
"t": "2013-01-30 01:08:22 +0000",
}, /*************************************************************************/ {
"x": "Fixed a database index problem and made Beeminder (and apps!) noticeably faster! Video illustratn: <a href=\"http://www.youtube.com/watch?v=PmTZ0mSuIIA\">youtube.com/watch?v=PmTZ0mSuIIA</a> <a href=\"http://www.youtube.com/watch?v=lh5vYTPJXuE\">youtube.com/watch?v=lh5vYTPJXuE</a>",
"u": "https://twitter.com/beemuvi/status/297207111606210560",
"t": "2013-02-01 04:57:51 +0000",
}, /*************************************************************************/ ]

var batch2013feb = [
{
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Another revenue-destroying bug: for the last week, until today, we accidentally had the unfreeze/re-rail button disabled for everyone. Oy.",
"u": "https://twitter.com/bmndr/status/297439110052839424",
"t": "2013-02-01 20:19:44 +0000",
}, /*************************************************************************/ {
"x": "Much nicer looking buttons for stepping down a pledge level and shortcircuiting to higher levels. <a href=\"http://blog.beeminder.com/shortcircuit\">blog.beeminder.com/shortcircuit</a>",
"u": "https://twitter.com/beemuvi/status/297439462428930048",
"t": "2013-02-01 20:21:08 +0000",
}, /*************************************************************************/ {
"x": "Fixed the weird characters (eg &amp;#x27; for apostrophe) that had been appearing in some bot emails since upgrading to ruby 1.9.3 last week",
"u": "https://twitter.com/beemuvi/status/298536356685160448",
"t": "2013-02-04 20:59:48 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: countdown timer wasnt updating along w/ graph; we updated the countdown library &amp; missed a deprecation of the fn we called to update",
"u": "https://twitter.com/beemuvi/status/298537060694900736",
"t": "2013-02-04 21:02:36 +0000",
}, /*************************************************************************/ {
"x": "Small but important UX improvements: Don't default to zero on weight goals; ask for 'weight' not 'value' <a href=\"https://trello.com/card/weight-loss-default-zero/4f079dbc30a67d1864012d6b/402\">trello.com/card/weight-loss-default-zero/4f079dbc30a67d1864012d6b/402</a>",
"u": "https://twitter.com/beemuvi/status/299300211589791745",
"t": "2013-02-06 23:35:05 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: The DIAL-IT-IN button wasn't working in older versions of Safari. HT \nConny Kühne",
"u": "https://twitter.com/beemuvi/status/299318933503229952",
"t": "2013-02-07 00:49:29 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Error in email settings form, where some goals were getting ignored when you updated settings. HT @jbxf",
"u": "https://twitter.com/beemuvi/status/300011238778355712",
"t": "2013-02-08 22:40:27 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: The road dial was failing (in a new way!) in older versions of Safari due to us failing to include the right date parsing library",
"u": "https://twitter.com/beemuvi/status/300041741589950467",
"t": "2013-02-09 00:41:40 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Resetting sometimes caused \"road matrix out of order\" error due to timezones. BITE ME TIME! I DON'T LIKE YOU EITHER. HT <a href=\"https://twitter.com/carlcoryell\">@carlcoryell</a>",
"u": "https://twitter.com/beemuvi/status/300841220316471296",
"t": "2013-02-11 05:38:30 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: If you accidentally said u wanted a rate of +0.0001 till u'd lost 10kg it gave a nasty overflow; now it gives the usual obtuse error",
"u": "https://twitter.com/beemuvi/status/301210747172700160",
"t": "2013-02-12 06:06:53 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Precommit to Recommit: The Third Great Beeminder Epiphany. http://blog.beeminder.com/recommit/ (blog post about a new feature + nudge psychology)",
"u": "https://twitter.com/bmndr/status/301505557293056000",
"t": "2013-02-13 01:38:21 +0000",
}, /*************************************************************************/ {
"x": "Made the legit-check email give both the pledge you're paying and the new pledge, if you have precommit-to-recommit on",
"u": "https://twitter.com/beemuvi/status/301609001060278272",
"t": "2013-02-13 08:29:24 +0000",
}, /*************************************************************************/ {
"x": "Fixed various instances of white-on-yellow &amp; yellow-on-gray (usually just as hover effects, but still). For our ref: <a href=\"http://juicystudio.com/services/luminositycontrastratio.php\">juicystudio.com/services/luminositycontrastratio.php</a>",
"u": "https://twitter.com/beemuvi/status/301940628256866304",
"t": "2013-02-14 06:27:10 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: On Withings-linked goals checking the Precommit box didn't save the setting. HT <a href=\"https://twitter.com/PhilipHellyer\">@PhilipHellyer</a> &amp; <a href=\"https://twitter.com/ternus\">@ternus</a>",
"u": "https://twitter.com/beemuvi/status/302524048909402112",
"t": "2013-02-15 21:05:28 +0000",
}, /*************************************************************************/ {
"x": "Solved Mystery of the Disappearing Checkbox (glitchiness &amp; confusion w/ precommit-to-recommit if you'd started a countdown to lower pledge)",
"u": "https://twitter.com/beemuvi/status/302544405544464387",
"t": "2013-02-15 22:26:21 +0000",
}, /*************************************************************************/ {
"x": "Precommit-to-recommit improvement: Auto-rerail at same pledge amount if there's a stepdown in progress; don't cancel stepdown on auto-rerail",
"u": "https://twitter.com/beemuvi/status/302548159601725441",
"t": "2013-02-15 22:41:16 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/schwern\">@schwern</a>: Tracking Github commits &amp; issues closed w/Beeminder may be the greatest productivity boost of the 21st century. <a href=\"http://doc.beeminder.com/gitminder\">doc.beeminder.com/gitminder</a>",
"u": "https://twitter.com/schwern/status/303650232682549248",
"t": "2013-02-18 23:40:31 +0000",
}, /*************************************************************************/ {
"x": "Fixed an email bot error where it was barfing &amp; silently failing (instead of the usual \"cc'ing the humans\" reply) when it got a blank email",
"u": "https://twitter.com/beemuvi/status/304025813794312192",
"t": "2013-02-20 00:32:57 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: We had a bug last night and this morning that made bot reply emails have blank bodies. Fixed now. Sorry about that! HT <a href=\"https://twitter.com/ternus\">@ternus</a>",
"u": "https://twitter.com/bmndr/status/304438367096012800",
"t": "2013-02-21 03:52:17 +0000",
}, /*************************************************************************/ {
"x": "We were a little trigger happy with regenerating the graph; no longer doing so for things like clicking the button to reduce the pledge amt",
"u": "https://twitter.com/beemuvi/status/304444952576917505",
"t": "2013-02-21 04:18:27 +0000",
}, /*************************************************************************/ {
"x": "We now send you an email when you successfully reach the end of your yellow brick road. In other news, until now we stupidly didn't do that.",
"u": "https://twitter.com/beemuvi/status/304794003835080705",
"t": "2013-02-22 03:25:27 +0000",
}, /*************************************************************************/ {
"x": "GitHub logo on front page. Discuss Gitminder on Hacker News here: <a href=\"http://news.ycombinator.com/item?id=5265687\">news.ycombinator.com/item?id=5265687</a>",
"u": "https://twitter.com/beemuvi/status/305029335805476864",
"t": "2013-02-22 19:00:35 +0000",
}, /*************************************************************************/ {
"x": "Nicer navigation in goal settings. And datapoints list is now there too, hopefully easier to find than the All Data link...",
"u": "https://twitter.com/beemuvi/status/305070296925364224",
"t": "2013-02-22 21:43:21 +0000",
}, /*************************************************************************/ {
"x": "Also the datapoints list is more readable, and the pagination links don't look all glitchy (and that purges the last of the kibotzer blue)",
"u": "https://twitter.com/beemuvi/status/305070387971125248",
"t": "2013-02-22 21:43:43 +0000",
}, /*************************************************************************/ {
"x": "We force you to update your cc info now if a charge fails. We also *allow* you to update your cc info if a charge fails. HT <a href=\"https://twitter.com/cyberroland\">@cyberroland</a>",
"u": "https://twitter.com/beemuvi/status/305467940906606592",
"t": "2013-02-24 00:03:27 +0000",
}, /*************************************************************************/ {
"x": "We rewrote <a href=\"http://beeminder.com/money\">beeminder.com/money</a> in anticipation of changes to how deleting goals work; eg \"you can create several freebee goals like that\"",
"u": "https://twitter.com/beemuvi/status/305468337444511744",
"t": "2013-02-24 00:05:01 +0000",
}, /*************************************************************************/ {
"x": "Bot emails describe the buzzing off state more succinctly, consolidated reminders page indicates which goals are buzzing off. HT Justin Kwok",
"u": "https://twitter.com/beemuvi/status/306281551606468608",
"t": "2013-02-26 05:56:26 +0000",
}, /*************************************************************************/ {
"x": "Cleaned up various alignment problems on the fwomp page (where you can adjust reminder settings for all goals in 1 place) HT Thomas Berkhout",
"u": "https://twitter.com/beemuvi/status/306281646934593536",
"t": "2013-02-26 05:56:49 +0000",
}, /*************************************************************************/ {
"x": "[2 tweets &gt; 2 UVIs] Justin: <a href=\"https://plus.google.com/100319877423072491516/posts\">plus.google.com/100319877423072491516/posts</a> Thomas: <a href=\"https://plus.google.com/116189040554404129900/about\">plus.google.com/116189040554404129900/about</a> Trello: <a href=\"https://trello.com/card/buzzing-off-on-fwomp-page/4f079dbc30a67d1864012d6b/458\">trello.com/card/buzzing-off-on-fwomp-page/4f079dbc30a67d1864012d6b/458</a> <a href=\"https://trello.com/card/lay-out-of-e-mail-settings-is-a-bit-off/4f079dbc30a67d1864012d6b/451\">trello.com/card/lay-out-of-e-mail-settings-is-a-bit-off/4f079dbc30a67d1864012d6b/451</a>",
"u": "https://twitter.com/beemuvi/status/306282866860498944",
"t": "2013-02-26 06:01:40 +0000",
}, /*************************************************************************/ {
"x": "Checkbox on individual goal reminder settings to only get wrong-lane &amp; eep reminders (macro that unchecks all days of the week) HT <a href=\"https://twitter.com/tblakers\">@tblakers</a>",
"u": "https://twitter.com/beemuvi/status/306599567854563328",
"t": "2013-02-27 03:00:07 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: If your credit card had problems we weren't letting you switch to Chirpify/Paypal betw UVI#737 &amp; now. HT <a href=\"https://twitter.com/pankajmore\">@pankajmore</a>",
"u": "https://twitter.com/beemuvi/status/306790306806890497",
"t": "2013-02-27 15:38:03 +0000",
}, /*************************************************************************/ ]

var batch2013mar = [
{
"x": "Bugfix: Gitminder reminder emails have been confusingly prompting you to reply with data even though the whole point is it's automated now!",
"u": "https://twitter.com/beemuvi/status/309188577303093248",
"t": "2013-03-06 06:27:55 +0000",
}, /*************************************************************************/ {
"x": "Now more obvious who you're unsubscribing, to prevent someone unsubscribing you if you forward them beeminder email and they hit unsubscribe",
"u": "https://twitter.com/beemuvi/status/309433307815346177",
"t": "2013-03-06 22:40:24 +0000",
}, /*************************************************************************/ {
"x": "Bot reminder emails for all goals with automatic data sources don't prompt for manual data entry, and include direct link to remind settings",
"u": "https://twitter.com/beemuvi/status/309433530042175488",
"t": "2013-03-06 22:41:17 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: if you authorized <a href=\"https://twitter.com/fitbit\">@fitbit</a> before you signed up for <a href=\"https://twitter.com/bmndr\">@bmndr</a>, we weren't saving your authorization (and couldn't pull your data!)",
"u": "https://twitter.com/beemuvi/status/309743671610331136",
"t": "2013-03-07 19:13:40 +0000",
}, /*************************************************************************/ {
"x": "Beemind floors climbed, if you got a fancy enuf <a href=\"https://twitter.com/fitbit\">@fitbit</a>. HT David MacFarlane who beeminded bugging us till we did it: <a href=\"http://beeminder.com/davidhm21/remindfitbit\">beeminder.com/davidhm21/remindfitbit</a>",
"u": "https://twitter.com/beemuvi/status/310630201438646272",
"t": "2013-03-10 05:56:25 +0000",
}, /*************************************************************************/ {
"x": "Bugfix in SMS bot: certain invalid slug chars could cause silent failure if they broke the regex looking for the goal to attach the data to",
"u": "https://twitter.com/beemuvi/status/310978776546832384",
"t": "2013-03-11 05:01:32 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: CSS error in datapoints view where long lines in the datapoint comments wrapped wrong and made the edit &amp; delete links inaccessible",
"u": "https://twitter.com/beemuvi/status/311257402081161217",
"t": "2013-03-11 23:28:42 +0000",
}, /*************************************************************************/ {
"x": "Bugfix update to Android app: \"Protocol errors\" on sign-in and occasional crashes should be largely fixed. Let us know if they still happen!",
"u": "https://twitter.com/beemuvi/status/311662201645715456",
"t": "2013-03-13 02:17:13 +0000",
}, /*************************************************************************/ {
"x": "Inspired by the love from <a href=\"https://twitter.com/trello\">@trello</a> &amp; <a href=\"https://twitter.com/FogCreek\">@FogCreek</a> -- <a href=\"http://blog.fogcreek.com/dogfooding-until-it-hurts/\">blog.fogcreek.com/dogfooding-until-it-hurts/</a> (see last paragraph) -- we're polishing our Trello integration...",
"u": "https://twitter.com/beemuvi/status/311932776796549120",
"t": "2013-03-13 20:12:24 +0000",
}, /*************************************************************************/ {
"x": "Trello goals show (&amp; let you change) the lists being minded in Settings; superfluous data entry box replaced w/ link to the actual board",
"u": "https://twitter.com/beemuvi/status/311932815182815233",
"t": "2013-03-13 20:12:33 +0000",
}, /*************************************************************************/ {
"x": "Custom goals default to auto-summing. Avoids much confusion, plus the consequences of accidental kyoom=true are less severe &amp; more obvious.",
"u": "https://twitter.com/beemuvi/status/312299407649419265",
"t": "2013-03-14 20:29:15 +0000",
}, /*************************************************************************/ {
"x": "Recent datapoints now show up even when the goal is frozen; also a few tiny changes to make some borders more visually consistent",
"u": "https://twitter.com/beemuvi/status/312299622490054657",
"t": "2013-03-14 20:30:06 +0000",
}, /*************************************************************************/ {
"x": "Gitminder bugfix: missed some commits around the edges of days cuz of specifying timezones when they wanted UTC (y u no unixtime, <a href=\"https://twitter.com/github\">@github</a>?)",
"u": "https://twitter.com/beemuvi/status/312676832245870593",
"t": "2013-03-15 21:29:00 +0000",
}, /*************************************************************************/ {
"x": "Restored sanity to aggday param: agg'ing happens first, then auto-summing (so be careful that you really mean, eg, kyoom=true &amp; aggday=last)",
"u": "https://twitter.com/beemuvi/status/313540068264509440",
"t": "2013-03-18 06:39:12 +0000",
}, /*************************************************************************/ {
"x": "Fixed glitch in navigation bar on the blog, improved it a bit while we were at it (eg <a href=\"http://facebook.com/beeminder\">facebook.com/beeminder</a> button) <a href=\"http://blog.beeminder.com\">blog.beeminder.com</a>",
"u": "https://twitter.com/beemuvi/status/313866329557962752",
"t": "2013-03-19 04:15:38 +0000",
}, /*************************************************************************/ {
"x": "Made the data box look much less ugly when the goal is derailed &amp; fixed the hideous mess of the short circuit modal window",
"u": "https://twitter.com/beemuvi/status/314493241242312704",
"t": "2013-03-20 21:46:46 +0000",
}, /*************************************************************************/ {
"x": "Our CSV export wasn't RFC-compliant, now it is, thanks to Clayton Hughes [<a href=\"http://claytonhughes.com\">claytonhughes.com</a>]. We threw in TSV while we were at it.",
"u": "https://twitter.com/beemuvi/status/314987529197744128",
"t": "2013-03-22 06:30:53 +0000",
}, /*************************************************************************/ {
"x": "Bugfix / workaround for IFTTT bug: You can now use <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> recipes that send data (with comments) to the Beeminder bot. This will be huge...",
"u": "https://twitter.com/beemuvi/status/315253791731625984",
"t": "2013-03-23 00:08:55 +0000",
}, /*************************************************************************/ {
"x": "Typofix in help text for hard cap [HT <a href=\"http://davidreiley.com\">davidreiley.com</a>]; Blog tweaks, eg <a href=\"http://blog.beeminder.com/tag/integrations\">blog.beeminder.com/tag/integrations</a> now shows all posts about integrations",
"u": "https://twitter.com/beemuvi/status/315673451874639874",
"t": "2013-03-24 03:56:30 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: You can jump straight to any pledge amount you want with our premium plan for the low, low price of $40/month (includes other perqs too)",
"u": "https://twitter.com/bmndr/status/316055589795020800",
"t": "2013-03-25 05:14:59 +0000",
}, /*************************************************************************/ {
"x": "Fixed <a href=\"https://twitter.com/Chirpify\">@Chirpify</a> integration (as self-punishment, not retrying charges frm when 'twas broken, 'cept from yesterday to make sure we fixed it!)",
"u": "https://twitter.com/beemuvi/status/316398878775717889",
"t": "2013-03-26 03:59:05 +0000",
}, /*************************************************************************/ {
"x": "Embarrassingly, had a bug for some time in Chrome that didn't allow spaces in credit card numbers (I hate sites that do that!)",
"u": "https://twitter.com/beemuvi/status/316401624576819200",
"t": "2013-03-26 04:10:00 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: (error-checking fail) on goal reset we'd sometimes merrily update the pledge despite errors and send you back to a frozen goal",
"u": "https://twitter.com/beemuvi/status/316687602927431683",
"t": "2013-03-26 23:06:22 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Odometer goals could get very confused on reset due to the tare feature [<a href=\"http://beeminder.com/faq#qodo\">beeminder.com/faq#qodo</a>] HT David Baggett",
"u": "https://twitter.com/beemuvi/status/317505508418387968",
"t": "2013-03-29 05:16:26 +0000",
}, /*************************************************************************/ {
"x": "Added a My Goals link on the front page for logged-in users; halfway to <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/2920540-landing-page-for-logged-in-users\">beeminder.uservoice.com/forums/3011-general/suggestions/2920540-landing-page-for-logged-in-users</a> HT Justin Kwok",
"u": "https://twitter.com/beemuvi/status/317525921026428928",
"t": "2013-03-29 06:37:33 +0000",
}, /*************************************************************************/ {
"x": "You can now choose to hide your data or keep it when you reset a goal, ie, \"fresh start\" option, as alluded to in UVI#608",
"u": "https://twitter.com/beemuvi/status/317791306401337344",
"t": "2013-03-30 00:12:06 +0000",
}, /*************************************************************************/ {
"x": "You can now archive (effectively delete) goals, subject to the akrasia horizon (if the goal's derailed, rerail it first, with a flat road)",
"u": "https://twitter.com/beemuvi/status/318428141775372288",
"t": "2013-03-31 18:22:39 +0000",
}, /*************************************************************************/ ]

var batch2013apr = [
{
"x": "No more \"temporary test goals\", aka ephemeral goals, since anyone can now use the akrasia-proof archive button on goals they don't want",
"u": "https://twitter.com/beemuvi/status/318890740623237120",
"t": "2013-04-02 01:00:51 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: \"start flat\" was correctly suppressed when resetting set-a-limit goals, but not for set-a-limit-esque custom goals (dir*yaw&lt;0)",
"u": "https://twitter.com/beemuvi/status/318963863380967425",
"t": "2013-04-02 05:51:25 +0000",
}, /*************************************************************************/ {
"x": "New premium plans (Bee Lite, Plan Bee, and Beemium)! We're about ready to announce it for real: <a href=\"http://beeminder.com/premium\">beeminder.com/premium</a>",
"u": "https://twitter.com/beemuvi/status/319155966589419520",
"t": "2013-04-02 18:34:46 +0000",
}, /*************************************************************************/ {
"x": "OMG RetroRatchet! <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/2289727-retroratchet-\">beeminder.uservoice.com/forums/3011-general/suggestions/2289727-retroratchet-</a> (initial version is fully hardcore: road jumps to your current datapoint)",
"u": "https://twitter.com/beemuvi/status/319170580567953408",
"t": "2013-04-02 19:32:50 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Auto-rerailing (precommit-to-recommit) and the nascent retroratcheting made the road too wide while you were on the discontinuity",
"u": "https://twitter.com/beemuvi/status/319170746486251520",
"t": "2013-04-02 19:33:30 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: \"start flat\" was correctly suppressed when resetting set-a-limit goals, but not for set-a-limit-esque custom goals (dir*yaw&lt;0)",
"u": "https://twitter.com/beemuvi/status/319246353404420096",
"t": "2013-04-03 00:33:56 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: <a href=\"https://twitter.com/pruneau\">@pruneau</a> Your wish is our command! Archiving of completed goals is live now (just for completed, not derailed goals).",
"u": "https://twitter.com/bmndr/status/319568828977778688",
"t": "2013-04-03 21:55:20 +0000",
}, /*************************************************************************/ {
"x": "You can now change your premium plan (or cancel it) from your settings: <a href=\"http://bmndr.com/premium\">bmndr.com/premium</a>",
"u": "https://twitter.com/beemuvi/status/320785507141431296",
"t": "2013-04-07 06:29:59 +0000",
}, /*************************************************************************/ {
"x": "Bugfix with premium plans that let people on lower plans jump to any pledge level on unfreezing -- supposed to be Beemium-only",
"u": "https://twitter.com/beemuvi/status/320785624758108160",
"t": "2013-04-07 06:30:27 +0000",
}, /*************************************************************************/ {
"x": "Alignment problem with buttons in confirmation dialog for premium plan. HT <a href=\"https://twitter.com/thenatealator\">@thenatealator</a> <a href=\"https://github.com/nsp\">github.com/nsp</a>",
"u": "https://twitter.com/beemuvi/status/320980322462339074",
"t": "2013-04-07 19:24:07 +0000",
}, /*************************************************************************/ {
"x": "Small UI bugfixes: <a href=\"https://trello.com/card/your-account-is-no-longer-a-link-and-can-t-be-accessed-on-touchscreens/4f079dbc30a67d1864012d6b/546\">trello.com/card/your-account-is-no-longer-a-link-and-can-t-be-accessed-on-touchscreens/4f079dbc30a67d1864012d6b/546</a> and <a href=\"https://trello.com/card/new-contract-submit-button/4f079dbc30a67d1864012d6b/548\">trello.com/card/new-contract-submit-button/4f079dbc30a67d1864012d6b/548</a> HT <a href=\"https://twitter.com/PhilipHellyer\">@PhilipHellyer</a> and Thomas Berkhout",
"u": "https://twitter.com/beemuvi/status/320994410601009154",
"t": "2013-04-07 20:20:05 +0000",
}, /*************************************************************************/ {
"x": "We were allowing spaces in the github repository name for Gitminder goals and then failing due to them (\"invalid url\"); now we strip them",
"u": "https://twitter.com/beemuvi/status/322831221447069696",
"t": "2013-04-12 21:58:55 +0000",
}, /*************************************************************************/ {
"x": "Myriad tweaks and changes to premium plans (not least: adding the Beekeeper plan). Read all about them at <a href=\"http://blog.beeminder.com/premium\">blog.beeminder.com/premium</a>",
"u": "https://twitter.com/beemuvi/status/322834623866478595",
"t": "2013-04-12 22:12:26 +0000",
}, /*************************************************************************/ {
"x": "We bowed to pressure to have custom road widths for custom goals (ie, available on the Bee Lite premium plan) tho we're not sure it's wise!",
"u": "https://twitter.com/beemuvi/status/323573553838567424",
"t": "2013-04-14 23:08:41 +0000",
}, /*************************************************************************/ {
"x": "Bugfix with auto-capping of safety buffer; it was treating leaving it blank as setting it to 0, among other problems (regex forcing 1 digit)",
"u": "https://twitter.com/beemuvi/status/324024739859423232",
"t": "2013-04-16 05:01:32 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Premium subscribers were stuck at the $10/$5 pledge level on rerailing a goal for a while",
"u": "https://twitter.com/beemuvi/status/324025693514121217",
"t": "2013-04-16 05:05:20 +0000",
}, /*************************************************************************/ {
"x": "Bugfixes with Exquisitely Fair Slider, like it would say paid till 2096 if you got a lifetime plan. We're in this for the long haul, people.",
"u": "https://twitter.com/beemuvi/status/324742967564853250",
"t": "2013-04-18 04:35:31 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: internal API changes for Archiving broke backburnering in the Android app (it was archiving instead of backburnering), fixed today",
"u": "https://twitter.com/beemuvi/status/325107723735801857",
"t": "2013-04-19 04:44:56 +0000",
}, /*************************************************************************/ {
"x": "Archived goals no longer 404 when you visit the url; can unarchive them if you want to restart; goal count in your gallery now excludes them",
"u": "https://twitter.com/beemuvi/status/325464819522228226",
"t": "2013-04-20 04:23:54 +0000",
}, /*************************************************************************/ {
"x": "That was like 3 UVIs in 1 so let us also mention a bugfix last week that we forgot to tweet where the Retroratchet button was barfing",
"u": "https://twitter.com/beemuvi/status/325470867725369345",
"t": "2013-04-20 04:47:56 +0000",
}, /*************************************************************************/ {
"x": "Parametrized retroratchet: specify exactly how much safety buffer you want to remove (available for now on the Bee Lite (and up) plan)",
"u": "https://twitter.com/beemuvi/status/326181859467878400",
"t": "2013-04-22 03:53:10 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Graphs generated since last night had the 1st datapoint cropped out; add new data or wait till tonight's refresh for fixed version",
"u": "https://twitter.com/beemuvi/status/326461172700295168",
"t": "2013-04-22 22:23:03 +0000",
}, /*************************************************************************/ {
"x": "We had a rare bug where a user could sign up and we'd fail to infer their timezone, which confused everything; now we default to NYC time",
"u": "https://twitter.com/beemuvi/status/326581355033006080",
"t": "2013-04-23 06:20:37 +0000",
}, /*************************************************************************/ {
"x": "Timed perfectly w/ being on *the front page of the Wall St Journal*, we broke signups for people not signing up via goal creation. Now fixed",
"u": "https://twitter.com/beemuvi/status/326768428214013953",
"t": "2013-04-23 18:43:59 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Weird interactions with the aggday and plotall parameters. Related to but distinct from UVI#757",
"u": "https://twitter.com/beemuvi/status/327285608714207233",
"t": "2013-04-25 04:59:04 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: rose-colored dots bug is fixed (or will be after graph refreshes). HT C Hughes (<a href=\"http://claytonhughes.com\">claytonhughes.com</a>) &amp; <a href=\"https://twitter.com/TijlK\">@TijlK</a> &amp; Arthur Breitman",
"u": "https://twitter.com/beemuvi/status/327665059599904768",
"t": "2013-04-26 06:06:52 +0000",
}, /*************************************************************************/ {
"x": "Similar to auto-canceling subscriptions we now automatically uncheck all your precommit-to-recommit checkboxes if you stop using Beeminder",
"u": "https://twitter.com/beemuvi/status/327911483893743617",
"t": "2013-04-26 22:26:04 +0000",
}, /*************************************************************************/ {
"x": "We now retry charging your credit card if it fails. How's that an improvement from your perspective? We're now a more credible threat!",
"u": "https://twitter.com/beemuvi/status/328388961078759424",
"t": "2013-04-28 06:03:24 +0000",
}, /*************************************************************************/ {
"x": "If you ham-finger your login, we now tell you if it was the username or the password that you mistyped. <a href=\"https://trello.com/card/wrong-username-or-password/4f079dbc30a67d1864012d6b/130\">trello.com/card/wrong-username-or-password/4f079dbc30a67d1864012d6b/130</a>",
"u": "https://twitter.com/beemuvi/status/328408637108260864",
"t": "2013-04-28 07:21:35 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.5.2! Google sign-in, crash fixes, other bug fixes and optimizations. <a href=\"https://play.google.com/store/apps/details?id=com.beeminder.beeminder\">play.google.com/store/apps/details?id=com.beeminder.beeminder</a>",
"u": "https://twitter.com/beemuvi/status/329030742258614274",
"t": "2013-04-30 00:33:36 +0000",
}, /*************************************************************************/ {
"x": "And one anti-UVI (but the previous was worth at least 3!): No more creating goals within the app. Need to focus on data entry and reminders.",
"u": "https://twitter.com/beemuvi/status/329038859281235968",
"t": "2013-04-30 01:05:51 +0000",
}, /*************************************************************************/ ]

var batch2013may = [
{
"x": "Blog improvements: grouped FAQ posts <a href=\"http://blog.beeminder.com/tag/faq\">blog.beeminder.com/tag/faq</a> &amp; new pie charts <a href=\"http://blog.beeminder.com/exponential\">blog.beeminder.com/exponential</a> (&amp; <a href=\"http://beeminder.com/faq\">beeminder.com/faq</a> improvements)",
"u": "https://twitter.com/beemuvi/status/329485840659120130",
"t": "2013-05-01 06:42:00 +0000",
}, /*************************************************************************/ {
"x": "New version of iphone app! Lots of bug fixes, more prettiness, backburnered goals show up below the fold. <a href=\"https://itunes.apple.com/us/app/beeminder/id551869729\">itunes.apple.com/us/app/beeminder/id551869729</a>",
"u": "https://twitter.com/beemuvi/status/330105506725261312",
"t": "2013-05-02 23:44:20 +0000",
}, /*************************************************************************/ {
"x": "We were letting you create new goals reusing the URL of an archived goal, but then showing you the archived version when you went to the URL",
"u": "https://twitter.com/beemuvi/status/330553199163498497",
"t": "2013-05-04 05:23:18 +0000",
}, /*************************************************************************/ {
"x": "Now we don't let you reuse archived slugs, and we changed the names of the few problem goals so that people who already did this are good",
"u": "https://twitter.com/beemuvi/status/330553336254308353",
"t": "2013-05-04 05:23:51 +0000",
}, /*************************************************************************/ {
"x": "Bug with parsing Accept header \"text/text\" caused Google to yank us. Oy. Sanity now restored -- googling \"beeminder\" returns our front page.",
"u": "https://twitter.com/beemuvi/status/331157582288928768",
"t": "2013-05-05 21:24:54 +0000",
}, /*************************************************************************/ {
"x": "A subtle change to the signup form fixed the problem of people accidentally putting their passwd as their username: <a href=\"https://trello.com/card/people-accidentally-type-passwd-in-username-field/4f079dbc30a67d1864012d6b/121\">trello.com/card/people-accidentally-type-passwd-in-username-field/4f079dbc30a67d1864012d6b/121</a>",
"u": "https://twitter.com/beemuvi/status/331163297183309824",
"t": "2013-05-05 21:47:37 +0000",
}, /*************************************************************************/ {
"x": "API now accepts caret syntax for the timestamp field when creating datapoints; convenient for <a href=\"https://twitter.com/zapier\">@zapier</a> integration. HT <a href=\"https://twitter.com/nslater\">@nslater</a>",
"u": "https://twitter.com/beemuvi/status/331444698206068737",
"t": "2013-05-06 16:25:48 +0000",
}, /*************************************************************************/ {
"x": "Goal info box showing your goal statement and fine print on your graph page",
"u": "https://twitter.com/beemuvi/status/332241259076935681",
"t": "2013-05-08 21:11:03 +0000",
}, /*************************************************************************/ {
"x": "Changes to the front page: hovertext for autodata sources, our physical address in the footer, Beeminder Buzz section, ...",
"u": "https://twitter.com/beemuvi/status/332610917722370049",
"t": "2013-05-09 21:39:57 +0000",
}, /*************************************************************************/ {
"x": "Also changed the blurb for Odometer goals to make clearer that Odom is just like Do More except you report the cumulative total yourself",
"u": "https://twitter.com/beemuvi/status/332611140502822912",
"t": "2013-05-09 21:40:50 +0000",
}, /*************************************************************************/ {
"x": "Bugfix in API: we were handling skinny=true correctly, and handling it correctly if you omitted it, but explicit skinny=false we got wrong",
"u": "https://twitter.com/beemuvi/status/333251677664706560",
"t": "2013-05-11 16:06:06 +0000",
}, /*************************************************************************/ {
"x": "More crazy options for aggday (like median, mode, trimmed mean, uniquified mean) for custom goals, plus a special one just for <a href=\"https://twitter.com/Jolly\">@Jolly</a>...",
"u": "https://twitter.com/beemuvi/status/333833282456268800",
"t": "2013-05-13 06:37:11 +0000",
}, /*************************************************************************/ {
"x": "Since there've been a few improvements w/ aggday, another tweet to explain aggday=jolly: lambda points: 0 if len(points)==0 else 1",
"u": "https://twitter.com/beemuvi/status/333833587835150336",
"t": "2013-05-13 06:38:24 +0000",
}, /*************************************************************************/ {
"x": "The callback URL [<a href=\"https://twitter.com/bmndr/status/219623248273481730\">twitter.com/bmndr/status/219623248273481730</a>] was susceptible to an infinite data post loop. Patched. Try specifying \"<a href=\"http://bmndr.com\">bmndr.com</a>\".",
"u": "https://twitter.com/beemuvi/status/334171858624720896",
"t": "2013-05-14 05:02:34 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Safety net for unchecking precommit-to-recommit if u stop beeminding was too \"safe\", prevented auto-rerails if no other active goals",
"u": "https://twitter.com/beemuvi/status/334909588795179008",
"t": "2013-05-16 05:54:02 +0000",
}, /*************************************************************************/ {
"x": "There's now an extremely tedious way to pan and zoom your graph in advanced settings! Better than nothing, right? (See tmin/tmax/vmin/vmax)",
"u": "https://twitter.com/beemuvi/status/335145645025411072",
"t": "2013-05-16 21:32:03 +0000",
}, /*************************************************************************/ {
"x": "Error messages for form validations were all over the board; we made the grammar consistent and brought them more in line w/ rails defaults",
"u": "https://twitter.com/beemuvi/status/335513772477276162",
"t": "2013-05-17 21:54:51 +0000",
}, /*************************************************************************/ {
"x": "2-for-1: Confirmation emails when signing up! <a href=\"https://trello.com/card/security-confirmation-emails/4f079dbc30a67d1864012d6b/605\">trello.com/card/security-confirmation-emails/4f079dbc30a67d1864012d6b/605</a>\nand RescueTime minutes-vs-hours bugfix: <a href=\"https://trello.com/card/rescuetime-bug-switched-from-minutes-to-hours/4f079dbc30a67d1864012d6b/622\">trello.com/card/rescuetime-bug-switched-from-minutes-to-hours/4f079dbc30a67d1864012d6b/622</a>",
"u": "https://twitter.com/beemuvi/status/335515064960425986",
"t": "2013-05-17 21:59:59 +0000",
}, /*************************************************************************/ {
"x": "A bunch of tweaking and alignment fixes in the goal settings forms (and then fixed a bug that that caused in the Quick Add box)",
"u": "https://twitter.com/beemuvi/status/335617148649091072",
"t": "2013-05-18 04:45:38 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: New version of the Beeminder Android app: Simplified goal screen, faster sync, and bug fixes: https://play.google.com/store/apps/details?id=com.beeminder.beeminder",
"u": "https://twitter.com/bmndr/status/335775579611729923",
"t": "2013-05-18 15:15:11 +0000",
}, /*************************************************************************/ {
"x": "Small bugfix with the purple steppy line: Odometer graphs could sometimes show a gap on the first day, and it wasn't showing purple halos",
"u": "https://twitter.com/beemuvi/status/336632936885538816",
"t": "2013-05-21 00:02:01 +0000",
}, /*************************************************************************/ {
"x": "Made zooming slightly more sane: specify just tmin or tmax to have vmin/vmax inferred based on what part of the YBR/datapoints are visible",
"u": "https://twitter.com/beemuvi/status/336654350405496832",
"t": "2013-05-21 01:27:06 +0000",
}, /*************************************************************************/ {
"x": "Chirpify example tweet bugfix; made auto URL suggestions consistent (had hyphenated monstrosities for fitbit goals) HT <a href=\"https://twitter.com/pruneau\">@pruneau</a> <a href=\"https://twitter.com/nslater\">@nslater</a>",
"u": "https://twitter.com/beemuvi/status/337265805085528065",
"t": "2013-05-22 17:56:48 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: RT <a href=\"https://twitter.com/duolingo\">@duolingo</a>: Cool! Now you can use Beeminder to keep up your streak on Duolingo: http://blog.beeminder.com/duolingo/",
"u": "https://twitter.com/duolingo/status/338031045582663680",
"t": "2013-05-24 21:31:51 +0000",
"c": "This was huge for us, having Duolingo tweet about us",
}, /*************************************************************************/ {
"x": "Bugfix: Archived goals weren't getting cleanly/properly ended; was a problem when unarchiving/restarting <a href=\"https://trello.com/card/ending-archived-goals/4f079dbc30a67d1864012d6b/618\">trello.com/card/ending-archived-goals/4f079dbc30a67d1864012d6b/618</a>",
"u": "https://twitter.com/beemuvi/status/338514125044973568",
"t": "2013-05-26 04:37:11 +0000",
}, /*************************************************************************/ {
"x": "You can now immediately and completely delete goals with less a week of data. <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/3952632-allow-the-deletion-of-new-goals\">beeminder.uservoice.com/forums/3011-general/suggestions/3952632-allow-the-deletion-of-new-goals</a> HT <a href=\"https://twitter.com/nslater\">@nslater</a>",
"u": "https://twitter.com/beemuvi/status/338741856701644800",
"t": "2013-05-26 19:42:06 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Failed to send eep-day reminders for inbox/weightloss goals if you were far above the road and had already entered data for the day",
"u": "https://twitter.com/beemuvi/status/338818143210336257",
"t": "2013-05-27 00:45:14 +0000",
}, /*************************************************************************/ {
"x": "Refresh button on goal pages! Should make skating the edge of a road with an autodata source much less anxiety-inducing...",
"u": "https://twitter.com/beemuvi/status/338818887007215617",
"t": "2013-05-27 00:48:12 +0000",
}, /*************************************************************************/ {
"x": "Small fixes/UVIs: <a href=\"https://trello.com/card/confusing-could-not-save-goal-error/4f079dbc30a67d1864012d6b/644\">trello.com/card/confusing-could-not-save-goal-error/4f079dbc30a67d1864012d6b/644</a>, link to boilerplate fine print in goal page sidebar, new links in footer, faster 3am refreshes",
"u": "https://twitter.com/beemuvi/status/339625846736302080",
"t": "2013-05-29 06:14:46 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"https://twitter.com/lady_alys\">@lady_alys</a> Yes while refreshing, but it also was *staying* disabled, which was a bug, now fixed. Thanks for asking this! (this reply = UVI!)",
"u": "https://twitter.com/beemuvi/status/340023706283823104",
"t": "2013-05-30 08:35:43 +0000",
}, /*************************************************************************/ {
"x": "New version of Android app (1.5.4): Simplified menus, sync warning in goal gallery, bugfixes, more robust datapoint submission, changelog",
"u": "https://twitter.com/beemuvi/status/340137490402906113",
"t": "2013-05-30 16:07:51 +0000",
}, /*************************************************************************/ ]

var batch2013jun = [
{
"x": "Bugfix: if Fitbit goals run into an auth error, we show you a nice error message instead of silent failure",
"u": "https://twitter.com/beemuvi/status/340966574141890560",
"t": "2013-06-01 23:02:20 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: the legit check emails sometimes quoted the old/new pledge amount wrong when precommit-to-recommit was on",
"u": "https://twitter.com/beemuvi/status/340968787518042113",
"t": "2013-06-01 23:11:08 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: recent datapoint above Quick Add box would sometimes be a day ahead; we also now update the recent datapoint after you add a new one",
"u": "https://twitter.com/beemuvi/status/341426963786907648",
"t": "2013-06-03 05:31:46 +0000",
}, /*************************************************************************/ {
"x": "Re: UVI#833: Now for RunKeeper as well, ie, we tell you if Beeminder lost authorization to access your RunKeeper data",
"u": "https://twitter.com/beemuvi/status/341804771499454464",
"t": "2013-06-04 06:33:02 +0000",
}, /*************************************************************************/ {
"x": "No-mercy option for precommit-to-recommit! Check it (in advanced settings) and auto-rerailing will happen without the week of flat spot.",
"u": "https://twitter.com/beemuvi/status/341959390980624385",
"t": "2013-06-04 16:47:26 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Android app was crashing on datapoint submission for pre-Gingerbread (&lt;2.3) devices; update should be on Google Play shortly",
"u": "https://twitter.com/beemuvi/status/342307479297875968",
"t": "2013-06-05 15:50:37 +0000",
}, /*************************************************************************/ {
"x": "Other improvements in new Android version: speedup in loading goal gallery and goal details, consistent display format for last datapoint",
"u": "https://twitter.com/beemuvi/status/343209578130993153",
"t": "2013-06-08 03:35:14 +0000",
}, /*************************************************************************/ {
"x": "Widget generator! <a href=\"https://www.beeminder.com/widgets\">beeminder.com/widgets</a>",
"u": "https://twitter.com/beemuvi/status/343262923264761856",
"t": "2013-06-08 07:07:13 +0000",
}, /*************************************************************************/ {
"x": "Made Gitminder [<a href=\"http://gitminder.com\">gitminder.com</a>] stop reporting superfluous zeros: <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/4044551-stop-gitminder-posting-0-datapoints\">beeminder.uservoice.com/forums/3011-general/suggestions/4044551-stop-gitminder-posting-0-datapoints</a> HT Ben Eills <a href=\"https://github.com/beneills\">github.com/beneills</a>",
"u": "https://twitter.com/beemuvi/status/343931501190197250",
"t": "2013-06-10 03:23:54 +0000",
}, /*************************************************************************/ {
"x": "Mini-UVI medley: fix superfluous cc'ing of support on false alarms about tip-of-the-day errors; change some colors; <a href=\"https://trello.com/card/set-a-limit-safe-days/4f079dbc30a67d1864012d6b/681\">trello.com/card/set-a-limit-safe-days/4f079dbc30a67d1864012d6b/681</a>",
"u": "https://twitter.com/beemuvi/status/344335592978522112",
"t": "2013-06-11 06:09:37 +0000",
}, /*************************************************************************/ {
"x": "Cont'd: smart submit button on user prefs (button disables when clicked so you can't double-submit); close iframe tag for widget generator",
"u": "https://twitter.com/beemuvi/status/344335764101926912",
"t": "2013-06-11 06:10:18 +0000",
}, /*************************************************************************/ {
"x": "Hovertext on bare min / hard cap numbers shows negative distances when the number is just a checkmark. HT <a href=\"https://twitter.com/nslater\">@nslater</a> <a href=\"https://twitter.com/tblakers\">@tblakers</a>",
"u": "https://twitter.com/beemuvi/status/345052765686464512",
"t": "2013-06-13 05:39:24 +0000",
}, /*************************************************************************/ {
"x": "In advanced settings: \"enable precommit-to-recommit on your goal page first and then you can enable no-mercy precommit-to-recommit\"",
"u": "https://twitter.com/beemuvi/status/345409321670160385",
"t": "2013-06-14 05:16:14 +0000",
}, /*************************************************************************/ {
"x": "API bugfix: we now catch JSON parse errors (and send you the error message) in datapoints#create_all instead of just 500ing",
"u": "https://twitter.com/beemuvi/status/345658078693294080",
"t": "2013-06-14 21:44:42 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: sometimes after hitting refresh the bee would stop buzzing before the new graph image was generated; no more premature debuzzing!",
"u": "https://twitter.com/beemuvi/status/346090293923282944",
"t": "2013-06-16 02:22:10 +0000",
}, /*************************************************************************/ {
"x": "Guiding line demarcating 7 days' safety buffer is a bit more prominent (important since that's where the akrasia horizon is nonbinding)",
"u": "https://twitter.com/beemuvi/status/346397736876261376",
"t": "2013-06-16 22:43:50 +0000",
}, /*************************************************************************/ {
"x": "Cosmetics on goal creation wizard and better hovertext to explain \"weekly rate\"",
"u": "https://twitter.com/beemuvi/status/346871046307184640",
"t": "2013-06-18 06:04:36 +0000",
}, /*************************************************************************/ {
"x": "Less confusing wording in the bot reminder emails for auto-data goals like <a href=\"https://twitter.com/rescuetime\">@rescuetime</a>. HT <a href=\"https://twitter.com/dehintze\">@dehintze</a>",
"u": "https://twitter.com/beemuvi/status/347240976189894657",
"t": "2013-06-19 06:34:34 +0000",
}, /*************************************************************************/ {
"x": "Related: bot reminder emails for auto-data goals now say the bare min or hard cap if it's an emergency day. Coming next: important bug fix!",
"u": "https://twitter.com/beemuvi/status/347241551002472448",
"t": "2013-06-19 06:36:51 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: bot emergency day emails weren't being sent if you jumped way into the wrong side (red) of the road, as is common with gmailzero",
"u": "https://twitter.com/beemuvi/status/347609296130932736",
"t": "2013-06-20 06:58:09 +0000",
}, /*************************************************************************/ {
"x": "We now check for new autodata right before sending bot reminders, so the reminders actually reflect up-to-the-minute reality",
"u": "https://twitter.com/beemuvi/status/348320640102703105",
"t": "2013-06-22 06:04:46 +0000",
}, /*************************************************************************/ {
"x": "Fixes and improvements to our webhook feature for mirroring your data. Real-time PESOS! <a href=\"http://indiewebcamp.com/PESOS\">indiewebcamp.com/PESOS</a> #indiewebcamp HT <a href=\"https://twitter.com/pjf\">@pjf</a>",
"u": "https://twitter.com/beemuvi/status/348564173803905024",
"t": "2013-06-22 22:12:29 +0000",
}, /*************************************************************************/ {
"x": "Until now we skipped bot reminders for autodata goals for all but emergency days. Adjust your settings if you only want emergency reminders!",
"u": "https://twitter.com/beemuvi/status/348888060156592128",
"t": "2013-06-23 19:39:30 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Zeno polling! http://blog.beeminder.com/zeno (New blog post about a new Beeminder feature, plus another crash of ineptitude mea culpa)",
"u": "https://twitter.com/bmndr/status/349260505120116736",
"t": "2013-06-24 20:19:28 +0000",
}, /*************************************************************************/ {
"x": "Reminders were skipped if there were any errors which caused your graph not to render (tmin/tmax, no datapoints). Now we send them anyway.",
"u": "https://twitter.com/beemuvi/status/349767768297574400",
"t": "2013-06-26 05:55:08 +0000",
}, /*************************************************************************/ {
"n": 858,
"x": "Android app version 1.6 (UVI 1 of 7): You can now edit and delete datapoints in the Android app!",
"u": "https://twitter.com/beemuvi/status/349974158010093568",
"t": "2013-06-26 19:35:16 +0000",
"c": "Could make this a sublist",
}, /*************************************************************************/ {
"x": "Android app version 1.6 (UVI 2 of 7): Slideout info with additional goal details (touch the little \"i\" on the right of the graph)",
"u": "https://twitter.com/beemuvi/status/349974203291807746",
"t": "2013-06-26 19:35:26 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6 (UVI 3 of 7): Feedback form with diagnostics (also the reason for the new app permission to read logs)",
"u": "https://twitter.com/beemuvi/status/349974260107841536",
"t": "2013-06-26 19:35:40 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6 (UVI 4 of 7): Lots of improvements to the data entry form, plus hh:mm shortcut supported (even -hh:mm)",
"u": "https://twitter.com/beemuvi/status/349974307184709633",
"t": "2013-06-26 19:35:51 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6 (UVI 5 of 7): Tally input method which <a href=\"https://twitter.com/dreev\">@dreev</a> says is BRILLIANT for beeminding pushups (touch screen w/ your nose)",
"u": "https://twitter.com/beemuvi/status/349974400721891330",
"t": "2013-06-26 19:36:14 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6 (UVI 6 of 7): Fixed sync problems when not on wifi due to proxy caching",
"u": "https://twitter.com/beemuvi/status/349974446628544513",
"t": "2013-06-26 19:36:24 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6 (UVI 7 of 7): Various other fixes and improvements with syncing and better display of recent datapoints",
"u": "https://twitter.com/beemuvi/status/349974516191080448",
"t": "2013-06-26 19:36:41 +0000",
}, /*************************************************************************/ ]

var batch2013jul = [
{
"x": "Small bugfix update to the Android app (version 1.6-r1)",
"u": "https://twitter.com/beemuvi/status/351749528933773313",
"t": "2013-07-01 17:09:57 +0000",
}, /*************************************************************************/ {
"x": "And we forgot to tweet an Android UVI before: Beeminder-centric keyboard layout (PS: another bugfix coming; workaround: sign out &amp; back in)",
"u": "https://twitter.com/beemuvi/status/351749635490062337",
"t": "2013-07-01 17:10:22 +0000",
}, /*************************************************************************/ {
"x": "Fixed a bug that gave you an extra freebee when you were prompted to add a pledge to a new goal because you were at your freebee limit",
"u": "https://twitter.com/beemuvi/status/351749978298925057",
"t": "2013-07-01 17:11:44 +0000",
}, /*************************************************************************/ {
"x": "Autodata goals (like <a href=\"https://twitter.com/duolingo\">@duolingo</a>, <a href=\"https://twitter.com/fitbit\">@fitbit</a>, etc, where beeminder automatically enters your data) now show how long ago data was last fetched",
"u": "https://twitter.com/beemuvi/status/351750815289049088",
"t": "2013-07-01 17:15:04 +0000",
}, /*************************************************************************/ {
"x": "Dollar amounts on eep day bot reminder emails. Baby step towards <a href=\"https://trello.com/card/better-bot-subject-lines/4f079dbc30a67d1864012d6b/642\">trello.com/card/better-bot-subject-lines/4f079dbc30a67d1864012d6b/642</a> HT <a href=\"https://twitter.com/cyberroland\">@cyberroland</a> <a href=\"https://twitter.com/Smoken_Flames\">@Smoken_Flames</a>",
"u": "https://twitter.com/beemuvi/status/351752100738379777",
"t": "2013-07-01 17:20:10 +0000",
}, /*************************************************************************/ {
"x": "The goal gallery now shows a check mark next to goals that have had data added today, so you know what still needs attention. HT W Gerritsen",
"u": "https://twitter.com/beemuvi/status/351755389936734208",
"t": "2013-07-01 17:33:14 +0000",
}, /*************************************************************************/ {
"x": "We had people misunderstand \"unlimited freebees\" so we made it more generous; see \"UPDATE\" on <a href=\"http://blog.beeminder.com/premium\">blog.beeminder.com/premium</a>",
"u": "https://twitter.com/beemuvi/status/354633763474505730",
"t": "2013-07-09 16:10:52 +0000",
}, /*************************************************************************/ {
"x": "Android bugfix release (ver 1.6-r2) that fixes a crash and a spurious \"Waiting for website\" as the last update time status message",
"u": "https://twitter.com/beemuvi/status/355115377170186242",
"t": "2013-07-11 00:04:38 +0000",
}, /*************************************************************************/ {
"x": "New feature for Gitminder [<a href=\"http://gitminder.com\">gitminder.com</a>]: you can now beemind all commits across all your github repositories. HT <a href=\"https://twitter.com/wycats\">@wycats</a>",
"u": "https://twitter.com/beemuvi/status/355489334171934720",
"t": "2013-07-12 00:50:36 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: don't send spurious password changed email immediately after signup (happening since about UVI#819 embarrassingly)",
"u": "https://twitter.com/beemuvi/status/355764911441317890",
"t": "2013-07-12 19:05:39 +0000",
}, /*************************************************************************/ {
"x": "Checkmarks next to goals 1) are based on whether the goal has a datapoint for today 2) don't get hidden for long goal names 3) have tooltips",
"u": "https://twitter.com/beemuvi/status/356223685167808512",
"t": "2013-07-14 01:28:39 +0000",
}, /*************************************************************************/ {
"x": "Scheduling your bot reminder before 3am could cause confusion or delay (due to overnight refreshes at 3am) so now it doesn't let you do that",
"u": "https://twitter.com/beemuvi/status/356612820542046209",
"t": "2013-07-15 03:14:56 +0000",
}, /*************************************************************************/ {
"x": "Gmailzero updates your datapoint IFF it's a new min, circumventing bug w/ reporting bare-min values. HT <a href=\"https://twitter.com/carlcoryell\">@carlcoryell</a> <a href=\"https://trello.com/card/gmailzero-bug-with-low-vs-current/4f079dbc30a67d1864012d6b/719\">trello.com/card/gmailzero-bug-with-low-vs-current/4f079dbc30a67d1864012d6b/719</a>",
"u": "https://twitter.com/beemuvi/status/356892116233891840",
"t": "2013-07-15 21:44:45 +0000",
}, /*************************************************************************/ {
"x": "Unsure how extensive but we found one case where Zeno polling continued after the goal derailed. *Blush*! Bugfix: added a check to stop that",
"u": "https://twitter.com/beemuvi/status/357236957807513600",
"t": "2013-07-16 20:35:02 +0000",
}, /*************************************************************************/ {
"x": "Zeno polling was a little too literal; now it won't email less than 5 minutes apart. This should also help w/ slowdown in overnight refresh.",
"u": "https://twitter.com/beemuvi/status/357597975733747717",
"t": "2013-07-17 20:29:35 +0000",
}, /*************************************************************************/ {
"x": "Bugfix with custom goals: it would fail if you unchecked \"flat start\" and adjusted the road dial when creating the goal. HT <a href=\"https://twitter.com/strickvl\">@strickvl</a>",
"u": "https://twitter.com/beemuvi/status/357598208156901376",
"t": "2013-07-17 20:30:31 +0000",
}, /*************************************************************************/ {
"x": "Bugfix with creating new <a href=\"https://twitter.com/trello\">@trello</a> goals: we were only accepting the old-style board URLs! HT John Bourassa",
"u": "https://twitter.com/beemuvi/status/358318882240466944",
"t": "2013-07-19 20:14:13 +0000",
}, /*************************************************************************/ {
"x": "More useful reminders for autodata goals: they include recent data points as well as YBR deltas for orange and red days. HT <a href=\"https://twitter.com/btmspox\">@btmspox</a> et al",
"u": "https://twitter.com/beemuvi/status/358792070183387137",
"t": "2013-07-21 03:34:30 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: how about an error message if you typo your goal date in the road dial form, rather than an embarrassed bee (internal server error)?",
"u": "https://twitter.com/beemuvi/status/359198902324428800",
"t": "2013-07-22 06:31:06 +0000",
}, /*************************************************************************/ {
"x": "If you've stepped down to a $0 contract, don't show the button to step down further (and have Beeminder pay you if you derail?)",
"u": "https://twitter.com/beemuvi/status/359456331830280192",
"t": "2013-07-22 23:34:02 +0000",
}, /*************************************************************************/ {
"x": "Notwithstanding the additional downtime this morning (sorry!) graph generation is noticeably faster after the server migration, so: UVI!",
"u": "https://twitter.com/beemuvi/status/359858762795855873",
"t": "2013-07-24 02:13:09 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: sign-in with twitter has been broken for a while but as of today it is working again!",
"u": "https://twitter.com/beemuvi/status/359858821830684672",
"t": "2013-07-24 02:13:23 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Were letting you try to retroratchet other users' goals; &amp; now show dial-it-in button disabled if not your own goal, for consistency",
"u": "https://twitter.com/beemuvi/status/360647219457695744",
"t": "2013-07-26 06:26:12 +0000",
}, /*************************************************************************/ {
"x": "Refactored the FAQs on <a href=\"http://beeminder.com/money\">beeminder.com/money</a> &amp; <a href=\"http://beeminder.com/faq\">beeminder.com/faq</a> - now just one FAQ page &amp; the money page points to money-related FAQs",
"u": "https://twitter.com/beemuvi/status/360808050145239042",
"t": "2013-07-26 17:05:17 +0000",
}, /*************************************************************************/ {
"x": "Courtesy of @Malcolm_McC: datapoints show in red as you type until they're formatted correctly. See daily beemail for more on this.",
"u": "https://twitter.com/beemuvi/status/361346013652455426",
"t": "2013-07-28 04:42:57 +0000",
}, /*************************************************************************/ {
"x": "Can now retroratchet whenever you're green, to make yourself blue again (was overly conservative before, capping at 2 safe days) HT <a href=\"https://twitter.com/wycats\">@wycats</a>",
"u": "https://twitter.com/beemuvi/status/361738167541436416",
"t": "2013-07-29 06:41:14 +0000",
}, /*************************************************************************/ {
"x": "Baby step towards getting rid of auto-widening roads: the width of the turquoise swath (aka blue-green aura) is now based on your variance",
"u": "https://twitter.com/beemuvi/status/361949069003866112",
"t": "2013-07-29 20:39:17 +0000",
}, /*************************************************************************/ {
"x": "Applied @Malcolm_McC's datapoint validator to the Quick Add box as well. HT Brent Yorgey of <a href=\"http://mathlesstraveled.com\">mathlesstraveled.com</a>",
"u": "https://twitter.com/beemuvi/status/362287331492900864",
"t": "2013-07-30 19:03:25 +0000",
}, /*************************************************************************/ ]

var batch2013aug = [
{
"x": "Bugfix: <a href=\"https://twitter.com/rescuetime\">@rescuetime</a> import (like when you first start a goal) was double counting past time! Fixed now &amp; fixed up everyone's past graphs.",
"u": "https://twitter.com/beemuvi/status/362826038285303808",
"t": "2013-08-01 06:44:03 +0000",
}, /*************************************************************************/ {
"x": "Beeminder was pretty broken in IE&lt;9. Instead of fixing it we did this: <a href=\"http://beeminder.com/images/IEwok.png\">beeminder.com/images/IEwok.png</a>",
"u": "https://twitter.com/beemuvi/status/363174766372331520",
"t": "2013-08-02 05:49:46 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: iOS push notifications were occasionally getting skipped because of a bug with infinitely flat goals. Dudes, dial those roads up!",
"u": "https://twitter.com/beemuvi/status/363443063919611904",
"t": "2013-08-02 23:35:53 +0000",
}, /*************************************************************************/ {
"x": "Goals with autodata sources (withings, fitbit, etc.) no longer appear in the Quick Add box since you can't add data for them anyway.",
"u": "https://twitter.com/beemuvi/status/363799655680712704",
"t": "2013-08-03 23:12:51 +0000",
}, /*************************************************************************/ {
"x": "Zeno polling only happens if you have email reminders on, so disable the checkbox when reminders are turned off. HT <a href=\"https://twitter.com/wycats\">@wycats</a>",
"u": "https://twitter.com/beemuvi/status/364243245863157760",
"t": "2013-08-05 04:35:31 +0000",
}, /*************************************************************************/ {
"x": "Mini UVI medley: less garish red for datapoint validator, fix legend &amp; <a href=\"http://beeminder.com/overview\">beeminder.com/overview</a> copy, glossary updates [HT <a href=\"https://twitter.com/dehintze\">@dehintze</a>, J Kwok]",
"u": "https://twitter.com/beemuvi/status/364611422904266752",
"t": "2013-08-06 04:58:32 +0000",
}, /*************************************************************************/ {
"x": "Sign in with Fitbit! This is also a step towards making the integration more robust. Also: cleaned up <a href=\"http://beeminder.com/services\">beeminder.com/services</a>",
"u": "https://twitter.com/beemuvi/status/364909560433082370",
"t": "2013-08-07 00:43:13 +0000",
}, /*************************************************************************/ {
"x": "Bugfix/tweak: the Retroratchet button is now updated (clickable vs not clickable) upon graph refresh (needed a manual page reload before)",
"u": "https://twitter.com/beemuvi/status/364909816717651968",
"t": "2013-08-07 00:44:14 +0000",
}, /*************************************************************************/ {
"x": "Big bugfix: Retroratcheting now preserves future changes to the YBR (previously it would just remove anything past the current date)",
"u": "https://twitter.com/beemuvi/status/364909934502084608",
"t": "2013-08-07 00:44:42 +0000",
}, /*************************************************************************/ {
"x": "If you clicked \"never email me about anything ever\" we were ignoring that next time you created a new goal; &amp; added pop-up reminder about it",
"u": "https://twitter.com/beemuvi/status/365199044638818304",
"t": "2013-08-07 19:53:31 +0000",
}, /*************************************************************************/ {
"x": "URLs in the fine print and goal statement are now clickable on the goal page. (Previous UVI thanks to <a href=\"https://twitter.com/beneills\">@beneills</a>: <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/4134091-bug-email-settings-change-upon-goal-add\">beeminder.uservoice.com/forums/3011-general/suggestions/4134091-bug-email-settings-change-upon-goal-add</a> )",
"u": "https://twitter.com/beemuvi/status/365199233424437248",
"t": "2013-08-07 19:54:16 +0000",
}, /*************************************************************************/ {
"x": "Pessimistic presumptive reports for Set-A-Limit goals is now an option in advanced settings (still need accurate countdown to derail!)",
"u": "https://twitter.com/beemuvi/status/365624245973299202",
"t": "2013-08-09 00:03:07 +0000",
}, /*************************************************************************/ {
"x": "Only keep the highest datapoint of the day for <a href=\"https://twitter.com/duolingo\">@duolingo</a> goals HT <a href=\"https://twitter.com/wycats\">@wycats</a>",
"u": "https://twitter.com/beemuvi/status/365883085708984321",
"t": "2013-08-09 17:11:40 +0000",
}, /*************************************************************************/ {
"x": "Now <a href=\"https://twitter.com/Withings\">@Withings</a> and <a href=\"https://twitter.com/Runkeeper\">@Runkeeper</a> goals won't bug you if you've already weighed in / gone running today. HT <a href=\"https://twitter.com/rjbs\">@rjbs</a>",
"u": "https://twitter.com/beemuvi/status/365885781493026816",
"t": "2013-08-09 17:22:22 +0000",
}, /*************************************************************************/ {
"x": "Archived goals view! (see the link under your picture in the upper right of the screen)",
"u": "https://twitter.com/beemuvi/status/365945419634704384",
"t": "2013-08-09 21:19:21 +0000",
}, /*************************************************************************/ {
"x": "Option in goal settings to automatically increase your pledge if you derail, and moved the no-mercy recommit option to non-advanced settings",
"u": "https://twitter.com/beemuvi/status/366388956859863041",
"t": "2013-08-11 02:41:49 +0000",
}, /*************************************************************************/ {
"x": "Countdown timer is now meaningful for Set-A-Limit goals! Says how long till you derail if you let the pessimistic presumptive reports stand.",
"u": "https://twitter.com/beemuvi/status/367446074169913344",
"t": "2013-08-14 00:42:25 +0000",
}, /*************************************************************************/ {
"x": "If you're currently on a flat spot, retroratchet trims it for you. Handy if you forgot to check no-mercy precommit-to-recommit!",
"u": "https://twitter.com/beemuvi/status/367446950422921216",
"t": "2013-08-14 00:45:54 +0000",
}, /*************************************************************************/ {
"x": "When automatically rerailing after a derailment, the new rate is the rate starting at the akrasia horizon. You get your intended rate NOW.",
"u": "https://twitter.com/beemuvi/status/367447694425337856",
"t": "2013-08-14 00:48:51 +0000",
}, /*************************************************************************/ {
"x": "The subject line of legit check emails now includes the new pledge amount if you're automatically recommitting, which everyone soon will be!",
"u": "https://twitter.com/beemuvi/status/367448019383238657",
"t": "2013-08-14 00:50:09 +0000",
}, /*************************************************************************/ {
"x": "Updated <a href=\"http://beeminder.com/overview\">beeminder.com/overview</a> &amp; <a href=\"http://beeminder.com/money\">beeminder.com/money</a> &amp; <a href=\"http://beeminder.com/faq\">beeminder.com/faq</a> &amp; <a href=\"http://blog.beeminder.com/glossary\">blog.beeminder.com/glossary</a> to reflect the \"new world order\"",
"u": "https://twitter.com/beemuvi/status/369333810472562690",
"t": "2013-08-19 05:43:36 +0000",
}, /*************************************************************************/ {
"x": "Small fix to datapoint validator: no longer accept things like \"12.1 1\" or \"99999 1\" as valid datapoints. HT <a href=\"https://twitter.com/slothbear\">@slothbear</a>",
"u": "https://twitter.com/beemuvi/status/369333970770460672",
"t": "2013-08-19 05:44:15 +0000",
}, /*************************************************************************/ {
"x": "Banner telling you that you can permanently delete a goal after hitting archive if it was recently created. Experimentation is good!",
"u": "https://twitter.com/beemuvi/status/369957597501075457",
"t": "2013-08-20 23:02:19 +0000",
}, /*************************************************************************/ {
"x": "Don't automatically recommit goals if you still have freebees and you haven't entered a payment method. (Needed for newbees.)",
"u": "https://twitter.com/beemuvi/status/369957855958269952",
"t": "2013-08-20 23:03:21 +0000",
}, /*************************************************************************/ {
"x": "Bugfix (again) with Retroratchet which was making road segments out of order and throwing graph errors (sorry!)",
"u": "https://twitter.com/beemuvi/status/369958189480939520",
"t": "2013-08-20 23:04:40 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: legit check emails misreported the pledge amounts if auto-rerailing but not upping pledge (HT <a href=\"https://twitter.com/dreeves\">@dreeves</a> not to be confused w/ <a href=\"https://twitter.com/dreev\">@dreev</a>)",
"u": "https://twitter.com/beemuvi/status/369959319623577602",
"t": "2013-08-20 23:09:09 +0000",
}, /*************************************************************************/ {
"x": "Bugfix with <a href=\"https://twitter.com/duolingo\">@duolingo</a> goal creation: recheck URL availability on language choice change",
"u": "https://twitter.com/beemuvi/status/371001975866810368",
"t": "2013-08-23 20:12:18 +0000",
}, /*************************************************************************/ {
"x": "We now plot the aggregated datapoint for each day even when it's not one of the actual datapoints (comes up with some custom goals)",
"u": "https://twitter.com/beemuvi/status/372322378379837440",
"t": "2013-08-27 11:39:07 +0000",
}, /*************************************************************************/ {
"x": "Another bugfix similar to UVI#918 where the amount in the legit check was wrong if there was a pending pledge stepdown",
"u": "https://twitter.com/beemuvi/status/372326133556977665",
"t": "2013-08-27 11:54:02 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: When activating email reminders a page reload was necessary to also activate Zeno polling. <a href=\"https://trello.com/c/CLeXoyvk/829-embarrassing-little-zeno-ui-bug\">trello.com/c/CLeXoyvk/829-embarrassing-little-zeno-ui-bug</a> HT <a href=\"https://twitter.com/Jonar90\">@Jonar90</a>",
"u": "https://twitter.com/beemuvi/status/372326301610172417",
"t": "2013-08-27 11:54:42 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Graphs no longer break when you derail (and auto-rerail) within a week of the akrasia horizon. HT <a href=\"https://twitter.com/nslater\">@nslater</a>",
"u": "https://twitter.com/beemuvi/status/372459427955101696",
"t": "2013-08-27 20:43:42 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Don't let you retroratchet to a negative amt of safety buffer &amp; fail gracefully if you try. (Next tweet is a UVI medley! 3-for-1!)",
"u": "https://twitter.com/beemuvi/status/372789619818917888",
"t": "2013-08-28 18:35:46 +0000",
}, /*************************************************************************/ {
"x": "Datepickers on tmin&amp;tmax fields for zooming, submit credit card form w/ enter key, let you sign out even when account frozen for nonpayment",
"u": "https://twitter.com/beemuvi/status/372789703801450496",
"t": "2013-08-28 18:36:06 +0000",
}, /*************************************************************************/ {
"x": "Set-A-Limit goals now start with a high-up flat spot (so it doesn't matter when in the first week you use your weekly quota) HT <a href=\"https://twitter.com/wycats\">@wycats</a>",
"u": "https://twitter.com/beemuvi/status/372790139715477504",
"t": "2013-08-28 18:37:50 +0000",
}, /*************************************************************************/ {
"x": "All bot reminders (not just autodata) now include direct link to change goal's reminder settings. <a href=\"https://trello.com/c/mYmRDzUr/826-bot-reminders-link-to-reminder-settings\">trello.com/c/mYmRDzUr/826-bot-reminders-link-to-reminder-settings</a> HT <a href=\"https://twitter.com/KatjaGrace\">@KatjaGrace</a>",
"u": "https://twitter.com/beemuvi/status/372816190214660096",
"t": "2013-08-28 20:21:20 +0000",
}, /*************************************************************************/ {
"x": "Set-A-Limit goals now email you a warning when you cross the centerline. <a href=\"https://trello.com/c/G8rlIsek/800-eep-reminder-when-you-hit-set-a-limit-limit\">trello.com/c/G8rlIsek/800-eep-reminder-when-you-hit-set-a-limit-limit</a>",
"u": "https://twitter.com/beemuvi/status/372889448184180736",
"t": "2013-08-29 01:12:27 +0000",
}, /*************************************************************************/ {
"x": "Added the ability to beemind frequency and duration with <a href=\"https://twitter.com/Runkeeper\">@Runkeeper</a> in addition to just mileage (kilometrage?). <a href=\"http://beeminder.com/runkeeper\">beeminder.com/runkeeper</a>",
"u": "https://twitter.com/beemuvi/status/372911760958713856",
"t": "2013-08-29 02:41:06 +0000",
}, /*************************************************************************/ {
"x": "And you can beemind any subset of {Running, Walking, Cycling, All} where \"All\" is any <a href=\"https://twitter.com/Runkeeper\">@Runkeeper</a> activity, even skiing and whatnot",
"u": "https://twitter.com/beemuvi/status/372911875568054272",
"t": "2013-08-29 02:41:34 +0000",
}, /*************************************************************************/ {
"x": "We have so many UVIs lately that the next several will be in batches...",
"u": "https://twitter.com/beemuvi/status/373164128841371648",
"t": "2013-08-29 19:23:56 +0000",
}, /*************************************************************************/ {
"x": "1. \"Embed this goal\" link to add a widget to embed your goal thumbnail on another web page; 2. Include distance to YBR in goal update emails",
"u": "https://twitter.com/beemuvi/status/373164187679092738",
"t": "2013-08-29 19:24:10 +0000",
}, /*************************************************************************/ {
"x": "3. Option to include countdown in widget; 4. New headlines &amp; taglines in rotation on the front page. <a href=\"http://doc.beeminder.com/beeminder-taglines\">doc.beeminder.com/beeminder-taglines</a>",
"u": "https://twitter.com/beemuvi/status/373164784977330177",
"t": "2013-08-29 19:26:32 +0000",
}, /*************************************************************************/ {
"x": "5. Tweaks to bot emails, like always including the URL of the goal; 6. Make goals with upcoming flat spots retroratchetable",
"u": "https://twitter.com/beemuvi/status/373164838614093825",
"t": "2013-08-29 19:26:45 +0000",
}, /*************************************************************************/ {
"x": "In the bot emails when we say the pledge we also say if it's scheduled to change, like \"pledge: $10 (stepping down to $5 in 3 days)\"",
"u": "https://twitter.com/beemuvi/status/373328725221183488",
"t": "2013-08-30 06:17:58 +0000",
}, /*************************************************************************/ {
"x": "Small but important bugfix: Always report a conservatively rounded number for bare min and hard cap numbers",
"u": "https://twitter.com/beemuvi/status/373557658386583552",
"t": "2013-08-30 21:27:40 +0000",
}, /*************************************************************************/ ]

var batch2013sep = [
{
"x": "We now let you know in the reminder emails if you need to add a payment method #dundundun (get it? like <a href=\"http://www.macmillandictionary.com/us/dictionary/american/dun\">macmillandictionary.com/us/dictionary/american/dun</a>)",
"u": "https://twitter.com/beemuvi/status/374215304118665216",
"t": "2013-09-01 17:00:55 +0000",
}, /*************************************************************************/ {
"x": "Allow zero rate (and don't allow negative rates) when creating Set-A-Limit (Do Less) goals. HT Brent Yorgey of <a href=\"http://mathlesstraveled.com\">mathlesstraveled.com</a>",
"u": "https://twitter.com/beemuvi/status/374217326557552641",
"t": "2013-09-01 17:08:57 +0000",
}, /*************************************************************************/ {
"x": "Another big improvement w/ our <a href=\"https://twitter.com/Runkeeper\">@Runkeeper</a> integration: you can create more than one RunKeeper goal. (&amp;, oops, previous UVI not yet deployed)",
"u": "https://twitter.com/beemuvi/status/374218219604549632",
"t": "2013-09-01 17:12:30 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Breaking news: You can schedule breaks! Insert flat (or shallow, or even steeper) spots in your yellow brick road between arbitrary dates.",
"u": "https://twitter.com/bmndr/status/375764314000736256",
"t": "2013-09-05 23:36:08 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: If a goal derailed before your eyes youd briefly see (&amp; be able to click!) the old \"Unfreeze &amp; try again\" button. HT <a href=\"https://twitter.com/richarmstrong\">@richarmstrong</a>",
"u": "https://twitter.com/beemuvi/status/375892454223785985",
"t": "2013-09-06 08:05:19 +0000",
}, /*************************************************************************/ {
"x": "Mini-UVI medley: \"monthly rate\" CSS bugfix, various bugfixes with scheduled breaks, overeager \"need payment\" banner after admin rerail",
"u": "https://twitter.com/beemuvi/status/376165552978276352",
"t": "2013-09-07 02:10:31 +0000",
}, /*************************************************************************/ {
"x": "One of the \"tiny UVIs\" broke something kinda big, namely the ability to unfreeze a goal that was frozen from before the New World Order",
"u": "https://twitter.com/beemuvi/status/377226226378604544",
"t": "2013-09-10 00:25:15 +0000",
}, /*************************************************************************/ {
"x": "Another bugfix with scheduled breaks that'd break the graph if you did the scheduling on different days",
"u": "https://twitter.com/beemuvi/status/377565885826736129",
"t": "2013-09-10 22:54:56 +0000",
}, /*************************************************************************/ {
"x": "More lenient set-a-limit (Do Less) goals: don't start w/ a high-up flat spot, just start higher and slope up immediately. HT <a href=\"https://twitter.com/richarmstrong\">@richarmstrong</a>",
"u": "https://twitter.com/beemuvi/status/377566611000938498",
"t": "2013-09-10 22:57:49 +0000",
}, /*************************************************************************/ {
"x": "Include the distance to get back on the road in bot update emails on beemergency days. HT Dave Morris (other tiny bot email tweaks too)",
"u": "https://twitter.com/beemuvi/status/377928704812281856",
"t": "2013-09-11 22:56:39 +0000",
}, /*************************************************************************/ {
"x": "Bugfix with Fitbit setup that would show a 404 if you didn't have any remaining freebees (though it would actually create the goal)",
"u": "https://twitter.com/beemuvi/status/377928775423373312",
"t": "2013-09-11 22:56:56 +0000",
}, /*************************************************************************/ {
"x": "Convert existing goals to custom in advanced settings (if on the Bee Lite plan or higher and can create custom goals) <a href=\"http://beeminder.com/premium\">beeminder.com/premium</a>",
"u": "https://twitter.com/beemuvi/status/377929078801584128",
"t": "2013-09-11 22:58:08 +0000",
}, /*************************************************************************/ {
"x": "Fixed ancient bug with the \"+X within Y days\" blurbs not taking into account upcoming changes in the yellow brick road",
"u": "https://twitter.com/beemuvi/status/378587422990147585",
"t": "2013-09-13 18:34:10 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: the DIAL-IT-IN button would sometimes be grayed out and bare-min/hard-cap numbers out of date until you refreshed the page",
"u": "https://twitter.com/beemuvi/status/379858138066731008",
"t": "2013-09-17 06:43:32 +0000",
}, /*************************************************************************/ {
"x": "Beeminder iPhone app v2.1: updates for iOS7, swipe to go back to gallery, bugfix with commas. Dropped user/goal creation &amp; road dial.",
"u": "https://twitter.com/beemuvi/status/380083930092675073",
"t": "2013-09-17 21:40:45 +0000",
}, /*************************************************************************/ {
"x": "Set-A-Limit renamed to Do Less, new Do Less goals have Pessimistic Presumptive Reports on by default, checkbox now in basic settings",
"u": "https://twitter.com/beemuvi/status/380392416236167170",
"t": "2013-09-18 18:06:34 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6.1 (UVI 1 of 4): Better syncing w/ configurable period, continuous update of \"last updated\", autocomments config'able",
"u": "https://twitter.com/beemuvi/status/383333709446803456",
"t": "2013-09-26 20:54:12 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6.1 (UVI 2 of 4): Bugfixes with tally reset on orientation change, gallery layout with no goals",
"u": "https://twitter.com/beemuvi/status/383333764723519488",
"t": "2013-09-26 20:54:26 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6.1 (UVI 3 of 4): Bugfixes with data going to wrong goal, 00 on date button, erasing of comments, occasional crashes",
"u": "https://twitter.com/beemuvi/status/383333809996836864",
"t": "2013-09-26 20:54:36 +0000",
}, /*************************************************************************/ {
"x": "Android app version 1.6.1 (UVI 4 of 4): Widget redesign for consistency, fixed skull on completed goals, fixed coloring/countdown issues",
"u": "https://twitter.com/beemuvi/status/383333873444085760",
"t": "2013-09-26 20:54:52 +0000",
}, /*************************************************************************/ {
"x": "We caved and added an option in advanced goal settings to opt out of universal precommit-to-recommit. See update to <a href=\"http://blog.beeminder.com/nwo\">blog.beeminder.com/nwo</a>",
"u": "https://twitter.com/beemuvi/status/384127844814573568",
"t": "2013-09-29 01:29:49 +0000",
}, /*************************************************************************/ {
"x": "Loose ends with Do Less: default to an initial rate of 7/week (not 0!) in goal creation; refer to \"steep (easy) section\", not \"flat spot\"",
"u": "https://twitter.com/beemuvi/status/384807693883420672",
"t": "2013-09-30 22:31:18 +0000",
}, /*************************************************************************/ ]

var batch2013oct = [
{
"x": "Android app version 1.6.2: Facebook &amp; Twitter login, scrollbar on goal list, hard cap shown for Do Less goals, bugfixes, speedups",
"u": "https://twitter.com/beemuvi/status/385657626421252096",
"t": "2013-10-03 06:48:37 +0000",
}, /*************************************************************************/ {
"x": "Bugfix in the web copy for goal creation to clarify that by default you're not committing to just that initial $5 anymore. HT <a href=\"https://twitter.com/benjiwheeler\">@benjiwheeler</a>",
"u": "https://twitter.com/beemuvi/status/386013327488335872",
"t": "2013-10-04 06:22:03 +0000",
}, /*************************************************************************/ {
"x": "New video on the front page! We haven't added the screencast yet but it already beats the old version so we made it live already.",
"u": "https://twitter.com/beemuvi/status/387093457195384832",
"t": "2013-10-07 05:54:06 +0000",
}, /*************************************************************************/ {
"x": "Changed the misleading \"New Contract\" to be clear that you're not just committing on that goal; add paymt info =&gt; on the hook on all of them",
"u": "https://twitter.com/beemuvi/status/387825550523248640",
"t": "2013-10-09 06:23:11 +0000",
}, /*************************************************************************/ {
"x": "CSS fixes: infinibee in new goal form is on top of everything, is same size as on goal page; new data box+label now line up for frozen goals",
"u": "https://twitter.com/beemuvi/status/387833207464267776",
"t": "2013-10-09 06:53:36 +0000",
}, /*************************************************************************/ {
"x": "If a datapoint comment doesnt fit in Recent Data you can hover over the ellipsis to see the rest instead of having to click thru to All Data",
"u": "https://twitter.com/beemuvi/status/388466046258008064",
"t": "2013-10-11 00:48:17 +0000",
}, /*************************************************************************/ {
"x": "Cheapo UVI medley: canonical <a href=\"https://twitter.com/rescuetime\">@rescuetime</a> API URL, typo \"but for long\", quotes on goal name in Archive dialog, new still image for video",
"u": "https://twitter.com/beemuvi/status/388826233779138560",
"t": "2013-10-12 00:39:32 +0000",
}, /*************************************************************************/ {
"x": "With Withings/Fitbit-Aria goals we added a dummy datapoint to create the goal, but then failed to delete it after importing your weight data",
"u": "https://twitter.com/beemuvi/status/389201246734667776",
"t": "2013-10-13 01:29:42 +0000",
}, /*************************************************************************/ {
"x": "Respect newlines in the fine print section of the goal page, plus a direct link to edit it. For convenience!",
"u": "https://twitter.com/beemuvi/status/389625993641459712",
"t": "2013-10-14 05:37:30 +0000",
}, /*************************************************************************/ {
"x": "Bugfix w/ double recommits (yielding broken roads) if problems w/ your credit card (in some cases we ought to be catching that upfront!)",
"u": "https://twitter.com/beemuvi/status/389878281949814784",
"t": "2013-10-14 22:20:00 +0000",
}, /*************************************************************************/ {
"x": "Mini UVI: <a href=\"https://twitter.com/Runkeeper\">@Runkeeper</a> no longer missing from the list of goal types if you follow the New Goal button. HT <a href=\"https://twitter.com/ErikMHummel\">@ErikMHummel</a>",
"u": "https://twitter.com/beemuvi/status/390347596302008320",
"t": "2013-10-16 05:24:53 +0000",
}, /*************************************************************************/ {
"x": "Mini UVI: Stopped adding duplicate weights for the same day from <a href=\"https://twitter.com/fitbit\">@fitbit</a>. Once is enough if your weight didn't change! HT <a href=\"https://twitter.com/TrinSF\">@TrinSF</a>",
"u": "https://twitter.com/beemuvi/status/390700385456771072",
"t": "2013-10-17 04:46:45 +0000",
}, /*************************************************************************/ {
"x": "Bugfix(ish): notice if the buzzing infinibee is hopelessly stuck and give an actual error message rather than leave you hanging forever",
"u": "https://twitter.com/beemuvi/status/390955734386483201",
"t": "2013-10-17 21:41:25 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: If we run into an auth error for autodata goals, we set a flag on the goal that wasn't getting unset when you update your auth info",
"u": "https://twitter.com/beemuvi/status/391438042814107648",
"t": "2013-10-19 05:37:56 +0000",
}, /*************************************************************************/ {
"x": "This is us quietly announcing our <a href=\"https://twitter.com/Jawbone\">@Jawbone</a> UP integration: <a href=\"http://beeminder.com/jawbone\">beeminder.com/jawbone</a> -- a few known issues before we announce it louder...",
"u": "https://twitter.com/beemuvi/status/391807209945841664",
"t": "2013-10-20 06:04:52 +0000",
}, /*************************************************************************/ {
"x": "Jawbone fixes, like refresh button now forces a check, and fixed an error with the push notification, so it's probably working for real now",
"u": "https://twitter.com/beemuvi/status/392176865684647936",
"t": "2013-10-21 06:33:45 +0000",
}, /*************************************************************************/ {
"x": "Behold our new URLminder for minding wordcounts of web-accessible documents, part of our preparation for <a href=\"https://twitter.com/NaNoWriMo\">@NaNoWriMo</a>: <a href=\"http://urlminder.herokuapp.com/\">urlminder.herokuapp.com/</a>",
"u": "https://twitter.com/beemuvi/status/392541090630209536",
"t": "2013-10-22 06:41:03 +0000",
}, /*************************************************************************/ {
"x": "URLminder bugfixes, and ability to edit the list of URLs to mind. Fixed Jawbone reminders to not say \"reply with data\". #2for1",
"u": "https://twitter.com/beemuvi/status/392857229096800256",
"t": "2013-10-23 03:37:17 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: Some browsers (or <a href=\"https://twitter.com/FluidApp\">@FluidApp</a> in some cases) presumptuously turn quotes to curly quotes. We're now robust to that. HT <a href=\"https://twitter.com/theogonia31\">@theogonia31</a>",
"u": "https://twitter.com/beemuvi/status/393611394265796608",
"t": "2013-10-25 05:34:04 +0000",
}, /*************************************************************************/ {
"x": "Bugfix w/ <a href=\"https://twitter.com/Jawbone\">@Jawbone</a> integration: if you didn't actually have any Jawbone data we handled it ungracefully (spurious \"couldn't save goal\")",
"u": "https://twitter.com/beemuvi/status/393611489468100608",
"t": "2013-10-25 05:34:26 +0000",
}, /*************************************************************************/ {
"x": "One last (ha) bugfix with our Jawbone integration - actually a misnamed parameter in the Jawbone docs - that meant autofetches were failing",
"u": "https://twitter.com/beemuvi/status/393964088784470016",
"t": "2013-10-26 04:55:32 +0000",
}, /*************************************************************************/ {
"x": "The How-To video on the front page now includes a screencast: <a href=\"https://www.youtube.com/watch?v=nvRcuFq6ItI\">youtube.com/watch?v=nvRcuFq6ItI</a> -- enormous HT to <a href=\"https://twitter.com/aaronpk\">@aaronpk</a>",
"u": "https://twitter.com/beemuvi/status/394327924158902273",
"t": "2013-10-27 05:01:18 +0000",
}, /*************************************************************************/ {
"x": "Android App v2.0! <a href=\"https://play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en\">play.google.com/store/apps/details?id=com.beeminder.beeminder&hl=en</a> Vastly faster &amp; includes a built in timer app for beeminding how much time you spend on things...",
"u": "https://twitter.com/beemuvi/status/394682410266136576",
"t": "2013-10-28 04:29:54 +0000",
}, /*************************************************************************/ {
"x": "...Even more exciting, it exposes a submission API to other apps (and we've already got <a href=\"https://twitter.com/tagtm\">@tagtm</a> and Tasker integration underway)",
"u": "https://twitter.com/beemuvi/status/394682506550583296",
"t": "2013-10-28 04:30:17 +0000",
}, /*************************************************************************/ {
"x": "Beeminder Android app 2.0 also has the usual assortment of fixes &amp; tweaks &amp; speedups. This totally could've been like 10 UVIs. Yay Uluc!",
"u": "https://twitter.com/beemuvi/status/394682629926035456",
"t": "2013-10-28 04:30:46 +0000",
}, /*************************************************************************/ {
"x": "Finishing touches (bugfixes) on our <a href=\"https://twitter.com/Jawbone\">@Jawbone</a> integration: track sleep in hours not seconds, timestamp bug that had us missing some step data",
"u": "https://twitter.com/beemuvi/status/395798996221829120",
"t": "2013-10-31 06:26:48 +0000",
}, /*************************************************************************/ {
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Announcing <a href=\"https://twitter.com/gooddraft\">@gooddraft</a> integration and other <a href=\"https://twitter.com/NaNoWriMo\">@NaNoWriMo</a> goodies: http://blog.beeminder.com/draft/",
"u": "https://twitter.com/bmndr/status/396108080783839232",
"t": "2013-11-01 02:55:00 +0000",
}, /*************************************************************************/ ]

var batch2013nov = [
{
"x": "Let people add data manually to nanowrimo goals; bug fix with text in reminder email on jawbone goals.",
"u": "https://twitter.com/beemuvi/status/396466669674975232",
"t": "2013-11-02 02:39:54 +0000",
}, /*************************************************************************/ {
"x": "Bugfix: now robust to html-quotes instead of normal ascii quotes which was sometimes an issue with <a href=\"https://twitter.com/IFTTT\">@IFTTT</a>-generated emails HT <a href=\"https://twitter.com/strickvl\">@strickvl</a>",
"u": "https://twitter.com/beemuvi/status/396746921806553088",
"t": "2013-11-02 21:13:32 +0000",
}, /*************************************************************************/ {
"x": "Another robustification/bugfix for <a href=\"https://twitter.com/IFTTT\">@IFTTT</a>-generated emails: comments can now be both arbitrarily long and have nested quotes",
"u": "https://twitter.com/beemuvi/status/397112321668939776",
"t": "2013-11-03 21:25:30 +0000",
}, /*************************************************************************/ {
"x": "Allow a bare number like \"9\" for \"9:00am\" in the remind time field, and don't give a hideous \"is_invalid\" if not parseable. HT Jon Widen",
"u": "https://twitter.com/beemuvi/status/397573048242413568",
"t": "2013-11-05 03:56:15 +0000",
}, /*************************************************************************/ {
"x": "You can now change the sort order in the All Data view!",
"u": "https://twitter.com/beemuvi/status/397935822952861696",
"t": "2013-11-06 03:57:48 +0000",
}, /*************************************************************************/ {
"x": "You can now see a table of all your current pledges and previously paid pledges (under \"Your Account\"; obvious cleanup still needed!)",
"u": "https://twitter.com/beemuvi/status/398193394037452800",
"t": "2013-11-06 21:01:17 +0000",
}, /*************************************************************************/ {
"x": "Consistent autodata comments (time of day, the right prepositions, etc); cleaned up the Retroratchet dialog box; tiny bug w/ \"&lt;\" in comments",
"u": "https://twitter.com/beemuvi/status/398580410411536384",
"t": "2013-11-07 22:39:09 +0000",
}, /*************************************************************************/ {
"x": "(The 1st 2 items in the previous 3-for-1 (or 3-for-2 now) UVI were done a long time ago; were waiting to tweet it till we finished the 3rd!)",
"u": "https://twitter.com/beemuvi/status/398580721477906432",
"t": "2013-11-07 22:40:23 +0000",
}, /*************************************************************************/ {
"x": "When you tried to add a pledge to a goal even though you didn't have to because you had freebees left, it'd screw up. HT <a href=\"https://twitter.com/osazuwa\">@osazuwa</a> #bugfix",
"u": "https://twitter.com/beemuvi/status/399063183425425408",
"t": "2013-11-09 06:37:31 +0000",
}, /*************************************************************************/ {
"x": "Android app v2.1: Tasker integration! TagTime integration! (Also slight speedup in datapoint submissions and various bugfixes/tweaks.)",
"u": "https://twitter.com/beemuvi/status/399805264880082944",
"t": "2013-11-11 07:46:17 +0000",
}, /*************************************************************************/ {
"x": "We didn't force you to hit \"authorize Withings\" before submitting the form for a new goal, which led to mass confusion and hysteria #bugfix",
"u": "https://twitter.com/beemuvi/status/400150235021721600",
"t": "2013-11-12 06:37:05 +0000",
}, /*************************************************************************/ {
"x": "Javascript error in <a href=\"https://twitter.com/duolingo\">@duolingo</a> goal setup caused us not to record a language to track &amp; then subsequently could not update your goal #bugfix",
"u": "https://twitter.com/beemuvi/status/400485064598773761",
"t": "2013-11-13 04:47:34 +0000",
}, /*************************************************************************/ {
"x": "Foreshadowing for generalized road dial: pink-shaded verboten zone (region where road is un-dial-to-able)",
"u": "https://twitter.com/beemuvi/status/400891731027058688",
"t": "2013-11-14 07:43:31 +0000",
}, /*************************************************************************/ {
"x": "Zeno polling now on by default for new goals! <a href=\"http://blog.beeminder.com/zeno\">blog.beeminder.com/zeno</a> (Also fixed the Do Less \"wrong lane\" emails to be from the bot)",
"u": "https://twitter.com/beemuvi/status/400891785532022784",
"t": "2013-11-14 07:43:44 +0000",
}, /*************************************************************************/ {
"x": "Autoratchet wasn't triggering if you manually refreshed before nightly refresh; 1st update of new day now triggers it. HT <a href=\"https://twitter.com/wycats\">@wycats</a> #bugfix",
"u": "https://twitter.com/beemuvi/status/401610773572513792",
"t": "2013-11-16 07:20:44 +0000",
}, /*************************************************************************/ {
"x": "Fixed bug with deadman switch: it was counting auto-recommit datapoints! Oy! Refunding $$ now to retroactively honor the promised behavior.",
"u": "https://twitter.com/beemuvi/status/401975856106455041",
"t": "2013-11-17 07:31:27 +0000",
}, /*************************************************************************/ {
"n": 1002,
"x": "To commemorate 1000 UVIs, our 1001st [actually 1002nd] UVI is announcing <a href=\"https://twitter.com/beeminfra\">@beeminfra</a>, just like UVI#1 was announcing <a href=\"https://twitter.com/beemuvi\">@beemuvi</a>",
"u": "https://twitter.com/beemuvi/status/402340154599170049",
"t": "2013-11-18 07:39:02 +0000",
"c": "Our numbering was wrong when we tweeted this",
}, /*************************************************************************/ {
"x": "Weasels for life! No takebacks if you call yourself out as a weasel (\"weasel-proof me\" in graph settings).",
"u": "https://twitter.com/beemuvi/status/402341061185384449",
"t": "2013-11-18 07:42:38 +0000",
}, /*************************************************************************/ {
"x": "We were accidentally showing things like \"this graph is frozen because you haven't entered payment info\" to everyone. #bugfix HT <a href=\"https://twitter.com/aaronpk\">@aaronpk</a>",
"u": "https://twitter.com/beemuvi/status/403060009925214209",
"t": "2013-11-20 07:19:29 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"https://twitter.com/pjf\">@pjf</a> <a href=\"https://twitter.com/bmndr\">@bmndr</a> Fixed now! Thanks for the easy UVI!",
"u": "https://twitter.com/beemuvi/status/403399947061436416",
"t": "2013-11-21 05:50:16 +0000",
}, /*************************************************************************/ {
"x": "Warning emails from bot about Do Less goals in wrong lane no longer superfluously get sent when data was entered via the web or email",
"u": "https://twitter.com/beemuvi/status/403790277795536896",
"t": "2013-11-22 07:41:18 +0000",
}, /*************************************************************************/ {
"x": "Rearranged goal settings. \"Advanced\" is now just for stuff we recommend not messing with unless you know what you're doing.",
"u": "https://twitter.com/beemuvi/status/404156319759736832",
"t": "2013-11-23 07:55:50 +0000",
}, /*************************************************************************/ {
"x": "Softened our deadbeat dunning: persistent banner, redirect you to add a valid credit card every 10min, no graph images for you, no new goals",
"u": "https://twitter.com/beemuvi/status/404430982603743232",
"t": "2013-11-24 02:07:14 +0000",
}, /*************************************************************************/ {
"x": "(As opposed to previous crazy status quo where we totally locked you out of everything -- even the FAQ! -- if your credit card failed.)",
"u": "https://twitter.com/beemuvi/status/404431144218677248",
"t": "2013-11-24 02:07:53 +0000",
}, /*************************************************************************/ {
"x": "If you have links in your goal title we were showing it with raw html tags in the archive dialog box. #bugfix",
"u": "https://twitter.com/beemuvi/status/405198933585973248",
"t": "2013-11-26 04:58:48 +0000",
}, /*************************************************************************/ {
"x": "Setting Tmin=today -- ie, hide all previous data -- didn't work. The earliest we allowed was yesterday, due to a dumb little bug. #bugfix",
"u": "https://twitter.com/beemuvi/status/405199189937623040",
"t": "2013-11-26 04:59:49 +0000",
}, /*************************************************************************/ {
"x": "Failed to indicate in the pledge list - <a href=\"http://beeminder.com/pledges\">beeminder.com/pledges</a> - if a charge was attempted but failed. Now show paid/failed/refunded.",
"u": "https://twitter.com/beemuvi/status/405585768833241088",
"t": "2013-11-27 06:35:57 +0000",
}, /*************************************************************************/ {
"x": "We were alerted that the deadbeat redirect was making the api unusable, so we removed that entirely. Was possibly too annoying/petty anyway.",
"u": "https://twitter.com/beemuvi/status/405586192340508673",
"t": "2013-11-27 06:37:38 +0000",
}, /*************************************************************************/ {
"x": "Rescuetime goals could insta-derail if the graph got updated elsewhere while the import was running in the background. Robusted it. #bugfix",
"u": "https://twitter.com/beemuvi/status/405586440974651392",
"t": "2013-11-27 06:38:37 +0000",
}, /*************************************************************************/ {
"x": "Accidentally installed bleeding edge version of matplotlib when switching to new server and it made weird ghost roads, fixed now. #bugfix",
"u": "https://twitter.com/beemuvi/status/406167543754153984",
"t": "2013-11-28 21:07:43 +0000",
}, /*************************************************************************/ ]

var batch2013dec = [
{
"x": "Added <a href=\"https://twitter.com/Jawbone\">@Jawbone</a> and <a href=\"https://twitter.com/gooddraft\">@gooddraft</a> logos to the front page of <a href=\"http://beeminder.com\">beeminder.com</a>",
"u": "https://twitter.com/beemuvi/status/407413418518249472",
"t": "2013-12-02 07:38:23 +0000",
}, /*************************************************************************/ {
"x": "Small #bugfix w/ <a href=\"https://www.beeminder.com/widgets\">beeminder.com/widgets</a> - would give a 500 error if parameters were incorrect and it could not find the goal in question",
"u": "https://twitter.com/beemuvi/status/407822919826284544",
"t": "2013-12-03 10:45:35 +0000",
}, /*************************************************************************/ {
"x": "In advanced settings you can now, very crudely, change your data units, like Minutes to Hours if you want to use the Android timer.",
"u": "https://twitter.com/beemuvi/status/408140379775451136",
"t": "2013-12-04 07:47:04 +0000",
}, /*************************************************************************/ {
"x": "Going to advanced settings for a <a href=\"https://twitter.com/trello\">@trello</a> goal was throwing a 500 error ever since we rearranged basic/advanced settings. HT <a href=\"https://twitter.com/danlucraft\">@danlucraft</a>",
"u": "https://twitter.com/beemuvi/status/408181957688692736",
"t": "2013-12-04 10:32:17 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"http://gitminder.com\">gitminder.com</a> #bugfix: We were overcounting your commits if you chose to mind all commits across repos. Better date handling too.",
"u": "https://twitter.com/beemuvi/status/408867308526780416",
"t": "2013-12-06 07:55:37 +0000",
}, /*************************************************************************/ {
"x": "Preliminary version of our upcoming <a href=\"https://twitter.com/codeschool\">@codeschool</a> integration for you hardcore <a href=\"https://twitter.com/bmndr\">@bmndr</a> users who read our UVI tweets: <a href=\"http://beeminder.com/codeschool\">beeminder.com/codeschool</a>",
"u": "https://twitter.com/beemuvi/status/409221967623892992",
"t": "2013-12-07 07:24:54 +0000",
}, /*************************************************************************/ {
"x": "If not signed in to bmndr when hitting <a href=\"http://bmndr.com/codeschool\">bmndr.com/codeschool</a> the Sign Up/In link did nothing. Now gives you a form to sign up / in. #bugfix",
"u": "https://twitter.com/beemuvi/status/409564826822656002",
"t": "2013-12-08 06:07:18 +0000",
}, /*************************************************************************/ {
"x": "Fixed the \"hard cap\" help text to not say the wrong thing about exclamation points for Do Less goals. <a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/5150692-fix-the-hard-cap-text-\">beeminder.uservoice.com/forums/3011-general/suggestions/5150692-fix-the-hard-cap-text-</a> HT Alice M",
"u": "https://twitter.com/beemuvi/status/409820914126041088",
"t": "2013-12-08 23:04:54 +0000",
}, /*************************************************************************/ {
"x": "Update web-copy for weasel-proof box to warn that, for obvious reasons, it's not uncheckable. Later: just have an akrasia-proof timer on it.",
"u": "https://twitter.com/beemuvi/status/409821029431652352",
"t": "2013-12-08 23:05:22 +0000",
}, /*************************************************************************/ {
"x": "Snazzed up the <a href=\"https://twitter.com/codeschool\">@codeschool</a> landing page: images, description of what Beeminder is about for the uninitiated, etc. <a href=\"http://beeminder.com/codeschool\">beeminder.com/codeschool</a>",
"u": "https://twitter.com/beemuvi/status/410639814703071232",
"t": "2013-12-11 05:18:55 +0000",
}, /*************************************************************************/ {
"x": "If you gave a nonexistent <a href=\"https://twitter.com/duolingo\">@duolingo</a> username at <a href=\"http://beeminder.com/duolingo\">beeminder.com/duolingo</a> we just stared blankly instead of saying \"not found\". #bugfix",
"u": "https://twitter.com/beemuvi/status/411033967739928576",
"t": "2013-12-12 07:25:09 +0000",
}, /*************************************************************************/ {
"x": "More <a href=\"https://twitter.com/duolingo\">@duolingo</a> setup #bugfix's (tweet 1/3): validate that you give a rate, remove the error message once you do, force picking of slug, ...",
"u": "https://twitter.com/beemuvi/status/411036249428733953",
"t": "2013-12-12 07:34:13 +0000",
}, /*************************************************************************/ {
"x": "Duolingo (2/3): Use a daily rate since we ask for a daily rate (rather turning around and multiplying by 7 for some reason)",
"u": "https://twitter.com/beemuvi/status/411036331045695488",
"t": "2013-12-12 07:34:32 +0000",
}, /*************************************************************************/ {
"x": "Duolingo (3/3): Offer choice of flat spot (but default to yes week of safety buffer, rather than defaulting to no safety buffer, no choice)",
"u": "https://twitter.com/beemuvi/status/411036387404554240",
"t": "2013-12-12 07:34:46 +0000",
}, /*************************************************************************/ {
"x": "2-for-1: <a href=\"https://twitter.com/fitbit\">@fitbit</a> removed 'active score' so we dropped it from Fitbit goal creation; Reminder settings clarify that Zeno polling's email only",
"u": "https://twitter.com/beemuvi/status/412461835434983424",
"t": "2013-12-16 05:58:59 +0000",
}, /*************************************************************************/ {
"x": "Strip zero-width-space characters, inserted by some mail clients, which would confuse the bot, and quite opaquely! HT @Malcolm_McC #bugfix",
"u": "https://twitter.com/beemuvi/status/412836712545402881",
"t": "2013-12-17 06:48:37 +0000",
}, /*************************************************************************/ {
"x": "Pessimistic reports for Do Less are surprising/confusing at first. Now we send you email with the 411 the first (next) time you create one.",
"u": "https://twitter.com/beemuvi/status/413192182489567232",
"t": "2013-12-18 06:21:07 +0000",
}, /*************************************************************************/ {
"x": "Take-a-break looked like a link but did nothing when looking at other people's goals. HT <a href=\"https://twitter.com/aaronpk\">@aaronpk</a> #bugfix",
"u": "https://twitter.com/beemuvi/status/413573958579937280",
"t": "2013-12-19 07:38:10 +0000",
}, /*************************************************************************/ {
"x": "Pledge box formatting (mostly don't show u someone else's stepdown countdown); don't show someone else's archive countdown either #bugfix",
"u": "https://twitter.com/beemuvi/status/413939123104137216",
"t": "2013-12-20 07:49:12 +0000",
}, /*************************************************************************/ {
"x": "Another Gitminder #bugfix: if tracking commits across all repos &amp; ur really prolific we'd occasionally miss some commits (pagination fail)",
"u": "https://twitter.com/beemuvi/status/414261791267377152",
"t": "2013-12-21 05:11:22 +0000",
}, /*************************************************************************/ {
"x": "We were occasionally (pretty rarely, but still) losing the fitbit token somewhere between sign up and goal creation #bugfix",
"u": "https://twitter.com/beemuvi/status/414654789251633152",
"t": "2013-12-22 07:13:00 +0000",
}, /*************************************************************************/ {
"x": "Over-the-top \"here be dragons\" warning on advanced settings; removed broken chirpify stuff from pledge flow; tweaked jawbone sleep reminders",
"u": "https://twitter.com/beemuvi/status/415017814756302848",
"t": "2013-12-23 07:15:32 +0000",
}, /*************************************************************************/ {
"x": "TagTime entry in FAQ with link to <a href=\"https://twitter.com/dreev\">@dreev</a>'s TagTime Minder which <a href=\"https://twitter.com/thatgirl\">@thatgirl</a> says doesn't count as a UVI in and of itself /cc <a href=\"https://twitter.com/tagtm\">@tagtm</a>",
"u": "https://twitter.com/beemuvi/status/415338440549343234",
"t": "2013-12-24 04:29:35 +0000",
}, /*************************************************************************/ {
"x": "Nicer tabby things for road dial, retroratchet, and schedule a break (which also means no popups for those)",
"u": "https://twitter.com/beemuvi/status/415732350815703040",
"t": "2013-12-25 06:34:51 +0000",
}, /*************************************************************************/ {
"x": "Explanations in the tabs (road dial, retroratchet, take-a-break) for people who aren't signed in (or for looking at another person's goal)",
"u": "https://twitter.com/beemuvi/status/416028927048433665",
"t": "2013-12-26 02:13:20 +0000",
}, /*************************************************************************/ {
"x": "SMS reminders weren't checking they had current info for today (if scheduled for early morning they could go out w/ yesterday's goal status)",
"u": "https://twitter.com/beemuvi/status/416459537697103872",
"t": "2013-12-27 06:44:25 +0000",
}, /*************************************************************************/ {
"x": "Added <a href=\"https://twitter.com/PhilipHellyer\">@PhilipHellyer</a> to <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a> (and fixed it up a bit; note real-time number of hours worked for each person!)",
"u": "https://twitter.com/beemuvi/status/416822047092658176",
"t": "2013-12-28 06:44:54 +0000",
}, /*************************************************************************/ {
"x": "Datepickers were missing on Take-a-Break, and a nice message letting you know you can't schedule breaks while the goal is frozen",
"u": "https://twitter.com/beemuvi/status/417117961581654016",
"t": "2013-12-29 02:20:46 +0000",
}, /*************************************************************************/ {
"x": "Was common to miss some data from <a href=\"https://twitter.com/fitbit\">@fitbit</a> if you hadn't synced for a few days; now we periodically check a week back for updates to yr data",
"u": "https://twitter.com/beemuvi/status/417553974250590208",
"t": "2013-12-30 07:13:19 +0000",
}, /*************************************************************************/ {
"x": "Welcome Erica Edelman, our new Head Beekeeper! (She moved to Portland for this and everything.) The UVI is she's on <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a>",
"u": "https://twitter.com/beemuvi/status/417911877629259776",
"t": "2013-12-31 06:55:30 +0000",
}, /* --------------------------------------------------------- end 2013dec */ ]

