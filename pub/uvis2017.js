var batch2017jan = [{
"n": 2158,
"x": "Fixed a case of showing the wrong new pledge amount in the legit check email if you had auto-increasing pledges turned off. #bugfix",
"c": "[https://github.com/beeminder/beeminder/commit/720f3f05a9a6608171349cc449521798ba6b89e8 https://trello.com/c/aB2lyvJa/726-pledge-cap-no-autoincrease]",
}, { // ------------------------------------------------------------------------
"x": "Fixed checkbox that was acting like expand/collapse instead of a checkbox for whether to auto-increase pledges when you derail. mini #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Mini #bugfix w/ pointlessly clickable things when viewing other people's graphs. Also cleaned up CSS bugs on some landing pages.",
}, { // ------------------------------------------------------------------------
"x": "If you set a default deadline we were accidentally applying that to autodata goals that don't support arbitrary deadlines. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Avoided a bunch of confusion by nixing the instant-archive buttons in the dashboard for frozen/completed goals; all done from goal pages now",
}, { // ------------------------------------------------------------------------
"x": "Don't mention \"safe days\" in bot email subject when it exceeds days till goal end date. Also iOS notifications now make the default sound.",
}, { // ------------------------------------------------------------------------
"x": "Removed now-meaningless backburner line in reminder settings, and brought back all autodata settings that got lost in the redesign",
}, { // ------------------------------------------------------------------------
"x": "Mini UVIs: We now refresh graph after updating weekends-off, higher-res Duolingo logo, more obvious link to change goal date / goal total",
}, { // ------------------------------------------------------------------------
"x": "Added button on goal page to archive frozen goals. Bonus #mini UVI: datapoint value is cleared when you submit it on dashboard.",
}, { // ------------------------------------------------------------------------
"x": "Pledge stepper now indicates when it hits its limit (eg, you can't pledge more than $2430). #mini",
}, { // ------------------------------------------------------------------------
"x": "One more thing we broke in the redesign: we weren't allowing a negative rate for Fitbit net calories goals. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "We now use your chosen timezone in your Beeminder settings for showing \"today\"/\"yesterday\", not whatever your browser thinks. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500 error for the case of opening the pledge popup for a goal (maybe just on archived goals?) with no credit card on file. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "UI improvement: x-max can't be in the past and x-min can't be in the future. #mini",
}, { // ------------------------------------------------------------------------
"x": "You can now change the default GmailZero query when creating GmailZero goals, instead of having to go digging in settings afterwards.",
}, { // ------------------------------------------------------------------------
"x": "On /archived it says \"No archived goals!\" if you have none. And on the front page, link to autodata landing pages, not goal creation. #mini",
}, { // ------------------------------------------------------------------------
"x": "This counts as a UVI but we're not yet happy with the interaction between goal units & things like y-axis label: http://forum.beeminder.com/t/y-axis-label-didnt-update-in-graph-after-changed-in-settings/2652",
}, { // ------------------------------------------------------------------------
"x": "We're now consistent for all autodata goal creation in giving you the option to start with an arbitrary amount of safety buffer",
} /* ---------------------------------------------------------- end 2017jan */ ]

