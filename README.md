See index.html for the background about User-Visible Improvements (UVIs).

Currently the interface for adding new UVIs to the changelog is to manually append them to pub/uvis2017.js and manually go tweet them and paste in the URL of the tweet. 
Oh and we also manually update the bmndr.com/meta/uvi graph.

More automation would obviously be nice.

But it might not be worth trying to duplicate Twitter's interface and automatically tweeting. 
There are too many things like expanding @-mentions and telling you how many characters you have left (accounting for shortened URLs) that wouldn't work as well outside of Twitter.


## TODO LIST

1. Show tweet times in Pacific (Central before 2012 Feb?) instead of UTC
1. Codemod `.*bug.*` -> append '#bugfix'
1. Pick featured UVIs through June 2013 when we started doing that
1. Filtering options like only showing bugfixes, non-bugfixes, featured, etc

from Roman Kuzmichev:

I've looked at http://uvi.glitch.me/#2465 page, and it looks like you use `value`s in `li`s, not `id`s. Why?
You would get jumping to anchor for free, and `:target` highlighting too.
