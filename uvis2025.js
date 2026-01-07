/* globals batches */

batches['2025jan'] = [{
}, { // ------------------------------------------------------------------------
"x": "The breaks page now disallows breaks after the implicit end date (for goals w/ a final target + rate, w/ inferred end date). #bugfix HT Clive",
"c": "this caused brokenness in the graph in the form of a long retroactive flat spot",
"u": ["https://x.com/beemuvi/status/1874983156799160321",
      "https://github.com/beeminder/beeminder/issues/5089",
      "https://github.com/beeminder/beeminder/issues/5094",
      "https://github.com/beeminder/beeminder/pull/5105"],
"d": "2024-12-17",
"t": "2025-01-02",
}, { // ------------------------------------------------------------------------
"x": "The breaks page no longer shows group goals if you're not the owner of the goal, because groupies are only supposed to have edit access to the data. HT Clive",
"u": ["https://x.com/beemuvi/status/1874983509892403481",
      "https://github.com/beeminder/beeminder/issues/5084",
      "https://github.com/beeminder/beeminder/pull/5106"],
"d": "2024-12-17",
"t": "2025-01-02",
}, { // ------------------------------------------------------------------------
"x": "Doh, when we added the honey-transactions page (UVI#5024) we broke links to honeygrams. #zombie #bugfix",
"u": ["https://x.com/beemuvi/status/1875342475545792723",
      "https://github.com/beeminder/beeminder/issues/5110",
      "https://github.com/beeminder/beeminder/pull/5109"],
"d": "2024-12-20",
"t": "2025-01-03",
}, { // ------------------------------------------------------------------------
"x": "Fixed an issue for do-less goals where weekends-off (or other upcoming breaks) could get ruined by an intermediate derail. #bugfix HT Clive",
"u": ["https://x.com/beemuvi/status/1876431051276644526",
      "https://github.com/beeminder/beeminder/issues/2462",
      "https://github.com/beeminder/beeminder/issues/4333",
      "https://github.com/beeminder/beeminder/pull/5102"],
"d": "2024-12-13",
"t": "2025-01-06",
"c": "Future fixed points in the red line (like weekends-off and upcoming breaks) did not get updated to reflect the mercY added on a derail",
}, { // ------------------------------------------------------------------------
"x": "New beecaps of your 2024 year! https://www.beeminder.com/beecap",
"u": ["https://x.com/beemuvi/status/1876431142758576234",
      "https://github.com/beeminder/beeminder/pull/5121"],
"d": "2025-01-01",
"t": "2025-01-06",
"c": "Same as last year, just for 2024 now. Not actually very exciting.",
}, { // ------------------------------------------------------------------------
"x": "We removed the mention of the meta-commitment device in the \"why?\" popup when you've already complied with the meta-commitment device",
"u": ["https://x.com/beemuvi/status/1876791359421431986",
      "https://github.com/beeminder/beeminder/issues/4142",
      "https://github.com/beeminder/beeminder/pull/5107"],
"d": "2024-12-17",
"t": "2025-01-07",
"c": "Popup aka modal, gateway-drug commitment device",
}, { // ------------------------------------------------------------------------
"x": "We smoothed out our username validation so it never happens that we say a username is valid and let you move to the next step before changing our mind",
"u": ["https://x.com/beemuvi/status/1877151689754427838",
      "https://github.com/beeminder/beeminder/issues/4226",
      "https://github.com/beeminder/beeminder/pull/5123"],
"d": "2025-01-08",
"t": "2025-01-08",
"c": "We formerly partially validated on the client side, and partially serverside, so it was possible if you submitted something such as 'featured' for your username when registering, that it would appear ok according to clientside validations, but then come back with an error from the server once you clicked the 'continue' button",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Changed headings and adjusted wording away from paying-as-punishment in \"What Is Beeminder?\" plus tweaks and little fixes in 9 other articles",
"u": ["https://x.com/beemuvi/status/1877513305008517630",
      "https://help.beeminder.com/article/70-what-is-beeminder",
      "https://help.beeminder.com/article/120-whats-the-best-way-to-beemind",
      "https://help.beeminder.com/article/339-how-do-i-set-a-goal-with-a-weekly-rate",
      "https://help.beeminder.com/article/71-example-10k-steps",
      "https://help.beeminder.com/article/72-example-goal-run-3-times-per-week",
      "https://help.beeminder.com/article/93-example-goal-spend-less-time-on-facebook",
      "https://help.beeminder.com/article/94-example-goal-eat-14-servings-of-vegetables-per-week",
      "https://help.beeminder.com/article/95-example-goal-learn-a-new-language",
      "https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types",
      "https://help.beeminder.com/article/52-why-cant-i-create-a-do-less-odometer-whittle-down"],
"t": "2025-01-09",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Deleted most words from the \"when does my week start?\" article, making it hopefully much clearer, plus made another one not discuss fake data",
"u": ["https://x.com/beemuvi/status/1877516066936537527",
      "https://help.beeminder.com/article/123-weekstart",
      "https://help.beeminder.com/article/92-example-goal-go-to-the-gym-4-times-per-week"],
"t": "2025-01-09",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Made the article about Beeminder end-of-day more readable (by deleting lots of things) plus fixed an error a user caught in the Odometer goals one",
"u": ["https://x.com/beemuvi/status/1877873005680013343",
      "https://help.beeminder.com/article/122-why-does-beeminder-think-its-already-tomorrow",
      "https://help.beeminder.com/article/68-odometer-goals"],
"t": "2025-01-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added guidance about replying to legit checks and other support email things in the catchall article, plus tweaks to 2 other articles",
"u": ["https://x.com/beemuvi/status/1878966872437322209",
      "https://help.beeminder.com/article/351-i-need-help",
      "https://help.beeminder.com/article/154-can-i-schedule-breaks-on-many-goals-at-once",
      "https://help.beeminder.com/article/58-what-if-i-only-want-to-do-something-once-a-month"],
"t": "2025-01-13",
}, { // ------------------------------------------------------------------------
"x": "Help docs: In the article on weekday-only goals, added links and made clear you can toggle weekends-off on the mass-breaks page",
"u": ["https://x.com/beemuvi/status/1878966969271218200",
      "https://help.beeminder.com/article/57-what-if-i-only-want-to-do-my-goal-on-weekdays"],
"t": "2025-01-13",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Retitled article on getting free goals making it more findable, plus edited \"my goal doesn't make any sense!\" article to encourage more self-help",
"u": ["https://x.com/beemuvi/status/1879332522217382043",
      "https://help.beeminder.com/article/336-how-many-goals-can-i-make-for-free",
      "https://help.beeminder.com/article/124-my-goal-doesnt-make-any-sense"],
"t": "2025-01-14",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added more about Whittle Down and Weight goals to the safety buffer article, addressing some user confusion, plus cleaned up the formatting",
"u": ["https://x.com/beemuvi/status/1879686992939909508",
      "https://help.beeminder.com/article/55-what-is-safety-buffer"],
"t": "2025-01-15",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarified about ratcheting number of safe days vs goal units in the Ratchet article, plus tweaks and rearranging/rephrasing in 2 other articles",
"u": ["https://x.com/beemuvi/status/1880055465549410683",
      "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer",
      "https://help.beeminder.com/article/119-what-are-the-goal-statistics",
      "https://help.beeminder.com/article/66-do-more-goals"],
"t": "2025-01-16",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Lots of edits throughout the article on scheduling breaks to clarify about when/how one can derail during a break",
"u": ["https://x.com/beemuvi/status/1880055717203489061",
      "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit"],
"t": "2025-01-16",
}, { // ------------------------------------------------------------------------
"x": "Got our YNAB integration the official stamp of approval from YNAB, meaning we're in their \"works with us\" gallery and also we can have more than 25 users now",
"u": ["https://x.com/beemuvi/status/1880406329694777416",
      "https://api.ynab.com/#works-with-ynab-official",
      "https://github.com/beeminder/beeminder/issues/4980"],
"d": "2024-08-20",
"t": "2024-01-17",
"c": "We forgot to do this before publicly launching the integration from our side, so we ran out of slots and the integration was broken for a while, which was embarrassing for us. Also there's no PR to go with this because it was pretty much just about emailing with their gatekeepers. Oldie but we did break it twice without counting it as a UVI previously.",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Help docs: Updated screenshot and text for relative (aka rolling) x-min (aka t-min) in the article about restarting archived goals",
"u": ["https://x.com/beemuvi/status/1881491664365350924",
      "https://help.beeminder.com/article/358-can-i-restart-an-archived-goal"],
"t": "2025-01-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added bit about visual graph editor in \"Can I start my goal over?\" and Do-More-vs-Do-Less tradeoffs plus new links in the Do-Less article",
"u": ["https://x.com/beemuvi/status/1881491766358180159",
      "https://help.beeminder.com/article/117-can-i-start-my-goal-over",
      "https://help.beeminder.com/article/67-do-less-goals"],
"t": "2025-01-20",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added warnings for wary to the Custom Goals article, fixed a missing sentence ending in another, and tweaked the intro in 2 more articles",
"u": ["https://x.com/beemuvi/status/1881866043091816909",
      "https://help.beeminder.com/article/97-custom-goals",
      "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
      "https://help.beeminder.com/article/68-odometer-goals",
      "https://help.beeminder.com/article/69-whittle-down-goals"],
"t": "2025-01-21",
}, { // ------------------------------------------------------------------------
"x": "Soft launch (beta) of our Fatebook integration. Open to daily beemail folks and anyone else who can guess the URL.",
"u": ["https://x.com/beemuvi/status/1882230134071316650",
      "https://github.com/beeminder/beeminder/issues/5114",
      "https://github.com/beeminder/beeminder/pull/5142"],
"d": "2025-01-21",
"t": "2025-01-22",
}, { // ------------------------------------------------------------------------
"x": "We updated our Garmin integration which was about to break if we didn't change some API calls Garmin asked us to change. Sweat-smile-emoji.",
"u": ["https://x.com/beemuvi/status/1882588052910166248",
      "https://github.com/beeminder/beeminder/issues/4967#issuecomment-2599189608"],
"t": "2025-01-23",
"c": "I think historically we've waited for things to break before counting them as UVIs but that makes for silly incentives, so we decided pregressions (aka time-bomb zombs) should count too. This one involved changing some http calls to https.",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Fixed some user-confusion with the Weight Loss/Gain article by changing headings and adding clarifying words and sentences",
"u": ["https://x.com/beemuvi/status/1882588627898921120",
      "https://help.beeminder.com/article/96-weight-gain-loss-goals"],
"t": "2025-01-23",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarifications in \"What is my data?\" re: auto-summing vs odometer goals, plus keywords and a link. And a tiny tweak to \"Can I export my data?\"",
"u": ["https://x.com/beemuvi/status/1882955530337128888",
      "https://help.beeminder.com/article/36-what-is-my-data",
      "https://help.beeminder.com/article/41-can-i-export-my-data"],
"t": "2025-01-24",
}, { // ------------------------------------------------------------------------
"x": "Fixed a critical bug in the soft-launched Fatebook integration: it's odometer style, not auto-summing. HT @poisson",
"u": ["https://x.com/beemuvi/status/1884015412192632990",
      "https://github.com/beeminder/beeminder/issues/5114",
      "https://github.com/beeminder/beeminder/pull/5144"],
"t": "2025-01-27",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Lots of copyediting love and new examples for the \"How do I enter data?\" article, plus a clarifying line in \"How do I fix incorrect data?\"",
"u": ["https://x.com/beemuvi/status/1884015564684943753",
      "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal",
      "https://help.beeminder.com/article/39-how-do-i-fix-incorrect-data"],
"t": "2025-01-27",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Significantly rewrote the \"When do I pay?\" article to make it clearer, easier to read, and to get important stuff up front",
"u": ["https://x.com/beemuvi/status/1884402333028868584",
      "https://help.beeminder.com/article/324-when-do-i-pay"],
"t": "2025-01-28",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Rephrasings/clarifications in the article on others adding data to your goal, plus mention of API in data import article, plus link added to 1 other",
"u": ["https://x.com/beemuvi/status/1884761615050080508",
      "https://help.beeminder.com/article/40-can-anybody-else-add-data-to-my-goal",
      "https://help.beeminder.com/article/113-can-i-import-previous-data",
      "https://help.beeminder.com/article/19-how-much-does-beeminder-cost"],
"t": "2025-01-29",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added a link to goal archiving to the article on changing goal units, as some users needed that pointer",
"u": ["https://x.com/beemuvi/status/1885130109604291045",
      "https://help.beeminder.com/article/42-switching-goal-units"],
"t": "2025-01-30",
}, { // ------------------------------------------------------------------------
"x": "The refresh/resync button now retries fetching data for an autodata goal even after there's been an auto-fetch error",
"u": ["https://x.com/beemuvi/status/1885130911374852487",
      "https://github.com/beeminder/beeminder/pull/5149"],
"d": "2025-01-30",
"t": "2025-01-30",
"c": "This is for the kind of auto-fetch error that puts up a blue banner. Also the tweeted version of this was slightly wrong.",
}, { // ------------------------------------------------------------------------
"x": "The API has a new boolean field to tell you if a datapoint is a true logical datapoint or just a placeholder/meta datapoint like marking a derail (is_dummy)",
"u": ["https://x.com/beemuvi/status/1885492312543027453",
      "https://github.com/beeminder/BeeSwift/pull/599#issuecomment-2599381144"],
"t": "2025-01-31",
"c": "Also PPRs are considered dummy datapoints in this sense",
}, /* --------------------------------------------------------- end 2025jan */ ]


batches['2025feb'] = [{
}, { // ------------------------------------------------------------------------
"x": "The API also has a new boolean field to distinguish the initial datapoint that's added as part of goal creation: is_initial (documented these as well)",
"u": ["https://x.com/beemuvi/status/1886535306104725870",
      "https://github.com/beeminder/BeeSwift/pull/599#issuecomment-2599381144"],
"t": "2025-02-03",
}, { // ------------------------------------------------------------------------
"x": "When we added info about where a goal gets its data to the sidebar of the goalpage, we broke some of the meta user's goal pages. #bugfix #zomb HT David Yang",
"u": ["https://x.com/beemuvi/status/1886536482275688596",
      "https://github.com/beeminder/beeminder/issues/4119",           // introduced by 
      "https://changelog.beeminder.com/#4993",                        // UVI entry that introduced this bug
      "https://github.com/beeminder/beeminder/pull/5130"],            // fixed by
"d": "2025-01-09",
"t": "2025-02-03",
"c": "The goal pages gave a 500 error because we were trying to generate a link to the autodata landing page, but they're a custom internal pseudo-autodata goal, and didn't have a landing page. Introduced in UVI#4993",
}, { // ------------------------------------------------------------------------
"x": "The refresh arrow in the sidebar of autodata goals now changes color when new data fetched by pressing it changes the goal's safety buffer, e.g. orange to blue",
"u": ["https://x.com/beemuvi/status/1886936908829241577",
      "https://github.com/beeminder/beeminder/issues/5143",
      "https://github.com/beeminder/beeminder/pull/5152"],
"d": "2025-02-04",
"t": "2025-02-04",
}, { // ------------------------------------------------------------------------
"x": "We now include the connected username and a description of what the goal is tracking in the GitHub section of goal settings for Gitminder autodata goals",
"u": ["https://x.com/beemuvi/status/1887302483619553376",
      "https://github.com/beeminder/beeminder/issues/4094",
      "https://github.com/beeminder/beeminder/pull/5153",
      "https://github.com/beeminder/beeminder/pull/5156"],
"d": "2025-02-04",
"t": "2025-02-05",
}, { // ------------------------------------------------------------------------
"x": "We also added a button for the Gitminder form that lets you change the repo it's tracking, if you're tracking a specific repo, instead of all commits",
"u": ["https://x.com/beemuvi/status/1887660918726885498",
      "https://github.com/beeminder/beeminder/issues/4094",
      "https://github.com/beeminder/beeminder/pull/5153",
      "https://github.com/beeminder/beeminder/pull/5156"],
"t": "2025-02-06",
}, { // ------------------------------------------------------------------------
"x": "Finally, we added a warning line for Gitminder if the goal's owner is disconnected from GitHub",
"u": ["https://x.com/beemuvi/status/1887661151380775086",
      "https://github.com/beeminder/beeminder/issues/4094",
      "https://github.com/beeminder/beeminder/pull/5153",
      "https://github.com/beeminder/beeminder/pull/5156"],
"d": "2025-02-04",
"t": "2025-02-06",
"c": "I rearranged what I did yesterday and made it slightly better, so that's why there are two PRs now",
}, { // ------------------------------------------------------------------------
"x": "SerineMolecule fixed the bug w/ anchor links here in the changelog. Linking to specific UVIs works now without scrolling slightly away from the target! #bugfix",
"u": ["https://x.com/beemuvi/status/1888027264756936832",
      "https://github.com/beeminder/uvi"],
"d": "2025-02-07",
"t": "2025-02-07",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Subtle edits to the \"how much do I pledge?\" article to encourage derailing-it-is-nailing-it plus tweaks/rearranging to 5 other articles",
"u": ["https://x.com/beemuvi/status/1889120491623109099",
      "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals",
      "https://help.beeminder.com/article/21-can-i-decrease-the-pledge-on-my-goal",
      "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription",
      "https://help.beeminder.com/article/26-what-if-i-buy-one-plan-and-change-my-mind",
      "https://help.beeminder.com/article/27-what-payment-methods-are-available",
      "https://help.beeminder.com/article/28-how-do-i-update-my-payment-information"],
"t": "2025-02-10",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Same story for the \"can I increase the pledge?\" article plus tweaks/clarifications to another 3 articles",
"u": ["https://x.com/beemuvi/status/1889120644962640273",
      "https://help.beeminder.com/article/343-can-i-increase-the-pledge-on-my-goal",
      "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets",
      "https://help.beeminder.com/article/23-can-i-have-goals-without-pledges",
      "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work"],
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Official launch of our Fatebook (with a T) integration! https://blog.beeminder.com/fatebook",
"u": ["https://x.com/beemuvi/status/1889499697821499512",
      "https://github.com/beeminder/blog/issues/582",
      "https://github.com/beeminder/integrations/issues/52",
      "https://github.com/beeminder/beeminder/issues/5114",
      "https://github.com/beeminder/beeminder/pull/5160"],
"d": "2025-02-11",
"t": "2025-02-11",
"c": "Improvements to the landing page, logo on front page gallery, blog post",
}, { // ------------------------------------------------------------------------
"x": "Help docs: New article for the new Fatebook integration",
"u": ["https://x.com/beemuvi/status/1889500812759761090",
      "https://help.beeminder.com/article/366-fatebook"],
"d": "2025-02-11",
"t": "2025-02-11",
}, { // ------------------------------------------------------------------------
"x": "We fixed the alignment of the integrations gallery so when the don't fit in a nice rectangle, the overlow is left-justified",
"u": ["https://x.com/beemuvi/status/1890201640264954337",
      "https://github.com/beeminder/beeminder/commit/615f17f39eca9dcea34bb1ac4789f786c9857a94"],
"t": "2025-02-13",
}, { // ------------------------------------------------------------------------
"x": "Also we improved the spacing of the gallery and made the logos slightly smaller so things fit better",
"u": ["https://x.com/beemuvi/status/1890201677913104869",
      "https://github.com/beeminder/beeminder/commit/615f17f39eca9dcea34bb1ac4789f786c9857a94"],
"d": "2025-02-11",
"t": "2025-02-13",
}, { // ------------------------------------------------------------------------
"x": "Removed all-commits tracking from Gitminder for now; it has been semi-broken because the API it uses is not realtime and we can miss data & derail edge-skaters",
"u": ["https://x.com/beemuvi/status/1890555566482690220",
      "https://github.com/beeminder/beeminder/pull/5167"],
"d": "2025-02-14",
"t": "2025-02-14",
}, { // ------------------------------------------------------------------------
"x": "Toggl changed their URLs around and we now once again link to the right place to find your token for pasting in to create a Beeminder autodata goal",
"u": ["https://x.com/beemuvi/status/1892013006973698393",
      "https://github.com/beeminder/beeminder/issues/5172",
      "https://github.com/beeminder/beeminder/pull/5170"],
"d": "2025-02-18",
"t": "2025-02-18",
}, { // ------------------------------------------------------------------------
"x": "We fixed a slight/sorta error in the feet-weeting emailcopy and added a conditional blurb for the (edge) case that the goal ended up archived (somehow)",
"u": ["https://x.com/beemuvi/status/1892368469800227298",
      "https://github.com/beeminder/beeminder/issues/4947",
      "https://github.com/beeminder/beeminder/pull/5169"],
"d": "2025-02-18",
"t": "2025-02-19",
"c": "HT Andy. This is so corner-casey: it involves creating the goal, turning on no-excuses mode (otherwise there's no option to archive, only delete), and then immediately archive it. And then maybe losing a race condition?",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Rearranging and clarifying in the \"Why did Beeminder charge me?\" article plus smaller tweaks to 4 other articles",
"u": ["https://x.com/beemuvi/status/1892739995607433546",
      "https://help.beeminder.com/article/29-why-did-beeminder-charge-my-card",
      "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails",
      "https://help.beeminder.com/article/354-honey-money",
      "https://help.beeminder.com/article/12-what-is-a-derailment",
      "https://help.beeminder.com/article/13-when-do-derailments-happen"],
"t": "2025-02-20",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug introduced by UVI#5122 where we weren't validating your tracked repo when you set up a new GitHub (Gitminder) goal. #bugfix #zombie",
"u": ["https://x.com/beemuvi/status/1894185693074649553",
      "https://github.com/beeminder/beeminder/issues/5027",
      "https://github.com/beeminder/beeminder/pull/5173"],
"t": "2025-02-24",
"c": "Autodata integration improvements. UVI#5122 removed all-commits from goal setup, and that messed up the validation, so we weren't even checking if you entered a repo, let alone whether or not we could access it with your credentials",
}, { // ------------------------------------------------------------------------
"x": "Our GitHub integration now checks and keeps in sync the last week of data, in line with other autodata, rather than just the current day",
"u": ["https://x.com/beemuvi/status/1894185827292295201",
      "https://github.com/beeminder/beeminder/issues/5027",
      "https://github.com/beeminder/beeminder/pull/5173"],
"t": "2025-02-24",
"c": "This is to help with gissue #5027 -- part of the problem with the allcommits endpoint not being real-time was that if the delay happened across midnight, we'd miss the commits entirely because we didn't go back and check past days",
}, { // ------------------------------------------------------------------------
"x": "We now check that the goaldate parameter passed to the API in goal creation is a Unix timestamp, and give a coherent error if not",
"u": ["https://x.com/beemuvi/status/1894548534541914594",
      "https://github.com/beeminder/beeminder/issues/4952",
      "https://github.com/beeminder/beeminder/pull/5174"],
"t": "2025-02-25",
"c": "Prior to this we were just accepting it and interpreting as 1969-12-31, which is super wrong",
}, { // ------------------------------------------------------------------------
"x": "To catch more errors (e.g., unixtime in milliseconds instead of seconds), we further enforce NOW < goaldate < 2099-12-31",
"u": ["https://x.com/beemuvi/status/1894914472650977571",
      "https://github.com/beeminder/beeminder/pull/5174",
      "https://github.com/beeminder/beeminder/pull/5177"],
"t": "2025-02-26",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Added to the Boss as a Service integration article info about non-legit derailments when using that integration",
"u": ["https://x.com/beemuvi/status/1894914534697316564",
      "https://help.beeminder.com/article/329-boss-as-a-service-baas"],
"t": "2025-02-26",
"c": "We still also allow nil/null goaldate",
}, { // ------------------------------------------------------------------------  
"x": "We added an explicit link to the dashboard in the dropdown menu in the upper right of the website; apparently not everyone knew how to find the dashboard",
"u": ["https://x.com/beemuvi/status/1895274339584679995",
      "https://github.com/beeminder/beeminder/issues/5193",
      "https://github.com/beeminder/beeminder/pull/5181"],
"d": "2025-02-27",
"t": "2025-02-27",
}, { // ------------------------------------------------------------------------
"x": "While we were at it we changed \"gallery\" to \"gallery view\" and added some handy tooltips",
"u": ["https://x.com/beemuvi/status/1895573333862989913",
      "https://github.com/beeminder/beeminder/pull/5181"],
"t": "2025-02-28",
}, /* --------------------------------------------------------- end 2025feb */ ]

