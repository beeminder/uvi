const batch2024jan = [{
}, { // ------------------------------------------------------------------------
"x": "Fixed broken blog images on the front page and robusted up the script that generates them so they shouldn't break again",
"u": ["https://twitter.com/beemuvi/status/1741984677945287147",
      "https://github.com/beeminder/beeminder/issues/4072"],
"t": "2024-01-01",
"c": "Tweeted way after the fact",
}, { // ------------------------------------------------------------------------
"x": "Improved the http://beeminder.com/aboutus page: alt text for images, webp versions of the images, image sizes for smoother page loading",
"u": ["https://twitter.com/beemuvi/status/1741984756303380795",
      "https://github.com/beeminder/beeminder/issues/4654",
      "https://github.com/beeminder/beeminder/issues/4704",
      "https://github.com/beeminder/beeminder/pull/4703"],
"t": "2024-01-01",
}, { // ------------------------------------------------------------------------
"x": "Added the Manifold logo to the Honeygrams page and fixed the Manifold link that initiates mana-to-honey transfers",
"u": ["https://twitter.com/beemuvi/status/1742342251605639622",
      "https://github.com/beeminder/beeminder/issues/4529"],
"t": "2024-01-02",
}, { // ------------------------------------------------------------------------
"x": "We bumped up the limit for number of datapoints allowed per day and improved the error copy slightly when you exceed it",
"u": ["https://twitter.com/beemuvi/status/1742342355376832917",
      "https://github.com/beeminder/beeminder/issues/4604"],
"c": "From 150 to 300 but no promises on what we settle on. Errorcopy thing is that we don't incorrectly call it rate-limiting.",
}, { // ------------------------------------------------------------------------
"x": "In your table of payments, the From/To now says \"Beeminder\" instead of, confusingly, \"meta\", and \"you\" instead of your username",
"u": ["https://twitter.com/beemuvi/status/1742709480285180349",
      "https://github.com/beeminder/beeminder/issues/4529",
      "https://github.com/beeminder/beeminder/pull/4664"],
"d": "2023-12-31",
"t": "2024-01-03",
}, { // ------------------------------------------------------------------------
"x": "Also in the table of payments, we got rid of those barely-readable timestamps in favor of just dates, but with full timestamp on hover",
"u": ["https://twitter.com/beemuvi/status/1742709579346309307",
      "https://github.com/beeminder/beeminder/issues/4529",
      "https://github.com/beeminder/beeminder/pull/4664"],
"d": "2023-12-31",
"t": "2024-01-03",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarifications in the article about goal stats; and new links, copy tweaks, etc, in 8 other articles",
"u": ["https://twitter.com/beemuvi/status/1743073045265445306",
      "https://help.beeminder.com/article/119-what-are-the-goal-statistics",
      "https://help.beeminder.com/article/66-do-more-goals",
      "https://help.beeminder.com/article/67-do-less-goals",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
      "https://help.beeminder.com/article/68-odometer-goals",
      "https://help.beeminder.com/article/96-weight-gain-loss-goals",
      "https://help.beeminder.com/article/97-custom-goals",
      "https://help.beeminder.com/article/36-what-is-my-data",
      "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal"],
"d": "2023-12-23",
"t": "2024-01-04",
}, { // ------------------------------------------------------------------------
"x": "A minor fix to spacing in the winter-themed Beeminder logos: the spacing between BEEMINDER and the tagline text is now consistent. #css HT Paul Schmidt",
"u": ["https://twitter.com/beemuvi/status/1743073476972544231",
      "https://github.com/beeminder/beeminder/pull/4662"],
"d": "2023-12-31",
"t": "2024-01-04",
}, { // ------------------------------------------------------------------------
"x": "We were showing the wrong thumbnail for the 'Antimagic 404' blog post on the frontpage for a while. Those responsible have been sacked.",
"u": ["https://twitter.com/beemuvi/status/1743435555655041288",
      "https://github.com/beeminder/beeminder/pull/4626",
      "https://github.com/beeminder/beeminder/pull/4627"],
"d": "2023-12-15",
"t": "2024-01-05",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarified in the article about forgetting to enter data that you don't *have* to enter data every day, plus small improvements to 7 other articles",
"u": ["https://twitter.com/beemuvi/status/1743435719270715857",
      "https://help.beeminder.com/article/38-what-happens-if-i-forgot-to-enter-data",
      "https://help.beeminder.com/article/39-how-do-i-fix-incorrect-data",
      "https://help.beeminder.com/article/40-can-anybody-else-add-data-to-my-goal",
      "https://help.beeminder.com/article/41-can-i-export-my-data",
      "https://help.beeminder.com/article/113-can-i-import-previous-data",
      "https://help.beeminder.com/article/42-switching-goal-units",
      "https://help.beeminder.com/article/19-how-much-does-beeminder-cost",
      "https://help.beeminder.com/article/324-when-do-i-pay"],
"d": "2024-01-05",
"t": "2024-01-05",
}, { // ------------------------------------------------------------------------
"x": "Our tryDeepWork.com integration is now more robust, by retrying if it can't reach tryDeepWork's API",
"u": ["https://twitter.com/beemuvi/status/1744520534782779697",
      "https://github.com/beeminder/beeminder/issues/4609"],
"t": "2024-01-08",
}, { // ------------------------------------------------------------------------
"x": "Honey money purchases were getting shown in your payments with a blank description, oops. Fixed retroactively as well.",
"u": ["https://twitter.com/beemuvi/status/1744520706103386606",
      "https://github.com/beeminder/beeminder/issues/4673"],
"t": "2024-01-08",
}, { // ------------------------------------------------------------------------
"x": "All legacy PayPal users automatically get a $10 honey money bribe for switching to another payment method if they do it soon! (And emailed them all about it)",
"u": ["https://twitter.com/beemuvi/status/1744881681109279036",
      "https://github.com/beeminder/beeminder/issues/1840",
      "https://github.com/beeminder/beeminder/pull/4682"],
"d": "2024-01-09",
"t": "2024-01-09",
}, { // ------------------------------------------------------------------------
"x": "And made the \"can't switch _to_ PayPal\" rule stricter: it's enforced in the API now, not just disabled in the interface",
"u": ["https://twitter.com/beemuvi/status/1744881881072730182",
      "https://github.com/beeminder/beeminder/issues/1840",
      "https://github.com/beeminder/beeminder/issues/2987",
      "https://github.com/beeminder/beeminder/pull/4682"],
"d": "2024-01-09",
"t": "2024-01-09",
}, { // ------------------------------------------------------------------------
"x": "Moved legacy PayPal to its own section of the payments page and added a banner to extra-emphasize that we really want you to pick a new payment method",
"u": ["https://twitter.com/beemuvi/status/1745248396955512916",
      "https://github.com/beeminder/beeminder/pull/4649"],
"t": "2024-01-10",
"d": "2023-12-21",
}, { // ------------------------------------------------------------------------
"x": "Not sure how long we'll support this but for now we have a \"buy Honey with PayPal\" button on the payments page shown to legacy PayPal holdouts",
"u": ["https://twitter.com/beemuvi/status/1745248485807644737",
      "https://github.com/beeminder/beeminder/pull/4649"],
"t": "2024-01-10",
"d": "2023-12-21",
}, { // ------------------------------------------------------------------------
"x": "Added a visual indicator of an autodata sync error on your dashboard, namely a light blue background for the goal, to match the error banner",
"u": ["https://twitter.com/beemuvi/status/1745606193605976098",
      "https://github.com/beeminder/beeminder/issues/4276",
      "https://github.com/beeminder/beeminder/pull/4684"],
"d": "2024-01-10",
"t": "2024-01-11",
}, { // ------------------------------------------------------------------------
"x": "Also replaced the last datapoint with \"Could not fetch data from ...\"",
"u": ["https://twitter.com/beemuvi/status/1745606468131524795",
      "https://github.com/beeminder/beeminder/issues/4276",
      "https://github.com/beeminder/beeminder/pull/4684"],
"d": "2024-01-10",
"t": "2024-01-11",
}, { // ------------------------------------------------------------------------
"x": "Also-also it explains the autodata error in the hovertext and we improved the hovertext more generally to say things like if a goal's scheduled to archive",
"u": ["https://twitter.com/beemuvi/status/1745979062949122237",
      "https://github.com/beeminder/beeminder/issues/4276",
      "https://github.com/beeminder/beeminder/pull/4684"],
"d": "2024-01-10",
"t": "2024-01-12",
}, { // ------------------------------------------------------------------------
"x": "Oops, forgot the case of no error or archiving: dashboard hovertext erroneously just said \"autodata error\" on every single goal! HT brittany123 #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1745979223473529317",
      "https://github.com/beeminder/beeminder/issues/4690",
      "https://github.com/beeminder/beeminder/pull/4691"],
"d": "2024-01-12",
"t": "2024-01-12",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug with datapoint pagination in the API: our paging is 1-indexed and saying page=0 would choke and give a 500 error. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1748508416652476799",
      "https://github.com/beeminder/beeminder/issues/4620",
      "https://github.com/beeminder/beeminder/pull/4621",
      "https://github.com/beeminder/apidocs/pull/46"],
"d": "2023-12-22",
"t": "2024-01-19",
}, { // ------------------------------------------------------------------------
"x": "Also for pagination: updated the API docs, generalized the bounds checking, and wrote nice errorcopy specific to the different parameters",
"u": ["https://twitter.com/beemuvi/status/1749577657518551199",
      "https://github.com/beeminder/beeminder/issues/4620",
      "https://github.com/beeminder/beeminder/pull/4621",
      "https://github.com/beeminder/apidocs/pull/46"],
"d": "2023-12-22",
"t": "2024-01-22",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We made year-end Beecaps for everyone who was beeminding in 2023! http://beeminder.com/beecap",
"u": ["https://twitter.com/beemuvi/status/1749578290833338820",
      "https://github.com/beeminder/beeminder/issues/4713"],
"t": "2024-01-22",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug with the Beecap download button: the sizing of the downloaded image was all wrong in Firefox and Safari. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1749959122605535556",
      "https://github.com/beeminder/beeminder/pull/4702"],
"d": "2024-01-16",
"t": "2024-01-23",
}, { // ------------------------------------------------------------------------
"x": "Made the Beecaps show something if the user has no active goals in the last year, so it's not a dead page should someone stumble upon it",
"u": ["https://twitter.com/beemuvi/status/1749959166129733899",
      "https://github.com/beeminder/beeminder/issues/4713",
      "https://github.com/beeminder/beeminder/pull/4697"],
"d": "2024-01-17",
"t": "2024-01-23",
}, { // ------------------------------------------------------------------------
"x": "Finally, we pre-seeded/cached all the beecaps so the page loads nice and snappily. Oh yeah, and we emailed them to everyone who was beeminding in 2023.",
"u": ["https://twitter.com/beemuvi/status/1750315525694275777",
      "https://github.com/beeminder/beeminder/issues/4713",
      "https://github.com/beeminder/beeminder/pull/4694"],
"d": "2024-01-17",
"t": "2024-01-24",
}, { // ------------------------------------------------------------------------
"x": "Oops, the Buy Honey With PayPal button for legacy PayPal holdouts (UVI#4749) became a no-op if you switched to a different payment method. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1750315922739315073",
      "https://github.com/beeminder/beeminder/issues/4712",
      "https://github.com/beeminder/beeminder/pull/4711"],
"d": "2024-01-24",
"t": "2024-01-24",
}, { // ------------------------------------------------------------------------
"x": "Worse than that, when it did work, the \"yes, charge me $10\" button just made the infinibee spin but nothing ever happened! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1750680957961842806",
      "https://github.com/beeminder/beeminder/issues/4712",
      "https://github.com/beeminder/beeminder/pull/4711"],
