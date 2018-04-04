var batch2018jan = [{
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
"t": "2018-01-02",
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
"x": "We now show you the fine print (if you have any) on archived goals; wasn't previously available because it was in Settings which are disabled for archived goals",
"u": ["https://twitter.com/beemuvi/status/950471795450134528",
      "http://forum.beeminder.com/t/2014-goal-notes-are-not-accessible/3660/5",
      "https://github.com/beeminder/beeminder/commit/71ffa60c6d1b7b2cd416c68d041f1f3dab2d34ac",
      "https://github.com/beeminder/beeminder/pull/139"],
"t": "2018-01-08",
"c": "By Philip Hellyer. Also it kind of sucks having this buried in Settings in general.",
}, { // ------------------------------------------------------------------------
"x": "The goal creation wizards for autodata goals now let you choose rate units (per day vs per week). I.e., UVI#2489 but for all autodata goals.",
"u": ["https://twitter.com/beemuvi/status/950529207150391296",
      "https://github.com/beeminder/beeminder/commit/eda705b61c6bf7fc0eec2d16103f9d2ad6ef265c"],
"d": "2018-01-05",
"t": "2018-01-08",
"c": "Previously you could change autodata runits after goal creation but now you get the choice as part of goal creation. And some of them had this already so the specific ones we added were Duolingo, Codeschool, Draft, Trello, GitHub, Skritter, Sleep As Android, Twitter, URLminder, and Jawbone UP.",
}, { // ------------------------------------------------------------------------
"x": "Changed the wording on a few of the autodata integrations to make more sense, sound more sentence-like, and fit on the page better",
"u": ["https://twitter.com/beemuvi/status/950621321565585408",
      "https://github.com/beeminder/beeminder/commit/eda705b61c6bf7fc0eec2d16103f9d2ad6ef265c"],
"d": "2018-01-05",
"t": "2018-01-08",
"c": "This in the first goal wizard step where you're getting autodata details",
}, { // ------------------------------------------------------------------------
"x": "Updated the CSS for our autodata goal creation wizards to make the form fields line up, consistent headers, etc",
"u": ["https://twitter.com/beemuvi/status/950621677578199040",
      "https://github.com/beeminder/beeminder/commit/eda705b61c6bf7fc0eec2d16103f9d2ad6ef265c"],
"d": "2018-01-05",
"t": "2018-01-08",
}, { // ------------------------------------------------------------------------
"x": "Added units to the rate steppers for all these autodata goal wizards, like adding \"points\" or whatever to the \"[-] 5 [+]\" widget",
"u": ["https://twitter.com/beemuvi/status/950621847749509120",
      "https://github.com/beeminder/beeminder/commit/eda705b61c6bf7fc0eec2d16103f9d2ad6ef265c"],
"d": "2018-01-05",
"t": "2018-01-08",
}, { // ------------------------------------------------------------------------
"x": "Added an actual link to the Sleep Cloud Backup add-on which is required for the Sleep As Android integration to work",
"u": ["https://twitter.com/beemuvi/status/950621999583264768",
      "https://github.com/beeminder/beeminder/commit/eda705b61c6bf7fc0eec2d16103f9d2ad6ef265c"],
"d": "2018-01-05",
"t": "2018-01-08",
"c": "We mentioned all along that you needed it, but did not link to where to get it. [forehead smack]",
}, { // ------------------------------------------------------------------------
"x": "Made the y-axis in the API default to empty string, not null. The more user-visible aspect of this is the iOS app sometimes crashed on y-axis null! #bugfix",
"u": ["https://twitter.com/beemuvi/status/951551249723224064",
      "https://github.com/beeminder/beeminder/commit/7e8da405683ea63c8092edd19918d7cdd19def26"],
"d": "2018-01-03",
"t": "2018-01-11",
}, { // ------------------------------------------------------------------------
"x": "When restarting an archived goal, we'd claim to let you change the rate units but ignore your change! #bugfix HT <a href=\"http://web.engr.oregonstate.edu/~rosulekm/\">Mike Rosulek</a>",
"u": ["https://twitter.com/beemuvi/status/951978712441982976",
      "https://github.com/beeminder/beeminder/commit/fba781f8ad5d5f62808e59c6e4cc2f32bf129a1c"],
"t": "2018-01-12",
}, { // ------------------------------------------------------------------------
"x": "Updated the IFTTT logo on our front page and our IFTTT landing page and changed their old term \"Recipe\" to their new term \"Applet\" everywhere",
"u": ["https://twitter.com/beemuvi/status/953024377959866369",
      "https://github.com/beeminder/beeminder/commit/d625dacf73bca5c1cd5f991621aec4f46b1661ae",
      "https://github.com/beeminder/beeminder/commit/8b47745cc665d405d87fcda841803bf91d0bf2b5"],
"t": "2018-01-15",
}, { // ------------------------------------------------------------------------
"x": "A bunch of other changes to http://beeminder.com/ifttt to make it pretty and more descriptive and include lots of examples of beeminding that users automate with IFTTT",
"u": ["https://twitter.com/beemuvi/status/953024771251253248",
      "https://github.com/beeminder/beeminder/commit/c20946023f5b101903afedf8290596719d6af230"],
"t": "2018-01-15",
"c": "ifthisMINDthat.com",
}, { // ------------------------------------------------------------------------
"x": "Better goal creation wizard for IFTTT goals that guides you through creating a goal and then sends you to IFTTT to create the corresponding Applet",
"u": ["https://twitter.com/beemuvi/status/953027144044523520",
      "https://github.com/beeminder/beeminder/commit/2cc31658f7659966dfa443b0b3cfa8399bc7570a"],
"t": "2018-01-15",
}, { // ------------------------------------------------------------------------
"x": "More copyedits and improvements to the IFTTT landing page, like using the new link for our channel instead of relying on a redirect. #mini",
"u": ["https://twitter.com/beemuvi/status/953428015739908097",
      "https://github.com/beeminder/beeminder/commit/5089f6d1557f19fc28ea129804ba6c7e14382108"],
"t": "2018-01-16",
}, { // ------------------------------------------------------------------------
"x": "Version 5.0.1 of the iOS app adds text to the initial blank goal gallery so newbees know to go to the website to create goals. HT @slothbear &amp; @faireness",
"u": ["https://twitter.com/beemuvi/status/953789920979533824",
      "https://github.com/beeminder/BeeSwift/commit/f4140c80a3639708f88b8926d681e15f299aa407"],
"t": "2018-01-17",
}, { // ------------------------------------------------------------------------
"x": "Beeminder's API would sometimes falsely reject changes from the road editor as if they violated the akrasia horizon constraint. #bugfix HT @kenoubi",
"u": ["https://twitter.com/beemuvi/status/954117792340484096",
      "https://github.com/beeminder/beeminder/commit/9ffac1bad62628c569061e63053e9aa0183aab68"],
"t": "2018-01-18",
}, { // ------------------------------------------------------------------------
"x": "To make such errors less opaque in the future, the <a href=\"http://road.glitch.me\">road editor</a> now echoes any errors from Beeminder's API. HT @kenoubi",
"u": ["https://twitter.com/beemuvi/status/954118025149427712",
      "https://github.com/beeminder/road/commit/f8ec62c2decf9d84651bba57384daa915dee132f",
      "https://github.com/beeminder/road/commit/fb41346e8526852c780e7b7eaa67ec9bb28ad779"],
"t": "2018-01-18",
}, { // ------------------------------------------------------------------------
"x": "Changing weight-loss roads to zero width (razor roads, as we call them) broke the rose-colored dots option, making it distinctly non-rosy. #bugfix",
"u": ["https://twitter.com/beemuvi/status/954522946545922048",
      "https://github.com/beeminder/beeminder/commit/7e9a1e22f128a7f14a52801c7ae57fd595f028f7"],
"t": "2018-01-19",
}, { // ------------------------------------------------------------------------
"x": "We now include the \"integery\" field in the output for the Goal object in the API. HT @adamwwolf (not just hat-tip; Adam actually implemented this for us!)",
"u": ["https://twitter.com/beemuvi/status/955603962966589440",
      "https://github.com/beeminder/beeminder/commit/aa44eb008099fdc5880ac130d3791189c52b87d3",
      "https://github.com/beeminder/beeminder/pull/142",
      "https://github.com/beeminder/apidocs/pull/6"],
"t": "2018-01-22",
}, { // ------------------------------------------------------------------------
"x": "New aggday method \"skatesum\" plots the min of the daily rate and the sum of the datapoints for that day. For super hardcore edge-skaters. HT @kyshoc",
"u": ["https://twitter.com/beemuvi/status/955604585770438656",
      "https://github.com/beeminder/beeminder/commit/e25e44b73578db5152cc4aeccb422d3187436f92"],
"t": "2018-01-22",
}, { // ------------------------------------------------------------------------
"x": "The automatic datapoint comments for Garmin autodata now use the user's timezone when saying \"Auto-entered via Garmin at...\". #mini",
"u": ["https://twitter.com/beemuvi/status/955966654483111937",
      "https://github.com/beeminder/beeminder/commit/4262c4d4dcad8e4e39cc8faf3aae4e39ae4e557d"],
"t": "2018-01-23",
}, { // ------------------------------------------------------------------------
"x": "Changed \"reset password token is invalid\" to \"that must be an old password reset link -- can you click 'forgot password' again to get a new one?\" HT @faireness",
"u": ["https://twitter.com/beemuvi/status/955967082197168128",
      "https://github.com/beeminder/beeminder/commit/4f69b88a2986687a5212cf797e045acc85e061b8"],
"d": "2018-01-23",
"t": "2018-01-23",
}, { // ------------------------------------------------------------------------
"n": 2542,
"x": "There's now a chat button at the bottom of every page on beeminder.com for giving us quick feedback or asking questions",
"u": ["https://twitter.com/beemuvi/status/956328871028187136",
      "https://github.com/beeminder/beeminder/commit/ff808376c7e5140356efe829c1553d1d1dcf540e"],
"d": "2018-01-24",
"t": "2018-01-24",
"c": "This is via Intercom.io currently; other options to consider at http://doc.bmndr.com/crm",
}, { // ------------------------------------------------------------------------
"x": "2 related #mini UVIs: removed the speech bubble on the help link; clarified that the beemium perk is hanging out in our dev chat, not just realtime support",
"u": ["https://twitter.com/beemuvi/status/956672602440794112",
      "https://github.com/beeminder/beeminder/commit/9f1013ffcc5bfa11a499573c7e00c70ae2ec1154",
      "https://github.com/beeminder/beeminder/commit/2aa583b276e4c045cedb5694426c570aba3bb449",
      "https://github.com/beeminder/beeminder/commit/7e3836bf94b70c9d38b3aa54b91ed327226bd9ec"],
"t": "2018-01-25",
}, { // ------------------------------------------------------------------------
"x": "Changed the html field names for password & password confirmation; turns out to be user-visible because otherwise we're not playing nice with password managers!",
"u": ["https://twitter.com/beemuvi/status/956692953212203008",
      "https://github.com/beeminder/beeminder/commit/ff613a5b28583515443631fbe7caaf00643df225"],
"d": "2018-01-25",
"t": "2018-01-25",
}, { // ------------------------------------------------------------------------
"x": "The password fields in account settings now have buttons to show the password you're typing, for occasions when you're not in enemy territory",
"u": ["https://twitter.com/beemuvi/status/957055429283999744",
      "https://github.com/beeminder/beeminder/commit/45a467c773b740896ff4fce7043a504646577be1"],
"d": "2018-01-26",
"t": "2018-01-26",
}, { // ------------------------------------------------------------------------
"x": "Improvement to that little but long-awaited UVI: just one button suffices for both password &amp; confirmation. Also better placeholder texts in account settings.",
"u": ["https://twitter.com/beemuvi/status/957055506815713280",
      "https://github.com/beeminder/beeminder/commit/e7085779de613f1f3059c6f2249bb09b721a1b4c",
      "https://github.com/beeminder/beeminder/commit/052cafefb82cfe137b9d75f2df2f95f9eb97bc59"],
"d": "2018-01-26",
"t": "2018-01-26",
"c": "Beelzebug Beezlesteen! Saved for later: Balaam, Hebrew devil of avarice",
}, { // ------------------------------------------------------------------------
"x": "Fussing with the password fields (see previous few UVIs) slightly broke the display of the pledge cap UI. Now fixed!",
"u": ["https://twitter.com/beemuvi/status/958140588527837184",
      "https://github.com/beeminder/beeminder/commit/4b0c6a0ac6019fa3b2e750641f4852b2b378be4d"],
"d": "2018-01-29",
"t": "2018-01-29",
}, { // ------------------------------------------------------------------------
"x": "Skatesum #bugfix (now always uses the final road rate) and updated the <a href=\"http://forum.beeminder.com/t/documentation-of-aggregation-methods-would-be-nice/549/4?u=dreev\">aggday docs</a> (such as they are)",
"u": ["https://twitter.com/beemuvi/status/958500837352812544",
      "https://github.com/beeminder/beeminder/commit/99ccf331e6a8772898c66d22e855597e83dd04f4"],
"t": "2018-01-30",
}, { // ------------------------------------------------------------------------
"x": "Fixed more redirects &amp; a banner link that didn't use the right anchor tag for Settings tabs (legacy redirects saved this from being *totally* broken) #bugfix",
"u": ["https://twitter.com/beemuvi/status/958859434712752128",
      "https://github.com/beeminder/beeminder/commit/c296589cfaaa5d002de8836bef715d7aa62bc88d"],
"t": "2018-01-31",
"c": "Still a little broken cuz it wouldn't go to the right Settings tab. Similar to UVI#2520.",
}, { // ------------------------------------------------------------------------
"x": "Added a couple links to http://beeminder.com/premium (like to our shiny new help page explaining what all the fancy goal types are) and fixed a typo there",
"u": ["https://twitter.com/beemuvi/status/958859922258632705",
      "https://github.com/beeminder/beeminder/commit/610a53e512381e42ee777c7ecfb17ffe9220c85d"],
"d": "2018-01-31",
"t": "2018-01-31",
"c": "Most of the credit to Chelsea for creating the amazing documenation of all the goal types!",
}, /* --------------------------------------------------------- end 2018jan */ ]

