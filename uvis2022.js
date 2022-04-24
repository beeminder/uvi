const batch2022jan = [{
"x": "Our API docs for the charges endpoint were wrong. You must include a user_id parameter (technically it worked anyway when using a personal auth_token). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1478159041335480321",
      "https://github.com/beeminder/beeminder/issues/2888",
      "https://github.com/beeminder/apidocs/commit/3d3e7df561ccaa845e31d3b309103b50e9e96646"],
"d": "2022-01-03",
"c": "For arcane reasons this worked fine when using the endpoint with your personal auth token, but without the user_id parameter, the endpoint would fail for Beeminder oauth clients using access_tokens to do stuff on behalf of users. HT narthur",
}, { // ------------------------------------------------------------------------
"x": "Login with Facebook was broken for maybe months and nobody told us about it until now! PSA: we love if you tell us when we've got a booger on our face. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1478160154747019269",
      "https://github.com/beeminder/beeminder/issues/2889"],
"d": "2022-01-03",
"c": "Fix was simple and involved pushing some buttons in the Facebook developer console. They changed things with how their scopes work.",
}, { // ------------------------------------------------------------------------
"x": "We ended the year of grandfathering for the last Beemium price increase. Everyone is paying at least $40/mo (modulo discounts) for Beemium now.",
"u": ["https://twitter.com/beemuvi/status/1478522412492681223",
      "https://github.com/beeminder/beeminder/issues/2690",
      "https://github.com/beeminder/beeminder/issues/2767",
      "https://github.com/beeminder/beeminder/pull/2773",
      "https://github.com/beeminder/beeminder/pull/2769"],
"d": "2022-01-02",
"t": "2022-01-04",
"c": "Aka grandpatricide, Beemium $32 -> 40. We called it a UVI last time: UVI#3086. PR#2769 is for the email warning people on Nov 17, I think.",
}, { // ------------------------------------------------------------------------
"x": "Help docs updates! More details on how to interpret graphs (x-min/max settings) + updated screenshots/terminology/explanations in \"How do I change my goal?\"",
"u": ["https://twitter.com/beemuvi/status/1478525201826541568",
      "https://help.beeminder.com/article/118-how-do-i-interpret-the-graph",
      "https://help.beeminder.com/article/54-how-do-i-change-my-goal",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/47?u=dreev"],
"d": "2021-12-31",
"c": "E.g. “Commit to” to “Commitment dial”, calling the edge of the graph the bright red line",
"d": "2021-12-31",
"t": "2022-01-04",
}, { // ------------------------------------------------------------------------
"x": "More help docs improvements! A new FAQ item (asked by a real user) on the Gitminder (GitHub integration) page and general copyediting there and in example goals",
"u": ["https://twitter.com/beemuvi/status/1478893374291603457",
      "https://help.beeminder.com/article/81-github",
      "https://help.beeminder.com/article/95-example-goal-learn-a-new-language",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/47?u=dreev",
      "https://github.com/beeminder/beeminder/issues/1605"],
"d": "2022-01-04",
"t": "2022-01-05",
}, { // ------------------------------------------------------------------------
"x": "Our Toggl autodata integration now has a proper page in the help docs (was previously a stub with a rough synopsis of how it worked). HT @shanaqui as usual.",
"u": ["https://twitter.com/beemuvi/status/1478893463538049024",
      "https://help.beeminder.com/article/155-toggl"],
"d": "2021-01-05",
"t": "2021-01-05",
}, { // ------------------------------------------------------------------------
"x": "Our Strava autodata integration now has help docs (this one was missing altogether till now; gulp)",
"u": ["https://twitter.com/beemuvi/status/1478893612561698816",
      "https://help.beeminder.com/article/281-strava"],
"d": "2021-01-05",
"t": "2021-01-05",
}, { // ------------------------------------------------------------------------
"x": "Copyediting and typo fixes in the Toggl and Strava help pages + updated screenshots/terminology/explanation in \"Can I get rid of extra safety buffer?\"",
"u": ["https://twitter.com/beemuvi/status/1479249757323231236",
      "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer"],
"d": "2021-01-06",
"t": "2021-01-06",
"c": "E.g., we were still saying things like 'max safe days' instead of 'auto-ratchet'",
}, { // ------------------------------------------------------------------------
"x": "We'd sometimes count you as 'inactive' if your only goals were certain autodata ones. This meant wrongly stopping premium payments, freezing goals, etc. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1479611669051441152",
      "https://github.com/beeminder/beeminder/issues/1081",
      "https://github.com/beeminder/beeminder/pull/2896"],
"d": "2022-01-05",
"t": "2022-01-07",
"c": "Details about user-visibility and which integrations in the gissue",
}, { // ------------------------------------------------------------------------
"x": "Captcha UI improvements cuz humans were still failing it. Most usefully, highlighting the field in red and adding a red error banner to the page.",
"u": ["https://twitter.com/beemuvi/status/1479612600123944962",
      "https://github.com/beeminder/beeminder/issues/2890",
      "https://github.com/beeminder/beeminder/pull/2891"],
"d": "2022-01-04",
"t": "2022-01-07",
}, { // ------------------------------------------------------------------------
"x": "Also the error message now mentions \"captcha\" explicitly instead of \"human check\" and says explicitly that the thing you typed (which it quotes) was wrong",
"u": ["https://twitter.com/beemuvi/status/1479976696287838216",
      "https://github.com/beeminder/beeminder/issues/2890",
      "https://github.com/beeminder/beeminder/pull/2891"],
"d": "2022-01-04",
"t": "2022-01-08",
}, { // ------------------------------------------------------------------------
"x": "We now enforce no-duplicate-requestIDs at the database level and sure enough, the iOS app was sending dups that weren't otherwise getting de-dup'd. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1479982546347646977",
      "https://github.com/beeminder/beeminder/issues/198"],
