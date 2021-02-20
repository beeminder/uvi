var batch2021jan = [{
}, { // ------------------------------------------------------------------------
"x": "Dumb rare bank-error-in-your-favor bug with failed PayPal charges; we would sometimes fail to retry them all! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1345161598462115840",
      "https://github.com/beeminder/beeminder/issues/1305",
      "https://github.com/beeminder/beeminder/pull/2014"],
"d": "2020-12-29",
"t": "2021-01-01",
"c": "We were occasionally sending duplicate IDs on PayPal charges (causing PayPal to ignore the second charge as a duplicate). You would only see this if you had multiple failed charges at the same dollar amount on the same goal that got retried on the same day",
}, { // ------------------------------------------------------------------------
"x": "We bumped up the price of Beemium to $40/mo (if you don't already have it) and stopped selling the lifetime option for all plans",
"u": ["https://twitter.com/beemuvi/status/1346258053755097088",
      "https://github.com/beeminder/beeminder/issues/313",
      "https://github.com/beeminder/beeminder/pull/1921"],
"t": "2021-01-04",
"d": "2020-12-31",
}, { // ------------------------------------------------------------------------
"x": "As probably just an easter-eggy new year's promotion, if that's not an oxymoron, the more-free-goals-please button now works for everyone on the free plan",
"u": ["https://twitter.com/beemuvi/status/1346260055662895105",
      "https://github.com/beeminder/beeminder/pull/2021"],
"d": "2021-01-01",
"t": "2021-01-04",
}, { // ------------------------------------------------------------------------
"x": "We were long experimenting with what the default pledge cap was (i.e., running bucket tests); now it's a consistent $270 (just the default, mind)",
"u": ["https://twitter.com/beemuvi/status/1346606300419919872",
      "https://github.com/beeminder/beeminder/issues/1906",
      "https://github.com/beeminder/beeminder/pull/2030"],
"d": "2021-01-04",
"t": "2021-01-05",
"c": "Bucket test pledgecap2",
}, { // ------------------------------------------------------------------------
"x": "We got all the help docs caught up to the fact that we don't sell lifetime plans anymore",
"u": ["https://twitter.com/beemuvi/status/1346981105858084864",
      "https://help.beeminder.com/article/26-what-if-i-buy-lifetime-change-my-mind",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription"],
"t": "2021-01-06",
"c": "By Nicky",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Beeminder merch! http://beeminder.com/merch",
"u": ["https://twitter.com/beemuvi/status/1346981250377031682",
      "https://twitter.com/bmndr/status/1346586168498950149",
      "https://github.com/beeminder/beeminder/issues/2024"],
"d": "2021-01-05",
"t": "2021-01-06",
}, { // ------------------------------------------------------------------------
"x": "When signing up, we were telling you your email address was invalid and not letting you hit submit if you had any space after your email addres. Silly! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1347345746450817025",
      "https://github.com/beeminder/beeminder/issues/2032",
      "https://github.com/beeminder/beeminder/pull/2020"],
"d": "2020-12-31",
"t": "2021-01-07",
}, { // ------------------------------------------------------------------------
"x": "We weren't charging if you derailed a goal &amp; then archived before the charge went thru! Now we charge pending charges as part of the archive process. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1347708621006639104",
      "https://github.com/beeminder/beeminder/issues/1358",
      "https://github.com/beeminder/beeminder/pull/2039"],