batches['2025mar'] = [{
}, { // ------------------------------------------------------------------------
x: "Help docs: New FAQ item / clarification in the article for the Fatebook autodata integration, plus copy tweaks to 3 other articles",
u: ["https://x.com/beemuvi/status/1896723193441964234",
    "https://help.beeminder.com/article/366-fatebook",
    "https://help.beeminder.com/article/16-what-is-a-legit-derailment",
    "https://help.beeminder.com/article/360-what-is-no-excuses-mode",
    "https://help.beeminder.com/article/61-apple-health"],
t: "2025-03-03",
}, { // ------------------------------------------------------------------------
x: `Help docs: The Focusmate autodata integration article now covers the new time-based metric, plus copy tweaks or added details to 4 more articles`,
u: ["https://x.com/beemuvi/status/1896724799818543295",
    "https://help.beeminder.com/article/278-focusmate",
    "https://help.beeminder.com/article/17-what-happens-when-i-derail",
    "https://help.beeminder.com/article/290-clozemaster",
    "https://help.beeminder.com/article/288-codecombat",
    "https://help.beeminder.com/article/364-curlex"],
t: "2025-03-03",
}, { // ------------------------------------------------------------------------
x: "For consistency (and cuteness?) and I guess in some cases actual usefulness, we added tooltips to pretty much everything in the navbar and dropdown menu",
u: ["https://x.com/beemuvi/status/1897080286581842025",
    "https://github.com/beeminder/beeminder/issues/5182",
    "https://github.com/beeminder/beeminder/pull/5184"],
t: "2025-03-04",
}, { // ------------------------------------------------------------------------
x: "Oops, we accidentally swapped the Log In and Sign Up links. #bugfix #zombie",
u: ["https://x.com/beemuvi/status/1897451417662812638",
    "https://forum.beeminder.com/t/log-in-and-sign-up-buttons-permuted/12269",
    "https://github.com/beeminder/beeminder/pull/5189"],
t: "2025-03-05",
}, { // ------------------------------------------------------------------------
x: "While we were at it / for completionism, we added tooltips to the remaining navbar / menu items, and improved several of them",
u: ["https://x.com/beemuvi/status/1897451534675595342",
    "https://github.com/beeminder/beeminder/issues/5182",
    "https://github.com/beeminder/beeminder/pull/5189"],
t: "2025-03-05",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarification about donations to freeCodeCamp in the article about the autodata integration, plus tweaks to 2 other autodata articles",
u: ["https://x.com/beemuvi/status/1897814167329161530",
    "https://help.beeminder.com/article/287-freecodecamp",
    "https://help.beeminder.com/article/80-duolingo",
    "https://help.beeminder.com/article/74-garmin"],
t: "2025-03-06",
}, { // ------------------------------------------------------------------------
x: "Some autodata integrations used to overwrite the #DERAIL datapoints and others wouldn't. Now they never do. Consistency (and moar information) FTW.",
u: ["https://x.com/beemuvi/status/1898167363910222321",
    "https://github.com/beeminder/beeminder/issues/4192",
    "https://github.com/beeminder/beeminder/pull/5183",
    "https://github.com/beeminder/beeminder/pull/5186"],
d: "2025-03-04",
t: "2025-03-07",
}, { // ------------------------------------------------------------------------
x: `There's a new AGGDAY section at the end of the Data tab indicating how multiple datapoints for a single day are aggregated, e.g., "last", "first", "min", "max"`,
u: ["https://x.com/beemuvi/status/1899246071563665748",
    "https://github.com/beeminder/beeminder/issues/5044",
    "https://github.com/beeminder/beeminder/pull/5180"],
d: "2025-03-04",
t: "2025-03-10",
}, { // ------------------------------------------------------------------------
x: `The new AGGDAY section also explains aggdays in general and links to the help doc about them`,
u: ["https://x.com/beemuvi/status/1899246455212400921",
    "https://github.com/beeminder/beeminder/issues/5044",
    "https://github.com/beeminder/beeminder/pull/5180"],
d: "2025-03-04",
t: "2025-03-10",
}, { // ------------------------------------------------------------------------
x: `Tweaks to the aggday section: following our convention for opening links in new tabs or not, not using "here" as anchor text, more words for aggday=max`,
u: ["https://x.com/beemuvi/status/1899593751724720623",
    "https://github.com/beeminder/beeminder/pull/5194"],
d: "2025-03-11",
t: "2025-03-11",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a section to the GmailZero article about how to add a break`,
u: ["https://x.com/beemuvi/status/1899955528455073923",
    "https://help.beeminder.com/article/82-gmail"],
t: "2025-03-12",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a section to the Gitminder article about flakiness with all-commits tracking with link to new forum thread`,
u: ["https://x.com/beemuvi/status/1899969992856396257",
    "https://help.beeminder.com/article/81-github"],
t: "2025-03-12",
}, { // ------------------------------------------------------------------------
x: `Added "6 months" as one of the choices for relative t-min aka x-min (either by popular demand or because 3 months was demanded and having 3 but not 6 was weird)`,
u: ["https://x.com/beemuvi/status/1900335100744908805",
    "https://github.com/beeminder/beeminder/issues/5187",
    "https://github.com/beeminder/beeminder/pull/5197"],
d: "2025-03-13",
t: "2025-03-13",
}, { // ------------------------------------------------------------------------
x: `Our authorization to read your Lichess data only lasts a year. Now we handle that gracefully, showing you the error and letting you reauthorize us.`,
u: ["https://x.com/beemuvi/status/1900686994407362656",
    "https://github.com/beeminder/beeminder/issues/4973",
    "https://github.com/beeminder/beeminder/pull/5195"],
d: "2025-03-14",
t: "2025-03-14",
}, { // ------------------------------------------------------------------------
x: `Added an "Expired Services" section to your account settings; otherwise we would only notice a service expired if you had an active autodata goal using it`,
u: ["https://x.com/beemuvi/status/1900687378748239960",
    "https://github.com/beeminder/beeminder/issues/4973",
    "https://github.com/beeminder/beeminder/pull/5195"],
d: "2025-03-14",
t: "2025-03-14",
}, { // ------------------------------------------------------------------------
x: "YNAB sent us some legalese to put in our TOS. We're counting this as a UVI on grounds that they'd demote (and thus break) the integration if we didn't.",
u: ["https://x.com/beemuvi/status/1901782022621962497",
    "https://github.com/beeminder/beeminder/issues/5199",
    "https://github.com/beeminder/beeminder/pull/5201"],
d: "2025-03-17",
t: "2025-03-17",
}, { // ------------------------------------------------------------------------
x: "The Toggl autodata integration, for earlybird goals, wasn't adding data for the new day till the calendar day and Beeminder day matched. #bugfix",
u: ["https://x.com/beemuvi/status/1901782512009195752",
    "https://github.com/beeminder/beeminder/issues/5108",
    "https://github.com/beeminder/beeminder/pull/5198"],
d: "2025-03-17",
c: "E.g. if your deadline was noon, and then you did another hour of work starting at 1pm, we wouldn't add that hour until after the clock rolled over midnight",
}, { // ------------------------------------------------------------------------
x: `Our query for showing Expired Services from UVI#5147 was wrongly including non-expired services (ones with refresh tokens). #bugfix`,
u: ["https://x.com/beemuvi/status/1902509714984067296",
    "https://github.com/beeminder/beeminder/pull/5204"],
t: "2025-03-19",
d: "2025-03-19",
c: "Services with refresh tokens are ones that expire on the regular but self-renew. (Sorta. oAuth2 is actually a bit more complicated than that in practice, but anyway.)",
}, { // ------------------------------------------------------------------------
x: `We also made it anti-magic-compliant so if you have no expired services it tells you so explicitly`,
u: ["https://x.com/beemuvi/status/1902509910056968648",
    "https://github.com/beeminder/beeminder/pull/5204"],
t: "2025-03-19",
d: "2025-03-19"
}, { // ------------------------------------------------------------------------
x: `The anti-magic fix also magically fixed an if-statement bug that caused us to only show *one* of auth'd, expired, or "you haven't auth'd anything yet". #bugfix`,
u: ["https://x.com/beemuvi/status/1902870740363587986",
    "https://github.com/beeminder/beeminder/pull/5204"],
t: "2025-03-20",
c: "Probably this ought to have been obvious, but code reviews are hard, my friends."
}, { // ------------------------------------------------------------------------
x: `Also in the Apps&API tab of Settings, we made the autodata integration logos and names look better at small screen sizes`,
u: ["https://x.com/beemuvi/status/1903210671241875457",
    "https://github.com/beeminder/beeminder/pull/5204"],
d: "2025-03-19",
t: "2025-03-21",
}, { // ------------------------------------------------------------------------
x: `Another style improvement: we fixed up the whitespace in the Unauth'd and Expired sections so it's distributed evenly`,
u: ["https://x.com/beemuvi/status/1903210938758734302",
    "https://github.com/beeminder/beeminder/issues/4845",
    "https://github.com/beeminder/beeminder/pull/5204"],
d: "2025-03-19",
t: "2025-03-21",
}, { // ------------------------------------------------------------------------
x: `Finally, we made the layout responsive so it switches to a two-column layout at small enough screen sizes`,
u: ["https://x.com/beemuvi/status/1903210984669597719",
    "https://github.com/beeminder/beeminder/pull/5204"],
d: "2025-03-19",
t: "2025-03-21",
}, { // ------------------------------------------------------------------------
x: `Fixed an alignment problem w/ the "Apps you have authorized to access your beeswax" section that we introduced in the previous batch of UVIs. #css #bugfix #zomb`,
u: ["https://x.com/beemuvi/status/1907220503267582278",
    "https://github.com/beeminder/beeminder/pull/5206"],
d: "2025-03-20",
t: "2025-04-01",
}, { // ------------------------------------------------------------------------
x: `Changed the syling of the list of expired services and we now let you either re-auth or delete the service`,
u: ["https://x.com/beemuvi/status/1907576815654441415",
    "https://github.com/beeminder/beeminder/issues/4845",
    "https://github.com/beeminder/beeminder/pull/5206"],
d: "2025-03-20",
t: "2025-04-02",
}, { // ------------------------------------------------------------------------
x: `Made the spacing/alignment of "Add another service" nicer by giving everything a consistent width, plus some vertical space between sections`,
u: ["https://x.com/beemuvi/status/1907576934663688214",
    "https://github.com/beeminder/beeminder/issues/4845",
    "https://github.com/beeminder/beeminder/pull/5206"],
d: "2025-03-20",
t: "2025-04-02",
}, { // ------------------------------------------------------------------------
x: `Finally, we adjusted the growing/shrinking of columns in the "Authorized" and "Expired" sections to use whitespace better and wrap text less`,
u: ["https://x.com/beemuvi/status/1907944873027842089",
    "https://github.com/beeminder/beeminder/issues/4845",
    "https://github.com/beeminder/beeminder/pull/5206"],
d: "2025-03-20",
t: "2025-04-03",
}, /* --------------------------------------------------------- end 2025mar */ ]

