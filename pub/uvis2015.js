var batch2015jan = [
{
"n": 1411,
"x": "If there was an error submitting credit card info we left the submit button disabled till you refreshed. #bugfix HT <a href=\"http://dreev.es/eli5\">Faire Soule-Reeves</a>",
"u": "https://twitter.com/beemuvi/status/550711312116748288",
"t": "2015-01-01 17:53:03 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "We finally actually have a radio button for Do More vs Do Less when creating <a href=\"http://blog.beeminder.com/rescuetime\">Rescuetime goals</a>!",
"u": "https://twitter.com/beemuvi/status/551154954871013376",
"t": "2015-01-02 23:15:55 +0000",
}, /*************************************************************************/ {
"x": "Bugfix in Sleep as Android integration where we might've missed the first day's data after goal creation. #bugfix",
"u": "https://twitter.com/beemuvi/status/551630272522117120",
"t": "2015-01-04 06:44:40 +0000",
}, /*************************************************************************/ {
"x": "Added a warning to Take A Break about safety buffer caps, w/ link to settings (only applies to premium users who can set safety buffer caps)",
"u": "https://twitter.com/beemuvi/status/551630673401098240",
"t": "2015-01-04 06:46:15 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Beedroid 2.4! New summary widget (so handy!), Buzzing bee animation (so cute!), Better icons (so modern android!), &amp; no less than 7 bugfixes",
"u": "https://twitter.com/beemuvi/status/552330748406288386",
"t": "2015-01-06 05:08:06 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "For the full list of changes in version 2.4 of the Beeminder Android app: Settings → About Beeminder → ChangeLog. [~10 UVIs in 2 tweets!]",
"u": "https://twitter.com/beemuvi/status/552333952749674497",
"t": "2015-01-06 05:20:50 +0000",
}, /*************************************************************************/ {
"x": "Another improvement to mention in the Beeminder Android app: replaced webview w/ imageview for graphs, meaning it's faster on slower devices",
"u": "https://twitter.com/beemuvi/status/552517555760685056",
"t": "2015-01-06 17:30:25 +0000",
}, /*************************************************************************/ {
"x": "And a #bugfix that was driving at least one of us crazy: if you open the app via a desktop widget you can now task-switch away &amp; back to it",
"u": "https://twitter.com/beemuvi/status/552517608244006914",
"t": "2015-01-06 17:30:37 +0000",
}, /*************************************************************************/ {
"x": "Gitminder bug (introduced by arbitrary deadlines) where we could skip a day if you had 2 days in a row w/ the same number of commits #bugfix",
"u": "https://twitter.com/beemuvi/status/553704058574213121",
"t": "2015-01-10 00:05:09 +0000",
}, /*************************************************************************/ {
"x": "Updated our google oauth2 lib but didn't migrate database, so some who used to sign in w/ google couldn't sign in to the Android app #bugfix",
"u": "https://twitter.com/beemuvi/status/553704307204177920",
"t": "2015-01-10 00:06:08 +0000",
}, /*************************************************************************/ {
"x": "Removed the deadline (due date) info from the goal gallery listing on goals that are finished. (They're no longer due!) #mini (ie, mini UVI)",
"u": "https://twitter.com/beemuvi/status/553704676294541312",
"t": "2015-01-10 00:07:36 +0000",
}, /*************************************************************************/ {
"x": "Fixed whitespace in bot reminder emails that made format instructions for replying with data needlessly confusing. HT <a href=\"https://twitter.com/zooko\">@zooko</a> #mini",
"u": "https://twitter.com/beemuvi/status/554423116114309120",
"t": "2015-01-11 23:42:26 +0000",
}, /*************************************************************************/ {
"x": "\"Units\" placeholder in goal wizard, refresh the graph after stepping down the pledge, linkify \"advanced settings\" in recent data. #mini ×3",
"u": "https://twitter.com/beemuvi/status/555165679737778177",
"t": "2015-01-14 00:53:07 +0000",
}, /*************************************************************************/ {
"x": "We were wrongly saying \"you've reached your pledge cap\" in legit check emails for anyone with a pledge stepdown scheduled. #bugfix",
"u": "https://twitter.com/beemuvi/status/555508897989947393",
"t": "2015-01-14 23:36:56 +0000",
}, /*************************************************************************/ {
"x": "We were accidentally including withings/fitbit bodyfat goals in our weight loss science experiment. #bugfix",
"u": "https://twitter.com/beemuvi/status/555510957221216257",
"t": "2015-01-14 23:45:07 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Not sure it should count since we had to do literally nothing (HT <a href=\"http://stripe.com\">Stripe</a>) but <strong>we auto-update most user's credit card expiration dates now</strong>",
"u": "https://twitter.com/beemuvi/status/555511146283663360",
"t": "2015-01-14 23:45:52 +0000",
}, /*************************************************************************/ {
"x": "Anti-slopeslipping: this = last UVI we'll count ∀ ongoing improvements to Stripe checkout, Discourse forum, etc where we don't lift a finger",
"u": "https://twitter.com/beemuvi/status/555511393474985984",
"t": "2015-01-14 23:46:51 +0000",
}, /*************************************************************************/ {
"x": "A self-rate-limiting catch on reminders that suppressed them if the last was &lt;12h ago led to us (rarely) skipping reminders AND zeno #bugfix",
"u": "https://twitter.com/beemuvi/status/556964937541496832",
"t": "2015-01-19 00:02:43 +0000",
"c": "A restriction on reminders that said \"don't send reminder if the last reminder was less than 12 hours ago\" lead to us skipping reminders AND zeno emails in some eep day cases -- pretty rare condition that your last reminder would be less than 12 hours from your previous one, but then total silent failure of notifications on an eep day results",
}, /*************************************************************************/ {
"x": "Fixed <a href=\"https://twitter.com/PareidoliaX/status/555547027145502720\">Quick Add whitespace bug</a> (HT <a href=\"http://twitter.com/PareidoliaX\">@PareidoliaX</a>) which turned out to be idiocy in an undocumented part of our API. #bugfix",
"u": "https://twitter.com/beemuvi/status/557297092889018369",
"t": "2015-01-19 22:02:35 +0000",
}, /*************************************************************************/ {
"x": "Rare failure of legit checks in certain cases where we bcc us humans (eg, high pledge amounts); we caught all cases so far manually. #bugfix",
"u": "https://twitter.com/beemuvi/status/557702874688679936",
"t": "2015-01-21 00:55:01 +0000",
"c": "A legit check would fail if trying to BCC support &amp; \"highest_paid\" was not yet set. [happened a total of 6 times, and corrected w/in the day for all cases]",
}, /*************************************************************************/ {
"x": "Beeminder Android app v2.4.1 fixes freezing after goal creation/deletion &amp; sync progress indicator didn't work on some devices. #bugfix ×2",
"u": "https://twitter.com/beemuvi/status/558017095787499520",
"t": "2015-01-21 21:43:37 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: Link and hovertext on http://duominder.com &amp; added \"e.g.\" to placeholders (people would not notice it was just a placeholder)",
"u": "https://twitter.com/beemuvi/status/558036516329754624",
"t": "2015-01-21 23:00:47 +0000",
}, /*************************************************************************/ {
"x": "We'd send a scary email about how some new/unknown email address added data to your goal when an admin fixed your emailed data. #bugfix",
"u": "https://twitter.com/beemuvi/status/558037062415581184",
"t": "2015-01-21 23:02:58 +0000",
}, /*************************************************************************/ {
"x": "Twitter autodata bug: last datapoint traveled forward in time if you hadn't tweeted anything new. HT <a href=\"https://twitter.com/gdedkins\">@gdedkins</a> #bugfix",
"u": "https://twitter.com/beemuvi/status/558037456646590464",
"t": "2015-01-21 23:04:32 +0000",
  "c": "<!-- [Led to going from orange => derailed instead of orange => red.] -->",
}, /*************************************************************************/ {
"x": "Reminder time &amp; deadline time accept time of day like \"2300\" now, &amp; error rather than die on bad input. Related to UVI#1383.",
"u": "https://twitter.com/beemuvi/status/559454036085055489",
"t": "2015-01-25 20:53:31 +0000",
}, /*************************************************************************/ {
"x": "There can be only one (gmailzero goal)! If you try to create 2nd: warning, redirect to existing one (even if archived) HT <a href=\"http://complice.co\">Malcolm Ocean</a>",
"u": "https://twitter.com/beemuvi/status/559821528661905408",
"t": "2015-01-26 21:13:48 +0000",
}, /*************************************************************************/ {
"x": "Got rid of the crufty/confusing \"reset road at X\" datapoint comments in favor of \"DERAILED\"; tweaked the comment for PPRs too. #mini",
"u": "https://twitter.com/beemuvi/status/560212724957724672",
"t": "2015-01-27 23:08:16 +0000",
}, /*************************************************************************/ {
"x": "Oops, we were saying \"DERAILED\" for restarted goals. <strong>Now meta datapoints are one of {\"PESSIMISTIC PRESUMPTION\", \"RECOMMITTED\", \"RESTARTED\"}.</strong>",
"u": "https://twitter.com/beemuvi/status/560588409602072577",
"t": "2015-01-29 00:01:06 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "You can now set pledge caps below your current pledge (which take effect when/if you actually drop your pledge to the cap) HT <a href=\"https://twitter.com/Jolly\">@Jolly</a> #alice",
"u": "https://twitter.com/beemuvi/status/560930311387611138",
"t": "2015-01-29 22:39:42 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: smart submit buttons for integrations, labels clickable for pledge cap radio buttons, wording of \"reached pledge cap\" #mini ×3",
"u": "https://twitter.com/beemuvi/status/561268776629334016",
"t": "2015-01-30 21:04:38 +0000",
"c": "Smart-submit a la https://twitter.com/beemuvi/status/344335764101926912",
}, /*************************************************************************/ {
"x": "Do some actual input validation on \"roadall\" in the API. HT <a href=\"http://twitter.com/chipmanaged\">@chipmanaged</a>. Cf UVI#1323.",
"u": "https://twitter.com/beemuvi/status/561673097351155714",
"t": "2015-01-31 23:51:16 +0000",
}, /*************************************************************************/ ]

var batch2015feb = [
{
"x": "For ppl who'd created gitminder goals before or out of freebees, we were failing to redirect to the goal page after goal creation. #bugfix",
"u": "https://twitter.com/beemuvi/status/562043791654125568",
"t": "2015-02-02 00:24:16 +0000",
}, /*************************************************************************/ {
"x": "Also could fail to ensure you'd auth'd before creating gitminder goal #bugfix. Also always use fancy landing page layout for goal creation.",
"u": "https://twitter.com/beemuvi/status/562043881680666626",
"t": "2015-02-02 00:24:38 +0000",
}, /*************************************************************************/ {
"x": "2 #mini UVIs: reworded confusing \"extend it first before using retroratchet\", added warning re start dates for scheduled breaks. HT <a href=\"https://twitter.com/aaronpk\">@aaronpk</a>",
"u": "https://twitter.com/beemuvi/status/562760884461010944",
"t": "2015-02-03 23:53:45 +0000",
}, /*************************************************************************/ {
"x": "Reminder email was missing link to the goal for goals manually marked as autodata; also <strong><a href=\"http://beeminder.com/featured\">beeminder.com/featured</a> has more goals &amp; sorts better</strong>",
"u": "https://twitter.com/beemuvi/status/563117734343757824",
"t": "2015-02-04 23:31:44 +0000",
"c": "Featured gallery has twice as many goals shown and sorts by most recently added data instead of most recent save",
}, /*************************************************************************/ {
"x": "Ongoing heroic JS refactoring continues to break things. Do More goals created after Odometer goals had spurious initial datapoints #bugfix",
"u": "https://twitter.com/beemuvi/status/563477103275163648",
"t": "2015-02-05 23:19:44 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Beeminder is very proud to be one of a handful of launch partners for the new <a href=\"https://twitter.com/Epson\">@Epson</a> #quantifiedself wearables: http://blog.beeminder.com/epson",
"u": "https://twitter.com/bmndr/status/563773215097757697",
"t": "2015-02-06 18:56:23 +0000",
}, /*************************************************************************/ {
"x": "We were preemptively trying to create your Withings goal, causing a spurious \"couldn't save goal\" error immediately after sign-in. #bugfix",
"u": "https://twitter.com/beemuvi/status/563877419816218624",
"t": "2015-02-07 01:50:27 +0000",
"c": "...before you'd actually filled out the form",
}, /*************************************************************************/ {
"x": "3 #mini UVIs: added hovertext for Buzz on front page, improved it for integrations, added username to subject of account confirmation emails",
"u": "https://twitter.com/beemuvi/status/563877721399230464",
"t": "2015-02-07 01:51:39 +0000",
}, /*************************************************************************/ {
"x": "Epson: Fixed date issues that could cause missed activities, time zone issue, &amp; aggregating multiple datapoints for a single day. #bugfix ×3",
"u": "https://twitter.com/beemuvi/status/564938613117300736",
"t": "2015-02-10 00:07:16 +0000",
"c": "Epson dates: fixed an error with start-date in api call for steps endpoint, and to use date of last-fetched activity for the activities endpoint (runsense) - so if you have a lag in updating your data we don't miss any activities. Epson steps/sleep: aggregate the day's data into one datapoint, a la fitbit &amp; jawbone. (this one is questionable since you were the only one to ever encounter it, and i'd have done this from the beginning if i'd actually tested stuff in dev or read the docs more closely). Epson times: use the user's timezone when giving clarifying time-of-day that the event started, or the datapoint was added.",
}, /*************************************************************************/ {
"f": true,
"x": "Eek! We let you change the road dial on frozen goals, which usually led to insta-derail. Now: force you to use the restart button! #bugfix",
"u": "https://twitter.com/beemuvi/status/565267849502294017",
"t": "2015-02-10 21:55:32 +0000",
}, /*************************************************************************/ {
"x": "Fixed a passel of glitches with Sleep as Android auth (via Google), confusion with previously issued keys and expiring tokens. #bugfix",
"u": "https://twitter.com/beemuvi/status/565631703763677184",
"t": "2015-02-11 22:01:21 +0000",
"c": "Three things with google auth: tell rails to remember the user before signing them in, update token info on login if it differs from current info (old-style Google auth?), programmatically revoke tokens when removing an authorization",
}, /*************************************************************************/ {
"f": true,
"x": "Added API documentation for rah, delta, callback_url, description, graphsum, lanewidth, deadline, plotall, etc. HT <a href=\"https://twitter.com/instigate_it\">@instigate_it</a>",
"u": "https://twitter.com/beemuvi/status/565666164807045120",
"t": "2015-02-12 00:18:17 +0000",
}, /*************************************************************************/ {
"x": "Two things in landing pages: consistently hide goal form when showing pledge info, and opaque overlay when showing infinibee. #bugfix ×2",
"u": "https://twitter.com/beemuvi/status/565990317157916673",
"t": "2015-02-12 21:46:21 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: typo fixes in hovertext in settings, fix checkmark symbol in api docs, pruned testimonials, copyright year thing. #mini ×4",
"u": "https://twitter.com/beemuvi/status/565990396610609152",
"t": "2015-02-12 21:46:40 +0000",
"c": "Stop saying the copyright year since that keeps getting out of date",
}, /*************************************************************************/ {
"x": "We weren't alerting you if there were problems with your credit card on premium renewal; now we email an alert, and only retry a few times",
"u": "https://twitter.com/beemuvi/status/567109407159234560",
"t": "2015-02-15 23:53:13 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Much prettier auth page with simple green vs red buttons to confirm/reject. (When you authorize a 3rd-party app; cf <a href=\"http://beeminder.com/apps\">beeminder.com/apps</a>)",
"u": "https://twitter.com/beemuvi/status/567469096522883072",
"t": "2015-02-16 23:42:30 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "If you weaselproof yourself you can no longer edit data or add it via the email bot for autodata goals. #closingloopholes HT <a href=\"https://twitter.com/joeymac1981\">@joeymac1981</a>",
"u": "https://twitter.com/beemuvi/status/567845314645770240",
"t": "2015-02-18 00:37:27 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "In graph hovertext, bot emails, etc, safety buffer now refers to approximate number of days till derailment, not confusingly that minus one",
"u": "https://twitter.com/beemuvi/status/568209807934558209",
"t": "2015-02-19 00:45:49 +0000",
}, /*************************************************************************/ {
"x": "Consistent grammar/orthography (\"beeswax\", \"e.g., foo\" not \"e.g. foo\", \"~N days until\" in retroratchet), iOS favicon. HT Nick Head #mini ×4",
"u": "https://twitter.com/beemuvi/status/568553230986129408",
"t": "2015-02-19 23:30:28 +0000",
}, /*************************************************************************/ {
"x": "Important #bugfix in API's roadall (1 of 3): We were ignoring rate units (runits) for roadall and treating it as if it was always days",
"u": "https://twitter.com/beemuvi/status/568925193466310656",
"t": "2015-02-21 00:08:30 +0000",
}, /*************************************************************************/ {
"x": "Roadall #bugfix (2 of 3): Discontinuities in the road weren't handled right, led to rejection of road changes that should've been allowed",
"u": "https://twitter.com/beemuvi/status/568925237602947072",
"t": "2015-02-21 00:08:41 +0000",
}, /*************************************************************************/ {
"x": "Roadall #bugfix (3 of 3): Floating point comparison bug: rejected resubmission of unchanged road matrices! HT <a href=\"https://twitter.com/instigate_it\">@instigate_it</a> <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a>",
"u": "https://twitter.com/beemuvi/status/568925318712467456",
"t": "2015-02-21 00:09:00 +0000",
}, /*************************************************************************/ {
"x": "Moved list of 3rd party apps you've authorized to access your beeswax (Beeminder data) into user settings so it's actually discoverable now",
"u": "https://twitter.com/beemuvi/status/570013388408926208",
"t": "2015-02-24 00:12:36 +0000",
}, /*************************************************************************/ {
"x": "Also linked <a href=\"http://beeminder.com/apps\">beeminder.com/apps</a> and <a href=\"http://beeminder.com/apps/new\">beeminder.com/apps/new</a> and <a href=\"http://beeminder.com/settings/apps\">beeminder.com/settings/apps</a> to each other. HT <a href=\"http://twitter.com/Malcolm_Ocean\">@Malcolm_Ocean</a>",
"u": "https://twitter.com/beemuvi/status/570013458319548417",
"t": "2015-02-24 00:12:53 +0000",
}, /*************************************************************************/ {
"x": "Finally there's a button to regenerate your personal auth token in the advanced account settings page (where we show it to you)",
"u": "https://twitter.com/beemuvi/status/570013886121771008",
"t": "2015-02-24 00:14:35 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "A new aggday type: triangle (sum*(sum+1)/2). Described in a <a href=\"http://forum.beeminder.com/t/triangular-beeminding-for-tracking-alcohol-consumption/543\">forum thread</a>. Huge HT <a href=\"http://twitter.com/DRMacIver\">@DRMacIver</a>.",
"u": "https://twitter.com/beemuvi/status/571044392598786048",
"t": "2015-02-26 20:29:27 +0000",
}, /*************************************************************************/ {
"x": "From Jan 30 to Feb 26 HabitRPG goal creation gave cryptic errors in place of graph image at first (tho goal got created) #bugfix",
"u": "https://twitter.com/beemuvi/status/571465614402826240",
"t": "2015-02-28 00:23:14 +0000",
}, /*************************************************************************/ {
"x": "Explanatory text and visual improvements in <a href=\"http://beeminder.com/apps\">beeminder.com/apps</a>. HT <a href=\"http://twitter.com/instigate_it\">@instigate_it</a> who's been a huge help with API hacking lately.",
"u": "https://twitter.com/beemuvi/status/571834656456245248",
"t": "2015-03-01 00:49:40 +0000",
}, /*************************************************************************/ ]