"d": "2021-01-08",
"t": "2021-01-08",
"c": "This involves a nice popover (yumm. popovers are tasty!) that warns you you'll be charged and how much. Also apparently this cost us $18,754 in lost revenue since Mar 2020??",
}, { // ------------------------------------------------------------------------
"x": "Rejargoning! We reintroduced the terms 'road dial', 'ratchet', and 'auto-ratchet' to the UI and purged 'max safe days' in favor of 'safety buffer cap'",
"u": ["https://twitter.com/beemuvi/status/1348787804629655553",
      "https://github.com/beeminder/beeminder/issues/1719"],
"d": "2021-01-08",
"t": "2021-01-11",
}, { // ------------------------------------------------------------------------
"x": "Also we renamed 'mercy days', which didn't make sense since generalizing from the 'no-mercy derails' setting, to 'post-derail respite'",
"u": ["https://twitter.com/beemuvi/status/1348788329584627712",
      "https://blog.beeminder.com/mercy",
      "https://github.com/beeminder/beeminder/issues/1719"],
"d": "2021-01-08",
"t": "2021-01-11",
}, { // ------------------------------------------------------------------------
"x": "And we added various blurbs to explain and clarify the rejargoned UI so on net we think it's actually more clear for newbees and normal humans",
"u": ["https://twitter.com/beemuvi/status/1349117692024811521",
      "https://forum.beeminder.com/t/does-beeminder-use-too-much-jargon/6702",
      "https://github.com/beeminder/beeminder/issues/1719"],
"d": "2021-01-08",
"t": "2021-01-12",
}, { // ------------------------------------------------------------------------
"x": "Yet more cleanup and tweaks as part of the rejargoning: changing button text, removing field labels that the blurbs made redundant, etc",
"u": ["https://twitter.com/beemuvi/status/1349493198394068993",
      "https://github.com/beeminder/beeminder/issues/1719"],
"d": "2021-01-08",
"t": "2021-01-13",
}, { // ------------------------------------------------------------------------
"x": "Clarified that the fluctuation buffer is in goal units and renamed the 'weasel insurance' section to 'weasel-proofing'",
"u": ["https://twitter.com/beemuvi/status/1349493321689776128",
      "https://github.com/beeminder/beeminder/issues/1719"],
"d": "2021-01-08",
"t": "2021-01-13",
}, { // ------------------------------------------------------------------------
"x": "Improvements to http://beeminder.com/breaks -- condensed the column headers so they fit better and explained them better at the top of the page",
"u": ["https://twitter.com/beemuvi/status/1349863649750315008",
      "https://github.com/beeminder/beeminder/issues/1719"],
"d": "2021-01-08",
"t": "2021-01-14",
}, { // ------------------------------------------------------------------------
"x": "Also on that page, added hovertext on the links to the help docs with short versions of the explanations; + more copyediting like purging of 'max safe days'",
"u": ["https://twitter.com/beemuvi/status/1350211885635833856",
      "https://github.com/beeminder/beeminder/issues/1719"],
"d": "2021-01-08",
"t": "2021-01-15",
}, { // ------------------------------------------------------------------------
"x": "The rejargoning (specifically the new explanatory blurbs) managed to break the ratchet UI, causing duplicated lines to appear when you ratcheted. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1350212694868037635",
      "https://github.com/beeminder/beeminder/issues/2041"],
"d": "2021-01-10",
"t": "2021-01-15",
}, { // ------------------------------------------------------------------------
"x": "We'd missed some instances of renaming 'mercy' to '(post-derail) respite': errory copy, webcopy in default goal settings, etc",
"u": ["https://twitter.com/beemuvi/status/1350213722166345728",
      "https://github.com/beeminder/beeminder/issues/2043"],
"d": "2021-01-11",
"t": "2021-01-15",
}, { // ------------------------------------------------------------------------
"x": "We now allow single-character hashtags; also we now say 'Apple Health' rather than just 'Apple' on goals with Apple Health autodata",
"u": ["https://twitter.com/beemuvi/status/1350215506838523904",
      "https://github.com/beeminder/road/issues/175",
      "https://github.com/beeminder/beeminder/issues/1671"],
"d": "2021-01-14",
}, { // ------------------------------------------------------------------------
"x": "Significant decrease in the file sizes of the SVG graphs (about half, we think) and maybe a slight speedup in graph regeneration time too!",
"u": ["https://twitter.com/beemuvi/status/1350216755759616000",
      "https://github.com/beeminder/road/commit/c123fd6c5708e4d1d6f9c46c4251c9d04f99e6c4",
      "https://github.com/beeminder/road/commit/e79dc412919e1639c30c2521977117e5495696ce"],
"d": "2021-01-13",
"t": "2021-01-15",
}, { // ------------------------------------------------------------------------
"x": "All our bold fonts were appearing as just blurry in Google Chrome (apparently a widespread problem with Chrome). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1350217434465071104",
      "https://github.com/beeminder/beeminder/issues/1989"],