"d": "2022-01-08",
"t": "2022-01-08",
"c": "#regression See also UVI#2686 and UVI#2747",
}, { // ------------------------------------------------------------------------
"x": "Not sure if the fix to requestIDs affected things other than iOS (in theory it could've!). We also removed the now-moot warning about this in the API docs.",
"u": ["https://twitter.com/beemuvi/status/1480333521189175299",
      "https://github.com/beeminder/apidocs/commit/a9136bad53190565b2c9d82799f548c6a751bf32"],
"d": "2022-01-09",
"t": "2022-01-09",
"c": "The docs fix was also our excuse to milk this huge zombie slaying for two UVIs. For posterity: \"NB: If you're sending multiple create datapoint requests in rapid succession (within say < 100-500ms of each other) using this endpoint, and sending the same requestid, it's not guaranteed that the datapoints won't be duplicated, as you might expect.\"",
}, { // ------------------------------------------------------------------------
"x": "Strava users thought we were buggily missing their virtual rides/runs. Those are now adjacent to normal rides/runs in goal creation to mitigate that confusion.",
"u": ["https://twitter.com/beemuvi/status/1480334132047605760",
      "https://github.com/beeminder/beeminder/issues/2906"],
"d": "2022-01-09",
"t": "2022-01-09",
"c": "Hopefully it will now be clear to the user that they should select both if they want both to count",
}, { // ------------------------------------------------------------------------
"x": "Help docs improvements: less weaselly wording in goal pausing doc + new FAQ item for the Gmail integration about multiple accounts",
"u": ["https://twitter.com/beemuvi/status/1483602131357626370",
      "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit",
      "https://help.beeminder.com/article/82-gmail"],
"d": "2022-01-11",
"t": "2022-01-18",
}, { // ------------------------------------------------------------------------
"x": "Revamped the help page for starting a goal over, to discourage deleting data and clarify that if you do you still have to talk to us to prevent charges",
"u": ["https://twitter.com/beemuvi/status/1483602274341429251",
      "https://help.beeminder.com/article/117-can-i-start-my-goal-over"],
"d": "2022-01-11",
"t": "2022-01-18",
}, { // ------------------------------------------------------------------------
"x": "Updated screenshot and new section (plus copyedits) for the weekends-off help page",
"u": ["https://twitter.com/beemuvi/status/1483961497977982977",
      "https://help.beeminder.com/article/57-what-if-i-only-want-to-do-my-goal-on-weekdays",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/55?u=dreev"],
"d": "2022-01-12",
"t": "2022-01-19",
}, { // ------------------------------------------------------------------------
"x": "New screenshot (albeit an outdated one) in the \"how do I tell Beeminder what day my week starts\" help page helping to illustrate why that is not a thing",
"u": ["https://twitter.com/beemuvi/status/1483963014399201281",
      "https://twitter.com/beemuvi/status/1483963014399201281",
      "https://help.beeminder.com/article/123-weekstart",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/56?u=dreev"],
"d": "2022-01-12",
"t": "2022-01-19",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "You can no longer specify goals as per week or per month on goal creation (though you can still switch to having them show non-daily rates later)",
"u": ["https://twitter.com/beemuvi/status/1484322743063437319",
      "https://github.com/beeminder/beeminder/issues/2925",
      "https://github.com/beeminder/beeminder/pull/2927"],
"d": "2022-01-14",
"t": "2022-01-20",
}, { // ------------------------------------------------------------------------
"x": "Per the Pareto Dominance Principle (see previous UVI) we now support arithmetic in the rate field. Eg, you can say \"5/7 per day\" to mean \"5 per week\"",
"u": ["https://twitter.com/beemuvi/status/1484323406807920644",
      "https://github.com/beeminder/beeminder/issues/2925",
      "https://github.com/beeminder/beeminder/pull/2927"],
"d": "2022-01-14",
"t": "2022-01-20",
}, { // ------------------------------------------------------------------------
"x": "And we have a new popup where you pick the rate in goal creation to explain all this",
"u": ["https://twitter.com/beemuvi/status/1484323701810024449",
      "https://github.com/beeminder/beeminder/issues/2925",
      "https://github.com/beeminder/beeminder/pull/2927"],
"d": "2022-01-14",
"t": "2022-01-20",
}, { // ------------------------------------------------------------------------
"x": "Oops, \"PER DAY\" was showing up on weight and inbox goal creation screens despite having no field for setting a rate there. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1484682128784691200",
      "https://github.com/beeminder/beeminder/issues/2928",
      "https://github.com/beeminder/beeminder/pull/2929"],
"d": "2022-01-18",
"t": "2022-01-21",
"c": "#regression",
}, { // ------------------------------------------------------------------------
"x": "Help docs: edits to \"What if I only want to do this once a month?\" to make it true and \"My goal makes no sense\" to be less customer service-y",
"u": ["https://twitter.com/beemuvi/status/1484966464520011777",
      "https://help.beeminder.com/article/58-what-if-i-only-want-to-do-something-once-a-month",
      "https://help.beeminder.com/article/124-my-goal-doesnt-make-any-sense"],
"d": "2022-01-22",
"t": "2022-01-22",
}, { // ------------------------------------------------------------------------
"x": "Help docs: new screenshots and copy-tweaking for the extensive article on Do More goals",
"u": ["https://twitter.com/beemuvi/status/1484966629259689988",
      "https://help.beeminder.com/article/66-do-more-goals"],
"d": "2022-01-14",
"t": "2022-01-22",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Copyedits, new links, more explanation of ratcheting for Do Less goals + freshened up the page on Odometer goals",
"u": ["https://twitter.com/beemuvi/status/1485404059624374275",
      "https://help.beeminder.com/article/67-do-less-goals",
      "https://help.beeminder.com/article/68-odometer-goals",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/63?u=dreev"],
"d": "2022-01-19",
"t": "2022-01-23",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Updated screenshots and deconfused some prose for the page on Whittle Down goals",
"u": ["https://twitter.com/beemuvi/status/1485404201198833666",
      "https://help.beeminder.com/article/69-whittle-down-goals",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/65?u=dreev"],
"d": "2022-01-20",
"t": "2022-01-23",
}, { // ------------------------------------------------------------------------
"x": "In the bot response for ambiguous data, we now give the full support@beeminder.com address, not just, confusingly/buggily, support@beeminder",
"u": ["https://twitter.com/beemuvi/status/1485771404561682436",
      "https://github.com/beeminder/beeminder/issues/2915",
      "https://github.com/beeminder/beeminder/pull/2916"],
"t": "2022-01-24",
}, { // ------------------------------------------------------------------------
"x": "Updated the \"About\" box on the blog and fixed a broken image in an old post",
"u": ["https://twitter.com/beemuvi/status/1485772308513898496",
      "https://blog.beeminder.com"],
"t": "2022-01-24",
}, { // ------------------------------------------------------------------------
"x": "When you confirmed your email we'd leave the banner telling you that you needed to confirm your email up for one extra page load. Now we don't do that. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1486118126051737603",
      "https://github.com/beeminder/beeminder/pull/2944"],
"d": "2022-01-25",
"t": "2022-01-25",
"c": "Also applied when you were deadbeated and got a banner telling you to update your payment method. No gissue for this I guess?",
}, { // ------------------------------------------------------------------------
"x": "Tiny improvement for users but handy for support helping you set breaks: don't need a username in the breaks URL for pre-specifying start/finish. See UVI#3944.",
"u": ["https://twitter.com/beemuvi/status/1486118476187979776",
      "https://github.com/beeminder/beeminder/issues/2947",
      "https://github.com/beeminder/beeminder/pull/2948"],
"d": "2022-01-25",
"t": "2022-01-25",
}, { // ------------------------------------------------------------------------
"x": "Help docs: the page on custom got some edits, a link update, and some nudges to avoid custom goals if you don't know what you're doing!",
"u": ["https://twitter.com/beemuvi/status/1486500292837326848",
      "https://help.beeminder.com/article/97-custom-goals"],
"d": "2022-01-21",
"t": "2022-01-26",
}, { // ------------------------------------------------------------------------
"x": "Help docs: the megabreak page (scheduling breaks on many goals at once) has a new screenshot and new instructions about the URL start/finish trick",
"u": ["https://twitter.com/beemuvi/status/1486500743423037441",
      "https://help.beeminder.com/article/154-can-i-schedule-breaks-on-many-goals-at-once",
      "https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/68?u=dreev"],
"d": "2022-01-25",
"t": "2022-01-26",
}, { // ------------------------------------------------------------------------
"x": "As part of improvements to the iOS app, we forced all Apple Health sleep goals to have 6pm deadlines (it's how Apple aggregates by day) & emailed those affected",
"u": ["https://twitter.com/beemuvi/status/1486788923711918080",
      "https://github.com/beeminder/beeminder/issues/2887",
      "https://github.com/beeminder/beeminder/pull/2895",
      "https://github.com/beeminder/beeminder/pull/2894"],
"d": "2022-01-05",
"t": "2022-01-27",
"c": "We still need to prevent new goals from getting non-6pm-deadlines too",
}, { // ------------------------------------------------------------------------
"x": "Embarrassingly, we did the whitelisting wrong in UVI#3466 and finally noticed. So now we for-real whitelist ourselves when emailing the Beeminder bot!",
"u": ["https://twitter.com/beemuvi/status/1486866032216068098",
      "https://github.com/beeminder/beeminder/issues/2926"],
"d": "2022-01-26",
"t": "2022-01-27",
"c": "It should've been helpscout.net not beeminder.helpscout.com, which, confusingly, is the address we'd get if we hadn't customized our domain for email-sending. This was a #regression from moving to HelpScout in the first place and now it's finally fixed. A cheap UVI since it's really just making a previous UVI finally be true!",
}, { // ------------------------------------------------------------------------
"x": "Help docs: a bunch of copyedits and a modernized screenshot on the PPRs page + clarifying copyedits on the \"What is my data?\" &amp; \"How to enter data\" pages",
"u": ["https://twitter.com/beemuvi/status/1487217467281739776",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
      "https://help.beeminder.com/article/36-what-is-my-data",
      "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal"],
"d": "2022-01-28",
"t": "2022-01-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: In \"How do I fix incorrect data?\", added info about why deleting datapoints can be bad and about insta-derails, plus other copyedits",
"u": ["https://twitter.com/beemuvi/status/1487217565864587264",
      "https://help.beeminder.com/article/39-how-do-i-fix-incorrect-data"],
"d": "2022-01-28",
"t": "2022-01-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Add a paragraph about Boss as a Service to the help page about whether anyone else can add data to your goal",
"u": ["https://twitter.com/beemuvi/status/1488311561680687106",
      "https://help.beeminder.com/article/40-can-anybody-else-add-data-to-my-goal"],
"d": "2022-01-28",
"t": "2022-01-31",
}, { // ------------------------------------------------------------------------
"x": "Help docs: new screenshot and a bit of clarifying language and other copyediting for \"Can I change my goal units after the goal's created?\"",
"u": ["https://twitter.com/beemuvi/status/1488311648846630915",
      "https://help.beeminder.com/article/42-can-i-switch-my-goal-units-after-its-created"],
"d": "2022-01-28",
"t": "2022-01-31",
}, /* --------------------------------------------------------- end 2022jan */ ]

const batch2022feb = [{
"x": "New help menu in the header! Links to the FAQ, forum, help docs, and contact page.",
"u": ["https://twitter.com/beemuvi/status/1488663407549059080",
      "https://github.com/beeminder/beeminder/issues/2942",
      "https://github.com/beeminder/beeminder/pull/2967"],
"d": "2022-02-01",
"t": "2022-02-01",
}, { // ------------------------------------------------------------------------
"x": "When you don't have Slack configured, we now, sensibly, don't let you set reminders for Slack (was already true on goal pages but not http://beeminder.com/reminders)",
"u": ["https://twitter.com/beemuvi/status/1488663520434483202",
      "https://github.com/beeminder/beeminder/issues/2908",
      "https://github.com/beeminder/beeminder/pull/2965"],
"d": "2022-02-01",
"t": "2022-02-01",
}, { // ------------------------------------------------------------------------
"x": "Added a bunch of webcopy to http://beeminder.com/contact to set expectations about turnaround time in support",
"u": ["https://twitter.com/beemuvi/status/1489034463199698944",
      "https://github.com/beeminder/beeminder/issues/2962",
      "https://github.com/beeminder/beeminder/pull/2968"],
"d": "2022-02-02",
"t": "2022-02-02",
}, { // ------------------------------------------------------------------------
"x": "We fixed some broken html, probably only user-visible on ancient browsers (stupid Postel's Law), and got our moribund Instagram link out of the site footer",
"u": ["https://twitter.com/beemuvi/status/1489401144220676098",
      "https://github.com/beeminder/beeminder/issues/1666",
      "https://github.com/beeminder/beeminder/issues/2263",
      "https://github.com/beeminder/beeminder/issues/2913",
      "https://github.com/beeminder/beeminder/issues/2972"],
"d": "2022-02-03",
"t": "2022-02-03",
"c": "Oh, and bumping the copyright year to 2022 while we were at it",
}, { // ------------------------------------------------------------------------
"x": "Help docs: rewrote the page on what happens if you forget to enter data, in particular mentioning how it's possible to derail yourself entering yesterday's data",
"u": ["https://twitter.com/beemuvi/status/1490825272341319680",
      "https://help.beeminder.com/article/38-what-happens-if-i-forgot-to-enter-data"],
"d": "2022-02-07",
"t": "2022-02-07",
}, { // ------------------------------------------------------------------------
"x": "We took the next step from UVI#3847 and removed the ability to add PayPal as a payment method (can still switch back and forth if you already added it)",
"u": ["https://twitter.com/beemuvi/status/1491187722287185922",
      "https://github.com/beeminder/beeminder/pull/2969",
      "https://github.com/beeminder/beeminder/issues/1840"],
"d": "2022-02-02",
"t": "2022-02-08",
}, { // ------------------------------------------------------------------------
"x": "Added Zone Minutes to our Fitbit autodata integration because the older Active Minutes isn't even discoverable in the Fitbit app if you have a Heart Rate device",
"u": ["https://twitter.com/beemuvi/status/1491571851369193475",
      "https://github.com/beeminder/beeminder/issues/2146",
      "https://github.com/beeminder/beeminder/pull/2986"],
"d": "2022-02-09",
"t": "2022-02-09",
}, { // ------------------------------------------------------------------------
"x": "We also added little explainers to the UI for Fitbit metric selection to tell you whether you probably want Zone Minutes or Active Minutes",
"u": ["https://twitter.com/beemuvi/status/1491936518755151872",
      "https://github.com/beeminder/beeminder/issues/2146",
      "https://github.com/beeminder/beeminder/pull/2986"],
"d": "2022-02-09",
"t": "2022-02-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Corrected the max pledge amount (it's $7290) for the \"How much do I pledge\" page and did a bunch of cleanup to the text, hovertext on links, etc",
"u": ["https://twitter.com/beemuvi/status/1492281787371843584",
      "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals"],
"c": "Also nixed the paragraph defending our weirdo tripling-ish pledge schedule since we don't really believe anymore that that's better than just doubling",
}, { // ------------------------------------------------------------------------
"x": "Closed UVI#4031's loophole / loose end: If you create a non-6pm-deadline goal and link to Apple Health sleep, we forcibly move the deadline to 6pm",
"u": ["https://twitter.com/beemuvi/status/1493383876441296896",
      "https://github.com/beeminder/beeminder/issues/2887"],
"d": "2022-02-11",
"t": "2022-02-14",
"c": "Kinda hacky but better than the wrongness and confusion that ensues otherwise. Ideally BeemiOS would handle this as part of the UI for linking a goal to Apple Health",
}, { // ------------------------------------------------------------------------
"x": "Help docs: new screenshots, clarifications for the article on changing your pledge, plus copyediting, adding hovertext to links, etc",
"u": ["https://twitter.com/beemuvi/status/1493740876702502913",
      "https://help.beeminder.com/article/21-can-i-change-the-pledge-on-my-goal"],
"t": "2022-02-15",
}, { // ------------------------------------------------------------------------
"x": "Help docs: revamped the page on pledge caps, including replacing a very outdated and wrong screenshot. See UVI#3856.",
"u": ["https://twitter.com/beemuvi/status/1494107264185253888",
      "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets"],
"d": "2022-02-14",
"t": "2022-02-16",
}, { // ------------------------------------------------------------------------
"x": "Help docs revamps/fixes: Garmin page (eg, updated list of metrics), managing premium subscriptions (button stuff changed), auto-canceling (clarification)",
"u": ["https://twitter.com/beemuvi/status/1494826949813800961",
      "https://help.beeminder.com/article/74-garmin",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription",
      "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work"],
"t": "2022-02-18",
}, { // ------------------------------------------------------------------------
"x": "Popups (aka modals aka dialog boxes that pop up over the rest of the screen) are draggable now, in case you need to see something underneath them",
"u": ["https://twitter.com/beemuvi/status/1495897699773816833",
      "https://github.com/beeminder/beeminder/issues/2999",
      "https://github.com/beeminder/beeminder/pull/3000"],
"d": "2022-02-16",
"t": "2022-02-21",
}, { // ------------------------------------------------------------------------
"x": "Trello changed their API and broke our autodata integration for some users. We changed the thing that needed changing on our end and it works again! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1495897968666419204",
      "https://github.com/beeminder/beeminder/issues/2846"],
"d": "2022-02-17",
"t": "2022-02-21",
}, { // ------------------------------------------------------------------------
"x": "Help docs: updated two articles about payment methods with clarifications, corrections, and experimenting with adding keywords to help pages",
"u": ["https://twitter.com/beemuvi/status/1496270272709951493",
      "https://help.beeminder.com/article/27-what-payment-methods-are-available",
      "https://help.beeminder.com/article/28-how-do-i-update-my-payment-information"],
"t": "2022-02-22",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "No-Excuses Mode! We killed doctor's-note-style weaselproofing. Instead you can commit to not call non-legit at all. Simpler, cleaner, fairer, better.",
"u": ["https://twitter.com/beemuvi/status/1496270964669452289",
      "https://blog.beeminder.com/noexcuses/",
      "https://github.com/beeminder/beeminder/issues/2964"],
"d": "2022-02-22",
"t": "2022-02-22",
}, { // ------------------------------------------------------------------------
"x": "We dropped the akrasia-proofing of weaselproofing / No-Excuses Mode. You can toggle it on and off at will.",
"u": ["https://twitter.com/beemuvi/status/1496646367988510720",
      "https://github.com/beeminder/beeminder/issues/2964"],
"d": "2022-02-22",
"t": "2022-02-23",
}, { // ------------------------------------------------------------------------
"x": "But we show when you last turned it on/off, including in the legit check email, making it hard to reply non-legit with a straight face if you JUST turned it off",
"u": ["https://twitter.com/beemuvi/status/1496646513040457729",
      "https://github.com/beeminder/beeminder/issues/2964",
      "https://github.com/beeminder/beeminder/pull/3012"],
"d": "2022-02-23",
"t": "2022-02-23",
}, { // ------------------------------------------------------------------------
"x": "We changed \"legit check\" emails to \"derailment notifications\" for the case that you derail on a goal that has No-Excuses Mode turned on",
"u": ["https://twitter.com/beemuvi/status/1497004650947514379",
      "https://github.com/beeminder/beeminder/issues/2964"],
"d": "2022-02-22",
"t": "2022-02-24",
}, { // ------------------------------------------------------------------------
"x": "We changed all the webcopy, the FAQ, and the glossary to refer to No-Excuses Mode instead of weaselproofing (and some old blog posts, but not the help docs yet)",
"u": ["https://twitter.com/beemuvi/status/1497004739686404099",
      "https://github.com/beeminder/beeminder/issues/2964"],
"t": "2022-02-24",
}, { // ------------------------------------------------------------------------
"x": "We emailed everyone who'd ever turned weaselproofing on on any goal and made it easy for them to opt in to No-Excuses Mode instead",
"u": ["https://twitter.com/beemuvi/status/1497004837887643652",
      "https://github.com/beeminder/beeminder/issues/2964"],
"t": "2022-02-24",
}, { // ------------------------------------------------------------------------
"x": "The banner confirmation when you disengaged No-Excuses Mode was erroneously saying \"engaged\". #bugfix HT user root2",
"u": ["https://twitter.com/beemuvi/status/1497369582851354627",
      "https://github.com/beeminder/beeminder/issues/3011",
      "https://github.com/beeminder/beeminder/pull/3019"],
"t": "2022-02-25",
}, { // ------------------------------------------------------------------------
"x": "Help docs: we thoroughly rewrote our page on what derailing means. It was so old it was all wrong! Added links, screenshots, hovertext.",
"u": ["https://twitter.com/beemuvi/status/1498448976860758016",
      "https://help.beeminder.com/article/12-what-is-a-derailment"],
"t": "2022-02-28",
"c": "It had pre-yellow-brick-half-plane and pre-red-yesterday stuff!"
}, { // ------------------------------------------------------------------------
"x": "We now give a helpful hint along with the error response when you mix up POST and PUT in our API (and in general when a route's not found)",
"u": ["https://twitter.com/beemuvi/status/1498451218493960193",
      "https://github.com/beeminder/beeminder/issues/2001"],
"d": "2022-02-28",
"t": "2022-02-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: link hovertext and an explanation for why some charges take longer than 24 hours to appear for the \"Why did Beeminder charge my card\" page",
"u": ["https://twitter.com/beemuvi/status/1498825038266466305",
      "https://help.beeminder.com/article/29-why-did-beeminder-charge-my-card"],
"d": "2022-02-23",
"t": "2022-03-01",
}, /* --------------------------------------------------------- end 2022feb */ ]

