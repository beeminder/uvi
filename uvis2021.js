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
      "https://github.com/beeminder/beeminder/pull/1921",
      "https://github.com/beeminder/beeminder/commit/cc8dd0a45118ce919035456057a7c5768cabc003"],
"t": "2021-01-04",
"d": "2020-12-31",
"c": "Note the 'if false' things that comment out various sections. There may be things worth resurrecting from there.",
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
"x": "Fixed a malformed sentence on beeminder.com/premium and generally made the intro copy better for non-premium users",
"u": ["https://twitter.com/beemuvi/status/1366548721857556485",
      "https://github.com/beeminder/beeminder/issues/2116",
      "https://github.com/beeminder/beeminder/pull/2117"],
"d": "2021-02-22",
"c": "Originally a mini-UVI but then Bee and Dreev edit-warred and it ended up way better",
}, { // ------------------------------------------------------------------------
"x": "Commitwall means never having to say you're sorry, er, never having to say \"since you've added a credit card\" (in the new goal email)",
"u": ["https://twitter.com/beemuvi/status/1366549043279663110",
      "https://github.com/beeminder/beeminder/issues/2008",
      "https://github.com/beeminder/beeminder/pull/2120"],
"d": "2021-02-22",
"c": "Actual copy change: \"here are the key things to remember since you've added a credit card\" -> \"here are the key things to remember about your new goal commitment\"",
}, /* --------------------------------------------------------- end 2021feb */ ]

var batch2021mar = [{
"x": "We removed the old \"nomercy\" field from the API docs since that hasn't been a thing since UVI#2734; also fixed a broken link to RapidAPI",
"u": ["https://twitter.com/beemuvi/status/1366619658124627971",
      "https://github.com/beeminder/beeminder/issues/2044",
      "https://github.com/beeminder/beeminder/pull/2102",
      "https://github.com/beeminder/beeminder/issues/1942"],
"d": "2021-03-01",
"c": "RapidAPI used to be Mashape",
}, { // ------------------------------------------------------------------------
"x": "If you're learning a language in @clozemaster *from* multiple different languages, we were only counting your points from one of them. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1367270900823773184",
      "https://github.com/beeminder/beeminder/issues/722",
      "https://github.com/beeminder/beeminder/pull/2126"],
"d": "2021-03-03",
"t": "2021-03-03",
"c": "So if you're learning, say, Arabic from both English and from French, we now count Clozemaster points in both categories, since they're both Arabic. Before it was random each time which from-language we counted, so that was pretty bad (for the likely 1 person who had this problem).",
}, { // ------------------------------------------------------------------------
"x": "There were some missing spaces in the blog blurb on the front page; #bugfix on the script that generates those. Also fixed date and author line getting merged.",
"u": ["https://twitter.com/beemuvi/status/1367581630655655937",
      "https://github.com/beeminder/beeminder/pull/2127",
      "https://github.com/beeminder/beeminder/pull/2128"],
"d": "2021-03-03",
"t": "2021-03-04",
}, { // ------------------------------------------------------------------------
"x": "We were accidentally eliding your avatar / 'About You' blurb / URL on your gallery when you were logged in (it was only shown when you were logged out). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1367582532011655168",
      "https://github.com/beeminder/beeminder/issues/2029",
      "https://github.com/beeminder/beeminder/pull/2130"],
"d": "2021-03-04",
"t": "2021-03-04",
}, { // ------------------------------------------------------------------------
"x": "In the do-less section of the megabreak page we were giving safe days but calling it a hard cap, which was all wrong (now we give actual hard cap). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1370163495170318337",
      "https://github.com/beeminder/beeminder/issues/1512",
      "https://github.com/beeminder/beeminder/pull/2133"],
