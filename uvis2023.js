const batch2023jan = [{
}, { // ------------------------------------------------------------------------
"x": "The Metaminder integration was missing datapoint info in the comment of the meta datapoints. #bugfix HT @lady_alys",
"u": ["https://twitter.com/beemuvi/status/1610439647041294337",
      "https://forum.beeminder.com/t/beeminder-push-to-beeminder-aka-rudimentary-meta-integration-aka-disintermediate-ifttt-for-foo-days-goals/10693/7?u=dreev",
      "https://github.com/beeminder/beeminder/issues/3944",
      "https://github.com/beeminder/beeminder/pull/3945"],
"d": "2023-01-01",
"t": "2023-01-03",
}, { // ------------------------------------------------------------------------
"x": "Our Strava integration started using the current date instead of the event date when adding datapoints. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1610440458496540672",
      "https://github.com/beeminder/beeminder/issues/3935",
      "https://github.com/beeminder/beeminder/pull/3937"],
"d": "2023-01-02",
"t": "2023-01-03",
}, { // ------------------------------------------------------------------------
"x": "Our webhook callback JSON now includes all the datapoint parameters documented at https://api.beeminder.com/#datapoint",
"u": ["https://twitter.com/beemuvi/status/1610444018881810433",
      "https://github.com/beeminder/beeminder/issues/2007",
      "https://github.com/beeminder/beeminder/pull/3945"],
"d": "2023-01-01",
"t": "2023-01-03",
}, { // ------------------------------------------------------------------------
"x": "UVI#4339 broke how we displayed \"Project Euler\" and in fact made it impossible to load Project Euler goal pages altogether briefly. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1610445380055093251",
      "https://github.com/beeminder/beeminder/issues/3932",
      "https://github.com/beeminder/beeminder/pull/3933"],
"d": "2022-12-28",
"t": "2022-01-03",
}, { // ------------------------------------------------------------------------
"x": "January special: we bumped the free goal limit on the free plan from 3 to 4 goals",
"u": ["https://twitter.com/beemuvi/status/1611164969818820608",
      "https://forum.beeminder.com/t/a-newbees-guide-to-beeminding-weight-now-with-meta-minding/10705",
      "https://github.com/beeminder/beeminder/pull/3949"],
"d": "2023-01-01",
"t": "2023-01-05",
"c": "As a little commitment device for ourselves, we're not undoing that until we deploy a related UVI, cuz a temporary increase in the goal limit is too cheap to count! PS: And done. It was the parceling out goals sting-ily feature, UVI#4447.",
}, { // ------------------------------------------------------------------------
"x": "Our stalwart integration partner, Draft, is sadly shutting down. We emailed those affected, converted their goals to manual, and removed Draft from the gallery.",
"u": ["https://twitter.com/beemuvi/status/1611164335686184964",
      "https://forum.beeminder.com/t/the-state-of-draft/10366/7?u=dreev",
      "https://github.com/beeminder/beeminder/issues/3871",
      "https://github.com/beeminder/beeminder/pull/3962"],
"t": "2023-01-05",
}, { // ------------------------------------------------------------------------
"x": "We changed the default end date of new goals from \"now + 10 years\" to \"2099-12-31\"",
"u": ["https://twitter.com/beemuvi/status/1611524568799408134",
      "https://manifold.markets/dreev/beeminder-2099",
      "https://github.com/beeminder/beeminder/issues/3570"],
"d": "2023-01-05",
"t": "2023-01-06",
}, { // ------------------------------------------------------------------------
"x": "Changing the end date to 2099 caused a regression: turns out we weren't letting you change graphs with red lines ending after the year 2038! #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1611524679021506561",
      "https://github.com/beeminder/beeminder/issues/3977"],
"d": "2023-01-06",
"t": "2023-01-06",
}, { // ------------------------------------------------------------------------
"x": "Turns out our own bmndr.co/aboutus page was not robust to graph generation errors in our meta graphs and the whole page was briefly broken! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1612609345270972417",
      "https://github.com/beeminder/beeminder/issues/3981",
      "https://github.com/beeminder/beeminder/pull/4002"],
"d": "2023-01-07",
"t": "2023-01-09",
"c": "This also made broken goals say 'uncountable', but we failed to mention that.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamp of the article about changing your goal's pledge, emphasizing both increases and decreases, more on step-downs and short-circuiting, etc",
"u": ["https://help.beeminder.com/article/21-can-i-increase-or-decrease-the-pledge-on-my-goal",
      "https://twitter.com/beemuvi/status/1612610624286261249"],
"d": "2022-12-30",
"t": "2023-01-09",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarified about different pledge caps in the article about that, other clarifications in the one about pledgeless goals, plus tweaks to 4 others",
"u": ["https://twitter.com/beemuvi/status/1612974703328780288",
      "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets",
      "https://help.beeminder.com/article/23-can-i-have-goals-without-pledges",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription",
      "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work",
      "https://help.beeminder.com/article/26-what-if-i-buy-one-plan-and-change-my-mind",
      "https://help.beeminder.com/article/27-what-payment-methods-are-available"],
"d": "2023-01-10",
"t": "2023-01-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New article about when charges actually happen",
"u": ["https://twitter.com/beemuvi/status/1612974933407326210",
      "https://help.beeminder.com/article/324-when-do-i-pay"],
"d": "2023-01-09",
"t": "2023-01-10",
}, { // ------------------------------------------------------------------------
"x": "The link to data source on Duolingo autodata goals is now more direct, going straight to the page showing your language courses and XP totals",
"u": ["https://twitter.com/beemuvi/status/1613333957663424513",
      "https://github.com/beeminder/beeminder/issues/3995",
      "https://github.com/beeminder/beeminder/pull/3996"],
"d": "2023-01-11",
"t": "2023-01-11",
}, { // ------------------------------------------------------------------------
"x": "You can now see what language you're beeminding and your Duolingo username in the Beeminder goal settings and goal sidebar for your Duolingo autodata goals",
"u": ["https://twitter.com/beemuvi/status/1613334355405074433",
      "https://github.com/beeminder/beeminder/issues/3287",
      "https://github.com/beeminder/beeminder/issues/3994",
      "https://github.com/beeminder/beeminder/pull/3996"],
"d": "2023-01-11",
"t": "2023-01-11",
}, { // ------------------------------------------------------------------------
"x": "We changed our @focusmate integration to ignore sessions you scheduled but never joined. Fair, right? We emailed all affected users to warn them of the change!",
"u": ["https://twitter.com/beemuvi/status/1613665977211965442",
      "https://github.com/beeminder/beeminder/issues/3286",
      "https://github.com/beeminder/beeminder/issues/3614",
      "https://github.com/beeminder/beeminder/pull/3636"],
"d": "2023-01-10",
"t": "2023-01-12",
}, { // ------------------------------------------------------------------------
"x": "To settle a years-long debate and secure world peace, we added the date and version of the latest deploy to the footer of the Beeminder website. #thanksobama",
"u": ["https://twitter.com/beemuvi/status/1613694704000069639",
      "https://github.com/beeminder/beeminder/issues/4007",
      "https://github.com/beeminder/beeminder/pull/4008"],
"d": "2023-01-12",
"t": "2023-01-12",
}, { // ------------------------------------------------------------------------

"x": "Fixed some ambiguous webcopy on the newbee empty-gallery page: There's a one-week delay to make your goal easier -> Making your goal easier has a one-week delay",
"u": ["https://twitter.com/beemuvi/status/1615146964714393600",
      "https://github.com/beeminder/beeminder/issues/3048"],
"d": "2023-01-13",
"t": "2023-01-16",
}, { // ------------------------------------------------------------------------
"x": "We refined the urgency load metric to account for goals whose end date is approaching: max(0,min(7,m)-b) where m is days till your goal ends & b safety buffer",
"u": ["https://twitter.com/beemuvi/status/1615152380869496833",
      "https://github.com/beeminder/beeminder/issues/3885"],
"d": "2023-01-16",
"t": "2023-01-16",
}, { // ------------------------------------------------------------------------
"x": "Urgency Load is now in the Stats tab! Both the contribution to urgency load from the specific goal as well as the total across all your goals",
"u": ["https://twitter.com/beemuvi/status/1615513894109470720",
      "https://github.com/beeminder/beeminder/issues/3918"],
"d": "2023-01-16",
"t": "2023-01-17",
"c": "Also a link to the glossary",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New article about force majeure aka \"an emergency came up and I can't do my goal!\"",
"u": ["https://twitter.com/beemuvi/status/1615516125584035840",
      "https://help.beeminder.com/article/325-help-an-emergency-came-up-and-i-cant-do-my-goal"],
"d": "2023-01-17",
"t": "2023-01-17",
"c": "This is a common question/concern/panicked last minute email of desperation in support. I’ve done my best to balance “we don’t want to charge you if it’s not fair” with “hey, maybe you could actually do the goal” and “support may not instantly cancel the charge if there’s any doubt”, to avoid this provoking extra calls of non-legit that wouldn’t have happened otherwise, so actually the majority of the page is a gentle nudge to think again, with the practical info about how to call non-legit / ask for a break at the end (with an anchor link, so we can give someone the link straight to that part if need be).",
}, { // ------------------------------------------------------------------------
"x": "We added new support workerbees Joshua and Oliver to the About Us page!",
"u": ["https://twitter.com/beemuvi/status/1615875959726702592",
      "https://github.com/beeminder/beeminder/issues/4023",
      "https://github.com/beeminder/beeminder/pull/4021"],
"d": "2023-01-18",
"t": "2023-01-18",
}, { // ------------------------------------------------------------------------
"x": "As an add-on to UVI#4355 and because recent UVIs have been pretty huge, we'll count this: when/if we do break our meta graphs the hours will say \"uncountable\"",
"u": ["https://twitter.com/beemuvi/status/1615876567808499713",
      "https://github.com/beeminder/beeminder/issues/3981"],
"t": "2023-01-18",
"c": "In the previous UVI we had it saying \"countless\" for both cases (no graph and broken graph). Now it's \"countless\" for no graph and \"uncountable\" for a broken graph.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Our article on what is a derailment is now clear about the consequences of editing past data aka the red-yesterday criterion",
"u": ["https://twitter.com/beemuvi/status/1616237699492642817",
      "https://help.beeminder.com/article/12-what-is-a-derailment"],
"d": "2023-01-18",
"t": "2023-01-19",
}, { // ------------------------------------------------------------------------
"x": "Help docs: clarifications and copyedits and links and such in 6 more articles",
"u": ["https://twitter.com/beemuvi/status/1616237816526299137",
      "https://help.beeminder.com/article/28-how-do-i-update-my-payment-information",
      "https://help.beeminder.com/article/324-when-do-i-pay",
      "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails",
      "https://help.beeminder.com/article/244-premium-credit",
      "https://help.beeminder.com/article/13-when-do-derailments-happen",
      "https://help.beeminder.com/article/12-what-is-a-derailment"],
"d": "2023-01-19",
"t": "2023-01-19",
}, { // ------------------------------------------------------------------------
"x": "An obscure bug made it impossible (at least once!) to confirm your email address. We fixed it for the user affected and robusted it for the future. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1616596156322308096",
      "https://github.com/beeminder/beeminder/issues/4013",
      "https://github.com/beeminder/beeminder/pull/4014"],
"d": "2023-01-13",
"t": "2023-01-20",
"c": "Details: It was possible to get stuck in a state where you couldn't confirm your email address because you were missing the \"confirmation code\", and resending the \"please confirm your address\" email didn't regenerate a new one.",
}, { // ------------------------------------------------------------------------
"x": "We now make all users, even if you sign up via Google or other oAuth service, confirm their email at signup. Yes, we are recanting on UVI#4174!",
"u": ["https://twitter.com/beemuvi/status/1616597656301862913",
      "https://github.com/beeminder/beeminder/issues/2095",
      "https://github.com/beeminder/beeminder/pull/4025"],
"d": "2023-01-20",
"t": "2023-01-20",
"c": "We need to verify that we can send you mail *and you can receive it* before we start charging you money. Impetus for this was that the newbee welcome emails to support weren't getting sent for Google users and this was an expedient way to fix that. When we thought about it, we realized it was worth doing regardless.",
}, { // ------------------------------------------------------------------------
"x": "Microcopy update: Narthur found a spot in the ratchet UI where it referenced \"commit to\" instead of the \"commitment dial\", which is what we call it these days",
"u": ["https://twitter.com/beemuvi/status/1617685360271843328",
      "https://github.com/beeminder/beeminder/issues/3915",
      "https://github.com/beeminder/beeminder/pull/4032"],
"d": "2023-01-23",
"t": "2023-01-23",
}, { // ------------------------------------------------------------------------
"x": "We added some rate-limiting to fend off evil bots and buggy API clients but it was too aggressive and affected real users - whoopsies - so we backed it off",
"u": ["https://twitter.com/beemuvi/status/1617685551737626626",
      "https://github.com/beeminder/beeminder/issues/1726",
      "https://github.com/beeminder/beeminder/pull/4030",
      "https://github.com/beeminder/beeminder/pull/4026",
      "https://github.com/beeminder/beeminder/pull/4020"],
"d": "2023-01-23",
"t": "2023-01-23",
}, { // ------------------------------------------------------------------------
"x": "In freeCodeCamp goal setup if you only had a solitary point we said '1 points'. It now correctly pluralizes the word 'point', even if that's lonelier. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1618050201725566976",
      "https://github.com/beeminder/beeminder/issues/3102",
      "https://github.com/beeminder/beeminder/pull/4035"],
"d": "2023-01-24",
"t": "2023-01-24",
}, { // ------------------------------------------------------------------------
"x": "Help docs: revamp of our Apple Health integration article with new FAQ item, table of contents, anchor links, and other links",
"u": ["https://twitter.com/beemuvi/status/1618050366926630915",
      "https://help.beeminder.com/article/61-apple-health"],
"d": "2023-01-23",
"t": "2023-01-24",
}, { // ------------------------------------------------------------------------
"x": "To guilt you into not abusing the loophole, the popup described in UVI#2221 now shows how many charges you've canceled via that feature",
"u": ["https://twitter.com/beemuvi/status/1618409366750900225",
      "https://github.com/beeminder/beeminder/issues/3333",
      "https://github.com/beeminder/beeminder/pull/4038"],
"d": "2023-01-25",
"t": "2023-01-25",
"c": "Aka 'selfcancels'",
}, { // ------------------------------------------------------------------------
"x": "We had a dumb ~bug in signup where you had to re-enter your payment info if you answered the captcha incorrectly. That's now smoothed out.",
"u": ["https://twitter.com/beemuvi/status/1618409469767200769",
      "https://github.com/beeminder/beeminder/issues/3007",
      "https://github.com/beeminder/beeminder/pull/4041",
      "https://simplehash.dreev.repl.co/"],
"d": "2023-01-25",
"t": "2023-01-25",
"c": "We now validate the lame captcha in the frontend",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Official article for the official Boss as a Service integration",
"u": ["https://twitter.com/beemuvi/status/1618772709714071552",
      "https://help.beeminder.com/article/329-boss-as-a-service-baas"],
"d": "2023-01-25",
"t": "2023-01-26",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Official article for the official RSSminder integration",
"u": ["https://twitter.com/beemuvi/status/1618772776592248832",
      "https://help.beeminder.com/article/331-rssminder"],
"d": "2023-01-26",
"t": "2023-01-26",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Our help page for the Metaminder integration was more of a placeholder and pointer to the blog post till now. Now it spells it all out, FAQ, etc!",
"u": ["https://help.beeminder.com/article/323-metaminder",
      "https://twitter.com/beemuvi/status/1619132818684248066"],
"d": "2023-01-27",
"t": "2023-01-27",
}, { // ------------------------------------------------------------------------
"x": "Derail and self-destructing PPR datapoints are now excluded from Metaminder",
"u": ["https://twitter.com/beemuvi/status/1620947528278736898",
      "https://forum.beeminder.com/t/metaminder-psa-derail-and-ppr-datapoints-should-now-be-excluded/10792",
      "https://github.com/beeminder/beeminder/issues/3939"],
"d": "2023-01-31",
"t": "2023-02-01",
"c": "Aka magic-meta or dummy datapoints",
}, /* --------------------------------------------------------- end 2023jan */ ]

