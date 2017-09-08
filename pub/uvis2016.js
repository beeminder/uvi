var batch2016jan = [
{
"x": "In goal default settings if you tried to submit the form with no leadtime or no alertstart or no deadline it would give a 500 error #bugfix",
"u": "https://twitter.com/beemuvi/status/683068394736726016",
"t": "2016-01-01 23:32:50 +0000",
}, /*************************************************************************/ {
"x": "Typo fix in hovertext in footer (thx Caitlin Patton!) &amp; http://beeminder.com/api documentation updates re: roadall not road_dial, &amp; daystamp",
"u": "https://twitter.com/beemuvi/status/683449083822903296",
"t": "2016-01-03 00:45:34 +0000",
"c": "Point to the replacement for road_dial in the road dial endpoint description, and mention that you can include daystamp when creating datapoints (but that timestamp overrides)",
}, /*************************************************************************/ {
"n": 1778,
"f": true,
"x": "Guess what we (@andrewpbrett to be specific) made? A Beeminder Slackbot! http://dreev.es/slackbot Has rough edges (feedback pls!) but works!",
"u": "https://twitter.com/beemuvi/status/683761692640067584",
"t": "2016-01-03 21:27:45 +0000",
}, /*************************************************************************/ {
"n": 1779,
"x": "Bug in http://beeminder.com/featured &mdash; would sometimes give 500 error &amp; other times not show actual 24 most recently updated graphs #bugfix",
"u": "https://twitter.com/beemuvi/status/684162308570939393",
"t": "2016-01-04 23:59:40 +0000",
}, /*************************************************************************/ {
"n": 1780,
"x": "Both recent data and fine print now say \"public\" or \"private\" w/ link to change it (<a href=\"http://forum.beeminder.com/t/feature-request-private-public-indicator/447\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/684533031823003648",
"t": "2016-01-06 00:32:47 +0000",
"c": "TODO: confirm this wasn't lost in #redesign",
}, /*************************************************************************/ {
"n": 1781,
"x": "Got rid of superfluous subheading for \"Recent Data\". Added hovertext for New Data and Advanced Entry tabs. HT Edith Beerdsen #mini ×2",
"u": "https://twitter.com/beemuvi/status/684853414522556416",
"t": "2016-01-06 21:45:52 +0000",
}, /*************************************************************************/ {
"n": 1782, 
"x": "Informative error if goalslug taken etc (<a href=\"http://forum.beeminder.com/t/uninformative-error-message-when-creating-duplicate-goal/1712\">forum post</a>) (another thing we broke in the great javascript refactor a year ago) #bugfix",
"u": "https://twitter.com/beemuvi/status/685255946851860480",
"t": "2016-01-08 00:25:23 +0000",
}, /*************************************************************************/ {
"n": 1783, 
"x": "API #bugfix thanks to Malcolm Ocean &amp; <a href=\"complice.co\">Complice</a>: Now the deauth callback actually works so 3rd-party apps know when user revokes auth",
"u": "https://twitter.com/beemuvi/status/685623126156152832",
"t": "2016-01-09 00:44:26 +0000",
}, /*************************************************************************/ {
"n": 1784,
"f": true,
"x": "(+) IFTTT Improvements!",
"u": "https://twitter.com/beemuvi/status/685944434802819073",
"t": "2016-01-09 22:01:12 +0000",
}, /*************************************************************************/ {
"n": 1784,
"s": true,
"x": "(1) New Zeno Trigger lets Beeminder hound you via any medium connectable to <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> (flash your lights, <a href=\"https://twitter.com/SlackHQ\">@SlackHQ</a>, you name it)",
"u": "https://twitter.com/beemuvi/status/685944434802819073",
"t": "2016-01-09 22:01:12 +0000",
}, /*************************************************************************/ {
"n": 1785,
"s": true,
"x": "(2) \"N safe days\" <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> Trigger now lets you say \"less than\"/\"equal to\"/\"greater than\". Handy for, eg, rewarding yourself for more buffer.",
"u": "https://twitter.com/beemuvi/status/685944500020105216",
"t": "2016-01-09 22:01:27 +0000",
}, /*************************************************************************/ {
"n": 1786,
"s": true,
"x": "(3) Don't laugh but we now have an <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> \"Charge me\" Action in case you want to instantly sting yourself for going to a bar or something.",
"u": "https://twitter.com/beemuvi/status/685944577925058561",
"t": "2016-01-09 22:01:46 +0000",
}, /*************************************************************************/ {
"n": 1787, 
"x": "In <a href=\"https://twitter.com/Withings\">@Withings</a> goal creation: if out of freebees we were both not requiring a pledge and not redirecting to your goal after creation. #bugfix",
"u": "https://twitter.com/beemuvi/status/687069428412887040",
"t": "2016-01-13 00:31:31 +0000",
}, /*************************************************************************/ {
"n": 1788, 
"x": "Some small improvements, #bugfix's, robustifications of the Beeminder Slackbot, like actually refreshing the graph when you add a datapoint",
"u": "https://twitter.com/beemuvi/status/687412068518080512",
"t": "2016-01-13 23:13:03 +0000",
}, /*************************************************************************/ {
"x": "And a big improvement to the Beeminder Slackbot: it now does zeno reminders! http://slackminder.com (Still pretty beta though)",
"u": "https://twitter.com/beemuvi/status/687412104559759363",
"t": "2016-01-13 23:13:11 +0000",
}, /*************************************************************************/ {
"x": "Removed deadline from terrifyingly advanced settings since it's now in reminders and fixed the link to deadline under the countdown. #mini",
"u": "https://twitter.com/beemuvi/status/688107679814778880",
"t": "2016-01-15 21:17:09 +0000",
}, /*************************************************************************/ {
"x": "We now send all reminders as push notifications on iOS (not just eep-day zenos). Fixed brief bug where it would wrongly say \"eep\" on those.",
"u": "https://twitter.com/beemuvi/status/688513114132721665",
"t": "2016-01-17 00:08:13 +0000",
}, /*************************************************************************/ {
"x": "Made the deauth buttons on https://www.beeminder.com/settings/apps not squished together. Email/SMS bot no longer says \"Emergency\" in scarequotes. #mini ×2",
"u": "https://twitter.com/beemuvi/status/688513627477807105",
"t": "2016-01-17 00:10:15 +0000",
}, /*************************************************************************/ {
"x": "Fixed a case of ugly line wrapping in reminder settings; doc #bugfix with platonic goal types in hovertext in custom goal settings #mini ×2",
"u": "https://twitter.com/beemuvi/status/689245772634697728",
"t": "2016-01-19 00:39:32 +0000",
}, /*************************************************************************/ {
"x": "Didn't affect many people but fixed a bug that would leave the \"goal is frozen\" banner on goals even after updating payment info. #bugfix",
"u": "https://twitter.com/beemuvi/status/689601346111012864",
"t": "2016-01-20 00:12:27 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "We now ask you for your current/recent weight (with option to auto-fetch it!) when creating <a href=\"https://twitter.com/Withings\">@Withings</a> goals. So much nicer!",
"u": "https://twitter.com/beemuvi/status/689969167240400897",
"t": "2016-01-21 00:34:03 +0000",
}, /*************************************************************************/ {
"x": "Getting explicit starting weight also fixes bad bug that often caused insta-derails when importing <a href=\"https://twitter.com/Withings\">@Withings</a> data on goal creation. #bugfix",
"u": "https://twitter.com/beemuvi/status/689969363802312705",
"t": "2016-01-21 00:34:49 +0000",
}, /*************************************************************************/ {
"x": "Beeminder Slackbot: it was showing the least recent instead of most recent datapoints, and all instances would fail if one did. #bugfix ×2",
"u": "https://twitter.com/beemuvi/status/690693528624599041",
"t": "2016-01-23 00:32:24 +0000",
}, /*************************************************************************/ {
"x": "New box in the blog sidebar for newbees and overhauled the User's Guide for New Bees post, linked to therefrom. <a href=\"http://blog.beeminder.com\">blog.beeminder.com</a>",
"u": "https://twitter.com/beemuvi/status/691002770652921856",
"t": "2016-01-23 21:01:13 +0000",
}, /*************************************************************************/ {
"x": "The calendar date pickers for take-a-break let you pick the same end-date as start-date, then complained at you. Now it's less dumb. #mini",
"u": "https://twitter.com/beemuvi/status/691561118385319936",
"t": "2016-01-25 09:59:53 +0000",
}, /*************************************************************************/ {
"n": 1800, 
"x": "If you had to re-auth Skritter (maybe some others) we were failing to remove error flag &amp; wouldn't automatically resume fetching #bugfix",
"u": "https://twitter.com/beemuvi/status/691792309885784065",
"t": "2016-01-26 01:18:34 +0000",
"c": "Were already doing this for some specific autod types, but I also made the code better so that this will just happen for new types we add, so also infra",
}, /*************************************************************************/ {
"n": 1801, 
"x": "Fixed a bug on http://scribeminder.com that prevented connecting to Beeminder if you weren't using HTTPS. Also, forced HTTPS. #bugfix",
"u": "https://twitter.com/beemuvi/status/692229435026726914",
"t": "2016-01-27 06:15:32 +0000",
}, /*************************************************************************/ {
"n": 1802,
"f": true,
"x": "(+) Improvements to our <a href=\"https://twitter.com/habitica\">@habitica</a> integration for completed To-Dos!",
"u": "https://twitter.com/beemuvi/status/692699300929761280",
"t": "2016-01-28 13:22:37 +0000",
}, /*************************************************************************/ {
"n": 1802,
"s": true,
"x": "(1) Every To-Do is its own datapoint with task text as the comment...",
"u": "https://twitter.com/beemuvi/status/692699300929761280",
"t": "2016-01-28 13:22:37 +0000",
}, /*************************************************************************/ {
"n": 1803,
"s": true,
"x": "(2) <a href=\"https://twitter.com/habitica\">@habitica</a> \"More Completed To-Dos\" goals are now auto-summing instead of odometer-style",
"u": "https://twitter.com/beemuvi/status/692816365242036224",
"t": "2016-01-28 21:07:48 +0000",
}, /*************************************************************************/ {
"n": 1804,
"s": true,
"x": "(3) No longer any hoops to jump through when deleting completed To-Dos in <a href=\"https://twitter.com/habitica\">@habitica</a>; Beeminder remembers everything!",
"u": "https://twitter.com/beemuvi/status/692816478962225152",
"t": "2016-01-28 21:08:15 +0000",
}, /*************************************************************************/ {
"n": 1805,
"s": true,
"x": "(4) The <a href=\"https://twitter.com/habitica\">@habitica</a> integration has a 7-day window where changing To-Dos (ie uncompleting them) is reflected in Beeminder #statuteoflimitations",
"u": "https://twitter.com/beemuvi/status/692816768713097216",
"t": "2016-01-28 21:09:24 +0000",
}, /*************************************************************************/ ]

