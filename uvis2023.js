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
"c": "As a little commitment device for ourselves, we're not undoing that until we deploy a related UVI, cuz a temporary increase in the goal limit is too cheap to count!",
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
}, /* --------------------------------------------------------- end 2023mar */ ]
const batch2023apr = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023apr */ ]
const batch2023may = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023may */ ]
const batch2023jun = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023jun */ ]
const batch2023jul = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023jul */ ]
const batch2023aug = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023aug */ ]
const batch2023sep = [{
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
}, /* ---------------------------------------------------------- end staged */ ]


/*********************************************************************************************************************************************************************
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
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
https://github.com/beeminder/beeminder/issues/1552
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
[TODO] unreverse withings autofetch batches
"x": "Our Withings autofetches were annoyingly (for those weighing in multiple times in a row) reversing each batch of datapoints they fetched. #bugfix",
https://github.com/beeminder/beeminder/issues/2739
"c": "This was kind of subtle for most users, or didn't impact you at all if your weigh-ins were spread out enough that we always fetched your data in between them. It matters a lot for Danny's tareable diet thing though!",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] BeemiOS 6.0: (see UVI#4031 and UVI#4045 for the 6pm deadline thing with sleep goals)
- Bug fix for inaccurate sleep data for Apple Health goals [tweeted 2 UVIs about forcing to 6pm already]
- Preliminary support for adding data to goals via Shortcut [users disconfirm; sadface]
- username whitespace bugfix: https://github.com/beeminder/BeeSwift/issues/285
"d": "2012-12-29",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[DELETE (BEE)]
[HOLD: Probably not a UVI, and just a WIP] Improve handling of 500s from Mailgun when sending
Clarifies error message as well as retries on non-2xx response.
ADAM: @bsoule i don't have time to qualsify this at the moment, so i don't know if it works at all. If you want, you can take this over the finish line, otherwise, I can look at it when I'm back at it.
https://github.com/beeminder/beeminder/issues/2976
The retrying sounds user-visible-ish but Bee says that it's just rearranging stuff in error handling + retrying that we were already doing. Can clarify with Adam to be sure.
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[DELETE: the gissue is open! shouldn't bee in this list when it's just a gissue that exists and hasn't been addressed]
[HOLD] clocky aggday and not suppressing beebraining
fixed in 2019??
https://github.com/beeminder/beeminder/issues/703#issuecomment-1033153413
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[WIP PR; not deployed]
a url to check what beeminder sees for urlminder?
https://github.com/beeminder/beeminder/commit/6a7311cddd29dc8e4b3f5cbff1ed3d51ab29a347
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO] other coupon-killing tasks (already tweeted killing discounts for beemium)
https://github.com/beeminder/beeminder/issues/2701
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO] autodata links (like trello for the rest of them)
https://github.com/beeminder/beeminder/issues/493
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
[BEEDROID]
https://github.com/beeminder/beedroid/issues/188
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TOO LAME?
mailgun, our email provider, was down yesterday and we resent legit checks and delayed charges for goals that derailed during that window
https://github.com/beeminder/beeminder/pull/3311
"d": "2022-06-09"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO WIP]
WIP PR: https://github.com/beeminder/beeminder/pull/3223
Much of this PR was encompassed in PR#3226 which has been deployed and UVIs composed above
Check #3255 for summary of UVIs once deployed.
https://github.com/beeminder/beeminder/issues/3225
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
ADAM TODO: 
WIP: Increase robustness of Todoist goal creation (PR #3328)
Goal creation for Todoist has been a little finicky.
This is work-in-progress that does the following:
* Fetches Todoist information when creating Todoist goals, not only when users select "projects / labels" vs "all items". This will confirm that we can talk to Todoist about this user right as we make the goal.
* Doesn't let users advance until we've gotten their Todoist info.
* Creates the checkboxes for projects and filters using a template item rather than generating the html in JS. This means as we tweak fancy_checkbox and fancy_radio_button, we'll get the same tweaks here without doing anything extra.
* Removes some places where we create html without making sure it's clean close by, and replaced it with methods that are aware of html safety.
* Caches whether or not the Todoist information has been fetched.
* Flashes to the user when an error fetching Todoist data occurs, and prevents them from going forward in goal creation.
* Hides the project/label filter list the same way it's revealed when the All Items option is reselected (#2922).
* Shows a helpful message to the user in goal creation when they've exceeded their Todoist rate limit. (#2461)
* Adds some quals, patterned after the Focusmate elf quals. However, it appears that our fancy_* are wonky enough that Capybara can't find them, and this one might be our fault. This means that some parts of the quals are commented out.
It needs more validation and some more quals.
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
adam called this stale resque workers thing an infra but maybe we could call it user-visible if we can find a way to describe it:
Resque workers could be stale after deploy because our way of restarting them wasn't pointing at the PIDs of the workers themselves, but of the wrapper that started them up
[TODO: why was this only a problem sometimes? why does restarting the wrapper sometimes restart them and sometimes not?]
https://github.com/beeminder/beeminder/issues/3914
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[QUESTIONABLE]
we introduced a syntax error on Jan 5th that turned a "422" error to a "500" error response.
questionable because it's an error that's returned to some javascript on our pages, so was already an error response and probably the difference in 422 vs 500 didn't change how it was handled / what it looked like from the user's POV.
https://github.com/beeminder/beeminder/issues/3983
https://github.com/beeminder/beeminder/pull/3984
"d": "2023-01-07"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
focusmate non-monotone something?
https://github.com/beeminder/beeminder/issues/3614
BEE: "sounds like this is a repeat of: http://beeminder.com/changelog#4361 (probably just add this url to the changelog entry for 4361)"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
NIX: copy change addressing user confusion: "when you cross the line" => "when you're on the wrong side of the line when the deadline hits" (sadly much less pithyfiable)
https://github.com/beeminder/beeminder/issues/3446
https://github.com/beeminder/beeminder/pull/4036
"d": "2023-01-24"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[NOT DEPLOYED YET]
add "autocomplete" attributes to registration, password, signup forms to hint the browser how to help with autocomplete stuff it does (where it remembers your name and address and tries to help filling out forms)
https://github.com/beeminder/beeminder/issues/4054
https://github.com/beeminder/beeminder/pull/4055
give autocomplete attributes in forms
this is probably a UVI. (but maybe warrants looking at how it is in different browsers etc before making broad declarations?)
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
* add explanation about Stripe redirect & link to Stripe
https://github.com/beeminder/beeminder/issues/4120
https://github.com/beeminder/beeminder/pull/4138
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
placeholder text in intentinos field on signup form
https://github.com/beeminder/beeminder/issues/4144
"d": "2023-03-08",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
MINI
"x": "Fix some microcopy in the ratchet UI that erroneously referred to "the 'commit to' section" instead of the commitment dial. #bugfix
"u": [
      "https://github.com/beeminder/beeminder/issues/3915"],
"d": "2023-03-11",
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
andy says this is NOT a beemios 6.0 UVI but I pasted it from somehwere that i can't remember where now so, i don't know:
* sleep related data is displayed in the recent datapoints list right away after tapping either sync button
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
//////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*********************************************************************************************************************************************************************/
