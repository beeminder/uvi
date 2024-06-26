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
}, { // ------------------------------------------------------------------------
"x": "The blog has its own cute favicon now",
"u": ["https://twitter.com/beemuvi/status/1776036432093843644",
      "https://raw.githubusercontent.com/beeminder/blog/master/public/icon-512.png",
      "https://github.com/beeminder/blog/issues/298",
      "https://github.com/beeminder/blog/pull/478"],
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
}, /* --------------------------------------------------------- end 2024mar */ ]


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
}, { // ------------------------------------------------------------------------
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
MINI: And killed more unused javascript (admin.js) for better page load times.
Stop adding admin.js to every page for everyone
Now, we serve it:
* on the admin pages
* on every other page, if the current user is an admin
The intent is to improve loading time and reduce resource use/data transfer.
The admin.js is still public!  We don't stop anyone from downloading it!
For #4652
This might be a UVI, just saving bytes.
also removed braintree javascript: #4642
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
}, { // ------------------------------------------------------------------------
oops, link previews don't seem to actually work for beecaps :(
adds meta-info to beecap page with beecap header image
but maybe that doesn't matter cuz it's a signedin-user-only page
[This is the link-preview control stuff, e.g. when you paste a link in sms, or slack, but i think that doesn't really count because you can't share a link to your beecap?]
"d": sent the emails around 2024-01-17?

more possible beecap follow-ons:
* catch (and log) errors with getting the stats
* show something to user if no stats / no activity in the last year
* more exceptions: for no-active-goals-at-all
https://github.com/beeminder/beeminder/pull/4697
}, { // ------------------------------------------------------------------------
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
YNAB integration (PR on 2024-02-29)
https://github.com/beeminder/beeminder/pull/4766
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
anything else to milk from humble bundle?
https://github.com/beeminder/beeminder/pull/4762
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
don't reply to helpscout things:
- if you send data to the bot from an unknown email address, it will message you to tell you that some unknown entity is adding data to your goal.
sometimes our support-box provider, helpscout, would somehow wind up in an email thread with the email bot and then you'd get a scary message about
it. we already did some checking for this, but only for specific formats. I made the check more general to catch anything that mentions helpscout in the domain.
https://github.com/beeminder/beeminder/pull/4791
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
block more usernames
https://github.com/beeminder/beeminder/issues/4814
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
zomb with hard caps on dashboad for whittle-down goals
#4828
deployed and reverted on 2024-04-08?
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
//////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*********************************************************************************************************************************************************************/