var batch2015mar = [
{
"n": 1470,
"x": "Added hint \"(Did you mix up auth_token and access_token?)\" to an API error message and added two more aggday functions: square and clocky",
"u": "https://twitter.com/beemuvi/status/572167884161433600",
"t": "2015-03-01 22:53:48 +0000",
"c": "This was originally #1474 and there may be a link to it as such, but probably not. #SCHDEL",
}, /*************************************************************************/ {
"x": "To catch infinite loops w/ our new (beta only still) IFTTT triggers (or other autodata schemes) there's now a cap of 144 datapoints per day",
"u": "https://twitter.com/beemuvi/status/572550348054773760",
"t": "2015-03-03 00:13:35 +0000",
}, /*************************************************************************/ {
"x": "Important #bugfix in drawing the graph after a derailment where it could fail to <a href=\"http://blog.beeminder.com/glossary/#flatline\">flatline</a> past the derail day",
"u": "https://twitter.com/beemuvi/status/572919542025854977",
"t": "2015-03-04 00:40:37 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Now over-achievers can have every day be an eep day too! (on Do More goals, set 'Max Safety' to 0 just like manual ratchets) #planbeeperqs",
"u": "https://twitter.com/beemuvi/status/573262865777356800",
"t": "2015-03-04 23:24:52 +0000",
}, /*************************************************************************/ {
"x": "Datapoints + centerline of YBR now show on top of bull's eye. #mini (And so many improvements to Garmin &amp; IFTTT; contact us to beta-test!)",
"u": "https://twitter.com/beemuvi/status/573347405812260865",
"t": "2015-03-05 05:00:48 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Subject lines of legit check emails are now like \"paying $X, now pledging $Y on bob/foo: beeminder legitimacy check\" (key info up front)",
"u": "https://twitter.com/beemuvi/status/573637243702616064",
"t": "2015-03-06 00:12:31 +0000",
}, /*************************************************************************/ {
"x": "Fixed the Epson \"this data is autogenerated\" link: now specifies whether you created goal with Pulsense vs Runsense #mini",
"u": "https://twitter.com/beemuvi/status/573640148274913280",
"t": "2015-03-06 00:24:03 +0000",
}, /*************************************************************************/ {
"x": "Discovered we were silently failing on Fitbit oauth errors: now puts up a banner letting you know what's up. #bugfix",
"u": "https://twitter.com/beemuvi/status/573640397190078464",
"t": "2015-03-06 00:25:03 +0000",
}, /*************************************************************************/ {
"x": "Made the API's create_all call (for adding datapoints) a bit more robust/accepting, as <a href=\"http://forum.beeminder.com/t/http-500-for-create-all-json/558/2\">Bee explains</a>",
"u": "https://twitter.com/beemuvi/status/575070478382993408",
"t": "2015-03-09 23:07:40 +0000",
}, /*************************************************************************/ {
"x": "Added Epson to bmndr.com/start (had it on front page but forgot it here) &amp; auto-update the verb in the form, eg \"i pledge to sleep\" vs \"to train\"",
"u": "https://twitter.com/beemuvi/status/575072075594887169",
"t": "2015-03-09 23:14:01 +0000",
}, /*************************************************************************/ {
"x": "Tweaked legit check copy (\"Any other technicalities or even just confusion about the rules?\" and PS about pledge stepdown) #mini",
"u": "https://twitter.com/beemuvi/status/575072352066654209",
"t": "2015-03-09 23:15:07 +0000",
"c": "\"P.S. Pro tip: drop your pledge back down with the arrows above your graph.\"",
}, /*************************************************************************/ {
"f": true,
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Beeminder launches official <a href=\"https://twitter.com/GarminFitness\">@GarminFitness</a> integration! http://blog.beeminder.com/garmin",
"u": "https://twitter.com/bmndr/status/575313943004114944",
"t": "2015-03-10 15:15:07 +0000",
}, /*************************************************************************/ {
"x": "Fixed bugs w/ watermarks on graph thumbnails, and maybe now they're bigger and so more readable from the thumbnails (<a href=\"http://forum.beeminder.com/t/thumbnail-shows-what-looks-like-the-wrong-time/572\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/575735921544314880",
"t": "2015-03-11 19:11:55 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: Another aggday function: count; copy tweak for reminder settings; new robots.txt (not that human users should care) #mini ×3",
"u": "https://twitter.com/beemuvi/status/576892067118362624",
"t": "2015-03-14 23:46:01 +0000",
}, /*************************************************************************/ {
"x": "Use user's timezone in comment 'Auto-entered by Garmin at TIME' &amp; fixed link by recent data \"this data is autogenerated by ...\" #mini ×2",
"u": "https://twitter.com/beemuvi/status/576892293166211072",
"t": "2015-03-14 23:46:55 +0000",
}, /*************************************************************************/ {
"x": "Updated a banner from \"email settings updated\" to just \"reminder settings updated\" cuz you can update sms reminders there too #mini",
"u": "https://twitter.com/beemuvi/status/576892548997718019",
"t": "2015-03-14 23:47:56 +0000",
}, /*************************************************************************/ {
"x": "Had a bug with sometimes missing data from Garmin's pushed data. Now periodically check for missed data #bugfix HT <a href=\"http://janabeck.com/\">Jana Beck</a>",
"u": "https://twitter.com/beemuvi/status/577958268300996609",
"t": "2015-03-17 22:22:43 +0000",
}, /*************************************************************************/ {
"x": "Bugfix in the SMS bot: in multi-line SMS, if there's a blank line in the middle we'd 500. Now politely skip them instead. #bugfix",
"u": "https://twitter.com/beemuvi/status/578312537608822784",
"t": "2015-03-18 21:50:28 +0000",
}, /*************************************************************************/ {
"x": "Our timezone info was out of date (eg, Moscow stopped summertime sometime recentlyish); updated the tzinfo gem for latest timezones. #mini",
"u": "https://twitter.com/beemuvi/status/578314399397519360",
"t": "2015-03-18 21:57:52 +0000",
}, /*************************************************************************/ {
"x": "Brief bug w/ the email template for \"your credit card failed\" emails when we retried a charge that caused us to not send the emails #bugfix [for ~1 week]",
"u": "https://twitter.com/beemuvi/status/579024927539384320",
"t": "2015-03-20 21:01:15 +0000",
}, /*************************************************************************/ {
"x": "Our Jawbone goal wizard said \"pounds\" when in fact weight data from Jawbone seems to be only KGs #bugfix (<a href=\"http://forum.beeminder.com/t/jawbone-weight-goal-is-confused-about-units/576\">forum thread about Jawbone weight goal being confused about units</a>) HT claudine",
"u": "https://twitter.com/beemuvi/status/579395688779227136",
"t": "2015-03-21 21:34:31 +0000",
}, /*************************************************************************/ {
"x": "Half (or more) of scroll-to-locations in autodata landing pages weren't scroll-to-ing (draftin, codeschool, trello). #bugfix",
"u": "https://twitter.com/beemuvi/status/579775056051597313",
"t": "2015-03-22 22:41:59 +0000",
}, /*************************************************************************/ {
"x": "Broke and then fixed the confirmation emails for new users signing up. #mini #bugfix (a net-zero UVI but it counts! (related to Science!))",
"u": "https://twitter.com/beemuvi/status/580149168754192384",
"t": "2015-03-23 23:28:35 +0000",
}, /*************************************************************************/ {
"x": "New advanced setting to hide y-axis numbers, like if you want to share your weight loss progress but not your weight (<a href=\"http://beeminder.uservoice.com/forums/3011-general/suggestions/2286463-have-an-option-for-sharing-graphs-without-the-numb\">forum thread about sharing graphs without the numbers</a>)",
"u": "https://twitter.com/beemuvi/status/580451889239724034",
"t": "2015-03-24 19:31:29 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"http://beeminder.com/featured\">Beeminder.com/featured</a> was breaking if someone with no datapoints added themselves #bugfix #mini",
"u": "https://twitter.com/beemuvi/status/580874210169397249",
"t": "2015-03-25 23:29:38 +0000",
}, /*************************************************************************/ {
"x": "<a href=\"http://gitminder.com\">Gitminder.com</a> form was not redirecting back to the landing page after authenticating #bugfix",
"u": "https://twitter.com/beemuvi/status/581001989166764033",
"t": "2015-03-26 07:57:23 +0000",
"c": "Still need general fix for \"redirects omg\"",
}, /*************************************************************************/ {
"x": "Email bot reminders for goals w/ data fed from our Epson integration now are specific to the kind of goal (running/steps/sleep) #mini",
"u": "https://twitter.com/beemuvi/status/581574047969853440",
"t": "2015-03-27 21:50:32 +0000",
}, /*************************************************************************/ {
"x": "Added Garmin to the front page and added links to the <a href=\"http://beeminder.com/garmin\">beeminder.com/garmin</a> landing page. #mini",
"u": "https://twitter.com/beemuvi/status/582045098927472640",
"t": "2015-03-29 05:02:20 +0000",
}, /*************************************************************************/ {
"x": "We were showing the \"you really should add a credit card\" banner thing when not logged in. HT <a href=\"https://twitter.com/DRMacIver\">@DRMacIver</a> &amp; <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a> #mini #bugfix",
"u": "https://twitter.com/beemuvi/status/582410853959385089",
"t": "2015-03-30 05:15:42 +0000",
}, /*************************************************************************/ {
"x": "There was an error in Epson sleep goals causing us to double-count time (in Epson's API, end dates are inclusive) #bugfix",
"u": "https://twitter.com/beemuvi/status/582690664460079104",
"t": "2015-03-30 23:47:34 +0000",
}, /*************************************************************************/ {
"x": "Beebrain #mini #bugfix: tmin defaults to min(tini,asof), in case you want your YBR to start in the future for some reason. HT <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a>",
"u": "https://twitter.com/beemuvi/status/583055165881606144",
"t": "2015-03-31 23:55:58 +0000",
}, /*************************************************************************/ ]