var batch2016feb = [
{
"n": 1806, 
"x": "Trivial yet maybe a big deal: Lots of confusion about initial flat spot (eg, bot doesn't bug you for ~9 days) so default now is no flat week",
"u": "https://twitter.com/beemuvi/status/694072069886124032",
"t": "2016-02-01 08:17:31 +0000",
}, /*************************************************************************/ {
"n": 1807, 
"x": "Now two sections of statistics in the sidebar: for datapoints &amp; for the yellow brick road. Added 2 new data stats so far: mean &amp; mean delta.",
"u": "https://twitter.com/beemuvi/status/694449364689784832",
"t": "2016-02-02 09:16:45 +0000",
}, /*************************************************************************/ {
"x": "Mean and Mean Delta in data stats box now interpolate gaps in data, making Mean Delta comparable to daily rate of the yellow brick road",
"u": "https://twitter.com/beemuvi/status/694768767436398594",
"t": "2016-02-03 06:25:56 +0000",
}, /*************************************************************************/ {
"x": "Changed #statuteoflimitations for RescueTime integration from 2 and from Skritter from 4 to 7 days. Hooray for (a bit more) consistency!",
"u": "https://twitter.com/beemuvi/status/695168091374784512",
"t": "2016-02-04 08:52:43 +0000",
}, /*************************************************************************/ {
"x": "Moving deadline out of adv. settings caused bug that prevented graph from refreshing (eg updating watermark) when changing deadline. #bugfix",
"u": "https://twitter.com/beemuvi/status/695503269271990272",
"t": "2016-02-05 07:04:35 +0000",
"c": "cf https://twitter.com/beemuvi/status/664593997491544064 &amp; https://twitter.com/beemuvi/status/688107679814778880",
}, /*************************************************************************/ {
"x": "Were unwittingly removing &amp; re-adding Garmin sleep datapoints every time; made IFTTT \"Added Data\" Trigger go batshit. #bugfix HT Markos Giannopoulos",
"u": "https://twitter.com/beemuvi/status/695862707631689728",
"t": "2016-02-06 06:52:52 +0000",
"c": "Every time we checked for data",
}, /*************************************************************************/ {
"x": "If you edited your sleep start time in the Misfit app we'd treat it as a new datapoint &amp; overcount your sleep! #bugfix HT Caitlin Patton",
"u": "https://twitter.com/beemuvi/status/695862896459276288",
"t": "2016-02-06 06:53:37 +0000",
"c": "Uniqifying based on start time not good",
}, /*************************************************************************/ {
"x": "Introduced a bug w/ zeno alerts: after sending the 1st one of the day were accidentally sending them every 5 minutes for some of you #bugfix",
"u": "https://twitter.com/beemuvi/status/696594684160790528",
"t": "2016-02-08 07:21:29 +0000",
}, /*************************************************************************/ {
"x": "We moved the settings for how often you get beemails from \"Reminders/Defaults\" to \"Personal Info\" (tweetstorm re: reminders settings soon!)",
"u": "https://twitter.com/beemuvi/status/697052026862116865",
"t": "2016-02-09 13:38:48 +0000",
}, /*************************************************************************/ {
"x": "Better composition of zeno alert. Gives number of days till deadline instead of day of week if &gt;7days away, like in graph watermark. #mini",
"u": "https://twitter.com/beemuvi/status/697415236521820160",
"t": "2016-02-10 13:42:04 +0000",
"c": "This is in the alert_text function in the goal model",
}, /*************************************************************************/ {
"x": "Multiple improvements to the Beeminder Slack bot: choose for each goal whether the bot DMs you or posts to a channel or both.",
"u": "https://twitter.com/beemuvi/status/697672025071083520",
"t": "2016-02-11 06:42:27 +0000",
}, /*************************************************************************/ {
"x": "And a #bugfix with the Slack bot that made it (sometimes? briefly?) ignore those settings and DM you anyway.",
"u": ["https://twitter.com/beemuvi/status/697672251240415232",
      "https://github.com/beeminder/beeminder/commit/2a154d523f2f22a7ccdaeffb2e1b20cd609220a3"],
"t": "2016-02-11 06:43:21 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Big change to reminder settings: no more inheriting from defaults; instead there's a button (in advanced settings) to reset to defaults",
"u": "https://twitter.com/beemuvi/status/698052277311963137",
"t": "2016-02-12 07:53:26 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Equally big change: choose any subset of ways to get reminded for each goal {email, sms, ios, android, slack DM, slack channel, webhook}",
"u": "https://twitter.com/beemuvi/status/698052335826644992",
"t": "2016-02-12 07:53:40 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Did we mention you can get reminded via webhook now! Also documented as part of the <a href=\"http://beeminder.com/api\">API</a>.",
"u": "https://twitter.com/beemuvi/status/698052390914666497",
"t": "2016-02-12 07:53:53 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Nice compact table of all reminder settings for all goals. Handy for setting up <a href=\"http://blog.beeminder.com/waterfalls\">waterfalls</a>.",
"u": "https://twitter.com/beemuvi/status/698052480421093376",
"t": "2016-02-12 07:54:15 +0000",
}, /*************************************************************************/ {
"x": "Various #bugfix's &amp; tweaks along the way with all that, like breaking &amp; fixing updating of defaults from iOS, making the table pretty, ...",
"u": "https://twitter.com/beemuvi/status/698052531868413952",
"t": "2016-02-12 07:54:27 +0000",
}, /*************************************************************************/ {
"x": "... changes to the CSS in settings, button copy (\"Save Goal Specific Settings\"), tooltips, better error-checking w/ webhooks. #mini ×6+",
"u": "https://twitter.com/beemuvi/status/698052615133728768",
"t": "2016-02-12 07:54:47 +0000",
}, /*************************************************************************/ {
"x": "And one more cheap one: We now ellipsify long goal slugs so they don't mess up the nice compact table of reminder settings. #mini",
"u": "https://twitter.com/beemuvi/status/698052679948304384",
"t": "2016-02-12 07:55:02 +0000",
}, /*************************************************************************/ {
"x": "One last small one that we just deployed: a horizontal line in the compact table of reminder settings demarcating the backburner goals",
"u": "https://twitter.com/beemuvi/status/698052819392147456",
"t": "2016-02-12 07:55:35 +0000",
"c": "Can't remember why I made a note about 'For Do Less goals this winds up using n * daily rate to proxy...'",
}, /*************************************************************************/ {
"f": true,
"x": "Our RescueTime integration is markedly slicker: no need to paste your API key to authorize Beeminder to access your RescueTime data",
"u": "https://twitter.com/beemuvi/status/701327811143815168",
"t": "2016-02-21 08:49:14 +0000",
}, /*************************************************************************/ {
"x": "Other improvements to RescueTime integration: check do-more by default (which fixed a related bug) &amp; no week of safety buffer by default",
"u": "https://twitter.com/beemuvi/status/701327912436310016",
"t": "2016-02-21 08:49:39 +0000",
}, /*************************************************************************/ {
"x": "One more RescueTime #bugfix: the new hotness broke data fetching for newly created goals for a few days (emailed everyone affected)",
"u": "https://twitter.com/beemuvi/status/701328140400898048",
"t": "2016-02-21 08:50:33 +0000",
}, /*************************************************************************/ {
"x": "How long should something be broke before fixing counts as UVI? Staggering amount broken+fixed in last 24hours: IFTTT triggers, SMS bot, ...",
"u": "https://twitter.com/beemuvi/status/702413465168777217",
"t": "2016-02-24 08:43:14 +0000",
}, /*************************************************************************/ {
"x": "... html emails, many autodata integrations, clobbered settings, UI icons, google oauth, passwd resets. Upgrades are hard. Cc <a href=\"https://twitter.com/beemstat\">@beemstat</a>",
"u": "https://twitter.com/beemuvi/status/702413500082200576",
"t": "2016-02-24 08:43:23 +0000",
}, /*************************************************************************/ {
"x": "Changing rate units works again. And fixed last bug w/ IFTTT triggers. We think that's everything from the hairy server upgrade!  #bugfix ×2",
"u": "https://twitter.com/beemuvi/status/702839636243009536",
"t": "2016-02-25 12:56:42 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Finally fixed pagination on the All Data page. Embarrassing how long that was all glitchy! #bugfix &amp; finally a net UVI from the big upgrade",
"u": "https://twitter.com/beemuvi/status/702840285701623809",
"t": "2016-02-25 12:59:16 +0000",
}, /*************************************************************************/ {
"x": "Another thing we broke with the upgrade: Android app stopped automatically staying in sync with the website. Now fixed. #bugfix",
"u": "https://twitter.com/beemuvi/status/703886506033680384",
"t": "2016-02-28 10:16:35 +0000",
}, /*************************************************************************/ {
"x": "Hopefully last UVI for #bugfix's from the upgrade: dial-it-in position, checkmarks for data entered today, saving changes in reminders table",
"u": ["https://twitter.com/beemuvi/status/704226556357378048",
      "https://github.com/beeminder/beeminder/commit/5861831958f0e88e880113f16938739af8ab68cd"],
"t": "2016-02-29 08:47:49 +0000",
"c": "Slightly different syntax for fields_for: fixes bug with fwomp page not saving individual goal changes - the goal name wasn't getting included in the fieldset. Fix dial-it-in position? Bugfix: checkmarks for 'data entered today' not showing up in the gallery (or persisting in the dashboard)",
}, /*************************************************************************/ ]

var batch2016mar = [
{
"x": "We rearranged goal settings a bit, moving things betw Basic &amp; Advanced (was a while ago; we're improving @bmndr faster thn we cn twt abt it)",
"u": ["https://twitter.com/beemuvi/status/704616863175606272",
      "http://forum.beeminder.com/t/on-privacy-vs-expectations/1900",
      "https://github.com/beeminder/beeminder/compare/2a154d523f2f...0efccf656a85"],
"t": "2016-03-01 10:38:45 +0000",
"c": "And private back to Basics by popular demand"
}, /*************************************************************************/ {
"x": "Mini-UVIs: Typo fix (\"was as least one error\"), stick to \"reminders\" vs \"alerts\", \"team\" copy for Slack, tooltip misplaced HT <a href=\"https://twitter.com/chriswaterguy\">@chriswaterguy</a>",
"u": ["https://twitter.com/beemuvi/status/704978561942331394",
      "http://forum.beeminder.com/t/confusing-pop-up-next-to-derail-time-setting/1905"],
"t": "2016-03-02 10:36:01 +0000",
"c": "HT @chriswaterguy #mini",
}, /*************************************************************************/ {
"f": true,
"x": "New dashboard! It's still in flux and not the default view yet but it's available at http://beeminder.com/dashboard (tweetstorm to follow!)",
"u": "https://twitter.com/beemuvi/status/705372862333394944",
"t": "2016-03-03 12:42:50 +0000",
}, /*************************************************************************/ {
"x": "Many improvements to the dashboard since it went live, like checkmarks for added data, which we'll pack into 8 UVI tweets tho really over 20",
"u": "https://twitter.com/beemuvi/status/705372940372566016",
"t": "2016-03-03 12:43:08 +0000",
}, /*************************************************************************/ {
"x": "Dashboard has itty-bitty thumbnail of graph, countdown format remembers your pref, integers like 1 not 1.0, safe days for do-less, …",
"u": "https://twitter.com/beemuvi/status/705373032559169536",
"t": "2016-03-03 12:43:30 +0000",
}, /*************************************************************************/ {
"x": "… widen the dashboard so it fits comments, myriad tweaks like right-aligning $-amounts &amp; fixing padding, tab index #bugfix (twice), …",
"u": "https://twitter.com/beemuvi/status/705373096182575104",
"t": "2016-03-03 12:43:45 +0000",
}, /*************************************************************************/ {
"x": "… remove comment after submission, bugfix w/ no goals in gallery, last datapoint timestamp on hover over checkmark or lack thereof, …",
"u": "https://twitter.com/beemuvi/status/705373156266024960",
"t": "2016-03-03 12:44:00 +0000",
}, /*************************************************************************/ {
"x": "… submit button as tab index, put link to dashboard above Quick Add, last comment as placeholder text, #bugfix w/ \"fetch data\" button, …",
"u": "https://twitter.com/beemuvi/status/705373249312464896",
"t": "2016-03-03 12:44:22 +0000",
}, /*************************************************************************/ {
"x": "… #bugfix w/ showing the previous datapoint comment as placeholder text: now shows previous comment unless it's the \"initial datapoint\" one.",
"u": "https://twitter.com/beemuvi/status/705373323731972096",
"t": "2016-03-03 12:44:40 +0000",
}, /*************************************************************************/ {
"x": "And that's just the UVIs since we linked to it in the UI, not everything <a href=\"http://forum.beeminder.com/t/new-feature-dashboard-view/1904\">discussed in the forum</a> like sorting, ellipses, etc",
"u": "https://twitter.com/beemuvi/status/705373448038580224",
"t": "2016-03-03 12:45:09 +0000",
}, /*************************************************************************/ {
"x": "Android app was taking too long to notice when graph was done refreshing. (Long story with long queues.) Now much snappier! HT <a href=\"https://twitter.com/faireness\">@faireness</a>",
"u": "https://twitter.com/beemuvi/status/708203601751973888",
"t": "2016-03-11 08:11:11 +0000",
"c": "Run beedroid push inline if api && has_android",
}, /*************************************************************************/ {
"x": "#bugfix w/ RescueTime for about 4 days around Feb 25: new goals were created fine but weren't importing your RescueTime history like usual",
"u": ["https://twitter.com/beemuvi/status/708537898895671297",
      "https://github.com/beeminder/beeminder/commit/c38c806ee62e073f226af7bcd3d311c5e7010329"],
"t": "2016-03-12 06:19:33 +0000",
"c": "inc syntax error in rescuetime importer",
}, /*************************************************************************/ {
"f": true,
"x": "The graph now shows <a href=\"http://forum.beeminder.com/t/restarting-odometer-to-non-zero-value/299/17\">odometer resets as black vertical dotted lines</a>",
"u": "https://twitter.com/beemuvi/status/708875369185587200",
"t": "2016-03-13 04:40:32 +0000",
}, /*************************************************************************/ {
"x": "SMS choice in reminder settings failing to stick; we broke http://beeminder.com/featured &amp; /home/featured legacy alias. #bugfix ×2 HT @chipmanaged",
"u": "https://twitter.com/beemuvi/status/709270903738118144",
"t": "2016-03-14 06:52:15 +0000",
"c": "wantssms bug &amp; /home/featured 500'd", 
}, /*************************************************************************/ {
"x": "We also added \"Featured\" to the navbar (links at the top of every Beeminder page) &amp; put \"feature me\" back in Basic Settings. HT @SayHiNeil",
"u": "https://twitter.com/beemuvi/status/709271244550463488",
"t": "2016-03-14 06:53:36 +0000",
}, /*************************************************************************/ {
"x": "Criteria for inclusion in http://beeminder.com/featured now: 28 most recently updated active undeadbeated goals (that opted in to being featured)",
"u": "https://twitter.com/beemuvi/status/710006615286611968",
"t": "2016-03-16 07:35:43 +0000",
}, /*************************************************************************/ {
"x": "Way faster load time for /featured. Ok that's kinda part of prev UVI so we'll add: fixed wrapping on beemail settings for non-premium people",
"u": "https://twitter.com/beemuvi/status/710006658076909568",
"t": "2016-03-16 07:35:53 +0000",
}, /*************************************************************************/ {
"x": "Yet another thing we broke in the big Mongoid upgrade: auto-detection of timezone for new users signing up. #bugfix",
"u": "https://twitter.com/beemuvi/status/710714796547571716",
"t": "2016-03-18 06:29:46 +0000",
}, /*************************************************************************/ {
"x": "Some people had so many odometer resets that all the dotted lines looked hideous. Now they're more subtle. #mini",
"u": "https://twitter.com/beemuvi/status/711075007460278277",
"t": "2016-03-19 06:21:07 +0000",
}, /*************************************************************************/ {
"x": "Bug with DB queries/indices/caching was making http://beeminder.com/dashboard unusably slow (yes, related to Mongoid upgrade again). #bugfix",
"u": "https://twitter.com/beemuvi/status/711468336085733376",
"t": "2016-03-20 08:24:04 +0000",
}, /*************************************************************************/ {
"x": "Stopped timing out when Garmin pushes a big chunk of data to us, which was causing big delays in Garmin graphs getting updated. #bugfix",
"u": "https://twitter.com/beemuvi/status/711792064774561792",
"t": "2016-03-21 05:50:27 +0000",
}, /*************************************************************************/ {
"x": "Rearranged navbar, changed \"sign in\" to \"log in\" everywhere (too easy to confuse \"sign in\"/\"sign up\"), updated/added hovertexts on links",
"u": "https://twitter.com/beemuvi/status/712172472041222144",
"t": "2016-03-22 07:02:03 +0000",
}, /*************************************************************************/ {
"n": 1857, 
"x": "Months ago we introduced a subtle bug in Take-A-Break that made it silently fail if you manually typed dates that weren't allowed. #bugfix",
"u": "https://twitter.com/beemuvi/status/712566098110111744",
"t": "2016-03-23 09:06:11 +0000",
}, /*************************************************************************/ {
"n": 1858, 
"x": "Beeminder used to hang for many seconds whenever we deployed code. Ponied up for Passenger Enterprise w/ rolling restarts so now it doesn't!",
"u": "https://twitter.com/beemuvi/status/712923216587722756",
"t": "2016-03-24 08:45:14 +0000",
}, /*************************************************************************/ {
"n": 1859, 
"f": true,
"x": "New goal creation wizard! So many improvements!",
"u": "https://twitter.com/beemuvi/status/713342557330100224",
"t": "2016-03-25 12:31:33 +0000",
}, /*************************************************************************/ {
"n": 1859, 
"s": true,
"x": "(1) Starting at the beginning: the initial page is more compact, eg, Zapier on own page",
"u": "https://twitter.com/beemuvi/status/713342557330100224",
"t": "2016-03-25 12:31:33 +0000",
}, /*************************************************************************/ {
"n": 1860, 
"s": true,
"x": "(2) Better UI for picking goalname aka goal slug (deemphasizing goal title etc now since that's in flux)",
"u": "https://twitter.com/beemuvi/status/713343256021479424",
"t": "2016-03-25 12:34:20 +0000",
}, /*************************************************************************/ {
"n": 1861, 
"s": true,
"x": "(3) The UI for picking the rate to commit to now lets you choose daily/weekly/monthly without going to settings after the fact",
"u": "https://twitter.com/beemuvi/status/713343488163598336",
"t": "2016-03-25 12:35:15 +0000",
}, /*************************************************************************/ {
"n": 1862, 
"s": true,
"x": "(4) You can now choose both the initial pledge and the pledge cap as part of goal creation",
"u": "https://twitter.com/beemuvi/status/713343698486951936",
"t": "2016-03-25 12:36:05 +0000",
}, /*************************************************************************/ {
"n": 1863, 
"s": true,
"f": true,
"x": "(5) Instead of just choosing whether to have a week of initial flat spot, you can choose any number of days of safety buffer",
"u": "https://twitter.com/beemuvi/status/713343791999025155",
"t": "2016-03-25 12:36:27 +0000",
}, /*************************************************************************/ {
"n": 1864, 
"s": true,
"x": "(6) After the goal's created you land on a goal configuration screen w/ all the settings we think you should review for new goals",
"u": "https://twitter.com/beemuvi/status/713343880427536385",
"t": "2016-03-25 12:36:49 +0000",
}, /*************************************************************************/ {
"n": 1865, 
"s": true,
"f": true,
"x": "(7) Most exciting part: No longer any limit on how many goals can start at the $0 pledge level. Concept of \"freebees\" is obsolete!",
"u": "https://twitter.com/beemuvi/status/713344015656099840",
"t": "2016-03-25 12:37:21 +0000",
}, /*************************************************************************/ {
"n": 1866, 
"s": true,
"f": true,
"x": "(8) Instead, we now impose limit on how many goals you can create before required to add credit card (commitment-wall, not paywall)",
"u": "https://twitter.com/beemuvi/status/713344176574717952",
"t": "2016-03-25 12:37:59 +0000",
}, /*************************************************************************/ {
"n": 1867, 
"s": true,
"x": "(9) Edited http://beeminder.com/money and the glossary and old blog post about freebees and various places in the UI referring to freebees",
"u": "https://twitter.com/beemuvi/status/713344299656609793",
"t": "2016-03-25 12:38:28 +0000",
}, /*************************************************************************/ ]