const batch2022mar = [{
"x": "Help docs: The \"What happens if a charge fails?\" page now says exactly what happens when the poorly-named deadbeat flag is set. Also keywords.",
"u": ["https://twitter.com/beemuvi/status/1498825431608270850",
      "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails"],
"d": "2022-02-23",
"t": "2022-03-01",
}, { // ------------------------------------------------------------------------
"x": "Help docs: The \"When do derailments happen?\" page has new screenshots with hovertext, plus clarification about changing deadlines",
"u": ["https://twitter.com/beemuvi/status/1499186316835131392",
      "https://help.beeminder.com/article/13-when-do-derailments-happen"],
"t": "2022-03-02",
}, { // ------------------------------------------------------------------------
"x": "Help docs: The \"What is a legit derailment?\" is updated for No-Excuses mode, plus hovertext and keywords, etc",
"u": ["https://twitter.com/beemuvi/status/1499189995571011588",
      "https://help.beeminder.com/article/16-what-is-a-legit-derailment"],
"t": "2022-03-02",
}, { // ------------------------------------------------------------------------
"x": "Help docs: removed ancient screenshots and explained more things in \"What happens when I derail?\" and added hovertext on images on several help pages",
"u": ["https://twitter.com/beemuvi/status/1499544661207117824",
      "https://help.beeminder.com/article/17-what-happens-when-i-derail"],
"d": "2022-03-01",
"t": "2022-03-03",
"c": "It had pre-YBHP and pre-red-yesterday stuff! Also keywords and linking to No-Excuses Mode, etc.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: did a pretty thorough weaselproofing-ectomy throughout the docs. Viva la No-Excuses Mode!",
"u": ["https://twitter.com/beemuvi/status/1499544815175757827",
      "https://help.beeminder.com"],
"d": "2022-03-01",
"t": "2022-03-03",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added alt/title text for links &amp; a bit of upside-down support to \"Can I get rid of extra safety buffer?\" + keywords on this and several other pages",
"u": ["https://twitter.com/beemuvi/status/1503513606591168516",
      "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer"],
"d": "2022-03-01",
"t": "2022-03-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: \"How do I quit a goal?\" now talks about deleting archived goals, what happens when you derail an archiving goal, and has updated screenshots",
"u": ["https://twitter.com/beemuvi/status/1503513774694699011",
      "https://help.beeminder.com/article/44-how-do-i-quit-a-goal"],
"d": "2022-03-02",
"t": "2022-03-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: fresh screenshot and minor rewording for \"What happens to an archived goal?\"",
"u": ["https://twitter.com/beemuvi/status/1503881746634342400",
      "https://help.beeminder.com/article/46-what-happens-to-an-archived-goal"],
"d": "2022-03-03",
"t": "2022-03-15",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Extensive rewrite of \"How do I delete a goal?\" given all the latest ins and outs, new images, nudges about contacting support, etc etc",
"u": ["https://twitter.com/beemuvi/status/1503882081243262977",
      "https://help.beeminder.com/article/47-how-do-i-delete-a-goal"],
"d": "2022-03-04",
"t": "2022-03-15",
}, { // ------------------------------------------------------------------------
"x": "Help docs: More explanation/apologia in \"How do I delete my account?\" plus hovertext and keywords (hovertext and keywords go without saying from now on)",
"u": ["https://twitter.com/beemuvi/status/1504243494818222082",
      "https://help.beeminder.com/article/48-how-do-i-delete-my-account"],
"d": "2022-03-07",
"t": "2022-03-16",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Updated the ones about the Android permanotification (for Beedroid) and TagTime and GTBee",
"u": ["https://twitter.com/beemuvi/status/1504245074502184966",
      "https://help.beeminder.com/article/125-android-notification",
      "https://help.beeminder.com/article/64-tagtime",
      "https://help.beeminder.com/article/63-gtbee"],
"d": "2022-03-11",
"t": "2022-03-16",
}, { // ------------------------------------------------------------------------
"x": "Fixed tragicomically money-burning bug where we'd miss certain payment errors and neither charge you nor set the deadbeat flag. Emailed those affected. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1504596641558396928",
      "https://github.com/beeminder/beeminder/issues/3032",
      "https://github.com/beeminder/beeminder/issues/3032#issuecomment-1055813596",
      "https://github.com/beeminder/beeminder/pull/3047", // rake task to send the emails
      "https://github.com/beeminder/beeminder/pull/3033"], // PR for actually fixing the error
"d": "2022-03-01",
"t": "2022-03-17",
"c": "Fortunately quite rare. Emailed the people affected on Mar 4 (see next UVI) and let them know about the error, mostly in their favor unless w/in the last 30 days in which case we retried the charges even though that mostly deadbeated them. Keywords: Stripe error checking, error handling",
}, { // ------------------------------------------------------------------------
"x": "That #bugfix caused a new (ironically similar) bug with missing errors from PayPal charges. Also emailed everyone affected about the bank errors in their favor.",
"u": ["https://twitter.com/beemuvi/status/1504597040143106051",
      "https://github.com/beeminder/beeminder/pull/3060",
      "https://github.com/beeminder/beeminder/pull/3052"],
"d": "2022-03-14",
"t": "2022-03-17",
"c": "This fix took two attempts, deployed about a week apart, so could've theoretically been milked for more than one UVI",
}, { // ------------------------------------------------------------------------
"x": "We were failing silently if, when creating or updating a Beeminder OAuth client, you left out the 'http(s)://' part of your app's URL. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1504597221848743951",
      "https://github.com/beeminder/beeminder/issues/3042",
      "https://github.com/beeminder/beeminder/pull/3062",
      "https://github.com/beeminder/beeminder/pull/3063",
      "https://github.com/beeminder/beeminder/issues/2715"],