var batch2018feb = [{
"x": "Converted existing active exponential roads to be piecewise linear (and we're shirk-n-turking the remaining inactive ones when/if they're restarted). http://blog.beeminder.com/deathtoexp",
"u": "https://twitter.com/beemuvi/status/959195765796085760",
"t": "2018-02-01",
}, { // ------------------------------------------------------------------------
"x": "Fixed most if not all instances (including in Beedroid) of misleading rounding, like saying you have +1.5 left to do when it's really +1.50003 #bugfix",
"u": ["https://twitter.com/beemuvi/status/959226725056958465",
      "http://dreev.commits.to/limsum_conservarounded",
      "https://github.com/beeminder/beeminder/commit/a65665bebf062cf69afb521c1348b2265e0eeac1"],
"d": "2018-02-01",
"t": "2018-02-01",
"c": "Beebrain's limsum now does this correctly and limsum is what the Android app and parts of the website use",
}, { // ------------------------------------------------------------------------
"x": "Improvement to tags (UVI#2080): now a header shows what goals are being shown. Also mitigates confusion when redirected from eg Facebook w/ \"#...\" appended!",
"d": "2018-02-02",
"t": "2018-02-02",
"u": ["https://twitter.com/beemuvi/status/959589769578610689",
      "https://github.com/beeminder/beeminder/commit/a8c900975e22748e0974701ff6310e7b15488b99"],
"c": "Bee: I noticed that after logging in with Facebook I got redirected to my dashboard, but with some junk appended to the URL, like bmndr.com/b/#-, and so I spent a while confused because all my goals were seemingly missing. It took me a while to remember that tagging was a thing.",
}, { // ------------------------------------------------------------------------
"x": "Last UVI broke things: tags weren't case-insensitive like they're supposed to be & more critically, we briefly weren't showing tagged goals by default. #bugfix",
"u": ["https://twitter.com/beemuvi/status/960672752146329600",
      "https://github.com/beeminder/beeminder/commit/1aaa78e8a749c63029ab555d928130f330c1caf9",
      "https://github.com/beeminder/beeminder/commit/ed6d06a946dee6180dd0b1c28ffdd05ff3e212a5",
      "http://forum.beeminder.com/t/some-goals-not-showing-up-on-dashboard/3740"],
"d": "2018-02-02",
"t": "2018-02-05",
}, { // ------------------------------------------------------------------------
"x": "Added explanation about the Four Platonic Goal Types to the <a href=\"http://beeminder.com/api\">API docs</a> (and some prettifying of em dashes)",
"u": ["https://twitter.com/beemuvi/status/960674063642378240",
      "https://github.com/beeminder/apidocs/commit/5b8beb104c40468c02255b16217726310da7d93b",
      "https://github.com/beeminder/apidocs/commit/ac13b1a85da182db93fcec013e6e7f0c6714fe5d",
      "https://github.com/beeminder/apidocs/commit/6c65993bb9fe0fe3de2c2f22cc7299347ff3dd91",
      "https://github.com/beeminder/apidocs/commit/daa2750e5eead3e0915b76e8717c19f882cd6062",
      "https://github.com/beeminder/apidocs/commit/40dfff5d68dc6936946c1f4e6080beaf62a6d63e",
      "https://github.com/beeminder/apidocs/commit/0fa04377d81a8588c121086eb1127b624ace717a"],
"d": "2018-02-05",
"t": "2018-02-05",
}, { // ------------------------------------------------------------------------
"x": "Changed the footer link to the help docs and added a link to the help docs in an automatic Intercom message for new users",
"u": ["https://twitter.com/beemuvi/status/961039336719335424",
      "https://github.com/beeminder/beeminder/commit/8d626d3ce86f25768f3dd4751b880959f011d15c"],
"t": "2018-02-06",
}, { // ------------------------------------------------------------------------
"x": "Got the password show/hide button out of the tab index (it annoyed us, and conceivably a security concern if you accidentally hit show?) #mini",
"u": ["https://twitter.com/beemuvi/status/961352482839453696",
      "https://github.com/beeminder/beeminder/commit/4b57aba66ea5ea425c3b1071b68f4d71a2d3811f"],
"t": "2018-02-07",
}, { // ------------------------------------------------------------------------
"x": "Goal units / y-axis labels were allowed to be so long they looked hideous or broke the graph completely. Now they aren't! (And manually fixed existing ones!)",
"u": ["https://twitter.com/beemuvi/status/961361421664595968",
      "https://github.com/beeminder/beeminder/commit/93e51faeb3a978cbefebebd6f655f375c0331638"],
"t": "2018-02-07",
"t": "2018-02-07",
}, { // ------------------------------------------------------------------------
"x": "Going way back to UVI#548, we now *don't* <a href=\"http://doc.beeminder.com/slytherin404\">slytherin-401</a> for users that don't exist. A simple 404 suffices in that case; same for bmndr.com/nosuchuser/nosuchgoal",
"u": ["https://twitter.com/beemuvi/status/961366491449864192",
      "https://github.com/beeminder/beeminder/commit/b03f5413bde70c93039f63cf2979360ac90b507a"],
"d": "2018-02-07",
"t": "2018-02-07",
}, { // ------------------------------------------------------------------------
"x": "Cleaned up, reorganized, fixed the description of the autofetch callback in the API docs. Also post-deauth callback. And some other little fixes. HT @nitrogen",
"u": ["https://twitter.com/beemuvi/status/961488854778724352",
      "http://forum.beeminder.com/t/typos-in-api-documentation/3359/5?u=dreev",
      "https://github.com/beeminder/apidocs/commit/f6b2560c2a43097876456934d9b163d9bec9e591",
      "https://github.com/beeminder/apidocs/commit/58c801e2902cd81aca2d0341f2c4f895e543c930",
      "https://github.com/beeminder/apidocs/commit/0160e9e925a9829108f4a81e6a1e73b40a179109"],
"d": "2018-02-07",
"t": "2018-02-07",
}, { // ------------------------------------------------------------------------
"x": "UVI#2558 was just for goal creation. Also cap the y-axis label length (max 70 characters) when you edit it in Settings. #mini",
"u": ["https://twitter.com/beemuvi/status/962128417553498112",
      "https://github.com/beeminder/beeminder/commit/469112f932537a38825c263cdfc065db7aa12907"],
"d": "2018-02-09",
"t": "2018-02-09",
}, { // ------------------------------------------------------------------------
"x": "Fixed a broken link on the Habitica landing page and got rid of the Todoist example on the Zapier landing page since we have built-in Todoist integration now",
"u": ["https://twitter.com/beemuvi/status/963211122097602560",
      "https://github.com/beeminder/beeminder/commit/89ac96fa94c9ea10029bc4ef63c5f49260c1d507",
      "https://github.com/beeminder/beeminder/commit/0d84dd74134d7ddda0fe03f973f0170728192d00"],
"d": "2018-02-12",
"t": "2018-02-12",
}, { // ------------------------------------------------------------------------
"x": "Subtle #bugfix possibly only affecting Safari but double-clicking Submit could duplicate a datapoint. Related to UVI#314, UVI#646, & UVI#843.",
"u": ["https://twitter.com/beemuvi/status/963215622392827908",
      "https://github.com/beeminder/beeminder/commit/ebfdfb0c40a9278ebbcd7ec9eb5cc31f8ac025cd"],
"d": "2018-02-12",
"t": "2018-02-12",
"c": "The way the smart-submit tag thing is implemented it doesn't really work right with the AJAX form submissions because it relies on the page reload to re-enable the submit button",
}, { // ------------------------------------------------------------------------
"x": "Brought back the pencil and ex-out buttons for the road dial. Last known #redesign regression!",
"u": ["https://twitter.com/beemuvi/status/963577261864579072",
      "https://github.com/beeminder/beeminder/commit/28d34ac656c4c310b1df156aecc259cb75e5b573"],
"d": "2018-02-13",
"t": "2018-02-13",
"c": "Maybe losing the term \"road dial\" should count as a regression because some of really like that name. It's now just the \"Commit To\" section of the Commitment tab",
}, { // ------------------------------------------------------------------------
"x": "Changed the webcopy and added links to blog posts and fixed the cute contract image on our <a href=\"http://beeminder.com/rescuetime\">RescueTime integration landing page</a>",
"u": ["https://twitter.com/beemuvi/status/963940365001617408",
      "https://github.com/beeminder/beeminder/commit/d0034ef0e196bbbcab75bce710e6cc19d1aca39f",
      "https://github.com/beeminder/beeminder/commit/7ca0304c1615425711bf0a38cbd94ec53e8faf18"],
"d": "2018-02-14",
"t": "2018-02-14",
}, { // ------------------------------------------------------------------------
"x": "Fixed the link on our front page to our Todoist landing page. It was pointing straight to the goal creation wizard which complained if you weren't logged in.",
"u": ["https://twitter.com/beemuvi/status/963940429740654592",
      "https://github.com/beeminder/beeminder/commit/340279f744bf024e0293c1e8707f658f7ec851ca"],
"d": "2018-02-14",
"t": "2018-02-14",
}, { // ------------------------------------------------------------------------
"x": "Added back the original tooltips on the pencils & exes for the road dial and added the missing \"Goal Rate\" label (\"Commit To\" section of the Commitment tab)",
"u": ["https://twitter.com/beemuvi/status/963943776874983425",
      "https://github.com/beeminder/beeminder/commit/f808e1af6d7a92ea3211c2c4e21f2b26d9c1d4ee"],
"d": "2018-02-14",
"t": "2018-02-14",
}, { // ------------------------------------------------------------------------
"x": "Added back the fancy squiggly divider thing on landing pages and otherwise spaced things out better so, eg, the \"get started\" buttons are call-to-action-ier",
"u": ["https://twitter.com/beemuvi/status/964303751774314497",
      "https://github.com/beeminder/beeminder/commit/da5e67f6337babbba579247a413790f187dfcfa4",
      "https://github.com/beeminder/beeminder/commit/211f0ecd5230b80e2a885330c1aaa8b861801574"],
"d": "2018-02-15",
"t": "2018-02-15",
"c": "This was all squished together pretty hideously before. Also changed the button text from \"Get started\" to \"Start a goal\". Oh and made it much bigger.",
}, { // ------------------------------------------------------------------------
"x": "Embarrassing bug introduced along with UVI#2492: we started creating all new Fitbit goals with units set to kilograms (even non-weight ones). Now fixed! #bugfix",
"u": ["https://twitter.com/beemuvi/status/964661352777244672",
      "https://github.com/beeminder/beeminder/commit/3ca0cdee11c7353671b5b888249bfa7b78d5871e"],
"d": "2018-02-16",
"t": "2018-02-16",
"c": "Similar to UVI#1975 but that was just for weight loss goals where kilograms always at least were sensical",
}, { // ------------------------------------------------------------------------
"x": "Major philosophical <a href=\"http://forum.beeminder.com/t/http-www-beeminder-com-should-load-the-dashboard-for-logged-in-users/2626/8?u=dreev\">concession</a> by the founders who are very persnickety wrt concept of URLs: front page finally redirects to your dashboard if you're logged in",
"f": true,
"u": ["https://twitter.com/beemuvi/status/965749785801121794",
      "http://forum.beeminder.com/t/http-www-beeminder-com-should-load-the-dashboard-for-logged-in-users/2626/8?u=dreev",
      "https://github.com/beeminder/beeminder/commit/487f56de0d07427f4b69fed0416660ab7f8288e6"],
"d": "2018-02-19",
"t": "2018-02-19",
"c": "See forum link for straw poll and spec of a way to do this more correctly",
}, { // ------------------------------------------------------------------------
"x": "Finally added some nice images for our Runkeeper landing page, and updated the webcopy a bit. http://beeminder.com/runkeeper",
"u": ["https://twitter.com/beemuvi/status/966111311858778113",
      "https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3"],
"t": "2018-02-20",
}, { // ------------------------------------------------------------------------
"x": "And same for our Draft landing page. http://beeminder.com/draft (Also updated the sample graphs for do-more style autodata integrations)",
"u": ["https://twitter.com/beemuvi/status/966111921022779392",
      "https://github.com/beeminder/beeminder/commit/91590c4585ddbe4c324d3b5483d6be0f2375c62a",
      "https://github.com/beeminder/beeminder/commit/5071206329c15531fee77bc4e5cf234c9af23d9c"],
"t": "2018-02-20",
}, { // ------------------------------------------------------------------------
"x": "The website is now mobile-friendly! (That's kinda the whole UVI but, being months of work by <a href=\"https://andybrett.com/\">Andy Brett</a>, we're keen to milk it for as many minis as possible...)",
"f": true,
"u": ["https://twitter.com/beemuvi/status/966477374542901248",
      "https://github.com/beeminder/beeminder/pull/145"],
"d": "2018-02-21",
"t": "2018-02-21",
"c": "By Andy",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "In addition to not being hideously hard to use on a small screen like your phone, the website takes much better advantage of wider screens",
"u": ["https://twitter.com/beemuvi/status/966478004598616064"],
"d": "2018-02-21",
"t": "2018-02-21",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Specifically, advanced data entry is less cramped, you can see more information on your dashboard, and same for the Data tab",
"u": ["https://twitter.com/beemuvi/status/966478519436951552"],
"d": "2018-02-21",
"t": "2018-02-21",
"c": "In general: less wasted space in the margins!",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "That's already rightfully a ton of separate UVIs (221 commits &amp; 130 files changed!) but we'll wrap it up by mentioning the myriad layout tweaks",
"u": ["https://twitter.com/beemuvi/status/966479528162770944"],
"d": "2018-02-21",
"t": "2018-02-21",
"c": "I guess the other way we'll be milking this for more UVIs is logging all the fixes for the bugs that this introduced...",
}, { // ------------------------------------------------------------------------
"x": "The todayta checkmarks (as we call them -- the checkmarks that tell you data has been entered for that goal today) are much less fuzzy. #mini",
"u": ["https://twitter.com/beemuvi/status/968286263060045824",
      "https://github.com/beeminder/beeminder/commit/b7650938c579469575bc5a1218acbd8a9df887d1"],
"d": "2018-02-21",
"t": "2018-02-26",
"c": "Octicons! By Andy. Part of mobile friendliness redesign.",
}, { // ------------------------------------------------------------------------
"x": "The pledge modal has an X to close it now. (On big screens you could click outside the modal to dismiss it but on small screens you really need that X!)",
"u": ["https://twitter.com/beemuvi/status/968648876382023681",
      "https://github.com/beeminder/beeminder/commit/2c8d238173dc36ab3410c20da82ac92a8691bd57"],
"d": "2018-02-21",
"t": "2018-02-27",
"c": "By Andy. Part of mobile friendliness redesign.",
}, { // ------------------------------------------------------------------------
"x": "The pencil to edit the goal description is no longer placed some random distance to the right of the text it lets you edit. #bugfix",
"u": ["https://twitter.com/beemuvi/status/968649548628344832",
      "https://github.com/beeminder/beeminder/commit/d2b18e63f517adbe847e11dec7fd5620a6e35ea8"],
"d": "2018-02-21",
"t": "2018-02-27",
"c": "By Andy. Part of mobile friendliness redesign.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug that made the Account Details tab of Account Settings show up blank when you first clicked on it. #bugfix",
"u": ["https://twitter.com/beemuvi/status/969011166214217728",
      "https://github.com/beeminder/beeminder/commit/9dadf90c53c7867f107f770edcfbd26d3b448b78"],
"d": "2018-02-21",
"t": "2018-02-28",
"c": "By Andy. Sounds similar to UVI#2223 but not sure if there's any connection",
}, /* --------------------------------------------------------- end 2018feb */ ]