"d": "2024-01-24",
"t": "2024-01-25",
}, { // ------------------------------------------------------------------------
"x": "Bonus: made the popup undismissable until the the infinibee finishes and the charge goes through, preventing a jarring page reload if it finished post-dismissal",
"u": ["https://twitter.com/beemuvi/status/1750681448720568334",
      "https://github.com/beeminder/beeminder/issues/4712",
      "https://github.com/beeminder/beeminder/pull/4711"],
"d": "2024-01-24",
"t": "2024-01-25",
}, { // ------------------------------------------------------------------------
"x": "For unhappy combos of publication time and user-timezone, your RSSminder RSS entries wouldn't show up in Beeminder until after the deadline. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1751045430190948373",
      "https://github.com/beeminder/beeminder/issues/4709",
      "https://github.com/beeminder/beeminder/pull/4715"],
"d": "2024-01-26",
"t": "2024-01-26",
"c": "Even manual syncing didn't help! We were calculating the dates wrong when we filtered the list, but not when we added the datapoint.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: language adjustments and more explaining and encouragement and links in 8 articles",
"u": ["https://twitter.com/beemuvi/status/1751046347380371783",
      "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals",
      "https://help.beeminder.com/article/21-can-i-decrease-the-pledge-on-my-goal",
      "https://help.beeminder.com/article/343-can-i-increase-the-pledge-on-my-goal",
      "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets",
      "https://help.beeminder.com/article/23-can-i-have-goals-without-pledges",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription",
      "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work",
      "https://help.beeminder.com/article/26-what-if-i-buy-one-plan-and-change-my-mind"],
"d": "2024-01-17",
"t": "2024-01-26",
}, { // ------------------------------------------------------------------------
"x": "Help docs: The payment methods article mentions the option of buying Honey Money with PayPal, plus clarifications and copy tweaks in 5 other articles",
"u": ["https://twitter.com/beemuvi/status/1752130023748997427",
      "https://help.beeminder.com/article/27-what-payment-methods-are-available",
      "https://help.beeminder.com/article/28-how-do-i-update-my-payment-information",
      "https://help.beeminder.com/article/29-why-did-beeminder-charge-my-card",
      "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails",
      "https://help.beeminder.com/article/12-what-is-a-derailment",
      "https://help.beeminder.com/article/13-when-do-derailments-happen"],
"d": "2024-01-26",
"t": "2024-01-29",
}, { // ------------------------------------------------------------------------
"x": "For Beecaps, fixed a bug in determining when you should get the \"No Beecap Available\" page if you weren't active in 2023. Plus more error checking. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1752132918284358116",
      "https://github.com/beeminder/beeminder/issues/4713",
      "https://github.com/beeminder/beeminder/pull/4697"],
"d": "2024-01-16",
"t": "2024-01-29",
}, { // ------------------------------------------------------------------------
"x": "Oops! UVI#4235 actually worsened problems when Todoist is down by omitting a timeout. Now, we've shortened the Todoist timeout. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1752496470497075223",
      "https://github.com/beeminder/beeminder/issues/4718",
      "https://github.com/beeminder/beeminder/pull/4719"],
"d": "2024-01-29",
"t": "2024-01-30",
}, { // ------------------------------------------------------------------------
"x": "Fixed two broken links to the blog in the FAQ",
"u": ["https://twitter.com/beemuvi/status/1752496767839748359",
      "https://github.com/beeminder/beeminder/issues/4721"],
"d": "2024-01-30",
"t": "2024-01-30",
}, { // ------------------------------------------------------------------------
"x": "Fixed size and margin on the initial safety buffer entry field. Was cutting off double digit numbers, and the text on either side was too close to it. #css",
"u": ["https://twitter.com/beemuvi/status/1752852661324710350",
      "https://github.com/beeminder/beeminder/issues/4681",
      "https://github.com/beeminder/beeminder/pull/4723"],
"d": "2024-01-31",
"t": "2024-01-31",
}, { // ------------------------------------------------------------------------
"x": "Do show/hide password on login form too (was only in signup). And also password reset in settings. We think that addresses all of them in one go!",
"u": ["https://twitter.com/beemuvi/status/1752852786071691637",
      "https://github.com/beeminder/beeminder/issues/4509",
      "https://github.com/beeminder/beeminder/pull/4724"],
"d": "2024-01-31",
"t": "2024-01-31",
}, /* --------------------------------------------------------- end 2024jan */ ]


const batch2024feb = [{
}, { // ------------------------------------------------------------------------
"x": "We messed up UVI#4684 when we claimed that `Authorization: Bearer` now worked for API request authorizations. #bugfix HT Theo Spears",
"u": ["https://twitter.com/beemuvi/status/1753220563676643474",
      "https://forum.beeminder.com/t/making-a-beeminder-gpts/11239/7?u=dreev",
      "https://github.com/beeminder/beeminder/issues/4728",
      "https://github.com/beeminder/beeminder/pull/4727"],
"d": "2024-02-01",
"t": "2024-02-01",
}, { // ------------------------------------------------------------------------
"x": "We set up DMARC for our outgoing email finally which improves deliverability and some email clients now show the Beeminder logo when we email you",
"u": ["https://twitter.com/beemuvi/status/1753220738398761033",
      "https://github.com/beeminder/beeminder/issues/4706"],
"t": "2024-02-01",
}, { // ------------------------------------------------------------------------
"x": "Bug with mana-to-honey transfers that rounded to $0: we failed to transfer them! Fixed now, including retroactively for all affected transfers. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1754669256334307482",
      "https://github.com/beeminder/beeminder/issues/4729"],
"d": "2024-02-03",
"t": "2024-02-05",
}, { // ------------------------------------------------------------------------
"x": "In Runkeeper goal creation, the rate field wouldn't let you specify a fraction, which is important to allow since we only let you create goals as daily! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1755393927581253724",
      "https://github.com/beeminder/beeminder/issues/4734",
      "https://github.com/beeminder/beeminder/pull/4735"],
"d": "2024-02-07",
"t": "2024-02-07",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarified what's editable on archived goals and added links and rephrased things and improved formatting and such in 4 other articles",
"u": ["https://twitter.com/beemuvi/status/1755990015665139731",
      "https://help.beeminder.com/article/44-how-do-i-quit-a-goal",
      "https://help.beeminder.com/article/16-what-is-a-legit-derailment",
      "https://help.beeminder.com/article/17-what-happens-when-i-derail",
      "https://help.beeminder.com/article/325-help-an-emergency-came-up-and-i-cant-do-my-goal",
      "https://help.beeminder.com/article/351-i-need-help"],
"d": "2024-02-02",
"t": "2024-02-09",
}, { // ------------------------------------------------------------------------
"x": "This one seems to have been rare but there was a Todoist API time-out error we weren't catching that yielded 500-errors for at least one user. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1758288673035206988",
      "https://github.com/beeminder/beeminder/issues/4740",
      "https://github.com/beeminder/beeminder/pull/4741"],
"d": "2024-02-13",
"t": "2024-02-15",
"c": "We've logged very similar bugfixes before. The thing that's different in this case is that our error handling was too specific. The previous version caught a specific type of error thrown by Todoist, and now in this user's instance we were raising up a different error, and that wasn't handled. This time we should be handling all possible errors, phew.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a screenshot to the article on archiving goals and fixed a bad formatting error on the one about deleting goals",
"u": ["https://twitter.com/beemuvi/status/1759742885912809559",
      "https://help.beeminder.com/article/46-what-happens-to-an-archived-goal",
      "https://help.beeminder.com/article/47-how-do-i-delete-a-goal"],
"d": "2024-02-06",
"t": "2024-02-19",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Minor changes (improved flow and bolding for clarity) in the \"How to delete my account\" article and more serious rearranging of the Apple Health one",
"u": ["https://twitter.com/beemuvi/status/1759743118122103019",
      "https://help.beeminder.com/article/48-how-do-i-delete-my-account",
      "https://help.beeminder.com/article/61-apple-health"],
"d": "2024-02-08",
"t": "2024-02-19",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a missing metric to the Fitbit integration article, plus some clarification about data import to address user confusion",
"u": ["https://twitter.com/beemuvi/status/1760103909711040596",
      "https://help.beeminder.com/article/11-fitbit"],
"d": "2024-02-16",
"t": "2024-02-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Removed some no-longer-relevant troubleshooting from the Focusmate article plus small tweaks to 4 other autodata integration articles",
"u": ["https://twitter.com/beemuvi/status/1760104084747813216",
      "https://help.beeminder.com/article/278-focusmate",
      "https://help.beeminder.com/article/329-boss-as-a-service-baas",
      "https://help.beeminder.com/article/290-clozemaster",
      "https://help.beeminder.com/article/288-codecombat",
      "https://help.beeminder.com/article/80-duolingo"],
"d": "2024-02-19",
"t": "2024-02-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Moved our old Draft integration article to the Historical Interest section and added more details to it about URLminder as the modern alternative",
"u": ["https://twitter.com/beemuvi/status/1760104290168017006",
      "https://help.beeminder.com/article/121-draft"],
"d": "2024-02-14",
"t": "2024-02-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Fixed an html bug in the Garmin integration article plus clarified why some Garmin devices can't use some autodata metrics",
"u": ["https://twitter.com/beemuvi/status/1760464895282446617",
      "https://help.beeminder.com/article/74-garmin"],
"d": "2024-02-21",
"t": "2024-02-21",
}, { // ------------------------------------------------------------------------
"x": "We had a wrong link to Intend (nee Complice) on our landing page for the integration (also we made a redirect for the old URL). #bugfix HT Dan Zwell",
"u": ["https://twitter.com/beemuvi/status/1760822275815923983",
      "https://www.beeminder.com/intend",
      "https://github.com/beeminder/beeminder/pull/4754"],
"t": "2022-02-22",
"c": "Accidentally had intend.co instead of intend.do",
}, { // ------------------------------------------------------------------------
"x": "More spambot problem so now signed-out users just get a \"mailto\" link instead of our handy-dandy contact form on our \"Contact Us\" page",
"u": ["https://twitter.com/beemuvi/status/1760822800414343650",
      "https://github.com/beeminder/beeminder/issues/4736",
      "https://github.com/beeminder/beeminder/pull/4753"],
"d": "2024-02-21",
"t": '2024-02-22',
"c": "The spambots were winning and it was urgent for support",
}, { // ------------------------------------------------------------------------
"x": "New status page operational at http://status.beeminder.com (Twitter no longer works as a public status page since you have to be logged in to see it)",
"u": ["https://twitter.com/beemuvi/status/1760962320975765954",
      "https://github.com/beeminder/beeminder/issues/4555"],
"d": "2024-02-23",
"t": "2024-02-23",
}, { // ------------------------------------------------------------------------
"x": "Made the new status page more independent of Beeminder's infrastructure (no need for our own servers to redirect it even) in case of catastrophic failure",
"u": ["https://twitter.com/beemuvi/status/1760963364459802984",
      "https://github.com/beeminder/beeminder/issues/4555"],
"d": "2024-02-23",
"t": "2024-02-23",
"c": "Yes, it was on Twitter before but it relied on our own load balancer to redirect there, which was silly",
}, { // ------------------------------------------------------------------------
"x": "Edited the \"Bee Back Soon\" page (aka the poppy page) to just talk about status.beeminder.com and not the old Twitter page",
"u": ["https://twitter.com/beemuvi/status/1760963641824997832",
      "https://github.com/beeminder/beeminder/issues/4555"],
"d": "2024-02-23",
"t": "2024-02-23",
"c": "This one won't actually be user-visible in the event that we never ever have any downtime ever again",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Mentioned in the freeCodeCamp integration article that you can donate half your pledges to fCC on the Beemium plan, plus tweaks to 2 other articles",
"u": ["https://twitter.com/beemuvi/status/1762267242602127808",
      "https://help.beeminder.com/article/287-freecodecamp",
      "https://help.beeminder.com/article/81-github",
      "https://help.beeminder.com/article/82-gmail"],
"d": "2024-02-23",
"t": "2024-02-26",
}, { // ------------------------------------------------------------------------
"x": "If your Focusmate account was suspended (or other auth problems, probably) we'd fail to tell you that we could no longer access your Focusmate data. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1762633080538595608",
      "https://github.com/beeminder/beeminder/issues/4751",
      "https://github.com/beeminder/beeminder/pull/4752"],