"d": "2022-03-16",
"c": "Could've milked this for two UVIs: first was adding an error banner on submit, then we made the field an html5 URL field to get validation in real time for free from the browser a la UVI#3986",
}, { // ------------------------------------------------------------------------
"x": "We moved the post-derail respite UI up, so it's right below the commitment dial",
"u": ["https://twitter.com/beemuvi/status/1504961492927410178",
      "https://github.com/beeminder/beeminder/pull/3067",
      "https://github.com/beeminder/beeminder/issues/259"],
"d": "2022-03-17",
"t": "2022-03-18",
}, { // ------------------------------------------------------------------------
"x": "Help docs: cleanup and copyediting and cruft-removal on 4 articles: lying to Beeminder, the akrasia horizon, Beeminder vs StickK, and beneficiaries",
"u": ["https://twitter.com/beemuvi/status/1506057016007036931",
      "https://help.beeminder.com/article/34-cant-you-just-lie-about-your-data",
      "https://help.beeminder.com/article/45-what-is-the-akrasia-horizon",
      "https://help.beeminder.com/article/49-why-should-i-use-beeminder-over-stickk",
      "https://help.beeminder.com/article/114-can-i-specify-a-beneficiary-for-my-derailments"],
"d": "2022-03-14",
"t": "2022-03-21",
}, { // ------------------------------------------------------------------------
"x": "Help docs: revamped the article on the Android app (aka Beedroid) including new screenshots",
"u": ["https://twitter.com/beemuvi/status/1506057147926286336",
      "https://help.beeminder.com/article/62-android-app"],
"d": "2022-03-21",
"t": "2022-03-21",
}, { // ------------------------------------------------------------------------
"x": "We finally added Clive and Nathan, both helping us with support, to https://www.beeminder.com/aboutus !",
"u": ["https://twitter.com/beemuvi/status/1506419658143924229",
      "https://github.com/beeminder/beeminder/issues/2978",
      "https://github.com/beeminder/beeminder/pull/3071"],
"d": "2022-03-22",
"t": "2022-03-22",
}, { // ------------------------------------------------------------------------
"x": "Fixed a tiny typo with spacing in the new derailment notification emails when you have no-excuses mode turned on, plus made the timestamps less ugly",
"u": ["https://twitter.com/beemuvi/status/1506419889090621440",
      "https://github.com/beeminder/beeminder/issues/3061",
      "https://github.com/beeminder/beeminder/pull/3070"],
"d": "2022-03-22",
"t": "2022-03-22",
}, { // ------------------------------------------------------------------------
"x": "Closed an ugly loophole where you could immediately end a goal by causing an error. Now we show the error in place of the restart/archive buttons. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1506782429087891458",
      "https://github.com/beeminder/beeminder/issues/419",
      "https://github.com/beeminder/beeminder/pull/3073"],