"d": "2021-01-14",
"t": "2021-01-15",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Long-intended change to the free plan: you get 3 goals in your gallery/dashboard, not 3 ever-created goals. You can archive a goal to free up another slot.",
"u": ["https://twitter.com/beemuvi/status/1351293137369526273",
      "https://blog.beeminder.com/infinibee/",
      "https://github.com/beeminder/beeminder/issues/1776",
      "https://github.com/beeminder/beeminder/issues/1626",
      "https://github.com/beeminder/beeminder/pull/2021"],
"d": "2020-12-31",
"t": "2021-01-18",
"c": "This also means there's never an incentive to delete a goal. It suffices to archive and there's no limit on archived goals for anyone.",
}, { // ------------------------------------------------------------------------
"x": "The 3-nonarchived change to the free plan also means we now show the paywall if you try to unarchive a goal when you already have 3 in your gallery",
"u": ["https://twitter.com/beemuvi/status/1351690404446433281",
      "https://github.com/beeminder/beeminder/issues/1776",
      "https://github.com/beeminder/beeminder/pull/2062/commits/9c952900150529e363dfcdf0f30a66fbf27c86ca",
      "https://github.com/beeminder/beeminder/pull/2062"],
"d": "2021-01-16",
"t": "2021-01-19",
}, { // ------------------------------------------------------------------------
"x": "If your payment method failed, you can't restart goals. Also some copyedits and link to http://blog.bmndr.co/commitwall around missing payment method.",
"u": ["https://twitter.com/beemuvi/status/1352054618809765889",
      "https://github.com/beeminder/beeminder/commit/d35c31312c3d9e9ccbc50c2b78b1ee6f05375577",
      "https://github.com/beeminder/beeminder/commit/ec2c95dd7f9c9e108d00687a46381053a72219aa",
      "https://github.com/beeminder/beeminder/pull/2062"],
"d": "2021-01-16",
"t": "2021-01-20",
"c": "There's a whole interstitial, called the deadbeatwall, for trying to restart a goal when you don't have a valid payment method",
}, { // ------------------------------------------------------------------------
"x": "Copyedits on the paywall page and a #bugfix with displaying how many goals you've used up (it's goals in your gallery, not total created)",
"u": ["https://twitter.com/beemuvi/status/1352405077575692290",
      "https://github.com/beeminder/beeminder/pull/2062/commits/dcb2ca996aafb4d1f0f6673025bfe4b35ec1a0b5",
      "https://github.com/beeminder/beeminder/pull/2062"],
"d": "2021-01-16",
"t": "2021-01-21",
"c": "Goal count was wrong for 16 days, from the new year's easter-eggy promotion till this deploy",
}, { // ------------------------------------------------------------------------
"x": "Paywall now better explains reasons you may get extra goals on the free plan, + copy/style tweaks to the more-free-goals button (+ ended new year's promotion)",
"d": "2021-01-16",
"t": "2021-01-21",
"u": ["https://twitter.com/beemuvi/status/1352405192872841220",
      "https://github.com/beeminder/beeminder/issues/569",
      "https://github.com/beeminder/beeminder/pull/2062/commits/638fd047f3d1a91aac20816fda31d867fc8a8241",
      "https://github.com/beeminder/beeminder/pull/2062"],
"c": "Reasons: confusion, test goals, returning after a hiatus. Changed \"boom we emailed a human\" to \"Let the feedack commence!\". Also fixed a probably user-invisible bug with the multiple-emails-to-support-per-button-click thing.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a dumb double-redirect in legacy URLs, made a proper error if you try to hit a goal's restart page when it's already active, + obscure 500-error #bugfix",
"u": ["https://twitter.com/beemuvi/status/1352764648752254976",
      "https://github.com/beeminder/beeminder/pull/2062/commits/9b3df74d601b7e683044b390ac1587a84b38744a",
      "https://github.com/beeminder/beeminder/pull/2062/commits/4acff8069f14cfc6a06c8def5ec0dc8eeaf54dfc",
      "https://github.com/beeminder/beeminder/pull/2062"],
"d": "2021-01-16",
"t": "2021-01-22",
"c": "Double-redirect had /contracts going to /pledges which would finally redirect to /payment (the new canonical URL). Also the URL for restarting a goal is hideous but that's another issue. The 500-error was for visiting a frozen legacy goal with no payment method, something that can't happen since commitwall.",
}, { // ------------------------------------------------------------------------
"x": "One more tiny one: we don't let you try to rescale datapoints on a frozen goal (it would give you an infinitely spinning bee if you tried). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1352764861072044033",
      "https://github.com/beeminder/beeminder/pull/2062/commits/6ec7d44c259b73359e3664d9095583c9dbdfd612",
      "https://github.com/beeminder/beeminder/pull/2062"],