"d": "2021-03-11",
"t": "2021-03-11",
"c": "Eg: if you had a rate of 3 cookies per day, and a current limit of 21 cookies, we'd say you had a safety buffer of 7 cookies, when it ought to have been either 7 days or 21 cookies",
}, { // ------------------------------------------------------------------------
"x": "We added Simone Walters, part-time support workerbee, to our About Us page",
"u": ["https://twitter.com/beemuvi/status/1370540088120156163",
      "https://github.com/beeminder/beeminder/pull/2136"],
"d": "2021-03-12",
"t": "2021-03-12",
}, { // ------------------------------------------------------------------------
"x": "Also Robin Goins, our most recent addition to the support team (&amp; Batman sidekick?), is listed, and we finally removed Jon who sadly left us a while ago",
"u": ["https://twitter.com/beemuvi/status/1370540088120156163",
      "https://github.com/beeminder/beeminder/pull/2136"],
"d": "2021-03-12",
"t": "2021-03-12",
}, { // ------------------------------------------------------------------------
"x": "Nitpicky punctuation fix in UI copy (HT zzq) and a #bugfix where we'd say things like 'a 15 days' after ratcheting and before refreshing the page (HT krugerk)",
"u": ["https://twitter.com/beemuvi/status/1371606687195394049",
      "https://forum.beeminder.com/t/nitpicking-punctuation-in-beeminders-copy/9094?u=dreev",
      "https://github.com/beeminder/beeminder/issues/2135",
      "https://github.com/beeminder/beeminder/pull/2138",
      "https://github.com/beeminder/beeminder/issues/2060",
      "https://github.com/beeminder/beeminder/pull/2139"],
"d": "2021-03-12",
"t": "2021-03-15",
}, { // ------------------------------------------------------------------------
"x": "The error banners on the megabreak page are now the right color (red rather than yellow or blue). #css",
"u": ["https://twitter.com/beemuvi/status/1371966960670363655",
      "https://github.com/beeminder/beeminder/issues/1373"],
"t": "2021-03-16",
}, { // ------------------------------------------------------------------------
"x": "Better error checking on the megabreak page: not allowing a negative safety buffer cap since apparently someone tried to do that? #bugfix",
"u": ["https://twitter.com/beemuvi/status/1371967152538808321",
      "https://github.com/beeminder/beeminder/issues/2140"],
"t": "2021-03-16",
}, { // ------------------------------------------------------------------------
"x": "Also if you set an autoratchet (safety buffer cap) on megabreak, you couldn't unset it. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1372335224751673344",
      "https://github.com/beeminder/beeminder/issues/1294",
      "https://github.com/beeminder/beeminder/pull/2141"],
"t": "2021-03-17",
"c": "Don't unset weekend_rates in megabreak; do unset other keys if passed a blank key",
}, { // ------------------------------------------------------------------------
"x": "Restarting an ancient GmailZero goal will now result in a helpful error message, alerting you to update your Gmail settings. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1372336482459918341",
      "https://github.com/beeminder/beeminder/issues/1650",
      "https://github.com/beeminder/beeminder/issues/1965",
      "https://github.com/beeminder/beeminder/pull/1821",
      "https://github.com/beeminder/beeminder/pull/2149",],
"d": "2020-10-21",
"t": "2021-03-17",
"c": "By Adam. Failed to tweet/log it in October and then realized it was broken on 12-04. Fixed the ancillary gissue, #1965 (the error would immediately dismiss itself! a slight improvement on graph failure, I guess), on 2021-03-16.",
}, { // ------------------------------------------------------------------------
"x": "If you set tmin (aka x-min) to be in the future (via the API), we now give an error (on the graph) instead of silently failing to update the graph. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1372695581815009282",
      "https://github.com/beeminder/road/issues/201"],