var batch2017feb = [{
"n": 2176,
"x": "We're obviously very behind on UVI tweets because we're just getting to our official Todoist integration! http://blog.beeminder.com/todoist/",
}, { // ------------------------------------------------------------------------
"x": "All Fitbit goals were getting created as Do More (or failing altogether?) for 2 months after we launched the redesign. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Fixed a couple UI bugs with changing goalnames (& #bugfix w/ using numbers as goalnames). http://forum.beeminder.com/t/how-to-change-goal-url/2818",
}, { // ------------------------------------------------------------------------
"x": "Another embarrassing thing we broke w/ redesign: If you said \"hide y-axis\" for a while we weren't also hiding stats that leaked that info.",
}, { // ------------------------------------------------------------------------
"x": "We now show the expanded road dial (w/ end date & end value as well as rate) if the goal is ending within 30 days (too magical?)",
}, { // ------------------------------------------------------------------------
"x": "Gitminder goal creation now handles the case revoked Beeminder's authorization on GitHub (& maybe other cases of bad GitHub credentials)",
}, { // ------------------------------------------------------------------------
"x": "More tweaks to error banners so that important ones don't get obscured. #mini",
}, { // ------------------------------------------------------------------------
"x": "UI tweak in Gitminder goal creation: automatically switch the radio button to specific repository if you start to type one. #mini",
}, { // ------------------------------------------------------------------------
"x": "More #mini UVIs: nixed superfluous logged in/out banners, fixed links to create goals on ifthismindthat.com and zapminder.com",
}, { // ------------------------------------------------------------------------
"x": "Mini #bugfix / UI-polish with expanding/collapsing the goals: if you do it to all of them one by one you can still undo w/ 1 click in header",
}, { // ------------------------------------------------------------------------
"x": "We used to magically re-sort the dashboard when you entered data but that turned out to be a bad idea; now you can click \"DEADLINE\" to do so",
}, { // ------------------------------------------------------------------------
"x": "Previous UVI also fixed a nasty focus bug when entering data in succession in dashboard. Also related: we killed reverse sorting.",
}, { // ------------------------------------------------------------------------
"x": "Custom fine print for goals is publicly visible again and we allow hyperlinks. http://forum.beeminder.com/t/link-in-fine-print/2976/1",
}, { // ------------------------------------------------------------------------
"x": "Used to be that every time we autoratched (automatically capping safety buffer) the graph would get stuck w/ buzzy bee for 5-10min. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "We can now link directly to specific tabs in account settings, eg, https://www.beeminder.com/settings/account#account-details",
}, { // ------------------------------------------------------------------------
"x": "Thing we broke like a year ago: when fetching your initial GmailZero count, if it's too big to fetch, we once again tell you that. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "API #bugfix: the requestid param only did worked as advertised for creating single datapoints, not create_all. HT John Swanson",
"c": "When creating a datapoint via API, sending requestid param is supposed to make it act like an UPSERT, but this was broken in the create_all (multi-create) endpoint. so it would still work to make sure you weren't creating duplicate datapoints, but it wouldn't update an existing datapoint if you passed in updated parameters with the same requestid",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the URLminder magic that lets us fetch the plaintext version of a Google doc. https://www.beeminder.com/nanowrimo #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug that meant we wouldn't show you even landing pages of some autodata integrations if you hadn't entered a credit card. #bugfix",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We added \"make private\" to \"new goal settings\" in account settings if you want all new goals to default to private http://forum.beeminder.com/t/please-let-me-default-new-goals-to-private/2880",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "For goals denominated in hours we now display amounts in HH:MM in most places on the website.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a nasty bug w/ road dial where we'd mess up the last segment of your road when you changed the rate units (daily/weekly/etc). #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500-error involving displaying bare-mins as HH:MM for ended goals. Also stopped showing HH:MM:SS in recent data. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Somewhat smarter rounding and don't show integers as X.00. And another #mini #bugfix with sometimes showing \"++HH:MM\" instead of \"+HH:MM\"",
}, { // ------------------------------------------------------------------------
"x": "A bunch of small improvements to our datapoint format checker. You can see all the crazy example parsings at http://d.gomix.me",
}, { // ------------------------------------------------------------------------
"x": "Made the navigation header not annoyingly large. Also: tweaks to http://beeminder.com/aboutus: Capitalize \"Hours\", make our titles fit on 1 line.",
}, { // ------------------------------------------------------------------------
"x": "More #mini UVIs: shrunk annoyingly large navigation header, made archived gallery show 4 across, link to archive in gallery view.",
}, { // ------------------------------------------------------------------------
"x": "And a super #mini one: made the pledge box not have an \"i'm a button\" shadow if you're looking at someone else's goal so it's not clickable",
}, { // ------------------------------------------------------------------------
"x": "In goal settings for Trello goals we now link to the actual board that we're pulling data from.",
}, { // ------------------------------------------------------------------------
"x": "We now show both the goalname and the description (the latter in a tiny font) on the dashboard. No more confusing toggling (for goalnames)!",
}, { // ------------------------------------------------------------------------
"x": "Fixed missing newline in text under graph thumbnails in gallery view. #mini #bugfix #redesign And show full goal description as hovertext.",
}, { // ------------------------------------------------------------------------
"x": "When you had non-midnight deadlines for a goal we'd sometimes show you the wrong date for adding new data. #redesign #bugfix",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in URLminder: don't add a new datapoint every single time we check, only when wordcount has actually changed https://www.beeminder.com/new#urlminder",
}, { // ------------------------------------------------------------------------
"x": "Added a new premium FAQ item at http://beeminder.com/premium. Includes my ill-advised murder joke. #yolo #mini",
}, { // ------------------------------------------------------------------------
"x": "#bugfix kind of: the dates used for the add-data form were being too clever and magically updating when your deadline hit; caused confusion!",
}, { // ------------------------------------------------------------------------
"x": "#bugfix: The iPhone beemergency badge icon didn't show up unless you remembered to manually launch the app every single day. HT Paul Schmidt",
}, { // ------------------------------------------------------------------------
"x": "I guess we'll count this: We now have an informative static image to show in place of graphs in case Amazon goes down and won't show them...",
} /* ---------------------------------------------------------- end 2017feb */ ]

