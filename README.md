See index.html for the background about User-Visible Improvements (UVIs).

Currently the interface for adding new UVIs to the changelog is to manually append them to pub/uvis2019.js and manually go tweet them and paste in the URL of the tweet. 
Oh and we also manually update the bmndr.com/meta/uvi graph.

More automation would obviously be nice.
On the other hand we've been getting by this way for thousands of UVIs now.

It especially might not be worth trying to duplicate Twitter's interface and automatically tweeting. 
There are too many things like expanding @-mentions and telling you how many characters you have left (accounting for shortened URLs) that wouldn't work as well outside of Twitter.

Btw, since Twitter doubled its character limit we decided to self-impose 160 characters as the max length for a UVI.

See tweets.glitch.me for how to import your Twitter archive into a progress log like this.


## TODO LIST

1. Show tweet times in Pacific (Central before 2012 Feb?) instead of UTC
1. Codemod `.*bug.*` -> append '#bugfix'
1. Pick featured UVIs through June 2013 when we started doing that
1. Filtering options like only showing bugfixes, non-bugfixes, featured, etc
1. Convert this into a front-end-only project, no need for Node here
1. Delete backup2020.js

## Acknowledgments

Thanks to Roman Kuzmichev for contributing the code to highlight UVIs when linked to as hyperlinks.