"d": "2022-03-23",
"t": "2022-03-23",
"c": "See also follow-on milking UVI. Keywords: BB errors, Beebrain error, error text in the sidebar",
}, { // ------------------------------------------------------------------------
"x": "We no longer show a hideous overflowing error message in the graph header. The graph itself still shows the error message so the header can just say 'error'.",
"u": ["https://twitter.com/beemuvi/status/1506782552488484864",
      "https://github.com/beeminder/beeminder/issues/3074",
      "https://github.com/beeminder/beeminder/pull/3072"],
"d": "2022-03-23",
"t": "2022-03-23",
}, { // ------------------------------------------------------------------------
"x": "Something changed with browsers and the icons in header of the blog got hideously oversized. #bugfix (also nixed the old Google+ icon while we were at it!)",
"u": ["https://twitter.com/beemuvi/status/1507141851207200775",
      "https://github.com/beeminder/beeminder/issues/3075"],
"d": "2022-03-24",
"t": "2022-03-24",
"c": "#regression aka zombie",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added clarifications, further instructions, etc to the articles on new goal defaults, profile info, and goal settings",
"u": ["https://twitter.com/beemuvi/status/1507142555552477185",
      "https://help.beeminder.com/article/111-new-goal-defaults",
      "https://help.beeminder.com/article/109-profile-information",
      "https://help.beeminder.com/article/106-goal-settings"],
"d": "2022-03-24",
"t": "2022-03-24",
}, { // ------------------------------------------------------------------------
"x": "Additional cute errorcopy (emoji and all) pointing you at the humans of support when your bright red line is borked. Kinda part of UVI#4082.",
"u": ["https://twitter.com/beemuvi/status/1507505782601834499",
      "https://github.com/beeminder/beeminder/issues/419",
      "https://github.com/beeminder/beeminder/pull/3073"],
"d": "2022-03-23",
"t": "2022-03-25",
"c": "Keywords: alien emoji, error that us poor bots can't dig ourselves out of, contact the humans",
}, { // ------------------------------------------------------------------------
"x": "Added a moving time metric for Strava. Previously if you chose \"duration\" it was total elapsed time of the workout. Now you can pick between either.",
"u": ["https://twitter.com/beemuvi/status/1507506322249420807",
      "https://github.com/beeminder/beeminder/pull/3078",
      "https://github.com/beeminder/beeminder/issues/500"],
"d": "2022-03-24",
"t": "2022-03-25",
}, { // ------------------------------------------------------------------------
"x": "A PayPal error caused us to fail inelegantly and stop charging anyone else. Oof. We caught up and then robusted things so no more such charge delays. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1508591329370009601",
      "https://github.com/beeminder/beeminder/issues/3081"],
