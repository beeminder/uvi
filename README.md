See index.html for the background about User-Visible Improvements (UVIs).

This is hosted on Glitch at [changelog.beeminder.com](https://changelog.beeminder.com ).

The interface for adding a new UVI to the changelog is as follows:

1. Add the JSON for it to pub/uvis2020.js (following a bunch of conventions only dreev knows)
2. Tweet it at twitter.com/beemuvi
3. Paste in the URL of the tweet to the JSON
4. Manually update the bmndr.com/meta/uvi graph

It sounds like that process wants more automation but it's fraught.
For example, it especially might not be worth trying to duplicate Twitter's interface and automatically tweeting. 
There are too many things like expanding @-mentions that wouldn't work as well outside of Twitter.
And I even like manually updating the Beeminder meta graph because I give 

Update: Since Twitter doubled its character limit we decided to self-impose 160 characters as the max length for a UVI.

See tweets.glitch.me for how to import your Twitter archive into a progress log like this.


## TODO LIST

1. Show tweet times in Pacific (Central before 2012 Feb?) instead of UTC
1. Codemod `.*bug.*` -> append '#bugfix'
1. Pick featured UVIs through June 2013 when we started doing that
1. Filtering options like only showing bugfixes, non-bugfixes, featured, etc
1. Top-post! https://github.com/beeminder/beeminder/issues/1530

## Acknowledgments

Thanks to Roman Kuzmichev for contributing the code to highlight UVIs when linked to as hyperlinks.