const batch2023feb = [{
}, { // ------------------------------------------------------------------------
"x": "Doh, UVI#4378 accidentally made the captcha for the signup page be case-sensitive and trailing-whitespace-sensitive. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1622758633728786432",
      "https://github.com/beeminder/beeminder/issues/4052",
      "https://github.com/beeminder/beeminder/pull/4053"],
"d": "2023-02-01",
"t": "2023-02-06",
}, { // ------------------------------------------------------------------------
"x": "Also the captcha is slightly stricter (it used to accept any string that had the answer as a substring) but now says if you're right in real time; much nicer!",
"u": ["https://twitter.com/beemuvi/status/1622760104880902144",
      "https://github.com/beeminder/beeminder/issues/3007",
      "https://github.com/beeminder/beeminder/pull/4041"],
"d": "2023-01-25",
"t": "2023-02-06",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Improvements to our Clozemaster and CodeCombat articles (new link, etc) and graveyard-ified the Draft article and pointed to URLminder",
"u": ["https://twitter.com/beemuvi/status/1623119695263186944",
      "https://help.beeminder.com/article/290-clozemaster",
      "https://help.beeminder.com/article/288-codecombat",
      "https://help.beeminder.com/article/121-draft"],
"t": "2023-02-07",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added new troubleshooting and a warning and an invitation to try a beta thing to our Focusmate article, plus tweaks to Complice, Duolingo, and Fitbit",
"u": ["https://twitter.com/beemuvi/status/1623119836728664064",
      "https://help.beeminder.com/article/278-focusmate",
      "https://help.beeminder.com/article/85-complice",
      "https://help.beeminder.com/article/80-duolingo",
      "https://help.beeminder.com/article/11-fitbit"],
"t": "2023-02-07",
}, { // ------------------------------------------------------------------------
"x": "Years ago we introduced a bug with smartphone app logins that spuriously percent-unencoded your password so certain passwords with %'s wouldn't work. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1623480161973993473",
      "https://github.com/beeminder/beeminder/issues/4043",
      "https://github.com/beeminder/beedroid/issues/18"],
"d": "2023-01-27",
"t": "2023-02-08",
}, { // ------------------------------------------------------------------------
"x": "That one was rare cuz any invalid %-encoding we'd just let thru. Then we \"fixed\" it to error out on invalid %-encodings & lots of folks couldn't log in. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1623480375384354816",
      "https://github.com/beeminder/beeminder/issues/4043",
      "https://github.com/beeminder/beedroid/issues/18"],
"d": "2023-01-27",
"t": "2023-02-08",
"c": "To be clear, the fix that was actually needed was to just not try to percent-unencode passwords in the first place. Which we now correctly do not do. And the #zombie was that initially we did some update that made us barf if your password had percents but wasn't a valid percent-encoding. Most users were unaffected by any of this because percent-unencoding most passwords is a no-op. Basically there are 3 types of password: (1) the majority that unencoding is a no-op for, (2) a tiny subset that happen to be valid percent-encodings and change when you unencode them, and (3) a larger set that are invalid percent-encodings. We used to let group 3 through unaffected, then we broke things for group 3, then we nixed the spurious unencoding altogether so everything works for all 3 groups! Phew!",
}, { // ------------------------------------------------------------------------
"x": "Next step from UVI#4042: If you have PayPal as a payment method but something else as your default, you can no longer switch your default back to PayPal",
"u": ["https://twitter.com/beemuvi/status/1623847268922327041",
      "https://github.com/beeminder/beeminder/issues/2987"],
"d": "2023-02-09",
"t": "2023-02-09",
}, { // ------------------------------------------------------------------------
"x": "Help docs: copy tweaks, a new link, and some weasel-discouragement to the \"What is a legit derailment?\" and \"What happens when I derail?\" articles",
"u": ["https://twitter.com/beemuvi/status/1623848692091588610",
      "https://help.beeminder.com/article/16-what-is-a-legit-derailment",
      "https://help.beeminder.com/article/17-what-happens-when-i-derail"],
"d": "2023-01-23",
"t": "2023-02-09",
}, { // ------------------------------------------------------------------------
"x": "This specific thing isn't inherently an improvement but entails enough awesomesauce that it counts: we now redirect you to a Stripe page to add payment info",
"u": ["https://twitter.com/beemuvi/status/1624210199992225792",
      "https://blog.beeminder.com/stripe/",
      "https://github.com/beeminder/beeminder/issues/596",
      "https://github.com/beeminder/beeminder/pull/4079"],
"d": "2023-02-09",
"t": "2023-02-10",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We now support 3D Secure payments!",
"u": ["https://twitter.com/beemuvi/status/1624210292740861952",
      "https://blog.beeminder.com/stripe/",
      "https://github.com/beeminder/beeminder/issues/596"],
"d": "2023-02-09",
"t": "2023-02-10",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We now support Google Pay!",
"u": ["https://twitter.com/beemuvi/status/1624210416493789185",
      "https://blog.beeminder.com/stripe/",
      "https://github.com/beeminder/beeminder/issues/596"],
"d": "2023-02-09",
"t": "2023-02-10",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We now support Apple Pay!",
"u": ["https://twitter.com/beemuvi/status/1624210466443763713",
      "https://blog.beeminder.com/stripe/",
      "https://github.com/beeminder/beeminder/issues/596"],
"d": "2023-02-09",
"t": "2023-02-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Formatting and more troubleshooting updates to GitHub, Gmail, Habitica, and IFTTT integration articles, and the graveyard pages for Misfit & Jawbone",
"u": ["https://twitter.com/beemuvi/status/1627834957430427653",
      "https://help.beeminder.com/article/81-github",
      "https://help.beeminder.com/article/82-gmail",
      "https://help.beeminder.com/article/83-habitica",
      "https://help.beeminder.com/article/86-ifttt",
      "https://help.beeminder.com/article/75-jawbone",
      "https://help.beeminder.com/article/91-misfit"],
"d": "2023-02-19",
"t": "2023-02-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a section to the article for our Make integration comparing it to Zapier and IFTTT",
"u": ["https://twitter.com/beemuvi/status/1627835181414612994",
      "https://help.beeminder.com/article/318-make-formerly-integromat"],
"d": "2023-02-17",
"t": "2023-02-20",
}, { // ------------------------------------------------------------------------
"x": "Improved long-standing funkiness with post-log-in redirects, where sometimes we'd send you to a surprising location (eg, after adding a 3rd-party oAuth) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1628145022708363264",
      "https://github.com/beeminder/beeminder/issues/308",
      "https://github.com/beeminder/beeminder/issues/4066",
      "https://github.com/beeminder/beeminder/pull/4075"],
"d": "2023-02-07",
"t": "2023-02-21",
"c": "We use the session to store a return-to location, eg, before oAuthing a 3rd party for autodata, but we weren't always cleaning it up after we use it. Now we clean it up and, where appropriate, expire it after a time.",
}, { // ------------------------------------------------------------------------
"x": "Minor inconsistency in charge scheduling: normally 24 hours after premium renewal email but if you added a new payment method it would happen early. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1628148547324620808",
      "https://github.com/beeminder/beeminder/issues/4083",
      "https://github.com/beeminder/beeminder/pull/4084"],
"d": "2023-02-09",
"t": "2023-02-21",
"c": "This barely counts since we're kind of intentionally vague about when the charge is happening so there isn't exactly such a thing as 'early' here. But consistency is nice! Applies to any charge, so, e.g. API or Slack bot charges too.",
}, { // ------------------------------------------------------------------------
"x": "Regression introduced in December: Self-canceling a la UVI#2221 silently failed for charges created before UVI#4334. #bugfix slight #burglebug #zombie",
"u": ["https://twitter.com/beemuvi/status/1628539741112254464",
      "https://github.com/beeminder/beeminder/issues/4027",
      "https://github.com/beeminder/beeminder/pull/4081"],
"d": "2023-02-09",
"t": "2023-02-22",
"c": "Ie, the self-serve legit check feature silently failed if you tried to cancel a charge created before the switchover from Stripe::Charge to Stripe::PaymentIntents",
}, { // ------------------------------------------------------------------------
"x": "Fixed an anti-magic violation on the signup page: the error checking for email/username/CAPTCHA is now always displayed as soon as you start typing",
"u": ["https://twitter.com/beemuvi/status/1628539903440220162",
      "https://github.com/beeminder/beeminder/issues/3710",
      "https://github.com/beeminder/beeminder/pull/4085"],
"d": "2023-02-09",
"t": "2023-02-22",
"c": "As opposed to the convoluted thing it used to do that was like 'after you finish typing the full thing or once we've validated it once, then on every keystroke'. Death to if-statements!",
}, { // ------------------------------------------------------------------------
"x": "There's now a nice green halation on the fields of the signup form when what you've typed so far is valid",
"d": "2023-02-09",
"t": "2023-02-23",
"u": ["https://twitter.com/beemuvi/status/1628842878834446337",
      "https://github.com/beeminder/beeminder/issues/3710",
      "https://github.com/beeminder/beeminder/pull/4085"],
}, { // ------------------------------------------------------------------------
"x": "And the red halation for invalid input is no longer suppressed when the field is in focus. #bugfix",
"d": "2023-02-09",
"t": "2023-02-23",
"u": ["https://twitter.com/beemuvi/status/1628842979397091329",
      "https://github.com/beeminder/beeminder/issues/3710",
      "https://github.com/beeminder/beeminder/pull/4085"],
}, { // ------------------------------------------------------------------------
"x": "Also on the signup form: the red halation for the text area for what you intend to beemind was altogether missing. Now it's the same as everything else. #bugfix",
"d": "2023-02-09",
"t": "2023-02-23",
"u": ["https://twitter.com/beemuvi/status/1628843113350578176",
      "https://github.com/beeminder/beeminder/issues/3710",
      "https://github.com/beeminder/beeminder/pull/4085"],
}, { // ------------------------------------------------------------------------
"x": "The add-payment button would disable itself if anything in the signup form was filled out wrong, but not immediately re-enable itself when you fixed it. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1629282382292606977",
      "https://github.com/beeminder/beeminder/issues/3710",
      "https://github.com/beeminder/beeminder/pull/4085"],
"c": "Workaround was to first click somewhere outside the field you just fixed, but that was not very discoverable so we looked fairly broken",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Lots of improvements to our Pocket integration documentation including primer on Pocket and examples of beeminding it, new FAQ items, and more",
"u": ["https://twitter.com/beemuvi/status/1630366530314858499",
      "https://help.beeminder.com/article/291-pocket"],
"d": "2023-02-21",
"t": "2023-02-27",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Intro blurbs, copy tweaks, standardization with other autodata integration articles, examples for Runkeeper, Project Euler, RescueTime, and RSSminder",
"u": ["https://twitter.com/beemuvi/status/1630366602251370496",
      "https://help.beeminder.com/article/77-runkeeper",
      "https://help.beeminder.com/article/292-project-euler",
      "https://help.beeminder.com/article/76-rescuetime",
      "https://help.beeminder.com/article/331-rssminder"],
"d": "2023-02-27",
"t": "2023-02-27",
}, { // ------------------------------------------------------------------------
"x": "Reformatted and shortened the CAPTCHA riddle instructions on the signup form",
"u": ["https://twitter.com/beemuvi/status/1630733363572277248",
      "https://github.com/beeminder/beeminder/issues/3710",
      "https://github.com/beeminder/beeminder/pull/4085"],
"t": "2023-02-28",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Gateway drug commitment device! Signing up for Beeminder now requires agreeing to get charged $5 if you don't create a goal within a week!",
"u": ["https://twitter.com/beemuvi/status/1630733486456975360",
      "https://github.com/beeminder/beeminder/issues/3526",
      "https://github.com/beeminder/beeminder/pull/4124"],
"d": "2023-02-28",
"t": "2023-02-28",
}, /* --------------------------------------------------------- end 2023feb */ ]

const batch2023mar = [{
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added Google Pay and Apple Pay and 3D Secure to our article about payment methods",
"u": ["https://twitter.com/beemuvi/status/1631096180141850624",
      "https://help.beeminder.com/article/27-what-payment-methods-are-available"],
"d": "2023-02-14",
"t": "2023-03-01",
}, { // ------------------------------------------------------------------------
"x": "We were inconsistent between the website and the forum on whether to call ourselves workerbees or worker bees. We're going with workerbees! HT @lady_alys",
"u": ["https://twitter.com/beemuvi/status/1631095919663017984",
      "https://forum.beeminder.com"],
"d": "2023-01-27",
"t": "2023-03-01",
}, { // ------------------------------------------------------------------------
"x": "We increased the character limit for the intentions field on the signup form, plus all the new instructions/UI for the gateway drug commitment device",
"u": ["https://twitter.com/beemuvi/status/1631454764969111553",
      "https://github.com/beeminder/beeminder/issues/3710",
      "https://github.com/beeminder/beeminder/pull/4124"],
"d": "2023-02-28",
"t": "2023-03-02",
}, { // ------------------------------------------------------------------------
"x": "Critical regression with the gateway drug changes: your gallery view (as opposed to dashboard view) of your goals briefly gave a 500-error. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1631454936348381187",
      "https://github.com/beeminder/beeminder/issues/4129",
      "https://github.com/beeminder/beeminder/pull/4130",
      "https://github.com/beeminder/beeminder/pull/4124"],
"d": "2023-03-01",
"t": "2023-03-02",
}, { // ------------------------------------------------------------------------
"x": "There's a huge color-coded countdown on your empty dashboard page counting down to when you'll be charged if you don't create a goal!",
"u": ["https://twitter.com/beemuvi/status/1631820192753016833",
      "https://github.com/beeminder/beeminder/issues/4082",
      "https://github.com/beeminder/beeminder/pull/4124"],
"t": "2023-03-03",
"c": "Just for people who signed up since we added the gateway drug meta commitment device of course",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug with the \"create a new goal\" button getting off-center at small screen sizes, plus more copy tweaks/fixes on the empty dashboard page. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1631820452904710144",
      "https://github.com/beeminder/beeminder/pull/4124"],
"d": "2023-02-28",
"t": "2023-03-03",
}, { // ------------------------------------------------------------------------
"x": "Updated the graph legend image for the swath-formerly-known-as-turquoise to be purple, and updated all mentions of turquoise to purple",
"u": ["https://twitter.com/beemuvi/status/1632903599192952832",
      "https://github.com/beeminder/beeminder/issues/3273",
      "https://github.com/beeminder/beeminder/pull/4101"],
"d": "2023-02-22",
"t": "2023-03-06",
}, { // ------------------------------------------------------------------------
"x": "Added a graph legend entry for the $$ and countdown watermarks that show up on the graph",
"u": ["https://twitter.com/beemuvi/status/1632903846325526528",
      "https://github.com/beeminder/beeminder/issues/3530",
      "https://github.com/beeminder/beeminder/pull/4101"],
"d": "2023-02-22",
"t": "2023-03-06",
}, { // ------------------------------------------------------------------------
"x": "Added a graph legend entry for the Jolly Roger that shows up on frozen graphs, like when you derail when the goal is scheduled to be archived",
"u": ["https://twitter.com/beemuvi/status/1633267177553006594",
      "https://github.com/beeminder/beeminder/issues/3530",
      "https://github.com/beeminder/beeminder/pull/4136"],
"t": "2023-03-07",
}, { // ------------------------------------------------------------------------
"x": "Finally changed all mentions of \"polynomial fit\" now that we're using an infinite-impulse-response filter instead",
"u": ["https://twitter.com/beemuvi/status/1633269388433555457",
      "https://blog.beeminder.com/smooth/",
      "https://help.beeminder.com/article/105-graph-settings",
      "https://github.com/beeminder/beeminder/issues/3273",
      "https://github.com/beeminder/beeminder/pull/4136",
      "https://github.com/beeminder/beeminder/pull/4137"],
"d": "2023-03-07",
"t": "2023-03-07",
}, { // ------------------------------------------------------------------------
"x": "Oops, in the legend descriptions if you tried to click on one of the links, the whole description would switch state on you. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1633633638008115201",
      "https://github.com/beeminder/beeminder/issues/3530",
      "https://github.com/beeminder/beeminder/pull/4136"],
