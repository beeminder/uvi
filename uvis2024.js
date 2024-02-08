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
// TODO: clean up the things below; missing dates and URLs and notes to compress into the "c" fields; possibly additional milking?
}, { // ------------------------------------------------------------------------
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
      "http://beeminder.com/changelog#4235",
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
}, /* --------------------------------------------------------- end 2024feb */ ]

const staged = [ {
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
BEEMIOS
1. Add Time in Daylight metric -- https://github.com/beeminder/BeeSwift/pull/421 -- merged on 2023-12-15
2. Fix bug with changing deadline on goals that *used to be* Apple Health -- https://github.com/beeminder/BeeSwift/issues/248 -- merged on 2024-01-28
3. Limit precision of Apple Health metrics -- https://github.com/beeminder/BeeSwift/pull/438

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
Properly 403 when request has no Accept header
For #4686
This is UV and is arguably an I, but it means you get a 403 error instead of a 500 error.
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
runkeeper rate field giving opaque error when you specify a fraction
https://github.com/beeminder/beeminder/issues/4734
https://github.com/beeminder/beeminder/pull/4735
"d": "2024-02-07" 
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