"d": "2021-01-16",
"t": "2021-01-22",
}, { // ------------------------------------------------------------------------
"x": "Lighter yellow shading of infinitely safe regions of the graph so it's distinct from the \"yellow brick\" danger zone next to the bright red line",
"u": ["https://twitter.com/beemuvi/status/1353843401565687808",
      "https://github.com/beeminder/road/issues/174"],
"d": "2021-01-20",
"t": "2021-01-25",
}, { // ------------------------------------------------------------------------
"x": "Pretty big copyediting pass on bmndr.co/faq with new links, nixing dead links, rewordings, clarifications",
"u": ["https://twitter.com/beemuvi/status/1354229142007386114",
      "https://github.com/beeminder/beeminder/issues/2016",
      "https://github.com/beeminder/beeminder/pull/2069"],
"d": "2021-01-22",
"t": "2021-01-26",
"c": "Don't link standard contract in FAQ (see gissue #1496); link to bsoule.com not beesoule.com; link to the frontpage list of integrations not forum post; link to blog post about what happens when you derail and make the FAQ item more succinct; remove link to old roadwidth post; data tab is below the goal now; reworded the 'do I have to pay to quit' entry; stop linking to the old shortcircuiting post; removed super moribund social media links (see gissue #2016)",
}, { // ------------------------------------------------------------------------
"x": "If for some reason your bright red line is flat from beginning to end, the percent complete by value now says 0% if you're on the wrong side of it, else 100%",
"u": ["https://twitter.com/beemuvi/status/1354587395572649988",
      "https://github.com/beeminder/road/issues/182"],
"t": "2021-01-27",
}, { // ------------------------------------------------------------------------
"x": "Subtle #bugfix with isolines (the yellow lines parallel to the bright red line showing how much safety buffer you have) that made some be missing sometimes",
"u": ["https://twitter.com/beemuvi/status/1354589685511671808",
      "https://github.com/beeminder/road/issues/185"],
"d": "2021-01-27",
"t": "2021-01-27",
}, { // ------------------------------------------------------------------------
"x": "Kind of obscure #bugfix to close a loophole that let you drop your pledge below $5 via the API for non-Beemium users",
"u": ["https://twitter.com/beemuvi/status/1354933819279691789",
      "https://github.com/beeminder/beeminder/issues/1034"],
"d": "2021-01-20",
"t": "2021-01-28",
}, { // ------------------------------------------------------------------------
"x": "BeemiOS 5.9: Removed the \"Unlock your phone to sync your Health data with Beeminder\" notifications, which were often delivered nonsensically",
"u": ["https://twitter.com/beemuvi/status/1355230862686621698",
      "https://github.com/beeminder/BeeSwift/issues/44",
      "https://github.com/beeminder/BeeSwift/releases/tag/5.9"],
"d": "2021-01-28",
"t": "2021-01-29",
}, /* --------------------------------------------------------- end 2021jan */ ]