"t": "2023-03-08",
"c": "It still worked to click links, it would just also toggle the expanded/collapsed state.",
}, { // ------------------------------------------------------------------------
"x": "We made a bunch of copyedits and improvements to the graph legend (including a link to the glossary and marking the rosy line as deprecated)",
"u": ["https://twitter.com/beemuvi/status/1633634149717397505",
      "https://github.com/beeminder/beeminder/issues/3530",
      "https://github.com/beeminder/beeminder/pull/4136"],
"t": "2023-03-08",
"c": "Say graph instead of goal whenever it makes sense to, prose-tightening, anti-scarequotes, elaborate hovertext",
}, { // ------------------------------------------------------------------------
"x": "Added Forfeit and TaskRatchet and Complice to our FAQ (in case you're looking for commitment devices without data and graphs)",
"u": ["https://twitter.com/beemuvi/status/1633996475620524033",
      "https://www.beeminder.com/faq",
      "https://github.com/beeminder/beeminder/issues/4140"],
"d": "2023-03-07",
"t": "2023-03-09",
"c": "And huge thanks to Forfeit.app for putting us in their FAQ",
}, { // ------------------------------------------------------------------------
"x": "Fixed inconsistent links in our graph legends; they all open in a new tab now. Also made more improvements to the explanations there.",
"u": ["https://twitter.com/beemuvi/status/1633996660690026496",
      "https://github.com/beeminder/beeminder/issues/4149"],
"d": "2023-03-09",
"t": "2023-03-09",
}, { // ------------------------------------------------------------------------
"x": "Regression from UVI#799 fixed: logging in with the wrong username/password actually tells you which was incorrect. #bugfix #zombie",
"u": ["https://mobile.twitter.com/beemuvi/status/1634353395271356418",
      "https://github.com/beeminder/beeminder/issues/4064"],
"d": "2023-03-09",
"t": "2023-03-10",
"c": "At some point it started saying 'invalide username or password'. Black magic with Devise.",
}, { // ------------------------------------------------------------------------
"x": "Missed a couple spots in the graph legend: we now give the true story of the moving average and purple swath (IIR filter, etc) with links",
"u": ["https://mobile.twitter.com/beemuvi/status/1634353436908212225",
      "https://github.com/beeminder/beeminder/issues/4155"],
"d": "2023-03-10",
"t": "2023-03-10",
}, { // ------------------------------------------------------------------------
"x": "Formatting/layout improvements to the signup form, lots of fussing with the webcopy, improved accessibility by adding labels to CAPTCHA and intentions fields",
"u": ["https://twitter.com/beemuvi/status/1635728473938628609",
      "https://github.com/beeminder/beeminder/pull/4138"],
"d": "2023-03-07",
"t": "2023-03-14",
}, { // ------------------------------------------------------------------------
"x": "We added added a couple sentences of reassuring webcopy to the signup form about clicking the \"Add Your Payment Method\" button. Seems to be helping!",
"u": ["https://twitter.com/beemuvi/status/1636507548944838657",
      "https://manifold.markets/dreev/should-beeminder-collect-payment-in",
      "https://github.com/beeminder/beeminder/issues/4120",
      "https://github.com/beeminder/beeminder/pull/4138"],
"d": "2023-03-07",
"t": "2023-03-16",
}, { // ------------------------------------------------------------------------
"x": "Added some cute placeholder text in the intentions field of the signup form. HT @shanaqui and Madge",
"u": ["https://twitter.com/beemuvi/status/1636859879074979840",
      "https://github.com/beeminder/beeminder/issues/4144"],
"d": "2023-03-08",
"t": "2023-03-17",
"c": "About knitting party hats for bees. #gatewaydrug",
}, { // ------------------------------------------------------------------------
"x": "Fixed some microcopy in the ratchet UI that erroneously/outdatedly referred to \"the 'commit to' section\" instead of the commitment dial. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1636860191093460992",
      "https://github.com/beeminder/beeminder/issues/3915"],
"d": "2023-03-11",
"t": "2023-03-17",
}, { // ------------------------------------------------------------------------
"x": "A regression from the Stripe upgrades: if you clicked the \"email my full pledge history\" button, it would sometimes silently fail! #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1637957264568107008",
      "https://github.com/beeminder/beeminder/issues/4165",
      "https://github.com/beeminder/beeminder/pull/4163"],
"d": "2023-03-16",
"t": "2023-03-20",
"c": "Sometimes = if you had any new charges since the PaymentIntents change circa December",
}, { // ------------------------------------------------------------------------
"x": "For the gateway drug meta commitment device, we now email you a day before we charge you the $5",
"u": ["https://twitter.com/beemuvi/status/1637957795957067776",
      "https://github.com/beeminder/beeminder/issues/3526",
      "https://github.com/beeminder/beeminder/pull/4160"], // related/umbrella gissue
"d": "2023-03-15",
"t": "2023-03-20",
"c": "Gateway reminder sweeper. Also the creation of the charge when the user signs up and agrees to the gateway drug commitment device, and canceling that charge when a goal is created.",
}, { // ------------------------------------------------------------------------
"x": "Oops, we had an off-by-one error on display of deadline times thanks to daylight savings time and a timezone library that got out of date. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1638320780361736193",
      "https://github.com/beeminder/beeminder/issues/4166"],
"d": "2023-03-17",
"t": "2023-03-21",
"c": "MomentJS timezones library",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Table of contents and other improvements to the articles for the Slack integration, Sleep as Android, SMS bot, Strava, TaskRatchet, and Toggl",
"u": ["https://twitter.com/beemuvi/status/1638322100590215170",
      "https://help.beeminder.com/article/116-slack",
      "https://help.beeminder.com/article/84-sleep-as-android",
      "https://help.beeminder.com/article/112-sms",
      "https://help.beeminder.com/article/281-strava",
      "https://help.beeminder.com/article/289-taskratchet",
      "https://help.beeminder.com/article/155-toggl"],
"d": "2023-03-09",
"t": "2023-03-21",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New info about the StoryGraph integration (what happens if you add antedated data) and other improvements, and similar for Todoist and Trello",
"u": ["https://twitter.com/beemuvi/status/1638325793062522880",
      "https://help.beeminder.com/article/300-the-storygraph",
      "https://help.beeminder.com/article/79-todoist",
      "https://help.beeminder.com/article/78-trello"],
"d": "2023-03-13",
"t": "2023-03-21",
}, { // ------------------------------------------------------------------------//TWEETED
"x": "Updated our use of Twilio's API. We were getting errors on some attempts to send SMSes, causing silent failure. Now we're getting no errors.",
"u": ["https://twitter.com/beemuvi/status/1638679764700651520",
      "https://github.com/beeminder/beeminder/issues/857"],
"d": "2023-03-16",
"t": "2023-03-22",
"c": "We updated our Twilio gem and switched from the deprecated sms API endpoint to the new messages one. Seems that did the trick.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New details on \"What happens to an archived goal?\" plus standardization, TOC, etc on URLminder, Withings, and Zapier",
"u": ["https://twitter.com/beemuvi/status/1639054100653559808",
      "https://help.beeminder.com/article/46-what-happens-to-an-archived-goal",
      "https://help.beeminder.com/article/88-urlminder",
      "https://help.beeminder.com/article/90-withings",
      "https://help.beeminder.com/article/87-zapier"],
"d": "2023-03-22",
"t": "2023-03-23",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New paragraph about what happens if, for example, you have a device failure and can't add data to a goal, in the \"How do I quit a goal?\" article",
"u": ["https://twitter.com/beemuvi/status/1639054203304951808",
      "https://help.beeminder.com/article/44-how-do-i-quit-a-goal"],
"d": "2023-03-22",
"t": "2023-03-23",
}, { // ------------------------------------------------------------------------
"x": "Help docs: \"How do I delete a goal?\" now talks about how you can archive right away if you derail during the archive period, since that causes confusion",
"u": ["https://twitter.com/beemuvi/status/1639060678945427456",
      "https://help.beeminder.com/article/47-how-do-i-delete-a-goal"],
"d": "2023-03-22",
"t": "2023-03-23",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Screenshots added to \"How do I delete my account?\" and signposted archiving and adding breaks",
"u": ["https://twitter.com/beemuvi/status/1639062084414771200",
      "https://help.beeminder.com/article/48-how-do-i-delete-my-account"],
"d": "2023-03-23",
"t": "2023-03-23",
}, /* --------------------------------------------------------- end 2023mar */ ]

const batch2023apr = [{
}, { // ------------------------------------------------------------------------
"x": "A kind of obscure bug in the API that was affecting our Complice integration at least: API calls with long enough URLs would give 500-errors. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1644102283112886273",
      "https://github.com/beeminder/beeminder/issues/4182",
      "https://github.com/beeminder/beeminder/issues/4180"],
"d": "2023-03-24",
"t": "2023-04-06",
"c": "We saw this mostly with Complice because it passes in datapoint data, including comments, as URL parameters",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New anti-cheating discussion in the \"Can't you just lie?\" article plus tweaks and a new link in two other articles",
"u": ["https://twitter.com/beemuvi/status/1644118033483567104",
      "https://help.beeminder.com/article/34-cant-you-just-lie-about-your-data",
      "https://help.beeminder.com/article/45-what-is-the-akrasia-horizon",
      "https://help.beeminder.com/article/49-why-should-i-use-beeminder-over-stickk"],
"d": "2023-03-28",
"t": "2023-04-06",
}, { // ------------------------------------------------------------------------
"x": "Our guestbot feature that lets Beemium users drop in on our internal dev chat broke due to some SSL thing a while back; we got it back up and running. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1644489833958748160",
      "https://github.com/beeminder/guestbot",
      "https://github.com/beeminder/beeminder/issues/4194"],
"d": "2023-04-07",
"t": "2023-04-07",
}, { // ------------------------------------------------------------------------
"x": "Help docs: More verbiage and a link to a blog post in the \"Can I specify a beneficiary?\" article plus links/tweaks in 5 other articles",
"u": ["https://twitter.com/beemuvi/status/1644490098845818880",
      "https://help.beeminder.com/article/114-can-i-specify-a-beneficiary-for-my-derailments",
      "https://help.beeminder.com/article/109-account-details",
      "https://help.beeminder.com/article/110-apps-and-api",
      "https://help.beeminder.com/article/106-goal-settings",
      "https://help.beeminder.com/article/14-deadline",
      "https://help.beeminder.com/article/102-privacy"],
"d": "2023-03-31",
"t": "2023-04-07",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New article promulgating our derailing-is-not-failing philosophy",
"u": ["https://twitter.com/beemuvi/status/1645574957777432579",
      "https://help.beeminder.com/article/335-derailing-is-not-failing"],
"d": "2023-03-30",
"t": "2023-04-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: More guidance on changing settings in the \"New Goal Defaults\" article, plus brief clarifications in the one on PPRs",
"u": ["https://twitter.com/beemuvi/status/1645575135037095937",
      "https://help.beeminder.com/article/111-new-goal-defaults",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports"],
"d": "2023-04-10",
"t": "2023-04-10",
}, { // ------------------------------------------------------------------------
"x": "Added a blurb to the \"Wondering why?\" popup convincing you to add a payment method to remind you about the gateway drug commitment device",
"u": ["https://twitter.com/beemuvi/status/1645939194995539968",
      "https://github.com/beeminder/beeminder/issues/4125"],
"d": "2023-04-11",
"t": "2023-04-11",
}, { // ------------------------------------------------------------------------
"x": "Fixed a weird typo in the error copy for creating callback loops with webhook URLs and copyedited it a bit. \"I can't let you do that, HAL...\" #bugfix #typo",
"u": ["https://twitter.com/beemuvi/status/1645939341984960512",
      "https://github.com/beeminder/beeminder/issues/3920"],
"d": "2023-04-11",
"t": "2023-04-11",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Earn additional free goals every time you get stung!",
"u": ["https://twitter.com/beemuvi/status/1646299246969376768",
      "https://github.com/beeminder/beeminder/issues/2993",
      "https://github.com/beeminder/beeminder/pull/4202",
      "http://doc.bmndr.co/stingily"],
"d": "2023-04-12",
"t": "2023-04-12",
}, { // ------------------------------------------------------------------------
"x": "Also we now show you your goal limit (aka glimit) in your account settings",
"u": ["https://twitter.com/beemuvi/status/1646300145192169473",
      "https://github.com/beeminder/beeminder/issues/2993",
      "https://github.com/beeminder/beeminder/pull/4202",
      "http://doc.bmndr.co/stingily"],
"d": "2023-04-12",
"t": "2023-04-12",
}, { // ------------------------------------------------------------------------
"x": "Changed the webcopy for the paywall when you hit your goal limit in light of the new parceling-out-goals-sting-ily feature",
"u": ["https://twitter.com/beemuvi/status/1646658515417849856",
      "https://github.com/beeminder/beeminder/issues/2993",
      "https://github.com/beeminder/beeminder/pull/4202"],
"t": "2023-04-13",
}, { // ------------------------------------------------------------------------
"x": "We also made it so if for some reason we refund a pledge payment, we take back the free goal",
"u": ["https://twitter.com/beemuvi/status/1646658515417849856",
      "https://github.com/beeminder/beeminder/issues/2993",
      "https://github.com/beeminder/beeminder/pull/4202"],
"t": "2023-04-13",
}, { // ------------------------------------------------------------------------
"x": "More changes to the the paywall webcopy to keep pushing on derailing-it-is-nailing-it (plus a typo fix, and a moneybag emoji)",
"u": ["https://twitter.com/beemuvi/status/1647025761822572545",
      "https://github.com/beeminder/beeminder/pull/4206"],
"d": "2023-04-14",
"t": "2023-04-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: new article about how many free goals you get, with screenshots and laying out the parceling-out-goals-sting-ily philosophy",
"u": ["https://twitter.com/beemuvi/status/1647026111426203649",
      "https://help.beeminder.com/article/336-how-many-goals-can-i-make-for-free"],
"d": "2023-04-14",
"t": "2023-04-14",
}, { // ------------------------------------------------------------------------
"x": "Fixed a broken link in account settings that was meant to link to the blog post about parceling out goals sting-ily. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1648102208708427777",
      "https://www.beeminder.com/settings/account#defaults",
      "https://github.com/beeminder/beeminder/issues/2993",
      "https://github.com/beeminder/beeminder/pull/4202",],
"t": "2023-04-17",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarifications and expanded copy in the Reminders article plus minor copy/formatting tweaks in 3 other articles",
"u": ["https://twitter.com/beemuvi/status/1648102325771460608",
      "https://help.beeminder.com/article/101-reminders",
      "https://help.beeminder.com/article/103-data-source",
      "https://help.beeminder.com/article/104-supporters",
      "https://help.beeminder.com/article/99-graph-editor"],
"d": "2023-04-17",
"t": "2023-04-17",
}, { // ------------------------------------------------------------------------
"x": "Our Duolingo integration briefly broke on Saturday and we were able to quickly fix it by spoofing a human-looking user-agent &#128556; #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1648475101699137542",
      "https://github.com/beeminder/beeminder/pull/4207"],
