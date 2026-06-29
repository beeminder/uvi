/* globals batches */

batches['2026jan'] = [{
}, { // ------------------------------------------------------------------------
x: `We're now consistent in using your chosen timey format (HH:MM vs HH:MM:SS) everywhere: data table, recent data, dashboard, deletion confirmation`,
l: ["https://x.com/beemuvi/status/2008334878031421464",
    "https://github.com/beeminder/beeminder/issues/1089", // "Load All Datapoints" loses timey format
    "https://github.com/beeminder/beeminder/issues/1910", // Shownum(): Do not round timey datapoints
    "https://github.com/beeminder/beeminder/issues/3895", // 2 hours displaying as 2:00.00
    "https://github.com/beeminder/beeminder/pull/5443"],
d: "2025-12-09",
e: "2026-01-05",
}, { // ------------------------------------------------------------------------
x: `When you added new data or clicked refetch on an autodata goal, the datapoint used to get temporarily tacked on in decimal format despite timey-ness. #bugfix`,
l: ["https://x.com/beemuvi/status/2008335103382946212",
    "https://github.com/beeminder/beeminder/issues/1089",
    "https://github.com/beeminder/beeminder/issues/1910",
    "https://github.com/beeminder/beeminder/issues/3895",
    "https://github.com/beeminder/beeminder/pull/5443"],
d: "2025-12-09",
e: "2026-01-05",
}, { // ------------------------------------------------------------------------
x: `The API now returns baremin with seconds for timey goals`,
l: ["https://x.com/beemuvi/status/2008701897117757693",
    "https://github.com/beeminder/beeminder/issues/1089",
    "https://github.com/beeminder/beeminder/issues/1910",
    "https://github.com/beeminder/beeminder/issues/3895",
    "https://github.com/beeminder/beeminder/pull/5443"],
d: "2025-12-09",
e: "2026-01-06",
}, { // ------------------------------------------------------------------------
x: `Our Todoist API change broke things; had to revert, fix graphs, email people, and are working out how to handle recurring todos in the future. #bugfix #zombie`,
l: ["https://x.com/beemuvi/status/2008702006287069487",
    "https://github.com/beeminder/beeminder/pull/5490"],
e: "2026-01-06",
s: `See UVI#5442`,
}, { // ------------------------------------------------------------------------
x: `A rare race condition for Twitter goals could get an initial datapoint for 1970 if we tried to generate the graph before fetching the initial datapoint. #bugfix`,
l: ["https://x.com/beemuvi/status/2009065618209951976",
    "https://github.com/beeminder/beeminder/issues/2909",
    "https://github.com/beeminder/beeminder/pull/5505"],
s: "We've fixed similar things before in other integrations. This just popped up as work that was 99% done in a local branch and Bee went ahead and pushed it.",
d: "2026-01-06",
e: "2025-01-07",
}, { // ------------------------------------------------------------------------
x: `URL-based goal creation (UVI#5427) now gives a proper error if you don't have the right premium plan to create the goal type you're trying to create`,
l: ["https://x.com/beemuvi/status/2009065772682023079",
    "https://github.com/beeminder/beeminder/issues/5496",
    "https://github.com/beeminder/beeminder/pull/5497"],
d: "2026-01-07",
e: "2025-01-07",
s: `Previously just created a generic do-more, instead of what you asked for`,
}, { // ------------------------------------------------------------------------
x: `Also the URL-based goal builder wouldn't let you reuse the goalname of a previously deleted goal. #bugfix`,
l: ["https://x.com/beemuvi/status/2009426957499551955",
    "https://github.com/beeminder/beeminder/issues/5496",
    "https://github.com/beeminder/beeminder/pull/5497"],
d: "2026-01-07",
e: "2026-01-08",
}, { // ------------------------------------------------------------------------
x: `Soft-launch of our Steam autodata integration: beemind time spent playing video games, either as do-more or do-less`,
l: ["https://x.com/beemuvi/status/2009427291806609813",
    "https://www.beeminder.com/steam",
    "https://github.com/beeminder/beeminder/pull/5498"],
e: "2026-01-08",
d: "2025-12-31",
}, { // ------------------------------------------------------------------------
x: `Do-less goals let you try to ratchet them, and then came back from the server with an error like HAHA NO, if the upcoming red line was non-monotonic. #bugfix`,
l: ["https://x.com/beemuvi/status/2009768633329996052",
    "https://github.com/beeminder/beeminder/issues/5511",
    "https://github.com/beeminder/beeminder/pull/5514"],
d: "2026-01-09",
e: "2026-01-09",
s: `It's effectively grayed out now, telling you what to do instead if there are upcoming non-monotonicities`,
}, { // ------------------------------------------------------------------------
x: `Autoratchet could mess up your red line if upcoming segments were non-monotone. Now it checks before ratcheting, using the same conditions as manual ratchet.`,
l: ["https://x.com/beemuvi/status/2009768762048717049",
    "https://github.com/beeminder/beeminder/issues/5511",
    "https://github.com/beeminder/beeminder/pull/5514"],
d: "2026-01-09",
e: "2026-01-09",
}, { // ------------------------------------------------------------------------
x: `The sandbox page of the visual graph editor (we'd forgotten we'd linked to this the past) had a bug that made it impossible to set the red line rate. #bugfix`,
l: ["https://x.com/beemuvi/status/2010878362127065412",
    "https://graph.beeminder.com/sandbox",
    "https://github.com/beeminder/road/issues/337",
    "https://github.com/beeminder/road/commit/e5fa3c70d253e66f8f55d908cde67a530f225498"],
d: "2026-01-06",
e: "2026-01-12",
}, { // ------------------------------------------------------------------------
x: `Help docs: New article "How many goals should I start with?" with advice and wisdom, since it comes up a lot in support`,
l: ["https://x.com/beemuvi/status/2010879367354954116",
    "https://help.beeminder.com/article/378-how-many-goals-should-i-start-with"],
e: "2026-01-12",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added info to about the interactive/zoomable graphs to the "How do I interpret the goal page?" and "How do I interpret the graph?" articles`,
l: ["https://x.com/beemuvi/status/2011242064751837322",
    "https://help.beeminder.com/article/115-how-do-i-interpret-the-goal-page",
    "https://help.beeminder.com/article/118-how-do-i-interpret-the-graph"],
e: "2026-01-13",
}, { // ------------------------------------------------------------------------
x: `Help docs: New screenshot for the "How do I tell Beeminder when my week starts?" article, plus replaced an ancient graph image from the yellow brick road days`,
l: ["https://x.com/beemuvi/status/2011242624758284514",
    "https://help.beeminder.com/article/123-weekstart"],
e: "2026-01-13",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added to the Reminders article about where to change them, plus tweaks, streamlining, dewordinessifying to 3 others, especially Post-derail Respite`,
l: ["https://x.com/beemuvi/status/2011603343807004691",
    "https://help.beeminder.com/article/101-reminders",
    "https://help.beeminder.com/article/99-graph-editor",
    "https://help.beeminder.com/category/353-historical-interest",
    "https://help.beeminder.com/article/18-respite"],
e: "2026-01-14",
}, { // ------------------------------------------------------------------------
x: `Help docs: New links, reorganizing, and other minor edits to "What is Beeminder?" and 4 other articles (including new screenshot for "How do I change my goal?")`,
l: ["https://x.com/beemuvi/status/2011603415793877240",
    "https://help.beeminder.com/article/70-what-is-beeminder",
    "https://help.beeminder.com/article/32-what-do-i-do-first",
    "https://help.beeminder.com/article/54-how-do-i-change-my-goal",
    "https://help.beeminder.com/article/120-whats-the-best-way-to-beemind",
    "https://help.beeminder.com/article/339-how-do-i-set-a-goal-with-a-weekly-rate"],
e: "2026-01-14",
}, { // ------------------------------------------------------------------------
x: `Goal creation now has you specify both singular and plural versions for your goal units. And it guesses a default plural version. So many efficiency!`,
l: ["https://x.com/beemuvi/status/2011965686881665152",
    "https://github.com/beeminder/beeminder/issues/253",
    "https://github.com/beeminder/beeminder/pull/5515"],
d: "2026-01-15",
e: "2025-01-15",
s: `Aka gunits. Plural guessing uses a standard JS library, Pluralize`,
}, { // ------------------------------------------------------------------------
x: `Also the new singular goal units is editable in the goal's settings page. And did we mention the plural guesser knows most English irregular pluralia?`,
l: ["https://x.com/beemuvi/status/2011965766728630540",
    "https://github.com/beeminder/beeminder/issues/253",
    "https://github.com/beeminder/beeminder/pull/5515"],
d: "2026-01-15",
e: "2025-01-15",
s: `Keyword: gunits.`,
}, { // ------------------------------------------------------------------------
x: `Existing goals use the plural version of goal units everywhere. We enforce specifying both for new goals and if you edit the singular version for existing ones.`,
l: ["https://x.com/beemuvi/status/2012309019629703267",
    "https://github.com/beeminder/beeminder/issues/253",
    "https://github.com/beeminder/beeminder/pull/5515"],
d: "2026-01-15",
e: "2026-01-16",
}, { // ------------------------------------------------------------------------
x: `Corrected the mapping from safe days to color in the API docs (plus color hex codes) and fixed a broken link to our IFTTT integration landing page`,
l: ["https://x.com/beemuvi/status/2012309205990957251",
    "https://api.beeminder.com",
    "https://github.com/beeminder/beeminder/issues/1755"],
d: "2026-01-15",
e: "2026-01-16",
}, { // ------------------------------------------------------------------------
x: `Added colorhex and colorkey to the API output for the Goal object for our color-coding of the number of safe days`,
l: ["https://x.com/beemuvi/status/2013409378599088235",
    "https://github.com/beeminder/beeminder/issues/1755",
    "https://github.com/beeminder/beeminder/pull/5521"],
e: "2026-01-19",
}, { // ------------------------------------------------------------------------
x: `Added gray to the color mapping for errors. Previously the dashboard hex icons (aka expand/collapse) used the row's background color if the goal had a an error.`,
l: ["https://x.com/beemuvi/status/2013409554646626527",
    "https://github.com/beeminder/beeminder/issues/1755",
    "https://github.com/beeminder/beeminder/pull/5521"],
d: "2026-01-15",
e: "2026-01-19",
s: `Ie, BBerror e.g. "no datapoints"`,
}, { // ------------------------------------------------------------------------
x: `Recent Data on your goal page was giving a 500 error if you had no datapoints. Introduced with full-precision timey improvements. #bugfix #zombie`,
l: ["https://x.com/beemuvi/status/2013767155230089626",
    "https://github.com/beeminder/beeminder/pull/5521"],
e: "2026-01-20",
}, { // ------------------------------------------------------------------------
x: `Added more cute hovertext for more menu items in the navigation menu at the upper right of the page`,
l: ["https://x.com/beemuvi/status/2013767333760606260",
    "https://github.com/beeminder/beeminder/issues/5182",
    "https://github.com/beeminder/beeminder/pull/5519"],
d: "2026-01-15",
e: "2026-01-20",
s: `Changed about three of them. Followup to whenever we first tweeted overhauling these.`,
}, { // ------------------------------------------------------------------------
f: true,
x: `New autodata integration: Steam! As in the video game service. Logo is in the front page gallery, we have a fancy landing page, and we blogged about it.`,
l: ["https://x.com/beemuvi/status/2014134583931851036",
    "https://www.beeminder.com/steam",
    "https://blog.beeminder.com/steam",
    "https://github.com/beeminder/blog/issues/605",
    "https://github.com/beeminder/beeminder/pull/5523"],
d: "2026-01-20",
e: "2026-01-21",
}, { // ------------------------------------------------------------------------
x: `Help docs: New article about the new Steam integration`,
l: ["https://x.com/beemuvi/status/2014134734264136093",
    "https://help.beeminder.com/article/379-steam"],
e: "2026-01-21",
}, { // ------------------------------------------------------------------------
x: `By popular demand of the Steam integration beeta testers, we added the option to track all of your time, instead of just one game per goal`,
l: ["https://x.com/beemuvi/status/2014493252456743355",
    "https://www.beeminder.com/steam",
    "https://blog.beeminder.com/steam",
    "https://github.com/beeminder/blog/issues/605",
    "https://github.com/beeminder/beeminder/pull/5523"],
d: "2026-01-20",
e: "2026-01-22",
}, { // ------------------------------------------------------------------------
x: `We also streamlined the Steam goal setup a little by skipping the "recently played" menu and just always fetching all of your owned games`,
l: ["https://x.com/beemuvi/status/2014493337852825989",
    "https://www.beeminder.com/steam",
    "https://blog.beeminder.com/steam",
    "https://github.com/beeminder/blog/issues/605",
    "https://github.com/beeminder/beeminder/pull/5523"],
d: "2026-01-20",
e: "2026-01-22",
}, { // ------------------------------------------------------------------------
x: `We added details on what the goal's tracking on Steam in goal settings, plus the game name (or total count of games for all-time goals) to the datapoint comment`,
l: ["https://x.com/beemuvi/status/2014835559026585834",
    "https://www.beeminder.com/steam",
    "https://blog.beeminder.com/steam",
    "https://github.com/beeminder/blog/issues/605",
    "https://github.com/beeminder/beeminder/pull/5523"],
d: "2026-01-20",
e: "2026-01-23",
}, { // ------------------------------------------------------------------------
x: `Updated tooltip behavior to make it work better (and more often) on mobile/tablet devices, so you can tap or hover on any of those little (i) or (?) icons`,
l: ["https://x.com/beemuvi/status/2014835807157420072",
    "https://github.com/beeminder/beeminder/issues/1835",
    "https://github.com/beeminder/beeminder/pull/5520"],
d: "2026-01-16",
e: "2026-01-23",
}, { // ------------------------------------------------------------------------
x: `And fixed a frustrating little bug: you had to tap back on the same item that launched the tooltip in order to dismiss it. Now any tap anywhere dismisses it.`,
l: ["https://x.com/beemuvi/status/2015950718088425671",
    "https://github.com/beeminder/beeminder/issues/1835",
    "https://github.com/beeminder/beeminder/pull/5520"],
d: "2026-01-16",
e: "2026-01-26",
s: `#bugfix`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Clarifications, rephrasings, and dewordinessifying in the article on Group Goals and 5 others`,
l: ["https://x.com/beemuvi/status/2015950840658591859",
    "https://help.beeminder.com/article/362-what-is-a-group-goal",
    "https://help.beeminder.com/article/122-why-does-beeminder-think-its-already-tomorrow",
    "https://help.beeminder.com/article/351-i-need-help",
    "https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types",
    "https://help.beeminder.com/article/336-how-many-goals-can-i-make-for-free"],
e: "2026-01-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: Replaced an ancient graph image in the article on pausing goals, plus readability tweaks in that and 3 other articles`,
l: ["https://x.com/beemuvi/status/2016305698469257245",
    "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit",
    "https://help.beeminder.com/article/55-what-is-safety-buffer",
    "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer",
    "https://help.beeminder.com/article/52-why-cant-i-create-a-do-less-odometer-whittle-down"],
e: "2026-01-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rewording / link freshening / de-duping / clarifying in the megabreak article and 6 others`,
l: ["https://x.com/beemuvi/status/2016313621861826817",
    "https://help.beeminder.com/article/154-can-i-schedule-breaks-on-many-goals-at-once",
    "https://help.beeminder.com/article/57-what-if-i-only-want-to-do-my-goal-on-weekdays",
    "https://help.beeminder.com/article/58-what-if-i-only-want-to-do-something-once-a-month",
    "https://help.beeminder.com/article/367-what-happens-when-i-reach-my-goal-total-end-date",
    "https://help.beeminder.com/article/54-how-do-i-change-my-goal",
    "https://help.beeminder.com/article/124-my-goal-doesnt-make-any-sense",
    "https://help.beeminder.com/article/117-can-i-start-my-goal-over"],
e: "2026-01-27",
}, { // ------------------------------------------------------------------------
x: `Fixed a longstanding bug where restarting custom goals with some non-standard aggdays would cause an instaderail. #bugfix`,
l: ["https://x.com/beemuvi/status/2016672722122904034",
    "https://github.com/beeminder/beeminder/issues/1444",
    "https://github.com/beeminder/beeminder/pull/5529"],
d: "2026-01-27",
e: "2026-01-28",
s: `Things like a kyoom goal where aggday=count. Also we think but aren't sure that this manifested in derail loops even without restarting sometimes.`,
}, { // ------------------------------------------------------------------------
x: `Emailed Todoist users about impending breaking changes to their Todoist goals with labels`,
l: ["https://x.com/beemuvi/status/2016673025723383845",
    "https://forum.beeminder.com/t/todoist-integration-to-regress/12705",
    "https://github.com/beeminder/beeminder/issues/5530"],
d: "2026-01-28",
e: "2026-01-28",
}, { // ------------------------------------------------------------------------
x: `In goal settings the singular version of goal units now properly defaults to the plural version if you never chose both`,
l: ["https://x.com/beemuvi/status/2017034777363382568",
    "https://github.com/beeminder/beeminder/pull/5522"],
d: "2026-01-29",
e: "2026-01-29",
s: `This is for anti-magic: we're going to use the plural version everywhere if you don't have singular specified, so that's what the user should see. The cleaner and even more anti-magic version will be to do a database update to just set every null gunitSING equal to gunitPLUR. From then on both fields can simply be required at the database level. Otherwise we're doing a fallback depending on gunitSING being set, which is always a red flag.`,
}, { // ------------------------------------------------------------------------
x: `Plural-guessing in goal creation/settings was leaving crumbs (stray bits of what you typed) if you added then fully deleted your singular goal units. #bugfix`,
l: ["https://x.com/beemuvi/status/2017034860976845095",
    "https://github.com/beeminder/beeminder/issues/5532",
    "https://github.com/beeminder/beeminder/pull/5522"],
d: "2026-01-29",
e: "2026-01-29",
s: `Javascript bug`,
}, { // ------------------------------------------------------------------------
x: `We missed a spot with pluralization crumbs in the rate-stepper field during goal creation. #bugfix`,
l: ["https://x.com/beemuvi/status/2017358890053341286",
    "https://github.com/beeminder/beeminder/issues/5532",
    "https://github.com/beeminder/beeminder/pull/5533"],
d: "2026-01-30",
e: "2026-01-30",
}, { // ------------------------------------------------------------------------
x: `View full payment history in the browser. Most recent 20 shown by default. Before you could only get the rest via email; now a button loads a separate page.`,
l: ["https://x.com/beemuvi/status/2017358998656417908",
    "https://github.com/beeminder/beeminder/issues/5488",
    "https://github.com/beeminder/beeminder/pull/5528"],
d: "2026-01-30",
e: "2026-01-30",
s: `Stripe or PayPal. Bee has some concerns that for ppl like herself & Danny & others with 10+ years of payment history it might be excessivly slow, tho.`,
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2026jan */ ]

batches['2026feb'] = [{
x: `We upgraded our servers' Transport Layer Security (TLS) to the current geological era (v1.3) which has made a measurable performance difference for the iOS app`,
l: ["https://x.com/beemuvi/status/2018487295347949929",
    "https://github.com/beeminder/beeploy",
    "https://github.com/beeminder/beeminder/issues/5218"],
e: "2026-02-02",
s: `Thanks to Theo and Adam`,
}, { // ------------------------------------------------------------------------
x: `Feet-wetting wasn't getting turned on for API-created goals (HT Intend.do) and the pledge wouldn't auto-increase to $5 after a week. #bugfix`,
l: ["https://x.com/beemuvi/status/2018487433524846629",
    "https://github.com/beeminder/beeminder/issues/5517",
    "https://github.com/beeminder/beeminder/pull/5535"],
d: "2026-02-02",
e: "2025-02-02",
}, { // ------------------------------------------------------------------------
x: `Help docs: Fixed an ambiguity in the Goal Statistics article plus tweaks for flow and dewordinessifying in the Restart Archived Goal article`,
l: ["https://x.com/beemuvi/status/2018843411378528695",
    "https://help.beeminder.com/article/119-what-are-the-goal-statistics",
    "https://help.beeminder.com/article/358-can-i-restart-an-archived-goal"],
e: "2025-02-03",
}, { // ------------------------------------------------------------------------
x: `Documented the new Goal fields, "colorkey" and "colorhex" that the API now returns so you don't have to compute them from safebuf`,
l: ["https://x.com/beemuvi/status/2018852043335893391",
    "https://api.beeminder.com/#attributes-2",
    "https://github.com/beeminder/apidocs/commit/e3323f647de20b74e22580a1eb3fe939b94c0c78"],
d: "2026-02-03",
e: "2026-02-03",
}, { // ------------------------------------------------------------------------
x: `If you picked a deadline for your Metaminder goal that was earlier than your default reminder start time, goal creation would fail with an opaque error. #bugfix`,
l: ["https://x.com/beemuvi/status/2019205759343747133",
    "https://github.com/beeminder/beeminder/issues/5531",
    "https://github.com/beeminder/beeminder/pull/5536"],
d: "2026-02-03",
e: "2026-02-04",
s: `Namely, "there was a problem creating your goal". Aka alertstart. Solution: if selected deadline would've caused this error, set alertstart to be an hour earlier and give the user a warning that you're doing so in the interface. We're trying to balance the magic and the explosion of choices in the interface.`,
}, { // ------------------------------------------------------------------------
x: `Also fixed a UI problem where we'd exclude anything before your default reminder start time in the dropdown of choices when creating a Metaminder goal`,
l: ["https://x.com/beemuvi/status/2019205956161401219",
    "https://github.com/beeminder/beeminder/issues/5531",
    "https://github.com/beeminder/beeminder/pull/5536"],
d: "2026-02-03",
e: "2026-02-04",
s: `Now we give options from 9:30am (the default default-alertstart) to 6am-night-owl`,
}, { // ------------------------------------------------------------------------
x: `And fixed a tiny typo and reworded the deadline description in the Metaminder goal setup`,
l: ["https://x.com/beemuvi/status/2019572628839866706",
    "https://github.com/beeminder/beeminder/issues/5531",
    "https://github.com/beeminder/beeminder/pull/5536"],
d: "2026-02-03",
e: "2026-02-05",
}, { // ------------------------------------------------------------------------
x: `Finally, in Metaminder goal creation we offer, as the first choice in the dropdown, a deadline of 15 minutes after the deadline of the goal it's populated from`,
l: ["https://x.com/beemuvi/status/2019572725803806814",
    "https://github.com/beeminder/beeminder/issues/5531",
    "https://github.com/beeminder/beeminder/pull/5536"],
d: "2026-02-03",
e: "2026-02-05",
s: `This is just about what we offer in the dropdown so less concerned about anti-magic violation, like the arbitrariness of 15 minutes or the if-statement for the case that the source goal's deadline is at 6am (the latest possible deadline) so +15m isn't possible`,
}, { // ------------------------------------------------------------------------
f: true,
x: `New feature: keyboard navigation for the dashboard! Press j/k ↓/↑ to navigate your goals, and "?" for the help screen.`,
l: ["https://x.com/beemuvi/status/2019921362484437332",
    "https://blog.beeminder.com/hotkeys",
    "https://github.com/beeminder/beeminder/issues/4906",
    "https://github.com/beeminder/beeminder/pull/5537"],
d: "2026-02-03",
e: "2026-02-06",
s: `The linked gissue is focusing on accessibility and screenreaders and Bee's not sure we actually made that much better, but she never explicitly wrote down her wishes for hotkeys in a different gissue and this was pretty close`,
}, { // ------------------------------------------------------------------------
x: `These hotkeys also now give you a non-sucky way to sync a goal with Beeminder's servers ("r") and refetch autodata ("e")`,
l: ["https://x.com/beemuvi/status/2019921515530391667",
    "https://blog.beeminder.com/hotkeys",
    "https://github.com/beeminder/beeminder/issues/4906",
    "https://github.com/beeminder/beeminder/pull/5537"],
d: "2026-02-03",
e: "2026-02-06",
}, { // ------------------------------------------------------------------------
f: true,
x: `New feature currently only available via hotkey: SUPERCOLLAPSE, to make a goal only take up a single line on your dashboard, with no graph thumbnail`,
l: ["https://x.com/beemuvi/status/2021012981841264789",
    "https://blog.beeminder.com/hotkeys",
    "https://github.com/beeminder/beeminder/issues/4906",
    "https://github.com/beeminder/beeminder/pull/5537"],
d: "2026-02-03",
e: "2026-02-09",
s: `Makes finished goals more out-of-sight while you're to-doing your way through your beemergencies`,
}, { // ------------------------------------------------------------------------
x: `A #bugfix for keyboard navigation: don't exit keyboard nav when you enter data`,
l: ["https://x.com/beemuvi/status/2021013114754564408",
    "https://blog.beeminder.com/hotkeys"],
e: "2026-02-09",
}, { // ------------------------------------------------------------------------
x: `New hotkey (h) to jump to the header row makes it peasy to re-sort the dashboard and also to jump to the top or bottom of the list (cuz it wraps top to bottom)`,
l: ["https://x.com/beemuvi/status/2021173251888582906",
    "https://github.com/beeminder/beeminder/issues/5539",
    "https://github.com/beeminder/beeminder/pull/5538"],
d: "2026-02-05",
e: "2026-02-10",
}, { // ------------------------------------------------------------------------
x: `Race condition with Firefox and Safari where using cmd-enter to submit data (dashboard or goal page) would yield a duplicate datapoint. #bugfix`,
l: ["https://x.com/beemuvi/status/2021176006669656124",
    "https://github.com/beeminder/beeminder/issues/5539",
    "https://github.com/beeminder/beeminder/pull/5538"],
d: "2026-02-05",
e: "2026-02-10",
s: `Surprisingly enough this bug was *not* introduced by the recent dashboard nav stuff`,
}, { // ------------------------------------------------------------------------
x: `Whoops, forgot to document the new 'h' shortcut in the help screen for keyboard nav. Now it's added in.`,
l: ["https://x.com/beemuvi/status/2021746960835973587",
    "https://github.com/beeminder/beeminder/pull/5540"],
d: "2026-02-06",
e: "2026-02-11",
s: `Sorta cheap but we never used the help screen as its own UVI in the first place, which was opposite-of-cheap`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Shortened and clarified the article on special/meta datapoints and fixed the gif (it wasn't looping) on the Do More Goals article`,
l: ["https://x.com/beemuvi/status/2021747269478052248",
    "https://help.beeminder.com/article/374-are-there-any-special-types-of-datapoints",
    "https://help.beeminder.com/article/66-do-more-goals"],
e: "2026-02-11",
}, { // ------------------------------------------------------------------------
x: `We migrated your Todoist stuff to their new API without breaking all your goals this time! And we managed to preserve labels-minding for now. Tentative-phew.`,
l: ["https://x.com/beemuvi/status/2022112400342983168",
    "https://forum.beeminder.com/t/todoist-integration-to-regress-false-alarm/12705?u=dreev",
    "https://github.com/beeminder/beeminder/pull/5543"],
d: "2026-02-10",
e: "2026-02-12",
}, { // ------------------------------------------------------------------------
x: `Migrated the Omniauth Todoist strategy to the new API and published the gem; now you can still auth Todoist with Beeminder and use the gem for your own projects`,
l: ["https://x.com/beemuvi/status/2022112977227591735",
    "https://github.com/beeminder/omniauth-todoist/pull/6",
    "https://github.com/beeminder/beeminder/pull/5544"],
d: "2026-02-10",
e: "2026-02-12",
}, { // ------------------------------------------------------------------------
x: `Help docs: Corrected an error (PPRs on goals at 0/day) in the Pessimistic Presumptive Reports article, plus streamlining, rearranging, spring cleaning`,
l: ["https://x.com/beemuvi/status/2022431352659022025",
    "https://help.beeminder.com/article/157-pessimistic-presumptive-reports"],
e: "2026-02-13",
}, { // ------------------------------------------------------------------------
x: `The all-transactions page wouldn't actually let you reload the page, but just redirected you back to the main payments page. #bugfix`,
l: ["https://x.com/beemuvi/status/2022431547488690259",
    "https://github.com/beeminder/beeminder/issues/5541",
    "https://github.com/beeminder/beeminder/pull/5546"],
d: "2026-02-12",
e: "2026-02-13",
s: `There was a redirect for non-admins, keeping them from viewing other folks' payments. Now we do that better.`,
}, { // ------------------------------------------------------------------------
x: `Help docs: updated all the screenshots in all articles in the Goals category, along with improving and concise-ifying the prose`,
l: ["https://x.com/beemuvi/status/2024644278287552607",
    "https://help.beeminder.com/article/66-do-more-goals",
    "https://help.beeminder.com/article/67-do-less-goals",
    "https://help.beeminder.com/article/68-odometer-goals",
    "https://help.beeminder.com/article/69-whittle-down-goals",
    "https://help.beeminder.com/article/96-weight-gain-loss-goals"],
e: "2026-02-19",
}, { // ------------------------------------------------------------------------
x: `Fixed a scroll bug in Firefox where using the h hotkey would jump to the header but fail to fully scroll it into view. #bugfix`,
l: ["https://x.com/beemuvi/status/2024648643593269509",
    "https://github.com/beeminder/beeminder/issues/5542",
    "https://github.com/beeminder/beeminder/pull/5549"],
e: "2026-02-19",
}, { // ------------------------------------------------------------------------
x: `We now nicely exit keyboard navigation if you click anywhere with the mouse`,
l: ["https://x.com/beemuvi/status/2025000788964339750",
    "https://github.com/beeminder/beeminder/issues/5542",
    "https://github.com/beeminder/beeminder/pull/5549"],
e: "2026-02-20",
}, { // ------------------------------------------------------------------------
x: `One more keyboard navigation improvement: we no longer collapse the goal when you hit enter with the submit button selected. #bugfix`,
l: ["https://x.com/beemuvi/status/2025000911266017675",
    "https://github.com/beeminder/beeminder/issues/5542",
    "https://github.com/beeminder/beeminder/pull/5549"],
e: "2026-02-20",
}, { // ------------------------------------------------------------------------
x: `We added an API endpoint for ratcheting away safety buffer on a goal (HT Jolly <3)`,
l: ["https://x.com/beemuvi/status/2026098745407156564",
    "https://github.com/beeminder/beeminder/issues/5492"],
d: "2026-02-23",
e: "2026-02-23",
}, { // ------------------------------------------------------------------------
x: `Added a new section to the API docs for ratcheting, with example code, etc`,
l: ["https://x.com/beemuvi/status/2026098867805233192",
    "https://api.beeminder.com/#ratchet",
    "https://github.com/beeminder/beeminder/issues/5492"],
d: "2026-02-23",
e: "2026-02-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: New screenshots in all 5 of the articles in the Example Goals section that wanted them, plus new links, plus copyediting`,
l: ["https://x.com/beemuvi/status/2026457510874591572",
    "https://help.beeminder.com/article/71-example-10k-steps",
    "https://help.beeminder.com/article/94-example-goal-eat-14-servings-of-vegetables-per-week",
    "https://help.beeminder.com/article/95-example-goal-learn-a-new-language",
    "https://help.beeminder.com/article/72-example-goal-run-3-times-per-week",
    "https://help.beeminder.com/article/92-example-goal-go-to-the-gym-4-times-per-week"],
e: "2026-02-24",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rephrasing/streamlining of "What is my data?" and "Custom goals" and the "less time on Facebook" example goal article`,
l: ["https://x.com/beemuvi/status/2026457871765090471",
    "https://help.beeminder.com/article/36-what-is-my-data",
    "https://help.beeminder.com/article/97-custom-goals",
    "https://help.beeminder.com/article/93-example-goal-spend-less-time-on-facebook"],
e: "2026-02-24",
}, { // ------------------------------------------------------------------------
x: `Visual Graph Editor: Better error checking / no silent failures when talking to Beeminder's servers`,
l: ["https://x.com/beemuvi/status/2026823920469618911",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/ac33341cb21328eb674a103babbb204a2c0792e8",
    "https://github.com/beeminder/road/commit/7cf0991998e4257f14f92b044fe65a0eda75d92d"],
e: "2026-02-25",
}, { // ------------------------------------------------------------------------
x: `Visual Graph Editor: Added missing alt text and page title (what you see when you hover over the browser tab) and fixed the clickable area for two checkboxes`,
l: ["https://x.com/beemuvi/status/2026824035271864569",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/685c7f3bccd971f3fd0c17cebb9d4285c12d3286",
    "https://github.com/beeminder/road/commit/450911d16323556d682621a2af7f80f6603d3061"],
e: "2026-02-25",
s: `Specifically the "Show data" and "Propagate forward" checkboxes`,
}, { // ------------------------------------------------------------------------
x: `Visual Graph Editor: Added hovertext to all the buttons and interactive elements of the graph that didn't already have them or have words on them`,
l: ["https://x.com/beemuvi/status/2027185685510402086",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/135f0d7a3e6395ed9cea29cc3e0ead7a7dc83a50"],
d: "2026-02-26",
e: "2026-02-26",
}, { // ------------------------------------------------------------------------
x: `The Intend.do integration was sending thousands of spurious emails falsely complaining of errors submitting data to Beeminder. #bugfix`,
l: ["https://x.com/beemuvi/status/2027185847645458845",
    "https://forum.beeminder.com/t/current-issue-datapoints-not-submitting-from-intend-associated-slowdown-in-support-responses/12725",
    "https://github.com/malcolmocean/intend/commit/f86bcd66936a18435634522ca72da575473100aa"],
d: "2026-02-26",
s: `We actually pushed a changed directly to Intend to fix this. HT Nicky and Claude, and Malcolm for giving us access.`,
}, { // ------------------------------------------------------------------------
f: true,
x: `Switched to an honor system against deadline snoozing on beemergency days instead of a blanket restriction within 6 hours and guilt trip emails otherwise`,
l: ["https://x.com/beemuvi/status/2027530428039704623",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5554"],
d: "2026-02-26",
e: "2026-02-27",
}, { // ------------------------------------------------------------------------
x: `So no more "Snoozing your beeminder deadline" emails; instead a confirmation popup that asks you to promise you're changing the deadline for a principled reason`,
l: ["https://x.com/beemuvi/status/2027530511506411664",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5554"],
d: "2026-02-26",
e: "2026-02-27",
s: `"I swear I'm not being akratic"`,
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2026feb */ ]

batches['2026mar'] = [{
}, { // ------------------------------------------------------------------------
x: `Also you have to make changes from the individual goal page: we don't let you do it en masse on the Reminders FWOMP page when it's a beemergency`,
l: ["https://x.com/beemuvi/status/2028633156564467779",
    "https://www.beeminder.com/reminders",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5554"],
d: "2026-02-26",
e: "2026-03-02",
}, { // ------------------------------------------------------------------------
x: `And the Reminders page now has inline error messages, with the specific goal row with errors highlighted (and the error messages themselves are better)`,
l: ["https://x.com/beemuvi/status/2028633423171195332",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5554"],
d: "2026-02-26",
e: "2026-03-02",
}, { // ------------------------------------------------------------------------
x: `The reminders page now indicates goals that are beemergencies with a red clock icon, and makes all the tooltip explanations nice and tablet accessible`,
l: ["https://x.com/beemuvi/status/2028995296248861165",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5554"],
d: "2026-02-26",
e: "2026-03-03",
}, { // ------------------------------------------------------------------------
x: `And we differentiate which deadlines are disabled because of beemergency vs because of attached autodata and give explanations inline`,
l: ["https://x.com/beemuvi/status/2028995425995513916",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5554"],
d: "2026-02-26",
e: "2026-03-03",
}, { // ------------------------------------------------------------------------
x: `Finally, we updated the links to individual goals from the reminders page to use an anchor and go directly to the goal's deadline & reminder settings section`,
l: ["https://x.com/beemuvi/status/2029353026583183523",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5554"],
d: "2026-02-26",
e: "2026-03-04",
}, { // ------------------------------------------------------------------------
x: `Dumb bug with draggable popups that wouldn't let you *not* drag them, like they'd drag if you just tried to highlight text in them. #bugfix`,
l: ["https://x.com/beemuvi/status/2029353132724240582",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5560"],
e: "2026-03-04",
}, { // ------------------------------------------------------------------------
f: true,
x: `Death to deadline snoozing for real -- no honor system!`,
l: ["https://x.com/beemuvi/status/2029716359756796312",
    "https://blog.beeminder.com/snooze",
    "https://forum.beeminder.com/t/death-to-deadline-snoozing/12735",
    "https://github.com/beeminder/beeminder/commit/f7ddeed5b093fce72e4cd93bb28fba2cfefad0fd",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5561"],
d: "2026-03-03",
e: "2026-03-05",
}, { // ------------------------------------------------------------------------
x: `That means new webcopy for the popup and on the Reminders page to be clear that deadline snoozing on beemergency days is verboten`,
l: ["https://x.com/beemuvi/status/2029716586689712230",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5561"],
d: "2026-03-03",
e: "2026-03-05",
}, { // ------------------------------------------------------------------------
x: `We also added the Uncle button to the no-snoozing popup and made the Uncle popup replace the currently popped-up popup when you click it`,
l: ["https://x.com/beemuvi/status/2030057351756275908",
    "https://github.com/beeminder/beeminder/issues/1385",
    "https://github.com/beeminder/beeminder/pull/5561"],
d: "2026-03-03",
e: "2026-03-06",
}, { // ------------------------------------------------------------------------
x: `For real now (probably) we use the actual amount you derailed at in the Legit Check email. #bugfix #zombie`,
l: ["https://x.com/beemuvi/status/2030056903896879507",
    "https://changelog.beeminder.com/#5416",
    "https://github.com/beeminder/beeminder/issues/5421",
    "https://github.com/beeminder/beeminder/issues/5512",
    "https://github.com/beeminder/beeminder/pull/5552"],
d: "2026-02-26",
e: "2026-03-06",
s: `Bee: UVI#5416 claimed to fix this; then it happened again and I thought it had to do with a pending stepdown... but turned out I just fucked up the fix; I failed to actually use the passed-in derail amount. ZOMBomBee.`,
}, { // ------------------------------------------------------------------------
x: `If you log time with a Toggl timer across your deadline, we now split the time correctly between the two days, instead of counting it all for the second day`,
l: ["https://x.com/beemuvi/status/2031127772337418249",
    "https://github.com/beeminder/beeminder/issues/5003",
    "https://github.com/beeminder/beeminder/pull/5555"],
d: "2026-03-02",
e: "2026-03-09",
}, { // ------------------------------------------------------------------------
f: true,
x: `Our Toggl integration now supports Do Less goals!`,
l: ["https://x.com/beemuvi/status/2031127868286337097",
    "https://github.com/beeminder/beeminder/issues/1346",
    "https://github.com/beeminder/beeminder/pull/5562"],
d: "2026-03-04",
e: "2026-03-09",
}, { // ------------------------------------------------------------------------
x: `Turned off PPRs for all autodata goals -- there was some confusion with Do Less autodata and PPRs sometimes showing up and sometimes not`,
l: ["https://x.com/beemuvi/status/2031514720654827712",
    "https://github.com/beeminder/beeminder/issues/1346",
    "https://github.com/beeminder/beeminder/pull/5562",
    "https://github.com/beeminder/beeminder/commit/8edcf4320848899d1ff50cf73f47da71ddbf8a43"],
d: "2026-03-04",
e: "2026-03-10",
s: `Concluded that we don't need them when there's an automatic data source, since the point of them is "you might just be avoiding us", which is not really possible with an autodata source`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Trimming and rephrasing and streamlining and rearranging in the "What happens if I forgot to enter data?" article and similar in 4 other articles`,
l: ["https://x.com/beemuvi/status/2031514839596806201",
    "https://help.beeminder.com/article/38-what-happens-if-i-forgot-to-enter-data",
    "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal",
    "https://help.beeminder.com/article/39-how-do-i-fix-incorrect-data",
    "https://help.beeminder.com/article/40-can-anybody-else-add-data-to-my-goal",
    "https://help.beeminder.com/article/41-can-i-export-my-data"],
e: "2026-03-10",
}, { // ------------------------------------------------------------------------
x: `The fix from UVI#5516 where Intend.do would spam users with spurious error emails got accidentally undone; we've now fixed it more robustly. #bugfix #zombie`,
l: ["https://x.com/beemuvi/status/2031882359273054672",
    "https://github.com/malcolmocean/intend/commit/8e6c2aaaa14aaf462aa24fb886dcf64274e3d84d"],
d: "2026-03-08",
e: "2026-03-11",
}, { // ------------------------------------------------------------------------
x: `We added CSS to the blog to make tables display nicely in GitHub style`,
l: ["https://x.com/beemuvi/status/2031882461911855327",
    "https://blog.beeminder.com/tare",
    "https://github.com/beeminder/blog/pull/598"],
e: "2026-03-11",
}, { // ------------------------------------------------------------------------
x: `Sometimes the data & red-line segments in the interactive graphs were off-by-one (based on deadline or timezone differences) #bugfix`,
l: ["https://x.com/beemuvi/status/2032221451198337532",
    "https://github.com/beeminder/beeminder/issues/5392",
    "https://github.com/beeminder/beeminder/pull/5565"],
d: "2026-03-09",
e: "2026-03-12",
s: `Now we're using the exact same API to transform/collect data & graph params for the interactive graphs as we use for Beebrain & graph.beeminder.com`,
}, { // ------------------------------------------------------------------------
f: true,
x: `Added a new column with current dial rate (i.e. the rate in the commitment dial, not necessarily the current rate today of the red line) to the breaks page`,
l: ["https://x.com/beemuvi/status/2032221780988068106",
    "https://www.beeminder.com/breaks",
    "https://github.com/beeminder/beeminder/issues/5351",
    "https://github.com/beeminder/beeminder/pull/5568"],
d: "2026-03-10",
e: "2026-03-12",
s: `Got a request from Theo for "a page which I could use when calendialing to review the commitment rates of all my goals"`,
}, { // ------------------------------------------------------------------------
x: `We now accept fractional rates in the take-a-break goal settings section, and on the megabreak page (for consistency with setting rates in the commitment dial)`,
l: ["https://x.com/beemuvi/status/2032227820064424240",
    "https://github.com/beeminder/beeminder/issues/4058",
    "https://github.com/beeminder/beeminder/pull/5570"],
d: "2026-03-12",
e: "2026-03-12",
}, { // ------------------------------------------------------------------------
x: `Goal setup with the "N things due in M days" text was wrong if you specified initial buffer before rate. #bugfix`,
l: ["https://x.com/beemuvi/status/2032227915568726484",
    "https://github.com/beeminder/beeminder/issues/5556",
    "https://github.com/beeminder/beeminder/pull/5563"],
e: "2026-03-12",
s: `Simple fix to path dependency in showing the user "N things due in M days" depending on whether you entered the slope or the leeway first`,
}, { // ------------------------------------------------------------------------
x: `Visual Graph Editor: In robusting up the code we accidentally broke the ability to create new knots by double-clicking. #bugfix #zombie HT aad`,
l: ["https://x.com/beemuvi/status/2033691242148860084",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/526c5e9e641ba0402f0736cc4f5d318403514435"],
d: "2026-03-13",
e: "2026-03-16",
}, { // ------------------------------------------------------------------------
x: `Help docs: Made the article in increasing stakes markedly clearer, even less misleading, plus minor edits for clarity in 6 other articles`,
l: ["https://x.com/beemuvi/status/2033691583695229307",
    "https://help.beeminder.com/article/343-can-i-increase-the-pledge-on-my-goal",
    "https://help.beeminder.com/article/113-can-i-import-previous-data",
    "https://help.beeminder.com/article/42-switching-goal-units",
    "https://help.beeminder.com/article/19-how-much-does-beeminder-cost",
    "https://help.beeminder.com/article/324-when-do-i-pay",
    "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals",
    "https://help.beeminder.com/article/21-can-i-decrease-the-pledge-on-my-goal"],
e: "2026-03-16",
}, { // ------------------------------------------------------------------------
x: `We were erroneously conservarounding the rates in the new column of the megabreak page. Now they show full precision.`,
l: ["https://x.com/beemuvi/status/2034049472679055778",
    "https://github.com/beeminder/beeminder/pull/5573"],
e: "2026-03-17",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rearranged and rephrased the "Can I have goals without pledges?" article to discourage such, plus minor tweaks to 3 other articles`,
l: ["https://x.com/beemuvi/status/2034049569089339679",
    "https://help.beeminder.com/article/23-can-i-have-goals-without-pledges",
    "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets",
    "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription",
    "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work"],
e: "2026-03-17",
}, { // ------------------------------------------------------------------------
x: `On the dashboard, we no longer toggle the expand/collapse state when using double-click-to-refresh`,
l: ["https://x.com/beemuvi/status/2034412650860622196",
    "https://github.com/beeminder/beeminder/pull/5576"],
e: "2026-03-18",
}, { // ------------------------------------------------------------------------
x: `Also on the dashboard, the "r" hotkey and the double-click refresh both fetch autodata in addition to the refresh`,
l: ["https://x.com/beemuvi/status/2034412723929596224",
    "https://github.com/beeminder/beeminder/pull/5576"],
e: "2026-03-18",
}, { // ------------------------------------------------------------------------
x: `Help docs: Payment methods article explains honey money workaround for users in India (and more on honey generally) plus minor disambiguating in 1 other article`,
l: ["https://x.com/beemuvi/status/2034776529943896450",
    "https://help.beeminder.com/article/27-what-payment-methods-are-available",
    "https://help.beeminder.com/article/26-what-if-i-buy-one-plan-and-change-my-mind"],
e: "2026-03-19",
}, { // ------------------------------------------------------------------------
x: `Payments page is now viewable on mobile http://beeminder.com/payments`,
l: ["https://x.com/beemuvi/status/2034776845582049791",
    "https://github.com/beeminder/beeminder/issues/4249",
    "https://github.com/beeminder/beeminder/pull/5577"],
e: "2026-03-19",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a negative-honey-money bit to "What happens if a charge fails?" (and similar for "How does Honey Money work?") due to user confusion/indignation`,
l: ["https://x.com/beemuvi/status/2039128706040619383",
    "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails",
    "https://help.beeminder.com/article/354-honey-money"],
e: "2026-03-31",
}, { // ------------------------------------------------------------------------
x: `Help docs: Adjusted the section on waking up on time in "What's the best way to beemind ___?" (user thought Beeminder'd zeno them regardless)`,
l: ["https://x.com/beemuvi/status/2039128832419262492",
    "https://help.beeminder.com/article/120-whats-the-best-way-to-beemind"],
e: "2026-03-31",
}, /* --------------------------------------------------------- end 2026mar */ ]

batches['2026apr'] = [{
}, { // ------------------------------------------------------------------------
x: `Help docs: PayPal blurb added to "How do I update my payment info?" (since we *still* haven't fully phased it out) plus clarifications etc to 3 other articles`,
l: ["https://x.com/beemuvi/status/2039491263540629846",
    "https://help.beeminder.com/article/28-how-do-i-update-my-payment-information",
    "https://help.beeminder.com/article/29-why-did-beeminder-charge-my-card",
    "https://help.beeminder.com/article/12-what-is-a-derailment",
    "https://help.beeminder.com/article/13-when-do-derailments-happen"],
e: "2026-04-01",
}, { // ------------------------------------------------------------------------
x: `We broke our graph previews in goal creation for a while. #bugfix #zombie`,
l: ["https://x.com/beemuvi/status/2039491441005937096",
    "https://github.com/beeminder/beeminder/pull/5587"],
d: "2026-03-31",
e: "2026-04-01",
s: "D3 version mismatch",
}, { // ------------------------------------------------------------------------
f: true,
x: `New autodata integration: BoardGameGeek!`,
l: ["https://x.com/beemuvi/status/2039852028378350029",
    "https://blog.beeminder.com/boardgamegeek",
    "https://github.com/beeminder/beeminder/pull/5586"],
e: "2026-04-02",
}, { // ------------------------------------------------------------------------
x: `The BoardGameGeek integration supports Do More goals and Do Less goals, and you can track all games or a specific game; added to the gallery, etc`,
l: ["https://x.com/beemuvi/status/2039852201871642857",
    "https://github.com/beeminder/beeminder/pull/5586",
    "https://github.com/beeminder/beeminder/pull/5588"],
e: "2026-04-02",
}, { // ------------------------------------------------------------------------
x: `Help docs: New article for the new BoardGameGeek integration (also blog post and landing page, etc)`,
l: ["https://x.com/beemuvi/status/2039852316380348420",
    "https://help.beeminder.com/article/381-boardgamegeek"],
}, { // ------------------------------------------------------------------------
x: `There was some ugliness with long autodata names making the icon look off center, or the name wrapping, in the list of autodata icons during goal setup. #css`,
l: ["https://x.com/beemuvi/status/2039852732618768434",
    "https://github.com/beeminder/beeminder/pull/5586/changes/cca8e2de2b4e8a8c1a4210e45c3e8c924df554e9",
    "https://github.com/beeminder/beeminder/pull/5586"],
e: "2026-04-02",
s: `Adding screenshots to the PR`,
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
x: `The "todayta" checkmark that we add to the dashboard row after you add data was getting hidden when you super-collapse a dashboard row. Now it always shows.`,
l: ["https://x.com/beemuvi/status/2041303228130918583",
    "https://github.com/beeminder/beeminder/pull/5589"],
d: "2026-04-02",
e: "2026-04-06",
}, { // ------------------------------------------------------------------------
x: `We added Pilates as an activity type to the Strava autodata integration`,
l: ["https://x.com/beemuvi/status/2041303374541492284",
    "https://github.com/beeminder/beeminder/issues/5566",
    "https://github.com/beeminder/beeminder/pull/5590"],
d: "2026-04-06",
e: "2026-04-06",
s: `Strava goals don't have full custom settings, so you can't add it to an existing goal, it is just one of the options when you are initially setting up a goal`,
}, { // ------------------------------------------------------------------------
x: `Band-aided a bug where a Beemium user could get a false-positive "end of feetwetting" email by dropping their pledge to $0. #bugfix`,
l: ["https://x.com/beemuvi/status/2041667007331135908",
    "https://github.com/beeminder/beeminder/pull/5583"],
e: "2026-04-07",
s: `Contra anti-magic, added an if-statement: no feetwetting email for goals created over a month ago. Bee thinks this is her fault for implementing feetwetting as a stack of kludges.`,
}, { // ------------------------------------------------------------------------
x: `Datapoint values now understand timey arithmetic (in, ironically, non-advanced entry), like Beeminder understands "00:10:00+00:05:30" to mean 00:15:30`,
l: ["https://x.com/beemuvi/status/2041667079133393326",
    "https://github.com/beeminder/beeminder/pull/5582"],
d: "2026-04-07",
e: "2026-04-07",
}, { // ------------------------------------------------------------------------
x: `Datapoint value placeholder text on dashboard and goal page for timey goals now respects the HH:MM vs HH:MM:SS setting and shows, e.g, "e.g., 0:06:23" if HH:MM:SS`,
l: ["https://x.com/beemuvi/status/2042025869296988161",
    "https://github.com/beeminder/beeminder/pull/5582"],
d: "2026-04-07",
e: "2026-04-08",
s: `Previously always showed "e.g., 00:01"`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Added the clarification in the No-Excuses Mode article that opting back out isn't retroactive, plus minor rewriting/tightening in 2 other articles`,
l: ["https://x.com/beemuvi/status/2042025979175170407",
    "https://help.beeminder.com/article/360-what-is-no-excuses-mode",
    "https://help.beeminder.com/article/16-what-is-a-legit-derailment",
    "https://help.beeminder.com/article/17-what-happens-when-i-derail"],
e: "2026-04-08",
}, { // ------------------------------------------------------------------------
x: `Emailed users about changes to their datapoints when we updated them with #TAREs and removed the odometer reset setting. See UVI#5371+`,
l: ["https://x.com/beemuvi/status/2042391933449093626",
    "https://github.com/beeminder/beeminder/pull/5419"],
e: "2026-04-09",
s: `Looks like we did do this at the time but krugerk was omitted for a technical reason`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Highlighted and clarified key points in the Uncle Button article plus more minor streamlining/clarifying in 2 other articles`,
l: ["https://x.com/beemuvi/status/2042392018929045712",
    "https://help.beeminder.com/article/376-what-is-the-uncle-button",
    "https://help.beeminder.com/article/325-help-something-came-up-and-i-cant-do-my-goal",
    "https://help.beeminder.com/article/61-apple-health"],
e: "2026-04-09",
}, { // ------------------------------------------------------------------------
x: `A user helpfully pointed out that when you picked all languages in Clozemaster goal setup the graph preview step of setup failed. #bugfix`,
l: ["https://x.com/beemuvi/status/2044203993417822576",
    "https://github.com/beeminder/beeminder/issues/5596",
    "https://github.com/beeminder/beeminder/pull/5597"],
d: "2026-04-10",
e: "2026-04-14",
}, { // ------------------------------------------------------------------------
x: `Relatedly, we'd start the goal with the red line at an incorrect value, because we weren't passing along the initial value correctly. #bugfix`,
l: ["https://x.com/beemuvi/status/2044204100515254685",
    "https://github.com/beeminder/beeminder/issues/5596",
    "https://github.com/beeminder/beeminder/pull/5597"],
d: "2026-04-10",
e: "2026-04-14",
}, { // ------------------------------------------------------------------------
x: `Plus error handling like if you haven't actually started Clozemaster language learning and have no points at all yet. #bugfix`,
l: ["https://x.com/beemuvi/status/2044554294448521274",
    "https://github.com/beeminder/beeminder/issues/5596",
    "https://github.com/beeminder/beeminder/pull/5597"],
d: "2026-04-10",
e: "2026-04-15",
}, { // ------------------------------------------------------------------------
x: `The blog now has a nicer slider/carousel for related posts, based on shared tags. HT narthur`,
l: ["https://x.com/beemuvi/status/2044554432185307282",
    "https://blog.beeminder.com/",
    "https://github.com/beeminder/blog/pull/627"],
e: "2026-04-15",
}, { // ------------------------------------------------------------------------
x: `A pledge dropped to $0 (a Beemium-only thing) could pop back up to $5 within 24 hours of the step-down due to more pledge cap & feetwetting confusion. #bugfix`,
l: ["https://x.com/beemuvi/status/2044888921612714130",
    "https://github.com/beeminder/beeminder/issues/5602",
    "https://github.com/beeminder/beeminder/pull/5603"],
e: "2026-04-16",
s: `See also UVI#5557. Technically probably not a full fix since it's more of a belt, but still lacking suspenders?`,
}, { // ------------------------------------------------------------------------
x: `Help docs: New section for the Boss as a Service integration about adding data to private goals, plus tweaks to 5 other autodata integration articles`,
l: ["https://x.com/beemuvi/status/2044892335214121379",
    "https://help.beeminder.com/article/329-boss-as-a-service-baas",
    "https://help.beeminder.com/article/290-clozemaster",
    "https://help.beeminder.com/article/288-codecombat",
    "https://help.beeminder.com/article/364-curlex",
    "https://help.beeminder.com/article/80-duolingo",
    "https://help.beeminder.com/article/366-fatebook"],
e: "2026-04-16",
}, { // ------------------------------------------------------------------------
x: `Help docs: New FAQ items in the BoardGameGeek integration article plus a step-by-step example goal setup guide, plus minor tweaking of the Fitbit article`,
l: ["https://x.com/beemuvi/status/2045277678358696154",
    "https://help.beeminder.com/article/381-boardgamegeek",
    "https://help.beeminder.com/article/11-fitbit"],
d: "2026-04-09",
e: "2026-04-17",
}, { // ------------------------------------------------------------------------
f: true,
x: `Much nicer UI for choosing pledges and pledge caps (not yet available as part of goal creation, but in goal settings or the popup when you click the pledge)`,
l: ["https://x.com/beemuvi/status/2045277961348342245",
    "https://github.com/beeminder/beeminder/issues/4775"],
d: "2026-04-15",
e: "2026-04-17",
}, { // ------------------------------------------------------------------------
x: `Drag the dot on either slider (pledge or cap) and the other one will move accordingly so the cap is never less than the pledge`,
l: ["https://x.com/beemuvi/status/2046377189051158743",
    "https://github.com/beeminder/beeminder/issues/4775",
    "https://github.com/beeminder/beeminder/issues/5604",
    "https://github.com/beeminder/beeminder/pull/5605"],
d: "2026-04-15",
e: "2026-04-20",
}, { // ------------------------------------------------------------------------
x: `Besides the UI, the biggest UX improvement is that scheduled stepdowns of the pledge and pledge cap happen together, simultaneously`,
l: ["https://x.com/beemuvi/status/2046377268810023326",
    "https://github.com/beeminder/beeminder/issues/1604", /* let me set cap along with pledge stepdown */
    "https://github.com/beeminder/beeminder/pull/5605"],
d: "2026-04-15",
e: "2026-04-20",
}, { // ------------------------------------------------------------------------
x: `Another big usability improvement: you can decrease to any lower amount, not just down by one level a week at a time, like scheduling a $270-to-$5 stepdown`,
l: ["https://x.com/beemuvi/status/2046738352070943069",
    "https://github.com/beeminder/beeminder/issues/1604",
    "https://github.com/beeminder/beeminder/pull/5605"],
d: "2026-04-15",
e: "2026-04-21",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a section to the Focusmate autodata integration article about counting sessions that didn't get partners (and a related bug we're hunting)`,
l: ["https://x.com/beemuvi/status/2046738813909938297",
    "https://help.beeminder.com/article/278-focusmate"],
e: "2026-04-21",
}, { // ------------------------------------------------------------------------
x: `The new pledge and pledge cap sliders are now also in the goal restart interface`,
l: ["https://x.com/beemuvi/status/2047090500080156896",
    "https://github.com/beeminder/beeminder/pull/5609"],
d: "2026-04-22",
e: "2026-04-22",
}, { // ------------------------------------------------------------------------
x: `We added clarification to documentation of the Uncle API endpoint that it's no-takebacks, no refunds (though honey refunds we're ok with)`,
l: ["https://x.com/beemuvi/status/2047090638597005316",
    "https://api.beeminder.com/#unclebutton"],
d: "2026-04-22",
e: "2026-04-22",
}, { // ------------------------------------------------------------------------
x: `The pledge sliders look more like sliders now (at least one user thought they were static diagrams!). Affordance ftw.`,
l: ["https://x.com/beemuvi/status/2047465127474291006",
    "https://github.com/beeminder/beeminder/pull/5610"],
d: "2026-04-23",
e: "2026-04-23",
s: `Smaller amount markers, with labels below the track, so less like buttons, more like tick marks. And thicken the connector to look like a continuous track.`,
}, { // ------------------------------------------------------------------------
x: `We now show the "LOCK IT IN" button by default but it's disabled if you haven't slid the pledge slider`,
l: ["https://x.com/beemuvi/status/2047465234877784487",
    "https://github.com/beeminder/beeminder/pull/5610"],
d: "2026-04-23",
e: "2026-04-23",
}, { // ------------------------------------------------------------------------
x: `The slider-related buttons ("lock it in" or "cancel change") no longer allow double-submits and nicely disable themselves while processing`,
l: ["https://x.com/beemuvi/status/2047798854335287753",
    "https://github.com/beeminder/beeminder/pull/5610"],
d: "2026-04-23",
e: "2026-04-24",
s: `They disable when you submit and re-enable if there's an error, or you make further changes. Unclear if this counts as a bugfix or enhancement.`,
}, { // ------------------------------------------------------------------------
x: `We removed the explanations of the grayed-out pledge levels. They were upselling Beemium. We don't like Beemium, nor carrot-dangling generally.`,
l: ["https://x.com/beemuvi/status/2047799013970493521",
    "https://github.com/beeminder/beeminder/pull/5610"],
d: "2026-04-23",
e: "2026-04-24",
s: `Besides, we consider the graying out self-explanatory: these pledge levels aren't available. Why? Because we said so.`,
}, { // ------------------------------------------------------------------------
x: `For a few days we were implying pledges only increase from $0 after a derail; now we accurately indicate the pledge increases after feet-wetting. #bugfix`,
l: ["https://x.com/beemuvi/status/2048897730714702278",
    "https://github.com/beeminder/beeminder/pull/5610"],
d: "2026-04-23",
e: "2026-04-27",
s: `Now it's like "if you don't set the pledge cap to $0 as well, then your pledge will increase to $5 after the feetwetting period"`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Replaced a screenshot for the Gitminder integration article to keep up with current features plus tiny tweaks/clarifications in 2 other articles`,
l: ["https://x.com/beemuvi/status/2048902297569366373",
    "https://help.beeminder.com/article/81-github",
    "https://help.beeminder.com/article/287-freecodecamp",
    "https://help.beeminder.com/article/74-garmin"],
e: "2026-04-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: Lots of prose tightening and accuracy improvements to the Gmail autodata integration article, plus a Freudian typo fix (emails vs evils)`,
l: ["https://x.com/beemuvi/status/2049258940417106012",
    "https://help.beeminder.com/article/82-gmail"],
e: "2026-04-28",
}, { // ------------------------------------------------------------------------
f: true,
x: `Metaminder goals can finally receive actual datapoint values, not just a +1 per datapoint on the source goal`,
l: ["https://x.com/beemuvi/status/2049259575371812878",
    "https://blog.beeminder.com/metamind",
    "https://github.com/beeminder/beeminder/issues/5493",
    "https://github.com/beeminder/beeminder/pull/5592",
    "https://github.com/beeminder/beeminder/pull/5612"],
d: "2026-04-27",
e: "2026-04-28",
}, { // ------------------------------------------------------------------------
x: `Various UI changes to accommodate the more general Metaminder: count mode (default) vs value mode, plus ability for support workerbees to see/edit this`,
l: ["https://x.com/beemuvi/status/2049633833235218597",
    "https://github.com/beeminder/beeminder/issues/5493"],
d: "2026-04-27",
e: "2026-04-29",
s: `The mode selection is stored in the ii field, so visible to admins`,
}, { // ------------------------------------------------------------------------
x: `We had missed a spot in UVI#5580, namely in goal restart. No more carrot-dangling there either!`,
l: ["https://x.com/beemuvi/status/2049633974927126939",
    "https://github.com/beeminder/beeminder/pull/5616"],
d: "2026-04-29",
e: "2026-04-29",
s: `And we DRY'd this up so this mismatch can't happen again`,
}, { // ------------------------------------------------------------------------
x: `The sliders were only sliding one node at a time on mobile / touchscreens. Now they slide normally. #bugfix`,
l: ["https://x.com/beemuvi/status/2049987214759866637",
    "https://github.com/beeminder/beeminder/pull/5617"],
d: "2026-04-29",
e: "2026-04-30",
}, { // ------------------------------------------------------------------------
x: `We added an interactive widget to the blog post about the sliders and fixed the above bug with it, as well as for a much older interactive blog post`,
l: ["https://x.com/beemuvi/status/2049987349594185802",
    "https://blog.beeminder.com/sliders",
    "https://blog.beeminder.com/fair",
    "https://github.com/beeminder/beeminder/pull/5617"],
d: "2026-04-29",
e: "2026-04-30",
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2026apr */ ]

batches['2026may'] = [{
}, { // ------------------------------------------------------------------------
x: `Help docs: New FAQ item in the Intend autodata integration article about goal setup, plus minor tweaking in 3 other articles`,
l: ["https://x.com/beemuvi/status/2050116813053370685",
    "https://help.beeminder.com/article/85-intend",
    "https://help.beeminder.com/article/83-habitica",
    "https://help.beeminder.com/article/86-ifttt",
    "https://help.beeminder.com/article/338-lichess"],
e: "2026-05-01",
}, { // ------------------------------------------------------------------------
x: `Help docs: Updated the Make autodata integration article to desribe an improvement to it, plus tiny tweaks in 2 other articles`,
l: ["https://x.com/beemuvi/status/2051755285010919698",
    "https://help.beeminder.com/article/318-make-formerly-integromat",
    "https://help.beeminder.com/article/369-maayot",
    "https://help.beeminder.com/article/352-manifold"],
e: "2026-05-05",
}, { // ------------------------------------------------------------------------
x: `Made the link from the deadline-snoozing popup to the blog post about it open in a new tab. Also a new purply color for the "goal is archiving" warning.`,
l: ["https://x.com/beemuvi/status/2052533595802317011",
    "https://github.com/beeminder/beeminder/pull/5618",
    "https://github.com/beeminder/beeminder/pull/5620"],
d: "2026-05-06",
e: "2026-05-07",
s: `Aka target=blank for links in modals, which seems conventional. Aka tertiary color.`,
}, { // ------------------------------------------------------------------------
x: `Added a cache control header and removed the "expires-at" one to make hotlinks to graph images stop breaking. Also link previews for 404 and 403.5 pages.`,
l: ["https://x.com/beemuvi/status/2052533724684894580",
    "https://github.com/beeminder/beeminder/issues/5322",
    "https://github.com/beeminder/beeminder/issues/5367",
    "https://github.com/beeminder/beeminder/pull/5621"],
d: "2026-05-06",
e: "2026-05-07",
s: `Fingers crossed this finally works for image hotlinking. Not sure the link previews for non-200-response pages actually matters though`,
}, { // ------------------------------------------------------------------------
x: `Oops, the email bot was confused by the "paying/repledging $X" wording in legit check subject lines. Relatedly, added "paying" as a disallowed username. #bugfix`,
l: ["https://x.com/beemuvi/status/2052846002043060324",
    "https://github.com/beeminder/beeminder/issues/4796",
    "https://github.com/beeminder/beeminder/pull/5622"],
e: "2026-05-08",
s: `Happened if a user CC'd the emailbot on a legit check because it parsed the "paying/repledging" as USERNAME/GOALNAME. Now it just knows that isn't a valid yoog.`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Updated the Metaminder article in light of the new values-vs-plus-one feature`,
l: ["https://x.com/beemuvi/status/2052846093109739884",
    "https://help.beeminder.com/article/323-metaminder"],
e: "2026-05-08",
}, { // ------------------------------------------------------------------------
x: `The pledge stepdown indicator on the goal page was wrong if stepping multiple steps in one go. Say you were stepping from $90=>$5, it'd say $90=>$30. #bugfix`,
l: ["https://x.com/beemuvi/status/2053986611000688642",
    "https://github.com/beeminder/beeminder/issues/5624",
    "https://github.com/beeminder/beeminder/pull/5625"],
e: "2026-05-11",
}, { // ------------------------------------------------------------------------
x: `Help docs: Updated 3 articles about pledges and pledge caps in light of the new coupled sliders and more lenient rules for changing pledges/caps`,
l: ["https://x.com/beemuvi/status/2053986680840089952",
    "https://help.beeminder.com/article/21-can-i-decrease-the-pledge-on-my-goal",
    "https://help.beeminder.com/article/343-can-i-increase-the-pledge-on-my-goal",
    "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets"],
e: "2026-05-11",
}, { // ------------------------------------------------------------------------
x: `Revamped how we hit the Toggl API to fetch autodata; now less likely to hit rate limits`,
l: ["https://x.com/beemuvi/status/2054333158917799959",
    "https://forum.beeminder.com/t/toggl-api-limits-changed/12534/1",
    "https://github.com/beeminder/beeminder/issues/5400"],
e: "2026-05-12",
}, { // ------------------------------------------------------------------------
x: `Added a silent reCAPTCHA to the "keep abreast of the buzz" mailing list signup to reduce spam; mostly invisible to normal users unless you're sus I guess`,
l: ["https://x.com/beemuvi/status/2054333782636023993",
    "https://github.com/beeminder/beeminder/issues/4840",
    "https://github.com/beeminder/beeminder/pull/5629"],
e: "2026-05-12",
}, { // ------------------------------------------------------------------------
x: `Added a little ⚠️ indicator icon in the dashboard for goals with graph generation errors, to match what we do with autodata errors`,
l: ["https://x.com/beemuvi/status/2056811195827720667",
    "https://github.com/beeminder/beeminder/issues/5542",
    "https://github.com/beeminder/beeminder/pull/5630"],
d: "2026-05-12",
e: "2026-05-19",
s: `Aka Beebrain errors aka BBerrors`,
}, { // ------------------------------------------------------------------------
x: `Also we now show the indicator icons (graph gen error, autodata error, archive coming up) in super-collapsed view (alongside todayta checkmark)`,
l: ["https://x.com/beemuvi/status/2056811326186684511",
    "https://github.com/beeminder/beeminder/issues/5542",
    "https://github.com/beeminder/beeminder/pull/5630"],
d: "2026-05-12",
e: "2026-05-19",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a warning to the RSSminder article about Substack's laggy RSS feed, plus copy tweaks in 4 other articles`,
l: ["https://x.com/beemuvi/status/2057242841534054485",
    "https://help.beeminder.com/article/331-rssminder",
    "https://help.beeminder.com/article/361-oura",
    "https://help.beeminder.com/article/368-postminder",
    "https://help.beeminder.com/article/292-project-euler",
    "https://help.beeminder.com/article/347-readwise-reader"],
e: "2026-05-20",
}, { // ------------------------------------------------------------------------
x: `Help docs: The Odometer Goals article clarifies that odometer resets don't have to be to zero, plus minor tweaks in 3 other articles`,
l: ["https://x.com/beemuvi/status/2057243027891216434",
    "https://help.beeminder.com/article/68-odometer-goals",
    "https://help.beeminder.com/article/77-runkeeper",
    "https://help.beeminder.com/article/89-skritter",
    "https://help.beeminder.com/article/116-slack"],
e: "2026-05-20",
}, { // ------------------------------------------------------------------------
x: `On the goal page, we updated the link to "Why Beeminder likes cumulative graphs" to point to the Beeminder blog post instead of to a forum thread about it`,
l: ["https://x.com/beemuvi/status/2057605294164001041",
    "https://blog.beeminder.com/grayson",
    "https://github.com/beeminder/beeminder/issues/5623",
    "https://github.com/beeminder/beeminder/pull/5631"],
d: "2026-05-20",
e: "2026-05-21",
}, { // ------------------------------------------------------------------------
x: `In the new slider interface, we fixed some ugliness with the old alternate pledge schedule overrunning its modal area. #css`,
l: ["https://x.com/beemuvi/status/2057605372723274141",
    "https://github.com/beeminder/beeminder/issues/5606",
    "https://github.com/beeminder/beeminder/pull/5632",
    "https://github.com/beeminder/beeminder/commit/7b01bc1fb9652e4fce99825df0b708458bfcf686"],
d: "2026-05-21",
e: "2026-05-21",
s: `Was fugly for folks on deprecated alternate pledge schedule -- fixed the layout by removing the highest option since no active goals were at that amount anyway`,
}, { // ------------------------------------------------------------------------
x: `API fix: The post-deauth callback was not actually identifying the user that deauthed to the client. Now it sends the username and client ID back. HT narthur`,
u: ["https://x.com/beemuvi/status/2059406309917868405",
    "https://forum.beeminder.com/t/bug-deauth-callback-requests-broken/12777",
    "https://github.com/beeminder/beeminder/pull/5633"],
d: "2026-05-26",
e: "2026-05-26",
s: `HT @narthur; the callback was previously just posting 'access_token: nil' to the registered endpoint.. not very useful. We don't store the access token, only the hash.`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a section, based on user feedback, about canceling breaks to the "Can I pause my goal?" article`,
l: ["https://x.com/beemuvi/status/2059406406105936090",
    "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit"],
e: "2026-05-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: Swapped in an updated screenshot in the Sleep as Android autodata integration article, plus copy trimming`,
l: ["https://x.com/beemuvi/status/2059782771443396612",
    "https://help.beeminder.com/article/84-sleep-as-android"],
e: "2026-05-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: In the Steam integration article, added new FAQs based on problems users have had`,
l: ["https://x.com/beemuvi/status/2059782882827399473",
    "https://help.beeminder.com/article/379-steam"],
e: "2026-05-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: Also in the Steam article, added new setup info like how to find your Steam ID and what the privacy settings need to be`,
l: ["https://x.com/beemuvi/status/2059783005674393653",
    "https://help.beeminder.com/article/379-steam"],
e: "2026-05-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: Minor streamlining, rearranging, removing stalenesses, clarifying, and other tweaking in 6 articles`,
l: ["https://x.com/beemuvi/status/2060132812263731426",
    "https://help.beeminder.com/article/112-sms",
    "https://help.beeminder.com/article/281-strava",
    "https://help.beeminder.com/article/289-taskratchet",
    "https://help.beeminder.com/article/300-the-storygraph",
    "https://help.beeminder.com/article/370-time-stream",
    "https://help.beeminder.com/article/79-todoist"],
e: "2026-05-28",
}, { // ------------------------------------------------------------------------
x: `New Wakatime goals are now created with aggday "max" (instead of "last") to mitigate an autofetch problem with Wakatime occasionally returning "0"s`,
l: ["https://x.com/beemuvi/status/2060466632867340346",
    "https://github.com/beeminder/beeminder/issues/322",
    "https://github.com/beeminder/beeminder/pull/5639"],
d: "2026-05-29",
e: "2026-05-29",
s: `This is an occasional thing related to when Wakatime is recalculating totals (only a mitigation since a total fix would require waiting on autodata runs and re-runs to derail goals)`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Adjusted text/screenshots in the Toggl autodata integration article in light of UVI#5530 and being able to have Toggl Do Less goals without premium`,
l: ["https://x.com/beemuvi/status/2060466941769429369",
    "https://help.beeminder.com/article/155-toggl"],
e: "2026-05-29",
}, /* --------------------------------------------------------- end 2026may */ ]

batches['2026jun'] = [{
f: true,
x: `Version 6.8 of the Beeminder iOS app! Headline new feature is in-app goal settings. Plus a long list of fixes and improvements, especially for autodata goals.`,
l: ["https://x.com/beemuvi/status/2061627821571919945",
    "https://apps.apple.com/us/app/beeminder/id551869729",
    "https://github.com/beeminder/BeeSwift/blob/master/CHANGELOG.md"],
d: "2026-06-01",
e: "2026-06-01",
}, { // ------------------------------------------------------------------------
i: true,
x: `Goal settings gives quick access to notification settings and autodata source config, plus we restructured the main menu to put this at the top`,
l: ["https://x.com/beemuvi/status/2061628044968919340",
    "https://github.com/beeminder/BeeSwift/pull/726"],
e: "2026-06-01",
}, { // ------------------------------------------------------------------------
i: true,
x: `New setting for weight-loss goals: toggle between individual weighings or the daily min. The former includes comments like "Weight via Withings at 9:00 AM".`,
l: ["https://x.com/beemuvi/status/2061953703821836766",
    "https://github.com/beeminder/BeeSwift/pull/724"],
e: "2026-06-02",
}, { // ------------------------------------------------------------------------
i: true,
x: `You can now filter which workout types (organized into 7 categories; defaults to everything) the Apple Health integration includes when syncing workout minutes`,
l: ["https://x.com/beemuvi/status/2061953790962717028",
    "https://github.com/beeminder/BeeSwift/pull/709"],
e: "2026-06-02",
s: `By default all workout types are included (including future iOS workout types the app doesn't know about). Users can select specific types organized into 7 categories (Cardio, Strength, Mind & Body, Racquet Sports, Team Sports, Individual Sports, Outdoor & Adventure).`,
}, { // ------------------------------------------------------------------------
i: true,
x: `Moved the gallery sort UI onto the gallery screen itself, with a native menu and checkmark for the selected order`,
l: ["https://x.com/beemuvi/status/2067016073229312438",
    "https://github.com/beeminder/BeeSwift/pull/616",
    "https://github.com/beeminder/BeeSwift/pull/769"],
e: "2026-06-16",
}, { // ------------------------------------------------------------------------
i: true,
x: `You can now see the full autodata configuration preview (filters and a preview of your data) when reconfiguring an Apple Health goal`,
l: ["https://x.com/beemuvi/status/2067016216494141890",
    "https://github.com/beeminder/BeeSwift/pull/714"],
e: "2026-06-16",
}, { // ------------------------------------------------------------------------
i: true,
x: `The configuration screen for an Apple Health metric now shows the Beeminder goal and its goal units at the top, plus workout-specific config`,
l: ["https://x.com/beemuvi/status/2067016216494141890",
    "https://github.com/beeminder/BeeSwift/pull/712"],
e: "2026-06-16",
}, { // ------------------------------------------------------------------------
i: true,
x: `The datapoint list now uses three aligned columns: day, value, comment. It sizes them dynamically and shows the month as needed, plus various alignment fixes.`,
l: ["https://x.com/beemuvi/status/2067386158435422280",
    "https://github.com/beeminder/BeeSwift/pull/713"],
e: "2026-06-17",
}, { // ------------------------------------------------------------------------
i: true,
x: `Exercise Minutes, Workout Minutes, and Water now have sensible default precision`,
l: ["https://x.com/beemuvi/status/2067386281752215835",
    "https://github.com/beeminder/BeeSwift/pull/668"],
e: "2026-06-17",
}, { // ------------------------------------------------------------------------
i: true,
x: `You can now edit notification times in 24-hour mode. #bugfix`,
l: ["https://x.com/beemuvi/status/2067739486751281256",
    "https://github.com/beeminder/BeeSwift/pull/619"],
e: "2026-06-18",
}, { // ------------------------------------------------------------------------
i: true,
x: `You can also set goal deadlines in the same place`,
l: ["https://x.com/beemuvi/status/2067739633954533470",
    "https://github.com/beeminder/BeeSwift/pull/619"],
e: "2026-06-18",
}, { // ------------------------------------------------------------------------
i: true,
x: `We brought back a better version of the colored deltas: a concise due-by table showing what's needed to get different amounts of safety buffer`,
l: ["https://x.com/beemuvi/status/2068090590294917289",
    "https://github.com/beeminder/BeeSwift/issues/567",
    "https://github.com/beeminder/BeeSwift/pull/547"],
e: "2026-06-19",
}, { // ------------------------------------------------------------------------
i: true,
x: `Notifications about beemergencies (aka Zeno notifications) now include username and goalname`,
l: ["https://x.com/beemuvi/status/2068090727838654743",
    "https://github.com/beeminder/beeminder/pull/5359"],
e: "2026-06-19",
}, { // ------------------------------------------------------------------------
i: true,
x: `Search uses goal descriptions, not just goalnames, plus you can search for goals when creating Shortcuts`,
l: ["https://x.com/beemuvi/status/2069125514217013505",
    "https://github.com/beeminder/BeeSwift/issues/218",
    "https://github.com/beeminder/BeeSwift/issues/631",
    "https://github.com/beeminder/BeeSwift/pull/632",
    "https://github.com/beeminder/BeeSwift/pull/669"],
e: "2026-06-22",
}, { // ------------------------------------------------------------------------
i: true,
x: `More UI polish: new menu icon, confirmation for disconnecting autodata, metric config simplifications, microcopy tweaks, less misleading freshness indicator`,
l: ["https://x.com/beemuvi/status/2069125610547601651",
    "https://github.com/beeminder/BeeSwift/pull/659",
    "https://github.com/beeminder/BeeSwift/issues/573",
    "https://github.com/beeminder/BeeSwift/pull/585",
    "https://github.com/beeminder/BeeSwift/issues/604",
    "https://github.com/beeminder/BeeSwift/pull/708",
    "https://github.com/beeminder/BeeSwift/issues/265"],
e: "2026-06-22",
s: `Bonus things: When filtering goals in the gallery and no goals match the filter, the app now shows a helpful message indicating how many goals are hidden, instead of "You have no Beeminder goals!"; Direct link from goal to Apple Health settings for that goal?`,
}, { // ------------------------------------------------------------------------
i: true,
x: `Goalnames are primary with descriptions as subtitles, and more UI smoothenings like showing the gallery behind the keyboard and fixing a render jump`,
l: ["https://x.com/beemuvi/status/2069504880017080668",
    "https://github.com/beeminder/BeeSwift/pull/706",
    "https://github.com/beeminder/BeeSwift/pull/682"],
e: "2026-06-23",
}, { // ------------------------------------------------------------------------
i: true,
x: `Bugfixes: correct thumbnail borders even when your payment method fails, floating point fixes, fewer crashes, less showing stale data in gallery view, etc`,
l: ["https://x.com/beemuvi/status/2069505324567142673",
    "https://github.com/beeminder/BeeSwift/pull/749",
    "https://github.com/beeminder/BeeSwift/pull/658",
    "https://github.com/beeminder/BeeSwift/issues/30",
    "https://github.com/beeminder/BeeSwift/issues/592",
    "https://github.com/beeminder/BeeSwift/issues/588"],
e: "2026-06-23",
}, { // ------------------------------------------------------------------------
i: true,
x: `More bugfixes: Mindful Minutes tallied correctly and the app doesn't claim to not know your timezone`,
l: ["https://x.com/beemuvi/status/2069932702212759887",
    "https://github.com/beeminder/BeeSwift/issues/284",
    "https://github.com/beeminder/BeeSwift/issues/360#issuecomment-4596806433"],
e: "2026-06-24",
}, { // ------------------------------------------------------------------------
i: true,
x: `Autodata fetching and refreshing happen in parallel, which should make things snappier`,
l: ["https://x.com/beemuvi/status/2069932811516334423",
    "https://github.com/beeminder/BeeSwift/pull/662"],
e: "2026-06-24",
}, { // ------------------------------------------------------------------------
i: true,
x: `Tapping a notification opens the app to the corresponding goal, and people with >20 goals can actually find them all in Shortcuts now`,
l: ["https://x.com/beemuvi/status/2070291366417228268",
    "https://github.com/beeminder/BeeSwift/issues/622",
    "https://github.com/beeminder/BeeSwift/issues/41"],
e: "2026-06-25",
s: `Same for opening via Spotlight search result`,
}, { // ------------------------------------------------------------------------
i: true,
x: `For "Workout Minutes" Apple Health sync you can have the app make datapoints for each workout, rather than just one combined one per day`,
l: ["https://x.com/beemuvi/status/2070291533501431915",
    "https://github.com/beeminder/BeeSwift/blob/master/CHANGELOG.md"],
e: "2026-06-25",
}, { // ------------------------------------------------------------------------
i: true,
x: `Added "Dietary Fiber" as an Apple Health metric`,
l: ["https://x.com/beemuvi/status/2070655640499081307",
    "https://github.com/beeminder/BeeSwift/pull/689"],
e: "2026-06-26",
}, { // ------------------------------------------------------------------------
i: true,
x: `There are new goal properties for filtering Shortcuts. And lots more. Enjoy!`,
l: ["https://x.com/beemuvi/status/2070655956862779782",
    "https://github.com/beeminder/BeeSwift/pull/710",
    "https://github.com/beeminder/BeeSwift/blob/master/CHANGELOG.md"],
e: "2026-06-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: The Zapier integration article now explains about removing previous integrations, plus minor tweaks and fixes in that and 8 other articles`,
l: ["https://x.com/beemuvi/status/2071740805170225538",
    "https://help.beeminder.com/article/87-zapier",
    "https://help.beeminder.com/article/78-trello",
    "https://help.beeminder.com/article/340-trydeepwork",
    "https://help.beeminder.com/article/293-twitter",
    "https://help.beeminder.com/article/88-urlminder",
    "https://help.beeminder.com/article/357-wakatime",
    "https://help.beeminder.com/article/90-withings",
    "https://help.beeminder.com/article/292-project-euler",
    "https://help.beeminder.com/article/359-ynab"],
e: "2026-06-29",
s: `Project Euler in particular is a negative UVI, explaining how they killed the ability to get problem counts, which kills our integration`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Rewrote the "How do I quit a goal?" article, adding missing info like about exporting from an archived goal; plus tweaks to 2 other articles`,
l: ["https://x.com/beemuvi/status/2071743329554047157",
    "https://help.beeminder.com/article/44-how-do-i-quit-a-goal",
    "https://help.beeminder.com/article/46-what-happens-to-an-archived-goal",
    "https://help.beeminder.com/article/47-how-do-i-delete-a-goal"],
e: "2026-06-29",
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
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2026jun */ ]

const staged = [ {
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]


/********************************************************************************************************************************************************************
~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
BEEMIOS 6.8 as described in beemail, June 2026:
1. In-app goal settings: notification settings and autodata source config, plus we restructured the main menu to put this at the top
2. We brought back a better version of the colored deltas: a concise due-by table showing what's needed to get different amounts of safety buffer
3. New setting for weight-loss goals: toggle between individual weighings or the daily min (he former includes comments like "Weight via Withings at 9:00 AM")
4. You can now filter which workout types (organized into 7 categories; defaults to everything) the Apple Health integration includes when syncing workout minutes
5. Moved the gallery sort UI onto the gallery screen itself, with a native menu and checkmark for the selected order
6. You can now see the full autodata configuration preview (filters and a preview of your data) when reconfiguring an Apple Health goal
7. The configuration screen for an Apple Health metric now shows the Beeminder goal and its goal units at the top, plus workout-specific config
8. The datapoint list now uses three aligned columns: day, value, comment; it sizes them dynamically and shows the month as needed, plus various alignment fixes
9. Exercise Minutes, Workout Minutes, and Water now have sensible default precision
10. You can now edit notification times in 24-hour mode.
11. You can also set goal deadlines in the same place
12. Notifications about beemergencies (aka Zeno notifications) now include username and goalname
13. Search uses goal descriptions, not just goalnames, plus you can search for goals when creating Shortcuts
14. More UI polish: new menu icon, confirmation for disconnecting autodata, metric config simplifications, microcopy tweaks, less misleading freshness indicator
15. Goalnames are primary with descriptions as subtitles, and more UI smoothenings like showing the gallery behind the keyboard and fixing a render jump
16. Bugfixes: correct thumbnail borders even when your payment method fails, floating point fixes, fewer crashes, less showing stale data in gallery view, etc
17. Autodata fetching and refreshing happen in parallel, which should make things snappier
18. Tapping a notification opens the app to the corresponding goal, and people with >20 goals can actually find them all in Shortcuts now
19. For "Workout Minutes" you can have the app make datapoints for each workout, rather than just one combined one per day
20. Added "Dietary Fiber" as an Apple Health metric
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO: discuss] open graph / meta tags / link previews: more milking? separate UVI for doing it for the blog? more about the tweaks? consistent casing?
https://github.com/beeminder/beeminder/issues/1866
https://github.com/beeminder/beeminder/pull/3181
* fix og:image reference in baas, complice, and taskratchet
* add defaults og:title, description, image, type to all beeminder pages
* add twitter:card tag
* update image & description tags for goal pages
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
ADAM TODO: not merged? also it says "road" in the error copy which, well, we also need to deprecate and make aliases for things like "roadall" in the API
Error if road has too few elements per row (PR #3256)
This cleans up an error message from the deep munging issues around roadall -- but it will be seen if you mess up arguments to roadall and don't have the right number of elements.
For #3253 (deep munging rails upgrade thing)
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: we have a closed-and-unmerged PR -- https://github.com/beeminder/beeminder/pull/2265 -- in which adam mentions the following UVI:
  UVI: API users can once again get json from API urls that don't end in .json, like api/v1/users/me.
did that (a) happen some other way and we should tweet it, or (b) was already tweeted, or (c) is not true yet and should be gissued, or (d) has a gissue?
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[WIP: Actually do something with Strava webhook payloads]
"x": "Subscribe to and handle Strava webhooks, so that your activities are updated to Beeminder in (nearly) real-time."
"l": [
      "https://github.com/beeminder/beeminder/pull/3363",
      "https://github.com/beeminder/beeminder/issues/3352"]
"s": "Everywhere Everystrava All At Once was fixing the bug where we'd get ratelimited and be slow getting your data, but still relying on the sorta-hourly polling checks that beeminder does. This PR adds webhook handling so that strava sends us a push any time you have new data, so theoretically should be much more realtime than the hourly polling thing"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
"x": "As a follow-on to UVI#4165 & UVI#4166, we now return an error unless passed-in graph matrices (the roadall parameter) have 3 elements per row",
"l": [
      "https://github.com/beeminder/beeminder/pull/3256"],
"d": "2022-07-13",
"s": "The previous UVIs were about more general input handling and fixing weird things with parsing of those inputs",
TODO: MAYBE DO https://github.com/beeminder/beeminder/issues/3443 BEFORE TWEETING THIS
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
READY TO DEPLOY:
click-to-sort in megabreak
https://github.com/beeminder/beeminder/issues/3465#issuecomment-1222662142
damn, i lost track of when this went live and if we already tweeted enough about this (we do have 3 UVIs in a row for it in august 2022)
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[QUESTIONABLE]
"x": "Better api simple 404 error response" [Questionable? it was giving a 404 so maybe it's not really differentiable before and after?]
"s": "It seems like it errors while looking for the ErrorsController (to render a 404) and then ends up rendering a 404 anyway"
https://github.com/beeminder/beeminder/issues/3567
https://github.com/beeminder/beeminder/pull/3568
"d": "2022-09-13"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
SAVING UP FOR POST-6.2 BEEMIOS
* https://github.com/beeminder/BeeSwift/pull/330 -- possibly made autofetching faster or more reliable or less resource-intensive?
* 2022-12-21: https://github.com/beeminder/BeeSwift/pull/359 -- iOS 16 introduces support for more granular sleep tracking, with different levels of sleep. Apple Watch records this data when worn during sleep. These levels do not match the filter we were using for sleep analysis data, so Apple Watch users would not see any sleep data. Here we also count these periods as sleeping on new iOS.
* [2023-ish] This adds a confirmation screen to the flow for adding an apple health metric. This screen
 - Allows for a preview of the data which will be added for the metric and information about the unit.
 - In the future will allow additional configuration settings.
  https://github.com/beeminder/BeeSwift/pull/364
* Previously when syncing healthkit datapoints to the server data, we would always fetch exactly 7 server points. This would go badly if there were multiple points for a day on the server, and didn't support adding features where we synced more history. Here we instead estimate the number of points to fetch from the server, and fetch more until we have confirmed we have enough.
  https://github.com/beeminder/BeeSwift/pull/366
* Make the UI look a little cleaner by lining up various elements and making the spacing more consistent.
  https://github.com/beeminder/BeeSwift/pull/367
BEEMIOS AGAIN
Reduce wall clock time spend during background updates (PR #374)
* iOS applies some complex logic to decide how often to allow apps to run background updates. The rules are opaque, but potentially include the app's energy use. To try to maximize the chance of beeminder waking up to update goals and badges, here we change background processesing to complete as quickly as possible
* For background updates, do work as quickly as possible For healthkit observers report as soon as we are done, even on failure.
* Stand hours autodata metric now accurate (as accurate as Apple is).
* Gallery now sorted by countdown + pledge + goalname
* Respect timey-ness: https://github.com/beeminder/BeeSwift/issues/233

* This largely rewrites how we aggregate metrics for category data types. There is a base implementation, and an entirely separate implementation for time asleep.
  https://github.com/beeminder/BeeSwift/pull/362
  - For most metrics (Time In Bed, Meditation Minutes, etc), we now look at total non-overlapping time. This avoids double counting with multiple data sources.
  - For sleep we do a complex attribution process looking at both asleep and awake samples, and disagreements between multiple data sources. This isn't quite right for cases with multiple inputs (e.g. Oura and Apple Watch) but is much closer than the previous implementation. The calculation function is moderately covered by unit tests.
* Send badge update to ios when eep_count changes. We do this by sending a badge update whenever a goal goes from emergency to non-emergency or backwards.
  For beeminder/beeminder#4106
  For beeminder/BeeSwift#376
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
BEEDROID
https://github.com/beeminder/beedroid/issues/62
google auth?
push notifications?
BEEDROID
Adjust Android Firebase messages (PR #4103)
* This stops sending a direct notification. We can't get the IDs on the Android app that we need when we send a direct notification.
* This sends a "multiuser" title down, too, in case there are multiple accounts logged into the Android app.
* This refactors the android_push_notification method on Goal and puts it on AndroidNotification instead. I removed "delay_while_idle" as it has been ignored by Google for ~5 years. I added a "now_safe" to the goal_push_options, to generate Now Safe notifications on the Android side. I removed the collapse key because we should only have a total of four per user max, and there's no limit to how many folks can sign into one Android app. I added the slug for the goal that triggered the goal push notification as well.
* This removes the emoji header, and adds a countdown time for emergency day notifications.
For #896.
--
Add Android Notification config page (PR #4110)
This will eventually be a UVI.
It works better on small screens, and has some extra CSS.
This is gated behind beeta_features[:beedroid_push].
For #4109.
This is maybe a UVI?
* UVI: get a little popup that says you can't add a widget before logging into Beeminder.
* The Android checkboxes are centered, and the goal names are right justified, which helps things if you have really long goal names and a small phone screen.
  It adjusts some spacing.
  For https://github.com/beeminder/beeminder/issues/4109
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[SCHEDEL]
adam called this stale resque workers thing an infra but maybe we could call it user-visible if we can find a way to describe it:
Resque workers could be stale after deploy because our way of restarting them wasn't pointing at the PIDs of the workers themselves, but of the wrapper that started them up
[TODO: why was this only a problem sometimes? why does restarting the wrapper sometimes restart them and sometimes not?]
https://github.com/beeminder/beeminder/issues/3914
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[QUESTIONABLE][SCHEDEL]
we introduced a syntax error on Jan 5th that turned a "422" error to a "500" error response.
questionable because it's an error that's returned to some javascript on our pages, so was already an error response and probably the difference in 422 vs 500 didn't change how it was handled / what it looked like from the user's POV.
https://github.com/beeminder/beeminder/issues/3983
https://github.com/beeminder/beeminder/pull/3984
"d": "2023-01-07"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[SCHEDEL]
PROBABLY DON'T ACTUALLY TWEET THIS ONE?
"x": "Subtle but important change in premium FAQ: "you can ask us for a refund if the perks feel disappointing and we'll do what's fair" as opposed to "say yes"
https://github.com/beeminder/beeminder/issues/4107
"d": "2023-03-23",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
OTHER BEEDROID 5 THINGS PRE-5.1:
https://github.com/beeminder/beedroid/issues/217 -- Expand abbreviations in Android widget picker
https://github.com/beeminder/beedroid/issues/217 -- Support dynamic widget previews so the preview is closer to what will be placed on your launcher
https://github.com/beeminder/beedroid/issues/217 -- Allow users to reconfigure single goal widget
https://github.com/beeminder/beedroid/issues/208 -- widget color match
https://github.com/beeminder/beedroid/issues/98  -- ssl issues
https://github.com/beeminder/beedroid/issues/232 -- don't use weight loss as example since it's hard to beemind
https://github.com/beeminder/beedroid/issues/145 -- show current rate, not rate at akrasia horizon (but maybe not part of this release?)
ANCIENT BEEDROID THING TO MAYBE INCLUDE IN A FINAL CATCHALL UVI:
https://github.com/beeminder/beedroid/issues/198
https://forum.beeminder.com/t/tiny-bug-beedroid-timezone-inaccuracy/9746
did we already get the android reminders page: https://github.com/beeminder/beeminder/issues/4109 (need to bow-tie that gissue in any case)
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
adam assigned this to dreev for UVI but maybe it's covered in beedroid uvis?
https://github.com/beeminder/beeminder/issues/896
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
MICRO-UVI:
Changed "Resent confirmation email" in some flashes to "Resending confirmation email". (It's not quite true that we've resent it when we show it to them, and it might be minutes until we actually send it.)
https://github.com/beeminder/beeminder/issues/4013
previous UVI: UVI#4371
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
WAITING TO VERIFY IF THERE'S ANY USER-VISIBILITY HERE
"x": "Fixed a double redirect from things like bmndr.co/user/goalname.png which now redirects directly to our CDN"
"s": "Redirect straight to image from user/goal.ext; this is not much of a UVI, but doing a double redirect is dumb, and might matter if you were writing scripts and stuff, so this is marginally better", [TODO: did this fix the issue with forum post images? was it supposed to?]
"l": [
      "https://github.com/beeminder/beeminder/issues/2107",
      "https://github.com/beeminder/beeminder/pull/4576],
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
header & footer images do webp [browser score / load times]
https://github.com/beeminder/beeminder/issues/4580
https://github.com/beeminder/beeminder/pull/4595
https://github.com/beeminder/beeminder/pull/4594
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
improve homepage more:
integrations gallery linked images are smaller therefore load faster, add missing alttext and title text to integrations, offer webp images
https://github.com/beeminder/beeminder/issues/4586
https://github.com/beeminder/beeminder/pull/4587
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
not merged yet:
get "forgot password" and login links off of the signup page
https://github.com/beeminder/beeminder/pull/4616
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
honeypot & meta user fixes
- fix to_bal thing in honeypot [this was something introduced by flooring the balance i think?]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
next/prev hotkeys for the blog, but this isn't really meant for users:
https://github.com/beeminder/blog/pull/459
"d": "2023-12-29",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
api pledge cap loophole
x: "Closed a loophole in which you could change your pledge cap to $0 via the API"
Don't let folks set pledge cap via API
This just handles the API goals endpoint, and adds a qual.
https://github.com/beeminder/beeminder/issues/4533
https://github.com/beeminder/beeminder/pull/5205
https://github.com/beeminder/beeminder/pull/4578
PR from 2023 Nov [did it wrong and messed up goal creation]
questionable uvi since setting it via the api was an undocumented “feature” to begin with, but it does give an explanatory error message now, so maybe it could count?
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
probably not a UVI yet (without doing more steps toward PPPurge): change what counts as having a valid payment method for paypal users
s: "not sure how this is actually a UVI, but maaaybe there's a spin here? I dunno. I did this for the sake of PPPurging, because we want to be able
to do something forcefully/final with the holdouts who are ignoring emails. this means we can un-set the default paytype and they'll be prompted to add
a card if they want to start using beeminder again"
https://github.com/beeminder/beeminder/pull/4742
"d": "2024-02-13"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
more paypal progress: i think we have to decide about how harsh to be about closing the door on inactive users here?
https://github.com/beeminder/beeminder/pull/4742
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
anything else to milk from humble bundle?
https://github.com/beeminder/beeminder/pull/4762
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
already included above:
What’s the difference between the goal types? - Added a note on which goal types are accessible to free accounts. Kind of a UVI? Clarity is good!
https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types
"d": "2024-06-05",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
already tweeted, i think:
"x": "Bugfix with slack integration auth that was caused us to fail to add the beebot instance to your slack"
https://github.com/beeminder/beeminder/pull/5011
"d": "2024-08-22"
TODO: point at the PR that introduced this bug [it was the garmin fix one]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
link preview on apple
https://github.com/beeminder/beeminder/issues/1618#issuecomment-2327444912
"s": "we haven't made any new changes to this since we last tweeted about it, i just found this open gissue in my freshening, and verified that what we do currently is sane"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
BEEMIOS POST-6.7
* rounded corners visual glitch: https://github.com/beeminder/BeeSwift/issues/558 
  another one? https://github.com/beeminder/BeeSwift/pull/552
    https://github.com/beeminder/BeeSwift/issues/551
* accidentally showed deadbeat briefly: https://github.com/beeminder/BeeSwift/issues/586
* sort-by-pledge matches website: https://github.com/beeminder/BeeSwift/issues/578
* fix blank icon in iOS 17: https://github.com/beeminder/BeeSwift/issues/621
* incremental goal updates: https://github.com/beeminder/BeeSwift/pull/635
* date is wrong at first? or was this in 6.7?: https://github.com/beeminder/BeeSwift/issues/473
* better transition from placeholder to graph?: https://github.com/beeminder/BeeSwift/issues/608#issue-2769414147
  fixed by https://github.com/beeminder/BeeSwift/pull/609#pullrequestreview-2547275472
* fix a crash when logging out and back in?: https://github.com/beeminder/BeeSwift/issues/590#issuecomment-2569768484
* keep keyboard from obscuring last goals in gallery view: https://github.com/beeminder/BeeSwift/pull/536
* dark green (forest green) for >7 safe days: https://github.com/beeminder/BeeSwift/pull/535
* no more stale badge count when you log out? https://github.com/beeminder/BeeSwift/issues/553
* more dark mode improvements? white on black instead of gray on black for logo: https://github.com/beeminder/BeeSwift/issues/150
* fix styling of the navbar: https://github.com/beeminder/BeeSwift/pull/569
* search works across goalnames and blurbs: https://github.com/beeminder/BeeSwift/issues/631
* update button bigger: https://github.com/beeminder/BeeSwift/pull/577
* list now matches website when sorting by pledge: https://github.com/beeminder/BeeSwift/pull/579
* Introduce a freshness indicator for the goal screen: https://github.com/beeminder/BeeSwift/pull/537
* App now notices when you switch Beeminder timezone: https://github.com/beeminder/BeeSwift/issues/507
* Add goal shortname to zeno notification

}, { // ------------------------------------------------------------------------
BEEMIOS 2024-09-16:
* Don't delete the #DERAIL datapoint: Closed #456 as completed via #474.
* Unsubmitted datapoint value changes when leaving and coming back to the app: https://github.com/beeminder/BeeSwift/issues/417 : I believe this was fixed by #442.
* Blue text doesn't work in dark mode (Issue #346): Fixed by #404
* Sort dashboard exactly same as website (#49): Fixed by #451
* Show goalname on timer screen [not merged yet]: https://github.com/beeminder/BeeSwift/issues/477
* Maybe this is an older one but removing the deltatext numbers: https://github.com/beeminder/BeeSwift/pull/455
* Don't let datepicker wrap around to the beginning of the current month: https://github.com/beeminder/BeeSwift/issues/386
}, { // ------------------------------------------------------------------------
Planning to release Beeminder for iOS 6.7 later today, 2024-12-13
Summary of changes that might be relevant to support:
*   The old "Today" widget has been removed
*   Dark mode icon (thanks Bee!), and some changing to UI styling and goal screen.
*   The gallery now sorts by urgency, so beemergencies won't always be at the top
*   The Apple Health integration should no longer delete derailment data points
*   Fix calculation of meditation minutes
*   Goals are now searchable in spotlight.
Full changelog here: https://github.com/beeminder/BeeSwift/blob/master/CHANGELOG.md
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
Questionable: UVI#5031 made zzq's firefox addon for your beeminder dashboard sucky if your goals had a description. [see pull request for before/after]
https://github.com/beeminder/beeminder/pull/5073
minidash branch?
deployed when?
add class so firefox add-on works right
changed the class for dashboard subtitles in PR#5066, which messed with the
firefox add-on for super-collapsing dashboard goals
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
other HELP DOCS TWEAKS:
https://help.beeminder.com/article/335-derailing-is-not-failing
TODO: fix related integrations header style (and add to table of contents)
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*******************************************************************************************************************************************************************/