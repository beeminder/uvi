batches['2017jan'] = [{
//"n": 2157,
"x": "Fixed a case of showing the wrong new pledge amount in the legit check email if you had auto-increasing pledges turned off. #bugfix",
"u": ["https://twitter.com/beemuvi/status/816448028806516741",
      "https://github.com/beeminder/beeminder/commit/720f3f05a9a6608171349cc449521798ba6b89e8",
      "https://trello.com/c/aB2lyvJa/726-pledge-cap-no-autoincrease"],
"t": "2017-01-04 00:55:53 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed checkbox that was acting like expand/collapse instead of a checkbox for whether to auto-increase pledges when you derail. mini #bugfix",
"u": "https://twitter.com/beemuvi/status/816805335851618304",
"t": "2017-01-05 00:35:42 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mini #bugfix w/ pointlessly clickable things when viewing other people's graphs. Also cleaned up CSS bugs on some landing pages.",
"u": "https://twitter.com/beemuvi/status/817171195246223360",
"t": "2017-01-06 00:49:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "If you set a default deadline we were accidentally applying that to autodata goals that don't support arbitrary deadlines. #bugfix",
"u": "https://twitter.com/beemuvi/status/817535853194948608",
"t": "2017-01-07 00:58:31 +0000",
}, { // ------------------------------------------------------------------------
"x": "Avoided a bunch of confusion by nixing the instant-archive buttons in the dashboard for frozen/completed goals; all done from goal pages now",
"u": "https://twitter.com/beemuvi/status/817791742523019264",
"t": "2017-01-07 17:55:19 +0000",
}, { // ------------------------------------------------------------------------
"x": "Don't mention \"safe days\" in bot email subject when it exceeds days till goal end date. Also iOS notifications now make the default sound.",
"u": "https://twitter.com/beemuvi/status/817793892049240064",
"t": "2017-01-07 18:03:52 +0000",
}, { // ------------------------------------------------------------------------
"x": "Removed now-meaningless backburner line in reminder settings, and brought back all autodata settings that got lost in the redesign",
"u": "https://twitter.com/beemuvi/status/822600228209643520",
"t": "2017-01-21 00:22:32 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mini UVIs: We now refresh graph after updating weekends-off, higher-res Duolingo logo, more obvious link to change goal date / goal total",
"u": "https://twitter.com/beemuvi/status/822944514016849924",
"t": "2017-01-21 23:10:36 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added button on goal page to archive frozen goals. Bonus #mini UVI: datapoint value is cleared when you submit it on dashboard.",
"u": "https://twitter.com/beemuvi/status/823321895609110528",
"t": "2017-01-23 00:10:11 +0000",
}, { // ------------------------------------------------------------------------
"x": "Pledge stepper now indicates when it hits its limit (eg, you can't pledge more than $2430). #mini",
"u": "https://twitter.com/beemuvi/status/823690513320591362",
"t": "2017-01-24 00:34:56 +0000",
}, { // ------------------------------------------------------------------------
"x": "One more thing we broke in the redesign: we weren't allowing a negative rate for Fitbit net calories goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/824056999327342592",
"t": "2017-01-25 00:51:13 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now use your chosen timezone in your Beeminder settings for showing \"today\"/\"yesterday\", not whatever your browser thinks. #bugfix",
"u": "https://twitter.com/beemuvi/status/824416736787124224",
"t": "2017-01-26 00:40:41 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500 error for the case of opening the pledge popup for a goal (maybe just on archived goals?) with no credit card on file. #bugfix",
"u": "https://twitter.com/beemuvi/status/824775719490170880",
"t": "2017-01-27 00:27:09 +0000",
}, { // ------------------------------------------------------------------------
"x": "UI improvement: x-max can't be in the past and x-min can't be in the future. #mini",
"u": "https://twitter.com/beemuvi/status/825137206654230528",
"t": "2017-01-28 00:23:35 +0000",
}, { // ------------------------------------------------------------------------
"x": "You can now change the default GmailZero query when creating GmailZero goals, instead of having to go digging in settings afterwards.",
"u": "https://twitter.com/beemuvi/status/825137922743562240",
"t": "2017-01-28 00:26:25 +0000",
}, { // ------------------------------------------------------------------------
"x": "On /archived it says \"No archived goals!\" if you have none. And on the front page, link to autodata landing pages, not goal creation. #mini",
"u": ["https://twitter.com/beemuvi/status/825144702127058945",
      "https://github.com/beeminder/beeminder/issues/71"],
"t": "2017-01-28 00:53:22 +0000",
}, { // ------------------------------------------------------------------------
"x": "This counts as a UVI but we're not yet happy with the interaction between goal units & things like y-axis label: http://forum.beeminder.com/t/y-axis-label-didnt-update-in-graph-after-changed-in-settings/2652",
"u": ["https://twitter.com/beemuvi/status/826231486420377600",
      "https://github.com/beeminder/beeminder/issues/88"],
"t": "2017-01-31 00:51:51 +0000",
}, { // ------------------------------------------------------------------------
"x": "We're now consistent for all autodata goal creation in giving you the option to start with an arbitrary amount of safety buffer",
"u": "https://twitter.com/beemuvi/status/826594990264512512",
"t": "2017-02-01 00:56:17 +0000",
} /* ---------------------------------------------------------- end 2017jan */ ]

batches['2017feb'] = [{
"f": true,
"x": "We're obviously very behind on UVI tweets because we're just getting to our official Todoist integration! http://blog.beeminder.com/todoist/",
"u": "https://twitter.com/beemuvi/status/826950360493236224",
"t": "2017-02-02 00:28:24 +0000",
}, { // ------------------------------------------------------------------------
"x": "All Fitbit goals were getting created as Do More (or failing altogether?) for 2 months after we launched the redesign. #bugfix",
"u": "https://twitter.com/beemuvi/status/827321931829383168",
"t": "2017-02-03 01:04:54 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a couple UI bugs with changing goalnames (&amp; #bugfix w/ using numbers as goalnames). http://forum.beeminder.com/t/how-to-change-goal-url/2818",
"u": "https://twitter.com/beemuvi/status/827650491605671936",
"t": "2017-02-03 22:50:28 +0000",
}, { // ------------------------------------------------------------------------
"x": "Another embarrassing thing we broke w/ redesign: If you said \"hide y-axis\" for a while we weren't also hiding stats that leaked that info.",
"u": "https://twitter.com/beemuvi/status/827651020880699393",
"t": "2017-02-03 22:52:35 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now show the expanded road dial (w/ end date &amp; end value as well as rate) if the goal is ending within 30 days (too magical?)",
"u": "https://twitter.com/beemuvi/status/827651474821767168",
"t": "2017-02-03 22:54:23 +0000",
}, { // ------------------------------------------------------------------------
"x": "Gitminder goal creation now handles the case revoked Beeminder's authorization on GitHub (&amp; maybe other cases of bad GitHub credentials)",
"u": "https://twitter.com/beemuvi/status/828715293107064833",
"t": "2017-02-06 21:21:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "More tweaks to error banners so that important ones don't get obscured. #mini",
"u": "https://twitter.com/beemuvi/status/829126787581874177",
"t": "2017-02-08 00:36:45 +0000",
}, { // ------------------------------------------------------------------------
"x": "UI tweak in Gitminder goal creation: automatically switch the radio button to specific repository if you start to type one. #mini",
"u": "https://twitter.com/beemuvi/status/829126883224625152",
"t": "2017-02-08 00:37:08 +0000",
}, { // ------------------------------------------------------------------------
"x": "More #mini UVIs: nixed superfluous logged in/out banners, fixed links to create goals on <a href=\"http://ifthismindthat.com\">ifthismindthat.com</a> and <a href=\"http://zapminder.com\">zapminder.com</a>",
"u": "https://twitter.com/beemuvi/status/829491678767570947",
"t": "2017-02-09 00:46:42 +0000",
}, { // ------------------------------------------------------------------------
"x": "We used to magically re-sort the dashboard when you entered data but that turned out to be a bad idea; now you can click \"DEADLINE\" to do so",
"u": "https://twitter.com/beemuvi/status/829847215900233728",
"t": "2017-02-10 00:19:28 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mini #bugfix / UI-polish with expanding/collapsing the goals: if you do it to all of them one by one you can still undo w/ 1 click in header",
"u": "https://twitter.com/beemuvi/status/829847252495536128",
"t": "2017-02-10 00:19:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "Previous UVI also fixed a nasty focus bug when entering data in succession in dashboard. Also related: we killed reverse sorting.",
"u": "https://twitter.com/beemuvi/status/830210568057270273",
"t": "2017-02-11 00:23:18 +0000",
}, { // ------------------------------------------------------------------------
"x": "Custom fine print for goals is publicly visible again and we allow hyperlinks. http://forum.beeminder.com/t/link-in-fine-print/2976/1",
"u": "https://twitter.com/beemuvi/status/830212454017748992",
"t": "2017-02-11 00:30:48 +0000",
}, { // ------------------------------------------------------------------------
"x": "We can now link directly to specific tabs in account settings, eg, https://www.beeminder.com/settings/account#account-details",
"u": "https://twitter.com/beemuvi/status/831303765802094592",
"t": "2017-02-14 00:47:17 +0000",
}, { // ------------------------------------------------------------------------
"x": "Used to be that every time we autoratched (automatically capping safety buffer) the graph would get stuck w/ buzzy bee for 5-10min. #bugfix",
"u": "https://twitter.com/beemuvi/status/831303848991956992",
"t": "2017-02-14 00:47:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "Thing we broke like a year ago: when fetching your initial GmailZero count, if it's too big to fetch, we once again tell you that. #bugfix",
"u": "https://twitter.com/beemuvi/status/831640403468120064",
"t": "2017-02-14 23:04:57 +0000",
}, { // ------------------------------------------------------------------------
"x": "API #bugfix: the requestid param only worked as advertised for creating single datapoints, not create_all. HT John Swanson",
"u": "https://twitter.com/beemuvi/status/831642893920018432",
"t": "2017-02-14 23:14:51 +0000",
"c": "When creating a datapoint via API, sending requestid param is supposed to make it act like an UPSERT, but this was broken in the create_all (multi-create) endpoint. so it would still work to make sure you weren't creating duplicate datapoints, but it wouldn't update an existing datapoint if you passed in updated parameters with the same requestid",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the URLminder magic that lets us fetch the plaintext version of a Google doc. https://www.beeminder.com/nanowrimo #bugfix",
"u": "https://twitter.com/beemuvi/status/832032295703830529",
"t": "2017-02-16 01:02:12 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug that meant we wouldn't show you even landing pages of some autodata integrations if you hadn't entered a credit card. #bugfix",
"u": "https://twitter.com/beemuvi/status/832032343070085121",
"t": "2017-02-16 01:02:23 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We added \"make private\" to \"new goal settings\" in account settings if you want all new goals to default to private. http://forum.beeminder.com/t/please-let-me-default-new-goals-to-private/2880",
"u": "https://twitter.com/beemuvi/status/832305201717530624",
"t": "2017-02-16 19:06:38 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "For goals denominated in hours we now display amounts in HH:MM in most places on the website.",
"u": "https://twitter.com/beemuvi/status/832306668511731713",
"t": "2017-02-16 19:12:27 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a nasty bug w/ road dial where we'd mess up the last segment of your road when you changed the rate units (daily/weekly/etc). #bugfix",
"u": "https://twitter.com/beemuvi/status/832319327185408000",
"t": "2017-02-16 20:02:46 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500-error involving displaying bare-mins as HH:MM for ended goals. Also stopped showing HH:MM:SS in recent data. #bugfix",
"u": "https://twitter.com/beemuvi/status/832319389248610305",
"t": "2017-02-16 20:03:00 +0000",
}, { // ------------------------------------------------------------------------
"x": "Somewhat smarter rounding and don't show integers as X.00. And another #mini #bugfix with sometimes showing \"++HH:MM\" instead of \"+HH:MM\"",
"u": "https://twitter.com/beemuvi/status/832320549879631872",
"t": "2017-02-16 20:07:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "A bunch of small improvements to our datapoint format checker. You can see all the crazy example parsings at http://d.glitch.me",
"u": "https://twitter.com/beemuvi/status/832321317076504577",
"t": "2017-02-16 20:10:40 +0000",
}, { // ------------------------------------------------------------------------
"x": "Made the navigation header not annoyingly large. Also: tweaks to <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a>: Capitalize \"Hours\", make our titles fit on 1 line.",
"u": "https://twitter.com/beemuvi/status/834201015926681600",
"t": "2017-02-22 00:39:55 +0000",
}, { // ------------------------------------------------------------------------
"x": "More #mini UVIs: shrunk annoyingly large navigation header, made archived gallery show 4 across, link to archive in gallery view.",
"u": "https://twitter.com/beemuvi/status/834204402223181824",
"t": "2017-02-22 00:53:22 +0000",
}, { // ------------------------------------------------------------------------
"x": "And a super #mini one: made the pledge box not have an \"i'm a button\" shadow if you're looking at someone else's goal so it's not clickable",
"u": "https://twitter.com/beemuvi/status/834204607987331072",
"t": "2017-02-22 00:54:11 +0000",
}, { // ------------------------------------------------------------------------
"x": "In goal settings for Trello goals we now link to the actual board that we're pulling data from.",
"u": "https://twitter.com/beemuvi/status/834547176843866114",
"t": "2017-02-22 23:35:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now show both the goalname and the description (the latter in a tiny font) on the dashboard. No more confusing toggling (for goalnames)!",
"u": "https://twitter.com/beemuvi/status/834927994535735297",
"t": "2017-02-24 00:48:40 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed missing newline in text under graph thumbnails in gallery view. #mini #bugfix #redesign And show full goal description as hovertext.",
"u": "https://twitter.com/beemuvi/status/834928140828868609",
"t": "2017-02-24 00:49:15 +0000",
}, { // ------------------------------------------------------------------------
"x": "When you had non-midnight deadlines for a goal we'd sometimes show you the wrong date for adding new data. #redesign #bugfix",
"u": "https://twitter.com/beemuvi/status/834928214552150016",
"t": "2017-02-24 00:49:33 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in URLminder: don't add a new datapoint every single time we check, only when wordcount has actually changed https://www.beeminder.com/new#urlminder",
"u": "https://twitter.com/beemuvi/status/835272597826764800",
"t": "2017-02-24 23:38:00 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added a new premium FAQ item at <a href=\"http://beeminder.com/premium\">beeminder.com/premium</a>. Includes my ill-advised murder joke. #yolo #mini",
"u": "https://twitter.com/beemuvi/status/836379564016201728",
"t": "2017-02-28 00:56:41 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix kind of: the dates used for the add-data form were being too clever and magically updating when your deadline hit; caused confusion!",
"u": "https://twitter.com/beemuvi/status/836379664083931136",
"t": "2017-02-28 00:57:05 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix: The iPhone beemergency badge icon didn't show up unless you remembered to manually launch the app every single day. HT Paul Schmidt",
"u": "https://twitter.com/beemuvi/status/836724603003162624",
"t": "2017-02-28 23:47:45 +0000",
}, { // ------------------------------------------------------------------------
"x": "I guess we'll count this: We now have an informative static image to show in place of graphs in case Amazon goes down and won't show them...",
"u": "https://twitter.com/beemuvi/status/836725068415717380",
"t": "2017-02-28 23:49:36 +0000",
} /* ---------------------------------------------------------- end 2017feb */ ]