"d": "2023-04-15",
"t": "2023-04-18",
}, { // ------------------------------------------------------------------------
"x": "We finally nixed the auto-gimme-free feature from UVI#2018. Pressing the button to get extra free goals now always makes you go through a human.",
"u": ["https://twitter.com/beemuvi/status/1648475634967126019",
      "https://github.com/beeminder/beeminder/issues/2993",
      "https://github.com/beeminder/beeminder/pull/4202"],
"t": "2023-04-18",
"c": "Deployed as part of the sting-ily changes"
}, { // ------------------------------------------------------------------------
"x": "We now complain if you try to give us a malformed email address for many more ways of malforming an email address, like \"me@hotmail\" or \"bob@gmail..com\"",
"u": ["https://twitter.com/beemuvi/status/1648833922158174213",
      "https://github.com/beeminder/beeminder/issues/4128",
      "https://github.com/beeminder/beeminder/pull/4214"],
"d": "2023-04-18",
"t": "2023-04-19",
}, { // ------------------------------------------------------------------------
"x": "Cleaned up the UI copy for Post-Derail Respite, nixed some redundant labels, and are now consistent in calling it Post-Derail Respite (not just Respite)",
"u": ["https://twitter.com/beemuvi/status/1648834061471997952",
      "https://github.com/beeminder/beeminder/issues/4212"],
"d": "2023-04-18",
"t": "2023-04-19",
}, { // ------------------------------------------------------------------------
"x": "Tiny thing that hardly ever matters but we now prevent goalnames from ending in \"-thumb\" for technical reasons involving URLs for graph thumbnails",
"u": ["https://twitter.com/beemuvi/status/1649200443745275905",
      "https://github.com/beeminder/beeminder/issues/2106",
      "https://github.com/beeminder/beeminder/pull/4216"],
"d": "2023-04-19",
"t": "2023-04-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Minor improvements and clarifications to the \"Post-Derail Respite\" article, plus a stronger warning on the GTBee article about its moribundity",
"u": ["https://twitter.com/beemuvi/status/1649200801963978753",
      "https://help.beeminder.com/article/18-respite",
      "https://help.beeminder.com/article/63-gtbee"],
"d": "2023-04-20",
"t": "2023-04-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarification/formatting/etc for the graph settings article (especially re: restart behavior and x-min) plus a smaller tweak to the TagTime article",
"u": ["https://twitter.com/beemuvi/status/1649559701506646016",
      "https://help.beeminder.com/article/105-graph-settings",
      "https://help.beeminder.com/article/64-tagtime"],
"d": "2023-04-21",
"t": "2023-04-21",
}, { // ------------------------------------------------------------------------
"x": "As a follow-on for UVI#4457 we now properly handle whitespace in the email address field on signup and other places (namely, we just trim it for you)",
"u": ["https://twitter.com/beemuvi/status/1649559986564124674",
      "https://github.com/beeminder/beeminder/issues/4128",
      "https://github.com/beeminder/beeminder/pull/4217"],
"d": "2023-04-21",
"t": "2023-04-21",
"c": "We used to autoswallow it as you typed, which was annoying. Then we briefly complained about it and made you trim it yourself, which seemed inhospitable",
}, { // ------------------------------------------------------------------------
"x": "Added more exposition to the SMS bot's activation and stop responses (there are carrier guidelines about these things that we're now following better)",
"u": ["https://twitter.com/beemuvi/status/1650642774075785218",
      "https://github.com/beeminder/beeminder/issues/4173",
      "https://github.com/beeminder/beeminder/pull/4179"],
"d": "2023-03-23",
"t": "2023-04-24",
}, { // ------------------------------------------------------------------------
"x": "Integromat is now Make.com! We've updated the our integration landing page and Make's entry in our gallery, etc.",
"u": ["https://twitter.com/beemuvi/status/1650643132105752576",
      "https://github.com/beeminder/beeminder/issues/3177",
      "https://github.com/beeminder/beeminder/pull/4219"],
"d": "2023-04-24",
"t": "2023-04-24",
}, { // ------------------------------------------------------------------------
"x": "If you were creating an autodata goal (that needed oAuth) and used the back button, it would disable the \"next\" button and you'd be stuck! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1651010480121708545",
      "https://github.com/beeminder/beeminder/issues/2880",
      "https://github.com/beeminder/beeminder/pull/4220"],
"d": "2023-04-24",
"t": "2023-04-25",
}, { // ------------------------------------------------------------------------
"x": "Soft launch of our Lichess integration! For intrepid users who watch our changelog, feel free to start beta testing it at http://beeminder.com/lichess",
"u": ["https://twitter.com/beemuvi/status/1651012907260608512",
      "https://github.com/beeminder/beeminder/issues/4174",
      "https://github.com/beeminder/beeminder/pull/4187"],
"d": "2023-04-25",
"t": "2023-04-25",
}, { // ------------------------------------------------------------------------
"x": "We added reserved usernames for various future features (beeta, android, reminders/alerts/etc) and other URL slugs that would make horrible usernames",
"u": ["https://twitter.com/beemuvi/status/1651373807893114880",
      "https://github.com/beeminder/beeminder/issues/1425",
      "https://github.com/beeminder/beeminder/pull/4112/files"],
"d": "2023-04-26",
"t": "2023-04-26",
}, { // ------------------------------------------------------------------------
"x": "By popular demand we added an option for which type of game to count for the Lichess integration: Blitz, Bullet, Correspondence, Classical, Rapid, or Puzzle!",
"u": ["https://twitter.com/beemuvi/status/1651374924634939392",
      "https://github.com/beeminder/beeminder/issues/4174"],
"d": "2023-04-26",
"t": "2023-04-26",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Official Lichess autodata integration! Added it to the front page gallery, wrote a blog post, the whole nine yards.",
"u": ["https://twitter.com/beemuvi/status/1651733526625255425",
      "https://blog.beeminder.com/lichess",
      "https://www.beeminder.com/lichess",
      "https://github.com/beeminder/beeminder/issues/4174"],
"d": "2023-04-26",
"t": "2023-04-27",
}, { // ------------------------------------------------------------------------
"x": "We briefly had a bug with the Lichess integration that would make authorization errors fail silently instead of loudly. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1651735091423637504",
      "https://github.com/beeminder/beeminder/issues/4174",
      "https://github.com/beeminder/beeminder/pull/4227"],
"t": "2023-04-27",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New article about the Lichess integration, plus added links on the Lichess landing page (to Lichess.org and to our blog post)",
"u": ["https://twitter.com/beemuvi/status/1652082789200834561",
      "https://help.beeminder.com/article/338-lichess",
      "https://github.com/beeminder/beeminder/issues/4174"],
"d": "2023-04-27",
"t": "2023-04-28",
}, { // ------------------------------------------------------------------------
"x": "We fixed an old problem with SVG sizing on Firefox with the graph previews and made the CSS more robust to such problems in the future. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1652092572641411072",
      "https://github.com/beeminder/beeminder/issues/3647",
      "https://github.com/beeminder/beeminder/pull/4230"],
"d": "2023-04-27",
"t": "2023-04-28",
}, /* --------------------------------------------------------- end 2023apr */ ]

const batch2023may = [{
"x": "Help docs: Overhaul of our Android App article in anticipation of new Beedroid version, plus tweaks to the Beedroid Beta Testing and Permanotification articles",
"u": ["https://twitter.com/beemuvi/status/1653166636453736448",
      "https://help.beeminder.com/article/62-android-app",
      "https://help.beeminder.com/article/158-android-app-beta-testing",
      "https://help.beeminder.com/article/125-android-notification"],
"d": "2023-04-28",
"t": "2023-05-01",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Small changes to 3 articles: legacy article about Yellow Brick Half-Plane, the iOS app (BeemiOS), and Lichess",
"u": ["https://twitter.com/beemuvi/status/1653166806675386368",
      "https://help.beeminder.com/article/156-ybhp",
      "https://help.beeminder.com/article/60-ios-app",
      "https://help.beeminder.com/article/338-lichess"],
"d": "2023-05-01",
"t": "2023-05-01",
}, { // ------------------------------------------------------------------------
"x": "We changed the \"username taken\" error to \"username taken or reserved\" since we care about being impeccably truthful about these things. #truthfetishism",
"u": ["https://twitter.com/beemuvi/status/1653546688009875459",
      "https://github.com/beeminder/beeminder/issues/1425",
      "https://doc.beeminder.com/truth"],
"t": "2023-05-02",
}, { // ------------------------------------------------------------------------
"x": "We've closed a loophole! If you derail two days in a row, we no longer drop the second day's charge. &#129297;",
"u": ["https://twitter.com/beemuvi/status/1653548240518914049",
      "https://forum.beeminder.com/t/closing-the-double-derail-loophole-its-now-possible-to-derail-2-days-in-a-row/10949",
      "https://github.com/beeminder/beeminder/issues/3285",
      "https://github.com/beeminder/beeminder/pull/4236"],
"d": "2023-05-02",
"t": "2023-05-02",
"c": "We should still get it right when its not a legit double-day-derail, as long as the not-legit derail happens less than 23 hours after the legit one",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Beedroid version 5! That's 5.0 of the Android app with a long list of improvements...",
"u": ["https://twitter.com/beemuvi/status/1653909972760301568",
      "https://forum.beeminder.com/t/beedroid-version-5/10952"],
"t": "2023-05-03",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "We finally restored the ability to log in w/ your Google account (phew!)",
"u": ["https://twitter.com/beemuvi/status/1653909972760301568",
      "https://forum.beeminder.com/t/beedroid-version-5/10952",
      "https://github.com/beeminder/beedroid/issues/23"],
"t": "2023-05-03",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The other biggest change is that we've totally redone notifications and you finally can set them on the website like all other kinds of notifications",
"u": ["https://twitter.com/beemuvi/status/1653911148817977346",
      "https://github.com/beeminder/beedroid/issues/126",
      "https://github.com/beeminder/beedroid/issues/220"],
"t": "2023-05-03",
"c": "And no more Android-only zeno configuration screen",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Bonus improvement with the new notifications: no more dumb permanotification (downside: notifications require an internet connection now)",
"u": ["https://twitter.com/beemuvi/status/1654272764516372480",
      "https://github.com/beeminder/beedroid/issues/78"],
"t": "2023-05-04",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Lots of things look better at different font sizes and load faster and stay in sync better as you move between screens",
"u": ["https://twitter.com/beemuvi/status/1654273252875993088",
      "https://github.com/beeminder/beedroid/issues/228",
      "https://github.com/beeminder/beedroid/issues/200",
      "https://github.com/beeminder/beedroid/issues/184",
      "https://github.com/beeminder/beedroid/issues/119"],
"t": "2023-05-04",
"c": "This is one we could've milked for a lot of UVIs",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We've streamlined the settings in the app, getting rid of things like whether to vibrate for notifications. That one's built in to Android now.",
"u": ["https://twitter.com/beemuvi/status/1654630671032389635"],
"t": "2023-05-05",
"c": "Not totally sure if that's the only such thing",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Sending datapoints to Beeminder is now faster and more reliable",
"u": ["https://twitter.com/beemuvi/status/1654632436507222016",
      "https://github.com/beeminder/beedroid/issues/231"],
"t": "2023-05-05",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "You can now set longer goal descriptions in the app",
"u": ["https://twitter.com/beemuvi/status/1655720572775702528",
      "https://github.com/beeminder/beedroid/issues/193"],
"t": "2023-05-08",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "And you can create homescreen widgets by long-pressing on goals in the app!",
"u": ["https://twitter.com/beemuvi/status/1655720654682062848",
      "https://github.com/beeminder/beedroid/issues/218"],
"t": "2023-05-08",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Better widget previews and other widget aesthetics",
"u": ["https://twitter.com/beemuvi/status/1656081991266369536"],
"t": "2023-05-09",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "And widgets no longer ever say \"derailed\" when it’s just that they haven’t loaded yet &#128517;",
"u": ["https://twitter.com/beemuvi/status/1656082225585332225",
      "https://github.com/beeminder/beedroid/issues/217"],
"t": "2023-05-09",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The list widget, showing all your most urgent goals, now shows a faded edge so you know to scroll to see more than what fits on your screen",
"u": ["https://twitter.com/beemuvi/status/1656425606568091648",
      "https://github.com/beeminder/beedroid/issues/185"],
"t": "2023-05-10",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Various accessibility improvements, making things easier to read and click on",
"u": ["https://twitter.com/beemuvi/status/1656425690735185920"],
"t": "2023-05-10",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Lots of changes dictated by Google, like not asking for notification permissions until you log in to Beeminder, plus removing unneeded permissions",
"u": ["https://twitter.com/beemuvi/status/1656810338644541441",
      "https://github.com/beeminder/beedroid/issues/223"],
"t": "2023-05-11",
"c": "Like GET_ACCOUNT, USE_CREDENTIAL, MANAGE_ACCOUNTS, AUTHENTICATE_ACCOUNTS, USE_EXACT_ALARMS, WAKE_LOCK",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "All sorts of small or rare fixes, like restoring your phone from backup no longer messes up the current day's reminders",
"u": ["https://twitter.com/beemuvi/status/1656810477966729216",
      "https://github.com/beeminder/beedroid/issues/164"],
"t": "2023-05-11",
"c": "Also fixed a crash when sending feedback before ever logging in, and some startup race condition crash",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed a silent-ish failure if you tried to add a widget before logging in to Beeminder on the app, plus other related #bugfix-es",
"u": ["https://twitter.com/beemuvi/status/1657173089833332737",
      "https://github.com/beeminder/beedroid/issues/66",
      "https://github.com/beeminder/beedroid/issues/217"],
"t": "2023-05-12",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Lots of copy tweaks for clarity and consistency, like always saying \"datapoints\" not \"data points\"",
"u": ["https://twitter.com/beemuvi/status/1657173266518388737",
      "https://github.com/beeminder/beedroid/issues/229",
      "https://github.com/beeminder/beedroid/issues/191"],
"t": "2023-05-12",
"c": "And the one about forgetting your password to clarify that you might never have made one at all",
}, { // ------------------------------------------------------------------------
"x": "Follow-on fixes in Beedroid 5.0.1 and 5.0.2!",
"u": ["https://twitter.com/beemuvi/status/1658260865773375488"],
"t": "2023-05-15",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "We no longer crash if your phone doesn't have a browser! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1658260865773375488",
      "https://github.com/beeminder/beedroid/issues/250"],
"t": "2023-05-15",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Also fixed a regression that prevented Beedroid from getting autodata from TagTime",
"u": ["https://twitter.com/beemuvi/status/1658260942508158976",
      "https://github.com/beeminder/beedroid/issues/253"],
"t": "2023-05-15",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Cleaned up some errant notification channels #bugfix",
"u": ["https://twitter.com/beemuvi/status/1658623344747622401",
      "https://github.com/beeminder/beedroid/issues/255"],
"t": "2023-05-16",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Timer notifications were opening the wrong goals! #bugfix plus sadly had to nix having pause/resume controls in the notification itself",
"u": ["https://twitter.com/beemuvi/status/1658623408652038145",
      "https://github.com/beeminder/beedroid/issues/251"],
"t": "2023-05-16",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New links in \"What is Beeminder?\" and revised the \"What do I do first?\" article in light of the gateway drug commitment device",
"u": ["https://twitter.com/beemuvi/status/1658985162007511040",
      "https://help.beeminder.com/article/70-what-is-beeminder",
      "https://help.beeminder.com/article/32-what-do-i-do-first"],
"d": "2023-05-03",
"t": "2023-05-17",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Tweaks for clarity in the \"How do I interpret...\" articles plus an key clarification added to \"How do I change my goal?\" about post-derail steepening",
"u": ["https://twitter.com/beemuvi/status/1658985226343948289",
      "https://help.beeminder.com/article/115-how-do-i-interpret-the-goal-page",
      "https://help.beeminder.com/article/118-how-do-i-interpret-the-graph",
      "https://help.beeminder.com/article/54-how-do-i-change-my-goal"],
"d": "2023-05-08",
"t": "2023-05-17",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New links etc in \"What's the best way to beemind X\" and the one about end-of-day and new section on adding data in one of the example goal articles",
"u": ["https://twitter.com/beemuvi/status/1659351053148786688",
      "https://help.beeminder.com/article/120-whats-the-best-way-to-beemind",
      "https://help.beeminder.com/article/122-why-does-beeminder-think-its-already-tomorrow",
      "https://help.beeminder.com/article/71-example-10k-steps"],
"d": "2023-05-11",
"t": "2023-05-18",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Lots of copyediting and new words in \"How do I tell Beeminder what day my week starts?\" and split \"How do I set a weekly rate?\" into its own article",
"u": ["https://twitter.com/beemuvi/status/1659351176616509440",
      "https://help.beeminder.com/article/123-weekstart",
      "https://help.beeminder.com/article/339-how-do-i-set-a-goal-with-a-weekly-rate"],
"d": "2023-05-15",
"t": "2023-05-18",
}, { // ------------------------------------------------------------------------
"x": "Rare bug with 3rd-party auth getting deleted and that preventing you from logging in to Beedroid or BeemiOS with your password. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1659681239438336000",
      "https://github.com/beeminder/beeminder/issues/4241"],