"d": "2021-03-16",
"t": "2021-03-18",
"c": "We originally logged this as if it were a problem with the website",
}, { // ------------------------------------------------------------------------
"x": "The email bot was breaking due to iOS inserting some dumb unprintable (in the literal sense) character, '<feff>'. #bugfix HT Mary Renaud",
"u": ["https://twitter.com/beemuvi/status/1372696913959555072",
      "https://github.com/beeminder/beeminder/issues/985",
      "https://github.com/beeminder/beeminder/pull/2147"],
"d": "2021-03-16",
"t": "2021-03-18",
"c": "Probably this was Mailgun's fault since we count on it to strip out such things and it started missing this particular thing, so we added yet another special case to do it ourselves",
}, { // ------------------------------------------------------------------------
"x": "Turns out UVI#3155 (bad dates on Todoist tasks) was incomplete and some cases were still slipping through. We're pretty sure we got them all now! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1373054519064424448",
      "https://github.com/beeminder/beeminder/issues/818",
      "https://github.com/beeminder/beeminder/pull/2148"],
"d": "2021-03-16",
"t": "2021-03-19",
"c": "Only applied to very first import when creating the goal, setting dates to 1970 for unixtime-related reasons",
}, { // ------------------------------------------------------------------------
"x": "UVI#3682 introduced a bug where we'd double up the buffer number after a goal refresh (eg, \"You have 7 7 days of buffer\"). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1373054849273663492",
      "https://github.com/beeminder/beeminder/issues/2145",
      "https://github.com/beeminder/beeminder/pull/2151"],