var batch2017mar = [{
"n": 2213,
"t": "2017-03-01",
"x": "Super facepalmy bug made us forget toggle states (countdown vs time, expanded vs not, etc) on dashboard after visiting new goal page #bugfix",
}, { // ------------------------------------------------------------------------
"n": 2214,
"x": "#bugfix w/ goal wizard that'd occasionally/rarely give a blank page when creating a goal (related to bad state from previous goal creation)",
}, { // ------------------------------------------------------------------------
"x": "At some point our push notifications for the Android app broke which made graphs appear to be regenerating forever. #bugfix #firebase",
}, { // ------------------------------------------------------------------------
"x": "#mini UVIs: new Epson logo, made table in the middle of http://beeminder.com/api not ugly (#redesign), tweaked flash banner for premium plans",
}, { // ------------------------------------------------------------------------
"x": "We now have proper error handling for losing authorization to read a user's Todoist data #mini #bugfix",
}, { // ------------------------------------------------------------------------
"x": "We now support Romanian as one of the languages you can beemind learning on Duolingo!",
}, { // ------------------------------------------------------------------------
"x": "We added \"number of activities\" as a thing you can beemind via @Fitbit (& removed \"very active time\" since Fitbit doesn't support that now)",
}, { // ------------------------------------------------------------------------
"x": "We made the goal descriptions smaller because we're very opinionated about people focusing on the goalnames as the main identifiers of goals",
}, { // ------------------------------------------------------------------------
"x": "We again let you jump from $0 to $5 pledged (even without the Beemium plan that lets you jump to any amount). #bugfix #redesign-regression",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Feature! We trust our users so much that when you update a failed payment method you can actually pick which charges should be retried!",
}, { // ------------------------------------------------------------------------
"x": "iPhone app couldn't handle safety buffer &gt;32767 days so now we cap it at that. Also fixed a redesign regression as part of prev UVI. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "We made our jobs page -- https://www.beeminder.com/jobs -- less out of date and embarrassing! And added a little \"need help?\" footer link.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug where sometimes the tabs below the graph would be completely blank until you reloaded the page. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Added link to forum post which explains the aggday custom goal setting. & Fitbit \"number activities\" was buggy for the 1st 11 days. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "We fixed our SMTP/DNS/whatever settings so outgoing mail doesn't say \"sent via mailgun dot org\" in Gmail. #mini HT our CEO's mother",
}, { // ------------------------------------------------------------------------
"x": "We made updates via the website & Android & iOS all have higher priority which noticeably improved graph regeneration times (tho still bad)",
}, { // ------------------------------------------------------------------------
"x": "We fixed some annoying things with the guest access (for beemium people) to our dev chat: URLs work now, and disconnects handled better",
}, { // ------------------------------------------------------------------------
"n": 2230,
"x": "Fixed a bug in the dashboard where quickly tripleclicking the goal would show the add data form below the collapsed goal. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "We now support Swahili in @duolingo! And a #mini UVI: Tooltips in the header of the big table for setting reminders for all goals at once.",
}, { // ------------------------------------------------------------------------
"x": "Fixed the hovertext for datapoints to always show the relevant metadata and not redundantly repeat the comment as hovertext. #mini",
}, { // ------------------------------------------------------------------------
"x": "Email replies when you add data via the bot now never totally fail to send if we can't fetch one of the random tips of the day. #bugfix",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "You can now see and update the list of URLminder URLs in your goal settings. Makes URLminder much more useful! https://www.beeminder.com/nanowrimo",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Also URLminder now supports arbitrary deadlines!",
}, { // ------------------------------------------------------------------------
"x": "Fixed a big with strange font sizes of goalnames on the dashboard. #bugfix http://forum.beeminder.com/t/strange-font-sizes-on-dashboard/3043",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug with creating new Fitbit number-of-activities goal. The initial import of last week of data could insta-derail you. #bugfix",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "URLminder now magically fixes Dropbox links so you can beemind wordcount for any plaintext document you have sync'd with Dropbox",
}, { // ------------------------------------------------------------------------
"x": "#bugfix for the +/- stepper buttons for Garmin & Epson goal creation: hitting the \"-\" button would increase the value. Negation is tricky!",
}, { // ------------------------------------------------------------------------
"n": 2240,
"x": "Another #bugfix with Fitbit number-of-activities goals: we used the wrong endpoint and only got ones added via the website not devices",
}, /* --------------------------------------------------------- end 2017mar */ ]