var batch2018mar = [{
"x": "We were briefly missing the +/- buttons after each row in the road matrix that let you remove or insert a row after the mobile-friendly deploy. #bugfix",
"u": ["https://twitter.com/beemuvi/status/969374264041259008",
      "https://github.com/beeminder/beeminder/commit/455edcdde94d6efd756cfb7e41d89e9c8f065c9b"],
"d": "2018-02-21",
"t": "2018-03-01",
"c": "By Andy. One of shockingly few regressions so far!",
}, { // ------------------------------------------------------------------------
"x": "Mobile-friendliness means the graphs resize themselves to fit your screen. But letting it grow arbitrarily large looked ugly and pixelated, so we capped it!",
"u": ["https://twitter.com/beemuvi/status/969375568901718016",
      "http://forum.beeminder.com/t/testing-a-mobile-friendly-beeminder/3720/51?u=dreev",
      "https://github.com/beeminder/beeminder/commit/20c0d62d653dfdd49afc4e6650424b73ecdf5fdf"],
"d": "2018-02-22",
"t": "2018-03-01",
"c": "By Andy. Capped it as in set a max width of like 1000 pixels",
}, { // ------------------------------------------------------------------------
"x": "Fixed some layout bugs in the custom goal settings section of the goal settings tab. Mostly a regression introduced by the mobile-friendly redesign. #bugfix",
"u": ["https://twitter.com/beemuvi/status/969737906578321408",
      "https://github.com/beeminder/beeminder/commit/db3b0fd141a32c988e6ebeb6a679b82dd69a397e"],
"d": "2018-02-26",
"t": "2018-03-02",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "Full-width Account Settings, fixed an alignment problem w/ beeminder.com/reminders, &amp; fixed an alignment problem w/ the \"add a credit card\" button",
"u": ["https://twitter.com/beemuvi/status/970821384858472450",
      "https://github.com/beeminder/beeminder/commit/5cdc1cad539f9607920c92858a6e76b59247df1d",
      "https://github.com/beeminder/beeminder/commit/8034338c58efe6c08bd19405957cc4e462883dcb",
      "https://github.com/beeminder/beeminder/issues/144"],
"t": "2018-03-05",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "If you removed the authorization for us to read your Todoist data we'd give a 500-error when u tried to load the goal page. Now we give a helpful error. #bugfix",
"u": ["https://twitter.com/beemuvi/status/971186404511264768",
      "https://github.com/beeminder/beeminder/commit/0c0789358785304c5b7f0bf9a1052c79addce533"],
"d": "2018-02-26",
"t": "2018-03-06",
"c": "We try to pull in your full list of projects etc from Todoist for the goal settings, so if you de-authed us, that would fail ignominiously",
}, { // ------------------------------------------------------------------------
"x": "Fixed a rare 500-error for very old users that happened when trying to show the new Intercom chat widget. #bugfix",
"u": ["https://twitter.com/beemuvi/status/971187856713461760",
      "https://github.com/beeminder/beeminder/commit/5309a407ddc5730fcce037a1fe1dff01de5392ce"],
"d": "2018-02-26",
"t": "2018-03-06",
"c": "At least one very old user did not have a \"lastactive\" set, and that's one of the fields-of-interest that we pass on to the Intercom integration so we can see that info about the user in Intercom's dossier / interface",
}, { // ------------------------------------------------------------------------
"x": "2 related #bugfix's w/ goal description above the graph: you couldn't click to edit it again after blanking it out, & similar for clicking away w/out editing",
"u": ["https://twitter.com/beemuvi/status/971552647625895936",
      "https://github.com/beeminder/beeminder/issues/148"],
"d": "2018-02-27",
"t": "2018-03-07",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "Added reassuring copy when fixing failed payment info: \"Don't worry &mdash; you'll have a chance to review old charges and cancel any that aren't legit\". HT Kim G",
"u": ["https://twitter.com/beemuvi/status/971899536179281921",
      "https://github.com/beeminder/beeminder/commit/163c4cface072469b0479adb410534360e320bf1"],
"t": "2018-03-08",
}, { // ------------------------------------------------------------------------
"x": "In URLminder settings, the width of the text area to paste URLs being minded was waaay too narrow. Now it's maybe only moderately too narrow. #bugfix",
"u": ["https://twitter.com/beemuvi/status/971900069157920769",
      "https://github.com/beeminder/beeminder/issues/154"],
"t": "2018-03-08",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "Fixed the off-center checkmarks in some radio buttons, and fixed a couple wastefully hi-res autodata logos. #mini",
"u": ["https://twitter.com/beemuvi/status/972255353990623232",
      "https://github.com/beeminder/beeminder/commit/662d6e27109bdff6287a4f9a749b0946269183ef",
      "https://github.com/beeminder/beeminder/commit/5efba9045a92e8545bc0b6ae1b727cbd408606db",
      "https://github.com/beeminder/beeminder/issues/151"],
"t": "2018-03-09",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a yellow-on-white link on the commit-wall page that was supposed to be a button #bugfix (#regression from mobile-friendliness redesign)",
"u": ["https://twitter.com/beemuvi/status/972255789493530625",
      "https://github.com/beeminder/beeminder/issues/155"],
"t": "2018-03-09",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "Fixed layout bugs in http://beeminder.com/money like the header for the image being orphaned in the preceding paragraph and other tweaks. #bugfix",
"u": ["https://twitter.com/beemuvi/status/973710090451628033",
      "https://github.com/beeminder/beeminder/issues/157"],
"t": "2018-03-13",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "The \"Sign up\" buttons on beeminder.com/premium when not logged in were no-ops. Used to be a modal but it never worked right so now it's just a link. #bugfix",
"u": ["https://twitter.com/beemuvi/status/974037851376566272",
      "https://github.com/beeminder/beeminder/issues/163"],
"d": "2018-03-06",
"t": "2018-03-14",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "The buzzing infinibee (depending on the size of your browser window) was all distorted; also fixed ugly overlap of graph w/ goal description edit field. #bugfix",
"u": ["https://twitter.com/beemuvi/status/974039668780974080",
      "https://github.com/beeminder/beeminder/issues/153",
      "https://github.com/beeminder/beeminder/issues/152"],
"t": "2018-03-14",
"c": "By Andy. Mobile-friendliness regression.",
}, { // ------------------------------------------------------------------------
"x": "Not sure when we broke this but we were saying, eg, \"you'll be charged 16 month\" instead of \"$16 / month\" when trying to sign up for or upgrade a premium plan",
"u": ["https://twitter.com/beemuvi/status/974432812513165312",
      "https://github.com/beeminder/beeminder/issues/162"],
"t": "2018-03-15",
"c": "By Andy",
}, { // ------------------------------------------------------------------------
"x": "Now we don't show the so-called deadbeat banner (when there's a problem with your payment info) when you're actually on the payments page (presumably to fix it)",
"u": ["https://twitter.com/beemuvi/status/974743879613214720",
      "https://github.com/beeminder/beeminder/commit/e9263b92f4183471b8af2e034a11457865e51430?w=1",
      "https://github.com/beeminder/beeminder/commit/d25f09fd150145551a0a2946ec1ea833cb01814f"],
"t": "2018-03-16",
"c": "By Andy",
}, { // ------------------------------------------------------------------------
"x": "Improved the \"you just created a new goal\" email we send, eg, now include your pledge cap and the language now longer presumes you're a newbee. HT Robin Ryder",
"u": ["https://twitter.com/beemuvi/status/975877510473728000",
      "https://github.com/beeminder/beeminder/commit/a6468b67763cb9c8edafe902304bc8446a0d1fcf"],
"t": "2018-03-19",
}, { // ------------------------------------------------------------------------
"f": true,
"n": 2598,
"x": "(+) Beeminder Android App version 2.6.2!",
"u": ["https://twitter.com/beemuvi/status/976239399057858560"],
"d": "2018-03-08",
"t": "2018-03-20",
"c": "By Adam Wolf. First public Beedroid release in the Adam era.",
}, { // ------------------------------------------------------------------------
"n": 2598,
"s": true,
"x": "New feature: Play/pause buttons in the notifications for running timers",
"u": ["https://twitter.com/beemuvi/status/976239570030219264"],
"d": "2018-03-08",
"t": "2018-03-20",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Also removed username from the goal details if there is only one account signed in",
"d": "2018-03-08",
"t": "2018-03-20",
"u": ["https://twitter.com/beemuvi/status/976239570030219264"],
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Various other UI tweaks and fixes, like getting rid of the backburner setting since that doesn't exist since UVI#2082",
"d": "2018-03-08",
"t": "2018-03-20",
"u": ["https://twitter.com/beemuvi/status/976239704570933248"],
}, { // ------------------------------------------------------------------------
"x": "Fixed a layout bug in the header of the forum (was messed up on mobile), and added a pointer to the colon shortcut in the help docs",
"u": ["https://twitter.com/beemuvi/status/976952268917370881",
      "http://forum.beeminder.com/t/layout-bug-in-forum-header-on-mobile/3803/1",
      "https://help.beeminder.com/article/62-android-app"],
"d": "2018-03-13",
"t": "2018-03-22",
"c": "Per UVI#1427 we don't get to count improvements to things like the forum where we don't have to lift a finger, but in this case we did have to lift a finger",
}, { // ------------------------------------------------------------------------
"x": "On the payments page, we added whitespace between credit card &amp; PayPal so it's more obvious which you're selecting when you click the radio button",
"u": ["https://twitter.com/beemuvi/status/977307178406051841",
      "https://github.com/beeminder/beeminder/issues/169"],
"d": "2018-03-23",
"t": "2018-03-23",
"c": "Although if your screen was wide enough it was a non-issue",
}, { // ------------------------------------------------------------------------
"x": "Added \"(preferred)\" after \"Credit Card\", \"if you must\" to PayPal, &amp; layout #bugfix w/ the PayPal & CC sections running together if you only had PayPal added",
"u": ["https://twitter.com/beemuvi/status/977307349416214528",
      "https://github.com/beeminder/beeminder/commit/534be380d845ff69ed270c35e9f696dc4401f1b5"],
"d": "2018-03-23",
"t": "2018-03-23",
}, /* --------------------------------------------------------- end 2018mar */ ]