"d": "2023-05-11",
"t": "2023-05-19",
"c": "Weird corner case around authorizing a third party to read your beeswax and the owner of that 3rd-party client later deleting it",
}, { // ------------------------------------------------------------------------
"x": "Pretty horrible bug (thankfully only affecting 9 users who still had PayPal as a payment method) that wouldn't let you update your payment method! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1659681444879552512",
      "https://github.com/beeminder/beeminder/issues/3964",
      "https://github.com/beeminder/beeminder/pull/4251"],
"d": "2023-05-17",
"t": "2023-05-19",
"c": "Also emailed those affected. #zombie",
}, { // ------------------------------------------------------------------------
"x": "Soft launch of our upcoming http://TryDeepWork.com integration at https://beeminder.com/trydeepwork (coming to the front page and the blog soon!)",
"u": ["https://twitter.com/beemuvi/status/1660792631419629570",
      "https://github.com/beeminder/beeminder/issues/4239"],
"d": "2023-05-03",
"t": "2023-05-22",
}, { // ------------------------------------------------------------------------
"x": "We fixed our old http://kibotzer.com redirect and fixed a tiny but embarrassing typo (\"once place\") on the https://beeminder.com/breaks page",
"u": ["https://twitter.com/beemuvi/status/1660792803499331584",
      "https://github.com/beeminder/beeminder/issues/4233",
      "https://github.com/beeminder/beeminder/commit/87d9571720ed161c37d872c69fd1cc287ccb689e"],
"d": "2023-05-10",
"t": "2023-05-22",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Small copy improvements to 5 different articles on example goals plus the one on different goal types and how many free goals you get",
"u": ["https://twitter.com/beemuvi/status/1661159227057119232",
      "https://help.beeminder.com/article/72-example-goal-run-3-times-per-week",
      "https://help.beeminder.com/article/92-example-goal-go-to-the-gym-4-times-per-week",
      "https://help.beeminder.com/article/93-example-goal-spend-less-time-on-facebook",
      "https://help.beeminder.com/article/94-example-goal-eat-14-servings-of-vegetables-per-week",
      "https://help.beeminder.com/article/95-example-goal-learn-a-new-language",
      "https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types",
      "https://help.beeminder.com/article/336-how-many-goals-can-i-make-for-free"],
"d": "2023-05-22",
"t": "2023-05-23",
}, { // ------------------------------------------------------------------------
"x": "Help docs: In the article about Do Less / Odometer / Whittle Down goals, we clarified that you don't need premium for them if used for an autodata goal",
"u": ["https://twitter.com/beemuvi/status/1661159316718780416",
      "https://help.beeminder.com/article/52-why-cant-i-create-a-do-less-odometer-whittle-down"],
"d": "2023-05-23",
"t": "2023-05-23",
}, { // ------------------------------------------------------------------------
"x": "We added a mini FAQ to our Contact Us page with the top 3 questions we get asked. Yay @shanaqui!",
"u": ["https://twitter.com/beemuvi/status/1661521822599499777",
      "https://github.com/beeminder/beeminder/issues/4255",
      "https://github.com/beeminder/beeminder/pull/4258"],
"t": "2023-05-24",
}, { // ------------------------------------------------------------------------
"x": "Also we made the bullets in the bulleted list be bees. HT @datasmithing1",
"u": ["https://twitter.com/beemuvi/status/1661522019350118403",
      "https://www.beeminder.com/contact",
      "https://github.com/beeminder/beeminder/issues/4255"],
"t": "2023-05-24",
}, { // ------------------------------------------------------------------------
"x": "We added a warning about insta-derailing yourself by deleting old datapoints in the deletion confirmation popup",
"u": ["https://twitter.com/beemuvi/status/1661883125830660096",
      "https://github.com/beeminder/beeminder/issues/4253",
      "https://github.com/beeminder/beeminder/pull/4252"],
"d": "2023-05-16",
"t": "2023-05-25",
}, { // ------------------------------------------------------------------------
"x": "And a permabanner in the data tab about being careful about the order of your edits so you don't derail yourself, plus a note when the goal's cumulative",
"u": ["https://twitter.com/beemuvi/status/1661883553263804416",
      "https://github.com/beeminder/beeminder/issues/4253",
      "https://github.com/beeminder/beeminder/pull/4252",
      "https://github.com/beeminder/beeminder/pull/4266"],
"d": "2023-05-25",
"t": "2023-05-25",
}, { // ------------------------------------------------------------------------
"x": "Tightened up, fixed typos in, and changed our mind a couple times about the wording for the insta-derail warnings; also added a link to the forum",
"u": ["https://twitter.com/beemuvi/status/1662246845110689794",
      "https://github.com/beeminder/beeminder/issues/4253",
      "https://github.com/beeminder/beeminder/pull/4252",
      "https://github.com/beeminder/beeminder/pull/4271"],
"t": "2023-05-26",
}, { // ------------------------------------------------------------------------
"x": "Added links to help articles about quitting goals and canceling premium plans in the section of account settings for deleting your account",
"u": ["https://twitter.com/beemuvi/status/1662247011448496129",
      "https://github.com/beeminder/beeminder/issues/4255",
      "https://github.com/beeminder/beeminder/pull/4258"],
"d": "2023-05-16",
"t": "2023-05-26",
}, { // ------------------------------------------------------------------------
"x": "Also copyedited and reformatted the Delete Account section of settings a bunch",
"u": ["https://twitter.com/beemuvi/status/1663325594438991872",
      "https://github.com/beeminder/beeminder/issues/4255",
      "https://github.com/beeminder/beeminder/pull/4258"],
"d": "2023-05-16",
"t": "2023-05-29",
"c": "Plus highlighting the support@beeminder email address",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Official launch of our trydeepwork.com integration: added to front page gallery, goal creation, a blog post, and a help article!",
"u": ["https://twitter.com/beemuvi/status/1663326064737947648",
      "https://blog.beeminder.com/trydeepwork/",
      "https://help.beeminder.com/article/340-trydeepwork",
      "https://github.com/beeminder/beeminder/issues/4239"],
"d": "2023-05-25",
"t": "2023-05-29",
}, { // ------------------------------------------------------------------------
"x": "Also leading up to the trydeepwork.com integration launch, we added a new metric, hours in addition to sessions, and are now robust to username-not-found",
"u": ["https://twitter.com/beemuvi/status/1663686527367675904",
      "https://github.com/beeminder/beeminder/issues/4239"],
"d": "2023-05-24",
"t": "2023-05-30",
"c": "Normally we don't count changes that happen before the actual launch, but also normally we count the help article as a separate UVI so I guess it balances? Also maybe the new precedent should be to count new features and fixes during the soft launch since (a) it's already technically public at that point since it's in the changelog, and (b) new integrations are a big deal and it makes sense for them to count as multiple epsilon improvements.",
}, { // ------------------------------------------------------------------------
"x": "Added a blurb to the legit check emails to tell you when your derailment is earning you another free goal, per parceling out goals sting-ily",
"u": ["https://twitter.com/beemuvi/status/1663688318507429888",
      "https://blog.beeminder.com/stingily/",
      "https://github.com/beeminder/beeminder/issues/4218",
      "https://github.com/beeminder/beeminder/pull/4269"],
"t": "2023-05-30",
"c": "If you're premium it points out that that we're doing glimit++ anyway in case you downgrade to the free plan",
}, { // ------------------------------------------------------------------------
"x": "You can now double-click the little expand/collapse hexagons on the dashboard to cause the corresponding goal to refresh",
"u": ["https://twitter.com/beemuvi/status/1664054894612066305",
      "https://manifold.markets/bethanysoule/will-refreshdashboardgoalonexpand-f",
      "https://github.com/beeminder/beeminder/issues/4262",
      "https://github.com/beeminder/beeminder/pull/4259",
      "https://github.com/beeminder/beeminder/pull/4272"],
"d": "2023-05-29",
"t": "2023-05-31",
"c": "Still debating whether that should happen when you expand the goal instead of needing to double-click",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Copyedited and reformatted the article on ratcheting to make things easier to find and to be consistent in using a hyphen with \"auto-ratchet\"",
"u": ["https://twitter.com/beemuvi/status/1664055170295300097",
      "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer"],
"d": "2023-05-31",
"t": "2023-05-31",
"c": "Also more keywords for the variant spellings and for the old erroneous term 'retro-ratchet'",
}, /* --------------------------------------------------------- end 2023may */ ]

const batch2023jun = [{
"x": "We now use a ❗ instead of ✔️ in the due-by table for do-less goals that are in the red, ie ineluctably derailing unless negative data is allowed",
"u": ["https://twitter.com/beemuvi/status/1664423497400209408",
      "https://github.com/beeminder/beeminder/issues/3844",
      "https://github.com/beeminder/beeminder/pull/4283"],
"d": "2023-06-01",
"t": "2023-06-01",
}, { // ------------------------------------------------------------------------
"x": "While we were at it we fixed an alignment problem (er, the css kind of alignment) in the due-by table. #bugfix #css",
"u": ["https://twitter.com/beemuvi/status/1664423648344801280",
      "https://github.com/beeminder/beeminder/issues/3844",
      "https://github.com/beeminder/beeminder/pull/4283"],
"d": "2023-06-01",
"t": "2023-06-01",
}, { // ------------------------------------------------------------------------
"x": "If we fail to set up Fitbit auth correctly (probably from having an old token on file) when creating a new Fitbit goal, we now we fail loudly/immediately",
"u": ["https://twitter.com/beemuvi/status/1664767871153750016",
      "https://github.com/beeminder/beeminder/issues/3985",
      "https://github.com/beeminder/beeminder/pull/4003"],
"d": "2023-05-25",
"t": "2023-06-02",
"c": "Previously this was a more generic error that didn't show up as quickly. This one gets set as part of our initial fetch attempt: 'Error linking goal to Fitbit. Please connect to Fitbit in Account Settings.' Also added the backtrace to the airlert for ourselves.",
}, { // ------------------------------------------------------------------------
"x": "Due to a bug in our own debugging code (facepalm) we were sometimes failing to update people's Toggl goals; at least one user was affected! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1664768811629948928",
      "https://github.com/beeminder/beeminder/issues/4264",
      "https://github.com/beeminder/beeminder/pull/4265",
      "https://github.com/beeminder/beeminder/pull/4268"],
"d": "2023-05-18",
"t": "2023-06-02",
"c": "We were trying to send debug info to ourselves related to a different issue we sometimes see with Toggl and... the airlert got too big and, boom?",
}, { // ------------------------------------------------------------------------
"x": "We now poke the mobile apps when a graph's eep status changes so the apps are less stale in reporting whether graphs are in a beemergency state",
"u": ["https://twitter.com/beemuvi/status/1665852474203463680",
      "https://github.com/beeminder/beeminder/issues/4106",
      "https://github.com/beeminder/beeminder/pull/4176",
      "https://github.com/beeminder/BeeSwift/issues/376"],
"d": "2023-04-03",
"t": "2023-06-05",
"c": "User-visibility is in the smartphone apps, Beedroid and BeemiOS, but we implemented it server-side",
}, { // ------------------------------------------------------------------------
"x": "Scheduling breaks on some graphs (those with a segment specified in terms of end value and rate) would fail with an opaque error. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1665852590637166592",
      "https://github.com/beeminder/beeminder/issues/4161",
      "https://github.com/beeminder/beeminder/pull/4162"],
"d": "2023-05-25",
"t": "2023-06-05",
}, { // ------------------------------------------------------------------------
"x": "In our Todoist goal creation we stupidly let you check boxes for projects/labels while having \"all items\" selected, rendering your box-checking useless! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1666231513275568128",
      "https://github.com/beeminder/beeminder/issues/2922"],
"d": "2023-06-05",
"t": "2023-06-06",
}, { // ------------------------------------------------------------------------
"x": "We failed to notice an expired Todoist auth during goal creation unless you selected the \"projects/labels\" option. Now we check before creating it!",
"u": ["https://twitter.com/beemuvi/status/1666233376859385857",
      "https://github.com/beeminder/beeminder/issues/4292"],
"d": "2023-06-05",
"t": "2023-06-06",
"c": "If you wanted to track all items in Todoist, you wouldn't click the Projects/Labels radio dial, and then we didn't notice your expired auth, and the goal seemed all broken. Now it checks the validity of the auth regardless, and only lets you advance if everything is good.",
}, { // ------------------------------------------------------------------------
"x": "Better/clearer error messages when various things go wrong (rate limits, auth problems) with our ability to fetch your Todoist data",
"u": ["https://twitter.com/beemuvi/status/1666595172472479745",
      "https://github.com/beeminder/beeminder/issues/4292"],
"d": "2023-06-05",
"t": "2023-06-07",
}, { // ------------------------------------------------------------------------
"x": "Todoist goal settings now always show the selected projects. (Labels were there all along, not sure if missing projects was a regression) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1666595916143525889",
      "https://github.com/beeminder/beeminder/issues/4291"],