"d": "2022-03-28",
"t": "2022-03-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamped and expanded (and renamed, from \"Authorized applications\") the \"Apps &amp; API\" article. Describes creating apps, mentions TaskRatchet, etc etc",
"u": ["https://twitter.com/beemuvi/status/1508591934289240065",
      "https://help.beeminder.com/article/110-authorized-applications",
      "https://help.beeminder.com/article/110-apps-and-api"],
"d": "2022-03-23",
"t": "2022-03-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamped and expanded the article on goal settings. Notes about IFTTT/Zapier, added missing section, removed stuff about fine print, etc",
"u": ["https://twitter.com/beemuvi/status/1508954431936626692",
      "https://help.beeminder.com/article/106-goal-settings"],
"d": "2022-03-24",
"t": "2022-03-29",
"c": "We don't really like calling it fine print (it can encourage an excuse-making mindset) and may change that field to just 'notes'",
}, { // ------------------------------------------------------------------------
"x": "Help docs: We made all the help docs be consistent about \"goalname\" vs \"goal name\" (the former is what we're going with!)",
"u": ["https://twitter.com/beemuvi/status/1508954622207021058",
      "https://help.beeminder.com"],
"d": "2022-03-29",
"t": "2022-03-29",
}, { // ------------------------------------------------------------------------
"x": "Help docs: minor improvements to the article on deadlines plus a smattering of typo fixes. HT @lady_alys",
"u": ["https://twitter.com/beemuvi/status/1509318495493795845",
      "https://help.beeminder.com/article/14-deadline"],
"d": "2022-03-28",
"t": "2022-03-30",
}, { // ------------------------------------------------------------------------
"x": "Help docs: For the graph editor article, pointed more firmly to the visual graph editor, replaced a screenshot, minor copy-editing, etc",
"u": ["https://twitter.com/beemuvi/status/1509319092687147010",
      "https://help.beeminder.com/article/99-graph-editor"],
"d": "2022-03-29",
"t": "2022-03-30",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Copyediting and working in mention of Zeno's paradox to the article on reminders, plus the term \"leeway\" for the one on safety buffer",
"u": ["https://twitter.com/beemuvi/status/1509681923844567040",
      "https://help.beeminder.com/article/101-reminders",
      "https://help.beeminder.com/article/55-what-is-safety-buffer"],
"t": "2022-03-31",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New screenshot and all new text for the help page on post-derail respite (previously known as \"mercy\")",
"u": ["https://twitter.com/beemuvi/status/1509682224265793544",
      "https://help.beeminder.com/article/18-respite"],
"d": "2022-03-31",
"t": "2022-03-31",
}, /* --------------------------------------------------------- end 2022mar */ ]