var batch2015apr = [
{
"x": "The API now supports upsert. Set upsert=true (and include a requestid) for create datapoint, and it creates or updates. HT <a href=\"http://complice.co\">Malcolm Ocean</a>",
"u": "https://twitter.com/beemuvi/status/583413017523527680",
"t": "2015-04-01 23:37:57 +0000",
}, /*************************************************************************/ {
"x": "Now upsert works without needing an \"upsert\" parameter. Way better. POST a datapoint w/ requestid, it returns CREATED, UPDATED, or DUPLICATE",
"u": "https://twitter.com/beemuvi/status/583773595639259137",
"t": "2015-04-02 23:30:45 +0000",
}, /*************************************************************************/ {
"x": "Gmailzero goals no longer do the hideous hack of adding a dummy datapoint for yesterday to make the start of the road stay put",
"u": "https://twitter.com/beemuvi/status/584107586334535680",
"t": "2015-04-03 21:37:55 +0000",
}, /*************************************************************************/ {
"x": "More prettying/concising of the \"allow this app to access your beeswax\" page (UVI#1457), and blog post authors back on front page",
"u": "https://twitter.com/beemuvi/status/584475725396193280",
"t": "2015-04-04 22:00:46 +0000",
}, /*************************************************************************/ {
"x": "API #bugfix: when using \"me\" param in place of username, and getting a 404, we'd give a weird error (\"you're logged in as...\") HT <a href=\"https://twitter.com/DRMacIver\">@DRMacIver</a>",
"u": "https://twitter.com/beemuvi/status/584795875240615936",
"t": "2015-04-05 19:12:56 +0000",
}, /*************************************************************************/ {
"x": "When a goal that's counting down to being archived derails, we were incorrectly saying \"paying/repledging\" in the legit check. #bugfix",
"u": "https://twitter.com/beemuvi/status/585180374755577856",
"t": "2015-04-06 20:40:48 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "iOS app 3.2! You can add a Beeminder widget to the Today view; shows up to 3 goals in urgency order, plus bare min needed if beemergency",
"u": "https://twitter.com/beemuvi/status/585520727203405824",
"t": "2015-04-07 19:13:14 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Also in Beeminder iOS app 3.2: Robuster push notifications (robust to device token expiration or connection flakeout) + other bug fixes",
"u": "https://twitter.com/beemuvi/status/585520992908357634",
"t": "2015-04-07 19:14:17 +0000",
}, /*************************************************************************/ {
"x": "Documented upsert in <a href=\"http://beeminder.com/api\">beeminder.com/api</a> and made a best-of collection of Beeminder blog posts: <a href=\"http://blog.beeminder.com/tag/best-of\">blog.beeminder.com/tag/best-of</a>",
"u": "https://twitter.com/beemuvi/status/585521293476438017",
"t": "2015-04-07 19:15:29 +0000",
}, /*************************************************************************/ {
"x": "Blurb below Allow/Cancel buttons: \"We call this 'accessing your beeswax'. You can revoke access any time in Settings → Apps [link/tooltip].\"",
"u": "https://twitter.com/beemuvi/status/585837289646985217",
"t": "2015-04-08 16:11:08 +0000",
}, /*************************************************************************/ {
"x": "Now allow new GmailZero goal if old is archived. Fixed unique slug error. Missing error messages on GmailZero landing page. HT <a href=\"https://twitter.com/carlcoryell\">@carlcoryell</a>",
"u": "https://twitter.com/beemuvi/status/586923139327635456",
"t": "2015-04-11 16:05:55 +0000",
}, /*************************************************************************/ {
"x": "Rare bug w/ autoratchet=0 &amp; goal end date: we ratcheted w/out checking end date, yielding enddate++ every day. #bugfix HT <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a>",
"u": "https://twitter.com/beemuvi/status/587362707134750722",
"t": "2015-04-12 21:12:36 +0000",
}, /*************************************************************************/ {
"x": "Related #bugfix: rare infinite loop trying to recommit you when ending a goal in the red (added explicit check for \"goal recommitable?\")",
"u": "https://twitter.com/beemuvi/status/587362809375105024",
"t": "2015-04-12 21:13:01 +0000",
"c": "Does not happen every time, so I'm not sure exactly why this sometimes happened, but I just added the explicit date check to the \"is this goal recommitable?\" condition",
}, /*************************************************************************/ {
"x": "API #bugfix: requestids should only be checked for uniqueness within the goal, not all the user's goals. HT <a href=\"http://complice.co\">Malcolm Ocean</a>",
"u": "https://twitter.com/beemuvi/status/588123516291194880",
"t": "2015-04-14 23:35:47 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: typo fix in API docs (\"reqeustid\") + upsert works for create_all now as well. #mini ×2 HT <a href=\"http://complice.co\">Malcolm Ocean</a>",
"u": "https://twitter.com/beemuvi/status/588477927148417024",
"t": "2015-04-15 23:04:05 +0000",
}, /*************************************************************************/ {
"x": "Timestamp for datapoint POST now defaults to Now, OR whatever the existing timestamp is, if it's being updated. HT <a href=\"http://complice.co\">Malcolm Ocean</a> yet again",
"u": "https://twitter.com/beemuvi/status/588839328270266369",
"t": "2015-04-16 23:00:10 +0000",
}, /*************************************************************************/ {
"x": "Transition to OAuth2 for GmailZero! (Alert in bot emails to re-auth, new goals now use oauth2 (not sketchy \"this is unsupported\" oauth1))",
"u": "https://twitter.com/beemuvi/status/589214581043507200",
"t": "2015-04-17 23:51:17 +0000",
}, /*************************************************************************/ {
"x": "Large inboxes work, no more \"you have more than 1000 messages\"; you can query \"in:inbox AND is:read\" in Gmail to see what Beeminder'll count",
"u": "https://twitter.com/beemuvi/status/589214724966916098",
"t": "2015-04-17 23:51:52 +0000",
}, /*************************************************************************/ {
"x": "Show the actual email address that you're authed with again at <a href=\"http://gmailzero.com\">GmailZero.com</a> #bugfix related to the GmailZero OAuth1&rarr;2 transition",
"u": "https://twitter.com/beemuvi/status/589934967553073152",
"t": "2015-04-19 23:33:51 +0000",
}, /*************************************************************************/ {
"x": "GmailZero OAuth1 is now dead! Added error banner if no OAuth2; include \"reauthorize us\" alert in GmailZero zenos (in addition to reminders)",
"u": "https://twitter.com/beemuvi/status/590297935742570497",
"t": "2015-04-20 23:36:09 +0000",
}, /*************************************************************************/ {
"x": "The \"Are you sure you want to remove this service option?\" in beeminder.com/services didn't let you actually cancel! #bugfix HT Sean Fellows",
"u": "https://twitter.com/beemuvi/status/590661209495572482",
"t": "2015-04-21 23:39:40 +0000",
}, /*************************************************************************/ {
"x": "Fixed dates in datapoint export: off-by-1 in some instances because we weren't using new daystamp from Arbitrary Deadlines refactor #bugfix",
"u": "https://twitter.com/beemuvi/status/591019575463911424",
"t": "2015-04-22 23:23:42 +0000",
}, /*************************************************************************/ {
"x": "One more GmailZero OAuth #bugfix: handful of people got a 500 error trying to reauthorize (stuff with expiring/revoking/refreshing tokens)",
"u": "https://twitter.com/beemuvi/status/591376799751229440",
"t": "2015-04-23 23:03:10 +0000",
}, /*************************************************************************/ {
"x": "Dumb #mini #bugfix: typo in link to fix your auth if we got permission errors trying to fetch your Sleep as Android data (was 404ing)",
"u": "https://twitter.com/beemuvi/status/591737671971549184",
"t": "2015-04-24 22:57:09 +0000",
}, /*************************************************************************/ {
"x": "Garmin (&amp; IFTTT) autodata pushes were failing if their JSON had non-ascii characters. #bugfix Also an infrahancement [<a href=\"https://twitter.com/beeminfra/status/586575255377874944\">infra</a>]",
"u": "https://twitter.com/beemuvi/status/592064344352952321",
"t": "2015-04-25 20:35:14 +0000",
}, /*************************************************************************/ {
"x": "More GmailZero #bugfix's: failed to add a datapoint if 0 messages, failed to handle pagination &amp; count more than 100 threads",
"u": "https://twitter.com/beemuvi/status/592421147712454656",
"t": "2015-04-26 20:13:02 +0000",
"c": "Then there was yet another UVI we're not counting where we made it actually count up all the threads instead of using gmail's estimate",
}, /*************************************************************************/ {
"x": "Now simpler to beemind multiple languages on Duolingo: we retry and wait 3 days before giving up if no points found for your language",
"u": "https://twitter.com/beemuvi/status/592816048061206528",
"t": "2015-04-27 22:22:14 +0000",
}, /*************************************************************************/ {
"x": "Copyediting pass through the API docs: mention idempotency, better/clearer links, tighter prose, cuteness, etc. <a href=\"http://beeminder.com/api\">beeminder.com/api</a>",
"u": "https://twitter.com/beemuvi/status/593199408067391488",
"t": "2015-04-28 23:45:34 +0000",
}, /*************************************************************************/ {
"x": "GmailZero counts the min of the day but we now show, in the comment of the last datapoint, the actual last count fetched. Demystifying!",
"u": "https://twitter.com/beemuvi/status/593359289349120001",
"t": "2015-04-29 10:20:53 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "A GmailZero improvement so momentous we blogged about it: beemind arbitrary queries! <a href=\"http://blog.beeminder.com/gmailzeroer\">blog.beeminder.com/gmailzeroer</a>",
"u": "https://twitter.com/beemuvi/status/593371882805538816",
"t": "2015-04-29 11:10:55 +0000",
}, /*************************************************************************/ {
"x": "If there's an error w/ a client application's \"post deauthorize callback\", email the actual app owner so they can do something about it.",
"u": "https://twitter.com/beemuvi/status/593551337062670336",
"t": "2015-04-29 23:04:01 +0000",
}, /*************************************************************************/ ]