var batch2016apr = [
{
"n": 1868, 
"x": "Fixed the blue-on-black text in the \"credible threat\" banner, removed horrendous text shadow for popups #mini ×2",
"u": "https://twitter.com/beemuvi/status/716514941449048064",
"t": "2016-04-03 06:37:28 +0000",
}, /*************************************************************************/ {
"x": "#bugfix w/ auto-adjusted copy in goal deletion dialog depending on if you already added credit card (used to be freebee-related)",
"u": "https://twitter.com/beemuvi/status/716859200136093696",
"t": "2016-04-04 05:25:26 +0000",
}, /*************************************************************************/ {
"x": "A bunch of tweaks, copyedits, and more detail on <a href=\"http://beeminder.com/zapier\">beeminder.com/zapier</a> (our Zapier landing page, aka zapminder.com)",
"u": "https://twitter.com/beemuvi/status/716859937712787456",
"t": "2016-04-04 05:28:22 +0000",
}, /*************************************************************************/ {
"x": "Added \"private goal\" &amp; \"public data\" settings to goal creation wizard. Minimizing surprises about what's public by default!",
"u": "https://twitter.com/beemuvi/status/717661950864281600",
"t": "2016-04-06 10:35:17 +0000",
}, /*************************************************************************/ {
"x": "When you enable iOS notifications in the app we now (actually as of a few weeks ago) turn it on in the web interface too #savedyouaclick",
"u": "https://twitter.com/beemuvi/status/717996992060784640",
"t": "2016-04-07 08:46:37 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "We made a much prettier landing page for our Fitbit integration, more like other more recent autodata integrations: http://beeminder.com/fitbit",
"u": "https://twitter.com/beemuvi/status/718421178617040896",
"t": "2016-04-08 12:52:11 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Not just aesthetic improvements to our Fitbit landing page: the goal creation UI is better, pre-fills sensible choices for goalname &amp; rate",
"u": "https://twitter.com/beemuvi/status/718421340693340160",
"t": "2016-04-08 12:52:49 +0000",
}, /*************************************************************************/ {
"x": "Mongoid upgrade broke the \"re-scale your graph\" feature in kinda insidious way (now #bugfix'd &amp; manually cleaned up data of those affected)",
"u": "https://twitter.com/beemuvi/status/719031779202469888",
"t": "2016-04-10 05:18:29 +0000",
}, /*************************************************************************/ {
"x": "From Feb 23 - Mar 30 we silently failed to save all attempts to weaselproof oneself! Serious #bugfix (so sorry; please check the box again!)",
"u": "https://twitter.com/beemuvi/status/719039708047613952",
"t": "2016-04-10 05:50:00 +0000",
"c": "We *may* painstakingly reconstruct from server logs; so far we've decided not to",
}, /*************************************************************************/ {
"f": true,
"x": "We finally got the stupid \"/goals/\" out of everyone's URLs which was making one of the cofounders twitch for the last 5 years",
"u": "https://twitter.com/beemuvi/status/719752138683846657",
"t": "2016-04-12 05:00:56 +0000",
"c": "It was dreev",
}, /*************************************************************************/ {
"x": "We now show an actual helpful error if you (accidentally?) revoke Beeminder's access to your RescueTime data. #bugfix",
"u": "https://twitter.com/beemuvi/status/720162933158711296",
"t": "2016-04-13 08:13:17 +0000",
}, /*************************************************************************/ {
"x": "Pretty delete button w/ feedback/confirmation popup works in Settings same as graph page now. Bonus UVI(s): fixing autodata goal creation.",
"u": "https://twitter.com/beemuvi/status/720495576740196353",
"t": "2016-04-14 06:15:06 +0000",
"c": "New goalwizard caused most autodata goal creation to fail! Fixed all but skritter/misfit/habitica on mar28, got those last 3 on apr8 #bugfix",
}, /*************************************************************************/ {
"x": "Several dashboard tweaks/fixes like bigger thumbnail of graph (on left now) and added link to dashboard in top navbar",
"u": "https://twitter.com/beemuvi/status/720910981535150081",
"t": "2016-04-15 09:45:46 +0000",
}, /*************************************************************************/ {
"x": "Nicer interaction w/ the \"Beeminder can't be a credible threat till you add a credit card\" banner, &amp; only show it once email is confirmed",
"u": "https://twitter.com/beemuvi/status/721184907397976064",
"t": "2016-04-16 03:54:15 +0000",
}, /*************************************************************************/ {
"x": "We now include a list of Things You Should Know about beeminding on the empty dashboard/gallery page, similar to the commitwall webcopy",
"u": "https://twitter.com/beemuvi/status/721646223388639232",
"t": "2016-04-17 10:27:21 +0000",
}, /*************************************************************************/ {
"x": "Lots of changes to the popup that warns you that by adding a credit card you're on the hook for everything eg links to adjust existing goals",
"u": "https://twitter.com/beemuvi/status/721955743117631488",
"t": "2016-04-18 06:57:17 +0000",
}, /*************************************************************************/ {
"n": 1884, 
"x": "Updates to <a href=\"http://beeminder.com/faq\">beeminder.com/faq</a> (where to find example goals, point to Life category in forum, broken link to TagTime Minder)",
"u": "https://twitter.com/beemuvi/status/722305207820951553",
"t": "2016-04-19 06:05:55 +0000",
}, /*************************************************************************/ {
"n": 1885, 
"x": "Changed legit check email copy to point out you can drop the pledge, dial the road, or archive from the goal page (w/ another link to it)",
"u": "https://twitter.com/beemuvi/status/722717189036449792",
"t": "2016-04-20 09:22:59 +0000",
}, /*************************************************************************/ {
"n": 1886, 
"f": true,
"x": "Myriad tweaks/fixes/improvements to new goal creation",
"u": "https://twitter.com/beemuvi/status/723066230374952961",
"t": "2016-04-21 08:29:57 +0000",
}, /*************************************************************************/ {
"n": 1886, 
"s": true,
"x": "(1) Not allowing zero rates (or negative for do-less), css tweaks, better hovertexts, ",
"u": "https://twitter.com/beemuvi/status/723066230374952961",
"t": "2016-04-21 08:29:57 +0000",
}, /*************************************************************************/ {
"n": 1887, 
"s": true,
"x": "(2) disallow initial pledge &gt; pledge cap &amp; inconsistent private/public combinations, #bugfix w/ updating the button text based on pledge, ",
"u": "https://twitter.com/beemuvi/status/723066277506375680",
"t": "2016-04-21 08:30:09 +0000",
}, /*************************************************************************/ {
"n": 1888, 
"s": true,
"x": "(3) actually saving your choice of rate units &amp; some other fields (#bugfix), prompt for credit card when shortcircuiting from $0, ",
"u": "https://twitter.com/beemuvi/status/723066353783967745",
"t": "2016-04-21 08:30:27 +0000",
}, /*************************************************************************/ {
"n": 1889, 
"s": true,
"x": "(4) #bugfix w/ showing \"commit to\" vs \"limit\" label (HT Brent Yorgey), redirect to goal page after setup, nicer errors for bad goalnames, ",
"u": "https://twitter.com/beemuvi/status/723066448420044801",
"t": "2016-04-21 08:30:49 +0000",
}, /*************************************************************************/ {
"n": 1890, 
"s": true,
"x": "(5) replaced \"start now\" checkbox w/ just a field to fill in for how much initial safety buffer &amp; #bugfix w/ specifying it for weightloss, ",
"u": "https://twitter.com/beemuvi/status/723066505991057408",
"t": "2016-04-21 08:31:03 +0000",
}, /*************************************************************************/ {
"n": 1891, 
"s": true,
"x": "(6) added link to go back &amp; change goal type from 2nd screen of goal wizard, #bugfix w/ reusing goalnames of deleted goals",
"u": "https://twitter.com/beemuvi/status/723066567764807680",
"t": "2016-04-21 08:31:18 +0000",
}, /*************************************************************************/ {
"n": 1892, 
"s": true,
"x": "(7) That was at least 16 UVIs which we're counting as 6 (now 7). You're welcome. It's our penance for getting so far behind!",
"u": "https://twitter.com/beemuvi/status/723066664661581829",
"t": "2016-04-21 08:31:41 +0000",
}, /*************************************************************************/ {
"n": 1893, 
"x": "Slightly obscure #bugfix with Supporters: ugly error if the supporter tried to follow confirmation link for a goal that no longer existed",
"u": "https://twitter.com/beemuvi/status/723399141536108544",
"t": "2016-04-22 06:32:50 +0000",
"c": "Don't 500 in confmail if supporter isn't following anything",
}, /*************************************************************************/ {
"n": 1894, 
"x": "Slack's icon was missing if you added it on <a href=\"http://beeminder.com/services\">beeminder.com/services</a> #bugfix",
"u": "https://twitter.com/beemuvi/status/723399457224548353",
"t": "2016-04-22 06:34:05 +0000",
}, /*************************************************************************/ {
"x": "Fixed spurious warning on 1st press of \"fetch data\" in dashboard #bugfix <a href=\"http://forum.beeminder.com/t/dashboard/2075\">But another dashboard bug still at large</a>",
"u": "https://twitter.com/beemuvi/status/723744570438098944",
"t": "2016-04-23 05:25:26 +0000",
}, /*************************************************************************/ {
"x": "Added a delete button for apps you create at <a href=\"http://beeminder.com/apps\">beeminder.com/apps</a> (HT Uluc Saranli) But still haven't gotten to <a href=\"http://doc.beeminder.com/byebyebee\">doc.beeminder.com/byebyebee</a>",
"u": "https://twitter.com/beemuvi/status/723744750998687750",
"t": "2016-04-23 05:26:09 +0000",
}, /*************************************************************************/ {
"x": "Additional #bugfix's related to cleaning up the /goals/ in old URLs, like thumbnail of graphs pointing to wrong version of the image",
"u": "https://twitter.com/beemuvi/status/723745060626403328",
"t": "2016-04-23 05:27:23 +0000",
}, /*************************************************************************/ {
"x": "There was an obscure Gmail error (\"delgation denied\") that we silently failed on with GmailZero. Now we actually tell you about it. #bugfix",
"u": "https://twitter.com/beemuvi/status/724463232509841408",
"t": "2016-04-25 05:01:09 +0000",
}, /*************************************************************************/ {
"x": "Embarrassing: We learned that signing up with Twitter had been broken since like February. Finally fixed as of a week or so ago! #bugfix",
"u": "https://twitter.com/beemuvi/status/724464095135571968",
"t": "2016-04-25 05:04:34 +0000",
"c": "Omniauth twitter fix: save service info; had to do with twitter not passing us an email address",
}, /*************************************************************************/ {
"x": "Curly (non-ascii) quotes no longer break the SMS bot! #bugfix HT <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a>",
"u": "https://twitter.com/beemuvi/status/724464529132806145",
"t": "2016-04-25 05:06:18 +0000",
}, /*************************************************************************/ {
"x": "Initial safety buffer setting now more... true (and we say \"days until derailing\" not \"days of safety buffer\" to reduce the ambiguity)",
"u": "https://twitter.com/beemuvi/status/724524155966627840",
"t": "2016-04-25 09:03:14 +0000",
}, /*************************************************************************/ {
"n": 1902, 
"f": true,
"x": "New feature! If you weaselproof a goal you can no longer delete it in the first week! HT <a href=\"http://twitter.com/chipmanaged\">@chipmanaged</a> (again)",
"u": "https://twitter.com/beemuvi/status/725607127423709184",
"t": "2016-04-28 08:46:34 +0000",
}, /*************************************************************************/ {
"n": 1903, 
"x": "Fixed 2 grievous bugs w/ our IFTTT triggers",
"u": "https://twitter.com/beemuvi/status/725607220142960640",
"t": "2016-04-28 08:46:57 +0000",
}, /*************************************************************************/ {
"n": 1903, 
"s": true,
"x": "(1) \"datapoint added\" Triggers now always trigger exactly once per recipe, ... #bugfix",
"u": "https://twitter.com/beemuvi/status/725607220142960640",
"t": "2016-04-28 08:46:57 +0000",
}, /*************************************************************************/ {
"n": 1904, 
"s": true,
"x": "(2) Trigger for \"datapoint added\" could cause false derails if you were down to the wire. #bugfix",
"u": "https://twitter.com/beemuvi/status/725607342331428864",
"t": "2016-04-28 08:47:26 +0000",
}, /*************************************************************************/ {
"n": 1905, 
"x": "From apr 4 to apr 14 you couldn't authorize 3rd parties to access your data on Beeminder (broke IFTTT/Zapier/beemind.me/etc). Big #bugfix",
"u": "https://twitter.com/beemuvi/status/725607479350960128",
"t": "2016-04-28 08:47:58 +0000",
"c": "Bugfixes in oauth2-provider gem",
}, /*************************************************************************/ {
"n": 1906, 
"x": "Mini #bugfix ×3: UVIs since you last beeminded &amp; other things using lastactive date broke, datapoints temporarily sorting wrong in Beedroid",
"u": "https://twitter.com/beemuvi/status/725607617557491712",
"t": "2016-04-28 08:48:31 +0000",
}, /*************************************************************************/ {
"x": "If you retroratcheted the same day you derailed on a do-more goal we were frequently giving an ugly error. #bugfix",
"u": "https://twitter.com/beemuvi/status/725607694548103168",
"t": "2016-04-28 08:48:50 +0000",
}, /*************************************************************************/ {
"x": "Newly created Withings goals were failing to fetch data for about 10 days after our big Mongoid upgrade. #bugfix (&amp; fixed up those affected)",
"u": "https://twitter.com/beemuvi/status/725949470437863428",
"t": "2016-04-29 07:26:55 +0000",
}, /*************************************************************************/ {
"n": 1909, 
"x": "And an unrelated Withings #bugfix: deadline-related bug meant autofetch could occasionally miss datapoints if you had nightowl deadline",
"u": "https://twitter.com/beemuvi/status/725949526071205888",
"t": "2016-04-29 07:27:09 +0000",
}, /*************************************************************************/ {
"n": 1910, 
"x": "Small improvement to RescueTime goals (fixed coordinates of start of road) so you can't insta-derail yourself when you edit past data, etc",
"u": "https://twitter.com/beemuvi/status/725949636049952768",
"t": "2016-04-29 07:27:35 +0000",
}, /*************************************************************************/ {
"n": 1911, 
"x": "Beedroid (Beeminder Android app) Ver 2.6!",
"u": "https://twitter.com/beemuvi/status/725949711081861122",
"t": "2016-04-29 07:27:53 +0000",
}, /*************************************************************************/ {
"n": 1911, 
"f": true,
"s": true,
"x": "(1) Sign up in the app! Sort of create goals (via website but don't need to sign in separately)!",
"u": "https://twitter.com/beemuvi/status/725949711081861122",
"t": "2016-04-29 07:27:53 +0000",
}, /*************************************************************************/ {
"n": 1912, 
"s": true,
"f": true,
"x": "(2) Edit goal settings (same deal)! Swipe down to refresh! Actually get notifications for backburner goals. And a bunch of other #bugfix's:",
"u": "https://twitter.com/beemuvi/status/725949781806206977",
"t": "2016-04-29 07:28:10 +0000",
}, /*************************************************************************/ {
"n": 1913, 
"s": true,
"x": "(3) Fixing bad error messages on login/signup failure, proper handling of deleted goals or changed goalnames, handle +'s in email addresses",
"u": "https://twitter.com/beemuvi/status/725949885556510720",
"t": "2016-04-29 07:28:34 +0000",
}, /*************************************************************************/ {
"n": 1914, 
"x": "Minis: RescueTime icon didn't have \"RescueTime\" next to it, broke &amp; then fixed unsubscribe links (!), made unsub links not expire.",
"u": "https://twitter.com/beemuvi/status/725950005094191105",
"t": "2016-04-29 07:29:03 +0000",
}, /*************************************************************************/ {
"n": 1915, 
"x": "What we used to call \"slug\" is now universally called \"goalname\" (no space, like \"username\")",
"u": "https://twitter.com/beemuvi/status/725950054188503041",
"t": "2016-04-29 07:29:15 +0000",
}, /*************************************************************************/ {
"x": "If you clicked an unsubscribe link when logged in as another user then we gave an opaque error instead of telling you what was what. #bugfix",
"u": "https://twitter.com/beemuvi/status/726176776666247168",
"t": "2016-04-29 22:30:09 +0000",
}, /*************************************************************************/ ]