batches['2025apr'] = [{
}, { // ------------------------------------------------------------------------
f: true,
x: `Official launch of our Postminder autodata integration, with new Discourse logo, nicer landing page, and inclusion in the integrations gallery`,
u: ["https://x.com/beemuvi/status/1908259775303082465",
    "https://blog.beeminder.com/postminder"],
t: "2025-04-04",
}, { // ------------------------------------------------------------------------
x: `Help docs: New article for our Postminder integration`,
u: ["https://x.com/beemuvi/status/1908259967179874730",
    "https://help.beeminder.com/article/368-postminder"],
t: "2025-04-04",
}, { // ------------------------------------------------------------------------
x: `Loophole closing: If you try to create goals via the API when you're in the "deadbeat" state (failed payment method), it now gives an error`,
u: ["https://x.com/beemuvi/status/1909367794728153577",
    "https://github.com/beeminder/beeminder/issues/1978",
    "https://github.com/beeminder/beeminder/pull/5214"],
d: "2025-04-07",
t: "2025-04-07",
}, { // ------------------------------------------------------------------------
x: `We introduced a syntax error that caused email reminders for Curlminder (aka Curlex), Fatebook, Oura, and Wakatime autodata goals to fail to send. #bugfix #zomb`,
u: ["https://x.com/beemuvi/status/1909757623957917886",
    "https://github.com/beeminder/beeminder/issues/5216",
    "https://github.com/beeminder/beeminder/pull/5215"],
d: "2025-04-04",
t: "2025-04-08",
c: "See `cute_reminder` for autodata reminders. Possibly broken ever since the Wakatime integration.",
}, { // ------------------------------------------------------------------------
x: `And a tiny set of users (who managed to have the SMS bot checkbox checked but had a blank phone number) were failing to get any reminders of any kind. #bugfix`,
u: ["https://x.com/beemuvi/status/1910117505328357769",
    "https://github.com/beeminder/beeminder/issues/5220"],
d: "2025-04-04",
t: "2025-04-09",
c: "There's some followon work to robustify and fix things, but the direct fix for the users who weren't getting their alerts was just a database update. Total affected was between 5 and 8.",
}, { // ------------------------------------------------------------------------
x: `Restarting a goal that hit its end date was yielding a new end date of +1.5 years. Now we correctly put the default end date at 2099, ie open-ended. #bugfix`,
u: ["https://x.com/beemuvi/status/1910118544601489912",
    "https://github.com/beeminder/beeminder/issues/4049",
    "https://github.com/beeminder/beeminder/pull/5207"],
d: "2025-03-21",
t: "2025-04-09",
}, { // ------------------------------------------------------------------------
x: `Help docs: New article, "What happens when I reach my goal total / end date?" because users asked and we didn't have it in one place to search for or link to`,
u: ["https://x.com/beemuvi/status/1910481082199511163",
    "https://help.beeminder.com/article/367-what-happens-when-i-reach-my-goal-total-end-date"],
t: "2025-04-10",
}, { // ------------------------------------------------------------------------
x: `Help docs: Attempted to ameliorate confusion about the Metaminder integration in that article, plus tweaks to 5 other autodata articles`,
u: ["https://x.com/beemuvi/status/1910781955836404028",
    "https://help.beeminder.com/article/323-metaminder",
    "https://help.beeminder.com/article/83-habitica",
    "https://help.beeminder.com/article/86-ifttt",
    "https://help.beeminder.com/article/338-lichess",
    "https://help.beeminder.com/article/318-make-formerly-integromat",
    "https://help.beeminder.com/article/352-manifold"],
t: "2025-04-11",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a bit of a troubleshooting note to the Intend autodata article, a solicitation of new metrics in the Oura one, plus tweaks in 3 others`,
u: ["https://x.com/beemuvi/status/1910783188949176451",
    "https://help.beeminder.com/article/85-intend",
    "https://help.beeminder.com/article/361-oura",
    "https://help.beeminder.com/article/291-pocket",
    "https://help.beeminder.com/article/292-project-euler",
    "https://help.beeminder.com/article/347-readwise-reader"],
t: "2025-04-11",
}, { // ------------------------------------------------------------------------
x: `Help docs: Replaced the screenshots in the Postminder article to reflect the final version that supports arbitrary Discourse fora`,
u: ["https://x.com/beemuvi/status/1911877942420119898",
    "https://help.beeminder.com/article/368-postminder"],
t: "2025-04-14",
}, { // ------------------------------------------------------------------------
x: `Help docs: The RescueTime autodata integration article now documents the slight delay we have in derailing RescueTime goals`,
u: ["https://x.com/beemuvi/status/1912293947936063859",
    "https://help.beeminder.com/article/76-rescuetime",
    "https://doc.bmndr.co/freshat"],
t: "2025-04-15",
}, { // ------------------------------------------------------------------------
x: `Our freeCodeCamp autodata integration briefly broke due to an API change on their end. We got approval for a workaround, now put in place! #bugfix #zomb`,
u: ["https://x.com/beemuvi/status/1912653410513699159",
    "https://github.com/beeminder/beeminder/issues/5236",
    "https://github.com/beeminder/beeminder/pull/5233"],
d: "2025-04-16",
t: "2025-04-16",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added more about syncing to the Skritter autodata article, plus a couple links added to the RSSminder and Runkeeper articles`,
u: ["https://x.com/beemuvi/status/1912653488892588459",
    "https://help.beeminder.com/article/89-skritter",
    "https://help.beeminder.com/article/331-rssminder",
    "https://help.beeminder.com/article/77-runkeeper"],
t: "2025-04-16",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a note to the TaskRatchet autodata article about how to not count tasks as a +1 on Beeminder until they're completed on TaskRatchet`,
u: ["https://x.com/beemuvi/status/1913019198059823527",
    "https://help.beeminder.com/article/289-taskratchet"],
t: "2025-04-17",
}, { // ------------------------------------------------------------------------
x: `We weren't tracking when you change your phone number, so you could wind up with an 'active' number that you hadn't actually opted in to the SMS bot. #bugfix`,
u: ["https://x.com/beemuvi/status/1913379713453838413",
    "https://github.com/beeminder/beeminder/issues/5223",
    "https://github.com/beeminder/beeminder/pull/5235"],
d: "2025-04-18",
t: "2025-04-18",
c: "We thought we were, but there was a bug with assignment so that we weren't actually updating the 'phone number state', which meant once you had activated the bot once, you could change or even delete your number and we'd still have it marked down as 'active'",
}, { // ------------------------------------------------------------------------
x: `Soft launch of our Maayot autodata integration for Chinese language learning, at the still-slightly-secret URL beeminder.com/maayot`,
u: ["https://x.com/beemuvi/status/1914467551574368664",
    "https://github.com/beeminder/integrations/issues/70",
    "https://github.com/beeminder/beeminder/issues/5191",
    "https://github.com/beeminder/beeminder/pull/5239"],
d: "2025-04-21",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a troubleshooting section to the StoryGraph autodata integration article and clarified a point about changing projects in the Todoist article`,
u: ["https://x.com/beemuvi/status/1914468070556578034",
    "https://help.beeminder.com/article/300-the-storygraph",
    "https://help.beeminder.com/article/79-todoist"],
t: "2025-04-21",
}, { // ------------------------------------------------------------------------
x: `Help docs: Additions/tweaks to the Toggl Track autodata integration article (re: other Toggl software, etc) plus tiny tweaks to 5 other articles`,
u: ["https://x.com/beemuvi/status/1914824457526649059",
    "https://help.beeminder.com/article/155-toggl",
    "https://help.beeminder.com/article/116-slack",
    "https://help.beeminder.com/article/84-sleep-as-android",
    "https://help.beeminder.com/article/368-postminder",
    "https://help.beeminder.com/article/112-sms",
    "https://help.beeminder.com/article/281-strava"],
t: "2025-04-22",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rearranged the FAQ for WakaTime to put higher-frequency questions on top, plus small tweaks for clarity to 4 other articles`,
u: ["https://x.com/beemuvi/status/1914826975816176061",
    "https://help.beeminder.com/article/357-wakatime",
    "https://help.beeminder.com/article/78-trello",
    "https://help.beeminder.com/article/340-trydeepwork",
    "https://help.beeminder.com/article/293-twitter",
    "https://help.beeminder.com/article/88-urlminder"],
t: "2025-04-22",
}, { // ------------------------------------------------------------------------
f: true,
x: `Official launch of our Maayot autodata integration, with fancy landing page and Maayot's logo on the Beeminder front page, plus blog post`,
u: ["https://x.com/beemuvi/status/1915187506343227407",
    "https://blog.beeminder.com/maayot",
    "https://x.com/bmndr/status/1915184408640004271",
    "https://github.com/beeminder/integrations/issues/70",
    "https://github.com/beeminder/beeminder/issues/5191"],
d: "2025-04-22",
t: "2025-04-23",
}, { // ------------------------------------------------------------------------
x: `Tiny #bugfix with the Maayot integration: if we can't find your Maayot account when you're setting up your goal, we actually tell you that`,
u: ["https://x.com/beemuvi/status/1915187914071589255",
    "https://github.com/beeminder/beeminder/issues/5191"],   
t: "2025-04-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: New article for the Maayot autodata integration`,
u: ["https://x.com/beemuvi/status/1915188131097383145",
    "https://help.beeminder.com/article/369-maayot"],
t: "2025-04-23",
}, { // ------------------------------------------------------------------------
x: `Added a line to the email about failed charges to let people know they can manually force a retry of charges from the Payments page`,
u: ["https://x.com/beemuvi/status/1915518113057218824",
    "https://github.com/beeminder/beeminder/issues/5238",
    "https://github.com/beeminder/beeminder/pull/5242"],
t: "2025-04-24",
}, { // ------------------------------------------------------------------------
x: `Help docs: Todoist integration article mentions combining projects/tags with boolean-OR; plus rephrasings, rearranging, new links, and more for Withings`,
u: ["https://x.com/beemuvi/status/1915888400479227998",
    "https://help.beeminder.com/article/79-todoist",
    "https://help.beeminder.com/article/90-withings"],
t: "2025-04-25",
}, { // ------------------------------------------------------------------------
x: `Closed a loophole that allowed you to end a goal within the akrasia horizon in some sneaky convoluted cases by messing with the graph editor`,
u: ["https://x.com/beemuvi/status/1915910283887063215",
    "https://github.com/beeminder/beeminder/issues/1930",
    "https://github.com/beeminder/beeminder/pull/5237"],
d: "2025-04-25",
t: "2025-04-25",
}, { // ------------------------------------------------------------------------
x: "The StoryGraph integration was broken for several days. Related to a DDOS attack they were experiencing, but we got them to whitelist us, phew!",
u: ["https://x.com/beemuvi/status/1916993551227097358",
    "https://github.com/beeminder/beeminder/pull/5246"],
d: "2025-04-25",
t: "2025-04-28",
c: "added a descriptive user-agent header to the requests"
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a "Related Integrations" section to the language-learning integrations so they all link to each other`,
u: ["https://x.com/beemuvi/status/1916993739199025165",
    "https://help.beeminder.com/article/369-maayot"],
d: "2025-04-28",
t: "2025-04-28",
}, { // ------------------------------------------------------------------------
x: `Help docs: Clarifications and cross-links on the "how do I quit a goal?" article based on user confusion about goals about to end`,
u: ["https://x.com/beemuvi/status/1917361582847521251",
    "https://help.beeminder.com/article/44-how-do-i-quit-a-goal"],
t: "2025-04-29",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added feedback solicitation on new metrics for the YNAB article plus readability tweaks to the Zapier and Slack integration articles`,
u: ["https://x.com/beemuvi/status/1917361704608137469",
    "https://help.beeminder.com/article/359-ynab",
    "https://help.beeminder.com/article/87-zapier",
    "https://help.beeminder.com/article/116-slack"],
t: "2025-04-29",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
x: `Another #bugfix with the Maayot integration: pasting a bad URL (either nonsense or doesn't point to your Maayot settings) gives a nice error instead of silence`,
u: ["https://x.com/beemuvi/status/1917729823268692030",
    "https://github.com/beeminder/beeminder/pull/5251"],
c: `It says "that URL format looks sus"`,
d: "2025-04-30",
t: "2025-04-30",
}, { // ------------------------------------------------------------------------
x: `Yet more error checking for the Maayot integration: We don't let you choose more than 1 story per day as your commitment since that's the most Maayot offers`,
u: ["https://x.com/beemuvi/status/1917729922027773976",
    "https://github.com/beeminder/beeminder/pull/5251"],
d: "2025-04-30",
t: "2025-04-30",
}, { // ------------------------------------------------------------------------
x: `Also in Maayot goal setup: some error messages were flashing several times and/or disappearing too soon. Also nixed an errant "Euler" from a tooltip. #bugfix`,
u: ["https://x.com/beemuvi/status/1917730014868693206",
    "https://github.com/beeminder/beeminder/pull/5251"],
d: "2025-04-30",
t: "2025-04-30",
}, { // ------------------------------------------------------------------------
x: `One more for Maayot: Clicking the stepper up or down to change the rate you're committing to increments by ±1/7 so it's easy to pick, say, 2 per week`,
u: ["https://x.com/beemuvi/status/1917730103519502775",
    "https://github.com/beeminder/beeminder/pull/5251"],
d: "2025-04-30",
t: "2025-04-30",
}, /* --------------------------------------------------------- end 2025apr */ ]

batches['2025may'] = [{
}, { // ------------------------------------------------------------------------
x: `Not specific to Maayot, the up/down stepper buttons no longer ever allow you to step past whatever the upper/lower bounds are. #bugfix`,
u: ["https://x.com/beemuvi/status/1918377397923221608",
    "https://github.com/beeminder/beeminder/pull/5251"],
d: "2025-04-30",
t: "2025-05-02",
}, { // ------------------------------------------------------------------------
x: `Grandpatricide! The year of grandfathering for the last Beemium price hike ($50->$64) ended and we emailed those affected. Time for another price hike?`,
u: ["https://x.com/beemuvi/status/1918378106517442639",
    "https://github.com/beeminder/beeminder/issues/4153",
    "https://github.com/beeminder/beeminder/commit/90a4edc7690e4d2d73824447aa875dfb63b140e9"],
d: "2025-05-02",
}, { // ------------------------------------------------------------------------
x: `Help docs: More clarifications on Beeminder login for the iOS app article, plus smaller clarifications and tweaks for 3 other articles`,
u: ["https://x.com/beemuvi/status/1919541589573304835",
    "https://help.beeminder.com/article/60-ios-app",
    "https://help.beeminder.com/article/48-how-do-i-delete-my-account",
    "https://help.beeminder.com/article/47-how-do-i-delete-a-goal",
    "https://help.beeminder.com/article/46-what-happens-to-an-archived-goal"],
t: "2025-05-05",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a note to the Fitbit article about using Fitbit as a bridge to Beeminder from other services, plus links to other bridging integrations`,
u: ["https://x.com/beemuvi/status/1919541715523838412",
    "https://help.beeminder.com/article/11-fitbit"],
t: "2025-05-05",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a screenshot and details about the due-by table to the Android app (Beedroid) article, much asked-about in support`,
u: ["https://x.com/beemuvi/status/1919896411560440176",
    "https://help.beeminder.com/article/62-android-app#dueby"],
t: "2025-05-06",
}, { // ------------------------------------------------------------------------
x: `We made a new flash banner warning you when your Beeminder timezone doesn't match your browser's timezone (displays once a day)`,
u: ["https://x.com/beemuvi/status/1919904577270223063",
    "https://github.com/beeminder/beeminder/issues/3069",
    "https://github.com/beeminder/beeminder/pull/5248"],
d: "2025-05-06",
t: "2025-05-06",
}, { // ------------------------------------------------------------------------
x: `Help docs: Add a Related Integrations section to the TagTime article plus a link to a new community-driven Android implementation`,
u: ["https://x.com/beemuvi/status/1920265327788573003",
    "https://help.beeminder.com/article/64-tagtime"],
d: "2025-05-07",
t: "2025-05-07",
}, { // ------------------------------------------------------------------------
x: `There were a couple graph images on http://beeminder.com/overview that still showed yellow brick road style graphs. Modernized them to bright red line versions.`,
u: ["https://x.com/beemuvi/status/1920268626327650735",
    "https://github.com/beeminder/beeminder/issues/4074",
    "https://github.com/beeminder/beeminder/pull/5258"],
d: "2025-05-07",
t: "2025-05-07",
}, { // ------------------------------------------------------------------------
x: `Modernized the screenshot for setting a starting stakes and pledge cap on http://beeminder.com/overview`,
u: ["https://x.com/beemuvi/status/1920626895302926809",
    "https://github.com/beeminder/beeminder/pull/5258"],
t: "2025-05-08",
}, { // ------------------------------------------------------------------------
x: `Updated the webcopy on beeminder.com/overview to talk about pledge caps rather than "first derail typically free" which is less true now`,
u: ["https://x.com/beemuvi/status/1920627042728783966",
    "https://github.com/beeminder/beeminder/pull/5258"],
t: "2025-05-08",
}, { // ------------------------------------------------------------------------
x: `The rosy line is deprecated and now turned off by default for new graphs; we have plans for something better!`,
u: ["https://x.com/beemuvi/status/1920963752913932535",
    "https://github.com/beeminder/road/issues/268",
    "https://github.com/beeminder/beeminder/pull/5258"],
t: "2025-05-09",
}, { // ------------------------------------------------------------------------
x: `UVI#4572 got most of these but we finally got the stragglers: modernized the example graph images on the GmailZero and Withings landing pages`,
u: ["https://x.com/beemuvi/status/1920963932228813292",
    "https://github.com/beeminder/beeminder/issues/3814",
    "https://github.com/beeminder/beeminder/pull/5258"],
t: "2025-05-09",
}, { // ------------------------------------------------------------------------
x: `Updated the example goals section of beeminder.com/overview to fix whitespace usage (it was sqwunched together on the left, not using available space). #css`,
u: ["https://x.com/beemuvi/status/1922076408496508997",
    "https://github.com/beeminder/beeminder/pull/5261#event-17597626304",
    "https://github.com/beeminder/beeminder/issues/4074"],
d: `2025-05-09`,
t: `2025-05-12`,
c: `Before/after shots in the PR`,
}, { // ------------------------------------------------------------------------
x: `Shortened the "fitness & training" header to just "fitness". It was slightly redundant, and also wrapped at small screen sizes messing up the layout. #css`,
u: ["https://x.com/beemuvi/status/1922076489136079268",
    "https://github.com/beeminder/beeminder/pull/5261#event-17597626304",
    "https://github.com/beeminder/beeminder/issues/4074"],
d: `2025-05-09`,
t: `2025-05-12`,
c: `Before/after shots in the PR`,
}, { // ------------------------------------------------------------------------
x: `For group goals, we now send SMS reminders to any groupie with an active phone number for SMS (if the owner chooses SMS reminders)`,
u: ["https://x.com/beemuvi/status/1922441518003929558",
    "https://github.com/beeminder/beeminder/pull/5264"],
t: "2025-05-13",
}, { // ------------------------------------------------------------------------
x: `And we put more helpful info in the "this is a fallback for your SMS alerts" blurb in the fallback email in case SMS fails`,
u: ["https://x.com/beemuvi/status/1922441556071506384",
    "https://github.com/beeminder/beeminder/pull/5264"],
t: "2025-05-13",
}, { // ------------------------------------------------------------------------
x: `Oops, we broke the SMS reminders on Monday and were always falling back to email. #zombie #bugfix`,
u: ["https://x.com/beemuvi/status/1922803215529111798",
    "https://github.com/beeminder/beeminder/pull/5268"],
d: "2025-05-14",
c: `This was due to a dumb syntax error using assignment '=' instead of comparison '=='. Mortifying."`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Moved up the definition of akrasia in the article on the akrasia horizon and restructured accordingly, plus tweaks to 2 other articles`,
u: ["https://x.com/beemuvi/status/1922803301692715208",
    "https://help.beeminder.com/article/45-what-is-the-akrasia-horizon",
    "https://help.beeminder.com/article/321-ios-app-beta-testing",
    "https://help.beeminder.com/article/158-android-app-beta-testing"],
t: "2025-05-14",
}, { // ------------------------------------------------------------------------
x: `More robust fallback for SMS reminder failures; we now always fall back to email due to any problems on Beeminder's side at least (follow-on to UVI#5164)`,
u: ["https://x.com/beemuvi/status/1923165423433875803",
    "https://github.com/beeminder/beeminder/pull/5264",
    "https://github.com/beeminder/beeminder/issues/4378"],
t: "2025-05-15",
c: `Case where it failed: user had SMS turned on, but no phone number, and the job freaked out and failed. Now the if-statements are more thorough so it would only raise an error if Twilio returns an error (or times out or somesuch). Which we also ought to be more robust to.`,
}, { // ------------------------------------------------------------------------
x: `The "renew" link for expired services could cause you to wind up with two copies of the service stored (and then we wouldn't use the new/correct one) #bugfix`,
u: ["https://x.com/beemuvi/status/1923165735695618122",
    "https://github.com/beeminder/beeminder/issues/5255",
    "https://github.com/beeminder/beeminder/pull/5270"],
d: "2025-05-14",
t: "2025-05-15",
c: `Reported as Lichess dups, but could apply to any service showing up in the expired list`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Added more arguments and links to our article about Beeminder vs StickK, like how Beeminder can be your personal Pigouvian tax`,
u: ["https://x.com/beemuvi/status/1923499461243986290",
    "https://help.beeminder.com/article/49-why-should-i-use-beeminder-over-stickk",
    "https://blog.beeminder.com/pigou"],
t: "2025-05-16",
}, { // ------------------------------------------------------------------------
x: `Help docs: Edited how we talk about Beemium (superusers only) to not be mistakable for upselling, plus a typo fix in the Privacy article`,
u: ["https://x.com/beemuvi/status/1923499990879699264",
    "https://help.beeminder.com/article/114-can-i-specify-a-beneficiary-for-my-derailments",
    "https://help.beeminder.com/article/102-privacy"],
t: "2025-05-16",
}, { // ------------------------------------------------------------------------
x: `For the dialog box where you explicitly say you want to archive a derailed goal and accept the charge immediately, we added "this is non-refundable"`,
u: ["https://x.com/beemuvi/status/1924605941615677918",
    "https://github.com/beeminder/beeminder/issues/5271",
    "https://github.com/beeminder/beeminder/pull/5272"],
d: "2025-05-19",
t: "2025-05-19",
c: `This is the insta-archive dialog which tells users "we're gonna charge you this $X right now if you click that button; email support instead if you have a problem with that". Support Czar request."`,
}, { // ------------------------------------------------------------------------
x: `The cropping of the how-it-works graph image on beeminder.com/overview was bumping into the border uglily. Now cropped nicely. #css (sort of)`,
u: ["https://x.com/beemuvi/status/1924612972036686059",
    "https://github.com/beeminder/beeminder/issues/4074"],
d: "2025-05-19",
t: "2025-05-19",
}, { // ------------------------------------------------------------------------
x: `Added an example graph to the Metaminder landing page`,
u: ["https://x.com/beemuvi/status/1924976856509673477",
    "https://github.com/beeminder/beeminder/issues/4074",
    "https://github.com/beeminder/beeminder/issues/3814"],
t: "2025-05-20",
}, { // ------------------------------------------------------------------------
x: `More webcopy changes on beeminder.com/overview to keep up with Beeminder changes, such as customizable post-derail respite and fancier data-smoothing`,
u: ["https://x.com/beemuvi/status/1924977459516346851",
    "https://github.com/beeminder/beeminder/issues/4074",
    "https://blog.beeminder.com/smooth"],
t: "2025-05-20",
}, { // ------------------------------------------------------------------------
x: `Added a link to the Featured Gallery on beeminder.com/overview and made other copyedits`,
u: ["https://x.com/beemuvi/status/1925336132491030636",
    "https://github.com/beeminder/beeminder/pull/5278",
    "https://github.com/beeminder/beeminder/issues/4074"],
t: "2025-05-21",
}, { // ------------------------------------------------------------------------
x: `Fixed a tiny typo on the landing page of the Intend integration ("an Intend user", not "a Intend") plus more copyedit tweaks fussing with commas`,
u: ["https://x.com/beemuvi/status/1925336602014097796",
    "https://github.com/beeminder/beeminder/pull/5278",
    "https://github.com/beeminder/beeminder/issues/4074"],
t: "2025-05-21",
}, { // ------------------------------------------------------------------------
x: `All autodata goals now have a Settings section, for consistency, even if the specific integration doesn't implement letting you set things`,
u: ["https://x.com/beemuvi/status/1925697443104006602",
    "https://github.com/beeminder/beeminder/pull/5277"],
d: "2025-05-20",
t: "2025-05-22",
c: `E.g. Strava now has a section in settings, whereas it did not before`,
}, { // ------------------------------------------------------------------------
x: `Flash banners for errors/warnings/FYIs finally wrap when the words don't fit. Phew!`,
u: ["https://x.com/beemuvi/status/1925697591485804845",
    "https://github.com/beeminder/beeminder/issues/166",
    "https://github.com/beeminder/beeminder/pull/5276"],
d: "2025-05-20",
t: "2025-05-22",
}, { // ------------------------------------------------------------------------
x: `Flash banners are also more responsive to screen size in that the font size is adaptive. Yay mobile-friendliness.`,
u: ["https://x.com/beemuvi/status/1925697784818159739",
    "https://github.com/beeminder/beeminder/issues/166",
    "https://github.com/beeminder/beeminder/pull/5276"],
d: "2025-05-20",
t: "2025-05-22",
c: "There probably exist instances where this looks demonstrably worse now, because the wrapped text will be long and crowded -- in fact could potentially overflow the banner area? So there's prolly more work to be done, but I think it's definitely an improvement to be able to see the whole message on mobile and stuff...",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rearranged and clarified things and added new details in the 3 articles about account settings`,
u: ["https://x.com/beemuvi/status/1926042655051354489",
    "https://help.beeminder.com/article/109-account-details",
    "https://help.beeminder.com/article/110-apps-and-api",
    "https://help.beeminder.com/article/111-new-goal-defaults"],
t: "2025-05-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added information to the Pocket article about its imminent shutdown, what to do about it, and added a Related Integrations section to it`,
u: ["https://x.com/beemuvi/status/1927151766656721021",
    "https://help.beeminder.com/article/291-pocket"],
t: "2025-05-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added freeCodeCamp to the list of charities in the Goal Settings article; also we linked that to the freeCodeCamp article and edited that article`,
u: ["https://x.com/beemuvi/status/1927151868636971139",
    "https://help.beeminder.com/article/106-goal-settings",
    "https://help.beeminder.com/article/287-freecodecamp"],
t: "2025-05-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a "Related Autodata Integrations" section to all the coding integration articles so they link to each other`,
u: ["https://x.com/beemuvi/status/1927158176677351763",
    "https://help.beeminder.com/article/287-freecodecamp",
    "https://help.beeminder.com/article/288-codecombat",
    "https://help.beeminder.com/article/81-github",
    "https://help.beeminder.com/article/292-project-euler",
    "https://help.beeminder.com/article/357-wakatime"],
t: "2025-05-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: And same for all the time-tracking integrations: RescueTime, WakaTime, Toggl Track, and TagTime`,
u: ["https://x.com/beemuvi/status/1927158433708454226",
    "https://help.beeminder.com/article/357-wakatime",
    "https://help.beeminder.com/article/76-rescuetime",
    "https://help.beeminder.com/article/64-tagtime",
    "https://help.beeminder.com/article/155-toggl"],
t: "2025-05-26",
}, { // ------------------------------------------------------------------------
x: `Updated the Pocket landing page to say they're shutting down, link to our Readwise integration, and link to Pocket's post about exporting your data`,
u: ["https://x.com/beemuvi/status/1927614552725995727",
    "https://wwww.beeminder.com/pocket",
    "https://github.com/beeminder/beeminder/issues/5280",
    "https://github.com/beeminder/beeminder/pull/5282"],
d: "2025-05-26",
t: "2025-05-27",
}, { // ------------------------------------------------------------------------
x: `Also we removed the ability to create new Pocket goals and updated the help doc again, linking to forum discussion, etc`,
u: ["https://x.com/beemuvi/status/1927614740056179070",
    "https://help.beeminder.com/article/291-pocket",
    "https://forum.beeminder.com/t/rip-pocket-long-live-readwise-reader-what-else-are-folks-switching-to/12378",
    "https://github.com/beeminder/beeminder/issues/5280",
    "https://github.com/beeminder/beeminder/pull/5282"],
d: "2025-05-26",
t: "2025-05-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a link to timezone settings to the Deadline & Reminders article and a link to one of Nicky's goals as an example in the Privacy article`,
u: ["https://x.com/beemuvi/status/1927616922201563195",
    "https://help.beeminder.com/article/14-deadline",
    "https://help.beeminder.com/article/102-privacy"],
t: "2025-05-27",
}, { // ------------------------------------------------------------------------
x: `Years ago (UVI#2718) we made charges for new premium plans happen immediately (no 24-hour delay) but didn't do the same for premium upgrades till now`,
u: ["https://x.com/beemuvi/status/1928238520591630684",
    "https://github.com/beeminder/beeminder/issues/3184",
    "https://github.com/beeminder/beeminder/pull/5286"],
d: "2025-05-29",
t: "2025-05-29",
}, /* --------------------------------------------------------- end 2025may */ ]