"d": "2021-03-16",
"t": "2021-03-19",
}, { // ------------------------------------------------------------------------
"x": "Improvements to tags (UVI#2080)! (HT zzq AKA Benjamin Fox) Goals now sorted by goalname on http://bmndr.co/tags and you can add multiple tags at once (space separated)",
"u": ["https://twitter.com/beemuvi/status/1374143289213870080",
      "https://github.com/beeminder/beeminder/issues/2159",
      "https://github.com/beeminder/beeminder/pull/2158"],
"d": "2021-03-22",
"t": "2021-03-22",
"c": "Wait, not just HT zzq -- actually implemented by zzq! See UVI#2080 for the documentation on tagging.",
}, { // ------------------------------------------------------------------------
"x": "Another tags improvement from zzq: Fancy autocomplete (for the first tag typed at least; see previous UVI) based on existing tags",
"u": ["https://twitter.com/beemuvi/status/1374143341319753728",
      "https://github.com/beeminder/beeminder/issues/2159",
      "https://github.com/beeminder/beeminder/pull/2158"],
"d": "2021-03-22",
"t": "2021-03-22",
}, { // ------------------------------------------------------------------------
"x": "We've standardised on American ſpelling in the webcopy. As dreev colourfully put it, 'this is America, dammit!'",
"u": ["https://twitter.com/beemuvi/status/1374509890136203265",
      "https://github.com/beeminder/beeminder/issues/1847"],
"d": "2021-03-22",
"t": "2021-03-23",
"c": "Just 'canceled/canceling' vs 'cancelled' etc so far. Keyword for greppability: spelling.",
}, { // ------------------------------------------------------------------------
"x": "We added the list of tags to the API output (and documented it at http://api.beeminder.com). Thanks to zzq again!",
"u": ["https://twitter.com/beemuvi/status/1374510196702081025",
      "https://github.com/beeminder/apidocs/pull/34",
      "https://github.com/beeminder/beeminder/issues/2159",
      "https://github.com/beeminder/beeminder/pull/2158"],
"d": "2021-03-22",
"t": "2021-03-23",
}, { // ------------------------------------------------------------------------
"x": "Added tmin and tmax (AKA x-min and x-max in the UI) to the API output / documented them as goal parameters in the API docs",
"u": ["https://twitter.com/beemuvi/status/1374866485370257408",
      "https://forum.beeminder.com/t/xmin-and-xmax-via-api/9031/7?u=dreev",
      "https://github.com/beeminder/beeminder/issues/2121",
      "https://github.com/beeminder/beeminder/pull/2160",
      "https://github.com/beeminder/apidocs/pull/33"],
"d": "2021-03-23",
"t": "2021-03-24",
}, { // ------------------------------------------------------------------------
"x": "Further improvement on UVI#3687: we don't let you set a bad tmin (x-min) in the first place, via the API or otherwise (UVI#2170 may've covered the 'otherwise')",
"u": ["https://twitter.com/beemuvi/status/1374866630132387841",
      "https://github.com/beeminder/beeminder/issues/2163",
      "https://github.com/beeminder/beeminder/pull/2160"],
"d": "2021-03-23",
"t": "2021-03-24",
"c": "We now don't think this was ever user-visible outside the API. The javascript validations should've already prevented bad tmin values, according to UVI#2170.",
}, { // ------------------------------------------------------------------------
"x": "If you had PayPal for your payment method, there was no account listed on the Payment Method step of goal creation. Now there is. Stupid PayPal grumble grumble.",
"u": ["https://twitter.com/beemuvi/status/1375232765256368129",
      "https://github.com/beeminder/beeminder/issues/2028",
      "https://github.com/beeminder/beeminder/pull/2166"],
"d": "2021-03-25",
"t": "2021-03-25",
}, { // ------------------------------------------------------------------------
"x": "We now trim spaces from goalnames in goal creation so we don't have to give annoying errors about trailing whitespace (apparently especially annoying on iOS)",
"u": ["https://twitter.com/beemuvi/status/1375234539581108225",
      "https://forum.beeminder.com/t/spaces-surrounding-goalnames/7658/2",
      "https://github.com/beeminder/beeminder/issues/2037",
      "https://github.com/beeminder/beeminder/pull/2168"],
"d": "2021-03-25",
"t": "2021-03-25",
}, { // ------------------------------------------------------------------------
"x": "Better error handling in our Trello autodata integration: standard blue banner like other integrations instead of 'there's an error' in the datapoint comment",
"u": ["https://twitter.com/beemuvi/status/1376670083905245191",
      "https://github.com/beeminder/beeminder/issues/2132",
      "https://github.com/beeminder/beeminder/pull/2167"],
"d": "2021-03-25",
"t": "2021-03-29",
}, { // ------------------------------------------------------------------------
"x": "Also the Trello integration now tells you specifically if the beeminded Trello board goes missing",
"u": ["https://twitter.com/beemuvi/status/1376670200494391298",
      "https://github.com/beeminder/beeminder/issues/2132",
      "https://github.com/beeminder/beeminder/pull/2167"],
"d": "2021-03-25",
"t": "2021-03-29",
}, { // ------------------------------------------------------------------------
"x": "We weren't letting you set tmax to today if it was Beeminder-today but calendar-tomorrow (ie, after midnight with a night-owl deadline). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1376995692904738816",
      "https://github.com/beeminder/beeminder/issues/2121",
      "https://github.com/beeminder/beeminder/pull/2160"],
"t": "2021-03-30",
"c": "AKA x-max. Lord knows why you'd want tmax to be today. The error was 'tmax must be in the future'. So kind of technically correct for tmax=today so I guess the real bugginess was the inconsistency of not letting you do it just because it was after midnight when midnight's irrelevant on a nightowl-deadline goal.",
}, { // ------------------------------------------------------------------------
"x": "Dropped mention of post-mortems in legit check emails since no one gave those (plus other simplifications). Also fixed our spelling of 'PayPal' from UVI#3697.",
"u": ["https://twitter.com/beemuvi/status/1376996380917436417",
      "https://github.com/beeminder/beeminder/issues/2161",
      "https://github.com/beeminder/beeminder/pull/2172"],
"t": "2021-03-30",
}, { // ------------------------------------------------------------------------
"x": "As a follow-on to UVI#3332 (that we failed to announce at the time): you can now see all your premium credit on beeminder.com/payment",
"u": ["https://twitter.com/beemuvi/status/1377409245973340161",
      "https://blog.beeminder.com/deathtolife/",
      "https://github.com/beeminder/beeminder/commit/5d67b974e4ac4b00261795821ef5c1a334894c99",
      "https://github.com/beeminder/beeminder/pull/1877"],
"d": "2020-10-28",
"t": "2021-03-31",
}, { // ------------------------------------------------------------------------
"x": "For about a week we were letting archived goals go into a weird limbo quasi-archived state that would prevent charges but still send legit checks. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1377409386470014979",
      "https://github.com/beeminder/beeminder/issues/2169",
      "https://github.com/beeminder/beeminder/pull/2185"],
