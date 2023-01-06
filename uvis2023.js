const batch2023jan = [{
}, { // ------------------------------------------------------------------------
"x": "The Metaminder integration was missing datapoint info in the comment of the meta datapoints. #bugfix HT @lady_alys",
"u": ["https://twitter.com/beemuvi/status/1610439647041294337",
      "https://forum.beeminder.com/t/beeminder-push-to-beeminder-aka-rudimentary-meta-integration-aka-disintermediate-ifttt-for-foo-days-goals/10693/7?u=dreev",
      "https://github.com/beeminder/beeminder/issues/3944",
      "https://github.com/beeminder/beeminder/pull/3945"],
"d": "2023-01-01",
"t": "2023-01-03",
}, { // ------------------------------------------------------------------------
"x": "Our Strava integration started using the current date instead of the event date when adding datapoints. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1610440458496540672",
      "https://github.com/beeminder/beeminder/issues/3935",
      "https://github.com/beeminder/beeminder/pull/3937"],
"d": "2023-01-02",
"t": "2023-01-03",
}, { // ------------------------------------------------------------------------
"x": "Our webhook callback JSON now includes all the datapoint parameters documented at https://api.beeminder.com/#datapoint",
"u": ["https://twitter.com/beemuvi/status/1610444018881810433",
      "https://github.com/beeminder/beeminder/issues/2007",
      "https://github.com/beeminder/beeminder/pull/3945"],
"d": "2023-01-01",
"t": "2023-01-03",
}, { // ------------------------------------------------------------------------
"x": "UVI#4339 broke how we displayed \"Project Euler\" and in fact made it impossible to load Project Euler goal pages altogether briefly. #bugfix #zombie",
"u": ["https://twitter.com/beemuvi/status/1610445380055093251",
      "https://github.com/beeminder/beeminder/issues/3932",
      "https://github.com/beeminder/beeminder/pull/3933"],
"d": "2022-12-28",
"t": "2022-01-03",
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
}, /* --------------------------------------------------------- end 2023jan */ ]

const batch2023feb = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023feb */ ]
const batch2023mar = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023mar */ ]
const batch2023apr = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023apr */ ]
const batch2023may = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023may */ ]
const batch2023jun = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023jun */ ]
const batch2023jul = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023jul */ ]
const batch2023aug = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023aug */ ]
const batch2023sep = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023sep */ ]
const batch2023oct = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023oct */ ]
const batch2023nov = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023nov */ ]
const batch2023dec = [{
}, { // ------------------------------------------------------------------------
}, /* --------------------------------------------------------- end 2023dec */ ]