var batch2021feb = [{
"f": true,
"x": "Visual Road Editor redesign! http://road.beeminder.com",
"u": ["https://twitter.com/beemuvi/status/1356404646454038528",
      "https://github.com/beeminder/road"],
"d": "2021-01-30",
}, { // ------------------------------------------------------------------------
"n": false,
"s": true,
"x": "It's all pretty and responsive (ie, much more mobile-friendly) and has a Beeminder banner <3",
"u": ["https://twitter.com/beemuvi/status/1356404646454038528",
      "https://github.com/beeminder/road"],
"d": "2021-01-30",
"t": "2021-02-01",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Also there's a new Sandbox tab for experimenting with how your road will hypothetically change as you add future datapoints",
"u": ["https://twitter.com/beemuvi/status/1356404971940446208",
      "https://github.com/beeminder/road"],
"d": "2021-01-30",
"t": "2021-02-01",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Plus there are tabs below the graph that replicate some of the functionality on Beeminder proper, including adding data and viewing datapoints",
"u": ["https://twitter.com/beemuvi/status/1356753677520826369",
      "https://github.com/beeminder/road"],
"d": "2021-01-30",
"t": "2021-02-02",
}, { // ------------------------------------------------------------------------
"x": "Fixes and tweaks to the visual road editor, including top-posting the datapoints and tweaking the CSS to better fit different screen sizes",
"u": ["https://twitter.com/beemuvi/status/1357047552802123776",
      "https://github.com/beeminder/road/issues/191",
      "https://github.com/beeminder/road/issues/197"],
"d": "2021-02-03",
"t": "2021-02-03",
}, { // ------------------------------------------------------------------------
"x": "When you click Apple Health when creating a new goal, we now send you to the help page for instructions instead of our ancient blog post",
"u": ["https://twitter.com/beemuvi/status/1357486961632546816",
      "https://help.beeminder.com/article/61-apple-health",
      "https://github.com/beeminder/beeminder/issues/1730",
      "https://github.com/beeminder/beeminder/pull/2090"],
"d": "2021-02-04",
"t": "2021-02-04",
"c": "Specifically, both bmndr.com/apple and bmndr.com/applehealth redirect to the help page, and the \"new goal\" link for Apple Health, and the Pact page that mentions Apple Health all point at the help page",
}, { // ------------------------------------------------------------------------
"x": "When creating a Project Euler goal, we now give a nice error message and a tip about unlisted profiles if we can't find your username",
"u": ["https://twitter.com/beemuvi/status/1357488033222729728",
      "https://github.com/beeminder/beeminder/issues/1704",
      "https://github.com/beeminder/beeminder/pull/2091"],
"d": "2021-02-04",
"t": "2021-02-04",
"c": "Webcopy: \"Having trouble? Is your Project Euler profile set to 'unlisted'? You can check in your Project Euler account [link].\"",
}, { // ------------------------------------------------------------------------
"x": "We also added a nice banner message when we do succeed in fetching your Project Euler progress when creating a goal, eg, \"Found 99 problems completed\"",
"u": ["https://twitter.com/beemuvi/status/1358934416697880577",
      "https://github.com/beeminder/beeminder/issues/1704",
      "https://github.com/beeminder/beeminder/issues/2089",
      "https://github.com/beeminder/beeminder/pull/2091"],
"d": "2021-02-04",
}, { // ------------------------------------------------------------------------
"x": "In the visual road editor, we replaced the \"fixed slopes\" and \"fixed intervals\" checkboxes with just one \"propagate forward\" checkbox",
"u": ["https://twitter.com/beemuvi/status/1359227515529699328",
      "https://github.com/beeminder/road/issues/162"],
"d": "2021-01-30",
"t": "2021-02-09",
"c": "Ie, we killed \"fixed intervals\" which is now always false and renamed \"fixed slopes\" to \"propagate forward\". Part of /newdesign.",
}, { // ------------------------------------------------------------------------
"x": "Fixed a regression that leaked private goalnames & descriptions of archived goals (!) and relatedly broke and re-fixed alphabetizing of archived goals #bugfix",
"u": ["https://twitter.com/beemuvi/status/1359263879407144961",
      "https://github.com/beeminder/beeminder/issues/2092",
      "https://github.com/beeminder/beeminder/pull/1019"],
"d": "2021-02-05",
"t": "2021-02-09",
"c": "Leak started 2020-01-06. HT krugerk for catching it! PR#1019 introduced the archived gallery privacy regression and PR#2093 fixed that but caused the alphabetizing regression.",
}, { // ------------------------------------------------------------------------
"x": "The recent Project Euler improvements broke goal creation for those who hadn't yet solved any Project Euler problems! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1359623665764032512",
      "https://github.com/beeminder/beeminder/issues/2097"],
"d": "2020-02-09",
"t": "2020-02-10",
"c": "By Adam",
}, { // ------------------------------------------------------------------------
"x": "The API's Datapoints endpoint briefly gave a 500 error when trying to paginate. This also broke our old http://bmndr.co/fatcyclist page. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1360022925454180354",
      "https://github.com/beeminder/beeminder/pull/1196",
      "https://github.com/beeminder/beeminder/issues/1188",
      "https://github.com/beeminder/beeminder/issues/1198",
      "https://github.com/beeminder/beeminder/commit/4e94d3a862039fb4f9d23e79ca4fd9a8628ce3e6"],