"d": "2024-02-21",
"c": "I.e., we failed to set an autodata error when we got a 403 Forbidden response",
}, { // ------------------------------------------------------------------------
"x": "Fixed a server misconfiguration that allowed bad guys to spoof our whole website at their own nefarious URLs (which they did, and users noticed) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1762635125312147501",
      "https://github.com/beeminder/beeminder/issues/4687",
      "https://github.com/beeminder/beeploy/pull/165"],
"t": "2024-02-27",
"c": "Technically the bad guys could just make their own URL appear in the address bar when we served up our site. Maybe not particularly nefarious, unclear.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We're featured on Humble Bundle this month! Buying the bundle gets you freebies from RescueTime, Moodfit, RoboForm, and $10 of Honey Money from us",
"u": ["https://twitter.com/beemuvi/status/1762995560880226425",
      "https://www.humblebundle.com/software/healthy-habits-toolkit-build-successful-routines-for-life-software",
      "https://github.com/beeminder/beeminder/issues/4756"],
"d": "2024-02-27",
"t": "2024-02-28",
}, { // ------------------------------------------------------------------------
"x": "Also we made a BOGO deal for Humble Bundlers: half off as much Honey Money as you care to buy",
"u": ["https://twitter.com/beemuvi/status/1762995714622431741",
      "https://github.com/beeminder/beeminder/issues/4756"],
"d": "2024-02-27",
"t": "2024-02-28",
}, { // ------------------------------------------------------------------------
"x": "And we made a whole welcome page for newbees coming from Humble Bundle where you can redeem all your sweet, sweet stuff: http://beeminder.com/humblebundle",
"u": ["https://twitter.com/beemuvi/status/1762995986048372946",
      "https://github.com/beeminder/beeminder/issues/4756"],
"d": "2024-02-27",
"t": "2024-02-28",
}, { // ------------------------------------------------------------------------
"x": "Misconfigured the Humble Bundle checkout page for the BOGO offer, causing an error instead of half-off-honey. How Sour. #bugfix and sorted the 1 affected user 😅",
"u": ["https://twitter.com/beemuvi/status/1763354337445822720",
      "https://github.com/beeminder/beeminder/issues/4756",
      "https://github.com/beeminder/beeminder/pull/4764"],
"d": "2024-02-28",
"t": "2024-02-29",
"c": "We accidentally left it dev mode for Stripe's Product ID!",
}, { // ------------------------------------------------------------------------
"x": "Further #bugfix from UVI#4790 where we occasionally poppied the server (akin to a 500 error) when trying to drop that bad traffic",
"u": ["https://twitter.com/beemuvi/status/1763442869682233716",
      "https://github.com/beeminder/beeminder/issues/4687",
      "https://github.com/beeminder/beeploy/pull/165"],
"t": "2024-02-29",
"c": "The load balancer would pass along a request to an application server which would drop it and *mostly* we were robust to that but very rarely it would make the load balancer think the application servers had gone down",
}, { // ------------------------------------------------------------------------
"x": "We de-Valentine's-day'd the honeygrams page. It's now evergreen, which is better than everpink.",
"u": ["https://twitter.com/beemuvi/status/1763443115900453096",
      "https://www.beeminder.com/honeygram",
      "https://github.com/beeminder/beeminder/pull/4765"],
"d": "2024-02-28",
"t": "2024-02-29",
"c": "Slighty WIP still, because there are still kind of pinky flowery images, but it's back to the default/base beeminder theme, and most of the hearts etc are gone",
}, /* --------------------------------------------------------- end 2024feb */ ]

const batch2024mar = [{
}, { // ------------------------------------------------------------------------
"x": "Help docs: Fixed some goofy HTML in the Lichess integration article and added a section on using Do Less goals with Lichess, since users asked about that",
"u": ["https://twitter.com/beemuvi/status/1764810105520877917",
      "https://help.beeminder.com/article/338-lichess"],
"d": "2024-02-29",
"t": "2024-03-04",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Moved Jawbone to the Historical Interest section plus tweaks to the Habitica, IFTTT, and Intend articles (like less opinionatedness on legit-ness)",
"u": ["https://twitter.com/beemuvi/status/1764810244985876675",
      "https://help.beeminder.com/article/75-jawbone",
      "https://help.beeminder.com/article/83-habitica",
      "https://help.beeminder.com/article/86-ifttt",
      "https://help.beeminder.com/article/85-intend"],
"d": "2024-02-29",
"t": "2024-03-04",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a link to the mana/honey exchange UI to the Manifold integration article, plus a note midnight deadlines",
"u": ["https://twitter.com/beemuvi/status/1765177911911620649",
      "https://help.beeminder.com/article/352-manifold"],
"d": "2024-03-01",
"t": "2024-03-05",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarified in the Make integration article about switching manual goals to autodata, plus consistency in keyword formatting in other articles",
"u": ["https://twitter.com/beemuvi/status/1765178094162424202",
      "https://help.beeminder.com/article/318-make-formerly-integromat"],
"d": "2024-03-01",
"t": "2024-03-05",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Your dashboard now shows goals dark green when they have 7 or more days of safety buffer. HT Grayson Bray Morris",
"u": ["https://twitter.com/beemuvi/status/1765541830102487448",
      "https://github.com/beeminder/beeminder/issues/1755",
      "https://github.com/beeminder/beeminder/pull/4773"],
"d": "2024-03-06",
"t": "2024-03-06",
}, { // ------------------------------------------------------------------------
"x": "Minor change along for the ride: the borders on the graph thumbnails on the dashboard are thicker",
"u": ["https://twitter.com/beemuvi/status/1765541918304571580",
      "https://github.com/beeminder/beeminder/pull/4773"],
"d": "2024-03-06",
"t": "2024-03-06",
}, { // ------------------------------------------------------------------------
"x": "Graph color on dashboard and on goal page no longer disagree when you're closer to the goal end date than the amount of safety buffer you have. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1765899624743903449",
      "https://github.com/beeminder/beeminder/issues/4674",
      "https://github.com/beeminder/beeminder/pull/4773"],
"d": "2024-03-06",
"t": "2024-03-07",
}, { // ------------------------------------------------------------------------
"x": "CSS and page-rendering improvements: no flash of blue or orange and less redraw jumpiness when the countdown box for your goal loads. #css",
"u": ["https://twitter.com/beemuvi/status/1765899780792983839",
      "https://github.com/beeminder/beeminder/pull/4773"],
"d": "2024-03-06",
"t": "2024-03-07",
}, { // ------------------------------------------------------------------------
"x": "Habitica integration could miss Dailies towards the end of the day if you had more than a day of safety buffer. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1766267438633820228",
      "https://github.com/beeminder/beeminder/issues/2261",
      "https://github.com/beeminder/beeminder/pull/4779"],
"d": "2024-03-08",
"t": "2024-03-08",
"c": "The problem was that when you're safe we don't check again till midnight which is normally fine but Dailies from pre-midnight when it's just after midnight don't count anymore. If you manually hit Fetch Autodata, it was fine but why would you necessarily if you had safety buffer?",
}, { // ------------------------------------------------------------------------
"x": "Fixed blog links like https://blog.beeminder.com/tags/weight+loss which had broken, plus a #bugfix for footnotes whose tags ended with numbers",
"u": ["https://twitter.com/beemuvi/status/1766267524847718793",
      "https://github.com/beeminder/blog/issues/469",
      "https://github.com/beeminder/blog/issues/470"],
"d": "2024-03-08",
"t": "2024-03-08",      
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Rainbow dashboard! The website dashboard got way more colorful",
"u": ["https://twitter.com/beemuvi/status/1767337916337099244",
      "https://forum.beeminder.com/t/rainbow-dash-board/11478",
      "https://github.com/beeminder/beeminder/pull/4780"],
"d": "2024-03-08",
"t": "2024-03-11",
}, { // ------------------------------------------------------------------------
"x": "We broke blog thumbnails on the main page (Again. Scraping the internet is hard!) Updated our script so it won't break (in this exact way) again. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1767338389601497511",
      "https://github.com/beeminder/beeminder/issues/4783",
      "https://github.com/beeminder/beeminder/pull/4784"],
"d": "2024-03-11",
"t": "2024-03-11",
"c": "The blog generator used to make a thumbnail of the blog images, and it had a relative path. But the latest couple posts it hasn't done that, so it is using the absolute paths to the image in the git repo. Now the scraper checks if it found a relative or absolute path.",
}, { // ------------------------------------------------------------------------
"x": "HelpScout came up w/ a new domain to send email from and we freaked out users w/ spurious \"unrecognized email address added data to your goal!\" warnings #bugfix",
"u": ["https://twitter.com/beemuvi/status/1767701208398242030",
      "https://github.com/beeminder/beeminder/issues/4790"],
"d": "2024-03-12",
"t": "2024-03-12",
"c": "Made the check more general to catch anything that mentions helpscout in the domain",
}, { // ------------------------------------------------------------------------
"x": "It's tiny but fixed the PayPal info on the payments page (only visible to you PayPal holdouts who haven't switched yet :AHEM:) to match other forms on the site",
"u": ["https://twitter.com/beemuvi/status/1767701557376962805",
      "https://github.com/beeminder/beeminder/pull/4781"],
"d": "2024-03-11",
"t": "2024-03-12",
"c": "In particular, non-editable fields properly show as grayed out",
}, { // ------------------------------------------------------------------------
"x": "When the bee is buzzing on a thumbnail on the dashboard (double-click one to see), we had a CSS bug that caused to border to be slightly wrong. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1768062816655921214",
      "https://github.com/beeminder/beeminder/issues/4782",
      "https://github.com/beeminder/beeminder/pull/4784"],
"d": "2024-03-11",
"t": "2024-03-13",
"c": "CSS margin glitch",
}, { // ------------------------------------------------------------------------
"x": "Further tweaking of the buzzing-bee state: now the thumbnail border is grayed out until it's done refreshing and has picked its new color",
"u": ["https://twitter.com/beemuvi/status/1768063619085078916",
      "https://github.com/beeminder/beeminder/issues/4782"],      
"t": "2024-03-13",
}, { // ------------------------------------------------------------------------
"x": "We finally made weight loss goals just tell you your hard cap today, not your hard cap after coasting along without weighing in till it's a beemergency",
"u": ["https://twitter.com/beemuvi/status/1768412852828971211",
      "https://github.com/beeminder/beeminder/issues/1518"],
"d": "2024-03-14",
"t": "2024-03-14",
"c": "This is technically a #zombie going all the way back to a redesign in 2016 or something when we changed the graph headers. It's been bugging us ever since.",
}, { // ------------------------------------------------------------------------
"x": "It also does this (weight-loss style graph headers with today's hardcap) for other goals that slope down with the good side below the red line, e.g. inbox goals",
"u": ["https://twitter.com/beemuvi/status/1768413058614050902",
      "https://github.com/beeminder/beeminder/issues/1518"],
"t": "2024-03-14",
}, { // ------------------------------------------------------------------------
"x": "Also weight & inbox goals show the hardcap info in SMS reminders and iOS and even zeno push notifications (if you have your own URL to handle zeno callbacks)",
"u": ["https://twitter.com/beemuvi/status/1768788796877963712",
      "https://github.com/beeminder/beeminder/issues/1518"],
"t": "2024-03-15",
}, { // ------------------------------------------------------------------------
"x": "For Do More goals we no longer say, eg, \"bare min +1\" after telling you you're safe for N days in SMS & iOS alerts. See the due-by table for that.",
"u": ["https://twitter.com/beemuvi/status/1768788934136561998",
      "https://github.com/beeminder/beeminder/issues/1518",
      "https://github.com/beeminder/beeminder/pull/4797"],
"t": "2024-03-15",
"c": "We'll see if anyone considers this a regression, and it can be handy to see how much you need to get one additional safe day but it was very confusing without the context of the due-by table",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Version 6.6 of the Beeminder iOS app, thanks to Theo Spears, is live!",
"u": ["https://twitter.com/beemuvi/status/1769874100724645923",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6"],
"t": "2024-03-18",
}, { // ------------------------------------------------------------------------
"s": true,
"n": false,
"x": "Headline change is a new Apple Health metric: Time in Daylight",
"u": ["https://twitter.com/beemuvi/status/1769874100724645923",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6",
      "https://github.com/beeminder/BeeSwift/pull/421"],
"t": "2024-03-18",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "And the most visible change in BeemiOS 6.6 is the buzzing infinibee while the app is waiting on the Beeminder servers",
"u": ["https://twitter.com/beemuvi/status/1769874250717122592",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6",
      "https://github.com/beeminder/BeeSwift/pull/444"],
"t": "2024-03-18",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Now fewer cases of showing unreasonably many decimal places",
"u": ["https://twitter.com/beemuvi/status/1770234318935425493",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6",
      "https://github.com/beeminder/BeeSwift/pull/438"],
"t": "2024-03-19",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "When defaulting to the most recent datapoint value in the field for entering data, we now exclude the meta datapoints for derails and PPRs",
"u": ["https://twitter.com/beemuvi/status/1770234472128291170",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6",
      "https://github.com/beeminder/BeeSwift/pull/441"],
"t": "2024-03-19",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We now let you change deadlines on goals that *used to be* connected to Apple Health. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1770590666147676223",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6",
      "https://github.com/beeminder/BeeSwift/issues/248",
      "https://github.com/beeminder/BeeSwift/pull/437"],
"t": "2024-03-20",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Apple Health data is now correctly logged for the correct Beeminder day for non-midnight deadlines. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1770962512474935504",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6",
      "https://github.com/beeminder/BeeSwift/pull/433"],
