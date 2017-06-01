See index.html for the background about User-Visible Improvements (UVIs).

Goals for this Glitch app:

1. A numbered list of all 2252+ UVIs, with date and link to the corresponding tweet.
2. An easy way to add new UVIs.

Initially we'll do #2 by just manually tweeting each UVI and also pasting it into this Glitch app as well.

It might not be worth trying to duplicate Twitter's interface and automatically tweeting. 
There are too many things like expanding @-mentions and telling you how many characters you have left (accounting for shortened URLs) that wouldn't work as well outside of Twitter.

Also it would be nice if it were easy to totally migrate away from Twitter in the future if we wanted to.

## TODO LIST

1. Replace links to tweets -- grep \"https://twitter.com/beemuvi/status -- with anchor links to UVIs
1. Show tweet times in Pacific instead of UTC
1. Codemod (fixed bug, bugfixed, `bug.*fix`, etc) -> append '#bugfix'
1. Pick featured UVIs through June 2013 when we started doing that
1. Filtering options like only showing bugfixes, non-bugfixes, featured, etc