"d": "2020-03-31",
"t": "2021-02-11",
"c": "This was a bug introduced by our upgrade to Rails 4.2 a year ago (due to an out-of-date gem we were using to do pagination of results). We fixed it shortly after the Rails 4.2 upgrade, but we were holding out on tweeting it until we made /fatcyclist look non-horrible which we finally did on 2021-02-11.",
}, { // ------------------------------------------------------------------------
"x": "You can now to go beeminder.com/USERNAME/GOALNAME.svg to get the latest SVG of your graph (or any public graph). So crisp!",
"u": ["https://twitter.com/beemuvi/status/1360392008322322436",
      "https://github.com/beeminder/beeminder/issues/2084"],
"d": "2021-02-12",
"t": "2021-02-12",
}, { // ------------------------------------------------------------------------
"x": "Related #bugfix: beeminder.com/USERNAME/GOALNAME.png and .svg now work even if there happens to be a - or a _ in the goalname",
"u": ["https://twitter.com/beemuvi/status/1360392526977355783",
      "https://github.com/beeminder/beeminder/issues/2105"],
"d": "2021-02-12",
"t": "2021-02-12",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Beedroid version 4.0.0! Headliner is revamped, more reliable syncing!",
"u": ["https://twitter.com/beemuvi/status/1361386157045555204",
      "https://github.com/beeminder/beedroid/issues/77",
      "https://github.com/beeminder/beedroid-hist/pull/114"],
"d": "2021-02-15",
"t": "2021-02-15",
"c": "Includes the fix for the infamous 10% remaining storage bug, where having too little space left on your phone silently prevented syncing",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We were accidentally requiring 'goal title' when changing goal notifications #bugfix (Also we renamed that to 'goal description' for consistency)",
"u": ["https://twitter.com/beemuvi/status/1361842129207586816",
      "https://forum.beeminder.com/t/beedroid-wont-let-you-change-notifications-without-a-title/7646",
      "https://github.com/beeminder/beedroid/issues/24",
      "https://github.com/beeminder/beedroid/issues/174"],
"d": "2021-02-15",
"t": "2021-02-16",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "If you have a widget for a goal that doesn't exist anymore, it gives you a helpful error instead of stale data, + other robustification / #bugfix's w/ widgets",
"u": ["https://twitter.com/beemuvi/status/1361842214574329860",
      "https://github.com/beeminder/beedroid/issues/4",
      "https://github.com/beeminder/beedroid/issues/15",
      "https://github.com/beeminder/beedroid/issues/39"],
"d": "2021-02-15",
"t": "2021-02-16",
"c": "Maybe just this for the 'plus other stuff': When you delete or archive a goal, it now removes itself the summary widget without having to log in and log out",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Beedroid now requires fewer permissions. And another little #bugfix: Beedroid no longer reports you are offline if you are using certain VPNs",
"u": ["https://twitter.com/beemuvi/status/1362115014031630339",
      "https://github.com/beeminder/beedroid/issues/57",
      "https://github.com/beeminder/beedroid/issues/162"],
"d": "2021-02-15",
"t": "2021-02-17",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "You can now search for a goal where the goalname is a prefix of another goalname (like 'work' when there's also 'worktime' or whatever) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1362115120751501312",
      "https://github.com/beeminder/beedroid/issues/72"],