batches['2017mar'] = [{
"x": "#bugfix w/ goal wizard that'd occasionally/rarely give a blank page when creating a goal (related to bad state from previous goal creation)",
"u": "https://twitter.com/beemuvi/status/837095751960272896",
"t": "2017-03-02 00:22:34 +0000",
}, { // ------------------------------------------------------------------------
"x": "Super facepalmy bug made us forget toggle states (countdown vs time, expanded vs not, etc) on dashboard after visiting new goal page #bugfix",
"u": "https://twitter.com/beemuvi/status/837095869421768704",
"t": "2017-03-02 00:23:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "#mini UVIs: new Epson logo, made table in the middle of http://beeminder.com/api not ugly (#redesign), tweaked flash banner for premium plans",
"u": "https://twitter.com/beemuvi/status/837458622347010048",
"t": "2017-03-03 00:24:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "At some point our push notifications for the Android app broke which made graphs appear to be regenerating forever. #bugfix #firebase",
"u": "https://twitter.com/beemuvi/status/837458670753456128",
"t": "2017-03-03 00:24:40 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now have proper error handling for losing authorization to read a user's Todoist data #mini #bugfix",
"u": "https://twitter.com/beemuvi/status/837821433833111553",
"t": "2017-03-04 00:26:10 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now support Romanian as one of the languages you can beemind learning on Duolingo!",
"u": "https://twitter.com/beemuvi/status/837821533942751232",
"t": "2017-03-04 00:26:34 +0000",
}, { // ------------------------------------------------------------------------
"x": "We added \"number of activities\" as a thing you can beemind via <a href=\"https://twitter.com/fitbit\">@fitbit</a> (&amp; removed \"very active time\" since Fitbit doesn't support that now)",
"u": "https://twitter.com/beemuvi/status/837821657444036608",
"t": "2017-03-04 00:27:03 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made the goal descriptions smaller because we're very opinionated about people focusing on the goalnames as the main identifiers of goals",
"u": "https://twitter.com/beemuvi/status/837821793666650112",
"t": "2017-03-04 00:27:36 +0000",
}, { // ------------------------------------------------------------------------
"x": "We again let you jump from $0 to $5 pledged (even without the Beemium plan that lets you jump to any amount). #bugfix #redesign #regression",
"u": "https://twitter.com/beemuvi/status/840363555736043520",
"t": "2017-03-11 00:47:39 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Feature! We trust our users so much that when you update a failed payment method you can actually pick which charges should be retried!",
"u": ["https://twitter.com/beemuvi/status/841394559523344385",
      "https://github.com/beeminder/beeminder/issues/93"],
"t": "2017-03-13 21:04:30 +0000",
}, { // ------------------------------------------------------------------------
"x": "iPhone app couldn't handle safety buffer &gt;32767 days so now we cap it at that. Also fixed a redesign regression as part of prev UVI. #bugfix",
"u": "https://twitter.com/beemuvi/status/841401764553277440",
"t": "2017-03-13 21:33:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug where sometimes the tabs below the graph would be completely blank until you reloaded the page. #bugfix",
"u": "https://twitter.com/beemuvi/status/841786857054658561",
"t": "2017-03-14 23:03:21 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made our jobs page &mdash; https://www.beeminder.com/jobs &mdash; less out of date and embarrassing! And added a little \"need help?\" footer link.",
"u": "https://twitter.com/beemuvi/status/841786998343970816",
"t": "2017-03-14 23:03:54 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added link to forum post which explains the aggday custom goal setting. &amp; Fitbit \"number activities\" was buggy for the 1st 11 days. #bugfix",
"u": "https://twitter.com/beemuvi/status/842168206873657345",
"t": "2017-03-16 00:18:41 +0000",
}, { // ------------------------------------------------------------------------
"x": "We fixed our SMTP/DNS/whatever settings so outgoing mail doesn't say \"sent via mailgun dot org\" in Gmail. #mini HT our CEO's mother",
"u": "https://twitter.com/beemuvi/status/842443924195098624",
"t": "2017-03-16 18:34:18 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made updates via the website &amp; Android &amp; iOS all have higher priority which noticeably improved graph regeneration times (tho still bad)",
"u": "https://twitter.com/beemuvi/status/842888435874447360",
"t": "2017-03-18 00:00:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "We fixed some annoying things with the guest access (for beemium people) to our dev chat: URLs work now, and disconnects handled better",
"u": "https://twitter.com/beemuvi/status/843971141798584320",
"t": "2017-03-20 23:42:55 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the dashboard where quickly tripleclicking the goal would show the add data form below the collapsed goal. #bugfix",
"u": "https://twitter.com/beemuvi/status/844337564970467328",
"t": "2017-03-21 23:58:57 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now support Swahili in Duolingo! And a #mini UVI: Tooltips in the header of the big table for setting reminders for all goals at once.",
"u": "https://twitter.com/beemuvi/status/844698187176693760",
"t": "2017-03-22 23:51:56 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed the hovertext for datapoints to always show the relevant metadata and not redundantly repeat the comment as hovertext. #mini",
"u": "https://twitter.com/beemuvi/status/845413740929400832",
"t": "2017-03-24 23:15:17 +0000",
}, { // ------------------------------------------------------------------------
"x": "Email replies when you add data via the bot now never totally fail to send if we can't fetch one of the random tips of the day. #bugfix",
"u": "https://twitter.com/beemuvi/status/845413824857485312",
"t": "2017-03-24 23:15:37 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "You can now see and update the list of URLminder URLs in your goal settings. Makes URLminder much more useful! https://www.beeminder.com/nanowrimo",
"u": "https://twitter.com/beemuvi/status/846428625796710400",
"t": "2017-03-27 18:28:04 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Also URLminder now supports arbitrary deadlines!",
"u": "https://twitter.com/beemuvi/status/846497098082103296",
"t": "2017-03-27 23:00:09 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a big with strange font sizes of goalnames on the dashboard. #bugfix http://forum.beeminder.com/t/strange-font-sizes-on-dashboard/3043",
"u": "https://twitter.com/beemuvi/status/847125467559739392",
"t": "2017-03-29 16:37:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug with creating new Fitbit number-of-activities goal. The initial import of last week of data could insta-derail you. #bugfix",
"u": "https://twitter.com/beemuvi/status/847125582265532416",
"t": "2017-03-29 16:37:32 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "URLminder now magically fixes Dropbox links so you can beemind wordcount for any plaintext document you have sync'd with Dropbox",
"u": "https://twitter.com/beemuvi/status/847589722658529281",
"t": "2017-03-30 23:21:51 +0000",
}, { // ------------------------------------------------------------------------
"x": "Another #bugfix with Fitbit number-of-activities goals: we used the wrong endpoint and only got ones added via the website, not devices",
"u": "https://twitter.com/beemuvi/status/847940708417720320",
"t": "2017-03-31 22:36:33 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix for the +/- stepper buttons for Garmin &amp; Epson goal creation: hitting the \"-\" button would increase the value. Negation is tricky!",
"u": "https://twitter.com/beemuvi/status/847940755867934720",
"t": "2017-03-31 22:36:44 +0000",
}, /* --------------------------------------------------------- end 2017mar */ ]