"t": "2024-03-21",
"c": "Accidentally tweeted this twice!",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The edit datapoint dialog now dismisses after editing/deleting a datapoint. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1770962609069830267",
      "https://github.com/beeminder/BeeSwift/releases/tag/6.6",
      "https://github.com/beeminder/BeeSwift/pull/445"],
"t": "2024-03-21",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Stopped superfluously triggering autodata refreshes for manual goals. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1775311750323376546",
      "https://github.com/beeminder/BeeSwift/pull/446"],
"t": "2024-04-02",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "No longer reset changes to datapoint values you're editing when switching between apps. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1775311855579525409",
      "https://github.com/beeminder/BeeSwift/pull/442"],
"t": "2024-04-02",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "The app now always syncs with Apple Health (like when launching the app) before syncing with the Beeminder server",
"u": ["https://twitter.com/beemuvi/status/1775315586857504795",
      "https://github.com/beeminder/BeeSwift/pull/440"],
"t": "2024-04-02",
"c": "This doesn't guarantee that we will always show correct data reflecting the latest healthkit data, but should increase the chance. As the app polls for goals which are recalculating it means it should also show the correct data shortly after loading. This might help a little with perceived Apple Health unreliabilty.",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Fixed a hard crash that could happen after logging out of the app, like if we tried to update Apple Health goals. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1775603101418045768",
      "https://github.com/beeminder/BeeSwift/pull/448"],
"t": "2024-04-03",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Logging in to the app should now support password managers for most users",
"u": ["https://twitter.com/beemuvi/status/1775603228597801465",
      "https://github.com/beeminder/beeminder/pull/4771",
      "https://github.com/beeminder/BeeSwift/pull/449"],
"t": "2024-04-03",
"c": "We made server-side changes that should make this mostly work. The above BeemiOS PR didn't make it into version 6.6.",
}, /* --------------------------------------------------------- end 2024mar */ ]


const batch2024apr = [{
}, { // ------------------------------------------------------------------------
"x": "The blog has its own cute favicon now",
"u": ["https://twitter.com/beemuvi/status/1776036432093843644",
      "https://raw.githubusercontent.com/beeminder/blog/master/public/icon-512.png",
      "https://github.com/beeminder/blog/issues/298",
      "https://github.com/beeminder/blog/pull/478",
      "https://github.com/beeminder/beeminder/issues/4785"],
"d": "2024-03-20",
"t": "2024-04-04",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Beeminder now integrates with Wakatime!",
"u": ["https://twitter.com/bmndr/status/1776037091283263693",
      "https://blog.beeminder.com/wakatime"],
"d": "2024-03-26",
"t": "2024-04-04",
}, { // ------------------------------------------------------------------------
"x": "Added List-ID to our beemails, which helps with email deliverability and can help with users' email filters",
"u": ["https://twitter.com/beemuvi/status/1777846830912741586",
      "https://github.com/beeminder/beeminder/issues/4759",
      "https://github.com/beeminder/beeminder/pull/4795"],
"d": "2024-03-21",
"t": "2024-04-09",
"c": "Beemailed about this on 2024-03-22",
}, { // ------------------------------------------------------------------------
"x": "We slightly broke our links to individual glossary entries (anchor links were just linking to the top of the glossary). #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1777847283226419471",
      "https://blog.beeminder.com/glossary",
      "https://github.com/beeminder/beeminder/issues/4785",
      "https://github.com/beeminder/blog/issues/457"],
"d": "2024-04-06",
"t": "2024-04-09",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Fixes/improvements to the TaskRatchet integration article: corrected link to TaskRatchet docs and clarified confusion about task filtering",
"u": ["https://twitter.com/beemuvi/status/1778203002765213781",
      "https://help.beeminder.com/article/289-taskratchet"],
"d": "2024-03-25",
"t": "2024-04-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Cleaned up an obsolete part of the Todoist article and added a link to Betty W's discovery in the forum about deleting recurring tasks",
"u": ["https://twitter.com/beemuvi/status/1778203117622083909",
      "https://help.beeminder.com/article/79-todoist"],
"d": "2024-03-27",
"t": "2024-04-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamped the Toggl Track article and addressed new user confusion in its FAQ about running timers and timers crossing the goal's deadline",
"u": ["https://twitter.com/beemuvi/status/1778573404289028456",
      "https://help.beeminder.com/article/155-toggl"],
"d": "2024-03-28",
"t": "2024-04-11",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Changed some confusing wording in the headings and added more examples to the Metaminder article plus clarifying tweaks to 9 other articles",
"u": ["https://twitter.com/beemuvi/status/1778574164028481737",
      "https://help.beeminder.com/article/323-metaminder",
      "https://help.beeminder.com/article/291-pocket",
      "https://help.beeminder.com/article/292-project-euler",
      "https://help.beeminder.com/article/347-readwise-reader",
      "https://help.beeminder.com/article/76-rescuetime",
      "https://help.beeminder.com/article/331-rssminder",
      "https://help.beeminder.com/article/77-runkeeper",
      "https://help.beeminder.com/article/89-skritter",
      "https://help.beeminder.com/article/116-slack",
      "https://help.beeminder.com/article/84-sleep-as-android"],
"d": "2024-03-20",
"t": "2024-04-11",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarified that two of the Strava metrics are Beeminder-computed, not available in Strava, and made the Storygraph article less rambly",
"u": ["https://twitter.com/beemuvi/status/1778926347194364257",
      "https://help.beeminder.com/article/281-strava",
      "https://help.beeminder.com/article/300-the-storygraph"],
"d": "2024-03-26",
"t": "2024-04-12",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Cleaned up the Android app article and moved the GTBee and Misfit articles to Historical Interest, plus clarifying tweaks to 4 other articles",
"u": ["https://twitter.com/beemuvi/status/1778926578971656457",
      "https://help.beeminder.com/article/62-android-app",
      "https://help.beeminder.com/article/63-gtbee",
      "https://help.beeminder.com/article/91-misfit",
      "https://help.beeminder.com/article/112-sms",
      "https://help.beeminder.com/article/78-trello",
      "https://help.beeminder.com/article/340-trydeepwork",
      "https://help.beeminder.com/article/293-twitter"],
"d": "2024-04-02",
"t": "2024-04-12",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Moved the Android Permanotification article to Historical Interest (yay for the obsoletifying improvements!) + clarifying tweaks to 4 more articles",
"u": ["https://twitter.com/beemuvi/status/1778927787619110919",
      "https://help.beeminder.com/article/125-android-notification",
      "https://help.beeminder.com/article/88-urlminder",
      "https://help.beeminder.com/article/90-withings",
      "https://help.beeminder.com/article/87-zapier",
      "https://help.beeminder.com/article/60-ios-app"],
"d": "2024-04-12",
"t": "2024-04-12",
}, { // ------------------------------------------------------------------------
"x": "In the default pledge cap UI in account settings, the actual dollar amount was escaping out of the fancy input stepper. HT zzq #bugfix #css #zombie",
  "u": ["https://twitter.com/beemuvi/status/1780020916715761772",
      "https://forum.beeminder.com/t/default-pledge-cap-ui-issue/11518?u=dreev",
      "https://github.com/beeminder/beeminder/issues/4818",
      "https://github.com/beeminder/beeminder/pull/4846"],
"d": "2024-04-12",
"t": "2024-04-15",
"c": "Recently introduced bug from show/hide password feature",
}, { // ------------------------------------------------------------------------
"x": "Rare bug with our WakaTime integration in goal setup that could cause us to endlessly keep asking you to connect to WakaTime. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1780385144211411077",
      "https://github.com/beeminder/beeminder/issues/4811",
      "https://github.com/beeminder/beeminder/pull/4812/"],
"t": "2024-04-16",
"c": "There was a syntax error in the behind-the-scenes error handling when we try to get your current data from WakaTime such that if we encountered an error of some kind (e.g. expired auth token, or a random temporary 500) from WakaTime, then the goal setup would screw up handling that error, and wind up shunting you back to the beginning, i.e. connect us to your WakaTime.",
}, { // ------------------------------------------------------------------------
"x": "In the \"Beeminder can access\" settings: the list of services wasn't using up all available horizontal space. Now the columns are distributed evenly. #css",
"u": ["https://twitter.com/beemuvi/status/1780385573888483582",
      "https://github.com/beeminder/beeminder/issues/4845",
      "https://github.com/beeminder/beeminder/pull/4846"],
"t": "2024-04-16",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Do-less goals for which the most recent datapoint is a Pessimistic Presumptive Report (PPR) now sort to the top of your dashboard",
"u": ["https://twitter.com/beemuvi/status/1780474189595672851",
      "https://github.com/beeminder/beeminder/issues/4776",
      "https://github.com/beeminder/beeminder/pull/4839"],
"d": "2024-04-10",
"t": "2024-04-16",
}, { // ------------------------------------------------------------------------
"x": "And in preparation for more changes to how we sort your dashboard, we changed the column header from \"DEADLINE\" to \"URGENCY\"",
"u": ["https://twitter.com/beemuvi/status/1780474501354168625",
      "https://github.com/beeminder/beeminder/issues/4776",
      "https://github.com/beeminder/beeminder/pull/4839"],
"d": "2024-04-10",
"t": "2024-04-16",
}, { // ------------------------------------------------------------------------
"x": "Changed the subject line for \"you made a new goal\" emails for goals with PPRs. Now: \"What you need to know about your new do-less goal\"",
"u": ["https://twitter.com/beemuvi/status/1781108802311565673",
      "https://github.com/beeminder/beeminder/issues/4834",
      "https://github.com/beeminder/beeminder/pull/4835"],
"t": "2024-04-18",
}, { // ------------------------------------------------------------------------
"x": "Also adjusted the email body so that it isn't talking about PPRs if you've already turned off PPRs. (HT narthur who noticed this on a custom goal)",
"u": ["https://twitter.com/beemuvi/status/1781109107631788453",
      "https://github.com/beeminder/beeminder/issues/3362",
      "https://github.com/beeminder/beeminder/pull/4835"],
"t": "2024-04-18",
}, { // ------------------------------------------------------------------------
"x": "UVI#4813 added the hard cap for weight goals and inbox-style goals on the goal page; now it's done on the dashboard as well",
"u": ["https://twitter.com/beemuvi/status/1781469506571043014",
      "https://github.com/beeminder/beeminder/issues/1518",
      "https://github.com/beeminder/beeminder/pull/4832"],
"d": "2024-04-08",
"t": "2024-04-19",
}, { // ------------------------------------------------------------------------
"x": "UVI#4814 made whittle-down goals on the dasboard confusing/deceptive. We've changed the wording to say \"hard cap\", added the word \"today\", and a comma. #zombie",
"u": ["https://twitter.com/beemuvi/status/1781469706316321100",
      "https://github.com/beeminder/beeminder/issues/4828",
      "https://github.com/beeminder/beeminder/pull/4832",
      "https://github.com/beeminder/beeminder/pull/4836"],
"d": "2024-04-10",
"c": "BEFORE: \"151 total due Tue, 5pm\"; AFTER: \"hard cap 151 today, safe until Tue, 5pm\". And the comma was a couple days later so could've milked this a little harder.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a long-standing annoyance with datapoints from Withings getting added in reverse-chronological order when they came in batched",
"u": ["https://twitter.com/beemuvi/status/1782558409868665229",
      "https://github.com/beeminder/beeminder/issues/2739",
      "https://github.com/beeminder/beeminder/pull/4842"],
"d": "2024-04-11",
"t": "2024-04-22",
}, { // ------------------------------------------------------------------------
"x": "Disallowed another batch of usernames that caused or could cause or look like they could cause problems: null, undefined, nil, true, false, etc",
"u": ["https://twitter.com/beemuvi/status/1782558528059904108",
      "https://github.com/beeminder/beeminder/issues/4814"],
"t": "2024-04-22",
}, { // ------------------------------------------------------------------------
"x": "Fixed an opaque error if you tried to specify a number with a comma in it in the commitment dial. Now it tells you it doesn't count as a number. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1782920424986435810",
      "https://github.com/beeminder/beeminder/issues/3197"],