"t": "2021-03-31",
}, /* --------------------------------------------------------- end 2021mar */ ]

var batch2021apr = [{
}, { // ------------------------------------------------------------------------
"x": "As a failsafe for the quasi-archived limbo state, or other problems with archived goals, the legit check email now explicitly mentions this if it happens",
"u": ["https://twitter.com/beemuvi/status/1377772368328675330",
      "https://github.com/beeminder/beeminder/pull/2184",
      "https://github.com/beeminder/beeminder/issues/2182"],
"d": "2021-03-31",
"t": "2021-04-01",
"c": "We don't expect the specific thing from the previous UVI (headless triples in the road matrix) to trigger this but plenty of other things could",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug that would sometimes mangle your road by picking the wrong slope when automatically ending the goal after the archive took effect. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1377772542186811392",
      "https://github.com/beeminder/beeminder/issues/2169",
      "https://github.com/beeminder/beeminder/pull/2185"],
"d": "2021-03-31",
"t": "2021-04-01",
"c": "We always used rfin, basically changing rcur to rfin, which could totally change the shape of the road. The version you'd see in your archived gallery could destroy the true pictue, like if you were skating the edge right up to the point that the archive happened, it might show you as being way above the road, or totally off the road.",
}, { // ------------------------------------------------------------------------
"x": "If your buffer on a Do Less goal was &le;1 &amp; you tried to ratchet, we'd nonsensically say \"Number of units must be less than current safety buffer\". #bugfix",
"u": ["https://twitter.com/beemuvi/status/1378134567387734016",
      "https://github.com/beeminder/beeminder/issues/2179",
      "https://github.com/beeminder/beeminder/pull/2186"],
"d": "2021-04-01",
"t": "2021-04-02",
"c": "E.g., I have a buffer of 1 on my do-less goal and I want it to be 0.5, but Beeminder says \"No no no. The ratchet amount has to be less than your current safety buffer\" and you're like \"WTF? 0.5 is less than 1\".",
}, { // ------------------------------------------------------------------------
"x": "And yesterday's bugfix introduced a problem with Do More ratchets, where you could't ratchet by -1 (e.g. from 4 days to 3 days). #bugfix HT zedmango",
"c": "gave the 'number of units must be less than current safety buffer' error",
"u": ["https://twitter.com/beemuvi/status/1378134737122824195",
      "https://github.com/beeminder/beeminder/issues/2187",
      "https://github.com/beeminder/beeminder/pull/2188",
      "https://forum.beeminder.com/t/ratcheting-is-now-broken/9147?u=dreev"],
"d": "2021-04-02",
"t": "2021-04-02",
}, { // ------------------------------------------------------------------------
"x": "Updated the error message for Do Less ratchets to include the amount that you must be less than (instead of just \"must be less than the current buffer\")",
"u": ["https://twitter.com/beemuvi/status/1378135950040043521",
      "https://github.com/beeminder/beeminder/issues/2187",
      "https://github.com/beeminder/beeminder/pull/2188"],
"d": "2021-04-02",
"t": "2021-04-02",
"c": "So, e.g., used to say \"Must be less than the current safety buffer\" and now says \"Must be less than the current buffer (4)\""
}, { // ------------------------------------------------------------------------
"x": "We now guarantee that the official end date for archived goals matches when the archive countdown ended (unclear if ever an issue other than from UVI#3704)",
"u": ["https://twitter.com/beemuvi/status/1379215589961424899",
      "https://github.com/beeminder/beeminder/issues/2169",
      "https://github.com/beeminder/beeminder/pull/2177"],
"t": "2021-04-05",
}, { // ------------------------------------------------------------------------
"x": "Goals should no longer insta-derail when you try to restart them! Or, well, we fixed one known cause by making them deadline aware. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1379578880294449152",
      "https://github.com/beeminder/beeminder/issues/1312",
      "https://github.com/beeminder/beeminder/pull/2192"],