var batch2015may = [
{
"x": "Seeming bug in Gmail's API returning spurious empty messages that we're working around now by disregarding. So less overcounting. #bugfix",
"u": "https://twitter.com/beemuvi/status/594240906468831232",
"t": "2015-05-01 20:44:07 +0000",
}, /*************************************************************************/ {
"x": "On the outstanding charges page, when you update your credit card, don't keep saying \"...when you update your credit card...\" HT Robin Ryder (<a href=\"http://twitter.com/Pruneau\">@Pruneau</a>)",
"u": "https://twitter.com/beemuvi/status/594956154054184960",
"t": "2015-05-03 20:06:15 +0000",
"c": "Robin Ryder (@Pruneau) suggested: \"Thank you for updating your card. The following charges are outstanding and will now be retried.\"",
}, /*************************************************************************/ {
"f": true,
"x": "FEATURE: Added \"Total Calories Eaten\" to the things you can beemind with Fitbit",
"u": "https://twitter.com/beemuvi/status/595373731544891392",
"t": "2015-05-04 23:45:33 +0000",
"c": "Prefacing features with FEATURE and bugfixes with BUGFIX might be a good idea if we did it consistently...",
}, /*************************************************************************/ {
"x": "BUGFIX: Safety buffer off-by-one in bot reminder copy that says \"in the red!\" vs \"in the wrong lane!\" [and prefixes over hashtags? yay/nay?] #bugfix",
"u": "https://twitter.com/beemuvi/status/595730799246323714",
"t": "2015-05-05 23:24:25 +0000",
}, /*************************************************************************/ {
"x": "OLDIE: Zapier button + regular refresh button for Zapier goals to run your Zap manually when working down to the wire (also better tooltip)",
"u": "https://twitter.com/beemuvi/status/596100441814933505",
"t": "2015-05-06 23:53:14 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "FEATURE: You can now create multiple GmailZero goals (for the same Gmail account). Just name each goal you create at <a href=\"http://gmailzero.com\">gmailzero.com</a>",
"u": "https://twitter.com/beemuvi/status/596463331768020992",
"t": "2015-05-07 23:55:14 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "RT <a href=\"https://twitter.com/bmndr\">@bmndr</a>: Announcement! Beeminder is an official <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> Channel! So many things to automatically beemind... <a href=\"http://blog.beeminder.com/ifttt\">blog.beeminder.com/ifttt</a>",
"u": "https://twitter.com/bmndr/status/596770934209511424",
"t": "2015-05-08 20:17:32 +0000",
}, /*************************************************************************/ {
"x": "Fancy landing page for our IFTTT Channel at <a href=\"http://ifthisMINDthat.com\">ifthisMINDthat.com</a> (and did we mention we published 57 Recipes that use Beeminder?)",
"u": "https://twitter.com/beemuvi/status/596801187791261696",
"t": "2015-05-08 22:17:45 +0000",
}, /*************************************************************************/ {
"x": "So many other IFTTT-related UVIs we haven't been able to tweet til now: specifying IFTTT as autodata source, button for manual refresh, etc",
"u": "https://twitter.com/beemuvi/status/596801379496165376",
"t": "2015-05-08 22:18:31 +0000",
}, /*************************************************************************/ {
"x": "IF you delete/archive a goal that an IFTTT recipe is trying to send data to THEN we send a nice email explaining why the recipe's failing",
"u": "https://twitter.com/beemuvi/status/596801591073644544",
"t": "2015-05-08 22:19:22 +0000",
}, /*************************************************************************/ {
"x": "Rearranged autodata integration icons on the front page, added IFTTT (still catching breath from the launch, which was like 57 UVIs in 1!) #mini",
"u": "https://twitter.com/beemuvi/status/598253998143995904",
"t": "2015-05-12 22:30:42 +0000",
}, /*************************************************************************/ {
"x": "In Trello integration, use latest datapoint, not a 0 when we can't reach Trello's API, otherwise you get unwanted odometer reset. #bugfix",
"u": "https://twitter.com/beemuvi/status/598596393050091522",
"t": "2015-05-13 21:11:16 +0000",
}, /*************************************************************************/ {
"x": "Fixed 500 error in API when no goal provided. #bugfix (first verify parameters, *then* find the goal!) See <a href=\"https://twitter.com/beeminfra/status/598998892735135744\">previous infrahancement</a>",
"u": "https://twitter.com/beemuvi/status/598999176328794114",
"t": "2015-05-14 23:51:47 +0000",
}, /*************************************************************************/ {
"x": "FEATURE: Under the thumbnails in the gallery we now show how much is due, not just when",
"u": "https://twitter.com/beemuvi/status/599300616511299584",
"t": "2015-05-15 19:49:36 +0000",
}, /*************************************************************************/ {
"x": "Relatedly, the Quick Add box now actually causes the amounts under the thumbnail to update immediately. (<a href=\"http://forum.beeminder.com/t/quick-add-doesnt-update-the-text-part/735\">forum discussion</a>) #bugfix",
"u": "https://twitter.com/beemuvi/status/599323297675776001",
"t": "2015-05-15 21:19:43 +0000",
}, /*************************************************************************/ {
"x": "Fixed the blurb under the thumbnails for Do Less goals so they don't give a deadline (which was confusing anyway) and just say today's limit",
"u": "https://twitter.com/beemuvi/status/600078722507517954",
"t": "2015-05-17 23:21:31 +0000",
}, /*************************************************************************/ {
"x": "Do Less roads had wrong initial width implying you cd go hog wild on day 1 only to say \"jk ur in the red\" on day 2 #bugfix HT <a href=\"https://twitter.com/noackstefan\">@noackstefan</a>",
"u": "https://twitter.com/beemuvi/status/600435366169042944",
"t": "2015-05-18 22:58:41 +0000",
"c": "Use tini/vini for do less goals' initial safety buffer. Old way caused the road width to be 2x \"true\" width for the first day, so your Hard Limit numbers were kind of a lie. we'd been using a road row to jump the road because it was implemented before tini vini.",
}, /*************************************************************************/ {
"x": "Safe days IFTTT Trigger had a bug that made it trigger twice if deadline after midnight and still in the red down to the wire. #bugfix HT <a href=\"http://twitter.com/rhitsqueaky\">@rhitsqueaky</a>",
"u": "https://twitter.com/beemuvi/status/600768845523980288",
"t": "2015-05-19 21:03:49 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Macros you can use in IFTTT recipes to turn not-strictly-numeric Ingredients to beemindable numbers (<a href=\"http://forum.beeminder.com/t/ifttt-macros/804\">forum discussion</a>) (eg time-of-day)",
"u": "https://twitter.com/beemuvi/status/601174082541977601",
"t": "2015-05-20 23:54:05 +0000",
}, /*************************************************************************/ {
"x": "Mini UVI: Now truncate instead of wrap long usernames in <a href=\"http://beeminder.com/services\">beeminder.com/services</a> (keeps them all nice and neat and uniform size)",
"u": "https://twitter.com/beemuvi/status/601522737861898240",
"t": "2015-05-21 22:59:31 +0000",
}, /*************************************************************************/ {
"x": "We added swimming as an activity to beemind in our RunKeeper integration. HT Emilie Lostis",
"u": "https://twitter.com/beemuvi/status/601895550665904128",
"t": "2015-05-22 23:40:56 +0000",
}, /*************************************************************************/ {
"x": "We did this a long time ago (buzzing infinibee, UVI#971) then partially broke it. Should now consistently time out. #bugfix",
"u": "https://twitter.com/beemuvi/status/602250658088030208",
"t": "2015-05-23 23:12:00 +0000",
"c": "Sadness because there's still periods of extreme slowness for this to happen in the first place. There's probably a way to word this that sounds more positive.",
}, /*************************************************************************/ {
"x": "Now always email you if an IFTTT Recipe's trying to find a missing goal; were only doing so for Add Datapoint Action, not Triggers. #bugfix",
"u": "https://twitter.com/beemuvi/status/602256243562971136",
"t": "2015-05-23 23:34:12 +0000",
}, /*************************************************************************/ {
"x": "We missed cases of notifying you on missing goals, namely <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> Recipe triggering on beemergency or safe days on a specific goal. #bugfix",
"u": "https://twitter.com/beemuvi/status/603085384075988993",
"t": "2015-05-26 06:28:55 +0000",
"c": "orig: handled missing goal for add datapoint Action; prev UVI: handled missing goal for add datapoint Trigger; new UVI: handle missing goal for beemergency safebuf Trigger",
}, /*************************************************************************/ {
"x": "Our IFTTT macros can now be nested! (<a href=\"http://forum.beeminder.com/t/ifttt-macros/804/19\">forum discussion</a>)",
"u": "https://twitter.com/beemuvi/status/603336679932370944",
"t": "2015-05-26 23:07:28 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: don't try to pluralize the goal units in the default y-axis string, fixed broken link in <a href=\"http://beeminder.com/legalschmegal\">beeminder.com/legalschmegal</a> #mini ×2",
"u": "https://twitter.com/beemuvi/status/603686534982819843",
"t": "2015-05-27 22:17:40 +0000",
}, /*************************************************************************/ {
"x": "Similar to the gallery blurbs for Do Less goals, non-autosumming (and w/o odom reset feature) goals now show the absolute bare min, not delta",
"u": "https://twitter.com/beemuvi/status/604064764965191681",
"t": "2015-05-28 23:20:37 +0000",
"c": "https://www.dropbox.com/s/ttg756ot309ekev/Screenshot%202015-05-21%2010.21.20.png?dl=0 HT sean fellows (drtall) gusthecorgi.com",
}, /*************************************************************************/ {
"f": true,
"x": "Official <a href=\"https://twitter.com/Misfit\">@Misfit</a> integration! Our blog post here: <a href=\"http://blog.beeminder.com/misfit\">blog.beeminder.com/misfit</a> -- and look at us in their partner gallery: <a href=\"https://build.misfit.com/partners\">build.misfit.com/partners</a>",
"u": "https://twitter.com/beemuvi/status/604428755935719424",
"t": "2015-05-29 23:26:59 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Misfit integration features: beemind amount of sleep or steps. Option to import last month's worth of data when you create the goal.",
"u": "https://twitter.com/beemuvi/status/604428857031036928",
"t": "2015-05-29 23:27:23 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Finally, we use Misfit's push API so Beeminder updates your graph (roughly) as soon you sync your Shine/Flash",
"u": "https://twitter.com/beemuvi/status/604431870760075264",
"t": "2015-05-29 23:39:22 +0000",
"c": "When/why do you have to refresh on Beeminder? you shouldn't in theory. though i don't know *how* quickly they push data out. There might be a delay? like IFTTT 'automatically' syncs, but you still have to wait 16 minutes",
}, /*************************************************************************/ ]

var batch2015jun = [
{
"x": "Have lots of goals/datapoints? Should see up to 50% faster syncs in the Android app (was partly responsible for server issues last week too)",
"u": "https://twitter.com/beemuvi/status/605508429650624513",
"t": "2015-06-01 22:57:14 +0000",
"c": "API users controller is still one of the slowest transactions, but now the slow calls are ~600ms as opposed to ~3000ms",
}, /*************************************************************************/ {
"x": "Goals with deadline after midnight would wind up with datapoints off-by-one-day if you re-scaled them (bottom of advanced settings) #bugfix",
"u": "https://twitter.com/beemuvi/status/605868166934204417",
"t": "2015-06-02 22:46:42 +0000",
}, /*************************************************************************/ {
"x": "The API's roadall was giving a 0 timestamp in the final row instead of null when value and rate (but not goaldate) were specified. #bugfix",
"u": "https://twitter.com/beemuvi/status/606245097160581120",
"t": "2015-06-03 23:44:29 +0000",
}, /*************************************************************************/ {
"x": "Now the hard cap / bare min numbers show *both* deltas and absolutes; this is kind of terrible but better than the previous mess we made",
"u": "https://twitter.com/beemuvi/status/606600362791870464",
"t": "2015-06-04 23:16:11 +0000",
}, /*************************************************************************/ {
"x": "Small improvement to iOS EEP alerts: \"+X due by DEADLINE\" (was \"by end of day\" but that's changeable)",
"u": "https://twitter.com/beemuvi/status/606952672835411969",
"t": "2015-06-05 22:36:08 +0000",
"c": "These are scheduled based on \"Sort Threshold\" (see Terrifyingly Advanced settings) but we're deprecating that",
}, /*************************************************************************/ {
"x": "Added a helpful table of upcoming week's worth of Bare Mins (or Hard Caps) to the sidebar of your goal!",
"u": "https://twitter.com/beemuvi/status/606953167629074432",
"t": "2015-06-05 22:38:06 +0000",
}, /*************************************************************************/ {
"x": "When you choose \"hide y-axis\" (for people who want to show off their graph but not the numbers) we now suppress the bare min etc numbers too",
"u": "https://twitter.com/beemuvi/status/607779973881950209",
"t": "2015-06-08 05:23:32 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Got rid of most of the confusing baremin/hardcap numbers above graph, since we have the Helpful Table; now just 2 confusing numbers up there",
"u": "https://twitter.com/beemuvi/status/608175244705005568",
"t": "2015-06-09 07:34:12 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Official Skritter integration! <a href=\"http://blog.beeminder.com/skritter\">blog.beeminder.com/skritter</a>",
"u": "https://twitter.com/beemuvi/status/608367332684124160",
"t": "2015-06-09 20:17:29 +0000",
}, /*************************************************************************/ {
"x": "Made hard cap / bare min numbers and the table in the sidebar update live when you add new data",
"u": "https://twitter.com/beemuvi/status/608850510200733696",
"t": "2015-06-11 04:17:28 +0000",
}, /*************************************************************************/ {
"x": "Fixed a confusing bug with the baremin/hardcap table that could cause the values to be nonmonotone if there were upcoming kinks in the road",
"u": "https://twitter.com/beemuvi/status/608850818230452224",
"t": "2015-06-11 04:18:41 +0000",
}, /*************************************************************************/ {
"x": "New stats in sidebar: both daily and weekly rate (as of today, as opposed to road dial which gives it as of akrasia horizon) plus average rate",
"u": "https://twitter.com/beemuvi/status/608851368527339520",
"t": "2015-06-11 04:20:52 +0000",
}, /*************************************************************************/ {
"x": "We forgot to respect the user's deadline in the Due By table. Now the listed days are defined to end at whatever your deadline is. #bugfix",
"u": "https://twitter.com/beemuvi/status/608852673232699392",
"t": "2015-06-11 04:26:03 +0000",
"c": "Case for \"yesterday\" in helpful table: this happens if table is out of date, e.g. just after the day rolls over and before the goal is refreshed.",
}, /*************************************************************************/ {
"x": "Added nice tooltips explaining the new traffic light fanciness (in short: how much you need to do to get one more day of safety buffer)",
"u": "https://twitter.com/beemuvi/status/608853359273988096",
"t": "2015-06-11 04:28:47 +0000",
}, /*************************************************************************/ {
"x": "Medley of other UVIs with traffic light and table: better heading, say \"hard cap\" when apropos, deltas on mouseover, other bugfixes, tweaks",
"u": "https://twitter.com/beemuvi/status/608872340949049344",
"t": "2015-06-11 05:44:13 +0000",
"c": "Don't error if no color (e.g. goal error or new goal). chipmanaged asked for the deltas in the title text in case you've already reached the delta. fixes next_color 500 error",
}, /*************************************************************************/ {
"x": "Last one for now: We color-coded the amounts-due-by (or hard-cap-by) table. Now the new UI should unambiguously dominate the old one!",
"u": "https://twitter.com/beemuvi/status/608872670441054208",
"t": "2015-06-11 05:45:31 +0000",
}, /*************************************************************************/ {
"x": "Fixed bug in previous \"confusing\" bugfix that monotonized the table values the wrong way so all upcoming Due Less hard caps were identical",
"u": "https://twitter.com/beemuvi/status/609051889552871424",
"t": "2015-06-11 17:37:40 +0000",
}, /*************************************************************************/ {
"x": "New API parameter safebump tells you what value you need to reach to get one more day of safety buffer, in the case of Do More goals",
"u": "https://twitter.com/beemuvi/status/610550604574822401",
"t": "2015-06-15 20:53:02 +0000",
"c": "For Do Less and weight loss goals safebump is not really meaningful",
}, /*************************************************************************/ {
"x": "Tooltips on Bare Min / Hard Cap section and in the Due By table show up on click and on hover; tooltip explains Due By table",
"u": "https://twitter.com/beemuvi/status/612126986132025344",
"t": "2015-06-20 05:17:00 +0000",
}, /*************************************************************************/ {
"x": "Bugfix with Due By table and stats: now they always update on new data (before there were some cases where you had to reload the page)",
"u": "https://twitter.com/beemuvi/status/612127057904971776",
"t": "2015-06-20 05:17:18 +0000",
}, /*************************************************************************/ {
"x": "Copy tweak on graph errors (don't ask you to email support, we automatically do that and come to the rescue) + dumb bugfix w/ Do Less hardcaps",
"u": "https://twitter.com/beemuvi/status/612871322993963008",
"t": "2015-06-22 06:34:44 +0000",
"c": "Lame because it was a stupid bug and totally my fault, but fixed a bug in do less hardcap section where it was displaying like a stop sign &amp; missing the targets",
}, /*************************************************************************/ {
"x": "Broke <a href=\"https://twitter.com/duolingo\">@duolingo</a> integration last night working on custom deadlines. Fixed it this morn (&amp; fixed spurious derails; thx for the forbearance!)",
"u": "https://twitter.com/beemuvi/status/613238185867382784",
"t": "2015-06-23 06:52:31 +0000",
}, /*************************************************************************/ {
"x": "Don't include secret goals (which show up only as masked bee, because secret) in <a href=\"http://beeminder.com/featured\">beeminder.com/featured</a> and warn if you try to set secr. and feat.",
"u": "https://twitter.com/beemuvi/status/613610714276610048",
"t": "2015-06-24 07:32:49 +0000",
"c": "http://forum.beeminder.com/t/secret-featured/886",
}, /*************************************************************************/ {
"x": "Our Skritter form -- <a href=\"http://beeminder.com/skritter\">beeminder.com/skritter</a> -- is now consistent that the metric is *time* studied, not points. #mini",
"u": "https://twitter.com/beemuvi/status/613969830970916864",
"t": "2015-06-25 07:19:49 +0000",
}, /*************************************************************************/ {
"x": "#bugfix in our <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> error emails. Now provides hint as to what went wrong if a recipe sends <a href=\"https://twitter.com/bmndr\">@bmndr</a> bad data. HT <a href=\"https://twitter.com/robby1066\">@robby1066</a> of <a href=\"https://twitter.com/rescuetime\">@rescuetime</a>",
"u": "https://twitter.com/beemuvi/status/614305732771516416",
"t": "2015-06-26 05:34:34 +0000",
}, /*************************************************************************/ {
"x": "Helpful onboarding widget for newbees! (So you veterans won't see it &amp; only half of newbees will, because bucket-testing) Thx <a href=\"https://twitter.com/UserOnboard\">@UserOnboard</a>!",
"u": "https://twitter.com/beemuvi/status/614306035348549632",
"t": "2015-06-26 05:35:46 +0000",
}, /*************************************************************************/ {
"x": "Fixed contrast of tabs/navpills on the sign-up/in modal (when prompted to sign up/in from landing pages). Now you can see there're two tabs.",
"u": "https://twitter.com/beemuvi/status/614711701405982721",
"t": "2015-06-27 08:27:45 +0000",
}, /*************************************************************************/ {
"x": "Fixed <a href=\"https://twitter.com/duolingo\">@duolingo</a> redirect (was sending you from Duolingo signup to yr goals after sign-in/up). Also nicely jumps down to the \"Ready?\" anchor.",
"u": "https://twitter.com/beemuvi/status/614712054776115200",
"t": "2015-06-27 08:29:09 +0000",
}, /*************************************************************************/ {
"x": "Placeholders use \"e.g.,\" everywhere, or in some cases are just sufficiently bossy as to not be confused with actual data",
"u": "https://twitter.com/beemuvi/status/614712897260785665",
"t": "2015-06-27 08:32:30 +0000",
}, /*************************************************************************/ {
"x": "No longer allow 'remind' as a goal slug. That's a special route for reminder settings so things broke if you tried to use that name. #bugfix",
"u": "https://twitter.com/beemuvi/status/614713586493984768",
"t": "2015-06-27 08:35:14 +0000",
}, /*************************************************************************/ {
"x": "Minor #bugfix w/ default y-axis label: lost units when we fixed a pluralization thing (UVI#1557). HT @instigate_it",
"u": "https://twitter.com/beemuvi/status/615254613520855040",
"t": "2015-06-28 20:25:05 +0000",
}, /*************************************************************************/ {
"x": "Can now opt out of weight loss mannequin study. Some people don't like them because of flashing, or because they say they're creepy.",
"u": "https://twitter.com/beemuvi/status/615781201857515520",
"t": "2015-06-30 07:17:33 +0000",
}, /*************************************************************************/ {
"x": "Our Skritter integration now checks previous 4 days of data so we don't miss any time due to lag betw end of day and all time reflected API",
"u": "https://twitter.com/beemuvi/status/615784386986835968",
"t": "2015-06-30 07:30:13 +0000",
}, /*************************************************************************/ ]