"d": "2024-04-17",
"t": "2024-04-23",
}, { // ------------------------------------------------------------------------
"x": "In fixing UVI#4805 (about under-counting Dailies) we introduced a new bug where we over-counted them if you didn't log into Habitica at all. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1782921377751928922",
      "https://github.com/beeminder/beeminder/issues/2261",
      "https://github.com/beeminder/beeminder/pull/4858",
      "https://github.com/beeminder/beeminder/issues/4859"],
"d": "2024-04-23",
"t": "2024-04-23",
"c": "If you don't log in to Habitica then your Habitica cron doesn't run, and we kept adding the last daily-count to your Beeminder goal until you finally logged back in and the cron ran",
}, { // ------------------------------------------------------------------------
"x": "Standardized on hyphenating or capitalizing the phrases \"do-more goals\" and \"do-less goals\" throughout the web/email copy",
"u": ["https://twitter.com/beemuvi/status/1783284022053155277",
      "https://github.com/beeminder/beeminder/pull/4861"],
"d": "2024-04-24",
"t": "2024-04-24",
}, { // ------------------------------------------------------------------------
"x": "Added some commas to some email copy while we were at it, which ambiguously counts as typo fixes",
"u": ["https://twitter.com/beemuvi/status/1783284333048156182",
      "https://github.com/beeminder/beeminder/pull/4861"],
"d": "2024-04-24",
"t": "2024-04-24",
}, { // ------------------------------------------------------------------------
"x": "We fixed the spacing and margins and image sizes on the goal creation page for the Strava integration so everything's reasonably aligned. #css",
"u": ["https://twitter.com/beemuvi/status/1783646236849197186",
      "https://github.com/beeminder/beeminder/issues/4866",
      "https://github.com/beeminder/beeminder/pull/4860"],
"d": "2024-04-24",
"t": "2024-04-25",
}, { // ------------------------------------------------------------------------
"x": "We briefly broke the button to request additional free goals (the part that let us know you'd clicked it!); now fixed and emailing those affected",
"u": ["https://twitter.com/beemuvi/status/1783646407456641244",
      "https://github.com/beeminder/beeminder/pull/4864"],
"d": "2024-04-24",
"t": "2024-04-25",
}, { // ------------------------------------------------------------------------
"x": "The Beeminder API now returns urgencykey for your goal-sorting convenience, to match the dashboard's sort-by-urgency, and we've documented it in the API docs",
"u": ["https://twitter.com/beemuvi/status/1784004916773900713",
      "https://blog.beeminder.com/urgency",
      "https://api.beeminder.com/#goal",
      "https://github.com/beeminder/beeminder/issues/4847",
      "https://github.com/beeminder/apidocs/commit/f30b879b90d8315ba7419c2a6a94afdbea60b537"],
"d": "2024-04-26",
"t": "2024-04-26",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Death to $0 goals, birth of Feet-Wetting Mode, live for newly created goals now: choosing to risk $0 only lasts a week now, then pledge bumps itself to $5",
"u": ["https://twitter.com/beemuvi/status/1785079458279629127",
      "https://github.com/beeminder/beeminder/issues/4837"],
"d": "2024-04-28",
"t": "2024-04-29",
"c": "Originally called Trial Mode",
}, { // ------------------------------------------------------------------------
"x": "Significant UI improvements along for the ride on pledge selection, starting with dynamically adjusting the pledge progression when you change the pledge cap",
"u": ["https://twitter.com/beemuvi/status/1785454413685157907",
      "https://github.com/beeminder/beeminder/issues/4837"],
"d": "2024-04-28",
"t": "2024-04-30",
}, { // ------------------------------------------------------------------------
"x": "Checking the $0 checkbox also dynamically inserts \"$0\" into the pledge progression display with a shimmering arrow and heads-up of the auto-increase to come",
"u": ["https://twitter.com/beemuvi/status/1785816549968019961",
      "https://github.com/beeminder/beeminder/issues/4837"],
"d": "2024-04-28",
"t": "2024-05-01",
}, { // ------------------------------------------------------------------------
"x": "When Beemium folks opt for feet-wetting mode, they see a note telling them they can still set a $0 pledge cap, thus getting indefinite feet-wetting",
"u": ["https://twitter.com/beemuvi/status/1786177321013268817",
      "https://github.com/beeminder/beeminder/issues/4837"],
"d": "2024-04-28",
"t": "2024-05-02",
}, { // ------------------------------------------------------------------------
"x": "In the midst of the changes with $0 goals we bumped the price of Beemium from $50/mo to $64/mo, lest too many people decide $0 goals are worth paying for",
"u": ["https://twitter.com/beemuvi/status/1786540620166971580",
      ],
"d": "2024-05-02",
"t": "2024-05-03",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Revamped the \"how much do I pledge?\" article, autodata integrations articles, other articles with goal creation help in light of feet-wetting mode",
"u": ["https://twitter.com/beemuvi/status/1787619433596510385",
      "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals"],
"d": "2024-04-29",
"t": "2024-05-06",
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2024apr */ ]

const batch2024may = [{
}, { // ------------------------------------------------------------------------
"x": "The introduction of feet-wetting mode broke the CSS for checkboxes elsewhere in the UI. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1787992929832984639",
      "https://github.com/beeminder/beeminder/issues/4879",
      "https://github.com/beeminder/beeminder/pull/4870"],
"d": "2024-04-29",
"t": "2024-05-07",
}, { // ------------------------------------------------------------------------
"x": "In addition to checkmarks being off-center, they were no longer on one line with their labels. This stacking caused mayhem in some settings layouts. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1788357387164025149",
      "https://github.com/beeminder/beeminder/issues/4879",
      "https://github.com/beeminder/beeminder/pull/4870"],
"t": "2024-05-08",
"c": "This is a case where a picture is worth 💯 words; the screenshot in the PR makes way more sense than this above explanation.",
}, { // ------------------------------------------------------------------------
"x": "As promised in the blog post, we send an email to remind you that feet-wetting mode is ending and we're bumping your pledge to $5",
"u": ["https://twitter.com/beemuvi/status/1788719212594368756",
      "https://github.com/beeminder/beeminder/issues/4837",
      "https://github.com/beeminder/beeminder/pull/4881"],
"d": "2024-05-05",
"t": "2024-05-09",
}, { // ------------------------------------------------------------------------
"x": "Since either honeygrams or Humble Bundle, we severely broke the margin spacing &amp; subheader wrapping for autodata landing pages. Now fixed! #bugfix #css #zombie",
"u": ["https://twitter.com/beemuvi/status/1789077864815661504",
      "https://github.com/beeminder/beeminder/issues/4891",
      "https://github.com/beeminder/beeminder/pull/4889"],
"d": "2024-05-09",
"t": "2024-05-10",
}, { // ------------------------------------------------------------------------
"x": "The button to regenerate your personal auth token now has a confirmation with warning that doing so will break any scripts you have that use the auth token",
"u": ["https://twitter.com/beemuvi/status/1790165769562849549",
      "https://github.com/beeminder/beeminder/issues/4898",
      "https://github.com/beeminder/beeminder/pull/4876"],
"d": "2024-05-02",
"t": "2024-05-13",
"c": "See pictures in the pull request",
}, { // ------------------------------------------------------------------------
"x": "Help docs: PPR article emphasizes ability to turn off PPRs, deadline/reminders article deconfuses am/pm/midnight, and smaller copy tweaks to 12 other articles",
"u": ["https://twitter.com/beemuvi/status/1790169630969106711",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
      "https://help.beeminder.com/article/14-deadline",
      "https://help.beeminder.com/article/158-android-app-beta-testing",
      "https://help.beeminder.com/article/321-ios-app-beta-testing",
      "https://help.beeminder.com/article/34-cant-you-just-lie-about-your-data",
      "https://help.beeminder.com/article/45-what-is-the-akrasia-horizon",
      "https://help.beeminder.com/article/49-why-should-i-use-beeminder-over-stickk",
      "https://help.beeminder.com/article/114-can-i-specify-a-beneficiary-for-my-derailments",
      "https://help.beeminder.com/article/335-derailing-is-not-failing",
      "https://help.beeminder.com/article/109-account-details",
      "https://help.beeminder.com/article/110-apps-and-api",
      "https://help.beeminder.com/article/111-new-goal-defaults",
      "https://help.beeminder.com/article/106-goal-settings",
      "https://help.beeminder.com/article/102-privacy"],
"d": "2024-05-03",
"t": "2024-05-13",
}, { // ------------------------------------------------------------------------
"x": "Soft launch of our YNAB integration is available at beeminder.com/ynab for eager bee-vers to bee-ta test!",
"u": ["https://twitter.com/beemuvi/status/1790531788148036001",
      "https://github.com/beeminder/beeminder/issues/4817",
      "https://github.com/beeminder/beeminder/pull/4888"],
"d": "2024-05-13",
"t": "2024-05-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New article \"Can I restart an archived goal?\" addressing frequently asked questions from support",
"u": ["https://twitter.com/beemuvi/status/1790531942372520104",
      "https://help.beeminder.com/article/358-can-i-restart-an-archived-goal"],
"d": "2024-05-03",
"t": "2024-05-14",
}, { // ------------------------------------------------------------------------
"x": "Some people were hitting an error trying to remove the Lichess authentication from their Beeminder account. Now we let you do it, phew. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1790891164864024713",
      "https://github.com/beeminder/beeminder/issues/4873",
      "https://github.com/beeminder/beeminder/pull/4899"],
"d": "2024-05-14",
"t": "2024-05-15",
"c": "500-errors",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added caveats and copy tweaks and rearrangings and nudges and emphases and clarifications to 6 more help articles",
"u": ["https://twitter.com/beemuvi/status/1790891330262208957",
      "https://help.beeminder.com/article/103-data-source",
      "https://help.beeminder.com/article/104-supporters",
      "https://help.beeminder.com/article/99-graph-editor",
      "https://help.beeminder.com/article/101-reminders",
      "https://help.beeminder.com/article/18-respite",
      "https://help.beeminder.com/article/105-graph-settings"],