const staged = [ {
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, /* ---------------------------------------------------------- end staged */ ]


/*********************************************************************************************************************************************************************
~~~~~~----------------------------- METASTAGED -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI] awaiting more changes with slug/goalname/goalID in the API
"x": "Super mini: removed \"Deprecated\" from the 'id' field in the API docs Goal resource -- UVI#2104 sort of myopically semi-broke the API, since we want you to use the goalname (aka slug) as the identifier, but now you can change the goalname, so we'd definitely better keep the goal ID around so API clients can piece things back together if someone goes and changes a goalname on them",
"c": "It's super mini, but took lots of words to say the things",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
shortcuts in beemiOS?
https://github.com/beeminder/BeeSwift/pull/273
PR 2021-03-30, testflight 2021-06-01
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[WIP]
Punctuation after hashtags allowed
https://github.com/beeminder/road/issues/142
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[WIP?]
Set API to be json only
Remove extra respond_tos.
Add base controller format override, along with a bunch of notes, so we can figure out what we did faster, next time.
https://github.com/beeminder/beeminder/issues/1552
UVI: API users can once again get json from API urls that don't end in .json, like api/v1/users/me.
TODO: before merging this, add test for api/v1/users/me that fails without this change
TODO: add reference to wiki page in comments
TODO: review with @bsoule
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD]
beebrain: say 'eke' instead of :) if you're at tfin but on the wrong side of the bright red line. probably should be a normal beemergency in that case
also i guess now we sometimes say 'fin' and sometimes a happyface but i've forgotten why we do one vs the other... (and did we already tweet that?)
https://github.com/beeminder/road/issues/172
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[MINI/QUESTIONABLE]
made the milkman group publicly viewable and show all goals, archived or not
https://github.com/beeminder/beeminder/issues/2472
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD: BEEDROID BUGFIX IN NEXT RELEASE: TIMEZONE SHORTNAMES NOW DST-SENSITIVE]
https://forum.beeminder.com/t/tiny-bug-beedroid-timezone-inaccuracy/9746/5?u=dreev
https://github.com/beeminder/beedroid/issues/198
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] milking the ampersand fix:
https://forum.beeminder.com/t/html-entity-display-bug/7678/8?u=dreev
probably need to do something with newlines or trimming whitespace -- discussion in forum thread ensuing
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TOO LAME?]
"x": "set an error if config info is bad in the goal (e.g. habitica_type setting missing or not valid -- could be a leftover from a very legacy habitica goal? but probably won't ever happen)"
https://github.com/beeminder/beeminder/issues/2006
https://github.com/beeminder/beeminder/pull/2737
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO] unreverse withings autofetch batches
"x": "Our Withings autofetches were annoyingly (for those weighing in multiple times in a row) reversing each batch of datapoints they fetched. #bugfix",
https://github.com/beeminder/beeminder/issues/2739
"c": "This was kind of subtle for most users, or didn't impact you at all if your weigh-ins were spread out enough that we always fetched your data in between them. It matters a lot for Danny's tareable diet thing though!",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[HOLD] BeemiOS 6.0: (see UVI#4031 and UVI#4045 for the 6pm deadline thing with sleep goals)
- Bug fix for inaccurate sleep data for Apple Health goals [tweeted 2 UVIs about forcing to 6pm already]
- Preliminary support for adding data to goals via Shortcut [users disconfirm; sadface]
- username whitespace bugfix: https://github.com/beeminder/BeeSwift/issues/285
"d": "2012-12-29",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[DELETE (BEE)]
[HOLD: Probably not a UVI, and just a WIP] Improve handling of 500s from Mailgun when sending
Clarifies error message as well as retries on non-2xx response.
ADAM: @bsoule i don't have time to qualsify this at the moment, so i don't know if it works at all. If you want, you can take this over the finish line, otherwise, I can look at it when I'm back at it.
https://github.com/beeminder/beeminder/issues/2976
The retrying sounds user-visible-ish but Bee says that it's just rearranging stuff in error handling + retrying that we were already doing. Can clarify with Adam to be sure.
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[DELETE: the gissue is open! shouldn't bee in this list when it's just a gissue that exists and hasn't been addressed]
[HOLD] clocky aggday and not suppressing beebraining
fixed in 2019??
https://github.com/beeminder/beeminder/issues/703#issuecomment-1033153413
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[WIP PR; not deployed]
a url to check what beeminder sees for urlminder?
https://github.com/beeminder/beeminder/commit/6a7311cddd29dc8e4b3f5cbff1ed3d51ab29a347
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO] other coupon-killing tasks (already tweeted killing discounts for beemium)
https://github.com/beeminder/beeminder/issues/2701
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO] autodata links (like trello for the rest of them)
https://github.com/beeminder/beeminder/issues/493
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
[BEEDROID]
https://github.com/beeminder/beedroid/issues/188
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
TOO LAME?
mailgun, our email provider, was down yesterday and we resent legit checks and delayed charges for goals that derailed during that window
https://github.com/beeminder/beeminder/pull/3311
"d": "2022-06-09"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
[TODO WIP]
WIP PR: https://github.com/beeminder/beeminder/pull/3223
Much of this PR was encompassed in PR#3226 which has been deployed and UVIs composed above
Check #3255 for summary of UVIs once deployed.
https://github.com/beeminder/beeminder/issues/3225
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
ADAM TODO: 
WIP: Increase robustness of Todoist goal creation (PR #3328)
Goal creation for Todoist has been a little finicky.
This is work-in-progress that does the following:
* Fetches Todoist information when creating Todoist goals, not only when users select "projects / labels" vs "all items". This will confirm that we can talk to Todoist about this user right as we make the goal.
* Doesn't let users advance until we've gotten their Todoist info.
* Creates the checkboxes for projects and filters using a template item rather than generating the html in JS. This means as we tweak fancy_checkbox and fancy_radio_button, we'll get the same tweaks here without doing anything extra.
* Removes some places where we create html without making sure it's clean close by, and replaced it with methods that are aware of html safety.
* Caches whether or not the Todoist information has been fetched.
* Flashes to the user when an error fetching Todoist data occurs, and prevents them from going forward in goal creation.
* Hides the project/label filter list the same way it's revealed when the All Items option is reselected (#2922).
* Shows a helpful message to the user in goal creation when they've exceeded their Todoist rate limit. (#2461)
* Adds some quals, patterned after the Focusmate elf quals. However, it appears that our fancy_* are wonky enough that Capybara can't find them, and this one might be our fault. This means that some parts of the quals are commented out.
It needs more validation and some more quals.
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
https://github.com/beeminder/beeminder/issues/3465#issuecomment-1222662142
damn, i lost track of when this went live and if we already tweeted enough about this (we do have 3 UVIs in a row for it in august 2022)
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
"x": "Better api simple 404 error response" [Questionable? it was giving a 404 so maybe it's not really differentiable before and after?]
"c": "It seems like it errors while looking for the ErrorsController (to render a 404) and then ends up rendering a 404 anyway"
https://github.com/beeminder/beeminder/issues/3567
https://github.com/beeminder/beeminder/pull/3568
"d": "2022-09-13"
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
not a full UVI since we've already tweeted it more than once and embarrassingly keep missing spots of edit-warring over it:
MINI: change "goal name" to "goalname" in a couple more places
https://github.com/beeminder/beeminder/issues/3782
"d": "2022-10-27",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
HOLD: PR still open
"x": "If your Storygraph username disappeared (maybe you changed it? it happened at least once!) then we'd fail silently from then on. Now we show an error. #bugfix",
https://github.com/beeminder/beeminder/issues/3716
"d": maybe getting deployed on 2022-11-02 we'll see
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
SAVING UP FOR POST-6.2 BEEMIOS
* https://github.com/beeminder/BeeSwift/pull/330 -- possibly made autofetching faster or more reliable or less resource-intensive?
* 2022-12-21: https://github.com/beeminder/BeeSwift/pull/359 -- iOS 16 introduces support for more granular sleep tracking, with different levels of sleep. Apple Watch records this data when worn during sleep. These levels do not match the filter we were using for sleep analysis data, so Apple Watch users would not see any sleep data. Here we also count these periods as sleeping on new iOS.
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
adam's storygraph "number of books" metric
https://github.com/beeminder/beeminder/issues/3947
https://github.com/beeminder/beeminder/pull/3948/
looks like it's not live yet? <= we have the ability to count books if appropriate stuff is set in ii, but it's not added to elf yet, so not possible to set up a goal for it on your own yet.
"d": "2022-12-31" [only semi-live]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
Give 4 free goals for month of january, instead of three.
https://github.com/beeminder/beeminder/pull/3949
https://forum.beeminder.com/t/a-newbees-guide-to-beeminding-weight-now-with-meta-minding/10705
"d": "2023-01-01"
}, { // ------------------------------------------------------------------------
adam called this stale resque workers thing an infra but maybe we could call it user-visible if we can find a way to describe it?
https://github.com/beeminder/beeminder/issues/3914
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
tentative draftin purge
https://github.com/beeminder/beeminder/pull/3962
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
~~~~~~----------------------------- CANDIDATES -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~---------------------------------- IDEAS -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
1. DREEV: point to help.beeminder.com in blog.beeminder.com/newbees and vice versa
2. https://forum.beeminder.com/t/api-create-goal-documentation-needs-updating/5547
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
~~~~~~-------------------- TOO LATE / TOO LAME -------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
* Friendlier oauth names: https://github.com/beeminder/beeminder/issues/1612
* CNR on this weight-loss restart thing means maybe we fixed it long ago without realizing it? https://github.com/beeminder/beeminder/issues/1321
* fixed timeouts in jsbrain_server? https://github.com/beeminder/road/issues/51 -- depl'd probably 2020 october or earlier
* milk static-401 for more uvis? (fixing/obviating the banner bug, making it all work the same via the API)
* fixed some (most? many?) of the thing where flash banner shows up again after you leave current page & go to another page [maybe mostly only happens for admins?]
* Vimium users can now jump to the goals on the dashboard with hotkeys. something about octicons apparently?
* max-height for the landing page images, same commit url as an old one from a previous UVI about runkeeper:
  https://github.com/beeminder/beeminder/commit/94e269275c4a02a1e12c5c28c42e2faef23205b3
* Got rid of the \"Increase the pledge each time you derail\" checkbox on the goal page as it was redundant with using Pledge Caps to stop pledge increases
  [BEE: nothing was tweeted as far I can see; but also you don't have a PR/Gissue to link to with this, so maybe that + the ancientness disqualifies it?]
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
andy says this is NOT a beemios 6.0 UVI but I pasted it from somehwere that i can't remember where now so, i don't know:
* sleep related data is displayed in the recent datapoints list right away after tapping either sync button
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
//////------------------------------------------------50--------60--------70--------80--------90-------100-------110-------120-------130-------140-----------------160
*********************************************************************************************************************************************************************/