var batch2015jul = [
{
"f": true,
"x": "Beeminder iPhone app 4.0! (We may've accidentally made it require iOS 8.3 instead of the intended 8.0) Faster, robuster syncing and submitting",
"u": "https://twitter.com/beemuvi/status/617627973055746048",
"t": "2015-07-05 09:35:58 +0000",
}, /*************************************************************************/ {
"x": "Beeminder iPhone app now shows the amount needed to get an extra day of safety buffer if you're already in the green",
"u": "https://twitter.com/beemuvi/status/617628168036311042",
"t": "2015-07-05 09:36:44 +0000",
}, /*************************************************************************/ {
"x": "Beeminder iPhone app has multi-column landscape view on iPhone 6 and iPad, and lets you sign in w/ your Google account",
"u": "https://twitter.com/beemuvi/status/618089980586405888",
"t": "2015-07-06 16:11:49 +0000",
}, /*************************************************************************/ {
"x": "Beeminder iPhone app (4.0) now updates the goal in the gallery immediately after updating the graph",
"u": "https://twitter.com/beemuvi/status/618090389589757952",
"t": "2015-07-06 16:13:27 +0000",
}, /*************************************************************************/ {
"x": "Beeminder iPhone app has redesigned data entry fields to help ensure correct formatting and are generally easier to use",
"u": "https://twitter.com/beemuvi/status/618091510936924160",
"t": "2015-07-06 16:17:54 +0000",
}, /*************************************************************************/ {
"x": "Beeminder iPhone app now correctly handles renamed goal slugs; and handles entering data on keyboards w/ radix \",\" instead of \".\" #bugfix ×2",
"u": "https://twitter.com/beemuvi/status/618091707297456128",
"t": "2015-07-06 16:18:41 +0000",
}, /*************************************************************************/ {
"x": "We weren't allowing for more than 1 sleep on a given day in our <a href=\"https://twitter.com/Misfit\">@Misfit</a> integration; now we make them unique by start-time, not date. #bugfix",
"u": "https://twitter.com/beemuvi/status/619751498633732096",
"t": "2015-07-11 06:14:06 +0000",
}, /*************************************************************************/ {
"x": "Imported data on new RescueTime goals now viewable if you adjust x-min to be before the import date (previously was imported but invisible)",
"u": "https://twitter.com/beemuvi/status/620151263594811392",
"t": "2015-07-12 08:42:37 +0000",
}, /*************************************************************************/ {
"x": "Added a link to IFTTT integration on <a href=\"http://beeminder.com/start\">beeminder.com/start</a> and made the links to integrations not open in new tabs (no target=blank)",
"u": "https://twitter.com/beemuvi/status/620487628333277184",
"t": "2015-07-13 06:59:13 +0000",
}, /*************************************************************************/ {
"x": "Our <a href=\"https://twitter.com/rescuetime\">@rescuetime</a> integration was giving the safety buffer option, but ignoring your pick in the case of do-less goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/620839212095385600",
"t": "2015-07-14 06:16:17 +0000",
}, /*************************************************************************/ {
"x": "Rare bug in odometer goals was triggered when day before derail had multiple datapoints; were picking wrong value for resetting road #bugfix",
"u": "https://twitter.com/beemuvi/status/621225606131290112",
"t": "2015-07-15 07:51:40 +0000",
}, /*************************************************************************/ {
"x": "New ratelimit-specific error email for <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> goals adding too much data. Were sending a generic \"bad datapoint\" email, which was confusing.",
"u": "https://twitter.com/beemuvi/status/621574331307458560",
"t": "2015-07-16 06:57:23 +0000",
"c": "Ratelimit is to protect against infinite loops since we have both IFTTT triggers &amp; actions around adding data",
}, /*************************************************************************/ {
"x": "Beeminder iPhone app v4.1 fixes, we believe, the disappearing goals bug but may have to delete &amp; reinstall (another bugfix version coming!)",
"u": "https://twitter.com/beemuvi/status/621957510874796032",
"t": "2015-07-17 08:20:00 +0000",
}, /*************************************************************************/ {
"x": "We were double-counting certain closed issues in Gitminder #bugfix (ie, issues closed betw midnight &amp; autodata fetch shortly after midnight)",
"u": "https://twitter.com/beemuvi/status/622296611754881024",
"t": "2015-07-18 06:47:28 +0000",
"c": "We were counting up all the issues closed since midnight, but if the maint check doesn't run until 00:30 and there are additional issues closed btwn 00:00 and 00:30 when maintenance runs, then we'd count them for yesterday, and again tomorrow when we count up issues] -->",
}, /*************************************************************************/ {
"x": "If there was an auth error with your GmailZero token, we were only adding a 0 datapoint, not telling you it's broken. #bugfix",
"u": "https://twitter.com/beemuvi/status/622668479749959680",
"t": "2015-07-19 07:25:08 +0000",
}, /*************************************************************************/ {
"x": "Rare bug w/ blank pledge caps (involved a double-save on goal setup) caused us not to send legit check #mini #bugfix &amp; emailed ppl affected",
"u": "https://twitter.com/beemuvi/status/622996398137548800",
"t": "2015-07-20 05:08:10 +0000",
"c": "All the goals we found were gmailzero goals, but this was not all gmailzero goals.. ~6 of them. looks like something in setup is sometimes causing a double save on create, which had the side effect of clobbering the pledge cap ... fixed it with redundancy in setting the pledge cap, since there should never not be a pledge cap we now set it before_save any time it is blank, instead of once, after create... also, of the 6 goals w/no pledgecap, only one known instance of the bug because mostly people don't derail",
}, /*************************************************************************/ {
"x": "New stat in the Stats box in sidebar of goal page: \"90% Variance\" which is actually a 90% quantile on... well, see <a href=\"http://beeminder.com/faq#qvar\">beeminder.com/faq#qvar</a>",
"u": "https://twitter.com/beemuvi/status/623413753049026560",
"t": "2015-07-21 08:46:35 +0000",
}, /*************************************************************************/ {
"x": "Night Owls, you can now customize deadlines for <a href=\"https://twitter.com/duolingo\">@duolingo</a> goals. Thanks <a href=\"https://twitter.com/wycats\">@wycats</a> for keeping on us this whole time! (We clearly need that.)",
"u": "https://twitter.com/beemuvi/status/623762975350878208",
"t": "2015-07-22 07:54:16 +0000",
}, /*************************************************************************/ {
"x": "Oops, inverted which deadlines can be set, which can't #bugfix + We're now consistent in referring to \"derailing\" rather than \"losing\" #mini",
"u": "https://twitter.com/beemuvi/status/624137874468810754",
"t": "2015-07-23 08:43:59 +0000",
}, /*************************************************************************/ {
"x": "Got rid of sadreset in <a href=\"https://twitter.com/Jawbone\">@Jawbone</a>, meaning that when you create a new goal and we import your data, you can actually adjust xmin and view it.",
"u": "https://twitter.com/beemuvi/status/624138027883851776",
"t": "2015-07-23 08:44:36 +0000",
}, /*************************************************************************/ {
"x": "2 RescueTime UVIs today: we had a bug where we didn't let you correct the key if there was a problem. Now we show an error message. #bugfix",
"u": "https://twitter.com/beemuvi/status/624824494419390464",
"t": "2015-07-25 06:12:22 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Second <a href=\"https://twitter.com/rescuetime\">@rescuetime</a> improvement: Sub-category minding! Some middle ground btwn minding a specific app &amp;, eg, the entire \"Business\" category.",
"u": "https://twitter.com/beemuvi/status/624824591190364160",
"t": "2015-07-25 06:12:45 +0000",
}, /*************************************************************************/ {
"x": "Our <a href=\"https://twitter.com/Jawbone\">@Jawbone</a> goal creation wasn't giving you the option for an initial week of safety buffer. #bugfix",
"u": "https://twitter.com/beemuvi/status/625572714120527872",
"t": "2015-07-27 07:45:32 +0000",
"c": "We were probably trying to be too clever? now just give the option",
}, /*************************************************************************/ {
"x": "In \"sign up/in\" dialog for some of the autodata integrations, the header was giving text specific to Sleep as Android integration. #bugfix",
"u": "https://twitter.com/beemuvi/status/625572970405060608",
"t": "2015-07-27 07:46:33 +0000",
"c": "E.g. in misfit landing page the header text on the sign up/in modal said \"Sign in using google to get started with your sleep as android goal.\"",
}, /*************************************************************************/ {
"x": "Long overdue cleanup of our <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a> page; mainly adding Support Czar, Chelsea Miller.",
"u": "https://twitter.com/beemuvi/status/625641235496046592",
"t": "2015-07-27 12:17:49 +0000",
}, /*************************************************************************/ {
"x": "The email bot now gives proper threaded replies when you email data to it! (Churning through prereqs for our big reminders revamp...)",
"u": "https://twitter.com/beemuvi/status/626637478426861568",
"t": "2015-07-30 06:16:31 +0000",
}, /*************************************************************************/ {
"x": "Dropped the option in reminder settings for getting a reply, figuring now that it's a proper threaded reply who wouldn't want it. Simplify!",
"u": "https://twitter.com/beemuvi/status/626932827775307776",
"t": "2015-07-31 01:50:08 +0000",
}, /*************************************************************************/ {
"x": "If a charge was created via the API w/ no note describing it then the alert email wouldn't get sent to the user. #bugfix",
"u": "https://twitter.com/beemuvi/status/627314666838994944",
"t": "2015-08-01 03:07:26 +0000",
}, /*************************************************************************/ ]