var batch2016may = [
{
"n": 1917,
"f": true,
"x": "(+) iOS app version 4.3!",
"u": "https://twitter.com/beemuvi/status/733084981812158464",
"t": "2016-05-19 00:00:54 +0000",
"c": "Tweeted this a couple weeks late",
}, /*************************************************************************/ {
"n": 1917,
"s": true,
"x": "(1) No longer crashes when you log in w/ Facebook or hangs when you log in with Google #bugfix",
"u": "https://twitter.com/beemuvi/status/733084981812158464",
"t": "2016-05-19 00:00:54 +0000",
"c": "Tweeted this a couple weeks late",
}, /*************************************************************************/ {
"n": 1918,
"s": true,
"x": "(2) And we no longer crash if adding a datapoint times out or otherwise returns an error #bugfix",
"u": "https://twitter.com/beemuvi/status/733085064947499008",
"t": "2016-05-19 00:01:14 +0000",
}, /*************************************************************************/ {
"n": 1919,
"s": true,
"x": "(3) Finally, you can now pull to refresh your goal gallery even if you have a small number of goals #mini",
"u": "https://twitter.com/beemuvi/status/733085133817978885",
"t": "2016-05-19 00:01:30 +0000",
}, /*************************************************************************/ {
"n": 1920, 
"x": "Mini UVIs: Added Duolingo Russian phrase, better URLs for some settings like /reminders/username, alphabetized autodata icons in goal wizard",
"u": "https://twitter.com/beemuvi/status/733953053569650688",
"t": "2016-05-21 09:30:18 +0000",
}, /*************************************************************************/ {
"x": "Moved deadline setting (needs to always be near zeno start time), fixed Fitbit push notifications (should be faster again) #mini ×2",
"u": "https://twitter.com/beemuvi/status/734274358227566593",
"t": "2016-05-22 06:47:03 +0000",
}, /*************************************************************************/ {
"x": "CSV/TSV export now has iso8601 dates (both humans &amp; machines rejoice!) and additional columns: daystamp, createdat, deadline",
"u": "https://twitter.com/beemuvi/status/735022724901281792",
"t": "2016-05-24 08:20:48 +0000",
}, /*************************************************************************/ {
"x": "And added a header row to the CSV/TSV to name the columns, and now we name the file with the user/goalname instead of just \"datapoints.csv\"",
"u": "https://twitter.com/beemuvi/status/735022938462687232",
"t": "2016-05-24 08:21:39 +0000",
}, /*************************************************************************/ {
"x": "When you add a datapoint with a comment to the dashboard, we immediately replace the placeholder text in the comment box. #mini #oldie",
"u": "https://twitter.com/beemuvi/status/735330340861054976",
"t": "2016-05-25 04:43:09 +0000",
}, /*************************************************************************/ {
"x": "In goal creation, require &amp; actually use given current value for odometer goals (we were initially ignoring it altogether! #bugfix) #mini",
"u": "https://twitter.com/beemuvi/status/735712629767864320",
"t": "2016-05-26 06:02:14 +0000",
}, /*************************************************************************/ {
"x": "Fixed an ugly error on the dashboard that you'd see if one of your goals had no datapoints #mini #bugfix",
"u": "https://twitter.com/beemuvi/status/736237547894931461",
"t": "2016-05-27 16:48:04 +0000",
}, /*************************************************************************/ ]

var batch2016jun = [
{
"x": "Better URLs for goal settings tabs: /settings, /reminders, /supporters, /terrifying, /datapoints",
"u": "https://twitter.com/beemuvi/status/737897923376218112",
"t": "2016-06-01 06:45:49 +0000",
}, /*************************************************************************/ {
"x": "Added a notice to http://beeminder.com/sleep about how you need the SleepCloud Backup add-on for Sleep As Android for like $1/year",
"u": "https://twitter.com/beemuvi/status/738276717383417856",
"t": "2016-06-02 07:51:00 +0000",
}, /*************************************************************************/ {
"x": "If your data's public then the public should see All Data link but not settings etc tabs (even though they, correctly, didn't work) #bugfix",
"u": "https://twitter.com/beemuvi/status/738644104117030912",
"t": "2016-06-03 08:10:52 +0000",
}, /*************************************************************************/ {
"x": "Standardized across all integrations the error message for when we can't fetch autodata, with link to go reauthorize us. #mini",
"u": "https://twitter.com/beemuvi/status/738988653934829569",
"t": "2016-06-04 06:59:59 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "We made our Complice integration official, with fancy landing page and everything! http://beeminder.com/complice",
"u": "https://twitter.com/beemuvi/status/738988975247884288",
"t": "2016-06-04 07:01:16 +0000",
}, /*************************************************************************/ {
"x": "Goals would go missing from the dashboard as soon as they hit the deadline and until the derailment was processed. #bugfix",
"u": "https://twitter.com/beemuvi/status/738989442627559424",
"t": "2016-06-04 07:03:07 +0000",
}, /*************************************************************************/ {
"x": "Beedroid #bugfix: sign-up in app acted like it failed despite succeeding (&amp; then you had no way to log in to it, it was a mess, albeit rare)",
"u": "https://twitter.com/beemuvi/status/740011673776312320",
"t": "2016-06-07 02:45:06 +0000",
}, /*************************************************************************/ {
"x": "We were giving a spurious error when you first signed up or logged in (related to authenticity tokens). #bugfix #oldie",
"u": "https://twitter.com/beemuvi/status/740440414524702720",
"t": "2016-06-08 07:08:46 +0000",
"c": "devise bug, don't try to verify authenticity tokens in sign in and sign up, because there is no session expected to verify",
}, /*************************************************************************/ {
"x": "RescueTime goal creation is now consistent with normal goal creation in making you enter a credit card after N goals created. #bugfix",
"u": "https://twitter.com/beemuvi/status/740784512859275264",
"t": "2016-06-09 05:56:05 +0000",
}, /*************************************************************************/ {
"x": "RunKeeper #bugfix: we were rejecting activities w/out a distance even for time/calories/etc where it doesn't make sense to enforce that.",
"u": "https://twitter.com/beemuvi/status/740785073474146304",
"t": "2016-06-09 05:58:19 +0000",
}, /*************************************************************************/ {
"x": "Barely user-visible but giving bad query params for pagination on All Data could cause 500 errors and now just nicely 404s. #mini #bugfix",
"u": "https://twitter.com/beemuvi/status/741504735111352320",
"t": "2016-06-11 05:37:59 +0000",
}, /*************************************************************************/ {
"x": "Fixed (at least improved a lot?) the problem that was making people have to keep logging in again #bugfix (let us know if you see it still!)",
"u": "https://twitter.com/beemuvi/status/741871656017088512",
"t": "2016-06-12 05:56:00 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "New premium feature: Weekends Off! http://blog.beeminder.com/weekends",
"u": "https://twitter.com/beemuvi/status/742268187631181825",
"t": "2016-06-13 08:11:41 +0000",
}, /*************************************************************************/ {
"x": "Weekends-off is now maximally lenient: you can decide at the last second to take the weekend off. (We'll monitor for abuse of this!)",
"u": "https://twitter.com/beemuvi/status/742268265066438656",
"t": "2016-06-13 08:11:59 +0000",
}, /*************************************************************************/ {
"x": "Beebot (our Slack bot) no longer crashes when you add an emoji reaction to a message. #bugfix",
"u": "https://twitter.com/beemuvi/status/743000747940384768",
"t": "2016-06-15 08:42:37 +0000",
}, /*************************************************************************/ {
"x": "More on our Slack bot: Can now send messages to beebot (eg \"list\" or a goalname) and it lists your most urgent goals or adds datapoints",
"u": "https://twitter.com/beemuvi/status/743355206348378112",
"t": "2016-06-16 08:11:06 +0000",
}, /*************************************************************************/ {
"x": "Fancy Slack bot landing page with documentation now at https://www.beeminder.com/addtoslack aka slackminder.com",
"u": "https://twitter.com/beemuvi/status/743704033517461504",
"t": "2016-06-17 07:17:13 +0000",
}, /*************************************************************************/ {
"x": "Fixed things like our Slack bot not being able to auth to multiple teams. <a href=\"http://forum.beeminder.com/t/beebot-beeminder-slack-bot-update/2152\">forum post</a> #bugfix",
"u": "https://twitter.com/beemuvi/status/744067705637081089",
"t": "2016-06-18 07:22:19 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Slackminder now includes a /charge command. You can say \"charge me $X in N minutes unless I ___\". See also http://blog.beeminder.com/mustdo",
"u": "https://twitter.com/beemuvi/status/744403118431961095",
"t": "2016-06-19 05:35:08 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "<a href=\"http://slackminder.com\">Slackminder</a> has goodies built in like dice rolls and sealed bid auctions cuz <a href=\"https://twitter.com/dreev\">@dreev</a> &amp; <a href=\"https://twitter.com/thatgirl\">@thatgirl</a> &amp; <a href=\"https://twitter.com/andrewpbrett\">@andrewpbrett</a> are huge nerds",
"u": "https://twitter.com/beemuvi/status/744756211271139329",
"t": "2016-06-20 04:58:12 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Slackminder has a built-in pomodoro timer that can automatically send data to Beeminder via a /tock command! See http://blog.beeminder.com/tocks",
"u": "https://twitter.com/beemuvi/status/745153961196322817",
"t": "2016-06-21 07:18:43 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Slackminder open source! With that we'll stop counting UVIs to Slack bot even tho there're lots more we could list! http://github.com/beeminder/beebot",
"u": "https://twitter.com/beemuvi/status/745527323340898304",
"t": "2016-06-22 08:02:19 +0000",
}, /*************************************************************************/ {
"x": "Minis: placeholder text for slack channel zenos, #bugfix w/ RescueTime redirect after goal creation, always show hovertext for services",
"u": "https://twitter.com/beemuvi/status/745899601102839808",
"t": "2016-06-23 08:41:37 +0000",
}, /*************************************************************************/ {
"x": "We now always consistently use the units chosen in RunKeeper goal creation no matter what units you say in RunKeeper #bugfix HT <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a>",
"u": "https://twitter.com/beemuvi/status/746229653354876929",
"t": "2016-06-24 06:33:08 +0000",
}, /*************************************************************************/ {
"x": "Redirected an ancient Withings FAQ page to our Withings integration landing page. http://beeminder.com/withings #mini",
"u": "https://twitter.com/beemuvi/status/746587453834698753",
"t": "2016-06-25 06:14:54 +0000",
}, /*************************************************************************/ {
"x": "Importing of existing data for new RescueTime/Draft/Withings/GmailZero/GitHub/Jawbone/Epson/Misfit goals was broken for 2 months (!) #bugfix",
"u": "https://twitter.com/beemuvi/status/746945863478476801",
"t": "2016-06-26 05:59:06 +0000",
}, /*************************************************************************/ {
"x": "Tweaked weaselproof-me wording, and bugfixes w/ weekends-off (like so it actually works; fixed manually for everyone affected)",
"u": "https://twitter.com/beemuvi/status/747300666339581956",
"t": "2016-06-27 05:28:57 +0000",
}, /*************************************************************************/ {
"x": "More Rails modernization: asset pipeline theoretically speeds things up. Not sure it has but also involved breaking &amp; fixing many URLs.",
"u": "https://twitter.com/beemuvi/status/747673796023320576",
"t": "2016-06-28 06:11:38 +0000",
}, /*************************************************************************/ {
"x": "Made Misfit integration use standard statute of limitations on syncing data (1 week). Fixed bug for people who didn't sync for &gt;30 days.",
"u": "https://twitter.com/beemuvi/status/748088909431775232",
"t": "2016-06-29 09:41:09 +0000",
}, /*************************************************************************/ {
"x": "Another rare RescueTime bug left over from the switch to auth'ing w/out pasting API key, led to failing to fetch data on new goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/748447992622026752",
"t": "2016-06-30 09:28:01 +0000",
}, /*************************************************************************/ ]