"d": "2021-04-05",
"t": "2021-04-06",
"c": "We do road adjustments on restart to make sure yesterday is not in the red (since that's our 'is derailed' condition) and because of neglecting deadline times and maybe timezones, we would sometimes adjust the wrong day and leave yesterday in the red, hence insta-derail on restart.",
}, { // ------------------------------------------------------------------------
"x": "Restarts would sometimes get the tmin (x-min) wrong -- either slightly suboptimal (yesterday vs today) or gave a graph error (tomorrow vs today). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1379578805174497280",
      "https://github.com/beeminder/beeminder/issues/1312",
      "https://github.com/beeminder/beeminder/pull/2192"],
"d": "2021-04-05",
"t": "2021-04-06",
}, { // ------------------------------------------------------------------------
"x": "More recently, UVI#3696 introduced a new bug that would sometimes (like at certain times of day!) not let you restart the goal at all. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1379578986389413892",
      "https://github.com/beeminder/beeminder/issues/2191",
      "https://github.com/beeminder/beeminder/pull/2192"],
"d": "2021-04-05",
"t": "2021-04-06",
"c": "E.g., after 23:00 in US Central time until you passed into the same day as servertime",
}, { // ------------------------------------------------------------------------
"x": "Daylight savings time bug for Garmin steps goals had, eg, the data for the 14th overwrite the data for the 13th after springing forward. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1379935632164724740",
      "https://github.com/beeminder/beeminder/issues/573",
      "https://github.com/beeminder/beeminder/pull/2199"],
"d": "2021-04-07",
"t": "2021-04-07",
}, { // ------------------------------------------------------------------------
"x": "Fixed confusion with Garmin sleep records where you go to sleep post-midnight one night and pre- the next. We now match what you see in the Garmin app. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1379936087565602818",
      "https://github.com/beeminder/beeminder/issues/711",
      "https://github.com/beeminder/beeminder/issues/2196",
      "https://github.com/beeminder/beeminder/pull/2199"],
"d": "2021-04-07",
"t": "2021-04-07",
"c": "If you go to bed at 1am one day and 10pm the next day, Garmin is smart about it and treats those as different days even though technically they're the same day. Gissue #711 is not fully resolved yet. But the confusion about sleep dates is described in it."
}, { // ------------------------------------------------------------------------
"x": "Rare 500-error when you restarted a do-less goal. It'd go away once the graph regenerated but now it doesn't happen in the first place. Even better! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1380306232087506946",
      "https://github.com/beeminder/beeminder/issues/1828",
      "https://github.com/beeminder/beeminder/pull/2206"],
"d": "2021-04-08",
"t": "2021-04-08",
}, { // ------------------------------------------------------------------------
"x": "Since Nov 2020 we undercharged for premium if you'd used a coupon previously and then upgraded with a coupon (we applied both on top of each other!) #bugfix",
"u": ["https://twitter.com/beemuvi/status/1380667054085173250",
      "https://github.com/beeminder/beeminder/issues/1993",
      "https://github.com/beeminder/beeminder/pull/2208"],
"d": "2021-04-09",
"t": "2021-04-09",
"c": "A so-called beaucoupbucksbleeder bug. Just kidding, it is not so called. Also not sure if it was actually that beaucoup of bucks.",
}, { // ------------------------------------------------------------------------
"x": "Restarting Odometer goals (especially Duolingo) could cause us to do an unnecessary and confusing odometer reset giving you way too much safety buffer. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1380667453592674305",
      "https://github.com/beeminder/beeminder/issues/2207",
      "https://github.com/beeminder/beeminder/pull/2210"],