batches['2025jun'] = [{
}, { // ------------------------------------------------------------------------
x: `Finally made the capitalization of RSSminder and URLminder consistent, including the logos on the front page`,
u: ["https://x.com/beemuvi/status/1929681501555441878",
    "https://github.com/beeminder/beeminder/pull/5288"],
d: "2025-06-02",
t: "2025-06-02",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added links and clarifications to 4 more articles in the Goal Settings section: PPRs, Data, Groupies, and Supporters`,
u: ["https://x.com/beemuvi/status/1930049416930701411",
    "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
    "https://help.beeminder.com/article/103-data-source",
    "https://help.beeminder.com/article/363-groupies",
    "https://help.beeminder.com/article/104-supporters"],
t: "2025-06-03",
}, { // ------------------------------------------------------------------------
x: `Similar to UVI#5215, the Uncle button blurb now clarifies that you're accepting the charge immediately, no legit check or undo or refund`,
u: ["https://x.com/beemuvi/status/1930412335908434372",
    "https://github.com/beeminder/beeminder/issues/5290",
    "https://github.com/beeminder/beeminder/pull/5291"],
t: "2025-06-04",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added explanation to the Graph Editor article plus small tweaks for clarity in the remaining 3 of the 11 articles in the Goal Settings section`,
u: ["https://x.com/beemuvi/status/1930674144439566468",
    "https://help.beeminder.com/article/99-graph-editor",
    "https://help.beeminder.com/article/101-reminders",
    "https://help.beeminder.com/article/18-respite",
    "https://help.beeminder.com/article/105-graph-settings"],
t: "2025-06-05",
}, { // ------------------------------------------------------------------------
x: `Help docs: Made a short article for our new third-party integration with Time Stream (also small tweaks to articles in the Historical Interest section)`,
u: ["https://x.com/beemuvi/status/1931107778724253925",
    "https://blog.beeminder.com/timestream",
    "https://help.beeminder.com/article/370-time-stream",
    "https://github.com/beeminder/beeminder/pull/5293"],
t: "2025-06-06",
}, { // ------------------------------------------------------------------------
f: true,
x: `New landing page for the official Time Stream autodata integration! https://www.beeminder.com/timestream`,
u: ["https://x.com/beemuvi/status/1932225110435635621",
    "https://github.com/beeminder/beeminder/pull/5293"],
t: "2025-06-09",
c: `Modeled on TaskRatchet and Intend`,
}, { // ------------------------------------------------------------------------
x: `Also we added Time Stream's logo to the front page and new goal creation gallery`,
u: ["https://x.com/beemuvi/status/1932225227091796235",
    "https://github.com/beeminder/beeminder/pull/5293"],
t: "2025-06-09",
}, { // ------------------------------------------------------------------------
x: `If you were in too easterly a timezone, we were decrementing the goal date by a day every time you hit submit on the commitment dial. Timezones are hard #bugfix`,
u: ["https://x.com/beemuvi/status/1932585243023978978",
    "https://github.com/beeminder/beeminder/issues/1025",
    "https://github.com/beeminder/beeminder/pull/5294"],
t: "2025-06-10",
c: "The user's client was getting the date as a string, and then converting it to a time in the local timezone before submitting. And since it was a date, not a full time, Javascript would assume midnight in your timezone. So if midnight in your timezone is still 'yesterday' in Eastern time, then we'd wind up off-by-one with the date we saved.",
}, { // ------------------------------------------------------------------------
x: `Help docs: Another freshening pass complete! Now looking for things it's safe to cut and prune. So far we made the "What Is Beeminder?" article a bit sleeker.`,
u: ["https://x.com/beemuvi/status/1932585329460203711",
    "https://help.beeminder.com/article/70-what-is-beeminder"],
t: "2025-06-10",
}, { // ------------------------------------------------------------------------
x: `On top of UVI#5233, did you notice we improved the RSSminder logo? It's nicer and more modern now, and the infinibee logo is more parsable as such. #bugfix`,
u: ["https://x.com/beemuvi/status/1932949050732786074",
    "https://github.com/beeminder/beeminder/issues/5211",
    "https://github.com/beeminder/beeminder/pull/5288"],
d: "2025-06-02",
t: "2025-06-11",
}, { // ------------------------------------------------------------------------
x: `Fixed a goofy, arcane bug where you got a 500-error from the API (instead of a useful error message) if you tried to pass nil for "yaw" or "dir". #bugfix`,
u: ["https://x.com/beemuvi/status/1932949165702853052",
    "https://github.com/beeminder/beeminder/issues/2939",
    "https://github.com/beeminder/beeminder/pull/5298"],
d: "2025-06-11",
t: "2025-06-11",
c: "Arcane because you're unlikely to ever actually encounter this bug unless you're Mary? Now it sensibly responds like 'yaw' can't be nil yo.",
}, { // ------------------------------------------------------------------------
x: `We added the Uncle button as an API endpoint and documented it in the API docs`,
u: ["https://x.com/beemuvi/status/1933312839579808149",
    "https://api.beeminder.com/#unclebutton",
    "https://github.com/beeminder/beeminder/issues/2376",
    "https://github.com/beeminder/apidocs/commit/ffc0dd7fc88f75f5fffb1853a506c1973b83cc63"],
c: "We sat on tweeting this forever because we wanted to update the API docs, then we did so but forgot to tweet it for another forever",
}, { // ------------------------------------------------------------------------
x: `Help docs: Cut 80 words and added 32 (about the link to the graph image) to the "How do I interpret the goal page" article`,
u: ["https://x.com/beemuvi/status/1933312907686916274",
    "https://help.beeminder.com/article/115-how-do-i-interpret-the-goal-page"],
t: "2025-06-12",
}, { // ------------------------------------------------------------------------
x: `We updated our snailmail address on contact page (we moved recently)`,
u: ["https://x.com/beemuvi/status/1933675060667297862",
    "https://github.com/beeminder/beeminder/issues/5284",
    "https://github.com/beeminder/beeminder/pull/5300"],
d: "2025-06-13",
t: "2025-06-13",
}, { // ------------------------------------------------------------------------
x: `We added a P.P.S. to the "You Derailed" email in the case where we suppress the charge because you already have one pending within the last 24 hours`,
u: ["https://x.com/beemuvi/status/1933675149976613330",
    "https://github.com/beeminder/beeminder/issues/3290",
    "https://github.com/beeminder/beeminder/pull/5299"],
d: "2025-06-13",
t: "2025-06-13",
c: "The gissue includes the text used; basically that we canceled it out of an abundance of caution but please reply to let us know either way",
}, { // ------------------------------------------------------------------------
x: `Gitminder wasn't letting you authorize Beeminder to read your GitHub as part of goal creation (doing it in User Settings still worked). #bugfix`,
u: ["https://x.com/beemuvi/status/1934762434339987671",
    "https://github.com/beeminder/beeminder/issues/5289",
    "https://github.com/beeminder/beeminder/pull/5304"],
d: "2025-06-16",
t: "2025-06-16",
c: `It would get stuck in a loop trying to verify your repo existed, before actually getting access to your GitHub, if it was your first GitHub goal. Basically it would give an error like "can't access that repo" instead of asking you for permission to access that repo. This bug has been happening since somewhere around removing the track-all-repos option. If you happened to already have authed us to read your GH (like by doing it in "Auth'd Services") then you could create a goal fine, however.`,
}, { // ------------------------------------------------------------------------
x: `In the case of expired GitHub auth where we link you to where to re-auth, the link was wrong! #bugfix`,
u: ["https://x.com/beemuvi/status/1934762506473623868",
    "https://github.com/beeminder/beeminder/issues/5302",
    "https://github.com/beeminder/beeminder/pull/5301"],
d: "2025-06-13",
t: "2025-06-16",
c: "See gissue for a before screenshot of what the error looked like",
}, { // ------------------------------------------------------------------------
x: `Also in GitHub goal setup, if we don't find the repo you gave us, we now give an extra hint about the format we're looking for.`,
u: ["https://x.com/beemuvi/status/1935119435045708097",
    "https://github.com/beeminder/beeminder/issues/5305",
    "https://github.com/beeminder/beeminder/pull/5307"],
d: "2025-06-17",
t: "2025-06-17",
}, { // ------------------------------------------------------------------------
x: `Our WakaTime integration wasn't catching all errors and the javascript on the page would break if that happened. Unsure if real users were affected. #bugfix`,
u: ["https://x.com/beemuvi/status/1935119665526927492",
    "https://github.com/beeminder/beeminder/pull/5304",
    "https://github.com/beeminder/beeminder/pull/5307/commits/f394a78730eed448e65df07b0cb0d7977f54a7fa",
    "https://github.com/beeminder/beeminder/pull/5307"],
d: "2025-06-17",
t: "2025-06-17",
c: `Unknown unknowns. Now we catch expected as well as unexpected errors. Real users were affected in expectation so we're counting this.`,
}, { // ------------------------------------------------------------------------
x: `We finally got all instances of "max pledge" changed to the less ambiguous "pledge cap"`,
u: ["https://x.com/beemuvi/status/1935472079396274285",
    "https://github.com/beeminder/beeminder/issues/5230",
    "https://github.com/beeminder/beeminder/pull/5308"],
t: "2025-06-18",
}, { // ------------------------------------------------------------------------
x: `We no longer let goals restart with non-standard stakes. Eg, if you had an old $1 pledge, your only option to restart will be at $5.`,
u: ["https://x.com/beemuvi/status/1935472627231113653",
    "https://github.com/beeminder/beeminder/issues/5230",
    "https://github.com/beeminder/beeminder/pull/5308"],
d: "2025-06-17",
t: "2025-06-18",
c: "Pledge schedule aka schedge",
}, { // ------------------------------------------------------------------------
x: `Help docs: Renovations (keywords, clarifications, related integrations section) to the article for the Time Stream integration`,
u: ["https://x.com/beemuvi/status/1935848451994185866",
    "https://help.beeminder.com/article/370-time-stream"],
t: "2025-06-19",
}, { // ------------------------------------------------------------------------
x: `Help docs: Removed 50 words and replaced an image in the "How do I interpret the graph" article, plus 60 words cut from the "What to do first" article`,
u: ["https://x.com/beemuvi/status/1935849320248680643",
    "https://help.beeminder.com/article/118-how-do-i-interpret-the-graph",
    "https://help.beeminder.com/article/32-what-do-i-do-first"],
t: "2025-06-19",
}, { // ------------------------------------------------------------------------
x: `Lots of small improvements to the goal restart page, like the pro-tip re: the exponential pledge schedule was floating unaligned, now put in its place #css`,
u: ["https://x.com/beemuvi/status/1936175715793486219",
    "https://github.com/beeminder/beeminder/issues/5230",
    "https://github.com/beeminder/beeminder/pull/5310"],
d: "2025-06-20",
t: "2025-06-20",
}, { // ------------------------------------------------------------------------
x: `Also the breadcrumb for "Back to USERNMAE/GOALNAME" was unaligned with the layout and had no padding. Now it lines up normal. #css #bugfix`,
u: ["https://x.com/beemuvi/status/1936175751977717973",
    "https://github.com/beeminder/beeminder/issues/5230",
    "https://github.com/beeminder/beeminder/pull/5310"],
d: "2025-06-20",
t: "2025-06-20",
}, { // ------------------------------------------------------------------------
x: `And the text box for putting in a starting buffer was wider than it needed to be. Now it matches what the same form piece looks like during goal setup. #css`,
u: ["https://x.com/beemuvi/status/1936175796789584171",
    "https://github.com/beeminder/beeminder/issues/5230",
    "https://github.com/beeminder/beeminder/pull/5310"],
d: "2025-06-20",
t: "2025-06-20",
}, { // ------------------------------------------------------------------------
x: `Finally, the "current value" input (for non-kyoom goals) had no explanation at all. Added (1) an 'e.g. current weight' type note, and (2) the goal units.`,
u: ["https://x.com/beemuvi/status/1936175834962051576",
    "https://github.com/beeminder/beeminder/issues/5230",
    "https://github.com/beeminder/beeminder/pull/5310"],
d: "2025-06-20",
t: "2025-06-20",
}, { // ------------------------------------------------------------------------
x: `Help docs: Fixed an error (or something that had become an error) in describing ratcheting in the "How do I change my goal?" article, plus trimmed 20-30 words`,
u: ["https://x.com/beemuvi/status/1937655209230225453",
    "https://help.beeminder.com/article/54-how-do-i-change-my-goal"],
t: "2025-06-24",
}, { // ------------------------------------------------------------------------
x: `Help docs: Removed 100 words, added 50 new ones, rearranged lots of others in the "What's the best way to beemind ___?" article`,
u: ["https://x.com/beemuvi/status/1937656093108576658",
    "https://help.beeminder.com/article/120-whats-the-best-way-to-beemind"],
t: "2025-06-24",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rearranged and trimmed the "weekly rate" article (80 words sleeker) and similarly for the "when does my week start?" article`,
u: ["https://x.com/beemuvi/status/1938016934601363903",
    "https://help.beeminder.com/article/339-how-do-i-set-a-goal-with-a-weekly-rate",
    "https://help.beeminder.com/article/123-weekstart"],
t: "2025-06-25",
}, { // ------------------------------------------------------------------------
x: `Help docs: Documented a hopefully temporary limitation of the Skritter integration (learn/test time vs study/review time)`,
u: ["https://x.com/beemuvi/status/1938017059428044936",
    "https://help.beeminder.com/article/89-skritter"],
t: "2025-06-25",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
x: `Added sqrt (square root) as an aggday function. It's another way to incentivize daily consistency over getting ahead. HT Eino Gourdin`,
u: ["https://x.com/beemuvi/status/1938386515048210650",
    "https://github.com/beeminder/road/issues/272",
    "https://github.com/beeminder/beeminder/issues/3212",
    "https://github.com/beeminder/beeminder/pull/5313"],
t: "2025-06-26",
}, { // ------------------------------------------------------------------------
x: `In the ratchet UI, we got rid of the "you have X days/units left till derail" microcopy and put that X as the default and max amount to ratchet to`,
u: ["https://x.com/beemuvi/status/1938386712285352291",
    "https://github.com/beeminder/beeminder/issues/4045",
    "https://github.com/beeminder/beeminder/pull/5314"],
t: "2025-06-26",
}, { // ------------------------------------------------------------------------
x: `We've been wanting to slip a "(∑)" somewhere useful as an indicator of cumulative goals. Now we're trying it out on the Add Data button on your dashboard.`,
u: ["https://x.com/beemuvi/status/1938729725758972030",
    "https://github.com/beeminder/beeminder/issues/3759",
    "https://github.com/beeminder/beeminder/pull/5316"],
d: "2025-06-27",
t: "2025-06-27",
c: `That's sigma, for greppability`,
}, { // ------------------------------------------------------------------------
x: `In addition to your dashboard, we added the summing indicator to the goal page too and there's a mildly explanatory tooltip if you hover your mouse over it.`,
u: ["https://x.com/beemuvi/status/1938730231566868993",
    "https://github.com/beeminder/beeminder/issues/3759",
    "https://github.com/beeminder/beeminder/pull/5316"],
d: "2025-06-27",
t: "2025-06-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: We clarified in the Postminder and RSSminder articles about neither integration picking up on private posts`,
u: ["https://x.com/beemuvi/status/1939834542598361341",
    "https://help.beeminder.com/article/368-postminder",
    "https://help.beeminder.com/article/331-rssminder"],
t: "2025-06-30",
}, { // ------------------------------------------------------------------------
x: `Help docs: Quite a bit of rearranging/rewriting of the "Why does Beeminder think it's tomorrow/yesterday?" article, plus new links and keywords`,
u: ["https://x.com/beemuvi/status/1939836584838463802",
    "https://help.beeminder.com/article/122-why-does-beeminder-think-its-already-tomorrow"],
t: "2025-06-30",
}, /* --------------------------------------------------------- end 2025jun */ ]