var batch2016jul = [
{
"x": "The countdown timers for archiving &amp; pledge stepdowns would sometimes fail to start if the page wasn't fully loaded. #bugfix",
"u": "https://twitter.com/beemuvi/status/748802557040955392",
"t": "2016-07-01 08:56:56 +0000",
}, /*************************************************************************/ {
"x": "One of the many bugs fixed as part of asset pipeline but we'll count it as one more UVI since it has a <a href=\"http://forum.beeminder.com/t/countdown-in-embedded-goals-is-broken/2261\">forum thread</a>",
"u": "https://twitter.com/beemuvi/status/749134257637855232",
"t": "2016-07-02 06:54:59 +0000",
}, /*************************************************************************/ {
"x": "Improved/fixed algorithm that decides when the bee buzzes while importing, preparing your graph (was super busted for new goals for awhile)",
"u": "https://twitter.com/beemuvi/status/749487179789791232",
"t": "2016-07-03 06:17:23 +0000",
"c": "Bee did something to improve things, but also broke things so for a long time newly created goals would end up perma-opaque",
}, /*************************************************************************/ {
"x": "Made legacy redirects for images so we don't break hotlinks out there, unbroke the images of our pretty faces in <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a>",
"u": "https://twitter.com/beemuvi/status/749877893451309056",
"t": "2016-07-04 08:09:56 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Road Editor! Enabled for Plan Bee and above as of June 17. <a href=\"http://blog.beeminder.com/road/\">blog.beeminder.com/road</a>",
"u": "https://twitter.com/beemuvi/status/750231892742463488",
"d": "2016-06-17",
"t": "2016-07-05 07:36:36 +0000",
}, /*************************************************************************/ {
"x": "We no longer ignore the last row (the one equivalent to the traditional road dial) in the road editor. #bugfix",
"u": "https://twitter.com/beemuvi/status/750618778317230080",
"t": "2016-07-06 09:13:57 +0000",
}, /*************************************************************************/ {
"x": "Related/similar #bugfix: The last row of the road editor now lets you specify any 2-of-3 of goal-value-rate (other rows ought to but don't)",
"u": "https://twitter.com/beemuvi/status/750618927110168576",
"t": "2016-07-06 09:14:32 +0000",
}, /*************************************************************************/ {
"x": "If you break your road with the road editor we add a button above it to restore it to its last unbroken state.",
"u": "https://twitter.com/beemuvi/status/751033495930089472",
"t": "2016-07-07 12:41:53 +0000",
}, /*************************************************************************/ {
"x": "Last UVI related to asset pipeline: tooltips were broken for a while #bugfix -- And improved the error messages in the road editor #mini",
"u": "https://twitter.com/beemuvi/status/751033630940499972",
"t": "2016-07-07 12:42:25 +0000",
}, /*************************************************************************/ {
"x": "Race condition (either related to multiple Fitbit goals or push notifications + polling) made us lose your Fitbit auth sometimes. #bugfix",
"u": "https://twitter.com/beemuvi/status/751554960169414656",
"t": "2016-07-08 23:14:00 +0000",
}, /*************************************************************************/ {
"x": "It's embarrassing how many things like this we've missed: we caught another previously uncaught RescueTime error (401) &amp; alert the user now",
"u": "https://twitter.com/beemuvi/status/751555035851464706",
"t": "2016-07-08 23:14:18 +0000",
}, /*************************************************************************/ {
"x": "We now include the \"Things You Must Know\" copy from <a href=\"http://blog.beeminder.com/creditcard\">blog.beeminder.com/creditcard</a> in the email we send out for each new goal you create",
"u": ["https://twitter.com/beemuvi/status/752761131702247424",
      "https://github.com/beeminder/beeminder/commit/f288fe006829776f1f4e57583afbf08487cf6bb1"],
"t": "2016-07-12 07:06:54 +0000",
}, /*************************************************************************/ {
"x": "In the \"Charge me\" action in our IFTTT channel, we failed to strip whitespace from the charge amount &amp; would wrongly complain \"NaN\". #bugfix",
"u": "https://twitter.com/beemuvi/status/753184014966493184",
"t": "2016-07-13 11:07:17 +0000",
}, /*************************************************************************/ {
"x": "Another #bugfix: when emailing you about errors like that we now show you the actual values from IFTTT, not failed attempts to parse them",
"u": "https://twitter.com/beemuvi/status/753184118016311296",
"t": "2016-07-13 11:07:41 +0000",
}, /*************************************************************************/ {
"x": "If you downgrade from premium and no longer have the SMS perk we fall back to email (and we fixed related copy in the UI)",
"u": "https://twitter.com/beemuvi/status/753861406278062081",
"t": "2016-07-15 07:58:59 +0000",
}, /*************************************************************************/ {
"x": "Got rid of an old banner wrongly telling weaselproofed people who were archiving a goal in the first week that they could instead delete it",
"u": "https://twitter.com/beemuvi/status/754056147280113664",
"t": "2016-07-15 20:52:49 +0000",
}, /*************************************************************************/ {
"x": "Improved our Fitbit integration landing page: cute contract image, and got \"fitbitminder.com\" domain",
"u": "https://twitter.com/beemuvi/status/754062121189666821",
"t": "2016-07-15 21:16:34 +0000",
}, /*************************************************************************/ {
"x": "Error-checking fail w/ goal creation wizard: trying to use a previously used goalname led to mysterious failures. #bugfix",
"u": "https://twitter.com/beemuvi/status/754893066469711872",
"t": "2016-07-18 04:18:26 +0000",
}, /*************************************************************************/ {
"x": "We now honor the units specified in Fitbit instead of always creating new weight loss goals in kilograms. #bugfix HT <a href=\"http://twitter.com/dyang\">@dyang</a>",
"u": "https://twitter.com/beemuvi/status/755271085944209408",
"t": "2016-07-19 05:20:33 +0000",
}, /*************************************************************************/ {
"x": "Due to recent refactoring we started ignoring the 'start with a week of safety buffer' option for RescueTime goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/755271293004451840",
"t": "2016-07-19 05:21:23 +0000",
}, /*************************************************************************/ {
"x": "Copy tweak in ThingsYouMustKnow (change/charge/adjustment was easy to misread). Added weekends-off, road editor to beeminder.com/premium #mini ×2",
"u": "https://twitter.com/beemuvi/status/756033810924306433",
"t": "2016-07-21 07:51:21 +0000",
}, /*************************************************************************/ {
"x": "A thing we broke with the last Rails upgrade: we weren't automatically getting the user's timezone on signup. #bugfix",
"u": "https://twitter.com/beemuvi/status/756371213081989120",
"t": "2016-07-22 06:12:04 +0000",
}, /*************************************************************************/ {
"x": "The weekends-off feature was giving you fridays off as well for do-less goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/756729816263499776",
"t": "2016-07-23 05:57:02 +0000",
}, /*************************************************************************/ {
"x": "When improving our URL scheme in May we broke unsubscribe links for mass mails, noticed when sending next monthly beemail last week. #bugfix",
"u": "https://twitter.com/beemuvi/status/757122871885832192",
"t": "2016-07-24 07:58:53 +0000",
}, /*************************************************************************/ {
"x": "Road editor up-sprucing: added link to gory details, nixed redundant \"add row\" button, aligned the various inputs better.",
"u": "https://twitter.com/beemuvi/status/757453238186627072",
"t": "2016-07-25 05:51:39 +0000",
}, /*************************************************************************/ {
"x": "If whittling down Habitica To-Dos we now use your low-water mark of the day ⇒ no surprise derails from adding new To-dos before deadline",
"u": "https://twitter.com/beemuvi/status/757823629111406592",
"t": "2016-07-26 06:23:27 +0000",
}, /*************************************************************************/ {
"x": "The road editor was rejecting roads if the final row had just goal value (or goal total) and rate specified (ie, no date). #bugfix",
"u": "https://twitter.com/beemuvi/status/758201487407271936",
"t": "2016-07-27 07:24:55 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "<a href=\"http://slackminder.com\">Slackminder</a> has a built-in karmabot (do \"/karma help\")! And additional mini Habitica fix: no more delays in 1st fetch of day.",
"u": "https://twitter.com/beemuvi/status/758521978055602176",
"t": "2016-07-28 04:38:26 +0000",
}, /*************************************************************************/ {
"x": "New road editor bug from when we spruced it up: it was duplicating the initial road row if you submitted multiple times in a row. #bugfix",
"u": "https://twitter.com/beemuvi/status/758935320658182144",
"t": "2016-07-29 08:00:55 +0000",
}, /*************************************************************************/ {
"x": "TagTime ping notifier in Slack bot (\"/tagtime on\") &amp; turns out when we thought we fixed the deauth callback thing (UVI#1783) we broke it instead",
"u": "https://twitter.com/beemuvi/status/759282238680883205",
"t": "2016-07-30 06:59:27 +0000",
}, /*************************************************************************/ {
"x": "If the author of an app you authorized to access your beeswax deletes it we now remove it from <a href=\"https://www.beeminder.com/settings/apps\">beeminder.com/settings/apps</a> (&amp; no erroring out)",
"u": "https://twitter.com/beemuvi/status/759646136906883072",
"t": "2016-07-31 07:05:27 +0000",
}, /*************************************************************************/ ]

var batch2016aug = [
{
"x": "SMS bot reminders more concise after initial reminder on an eep day. Eg, \"Eep! +3 in &lt;30m for pushups ($5)\"",
"u": "https://twitter.com/beemuvi/status/760015554497290244",
"t": "2016-08-01 07:33:23 +0000",
}, /*************************************************************************/ {
"x": 1990, 
"x": "The SMS bot now has a better welcome message, has START as an alias for ACTIVATE, and responds to HELP with helpfulness.",
"u": "https://twitter.com/beemuvi/status/760393285445627904",
"t": "2016-08-02 08:34:21 +0000",
}, /*************************************************************************/ {
"x": "More tweaks to the SMS bot: Say \"added\" datapoint, not \"updated\". And we now give the time remaining in minutes at the end, not just \"&lt;1h\".",
"u": "https://twitter.com/beemuvi/status/760740480384634880",
"t": "2016-08-03 07:33:59 +0000",
}, /*************************************************************************/ {
"x": "Previous Habitica #bugfix in fact broke it worse. :facepalm: Fixed the fix now. Bonus UVI: Fixed the redundant headers in http://forum.beeminder.com",
"u": "https://twitter.com/beemuvi/status/761175823860719616",
"t": "2016-08-04 12:23:53 +0000",
}, /*************************************************************************/ {
"x": "#bugfix in API: give a nice error instead of a 500 if you submit a malformed daystamp for a datapoint. HT Malcolm Ocean of <a href=\"http://complice.co\">Complice</a>.",
"u": "https://twitter.com/beemuvi/status/761463694123372544",
"t": "2016-08-05 07:27:46 +0000",
}, /*************************************************************************/ {
"x": "We'd missed a bunch of cases of \"sign in\" &rarr; \"log in\". Also fixed a typo in the beemail descriptions. #mini",
"u": "https://twitter.com/beemuvi/status/761853169940914177",
"t": "2016-08-06 09:15:24 +0000",
}, /*************************************************************************/ {
"x": "Added tooltip for Complice on the front page, moved the copy around in the \"getting reminder about your...\" email &amp; added link to goal",
"u": "https://twitter.com/beemuvi/status/762147325804371968",
"t": "2016-08-07 04:44:17 +0000",
}, /*************************************************************************/ {
"x": "Links to goals in reminder emails now use \"beeminder.com/user/goal\" as the anchor text instead of goal title (which is now the title text)",
"u": "https://twitter.com/beemuvi/status/762559724394913792",
"t": "2016-08-08 08:03:00 +0000",
"c": "Since we now deemphasize goal descriptions (titles) in favor of one-word goalnames, we now link to them that way in reminder emails",
}, /*************************************************************************/ {
"f": true,
"x": "Premium plans revamp! Hopefully you don't view this as a negative UVI but it's part of ensuring Beeminder thrives for many more years, so...",
"u": "https://twitter.com/beemuvi/status/762936334801514496",
"t": "2016-08-09 08:59:31 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Beeminder now has a charity option! It's a premium perk to opt in to donating half your pledges to <a href=\"https://twitter.com/watsi\">@watsi</a>, <a href=\"https://twitter.com/EFF\">@EFF</a>, or <a href=\"https://twitter.com/Give_Directly\">@Give_Directly</a>",
"u": "https://twitter.com/beemuvi/status/762936415097229312",
"t": "2016-08-09 08:59:50 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"http://beeminder.com/premium\">beeminder.com/premium</a> is now viewable even if you're not logged in (the \"Add Plan\" buttons become \"Sign Up\")",
"u": "https://twitter.com/beemuvi/status/762996355669172226",
"t": "2016-08-09 12:58:01 +0000",
}, /*************************************************************************/ {
"x": "Similarly, if you're logged in but haven't added a credit card then the buttons say \"Add Payment Method\"",
"u": "https://twitter.com/beemuvi/status/762996407544389632",
"t": "2016-08-09 12:58:14 +0000",
}, /*************************************************************************/ {
"x": "New premium FAQ at the bottom of <a href=\"http://beeminder.com/premium\">beeminder.com/premium</a> and moved the Exquisitely Fair Slider below the plan blurbs",
"u": "https://twitter.com/beemuvi/status/762996493967994880",
"t": "2016-08-09 12:58:34 +0000",
}, /*************************************************************************/ {
"x": "We now treat Core Beeminder (ie, the $0/month plan) as one of the plans. And btw, we're retiring the Beekeeper lifecoaching program. RIP.",
"u": "https://twitter.com/beemuvi/status/762996583432531969",
"t": "2016-08-09 12:58:55 +0000",
}, /*************************************************************************/ {
"x": "Now clearer how to switch between plans: plan you're on highlighted, says \"currently subscribed\", can click \"downgrade\" to downgrade, etc.",
"u": "https://twitter.com/beemuvi/status/762996710020833281",
"t": "2016-08-09 12:59:26 +0000",
}, /*************************************************************************/ {
"x": "Lifetime subscriptions are clearer. Rather than just disabling the plan button it says \"lifetime subscribed\".",
"u": "https://twitter.com/beemuvi/status/762996781709799425",
"t": "2016-08-09 12:59:43 +0000",
}, /*************************************************************************/ {
"x": "We tested when to make you add a credit card (commit-wall, not paywall), found earlier is better so now we do that after 1 or 2 goals",
"u": "https://twitter.com/beemuvi/status/762996857484169216",
"t": "2016-08-09 13:00:01 +0000",
}, /*************************************************************************/ {
"x": "Made a button on the new paywall to request additional free goals if you need more time to experiment or already pay lots in pledges",
"u": "https://twitter.com/beemuvi/status/762996924035108864",
"t": "2016-08-09 13:00:17 +0000",
}, /*************************************************************************/ {
"x": "Added a link to http://beeminder.com/premium in the top navigation bar, and edits in the FAQ etc to get in line with premium changes",
"u": "https://twitter.com/beemuvi/status/762997033825280001",
"t": "2016-08-09 13:00:43 +0000",
}, /*************************************************************************/ {
"x": "Made the \"discount please\" button on beeminder.com/premium do something more sensible if you're not logged in (like telling you to do so)",
"u": "https://twitter.com/beemuvi/status/763194453100113921",
"t": "2016-08-10 02:05:11 +0000",
}, /*************************************************************************/ {
"x": "Changed the features listed for Core Beeminder in beeminder.com/premium based on <a href=\"http://forum.beeminder.com/t/mega-feature-list/2378\">a forum poll</a>",
"u": "https://twitter.com/beemuvi/status/763195005838123008",
"t": "2016-08-10 02:07:23 +0000",
}, /*************************************************************************/ {
"x": "Speaking of dangling carrots, the charities weren't clickable for Beemium people when we first deployed this. HT <a href=\"https://plus.google.com/+KennHamm\">Kenn Hamm</a>",
"u": "https://twitter.com/beemuvi/status/763260696700198912",
"t": "2016-08-10 06:28:25 +0000",
}, /*************************************************************************/ {
"x": "Plugged leak in the commit-wall: creating various autodata goals circumvented the prompt to add your credit card before creating more goals",
"u": "https://twitter.com/beemuvi/status/763949494270504961",
"t": "2016-08-12 04:05:27 +0000",
}, /*************************************************************************/ {
"x": "Replaced another instance of our janky credit card form with Stripe's elegant one, on the /premium page when you click Add Payment",
"u": "https://twitter.com/beemuvi/status/763949611048239104",
"t": "2016-08-12 04:05:55 +0000",
}, /*************************************************************************/ {
"x": "Forgot html_safe in zeno emails so were sending literal \"&lt;a href='....\" etc. #bugfix HT Markos Giannopoulos",
"u": "https://twitter.com/beemuvi/status/763949678626942977",
"t": "2016-08-12 04:06:11 +0000",
}, /*************************************************************************/ {
"x": "Added link to datapoints on archived goals. No need to hide data, though still can't edit/delete it. <a href=\"http://forum.beeminder.com/t/negative-values-in-hours-goals/1561/3\">HT Kenn Hamm again</a>",
"u": "https://twitter.com/beemuvi/status/763950101463076865",
"t": "2016-08-12 04:07:52 +0000",
}, /*************************************************************************/ {
"x": "Minis on beeminder.com/premium: Link to new blog post, clicking Sign Up button pops up a popup to sign up (but redirects you away after)",
"u": "https://twitter.com/beemuvi/status/769330598787768320",
"t": "2016-08-27 00:28:02 +0000",
}, /*************************************************************************/ {
"x": "Another tiny one: Lifetime subscribers to legacy plans now see the plan description even if they've upgraded to another plan",
"u": "https://twitter.com/beemuvi/status/769330965340487680",
"t": "2016-08-27 00:29:30 +0000",
}, /*************************************************************************/ {
"x": "Closed couple loopholes that let you apply discount coupons to legacy plans; also updates &amp; additions (\"Loophole idea!\") to the premium FAQ",
"u": "https://twitter.com/beemuvi/status/770113213212090369",
"t": "2016-08-29 04:17:52 +0000",
}, /*************************************************************************/ {
"x": "In the premium revamp, introduced a bug that prevented creation of weight gain goals. This is America so it took a while to notice. #bugfix",
"u": "https://twitter.com/beemuvi/status/770527288135999488",
"t": "2016-08-30 07:43:15 +0000",
"c": "Was rearranging code, temporarily lost the goal type params (yaw, dir, etc) for them",
}, /*************************************************************************/ {
"x": "The first time you push the \"more free goals\" button we just give you one automatically. Not sure how we feel about that, but, experiments!",
"u": "https://twitter.com/beemuvi/status/770842372926087168",
"t": "2016-08-31 04:35:17 +0000",
}, /*************************************************************************/ {
"x": "And added a comment box with the \"more free goals\" &amp; \"discount please\" buttons, for stating your case (and giving us much-needed feedback!)",
"u": "https://twitter.com/beemuvi/status/770842479268499456",
"t": "2016-08-31 04:35:43 +0000",
}, /*************************************************************************/ ]