var batch2015aug = [
{
"x": "When forcing you to pledge (cuz no freebees) on a new <a href=\"https://twitter.com/fitbit\">@fitbit</a> goal we were failing to redirect to your goal page after creating it. #bugfix",
"u": "https://twitter.com/beemuvi/status/627653229585653761",
"t": "2015-08-02 01:32:45 +0000",
}, /*************************************************************************/ {
"x": "A bug in some \"proper replies\" was causing mailgun to retry messages it thought had failed, causing us to add duplicate datapoints. #bugfix",
"u": "https://twitter.com/beemuvi/status/628040446376194048",
"t": "2015-08-03 03:11:25 +0000",
"c": "I was lazily throwing the entire message content into the db, which failed to serialize msgs w/ attachments. now we store just the relevant reply params",
}, /*************************************************************************/ {
"x": "Our <a href=\"https://twitter.com/tagtm\">@tagtm</a> integration now understands Beeminder deadlines! (Our TagTime integration is, however, still kludgetastic, involving perl+xterms)",
"u": "https://twitter.com/beemuvi/status/628375481381838848",
"t": "2015-08-04 01:22:44 +0000",
}, /*************************************************************************/ {
"x": "Now give an error instead of letting you shoot yourself in the foot w/ a custom goal that has both odometer and auto-summing set true. #mini",
"u": "https://twitter.com/beemuvi/status/628375709111549952",
"t": "2015-08-04 01:23:38 +0000",
}, /*************************************************************************/ {
"x": "Added the goal attribute \"fullroad\" to the API (Plus documentation fixes like list of \"skinny\" attributes) <a href=\"http://beeminder.com/api\">beeminder.com/api</a>",
"u": "https://twitter.com/beemuvi/status/629205747922964480",
"t": "2015-08-06 08:21:55 +0000",
}, /*************************************************************************/ {
"x": "Workaround (\"try refreshing page\") for retroratchet not noticing new data added; base \"90% variance\" only on data since YBR start. #mini ×2",
"u": "https://twitter.com/beemuvi/status/629211816938205184",
"t": "2015-08-06 08:46:02 +0000",
}, /*************************************************************************/ {
"x": "We now retry GmailZero, RunKeeper autodata fetches if they time out; Prepended [initday,initval,0] row to \"fullroad\" (API) HT @instigate_it",
"u": "https://twitter.com/beemuvi/status/629577530027020289",
"t": "2015-08-07 08:59:14 +0000",
"c": "For gmailzero and runkeeper goals we now retry the data fetch in a few minutes if we get a Timeout error from the external service.",
}, /*************************************************************************/ {
"x": "We put user-initiated autodata fetches on a higher priority queue, and less infinibee buzzing for background autodata fetches",
"u": "https://twitter.com/beemuvi/status/629577807824224256",
"t": "2015-08-07 09:00:21 +0000",
"c": "For autodata goals we were doing the fetch-new-data part of user-initiated refreshes on a lower priority queue. Now refresh and fetch on highest prio queue.",
}, /*************************************************************************/ {
"x": "Now for Fitbit and Withings you can use x-min to adjust the plot range and see imported data (new goals only; fixing existing ones soon)",
"u": "https://twitter.com/beemuvi/status/629578453935722497",
"t": "2015-08-07 09:02:55 +0000",
"c": "Previously tweeted for rescuetime and jawbone",
}, /*************************************************************************/ {
"x": "Added \"yaxis\" and \"nomercy\" to the API. Also fixed asterisks accidentally getting interpreted as markdown on <a href=\"http://beeminder.com/api\">beeminder.com/api</a>",
"u": "https://twitter.com/beemuvi/status/630956718340476928",
"t": "2015-08-11 04:19:38 +0000",
}, /*************************************************************************/ {
"x": "No longer requiring the datapoint value when doing an update to the datapoint via the API (ie, you can let it default to its existing value)",
"u": "https://twitter.com/beemuvi/status/630956819649658880",
"t": "2015-08-11 04:20:03 +0000",
}, /*************************************************************************/ {
"x": "New warning when scheduling a break: \"You have Pessimistic Presumptive Reports turned on for this Do Less goal. Careful they don't...\"",
"u": "https://twitter.com/beemuvi/status/631706393385533441",
"t": "2015-08-13 05:58:35 +0000",
"c": "\"...derail you while you're gone!\"",
}, /*************************************************************************/ {
"x": "Configurable Retroratchet is now free! (Existing Bee Lite subscribers, we'll email you tomorrow about this and another change to Bee Lite.)",
"u": "https://twitter.com/beemuvi/status/632104092245065728",
"t": "2015-08-14 08:18:54 +0000",
}, /*************************************************************************/ {
"x": "Oldie: IFTTT error emails were missing the name of the goal in error (not applicable to 'any goal' type triggers) #mini #bugfix",
"u": "https://twitter.com/beemuvi/status/632473467493986304",
"t": "2015-08-15 08:46:40 +0000",
}, /*************************************************************************/ {
"x": "The goal progress box in the sidebar is now collapsible, with the Archive button above it instead of inside it. #mini HT Justin Kwok",
"u": "https://twitter.com/beemuvi/status/632722848348565504",
"t": "2015-08-16 01:17:37 +0000",
}, /*************************************************************************/ {
"x": "Fixed the bug in the API that made the Goal's \"datapoints\" parameter expect the string \"true\" instead of the JSON boolean true. #bugfix",
"u": "https://twitter.com/beemuvi/status/633158735142211584",
"t": "2015-08-17 06:09:40 +0000",
}, /*************************************************************************/ {
"x": "Our Garmin integration was failing on manual activities w/ no distance specified (for goals tracking distance) #bugfix",
"u": "https://twitter.com/beemuvi/status/633485820700303360",
"t": "2015-08-18 03:49:23 +0000",
}, /*************************************************************************/ {
"x": "If you signed up for Beeminder &amp; didn't fill out a required field or gave a bad email address, etc, we'd barf a 500 error at you. #bugfix",
"u": "https://twitter.com/beemuvi/status/633912992120205312",
"t": "2015-08-19 08:06:49 +0000",
"c": "Since changing something with Mixpanel",
}, /*************************************************************************/ {
"x": "Our <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> datapoint-added trigger sometimes triggered multiple times for same datapoint. #bugfix w/ updating flag for when we last checked",
"u": "https://twitter.com/beemuvi/status/634225631379615744",
"t": "2015-08-20 04:49:08 +0000",
"c": "Confusion about what exactly the bug was, because seemed like it should have been universal problem, but wasn't",
}, /*************************************************************************/ {
"x": "\"Multisport\" activities from Garmin were causing duplicate distances to be logged so now we ignore those. HT @notspelledright #bugfix",
"u": "https://twitter.com/beemuvi/status/634622487486005249",
"t": "2015-08-21 07:06:06 +0000",
"c": "They send an event with type \"MULTI_SPORT\" that is the sum total of all the multiple events recorded as part of the multi-sport triathlon training extravaganza. since they also send along each of the different multiple sports as their own stand-alone entries, the multi-sport one should just be ignored",
}, /*************************************************************************/ {
"x": "We messed up grandfathering certain SMS users such that they couldn't update their user info at all (eg, changing a password) #bugfix",
"u": "https://twitter.com/beemuvi/status/634982755726585856",
"t": "2015-08-22 06:57:41 +0000",
"c": "Only for the subset of ppl who didn't have any active goals with sms reminders on, i think, so maybe pretty inconsequential",
}, /*************************************************************************/ {
"x": "Too many people not understanding the week delay in archiving goals so we made the pop-up pop up when you first press Archive, to explain",
"u": "https://twitter.com/beemuvi/status/635336064735928320",
"t": "2015-08-23 06:21:36 +0000",
"c": "We'd previously only had this come up when you clicked Cancel on a pending archive",
}, /*************************************************************************/ {
"x": "If you forget to hit submit on the quick-add form (right side of goal gallery) it now actually warns you. #bugfix Cf UVI#1211",
"u": "https://twitter.com/beemuvi/status/635724177966653440",
"t": "2015-08-24 08:03:49 +0000",
}, /*************************************************************************/ {
"x": "Oops, just selecting goal in quick-add box shouldn't trigger the \"are you sure you want to navigate away w/out submitting\" warning #bugfix",
"u": "https://twitter.com/beemuvi/status/636071297680707584",
"t": "2015-08-25 07:03:09 +0000",
}, /*************************************************************************/ {
"x": "Another #bugfix: if you tried to submit bad data in quick-add and *then* tried to navigate away, the warning would fail to happen",
"u": "https://twitter.com/beemuvi/status/636071381298384896",
"t": "2015-08-25 07:03:29 +0000",
}, /*************************************************************************/ {
"x": "We no longer give a 500 error when you specify roadall in the API on a goal currently in an error state (Beebrain). #bugfix HT <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a>",
"u": "https://twitter.com/beemuvi/status/636783108675629056",
"t": "2015-08-27 06:11:38 +0000",
}, /*************************************************************************/ {
"x": "And on the website, goals in an error state (eg no data) gave an embarrassed bee error (500) if you tried to dial/restart them #mini #bugfix",
"u": "https://twitter.com/beemuvi/status/636783197204836352",
"t": "2015-08-27 06:11:59 +0000",
}, /*************************************************************************/ {
"x": "Clarified error message and outlined the errored field in red in reset form when you don't give the reset value for the graph #bugfix",
"u": "https://twitter.com/beemuvi/status/636784546508238849",
"t": "2015-08-27 06:17:21 +0000",
"c": "Occasional error for custom or weight loss restarts from success state. seemed to be unclear, however, given the rate that the error was occurring",
}, /*************************************************************************/ {
"x": "Were accidentally requesting non-https version of useronboard widget which caused warnings, plus conditionally include it cuz faster #bugfix",
"u": "https://twitter.com/beemuvi/status/637127676742909954",
"t": "2015-08-28 05:00:50 +0000",
}, /*************************************************************************/ {
"x": "Beeminder now uses <a href=\"https://twitter.com/habitica\">@habitica</a>'s new name and logo! (Previously HabitRPG) Special thanks to <a href=\"https://twitter.com/lady_alys\">@lady_alys</a>",
"u": "https://twitter.com/beemuvi/status/638259771276046340",
"t": "2015-08-31 07:59:22 +0000",
}, /*************************************************************************/ ]

var batch2015sep = [
{
"x": "API now gives permissions error if you try to change the slug (premium only) instead of silent failure #bugfix HT Chris of <a href=\"http://blog.openendings.net/\">blog.openendings.net</a>",
"u": "https://twitter.com/beemuvi/status/638568090284888064",
"t": "2015-09-01 04:24:31 +0000",
}, /*************************************************************************/ {
"x": "Changed the subject lines for zeno polling emails to give the deadline instead of \"in 0 days\"",
"u": "https://twitter.com/beemuvi/status/638956894682394625",
"t": "2015-09-02 06:09:29 +0000",
}, /*************************************************************************/ {
"x": "Added a warning and disabled rescaling of graphs with automatic data sources (can't rescale the graph without rescaling incoming data!)",
"u": "https://twitter.com/beemuvi/status/639310325595017216",
"t": "2015-09-03 05:33:54 +0000",
}, /*************************************************************************/ {
"x": "Fixed broken images after HabitRPG&rarr;Habitica transition. Also updated API docs to mention the daystamp attribute of the Datapoint resource.",
"u": "https://twitter.com/beemuvi/status/639687971021590528",
"t": "2015-09-04 06:34:31 +0000",
}, /*************************************************************************/ {
"x": "Weaselproofed goals now also don't let you change their data source back to manual. People complained about us letting them weasel that way.",
"u": "https://twitter.com/beemuvi/status/640056849144778752",
"t": "2015-09-05 07:00:19 +0000",
}, /*************************************************************************/ {
"x": "Yesterday's UVI broke the workaround for changing deadlines on IFTTT/Zapier goals so we fixed that. You can change IFTTT/Zap deadlines now.",
"u": "https://twitter.com/beemuvi/status/640376622634262530",
"t": "2015-09-06 04:10:59 +0000",
}, /*************************************************************************/ {
"x": "Scootched the gryffin closer in Habitica logo to make collage work. Added daystamps to all Datapoint examples in <a href=\"http://beeminder.com/api\">beeminder.com/api</a> #mini ×2",
"u": "https://twitter.com/beemuvi/status/640815233896869889",
"t": "2015-09-07 09:13:52 +0000",
}, /*************************************************************************/ {
"x": "Fixes to the \"Due By\" / \"Hard Cap By\" table to always use the right heading and \"total\" vs \"value\" (for auto-summing or not) as column label",
"u": "https://twitter.com/beemuvi/status/641185526670692352",
"t": "2015-09-08 09:45:16 +0000",
}, /*************************************************************************/ {
"x": "Deadlines can now be as early as 7am! And added explanation to hopefully mitigate confusion regarding earlybird vs nightowl deadlines.",
"u": "https://twitter.com/beemuvi/status/641486833931583488",
"t": "2015-09-09 05:42:34 +0000",
}, /*************************************************************************/ {
"x": "RunKeeper goals can now have arbitrary deadlines!",
"u": "https://twitter.com/beemuvi/status/641486918606155777",
"t": "2015-09-09 05:42:54 +0000",
}, /*************************************************************************/ {
"x": "Added new FAQ item about Rarely Asked Questions, with lots of links to \"Beeminder around the internet\". <a href=\"http://beeminder.com/faq\">beeminder.com/faq</a> #mini",
"u": "https://twitter.com/beemuvi/status/642120445924241408",
"t": "2015-09-10 23:40:18 +0000",
}, /*************************************************************************/ {
"x": "The \"bare min / hard cap\" header above the graph now says the right thing for Rationing goals (metrics you want to go down but not too fast)",
"u": "https://twitter.com/beemuvi/status/642122303375970304",
"t": "2015-09-10 23:47:41 +0000",
}, /*************************************************************************/ {
"x": "Background job (that checks for Garmin data that failed to push) wasn't checking for valid auth. Caused a few cases of missing data. #bugfix",
"u": "https://twitter.com/beemuvi/status/642795356757975040",
"t": "2015-09-12 20:22:10 +0000",
}, /*************************************************************************/ {
"x": "Fixed help text tooltip for \"Due By / Hard Cap By\" table to tailor it for the case of Do Less goals. HT <a href=\"https://www.facebook.com/profile.php?id=100007318037266\">David Storrs</a>",
"u": "https://twitter.com/beemuvi/status/643146718268141570",
"t": "2015-09-13 19:38:21 +0000",
}, /*************************************************************************/ {
"x": "We were sometimes getting the date wrong for Duolingo data with non-midnight deadlines when fetched via Beeminder's refresh button. #bugfix",
"u": "https://twitter.com/beemuvi/status/643565222297403392",
"t": "2015-09-14 23:21:20 +0000",
"c": "When after midnight for a nightowl deadline, or after the deadline and before midnight for an early bird goal",
}, /*************************************************************************/ {
"x": "Improvements to <a href=\"http://beeminder.com/overview\">beeminder.com/overview</a> like better links, hovertext, explanation of derailment in \"How Beeminder works\". HT Bill Adams",
"u": "https://twitter.com/beemuvi/status/643863829714202624",
"t": "2015-09-15 19:07:54 +0000",
}, /*************************************************************************/ {
"x": "Hitting Beeminder's refresh button right after midnight no longer derails you if a fetch from the previous day is still queued up. #bugfix",
"u": "https://twitter.com/beemuvi/status/644268727035301888",
"t": "2015-09-16 21:56:49 +0000",
"c": "Fixes the bug where user presses refresh right after midnight to fetch their last data and derails themselves and then we're like \"if you'd just waited patiently you would have been fine..\", so if the autodata goal was last processed prior to the deadline, then queue this fetch for the previous day's date, and not todays.",
}, /*************************************************************************/ {
"x": "Expose the integery parameter for custom goals (even though it doesn't do much but change how some bare min etc numbers are displayed) #mini",
"u": "https://twitter.com/beemuvi/status/644656279420469248",
"t": "2015-09-17 23:36:48 +0000",
}, /*************************************************************************/ {
"x": "We now support arbitrary deadlines for <a href=\"https://twitter.com/codeschool\">@codeschool</a> goals!",
"u": "https://twitter.com/beemuvi/status/644949112039739392",
"t": "2015-09-18 19:00:25 +0000",
}, /*************************************************************************/ {
"x": "Added more tooltips in Terrifyingly Advanced Settings. Unclear whether the terror level went up or down. #mini",
"u": "https://twitter.com/beemuvi/status/644982799791816704",
"t": "2015-09-18 21:14:17 +0000",
}, /*************************************************************************/ {
"x": "Added new Q's to <a href=\"http://beeminder.com/faq\">beeminder.com/faq</a> (blog stuff, integrations) &amp; link to <a href=\"http://blog.beeminder.com/perverse\">blog.beeminder.com/perverse</a> &amp; fixed syntax errors w/ other links",
"u": "https://twitter.com/beemuvi/status/644990476949389312",
"t": "2015-09-18 21:44:47 +0000",
}, /*************************************************************************/ {
"x": "New IFTTT macro for recipes that send data to Beeminder: PROD[] (as in product, as in multiplying) (<a href=\"http://forum.beeminder.com/t/ifttt-macros/804\">more on the forum</a>",
"u": "https://twitter.com/beemuvi/status/646093828768731137",
"t": "2015-09-21 22:49:07 +0000",
}, /*************************************************************************/ {
"x": "We now support arbitrary deadlines for Trello goals!",
"u": "https://twitter.com/beemuvi/status/646463564107001856",
"t": "2015-09-22 23:18:19 +0000",
}, /*************************************************************************/ {
"x": "We now support arbitrary deadlines for <a href=\"https://twitter.com/Withings\">@Withings</a> goals!",
"u": "https://twitter.com/beemuvi/status/646830919525863424",
"t": "2015-09-23 23:38:03 +0000",
}, /*************************************************************************/ {
"x": "On front page, updated \"guaranteed fresh\" link, hovertext for that &amp; main navigation links, don't open blog in new tab, &amp; IFTTT macro bugfix",
"u": "https://twitter.com/beemuvi/status/647176605362552832",
"t": "2015-09-24 22:31:41 +0000",
}, /*************************************************************************/ {
"x": "For goals where we're pretty sure it's measuring time (goal units = \"hours\") show the recent datapoints as HH:MM:SS not fractional hours",
"u": "https://twitter.com/beemuvi/status/647550823837274116",
"t": "2015-09-25 23:18:41 +0000",
}, /*************************************************************************/ {
"x": "Moved rate units to basic settings and exposed goal units there (now that we actually use goal units for something)",
"u": "https://twitter.com/beemuvi/status/647848718088077312",
"t": "2015-09-26 19:02:25 +0000",
}, /*************************************************************************/ {
"x": "Fixed caching of the recent datapoints so if you set your goal units to/from \"hours\" the time-based display will happen right away #bugfix",
"u": "https://twitter.com/beemuvi/status/647943919796260865",
"t": "2015-09-27 01:20:43 +0000",
}, /*************************************************************************/ {
"x": "Archiving now happens at the min of {Akrasia horizon, Goal date}. Which also means insta-archive for completed (but not frozen) goals.",
"u": "https://twitter.com/beemuvi/status/648633597247655936",
"t": "2015-09-28 23:01:15 +0000",
}, /*************************************************************************/ {
"x": "If you derail on the day that your goal is scheduled to archive, the archiving now always happens first (actually just midnight prev night)",
"u": "https://twitter.com/beemuvi/status/649000469973438464",
"t": "2015-09-29 23:19:04 +0000",
"c": "Used to just do now + AKH, now do floor(now) + AKH, now the archive *def* comes before the derail email on the final day would kick in",
}, /*************************************************************************/ {
"n": 1683,
"f": true,
"x": "Reminders Revamp! Huge simplification of reminder settings. Each goal has 3 relevant settings: zeno start time, days lead time, deadline",
"u": "https://twitter.com/beemuvi/status/649356413257433088",
"t": "2015-09-30 22:53:28 +0000",
"c": "Could make a sublist here",
}, /*************************************************************************/ {
"x": "Reminders Revamp 2 of N: Now possible to have *only* emergency day alerts (set days lead time to 0, the default), w/o wrong lane alerts too",
"u": "https://twitter.com/beemuvi/status/649357051173343232",
"t": "2015-09-30 22:56:00 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 3 of N: You now have more control over alerts for Do Less goals (though some confusion remains re: what \"safe days\" means)",
"u": "https://twitter.com/beemuvi/status/649357122988171264",
"t": "2015-09-30 22:56:17 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 4 of N: Global defaults for reminder settings! And for each goal you can choose to inherit from defaults or not",
"u": "https://twitter.com/beemuvi/status/649357208862396416",
"t": "2015-09-30 22:56:37 +0000",
}, /*************************************************************************/ {
"x": "Sort of part of the reminders revamp: we also now have global defaults for pledge cap and for whether to do no-mercy derailments",
"u": "https://twitter.com/beemuvi/status/649357320175026177",
"t": "2015-09-30 22:57:04 +0000",
}, /*************************************************************************/ {
"x": "Lock icons on pledge cap and no-mercy if they inherit from global defaults (cumbersome but at least no confusion about where to set them)",
"u": "https://twitter.com/beemuvi/status/649357383353761792",
"t": "2015-09-30 22:57:19 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 5 of N: To turn reminders off altogether: either set alert start time a minute before deadline or set days lead time to -1",
"u": "https://twitter.com/beemuvi/status/649357551817986048",
"t": "2015-09-30 22:57:59 +0000",
}, /*************************************************************************/ ]