const batch2022apr = [{
"x": "Help docs: Added a caveat about autodata to the article on Data Source, plus a link to Boss as a Service",
"u": ["https://twitter.com/beemuvi/status/1510022691620737026",
      "https://help.beeminder.com/article/103-data-source"],
"d": "2022-04-01",
"t": "2022-04-01",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Rewrote parts of the article on what counts as a legit derailment to mention illness, plug no-excuses mode harder, etc",
"u": ["https://twitter.com/beemuvi/status/1510022837200859139",
      "https://help.beeminder.com/article/16-what-is-a-legit-derailment"],
"d": "2022-04-01",
"t": "2022-04-01",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Edits to the article on PPRs to mitigate confusion and not saying anything that sounded like 'fake data'",
"u": ["https://twitter.com/beemuvi/status/1511127340713082881",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports"],
"d": "2022-04-01",
"t": "2022-04-04",
}, { // ------------------------------------------------------------------------
"x": "Added Haitian Creole as a language to our @duolingo autodata integration!",
"u": ["https://twitter.com/beemuvi/status/1511128534223233024",
      "https://github.com/beeminder/beeminder/issues/3091"],
"d": "2022-04-04",
"t": "2022-04-04",
}, { // ------------------------------------------------------------------------
"x": "Yet-another-bug (see UVI#4075) with handling failed payments from PayPal was causing us to repeatedly email the user about the failed charge attempt. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1511487766147653635",
      "https://github.com/beeminder/beeminder/issues/3081",
      "https://github.com/beeminder/beeminder/pull/3083"],
"d": "2022-03-29",
"t": "2022-04-05",
"c": "Behind the scenes notes: The Braintree gem doesn't do serialization as JSON for high-level objects (\"we want to keep the library light\"), so serialize to YAML and pass the string to our airlert method and fix the lancemcdoogal error",
}, { // ------------------------------------------------------------------------
"x": "We made UVI#3947 be true for 5 more autodata integrations: the logo links to the data source for Clozemaster, CodeCombat, Draftin, Duolingo, and Fitbit",
"u": ["https://twitter.com/beemuvi/status/1511494285773840385",
      "https://github.com/beeminder/beeminder/pull/3098"],
"d": "2022-04-05",
"t": "2022-04-05",
"c": "Also freeCodeCamp but that's only soft-launched",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamped the help page for the iOS app with updated screenshots and instructions",
"u": ["https://twitter.com/beemuvi/status/1511854850975289350",
      "https://help.beeminder.com/article/60-ios-app"],
"d": "2022-04-06",
"t": "2022-04-06",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamped the quite out of date help page for the Withings integration with new screenshots, instructions, tweaks to the answers to questions, etc.",
"u": ["https://twitter.com/beemuvi/status/1511854969338556417",
      "https://help.beeminder.com/article/90-withings"],
"d": "2022-04-06",
"t": "2022-04-06",
}, { // ------------------------------------------------------------------------
"x": "Phased out all coupon codes / percent discounts for Beemium plans and emailed everyone affected. No such thing as paying less than full price for Beemium now!",
"d": "2022-02-20",
"t": "2022-04-07",
"u": ["https://twitter.com/beemuvi/status/1512188861513838592",
      "https://github.com/beeminder/beeminder/issues/2701"],
"c": "Note that UVI#3996 was just expiring the coupon links so no new coupons could be applied; this one is about rescinding existing coupons for Beemium folks.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: the graph settings page got new screenshots (the old ones were from the yellow brick road days!) plus other tweaks like keywords",
"u": ["https://twitter.com/beemuvi/status/1512189031681073154",
      "https://help.beeminder.com/article/105-graph-settings"],
"d": "2022-04-07",
"t": "2022-04-07",
}, { // ------------------------------------------------------------------------
"x": "If your start &amp; finish dates were in the past in the megabreak URL, we'd say (wrongly/confusingly) \"your finish date has to be after your start date\" #bugfix",
"u": ["https://twitter.com/beemuvi/status/1512565677650956288",
      "https://github.com/beeminder/beeminder/issues/2949#issuecomment-1092255941",
      "https://github.com/beeminder/beeminder/pull/3108"],
"d": "2022-04-07",
"t": "2022-04-08",
"c": "See UVI#3944",
}, { // ------------------------------------------------------------------------
"x": "When the deadline hits and until we redraw the graph for the new day, we now show a banner on your goal page to warn you that things may be briefly out of sync",
"u": ["https://twitter.com/beemuvi/status/1512565813324107777",
      "https://github.com/beeminder/beeminder/issues/532",
      "https://github.com/beeminder/beeminder/pull/3109"],
"d": "2022-04-08",
"t": "2022-04-08",
"c": "I.e., a persistent/cryptic banner ('A new day has dawned') is shown during the eke window. A baremin / worse-is-better stab at helping with user-confusion around non-dynamic goal pages.",
}, { // ------------------------------------------------------------------------
"x": "We nixed signup/login via Facebook and clarified that you can use the forgot-password link if you never had a password, cuz you'd previously used Facebook",
"u": ["https://twitter.com/beemuvi/status/1513663343810134016",
      "https://github.com/beeminder/beeminder/issues/3056"],
"d": "2022-04-09",
"t": "2022-04-11",
"c": "Microcopy: \"Forgot your password? (or never got one to begin with?)\"",
}, { // ------------------------------------------------------------------------
"x": "Our new banner alerting you of goals out of sync was buggily showing up permanently on archived goals! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1513667200426524674",
      "https://github.com/beeminder/beeminder/issues/3113",
      "https://github.com/beeminder/beeminder/pull/3114"],
"d": "2022-04-09",
"t": "2022-04-11",
"c": "Aka the new-day-has-dawned banner. See followup UVI for additional bugfix.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamped out-of-date docs for the following autodata integrations: Draft, Fitbit, and Garmin",
"u": ["https://twitter.com/beemuvi/status/1516564249157414912",
      "https://help.beeminder.com/article/121-draft",
      "https://help.beeminder.com/article/11-fitbit",
      "https://help.beeminder.com/article/74-garmin"],
"d": "2022-04-18",
"t": "2022-04-19",
}, { // ------------------------------------------------------------------------
"x": "Help docs: More changes and improvements to the following autodata integrations: Apple Health (new screenshots), Complice (new FAQ item), Focusmate (lots)",
"u": ["https://twitter.com/beemuvi/status/1516564418183630853",
      "https://help.beeminder.com/article/61-apple-health",
      "https://help.beeminder.com/article/85-complice",
      "https://help.beeminder.com/article/278-focusmate"],
"d": "2022-04-18",
"t": "2022-04-19",
}, { // ------------------------------------------------------------------------
"x": "Our 'new day has dawned' banner was also buggily showing up at the wrong time on certain goals with non-midnight deadlines (shaking my fist: timezones!) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1516920396557156353",
      "https://github.com/beeminder/beeminder/issues/3113",
      "https://github.com/beeminder/beeminder/pull/3128"],
"d": "2022-04-11",
"t": "2022-04-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Overhaul of our Duolingo integration help page, new screenshots, troubleshooting, reordered questions, etc",
"u": ["https://twitter.com/beemuvi/status/1516921216291852288",
      "https://help.beeminder.com/article/80-duolingo"],
"d": "2022-04-18",
"t": "2022-04-20",
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2022apr */ ]