"d": "2021-04-09",
"t": "2021-04-09",
}, { // ------------------------------------------------------------------------
"x": "We now mercifully disallow goalnames like 'archived' & 'settings' that would/could break things by colliding with other URLs. #bugfix HT zzq AKA Benjamin Fox",
"u": ["https://twitter.com/beemuvi/status/1381758031243841539",
      "https://forum.beeminder.com/t/avoid-using-archived-as-a-goals-slug/9183",
      "https://github.com/beeminder/beeminder/issues/2211",
      "https://github.com/beeminder/beeminder/pull/2212"],
"d": "2021-04-12",
"t": "2021-04-12",
"c": "Eg archive, archived, archives, settings, shortcircuit, reminders, etc. TODO: breaks, payments, etc. Also TODO: it gives the error message a couple screens later!",
}, { // ------------------------------------------------------------------------
"x": "It would sometimes happen that our authorization to fetch your Withings data would expire and we'd fail silently instead of warning you! #bugfix",
"u": ["https://twitter.com/beemuvi/status/1381758528717615108",
      "https://github.com/beeminder/beeminder/issues/1937",
      "https://github.com/beeminder/beeminder/pull/2214"],
"d": "2021-04-12",
"t": "2021-04-12",
"c": "We thought those 401 errors were rate limit warnings from Withings; doh.",
}, { // ------------------------------------------------------------------------
"x": "We were (weirdly) silently failing if you tried to (weirdly) edit your goal description to be identical to your goalname. Now we just shrug and let you. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1382117356541857793",
      "https://github.com/beeminder/beeminder/issues/2176",
      "https://github.com/beeminder/beeminder/pull/2216"],