var batch2017apr = [{
"n": 2241,
"f": true,
"x": "We upgraded our database and got graph regeneration times back down to ~5s. Phew! Now we may <a href=\"http://forum.beeminder.com/t/februarys-annoyingness-straw-poll/2995\" title=\"Forum post with our Annoyingness Straw Poll\">have to work on mass-editing of goals</a>",
"u": "https://twitter.com/beemuvi/status/849045469703528449",
}, { // ------------------------------------------------------------------------
"x": "We changed the smoothing constant for the purple line from .1 to .25. (<a href=\"http://forum.beeminder.com/t/any-way-to-control-exponential-moving-average-history/2938/7?u=dreev\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/849409757672812544",
}, { // ------------------------------------------------------------------------
"x": "We made a proper landing page for URLminder: http://beeminder.com/urlminder",
"u": "https://twitter.com/beemuvi/status/849771908128161793",
}, { // ------------------------------------------------------------------------
"x": "We now always fix Dropbox and Google Docs links when you add/edit them in Settings, not just when first creating the goal.",
"u": "https://twitter.com/beemuvi/status/849771959273443328",
}, { // ------------------------------------------------------------------------
"x": "Goals created via <a href=\"http://beemind.me\">Beemind.me</a> now act like proper autodata goals and magically fetch data before zeno'ing instead of just hourly!",
"u": "https://twitter.com/beemuvi/status/850135561683652608",
}, { // ------------------------------------------------------------------------
"x": "Our Twitter hashtag-minding integration was case-sensitive with the hashtags but Twitter search results aren't so now we're not either!",
"u": "https://twitter.com/beemuvi/status/850483794507255808",
}, { // ------------------------------------------------------------------------
"x": "We now allow dots in the names you give 3rd-party apps that use the Beeminder API, and we no longer let you change those names! #consistency",
"u": "https://twitter.com/beemuvi/status/850484164356841472",
}, { // ------------------------------------------------------------------------
"x": "We added a link to our newbee-friendly blog post about beeminding writing to the <a href=\"http://beeminder.com/urlminder\">URLminder landing page</a>. #mini",
"u": "https://twitter.com/beemuvi/status/850484239959076864",
}, { // ------------------------------------------------------------------------
"x": "Fixed our redirect from beeminder.com/services to point to https://www.beeminder.com/settings/account#account-permissions #mini",
"u": "https://twitter.com/beemuvi/status/850484557644087296",
}, { // ------------------------------------------------------------------------
"x": "Simplified http://forum.beeminder.com header, added an infinibee linking to Beeminder. (other improvements purely from Discourse don't count)",
"u": "https://twitter.com/beemuvi/status/852306113424801792",
}, { // ------------------------------------------------------------------------
"x": "Fixed a typo and added an FAQ item to http://beeminder.com/premium about the SMS bot being US-only #mini",
"u": "https://twitter.com/beemuvi/status/852307170427191297",
}, { // ------------------------------------------------------------------------
"x": "Also we now link to the FAQ item about SMS being US-only in the actual SMS settings, something we lost in the #redesign",
"u": "https://twitter.com/beemuvi/status/852317002890792961",
}, { // ------------------------------------------------------------------------
"x": "Closing another loophole: we now don't let you delete a goal that has a pending charge",
"u": "https://twitter.com/beemuvi/status/853029611386552321",
}, { // ------------------------------------------------------------------------
"x": "Also closed loophole where if you archived a goal and the archive took effect after derailing but before charging you, we wouldn't charge you",
"u": "https://twitter.com/beemuvi/status/853029721499590656",
}, { // ------------------------------------------------------------------------
"x": "And to minimize surprises, when you insta-archive a goal after derailing we warn you if there's a pending charge that'll still happen",
"u": "https://twitter.com/beemuvi/status/854120852920516609",
}, { // ------------------------------------------------------------------------
"x": "Safety buffer auto-trimming for do-less now asks for how much buffer you want in terms of, eg, cups of coffee (not days like do-more). #mini",
"u": "https://twitter.com/beemuvi/status/854457099840921600",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Big API improvement! 3rd-party apps can specify an autofetch callback so Beeminder tells them when to autofetch instead of polling",
"u": "https://twitter.com/beemuvi/status/854829206009593856",
}, { // ------------------------------------------------------------------------
"x": "Added documentation of the autofetch callback URL in beeminder.com/api (grep \"autofetch\") plus some other API docs cleanup",
"u": "https://twitter.com/beemuvi/status/854829557307719680",
}, { // ------------------------------------------------------------------------
"x": "And we now link nicely to the docs from beeminder.com/apps/new (milking this for 3 UVIs but it's a big deal guys!!)",
"u": "https://twitter.com/beemuvi/status/854829661095723008",
}, { // ------------------------------------------------------------------------
"x": "Another improvement for 3rd-party apps: you can explicitly register your app as the datasource for any goal. http://blog.beeminder.com/autofetch",
"u": "https://twitter.com/beemuvi/status/855528876302192640",
}, { // ------------------------------------------------------------------------
"n": 2261,
"f": true,
"x": "beeminder.com/changelog now points to an archive of all 2261 (as of this one) Beeminder UVIs!",
"u": "https://twitter.com/beemuvi/status/855570654602473476", // TODO: figure out why Twitter thinks it's just 2259 as of this one
"d": "2017-04-21",
}, { // ------------------------------------------------------------------------
"x": "A bunch of improvements to the styling, layout, and webcopy for beeminder.com/changelog -- it's almost pretty now, at least up to mid-2016",
"u": "https://twitter.com/beemuvi/status/856657403521126400",
"d": "2017-04-24",
}, { // ------------------------------------------------------------------------
"x": "Prettified the rest of beeminder.com/changelog and made http://beeminder.com/changelog#latest link to the bottom of the page",
"u": "https://twitter.com/beemuvi/status/857019759874850817",
"d": "2017-04-25",
"c": "Got rid of all the stuff dumped between <pre> tags",
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
"n": 2268,
"x": "Changed countdown format to be like \"1h 30m 59s\" (makes the difference from time-of-day more obvious) & no seconds if 2 or more days left",
"d": "2017-04-28",
"t": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858095475467079681",
}, { // ------------------------------------------------------------------------
"n": 2269,
"x": "Changed default format for time-to-derailment on dashboard to day/date instead of countdown; lots of simultaneous countdowns is nerveracking",
"d": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858098808311357441",
}, /* --------------------------------------------------------- end 2017apr */ ]

