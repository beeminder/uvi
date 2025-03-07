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
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025feb */ ]

batches['2025mar'] = [{
}, { // ------------------------------------------------------------------------
"x": "Help docs: New FAQ item / clarification in the article for the Fatebook autodata integration, plus copy tweaks to 3 other articles",
"u": ["https://x.com/beemuvi/status/1896723193441964234",
      "https://help.beeminder.com/article/366-fatebook",
      "https://help.beeminder.com/article/16-what-is-a-legit-derailment",
      "https://help.beeminder.com/article/360-what-is-no-excuses-mode",
      "https://help.beeminder.com/article/61-apple-health"],
"t": "2025-03-03",
}, { // ------------------------------------------------------------------------
"x": "Help docs: The Focusmate autodata integration article now covers the new time-based metric, plus copy tweaks or added details to 4 more articles",
"u": ["https://x.com/beemuvi/status/1896724799818543295",
      "https://help.beeminder.com/article/278-focusmate",
      "https://help.beeminder.com/article/17-what-happens-when-i-derail",
      "https://help.beeminder.com/article/290-clozemaster",
      "https://help.beeminder.com/article/288-codecombat",
      "https://help.beeminder.com/article/364-curlex"],
"t": "2025-03-03",
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025mar */ ]

batches['2025apr'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025apr */ ]

batches['2025may'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025may */ ]

batches['2025jun'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025jun */ ]

batches['2025jul'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025jul */ ]

batches['2025aug'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025aug */ ]

batches['2025sep'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025sep */ ]

batches['2025oct'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025oct */ ]

batches['2025nov'] = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2025nov */ ]

batches['2025dec'] = [{
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
anything else to milk from humble bundle?
https://github.com/beeminder/beeminder/pull/4762
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
* accidentally showed deadbeat briefly: https://github.com/beeminder/BeeSwift/issues/586
* sort-by-pledge matches website: https://github.com/beeminder/BeeSwift/issues/578
* fix blank icon in iOS 17: https://github.com/beeminder/BeeSwift/issues/621
* incremental goal updates: https://github.com/beeminder/BeeSwift/pull/635
* date is wrong at first? or was this in 6.7?: https://github.com/beeminder/BeeSwift/issues/473
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
- UNCLE api endpoint [TODO: document in api and then we can count this]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
HELP DOCS
small or no UVI yet:
https://help.beeminder.com/article/11-fitbit
Added a note that Fitbit can be used as a bridge to Beeminder for data from other services. Small UVI, or no UVI because I haven’t explained how?
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
andy aggday thing:
https://github.com/beeminder/beeminder/compare/4b2219ce39f7%5E...f15111044035
andy aggday stuff?
https://github.com/beeminder/beeminder/pull/5180#event-16518662889

5b53565 small refactor for goal method
5e442fa show aggday warnings
74e7b48 add datapoint helper for formatted value
1c83ca2 use new datapoint method for formatted value
a1e8a61 move aggday info to its own box
0fb91a7 link to docs for all aggday options

}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "We added an explicit link to the dashboard in the dropdown menu in the upper right of the website; apparently not everyone knew how to find the dashboard",
"u": ["https://x.com/beemuvi/status/1895274339584679995",
      "https://github.com/beeminder/beeminder/pull/5181"],
"d": "2025-02-27",
"t": "2025-02-27",
}, { // ------------------------------------------------------------------------
"x": "While we were at it we changed \"gallery\" to \"gallery view\" and added some handy tooltips",
"u": ["https://x.com/beemuvi/status/1895573333862989913",
      "https://github.com/beeminder/beeminder/pull/5181"],
"t": "2025-02-28",
}, { // ------------------------------------------------------------------------
TODO: oops, forgot to move the two things above up
}, { // ------------------------------------------------------------------------
"x": "For consistency (and cuteness?) and I guess in some cases actual usefulness, we added tooltips to pretty much everything in the navbar and dropdown menu",
"u": ["https://x.com/beemuvi/status/1897080286581842025",
      "https://github.com/beeminder/beeminder/issues/5182",
      "https://github.com/beeminder/beeminder/pull/5184"],
"t": "2025-03-04",
}, { // ------------------------------------------------------------------------
"x": "Oops, we accidentally swapped the Log In and Sign Up links. #bugfix #zombie",
"u": ["https://x.com/beemuvi/status/1897451417662812638",
      "https://forum.beeminder.com/t/log-in-and-sign-up-buttons-permuted/12269",
      "https://github.com/beeminder/beeminder/pull/5189"],
"t": "2025-03-05",
}, { // ------------------------------------------------------------------------
"x": "While we were at it / for completionism, we added tooltips to the remaining navbar / menu items, and improved several of them",
"u": ["https://x.com/beemuvi/status/1897451534675595342",
      ],
"t": "2025-03-05",
}, { // ------------------------------------------------------------------------
"x": "Help docs: Clarification about donations to freeCodeCamp in the article about the autodata integration, plus tweaks to 2 other autodata articles",
"u": ["https://x.com/beemuvi/status/1897814167329161530",
      "https://help.beeminder.com/article/287-freecodecamp",
      "https://help.beeminder.com/article/80-duolingo",
      "https://help.beeminder.com/article/74-garmin"],
"t": "2025-03-06",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
don't delete derail datapt in autodata
for #4192.
needs quals for autodatas, and decide if ths is correct response to 4192
https://github.com/beeminder/beeminder/pull/5183
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
finish up using noderail scope #5186
UVI: this is a followon to 4192, but does not constitute a UVI on its own.
https://github.com/beeminder/beeminder/pull/5186
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