var batch2015oct = [
{
"x": "Now using html emails for the alerts (though we're barely taking advantage: links instead of raw URLs, bullets) Also: bugfixes w/ email body",
"u": "https://twitter.com/beemuvi/status/649469827216609284",
"t": "2015-10-01 06:24:08 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 6 of N: Decoupled beemail from reminders a bit more in that you can say \"never\" to beemails w/out stopping all reminders",
"u": "https://twitter.com/beemuvi/status/649469872250880000",
"t": "2015-10-01 06:24:18 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 7 of N: Single setting for SMS vs email (premium only) means less confusion w/ enabling SMS for each goal",
"u": "https://twitter.com/beemuvi/status/649469919533203457",
"t": "2015-10-01 06:24:30 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 8 of N: The SMS bot now does zeno polling (premium only; grandfathered original SMS users from before we announced this)",
"u": "https://twitter.com/beemuvi/status/649489562440327168",
"t": "2015-10-01 07:42:33 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 9 of N: Zeno polling start time no longer restricted to 3am-11:59pm. Now anything in the 24 hours pre deadline (sorta).",
"u": "https://twitter.com/beemuvi/status/649489626583797760",
"t": "2015-10-01 07:42:48 +0000",
}, /*************************************************************************/ {
"x": "Important #bugfix for weightloss/inbox goals where zeno polling would fail to happen if you moved into the red after zeno start time",
"u": "https://twitter.com/beemuvi/status/649489681629876224",
"t": "2015-10-01 07:43:01 +0000",
}, /*************************************************************************/ {
"x": "Changing your deadline now won't let you insta-derail yourself on an eep day, in addition to not letting you snooze w/in 6 hours #bugfix",
"u": "https://twitter.com/beemuvi/status/649489758008160257",
"t": "2015-10-01 07:43:19 +0000",
}, /*************************************************************************/ {
"x": "Reminders Revamp 10 of N: Zeno SMS messages now tell you the number of hours left to your deadline",
"u": "https://twitter.com/beemuvi/status/649489827155415040",
"t": "2015-10-01 07:43:36 +0000",
}, /*************************************************************************/ {
"x": "Autodata vs manual goal reminders had \"reply w/ new data\" in the subject backwards #bugfix (and briefly broke the \"N hours\" in subject lines)",
"u": "https://twitter.com/beemuvi/status/649511965212061696",
"t": "2015-10-01 09:11:34 +0000",
}, /*************************************************************************/ {
"x": "Doh, the defaults weren't getting applied to new goals (was using default defaults instead of adjusted defaults) #bugfix in reminders revamp",
"u": "https://twitter.com/beemuvi/status/649726360273842176",
"t": "2015-10-01 23:23:30 +0000",
}, /*************************************************************************/ {
"x": "Bug introduced w/ Withings arbitrary deadlines prevented goals from automatically refreshing after getting new data pushed. #bugfix",
"u": "https://twitter.com/beemuvi/status/649847211317002240",
"t": "2015-10-02 07:23:43 +0000",
}, /*************************************************************************/ {
"x": "Introduced a bug with reminders revamp that made us send you to settings after hitting Retroratchet. Now fixed. #bugfix",
"u": "https://twitter.com/beemuvi/status/651504289680982016",
"t": "2015-10-06 21:08:21 +0000",
}, /*************************************************************************/ {
"x": "Mini UVIs: made Unsubscribe All button red, better description of SMS perq on premium page, days lead time now enforces range [-1,30]",
"u": "https://twitter.com/beemuvi/status/651506726655557632",
"t": "2015-10-06 21:18:02 +0000",
}, /*************************************************************************/ {
"x": "One more mini UVI: changed name of tab from \"Email\" to \"Default Settings\" since it's not just email anymore (still poorly organized tho!)",
"u": "https://twitter.com/beemuvi/status/651506942116917249",
"t": "2015-10-06 21:18:54 +0000",
}, /*************************************************************************/ {
"x": "If we fetched new autodata, making you safe, we'd send the Eep! email anyway. And a similar fix for preventing stale eep alerts. #bugfix ×2",
"u": "https://twitter.com/beemuvi/status/651780125281783808",
"t": "2015-10-07 15:24:26 +0000",
"c": "If we passed the deadline while running the job, or while it was queued, we'd send the Eep! alert anyway. Skip this too-late alert now.",
}, /*************************************************************************/ {
"x": "Added lifecycle email for newly created goals since reminders revamp means no alerts by default till it's a beemergency",
"u": "https://twitter.com/beemuvi/status/651780808689123328",
"t": "2015-10-07 15:27:08 +0000",
}, /*************************************************************************/ {
"x": "We had a small bug where we'd sometimes send queued up zeno reminders after the deadline was past and the goal already derailed. #bugfix",
"u": "https://twitter.com/beemuvi/status/657702830229204992",
"t": "2015-10-23 23:39:08 +0000",
}, /*************************************************************************/ {
"x": "Zeno subject line included 'respond w/ data' for autodata goals instead of manual, and vice versa. #bugfix Also added time to derail to body",
"u": "https://twitter.com/beemuvi/status/657703671837257728",
"t": "2015-10-23 23:42:29 +0000",
}, /*************************************************************************/ {
"x": "The range for default deadline was (for a while) still enforcing noon-6am after individual deadlines allowed 7am-6am. #bugfix",
"u": "https://twitter.com/beemuvi/status/657705197720834048",
"t": "2015-10-23 23:48:33 +0000",
"c": "aka the 10:06am bug",
}, /*************************************************************************/ {
"x": "Autodata polling could get behind &amp; for non-monotonic ones (eg GmailZero) could fail to start zenoing &amp; thus cause surprise derails #bugfix [and spurious derails addressed]",
"u": "https://twitter.com/beemuvi/status/658791540328796161",
"t": "2015-10-26 23:45:17 +0000",
"c": "Fix in the autodata polling job: if queues were backed up, and more than an hour passed since the last job. spurious derails addressed.",
}, /*************************************************************************/ {
"x": "In Runkeeper goal creation: 1) actually show error messages to user, 2) for a day or so we gave 500 error trying to create goals #bugfix ×2",
"u": "https://twitter.com/beemuvi/status/658795896549732352",
"t": "2015-10-27 00:02:36 +0000",
"c": "Fix 500 error from queue-for-refresh on new goals",
}, /*************************************************************************/ {
"x": "Were failing to respect user-set data source. We try to guess if it should be <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> or <a href=\"https://twitter.com/zapier\">@zapier</a>, but if you change it back we leave it be.",
"u": "https://twitter.com/beemuvi/status/659512705028493312",
"t": "2015-10-28 23:30:56 +0000",
"c": "http://forum.beeminder.com/t/ifttt-and-manual-entry-fiasco/720/6?u=dreev",
}, /*************************************************************************/ {
"x": "If you deauthorized Beeminder from Jawbone or something else went wrong we were failing silently instead of throwing up the alert. #bugfix",
"u": "https://twitter.com/beemuvi/status/659515293262188544",
"t": "2015-10-28 23:41:13 +0000",
"c": "If the response code is not 200, then the data attribute will be blank, so don't check for that until you've checked for 401 unauthorized or other error codes in the response",
}, /*************************************************************************/ {
"x": "Rare bug (manifested if autodata push failed and had to poll Withings) with not fetching data prior to a \"RECOMMITTED\" datapoint. #bugfix",
"u": "https://twitter.com/beemuvi/status/659517448278831105",
"t": "2015-10-28 23:49:47 +0000",
"c": "Now we fetch data since the last non-reset datapoint",
}, /*************************************************************************/ {
"x": "We're now robust to adding stupidly large values like 999999999999999999999999999999999999999999 that used to make everything break. #bugfix",
"u": "https://twitter.com/beemuvi/status/659518548851728384",
"t": "2015-10-28 23:54:09 +0000",
}, /*************************************************************************/ {
"x": "Broke Skritter goal creation: Skritterland requires 4am end-of-day which didn't play nice w/ new default deadlines. #bugfix",
"u": "https://twitter.com/beemuvi/status/659525653901905920",
"t": "2015-10-29 00:22:23 +0000",
}, /*************************************************************************/ {
"x": "Fixed a rare problem with adding duplicate datapoints submitted by email (related to email retries). Now check message ID to de-dup. #bugfix",
"u": "https://twitter.com/beemuvi/status/659530209549418497",
"t": "2015-10-29 00:40:30 +0000",
}, /*************************************************************************/ {
"x": "Patch for <a href=\"https://twitter.com/IFTTT\">@IFTTT</a> add datapoint TOD (time-of-day) macro to turn 12-hour time of day strings to 24-hour (like add 12 if it's PM... and &lt;12)",
"u": "https://twitter.com/beemuvi/status/659964296697356288",
"t": "2015-10-30 05:25:24 +0000",
}, /*************************************************************************/ ]