batches['2025jul'] = [{
}, { // ------------------------------------------------------------------------
x: `Help docs: Significantly cut down the words in the meta-help article (what to do if you're not finding the answers in the help docs) and added headings to it`,
u: ["https://x.com/beemuvi/status/1940192457943392756",
    "https://help.beeminder.com/article/351-i-need-help"],
t: "2025-07-01",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added Oura and Make to the "example goal: 10k steps/day" article, more trimming/rephrasing, plus cutting of rambling in "example goal: run 3x/week"`,
u: ["https://x.com/beemuvi/status/1940195839034761351",
    "https://help.beeminder.com/article/71-example-10k-steps",
    "https://help.beeminder.com/article/72-example-goal-run-3-times-per-week"],
t: "2025-07-01",
}, { // ------------------------------------------------------------------------
x: `There was a bug with goal page link previews that made them show the preview for the Beeminder front page on some platforms, including the forum. #bugfix`,
u: ["https://x.com/beemuvi/status/1940554493483159740",
    "https://github.com/beeminder/beeminder/issues/3533",
    "https://github.com/beeminder/beeminder/issues/5005",
    "https://github.com/beeminder/beeminder/pull/5318"],
d: "2025-07-01",
t: "2025-07-02",
c: "So UVI#4128 is finally true. Huge sigh of relief for posting links in Discord and the forum.",
}, { // ------------------------------------------------------------------------
x: `Oops, the new square root (sqrt) aggday was throwing an error. #bugfix`,
u: ["https://x.com/beemuvi/status/1940554584457728344",
    "https://github.com/beeminder/beeminder/issues/3212"],
t: "2025-07-02",
c: `Needed to deploy latest Beebrain`,
}, { // ------------------------------------------------------------------------
x: `Help docs: In the "Example goal: gym 5x/week" article we cut some words, added them back elsewhere, and fixed some funky formatting`,
u: ["https://x.com/beemuvi/status/1940878961850114369",
    "https://help.beeminder.com/article/92-example-goal-go-to-the-gym-4-times-per-week"],
t: "2025-07-03",
}, { // ------------------------------------------------------------------------
x: `Help docs: In the "Example goal: less time on Facebook" article we pared it down by linking out to other pages plus smoothing of the one for eating more veggies`,
u: ["https://x.com/beemuvi/status/1940879141764841785",
    "https://help.beeminder.com/article/93-example-goal-spend-less-time-on-facebook",
    "https://help.beeminder.com/article/94-example-goal-eat-14-servings-of-vegetables-per-week"],
t: "2025-07-03",
}, { // ------------------------------------------------------------------------
x: `Help docs: Streamlined and added a mention of Maayot to the "Example goal: language learning" article, and improved consistency of the article on goal types`,
u: ["https://x.com/beemuvi/status/1941285318524895526",
    "https://help.beeminder.com/article/95-example-goal-learn-a-new-language",
    "https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types"],
t: "2025-07-04",
}, { // ------------------------------------------------------------------------
x: `Help docs: Streamlined the article on free goals and added a note the group goals article about how to get removed or remove someone from a group goal`,
u: ["https://x.com/beemuvi/status/1941285386531283211",
    "https://help.beeminder.com/article/336-how-many-goals-can-i-make-for-free",
    "https://help.beeminder.com/article/362-what-is-a-group-goal"],
t: "2025-07-04",
}, { // ------------------------------------------------------------------------
x: `Fixed up the link previews for the autodata integration landing pages, eg, beeminder.com/gmailzero`,
u: ["https://x.com/beemuvi/status/1942348190738768275",
    "https://github.com/beeminder/beeminder/issues/5297",
    "https://github.com/beeminder/beeminder/pull/5321"],
d: "2025-07-04",
}, { // ------------------------------------------------------------------------
x: `As part of working our way through all the integration link previews, we've used the Infinibee image for any that don't have their own header image`,
u: ["https://x.com/beemuvi/status/1942348282799481182",
    "https://github.com/beeminder/beeminder/pull/5321"],
d: "2025-07-04",
}, { // ------------------------------------------------------------------------
x: `Fixed the janky dropdown menu in the Prototype Graph Editor (also moved the hosting from Glitch to Render but that part's not user-visible, probably)`,
u: ["https://x.com/beemuvi/status/1942707859156037755",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road"],
d: "2025-07-08",
t: "2025-07-08",
}, { // ------------------------------------------------------------------------
x: `Fixed the link preview and favicons for graph.beeminder.com`,
u: ["https://x.com/beemuvi/status/1942715856250888319",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road"],
d: "2025-07-08",
t: "2025-07-08",
}, { // ------------------------------------------------------------------------
x: `Also fixed the top yellow bar of the graph editor, which was missing the Beeminder banner/logo`,
u: ["https://x.com/beemuvi/status/1942717105629167838",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road"],
d: "2025-07-08",
t: "2025-07-08",
}, { // ------------------------------------------------------------------------
x: `We now send a lifecycle email *before* your goal reaches its end date, prompting you to re-up it or whatnot. HT Clive`,
u: ["https://x.com/beemuvi/status/1943089124094939196",
    "https://github.com/beeminder/beeminder/issues/593",
    "https://github.com/beeminder/beeminder/pull/5324",
    "https://github.com/beeminder/beeminder/pull/5327"],
d: "2025-07-09",
t: "2025-07-09",
}, { // ------------------------------------------------------------------------
x: `Help docs: Serious streamlining of the pause-my-goals article (100 fewer words) plus rearranging, plus less major rewriting of 3 other articles`,
u: ["https://x.com/beemuvi/status/1943443439888248886",
    "https://help.beeminder.com/article/98-can-i-put-my-goal-on-pause-for-a-little-bit",
    "https://help.beeminder.com/article/52-why-cant-i-create-a-do-less-odometer-whittle-down",
    "https://help.beeminder.com/article/55-what-is-safety-buffer",
    "https://help.beeminder.com/article/56-can-i-get-rid-of-extra-safety-buffer"],
t: "2025-07-10",
}, { // ------------------------------------------------------------------------
x: `More cosmetic improvements to the prototype Visual Graph Editor: screenshot on the login page and placeholder text for some date fields`,
u: ["https://x.com/beemuvi/status/1943446259605626899",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road"],
t: "2025-07-10",
}, { // ------------------------------------------------------------------------
x: `Added a parameter to API endpoints that return goal objects to exclude the 'road*' fields, because those can get very large in some cases. Also updated docs.`,
u: ["https://x.com/beemuvi/status/1943821908992307238",
    "https://github.com/beeminder/beeminder/issues/5323",
    "https://github.com/beeminder/beeminder/pull/5329"],
d: "2025-07-11",
t: "2025-07-11",
c: `I.e., "emaciated", cuz it's even skinnier. Get it? Except maybe that's not necessarily true?`,
}, { // ------------------------------------------------------------------------
x: `Made a pitch in the webcopy for giving us a chance to debug your goal problems before you delete it, and added a "just send feedback" button to the form.`,
u: ["https://x.com/beemuvi/status/1943822027607224748",
    "https://github.com/beeminder/beeminder/issues/3174",
    "https://github.com/beeminder/beeminder/pull/5332"],
d: "2025-07-11",
t: "2025-07-11",
c: `See PR for screenshots`,
}, { // ------------------------------------------------------------------------
x: `Also we made the two buttons rearrange themselves when the screen is too small to show them side-by-side and otherwise be mobile-friendly`,
u: ["https://x.com/beemuvi/status/1944906227663917057",
    "https://github.com/beeminder/beeminder/issues/3174",
    "https://github.com/beeminder/beeminder/pull/5332"],
d: "2025-07-11",
t: "2025-07-14",
}, { // ------------------------------------------------------------------------
x: `Typo fix ("does derail" -> "doesn't derail") in the FAQ, HT user Emily`,
u: ["https://x.com/beemuvi/status/1944906346874462707",
    "https://www.beeminder.com/faq",
    "https://github.com/beeminder/beeminder/pull/5334"],
d: "2025-07-14",
t: "2025-07-14",
}, { // ------------------------------------------------------------------------
x: `We let Codebuff have its way with the #css in the visual graph editor and it added hover effects, rounded corners, cursor styles for clickability, ...`,
u: ["https://x.com/beemuvi/status/1945263680784097445",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road"],
d: "2025-07-14",
t: "2025-07-15",
}, { // ------------------------------------------------------------------------
x: `More graph editor #css improvements: better padding, more consistent margins, more button-effects (pressed/unpressed), and faded transitions in forms`,
u: ["https://x.com/beemuvi/status/1945263800065659351",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road"],
d: "2025-07-14",
t: "2025-07-15",
}, { // ------------------------------------------------------------------------
x: `Finally, we tweaked some of the webcopy and made the banner link back to beeminder.com`,
u: ["https://x.com/beemuvi/status/1945264011781484735",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road"],
d: "2025-07-15",
t: "2025-07-15",
}, { // ------------------------------------------------------------------------
x: `Help docs: Streamlining, clarifying, down-slimming of the megabreak article and 3 other articles`,
u: ["https://x.com/beemuvi/status/1945609512435814889",
    "https://help.beeminder.com/article/154-can-i-schedule-breaks-on-many-goals-at-once",
    "https://help.beeminder.com/article/57-what-if-i-only-want-to-do-my-goal-on-weekdays",
    "https://help.beeminder.com/article/58-what-if-i-only-want-to-do-something-once-a-month",
    "https://help.beeminder.com/article/367-what-happens-when-i-reach-my-goal-total-end-date"],
t: "2025-07-16",
}, { // ------------------------------------------------------------------------
x: `Added the "new day has dawned banner" (previously just on goal pages: UVI#4107) to the dashboard, based on whatever your most urgent goal is`,
u: ["https://x.com/beemuvi/status/1945995917880074514",
    "https://github.com/beeminder/beeminder/issues/4806"],
d: "2025-07-17",
t: "2025-07-17",
}, { // ------------------------------------------------------------------------
x: `Help docs: Fixed a copy/paste error in the Maayot article, added related integrations to table of contents for all the language-learning integration articles`,
u: ["https://x.com/beemuvi/status/1945996020695081114",
    "https://help.beeminder.com/article/89-skritter",
    "https://help.beeminder.com/article/80-duolingo",
    "https://help.beeminder.com/article/369-maayot",
    "https://help.beeminder.com/article/290-clozemaster"],
d: "2025-07-17",
t: "2025-07-17",
}, { // ------------------------------------------------------------------------
x: `Fixed up the alignment and margin of the user-avatar image in the site header. It's centered relative to the nav bar links now.`,
u: ["https://x.com/beemuvi/status/1946301323600969907",
    "https://github.com/beeminder/beeminder/issues/4803",
    "https://github.com/beeminder/beeminder/pull/5338"],
d: "2025-07-17",
t: "2025-07-18",
}, { // ------------------------------------------------------------------------
x: `Also fixed the dropdown arrows in the main nav bar so that they are aligned on the same horizontal line`,
u: ["https://x.com/beemuvi/status/1946301562726543853",
    "https://github.com/beeminder/beeminder/issues/4803",
    "https://github.com/beeminder/beeminder/pull/5338"],
d: "2025-07-17",
t: "2025-07-18",
c: `After screenshot in the gissue`,
}, { // ------------------------------------------------------------------------
x: `Oops, weird bug introduced in the previous UVI that made the arrow move itself when clicked and unclicked. #css #bugfix`,
u: ["https://x.com/beemuvi/status/1947437719157936247",
    "https://github.com/beeminder/beeminder/pull/5340"],
t: "2025-07-21",
c: `CSS rule was too specific`,
}, { // ------------------------------------------------------------------------
x: `We updated the API docs to mention the $1 charge floor`,
u: ["https://x.com/beemuvi/status/1947437895129899502",
    "https://api.beeminder.com/#charge",
    "https://github.com/beeminder/beeminder/issues/612",
    "https://github.com/beeminder/apidocs/pull/50"],
d: "2025-07-21",
t: "2025-07-21",
}, { // ------------------------------------------------------------------------
x: `Important #bugfix for restarting weekends-off-enabled goals: the first weekend off after restarting wasn't getting scheduled!`,
u: ["https://x.com/beemuvi/status/1947787497934889352",
    "https://github.com/beeminder/beeminder/issues/1308",
    "https://github.com/beeminder/beeminder/pull/5341"],
d: "2025-07-21",
t: "2025-07-22",
}, { // ------------------------------------------------------------------------
x: `We now explicitly reset weekends-off to off on restart, with new webcopy explaining this. (If you then turn it on, we do schedule the upcoming weekend off)`,
u: ["https://x.com/beemuvi/status/1947787679250452969",
    "https://github.com/beeminder/beeminder/issues/1308",
    "https://github.com/beeminder/beeminder/pull/5341"],
d: "2025-07-21",
t: "2025-07-22",
c: "Note that it won't schedule a break for the weekend if you're already in the middle of it. Also it warns you if you no longer have the premium plan that lets you turn weekends-off back on. So this is also a slight bit of loophole closing.",
}, { // ------------------------------------------------------------------------
x: `Critical #bugfix: We would erase future changes in your red line if your goal was set as Value+Rate and you used the commitment dial to change the final rate`,
u: ["https://x.com/beemuvi/status/1948134276056408338",
    "https://github.com/beeminder/beeminder/issues/4957",
    "https://github.com/beeminder/beeminder/pull/5343"],
d: "2025-07-21",
t: "2025-07-23",
c: "Screenshots in the PR"
}, { // ------------------------------------------------------------------------
x: `Help docs: Rewording and the update of an old screenshot from 2018 in the goal stats article, plus tweaks, simplifications, and rephrasings in 2 other articles`,
u: ["https://x.com/beemuvi/status/1948134415076593990",
    "https://help.beeminder.com/article/119-what-are-the-goal-statistics",
    "https://help.beeminder.com/article/124-my-goal-doesnt-make-any-sense",
    "https://help.beeminder.com/article/117-can-i-start-my-goal-over"],
t: "2025-07-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: Cutting and rephrasing in the Do-More Goals article, plus new link, plus adding and rephrasing things in the Restarting Archived Goals article`,
u: ["https://x.com/beemuvi/status/1948527946098246087",
    "https://help.beeminder.com/article/66-do-more-goals",
    "https://help.beeminder.com/article/358-can-i-restart-an-archived-goal"],
t: "2025-07-24",
}, { // ------------------------------------------------------------------------
x: `Emailed the Very Old PayPal-only users threatening to delete their accounts if they don’t create a goal. We already tried slathering them up with honey (money).`,
u:["https://x.com/beemuvi/status/1948528180442398856",
   "https://github.com/beeminder/beeminder/pull/5339"],
t: "2025-07-24",
c: `The honey-slathering was UVI#4746`,
}, { // ------------------------------------------------------------------------
x: `If you're on the premium page wanting to sign up to a paid plan but have to create an account first, we now send you back to /premium when you've done that`,
u: ["https://x.com/beemuvi/status/1948824597157347489",
    "https://www.beeminder.com/premium",
    "https://github.com/beeminder/beeminder/issues/726",
    "https://github.com/beeminder/beeminder/pull/5342",
    "https://github.com/beeminder/beeminder/pull/5346"],
d: "2025-07-24",
t: "2025-07-25",
c: "AKA remember when the user wants to pay us! Previously we'd send you to your dashboard after signing up. HT Clive. Nice little moneyfire extinguished.",
}, { // ------------------------------------------------------------------------
x: `Help docs: Cutting, rephrasing, line-break-tweaking in the Do-Less Goals article plus quite a bit of cutting of wordiness (plus rearranging) in the PPR article`,
u: ["https://x.com/beemuvi/status/1948852926447026552",
    "https://help.beeminder.com/article/67-do-less-goals",
    "https://help.beeminder.com/article/157-pessimistic-presumptive-reports"],
t: "2025-07-25",
}, { // ------------------------------------------------------------------------
x: `We valiantly rescued the servers from a major Linode outage, delayed charges for those who derailed during it, emailed them, and improved the downtime checklist`,
u: ["https://x.com/beemuvi/status/1949981951332380714",
    "https://github.com/beeminder/beeminder/wiki/Beeminder-Downtime-Checklist",
    "https://status.beeminder.com"],
d: "2025-07-27",
t: "2025-07-28",
c: `In particular, we could've reduced the downtime a lot if we'd realized the database server was accessible to other Beeminder servers even when it wasn't accessible to us directly`,
}, { // ------------------------------------------------------------------------
x: `Thanks to the downtime, we fixed a regression from UVI#4747 and got rid of the stale version of the poppy page that led to it regressing`,
u: ["https://x.com/beemuvi/status/1949982315515429216",
    "https://status.beeminder.com",
    "https://github.com/beeminder/beeminder/issues/4699",
    "https://github.com/beeminder/beeploy/pull/170",
    "https://github.com/beeminder/beeminder/pull/5352"],
d: "2025-07-28",
t: "2025-07-28",
c: `Master copy is in the beeploy repo now; also updated the poppytoggle instructions`,
}, { // ------------------------------------------------------------------------
x: `Habitica started enforcing the inclusion of a special header for API calls, which broke our integration. But now we include the thing so it works again! #bugfix`,
u: ["https://x.com/beemuvi/status/1950344553128743366",
    "https://forum.beeminder.com/t/integration-issue-habitica-integration-not-working-29-07-25/12492?u=dreev",
    "https://github.com/HabitRPG/habitica/wiki/API-Usage-Guidelines",
    "https://github.com/beeminder/beeminder/pull/5354"],
d: "2025-07-29",
t: "2025-07-29",
c: `Namely the X-Client header`,
}, { // ------------------------------------------------------------------------
x: "We now link to Honeygrams on the payments page. Previously we only sent out links to this in, e.g., Hooliday (TM) Promotions.",
u: ["https://x.com/beemuvi/status/1950346231118454839",
    "https://github.com/beeminder/beeminder/issues/4617",
    "https://github.com/beeminder/beeminder/pull/5355"],
d: "2025-07-29",
t: "2025-07-29",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a Related Autodata Integrations section to all the Zapier-like things`,
u: ["https://x.com/beemuvi/status/1950703086051447247",
    "https://help.beeminder.com/article/86-ifttt",
    "https://help.beeminder.com/article/87-zapier",
    "https://help.beeminder.com/article/318-make-formerly-integromat",
    "https://help.beeminder.com/article/364-curlex",
    "https://help.beeminder.com/article/323-metaminder#related",
    "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.beeminder/"],
d: "2025-07-29",
t: "2025-07-30",
}, { // ------------------------------------------------------------------------
x: `Help docs: Also added RSSminder to the collection of meta-ish autodata integrations and fixed at least one copy/paste error in making these sections consistent`,
u: ["https://x.com/beemuvi/status/1950703213923221508",
    "https://help.beeminder.com/article/331-rssminder#related"],
d: "2025-07-30",
t: "2025-07-30",
}, { // ------------------------------------------------------------------------
x: `Help docs: Cut lots of words from the Custom Goals article, hopefully making it more readable, plus added sqrt to the aggday options`,
u: ["https://x.com/beemuvi/status/1951063458973360326",
    "https://help.beeminder.com/article/97-custom-goals"],
d: "2025-07-31",
t: "2025-07-31",
}, { // ------------------------------------------------------------------------
x: `Help docs: Trimmed and reworked the Weight Loss/Gain Goals article, plus smaller edits/trimming to the Whittle Down and Odometer Goals articles`,
u: ["https://x.com/beemuvi/status/1951063576812355776",
    "https://help.beeminder.com/article/96-weight-gain-loss-goals",
    "https://help.beeminder.com/article/69-whittle-down-goals",
    "https://help.beeminder.com/article/68-odometer-goals"],
t: "2025-07-31",
}, /* --------------------------------------------------------- end 2025jul */ ]

batches['2025aug'] = [{
}, { // ------------------------------------------------------------------------
x: `A while back the Beeminder infinibee logo got lost from the forum header. Now we've restored it, and made it link to the Beeminder front page`,
u: ["https://x.com/beemuvi/status/1951432251373396473",
    "https://forum.beeminder.com",
    "https://forum.beeminder.com/admin/customize/themes/6/common/js/edit?safe_mode=no_themes"],
d: "2025-08-01",
t: "2025-08-01",
}, { // ------------------------------------------------------------------------
x: `We bumped up the price of Beemium to $81, because that's the next square number. And to discourage people from buying it.`,
u: ["https://x.com/beemuvi/status/1951432434597372225",
    "https://blog.beeminder.com/boobeemium",
    "https://github.com/beeminder/beeminder/pull/5357"],
d: "2025-08-01",
t: "2025-08-01",
}, { // ------------------------------------------------------------------------
x: `Sent grandfathering emails to current Beemium subscribers to let them know the countdown starts now, and they'll be bumped to the higher price in a year`,
u: ["https://x.com/beemuvi/status/1952484735755960542",
    "https://www.beeminder.com/premium"],
d: "2025-08-01",
t: "2025-08-04",
c: `Didn't include lifetime subscribers, since you already paid all your money`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Streamlining and clarifying notes added to "how do I enter data?" plus slimming down and rephrasing in "what is my data?"`,
u: ["https://x.com/beemuvi/status/1956470234606649464",
    "https://help.beeminder.com/article/37-how-do-i-enter-data-to-my-goal",
    "https://help.beeminder.com/article/36-what-is-my-data"],
t: "2025-08-15",
}, { // ------------------------------------------------------------------------
x: `Help docs: Across 4 adding-data articles we added links and clarifications, removed less relevant stuff, and added discussion of adding past data via mobile`,
u: ["https://x.com/beemuvi/status/1957590013581095256",
    "https://help.beeminder.com/article/38-what-happens-if-i-forgot-to-enter-data",
    "https://help.beeminder.com/article/39-how-do-i-fix-incorrect-data",
    "https://help.beeminder.com/article/40-can-anybody-else-add-data-to-my-goal",
    "https://help.beeminder.com/article/113-can-i-import-previous-data"],
t: "2025-08-18",
}, { // ------------------------------------------------------------------------
x: `Help docs: Corrected a wrong explanation of where to enter a URL to export datapoints in the "Can I export my data?" article (plus minor rewording)`,
u: ["https://x.com/beemuvi/status/1957590289079759066",
    "https://help.beeminder.com/article/41-can-i-export-my-data"],
t: "2025-08-18",
}, { // ------------------------------------------------------------------------
x: `Help docs: By popular demand, added a section on discounts to the "how much does Beeminder cost?" article`,
u: ["https://x.com/beemuvi/status/1957938784575852873",
    "https://help.beeminder.com/article/19-how-much-does-beeminder-cost"],
t: "2025-08-19",
}, { // ------------------------------------------------------------------------
x: `Help docs: Cut a big repetitive chunk out of the switching-goal-units article, plus deleted wordiness and reorganized and reworded the "when do I pay?" article`,
u: ["https://x.com/beemuvi/status/1957938917614973005",
    "https://help.beeminder.com/article/42-switching-goal-units",
    "https://help.beeminder.com/article/324-when-do-i-pay"],
t: "2025-08-19",
}, { // ------------------------------------------------------------------------
f: true,
x: `Added an alternate graph view to the goal page. Click your graph and it becomes zoomable and pan-able!`,
u: ["https://x.com/beemuvi/status/1958315090509492666",
    "https://github.com/beeminder/beeminder/issues/454",
    "https://github.com/beeminder/beeminder/pull/5362"],
d: "2025-08-19",
t: "2025-08-20",
c: "Dynagraphs baby step. HT Clive.",
}, { // ------------------------------------------------------------------------
f: true,
x: `Related new feature: hover over the datapoints in the dynamic graph view to see details about them`,
u: ["https://x.com/beemuvi/status/1958315167487504671",
    "https://github.com/beeminder/beeminder/issues/454",
    "https://github.com/beeminder/beeminder/pull/5362"],
d: "2025-08-19",
t: "2025-08-20",
}, { // ------------------------------------------------------------------------
x: `Fixed a bug with the zoomable graphs where the datapoints could be plotted on the wrong day if you had a non-midnight deadline, leading to wrong color or worse`,
u: ["https://x.com/beemuvi/status/1958676891784946006",
    "https://github.com/beeminder/beeminder/issues/5364",
    "https://github.com/beeminder/beeminder/pull/5365",
    "https://github.com/beeminder/beeminder/pull/5366"],
d: "2025-08-20",
t: "2025-08-21",
c: `Sometimes even wrongly showed skull and crossbones`,
}, { // ------------------------------------------------------------------------
x: `We briefly showed interactive graphs to others for goals with non-public data, or hide-y axis settings. #bugfix`,
u: ["https://x.com/beemuvi/status/1958677010999648316",
    "https://github.com/beeminder/beeminder/issues/5364",
    "https://github.com/beeminder/beeminder/pull/5365",
    "https://github.com/beeminder/beeminder/pull/5366"],
d: "2025-08-20",
t: "2025-08-21",
}, { // ------------------------------------------------------------------------
x: `Relatedly, we no longer offer the tooltip ("Click for zoomable graph"), and then give an error response, if you're not authorized to see the zoomable graph`,
u: ["https://x.com/beemuvi/status/1958677548721930527",
    "https://github.com/beeminder/beeminder/issues/5364",
    "https://github.com/beeminder/beeminder/pull/5365",
    "https://github.com/beeminder/beeminder/pull/5366"],
d: "2025-08-20",
t: "2025-08-21",
c: `Even if you weren't authorized to see the interactive graph, we'd give the 'click to zoom' hint. Then when you clicked, we'd show an error banner like "you're not authorized"`,
}, /* --------------------------------------------------------- end 2025aug */ ]

batches['2025sep'] = [{
}, { // ------------------------------------------------------------------------
x: `Help docs: In the payment methods doc, pared it down, rephrased, and added a note about slow honey money purchases via PayPal`,
u: ["https://help.beeminder.com/article/27-what-payment-methods-are-available",
    "https://x.com/beemuvi/status/1963021508877680694"],
t: "2025-09-02",
}, { // ------------------------------------------------------------------------
x: `Help docs: In "what happens if a charge fails?" we rearranged, reworded, trimmed, and clarified what deadbeating means in the smartphone apps`,
u: ["https://x.com/beemuvi/status/1963356826155778285",
    "https://help.beeminder.com/article/30-what-happens-if-a-charge-fails"],
t: "2025-09-03",
}, { // ------------------------------------------------------------------------
x: `Interactive graphs on the goal page for goals with the aura turned on were broken. So we turned off the aura when initializing interactive graphs. #bugfix`,
u: ["https://x.com/beemuvi/status/1963380445795815441",
    "https://github.com/beeminder/beeminder/issues/5368",
    "https://github.com/beeminder/beeminder/pull/5369"],
d: "2025-09-01",
t: "2025-09-03",
}, { // ------------------------------------------------------------------------
x: `We changed the logo and text for our Metaminder integration in our integrations gallery, due to user confusion`,
u: ["https://x.com/beemuvi/status/1963376979195171323",
    "https://forum.beeminder.com/t/not-able-to-set-new-goals-help/12520/4"],
d: "2025-09-02",
t: "2025-09-03",
}, { // ------------------------------------------------------------------------
x: `Help docs: Replaced repetitive verbiage in the "decrease my pledge" doc with link to the one on pledge caps, plus minor tidying/rewording in 4 other articles`,
u: ["https://x.com/beemuvi/status/1963706205685350427",
    "https://help.beeminder.com/article/21-can-i-decrease-the-pledge-on-my-goal",
    "https://help.beeminder.com/article/20-how-much-do-i-pledge-on-my-goals",
    "https://help.beeminder.com/article/343-can-i-increase-the-pledge-on-my-goal",
    "https://help.beeminder.com/article/23-can-i-have-goals-without-pledges",
    "https://help.beeminder.com/article/24-how-do-i-manage-my-subscription"],
t: "2025-09-04",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added advice against too-high pledge caps in the pledge caps article, plus rewording and trimming in that and 2 other articles`,
u: ["https://x.com/beemuvi/status/1964038571205226946",
    "https://help.beeminder.com/article/25-how-do-auto-canceling-subscriptions-work",
    "https://help.beeminder.com/article/26-what-if-i-buy-one-plan-and-change-my-mind",
    "https://help.beeminder.com/article/22-can-i-limit-how-high-my-pledge-gets"],
t: "2025-09-05",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added some extra explanation to the honey money article, plus rewording and trimming in 4 other articles`,
u: ["https://x.com/beemuvi/status/1965202372139040774",
    "https://help.beeminder.com/article/354-honey-money",
    "https://help.beeminder.com/article/28-how-do-i-update-my-payment-information",
    "https://help.beeminder.com/article/29-why-did-beeminder-charge-my-card",
    "https://help.beeminder.com/article/12-what-is-a-derailment",
    "https://help.beeminder.com/article/13-when-do-derailments-happen"],
t: "2025-09-08",
}, { // ------------------------------------------------------------------------
x: `We no longer clear the "deadbeat" flag (failed payment method) till all pending charges succeed, rather than clearing it after the first successful charge`,
u: ["https://x.com/beemuvi/status/1965558284750127441",
    "https://github.com/beeminder/beeminder/issues/5217",
    "https://github.com/beeminder/beeminder/pull/5370"],
d: "2025-09-05",
t: "2025-09-09",
}, { // ------------------------------------------------------------------------
x: `Whoopsies. The #bugfix for UVI#5336 introduced a new bug where we never cleared the deadbeat flag. Now our flag-porridge is *just* right. #zombie`,
u: ["https://x.com/beemuvi/status/1965559328984994090",
    "https://github.com/beeminder/beeminder/issues/5217",
    "https://github.com/beeminder/beeminder/pull/5370"],
d: "2025-09-09",
t: "2025-09-09",
}, { // ------------------------------------------------------------------------
x: `Admins now have better visibility and greater powers w/ your goals, which trickles down to you. Bonus mini-UVI: "you" is now reserved/disallowed as a username.`,
u: ["https://x.com/beemuvi/status/1966035375287320594",
    "https://github.com/beeminder/beeminder/issues/1339",
    "https://github.com/beeminder/beeminder/pull/5377",
    "https://github.com/beeminder/beeminder/issues/5361",
    "https://github.com/beeminder/beeminder/pull/5381",
    "https://github.com/beeminder/beeminder/issues/1425",
    "https://github.com/beeminder/beeminder/pull/5382"],
d: "2025-09-08",
t: "2025-09-11",
c: `Namely: (1) admins can refetch autodata on frozen goals, solving a long-time frustration for admins, and (2) we make clear in the "delete goal feedback" email (that goes to Support) if the goal has not actually been deleted.`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Better articulated our latest philosophy about calling non-legit in the "what is a legit derailment?" article, plus new links/keywords`,
u: ["https://x.com/beemuvi/status/1966036377663058224",
    "https://help.beeminder.com/article/16-what-is-a-legit-derailment"],
d: "2025-09-05",
t: "2025-09-11",
}, { // ------------------------------------------------------------------------
x: `Help docs: Removed some wordiness and equivocal language in the No-Excuses Mode doc, plus a typo fix (lick vs click) in the gym goal example doc`,
u: ["https://x.com/beemuvi/status/1967716417375260804",
    "https://help.beeminder.com/article/360-what-is-no-excuses-mode",
    "https://help.beeminder.com/article/92-example-goal-go-to-the-gym-4-times-per-week"],
t: "2025-09-15",
}, { // ------------------------------------------------------------------------
x: `Switching to interactive graph view didn't work for graphs with certain far-future goal dates. #bugfix`,
u: ["https://x.com/beemuvi/status/1968068315248726092",
    "https://github.com/beeminder/beeminder/issues/5379",
    "https://github.com/beeminder/beeminder/pull/5387"],
d: "2025-09-10",
t: "2025-09-16",
c: `This was for graphs with tfin=2099-12-30 (not 2099-12-31?) and it would generate an error and not instantiate the interactive graph`,
}, { // ------------------------------------------------------------------------
x: `Replaced the "hhmmformat" goal field in the API output with "timey" and updated the API docs to say the old name is deprecated`,
u: ["https://x.com/beemuvi/status/1968072176915058744",
    "https://github.com/beeminder/beeminder/issues/1862",
    "https://github.com/beeminder/beeminder/pull/5389"],
d: "2025-09-15",
t: "2025-09-16",
}, { // ------------------------------------------------------------------------
x: `Help docs: Tidying and rearranging and clarifying and removing of no-longer-relevant bits in the articles about derailing, Apple Health, and 2 others`,
u: ["https://x.com/beemuvi/status/1968462434135351401",
    "https://help.beeminder.com/article/17-what-happens-when-i-derail",
    "https://help.beeminder.com/article/61-apple-health",
    "https://help.beeminder.com/article/288-codecombat",
    "https://help.beeminder.com/article/364-curlex"],
t: "2025-09-17",
}, { // ------------------------------------------------------------------------
x: `Help docs: We made the "help, something came up" article sound a tad stricter, to discourage weaseling`,
u: ["https://x.com/beemuvi/status/1968462568604749928",
    "https://help.beeminder.com/article/325-help-something-came-up-and-i-cant-do-my-goal"],
t: "2025-09-17",
}, { // ------------------------------------------------------------------------
x: `Help docs: The Boss as a Service integration article now says what we need from the BaaS Boss in the case of an integration failure derailing a No-Excuses goal`,
u: ["https://x.com/beemuvi/status/1968462691795718393",
    "https://help.beeminder.com/article/329-boss-as-a-service-baas"],
t: "2025-09-17",
}, { // ------------------------------------------------------------------------
x: `New lifecycle email: If you've been inactive for 14+ days we show you up to 5 of your active goals and twist your arm to get back on the wagon`,
u: ["https://x.com/beemuvi/status/1968827260833505741",
    "https://github.com/beeminder/beeminder/issues/3765",
    "https://github.com/beeminder/beeminder/pull/5358",
    "https://github.com/beeminder/beeminder/pull/5397"],
t: "2025-09-18",
}, { // ------------------------------------------------------------------------
x: `Help docs: Explained about private predictions counting for the Fatebook (with a t) integration, plus minor tweaks to the Clozemaster integration article`,
u: ["https://x.com/beemuvi/status/1969150639818125344",
    "https://help.beeminder.com/article/366-fatebook",
    "https://help.beeminder.com/article/290-clozemaster"],
t: "2025-09-19",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added an FAQ about what happens at the deadline for the Focusmate article, plus other clarifications and fixing some wordiness (and user confusion!)`,
u: ["https://x.com/beemuvi/status/1969150717005816051",
    "https://help.beeminder.com/article/278-focusmate"],
t: "2025-09-19",
}, { // ------------------------------------------------------------------------
x: `Our new lifecycle email sending was broken till now, thankfully by just not sending the emails. Now fixed and sending to just daily beemail folks initially.`,
u: ["https://x.com/beemuvi/status/1970276399270543736",
    "https://github.com/beeminder/beeminder/pull/5358",
    "https://github.com/beeminder/beeminder/pull/5398"],
d: "2025-09-22",
t: "2025-09-22",
}, { // ------------------------------------------------------------------------
x: `New lifecycle email: If you seem to be crushing it, we send an email with status on 7 of your goals, general encouragement, and soliciting of feedback`,
u: ["https://x.com/beemuvi/status/1970276415615705459",
    "https://github.com/beeminder/beeminder/pull/5398",
    "https://github.com/beeminder/beeminder/pull/5358"],
d: "2025-09-22",
t: "2025-09-22",
}, { // ------------------------------------------------------------------------
x: `You can now alternatively use @ instead of # for magic strings in datapoint comments to avoid invoking the hashtag feature. HT Philip Hellyer`,
u: ["https://x.com/beemuvi/status/1970633954370994448",
    "https://github.com/beeminder/beeminder/issues/4188",
    "https://github.com/beeminder/beeminder/pull/5393",
    "https://github.com/beeminder/road"],
t: "2025-09-23",
}, { // ------------------------------------------------------------------------
x: `New hover effects in the graph editor: knots and dots show you which way you can drag them`,
u: ["https://x.com/beemuvi/status/1970639465573163075",
    "https://github.com/beeminder/road/commit/3160d4fb7ed206ae096199e21c2c3344f3052349"],
t: "2025-09-23",
}, { // ------------------------------------------------------------------------
x: `We briefly cluttered up people's graphs with "#DERAIL" hashtags (if you have hashtags turned on and derail a lot). #bugfix #zombie`,
u: ["https://x.com/beemuvi/status/1970998396573155482",
    "https://github.com/beeminder/beeminder/issues/4188"],
d: "2025-09-23",
t: "2025-09-24",
c: `To clarify, it's intentional that these show up as hashtag annotations, but we didn't mean for that to happen retroactively for all derailments in your whole history, even before we introduced the #DERAIL hashtags for derailments.`,
}, { // ------------------------------------------------------------------------
x: `We made the regexes for our magic strings more robust and consistent, for fewer false positives`,
u: ["https://x.com/beemuvi/status/1970998615696179393",
    "https://github.com/beeminder/beeminder/issues/4188"],
t: "2025-09-24",
}, { // ------------------------------------------------------------------------
x: `Killed some ancient backward compatibility with magic strings. Eg, datapoints only self-destruct if tagged #SELFDESTRUCT or #THISWILLSELFDESTRUCT (or w/ @)`,
u: ["https://x.com/beemuvi/status/1970998918386528282",
    "https://blog.beeminder.com/magicdata",
    "https://forum.beeminder.com/t/subtle-change-to-self-destructing-datapoints/10655?u=dreev",
    "https://github.com/beeminder/beeminder/issues/4188"],
t: "2025-09-24",
}, { // ------------------------------------------------------------------------
x: `Ever since UVI#5253 we'd give a 500-error if you tried to restart a goal with a old-style $1 pledge. #bugfix HT rafal aka divide`,
u: ["https://x.com/beemuvi/status/1971297231035863420",
    "https://github.com/beeminder/beeminder/issues/5405",
    "https://github.com/beeminder/beeminder/pull/5407"],
d: "2025-09-24",
t: "2025-09-25",
c: `We introduced a new pledge schedule (schedge) of $1, $5, $10, $20, etc, in 2019 with UVI#3097 with an option to stick with the traditional one. We made it opt-in in 2020 with UVI#3344. We removed the ability to opt for the new pledge schedule later in 2020 with UVI#3603. We stopped letting you restart a goal at $1 in 2024 with UVI#5253.`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Clarified the FAQ item on intensity minutes for the Garmin autodata integration, abating some real-live user confusion`,
u: ["https://x.com/beemuvi/status/1971698934688170449",
    "https://help.beeminder.com/article/74-garmin"],
t: "2025-09-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: Clarifications, wordiness fixes, tweaks for flow, and an internal link added in the Duolingo, Fitbit, freeCodeCamp, and GitHub integration articles`,
u: ["https://x.com/beemuvi/status/1971699003785204033",
    "https://help.beeminder.com/article/80-duolingo",
    "https://help.beeminder.com/article/11-fitbit",
    "https://help.beeminder.com/article/287-freecodecamp",
    "https://help.beeminder.com/article/81-github"],
t: "2025-09-26",
}, { // ------------------------------------------------------------------------
x: `When you opt to "just send feedback" and not delete the goal yet, we no longer say "successfully deleted the goal". We never did, but now we don't *say* we did.`,
u: ["https://x.com/beemuvi/status/1972805775090458980",
    "https://github.com/beeminder/beeminder/pull/5409"],
c: `We weren't actually deleting the goal, but we briefly gave you a heart attack because we did exactly the same thing we woulda done had we deleted it`,
d: "2025-09-26",
t: "2025-09-29",
}, { // ------------------------------------------------------------------------
x: `Also we no longer redirect to your dashboard after doing that, something we do do when you actually delete the goal, since the page you're on no longer exists`,
u: ["https://x.com/beemuvi/status/1972805977050370528",
    "https://github.com/beeminder/beeminder/pull/5409"],
d: "2025-09-26",
t: "2025-09-29",
}, { // ------------------------------------------------------------------------
x: `There was a syntax error in the template for the much-announced lifecycle emails, so none actually got sent yet. Slowly resending missed ones. #bugfix`,
u: ["https://x.com/beemuvi/status/1972846116438962495",
    "https://github.com/beeminder/beeminder/pull/5410"],
d: "2025-09-26",
t: "2025-09-29",
c: `We were referencing a variable that doesn't exist`,
}, { // ------------------------------------------------------------------------
x: `Help docs: We made the GmailZero article a lot better: general readability and a lot easier to understand the troubleshooting section`,
u: ["https://x.com/beemuvi/status/1972847089035182186",
    "https://help.beeminder.com/article/82-gmail"],
t: "2025-09-29",
}, /* --------------------------------------------------------- end 2025sep */ ]

batches['2025oct'] = [{
}, { // ------------------------------------------------------------------------
x: `We fixed the CSS for our fancy checkbox and radio buttons so you can navigate them with the keyboard. #CSS HT Alys`,
u: ["https://x.com/beemuvi/status/1973519612210979273",
    "https://github.com/beeminder/beeminder/issues/2824",
    "https://github.com/beeminder/beeminder/pull/5412"],
d: "2025-09-30",
t: "2025-10-01",
c: `Alys asked for this ages ago and Bee was like "I have no clue how to fix that; it's cuz of our fancy styled checkboxes," but the gissue came up today and she asked Claude and the robots new exactly how to fix it and it was super peasy`,
}, { // ------------------------------------------------------------------------
x: `Along for the ride with the previous UVI is that you now visually see the checkboxes/buttons selected when you tab to them`,
u: ["https://x.com/beemuvi/status/1973519700371145186",
    "https://github.com/beeminder/beeminder/issues/2824",
    "https://github.com/beeminder/beeminder/pull/5412"],
d: "2025-09-30",
t: "2025-10-01",
c: `UI polish`,
}, { // ------------------------------------------------------------------------
x: `In the graph editor we now check more robustly for whether you're on a device with a touchscreen (to adapt the UI)`,
u: ["https://x.com/beemuvi/status/1973897260481249641",
    "https://github.com/beeminder/road/commit/dc71f546c74bfc0908b996f9c075b617a9d20e9c",
    "https://github.com/beeminder/road/commit/eab9118ecd0f51e26dfcfe0a09c663d413306e54"],
d: "2025-10-01",
t: "2025-10-02",
c: `Also we upgraded D3 from version 5 to version 7 but there's nothing user-visible about that that we know of besides proper math minus signs, UVI#TODO`,
}, { // ------------------------------------------------------------------------
x: `Also in the graph editor, the Data tab that lets you edit datapoints (in case you want to do that there) has been broken for a long time till now. #bugfix`,
u: ["https://x.com/beemuvi/status/1973897388457930966",
    "https://github.com/beeminder/road/commit/d00801e3435fd464b7cfa4dbd823eb8b9ae2808f"],
d: "2025-10-02",
t: "2025-10-02",
}, { // ------------------------------------------------------------------------
x: `Fixed a 500 error for some Slack users when trying to visit their account settings page. And made the authorizations more robust to this type of error. #bugfix`,
u: ["https://x.com/beemuvi/status/1974067770032861554",
    "https://github.com/beeminder/beeminder/pull/5413"],
d: "2025-10-02",
t: "2025-10-03",
c: "HT Lanthala who reported that she couldn't reach her account settings. It was because something is wonky with her Slack authorization. Probably the Slack integration is not working for her... which we did not fix. But we did go through the whole service-model and robust it up to this type of thing with defensive programming.",
}, { // ------------------------------------------------------------------------
x: `Help docs: Fixed grammar, flow problems in the Intend autodata article (& caught old instances of "Complice"), plus reduced wordiness etc in 2 others`,
u: ["https://x.com/beemuvi/status/1974075976993898641",
    "https://help.beeminder.com/article/85-intend",
    "https://help.beeminder.com/article/83-habitica",
    "https://help.beeminder.com/article/86-ifttt"],
t: "2025-10-03",
c: `Also started making sure we include previous names of things (eg, HabitRPG) in the keywords for searchability`,
}, { // ------------------------------------------------------------------------
x: `After some package upgrades to the graph generator, some graph PNGs have subtly but noticeably smoother, less jagged lines`,
u: ["https://x.com/beemuvi/status/1975314560350626282",
    "https://github.com/beeminder/road/commit/41c2d9b6588a5f0b24434846f82f9ef3869b5f32"],
t: "2025-10-06",
c: `I think this was from upgrading our version of Puppeteer; also it may have broken the production Beebrain in some heisenbuggy way? Pushed to the beebrain repo on 2025-09-17 or so, not sure it was exactly the commit linked here. It wasn't live for graphs via Beeminder-proper till deplying the new Beebrain on 2025-10-06.`,
}, { // ------------------------------------------------------------------------
x: `This is the subtlest, persnicketiest thing but we now use proper mathematical minus signs for negative numbers on the y-axis`,
u: ["https://x.com/beemuvi/status/1975315004783268171",
    "https://github.com/beeminder/road/issues/333",
    "https://github.com/beeminder/road/commit/4a6f5ab14dc651c635e1123899cf119722de18fa"],
t: "2025-10-06",
c: `We got this as part of the D3 v7 upgrade. We actually added a regex to force hyphens insto minus signs ahead of time on v5 so we could more easily spot any subtle changes to graphs from the v5-to-v7 switchover.`,
}, { // ------------------------------------------------------------------------
x: `Goal restarts are now indicated with a zigzaggy vertical line on your graph. This is determined by the #RESTART / @RESTART magic string.`,
u: ["https://x.com/beemuvi/status/1975315238200512564",
    "https://blog.beeminder.com/magicdata",
    "https://github.com/beeminder/road/issues/151",
    "https://github.com/beeminder/road/commit/35a1183ae342da857a37f131cfc5ae021a9fec39"],
d: "2025-10-06",
t: "2025-10-06",
c: `Deployed as Beebrain v2025.10.02-f`,
}, { // ------------------------------------------------------------------------
f: true,
x: `Visual PPRs! Self-destructing datapoints now appear 1.5x bigger and have a little slash through them`,
u: ["https://x.com/beemuvi/status/1975315720553832656",
    "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
    "https://blog.beeminder.com/magicdata",
    "https://github.com/beeminder/road/issues/151",
    "https://github.com/beeminder/road/commit/4cfecb73851a570bc5fbb5a2613c229536d990a2"],
d: "2025-10-06",
t: "2025-10-06",
c: `Deployed as Beebrain v2025.10.03-a`,
}, { // ------------------------------------------------------------------------
f: true,
x: `Tare Tags! Instead of a setting on odometer goals to treat zeros as odometer resets, you now just include "#TARE" or "@TARE" in the datapoint comment`,
u: ["https://x.com/beemuvi/status/1976073422577991723",
    "https://blog.beeminder.com/tare",
    "https://github.com/beeminder/road/issues/216"],
d: "2025-10-07",
t: "2025-10-08",
}, { // ------------------------------------------------------------------------
x: `We ripped the old odometer reset checkbox out of the UI since that feature is subsumed by tare tags, which need no setting. One fewer setting, hooray!`,
u: ["https://x.com/beemuvi/status/1976073570343321860",
    "https://blog.beeminder.com/magicstrings",
    "https://blog.beeminder.com/magicdata",
    "https://github.com/beeminder/road/issues/216"],
d: "2025-10-07",
t: "2025-10-08",
}, { // ------------------------------------------------------------------------
x: `We updated everyone's existing zero datapoints (for which the odometer reset feature was turned on) to include a @TARE tag, to make the transition seamless`,
u: ["https://x.com/beemuvi/status/1976416525860077729",
    "https://github.com/beeminder/road/issues/216"],
d: "2025-10-07",
t: "2025-10-09",
}, { // ------------------------------------------------------------------------
x: `We also (some time ago) updated everyone's datapoints for restarts and derails and PPRs to conform to the new standard for datapoint magic strings`,
u: ["https://x.com/beemuvi/status/1976417395138044106",
    "https://blog.beeminder.com/magicdata",
    "https://github.com/beeminder/beeminder/issues/2423"],
t: "2025-10-09",
c: `Forgot to tweet this UVI at the time; it's a follow-on to UVI#5355`,
}, { // ------------------------------------------------------------------------
x: `All tarings are visually indicated on the graph with a gray dashed vertical line, same as the old odometer resets`,
u: ["https://x.com/beemuvi/status/1976752511941066773",
    "https://github.com/beeminder/road/issues/216"],
d: "2025-10-07",
t: "2025-10-10",
}, { // ------------------------------------------------------------------------
x: `Multiple bugs and confusion have come out in the wash with tare tags, like initial zeros with backfilled data and URLminder goals borking themselves`,
u: ["https://x.com/beemuvi/status/1976752665880412388",
    "https://blog.beeminder.com/tare",
    "https://github.com/beeminder/beeminder/issues/2561"],
t: "2025-10-10",
}, { // ------------------------------------------------------------------------
x: `We now show an error and don't generate the graph if you try to use #TARE tags on a graph that is auto-summing or has an aggday other than "last"`,
u: ["https://x.com/beemuvi/status/1976753071327002868",
    "https://github.com/beeminder/road/commit/84127d75e7e17140cb78fa47abe3d05560fd46db"],
t: "2025-10-10",
c: `Due to being stuck in dependency hell in Beebody, we hot-patched this in to the production Beebrain for now`,
}, { // ------------------------------------------------------------------------
x: `Updated the FAQ with the new way to deal with odometer resets`,
u: ["https://x.com/beemuvi/status/1976753144735711529",
    "https://www.beeminder.com/faq#qodo",
    "https://github.com/beeminder/road/issues/216",
    "https://github.com/beeminder/beeminder/pull/5424"],
d: "2025-10-09",
t: "2025-10-10",
}, { // ------------------------------------------------------------------------
x: `We got sick of accidentally hitting Submit in the visual graph editor when meaning to hit Undo so we moved the Submit button to the bottom of the page`,
u: ["https://x.com/beemuvi/status/1978245376294461764",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/9f8ef52d85d1d4bffa5248ab11caefffccebd027"],
d: "2025-10-03",
t: "2025-10-14",
}, { // ------------------------------------------------------------------------
x: `In the visual graph editor, in the Dial tab, you can now use a version of the commitment dial, ratcheting, and break scheduling`,
u: ["https://x.com/beemuvi/status/1978245546058924357",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/2713c6e405941ae4ac44818580a3c7760ccfc49a"],
d: "2025-10-04",
t: "2025-10-14",
}, { // ------------------------------------------------------------------------
x: `We added an "Experimental features" section to the visual graph editor, with a few ways to get an SVG version of your graph`,
u: ["https://x.com/beemuvi/status/1978245750535467221",
    "https://github.com/beeminder/road/commit/2713c6e405941ae4ac44818580a3c7760ccfc49a"],
d: "2025-10-04",
t: "2025-10-14",
}, { // ------------------------------------------------------------------------
x: `Help docs: Cleanup and prose-tightening in 5 autodata integration articles: Lichess, Maayot, Make, Manifold, and Metaminder`,
u: ["https://x.com/beemuvi/status/1978572292582990173",
    "https://help.beeminder.com/article/338-lichess",
    "https://help.beeminder.com/article/369-maayot",
    "https://help.beeminder.com/article/318-make-formerly-integromat",
    "https://help.beeminder.com/article/352-manifold",
    "https://help.beeminder.com/article/323-metaminder"],
t: "2025-10-15",
}, { // ------------------------------------------------------------------------
x: `The subject line of the "you updated your email/password" email alert now helpfully includes your username`,
u: ["https://x.com/beemuvi/status/1978971752207151294",
    "https://github.com/beeminder/beeminder/issues/5430",
    "https://github.com/beeminder/beeminder/pull/5431"],
d: "2025-10-14",
t: "2025-10-16",
c: `Bee noticed that lack of username made it really annoying to find the user-in-question in the updated-email case, because the email only had the old email address!`,
}, { // ------------------------------------------------------------------------
x: `Users can now remove an autodata integration from a goal, converting it to manual, instead of needing support to do it for them`,
u: ["https://x.com/beemuvi/status/1978972026627821975",
    "https://github.com/beeminder/beeminder/issues/4256",
    "https://github.com/beeminder/beeminder/pull/5427"],
d: "2025-10-13",
t: "2025-10-16",
c: `AKA self-serve goal conversion. This is also a WVI -- workerbees requested it because it's a common support request.`,
}, { // ------------------------------------------------------------------------
x: `Put out a dumb moneyfire: When support delayed your charge for whatever support reasons, we were *skipping* any charges that occurred in the interim. No longer!`,
u: ["https://x.com/beemuvi/status/1979048170685374600",
    "https://github.com/beeminder/beeminder/issues/3595",
    "https://github.com/beeminder/beeminder/pull/5390"],
d: "2025-10-16",
c: `#bugfix HT Clive. This was for when an admin does a 48-hour charge delay. Interim charges were just silently skipped.`,
}, { // ------------------------------------------------------------------------
x: `Help docs: New article on the special datapoints with magic string hashtags`,
u: ["https://x.com/beemuvi/status/1981145205958131766",
    "https://help.beeminder.com/article/374-are-there-any-special-types-of-datapoints"],
t: "2025-10-22",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rewrote the bits about odometer resets in the Duolingo and Trello autodata integration articles in light of the switch to tare tags, plus links, etc`,
u: ["https://x.com/beemuvi/status/1981497564974502397",
    "https://help.beeminder.com/article/80-duolingo",
    "https://help.beeminder.com/article/78-trello"],
t: "2025-10-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: Revamped the article on odometer goals in light of tare tags, including new screenshots`,
u: ["https://x.com/beemuvi/status/1981497665050542296",
    "https://help.beeminder.com/article/68-odometer-goals"],
t: "2025-10-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: Another sneaky mention of odometer resets in the URLminder autodata integration article`,
u: ["https://x.com/beemuvi/status/1981497786765103146",
    "https://help.beeminder.com/article/88-urlminder"],
t: "2025-10-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: Rephrasing and prose-tightening in the Oura autodata integration article plus smaller readability tweaks for Postminder and Project Euler`,
u: ["https://x.com/beemuvi/status/1981497980969767177",
    "https://help.beeminder.com/article/361-oura",
    "https://help.beeminder.com/article/368-postminder",
    "https://help.beeminder.com/article/292-project-euler"],
t: "2025-10-23",
}, { // ------------------------------------------------------------------------
x: `Help docs: Moved Pocket (RIP) autodata integration article to Historical Interest with pointer to RSSminder/Readwise, plus readability tweaks to 4 other articles`,
u: ["https://x.com/beemuvi/status/1981498131230707816",
    "https://help.beeminder.com/article/291-pocket",
    "https://help.beeminder.com/article/347-readwise-reader",
    "https://help.beeminder.com/article/76-rescuetime",
    "https://help.beeminder.com/article/331-rssminder",
    "https://help.beeminder.com/article/77-runkeeper"],
t: "2025-10-23",
}, { // ------------------------------------------------------------------------
x: `Oops, last week or so we accidentally lost the buttons in the graph editor that add and remove rows of the graph matrix. #bugfix #zombie`,
u: ["https://x.com/beemuvi/status/1983681488253284608",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/18e103f68a74cc8895379420380d22caca0a141c"],
d: "2025-10-20",
t: "2025-10-29",
c: `It was still possible with the visual UI on the graph itself; maybe that's why it took a while for someone to complain`,
}, { // ------------------------------------------------------------------------
x: `We added a per-campaign unsubscribe link to the lifecycle emails`,
u: ["https://x.com/beemuvi/status/1984046723652841957",
    "https://github.com/beeminder/beeminder/issues/3765",
    "https://github.com/beeminder/beeminder/pull/5435"],
d: "2025-10-30",
t: "2025-10-30",
}, { // ------------------------------------------------------------------------
x: `Also lifecycle emails now include the unsubscribe header that your email service provider (ESP) can use to give an unsubscribe link up at the top of the email`,
u: ["https://x.com/beemuvi/status/1984046913596092917",
    "https://github.com/beeminder/beeminder/issues/3765",
    "https://github.com/beeminder/beeminder/pull/5435"],
d: "2025-10-30",
t: "2025-10-30",
c: `AKA List-Unsubscribe header`,
}, { // ------------------------------------------------------------------------
x: `Help docs: Readability tweaks (plus a few for formatting and wordiness) to 7 articles: Skritter, Slack, SMS bot, Strava, TaskRatchet, Time Stream, and Todoist`,
u: ["https://x.com/beemuvi/status/1984390293245084099",
    "https://help.beeminder.com/article/89-skritter",
    "https://help.beeminder.com/article/116-slack",
    "https://help.beeminder.com/article/112-sms",
    "https://help.beeminder.com/article/281-strava",
    "https://help.beeminder.com/article/289-taskratchet",
    "https://help.beeminder.com/article/370-time-stream",
    "https://help.beeminder.com/article/79-todoist"],
t: "2025-10-31",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added "Related Beeminder Autodata Integrations" to Strava, Apple Health, Fitbit, Garmin, Oura, Runkeeper, and Withings -- all pointing to each other`,
u: ["https://x.com/beemuvi/status/1984390952979743001",
    "https://help.beeminder.com/article/281-strava",
    "https://help.beeminder.com/article/61-apple-health",
    "https://help.beeminder.com/article/11-fitbit",
    "https://help.beeminder.com/article/74-garmin",
    "https://help.beeminder.com/article/361-oura",
    "https://help.beeminder.com/article/77-runkeeper",
    "https://help.beeminder.com/article/90-withings"],
d: "2025-10-31",
t: "2025-10-31",
}, /* --------------------------------------------------------- end 2025oct */ ]

batches['2025nov'] = [{
}, { // ------------------------------------------------------------------------
x: `When setting up rate and units on a new goal, there's now some dynamic text that tells you the actual date of your first beemergency and how much will be due`,
u: ["https://x.com/beemuvi/status/1985509775862608240",
    "https://github.com/beeminder/beeminder/issues/4789",
    "https://github.com/beeminder/beeminder/issues/1144",
    "https://github.com/beeminder/beeminder/pull/5440"],
d: "2025-10-28",
t: "2025-11-03",
c: `After screenshot in PR`,
}, { // ------------------------------------------------------------------------
x: `Fixed the subject line of the "feedback-only" emails when someone was about to delete a goal and then we beg them to send feedback first`,
u: ["https://x.com/beemuvi/status/1985509975779918027",
    "https://github.com/beeminder/beeminder/issues/5361",
    "https://github.com/beeminder/beeminder/pull/5448"],
d: "2025-11-03",
t: "2025-11-03",
c: `From "wants to delete goal" to "sending feedback on goal". User-visible when support replies to it and fixes lots of user and workerbee confusion!`,
}, { // ------------------------------------------------------------------------
x: `When restarting an autodata goal that uses oAuth, we check that it isn't expired, and we warn you if it's missing or expired prior to restarting the goal`,
u: ["https://x.com/beemuvi/status/1985870569389412578",
    "https://github.com/beeminder/beeminder/issues/186",
    "https://github.com/beeminder/beeminder/pull/5442"],
d: "2025-11-04",
t: "2025-11-04",
}, { // ------------------------------------------------------------------------
x: `In the visual graph editor, you can now click anywhere on the "Include scrubber" line, not just the checkbox; plus removed extraneous SVG download buttons`,
u: ["https://x.com/beemuvi/status/1985874353779818695",
    "https://graph.beeminder.com",
    "https://github.com/beeminder/road/commit/70858217afef92413643c4786fdfa34d94ee9e91",
    "https://github.com/beeminder/road/commit/e32e37485a11698165c275f1d975ef00a27747e6"],
t: "2025-11-04",
c: `Deployed the checkbox improvement 2025-10-07 and the SVG button cleanup 2025-11-04`,
}, { // ------------------------------------------------------------------------
x: `We fixed the clickable area for interactive graphs on the goal page, shrinkwrapping the image and not treating whitespace surrounding the graph as triggerable`,
u: ["https://x.com/beemuvi/status/1986233744337014794",
    "https://forum.beeminder.com/t/dont-open-interactive-graph-on-whitespace-click/12527?u=dreev",
    "https://github.com/beeminder/beeminder/issues/5414",
    "https://github.com/beeminder/beeminder/pull/5450"],
d: "2025-11-04",
t: "2025-11-05",
}, { // ------------------------------------------------------------------------
x: `Help docs: Key clarification in the "Help, something came up" article that you can't use the Uncle button and then call non-legit`,
u: ["https://x.com/beemuvi/status/1986233848691356143",
    "https://help.beeminder.com/article/325-help-something-came-up-and-i-cant-do-my-goal"],
t: "2025-11-05",
}, { // ------------------------------------------------------------------------
x: `The Uncle Button now pops up an explanation of what it does when you click it -- no more insta-uncling (sorry about those!)`,
u: ["https://x.com/beemuvi/status/1986597581686980780",
    "https://github.com/beeminder/beeminder/issues/5290",
    "https://github.com/beeminder/beeminder/issues/5317",
    "https://github.com/beeminder/beeminder/pull/5453"],
d: "2025-11-06",
t: "2025-11-06",
c: `One piece of user feedback on the uncle button was "I was surprised when I used it that nothing happened" -- because it used to immediately do the derail without confirmation, but not scroll you back to the top of the page to witness the infinibee and graph reload. So, yikes, extra bad.`,
}, { // ------------------------------------------------------------------------
x: `To further ensure no accidental cryings of uncle, the popup makes you type out confirmation that you've actually read most of the words, no takebacks, etc`,
u: ["https://x.com/beemuvi/status/1986597674779542005",
    "https://github.com/beeminder/beeminder/issues/5290",
    "https://github.com/beeminder/beeminder/issues/5317",
    "https://github.com/beeminder/beeminder/pull/5453"],
d: "2025-11-06",
t: "2025-11-06",
c: `This is similar to the No-Excuses Mode confirmation`,
}, { // ------------------------------------------------------------------------
x: `Finally, the Uncle Button now scrolls you back to the graph after uncle-crying (especially bad before how you might not notice you'd effected a derail)`,
u: ["https://x.com/beemuvi/status/1986597748662280384",
    "https://github.com/beeminder/beeminder/issues/5290",
    "https://github.com/beeminder/beeminder/issues/5317",
    "https://github.com/beeminder/beeminder/pull/5453"],
d: "2025-11-06",
t: "2025-11-06",
}, { // ------------------------------------------------------------------------
x: `Help docs: Fixed an error where Do Less goals weren't listed as being a perk of Infinibee, alleviating some genuine user confusion`,
u: ["https://x.com/beemuvi/status/1993121250785607765",
    "https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types",
    "https://forum.beeminder.com/t/contradicting-claims-in-the-documentation/12569"],
t: "2025-11-24",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added explanation to the "How do I quit a goal?" article about the exception for new goals, plus wordiness and readability fixes`,
u: ["https://x.com/beemuvi/status/1993484803459760158",
    "https://help.beeminder.com/article/44-how-do-i-quit-a-goal"],
t: "2025-11-25",
}, { // ------------------------------------------------------------------------
x: `Help docs: Brand new article, "Should I use a manual goal or an integration?" (inspired by a question in support)`,
u: ["https://x.com/beemuvi/status/1993484877334036822",
    "https://help.beeminder.com/article/375-should-i-use-a-manual-goal-or-an-integration"],
t: "2025-11-25",
}, { // ------------------------------------------------------------------------
x: `Help docs: Streamlined and replaced a screenshot in the "How do I delete a goal?" article, plus streamlining/dewordifying of of 3 other articles`,
u: ["https://x.com/beemuvi/status/1993839894880506006",
    "https://help.beeminder.com/article/47-how-do-i-delete-a-goal",
    "https://help.beeminder.com/article/155-toggl",
    "https://help.beeminder.com/article/340-trydeepwork",
    "https://help.beeminder.com/article/293-twitter"],
t: "2025-11-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: New article about the Uncle Button`,
u: ["https://x.com/beemuvi/status/1993840057883717753",
    "https://help.beeminder.com/article/376-what-is-the-uncle-button"],
t: "2025-11-26",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added solicitation of autodata metrics to the Withings integration article, plus minor/tiny tweaks to 6 other articles`,
u: ["https://x.com/beemuvi/status/1994129587564134422",
    "https://help.beeminder.com/article/90-withings",
    "https://help.beeminder.com/article/357-wakatime",
    "https://help.beeminder.com/article/88-urlminder",
    "https://help.beeminder.com/article/359-ynab",
    "https://help.beeminder.com/article/87-zapier",
    "https://help.beeminder.com/article/46-what-happens-to-an-archived-goal",
    "https://help.beeminder.com/article/48-how-do-i-delete-my-account"],
t: "2025-11-27",
}, { // ------------------------------------------------------------------------
x: `Help docs: Removed mention of the obsolete iOS widgets from the iOS app article, plus rewording/tweaking/typo-fixing in that and 4 other articles`,
u: ["https://x.com/beemuvi/status/1994129692614623483",
    "https://help.beeminder.com/article/60-ios-app",
    "https://help.beeminder.com/article/62-android-app",
    "https://help.beeminder.com/article/158-android-app-beta-testing",
    "https://help.beeminder.com/article/321-ios-app-beta-testing",
    "https://help.beeminder.com/article/64-tagtime"],
t: "2025-11-27",
}, { // ------------------------------------------------------------------------
x: `We reduced the number of times we call Toggl's API for each goal fetch, which is kind of a big deal since their per-user API limits have gotten quite stringent`,
u: ["https://x.com/beemuvi/status/1994554660729098514",
    "https://github.com/beeminder/beeminder/pull/5456",
    "https://github.com/beeminder/beeminder/pull/5457"],
d: "2025-11-10",
t: "2025-11-28",
c: "HT Clive. Now we fetch Projects, Tags, and Tasks (for filtering which timers we count) with one API call",
}, { // ------------------------------------------------------------------------
x: `Legit check emails no longer ever say the wrong pledge amount, which used to happen sometimes if the email took too long to send`,
u: ["https://x.com/beemuvi/status/1994555553818030240",
    "https://github.com/beeminder/beeminder/issues/5421",
    "https://github.com/beeminder/beeminder/pull/5463"],
d: "2025-11-21",
t: "2025-11-28",
c: `We now pass the amount to the email job so it says the right amount no matter how long it takes to send`,
}, /* --------------------------------------------------------- end 2025nov */ ]

batches['2025dec'] = [{
}, { // ------------------------------------------------------------------------
x: `Fixing user confusion about whether custom goals are included on Infinibee, we changed "unlimited goal types" to "exotic goal types" on the premium page`,
u: ["https://x.com/beemuvi/status/1995646650711507045",
    "https://github.com/beeminder/beeminder/issues/5454",
    "https://forum.beeminder.com/t/contradicting-claims-in-the-documentation/12569/4?u=dreev",
    "https://github.com/beeminder/beeminder/pull/5467"],
d: "2025-11-26",
t: "2025-12-01",
}, { // ------------------------------------------------------------------------
x: `Odometer goals now use your post-TARE datapoint value as the +/- stepper starting point in the UI rather than confusingly using the current y-value of the graph`,
u: ["https://x.com/beemuvi/status/1995646826675122246",
    "https://github.com/beeminder/beeminder/issues/5444",
    "https://github.com/beeminder/beeminder/pull/5458"],
d: "2025-12-01",
t: "2025-12-01",
c: `E.g. I've read 3 books and TAREd my goal in between, so my cumulative total read pages is 1376, but my most recent page read is page 34 of the current book. When I go to add my next page, if I use the `+` stepper, it used to start incrementing from 1376, not my current 34.`,
}, { // ------------------------------------------------------------------------
f: true,
x: `The front page now shows the all-time number of datapoints and goals created!`,
u: ["https://x.com/beemuvi/status/1996016929941979148",
    "https://github.com/beeminder/beeminder/issues/3180"],
d: "2025-12-02",
t: "2025-12-02",
c: `We briefly deployed this last week but it slowed down datapoint creation so we reverted. Probably should've counted that for a UVI regardless!`,
}, { // ------------------------------------------------------------------------
x: `The datapoints/goals numbers on the front page now update in real time and we fixed a bug that caused that to slow the whole site down, oops`,
u: ["https://x.com/beemuvi/status/1996017045931262313",
    "https://github.com/beeminder/beeminder/issues/3180"],
d: "2025-12-02",
t: "2025-12-02",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added an extra anti-cheating tip to the "Can't you just lie?" article, about lowering your pledge cap`,
u: ["https://x.com/beemuvi/status/1996377045543297113",
    "https://help.beeminder.com/article/34-cant-you-just-lie-about-your-data"],
t: "2025-12-03",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added to arguments (and a link to the classic Grayson post) to the Beeminder-vs-StickK article, plus streamlining to that and the akrasia horizon one`,
u: ["https://x.com/beemuvi/status/1996377282873864636",
    "https://help.beeminder.com/article/49-why-should-i-use-beeminder-over-stickk",
    "https://help.beeminder.com/article/45-what-is-the-akrasia-horizon"],
t: "2025-12-03",
}, { // ------------------------------------------------------------------------
x: `We updated the Sleep as Android landing page and goal creation page in light of changes they made (add-on now free but subscription needed for automatic data)`,
u: ["https://x.com/beemuvi/status/1996743028963528961",
    "https://www.beeminder.com/sleepminder",
    "https://github.com/beeminder/beeminder/issues/5469",
    "https://help.beeminder.com/article/84-sleep-as-android",
    "https://github.com/beeminder/beeminder/pull/5475",
    "https://github.com/beeminder/beeminder/pull/5476"],
d: "2025-12-04",
t: "2025-12-04",
}, { // ------------------------------------------------------------------------
x: `Help docs: Updated the Sleep as Android autodata integration article for the same reason, plus offering potential workarounds`,
u: ["https://x.com/beemuvi/status/1996744382998041048",
    "https://help.beeminder.com/article/84-sleep-as-android"],
t: "2025-12-04",
}, { // ------------------------------------------------------------------------
x: `Help docs: Made the "Can I specify a beneficiary?" article less StickK-centric and more derailing-it-is-nailing-it, plus added a link to honeygrams`,
u: ["https://x.com/beemuvi/status/1997042944361353579",
    "https://help.beeminder.com/article/114-can-i-specify-a-beneficiary-for-my-derailments"],
d: "2025-12-05",
t: "2025-12-05",
}, { // ------------------------------------------------------------------------
x: `Help docs: A new link (plus readability rephrasings) in the "Derailing is not Failing" article plus a new screenshot in the "Account details" article`,
u: ["https://x.com/beemuvi/status/1997057276147126436",
    "https://help.beeminder.com/article/335-derailing-is-not-failing",
    "https://help.beeminder.com/article/109-account-details"],
d: "2025-12-05",
t: "2025-12-05",
}, { // ------------------------------------------------------------------------
x: `You can now pre-fill the parameters for goal creation by encoding them at the end of beeminder.com/new (ie, in the query string; step 1 towards clonable goals!)`,
u: ["https://x.com/beemuvi/status/1998194267538457078",
    "https://www.beeminder.com/new?goaltype=domore&units=pushups&dailyrate=5&goalname=pushups",
    "https://github.com/beeminder/beeminder/issues/2974",
    "https://github.com/beeminder/beeminder/pull/5462"],
d: "2025-11-28",
t: "2025-12-08",
}, { // ------------------------------------------------------------------------
x: `Added documentation for URL-based goal creation to the API docs`,
u: ["https://x.com/beemuvi/status/1998194462946927076",
    "https://api.beeminder.com/#url-based-goal-creation",
    "https://github.com/beeminder/beeminder/issues/2974"],
d: "2025-12-02",
t: "2025-12-08",
}, { // ------------------------------------------------------------------------
x: `The old URL for reminder settings, beeminder.com/reminders/USER/GOAL, was 404ing, oops. Now it redirects to beeminder.com/USER/GOAL#deadline #bugfix #zombie`,
u: ["https://x.com/beemuvi/status/1998554736598114525",
    "https://github.com/beeminder/beeminder/issues/3818",
    "https://github.com/beeminder/beeminder/pull/5478"],
d: "2025-12-08",
t: "2025-12-09",
}, { // -----------------------------------------------------------------------
x: `GitHub autodata integration improvements: Now you can opt to track commits on any branch, instead of just the main one when you're setting up the goal`,
u: ["https://x.com/beemuvi/status/1998556254990729310",
    "https://beeminder.com/gitminder",
    "https://github.com/beeminder/beeminder/issues/5027",
    "https://github.com/beeminder/beeminder/pull/5465"],
t: "2025-12-09",
}, { // -----------------------------------------------------------------------
x: `The GitHub integration now lets you opt into or out of tracking all the branches on any new or existing goal. See the new checkbox in settings.`,
u: ["https://x.com/beemuvi/status/1998915008072503765",
    "https://beeminder.com/gitminder",
    "https://github.com/beeminder/beeminder/issues/5027",
    "https://github.com/beeminder/beeminder/pull/5465"],
t: "2025-12-10",
}, { // ------------------------------------------------------------------------
x: `We added a tooltip about main (master, whatever) vs all-branch tracking in Gitminder goal settings, and now capitalize GitHub correctly`,
u: ["https://x.com/beemuvi/status/1998918572391977471",
    "https://beeminder.com/gitminder",
    "https://github.com/beeminder/beeminder/issues/5027",
    "https://github.com/beeminder/beeminder/pull/5465"],
d: "2025-12-10",
t: "2025-12-10",
}, { // ------------------------------------------------------------------------
x: `Oops, the Gitminder tooltip was a little broken on the goal creation page, and also we missed a spot on camelCasing GitHub`,
u: ["https://x.com/beemuvi/status/1999277073270210599",
    "https://beeminder.com/gitminder",
    "https://github.com/beeminder/beeminder/issues/5027"],
d: "2025-12-11",
t: "2025-12-11",
}, { // ------------------------------------------------------------------------
x: `Fixed inconsistencies in displaying timey goals (we had variously HH:MM and HH:MM:SS and HH:MM.xxx). We now default to HH:MM:SS, or pick HH:MM in settings.`,
u: ["https://x.com/beemuvi/status/1999278447240314946",
    "https://github.com/beeminder/beeminder/pull/5455",
    "https://github.com/beeminder/beeminder/pull/5443"],
d: "2025-12-09",
t: "2025-12-11",
}, { // ------------------------------------------------------------------------
x: `Help docs: Straightened out ambiguity between goal settings vs reminder settings in the "Deadlines & Reminders" article, plus minor tweaks in 2 other articles`,
u: ["https://x.com/beemuvi/status/1999597490652479856",
    "https://help.beeminder.com/article/14-deadline",
    "https://help.beeminder.com/article/110-apps-and-api",
    "https://help.beeminder.com/article/111-new-goal-defaults"],
t: "2025-12-12",
}, { // ------------------------------------------------------------------------
x: `Rounding + timey display could alter values when editing data. Now we use full precision when editing and don't touch the value if you just edit the comment.`,
u: ["https://x.com/beemuvi/status/1999609413020373276",
    "https://github.com/beeminder/beeminder/issues/2002",
    "https://github.com/beeminder/beeminder/pull/5455"],
d: "2025-12-09",
t: "2025-12-12",
}, { // ------------------------------------------------------------------------
x: `Help docs: New short help page for the "apply goal defaults" feature plus tweaks and small additions to the "goal settings" article`,
u: ["https://x.com/beemuvi/status/2000719272491028484",
    "https://help.beeminder.com/article/377-apply-goal-defaults",
    "https://help.beeminder.com/article/106-goal-settings"],
d: "2025-12-15",
t: "2025-12-15",
}, { // ------------------------------------------------------------------------
x: `Help docs: Added a section to the PPR article to answer user questions about technical details plus tweaks and clarifications to the one on Privacy`,
u: ["https://x.com/beemuvi/status/2000719475306352945",
    "https://help.beeminder.com/article/157-pessimistic-presumptive-reports",
    "https://help.beeminder.com/article/102-privacy"],
t: "2025-12-15",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025dec */ ]



const staged = [ {
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]


/********************************************************************************************************************************************************************
~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
api pledge cap loophole
x: "Closed a loophole in which you could change your pledge cap to $0 via the API"
Don't let folks set pledge cap via API
This just handles the API goals endpoint, and adds a qual.
https://github.com/beeminder/beeminder/issues/4533
https://github.com/beeminder/beeminder/pull/5205
https://github.com/beeminder/beeminder/pull/4578
PR from 2023 Nov [did it wrong and messed up goal creation]
questionable uvi since setting it via the api was an undocumented “feature” to begin with, but it does give an explanatory error message now, so maybe it could count?
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
anything else to milk from humble bundle?
https://github.com/beeminder/beeminder/pull/4762
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
already included above:
What’s the difference between the goal types? - Added a note on which goal types are accessible to free accounts. Kind of a UVI? Clarity is good!
https://help.beeminder.com/article/51-whats-the-difference-between-the-goal-types
"d": "2024-06-05",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
already tweeted, i think:
"x": "Bugfix with slack integration auth that was caused us to fail to add the beebot instance to your slack"
https://github.com/beeminder/beeminder/pull/5011
"d": "2024-08-22"
TODO: point at the PR that introduced this bug [it was the garmin fix one]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
link preview on apple
https://github.com/beeminder/beeminder/issues/1618#issuecomment-2327444912
"c": "we haven't made any new changes to this since we last tweeted about it, i just found this open gissue in my freshening, and verified that what we do currently is sane"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
BEEMIOS POST-6.7
* rounded corners visual glitch: https://github.com/beeminder/BeeSwift/issues/558 
  another one? https://github.com/beeminder/BeeSwift/pull/552
    https://github.com/beeminder/BeeSwift/issues/551
* accidentally showed deadbeat briefly: https://github.com/beeminder/BeeSwift/issues/586
* sort-by-pledge matches website: https://github.com/beeminder/BeeSwift/issues/578
* fix blank icon in iOS 17: https://github.com/beeminder/BeeSwift/issues/621
* incremental goal updates: https://github.com/beeminder/BeeSwift/pull/635
* date is wrong at first? or was this in 6.7?: https://github.com/beeminder/BeeSwift/issues/473
* better transition from placeholder to graph?: https://github.com/beeminder/BeeSwift/issues/608#issue-2769414147
  fixed by https://github.com/beeminder/BeeSwift/pull/609#pullrequestreview-2547275472
* fix a crash when logging out and back in?: https://github.com/beeminder/BeeSwift/issues/590#issuecomment-2569768484
* keep keyboard from obscuring last goals in gallery view: https://github.com/beeminder/BeeSwift/pull/536
* dark green (forest green) for >7 safe days: https://github.com/beeminder/BeeSwift/pull/535
* no more stale badge count when you log out? https://github.com/beeminder/BeeSwift/issues/553
* more dark mode improvements? white on black instead of gray on black for logo: https://github.com/beeminder/BeeSwift/issues/150
* fix styling of the navbar: https://github.com/beeminder/BeeSwift/pull/569
* search works across goalnames and blurbs: https://github.com/beeminder/BeeSwift/issues/631
* update button bigger: https://github.com/beeminder/BeeSwift/pull/577
* list now matches website when sorting by pledge: https://github.com/beeminder/BeeSwift/pull/579
* Introduce a freshness indicator for the goal screen: https://github.com/beeminder/BeeSwift/pull/537
* App now notices when you switch Beeminder timezone: https://github.com/beeminder/BeeSwift/issues/507
* Add goal shortname to zeno notification

}, { // ------------------------------------------------------------------------
BEEMIOS 2024-09-16:
* Don't delete the #DERAIL datapoint: Closed #456 as completed via #474.
* Unsubmitted datapoint value changes when leaving and coming back to the app: https://github.com/beeminder/BeeSwift/issues/417 : I believe this was fixed by #442.
* Blue text doesn't work in dark mode (Issue #346): Fixed by #404
* Sort dashboard exactly same as website (#49): Fixed by #451
* Show goalname on timer screen [not merged yet]: https://github.com/beeminder/BeeSwift/issues/477
* Maybe this is an older one but removing the deltatext numbers: https://github.com/beeminder/BeeSwift/pull/455
* Don't let datepicker wrap around to the beginning of the current month: https://github.com/beeminder/BeeSwift/issues/386
}, { // ------------------------------------------------------------------------
Planning to release Beeminder for iOS 6.7 later today, 2024-12-13
Summary of changes that might be relevant to support:
*   The old "Today" widget has been removed
*   Dark mode icon (thanks Bee!), and some changing to UI styling and goal screen.
*   The gallery now sorts by urgency, so beemergencies won't always be at the top
*   The Apple Health integration should no longer delete derailment data points
*   Fix calculation of meditation minutes
*   Goals are now searchable in spotlight.
Full changelog here: https://github.com/beeminder/BeeSwift/blob/master/CHANGELOG.md
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
Questionable: UVI#5031 made zzq's firefox addon for your beeminder dashboard sucky if your goals had a description. [see pull request for before/after]
https://github.com/beeminder/beeminder/pull/5073
minidash branch?
deployed when?
add class so firefox add-on works right
changed the class for dashboard subtitles in PR#5066, which messed with the
firefox add-on for super-collapsing dashboard goals
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
other HELP DOCS TWEAKS:
https://help.beeminder.com/article/335-derailing-is-not-failing
TODO: fix related integrations header style (and add to table of contents)
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
////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*******************************************************************************************************************************************************************/