var batch2016sep = [
{
"x": "If you came to /premium w/ a coupon code we'd forget it after page reload after clicking a button to add a plan. Coupon worked but.. #bugfix",
"u": "https://twitter.com/beemuvi/status/771607780054532096",
"t": "2016-09-02 07:16:45 +0000",
}, /*************************************************************************/ {
"x": "Another bug in /premium with how pricing was displayed (when on a legacy plan, it looked like Infinibee cost more than Bee Plus) #bugfix",
"u": "https://twitter.com/beemuvi/status/771925882810302464",
"t": "2016-09-03 04:20:46 +0000",
}, /*************************************************************************/ {
"x": "Y'know how weasel-proofed goals aren't deletable in the first week like normal? Buggily, the archive button wasn't working either. #bugfix",
"u": "https://twitter.com/beemuvi/status/772311543614550016",
"t": "2016-09-04 05:53:15 +0000",
}, /*************************************************************************/ {
"x": "In some thankfully rare cases, if you chose Slack DM for zeno alerts, they'd not show up (forgot to make sure DM channel was open) #bugfix",
"u": "https://twitter.com/beemuvi/status/772658195756032000",
"t": "2016-09-05 04:50:43 +0000",
}, /*************************************************************************/ {
"x": "#bugfix in Habitica more-Todos goal creation: would start road at 0 but credit you w/ all to-dos ever completed =&gt; unreasonably big buffer",
"u": "https://twitter.com/beemuvi/status/773049396191649792",
"t": "2016-09-06 06:45:13 +0000",
}, /*************************************************************************/ {
"x": "Bugfix of the #bugfix (HT <a href=\"http://twitter.com/lady_alys\">Alys</a> for both): accidentally truncated Habitica goals to start from today (manually fixed everyone affected)",
"u": "https://twitter.com/beemuvi/status/773049802867118081",
"t": "2016-09-06 06:46:50 +0000",
}, /*************************************************************************/ {
"x": "We updated/clarified the list of weasel restrictions in goal settings: no editing or manually adding data to autodata goals, no deleting",
"u": "https://twitter.com/beemuvi/status/773783822588448770",
"t": "2016-09-08 07:23:34 +0000",
}, /*************************************************************************/ {
"x": "Bug w/ downgrading premium plans if you had a coupon discount: we failed to apply it! Gulp! #bugfix HT <a href=\"https://twitter.com/my9goofie\">@my9goofie</a> (And manually did refunds)",
"u": "https://twitter.com/beemuvi/status/774145964860841985",
"t": "2016-09-09 07:22:35 +0000",
}, /*************************************************************************/ {
"x": "Fixed our dumb Facebook share button (on the goal pages) that's been broken for we-don't-know-how-long. HT <a href=\"https://twitter.com/florismk\">@florismk</a>",
"u": "https://twitter.com/beemuvi/status/774484198786605056",
"t": "2016-09-10 05:46:36 +0000",
}, /*************************************************************************/ {
"x": "Another embarrassing one: 1st attempt (Jul 4) to fix broken image links (rails asset pipeline) left several broken that we just now #bugfix'd",
"u": "https://twitter.com/beemuvi/status/774807459848257536",
"t": "2016-09-11 03:11:08 +0000",
"c": "Twitter integration landing page header image, fatcyclist contest logo, hr scroll in landing pages and ajax loader spinner, mini todoist/pocket/foursquare logos on zapier page, ie 5 beecat",
}, /*************************************************************************/ {
"x": "We improved the Facebook share button: shows both goalname &amp; title if different, &amp; to round out this tiny UVI: fixed a typo in goal settings",
"u": "https://twitter.com/beemuvi/status/775224782824419328",
"t": "2016-09-12 06:49:25 +0000",
}, /*************************************************************************/ {
"x": "Facebook sharing #bugfix: it was picking the wrong image because we tried to specify the thumbnail which isn't on the page being shared",
"u": "https://twitter.com/beemuvi/status/775224831130292225",
"t": "2016-09-12 06:49:37 +0000",
}, /*************************************************************************/ {
"x": "Moved the discount slider back to the top and added an FAQ item to <a href=\"http://beeminder.com/premium\">beeminder.com/premium</a>",
"u": "https://twitter.com/beemuvi/status/775947850924429312",
"t": "2016-09-14 06:42:38 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "If you're not premium we strip html tags from your \"about me\" blurb &amp; add a nofollow to the \"personal url\" when linked under your avatar",
"u": "https://twitter.com/beemuvi/status/776319466418253824",
"t": "2016-09-15 07:19:18 +0000",
}, /*************************************************************************/ {
"x": "#bugfix w/ creating Skritter goals: worked around changes on Skritter side. Now at least works smoothly if already logged in to Skritter.",
"u": "https://twitter.com/beemuvi/status/776662919727591424",
"t": "2016-09-16 06:04:04 +0000",
}, /*************************************************************************/ {
"x": "Rounding bug w/ applying coupons for premium plans could make displayed price a whole dollar off :/ #bugfix HT Markos Giannopoulos",
"u": "https://twitter.com/beemuvi/status/777023647395393536",
"t": "2016-09-17 05:57:28 +0000",
}, /*************************************************************************/ {
"x": "When you create a goal w/ the API you can now specify the data source (manual, api, ifttt, zapier). HT Malcolm Ocean &amp; <a href=\"http://complice.co\">Complice</a>",
"u": "https://twitter.com/beemuvi/status/777398670006247424",
"t": "2016-09-18 06:47:40 +0000",
}, /*************************************************************************/ {
"x": "Instead of just strongly suggesting it (via banner) we now force you to confirm your email before letting you give us your credit card",
"u": "https://twitter.com/beemuvi/status/777766624296251396",
"t": "2016-09-19 07:09:48 +0000",
"c": "Soon afterwards we broke this as part of the #redesign :(",
}, /*************************************************************************/ {
"x": "(1 of 3) More helpful unsubscribe link! Sends you to a page with a big red button, is clear about what happens if you press it, ...",
"u": "https://twitter.com/beemuvi/status/778131408841805824",
"t": "2016-09-20 07:19:19 +0000",
}, /*************************************************************************/ {
"x": "(2 of 3) ... still tells you what's up if you visit the link multiple times, doesn't try to redirect to goal gallery, tells you your beemail ...",
"u": "https://twitter.com/beemuvi/status/778131459097976832",
"t": "2016-09-20 07:19:31 +0000",
}, /*************************************************************************/ {
"x": "(3 of 3) ... subscription level and number of active goals, and the button helpfully goes away on that page once it's done its job.",
"u": "https://twitter.com/beemuvi/status/778131521186238465",
"t": "2016-09-20 07:19:46 +0000",
}, /*************************************************************************/ {
"x": "Forcing email confirmation before adding credit card spawned a couple bugs for grandfathered users, not allowing changing cc, etc #bugfix",
"u": "https://twitter.com/beemuvi/status/778737476361867264",
"t": "2016-09-21 23:27:37 +0000",
}, /*************************************************************************/ {
"x": "On the email unsubscribe page, \"you have N active goals\" now links to your gallery in case you forgot what you were once beeminding. #mini",
"u": "https://twitter.com/beemuvi/status/779595720781246464",
"t": "2016-09-24 08:17:58 +0000",
}, /*************************************************************************/ {
"x": "New premium FAQs about upgrading and downgrading and exquisite fairness, with new links and hovertext. https://www.beeminder.com/premium",
"u": "https://twitter.com/beemuvi/status/779633627164323840",
"t": "2016-09-24 10:48:36 +0000",
}, /*************************************************************************/ {
"x": "Crazy mongoid bug made rescale feature break, rarely. Probable #bugfix deployed plus instrumentation so we'll know for sure if happens again",
"u": "https://twitter.com/beemuvi/status/780275616167829504",
"t": "2016-09-26 05:19:38 +0000",
"c": "Sometimes we would scale some datapoints multiple times, resulting in totally fubared goals. Trying sorting datapoints first?",
}, /*************************************************************************/ {
"f": true, 
"x": "Failed/frozen goals (with the skull &amp; crossbones) can now be instantly archived. Sorry we were so uptight about that for so long!",
"u": "https://twitter.com/beemuvi/status/780660643099652096",
"t": "2016-09-27 06:49:35 +0000",
}, /*************************************************************************/ {
"x": "Added our new Minister of the Exterior, <a href=\"https://twitter.com/anomalily\">@anomalily</a>, to our About Us page. <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a> Welcome Lillian! <a href=\"http://blog.beeminder.com/anomalily\">blog.beeminder.com/anomalily</a>",
"u": "https://twitter.com/beemuvi/status/781055660259770368",
"t": "2016-09-28 08:59:15 +0000",
}, /*************************************************************************/ {
"x": "More cleanup of <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a> &amp; finally added <a href=\"https://twitter.com/lady_alys\">@lady_alys</a> who's been helping us w/ support &amp; <a href=\"https://twitter.com/habitica\">@habitica</a> integration for a long time",
"u": "https://twitter.com/beemuvi/status/781384851177951232",
"t": "2016-09-29 06:47:20 +0000",
}, /*************************************************************************/ {
"x": "Slightly more sophisticated error checking in our Twitter goal setup: give an error if the user doesn't exist or their tweets are protected.",
"u": "https://twitter.com/beemuvi/status/781756110168481792",
"t": "2016-09-30 07:22:35 +0000",
}, /* --------------------------------------------------------- end 2016sep */ ]