"d": "2021-02-15",
"t": "2021-02-17",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "We no longer show your username in the goal search dropdown if (as is almost always the case) there's only one user logged in",
"u": ["https://twitter.com/beemuvi/status/1362115223486824449",
      "https://github.com/beeminder/beedroid/issues/152"],
"d": "2021-02-15",
"t": "2021-02-17",
}, { // ------------------------------------------------------------------------
"s": true,
"x": "Things are a little faster and cleaner, we got rid of unneeded settings ('sync frequency' and 'panic buffer'), and added better diagnostics",
"u": ["https://twitter.com/beemuvi/status/1362115334145155073",
      "https://github.com/beeminder/beedroid/issues/136",
      "https://github.com/beeminder/beedroid/issues/62"],
"d": "2021-02-15",
"t": "2021-02-17",
}, { // ------------------------------------------------------------------------
"x": "Oops! Beedroid 4.0.1 fixed a flurry of transient popups that annoyingly appeared for some users after upgrading to 4.0.0! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1362924675857223686",
      "https://github.com/beeminder/beedroid-hist/issues/115",
      "https://github.com/beeminder/beedroid/issues/182"],
"d": "2021-02-17",
"t": "2021-02-19",
"c": "AKA toasts, as they're known to Android developers",
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
}, /* --------------------------------------------------------- end 2021feb */ ]