const staged = [ {
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]

/*********************************************************************************************************************************************************************
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
[HOLD] 
Forest green aka darker green grayson dots when safe days is 7 or more
https://github.com/beeminder/road/issues/111
2020-10-26: done in beebrain
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] Decide! Either tweet it cuz it's a change that happened, or make a new gissue for undoing it and link to #1285 and #1494 in that gissue.
"x": "For the rare goals that are aggday=sum but not auto-summing, we no longer show the total due in the blurb that tells you your safety buffer",
// TODO: Wait, why, this doesn't make sense, if it's not auto-summing you'd want the sum, right?
"x": "Hide the total in the blurb with your safety buffer if the goal has a custom aggday of 'sum'. (Previously we were only hiding it when the goal is cumulative.)"
"u": [
      "https://github.com/beeminder/beeminder/issues/1285",
      "https://github.com/beeminder/beeminder/pull/1494"],
"d": "2020-07-08",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI] awaiting more changes with slug/goalname/goalID in the API
"x": "Super mini: removed \"Deprecated\" from the 'id' field in the API docs Goal resource -- UVI#2104 sort of myopically semi-broke the API, since we want you to use the goalname (aka slug) as the identifier, but now you can change the goalname, so we'd definitely better keep the goal ID around so API clients can piece things back together if someone goes and changes a goalname on them",
"c": "It's super mini, but took lots of words to say the things",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
shortcuts in beemiOS?
https://github.com/beeminder/BeeSwift/pull/273
PR 2021-03-30, testflight 2021-06-01
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[WIP]
Punctuation after hashtags allowed
https://github.com/beeminder/road/issues/142
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[WIP?]
Set API to be json only
Remove extra respond_tos.
Add base controller format override, along with a bunch of notes, so we can figure out what we did faster, next time.
For #1552
UVI: API users can once again get json from API urls that don't end in .json, like api/v1/users/me.
TODO: before merging this, add test for api/v1/users/me that fails without this change
TODO: add reference to wiki page in comments
TODO: review with @bsoule
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
beebrain: say 'eke' instead of :) if you're at tfin but on the wrong side of the bright red line. probably should be a normal beemergency in that case
also i guess now we sometimes say 'fin' and sometimes a happyface but i've forgotten why we do one vs the other... (and did we already tweet that?)
https://github.com/beeminder/road/issues/172
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[BEEMIOS]
username whitespace bugfix
https://github.com/beeminder/BeeSwift/issues/285
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI/QUESTIONABLE]
made the milkman group publicly viewable and show all goals, archived or not
https://github.com/beeminder/beeminder/issues/2472
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD: BEEDROID BUGFIX IN NEXT RELEASE: TIMEZONE SHORTNAMES NOW DST-SENSITIVE]
https://forum.beeminder.com/t/tiny-bug-beedroid-timezone-inaccuracy/9746/5?u=dreev
https://github.com/beeminder/beedroid/issues/198
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] milking the ampersand fix:
https://forum.beeminder.com/t/html-entity-display-bug/7678/8?u=dreev
probably need to do something with newlines or trimming whitespace -- discussion in forum thread ensuing
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TOO LAME?]
"x": "set an error if config info is bad in the goal (e.g. habitica_type setting missing or not valid -- could be a leftover from a very legacy habitica goal? but probably won't ever happen)"
https://github.com/beeminder/beeminder/issues/2006
https://github.com/beeminder/beeminder/pull/2737
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: unreverse withings autofetch batches
"x": "Our Withings autofetches were annoyingly (for those weighing in multiple times in a row) reversing each batch of datapoints they fetched. #bugfix",
https://github.com/beeminder/beeminder/issues/2739
"c": "This was kind of subtle for most users, or didn't impact you at all if your weigh-ins were spread out enough that we always fetched your data in between them. It matters a lot for Danny's tareable diet thing though!",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO-dreev: add links to UVIs to the gissues for december and january
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] BeemiOS 6.0: (see UVI#4031 and UVI#4045 for the 6pm deadline thing with sleep goals)
- Bug fix for inaccurate sleep data for Apple Health goals [tweeted 2 UVIs about forcing to 6pm already]
- Preliminary support for adding data to goals via Shortcut [users disconfirm; sadface]
"d": "2012-12-29",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD: Probably not a UVI, and not deployed] Improve handling of 500s from Mailgun when sending
Clarifies error message as well as retries on non-2xx response.
ADAM: @bsoule i don't have time to qualsify this at the moment, so i don't know if it works at all. If you want, you can take this over the finish line, otherwise, I can look at it when I'm back at it.
https://github.com/beeminder/beeminder/issues/2976
DATE DEPLOYED? [this is a WIP PR; not deployed as of 02/11; also probably not a UVI]
what about "Clarifies error message as well as retries on non-2xx response"? that sounds user-visible-ish -- no. it's just rearranging stuff in error handling + retrying that we were already doing. i don't think this is user visible. but could clarify with adam for higher levels of confidence. 
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] clocky aggday and not suppressing beebraining
fixed in 2019??
https://github.com/beeminder/beeminder/issues/703#issuecomment-1033153413
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
WIP PR; not deployed
a url to check what beeminder sees for urlminder?
https://github.com/beeminder/beeminder/commit/6a7311cddd29dc8e4b3f5cbff1ed3d51ab29a347
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
MINI: removed a lot of outdated weight-loss tips of the day
TODO: 
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
freecodecamp soft launch?
https://beeminder.consider.it/freecodecamp-what-should-our-next-autodata-integration-be-92-19939
https://github.com/beeminder/beeminder/issues/2782
2022-04-04: PR
2022-04-05: soft launch
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
other coupon-killing tasks (already tweeted killing discounts for beemium)
https://github.com/beeminder/beeminder/issues/2701
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: autodata links (like trello for the rest of them)
https://github.com/beeminder/beeminder/issues/493
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
//TWEETED
"x": "Help docs: Updated screenshots for our GitHub integration article, plus new clarifications about permissions in the Garmin article",
"u": ["https://twitter.com/beemuvi/status/1517291718554521600",
      "https://help.beeminder.com/article/81-github",
      "https://help.beeminder.com/article/74-garmin"],
"d": "2022-04-19",
"t": "2022-04-21",
}, { // ------------------------------------------------------------------------
//TWEETED
"x": "Added some missing page titles (the text the browser displays on the page's tab) for things like the premium page, the featured gallery, etc",
"u": ["https://twitter.com/beemuvi/status/1517292582505570309",
      "https://github.com/beeminder/beeminder/issues/3116",
      "https://github.com/beeminder/beeminder/pull/3161"],
"d": "2022-04-20",
"t": "2022-04-21",
}, { // ------------------------------------------------------------------------
//TWEETED
"x": "Released a new version of our Beeminder gem that works with Ruby 3. HT @t_a_w",
"u": ["https://twitter.com/beemuvi/status/1517635008915140608",
      "https://dev.to/taw/open-source-adventures-episode-37-fixing-beeminder-gem-to-work-with-ruby-3-d1c",
      "https://github.com/beeminder/beeminder-gem/issues/31"],
"d": "2022-04-19",
"t": "2022-04-22",
}, { // ------------------------------------------------------------------------
//TWEETED
"x": "Help docs: Clarifications on our Gmail integration page + tweaks and a new intro on our IFTTT integration page",
"u": ["https://twitter.com/beemuvi/status/1517644057723367424",
      "https://help.beeminder.com/article/86-ifttt",
      "https://help.beeminder.com/article/82-gmail"],
"d": "2022-04-21",
"t": "2022-04-22",
}, { // ------------------------------------------------------------------------
"x": "Help docs: new FAQ items on our Habitica integration page
"u": [
      "https://help.beeminder.com/article/83-habitica"],
"d": "2022-04-22",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
more page title stuff?
https://github.com/beeminder/beeminder/issues/2699
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
~~~~~~----------------------------- CANDIDATES -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~---------------------------------- IDEAS -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
1. http://forum.beeminder.com/t/please-let-me-rename-archived-goals/2746
2. DREEV: point to help.beeminder.com in blog.beeminder.com/newbees and vice versa
3. https://forum.beeminder.com/t/api-create-goal-documentation-needs-updating/5547
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~-------------------- TOO LATE / TOO LAME -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
* Friendlier oauth names: https://github.com/beeminder/beeminder/issues/1612
* CNR on this weight-loss restart thing means maybe we fixed it long ago without realizing it? https://github.com/beeminder/beeminder/issues/1321
* fixed timeouts in jsbrain_server? https://github.com/beeminder/road/issues/51 -- depl'd probably 2020 october or earlier
* milk static-401 for more uvis? (fixing/obviating the banner bug, making it all work the same via the API)
* fixed some (most? many?) of the thing where flash banner shows up again after you leave current page & go to another page [maybe mostly only happens for admins?]
* Vimium users can now jump to the goals on the dashboard with hotkeys. something about octicons apparently?
* max-height for the landing page images, same commit url as an old one from a previous UVI about runkeeper:
  https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3
* Got rid of the \"Increase the pledge each time you derail\" checkbox on the goal page as it was redundant with using Pledge Caps to stop pledge increases
  [BEE: nothing was tweeted as far I can see; but also you don't have a PR/Gissue to link to with this, so maybe that + the ancientness disqualifies it?]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
//////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*********************************************************************************************************************************************************************/