"d": "2024-05-13",
"t": "2024-05-15",      
}, { // ------------------------------------------------------------------------
"x": "Added a blog footer crediting Narthur with all the blog fanciness we added last year",
"u": ["https://twitter.com/beemuvi/status/1791255683578687977",
      "https://blog.beeminder.com/astroblog",
      "https://github.com/beeminder/blog/pull/481"],
"t": "2024-05-16",
"c": "Pine Peak Digital",
}, { // ------------------------------------------------------------------------
"x": "Added a link from goal settings, where you can schedule breaks on a single goal, to the megabreak page where you can do so for all your goals at once",
"u": ["https://x.com/beemuvi/status/1791257335958212753",
      "https://github.com/beeminder/beeminder/issues/4887"],
"d": "2024-05-16",
"t": "2024-05-16",
}, { // ------------------------------------------------------------------------
"x": "Oops, we broke a bunch of old blog links like blog.beeminder.com/tag/* which now redirect to the canonical /tags #bugfix #zombie",
"u": ["https://x.com/beemuvi/status/1791599009045627089",
      "https://github.com/beeminder/blog/issues/494"],
"d": "2024-05-17",
"t": "2024-05-17",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a section to the \"How do I interpret the graph?\" article on graph features like moving average",
"u": ["https://x.com/beemuvi/status/1791600457082945743",
      "https://help.beeminder.com/article/118-how-do-i-interpret-the-graph"],
"d": "2024-05-17",
"t": "2024-05-17",
}, { // ------------------------------------------------------------------------
"x": "Made the new goal defaults reminder settings align nicely with the per-goal settings on the beeminder.com/reminders page. HT Tom aka fronol",
"u": ["https://x.com/beemuvi/status/1792704279536718234",
      "https://github.com/beeminder/beeminder/issues/4805",
      "https://github.com/beeminder/beeminder/pull/4910"],
"t": "2024-05-20",
"c": "We persist in calling that the reminders fwomp page",
}, { // ------------------------------------------------------------------------
"x": "Cosmetic changes on the payments page: added big indicator of default paytype by the transactions list; Changed headers for Card vs Paypal.",
"u": ["https://x.com/beemuvi/status/1792706777353695739",
      "https://github.com/beeminder/beeminder/pull/4909"],
"t": "2024-05-20",
"d": "2024-05-19",
"c": "This was a little opportunistic thing while doing refund-as-honey for the admins. It adds the '(default type)' in gray below the left-hand side header. And uses a separate Payments (card) and Payments (PayPal) separately in the left-hand-header.",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Manifold has pivoted to a real-money(-ish) prediction market and we've updated the mana/honey conversion rate accordingly",
"u": ["https://x.com/beemuvi/status/1793068568600572356",
      "https://github.com/beeminder/beeminder/pull/4913"],
"d": "2024-05-21",
"t": "2024-05-21",
}, { // ------------------------------------------------------------------------
"x": "We standardized the comment that you see on beeminder.com/payments when a workerbee refunds your derail (or other charges) as honey",
"u": ["https://x.com/beemuvi/status/1793068871383138601",
      "https://github.com/beeminder/beeminder/issues/4827",
      "https://github.com/beeminder/beeminder/pull/4909"],
"d": "2024-05-19",
"t": "2024-05-21",
"c": "This comment looks like \"COMMENT ABOUT REFUND [refunding: ORIGINAL COMMENT]\""
}, { // ------------------------------------------------------------------------
"x": "Also the original card (or PayPal) payment links to the honey transaction that reverses it in the 'status' column",
"u": ["https://x.com/beemuvi/status/1793426935286313096",
      "https://github.com/beeminder/beeminder/issues/4827",
      "https://github.com/beeminder/beeminder/pull/4909"],
"d": "2024-05-19",
"t": "2024-05-22",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Critical typo fix (\"weekly\" instead of \"daily\"!) in the \"How do I set a weekly rate?\" article, plus anti-weasel wording in \"What is Beeminder?\"",
"u": ["https://x.com/beemuvi/status/1793428264373088282",
      "https://help.beeminder.com/article/339-how-do-i-set-a-goal-with-a-weekly-rate",
      "https://help.beeminder.com/article/70-what-is-beeminder"],
"d": "2024-05-22",
"t": "2024-05-22",
}, { // ------------------------------------------------------------------------
"x": "Emailed everyone with $0 goals, offered a honey bribe, and started the 30-day countdown on bumping all pledges up to $5",
"u": ["https://x.com/beemuvi/status/1793793293127716882",
      "https://github.com/beeminder/beeminder/issues/4902"],
"d": "2024-05-23",
"t": "2024-05-23",
}, { // ------------------------------------------------------------------------
"x": "We don't use Uservoice for feature requests anymore but it was embarrassing that links to uservoice.beeminder.com broke. #bugfix",
"u": ["https://x.com/beemuvi/status/1793793393396768970",
      "https://github.com/beeminder/beeminder/issues/4886"],
"d": "2024-05-23",
"t": "2024-05-23",
"c": "Technically a #zombie",
}, { // ------------------------------------------------------------------------
"x": "Side margins were missing on the Featured Beeminder gallery (worse: edge of the graphs were slightly off screen). #bugfix #css",
"u": ["https://x.com/beemuvi/status/1794154377244254412",
      "https://www.beeminder.com/featured",
      "https://github.com/beeminder/beeminder/issues/4804",
      "https://github.com/beeminder/beeminder/pull/4918"],
"d": "2024-05-22",
"t": "2024-05-24",
}, { // ------------------------------------------------------------------------
"x": "That fix also fixed a spacing issue with user galleries (the not-logged-in view of your goals) not centering graphs on screen. #bugfix #css",
"u": ["https://x.com/beemuvi/status/1794154782464340341",
      "https://github.com/beeminder/beeminder/issues/4804",
      "https://github.com/beeminder/beeminder/pull/4918"],
"d": "2024-05-22",
"t": "2024-05-24",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Fixed up ~9 articles with broken anchor links. Doh! Thanks to Clive for the automated checking.",
"u": ["https://x.com/beemuvi/status/1795108817157398828",
      "https://help.beeminder.com"],
"d": "2024-05-26",
"t": "2024-05-27",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New note in the \"can't find the answers here!\" article re: not deleting goals you want help with (and naming them). Plus 5 other articles improved.",
"u": ["https://x.com/beemuvi/status/1795109166693884125",
      "https://help.beeminder.com/article/351-i-need-help",
      "https://help.beeminder.com/article/32-what-do-i-do-first",
      "https://help.beeminder.com/article/54-how-do-i-change-my-goal",
      "https://help.beeminder.com/article/120-whats-the-best-way-to-beemind",
      "https://help.beeminder.com/article/123-weekstart",
      "https://help.beeminder.com/article/122-why-does-beeminder-think-its-already-tomorrow"],
"d": "2024-05-26",
"t": "2024-05-27",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Official launch of our YNAB integration! Added to the front page, revamped the landing page, all the things!",
"u": ["https://x.com/beemuvi/status/1795600504967565495",
      "https://www.beeminder.com/ynab"],
"d": "2024-05-27",
"t": "2024-05-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Wrote a brand new one for the brand new YNAB integration",
"u": ["https://x.com/beemuvi/status/1795600780587937908",
      "https://help.beeminder.com/article/359-ynab"],
"d": "2024-05-27",
"t": "2024-05-28",
}, /* --------------------------------------------------------- end 2024may */ ]