var staged = [ {
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
[HOLD]
TODO: fix gissue 1965 before tweeting this, bcuz #1965 is an issue where we *set* the error message, but there's a bug that 
      immediately dismisses it specifically for gmailzero goals, sooooo, need to fix that before tweeting i guess.
https://github.com/beeminder/beeminder/issues/1965
"x": "restarting an ancient gmailzero goal will now result in a helpful error message getting shown, alerting you to update your gmail settings.",
// UVI: Users now get error messages when restarting really old Gmailzero goals instead of graph failures.
"u": [
      "https://github.com/beeminder/beeminder/issues/1650",
      "https://github.com/beeminder/beeminder/pull/1821"],
"d": "2020-10-21"
"c": "By Adam. Failed to tweet/log it in October and then realized it was broken on 12-04.",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
// TODO: Make a decision about this one! either tweet it because it is a change that happened, or 
//       make a new gissue for undoing it and link to #1285 and #1494 in that gissue.
// TODO: wait, why, this doesn't make sense, if it's not auto-summing you'd want the sum, right?
"x": "For the rare goals that are aggday=sum but not auto-summing, we no longer show the total due in the blurb that tells you your safety buffer",
"x": "Hide the total in the blurb with your safety buffer if the goal has a custom aggday of 'sum'. (Previously we were only hiding it when the goal is cumulative.)"
"u": [
      "https://github.com/beeminder/beeminder/issues/1285",
      "https://github.com/beeminder/beeminder/pull/1494"],
"d": "2020-07-08",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
GMAILZERO: change blog link (probably wait for other copy changes before tweeting)
https://github.com/beeminder/beeminder/commit/39cd4142c8fa119418ab5996187e77b53c3efb39
https://github.com/beeminder/beeminder/issues/1002
"d": "2020-01-02"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI] awaiting more changes with slug/goalname/goalID in the API
"x": "Super mini: removed \"Deprecated\" from the 'id' field in the api docs Goal resource -- https://changelog.beeminder.com/#2104 sort of myopically semi-broke the api, since we want you to use the goalname (aka slug) as the identifier, but now you can change the goalname, so we'd definitely better keep the goal ID around so API clients can piece things back together if someone goes and changes a goalname on them.",
"c": "it's super mini, but took lots of words to say the things",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI AT MOST]
update Habitica wiki URL -- Changes a user-visible link on the goal creation screen (after you've entered your Habitica credentials) so that it points to the new URL for Habitica's wiki. 
But... the old URL was automatically redirecting so the users wouldn't have seen a broken link.
https://github.com/beeminder/beeminder/pull/2073
  update Habitica wiki URL (UVI?) and update code comments (#2073)
* change habitica.wikia.com URLs to habitica.fandom.com
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
ids for road editor to be able to do datapoint editing
https://github.com/beeminder/beeminder/issues/2087
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
Make /user/goal/graph.svg work like /user/goal/graph.png.

I am not 100% confident this will work in production, because
we have a thing where production and dev/test work differently with
regards to formats, but this should get us closer.

When this works, the UVI will be something like:
You can now get the most recent SVG of a public goal's graph at user/goal/graph.svg.

Works toward https://github.com/beeminder/beeminder/issues/2084
then adam said "This actually did the job!" 
does that mean it's a UVI now?
ADAM: I need to rework this. It'll be a quick change, but I have to step away at the moment.
* add the route for u/g.svg to point to /u/g/graph?style=svg
* rework the graph controller to have an svg style and use that
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI]
remove "nomercy" from the API docs
https://github.com/beeminder/beeminder/issues/2044
(still seems to be there as of 2021-02-11 when i grep "nomercy" in api.bmndr.co )
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
wordpress plugin: github.com/beeminder/beeminder-ping
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~---------------------------------- IDEAS -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
1. http://forum.beeminder.com/t/please-let-me-rename-archived-goals/2746
2. DREEV: point to help.beeminder.com in blog.beeminder.com/newbees and vice versa
3. https://forum.beeminder.com/t/api-create-goal-documentation-needs-updating/5547
~~~~~~-------------------- TOO LATE / TOO LAME -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
* CNR on this weight-loss restart thing means maybe we fixed it long ago without realizing it? https://github.com/beeminder/beeminder/issues/1321
* fixed timeouts in jsbrain_server? https://github.com/beeminder/road/issues/51 -- depl'd probably 2020 october or earlier
* milk static-401 for more uvis? (fixing/obviating the banner bug, making it all work the same via the API)
* fixed some (most? many?) of the thing where flash banner shows up again after you leave current page & go to another page [maybe mostly only happens for admins?]
* Vimium users can now jump to the goals on the dashboard with hotkeys. something about octicons apparently?
* max-height for the landing page images, same commit url as an old one from a previous UVI about runkeeper:
  https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3
* Got rid of the \"Increase the pledge each time you derail\" checkbox on the goal page as it was redundant with using Pledge Caps to stop pledge increases
  [BEE: nothing was tweeted as far I can see; but also you don't have a PR/Gissue to link to with this, so maybe that + the ancientness disqualifies it?]
*********************************************************************************************************************************************************************/