"d": "2023-06-05",
"t": "2023-06-07",
"c": "Now pretty sure it was in fact a #zombie -- previously we were normalizing Todoist project IDs to integers to compare them, then we stopped, now we normalize them to Strings. Either Todoist switched the types of the API output, or we just messed something up somewhere. Pr(ZOMB)=.9",
}, { // ------------------------------------------------------------------------
"x": "Twitter's API changed and our Twitter autodata integration was broken for a while. Switched to the new API to resurrect it. #zombie",
"u": ["https://twitter.com/beemuvi/status/1666957235795423233",
      "https://github.com/beeminder/beeminder/issues/4299",
      "https://github.com/beeminder/beeminder/pull/4298"],
"d": "2023-06-08",
"t": "2023-06-08",
}, { // ------------------------------------------------------------------------
"x": "That entails a few changes we had to email affected users about: Have to oAuth now, can only count tweets for your own Twitter, and no more hashtag minding :(",
"u": ["https://twitter.com/beemuvi/status/1666957366301167616",
      "https://github.com/beeminder/beeminder/issues/4299",
      "https://github.com/beeminder/beeminder/pull/4298"],
"d": "2023-06-08",
"t": "2023-06-08",
}, { // ------------------------------------------------------------------------
"x": "We missed a spot in settings that still referred to an exponentially weighted average and The Hacker's Diet, now fixed",
"u": ["https://twitter.com/beemuvi/status/1667320288563052544",
      "https://blog.beeminder.com/smooth/",
      "https://github.com/beeminder/beeminder/issues/3273",
      "https://github.com/beeminder/beeminder/pull/4297"],
"d": "2023-06-07",
"t": "2023-06-09",
}, { // ------------------------------------------------------------------------
"x": "Some of our hovertext / tooltips on various graph settings was missing. Now it's there! Including commentary on the moving average line and the Hacker's Diet",
"u": ["https://twitter.com/beemuvi/status/1668402625283502080",
      "https://github.com/beeminder/beeminder/issues/3273",
      "https://github.com/beeminder/beeminder/pull/4305"],
"t": "2023-06-12",
"c": "Again not sure if this was a regression",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Copy tweaks, more/better examples, clarifications, formatting, upside-downing, and other improvements to 8 different articles",
"u": ["https://twitter.com/beemuvi/status/1668768822466342913",
      "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit",
      "https://help.beeminder.com/article/154-can-i-schedule-breaks-on-many-goals-at-once",
      "https://help.beeminder.com/article/57-what-if-i-only-want-to-do-my-goal-on-weekdays",
      "https://help.beeminder.com/article/58-what-if-i-only-want-to-do-something-once-a-month",
      "https://help.beeminder.com/article/124-my-goal-doesnt-make-any-sense",
      "https://help.beeminder.com/article/117-can-i-start-my-goal-over",
      "https://help.beeminder.com/article/119-what-are-the-goal-statistics",
      "https://help.beeminder.com/article/66-do-more-goals"],
"d": "2023-06-07",
"t": "2023-06-13",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a walk-through of setting up a Do Less goal in the article about those, plus a bit more explanation in the article on PPRs",
"u": ["https://twitter.com/beemuvi/status/1669130057993027587",
      "https://help.beeminder.com/article/67-do-less-goals",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports"],
"d": "2023-06-09",
"t": "2023-06-14",
}, { // ------------------------------------------------------------------------
"x": "Exciting news for Complice I mean Intend! It's now Intend and we updated all our logos and webcopy accordingly!",
"u": ["https://twitter.com/beemuvi/status/1669488233833721856",
      "https://intentionality.substack.com/p/complice-is-now-intend",
      "https://github.com/beeminder/beeminder/issues/4293",
      "https://github.com/beeminder/beeminder/pull/4294",
      "https://github.com/beeminder/beeminder/issues/4293"],
"d": "2023-06-15",
"t": "2023-06-15",
}, { // ------------------------------------------------------------------------
"x": "The \"more free goals please\" button used to be inexplicably disabled after you used it 7 times; now it's explicably disabled (ie, we added UI-copy to explain)",
"u": ["https://twitter.com/beemuvi/status/1677461168951275520",
      "https://github.com/beeminder/beeminder/issues/4306",
      "https://github.com/beeminder/beeminder/pull/4309"],
"d": "2023-06-13",
"t": "2023-06-16",
"c": "See UVI#3564. UI-copy: \"Uh, sorry! This button is disabled since you've previously clicked it more than six times already. Harsh!\". PS: We messed up the tweeting of this, tweeting it once on 2023-06-16 and then again on 2023-07-07. I think we deleted the earlier tweet but in any case, beeminder.com/changelog is the master copy.",
}, /* --------------------------------------------------------- end 2023jun */ ]

const batch2023jul = [{
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Beeminder iOS app version 6.3! The money-ectomy spaghetti-throwing Apple-appeasement release, with actual improvements along for the ride...",
"u": ["https://twitter.com/beemuvi/status/1677462882945212416"],
"t": "2023-07-07",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "BeemiOS now calculates sleep / time in bed / mindful minutes properly (it used to be confused by multiple devices reporting data, etc)",
"u": ["https://twitter.com/beemuvi/status/1678545469306470401"],
"t": "2023-07-10",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The pointless \":\" button on iPad is gone, and restyled on iPhone. Also we removed support for iOS 13 and earlier. Onward into the future!",
"u": ["https://twitter.com/beemuvi/status/1678882678089846784"],
"t": "2023-07-11",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "You now see a preview of data when adding Apple Health connections. Also you can view logs and share them with support.",
"u": ["https://twitter.com/beemuvi/status/1678882820197056513"],
"t": "2023-07-11",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Finally, version 6.3 added various new Apple Health metrics users have requested. fireworks-emoji!",
"u": ["https://twitter.com/beemuvi/status/1679264275553226752",
      "https://github.com/beeminder/BeeSwift/issues/338"],
"t": "2023-07-12",
"c": "I think this includes Standing Hours?",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Finally-finally, we used to sometimes DOS ourselves by making like 90 requests/second to Beeminder; now we don't! Phew.",
"u": ["https://twitter.com/beemuvi/status/1679264452632526850",
      "https://github.com/beeminder/BeeSwift/issues/238"],
"t": "2023-07-12",
"c": "A bit ill-defined what the exact user-visibility was but this was such a big deal we were looking at adding servers so I'm ok saying it was user-visibly impactful (not to mention that we combined a bunch of UVIs for this BeemiOS release already)",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New example setup section in our article on odometer goals, plus smaller changes to the one on custom goals",
"u": ["https://twitter.com/beemuvi/status/1679635929647185921",
      "https://help.beeminder.com/article/68-odometer-goals",
      "https://help.beeminder.com/article/97-custom-goals"],
"d": "2023-06-16",
"t": "2023-07-13",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New example setup section in our article on whittle-down goals, plus smaller changes to the one on how to enter data",
"u": ["https://twitter.com/beemuvi/status/1679636100695072775",
      "https://help.beeminder.com/article/69-whittle-down-goals",
      "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal"],
"d": "2023-06-21",
"t": "2023-07-13",
}, { // ------------------------------------------------------------------------
"x": "Help docs: More exposition in the \"what is my data?\" article, showing what data looks like on the website, links to other articles, etc",
"u": ["https://twitter.com/beemuvi/status/1679999080892887040",
      "https://help.beeminder.com/article/36-what-is-my-data"],
"d": "2023-06-20",
"t": "2023-07-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New example goal creation section added to the article on weight loss goals plus smaller changes to a few other articles",
"u": ["https://twitter.com/beemuvi/status/1679999160496582656",
      "https://help.beeminder.com/article/96-weight-gain-loss-goals",
      "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal",
      "https://help.beeminder.com/article/39-how-do-i-fix-incorrect-data",
      "https://help.beeminder.com/article/38-what-happens-if-i-forgot-to-enter-data",
      "https://help.beeminder.com/article/40-can-anybody-else-add-data-to-my-goal",
      "https://help.beeminder.com/article/41-can-i-export-my-data",
      "https://help.beeminder.com/article/113-can-i-import-previous-data",
      "https://help.beeminder.com/article/42-switching-goal-units"],
"d": "2023-06-29",
"t": "2023-07-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added info about getting free goals when you derail to the article about how much Beeminder costs, plus clarifications in the \"When do I pay?\" one",
"u": ["https://twitter.com/beemuvi/status/1681080187012907008",
      "https://help.beeminder.com/article/19-how-much-does-beeminder-cost",
      "https://help.beeminder.com/article/324-when-do-i-pay"],
"d": "2023-07-03",
"t": "2023-07-17",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Reorganized the \"How much do I pledge on my goals?\" article with headers -- much more readable!",
"u": ["https://twitter.com/beemuvi/status/1681080330068049922",
      "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals"],
"d": "2023-07-04",
"t": "2023-07-17",
}, { // ------------------------------------------------------------------------
"x": "Help docs: We split the \"Can I increase or decrease the pledge on my goal?\" article in two. Added a list of caveats to the pledge-decreasing one.",
"u": ["https://twitter.com/beemuvi/status/1681393677179162624",
      "https://help.beeminder.com/article/21-can-i-decrease-the-pledge-on-my-goal"],
"d": "2023-07-05",
"t": "2023-07-18",
}, { // ------------------------------------------------------------------------
"x": "Help docs: And the new \"Can I increase the pledge on my goal?\" article is written mostly from scratch with new screenshots and explanation",
"u": ["https://twitter.com/beemuvi/status/1681393817470271488",
      "https://help.beeminder.com/article/343-can-i-increase-the-pledge-on-my-goal"],
"d": "2023-07-05",
"t": "2023-07-18",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Reorganized and added lots of info to the premium subscriptions article, plus added advice / copyedited to the ones on pledge caps / pledgeless goals",
"u": ["https://twitter.com/beemuvi/status/1681794497955631104",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription",
      "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets",
      "https://help.beeminder.com/article/23-can-i-have-goals-without-pledges"],
"d": "2023-07-10",
"t": "2023-07-19",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a note about Google Pay to the article on payment methods, plus minor tweaks to 5 other articles",
"u": ["https://twitter.com/beemuvi/status/1681796566942879744",
      "https://help.beeminder.com/article/27-what-payment-methods-are-available",
      "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work",
      "https://help.beeminder.com/article/26-what-if-i-buy-one-plan-and-change-my-mind",
      "https://help.beeminder.com/article/28-how-do-i-update-my-payment-information",
      "https://help.beeminder.com/article/29-why-did-beeminder-charge-my-card",
      "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails"],
"d": "2023-07-19",
"t": "2023-07-19",
}, { // ------------------------------------------------------------------------
"x": "Goal alert settings were forgetting about Android alerts when deciding whether to remind you that you've turned off all reminders for a goal",
"u": ["https://twitter.com/beemuvi/status/1682173894034337792",
      "https://github.com/beeminder/beeminder/issues/4353",
      "https://github.com/beeminder/beeminder/pull/4355"],
"d": "2023-06-27",
"t": "2023-07-20",
"c": "Verbosely: In goal alerts, if you turn off all possible alert options for a goal, we set a reminder/alert of that, because we kind of hate it I guess? Except the check for 'has this user removed all reminders for the goal' was ignorning Android alerts as a possible reminder-type. So you could have Android alerts on and we'd be like 'Hey, you turned off all the alerts, are you sure you know what you're doing??'",
}, { // ------------------------------------------------------------------------
"x": "We also ignored presence of Android alerts in a fallback option for if you lose your SMS permission, and they are the only type of reminders you have turned on",
"u": ["https://twitter.com/beemuvi/status/1682174073210810369",
      "https://github.com/beeminder/beeminder/issues/4353",
      "https://github.com/beeminder/beeminder/pull/4355"],
"d": "2023-06-27",
"t": "2023-07-20",
"c": "Verbosely: If you lose SMS reminder permissions, and it is the only type of reminder/alert you have turned on for a goal, we unset the SMS reminders, but then don't want to leave you with no reminders turned on at all, so we turn your email reminders on as a fallback for that goal. This was similarly not considering the Android reminders, and so you could have SMS and Android reminders set up, lose your SMS permissions, and we suddenly turn on email reminders for you.",
}, { // ------------------------------------------------------------------------
"x": "The Todoist #bugfix from UVI#3689 is now fixed across other autodata integrations that also sometimes had that 1970 datapoint date problem",
"u": ["https://twitter.com/beemuvi/status/1682535750963957760",
      "https://github.com/beeminder/beeminder/issues/4338",
      "https://github.com/beeminder/beeminder/pull/4349"],
"d": "2023-06-27",
"t": "2023-07-21",
"c": "We just patched it with a gross threshold check but not really anything else we can do when an integration gives us a bad timestamp like that",
}, { // ------------------------------------------------------------------------
"x": "Tiny thing but it mattered for our quals, and might matter for you? : we now ensure TSV/CSV data exports are always sorted exactly the same way",
"u": ["https://twitter.com/beemuvi/status/1682535867846651905",
      "https://github.com/beeminder/beeminder/issues/3544",
      "https://github.com/beeminder/beeminder/pull/4343"],
"d": "2023-06-21",
"t": "2023-07-21",
"c": "Maybe unlikely to matter for users? It happened between our different dev machines or between dev machines and the GitHub Actions run",
}, { // ------------------------------------------------------------------------
"x": "The forum welcome message now mentions some new competitors, highlights some forum categories, and we got rid of cruft about the old Akratics Anonymous",
"u": ["https://twitter.com/beemuvi/status/1683624702466744320",
      "https://forum.beeminder.com/t/welcome-to-the-beeminder-forum/6",
      "https://github.com/beeminder/beeminder/issues/4289"],
"d": "2023-07-24",
"t": "2023-07-24",
"c": "Newbees or logged-out users see this message pinned to the top when they visit forum.beeminder.com so it was dumb we let it get so crufty!",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Fixed a broken link in the Gmail integration article, plus copy tweaks and clarification in 3 other articles",
"u": ["https://twitter.com/beemuvi/status/1683625796341202945",
      "https://help.beeminder.com/article/82-gmail",
      "https://help.beeminder.com/article/244-premium-credit",
      "https://help.beeminder.com/article/12-what-is-a-derailment",
      "https://help.beeminder.com/article/13-when-do-derailments-happen"],
"d": "2023-07-24",
"t": "2023-07-24",
}, { // ------------------------------------------------------------------------
"x": "We used to claim that if you replied to certain automated emails, the founders would see it. Changed that to \"human workerbees\", making it still true!",
"u": ["https://twitter.com/beemuvi/status/1683981230646370305",
      "https://github.com/beeminder/beeminder/issues/4281",
      "https://github.com/beeminder/beeminder/pull/4379"],
"d": "2023-07-25",
"t": "2023-07-25",
}, { // ------------------------------------------------------------------------
"x": "We've done a lot on things like rate-limiting login attempts that's only verrrry technically user-visible directly but counts indirectly in server speed",
"u": ["https://twitter.com/beemuvi/status/1683982292581232641",
      "https://github.com/beeminder/beeminder/issues/1726",
      "https://github.com/beeminder/beeminder/pull/4321"],
"t": "2023-07-25",
"c": "Eg, adjusting rack-attack rate-limiting threshold",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Updated the list of Apple Health autodata metrics to show all 30 (!) of them. Plus typo fix and copyediting in 2 other articles.",
"u": ["https://twitter.com/beemuvi/status/1684352340604887040",
      "https://help.beeminder.com/article/61-apple-health",
      "https://help.beeminder.com/article/16-what-is-a-legit-derailment",
      "https://help.beeminder.com/article/17-what-happens-when-i-derail"],
"d": "2023-07-26",
"t": "2023-07-26",
}, { // ------------------------------------------------------------------------
"x": "Our dumb regex for (dumbly) deciding when to infer a goal is timey had a bug: if goal units contained \"hr\" (eg \"threads\") it'd be created as timey. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1684352437875003392",
      "https://github.com/beeminder/beeminder/issues/3850"],
"d": "2023-07-26",
"t": "2023-07-26",
}, { // ------------------------------------------------------------------------
"x": "The email we send when you create a new do-less goal now points to the help doc on do-less goals instead of the 10-year-old (!) blog post",
"u": ["https://twitter.com/beemuvi/status/1684709634257608704",
      "https://github.com/beeminder/beeminder/issues/3876"],
"d": "2023-07-27",
"t": "2023-07-27",
}, { // ------------------------------------------------------------------------
"x": "Also that email mentioned \"road\" instead \"red line\", plus we de-confused / tightened up / improved things in both the do-more and do-less versions of the email",
"u": ["https://twitter.com/beemuvi/status/1684709655598280709",
      "https://github.com/beeminder/beeminder/issues/3876"],
"d": "2023-07-27",
"t": "2023-07-27",
}, { // ------------------------------------------------------------------------
"x": "Rewrote the automatic email we send when when we lose authorization to access your data from an autodata source: shorter, clear, fewer quasi-typos",
"u": ["https://twitter.com/beemuvi/status/1685070819406557184",
      "https://github.com/beeminder/beeminder/issues/3456"],
"d": "2023-07-28",
"t": "2023-07-28",
"c": "Could've milked this one for more UVIs",
}, { // ------------------------------------------------------------------------
"x": "Help docs: More improvements to the Apple Health article to deconfuse some instructions; also readability tweaks on the Force Majeure article",
"u": ["https://twitter.com/beemuvi/status/1685070840034201601",
      "https://help.beeminder.com/article/61-apple-health",
      "https://help.beeminder.com/article/325-help-an-emergency-came-up-and-i-cant-do-my-goal"],
"d": "2023-07-28",
"t": "2023-07-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Standardized the layout and fixed some html in the article about Boss as a Service, plus a link to the blog post announcement by Manasvini",
"u": ["https://twitter.com/beemuvi/status/1686124957129138179",
      "https://help.beeminder.com/article/329-boss-as-a-service-baas"],
"d": "2023-07-31",
"t": "2023-07-31",
}, { // ------------------------------------------------------------------------
"x": "Added missing hovertext on links on the http://beeminder.com/premium page",
"u": ["https://twitter.com/beemuvi/status/1686164476310208512",
      "https://github.com/beeminder/beeminder/issues/605"],
"d": "2023-07-31",
"t": "2023-07-31",
}, /* --------------------------------------------------------- end 2023jul */ ]