var batch2016oct = [
{
"x": "If you downgraded and lost the SMS bot perk, we'd get horribly confused and not let you save user settings anymore. #bugfix",
"u": "https://twitter.com/beemuvi/status/782117460610736129",
"t": "2016-10-01 07:18:28 +0000",
}, /*************************************************************************/ {
"x": "SMS bot improvement: until you activate your phone number we give a link to resend the activation text message",
"u": "https://twitter.com/beemuvi/status/782468026872369152",
"t": "2016-10-02 06:31:29 +0000",
}, /*************************************************************************/ {
"x": "Can now add a phone number even if you don't use the SMS bot (and we'll actually text/call if you derail at $810+ &amp; don't respond to email)",
"u": "https://twitter.com/beemuvi/status/782827289096491008",
"t": "2016-10-03 06:19:04 +0000",
"c": "\"maybe you are just hoping we'll give you a call to chat?\" says bee",
}, /*************************************************************************/ {
"x": "In case you have too many past pledges to show, we made a button that emails you the whole enchilada, in json format.",
"u": "https://twitter.com/beemuvi/status/783196192574312448",
"t": "2016-10-04 06:44:58 +0000",
}, /*************************************************************************/ {
"x": "Got rid of superfluous fields in past pledges export and added a CSV version as well as JSON",
"u": "https://twitter.com/beemuvi/status/783530646643863552",
"t": "2016-10-05 04:53:58 +0000",
}, /*************************************************************************/ {
"n": 2054,
"x": "Email bot no longer silently (well, it was calling in us humans to intervene) fails on data-like datapoints that're not actually parsable",
"u": "https://twitter.com/beemuvi/status/783914905028001792",
"t": "2016-10-06 06:20:52 +0000",
"c": "[twttr#2054] The tweeting mishap in the next UVI means there's an 8-month period, till #2300, of Twitter's numbers being off by one.",
}, /*************************************************************************/ {
"n": 2055,
"x": "Several fixes to decrease chances of bot emails getting spamboxed. More user-visible part: truncate quoting of probable spam in bot replies.",
"d": "2016-10-05",
"t": "2017-05-31",
"u": ["https://twitter.com/beemuvi/status/870167377983422464",
      "https://github.com/beeminder/beeminder/commit/0274613b68c4c55612e9260442477c9aa6fee945"],
"c": "[twttr#2299] We forgot to tweet this when we logged it as a UVI! We eventually figured it out when collecting all our UVIs at beeminder.com/changelog and tweeted it 8 months late.",
}, /*************************************************************************/ {
"n": 2056,
"x": "Fixed, de-duped, and rearranged footer links. #mini",
"u": "https://twitter.com/beemuvi/status/784632670592524288",
"t": "2016-10-08 05:53:01 +0000",
"c": "[twttr#2055] Twitter's numbers are off by one for 8 months starting here until #2300.",
}, /*************************************************************************/ {
"n": 2057,
"x": "Fixed a bug in how prices of lower premium plans were displayed to people already on a higher lifetime plan (now just says \"$N/A\"). #bugfix",
"u": "https://twitter.com/beemuvi/status/785028579427913729",
"t": "2016-10-09 08:06:13 +0000",
}, /*************************************************************************/ {
"n": 2058,
"x": "Also on <a href=\"http://beeminder.com/premium\">beeminder.com/premium</a>: stopped confusingly saying \"$0\" for the lifetime plan you already have. Plus handy new FAQ item &amp; hovertexts",
"u": "https://twitter.com/beemuvi/status/785388803145936896",
"t": "2016-10-10 07:57:37 +0000",
}, /*************************************************************************/ {
"n": 2059,
"x": "Moved all the graph images to S3: makes a noticeable difference in how fast goal galleries load &amp; expected to even improve server stability",
"u": "https://twitter.com/beemuvi/status/785737333110894593",
"t": "2016-10-11 07:02:33 +0000",
}, /*************************************************************************/ {
"n": 2060,
"x": "Better security: nonce URLs for graph images and thumbnails actually expire (totally new ones each time the graph is generated)",
"u": "https://twitter.com/beemuvi/status/785968617158434816",
"t": "2016-10-11 22:21:35 +0000",
}, /*************************************************************************/ {
"n": 2061,
"x": "Seemingly #mini UVI that's part of something huge: we now disallow the goalname \"gallery\" (part of getting best of all worlds w/ redesign)",
"u": "https://twitter.com/beemuvi/status/786458410040512512",
"t": "2016-10-13 06:47:51 +0000",
}, /*************************************************************************/ {
"n": 2062,
"f": true, 
"x": "Bee-yootiful new redesign! Massive number of UVIs in this. Here begins a tweetstorm of the most noteworthy! (1/26)",
"u": "https://twitter.com/beemuvi/status/786880454972420096",
"t": "2016-10-14 10:44:54 +0000",
"c": "Could make a sublist here",
}, /*************************************************************************/ {
"n": 2063,
"f": true, 
"x": "The Data tab is much nicer, lets you load all datapoints on one page, sort by any column, and it all happens right below the graph",
"u": "https://twitter.com/beemuvi/status/786880506579128321",
"t": "2016-10-14 10:45:06 +0000",
}, /*************************************************************************/ {
"x": "Editing data in the data table is also much nicer: you can just edit in place without first clicking a button",
"u": "https://twitter.com/beemuvi/status/786880572165459968",
"t": "2016-10-14 10:45:22 +0000",
}, /*************************************************************************/ {
"x": "And import/export and rescaling of data is now all below the data",
"u": "https://twitter.com/beemuvi/status/786880653937696768",
"t": "2016-10-14 10:45:42 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "There's a button to delete your whole account if less than a week old or no active goals. The rest of <a href=\"http://doc.beeminder.com/byebyebee\">doc.beeminder.com/byebyebee</a> coming later.",
"u": "https://twitter.com/beemuvi/status/786880716357242880",
"t": "2016-10-14 10:45:56 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "Table of reminder settings for all goals can sort by goal, deadline, zenostart, etc. Nice for setting up waterfalls: http://blog.beeminder.com/waterfalls",
"u": "https://twitter.com/beemuvi/status/786880786796470277",
"t": "2016-10-14 10:46:13 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "Togglable buttons telling you the bare min or hard cap you need in terms of either the delta or the absolute number.",
"u": "https://twitter.com/beemuvi/status/786880846280007680",
"t": "2016-10-14 10:46:27 +0000",
}, /*************************************************************************/ {
"x": "The buttons for delta vs absolute (and for absolute vs \"t minus\" deadline time) remember which way you like them per goal",
"u": "https://twitter.com/beemuvi/status/786880910599663616",
"t": "2016-10-14 10:46:43 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "Handy asterisk on the pledge telling you when you've hit your pledge cap, plus clearer indicator of pending pledge step-down",
"u": "https://twitter.com/beemuvi/status/786881022365274112",
"t": "2016-10-14 10:47:09 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "New dashboard lets you expand/collapse individual goals (pro-tip: use it like a to-do list, collapsing when done with a goal for the day)",
"u": "https://twitter.com/beemuvi/status/786881087771291649",
"t": "2016-10-14 10:47:25 +0000",
}, /*************************************************************************/ {
"x": "You can now choose today vs yesterday when entering data from the dashboard.",
"u": "https://twitter.com/beemuvi/status/786881149297582080",
"t": "2016-10-14 10:47:40 +0000",
}, /*************************************************************************/ {
"x": "For autodata goals on the dashboard we have the icon for the data source and a nice hexagonal \"force a fetch of more data\" button",
"u": "https://twitter.com/beemuvi/status/786881244835352576",
"t": "2016-10-14 10:48:02 +0000",
}, /*************************************************************************/ {
"x": "Data entry now shows the goal units (not to mention all the increased prettiness, but that applies everywhere)",
"u": "https://twitter.com/beemuvi/status/786881301190062083",
"t": "2016-10-14 10:48:16 +0000",
}, /*************************************************************************/ {
"x": "The banner messages that appear at the top are much nicer, disappearing when it makes sense to and persisting otherwise",
"u": "https://twitter.com/beemuvi/status/786881426809458688",
"t": "2016-10-14 10:48:46 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "Arguably a negative UVI but since we're drastically undercounting anyway: we killed the auto-quit feature. It was deeply unbeemindery!",
"u": "https://twitter.com/beemuvi/status/786881519465828352",
"t": "2016-10-14 10:49:08 +0000",
}, /*************************************************************************/ {
"x": "The Data tab is updated immediately when you add data and there's a \"stats out of date\" warning as a stopgap instead of just being stale",
"u": "https://twitter.com/beemuvi/status/786881593432346624",
"t": "2016-10-14 10:49:26 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "You can now instantly delete goals from your gallery of archived goals",
"u": "https://twitter.com/beemuvi/status/786881673879093248",
"t": "2016-10-14 10:49:45 +0000",
}, /*************************************************************************/ {
"x": "So much confusing stuff now out of newbees' line of sight but all still conveniently acceessible in the tabs below the graph",
"u": "https://twitter.com/beemuvi/status/786881734113583104",
"t": "2016-10-14 10:49:59 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "Tagging! Manage tags at http://beeminder.com/tags &amp; then filter your dashboard via url-hacking, eg bmndr.com/user#tag or #!tag to exclude",
"u": "https://twitter.com/beemuvi/status/786881906780450816",
"t": "2016-10-14 10:50:40 +0000",
}, /*************************************************************************/ {
"x": "Tagging is multiple UVIs' worth so we'll use this tweet to say that, yes, a real UI is coming. Current version subsumes backburnering.",
"u": "https://twitter.com/beemuvi/status/786881988267417600",
"t": "2016-10-14 10:51:00 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "Negative UVI but it was really a confusing, dangerous feature: backburnering is dead. Tag things \"backburner\" &amp; filter them out instead!",
"u": "https://twitter.com/beemuvi/status/786882069049675776",
"t": "2016-10-14 10:51:19 +0000",
}, /*************************************************************************/ {
"x": "We now use the live time-bomb countdown for goals within a week of derailing and say \"months\" &amp; \"years\" for goals with far deadlines",
"u": "https://twitter.com/beemuvi/status/786882164671389696",
"t": "2016-10-14 10:51:42 +0000",
}, /*************************************************************************/ {
"x": "Final row of the road editor is insta-updated when using the normal road dial (was moot in old design but nice having these on same page)",
"u": "https://twitter.com/beemuvi/status/786882239460024320",
"t": "2016-10-14 10:52:00 +0000",
}, /*************************************************************************/ {
"x": "New, helpful placeholder text in fields in the goal creation wizard",
"u": "https://twitter.com/beemuvi/status/786883231844970496",
"t": "2016-10-14 10:55:56 +0000",
}, /*************************************************************************/ {
"x": "We separated reminder defaults from other goal defaults. Two submit buttons on one page separated by lots of scrolling was a mess.",
"u": "https://twitter.com/beemuvi/status/786883283455913984",
"t": "2016-10-14 10:56:09 +0000",
}, /*************************************************************************/ {
"x": "Huge amount of aesthetic improvements &amp; UI tweaks, hexagonal buttons, etc etc. This concludes the main tweetstorm for the redesign! (26/26)",
"u": "https://twitter.com/beemuvi/status/786883348081745922",
"t": "2016-10-14 10:56:24 +0000",
}, /*************************************************************************/ {
"x": "Redesign broke <a href=\"https://twitter.com/habitica\">@habitica</a> goal creation briefly! Newly created goals were failing to pick up new To-dos. #bugfix",
"u": "https://twitter.com/beemuvi/status/787560786491084800",
"t": "2016-10-16 07:48:18 +0000",
}, /*************************************************************************/ {
"x": "We now actually make sure the repo you want to mind exists and that you have access to it when you create a Gitminder goal",
"u": "https://twitter.com/beemuvi/status/788966010711748608",
"t": "2016-10-20 04:52:09 +0000",
}, /*************************************************************************/ {
"x": "When we launched the redesign we showed your full name in the public version of your gallery; that was a bad choice and we undid it that day",
"u": "https://twitter.com/beemuvi/status/788967288862978048",
"t": "2016-10-20 04:57:14 +0000",
}, /*************************************************************************/ {
"x": "In Withings goal creation we now validate that you give us an initial weight (though this seems to not work in Safari, frustratingly) #mini",
"u": "https://twitter.com/beemuvi/status/789330172512055296",
"t": "2016-10-21 04:59:12 +0000",
}, /*************************************************************************/ {
"x": "We now remember which goals on the dashboard you expanded/collapsed (&amp; #bugfix today: it used to not work if you started from all-expanded)",
"u": "https://twitter.com/beemuvi/status/789690493659590656",
"t": "2016-10-22 04:51:00 +0000",
}, /*************************************************************************/ {
"x": "Smarter use of \"Sun night\", \"tomorrow\", etc in deadline blurbs. Eg, saying \"tomorrow\" instead of \"Sun\" if within 24 hours of the deadline.",
"u": "https://twitter.com/beemuvi/status/790054778101387268",
"t": "2016-10-23 04:58:32 +0000",
}, /*************************************************************************/ {
"x": "Fixed several cases (eg, the help text for the Due By table) of saying Value instead of Total or vice versa. #mini",
"u": "https://twitter.com/beemuvi/status/790412051285962752",
"t": "2016-10-24 04:38:12 +0000",
}, /*************************************************************************/ {
"x": "When you check or uncheck the Pessimistic Presumptive checkbox it instantly saves the setting and tells you so. Other settings to follow.",
"u": "https://twitter.com/beemuvi/status/790777828337823745",
"t": "2016-10-25 04:51:40 +0000",
}, /*************************************************************************/ {
"x": "More things we forgot to include in the redesign tweetstorm: stepper buttons for datapoint values etc, displaying far future dates in years.",
"u": "https://twitter.com/beemuvi/status/791502519142801408",
"t": "2016-10-27 04:51:20 +0000",
}, /*************************************************************************/ {
"x": "If you loaded the goal page and there was no previous datapoint then we were giving a 500 error. #bugfix",
"u": "https://twitter.com/beemuvi/status/791867035282124800",
"t": "2016-10-28 04:59:48 +0000",
}, /*************************************************************************/ {
"n": 2098,
"x": "Similarly when there was an error preventing the graph from generating. We'll say this UVI covers all similar bugs introduced by redesign.",
"u": "https://twitter.com/beemuvi/status/791870340137754624",
"t": "2016-10-28 05:12:55 +0000",
}, /*************************************************************************/ {
"n": 2099,
"x": "Small API improvement: Goal object now includes last_datapoint [TODO: document it]",
"u": "https://twitter.com/beemuvi/status/792591765454716928",
"t": "2016-10-30 04:59:37 +0000",
}, /*************************************************************************/ {
"x": "We did several things with goalnames and descriptions: 1) descriptions viewable as tooltips on the dashboard;",
"u": "https://twitter.com/beemuvi/status/792953782065737728",
"t": "2016-10-31 04:58:08 +0000",
}, /*************************************************************************/ {
"x": "2) We now ask for both goalname (previously known as \"slug\") and description (previously \"title\") when creating goals;",
"u": "https://twitter.com/beemuvi/status/792953923518668800",
"t": "2016-10-31 04:58:42 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "3) You can edit the description at any time at the top of the goal page;",
"u": "https://twitter.com/beemuvi/status/792954026505621504",
"t": "2016-10-31 04:59:06 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "4) Finally, to get as close as we're going to for now to the best of all worlds: click to toggle between goalname/description on dashboard",
"u": "https://twitter.com/beemuvi/status/792954127340843008",
"t": "2016-10-31 04:59:30 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "Almost forgot the biggest sluggy UVI: Anyone can edit their goalname any time (w/ big warning about breaking URLs and IFTTT recipes etc)",
"u": "https://twitter.com/beemuvi/status/792955327108960257",
"t": "2016-10-31 05:04:17 +0000",
}, /* --------------------------------------------------------- end 2016oct */ ]