var batch2018apr = [{
"x": "We no longer let you blithely turn on SMS reminders in goal or reminder settings if you haven't actually provided a phone number",
"u": ["https://twitter.com/beemuvi/status/981316372398419969",
      "https://github.com/beeminder/beeminder/issues/78"],
"t": "2018-04-03",
"c": "Partially done Feb 27 by Andy, finished by Bee on Apr 3",
}, { // ------------------------------------------------------------------------
"x": "We now link the reminders page header \"SMS\" to your account settings where you can add a phone number",
"u": ["https://twitter.com/beemuvi/status/981316516422475776",
      "https://github.com/beeminder/beeminder/commit/278957aa41da711d97fe5a1dee821578c3bcff79"],
"t": "2018-04-03",
}, { // ------------------------------------------------------------------------
"x": "Now on both goal settings and reminder settings: handy tooltips on the disabled checkboxes explain why they are disabled",
"u": ["https://twitter.com/beemuvi/status/981316663227301888",
      "https://github.com/beeminder/beeminder/commit/278957aa41da711d97fe5a1dee821578c3bcff79"],
"t": "2018-04-03",
"c": "The reminder settings page is also known as the fwomp page or beeminder.com/reminders",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2018apr */ ]


var staged = [ { // note: sub-UVIs not allowed here in staging
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]

/*
METASTAGED: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
UNVERIFIED/UNINTENTIONAL:
Vimium users can now jump to the goals on the dashboard with hotkeys.
Actually we have no idea why this got better so we probably can't use it without corroboration that this is a genuine improvement! something about octicons apparently?
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: other missing X's on modals?
X on backcharge modal
https://github.com/beeminder/beeminder/commit/00b9bb2fd5f92067d471f4afa1c5bdd5209f102a
}, { // ------------------------------------------------------------------------
MINIs:
1. new tagline "Beeminder: Seize the day after tomorrow" HT @pennockd
2. dyang's picture: https://github.com/beeminder/beeminder/commit/27fb1d093bdfdd4ace3ad411cea75bb82aa30714
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TODO: general mercy!
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
and a max-height for the landing page images
same commit url as the one above about runkeeper:
https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
CANDIDATES: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
IDEAS: -------10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
1. better beemail unsubscribe with downpopped unsubscribe-all option [oh gawd yes, but also kind of can of wormsy and maybe needs a spec?]
2. save buttons ought to be disabled when there's nothing to save. ~i think we used to do that in old.bmndr but maybe not.~ [we did not]
3. Louis: Need open-ended goals. Defaulting to +10yr looks like a bug.
4. Louis: Road dial without exes and pencils feels frustratingly broken when you don't know the rhyme or reason for how the grayed-out field changes. Important redesign-regression.
5. Louis: Even aside from that, dealing with the akrasia horizon constraint is opaque and frustrating. Dumbing down the full road editor can really backfire.
6. http://forum.beeminder.com/t/weight-loss-goal-help/3604/3?u=dreev
7. link to help.beeminder.com in the navbar? i guess it's already prominent in the footer, but lawrence said he couldn't find it when he hunted for it [I think we have to swap with something that's currently there. we're pretty much at capacity for links to thing sin the header there. and in fact, the fewer things we have there, the more likely someone is to go looking and find it in the footer]
8. "your login integration with Google seems to be broken on Desktop as well. It asks for Email-read-access every time I log in" #sadness (i just confirmed that this seems to be new sadness) [this probably involves lots of banging my head into walls and being frustrated by documentation (or the lack thereof)]
9. POTENTIAL HUGE BUG: we might not be getting email addresses from people who sign up with facebook oauth.
10. road dial runits errors
11. abslnw conversion for deathtonoisy means various UVIs like no more stupidly conservatively saying safe days to centerline because the stupid roadwidth could stupidly change
12. bug report: in newbee data entry, enter a dummy value and hit submit a bunch of times in rapid succession. it creates dups! expected: submit button disabled after first press until the submission is processed.
13. in account settings, add a blurb for how long you've been beeminding
14. MINIS WITH AUTODATA LANDING PAGES: (compare how much nicer dyang's original version looked: old.beeminder.com/gmailzero )
WITHINGS: 
  0. "withings" -> "nokia (formerly withings)"
  1. landing page should link to these:
       http://help.beeminder.com/article/90-nokia-health-withings
       https://blog.health.nokia.com/blog/2012/05/04/withings-partner-spotlight-beeminder-2/
  2. wrong contract image (can use the generic one we made for todoist though i don't like that font as much)
TWITTER:
  1. landing page missing link to blog post: 
       blog.beeminder.com/twitter
TRELLO:
  0. white background on header image for trellominder looks especially horrible
  1. wrong contract image
  2. missing link to blog post: 
       https://blog.beeminder.com/trello/
  3. title text on header image: "AKA trellominder.com" (mainly just a way to have "trellominder.com" be git-greppable somewhere)
GITHUB:
  1. let's reclaim and disallow the "github" username and make it redirect to beeminder.com/gitminder (sez'd the person on feb 13 a warning; no reply; clearly long gone)
  2. title text on header image: "AKA gitminder.com"
DUOLINGO:
  1. title text on header image: "AKA duominder.com"
GMAILZERO:
  1. title text on header image: "AKA gmailzero.com"
IFTTT:
  1. title text on header image: "AKA ifthisMINDthat.com"
ZAPIER:
  1. title text on header image: "AKA zapminder.com"
SKRITTER:
  1. missing link to these:
       https://blog.beeminder.com/skritter/
       skritter's post except i can't find it anymore
URLMINDER:
  1. why isn't it linked from the front page?
  2. title text somewhere: "AKA scribeminder.com"
RUNKEEPER:
  1. needs generic contract image (use the Misfit one)
  2. and other images
JAWBONEUP:
  1. wrong contract image -- use the Misfit one
  2. the UP logo has ugly bits of white around it
MISFIT:
  0. (NOTE TO SELVES: contract image is a good generic one for fitness-related integrations. refactor the names so that's obvious in the code?)
  1. "Moveit" looks unintentional
SLEEPASANDROID:
  1. missing footnote
  2. missing link to blog post or help doc
HABITICA:
  1. link to habitica's post about us as well as our post
COMPLICE:
  1. paragraphs of centered text look horrible (old.beeminder.com/complice looks much better)
DRAFT:
  1. missing images
FITBIT:
  1. white background on the logo looks bad
  2. lost the link to the blog post that old.beeminder.com/fitbit has:
       https://blog.beeminder.com/fitbit/
  3. commented out in the code: "Can't use our domain fitbitminder.com because of Fitbit's overzealous lawyers"
EPSON:
  1. beeminder logo is way too small
  2. no link to blog post:
       https://blog.beeminder.com/epson/
GARMIN:
  1. lost the link to the blog post:
       https://blog.beeminder.com/garmin/
SLACK:
  1. missing from front page gallery -- should link to https://www.beeminder.com/addtoslack
  2. title text on header image: "AKA slackminder.com"
APPLEHEALTH/TWITTER:
  1. this and twitter are the only logos with no words. twitter is arguably obvious enough (though worth having the word "twitter" there too). apple health is just a stupid heart in a box that means nothing to anyone.
  [twitter has "brand guidelines" where they specifically forbid you from writing the text "twitter" with the logo... Apple almost certainly has similar. but I agree that the heart in a white box is particularly stupid, plus the white box blends into the background and so it's extra stupid]


MINI: fixed typo and some copy edits in the the Slack bot help responses [TODO for dreeves]

EASY: https://github.com/beeminder/beeminder/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AUVI+label%3APEA+
HARD: https://github.com/beeminder/beeminder/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AUVI+-label%3APEA+

TOO LATE / TOO LAME
9. fixed some (most? many?) of the thing where flash banner shows up again after you leave current page and go to another page [maybe this mostly only happens for admins?]
*/

/* CHECKLIST FOR TWEETING UVIS

*/