const batch2023aug = [{
}, { // ------------------------------------------------------------------------
"x": "Added hovertext giving more details for each premium perk (even ones that aren't hyperlinks) on http://beeminder.com/premium",
"u": ["https://twitter.com/beemuvi/status/1686519622798016512",
      "https://github.com/beeminder/beeminder/issues/605"],
"d": "2023-08-01",
"t": "2023-08-01",
"c": "Plus some minor copyediting along the way",
}, { // ------------------------------------------------------------------------
"x": "Fixed some weirdness with tab indexes getting out of order on the dashboard page after re-sorting the goals. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1686519892143718400",
      "https://github.com/beeminder/beeminder/issues/4288",
      "https://github.com/beeminder/beeminder/pull/4388"],
"d": "2023-08-01",
"t": "2023-08-01",
}, { // ------------------------------------------------------------------------
"x": "Fixed some hovertext we broke on the premium page and fixed a couple instances of confusingly calling premium plans \"subscriptions\"",
"u": ["https://twitter.com/beemuvi/status/1686850723089367040",
      "https://github.com/beeminder/beeminder/issues/605"],
"d": "2023-08-02",
"t": "2023-08-02",
}, { // ------------------------------------------------------------------------
"x": "The autodata landing pages had the old yellow-brick-road style sample graphs on them. Updated the image that the majority of them use to a modern graph image.",
"u": ["https://twitter.com/beemuvi/status/1686885134505836547",
      "https://github.com/beeminder/beeminder/issues/3814",
      "https://github.com/beeminder/beeminder/pull/4392"],
"d": "2023-08-02",
"t": "2023-08-02",
"c": "There are still a few holdouts that are special cases: Withings and GmailZero and maybe one other stupid old one? Turns out making sample graphs is kinda labor intensive.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Changed all the references to Complice to \"Intend (formerly Complice)\", plus standardization of 2 other autodata integration docs",
"u": ["https://twitter.com/beemuvi/status/1687245558610886661",
      "https://help.beeminder.com/article/85-intend",
      "https://help.beeminder.com/article/290-clozemaster",
      "https://help.beeminder.com/article/288-codecombat"],
"d": "2023-08-03",
"t": "2023-08-03",
}, { // ------------------------------------------------------------------------
"x": "Ever since UVI#3893 (!) the SMS bot has sometimes been replying \"Beeminder is unavailable\" before replying with your actual updated graphs. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1687250054363709442",
      "https://github.com/beeminder/beeminder/issues/4378",
      "https://github.com/beeminder/beeminder/pull/4393"],
"d": "2023-08-03",
"t": "2023-08-03",
"c": "Keywords: Twilio, sms_controller",
}, { // ------------------------------------------------------------------------
"x": "An additional bug (we had to test this in production) kept yesterday's fix from preventing all cases of the SMS bot replying \"Beeminder is unavailable\" #bugfix",
"u": ["https://twitter.com/beemuvi/status/1687612980492660736",
      "https://github.com/beeminder/beeminder/issues/4378",
      "https://github.com/beeminder/beeminder/pull/4394",
      "https://github.com/beeminder/beeminder/pull/4395"],
"d": "2023-08-04",
"t": "2023-08-04",
"c": "Our Twilio gem wasn't correctly formatting the xml for 'no response' (aka blank response), so people who were seeing the error before continued to see it"
}, { // ------------------------------------------------------------------------
"x": "Had to \"register a brand campaign\" w/ Twilio and get approved by carrier networks. Our SMSes were getting throttled before and now are failing much less often!",
"u": ["https://twitter.com/beemuvi/status/1687613126118944768",
      "https://github.com/beeminder/beeminder/issues/4173",
      "https://github.com/beeminder/beeminder/pull/4393"],
"d": "2023-08-03",
"t": "2023-08-04",
"c": "Also made a sliiight change in how we send messages to Twilio that probably makes a difference from the carrier perspective?",
}, { // ------------------------------------------------------------------------
"x": "We added reCAPTCHA to the signup form to help deal with bad guys using Beeminder to test stolen credit cards 😭",
"u": ["https://twitter.com/beemuvi/status/1688701111237218304",
      "https://github.com/beeminder/beeminder/issues/4399"],
"d": "2023-08-07",
"t": "2023-08-07",
}, { // ------------------------------------------------------------------------
"x": "Added a link to a blog post for explanation of \"upcoming flat spot\" in the ratchet UI-copy",
"u": ["https://twitter.com/beemuvi/status/1688701550838046720",
      "https://blog.beeminder.com/ratchet/",
      "https://github.com/beeminder/beeminder/issues/1747"],
"d": "2023-08-07",
"t": "2023-08-07",
}, { // ------------------------------------------------------------------------
"x": "BeemiOS version 6.4 fixes a crash with the Today Widget for logged-out users and another rare crash for messed up graphs (no \"mathishard\" field). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1689053857261948933",
      "https://github.com/beeminder/BeeSwift/issues/236"],
"d": "2023-08-08",
"t": "2023-08-08",
}, { // ------------------------------------------------------------------------
"x": "We made the reCAPTCHA a little less annoying / more likely to verify you as human behind the scenes without making you do anything",
"u": ["https://twitter.com/beemuvi/status/1689056741437448197",
      "https://github.com/beeminder/beeminder/issues/4399",
      "https://github.com/beeminder/beeminder/commit/c1bda03b64adcd308dbfce886ddea923bb9cbdfb"],
"d": "2023-08-08",
"t": "2023-08-08",
}, { // ------------------------------------------------------------------------
"x": "Another reCAPTCHA #bugfix: we'd think you failed the initial check if you took more than 2 minutes to fill out the signup form",
"u": ["https://twitter.com/beemuvi/status/1689421364544077829",
      "https://github.com/beeminder/beeminder/issues/4399"],
"d": "2023-08-09",
"t": "2023-08-09",
"c": "Wasn't too big a deal since it would just make you do the checkbox captcha but, yeah, the fix was to just do the first captcha check when you actually submit the form",
}, { // ------------------------------------------------------------------------
"x": "Regression from our latest Rails upgrade: we were giving an error on signup if you used unicode characters. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1689421649677094912",
      "https://github.com/beeminder/beeminder/issues/4406"],
"d": "2023-08-09",
"t": "2023-08-09",
"c": "Rails 6.1. And we gave a 415 error and were reasonably friendly about it, but now it just handles unicode like normal.",
}, { // ------------------------------------------------------------------------
"x": "Our new reCAPTCHA broke the ability to put in your email to \"keep abreast of the buzz\". It'd give a 500 error. Mortifying. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1689778613720436738",
      "https://github.com/beeminder/beeminder/issues/4410"],
"d": "2023-08-09",
"t": "2023-08-10",
"c": "An even bigger issue is that we fail to ever actually email the buzzabreasters!",
}, { // ------------------------------------------------------------------------
"x": "Help docs: standardized the format of and/or made minor copyedits to 5 articles about autodata integrations",
"u": ["https://twitter.com/beemuvi/status/1689787418160082944",
      "https://help.beeminder.com/article/80-duolingo",
      "https://help.beeminder.com/article/121-draft",
      "https://help.beeminder.com/article/11-fitbit",
      "https://help.beeminder.com/article/278-focusmate",
      "https://help.beeminder.com/article/287-freecodecamp"],
"d": "2023-08-10",
"t": "2023-08-10",
}, { // ------------------------------------------------------------------------
"x": "Some RSS feeds didn't like that we were fetching the feed without a User-Agent header, so you couldn't mind those feeds with RSSminder. Now you can! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1690150063128121344",
      "https://github.com/beeminder/beeminder/issues/4416",
      "https://github.com/beeminder/beeminder/pull/4418"],
"c": "Specifically someone had a dev.to domain that didn't like us fetching without user-agent.",
"d": "2023-08-11",
"t": "2023-08-11",
"c": "403-error",
}, { // ------------------------------------------------------------------------
"x": "For new RSSminder goals we drew the red line starting at zero even if you had preexisting RSS entries, yielding excess safety buffer! #bugfix HT scarabaea",
"u": ["https://twitter.com/beemuvi/status/1690150767913775105",
      "https://github.com/beeminder/beeminder/issues/4401",
      "https://github.com/beeminder/beeminder/pull/4415"],
"d": "2023-08-11",
"t": "2023-08-11",
"c": "Fix from Adam involved passing the initial fetched feed entries through to goal creation",
}, { // ------------------------------------------------------------------------
"x": "If you edit your tags in the URL, the new filtering takes effect without having to reload the page. See UVI#2080 HT zzq",
"u": ["https://twitter.com/beemuvi/status/1691232776505450496",
      "https://forum.beeminder.com/t/why-is-the-desktop-interface-and-mobile-app-look-so-2012/11066/19?u=dreev",
      "https://github.com/beeminder/beeminder/issues/4421"],
"d": "2023-08-11",
"t": "2023-08-14",
}, { // ------------------------------------------------------------------------
"x": "What we previously called premium credit is now officially called Honey Money. The changes implied here are so far strictly in the name, but stand by...",
"u": ["https://twitter.com/beemuvi/status/1691233883256500229",
      "https://github.com/beeminder/beeminder/issues/4430",
      "https://github.com/beeminder/beeminder/pull/4419"],
"d": "2023-08-14",
"t": "2023-08-14",
"c": "Visible on the /payments page",
}, { // ------------------------------------------------------------------------
"x": "A little improvement along for the ride in version 6.4 of the iOS app aka BeemiOS: Theo tweaked the colors so the blue text is easier to read in dark mode",
"u": ["https://twitter.com/beemuvi/status/1691589669425934589",
      "https://github.com/beeminder/beeswift"],
"t": "2023-08-15",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "The blog got a fancy redesign thanks to Nathan Arthur of @TaskRatchet fame! It's prettier and faster!",
"u": ["https://twitter.com/beemuvi/status/1691595169521655885",
      "https://blog.beeminder.com",
      "https://github.com/beeminder/blog"],
"d": "2023-08-15",
"t": "2023-08-15",
"c": "Not sure how many UVIs to count this for but it's a lot.",
}, { // ------------------------------------------------------------------------
"x": "The new blog deployment broke &amp; fixed a long list of things: links/formatting/images/etc. We're counting all such regressions &amp; #bugfix's as this UVI!",
"u": ["https://twitter.com/beemuvi/status/1691960265196318841",
      "https://blog.beeminder.com",
      "https://github.com/beeminder/blog"],
"t": "2023-08-16",
"c": "Em dashes, font sizes, etc etc",
}, { // ------------------------------------------------------------------------
"x": "The blog (ie, WordPress) used to have a dumb Anti-Magic Violation with redirects from partial URLs. Now we show a 404 page with explicit links to near misses.",
"u": ["https://twitter.com/beemuvi/status/1691961802161336338",
      "https://github.com/beeminder/blog/issues/299"],
"d": "2023-08-16",
"t": "2023-08-16",
}, { // ------------------------------------------------------------------------
"x": "More blog 404 fanciness: if the given slug isn't a prefix/suffix of anything in the archives, we suggest the post with the closest Levenshtein edit distance",
"u": ["https://twitter.com/beemuvi/status/1692313189458034818",
      "http://blog.bmndr.co/doesntexist",
      "https://github.com/beeminder/blog/issues/299"],
"d": "2023-08-16",
"t": "2023-08-17",
"c": "So much fanciness for this. See also the dynamic hovertext on the suggested links.",
}, { // ------------------------------------------------------------------------
"x": "Users sometimes land on the FAQ without knowing to also look in the help docs. We added pointers and links to the help docs including at the very top.",
"u": ["https://twitter.com/beemuvi/status/1692325197112803444",
      "https://github.com/beeminder/beeminder/issues/3306",
      "https://github.com/beeminder/beeminder/pull/4432"],
"d": "2023-08-15",
"t": "2023-08-17",
}, { // ------------------------------------------------------------------------
"x": "We missed an instance of changing \"premium credit\" to \"honey money\" in the subscription charge emails",
"u": ["https://twitter.com/beemuvi/status/1692686226476921092",
      "https://github.com/beeminder/beeminder/issues/4430",
      "https://github.com/beeminder/beeminder/pull/4431"],
"d": "2023-08-15",
"t": "2023-08-18",
}, { // ------------------------------------------------------------------------
"x": "We now round premium charges to whole dollars. Boo pennies! We previously displayed rounded amounts but charged exact amounts, which was a dumb bug.",
"u": ["https://twitter.com/beemuvi/status/1692686900308607180",
      "https://github.com/beeminder/beeminder/issues/3350",
      "https://github.com/beeminder/beeminder/pull/4433",
      "https://github.com/beeminder/beeminder/pull/4438"], // email followon
"d": "2023-08-17",
"t": "2023-08-18",
"c": "Also updated the amounts we're charging existing users and emailed them to let them know, not that anyone realistically cares about a sub-dollar adjustment but still important to communicate it!",
}, { // ------------------------------------------------------------------------
"x": "Help docs: standardized 7 more autodata integration docs plus added a list of alternatives in our articles about our retired Jawbone & Misfit integrations",
"u": ["https://twitter.com/beemuvi/status/1693772712630681947",
      "https://help.beeminder.com/article/74-garmin",
      "https://help.beeminder.com/article/81-github",
      "https://help.beeminder.com/article/82-gmail",
      "https://help.beeminder.com/article/86-ifttt",
      "https://help.beeminder.com/article/83-habitica",
      "https://help.beeminder.com/article/318-make-formerly-integromat",
      "https://help.beeminder.com/article/323-metaminder",
      "https://help.beeminder.com/article/75-jawbone",
      "https://help.beeminder.com/article/91-misfit"],
"d": "2023-08-18",
"t": "2023-08-21",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added an FAQ item for our article on our Lichess integration, answering something multiple people have been tripped up by",
"u": ["https://twitter.com/beemuvi/status/1693773083759558823",
      "https://help.beeminder.com/article/338-lichess"],
"d": "2023-08-16",
"t": "2023-08-21",
}, { // ------------------------------------------------------------------------
"x": "We stopped cluttering your payments page w/ $0 honey money entries &amp; if an entry is for less than $0.01 (it can happen, long story!) we show more decimal places",
"u": ["https://twitter.com/beemuvi/status/1694136819557048510",
      "https://github.com/beeminder/beeminder/issues/4435",
      "https://github.com/beeminder/beeminder/pull/4437"],
"d": "2023-08-18",
"t": "2023-08-22",
}, { // ------------------------------------------------------------------------
"x": "We now show negative amounts of money like -$1.25 instead of $-1.25 (also fixed a brief regression where we showed amounts like $1.5 instead $1.50)",
"u": ["https://twitter.com/beemuvi/status/1694136870819742145",
      "https://github.com/beeminder/beeminder/issues/4436",
      "https://github.com/beeminder/beeminder/pull/4443"],
"d": "2023-08-19",
"t": "2023-08-22",
"c": "More sensible centsible()",
}, { // ------------------------------------------------------------------------
"x": "On your payments page for adjustments to your honey money balance, for a couple days we were failing to display the text in the Reason column. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1694498449209913371",
      "https://github.com/beeminder/beeminder/issues/4455",
      "https://github.com/beeminder/beeminder/pull/4445",  // [fixed]
      "https://github.com/beeminder/beeminder/pull/4437"], // [introduced]
