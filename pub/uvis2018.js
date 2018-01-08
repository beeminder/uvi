var batch2018jan = [{
}, { // ------------------------------------------------------------------------
"n": 2516,
"f": true,
"x": "(+) Version 4.9 of iOS app!",
"u": ["https://twitter.com/beemuvi/status/948355879853744128",
      "https://github.com/beeminder/BeeSwift/commit/f891b4501ec01c6236bddc6fc50b9f654584b124"],
"t": "2018-01-02",
"c": "This isn't actually its own UVI, just a heading for 2 related UVIs",
}, { // ------------------------------------------------------------------------
"n": 2516,
"s": true,
"x": "(1) Goals can now be sorted by name, deadline, pledge, and recently updated, just like on the web dashboard",
"u": ["https://twitter.com/beemuvi/status/948355879853744128",
      "http://forum.beeminder.com/t/ordering-of-beeminder-stings-on-ios/3630/16?u=dreev",
      "https://github.com/beeminder/BeeSwift/commit/f891b4501ec01c6236bddc6fc50b9f654584b124"],
"t": "2017-05-11",
"c": "NB: This and the parent UVI are both #2516 because they were tweeted as the same UVI",
}, { // ------------------------------------------------------------------------
"n": 2517,
"s": true,
"x": "(2) The Settings screen got a (mostly cosmetic) overhaul",
"u": ["https://twitter.com/beemuvi/status/948357286572933120",
      "https://github.com/beeminder/BeeSwift/commit/f891b4501ec01c6236bddc6fc50b9f654584b124"],
"t": "2018-01-02",
}, { // ------------------------------------------------------------------------
"n": 2518,
"f": true,
"x": "And version 5.0 of iOS app has Timer Mode: from a goal screen, tap the timer icon to bring up a timer screen and easily submit datapoints for timed activities",
"u": ["https://twitter.com/beemuvi/status/948719133595594752",
      "https://github.com/beeminder/BeeSwift/pull/1",
      "http://forum.beeminder.com/t/ios-is-open-source-again-request-for-feature-bugfix-requests/3620/4?u=dreev",
      "http://forum.beeminder.com/t/timer-integration/3658/8?u=dreev"],
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500 error on archived goal pages for users with no payment method, which we broke around UVI#2392 or so. #bugfix",
"u": ["https://twitter.com/beemuvi/status/949082026887426049",
      "https://github.com/beeminder/beeminder/commit/9f24fb854f782b61291bbd45fa4e856f3c4b597d"],
"c": "We disable the delete button if you have a pending charge, but the way we were checking for this would 500 if you had no payment method at all (cuz can't have a pending charge if no cc)",
}, { // ------------------------------------------------------------------------
"x": "The http://bmndr.com/apps &rarr; http://bmndr.com/settings/account#account-permissions (&amp; similar for /settings/password) redirects weren't using the anchor link so wouldn't always take you to the right Settings tab",
"u": ["https://twitter.com/beemuvi/status/949083148662456320",
      "https://github.com/beeminder/beeminder/commit/da8a2ff691fc813ca3c51f233a1db5ca33de69d6"],
}, { // ------------------------------------------------------------------------
"x": "Cleaned up old links to beeminder.com/payment (now has a more concise URL) and tightened some of the web/email copy referring to it. #mini",
"u": ["https://twitter.com/beemuvi/status/949444299824836610",
      "https://github.com/beeminder/beeminder/commit/15c556a897a25f9dab16a98f113c5c2983e795dd"],
"t": "2018-01-05",
"c": "Not sure if we logged a UVI for the concising of the URL itself",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2018jan */ ]

var staged = [ { // note: sub-UVIs not allowed here in staging
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]

/*
METASTAGED: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
updated the goal wizard to give you a choice for rate units on autodata goals (i.e. 1/day vs 7/week). duolingo, codeschool, draft, trello, github, skritter, sleep as android, twitter, urlminder, and jawbone up
TODO: previously you could change autodata runits after goal creation but now you get the choice as part of goal creation?
yes. specific to autod goals. the wizards would say 
I COMMIT TO MOVE
[- 5 +]
CARDS PER WEEK
ON THE FOLLOWING TRELLO BOARDS
[   ]
https://github.com/beeminder/beeminder/commit/eda705b61c6bf7fc0eec2d16103f9d2ad6ef265c "adds runit select for autodata goals"
}, { // ------------------------------------------------------------------------
* changed wording on a few of the autodata integrations to make more sense, sound more sentence-like, and fit on the page better. [this in the first goal wizard step where you're getting autodata details]
* updated css for these goals as well in the goal wizard making the form fields line up and stuff
* added units to the rate steppers for all these autodata goal wizards [we know what the units are, but weren't showing them, so you had a stepper that was all [- 5 +] with no indication of 5 whats.]
* added a link to the Sleep Cloud backup add-on which is required for the sleep as android integration to work [we mentioned it, but did not link to where to get it]
}, { // ------------------------------------------------------------------------
pjh's fine print fix:
"Show you the fine print on your goal when it is archived. (Wasn't available because the settings are disabled.)"
http://forum.beeminder.com/t/2014-goal-notes-are-not-accessible/3660/5
https://github.com/beeminder/beeminder/commit/71ffa60c6d1b7b2cd416c68d041f1f3dab2d34ac "Show fine print tab on archived goals"
https://github.com/beeminder/beeminder/pull/139
Just accepted this pull request and it brought up the question: why aren't we making the fine print more accessible to the actual user of the goal? Maybe there's a way we could bring it more top of mind. It's currently in the setting tab, but that's a bunch of text and edit fields... not super accessible.
Maybe this is a won't fix, because finding places to add more user-defined text to the UI is problematic. But I'm just at least opening up this issue for the sake of discussion / thinking about it.
}, { // ------------------------------------------------------------------------
Andy's bugfix -- "default yaxis to empty string in json" -- that caused an ios crash
https://github.com/beeminder/beeminder/commit/7e8da405683ea63c8092edd19918d7cdd19def26
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
CANDIDATES: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
* fixed some (most? many?) of the thing where flash banner shows up again after you leave current page and go to another page 
  [maybe this mostly only happens for admins?]
IDEAS: -------10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
1. better beemail unsubscribe with downpopped unsubscribe-all option
2. save buttons ought to be disabled when there’s nothing to save. ~i think we used to do that in old.bmndr but maybe not.~ [did not]
3. chris su, who's pretty amazing, has api docs feedback: http://forum.beeminder.com/t/typos-in-api-documentation/3359/5?u=dreev
4. Louis: Need open-ended goals. Defaulting to +10yr looks like a bug.
5. Louis: Road dial without exes and pencils feels frustratingly broken when you don't know the rhyme or reason for how the grayed-out field changes. Important redesign-regression.
6. Louis: Even aside from that, dealing with the akrasia horizon constraint is opaque and frustrating. Dumbing down the full road editor can really backfire.
7. http://forum.beeminder.com/t/weight-loss-goal-help/3604/3?u=dreev
8: link to help.beeminder.com in the navbar? i guess it's already prominent in the footer, but lawrence said he couldn't find it when he hunted for it

MINI: fixed typo and some copy edits in the the Slack bot help responses [TODO for dreeves]

EASY: https://github.com/beeminder/beeminder/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AUVI+label%3APEA+
HARD: https://github.com/beeminder/beeminder/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AUVI+-label%3APEA+
*/


/*******************************************************************************
INFRAS WHILE AWAITING PROGLOGS GENERALIZATION: -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
"x": "Timezones, asof-null, sadedgy, sadreset, and inferred tini/vini all purged from Beebrain!",
"u": "https://twitter.com/beeminfra/status/931291064794718208",
}, { // ------------------------------------------------------------------------
"x": "We improved our bee.sh script to give it a single command to deploy to all application servers",
"u": "https://twitter.com/beeminfra/status/933784267540250625",
}, { // ------------------------------------------------------------------------
"x": "We updated our tests to deal with recent changes in registration and with weightloss goal creation. (UVIs #2471 & #2474 & friends)",
"u": "https://twitter.com/beeminfra/status/936364866436132866",
}, { // ------------------------------------------------------------------------
"x": "Show admins the link to user's archived goals on their gallery page",
"u": "https://twitter.com/beeminfra/status/938891955823452161",
}, { // ------------------------------------------------------------------------
"x": "Actually store the maxflux that we get from users when they set up a new weightloss goal",
"u": "https://twitter.com/beeminfra/status/941428798431543296",
}, { // ------------------------------------------------------------------------
"x": "Silenced airhorns about autodata on frozen goals.",
"u": "https://twitter.com/beeminfra/status/943877535091212288"
}, { // ------------------------------------------------------------------------
"x": "Added missing hhmmformat goal field to the admin form.",
"u": ["https://twitter.com/beeminfra/status/943877851668819968",
"https://github.com/beeminder/beeminder/commit/2d7bf31673dbfa9697aaa4a2fe54246a525d1549"]
}, { // ------------------------------------------------------------------------
don't make title required and then do javascript contortions to deal with it
nilly email_freq fix in massmail jobs

bb.dflux is now called stdflux and so we have differentiation between user collected field (maxflux), and bbrain calculated field (stdflux)

}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------

GROOVIES WHILE AWAITING PROGLOGS GENERALIZATION: -----50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
We secured a spot in IFTTT's monthly newsletter next month! (Specific action yesterday that makes this count as a new groovy was sending them a hi-res logo)
https://twitter.com/beemgro/status/933050159621009410
}, { // ------------------------------------------------------------------------
Sent a cyber monday promotion to all monthly active non-premium users
https://twitter.com/beemgro/status/935594076287614976
}, { // ------------------------------------------------------------------------
Started a trial with Growsumo -- beeminder.growsumo.com -- as a possible way to outsource our referral program but it may be too pricey for us!
https://twitter.com/beemgro/status/938130457329393664
}, { // ------------------------------------------------------------------------
Filled out a bunch of paperwork with Google so we count as a “verified developer”
https://twitter.com/beemgro/status/940667311081512960
}, { // ------------------------------------------------------------------------
Sent 10 Beeminder-branded bluetooth buttons to our hardest core fans/advocates. Also asked Fitbit yet again about reinstating us in their partner gallery.
https://twitter.com/beemgro/status/943205510370639872
}, { // ------------------------------------------------------------------------
Submitted Beeminder's Gitminder integration to the GitHub marketplace
https://twitter.com/beemgro/status/945739401367240704
}, { // ------------------------------------------------------------------------
Emailed with IFTTT folks about vetting the blurb for our inclusion in their newsletter
https://twitter.com/beemgro/status/949365920270401536
2018-01-05
}, { // ------------------------------------------------------------------------
*******************************************************************************/