const batch2024jun = [{
}, { // ------------------------------------------------------------------------
"x": "We fixed some confusion-to-the-point-of-bugginess by not letting you create a goal with starting pledge greater than pledge cap (was possible on Beemium)",
"u": ["https://x.com/beemuvi/status/1801403302107861274",
      "https://github.com/beeminder/beeminder/issues/4919"],
"d": "2024-05-28",
"t": "2024-06-13",
"c": "HT Mary especially but multiple people reported this",
}, { // ------------------------------------------------------------------------
"x": "For those with the smallest possible pledge cap ($5, or maybe $0 on Beemium) we were failing to show the starting stakes on goal creation. #bugfix",
"u": ["https://x.com/beemuvi/status/1801403421091893356",
      "https://github.com/beeminder/beeminder/issues/4878"],
"d": "2024-05-28",
"t": "2024-06-13",
}, { // ------------------------------------------------------------------------
"x": "Along for the ride with those fixes, we now always correctly dynamically update the pledge schedule when you change the pledge cap. #bugfix",
"u": ["https://x.com/beemuvi/status/1801764548652974202",
      "https://github.com/beeminder/beeminder/pull/4926"],
"d": "2024-05-28",
"t": "2024-06-14",
}, { // ------------------------------------------------------------------------
"x": "And added more guidance / error messaging in goal creation for Beemium folks trying to both start at and stay at a $0 pledge",
"u": ["https://x.com/beemuvi/status/1801764855650914460",
      "https://github.com/beeminder/beeminder/pull/4926"],
"d": "2024-05-28",
"t": "2024-06-14",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Special promo for Manifest! http://beeminder.com/manifest",
"u": ["https://x.com/beemuvi/status/1802843205429575891"],
"t": "2024-06-17",
}, { // ------------------------------------------------------------------------
"x": "We made pretty physical cards with the redemption codes (and QR codes) for the Manifest promo",
"u": ["https://x.com/beemuvi/status/1802843371477913898"],
"t": "2024-06-17",
}, { // ------------------------------------------------------------------------
"x": "We implemented an anti-money-pump (aka AML) safeguard to limit how much free honey money you can transfer to other accounts or to Manifold",
"u": ["https://x.com/beemuvi/status/1803214907032347127"],
"t": "2024-06-18",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Group Goals publicly launched!",
"u": ["https://x.com/beemuvi/status/1803214999340658854",
      "https://blog.beeminder.com/groupies"],
"t": "2024-06-18",
}, { // ------------------------------------------------------------------------
"x": "New UI for adding groupies to your goal shows you the invites you've sent and who's accepted and joined. Also lots of explanatory copy.",
"u": ["https://x.com/beemuvi/status/1803574102172783093"],
"t": "2024-06-19",
}, { // ------------------------------------------------------------------------
"x": "We send an email to the prospective groupies with a link to click to confirm they're on board with the madness",
"u": ["https://x.com/beemuvi/status/1803574231550271574"],
"t": "2024-06-19",
}, { // ------------------------------------------------------------------------
"x": "Collection of fixes and improvements to group goals when it got more use: Don't resend invites to existing groupies, various typo fixes and copyedits",
"u": ["https://x.com/beemuvi/status/1803934440609190087",
      "https://github.com/beeminder/beeminder/issues/4937"],
"t": "2024-06-20",
}, { // ------------------------------------------------------------------------
"x": "Since it would subtly break things, we don't let you add a groupie to goal if they already have their own goal with the same goalname",
"u": ["https://x.com/beemuvi/status/1803934620016349480"],
"t": "2024-06-20",
}, { // ------------------------------------------------------------------------
"x": "And we plugged a privacy leak with that, so people can't probe your goalnamespace by disingenuously inviting you to group goals",
"u": ["https://x.com/beemuvi/status/1803934971637461327",
      "https://blog.beeminder.com/groupies",
      "https://github.com/beeminder/beeminder/commit/716d7f254927dc2c04baf38b9d9ddd0f365fdea5"],
"t": "2024-06-20",
}, { // ------------------------------------------------------------------------
"x": "One more #bugfix with group goals: we're now case-insensitive when you try to add a groupie's username",
"u": ["https://x.com/beemuvi/status/1804300599057580498"],
"t": "2024-06-21",
}, { // ------------------------------------------------------------------------
"x": "Finally, we made the case of no groupies or prospective groupies less confusing by having an explicit \"[none so far]\" shown",
"u": ["https://x.com/beemuvi/status/1805382984453046337"],
"t": "2024-06-24",
}, { // ------------------------------------------------------------------------
"x": "We emailed all the non-lifetime Beemium folks still at $50/mo to let them know they're grandfathered at that price for a year",
"u": ["https://x.com/beemuvi/status/1805750014737891488"],
"t": "2024-06-25",
}, { // ------------------------------------------------------------------------
"x": "New distinct favicon for the forum",
"u": ["https://x.com/beemuvi/status/1806110248224333865",
      "https://forum.beeminder.com"],
"d": "2024-06-18",
"t": '2024-06-26',
}, { // ------------------------------------------------------------------------
"x": "Help docs: Reorganizing, streamlining, tinkering, link-adding, note-adding, clarifying, and other copyediting for another batch of 9 help articles",
"u": ["https://x.com/beemuvi/status/1806470093284811199",
      "https://help.beeminder.com/article/71-example-10k-steps",
      "https://help.beeminder.com/article/72-example-goal-run-3-times-per-week",
      "https://help.beeminder.com/article/92-example-goal-go-to-the-gym-4-times-per-week",
      "https://help.beeminder.com/article/93-example-goal-spend-less-time-on-facebook",
      "https://help.beeminder.com/article/94-example-goal-eat-14-servings-of-vegetables-per-week",
      "https://help.beeminder.com/article/95-example-goal-learn-a-new-language",
      "https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types",
      "https://help.beeminder.com/article/336-how-many-goals-can-i-make-for-free",
      "https://help.beeminder.com/article/52-why-cant-i-create-a-do-less-odometer-whittle-down"],
"d": "2024-06-06",
"t": "2024-06-27",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New screen shots for the \"What is safety buffer or leeway?\" article, for the new hard cap style in the goal page header",
"u": ["https://x.com/beemuvi/status/1806836610136424820",
      "https://help.beeminder.com/article/55-what-is-safety-buffer"],
"d": "2024-06-07",
"t": "2024-06-28",
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2024jun */ ]

const batch2024jul = [{
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a clearly-needed explainer to the article on getting rid of extra safety buffer, about two-step ratcheting to remove a flat spot",
"u": ["https://x.com/beemuvi/status/1807924421140832743",
      "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer"],
"d": "2024-06-07",
"t": "2024-07-01",
}, { // ------------------------------------------------------------------------
"x": "Help docs: As required by Google Play, we clarified what data is retained (records of payments plus emails) when you delete your account",
"u": ["https://x.com/beemuvi/status/1807925427543105838",
      "https://help.beeminder.com/article/48-how-do-i-delete-my-account"],
"t": "2024-07-01",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Small improvements to 6 more articles, eg, new note about the save-all-breaks button, formatting, rearranging, etc",
"u": ["https://x.com/beemuvi/status/1808283009478807703",
      "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit",
      "https://help.beeminder.com/article/154-can-i-schedule-breaks-on-many-goals-at-once",
      "https://help.beeminder.com/article/57-what-if-i-only-want-to-do-my-goal-on-weekdays",
      "https://help.beeminder.com/article/58-what-if-i-only-want-to-do-something-once-a-month",
      "https://help.beeminder.com/article/124-my-goal-doesnt-make-any-sense",
      "https://help.beeminder.com/article/117-can-i-start-my-goal-over"],
"t": "2024-07-02",
}, { // ------------------------------------------------------------------------
"x": "Help docs: And more small improvements to an additional 8 articles, eg, note on extra leeway when restarting a goal, tweaks for clarity, etc",
"u": ["https://x.com/beemuvi/status/1808283232699666536",
      "https://help.beeminder.com/article/358-can-i-restart-an-archived-goal",
      "https://help.beeminder.com/article/119-what-are-the-goal-statistics",
      "https://help.beeminder.com/article/66-do-more-goals",
      "https://help.beeminder.com/article/67-do-less-goals",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
      "https://help.beeminder.com/article/68-odometer-goals",
      "https://help.beeminder.com/article/69-whittle-down-goals",
      "https://help.beeminder.com/article/96-weight-gain-loss-goals"],
"t": "2024-07-02",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Extra screenshot and text rearranging in the Custom Goals article, note about autodata in another article, and smaller tweaks to 2 other articles",
"u": ["https://x.com/beemuvi/status/1808649825862496691",
      "https://help.beeminder.com/article/97-custom-goals",
      "https://help.beeminder.com/article/36-what-is-my-data",
      "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal",
      "https://help.beeminder.com/article/38-what-happens-if-i-forgot-to-enter-data"],
"t": "2024-07-03",
}, { // ------------------------------------------------------------------------
"x": "We added a button to retry failed charges!",
"u": ["https://x.com/beemuvi/status/1808651214072262674",
      "https://github.com/beeminder/beeminder/issues/408"],
"d": "2024-07-03",
"t": "2024-07-03",
}, { // ------------------------------------------------------------------------
"x": "In the popup that shows outstanding charges when you update your payment method, we were erroneously always showing the gateway-drug charge. #bugfix",
"u": ["https://x.com/beemuvi/status/1809012007259288022",
      "https://blog.beeminder.com/gatewaydrug/",
      "https://github.com/beeminder/beeminder/pull/4953"],
"d": "2024-07-03",
"t": "2024-07-04",
"c": "Interally: backcharges-check",
}, { // ------------------------------------------------------------------------
"x": "Completed the 30-day countdown for bumping up pre-existing $0 goals, did so, and emailed everyone again",
"u": ["https://x.com/beemuvi/status/1809012170199552270"
      ],
"t": "2024-07-04",
}, { // ------------------------------------------------------------------------
"x": "And everyone who replied got their honey money gift to make that fair, which included opting them in to actually using honey for derailments",
"u": ["https://x.com/beemuvi/status/1809361309831717244",
      "https://github.com/beeminder/beeminder/issues/4902",
      "https://github.com/beeminder/beeminder/pull/4946",
      "https://github.com/beeminder/beeminder/pull/4949",
      "https://github.com/beeminder/beeminder/pull/4950"],
"t": "2024-07-05",
}, { // ------------------------------------------------------------------------
"x": "More cleanup and brokenness prevention: we've disallowed another batch of tech-problematic goalnames: null, nil, archive, archives, true, and false",
"u": ["https://x.com/beemuvi/status/1809370075612471520",
      "https://github.com/beeminder/beeminder/issues/4914",
      "https://github.com/beeminder/beeminder/pull/4955"],
"d": "2024-07-05",
"t": "2024-07-05",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Replaced an outdated screenshot in the \"how do I delete my account?\" article and fixed the click-to-embiggen",
"u": ["https://x.com/beemuvi/status/1810461708315705614",
      "https://help.beeminder.com/article/48-how-do-i-delete-my-account"],
"d": "2024-06-28",
"t": "2024-07-08",
}, { // ------------------------------------------------------------------------
"x": "Added a reminder of feet-wetting to the new goal email (it's in a PPS, and only if your current pledge is $0)",
"u": ["https://x.com/beemuvi/status/1810461920841109979",
      "https://github.com/beeminder/beeminder/issues/4871",
      "https://github.com/beeminder/beeminder/pull/4960"],
"d": "2024-07-08",
"t": "2024-07-08",
}, { // ------------------------------------------------------------------------
"x": "Moved post-derail respite next to the good-side/direction custom settings, fixing the bug that wouldn't let you switch graphs from do-more to do-less. #bugfix",
"u": ["https://x.com/beemuvi/status/1810825793695797386",
      "https://github.com/beeminder/beeminder/issues/433",
      "https://github.com/beeminder/beeminder/pull/4961"],
"d": "2024-07-09",
"t": "2024-07-09",
}, { // ------------------------------------------------------------------------
"x": "Also added a little javascript to clarify the units-of-respite when you switch between MOAR (respite in days) and LESS (respite in goal units)",
"u": ["https://x.com/beemuvi/status/1810825935928840367",
      "https://github.com/beeminder/beeminder/issues/433",
      "https://github.com/beeminder/beeminder/pull/4961"],
"d": "2024-07-09",
"t": "2024-07-09",
"c": "Before/after screenshots in the gissue",
}, { // ------------------------------------------------------------------------
"x": "When you \"sign up with Google\", timezone was missing from the registration form (where we make you pick a username and stuff). #bugfix",
"u": ["https://x.com/beemuvi/status/1811174211639210128",
      "https://github.com/beeminder/beeminder/issues/4963",
      "https://github.com/beeminder/beeminder/pull/4962"],
"d": "2024-07-10",
"t": "2024-07-10",
}, { // ------------------------------------------------------------------------
"x": "Also the intentions field was not getting highlighted as a required/missing field in the sign-up-with-Google case. #bugfix",
"u": ["https://x.com/beemuvi/status/1811174785310999021",
      "https://github.com/beeminder/beeminder/issues/4963",
      "https://github.com/beeminder/beeminder/pull/4962"],
"d": "2024-07-10",
"t": "2024-07-10",
"c": "When you sign up with Google, we still make you pick a username, set an intention and do the human-check. The human-check and username were outlined in red to indicate they were required, but intentions, which is also required, was not getting highlighted.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added small clarifications and new keywords and screenshots and such to 4 articles",
"u": ["https://x.com/beemuvi/status/1811545289766863290",
      "https://help.beeminder.com/article/39-how-do-i-fix-incorrect-data",
      "https://help.beeminder.com/article/40-can-anybody-else-add-data-to-my-goal",
      "https://help.beeminder.com/article/41-can-i-export-my-data",
      "https://help.beeminder.com/article/113-can-i-import-previous-data"],
"d": "2024-07-11",
"t": "2024-07-11",
}, { // ------------------------------------------------------------------------
"x": "We now have social link previews for your Beeminder gallery, like when you link someone to beeminder.com/YOURUSERNAME",
"u": ["https://x.com/beemuvi/status/1811546787221807542",
      "https://github.com/beeminder/beeminder/issues/4884",
      "https://github.com/beeminder/beeminder/pull/4964"],
"d": "2024-07-11",
"t": "2024-07-11",
}, { // ------------------------------------------------------------------------
"x": "Pocket changed something with their API and everyone's Pocket goals stopped being able to fetch for a couple days. #bugfix #zombie",
"u": ["https://x.com/beemuvi/status/1811911178626695557",
      "https://twitter.com/bmndr/status/1811175360681345485",
      "https://github.com/beeminder/beeminder/issues/4966",
      "https://github.com/beeminder/beeminder/pull/4965"],
"d": "2024-07-12",
"t": "2024-07-12",
}, { // ------------------------------------------------------------------------
"x": "The link previews for your archived gallery was accidentally exactly the same as for your main gallery. Now it correctly describes itself.",
"u": ["https://x.com/beemuvi/status/1813000415354761384",
      "https://github.com/beeminder/beeminder/issues/4884",
      "https://github.com/beeminder/beeminder/pull/4970"],
"d": "2024-07-15",
"t": "2024-07-15",
}, { // ------------------------------------------------------------------------
"x": "Facepalm: Previous UVI actually swapped the preview text for main and archived so they were both wrong. Now fixed for real! #bugfix",
"u": ["https://x.com/beemuvi/status/1813110123860271238"],
"d": "2024-06-15",
"t": "2024-06-16",
}, { // ------------------------------------------------------------------------
"x": "Fixed our inconsistent web/email copy: the verb 'beeminding' is not capitalized!",
"u": ["https://x.com/beemuvi/status/1813110972451811432",
      "https://github.com/beeminder/beeminder/issues/4930",
      "https://github.com/beeminder/beeminder/pull/4969"],
"d": "2024-07-15",
"t": "2024-07-16",
}, { // ------------------------------------------------------------------------
"x": "Oops, the button from UVI#4916 always or mostly failed, due to a rogue if-statement trying to prevent overzealous retrying when not user-initiated. #bugfix",
"u": ["https://x.com/beemuvi/status/1815887483873501198"],
"t": "2024-07-23",
"c": "We keep checking if the user is deadbeated between each attempted charge, so that if the card fails again we don't keep running through the list trying a bunch of stuff we expect to fail... however that check was in the wrong place so we'd quit before actually retrying any of the charges",
}, { // ------------------------------------------------------------------------
"x": "Our Garmin integration is so old it was making some http instead of https calls. Garmin warned this would soon break so we preemptively fixed it. #pregression",
"u": ["https://x.com/beemuvi/status/1817105492394873216",
      "https://github.com/beeminder/beeminder/issues/4967",
      "https://github.com/beeminder/beeminder/pull/4968"],
"d": "2024-07-15",
"t": "2024-07-27",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Tweaks and nudges and clarifications in 6 articles about costs and pledges and other topics",
"u": ["https://x.com/beemuvi/status/1818434437786616171",
      "https://help.beeminder.com/article/42-switching-goal-units",
      "https://help.beeminder.com/article/19-how-much-does-beeminder-cost",
      "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals",
      "https://help.beeminder.com/article/21-can-i-decrease-the-pledge-on-my-goal",
      "https://help.beeminder.com/article/343-can-i-increase-the-pledge-on-my-goal",
      "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets"],
"t": "2024-07-30",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added documentation of the gateway drug commitment device to the \"When Do I Pay?\" article",
"u": ["https://x.com/beemuvi/status/1818434741311537511",
      "https://help.beeminder.com/article/324-when-do-i-pay",
      "https://blog.beeminder.com/gatewaydrug/"],
"t": "2024-07-30",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a bit about feet-wetting mode to the \"Can I have goals without pledges?\" article, mitigating confusion that's arisen in support",
"u": ["https://x.com/beemuvi/status/1818796260255842328",
      "https://help.beeminder.com/article/23-can-i-have-goals-without-pledges"],
"t": "2024-07-31",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a section on discounts to the article on premium plans, plus editing to prefer \"premium plan\" to \"premium subscription\" across articles",
"u": ["https://x.com/beemuvi/status/1818796496562884803",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription"],
"t": "2024-07-31",
}, /* --------------------------------------------------------- end 2024jul */ ]


const batch2024aug = [{
}, { // ------------------------------------------------------------------------
"x": "Help docs: Updates to \"What happens if a charge fails?\" about retrying charges on your own, plus more on honey money there and in another article",
"u": ["https://x.com/beemuvi/status/1819158158495174817",
      "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails",
      "https://help.beeminder.com/article/27-what-payment-methods-are-available"],
"t": "2024-08-01",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a link to the \"When do I pay?\" article to the \"Why did Beeminder charge my card?\" article plus related clarifications",
"u": ["https://x.com/beemuvi/status/1819158256390123800",
      "https://help.beeminder.com/article/29-why-did-beeminder-charge-my-card"],
"t": "2024-08-01",      
}, { // ------------------------------------------------------------------------
"f": true,
"x": "No-Excuses Mode has eyes-open opt-in! We're trying really hard to get you to understand what you're opting in to. No More Whinging!",
"u": ["https://x.com/beemuvi/status/1819520861684355460",
      "https://github.com/beeminder/beeminder/issues/3170",
      "https://github.com/beeminder/beeminder/pull/4976"],
"d": "2024-07-28",
"t": "2024-08-02",
}, { // ------------------------------------------------------------------------
"x": "No-excuses opt-in has a popup (with new words) that also makes you type \"paying is not punishment\" to confirm you've read all the words",
"u": ["https://x.com/beemuvi/status/1819521110968533486",
      "https://github.com/beeminder/beeminder/issues/3170"],
"d": "2024-07-28",
"t": "2024-08-02",
}, { // ------------------------------------------------------------------------
"x": "Tiny typo fix: we were failing to capitalize \"URL\" in an error message",
"u": ["https://x.com/beemuvi/status/1820608477884207545",
      "https://github.com/beeminder/beeminder/issues/3920",
      "https://github.com/beeminder/beeminder/pull/4978"],
"d": "2024-08-02",
"t": "2024-08-05",
"c": "\"Callback URL\" not \"Callback url\"",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Brought the article on failing charges up to date with new ability to retry charges, plus tweaks to another article",
"u": ["https://x.com/beemuvi/status/1820608598613106738",
      "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails",
      "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work"],
"t": "2024-08-05",
}, { // ------------------------------------------------------------------------
"x": "We now give more specific error messages when you set an invalid reminder time (on the goal page, as well as the reminders page if only one goal errored)",
"u": ["https://x.com/beemuvi/status/1820961506386964827",
      "https://github.com/beeminder/beeminder/issues/149",
      "https://github.com/beeminder/beeminder/pull/4979"],
"d": "2024-08-02",
"t": "2024-08-06",
"c": "E.g. \"Error with goalname: alertstart must be before the deadline\"",
}, { // ------------------------------------------------------------------------
"x": "Also we made those error banners the standard red instead of blue",
"u": ["https://x.com/beemuvi/status/1820961937221677506",
      "https://github.com/beeminder/beeminder/issues/149",
      "https://github.com/beeminder/beeminder/pull/4979"],
"d": "2024-08-02",
"t": "2024-08-06",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Overhaul of our Honey Money article, with rearranging, rewriting, table of contents, formatting, new info for Indian users, PayPal workaround, etc",
"u": ["https://x.com/beemuvi/status/1821334017507258829",
      "https://help.beeminder.com/article/354-honey-money"],
"t": "2024-08-07",
}, { // ------------------------------------------------------------------------
"x": "Soft launch of our Oura autodata integration at http://beeminder.com/oura",
"u": ["https://x.com/beemuvi/status/1821334297464467724",
      "https://github.com/beeminder/integrations/issues/40",
      "https://github.com/beeminder/beeminder/issues/4959"],
"t": "2024-08-07",
}, { // ------------------------------------------------------------------------
"x": "Help docs: All-new article on No-Excuses Mode, hammering home the principles, walk-through of the new opt-in process, examples, etc",
"u": ["https://x.com/beemuvi/status/1821693411726106767",
      "https://help.beeminder.com/article/360-what-is-no-excuses-mode"],
"t": "2024-08-08",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Moved the article on premium credit to the historical interest section (it's subsumed by the new honey money doc) and tweaked 2 other articles",
"u": ["https://x.com/beemuvi/status/1821694844273897933",
      "https://help.beeminder.com/article/244-premium-credit",
      "https://help.beeminder.com/article/12-what-is-a-derailment",
      "https://help.beeminder.com/article/13-when-do-derailments-happen"],
"t": "2024-08-08",
}, { // ------------------------------------------------------------------------
"x": "Whoopsies! The Oura soft launch broke Garmin auth (only if you were trying to add your first Garmin goal). #bugfix #zombie",
"u": ["https://x.com/beemuvi/status/1822059751443984452",
      "https://github.com/beeminder/beeminder/issues/4989",
      "https://github.com/beeminder/beeminder/pull/4986",
      "https://github.com/beeminder/beeminder/pull/4987"],
"d": "2024-08-08",
"t": "2024-08-09",
}, { // ------------------------------------------------------------------------
"x": "Updated the YNAB logo on our frontpage. Also added a YNAB-specific section to the Terms of Service.",
"u": ["https://x.com/beemuvi/status/1822060038300840152",
      "https://github.com/beeminder/beeminder/issues/4980",
      "https://github.com/beeminder/beeminder/pull/4981"],
"d": "2024-08-02",
"t": "2024-08-09",
"c": "They don't want us using their logo; instead they have a 'Works with YNAB' thingie that they want us to use, so there you go",
}, { // ------------------------------------------------------------------------
"x": "Fixed an issue with the date column wrapping on the payments page when there was plenty of space. Was a regression that snuck in at some point. #bugfix #zombie",
"u": ["https://x.com/beemuvi/status/1823141110048542964",
      "https://github.com/beeminder/beeminder/issues/4786",
      "https://github.com/beeminder/beeminder/commit/40460467d0c5851fe019d9e6e8bdc94e6c2fc915"],
"d": "2024-05-20",
"t": "2024-08-12",
}, { // ------------------------------------------------------------------------
"x": "Also clarified some repetitive / non-informative title text (aka hovertext) from the list of honey payments",
"u": ["https://x.com/beemuvi/status/1823141604070445180",
      "https://github.com/beeminder/beeminder/issues/4786"],
"d": "2024-08-12",
"t": "2024-08-12",
"c": "The fro & yon columns might say the username, or might say something else, like 'you', or '<deleted>', or the user's full name if they've configured that, so the title text shows the user's username (assuming not deleted), but lots of the time this just looks repetetive, so we prepended 'username' to the beginning of the title text so now it be like 'username alice'",
}, { // ------------------------------------------------------------------------
"x": "For do-less goals with a weekend-off allowance and quantum=1 we were displaying the weekend rate as an integer even if it was floaty. #bugfix",
"u": ["https://x.com/beemuvi/status/1823507728125583851",
      "https://github.com/beeminder/beeminder/commit/36059d6536b9a2b18d4ce9a7b314a9901be5a9c0",
      "https://github.com/beeminder/beeminder/issues/4933"],
"d": "2024-08-13",
"t": "2024-08-13",
"c": "We were accidentally conservarounding the value that we put into the form field and displayed to the user, so if you had the quantum=1 (aka integery), and you set a weekend allowance of 12.5, we'd just show `12` in the field"
}, { // ------------------------------------------------------------------------
"x": "Same for any goal with a non-integer goal value, but a quantum of 1. We'd round it off to an integer in the commitment dial. #bugfix",
"u": ["https://x.com/beemuvi/status/1823507787600814237",
      "https://github.com/beeminder/beeminder/commit/36059d6536b9a2b18d4ce9a7b314a9901be5a9c0",
      "https://github.com/beeminder/beeminder/issues/4933"],
"d": "2024-08-13",
"t": "2024-08-13",
}, { // ------------------------------------------------------------------------
"x": "The new hovertext from UVI#4954 was wrong for like a day, repeating the text for the from and to instead of showing the right text for each. #bugfix",
"u": ["https://x.com/beemuvi/status/1823871662192025991",
      "https://github.com/beeminder/beeminder/issues/4786"],
"t": "2024-08-14",
}, { // ------------------------------------------------------------------------
"x": "New blurb at the top of the premium page telling you reasons you don't actually need premium!",
"u": ["https://x.com/beemuvi/status/1823872136488112517",
      "https://blog.beeminder.com/focus",
      "https://github.com/beeminder/beeminder/pull/4997"],
"d": "2024-08-14",
"t": "2024-08-14",
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
}, /* --------------------------------------------------------- end 2024aug */ ]


const staged = [ {
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
}, /* ---------------------------------------------------------- end staged */ ]


/*********************************************************************************************************************************************************************
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
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
"c": "Redirect straight to image from user/goal.ext; this is not much of a UVI, but doing a double redirect is dumb, and might matter if you were writing scripts and stuff, so this is marginally better", [TODO: did this fix the issue with forum post images? was it supposed to?]
"u": [
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
Pull in default jqueryui smoothness theme #4651
This prevents waiting on a connection to Google and gives us the ability to handle caching.
For https://github.com/beeminder/beeminder/issues/4650
This is ... who knows, maybe a microUVI?
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Closed a loophole in which you could change your pledge cap via the API"
Don't let folks set pledge cap via API
This just handles the API goals endpoint, and adds a qual.
https://github.com/beeminder/beeminder/issues/4533
No idea if this is a UVI.  Maybe, in that we're helping folks with megakrasia?
PR from 2023 Nov
is it deployed? NOT DEPLOYED
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
probably not a UVI yet (without doing more steps toward PPPurge): change what counts as having a valid payment method for paypal users
c: "not sure how this is actually a UVI, but maaaybe there's a spin here? I dunno. I did this for the sake of PPPurging, because we want to be able
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
anything else to milk from humble bundle?
https://github.com/beeminder/beeminder/pull/4762
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
already included above:
What’s the difference between the goal types? - Added a note on which goal types are accessible to free accounts. Kind of a UVI? Clarity is good!
https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types
"d": "2024-06-05",
}, { // ------------------------------------------------------------------------
Group goals launch: 
X you can invite people to join a goal you've created. good for shared chores, or moral support
X we send an email the person you're inviting and they have to confirm themself.
X there's a nice interface in your settings which shows the invites you've sent out, and the people who've accepted and joined. also explains how stuff works.
  https://github.com/beeminder/beeminder/pull/4932
Group goals pre-blog updates:
X Don't resend groupie invite to existing groupie
X fix typo in the email and remove underscores around the goal name (also in the invite email)
  https://github.com/beeminder/beeminder/pull/4938
Group goals tweaks before publishing the blog post, gissue #4935
X Special case for no pending invitees
- Lots of copyedits along the lines of the email copyedits
- Extra tightening of the prose
X Splur a thing, though turned out not to matter
Final mendozas for the blog announce
X don't let user confirm themself if it will create a conflict with an existing goal of their own
X don't invite people who are already members
- don't say "gallery/dashboard", "dashboard" will do
X usernames are case insensitive, so don't fail to find folx if the username is entered with capitalization
X fix up html on [none so far] line when no invites pending
- tweak js to remove "[none so far]" line when invitee line is added
- minor change to wording of "only the owner can add ppl"
X Privacy fix for group goal invites
- Nix underscores in email subject
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
ADAM: Add One Click Unsubscribe to beemails
This is for #4759
This is a UVI.
This should not be deployed yet.
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
Questionable: nicky encountered a bug with goal renaming, but only due to being opted into the android app beta.
https://github.com/beeminder/beeminder/pull/4942
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
//////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*********************************************************************************************************************************************************************/