var batch2015nov = [
{
"x": "Renamed defaults tab to 'Reminders/Defaults', rearranged/edited \"new goal\" email copy, tooltip for \"-1\" in indiv. alert settings #mini ×3",
"u": "https://twitter.com/beemuvi/status/662058385496391680",
"t": "2015-11-05 00:06:34 +0000",
"c": "Tooltip was already done in the default settings section",
}, /*************************************************************************/ {
"x": "Added leadtime and alertstart to the API -- http://beeminder.com/api (Thx Andy Brett; &amp; this portends big reminders improvement on iOS!)",
"u": "https://twitter.com/beemuvi/status/662431715596480513",
"t": "2015-11-06 00:50:03 +0000",
}, /*************************************************************************/ {
"x": "Site no longer falls on its face if you give a non-integer (or nil) for 'days lead time' in goal alert settings. #bugfix (from a while ago)",
"u": "https://twitter.com/beemuvi/status/662763714001526784",
"t": "2015-11-06 22:49:17 +0000",
}, /*************************************************************************/ {
"x": "We were sometimes/rarely double counting Sleep as Android time; now disallowing records on same day with same start time. #bugfix",
"u": "https://twitter.com/beemuvi/status/663148628115001344",
"t": "2015-11-08 00:18:48 +0000",
}, /*************************************************************************/ {
"x": "Fixed a sort of off-by-one problem w/ \"days lead time\" for do-less goals. Zero days lead time means zeno alerts start when you're orange.",
"u": "https://twitter.com/beemuvi/status/663503159382269953",
"t": "2015-11-08 23:47:35 +0000",
"c": "And leadtime=-1 turns off zeno polling, just like for do-more",
}, /*************************************************************************/ {
"x": "Changing goal units made Runkeeper goals stop updating. That was super dumb. But we fixed it! Update gunits to heart's delight. #bugfix",
"u": "https://twitter.com/beemuvi/status/663881644114231296",
"t": "2015-11-10 00:51:32 +0000",
}, /*************************************************************************/ {
"x": "Were silently failing to do anything for GmailZero if you made the query blank; now default to the standard \"in:inbox AND is:read\" #bugfix",
"u": "https://twitter.com/beemuvi/status/663970755533647872",
"t": "2015-11-10 06:45:38 +0000",
}, /*************************************************************************/ {
"x": "Were failing to regenerate graphs and tell the Android app about changes to deadlines immediately which got goals into weird states. #bugfix",
"u": "https://twitter.com/beemuvi/status/664593997491544064",
"t": "2015-11-12 00:02:11 +0000",
"c": "Also we now regenerate graphs for all goals that use defaults when the default deadline changes, which could count as another UVI",
}, /*************************************************************************/ {
"x": "After upgrading from literally the oldest documented version of the Stripe API (from 2011) we broke &amp; then fixed our payment UI. #bugfix",
"u": "https://twitter.com/beemuvi/status/664594325884522497",
"t": "2015-11-12 00:03:29 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "If you had multiple IFTTT recipes triggering for the same Add Datapoint event, only one would actually trigger. #bugfix See <a href=\"http://forum.beeminder.com/t/ifttt-channel-is-live/765/34\">forum discussion</a>",
"u": "https://twitter.com/beemuvi/status/665330796161462272",
"t": "2015-11-14 00:49:57 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "New IFTTT macro for counting words in Trigger Ingredients: WORDCOUNT[] See <a href=\"http://forum.beeminder.com/t/ifttt-macros/804\">forum discussion</a>",
"u": "https://twitter.com/beemuvi/status/665665463355969536",
"t": "2015-11-14 22:59:48 +0000",
}, /*************************************************************************/ {
"x": "Tweaks to bot emails (pre-vs-ul, link, next check), CSS in blog header (HT Malcolm Ocean), alignment w/ Misfit on https://www.beeminder.com/services",
"u": "https://twitter.com/beemuvi/status/666055004344578048",
"t": "2015-11-16 00:47:42 +0000",
"c": "1. Tweaks to bot emails (pre instead of ul, changed link text and hovertext for graph URL); 2. Fixed CSS in blog header (HT malcolm); 3. Fixed alignment on /services (misfit was too big)",
}, /*************************************************************************/ {
"f": true,
"x": "By popular demand, a similar IFTTT macro, CHARCOUNT[], for Japanese and Chinese language learners",
"u": "https://twitter.com/beemuvi/status/666416814637780996",
"t": "2015-11-17 00:45:24 +0000",
}, /*************************************************************************/ {
"x": "Another improvement to the API that was needed for the iOS app: can now query and set use_defaults (grep for it at <a href=\"http://beeminder.com/api\">beeminder.com/api</a>)",
"u": "https://twitter.com/beemuvi/status/666767536692695040",
"t": "2015-11-17 23:59:03 +0000",
}, /*************************************************************************/ {
"x": "We were originally regenerating all your graphs that use defaults when you changed anything; now doing that smarter / more conservatively",
"u": "https://twitter.com/beemuvi/status/666768244749918208",
"t": "2015-11-18 00:01:52 +0000",
"c": "Only rebrains goals if the deadline was updated (otherwise no need)",
}, /*************************************************************************/ {
"x": "New aggday method \"nonzero\" for plotting a 1 only if there exist any non-zero datapoints. <a href=\"http://forum.beeminder.com/t/documentation-of-aggregation-methods-would-be-nice/549/4\">documentation of aggday methods</a>",
"u": "https://twitter.com/beemuvi/status/667499535933964288",
"t": "2015-11-20 00:27:45 +0000",
}, /*************************************************************************/ {
"x": "Creating a goal via API w/ coordinates of road start specified (1st row of roadall) works as expected now. HT Malcolm Ocean and <a href=\"http://complice.co\">Complice</a>",
"u": "https://twitter.com/beemuvi/status/667851359660601345",
"t": "2015-11-20 23:45:46 +0000",
"c": "It returns the road you specified immediately in the API response instead of having it as [null,null,null] until the goal is beebrained",
}, /*************************************************************************/ {
"f": true,
"x": "Beeminder Android app version 2.5! Checkmarks on widgets showing data already entered for the day, visual indicator for unsync'd data, ...",
"u": "https://twitter.com/beemuvi/status/668221790544523264",
"t": "2015-11-22 00:17:44 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Beedroid 2/9: Now locally buffers datapoint deletions and updates in case you have a flaky connection. And fixes related to stale data.",
"u": "https://twitter.com/beemuvi/status/668221910417731584",
"t": "2015-11-22 00:18:13 +0000",
}, /*************************************************************************/ {
"x": "Beedroid 3/9: The Beeminder icon on the urgent goals widget launches the app. (This is from version 2.4.3)",
"u": "https://twitter.com/beemuvi/status/668221945045889024",
"t": "2015-11-22 00:18:21 +0000",
}, /*************************************************************************/ {
"x": "Beedroid 4/9: If you have tons of data we now only load some of it (performance/reliability reasons), link you to website for the rest",
"u": "https://twitter.com/beemuvi/status/668221989702623232",
"t": "2015-11-22 00:18:31 +0000",
}, /*************************************************************************/ {
"x": "Beedroid 5/9: Fixes with eep day notifications, Tasker, and TagTime notifications, decreased unnecessary server hits on syncing",
"u": "https://twitter.com/beemuvi/status/668222028520919040",
"t": "2015-11-22 00:18:41 +0000",
}, /*************************************************************************/ {
"x": "Beedroid 6/9: Bugfix with stale goals hanging around, and fixed various rare(ish?) crashes",
"u": "https://twitter.com/beemuvi/status/668222068098383872",
"t": "2015-11-22 00:18:50 +0000",
}, /*************************************************************************/ {
"x": "Beedroid 7/9: Bugfixes with notifications near goal date, proper updates of existing notifications. (This is from version 2.4.2)",
"u": "https://twitter.com/beemuvi/status/668222100415471617",
"t": "2015-11-22 00:18:58 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Beedroid 8/9: Fixed a race condition with summary widget, weaselproofing of autodata goal (no more loophole of manual editing in app)",
"u": "https://twitter.com/beemuvi/status/668222140856991744",
"t": "2015-11-22 00:19:08 +0000",
}, /*************************************************************************/ {
"x": "Beedroid 9/9: Eliminated road dial (kind of a negative UVI but we crammed a gazillion real ones in these 9 tweets so...)",
"u": "https://twitter.com/beemuvi/status/668222186734223360",
"t": "2015-11-22 00:19:18 +0000",
}, /*************************************************************************/ {
"x": "Clarifying text on tabs for dialing/ratcheting road; also a warning about ratcheting to an eep day if you derailed yesterday. #mini ×2",
"u": "https://twitter.com/beemuvi/status/669029160497451009",
"t": "2015-11-24 05:45:56 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "Ratcheting for do-less goals (including autoratcheting for premium folks) now work in terms of goal units, not days. HT <a href=\"https://twitter.com/chipmanaged\">@chipmanaged</a>",
"u": "https://twitter.com/beemuvi/status/669969979228291072",
"t": "2015-11-26 20:04:25 +0000",
"c": "separate UVI to say how that also fixes the nasty bug with do-less autoratcheting? no. Tweaks to the UI to accommodate this? nah.",
}, /*************************************************************************/ {
"f": true,
"x": "Beeminder iOS app version 4.2! Graphs now appear in Today widget along with bare min, and several other things in the next 6 tweets... (1/7)",
"u": "https://twitter.com/beemuvi/status/671405966919901187",
"t": "2015-11-30 19:10:31 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "BeemiOS does zeno polling! Adjust individual and default notification settings in-app (known bug: can't change deadline on an eep day) (2/7)",
"u": "https://twitter.com/beemuvi/status/671406023337484288",
"t": "2015-11-30 19:10:44 +0000",
}, /*************************************************************************/ {
"x": "BeemiOS: When changing reminder settings in the app you're changing them for website too; was broken at first but now works. #bugfix (3/7)",
"u": "https://twitter.com/beemuvi/status/671406104837021696",
"t": "2015-11-30 19:11:04 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "BeemiOS: The reload button on the goal screen triggers a refresh of autodata. (4/7)",
"u": "https://twitter.com/beemuvi/status/671406151641231360",
"t": "2015-11-30 19:11:15 +0000",
}, /*************************************************************************/ {
"x": "BeemiOS: Fixed the dreaded spinner bug. And Arabic numerals (the real ones, not the western-derived ones) were broken. #bugfix ×2 (5/7)",
"u": "https://twitter.com/beemuvi/status/671406217856708608",
"t": "2015-11-30 19:11:31 +0000",
}, /*************************************************************************/ {
"f": true,
"x": "BeemiOS: Added a \":\" button to allow for data input in HH:MM format (6/7)",
"u": "https://twitter.com/beemuvi/status/671406270658822144",
"t": "2015-11-30 19:11:43 +0000",
}, /*************************************************************************/ {
"x": "BeemiOS: Data entry now defaults to the previous day if it's after midnight but before the deadline. (7/7)",
"u": "https://twitter.com/beemuvi/status/671406325482594304",
"t": "2015-11-30 19:11:56 +0000",
}, /*************************************************************************/ ]

var batch2015dec = [
{
"n": 1753,
"x": "We made a new kind of coupon code for Cyber Monday where you get the 2nd period free. http://blog.beeminder.com/cybermonday",
"u": "https://twitter.com/beemuvi/status/674686273093656576",
"t": "2015-12-09 20:25:17 +0000",
}, /*************************************************************************/ {
"x": "Made it way more obvious when you're using a coupon for a premium plan, by highlighting the coupon description in an green alert box",
"u": "https://twitter.com/beemuvi/status/674710396679294976",
"t": "2015-12-09 22:01:08 +0000",
}, /*************************************************************************/ {
"x": "Now give nice explanatory error msg instead of a blank stare if you give a <a href=\"http://rescuetime.com\">RescueTime</a> \"key code\" instead of full key when creating a goal",
"u": "https://twitter.com/beemuvi/status/675120449760665603",
"t": "2015-12-11 01:10:33 +0000",
}, /*************************************************************************/ {
"x": "Fixed the \"next check is at\" in zeno emails -- since putting it back recently we were giving it in server time, not user time (facepalm) #bugfix",
"u": "https://twitter.com/beemuvi/status/675538840468131840",
"t": "2015-12-12 04:53:05 +0000",
}, /*************************************************************************/ {
"x": "Fixed the \"hey you just snoozed your deadline\" email that we send out if you move your deadline further away on an eep day (facepalm again) #bugfix",
"u": "https://twitter.com/beemuvi/status/675539209264881664",
"t": "2015-12-12 04:54:33 +0000",
"c": "Template was missing due to refactoring facepalm",
}, /*************************************************************************/ {
"x": "Fixed a bug affecting do-less goals with goal total &amp; rate specified that made us throw an ugly 500 error if you tried to ratchet #bugfix",
"u": "https://twitter.com/beemuvi/status/676301754233851905",
"t": "2015-12-14 07:24:37 +0000",
"c": "We were looking for future rows by iterating through comparing current day with the time in the road row, so blank final date was causing a nil comparison error",
}, /*************************************************************************/ {
"x": "Introduced a bug where, for rare email clients, we'd re-add your \"Recent datapoints\" as new data when you replied to the email bot. #bugfix",
"u": "https://twitter.com/beemuvi/status/676913869831409665",
"t": "2015-12-15 23:56:57 +0000",
}, /*************************************************************************/ {
"x": "3rd party app devs can send users to specific URLs on beeminder.com w/out the user being intercepted by a login screen: https://www.beeminder.com/api#redirectuser",
"u": "https://twitter.com/beemuvi/status/677287165047341056",
"t": "2015-12-17 00:40:18 +0000",
"c": "If user/show gets redirect param, redirect to url: app/controllers/api/v1/users_controller.rb",
}, /*************************************************************************/ {
"x": "Other updates to our <a href=\"http://beeminder.com/api\">API docs</a>: not calling IFTTT \"about to be launched\" and purging the unused \"sendmail\" param",
"u": "https://twitter.com/beemuvi/status/677287307888562176",
"t": "2015-12-17 00:40:52 +0000",
}, /*************************************************************************/ {
"x": "No longer give permissions error (for users w/out premium plan) when slug is included but unchanged in API goal update. #bugfix HT <a href=\"https://twitter.com/diwajd\">@diwajd</a>",
"u": "https://twitter.com/beemuvi/status/677973178371604480",
"t": "2015-12-18 22:06:16 +0000",
}, /*************************************************************************/ {
"x": "We were accidentally still sending iOS people 9am notifications regardless of (and in addition to) their zeno settings. #bugfix",
"u": "https://twitter.com/beemuvi/status/678310698040987648",
"t": "2015-12-19 20:27:27 +0000",
}, /*************************************************************************/ {
"x": "Ratcheting do-less goals would no-op on the 1st day of the goal. #bugfix",
"u": "https://twitter.com/beemuvi/status/678735708413026304",
"t": "2015-12-21 00:36:17 +0000",
"c": "An error w/ operator precedence, so that if the very first section of the road (the stuff \"before today\") was blank, then we'd do nothing",
}, /*************************************************************************/ {
"x": "Error message for \"username too long\" now tells you what the limit is (it's 20). #mini HT Alex Guzey",
"u": "https://twitter.com/beemuvi/status/679094528293359616",
"t": "2015-12-22 00:22:07 +0000",
}, /*************************************************************************/ {
"x": "Changed the text the archive countdown shows after it hits zero. Now gives an indication that it might (annoyingly) take a bit to kick in.",
"u": "https://twitter.com/beemuvi/status/679444948563804160",
"t": "2015-12-22 23:34:33 +0000",
}, /*************************************************************************/ {
"x": "We broke (2 months ago as part of javascript graphs) and then fixed the Quick Add feature that updates \"+N Due by Y\" text in gallery #bugfix",
"u": "https://twitter.com/beemuvi/status/679826975502929921",
"t": "2015-12-24 00:52:36 +0000",
"c": "Removed a js date helper lib that was conflicting with mpld3, not noticing that we were in fact using some helper functions from it. Added a getDayName &amp; getMonthName helper fn to our js file. http://forum.beeminder.com/t/quick-add-doesnt-update-the-text-part/735",
}, /*************************************************************************/ {
"x": "Uncheck \"start flat\" when restarting ⇒ road dial appears like it's supposed to (broke this months ago :/ \"start flat\" was no-op) #bugfix",
"u": "https://twitter.com/beemuvi/status/680167141341937664",
"t": "2015-12-24 23:24:18 +0000",
"c": "We were just giving an infinite flat road despite saying no to 'starting flat'",
}, /*************************************************************************/ {
"x": "Remember when we fixed a trailing whitespace bug in sign-up (UVI#1315)? Well the other day <a href=\"http://twitter.com/faireness\" title=\"Yes, the founders' 8-year-old daughter\">@faireness</a> noticed we still weren't stripping whitespace when you actually log in :/ #bugfix",
"u": "https://twitter.com/beemuvi/status/680543998302240768",
"t": "2015-12-26 00:21:47 +0000",
}, /*************************************************************************/ {
"x": "We now remember who IFTTT recipes run for so if there's an auth problem later we can email you to tell you the recipe stopped working",
"u": "https://twitter.com/beemuvi/status/680903325550645248",
"t": "2015-12-27 00:09:38 +0000",
"c": "trigger_identity",
}, /*************************************************************************/ {
"f": true,
"x": "Embarrassing #bugfix in deadman switch (stops charging you if go inactive): don't count activity on archived goals from autodata like Zapier",
"u": "https://twitter.com/beemuvi/status/681249970515619841",
"t": "2015-12-27 23:07:04 +0000",
}, /*************************************************************************/ {
"x": "Fixed a mangled error message (and made it spell things out better) about trying to move your deadline earlier on a beemergency day. #mini",
"u": "https://twitter.com/beemuvi/status/681384790826733568",
"t": "2015-12-28 08:02:48 +0000",
"c": "\"Deadline cannot be moved into the past, since this goal is in the red currently, and that would derail you. Please finish your task for the day first.\"",
}, /*************************************************************************/ {
"x": "If you de-authed Android/iOS apps we weren't cleaning up after ourselves and failed horribly/invisibly if you later tried to re-add. #bugfix",
"u": "https://twitter.com/beemuvi/status/681995988408479745",
"t": "2015-12-30 00:31:29 +0000",
"c": "Remove cached access token for beedroid/ios if auth is revoked. e.g. i removed beedroid, and then submitted datapoints.. it was infinite infinibee, with nice helpful red state letting me know it was still trying to send, but never succeeds",
}, /*************************************************************************/ {
"x": "Can now always move your deadline earlier on an eep day as long as still before the deadline (timezone issue; only failed sometimes) #bugfix",
"u": "https://twitter.com/beemuvi/status/682344715392385025",
"t": "2015-12-30 23:37:12 +0000",
}, /*************************************************************************/ {
"x": "Similar bug with snoozing your deadline; now always respects the 6-hour window on an eep day. #bugfix",
"u": "https://twitter.com/beemuvi/status/682344758262415360",
"t": "2015-12-30 23:37:22 +0000",
}, /* --------------------------------------------------------- end 2015dec */ ]