"d": "2021-04-13",
"t": "2021-04-13",
}, { // ------------------------------------------------------------------------
"x": "FAQ modernizations: No more 'red button', mentioning pledge caps, describing where things live in the tabs below the graph, various copy tweaks",
"u": ["https://twitter.com/beemuvi/status/1382117613874995204",
      "https://github.com/beeminder/beeminder/issues/2202",
      "https://github.com/beeminder/beeminder/pull/2217"],
"d": "2021-04-13",
"t": "2021-04-13",
}, { // ------------------------------------------------------------------------
"x": "A new extensive copyediting pass on the FAQ: clarifying about PayPal, post-derail respite, daily rates, 'bright red line' rather than 'yellow brick road', etc",
"u": ["https://twitter.com/beemuvi/status/1382472499544297472",
      "https://github.com/beeminder/beeminder/issues/2202#issuecomment-819792727",
      "https://github.com/beeminder/beeminder/pull/2218"],
"d": "2021-04-14",
"t": "2021-04-14",
}, { // ------------------------------------------------------------------------
"x": "Added more disallowed goalnames (like 'goal') and made cuter error copy for if you violate it (also we cleaned up existing goals, emailed people, etc)",
"u": ["https://twitter.com/beemuvi/status/1382472680083845121",
      "https://github.com/beeminder/beeminder/issues/2219"],
"d": "2021-04-14",
"t": "2021-04-14",
"c": "Error: For possibly obscure apiarian reasons, that goalname is not allowed",
}, { // ------------------------------------------------------------------------
"x": "The error message if you used a reserved slug (like 'goal' or 'archived') for a goalname showed up a couple screens after the fact. #bugfix",
"u": ["https://twitter.com/beemuvi/status/1382840143422255106",
      "https://github.com/beeminder/beeminder/issues/2219",
      "https://github.com/beeminder/beeminder/pull/2224"],
"d": "2021-04-15",
"t": "2021-04-15",
}, { // ------------------------------------------------------------------------
"x": "In goal creation we were giving browser-default-style alerts for some errors instead of consistently using our red flash banners",
"u": ["https://twitter.com/beemuvi/status/1382840398914203658",
      "https://github.com/beeminder/beeminder/issues/2219",
      "https://github.com/beeminder/beeminder/pull/2224"],
"d": "2021-04-15",
"t": "2021-04-15",
}, { // ------------------------------------------------------------------------
"x": "More aggressive warning that custom goal settings are Highly Advanced and Might Break Things; plus a tweak to the wording about the \"cumulative\" setting.",
"u": ["https://twitter.com/beemuvi/status/1383206428119212034",
      "https://github.com/beeminder/beeminder/issues/2180",
      "https://github.com/beeminder/beeminder/pull/2222",
      "https://github.com/beeminder/beeminder/pull/2229"],
"d": "2021-04-16",
"t": "2021-04-16",
}, { // ------------------------------------------------------------------------
"x": "Closed a loophole in deadbeating where simply adding data to the goal caused us to show you the true graph again (instead of the guilt trip image). #bugfix",
"u": ["https://twitter.com/beemuvi/status/1383206707111751683",
      "https://github.com/beeminder/beeminder/issues/2119",
      "https://github.com/beeminder/beeminder/pull/2227"],
"d": "2021-04-16",
"t": "2021-04-16",
}, { // ------------------------------------------------------------------------
"x": "We now don't allow goalnames over 20 characters, for various layout but mostly aesthetic reasons. Yay Opinionated Software?",
"u": ["https://twitter.com/beemuvi/status/1384295124813844480",
      "https://github.com/beeminder/beeminder/issues/1438",
      "https://github.com/beeminder/beeminder/pull/2216",  // this one changed the length allowed by the js validation in elf
      "https://github.com/beeminder/beeminder/pull/2216"], // this tweaked the wording of the error message
"t": "2021-04-19",
"c": "Deployed piecemeal: enforced in the UI in March with UVI#3698, in the API in ... April?",
}, { // ------------------------------------------------------------------------
"x": "Indirect UVI but we improved the emails we automatically send to ourselves and then manually reply to, with the user included, when they first sign up",
"u": ["https://twitter.com/beemuvi/status/1384295609335566336",
      "https://github.com/beeminder/beeminder/issues/1975"],
"d": "2021-04-19",
"t": "2021-04-19",
"c": "Aka the new-newbee emails. The new subject line is \"beeminder welcomes you, $USERNAME, from a busybody workerbee\".",
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
}, /* --------------------------------------------------------- end 2021apr */ ]

var staged = [ {
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
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
ADAM: I am not 100% confident this will work in production, because we have a thing where production and dev/test work differently with regards to formats, but this should get us closer.
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
[HOLD]
shortcuts in beemiOS?
https://github.com/beeminder/BeeSwift/pull/273
PR 2021-03-30
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
glomar bug HT zzq
"d": "2021-04-19",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO: error message is done, not the API part]
"x": "Goalname character limit now also enforced via the API; also we fixed off-by-one error in the error message (max characters is exactly 20)",
"u": [
      
      ],
"c": "The error message is \"Goalnames cannot be more than 20 characters\". See UVI#3729.",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
help docs updates by nicky
https://forum.beeminder.com/t/help-docs-updates-as-uvis/6672/23?u=dreev
"d": "2021-04-20",
"c": "By Nicky",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
this looks user-visible and i don't remember tweeting it as of 2021-04-20:
https://github.com/beeminder/beeminder/issues/2022
https://github.com/beeminder/beeminder/pull/2222/commits/810ed72b48e19e5b915bde2973572019100636d4
committed 2021-04-14
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
~~~~~~------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*********************************************************************************************************************************************************************/