batches['2017apr'] = [{
"f": true,
"x": "We upgraded our database and got graph regeneration times back down to ~5s. Phew! Now we may <a href=\"http://forum.beeminder.com/t/februarys-annoyingness-straw-poll/2995\" title=\"Forum post with our Annoyingness Straw Poll\">have to work on mass-editing of goals</a>",
"u": "https://twitter.com/beemuvi/status/849045469703528449",
"t": "2017-04-03 23:46:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "We changed the smoothing constant for the purple line from .1 to .25. (<a href=\"http://forum.beeminder.com/t/any-way-to-control-exponential-moving-average-history/2938/7?u=dreev\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/849409757672812544",
"t": "2017-04-04 23:54:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made a proper landing page for URLminder: http://beeminder.com/urlminder",
"u": "https://twitter.com/beemuvi/status/849771908128161793",
"t": "2017-04-05 23:53:05 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now always fix Dropbox and Google Docs links when you add/edit them in Settings, not just when first creating the goal.",
"u": "https://twitter.com/beemuvi/status/849771959273443328",
"t": "2017-04-05 23:53:17 +0000",
}, { // ------------------------------------------------------------------------
"x": "Goals created via <a href=\"http://beemind.me\">Beemind.me</a> now act like proper autodata goals and magically fetch data before zeno'ing instead of just hourly!",
"u": "https://twitter.com/beemuvi/status/850135561683652608",
"t": "2017-04-06 23:58:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Our Twitter hashtag-minding integration was case-sensitive with the hashtags but Twitter search results aren't so now we're not either!",
"u": "https://twitter.com/beemuvi/status/850483794507255808",
"t": "2017-04-07 23:01:52 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now allow dots in the names you give 3rd-party apps that use the Beeminder API, and we no longer let you change those names! #consistency",
"u": "https://twitter.com/beemuvi/status/850484164356841472",
"t": "2017-04-07 23:03:20 +0000",
}, { // ------------------------------------------------------------------------
"x": "We added a link to our newbee-friendly blog post about beeminding writing to the <a href=\"http://beeminder.com/urlminder\">URLminder landing page</a>. #mini",
"u": "https://twitter.com/beemuvi/status/850484239959076864",
"t": "2017-04-07 23:03:38 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed our redirect from beeminder.com/services to point to https://www.beeminder.com/settings/account#account-permissions #mini",
"u": "https://twitter.com/beemuvi/status/850484557644087296",
"t": "2017-04-07 23:04:54 +0000",
}, { // ------------------------------------------------------------------------
"x": "Simplified http://forum.beeminder.com header, added an infinibee linking to Beeminder. (other improvements purely from Discourse don't count)",
"u": "https://twitter.com/beemuvi/status/852306113424801792",
"t": "2017-04-12 23:43:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a typo and added an FAQ item to http://beeminder.com/premium about the SMS bot being US-only #mini",
"u": "https://twitter.com/beemuvi/status/852307170427191297",
"t": "2017-04-12 23:47:19 +0000",
}, { // ------------------------------------------------------------------------
"x": "Also we now link to the FAQ item about SMS being US-only in the actual SMS settings, something we lost in the #redesign",
"u": "https://twitter.com/beemuvi/status/852317002890792961",
"t": "2017-04-13 00:26:23 +0000",
}, { // ------------------------------------------------------------------------
"x": "Closing another loophole: we now don't let you delete a goal that has a pending charge",
"u": "https://twitter.com/beemuvi/status/853029611386552321",
"t": "2017-04-14 23:38:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "Also closed loophole where if you archived a goal and the archive took effect after derailing but before charging you, we wouldn't charge you",
"u": "https://twitter.com/beemuvi/status/853029721499590656",
"t": "2017-04-14 23:38:28 +0000",
}, { // ------------------------------------------------------------------------
"x": "And to minimize surprises, when you insta-archive a goal after derailing we warn you if there's a pending charge that'll still happen",
"u": "https://twitter.com/beemuvi/status/854120852920516609",
"t": "2017-04-17 23:54:14 +0000",
}, { // ------------------------------------------------------------------------
"x": "Safety buffer auto-trimming for do-less now asks for how much buffer you want in terms of, eg, cups of coffee (not days like do-more). #mini",
"u": "https://twitter.com/beemuvi/status/854457099840921600",
"t": "2017-04-18 22:10:22 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Big API improvement! 3rd-party apps can specify an autofetch callback so Beeminder tells them when to autofetch instead of polling",
"u": "https://twitter.com/beemuvi/status/854829206009593856",
"t": "2017-04-19 22:48:59 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added documentation of the autofetch callback URL in <a href=\"http://beeminder.com/api\">beeminder.com/api</a> (grep \"autofetch\") plus some other API docs cleanup",
"u": "https://twitter.com/beemuvi/status/854829557307719680",
"t": "2017-04-19 22:50:23 +0000",
}, { // ------------------------------------------------------------------------
"x": "And we now link nicely to the docs from <a href=\"http://beeminder.com/apps/new\">beeminder.com/apps/new</a> (milking this for 3 UVIs but it's a big deal guys!!)",
"u": "https://twitter.com/beemuvi/status/854829661095723008",
"t": "2017-04-19 22:50:47 +0000",
}, { // ------------------------------------------------------------------------
"x": "Another improvement for 3rd-party apps: you can explicitly register your app as the datasource for any goal. http://blog.beeminder.com/autofetch",
"u": "https://twitter.com/beemuvi/status/855528876302192640",
"t": "2017-04-21 21:09:13 +0000",
}, { // ------------------------------------------------------------------------
//"n": 2260,
"f": true,
"x": "beeminder.com/changelog now points to an archive of all 2260 (as of this one) Beeminder UVIs!",
"u": "https://twitter.com/beemuvi/status/855570654602473476",
"d": "2017-04-21",
"t": "2017-04-21 23:55:14 +0000",
"c": "[twttr#2259] This originally said 2261 but there had been a numbering error; 2260 is correct.",
}, { // ------------------------------------------------------------------------
"x": "A bunch of improvements to the styling, layout, and webcopy for beeminder.com/changelog -- it's almost pretty now, at least up to mid-2016",
"u": "https://twitter.com/beemuvi/status/856657403521126400",
"d": "2017-04-24",
}, { // ------------------------------------------------------------------------
"x": "Prettified the rest of beeminder.com/changelog and made http://beeminder.com/changelog#latest link to the bottom of the page",
"u": "https://twitter.com/beemuvi/status/857019759874850817",
"d": "2017-04-25",
"c": "Got rid of all the stuff dumped between &lt;pre&gt; tags",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the road editor that rejected the road if you got rid of everything except the start and end. #bugfix (<a href=\"https://trello.com/c/cnLvtiu5/818-road-editor-bug-removing-flat-spot\">Trello card</a>)",
"d": "2017-04-25",
"t": "2017-04-26",
"u": "https://twitter.com/beemuvi/status/857380213944066049",
"c": "JSON formatting error made us reject empty roads (i.e. only the initial & final rows)",
}, { // ------------------------------------------------------------------------
"x": "And a different road editor bug that made us reject most changes to the road for do-less goals. #bugfix (<a href=\"http://forum.beeminder.com/t/code-that-enforces-akrasia-horizon/3133/6?u=dreev\">forum thread</a>)",
"d": "2017-04-25",
"t": "2017-04-26",
"u": "https://twitter.com/beemuvi/status/857380935414595584",
"c": "The sadedgy parameter which we used to set on do-less goals made the user-set vini disagree with the Beebrain-computed vini. Possibly this only mattered for newish do-less goals? Like if the goal had ever derailed the vini thing might not really matter?",
}, { // ------------------------------------------------------------------------
"x": "The <a href=\"http://beeminder.com/api\">API</a> now returns the user-specified fine print for goals. (<a href=\"http://forum.beeminder.com/t/title-description-fields-returned-by-api-get-goal-request/3153\">forum thread</a>)",
"d": "2017-04-27",
"u": "https://twitter.com/beemuvi/status/857737322208444417",
"c": "HT Andy and Bee and user zzap",
}, { // ------------------------------------------------------------------------
"x": "Removed the deprecated 'edgy' parameter from the API docs and stopped setting it for all new goals",
"d": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858095193718796288",
}, { // ------------------------------------------------------------------------
"x": "Changed countdown format to be like \"1h 30m 59s\" (makes the difference from time-of-day more obvious) & no seconds if 2 or more days left",
"d": "2017-04-28",
"t": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858095475467079681",
}, { // ------------------------------------------------------------------------
"x": "Changed default format for time-to-derailment on dashboard to day/date instead of countdown; lots of simultaneous countdowns is nerveracking",
"d": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858098808311357441",
}, /* --------------------------------------------------------- end 2017apr */ ]

batches['2017may'] = [{
"x": "Fixed broken image for blog post on front page; trimmed whitespace when not displaying seconds; fixed formatting bug in API docs. #mini ×3",
"t": "2017-05-02",
"u": "https://twitter.com/beemuvi/status/859557387643961345",
"c": "We can't figuring out what that formatting bug actually was from looking at the commit so hopefully that's not lies. Fortunately it's a 3-for-1 UVI so there's an error margin!",
}, { // ------------------------------------------------------------------------
"x": "We were failing to update Todoist goals if you deleted the parent project of a project you had Beeminder tracking. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918078896783360",
"d": "2017-04-28",
"t": "2017-05-03",
}, { // ------------------------------------------------------------------------
"x": "If you (ie, a 3rd-party app developer) tried to set your app as the datasource for a goal we were giving a 500 error. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918808428855296",
"d": "2017-05-01",
"t": "2017-05-03",
"c": "Thanks Sergii Kalinchuk",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We converted our <a href=\"http://beeminder.com/api\">API docs</a> to the vastly prettier <a href=\"http://lord.github.io/slate/\">Slate</a> and can also accept pull requests (<a href=\"http://github.com/beeminder/slate\">github.com/beeminder/apidocs</a>)!",
"u": "https://twitter.com/beemuvi/status/860280146913247232",
"d": "2017-05-04",
"t": "2017-05-04",
"c": "Redirecting to GitHub Pages for now. UPDATE: fixed the link since we renamed the repository from 'slate' to 'apidocs'.",
}, { // ------------------------------------------------------------------------
"x": "api.beeminder.com is now the canonical URL for the <a href=\"http://beeminder.com/api\">API docs</a> (still hosting it on github.io but we don't redirect to that URL now)",
"u": "https://twitter.com/beemuvi/status/860641008882556928",
"d": "2017-05-05",
"t": "2017-05-05",
"c": "Added a CNAME to beeminder.github.io/apidocs. Also got rid of the wildcard subdomain entry so notathing.beeminder.com just fails to resolve now instead of redirecting to www.beeminder.com.",
}, { // ------------------------------------------------------------------------
"x": "Added clarification and warning about auth_tokens vs access_tokens to the API docs. Also fixed some typos. #mini",
"u": "https://twitter.com/beemuvi/status/860641116105744385",
"d": "2017-05-04",
"t": "2017-05-05",
}, { // ------------------------------------------------------------------------
"x": "Fixed 2 links on http://beeminder.com/api and got rid of the search box since it was much worse than just grepping the page. #mini",
"u": "https://twitter.com/beemuvi/status/861725549445627904",
"d": "2017-05-08",
"t": "2017-05-08",
}, { // ------------------------------------------------------------------------
"x": "If you have SMS turned on but we can't SMS you cuz you didn't finish activating your phone number we now say so in the fallback email alert",
"u": "https://twitter.com/beemuvi/status/862094048592515072",
"d": "2017-05-09",
"t": "2017-05-09",
}, { // ------------------------------------------------------------------------
"x": "URLminder (and other autodata!) goals now do a re-fetch of data after you change settings, e.g. add/remove a URL or whatever.",
"u": ["https://twitter.com/beemuvi/status/862094296391991296",
      "https://trello.com/c/VAaWDa4y/824-fetch-data-when-changing-urlminder-urls-in-goal-settings"],
"d": "2017-05-09",
"t": "2017-05-09",
}, { // ------------------------------------------------------------------------
//"n": 2278,
"f": true,
"x": "<a href=\"http://blog.beeminder.com/gtbee\">GTBee</a> now lets you start w/ any amt at risk, fits on any screen size w/out being pixelated, & simpler task creation by moving to own screen!",
"u": "https://twitter.com/beemuvi/status/862452309032181760",
"t": "2017-05-10",
}, { // ------------------------------------------------------------------------
//"n": 2279,
"f": true,
"x": "(+) Version 4.5 of iOS app!",
"u": "https://twitter.com/beemuvi/status/862791255087955968",
"t": "2017-05-11",
"c": "This isn't actually its own UVI, just a heading for 3 related UVIs",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "(1) Updated Today widget: you can now add (integer) data directly from the Today screen. And the really huge news...",
"u": "https://twitter.com/beemuvi/status/862791255087955968",
"t": "2017-05-11",
"c": "NB: This and the parent UVI are both #2280 because they were tweeted as the same UVI",
}, { // ------------------------------------------------------------------------
//"n": 2280,
"s": true,
"f": true,
"x": "(2) Apple Health integration! You can now automatically sync data like steps, active energy, workout distances from Apple Health &rarr; Beeminder!",
"u": "https://twitter.com/beemuvi/status/862791436948783104",
"t": "2017-05-11",
}, { // ------------------------------------------------------------------------
//"n": 2281,
"s": true,
"x": "(3) The goal screen in the iOS app now includes a button to view the goal on mobile Safari.",
"u": "https://twitter.com/beemuvi/status/862792205974478848",
"t": "2017-05-11",
}, { // ------------------------------------------------------------------------
//"n": 2282,
"x": "Version 4.5.1 of the iOS app fixes a crash that was occurring with the Today screen if you had less than three Beeminder goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/864003196414377984",
"d": "2017-05-12",
"t": "2017-05-14",
}, { // ------------------------------------------------------------------------
//"n": 2283,
"x": "The footer of the website (including links to mobile apps!) has been missing since October when viewed on mobile devices. #bugfix #redesign #facepalm",
"u": "https://twitter.com/beemuvi/status/864628931139219457",
"c": "[recreated from Andy's 'mobile' branch]",
}, { // ------------------------------------------------------------------------
"x": "Added error checking to the goal creation API call for the pledge parameter so you can only start at pledges the user is allowed to start at",
"u": "https://twitter.com/beemuvi/status/864629166339112960",
"c": "HT Sergii Kalinchuk",
}, { // ------------------------------------------------------------------------
"x": "We were previously only alerting you about a failed credit card payment if it was for a derailment. Now we do so for API charges, IFTTT, etc.",
"u": "https://twitter.com/beemuvi/status/864989541416837120",
"d": "2017-05-16",
"t": "2017-05-17",
"c": "Part of PayPal deploy; and what about premium payments??",
}, { // ------------------------------------------------------------------------
"x": "We no longer show the \"Beeminder can't be a credible threat until you add a credit card\" banner if you're already on the payments page. #mini",
"u": "https://twitter.com/beemuvi/status/865271047813070848",
"d": "2017-05-16",
"t": "2017-05-18",
"c": "Part of PayPal deploy",
}, { // ------------------------------------------------------------------------
"x": "Apple Health is now listed as an integration on https://www.beeminder.com/new with a link to (a draft of) instructions for setting it up",
"u": "https://twitter.com/beemuvi/status/865704379856207872",
"d": "2017-05-19",
"t": "2017-05-19",
}, { // ------------------------------------------------------------------------
"x": "Nixed \"red archive button\" copy (cuz it's not red anymore) + version 4.5.2 of the iOS app: #bugfix for a crash that happened in obscure situations", 
"u": "https://twitter.com/beemuvi/status/865704826541178880",
"t": "2017-05-19",
"c": "Copy fix was May 18 and beemiOS 4.5.2 should hit the app store May 21",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Road Editor's Undo button now available for an hour after any change so you can revert unwanted edits. HT @kenoubi (<a href=\"http://forum.beeminder.com/t/road-editor-isnt-really-useful-right-now/3051\">forum thread</a>)",
"u": "https://twitter.com/beemuvi/status/866776780954140674",
"d": "2017-05-19",
"t": "2017-05-22",
"c": "Also the Mysterious Mystery with double-submit that might've been user-visible",
}, { // ------------------------------------------------------------------------
"x": "Dashboard sorting is now stable, meaning it breaks ties in favor of how things are currently sorted. HT @PhilipHellyer",
"u": "https://twitter.com/beemuvi/status/867120030101553153",
"d": "2017-05-20",
"t": "2017-05-23",
"c": "Also some refactoring to make opinionated sorting simpler; also more opinionated, for instance sorting by losedate, then pledge, and then slug so that the goals with the highest pledges appear at the top of their losedate cohort",
}, { // ------------------------------------------------------------------------
"x": "Stopped confusingly showing 2 buttons (one disabled) for each plan on http://beeminder.com/premium if you hadn't confirmed your email address",
"u": ["https://twitter.com/beemuvi/status/867516336355725312",
      "https://github.com/beeminder/beeminder/commit/d44b6229a98dfcb286dfeafbee5b41b6cedde63d"],
"d": "2017-05-16",
"t": "2017-05-24",
"c": "Part of PayPal deploy. There was a disabled button that said 'add card' and then below it a second button that said 'resend confirmation email' so we got rid of the disabled one altogether",
}, { // ------------------------------------------------------------------------
//"n": 2292,
"x": "We had a regression of <a href=\"#2037\">#2037</a> which is now fixed for real! #redesign #regression",
"u": ["https://twitter.com/beemuvi/status/867527470454407168",
      "https://github.com/beeminder/beeminder/commit/bbbaf6bf8e4e9ade59df70ef04cbc9e3e952c401",
      "https://github.com/beeminder/beeminder/commit/618787d83dcefb803a01af876ca7a41527411dc4"],
"d": "2017-05-16",
"t": "2017-05-24",
"c": "Part of PayPal deploy. We were disallowing it from the 'credible threat' banner, and were disallowing on premium page and on commitwall page, but not on the actual payments page itself. GitHub links are original and new commit.",
}, { // ------------------------------------------------------------------------
//"n": 2293,
"x": "We introduced a bug (part of upcoming PayPal integration) where we'd give a 500 error on your goal page if you had a pledge stepdown pending. #bugfix",
"u": "https://twitter.com/beemuvi/status/867885487918329856",
"t": "2017-05-25",
"c": "Something with dollars() vs centsible() and only affected one person before we caught it."
}, { // ------------------------------------------------------------------------
//"n": 2294,
"x": "We now automatically email you if Beeminder loses its authorization to fetch your data from an autodata integration",
"u": ["https://twitter.com/beemuvi/status/868245706133221376",
      "https://trello.com/c/OKjDZJ3Q/811-email-user-when-a-service-authorization-expires",
      "https://github.com/beeminder/beeminder/commit/3688bcc826cb679cb4049e48174828db362e06de",
      "https://github.com/beeminder/beeminder/commit/c65f6b28368c2c6a2aff4061a44f5b2bd821ac47"],
"d": "2017-05-29",
"t": "2017-05-26",
"c": "Originally deployed what we thought was the fix on May 17 and then we fixed it for real on May 29.",
}, { // ------------------------------------------------------------------------
//"n": 2295,
"x": "Change in the Habitica API that we now handle for when a user's API key changes (or user's account deleted). Failed silently before! #bugfix",
"u": ["https://twitter.com/beemuvi/status/868245842485891072",
      "https://github.com/beeminder/beeminder/commit/26adb8cde4fd61b70a01f63eb30887b8bf740c97"],
"d": "2017-05-23",
"t": "2017-05-26",
}, { // ------------------------------------------------------------------------
//"n": 2296,
"x": "Fixed bug that (rarely but nastily) caused a 500 error on goal pages after adding a credit card. #bugfix",
"u": ["https://twitter.com/beemuvi/status/869335845521637377",
      "https://github.com/beeminder/beeminder/commit/5870c47a862aa6c2e2204778516526f351d36ec0"],
"t": "2017-05-29",
"c": "Part of PayPal deploy. This was a timing issue: 1) add credit card to stripe; 2) queue up pledges job; 3) save user. But if 2 got executed immediately, before the user got saved, then error. Otherwise no error. A case of failing loudly being very helpful, because it was a pretty nasty bug, but we caught it right away for the handful of people who encountered it.",
}, { // ------------------------------------------------------------------------
//"n": 2297,
"x": "We broke the ability to start goals with $0 pledges for 5 days. #bugfix #regression http://forum.beeminder.com/t/pledge-upgrade-on-startup/3193",
"u": ["https://twitter.com/beemuvi/status/869704026933174272",
      "https://github.com/beeminder/beeminder/commit/8be93db3376a1c24c5e88cc7597ef4712edec9fe"],
"d": "2017-05-21",
"t": "2017-05-30",
"c": "Originally mistakenly tweeted as being a redesign regression. Spec for how this was supposed to work: http://blog.beeminder.com/deathtofreebees/",
}, { // ------------------------------------------------------------------------
//"n": 2298,
"x": "Handling timeouts from 3rd party autofetch urls (eg Beemind.me): retry couple times then show user an error message (like w/ other autodata)",
"u": ["https://twitter.com/beemuvi/status/870065420086136832",
     "https://github.com/beeminder/beeminder/commit/ebed9c3edc1e1f749592d93d03d6050ea69b6f16"],
"d": "2017-05-25",
"t": "2017-05-31",
"c": "[twttr#2297] We pointed publicly to #2298 but there had been a numbering mishap and we meant the previous UVI about $0 pledges, #2297",
}, { // ------------------------------------------------------------------------
//"n": 2299,
"x": "We now notice if a Twitter account we're autofetching tweet counts from gets deleted (or becomes private) & show an error, not silently fail",
"u": ["https://twitter.com/beemuvi/status/870066574660481024",
      "https://github.com/beeminder/beeminder/commit/bcd878d52a938fd1b407e109e9c430a0252ceeed"],
"d": "2017-05-25",
"t": "2017-05-31",
"c": "[twttr#2298]",
}, /* --------------------------------------------------------- end 2017may */ ]

batches['2017jun'] = [{
//"n": 2300,
"x": "<a href=\"http://blog.beeminder.com/gtbee\">GTBee</a> 1.4! It now shows you your list of your completed tasks (only starting from when you upgrade though) http://forum.beeminder.com/t/gtbee/3209",
"u": "https://twitter.com/beemuvi/status/870427512588730368",
"d": "2017-05-30",
"t": "2017-06-01",
"c": "[twttr#2300] Twitter numbers should match again from now on!",
}, { // ------------------------------------------------------------------------
"x": "GTBee now does <a href=\"http://blog.beeminder.com/zeno/\">Zeno polling</a>, hounding you more and more frequently as your deadline approaches, not just at T minus 1 day & T minus 1 hour",
"u": ["https://twitter.com/beemuvi/status/870428073975361536",
      "https://trello.com/c/Ak9g8hPN/46-zeno-polling"],
"d": "2017-05-30",
"t": "2017-06-01",
}, { // ------------------------------------------------------------------------
"x": "We revamped the layout of <a href=\"http://beeminder.com/premium\">/premium</a>, mainly making it much easier to compare the different perqs between plans (not separated in boxes)",
"u": "https://twitter.com/beemuvi/status/870774547380711424",
"d": "2017-05-26",
"t": "2017-06-02",
}, { // ------------------------------------------------------------------------
"x": "Also changed the styling of the discount slider and colors and moved things like coupon alerts and discount amounts to be more noticeable",
"u": "https://twitter.com/beemuvi/status/870774928441724929",
"d": "2017-05-26",
"t": "2017-06-02",
"c": "buttons and titles and disables oh my",
}, { // ------------------------------------------------------------------------
"x": "And a #bugfix we caught later: fixing the hover effects on links and buttons in the popups for changing plans",
"u": "https://twitter.com/beemuvi/status/870775233866735617",
"d": "2017-05-26",
"t": "2017-06-02",
}, { // ------------------------------------------------------------------------
"x": "One more for http://beeminder.com/premium: legacy plans aren't displayed jankily anymore, and clearly indicate their legacy-ness",
"u": "https://twitter.com/beemuvi/status/871865301863772161",
"d": "2017-05-26",
"t": "2017-06-05",
}, { // ------------------------------------------------------------------------
"x": "Advanced data entry #bugfix / robustification: don't count empty lines as bad datapoints and don't submit if all whitespace",
"u": ["https://twitter.com/beemuvi/status/871876091434094592",
      "https://github.com/beeminder/beeminder/commit/b29f091d57a3ffdefd022cafe973f3ecc99330d6"],
"d": "2017-05-27",
"t": "2017-06-05",
}, { // ------------------------------------------------------------------------
"x": "Yet more fussing with http://beeminder.com/premium: styling of zebra striping, more compact/consistent buttons, margins, boldness. #mini",
"u": "https://twitter.com/beemuvi/status/871882051741392896",
"d": "2017-06-05",
"t": "2017-06-05",
}, { // ------------------------------------------------------------------------
"x": "Partial fix for #redesign #regression of UVI#555 (needs to also do this when navigating between tabs)",
"u": ["https://twitter.com/beemuvi/status/872600836311875584",
      "https://github.com/beeminder/beeminder/commit/72f2d255c6fc4ffe787d434ce0296b35664669c9"],
"t": "2017-06-07",
}, { // ------------------------------------------------------------------------
"x": "Added warning about UI inconsistency in showing exponential road rates as fraction vs percentage. Will be moot when we kill exp roads! #mini",
"u": "https://twitter.com/beemuvi/status/872601677378932737",
"t": "2017-06-07",
"c": "\"Warning: The UI is currently inconsistent in showing the rate as a fraction vs percentage. Tell us (support@beeminder.com) if this causes confusion!\"",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We now indicate (on both dashboard and goal pages) when a goal is scheduled to be archived (<a href=\"http://forum.beeminder.com/t/derail-while-marked-for-archival/3150/5?u=dreev\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/872965681884442624",
"d": "2017-06-07",
"t": "2017-06-08",
}, { // ------------------------------------------------------------------------
"x": "Since the archiving indicators was like 3 UVIs we'll use up a tweet to mention a trivial one: the copyright in the footer now says 2011-2017 #mini",
"u": "https://twitter.com/beemuvi/status/872968226262482944",
"d": "2017-06-07",
"t": "2017-06-08",
}, { // ------------------------------------------------------------------------
"x": "#bugfix with our Jawbone integration: if you edit your sleep data we were then treating the edit as a new datapoint and double counting",
"u": ["https://twitter.com/beemuvi/status/874408199213817858",
     "https://github.com/beeminder/beeminder/commit/d35747eb2f9f9d37d7426098fdeee2247a286a79"],
"d": "2017-05-30",
"t": "2017-06-12",
}, { // ------------------------------------------------------------------------
"x": "Charges created via the API (eg: GTBee and IFTTT Actions) now have a default note if you don't give one, like \"alice via IFTTT\"",
"u": ["https://twitter.com/beemuvi/status/874408307271671808",
      "https://github.com/beeminder/beeminder/commit/d9f55faef2cf9b94fac1b0287b0e352a15b10423"],
"d": "2017-06-02",
"t": "2017-06-12",
}, { // ------------------------------------------------------------------------
"x": "Fixed up our CSS for http://beeminder.com/aboutus & for http://beeminder.com/donate (the latter lost its paragraph spacing etc during the #redesign). #bugfix",
"u": "https://twitter.com/beemuvi/status/874776424267210753",
"d": "2017-06-07",
"t": "2017-06-13",
}, { // ------------------------------------------------------------------------
"x": "iOS app 4.5.3 fixed a crash on iPhones 5 &amp; older that would happen when trying to display bare min amounts for some goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/874780859311693824",
"d": "2017-06-09",
"t": "2017-06-13",
}, { // ------------------------------------------------------------------------
"x": "Improved the font and line spacing and widths of the sections of http://beeminder.com/api (basically emulating <a href=\"https://stripe.com/docs/api\">stripe.com/docs/api</a>)",
"u": "https://twitter.com/beemuvi/status/874823283748687874",
"t": "2017-06-13",
"c": "Thanks Sergii Kalinchuk! Also added link to http://github.com/beeminder",
}, { // ------------------------------------------------------------------------
"x": "#bugfix where, when updating a deadline on goal page and there was an error, we'd redirect you to the main reminders page. Now we don't!",
"u": ["https://twitter.com/beemuvi/status/875475264481902593",
      "https://trello.com/c/v1yuLb0a/775-updating-deadline-from-goal-page-redirected-to-reminders"],
"d": "2017-06-12",
"t": "2017-06-15",
"c": "HT Chelsea",
}, { // ------------------------------------------------------------------------
"x": "We now email you a receipt for premium subscriptions (<a href=\"http://forum.beeminder.com/t/invoice-receipt-for-premium/2856\">forum thread</a>)",
"u": "https://twitter.com/beemuvi/status/875477921158144001",
"d": "2017-06-14",
"t": "2017-06-15",
"c": "And we don't even charge 100X the amount you agreed to!",
}, { // ------------------------------------------------------------------------
"x": "User-visible but dubious to call an improvement from user perspective: We now set the \"<a href=\"https://www.beeminder.com/faq#qdcl\">deadbeat flag</a>\" if a premium payment fails.",
"u": "https://twitter.com/beemuvi/status/875480383365586944",
"d": "2017-06-14",
"t": "2017-06-15",
}, { // ------------------------------------------------------------------------
"x": "Removed a redundant \"Data source\" subheading that was appearing on the Settings tab for some autodata goals. Visual #bugfix HT @lady_alys",
"u": ["https://twitter.com/beemuvi/status/880185294426849280",
      "https://github.com/beeminder/beeminder/pull/110"],
"d": "2017-06-28",
"t": "2017-06-28",
}, { // ------------------------------------------------------------------------
"x": "Not sure this is better since min weight is arguably truer weight but by principle of least surprise, weight gain goals now use max weight",
"u": "https://twitter.com/beemuvi/status/880212138572234752",
"d": "2017-06-13",
"t": "2017-06-28",
"c": "Set aggday=max for gainer goals. HT Chelsea",
}, { // ------------------------------------------------------------------------
"x": "Made <a href=\"http://bmndr.com/cla\">bmndr.com/cla</a>, modeled on Discourse's. Nixed \"via the API\" in the \"you're being charged\" email (cuz it's not always true; IFTTT, etc)",
"u": "https://twitter.com/beemuvi/status/880555748719083526",
"t": "2017-06-29",
}, { // ------------------------------------------------------------------------
//"n": 2323,
"x": "Added Japanese to our @duolingo integration! (And another #mini #bugfix: properly pluralize \"months\" in the \"you're being charged\" emails)",
"u": "https://twitter.com/beemuvi/status/880556299032735744",
"t": "2017-06-29",
}, { // ------------------------------------------------------------------------
//"n": 2324,
"x": "(+) Version 4.6 of the iOS app!",
"u": "https://twitter.com/beemuvi/status/880558126352678912",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "(1) #bugfix for the mystery of the duplicate datapoints",
"u": "https://twitter.com/beemuvi/status/880558126352678912",
}, { // ------------------------------------------------------------------------
//"n": 2325,
"s": true,
"f": true,
"x": "(2) New metrics for Apple Health goals! Now tracking mindful minutes, sleep, time in bed, and water consumption.",
"u": "https://twitter.com/beemuvi/status/880558238944468992",
}, { // ------------------------------------------------------------------------
//"n": 2326,
"s": true,
"x": "(3) No longer crashing on older models of the iPad. #bugfix",
"u": "https://twitter.com/beemuvi/status/880558372751265792",
}, /* --------------------------------------------------------- end 2017jun */ ]

batches['2017jul'] = [{
//"n": 2327,
"x": "Trello #bugfix HT @richarmstrong: goal creation now nicely handles the case that Beeminder's authorization to read your Trello data expired",
"u": "https://twitter.com/beemuvi/status/882010906703482881",
"t": "2017-07-03",
"c": "When you created a new Trello goal we were failing uglily before",
}, { // ------------------------------------------------------------------------
"x": "Copy &amp; CSS improvements to our <a href=\"http://beeminder.com/trello\">Trello landing page</a>; compacted feature list on http://beeminder.com/premium to get the buttons above the fold",
"u": "https://twitter.com/beemuvi/status/882012003241295872",
"t": "2017-07-03",
}, { // ------------------------------------------------------------------------
//"n": 2329,
"x": "For autodata goals, we now send you back to the right place in goal creation after authorizing us to read your data. #bugfix",
"u": ["https://twitter.com/beemuvi/status/882373190017720320",
      "https://github.com/beeminder/beeminder/commit/90313ab7622617ce378f39e9aa717a2ce8e922a8"],
"d": "2017-07-02",
"t": "2017-07-04",
"c": "Probably broke this at some point after #2092. We were having you pick configuration stuff for your, eg, Runkeeper goal and then making you start over from scratch when you returned from the oauth step!",
}, { // ------------------------------------------------------------------------
"x": "Brief bug exposed by UVI#2329: were creating extra spurious Todoist goals (if you'd auth'd Todoist) when you created any other goal. #bugfix",
"u": ["https://twitter.com/beemuvi/status/882373353465552896",
      "https://github.com/beeminder/beeminder/commit/c1c653ef2b5bef23be785fd7c86cc22b56b04fc5"],
"d": "2017-07-02",
"t": "2017-07-04",
"c": "We were loading todoist labels & tags for anyone who'd authorized todoist every time they loaded the new goal page. This resulted in sometimes overwriting stored autodata info, and you got a surprise todoist goal. Fixed it so we no longer make extra calls to the todoist api, but only go and fetch your data once you've selected todoist goal type.",
}, { // ------------------------------------------------------------------------
"x": "For Runkeeper auto-fetching, if we saw no previous auto-entered data we sometimes missed your most recent datapoint. #bugfix",
"u": ["https://twitter.com/beemuvi/status/882738250032455680",
      "https://github.com/beeminder/beeminder/commit/d00d6b540f0f54a706365dc12c2a4ac1ea025299"],
"d": "2017-07-01",
"t": "2017-07-05",
"c": "If there wasn't an 'auto-entered via runkeeper' datapoint then we'd fall back to just getting data for today, instead of since the last datapoint",
}, { // ------------------------------------------------------------------------
"x": "The data import section now explains about including username/goalname in the subject for the email bot (& prefills it for the mailto link)",
"u": "https://twitter.com/beemuvi/status/882740888404754432",
"d": "2017-07-03",
"t": "2017-07-05",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We now support PayPal in addition to credit cards! (So many people have been asking for this, for years. Sorry it took so long!)",
"u": "https://twitter.com/beemuvi/status/882781510708809728",
"d": "2017-07-03",
"t": "2017-07-05",
"c": "Bee says she’s not actually sorry because it was kind of awful and maybe what we’re actually sorry about is that we caved and did it all instead of staying Stripe-only!",
}, { // ------------------------------------------------------------------------
"x": "We made http://beeminder.com/pact to help @PactApp users migrate to Beeminder now that Pact is shutting down :(",
"u": "https://twitter.com/beemuvi/status/884551717789892608",
"t": "2017-07-10",
}, { // ------------------------------------------------------------------------
"x": "We're now finally showing amounts for timey-wimey goals as HH:MM consistently in the bot emails",
"u": ["https://twitter.com/beemuvi/status/884556643945467904",
      "https://github.com/beeminder/beeminder/commit/df0a4cf34590de616add4345b133dca3e26d5773?w=1"],
"t": "2017-07-10",
"c": "We got most of these back in January but didn't get the email subjects till now!",
}, { // ------------------------------------------------------------------------
"x": "Also show HH:MM in iOS app. And fixed a bug that that introduced where we briefly showed deadlines as offset from midnight in seconds! #bugfix",
"u": ["https://twitter.com/beemuvi/status/884923571067392001",
      "https://github.com/beeminder/beeminder/commit/51392f57ec7c4ebe163179da1b51a95d21c28883",
      "https://github.com/beeminder/beeminder/commit/4ef48d8d0ea4cb95dca1c53e9cf3c8e539acb4cc"],
"t": "2017-07-11",
"c": "The iOS part of this is also from January",
}, { // ------------------------------------------------------------------------
"x": "We now redirect http://beeminder.com/reminders to beeminder.com/reminders/USERNAME (this mostly matters for pointing people there in support)",
"u": "https://twitter.com/beemuvi/status/885270523961237504",
"t": "2017-07-12",
}, { // ------------------------------------------------------------------------
//"n": 2338,
"x": "Fixed goal description wrapping ugliness for long descriptions when looking at other users' goals (or logged out viewing your own). #bugfix",
"u": "https://twitter.com/beemuvi/status/885285350742007808",
"t": "2017-07-12",
"c": "It was getting covered by the graph image, now it just truncates with an ellipsis after one line",
}, { // ------------------------------------------------------------------------
//"n": 2339,
"x": "Also fixed goal description shortness for your own goals (was only showing ~210px's worth) and #bugfix w/ not showing pencil icon after edit",
"u": "https://twitter.com/beemuvi/status/885600764877447168",
"t": "2017-07-13",
"c": "Now resizes to show all of the description up to one full line, then truncates with an ellipsis as well",
}, { // ------------------------------------------------------------------------
//"n": 2340,
"x": "(+) Version 4.7 of the iOS app!",
"u": "https://twitter.com/beemuvi/status/886000652295430144",
"d": "2017-07-12",
"t": "2017-07-14",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "(1) #bugfix for Apple Health weight goals not updating with new data (<a href=\"http://forum.beeminder.com/t/apple-health-not-updating-weight/3203\">forum thread</a>)",
"u": "https://twitter.com/beemuvi/status/886000652295430144",
"d": "2017-07-12",
"t": "2017-07-14",
}, { // ------------------------------------------------------------------------
//"n": 2341,
"s": true,
"x": "(2) #bugfix for multiple metrics appearing to be selected when pairing",
"u": "https://twitter.com/beemuvi/status/886000765747077120",
"d": "2017-07-12",
"t": "2017-07-14",
}, { // ------------------------------------------------------------------------
//"n": 2342,
"s": true,
"x": "(3) #bugfix for goals paired to Apple Health not updating after reinstalling the app",
"u": "https://twitter.com/beemuvi/status/886000891769126912",
"d": "2017-07-12",
"t": "2017-07-14",
}, { // ------------------------------------------------------------------------
//"n": 2343,
"x": "We put back the lost link to the secret chat URL for Beemium subscribers that we lost in UVI#2328. HT @mimercha",
"u": "https://twitter.com/beemuvi/status/887458804584988672",
"t": "2017-07-18",
}, { // ------------------------------------------------------------------------
"x": "For <a href=\"http://gitminder.com\">Gitminder</a> we ask for the GitHub repo name. If you give us the whole URL we now parse out the name instead of confusingly failing. #mini",
"u": ["https://twitter.com/beemuvi/status/887820965345763330",
      "https://github.com/beeminder/beeminder/commit/d2ced448426b2a93ee1b0518d1e34150dfe9250f"],
"t": "2017-07-19",
"c": "If you gave the full URL to the repo, rather than just username/reponame, we'd fail like \"hey, it doesn't look like you have access to that repo\" (because we were just doing string comparison on the list of your repos and the string you gave us to check), and the only clue you had that we wanted only \"username/repo\" was in the placeholder text for the input. So now we just strip out the http etc if they're there in the string given, because regex technology is great.",
}, { // ------------------------------------------------------------------------
"x": "Exception to UVI#2294 &mdash; we don't bug you about that if you're not a monthly active user",
"u": "https://twitter.com/beemuvi/status/887822576180895744",
"d": "2017-07-13",
"t": "2017-07-19",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in recent data display where we we'd interpret HH:MM times as times of day and show things like \"24:00\" as \"0:00\". HT @mimercha",
"u": ["https://twitter.com/beemuvi/status/888183200463245313",
      "https://github.com/beeminder/beeminder/commit/6c933b2004496c5c446b7a75f35fca28d206bfad"],
"d": "2017-07-13",
"t": "2017-07-20",
}, { // ------------------------------------------------------------------------
"x": "Fixed a typo in the API docs and made the URL prefixes consistent (<a href=\"http://forum.beeminder.com/t/typo-in-putgoal-api-documentation/3359\">forum thread</a>)",
"u": "https://twitter.com/beemuvi/status/888548995701784579",
"t": "2017-07-21",
}, { // ------------------------------------------------------------------------
"x": "Other API docs #mini's: deprecated \"panic\" param out of docs, clarify what happens if submitting new runits &amp; new road (roadall) together",
"u": "https://twitter.com/beemuvi/status/889623883707551745",
"d": "2017-07-21",
"t": "2017-07-24",
"c": "The \"panic\" param is now just undocumented. And the clarification is that the road has to be in terms of the old runits",
}, { // ------------------------------------------------------------------------
"x": "If you tried to have a road segment with inferred end date in the road editor, we'd silently fail to update the graph anymore. #bugfix",
"u": "https://twitter.com/beemuvi/status/889624283244265473",
"d": "2017-07-19",
"t": "2017-07-24",
}, { // ------------------------------------------------------------------------
"x": "#mini's: fixed new bug caused by UVI#2339, copyedits to http://beeminder.com/pact, Beemium chat link on http://beeminder.com/contact",
"u": ["https://twitter.com/beemuvi/status/889985838263574528",
      "https://github.com/beeminder/beeminder/commit/c853c32a1a3ca2a94eff20cca33ff06938e6e0eb"],
"t": "2017-07-25",
"c": "Wouldn't have been crazy to call this 3 UVIs.",
}, { // ------------------------------------------------------------------------
"x": "Another #mini: cleaned up our username validator to disallow usernames we need to reserve and unreserve some we don't need after all",
"u": ["https://twitter.com/beemuvi/status/889986698955833344",
      "https://github.com/beeminder/beeminder/commit/7ed5176ee417321fbf4df5f3c3fe34061a06534c"],
"d": "2017-07-14",
"t": "2017-07-25",
"c": "This one's quite cheap but it makes up for the previous one!",
}, { // ------------------------------------------------------------------------
//"n": 2352,
"x": "The road editor in Settings (premium only) now shows rate units",
"u": ["https://twitter.com/beemuvi/status/890359165670928386",
      "https://github.com/beeminder/beeminder/commit/580a279fee08652491d550437f4a1496165cdb41"],
"d": "2017-07-20",
"t": "2017-07-26",
}, { // ------------------------------------------------------------------------
//"n": 2353,
"x": "The \"roadall\" API call now accepts daystamps like \"2017-07-27\" or \"20170727\" as well as timestamps. Updated http://beeminder.com/api as well. (<a href=\"http://forum.beeminder.com/t/beeminder-api-roadall-documentation/2070/10?u=dreev\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/890705555546718208",
"t": "2017-07-27",
}, { // ------------------------------------------------------------------------
//"n": 2354,
"x": "UVI#2353 was mostly true over a year ago (but not logged here). Added: #bugfix that made hyphenless daystamps not be interpreted as timestamps",
"u": ["https://twitter.com/beemuvi/status/890705898225651716",
      "https://github.com/beeminder/beeminder/commit/dc0cc6ca552b385fe1c5306342cd1355499de341"],
"d": "2017-07-19",
"t": "2017-07-27",
}, { // ------------------------------------------------------------------------
"x": "GTBee version 1.4.1 fixed a bug with some crazy integer overflow that made the sting show up as $-311 if you specified $1000. HT @roberthopman #bugfix",
"u": "https://twitter.com/beemuvi/status/892166061293883392",
"d": "2017-06-25",
"t": "2017-07-31",
}, { // ------------------------------------------------------------------------
"x": "GTBee version 1.5! Fix for notifications not arriving (you're now prompted to allow notifications to remind you when tasks are coming due). #bugfix",
"u": "https://twitter.com/beemuvi/status/892166169129435136",
"d": "2017-07-25",
"t": "2017-07-31",
}, { // ------------------------------------------------------------------------
"x": "GTBee 1.5 also makes the app icon badged with the number of tasks you have to complete (<a href=\"http://forum.beeminder.com/t/gtbee/3209/21\">forum thread</a>)",
"u": "https://twitter.com/beemuvi/status/892166272162582529",
"d": "2017-07-25",
"t": "2017-07-31",
}, /* --------------------------------------------------------- end 2017jul */ ]

batches['2017aug'] = [{
"x": "Most of a #bugfix for duplicate datapoints on Apple Health: script to remove them server-side (<a href=\"http://forum.beeminder.com/t/duplicates-from-apple-health-steps/3365\">forum thread</a>)",
"u": ["https://twitter.com/beemuvi/status/892896042231799809",
      "https://github.com/beeminder/beeminder/commit/91ac3e7f2563c1dac1703040c2f9fccf0c7bf47b"],
"t": "2017-08-02",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in API docs that made backtick-quoted things in square brackets not display, and goal attributes table was all wrong. HT Chelsea",
"u": "https://twitter.com/beemuvi/status/892896664121298944",
"t": "2017-08-02",
}, { // ------------------------------------------------------------------------
"x": "Garmin sleep goal setup fixed the defaults so you wouldn't end up with a 10000 hours/day sleep goal if you breezed through. #bugfix",
"u": "https://twitter.com/beemuvi/status/893239910089371649",
"t": "2017-08-03",
}, { // ------------------------------------------------------------------------
"x": "Bigger Garmin #bugfix: we weren't fetching sleep time at all ever for newly created sleep goals since the #redesign #facepalm",
"u": ["https://twitter.com/beemuvi/status/893580490589982720",
      "https://github.com/beeminder/beeminder/commit/c8661877ca0a6540b7a88303ffe51e8fdec71003"],
"t": "2017-08-04",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in Garmin integration after migrating to their new API: we were unfairly rounding down to a whole number of hours!",
"u": "https://twitter.com/beemuvi/status/894705971074707456",
"d": "2017-08-02",
"t": "2017-08-07",
"c": "Specifically, we were doing integer division on durations, so you'd run for 45 minutes, which garmin reports to us in seconds, and then converting it to hours to plot it for you, we'd come up with 0 hours running, 2700 integer-divide 3600 == 0",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in our Draft data import for new goals: imported last 7 entries instead of last 7 days and could result in insta-derails",
"u": "https://twitter.com/beemuvi/status/894707351151824896",
"d": "2017-07-31",
"t": "2017-08-07",
}, { // ------------------------------------------------------------------------
"x": "The <a href=\"http://slackminder.com\">Slack bot</a>'s intentionally obtuse about any private goals it's bugging you about in public channels, but shouldn't've been in DMs. #bugfix HT @nitrogen",
"u": ["https://twitter.com/beemuvi/status/895046508340330496",
      "https://github.com/beeminder/beeminder/commit/a7faba459464d26a35e72497013ac835752fffb5"],
"d": "2017-08-04",
"t": "2017-08-08",
}, { // ------------------------------------------------------------------------
"x": "We made schedule-a-break less confusing by making the lower bound inclusive, no need to yell at you about making it be \"at least one day\"",
"u": ["https://twitter.com/beemuvi/status/895432344647090176",
      "https://github.com/beeminder/beeminder/commit/476cbd37fa8cd7870419a2107bed0f5fa23b2762"],
"t": "2017-08-09",
}, { // ------------------------------------------------------------------------
"x": "And UVI#2365 means we could drop the confusing warning about making the start date the day before the break & making 1-day breaks as if 2 days",
"u": "https://twitter.com/beemuvi/status/895432520577069057",
"t": "2017-08-09",
"c": "Arguably this is slightly less mathematically elegant but it's what people expect so we're pretty sure this is a win. And Chelsea told us to do it and she's pretty much always right.",
}, { // ------------------------------------------------------------------------
"x": "Alphabetized the sites &amp; categories in RescueTime goal setup (so you can find what you're looking for amongst the slew of sites) HT Chelsea",
"u": "https://twitter.com/beemuvi/status/895794767384027136",
"t": "2017-08-10",
}, { // ------------------------------------------------------------------------
"x": "Removed references to 'mannequins' and updating your measurements from the weight goal reminders (we were running a study that's done now) HT Chelsea",
"u": "https://twitter.com/beemuvi/status/895795050344361985",
"t": "2017-08-10",
}, { // ------------------------------------------------------------------------
"x": "We now fill in the signed-in user’s email address in the beeminder.com/contact form (if there is a signed-in user). HT Chelsea",
"u": "https://twitter.com/beemuvi/status/896153491214712832",
"t": "2017-08-11",
}, { // ------------------------------------------------------------------------
"x": "Also in the contact form: we now actually give an error message if there’s a problem and the message isn’t sent. :( #bugfix #redesign",
"u": "https://twitter.com/beemuvi/status/896153821755228160",
"t": "2017-08-11",
"c": "There was a confirmation if your message is sent, but failure was silent"
}, { // ------------------------------------------------------------------------
"x": "Added Active Time tracking to Garmin for a more general activity metric than steps w/o having to have one of their GPS gadgets. HT @adamwwolf",
"u": "https://twitter.com/beemuvi/status/896489273582510080",
"t": "2017-08-12",
}, { // ------------------------------------------------------------------------
"x": "Garmin #mini: it was ambiguous in the goal setup wizard what unit of measure is for Activity time tracking so we added \"Total Time (hours)\"",
"u": "https://twitter.com/beemuvi/status/896489792556351489",
"t": "2017-08-12",
"c": "This may also be confusing / ambiguous between 'activity time tracking', and 'active time tracking' which we just added...",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Habitica integration now tracks completed Dailies either with To-Dos or separately (for now, only if your CustomDayStart time is midnight)",
"u": "https://twitter.com/beemuvi/status/898581063835844609",
"t": "2017-08-18",
}, { // ------------------------------------------------------------------------
"x": "We now have a (barebones) curl and ruby tab on http://beeminder.com/api  with a pointer to other API libraries on github",
"u": "https://twitter.com/beemuvi/status/898584988332859392",
"t": "2017-08-18",
}, { // ------------------------------------------------------------------------
"x": "Curl examples at http://beeminder.com/api now all give full/correct curl syntax and include 'auth_token=abc123' as placeholder for authentication params",
"u": "https://twitter.com/beemuvi/status/900240374412845056",
"t": "2017-08-22",
}, { // ------------------------------------------------------------------------
"x": "More improvements to beeminder.com/api: bug fixes with the tabs and added an actual Ruby example",
"u": "https://twitter.com/beemuvi/status/900601250516946944",
"t": "2017-08-23",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in the new Garmin active time tracking: our numbers now match the numbers on your device / in Garmin Connect. HT @adamwwolf again",
"u": "https://twitter.com/beemuvi/status/900858770233987073",
"t": "2017-08-24",
"c": "They count moderateIntensity + 2*vigorousIntensity because the CDC et al \"recommend at least 150 minutes per week of moderate intensity activity, such as brisk walking, or 75 minutes per week of vigorous intensity activity, such as running.\"",
}, { // ------------------------------------------------------------------------
"x": "We no longer refer to \"unfreezing\" a goal. It's just \"restarting\" now. Eg, in http://beeminder.com/faq and http://blog.beeminder.com/glossary #mini",
"u": ["https://twitter.com/beemuvi/status/901232060165087232",
      "https://github.com/beeminder/beeminder/issues/105"],
"t": "2017-08-25",
}, { // ------------------------------------------------------------------------
"x": "Other #mini copyfixes in http://beeminder.com/faq  like \"form below your graph\" (now next to your graph) &amp; typo fix in http://beeminder.com/pact",
"u": ["https://twitter.com/beemuvi/status/901233420411346945",
      "https://github.com/beeminder/beeminder/issues/106",
      "https://github.com/beeminder/beeminder/issues/116"],
"t": "2017-08-25",
}, { // ------------------------------------------------------------------------
"x": "Dumb #bugfix: our <a href=\"http://beeminder.com/donate\">donate button</a> was redirecting to beta.beeminder.com after a successful donation. HT @adamwwolf",
"u": ["https://twitter.com/beemuvi/status/901236706115858432",
      "https://github.com/beeminder/beeminder/issues/118"],
"t": "2017-08-25",
}, { // ------------------------------------------------------------------------
"x": "We now include the transaction description on your payments page -- beeminder.com/payment -- for people using PayPal",
"u": "https://twitter.com/beemuvi/status/902418235726761984",
"t": "2017-08-28",
}, { // ------------------------------------------------------------------------
"x": "And PayPal #bugfix: correctly indicate the transaction status (we weren't correctly showing if a transaction was declined)",
"u": "https://twitter.com/beemuvi/status/902418439075012608",
"t": "2017-08-28",
"c": "Not correctly including status meant that a failed payment would show up as \"paid\". PS: We then broke this in the mobile-friendliness redesign.",
}, { // ------------------------------------------------------------------------
//"n": 2383,
"x": "Another PayPal integration #bugfix: Adding PayPal wouldn't remove the deadbeat flag on your account. Now it does.",
"u": "https://twitter.com/beemuvi/status/902418618326982656",
"t": "2017-08-28",
}, { // ------------------------------------------------------------------------
"x": "We now indicate that all datapoints are loaded (instead of just disabling button) when all datapoints are loaded. #mini",
"u": ["https://twitter.com/beemuvi/status/903040341879676928",
      "https://github.com/beeminder/beeminder/commit/a908409863aee3c7fc5bf957194c09f1bf2e2829"],
"d": "2017-08-28",
"t": "2017-08-30",
"c": "By Chelsea",
}, { // ------------------------------------------------------------------------
"x": "A bunch of fixes and tweaks to the CSS for the take-a-break interface -- sane fonts and spacing and the error messages show up in red",
"u": ["https://twitter.com/beemuvi/status/903045000191131648",
      "https://github.com/beeminder/beeminder/commit/1234b6d6150389d8c2775f71f7e9a35230b2bc88",
      "https://github.com/beeminder/beeminder/commit/7f50484cf7d4ea16a55c0dcd799ac32074ec3088",
      "https://trello.com/c/7qUPiAK5/795-more-prominent-error-messages-in-take-a-break"],
"d": "2017-08-28",
"t": "2017-08-30",
"c": "By Chelsea",
}, /* --------------------------------------------------------- end 2017aug */ ]

batches['2017sep'] = [ {
"x": "Better client-side validation of take-a-break dates: added checks for trying to create breaks in the past or before the akrasia horizon",
"u": ["https://twitter.com/beemuvi/status/903764399457878016",
      "https://github.com/beeminder/beeminder/commit/18b2c324904324bb45ad6d005c7ebb643429c80b"],
"d": "2017-08-28",
"t": "2017-09-01",
"c": "By Chelsea",
}, { // ------------------------------------------------------------------------
"x": "We no longer let you enable Slack notifications without having Slack authorized. #bugfix",
"u": ["https://twitter.com/beemuvi/status/903764635031003136",
      "https://github.com/beeminder/beeminder/commit/a00c5965b2e5ccc7d45dd8fb076b57f11f4b0113"],  
"d": "2017-08-28",
"t": "2017-09-01",
"c": "By Chelsea",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Added link to http://help.beeminder.com on the contact page, and updated a bunch of other links throughout the site to point to the help site",
"u": ["https://twitter.com/beemuvi/status/904847651497099264",
      "https://github.com/beeminder/beeminder/commit/38f7ca8818fa763c9c85b8c0e4b961da6ac74c21",
      "https://github.com/beeminder/beeminder/commit/9951b7c19ea0e2552c290d48d237c905031d0ccb",
      "https://github.com/beeminder/beeminder/commit/3dec346a8be4e7e800025dd4eb49a5b1eae48296",
      "https://github.com/beeminder/beeminder/commit/2a43d381cf7e0f364ef64da8f55d2b6c1d24aefe",
      "https://github.com/beeminder/beeminder/commit/5e6ef9749c0c72577d9b1c8fe8320d6015078edc"],
"d": "2017-08-28",
"t": "2017-09-04",
"c": "By Chelsea",
}, { // ------------------------------------------------------------------------
"x": "Arranged goal types on goal creation page so Do More/Less vertically aligned, Odometer less front-and-center, descriptions clearer/conciser",
"u": ["https://twitter.com/beemuvi/status/904847930967728128",
      "https://github.com/beeminder/beeminder/commit/bdee1043c5e2670ccaebe39a442efc9e0a17ffd4",
      "https://github.com/beeminder/beeminder/commit/54bbb9c163fff6ec8d785ae9b00df39b9a6d8530"],
"d": "2017-08-28",
"t": "2017-09-04",
"c": "By Chelsea",
}, { // ------------------------------------------------------------------------
"x": "Habitica Dailies #bugfix: we'd switch your completed Dailies for yesterday to 0 if your timezone was sufficiently far ahead of server time",
"u": "https://twitter.com/beemuvi/status/905217285496774656",
"t": "2017-09-05",
"c": "The tasks all have the same ID in Habitica, because they just schedule them to be repeated, so we add the current date to the ID... but then if your day rolls over to tomorrow while the server is still on yesterday, we were comparing your fresh unchecked To-Dos against yesterday's completed ones and marking them as undone!",
}, { // ------------------------------------------------------------------------
"x": "Now show current lane width in custom settings even if it's automatically computed so it's easier to avoid instaderailing. HT @mgiannopoulos",
"u": ["https://twitter.com/beemuvi/status/905217491428810752",
      "https://github.com/beeminder/beeminder/commit/bee8ff4fc5e84555fd43d742d13f4b8683dfc689",
      "https://trello.com/c/PquXaEcP/685-show-current-lane-width-in-lane-width-field-even-if-not-explicitly-set"],
"t": "2017-09-05",
"c": "By Chelsea. God it's going to be so good when YBHP makes this moot!",
}, { // ------------------------------------------------------------------------
"x": "We were accidentally not letting you archive a derailed goal without having a payment method on file. #bugfix",
"u": ["https://twitter.com/beemuvi/status/905573948577812480",
      "https://github.com/beeminder/beeminder/commit/90f4dbe0480f82dd9e5c7da7a04a6757cd818998"],
"t": "2017-09-06",
}, { // ------------------------------------------------------------------------
"x": "We got rid of the \"unarchive\" option for archived goals because it was literally equivalent to \"restart\". #mini",
"u": "https://twitter.com/beemuvi/status/905575139017867265",
"t": "2017-09-06",
}, { // ------------------------------------------------------------------------
//"n": 2394,
"x": "Conciser &amp; larger: \"To restart this goal you must add a pledge, but we don't have a payment method from you yet\" #mini",
"u": "https://twitter.com/beemuvi/status/905936393158852608",
"t": "2017-09-07",
}, { // ------------------------------------------------------------------------
//"n": 2395,
"x": "(+) Multiple related #bugfix's w/ custom goals",
"u": "https://twitter.com/beemuvi/status/905937798787510272",
"t": "2017-09-07",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "(1) don't complain about no initial value and say \"today's weight\" (& assume 0 if none given)",
"u": ["https://twitter.com/beemuvi/status/905937798787510272",
      "https://github.com/beeminder/beeminder/commit/1bcff25fbdda4c72a9990ea4137003386e88910b",
      "https://trello.com/c/HYaIiAKy/816-todays-weight-is-required"],
"t": "2017-09-07",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(2) we were ignoring initial value if you provided it and starting custom roads at 0. #bugfix",
"u": ["https://twitter.com/beemuvi/status/905938030543831040",
      "https://trello.com/c/oibIjJud/851-custom-goals-dont-start-at-given-initial-value"],
"t": "2017-09-07",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(3) we'd sometimes fail to ask for the initial value at all. (Probably more #bugfix's as well as part of cleaning up this mess.)",
"u": ["https://twitter.com/beemuvi/status/905938216343166976",
      "https://trello.com/c/CCM9ySrV/768-make-custom-exponential-goal-creation-more-friendly"],
"t": "2017-09-07",
"c": "We didn't have a case in the code for custom goaltype so things were just falling through all these if statements with a mishmash result where the state of the form that you saw was reliant on whatever cruft was left in local storage. For example you'd see a different form if you'd clicked on DoMore earlier or not.",
}, { // ------------------------------------------------------------------------
"x": "UVI#2384 caused a brief bug that yielded a 500 error when restarting some goals (not sure any actual user encountered it though!) #bugfix",
"u": ["https://twitter.com/beemuvi/status/905942976177647617",
      "https://github.com/beeminder/beeminder/commit/771f5954f0c2a12d77da040c036a33627266051a"],
"t": "2017-09-07",
"c": "Something with empty bb hash",
}, { // ------------------------------------------------------------------------
"x": "Bee fixed the annoyingness where clicking 'load all datapoints' would load the datapoints in nonsensical order. #bugfix",
"u": ["https://twitter.com/beemuvi/status/907345149683892224",
      "https://github.com/beeminder/beeminder/pull/123",
      "https://trello.com/c/LfK7nTvZ/369-load-all-datapoints-shuffles-them-up"],
"t": "2017-09-11",
}, { // ------------------------------------------------------------------------
"x": "#bugfix with sorting by value in the Data tab, and we think but aren't sure that 'load all datapoints' got faster after these fixes",
"u": ["https://twitter.com/beemuvi/status/907345476852187137",
      "https://github.com/beeminder/beeminder/issues/119#issuecomment-328223767"],
"t": "2017-09-11",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in Garmin sleep integration: we were adding multiple datapoints for one day, rather than updating the current datapoint",
"u": ["https://twitter.com/beemuvi/status/907732618833096704",
      "https://github.com/beeminder/beeminder/commit/84e22e152093315939eb644e19c171bb684aba3d"],
"t": "2017-09-12",
}, { // ------------------------------------------------------------------------
"x": "We updated the logos on the frontpage. Some logos changed altogether &amp; all of them looked a little crappy. Now they look non-crappy! #mini",
"u": ["https://twitter.com/beemuvi/status/907733403964915712",
      "https://github.com/beeminder/beeminder/issues/82"],
"t": "2017-09-12",
}, { // ------------------------------------------------------------------------
"x": "If you hate typing, http://bmndr.co is a new alias &amp; other aliases work correctly now, always preserving the whole URL when redirecting to beeminder.com",
"u": ["https://twitter.com/beemuvi/status/908098346694279168",
     "https://github.com/beeminder/beeminder/issues/89"],
"t": "2017-09-13",
"c": "beeminder.com bminder.com bmndr.com bmndr.co kibotzer.com",
}, { // ------------------------------------------------------------------------
"x": "Increasing your pledge now causes the graph to refresh so you don't see the wrong amount in the watermark. #bugfix",
"u": ["https://twitter.com/beemuvi/status/908479576187142144",
      "https://github.com/beeminder/beeminder/commit/ec7f390070ca46004a9f91200ea6e54d5872b120"],
"t": "2017-09-14",
"c": "Aka Beebrain refresh aka rebraining",
}, { // ------------------------------------------------------------------------
"x": "We now set the start of the road on goal creation, not infer it from the first datapoint. Fewer surprise derails when adding past data!",
"u": ["https://twitter.com/beemuvi/status/908479718231384064",
      "https://github.com/beeminder/beeminder/commit/a511a678046e5e537cf13b4c29b33c70b39e1109",
      "https://github.com/beeminder/beeminder/commit/d70e08b73f8d6e35a3800bce73a03fa25be66191"],
"t": "2017-09-14",
"c": "Caused problems when adding historical data, or we imported it automatically for autodata goals. Does the latter justify a 2nd UVI for this?"
}, { // ------------------------------------------------------------------------
"x": "2 #mini UVIs: include query string when redirecting to beeminder.com/changelog?shownotes=1 & prettier zapminder.com landing page",
"u": ["https://twitter.com/beemuvi/status/908831955906576384",
      "https://github.com/beeminder/beeminder/commit/5b0cd7aa144ecb72f2a9fc76d6ec9ae0ade3b4c4",
      "https://github.com/beeminder/beeminder/commit/b630d1c4c3e6fdcd3481dd0eaf950cca039466af",
      "https://trello.com/c/I5YikOMp/758-zapier-landing-page"],
"t": "2017-09-15",
}, { // ------------------------------------------------------------------------
"x": "We now send an email alert with debug info to you if your registered zeno webhook fails (used to say/do nothing)",
"u": ["https://twitter.com/beemuvi/status/908832154167029765",
      "https://github.com/beeminder/beeminder/issues/122"],
"t": "2017-09-15",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in UVI#2407: we were treating any non-200 response as \"failure\", even, e.g., 201 (successfully created). HT @samstokes",
"u": ["https://twitter.com/beemuvi/status/909910864915980288",
      "https://github.com/beeminder/beeminder/commit/189a7a6f808b368ecfc5bd4f7bcad83b84dc4fb7"],
"t": "2017-09-18",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Far superior road editor, by Uluc Saranli, in Javascript. Visual, interactive, available to all (not just premium): http://road.glitch.me",
"u": ["https://twitter.com/beemuvi/status/910291401144909824"],
"d": "2017-07-21",
"t": "2017-09-19",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in visual road editor: floating point comparison bug meant roads were sometimes wrongly rejected as invalid",
"u": ["https://twitter.com/beemuvi/status/910291871137636352",
      "https://github.com/beeminder/road"],
"d": "2017-09-19",
"t": "2017-09-19",
}, { // ------------------------------------------------------------------------
"x": "In the commitment tab aka road dial, we'd sometimes show the wrong inferred (grayed out) value when setting goaldate/value/rate. #bugfix #redesign",
"u": ["https://twitter.com/beemuvi/status/910654150182027265",
      "https://github.com/beeminder/beeminder/commit/1f54e7b1b331c2388149b2e6bee22acfa85e32c7"],
"t": "2017-09-20",
"c": "This was just in the javascript, not in what was actually submitted",
}, { // ------------------------------------------------------------------------
"x": "If your current rate was 0 &amp; you changed it from, eg, daily &rarr; weekly, we'd show 'NaN' for your rate (divide-by-zero error) #bugfix #redesign",
"u": ["https://twitter.com/beemuvi/status/910657444291895297",
      "https://github.com/beeminder/beeminder/commit/0c42c49c68815037827f837dd1d73730f5483119"],
"t": "2017-09-20",
}, { // ------------------------------------------------------------------------
"x": "More road dial fixes: say 'Goal total' not 'Goal value' for cumulative goals, and fixed some bad rounding. #bugfix",
"u": ["https://twitter.com/beemuvi/status/911014350021844992",
      "https://github.com/beeminder/beeminder/commit/ca823fda5183948a2460b620753e84bf920bcadd"],
"t": "2017-09-21",
}, { // ------------------------------------------------------------------------
"x": "Fixed the rounding bugfix from UVI#2413 in the road dial. Also we had broken inferred rate etc for exponential roads. #bugfix #redesign",
"u": ["https://twitter.com/beemuvi/status/911369725111709696",
      "https://github.com/beeminder/beeminder/commit/624efc0545009c428c100c9babf5fa3a58da6f9e"],
"t": "2017-09-22",
"c": "In the rate field I applied shownum to the value, but the steppers already do that, and shownum returns a string, so when you pass the output of shownum back into shownum, you get nil, and then we show 'NaN' in the rate field if Rate is not grayed out",
}, { // ------------------------------------------------------------------------
"x": "Lots of improvements, additions, and copyediting to http://help.beeminder.com &mdash; 98 articles now!",
"u": "https://twitter.com/beemuvi/status/911374737078489088",
"t": "2017-09-22",
"c": "Almost entirely by Chelsea. First announced in UVI#2388",
}, { // ------------------------------------------------------------------------
"x": "Removed \"mean\" option from the list of aggday methods for custom goals since it was redundant. Just \"true mean\" and \"uniquified mean\". #mini",
"u": ["https://twitter.com/beemuvi/status/912461624883126277",
      "http://forum.beeminder.com/t/documentation-of-aggregation-methods-would-be-nice/549/4?u=dreev",
      "https://trello.com/c/xl4hODJX/842-deprecate-uniqmean-or-mean",
      "https://github.com/beeminder/beeminder/commit/b2470570f264b224b3c096812fc2e6e94b2535f4"],
"t": "2017-09-25",
}, { // ------------------------------------------------------------------------
"x": "We now link to http://help.beeminder.com in the footer, and the help page has its own fancy contact form",
"u": ["https://twitter.com/beemuvi/status/912824358896230400",
      "https://github.com/beeminder/beeminder/commit/e47aef1187bf06e664101c7d096f696afbe2f93a"],
"t": "2017-09-26",
}, { // ------------------------------------------------------------------------
"x": "On goal pages for autodata, centered the icon and the refresh/sync button nicely. #mini HT @adamwwolf",
"u": ["https://twitter.com/beemuvi/status/912830116228558848",
      "https://github.com/beeminder/beeminder/commit/420fd422b129b989691048eece434fce0f5fa2fb"],
"t": "2017-09-26",
"c": "This is in the data box to the right of graphs. The sync icon was weirdly/uglily squished up together with the text.",
}, { // ------------------------------------------------------------------------
"x": "You can now edit what Todoist projects and labels your Beeminder goal is tracking at any time (in goal settings). HT wswld",
"u": ["https://twitter.com/beemuvi/status/913190553218453504",
      "https://github.com/beeminder/beeminder/commit/cfef19a89e53a68d2feae4f7a484794eb3359177",
      "http://forum.beeminder.com/t/editing-todoist-goal/3497/3"],
"t": "2017-09-27",
}, { // ------------------------------------------------------------------------
"x": "Fixed up the alignment of the labels/projects in Todoist goal creation so they look nicer. #mini",
"u": ["https://twitter.com/beemuvi/status/913541417711968256",
      "https://github.com/beeminder/beeminder/commit/c92f0d48146d5db8457e24da12ee1988e5a0d299"],
"t": "2017-09-28",
}, { // ------------------------------------------------------------------------
"x": "Client-side checking for if a scheduled break was w/in the akrasia horizon was a little wrong. Now enforces exactly 7 days always. #bugfix",
"u": ["https://twitter.com/beemuvi/status/913545323041001472",
      "https://github.com/beeminder/beeminder/issues/128",
      "https://github.com/beeminder/beeminder/commit/7406b89211a3234b0afcad27ae0509d9b208a7f3",
      "https://github.com/beeminder/beeminder/commit/1ab25808590840736d4c8baf86c3115c7d2fea28"],
"t": "2017-09-28",
"c": "We were checking the bounds in the js, and because of how we were generating Dates in js (and because of timezones) we had this \
thing where sometimes you’d be comparing a date-at-midnight (constructed by parsing a calendar date in string form) to a date \
that’s constructed by adding days to the current time. \
So we hedged against that by just using +6 days instead of +7, which made it OK-most-of-the-time-maybe-especially-in-US-timezones. \
Now it's fixed for real.",
}, /* --------------------------------------------------------- end 2017sep */ ]

batches['2017oct'] = [ {
"f": true,
//"n": 2422,
"x": "(+) Improvements to restarting goals!",
"u": ["https://twitter.com/beemuvi/status/915364844798304256",
      "https://github.com/beeminder/beeminder/pull/129"],
"t": "2017-10-03",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "(1) For starters, it's all way prettier and with lots of small UI/webcopy improvements...",
"u": "https://twitter.com/beemuvi/status/915364844798304256",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(2) We now ask for the rate you actually want (instead of starting with an infinitely flat road).",
"u": "https://twitter.com/beemuvi/status/915365142447005696",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(3) Restarting with an infinitely flat yellow brick road was especially broken for do-less goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/915366498801131520",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(4) We now let you choose whether / how much safety buffer to (re)start with (and it does the right thing for do-less).",
"u": "https://twitter.com/beemuvi/status/915367499750711296",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(5) We give you the chance to reconsider your pledge cap (though you can always do this any time so it's just a UI thing).",
"u": "https://twitter.com/beemuvi/status/915367926055628800",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(6) We get the minimum pledge right, rather than force a $5 pledge for successful $0 goals, or for Beemium users. #bugfix",
"u": ["https://twitter.com/beemuvi/status/915369237941587968",
      "https://trello.com/c/Hu1Myw0o/562-restarting-a-goal-with-0-pledge-and-0-cap-forces-you-to-up-the-pledge-to-5"],
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(7) Got rid of the condescending \"are you sure?\" interface for the new pledge, which was especially broken ever since #redesign.",
"u": "https://twitter.com/beemuvi/status/915369547116421120",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "(8) The graph is now zoomed in by default (t-min setting) to hide everything from before the restart.",
"u": "https://twitter.com/beemuvi/status/915369927472594944",
}, { // ------------------------------------------------------------------------
"x": "If you unticked all your labels/projects in goal settings for Todoist goals you would get a 500 error when you submitted. #bugfix",
"u": ["https://twitter.com/beemuvi/status/917538322087518208",
      "http://forum.beeminder.com/t/editing-todoist-goal/3497/6?u=dreev",
      "https://github.com/beeminder/beeminder/commit/466f8c58e0a3465e6ace0d0da2b2c255885826c0"],
}, { // ------------------------------------------------------------------------
"x": "Premium folks now get a link to the fancy interactive road editor in the Settings tab of their goals. #mini",
"u": ["https://twitter.com/beemuvi/status/917538417277263872",
      "https://github.com/beeminder/beeminder/commit/b52d6a4cd833335b9d87e7730b37df17a1f1c72d"],
}, { // ------------------------------------------------------------------------
"x": "We closed a loophole with shortcircuiting pledges via the API (and via a weird browser/wifi glitch when mashing the submit button). #bugfix",
"u": ["https://twitter.com/beemuvi/status/917893706241392640",
      "https://github.com/beeminder/beeminder/commit/a7fdf20fb72808bb32cf40a514f1d05ca8c94382",
      "https://github.com/beeminder/beeminder/commit/c27e155b363974c40783b867f444ad910c0a7a76"],
"t": "2017-10-10",
"d": "2017-10-10",
"c": "The API call (which the web interface also uses underneath) now checks if you're actually allowed to shortcuit your pledge, i.e., you have a payment method on file and the right premium plan",
}, { // ------------------------------------------------------------------------
"x": "We're verrrrry gradually open-sourcing more parts of Beeminder and have various libraries and projects at github.com/beeminder -- enjoy!",
"u": "https://twitter.com/beemuvi/status/917894313840803840",
"t": "2017-10-10",
"c": "This UVI is just for the collection itself, or the Beeminder organization on GitHub. Not sure how much of the stuff there could count as improvements to Beeminder in their own right.",
}, { // ------------------------------------------------------------------------
"x": "Added a warning about how you should specify your rate units as daily if you use the weekends-off feature",
"u": ["https://twitter.com/beemuvi/status/918264680539234304",
      "https://github.com/beeminder/beeminder/commit/c6576184ddbe63481381074529562afdc4b9385a"],
"c": "If you say 2/week with weekends-off then what Beeminder thinks is that you want 2/7 per day, 5 days a week. Which is less than the 2/week you probably thought you were specifying. If we force you to convert it to a daily rate then you’re less likely to be surprised. You know you have to do 2/5 per day, 5 days a week, to get 2 per week total.",
}, { // ------------------------------------------------------------------------
"x": "Arithmetic in the road dial! You can say, eg, you want to do 7/5+1/14 for \"7 per 5 day week &amp; build a day of safety buffer every 14 days\"",
"u": ["https://twitter.com/beemuvi/status/918265256840871936",
      "https://github.com/beeminder/beeminder/commit/4d049bae3394f424c6c91c55490e5876532bf4f1",
      "https://github.com/beeminder/beeminder/commit/b34719e307015a3745ec5197ca7636a53841c3b4"],
"c": "Also in the re-scale tool, which previously could just do fractions. See UVI#1057.",
}, { // ------------------------------------------------------------------------
"x": "When you create a goal with goal units \"hours\" we default the \"Show data in HH:MM format\" setting to true.",
"u": ["https://twitter.com/beemuvi/status/918623993363599360",
      "https://github.com/beeminder/beeminder/commit/95e8172c3bd5d1d6229d11b0f57d056b289c8e05"],
"d": "2017-10-12",
"t": "2017-10-12",
"c": "We used to magically use HH:MM format when gunits was \"hours\" (see UVI#1678) before we had a setting for that, which broke at some point, perhaps in the #redesign",
}, { // ------------------------------------------------------------------------
//"n": 2437,
"x": "Specifying goal units when you create a goal is no longer optional",
"u": ["https://twitter.com/beemuvi/status/918625165780463616",
      "https://github.com/beeminder/beeminder/commit/31d0166fdac4b6bd2cf0b780a9f49e5fe719bf5d"],
"d": "2017-10-12",
"t": "2017-10-12",
}, { // ------------------------------------------------------------------------
//"n": 2438,
"x": "(+) Road editor improvements at http://road.glitch.me",
"u": "https://twitter.com/beemuvi/status/918981476628119552",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "(1) There's a take-a-break interface!",
"u": "https://twitter.com/beemuvi/status/918981476628119552",
}, { // ------------------------------------------------------------------------
//"n": 2439,
"s": true,
"x": "(2) If you just want to change the amount you're committing to per day or per week there's a simple UI for that a la the classic road dial",
"u": "https://twitter.com/beemuvi/status/918981985049047041",
}, { // ------------------------------------------------------------------------
//"n": 2440,
"s": true,
"x": "(3) Fixed a timezone bug relating to the x-axis tick marks. Bonus UVI: Tweaks to the button styles and other CSS tweaks (thanks Bootstrap).",
"u": ["https://twitter.com/beemuvi/status/918982136467677184",
      "https://github.com/beeminder/road/pull/27",
      "https://github.com/beeminder/road/pull/28"],
}, { // ------------------------------------------------------------------------
"x": "Arithmetic for datapoint values (eg, fractions, or a tally of things like \"3+2+4\") but just on the dashboard &amp; basic data entry form &amp Data tab so far",
"u": ["https://twitter.com/beemuvi/status/920075291388608512",
      "https://github.com/beeminder/beeminder/commit/cb72e30171e2c57c434c6fbd1dd2faedff38db70"],
"d": "2017-10-16",
"t": "2017-10-16",
"c": "Ie, anywhere where you're entering a number in a single field. Does not work in advanced data entry and the email and sms and slack bots and IFTTT and the phone apps and... wow, there are a lot of ways to interact with Beeminder, eh?",
}, { // ------------------------------------------------------------------------
"x": "If your goal units are hours (technically even if they aren't) you can specify the steepness of your yellow brick road in HH:MM format",
"u": ["https://twitter.com/beemuvi/status/920428372252958720",
      "https://github.com/beeminder/beeminder/commit/3068d4f21e9c4b747cd9d5be057ebf65e0678738"],
"d": "2017-10-17",
"t": "2017-10-17",
}, { // ------------------------------------------------------------------------
"x": "Hovertexts on datapoints no longer go missing after clicking Load All Data. #bugfix",
"u": ["https://twitter.com/beemuvi/status/920433051078815745",
      "https://github.com/beeminder/beeminder/issues/132"],
"d": "2017-10-17",
"t": "2017-10-17",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Goals w/ earlybird deadlines (before midnight) wouldn't let you change them w/in 24 hours of the deadline instead of T-6 hours. #bugfix",
"u": ["https://twitter.com/beemuvi/status/920775105277345797",
      "https://github.com/beeminder/beeminder/issues/42"],
"d": "2017-10-18",
"t": "2017-10-18",
"c": "E.g., at 9pm the night before a 7pm beemergency you couldn't snooze the deadline. Since it was still the same calendar day, our validation was getting confused and thinking that your deadline was past, or less than 6 hours from now, so we shouldn't let you change it, but in fact the actual deadline was 22 hours in the future, not 2 hours in the past, in that example!",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "On the dashboard we no longer let you toggle to show your absolute amount due for auto-summing goals because it never makes sense and just adds confusion",
"u": ["https://twitter.com/beemuvi/status/921163384770490368",
      ],
"d": "2017-10-19",
"t": "2017-10-19",
}, { // ------------------------------------------------------------------------
"x": "The arithmetic magic would make you submit the value twice if you hit enter (it'd try to submit the raw expression the 1st time). #bugfix",
"u": ["https://twitter.com/beemuvi/status/921163581932167169",
      "https://github.com/beeminder/beeminder/commit/9afecae0d1f7ac776c24a088aa1d8069ccbe3e68"],
"d": "2017-10-19",
"t": "2017-10-19",
}, { // ------------------------------------------------------------------------
"x": "You can now beemind the most recently added languages on @duolingo: Korean and Czech. And High Valyrian because, y'know, nerds.",
"u": ["https://twitter.com/beemuvi/status/921525817145831424",
      "https://github.com/beeminder/beeminder/commit/11e129decd21be2047fb0768ec7a9c9f71e7c552"],
"d": "2017-10-20",
"t": "2017-10-20",
}, { // ------------------------------------------------------------------------
"x": "The SMS bot is more clear and coherent in reporting errors now (including saying \"ERROR\" so it's nice and obvious)",
"u": ["https://twitter.com/beemuvi/status/922609834658226177",
      "https://github.com/beeminder/beeminder/commit/297ea29cd0aa5f928b99252b2b12aa4fded6e142"],
"d": "2017-10-20",
"t": "2017-10-23",
}, { // ------------------------------------------------------------------------
"x": "Fixed a race condition (that could derail you!) by no longer replacing existing Misfit datapoints that matched what Misfit API said. #bugfix",
"u": ["https://twitter.com/beemuvi/status/922613996653613056",
      "https://github.com/beeminder/beeminder/commit/856af3c8490ecffebc8909462c2af2e9b5b8acef"],
"d": "2017-10-23",
"t": "2017-10-23",
"c": "This was a two character change ('>' to '!=') and the full details of what all was going wrong and why and with what repercussions is in the commit message"
}, { // ------------------------------------------------------------------------
"x": "Previous fix also makes Misfit consistent w/ Fitbit in always treating Misfit's data as gospel, overwriting changes made Beeminder-side",
"u": "https://twitter.com/beemuvi/status/922933878641139712",
"d": "2017-10-23",
"t": "2017-10-24",
"c": "Maybe that mostly matters as an anti-cheating measure, always believing the autodata source, not your pathetic human entries. Of course if you edit your data at the source then Beeminder should always reflect that as well. The point is, Beeminder should always mirror the source of the data.",
}, { // ------------------------------------------------------------------------
"x": "Todoist integration #bugfix: goals weren't automatically recommitting when you derailed! HT @realchrisbutler",
"u": ["https://twitter.com/beemuvi/status/922934004973674496",
      "https://github.com/beeminder/beeminder/commit/2876cb7fc5e10936aee872022281bc25fe889a97"],
"t": "2017-10-24",
"c": "This is technical debt sadness because of how frickin complex/delicate the whole lifecycle of Beeminder goals is. Apparently don't save a goal in an autofetch callback or it will cause this no-automatic-recommit bug.",
}, { // ------------------------------------------------------------------------
"x": "Buttons now subtly change tint when the mouse is on them to help you notice that they're buttons. Nerdspeak: new hover effects.",
"u": ["https://twitter.com/beemuvi/status/923337907217227776",
      "https://github.com/beeminder/beeminder/commit/c338d6fe0f8855f0e957eddff9500280210f268b"],
"d": "2017-10-25",
"t": "2017-10-25",
}, { // ------------------------------------------------------------------------
"x": "3+ #mini UVIs: Typo fixes (HT <a href=\"https://www.graysonbraymorris.com/\">Grayson Bray Morris</a>); Blog sidebar defines \"akratic\"; Fixed redirect for http://uservoice.beeminder.com",
"u": ["https://twitter.com/beemuvi/status/923696202629103616",
      "https://github.com/beeminder/beeminder/commit/254e147beb79aee44ad886372ae1ccec74131b06",
      "https://github.com/beeminder/beeminder/commit/656c2fc16bcc94448c4f1b3d906829c4fd5e389f"],
"t": "2017-10-26",
"c": "Grayson pointed out that capitalizing \"Doctor\" in \"Doctor's note\" looked wrong, though Bee was probably doing it on purpose, kind of A.A. Milne style. Anyway, we were also misspelling \"weaseling\" and \"weaseler\" and a mishap with Ruby's stupid capitalize() function made us not capitalize \"Beeminder\"! As for \"akratic\", we just added that that's the adjectival form of \"akrasia\" since we use both so much without defining them.",
}, { // ------------------------------------------------------------------------
"x": "Negative UVI :( Beedroid's Google sign-in broke so as a stopgap we published v2.6.1 that doesn't have the Google icon. HT @adamwwolf",
"u": "https://twitter.com/beemuvi/status/924059454617747456",
"d": "2017-10-27",
"t": "2017-10-27",
"c": "More than a hat-tip to Adam -- he actually dove in and made the change and recompiled and shipped this for us!"
}, { // ------------------------------------------------------------------------
"x": "Another #mini: we fixed more redirects so http://help.bmndr.co &amp; http://help.bmndr.com &amp; http://help.beeminder.com all point to the same place",
"u": "https://twitter.com/beemuvi/status/924059785292496896",
"d": "2017-10-27",
"t": "2017-10-27",
"c": "It's hosted on HelpScout but we can only use one CNAME so the others are redirects to help.beeminder.com",
}, { // ------------------------------------------------------------------------
"x": "And a big one, at least as measured by how much people've been wanting it: extra dates in dropdowns in the dashboard &amp; newbee data entry form",
"u": ["https://twitter.com/beemuvi/status/924060257998979072",
      "https://github.com/beeminder/beeminder/commit/599754dd0df137d5a4cee096b9c3a87c54d6b000"],
"d": "2017-10-27",
"t": "2017-10-27",
}, { // ------------------------------------------------------------------------
"x": "If you want a date further back, there's now also an \"Advanced Entry\" entry in the date dropdowns linking to goal page w/ the form expanded",
"u": ["https://twitter.com/beemuvi/status/925492344245194752",
      "https://github.com/beeminder/beeminder/commit/61ba3bf059f6ba14d0ef785db5c91dca7ce78f76",
      "https://github.com/beeminder/beeminder/commit/7169ee3d900b29845c50d52e1001b6826ba84210",
      "https://github.com/beeminder/beeminder/commit/5b35c8a4b0605eba0331b3f859d6991d767dcfeb"],
"d": "2017-10-31",
"t": "2017-10-31",
"c": "Also the fact that there's now a deep link for the advanced entry form which is sort of a UVI itself, maybe, kind of.",
}, { // ------------------------------------------------------------------------
"x": "Fixed hover effect on some buttons that made text turn white instead of yellow on black. And some very minor color tweaking. #mini",
"u": ["https://twitter.com/beemuvi/status/925496574716755968",
      "https://github.com/beeminder/beeminder/commit/52204208ad755b8a86665f38947e17dc58e7b6e1"],
"t": "2017-10-31",
"c": "They are really a-tags that are just styled to look like buttons. And changed the yellow color for text on black to be a slightly paler shade of the same yellow, because of contrast and looking slightly better without actually looking like a different color."
}, /* --------------------------------------------------------- end 2017oct */ ]

batches['2017nov'] = [ {
}, { // ------------------------------------------------------------------------
"x": "Barely user-visible mass-mailer #bugfix: if you unsubscribe after an email is queued, we check again to make sure it's still ok to send",
"u": ["https://twitter.com/beemuvi/status/925865728263143425",
      "https://github.com/beeminder/beeminder/commit/5f1a6d2f8f713717365068d6f61982186136e657"],
"t": "2017-11-01",
"c": "We weren't using your current mail frequency when we went to send the massmail to you. Since large mailings take a long time, this meant that if you happen to decrease your mail freq in a certain window of time, we might send you an email anyway. Now we are more conservative and basically re-check that you still want, e.g., monthly mails before actually sending the mail",
}, { // ------------------------------------------------------------------------
"x": "<a href=\"http://road.glitch.me\">Road editor</a> improvements: better auto-scrolling & date highlighting in the table on the right as you hover over things in the graph",
"u": "https://twitter.com/beemuvi/status/926230542256869376",
}, { // ------------------------------------------------------------------------
"x": "Even better: start of the road & the column headings stay put when scrolling & final road segment (aka road dial) is highlighted & stays put",
"u": "https://twitter.com/beemuvi/status/926230654962032641",
}, { // ------------------------------------------------------------------------
"x": "Also in the <a href=\"http://road.glitch.me\">road editor</a>: got rid of the ugly checkboxes and made it so you can just click the fields to change which of the 3 is inferred",
"u": "https://twitter.com/beemuvi/status/926231015575773184",
}, { // ------------------------------------------------------------------------
"x": "Also in http://road.glitch.me: a #bugfix w/ the day we show when it's before midnight but after the deadline, & don't show YBR before road start",
"u": "https://twitter.com/beemuvi/status/926231319599861765",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "\"Save & Send a Test\" button in the goal reminder settings to send a test alert immediately via all your chosen channels. AKA zeno-me-now.",
"d": "2017-11-03",
"t": "2017-11-06",
"u": ["https://twitter.com/beemuvi/status/927658354687688706",
      "https://github.com/beeminder/beeminder/commit/a8237675c1a93ee6efa15be1c2df62363f1bbd0b"],
"c": "Adds a \"force\" parameter to ensure it gets sent when the user is queueing it up manually like this, otherwise when it comes off the queue the system would notice that it's not time for a zeno and kill it.",
}, { // ------------------------------------------------------------------------
"x": "Added hovertext to help explain the zeno-me-now and fixed some hovertext with formatting problems on the front page. #mini &times;2",
"d": "2017-11-07",
"t": "2017-11-07",
"u": ["https://twitter.com/beemuvi/status/928028820124213248",
      "https://github.com/beeminder/beeminder/commit/6f28d5b8fc41501db9b4608a94375fda006ad8f0"],
}, { // ------------------------------------------------------------------------
"x": "We were rounding in the wrong places and there were cases where we could charge $1 more than what beeminder.com/premium said. #bugfix",
"d": "2017-11-07",
"u": ["https://twitter.com/beemuvi/status/928308589801783297",
      "https://github.com/beeminder/beeminder/commit/75fd58abf794fc1fc7ebb6cc1e83333b27209fdd"],
"c": "New rule, which should've been obvious all along: don't round charge amount the until last minute!",
}, { // ------------------------------------------------------------------------
"x": "In email that says, eg, \"subscription charge for 12 months of a infinibee sub...\" we now say \"a year\", \"an\", \"Infinibee\", etc. #mini #bugfix",
"d": "2017-11-07",
"u": ["https://twitter.com/beemuvi/status/928398469001224193",
      "https://github.com/beeminder/beeminder/commit/acc64b4eedf9e932cd47ceef36cbebc042213c29"],
}, { // ------------------------------------------------------------------------
"x": "No more hard resets on graphs so you can always zoom out to see entire history and cumulative totals always include all data",
"t": "2017-11-09",
"u": ["https://twitter.com/beemuvi/status/928729684975632385",
      "https://github.com/beeminder/beeminder/commit/5b43a25a767aceb320ee830f75375e00985eb539"],
"c": "Ie, we finally fully purged the sadreset parameter, an important pre-req for YBHP. This is like UVI#1631 for everything.",
}, { // ------------------------------------------------------------------------
"x": "Now robust to temporary errors from Todoist's API, automatically retry data fetching. Less spurious zenos or need to manually hit refetch!",
"d": "2017-11-02",
"t": "2017-11-10",
"u": ["https://twitter.com/beemuvi/status/928729684975632385",
      "https://github.com/beeminder/beeminder/commit/a983a45802cb43f18f8b35e28272931ee7e20010"],
}, { // ------------------------------------------------------------------------
"x": "For our Habitica integration, the link to Custom Day Start and to get your credentials on Habitica changed so we updated the links! #mini",
"u": ["https://twitter.com/beemuvi/status/930227037180063745",
      "https://github.com/beeminder/beeminder/issues/109",
      "https://github.com/beeminder/beeminder/commit/a520d47fffdb49f50344ce631a6e733098b13e40",
      "https://github.com/beeminder/beeminder/commit/9c044cacabd315b2013740b00e07ef64a1ad5a4d"],
"c": "By Chelsea and Alys"
}, { // ------------------------------------------------------------------------
"x": "Added a super basic captcha-like field to prevent spam signups (\"Prove you're a human by telling us what color the yellow brick road is\")",
"d": "2017-11-13",
"t": "2017-11-13",
"u": ["https://twitter.com/beemuvi/status/930231723773763584",
      "https://github.com/beeminder/beeminder/commit/d1f3492ef53cef75a83f90e7c6e30e136c9084ff"],
"c": "Spoiler: it's yellow. This is a prelude to http://doc.bmndr.com/bsignups and to see if it starts filtering any dumb bots out and if they adapt",
}, { // ------------------------------------------------------------------------
//"n": 2472,
"x": "Version 4.8 of iOS app finally fully (?) fixes duplicate datapoints in Apple Health integration. And Mindful Minutes no longer overwrites data with zeros! #bugfix",
"t": "2017-11-14",
"u": ["https://twitter.com/beemuvi/status/930567584272891904",
      "http://forum.beeminder.com/t/bug-fixes-for-apple-health-integration/3592?u=dreev"],
}, { // ------------------------------------------------------------------------
//"n": 2473,
"x": "We're killing off auto-widening roads! The 1st thing that means for users is that new weight loss goals ask \"What's the *most* your weight can change in 1 day?\"",
"d": "2017-11-15",
"t": "2017-11-15",
"u": ["https://twitter.com/beemuvi/status/930960914840412161",
      "https://github.com/beeminder/beeminder/commit/ac17f9e3c5a31f2f30883d4d9c7f5d85becf8495"],
}, { // ------------------------------------------------------------------------
//"n": 2474,
"f": true,
"x": "Big change: New weight loss roads no longer have lanes! They have zero width but use the max fluctuation you specified to give you an initial safety buffer",
"d": "2017-11-15",
"t": "2017-11-15",
"u": ["https://twitter.com/beemuvi/status/930961370706624512",
      ],
}, { // ------------------------------------------------------------------------
//"n": 2475,
"x": "Remember UVI#181 & UVI#570? We've thrown away that whole \"weight loss leniency\" feature. Instead just specify the max fluctuation you think you'll need!",
"t": "2017-11-16",
"u": ["https://twitter.com/beemuvi/status/931309140026195968",
      ],
"c": "To clarify: UVI#2473 is adding the new feature where we ask the user for their max fluctuation (flux, we call it) and this UVI is killing the leniency feature (not needed since you're specifying flux)",
}, { // ------------------------------------------------------------------------
"x": "Next consequence of killing off auto-widening roads: the parameter called \"noisy\" is deprecated and removed from the API (see beeminder.com/api)",
"t": "2017-11-17",
"u": ["https://twitter.com/beemuvi/status/931686779320545280",
      "https://github.com/beeminder/apidocs/commit/53fa80ab74b9ec7d97dd2d1852419011d41d8089"],
}, { // ------------------------------------------------------------------------
"x": "The white \"x\" that lets you close a flash message banner (e.g. \"Datapoint updated!\" or \"Error: Rate cannot be 0!\") now only shows up *after* the banner itself",
"t": "2017-11-20",
"u": ["https://twitter.com/beemuvi/status/932772700891766784",
      ],
"c": "I guess it looked weird (though wasn't always noticeable depending on the width of your browser window and what was behind id) for the X to show up first before the rest of the banner. Now it fades in after the banner.",
}, { // ------------------------------------------------------------------------
"x": "UVI#2471 broke sign-up in the Android app (we kind of forgot Beedroid could do that!) -- now fixed! #bugfix",
"d": "2017-11-20",
"t": "2017-11-20",
"u": ["https://twitter.com/beemuvi/status/932773069520740353",
      ],
}, { // ------------------------------------------------------------------------
"x": "And similar #bugfix for signing up with Google, Twitter, GitHub, and Facebook!",
"t": "2017-11-21",
"u": ["https://twitter.com/beemuvi/status/933130723774447616",
      "https://github.com/beeminder/beeminder/commit/e29078c4ebe56b8f58b73b4644be53cd486117de"],
"c": "We caught this one (oauth sign-up) before Beedroid sign-up and forgot to announce it here till after. In retrospect we'd probably combine them into one UVI but they were separate fixes in the code.",
}, { // ------------------------------------------------------------------------
"x": "Error alert banners (especially in goal creation) were really slow / delayed showing up; now they're not! #mini #bugfix",
"u": ["https://twitter.com/beemuvi/status/933494356320722944",
      ],
}, { // ------------------------------------------------------------------------
"x": "#mini 2-for-1: Made http://beeminder.com/faq stop telling lies about PayPal (like us not supporting it); you can now beemind Chinese on Duolingo (& 27 other languages)",
"u": ["https://twitter.com/beemuvi/status/933494636559024128",
      "https://github.com/beeminder/beeminder/commit/9c67cc78a645a4e8bd32fe511682a8dfb0f7f137"],
}, { // ------------------------------------------------------------------------
"x": "Fixed a margin on an error message in the sign-up UI; and we were briefly spelling 'subscription' as 'suscription' #bugfix #mini ×2",
"d": "2017-11-15",
"t": "2017-11-23",
"u": ["https://twitter.com/beemuvi/status/933830289054420992",
      "https://github.com/beeminder/beeminder/commit/e29078c4ebe56b8f58b73b4644be53cd486117de"],
}, { // ------------------------------------------------------------------------
"x": "Some refactoring of goalnames and goal descriptions caused a crash in the iPhone app when a goal description wasn't set. Now fixed! #bugfix",
"d": "2017-11-27",
"t": "2017-11-27",
"u": ["https://twitter.com/beemuvi/status/935311188216356865",
      "https://github.com/beeminder/beeminder/commit/076a5b4f1b573a7a45136aa5ae03a1670f6b456e?w=1"],
}, { // ------------------------------------------------------------------------
"x": "Made our Todoist integration follow the 7-day rule that applies to most other autodata sources. #bugfix for insta-derailing by editing old tasks on Todoist.",
"d": "2017-11-28",
"t": "2017-11-28",
"u": ["https://twitter.com/beemuvi/status/935670749485920256",
      "https://github.com/beeminder/beeminder/commit/24a8be19c2e58089e956da89801423d953c1dda0"],
}, { // ------------------------------------------------------------------------
"x": "<a href=\"https://itunes.apple.com/us/app/beeminder/id551869729\">iOS app version 4.8.1</a>: Small #bugfix for some people with Apple Health goals that was crashing the app for people. Sorry about that!",
"u": "https://twitter.com/beemuvi/status/935671275539775488",
"t": "2017-11-28",
}, { // ------------------------------------------------------------------------
"x": "In Withings (now Nokia) goal creation, we forgot to ask for max daily fluctuation (UVI#2474) so new goals started you on the razor's edge. #bugfix",
"u": ["https://twitter.com/beemuvi/status/936035595087777792",
      "https://github.com/beeminder/beeminder/commit/316649e1372746713455998e0d7ef374418e865e"],
}, { // ------------------------------------------------------------------------
"x": "When you click to force an auto-fetch of new data for autodata goals we add the datapoint to the list below the graph immediately. No page refresh needed.",
"u": ["https://twitter.com/beemuvi/status/936036409642590208",
      "https://github.com/beeminder/beeminder/issues/112",
      "https://github.com/beeminder/beeminder/commit/20a236d2b1eafc41b0456fe4db60c25383a913a1"],
}, { // ------------------------------------------------------------------------
"x": "URLminder would, in somewhat rare circumstances, record duplicate datapoints. #bugfix",
"d": "2017-11-30",
"t": "2017-11-30",
"u": ["https://twitter.com/beemuvi/status/936390851483148288",
      "https://github.com/beeminder/beeminder/commit/35e1e6151a0c36f19d75502ba7d82b307ba71a4f"],
"c": "We were grabbing the latest datapoint and comparing the value, then only adding the new datapoint if the value changed. Except we were grabbing \"latest\" by the daystamp, not ID, which meant that we were getting the first datapoint from the most recent day, not the most recently entered. Meaning, if there were multiple datapoints for today you could get something where your datapoints are: 28 120, 28 120, 28 120, 28 100. The next time we'd go to look, we'd see 28 100 as the \"latest\" datapoint and add 120 again. I was surprised this wasn't rampant, but on looking at my own data, and at a bunch of URLminder data, convinced myself that we didn't see more of it because we don't check very frequently when you're not red, and then, for me, when I'm red and forcing refresh all the time, it's while I'm writing, so the count is climbing, so there aren't duplicates. I did confirm other instances of this in the wild, but it turns out to be fairly rare.",
}, /* --------------------------------------------------------- end 2017nov */ ]

batches['2017dec'] = [ {
}, { // ------------------------------------------------------------------------
"x": "Added rate units dropdown to RescueTime goal creation (had been static text, \"EACH WEEK\", but it was easy to miss and wind up confused). HT Louis Hong",
"t": "2017-12-01",
"t": "2017-12-01",
"u": ["https://twitter.com/beemuvi/status/936738717305266176",
      "https://github.com/beeminder/beeminder/commit/e5a0c7780196a6904ba61b9429a4390d7e62cd94"],
}, { // ------------------------------------------------------------------------
"x": "Cleaned up our so-called press kit, made a URL for it (<a href=\"http://beeminder.com/press\">beeminder.com/press</a>), and linked to it from http://beeminder.com/contact",
"t": "2017-12-01",
"t": "2017-12-01",
"u": ["https://twitter.com/beemuvi/status/936743615203762176",
      "https://github.com/beeminder/beeminder/commit/f4710a39243c5a8f7488d40c478638677c659f3e"],
}, { // ------------------------------------------------------------------------
"x": "And added max daily fluctuation to Fitbit goal creation (cf UVI#2474) #bugfix (Sorry to milk this for 3 UVIs -- Manual/Withings/Fitbit were each lots of work!)",
"d": "2017-12-04",
"u": ["https://twitter.com/beemuvi/status/937845140227375104",
      "https://github.com/beeminder/beeminder/pull/137"],
"c": "Plus Fitbit had extra problems where the data importer was overwriting the vini that was passed in.",
}, { // ------------------------------------------------------------------------
"x": "Fitbit weight loss goal creation now asks if you want pounds or stones or kilograms instead of trusting what's set in Fitbit, which sometimes caused problems",
"u": ["https://twitter.com/beemuvi/status/938193688454246401",
      "https://github.com/beeminder/beeminder/commit/a11856250aca660f6d4ab9814b2bd251bf2700e7"],
}, { // ------------------------------------------------------------------------
"x": "Gmailzero now allows arbitrary deadlines! So you nightowls can stay up late clearing your inboxes. Or the opposite: force yourself to do it by 5pm.",
"d": "2017-12-05",
"t": "2017-12-05",
"u": ["https://twitter.com/beemuvi/status/938194418577768448",
      "https://github.com/beeminder/beeminder/commit/4f4bebe586e1ea031805ce2ad1f77229e9eae06e"],
}, { // ------------------------------------------------------------------------
"x": "We now unset auto-ratchet (max safe days) if you cancel your premium plan. Not to be petty but it was kind of a bug because you can't update it w/o the plan!",
"u": ["https://twitter.com/beemuvi/status/938572174385864704",
      "https://github.com/beeminder/beeminder/commit/4f9325e4a1f46dbbce78a97cdc9450f32adaae6f"],
"c": "HT Chelsea",
}, { // ------------------------------------------------------------------------
"x": "Tiny improvement to the API: dropped the alphanumeric restriction on requestids. See http://api.beeminder.com/#postdata",
"d": "2017-12-07",
"t": "2017-12-07",
"u": "https://twitter.com/beemuvi/status/938933623071240192",
"c": "It turns out everything already worked for non-alphanumeric requestids so all we actually did so far is updated the docs, but this also wants to be an infrahancement where we stop doing the convoluted thing with prepending the goalname (the reason we thought we needed the alphanumeric restriction in the first place).",
}, { // ------------------------------------------------------------------------
"x": "Fixed some broken CSS in the reset password form that had links showing up yellow-on-gray. #bugfix",
"d": "2017-12-07",
"t": "2017-12-07",
"u": ["https://twitter.com/beemuvi/status/938933772635971584",
      "https://github.com/beeminder/beeminder/issues/134"],
}, { // ------------------------------------------------------------------------
"x": "Fixed a wrapping problem on beeminder.com/overview #css #bugfix and tweaked the margins",
"u": ["https://twitter.com/beemuvi/status/939298945368432640",
      "https://github.com/beeminder/beeminder/commit/8e5060b5ed9711289d26e7262f0a3ecf7ed3906a"],
}, { // ------------------------------------------------------------------------
"x": "2 #mini UVI #bugfix's: fixed outdated \"below your graph\" copy in beeminder.com/faq, very brief 500 error from changes to our admin UI that leaked &amp; broke things",
"u": ["https://twitter.com/beemuvi/status/939299381517283328",
      "https://github.com/beeminder/beeminder/commit/1e216682bb467deb4959d06a5e6ec55f6324ed69",
      "https://github.com/beeminder/beeminder/commit/c0c4b37a2c3a1cebfa5ed2ed3b8468ce045e15d6"],
"c": "Changed to \"next to your graph\" -- that's been wrong since the redesign :/",
}, { // ------------------------------------------------------------------------
"x": "We replaced our Google-related logos on the front page with what their brand guidelines demand. #mini",
"d": "2017-12-11",
"t": "2017-12-11",
"u": ["https://twitter.com/beemuvi/status/940384228583149568",
      "https://github.com/beeminder/beeminder/commit/f8b70ef37413f4ae834f87ff22d81b425472d94c",
      "https://github.com/beeminder/beeminder/commit/8fb557e85b66d241cd9a2b2557ddba3f21c1ed12"],
}, { // ------------------------------------------------------------------------
"x": "Added \"Very Productive/Unproductive\" categories to the list of things you can automatically beemind via @rescuetime",
"u": ["https://twitter.com/beemuvi/status/940731458305458177",
      "https://github.com/beeminder/beeminder/commit/d38d1a095f2803314cebe6dfdf01983c311a88dc"],
}, { // ------------------------------------------------------------------------
"x": "Jawbone/Fitbit/Misfit/Withings no longer autofetch and add data to goals that are frozen. Mostly this doesn't matter to users but can make restarting smoother.",
"u": ["https://twitter.com/beemuvi/status/940731859499024384",
      "https://github.com/beeminder/beeminder/commit/289a28c47a408c55cbc221e0e563a5384e9dfb12"],
"c": "PS: Withings is now Nokia which we're mentioning here for future greppability.",
}, { // ------------------------------------------------------------------------
"x": "Since the #redesign in 2016 we've had the y-axis label auto-inferred from the goal units but it failed to account for changing auto-summing. Now manual again.",
"u": ["https://twitter.com/beemuvi/status/941107681271492608",
      "https://github.com/beeminder/beeminder/issues/88",
      "http://forum.beeminder.com/t/y-axis-label-didnt-update-in-graph-after-changed-in-settings/2652"],
"c": "Anti-magic principle",
}, { // ------------------------------------------------------------------------
"x": "We stopped stupidly suggesting you could set your rate to 0 when restarting a goal if unsure what to set it to and now default to previous overall average rate",
"d": "2017-12-14",
"t": "2017-12-14",
"u": ["https://twitter.com/beemuvi/status/941473483615113221",
      "https://github.com/beeminder/beeminder/commit/63c59b4d9af4b684b73592abc93de67f2a1a35af"],
}, { // ------------------------------------------------------------------------
"x": "Another improvement to restarting frozen/finished/archived goals: for the value to restart at, for autodata goals, default to the most recent datapoint value",
"d": "2017-12-14",
"t": "2017-12-14",
"u": ["https://twitter.com/beemuvi/status/941473527110103040",
      "https://github.com/beeminder/beeminder/commit/de906039811be472d143ff7a850d56b0af4db069"],
}, { // ------------------------------------------------------------------------
"x": "Fixed a regex bug in our Slack bot's /charge command that could make it ignore the \"in so-many-minutes\" part &amp; charge you immediately. #bugfix HT Cameron Harris",
"d": "2017-12-15",
"t": "2017-12-15",
"u": ["https://twitter.com/beemuvi/status/941832649768812544",
      "https://github.com/beeminder/beebot/commit/d4899907f7a24b7e6e4d920e4ae314cb6a8fedea"],
}, { // ------------------------------------------------------------------------
"x": "We now ask for max fluctuation as part of restarting a frozen/archived/completed \"noisy\" goal. And show you the calculated \"90% variance\" as a default.",
"u": ["https://twitter.com/beemuvi/status/942912731107045379",
      "https://github.com/beeminder/beeminder/commit/d1077af06fc5eda0a43a907a90f3bb89cc9617e8"],
}, { // ------------------------------------------------------------------------
"x": "Also upon restarting an old-style supa-wide \"noisy\" (typically weight loss) goal we convert it to a zero-width razor road",
"u": ["https://twitter.com/beemuvi/status/942912904310829056"],
}, { // ------------------------------------------------------------------------
"x": "Updated beeminder.com/faq to reflect changes in weight loss goals and to point to help.beeminder.com",
"d": "2017-12-19",
"t": "2017-12-19",
"u": ["https://twitter.com/beemuvi/status/943280087285116928",
      "https://github.com/beeminder/beeminder/commit/13e581532c3ec53a886f7f7447d9b18d363a8417"],
}, { // ------------------------------------------------------------------------
"x": "Edited the graph legend in light of weight loss changes and made other copy tweaks and made links in places like the legend open in new tabs more consistently",
"d": "2017-12-19",
"t": "2017-12-19",
"u": ["https://twitter.com/beemuvi/status/943281859458244609",
      "https://github.com/beeminder/beeminder/commit/e0d66a08d73b365414730519b48645dde9ec8418"],
}, { // ------------------------------------------------------------------------
"x": "We've gotten rid of \"noisy\" and \"exproad\" settings for all new goals. Fully purged from the UI and the API gives a friendly error if you try to use them.",
"u": ["https://twitter.com/beemuvi/status/943628114508201984"],
}, { // ------------------------------------------------------------------------
"x": "Edited http://help.beeminder.com & the blog & the API docs to bring everything up to date with our killing of exponential and auto-widening yellow brick roads",
"t": "2017-12-21",
"u": ["https://twitter.com/beemuvi/status/944008877250453504",
      "https://github.com/beeminder/beeminder/commit/5fc4887cfd58ba8d2f1da620f0e96cbd591a7746"],
"c": "Also http://beeminder.com/contract if anyone still cared about that ancient document",
}, { // ------------------------------------------------------------------------
"x": "The \"bare min\" blurbs for do-less timey-wimey goals in the red were saying things like \"+-00:06\" if you were 6 minutes over instead of just \"-00:06\". #bugfix",
"d": "2017-12-22",
"t": "2017-12-22",
"u": ["https://twitter.com/beemuvi/status/944303051027779584",
      "https://github.com/beeminder/beeminder/issues/97"],
}, { // ------------------------------------------------------------------------
"x": "We now allow entering HH:MM:SS values like \":30\" without a zero before the colon. HT Laurie Reeves (Merry X-mas, Mom!)",
"d": "2017-12-25",
"t": "2017-12-25",
"u": ["https://twitter.com/beemuvi/status/945446344939880449",
      "https://github.com/beeminder/beeminder/commit/74e8d788176077a4b238d8090911f24709f9d5bd"],
}, { // ------------------------------------------------------------------------
"x": "Our opinionated tie-breaking (see UVI#2290's hovertext) for dashboard sorting was only happening when you 1st clicked a column header, not on page load. #bugfix",
"d": "2017-12-25",
"t": "2017-12-25",
"u": ["https://twitter.com/beemuvi/status/945448020857913345",
      "https://github.com/beeminder/beeminder/commit/69a669cb05b07f5ac5637c067b8455137d07f8c1"],
}, { // ------------------------------------------------------------------------
"x": "Fixed CSS problems in the Apps & API section of account settings so everything lines up <a href=\"https://user-images.githubusercontent.com/46881/34366518-8b3c3e3e-ea51-11e7-9247-b85f6f4978cf.png\">nicely now</a>",
"d": "2017-12-26",
"t": "2017-12-26",
"u": ["https://twitter.com/beemuvi/status/945801122505093121",
      "https://github.com/beeminder/beeminder/commit/e35e7ee9478dd486b3be61bdc2815ef119b195d0#commitcomment-26492468"],
}, /* --------------------------------------------------------- end 2017dec */ ]