var batch2017may = [ {
"n": 2270,
"x": "Fixed broken image for blog post on front page; trimmed whitespace when not displaying seconds; fixed formatting bug in API docs. #mini ×3",
"t": "2017-05-02",
"u": "https://twitter.com/beemuvi/status/859557387643961345",
"c": "We can't figuring out what that formatting bug actually was from looking at the commit so hopefully that's not lies. Fortunately it's a 3-for-1 UVI so there's an error margin!",
}, { // ------------------------------------------------------------------------
"n": 2271,
"x": "We were failing to update Todoist goals if you deleted the parent project of a project you had Beeminder tracking. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918078896783360",
"d": "2017-04-28",
"t": "2017-05-03",
}, { // ------------------------------------------------------------------------
"n": 2272,
"x": "If you (ie, a 3rd-party app developer) tried to set your app as the datasource for a goal we were giving a 500 error. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918808428855296",
"d": "2017-05-01",
"t": "2017-05-03",
"c": "Thanks Sergii Kalinchuk",
}, { // ------------------------------------------------------------------------
"n": 2273,
"f": true,
"x": "We converted our <a href=\"http://beeminder.com/api\">API docs</a> to the vastly prettier <a href=\"http://lord.github.io/slate/\">Slate</a> and can also accept pull requests (<a href=\"http://github.com/beeminder/slate\">github.com/beeminder/apidocs</a>)!",
"u": "https://twitter.com/beemuvi/status/860280146913247232",
"d": "2017-05-04",
"t": "2017-05-04",
"c": "Redirecting to GitHub Pages for now. UPDATE: fixed the link since we renamed the repository from 'slate' to 'apidocs'.",
}, { // ------------------------------------------------------------------------
"n": 2274,
"x": "api.beeminder.com is now the canonical URL for the <a href=\"http://beeminder.com/api\">API docs</a> (still hosting it on github.io but we don't redirect to that URL now)",
"u": "https://twitter.com/beemuvi/status/860641008882556928",
"d": "2017-05-05",
"t": "2017-05-05",
"c": "Added a CNAME to beeminder.github.io/apidocs. Also got rid of the wildcard subdomain entry so notathing.beeminder.com just fails to resolve now instead of redirecting to www.beeminder.com.",
}, { // ------------------------------------------------------------------------
"n": 2275,
"x": "Added clarification and warning about auth_tokens vs access_tokens to the API docs. Also fixed some typos. #mini",
"u": "https://twitter.com/beemuvi/status/860641116105744385",
"d": "2017-05-04",
"t": "2017-05-05",
}, { // ------------------------------------------------------------------------
"n": 2276,
"x": "Fixed 2 links on http://beeminder.com/api and got rid of the search box since it was much worse than just grepping the page. #mini",
"u": "https://twitter.com/beemuvi/status/861725549445627904",
"d": "2017-05-08",
"t": "2017-05-08",
}, { // ------------------------------------------------------------------------
"n": 2277,
"x": "If you have SMS turned on but we can't SMS you cuz you didn't finish activating your phone number we now say so in the fallback email alert",
"u": "https://twitter.com/beemuvi/status/862094048592515072",
"d": "2017-05-09",
"t": "2017-05-09",
}, { // ------------------------------------------------------------------------
"n": 2278,
"x": "URLminder (and other autodata!) goals now do a re-fetch of data after you change settings, e.g. add/remove a URL or whatever.",
"u": "https://twitter.com/beemuvi/status/862094296391991296",
"d": "2017-05-09",
"t": "2017-05-09",
"c": "https://trello.com/c/VAaWDa4y/824-fetch-data-when-changing-urlminder-urls-in-goal-settings",
}, { // ------------------------------------------------------------------------
"n": 2279,
"f": true,
"x": "<a href=\"http://blog.beeminder.com/gtbee\">GTBee</a> now lets you start w/ any amt at risk, fits on any screen size w/out being pixelated, & simpler task creation by moving to own screen!",
"u": "https://twitter.com/beemuvi/status/862452309032181760",
"t": "2017-05-10",
}, { // ------------------------------------------------------------------------
"n": 2280,
"f": true,
"x": "(+) Version 4.5 of iOS app!",
"u": "https://twitter.com/beemuvi/status/862791255087955968",
"t": "2017-05-11",
}, { // ------------------------------------------------------------------------
"n": 2280, // sic! this and previous UVI are really the same UVI
"s": true,
"x": "(1) Updated Today widget: you can now add (integer) data directly from the Today screen. And the really huge news...",
"u": "https://twitter.com/beemuvi/status/862791255087955968",
"t": "2017-05-11",
}, { // ------------------------------------------------------------------------
"n": 2281,
"s": true,
"f": true,
"x": "(2) Apple Health integration! You can now automatically sync data like steps, active energy, workout distances from Apple Health &rarr; Beeminder!",
"u": "https://twitter.com/beemuvi/status/862791436948783104",
"t": "2017-05-11",
}, { // ------------------------------------------------------------------------
"n": 2282,
"s": true,
"x": "(3) The goal screen in the iOS app now includes a button to view the goal on mobile Safari.",
"u": "https://twitter.com/beemuvi/status/862792205974478848",
"t": "2017-05-11",
}, /* --------------------------------------------------------- end 2017may */ ]

/*
STAGED: ------10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
CANDIDATES: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
"x": "[We made dashboard sorting always pick the sensible order (increasing time to derailment, decreasing pledge, etc).] [not merged yet]",
IDEAS: -------10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
1. fix FAQ copy: "form below your graph"
2. easy UVI from chelsea: https://trello.com/c/OKjDZJ3Q/811-email-user-when-a-service-authorization-expires
-->
*/