var batch2016nov = [
{
"x": "Tweetstorm about the flurry of bugfixes since deploying the redesign: We broke an embarrassing number of things! 1/5",
"u": "https://twitter.com/beemuvi/status/795689384238403584",
"t": "2016-11-07 18:08:27 +0000",
}, /*************************************************************************/ {
"x": "We're fixing them as fast as we can and normally each individual #bugfix would be totally fair game as a separate UVI. 2/5",
"u": "https://twitter.com/beemuvi/status/795689428626702336",
"t": "2016-11-07 18:08:37 +0000",
}, /*************************************************************************/ {
"x": "But we were insufficiently careful when deploying the redesign, so, as self-punishment (&amp; due to overwhelm at the sheer number of UVIs) 3/5",
"u": "https://twitter.com/beemuvi/status/795689487636393984",
"t": "2016-11-07 18:08:51 +0000",
}, /*************************************************************************/ {
"x": "...we're not going to count anything else up to today that the redesign broke, other than this tweetstorm's worth: 4/5",
"u": "https://twitter.com/beemuvi/status/795689536902742016",
"t": "2016-11-07 18:09:03 +0000",
}, /*************************************************************************/ {
"x": "...which includes broken links, broken features like changing passwords, missing settings, backburner-goal brokenness in iOS, etc etc. 5/5",
"u": "https://twitter.com/beemuvi/status/795689611276079104",
"t": "2016-11-07 18:09:21 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "There's no longer any limit on the number of days of initial safety buffer when creating a goal",
"u": "https://twitter.com/beemuvi/status/796593746171330560",
"t": "2016-11-10 06:02:03 +0000",
}, /*************************************************************************/ {
"x": "Collection of #mini UVIs: Ellipses for long goalnames, header for data entry box, more readable data table when it's not editable",
"u": "https://twitter.com/beemuvi/status/796594154193174528",
"t": "2016-11-10 06:03:41 +0000",
}, /*************************************************************************/ {
"x": "If you accidentally try to submit a datapoint without filling in the value it now turns the field red so it's nice and obvious what happened",
"u": "https://twitter.com/beemuvi/status/796951453675888640",
"t": "2016-11-11 05:43:27 +0000",
}, /*************************************************************************/ {
"x": "Fixed some cases in alerts where we used the old \"title\" (what's now the goal description) to identify goals instead of the goalname #bugfix",
"u": "https://twitter.com/beemuvi/status/797316222979190784",
"t": "2016-11-12 05:52:55 +0000",
}, /*************************************************************************/ {
"x": "Changing the rate units in the road dial now does the arithmetic for you, like turning 7/week into 1/day, immediately, before hitting submit",
"u": "https://twitter.com/beemuvi/status/797316266113384448",
"t": "2016-11-12 05:53:05 +0000",
}, /*************************************************************************/ {
"x": "Minis: Query tags case-insensitively, road editor from Commitment to Settings tab, #bugfix's w/ submit button &amp; enforcing ratchet bounds",
"u": "https://twitter.com/beemuvi/status/797386111844634624",
"t": "2016-11-12 10:30:38 +0000",
}, /*************************************************************************/ {
"x": "A kludge but a very noticeable improvement: we no longer let you insta-derail yourself by ratcheting the day after derailing",
"u": "https://twitter.com/beemuvi/status/798029264482205696",
"t": "2016-11-14 05:06:17 +0000",
}, /*************************************************************************/ {
"x": "Minis: 1. when showing the goalname, show goal description as hovertext; 2. jump straight to 1 when clicking the plus for datapoint value",
"u": "https://twitter.com/beemuvi/status/798029346191523840",
"t": "2016-11-14 05:06:37 +0000",
}, /*************************************************************************/ {
"x": "The hashtag-minding part of our Twitter integration was broken since forever (workaround was via IFTTT) but is now fixed. #bugfix",
"u": "https://twitter.com/beemuvi/status/798400706684325888",
"t": "2016-11-15 05:42:16 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "URLminder is an official integration! Automatically mind wordcounts of documents at any publicly accessible URLs. http://blog.beeminder.com/urlminder",
"u": "https://twitter.com/beemuvi/status/798403764730335232",
"t": "2016-11-15 05:54:25 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "We magically turn links to google docs into the plaintext version for URLminder so we get the real wordcount without extraneous html",
"u": "https://twitter.com/beemuvi/status/798753369590415361",
"t": "2016-11-16 05:03:38 +0000",
}, /*************************************************************************/ {
"f": true, 
"x": "New NaNoWriMo landing page with buttons for automatic and manual tracking: https://www.beeminder.com/nanowrimo",
"u": "https://twitter.com/beemuvi/status/798946296245538816",
"t": "2016-11-16 17:50:15 +0000",
}, /*************************************************************************/ {
"x": "If you have a pledge stepdown scheduled you can set the pledge cap to what it's stepping down to; removed most of the confusing interactions",
"u": "https://twitter.com/beemuvi/status/798946475661082624",
"t": "2016-11-16 17:50:58 +0000",
}, /*************************************************************************/ {
"x": "If you create a goal with only post-dated data we now give a more elucidating error about why we can't show you a graph. #mini",
"u": "https://twitter.com/beemuvi/status/798946847561682944",
"t": "2016-11-16 17:52:26 +0000",
}, /*************************************************************************/ {
"x": "Fixed old instance of calling Habitica HabitRPG in bot email, fixed bug that made us miss points on Duolingo for Norwegian. #bugfix",
"u": "https://twitter.com/beemuvi/status/799842000199557124",
"t": "2016-11-19 05:09:27 +0000",
}, /*************************************************************************/ {
"x": "Mostly fixed the problem with missing graph images on the dashboard (but it still happens occasionally...). #bugfix #mostly #staytuned",
"u": "https://twitter.com/beemuvi/status/799843648477085698",
"t": "2016-11-19 05:16:00 +0000",
}, /*************************************************************************/ {
"x": "When we email you about an error in an IFTTT recipe we now include a link to the errant recipe. Handy!",
"u": "https://twitter.com/beemuvi/status/799843707377762304",
"t": "2016-11-19 05:16:14 +0000",
}, /*************************************************************************/ {
"x": "Fixed a 500 error when restarting an old GmailZero goal from before Google oauth params changed. Now backwards compatible. #bugfix #mini",
"u": "https://twitter.com/beemuvi/status/800570829587156992",
"t": "2016-11-21 05:25:34 +0000",
}, /*************************************************************************/ {
"x": "Made the thumbnails collapse nicely even when the infinibee is buzzing on top of them (and keep buzzing in collapsed form)",
"u": "https://twitter.com/beemuvi/status/800941534828867585",
"t": "2016-11-22 05:58:37 +0000",
}, /*************************************************************************/ {
"x": "Thumbnails also clickable even when infinibee buzzing (especially nice now that goalnames/goalblurbs toggle instead of linking to goal page)",
"u": "https://twitter.com/beemuvi/status/801209403680534530",
"t": "2016-11-22 23:43:02 +0000",
}, /*************************************************************************/ {
"x": "If goalname &amp; blurb are same except case, don't toggle betw them on dashboard (looked like we'd implemented idiotic case-toggling feature!)",
"u": "https://twitter.com/beemuvi/status/801665146833682432",
"t": "2016-11-24 05:53:59 +0000",
}, /*************************************************************************/ {
"x": "If a goal is coasting (will hit goal value by goal date even if you do/report nothing) we now show it green w/ the correct wording. #bugfix",
"u": "https://twitter.com/beemuvi/status/803477367284854784",
"t": "2016-11-29 05:55:06 +0000",
}, /*************************************************************************/ {
"x": "Fixed longstanding bug that would sometimes insta-derail you when importing old RescueTime &amp; Withings data when creating goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/803839253209841664",
"t": "2016-11-30 05:53:07 +0000",
}, /* --------------------------------------------------------- end 2016nov */ ]

var batch2016dec = [
{
"x": "Dumb #bugfix w/ Fitbit goal creation: gave error if you didn't change the default settings. (ps: bugs intro'd by redesign count again now)",
"u": "https://twitter.com/beemuvi/status/804203048876707840",
"t": "2016-12-01 05:58:42 +0000",
}, /*************************************************************************/ {
"x": "If a goalname's disallowed (eg \"gallery\" or existing goalnames) also disallow uppercase variants like \"Gallery\" or things break. #bugfix",
"u": "https://twitter.com/beemuvi/status/804563392736309249",
"t": "2016-12-02 05:50:35 +0000",
}, /*************************************************************************/ {
"x": "Embarrassingly there was a full month after the redesign when we set everyone's default timezone to US Eastern time. #bugfix",
"u": "https://twitter.com/beemuvi/status/805932011823058944",
"t": "2016-12-06 00:28:59 +0000",
}, /*************************************************************************/ {
"x": "We rewrote the copy at http://beeminder.com/money which was a little broken since the Infinibee premium revamp. #mini",
"u": "https://twitter.com/beemuvi/status/806291684287840256",
"t": "2016-12-07 00:18:12 +0000",
}, /*************************************************************************/ {
"x": "GmailZero #bugfix in which we were fetching your initial inbox count but then starting your road at 0 anyway for a while.",
"u": "https://twitter.com/beemuvi/status/806623799793725440",
"t": "2016-12-07 22:17:54 +0000",
}, /*************************************************************************/ {
"x": "Our Garmin stepcounts were sometimes too low. Garmin's granular API didn't agree with its summary data. We now use summary. #bugfix",
"u": "https://twitter.com/beemuvi/status/806623898062028800",
"t": "2016-12-07 22:18:18 +0000",
}, /*************************************************************************/ {
"x": "Fixed small bug with plus/minus buttons for data entry on odometer goals, and fixed a link to reminder settings in bot emails. #bugfix",
"u": "https://twitter.com/beemuvi/status/807388679672995841",
"t": "2016-12-10 00:57:16 +0000",
}, /*************************************************************************/ {
"x": "By popular demand: our blog has a (<a href=\"https://twitter.com/duckduckgo\">@duckduckgo</a>) searchbox. Seek &amp; ye shall find. Dark days of adding \"beeminder blog\" to a web search: over!",
"u": "https://twitter.com/beemuvi/status/807738794199764993",
"t": "2016-12-11 00:08:30 +0000",
}, /*************************************************************************/ {
"x": "Yet another bug from redesign: If you signed up via Google oauth and then created a Do More goal we'd create it as a GmailZero goal. #bugfix",
"u": "https://twitter.com/beemuvi/status/808022048647712768",
"t": "2016-12-11 18:54:03 +0000",
}, /*************************************************************************/ {
"x": "Fixed an intermittent bug where you'd hit archive &amp; the goal would mysteriously not archive if a previous goal w/ that name existed. #bugfix",
"u": "https://twitter.com/beemuvi/status/808476512085123072",
"t": "2016-12-13 00:59:55 +0000",
}, /*************************************************************************/ {
"x": "Nasty bug with our <a href=\"https://twitter.com/habitica\">@habitica</a> integration: all the Fewer To-Dos goals were being created as Do Mores (redesign bug). #bugfix",
"u": "https://twitter.com/beemuvi/status/808837896882921472",
"t": "2016-12-14 00:55:56 +0000",
}, /*************************************************************************/ {
"x": "And a separate bug w/ our <a href=\"https://twitter.com/habitica\">@habitica</a> integration: for Do More goals we were starting the yellow brick road too high by 1 To-Do. #bugfix",
"u": "https://twitter.com/beemuvi/status/808840093418983424",
"t": "2016-12-14 01:04:40 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Version 4.4 of the Beeminder iOS app is live! Most important for brand new users: you can now create a Beeminder account from it.",
"u": "https://twitter.com/beemuvi/status/809560659608244224",
"t": "2016-12-16 00:47:56 +0000",
}, /*************************************************************************/ {
"n": 2146,
"x": "Also in the new version of the iOS app: a Reset Data button to reload all goals, no more backburner dividing line, ...",
"u": "https://twitter.com/beemuvi/status/809560694211260416",
"t": "2016-12-16 00:48:05 +0000",
}, /*************************************************************************/ {
"x": "Version 4.4 of iOS app cont'd: Bug fixes in push notifications, &amp; you can tap Create Goal to go to the website pre-logged-in to create goals.",
"u": "https://twitter.com/beemuvi/status/809560747353067521",
"t": "2016-12-16 00:48:17 +0000",
}, /*************************************************************************/ {
"x": "Marginally better \"doom text\" for weight loss; bigger body font; made 3rd-party font library local cuz it was killing response time. #mini",
"u": "https://twitter.com/beemuvi/status/810592247695757312",
"t": "2016-12-18 21:07:06 +0000",
}, /*************************************************************************/ {
"x": "Fixed broken CSS on various autodata landing pages and the unsubscribe page.",
"u": "https://twitter.com/beemuvi/status/811013054733303808",
"t": "2016-12-20 00:59:14 +0000",
}, /*************************************************************************/ {
"x": "Fixed bunch of cases where we used goal description instead of goalname, which to some people's chagrin is now the universal goal identifier.",
"u": "https://twitter.com/beemuvi/status/811359054354214912",
"t": "2016-12-20 23:54:07 +0000",
}, /*************************************************************************/ {
"x": "Fixed a bug involving the pledge amount being in two places. Now it's still in commitment settings too but pops up the same modal. #bugfix",
"u": "https://twitter.com/beemuvi/status/811359151787884544",
"t": "2016-12-20 23:54:30 +0000",
}, /*************************************************************************/ {
"x": "Moved password to separate section in settings which fixed bug w/ some browsers that wouldn't let you change settings w/o changing password",
"u": "https://twitter.com/beemuvi/status/811359256058310656",
"t": "2016-12-20 23:54:55 +0000",
}, /*************************************************************************/ {
"x": "For over a month after the redesign we had a bug that let you sometimes create pledgeless goals w/out a premium plan. Gasp! #bugfix",
"u": "https://twitter.com/beemuvi/status/812460206638514177",
"t": "2016-12-24 00:49:42 +0000",
}, /*************************************************************************/ {
"x": "If you sent auth token but didn't specify the user we 500'd even tho w/ auth token it had to be you that you're requesting for. API #bugfix",
"u": "https://twitter.com/beemuvi/status/812819049545539585",
"t": "2016-12-25 00:35:37 +0000",
}, /*************************************************************************/ {
"x": "Critical #bugfix w/ iOS app that made us fail to push reminders under some mysterious circumstances involving frozen/archived goals.",
"u": "https://twitter.com/beemuvi/status/813162766903099392",
"t": "2016-12-25 23:21:26 +0000",
}, /*************************************************************************/ {
"n": 2156,
"x": "Fixed a couple small bugs with trying to get a premium plan without being initially logged in. #bugfix HT <a href=\"https://twitter.com/pennockd\">@pennockd</a>",
"u": "https://twitter.com/beemuvi/status/813549465457958912",
"t": "2016-12-27 00:58:02 +0000",
}, /* --------------------------------------------------------- end 2016dec */ ]