"d": "2023-08-21",
"t": "2023-08-23",
"c": "We were showing just 'bmndr' instead, weirdly",
}, { // ------------------------------------------------------------------------
"x": "If we get an error trying to post to your reminders webhook URL, we email you. But some errors we weren't handling and the email failed to send! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1694498645067116965",
      "https://github.com/beeminder/beeminder/issues/4439",
      "https://github.com/beeminder/beeminder/pull/4440"],
"d": "2023-08-22",
"t": "2023-08-23",
"c": "We have two different types of error cases we catch. The common one is for if the webhook URL returns a non-200 response. That one was working okay, but the other case is if there's something more fucked up, like if the DNS lookup fails, or your server connects but then times out the response or something. That one's the one that's been failing.",
}, { // ------------------------------------------------------------------------
"x": "The email bot would occasionally (if weirdness like the random \"tip of the day\" was blank, etc) fail to reply to acknowledge datapoints you emailed it. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1694849201417707933",
      "https://github.com/beeminder/beeminder/issues/4441",
      "https://github.com/beeminder/beeminder/pull/4442"],
"d": "2023-08-22",
"t": "2023-08-24",
"c": "The 'etc' there is that you sent the email from a non-standard email address. This was especially happening to BaaS because they email data in to goals for you. Here 'non-standard' means not the email listed in your account settings. Would also hit this error condition if it were a group goal.",
}, { // ------------------------------------------------------------------------
"x": "We removed and disallowed the \"safebump\" goal field from the API. If you unwittingly sent it to the API, you'd break your goal!",
"u": ["https://twitter.com/beemuvi/status/1694851993301627311",
      "https://github.com/beeminder/beeminder/issues/4121",
      "https://github.com/beeminder/beeminder/pull/4446"],
"d": "2023-08-22",
"t": "2023-08-24",
"c": "How would someone unintentionally send this field? Well, the API output included safebump and so they probably just pulled the goal params from the API, changed what they wanted to change, which was something else, and then re-posted the JSON back to the API.",
}, { // ------------------------------------------------------------------------
"x": "More blog fixes: redirected old RSS URL to the new one, stopped squishing the thumbnail images into a different aspect ratio, and better frontpage link preview",
"u": ["https://twitter.com/beemuvi/status/1696304726172999819",
      "https://github.com/beeminder/blog/issues/343",
      "https://github.com/beeminder/blog/issues/300",
      "https://github.com/beeminder/blog/issues/341"],
"t": "2023-08-28",
"c": "The open graph link preview for the blog home page was missing",
}, /* --------------------------------------------------------- end 2023aug */ ]

const batch2023sep = [{
}, { // ------------------------------------------------------------------------
"x": "We're now less likely to miss our hourly polling for autodata: we no longer abandon the fetch for everyone if one goal has an error",
"u": ["https://twitter.com/beemuvi/status/1697678128230043758",
      "https://github.com/beeminder/beeminder/issues/4364",
      "https://github.com/beeminder/beeminder/pull/4366"],
"d": "2023-07-05",
"t": "2023-09-01",
"c": "Keywords: background polling, rescuing errors, autodPolling",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Minor copy tweaks / fixes for 9 autodata integration articles",
"u": ["https://twitter.com/beemuvi/status/1698842468090089774",
      "https://help.beeminder.com/article/318-make-formerly-integromat",
      "https://help.beeminder.com/article/323-metaminder",
      "https://help.beeminder.com/article/291-pocket",
      "https://help.beeminder.com/article/292-project-euler",
      "https://help.beeminder.com/article/76-rescuetime",
      "https://help.beeminder.com/article/331-rssminder",
      "https://help.beeminder.com/article/77-runkeeper",
      "https://help.beeminder.com/article/89-skritter",
      "https://help.beeminder.com/article/116-slack"],
"d": "2023-09-04",
"t": "2023-09-04",
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023sep */ ]
const batch2023oct = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023oct */ ]
const batch2023nov = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023nov */ ]
const batch2023dec = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023dec */ ]

const staged = [ {
}, { // ------------------------------------------------------------------------
"x": "BeemiOS now ignores data from before your goal was created and syncs more than just the current day automatically (as of version 6.4 or maybe earlier)",
"u": ["https://twitter.com/beemuvi/status/1698846974295069009",
      "https://github.com/beeminder/beeswift"],
"t": "2023-09-04",
}, { // ------------------------------------------------------------------------
"x": "The goal page for Gitminder (aka our GitHub autodata integration) goals now tells you what you're beeminding, including GitHub repo and username",
"u": ["https://twitter.com/beemuvi/status/1699202764679827623",
      "https://github.com/beeminder/beeminder/issues/4094",
      "https://github.com/beeminder/beeminder/issues/3040",
      "https://github.com/beeminder/beeminder/pull/4278"],
"t": "2023-09-05",
"c": "Oldie but we searched carefully and concluded we never logged it as a UVI!",
}, { // ------------------------------------------------------------------------
"x": "Our Toggl integration could miss data if you had enough future postdated data. We'd abused their 'since' param: it's 'modified since' not 'added since' #bugfix",
"u": ["https://twitter.com/beemuvi/status/1699203508548047013",
      "https://github.com/beeminder/beeminder/issues/4460",
      "https://github.com/beeminder/beeminder/pull/4464"],
"d": "2023-08-31",
"t": "2023-09-05",
"c": "And apparently it has a limit of a week of data, so probably almost no one ran into a problem here cuz who adds that much post-dated data -- but one person did!",
}, { // ------------------------------------------------------------------------
"x": "Embarrassing typo in emailcopy when we tell you your credit card card failed. We lost the words \"your stored credit card\" in \"tried to charge your...\"",
"u": ["https://twitter.com/beemuvi/status/1699572223642947639",
      "https://github.com/beeminder/beeminder/issues/4471",
      "https://github.com/beeminder/beeminder/pull/4473",
      "https://github.com/beeminder/beeminder/pull/4462"],
"d": "2023-09-06",
"t": "2023-09-06",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Updated the article for our Apple Health integration to clarify that a couple issues with syncing are now fixed (yay!)",
"u": ["https://twitter.com/beemuvi/status/1699572321688916314",
      "https://help.beeminder.com/article/61-apple-health"],
"d": "2023-09-06",
"t": "2023-09-06",
}, { // ------------------------------------------------------------------------
"x": "We added 'currate' (internally: rcur) to the API output for finding the current slope of the bright red line. HT Theo Spears",
"u": ["https://twitter.com/beemuvi/status/1701742624540119532",
      "https://api.beeminder.com/#attributes-2",
      "https://github.com/beeminder/beeminder/issues/4470",
      "https://github.com/beeminder/beeminder/pull/4472",
      "https://github.com/beeminder/apidocs/commit/9610ddd5a24f6b66961bf3683095224bfe0d73b5"],
"d": "2023-09-06",
"t": "2023-09-12",
}, { // ------------------------------------------------------------------------
"x": "If your email client pre-fetches links you'd see \"<email> was already confirmed\" when you clicked on the email confirmation link for us. Now worked around!",
"u": ["https://twitter.com/beemuvi/status/1701742624540119532",
      "https://github.com/beeminder/beeminder/issues/4465",
      "https://github.com/beeminder/beeminder/pull/4466"],
"d": "2023-09-01",
"t": "2023-09-12",
"c": "The workaround is to not do confmail for HEAD requests",
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Adam's StoryGraph \"number of books\" metric",
"u": [
      "https://github.com/beeminder/beeminder/issues/3947",
      "https://github.com/beeminder/beeminder/pull/3948/"],
"c": "We have the ability to count books if appropriate stuff is set in ii, but it's not added to elf yet, so not possible to set up a goal for it on your own yet.",
"d": "2022-12-31", // [only semi-live]
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
}, /* ---------------------------------------------------------- end staged */ ]


/*********************************************************************************************************************************************************************
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI] awaiting more changes with slug/goalname/goalID in the API
"x": "Undeprecated the id field in the Goal endpoint of the API and ... [TODO]"
"x": "Super mini: removed \"Deprecated\" from the 'id' field in the API docs Goal resource -- UVI#2104 sort of myopically semi-broke the API, since we want you to use the goalname (aka slug) as the identifier, but now you can change the goalname, so we'd definitely better keep the goal ID around so API clients can piece things back together if someone goes and changes a goalname on them",
"c": "It's super mini, but took lots of words to say the things",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] BeemiOS 6.0: (see UVI#4031 and UVI#4045 for the 6pm deadline thing with sleep goals)
- Bug fix for inaccurate sleep data for Apple Health goals [tweeted 2 UVIs about forcing to 6pm already]
- Preliminary support for adding data to goals via Shortcut [users disconfirm; sadface]
- username whitespace bugfix: https://github.com/beeminder/BeeSwift/issues/285
"d": "2012-12-29", // um, maybe this meant to say 2022-12-29?
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
[TODO WIP]
WIP PR: https://github.com/beeminder/beeminder/pull/3223
Much of this PR was encompassed in PR#3226 which has been deployed and UVIs composed above
Check #3255 for summary of UVIs once deployed.
https://github.com/beeminder/beeminder/issues/3225
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
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
"u": [
      "https://github.com/beeminder/beeminder/pull/3363",
      "https://github.com/beeminder/beeminder/issues/3352"]
"c": "Everywhere Everystrava All At Once was fixing the bug where we'd get ratelimited and be slow getting your data, but still relying on the sorta-hourly polling checks that beeminder does. This PR adds webhook handling so that strava sends us a push any time you have new data, so theoretically should be much more realtime than the hourly polling thing"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
"x": "As a follow-on to UVI#4165 & UVI#4166, we now return an error unless passed-in graph matrices (the roadall parameter) have 3 elements per row",
"u": [
      "https://github.com/beeminder/beeminder/pull/3256"],
"d": "2022-07-13",
"c": "The previous UVIs were about more general input handling and fixing weird things with parsing of those inputs",
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
"c": "It seems like it errors while looking for the ErrorsController (to render a 404) and then ends up rendering a 404 anyway"
https://github.com/beeminder/beeminder/issues/3567
https://github.com/beeminder/beeminder/pull/3568
"d": "2022-09-13"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[SCHEDEL]
not a full UVI since we've already tweeted it more than once and embarrassingly keep missing spots of edit-warring over it:
MINI: change "goal name" to "goalname" in a couple more places
https://github.com/beeminder/beeminder/issues/3782
"d": "2022-10-27",
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
OTHER BEEDROID 5 THINGS:
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
BEEMIOS 6.4 STILL IN BETA:
* Adds a new metric for workout minutes, similar to other Apple Health metrics. Implementation is slightly different due to the different health type.
  https://github.com/beeminder/BeeSwift/pull/401
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
READWISE READER INTEGRATION
https://github.com/beeminder/beeminder/pull/4429
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
old: better 500-error errorcopy (but a question about user-visibility)
[i can't find that we tweeted about this already, but as it is from 2022, I don't feel bad saying it's too late and too lame.]
https://github.com/beeminder/beeminder/issues/2609
https://github.com/beeminder/beeminder/commit/7076559aa625fe2e51c2af5082f5d56dc5cc2b7c
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Follow-on #bugfix's from the blog redesign: reinstated some missing images and two missing posts",
"u": ["https://twitter.com/beemuvi/status/1702109523572633931",
      "https://github.com/beeminder/blog/issues/361"],
"d": "2023-09-05",
"t": "2023-09-13",
}, { // ------------------------------------------------------------------------
"x": "Also fixed the subscribe-by-email link in the header of the blog",
"u": ["https://twitter.com/beemuvi/status/1702109622201700365",
      "https://github.com/beeminder/beeminder/issues/4102"],
"t": "2023-09-13",
}, { // ------------------------------------------------------------------------
"x": "Added a warning to the API docs that the `mathishard` goal attribute can be null when the goal has an error (typically something like "no datapoints")
https://twitter.com/beemuvi/status/1702468983923032303
https://github.com/beeminder/beeminder/issues/4414
https://github.com/beeminder/apidocs/commit/5bbe72c36e344bb3b97a571bbf0dcc65599892b0
"d": "2023-09-13",
"t": "2023-09-14",
}, { // ------------------------------------------------------------------------
"x": "Soft launch of the Readwise Reader autodata integration! Beta users welcome at beeminder dot com slash readwisereader!"
https://twitter.com/beemuvi/status/1702469075325329538
https://forum.beeminder.com/t/integration-request-readwise-reader/10710
TODOBEE: gissue
"d": "2023-09-12",
"t": "2023-09-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New FAQs in the TryDeepWork autodata integration article, plus minor clarifications/tweaks in 7 other autodata articles",
"u": ["https://twitter.com/beemuvi/status/1702825391621022202",
      "https://help.beeminder.com/article/340-trydeepwork",
      "https://help.beeminder.com/article/84-sleep-as-android",
      "https://help.beeminder.com/article/112-sms",
      "https://help.beeminder.com/article/281-strava",
      "https://help.beeminder.com/article/289-taskratchet",
      "https://help.beeminder.com/article/300-the-storygraph",
      "https://help.beeminder.com/article/79-todoist",
      "https://help.beeminder.com/article/78-trello"],
"d": "2023-09-15",
"t": "2023-09-15",
}, { // ------------------------------------------------------------------------
"x": "The Pledge / [do thing] / Track boxes on autodata landing pages had some messed up CSS that made them different heights. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1703919445885022506",
      "https://github.com/beeminder/beeminder/issues/4481",
      "https://github.com/beeminder/beeminder/pull/4479"],
"d": TODOBEE
"t": "2023-09-18",
"c": "Probably from one of the Rails upgrades?",
}, { // ------------------------------------------------------------------------
"x": "Other autodata landing page improvements: more spacing tweaks, mobile-friendlier, fix typo'd anchor link on the BaaS landing page",
"u": [
      "https://github.com/beeminder/beeminder/issues/4481",
      "https://github.com/beeminder/beeminder/pull/4479"],
"d": TODOBEE
ALSO:
* fixed some spacing issues with the box headers (e.g. "progress" on lichess landing)
* improved responsiveness of all landing pages
* fixed a bug with the anchor link on baas landing page (it was copypasta from mutatis-mutandis-ing the taskratchet landing page)

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
1. DREEV: point to help.beeminder.com in blog.beeminder.com/newbees and vice versa
2. https://forum.beeminder.com/t/api-create-goal-documentation-needs-updating/5547
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~-------------------- TOO LATE / TOO LAME -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
* Friendlier oauth names: https://github.com/beeminder/beeminder/issues/1612
* Milk static-401 for more UVIs? (fixing/obviating the banner bug, making it all work the same via the API)
* Vimium users can now jump to the goals on the dashboard with hotkeys. something about octicons apparently?
* max-height for the landing page images, same commit url as an old one from a previous UVI about runkeeper:
  https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3
* Got rid of the \"Increase the pledge each time you derail\" checkbox on the goal page as it was redundant with using Pledge Caps to stop pledge increases
  [BEE: nothing was tweeted as far I can see; but also you don't have a PR/Gissue to link to with this, so maybe that + the ancientness disqualifies it?]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
andy says this is NOT a beemios 6.0 UVI but I pasted it from somehwere that i can't remember where now so, i don't know:
* sleep related data is displayed in the recent datapoints list right away after tapping either sync button
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
//////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*********************************************************************************************************************************************************************/
