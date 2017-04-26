See index.html for the background about User-Visible Improvements (UVIs).

Goals for this Glitch app:

1. A numbered list of all 2252+ UVIs, with date and link to the corresponding tweet.
2. An easy way to add new UVIs.

Initially we'll do #2 by just manually tweeting each UVI and also pasting it into this Glitch app as well.

It might not be worth trying to duplicate Twitter's interface and automatically tweeting. There are too many things like expanding @-mentions and telling you how many characters you have left (accounting for shortened URLs) that wouldn't work as well outside of Twitter.

So maybe it could be the other way around: automatically fetch new @beemuvi tweets and ... I'm not sure yet. But let's first worry about goal #1.

Also it would be nice if it were easy to totally migrate away from Twitter in the future if we wanted to.

## TODO LIST

1. Format all the UVIs currently in <pre> tags
2. Merge in the UVIs that are currently only in the Twitter archive

## Twitter Export README

* The Twitter export data is in the the pub/twex directory
* The JSON export contains a full representation of your Tweets as returned by v1.1 of the Twitter API. See https://dev.twitter.com/docs/api/1.1 for more information.
