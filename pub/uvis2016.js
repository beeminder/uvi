
var batch2016dec = [{
"n": 2135, 
"x": "If a goalname's disallowed (eg \"gallery\" or existing goalnames) also disallow uppercase variants like \"Gallery\" or things break. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Embarrassingly there was a full month after the redesign when we set everyone's default timezone to US Eastern time. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "We rewrote the copy at http://beeminder.com/money which was a little broken since the Infinibee premium revamp. #mini",
}, { // ------------------------------------------------------------------------
"x": "GmailZero #bugfix in which we were fetching your initial inbox count but then starting your road at 0 anyway for a while.",
}, { // ------------------------------------------------------------------------
"x": "Our Garmin stepcounts were sometimes too low. Garmin's granular API didn't agree with its summary data. We now use summary. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Fixed small bug with plus/minus buttons for data entry on odometer goals, and fixed a link to reminder settings in bot emails. #bugfix ",
}, { // ------------------------------------------------------------------------
"x": "By popular demand: our blog has a (@duckduckgo) searchbox. Seek & ye shall find. Dark days of adding \"beeminder blog\" to a web search: over!",
}, { // ------------------------------------------------------------------------
"x": "Yet another bug from redesign: If you signed up via Google oauth and then created a Do More goal we'd create it as a GmailZero goal. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Fixed an intermittent bug where you'd hit archive & the goal would mysteriously not archive if a previous goal w/ that name existed. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Nasty bug with our @habitica integration: all the Fewer To-Dos goals were being created as Do Mores (redesign bug). #bugfix",
}, { // ------------------------------------------------------------------------
"x": "And a separate bug w/ our @habitica integration: for Do More goals we were starting the yellow brick road too high by 1 To-Do. #bugfix",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Version 4.4 of the Beeminder iOS app is live! Most important for brand new users: you can now create a Beeminder account from it.",
}, { // ------------------------------------------------------------------------
"x": "Also in the new version of the iOS app: a Reset Data button to reload all goals, no more backburner dividing line, ...",
}, { // ------------------------------------------------------------------------
"x": "Version 4.4 of iOS app cont'd: Bug fixes in push notifications, & you can tap Create Goal to go to the website pre-logged-in to create goals",
}, { // ------------------------------------------------------------------------
"x": "Marginally better \"doom text\" for weight loss; bigger body font; made 3rd-party font library local cuz it was killing response time. #mini",
}, { // ------------------------------------------------------------------------
"x": "Fixed broken CSS on various autodata landing pages and the unsubscribe page",
}, { // ------------------------------------------------------------------------
"x": "Fixed bunch of cases where we used goal description instead of goalname, which to some people's chagrin is now the universal goal identifier",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug involving the pledge amount being in two places. Now it's still in commitment settings too but pops up the same modal. #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Moved password to separate section in settings which fixed bug w/ some browsers that wouldn't let you change settings w/o changing password",
}, { // ------------------------------------------------------------------------
"x": "For over a month after the redesign we had a bug that let you sometimes create pledgeless goals w/out a premium plan. Gasp! #bugfix",
}, { // ------------------------------------------------------------------------
"x": "If you sent auth token but didn't specify the user we 500'd even tho w/ auth token it had to be you that you're requesting for. API #bugfix",
}, { // ------------------------------------------------------------------------
"x": "Critical #bugfix w/ iOS app that made us fail to push reminders under some mysterious circumstances involving frozen/archived goals",
}, { // ------------------------------------------------------------------------
"x": "Fixed a couple small bugs with trying to get a premium plan without being initially logged in. #bugfix HT @pennockd",
"c": "[https://trello.com/c/xMMP1Out/738-very-hard-to-get-a-premium-plan-without-a-credit-card-already-on-file https://trello.com/c/ehlCv3V3/737-can-t-get-a-premium-plan-if-not-logged-in-garden-path-bug]",
} /* ---------------------------------------------------------- end 2016dec */ ]
