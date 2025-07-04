See index.html for the background about User-Visible Improvements (UVIs).

This is hosted on Glitch at [changelog.beeminder.com](https://changelog.beeminder.com "Or uvi.glitch.me").
PS: Migrating to GitHub Pages now...

Interface / protocol for adding a new UVI to the changelog:

1. Add the JSON for it to pub/uvis2022.js (following a bunch of conventions only dreev knows)
2. Include a link to the relevant gissue
3. Tweet it at twitter.com/beemuvi
4. Paste in the URL of the tweet to the JSON
5. Manually update the beeminder.com/meta/uvi graph
6. Double check that the total number of UVIs at beeminder.com/changelog matches the total in the stats tab at beeminder.com/meta/uvi
7. Paste the canonical UVI link (e.g., beeminder.com/changelog#123) into the relevant gissue

Adding more automation to the above is easier said than done.
For example, Twitter's UI with expanding @-mentions and stuff wouldn't work as well outside of Twitter.
And I even kinda like manually updating the Beeminder meta graph because I characterize the UVI with a short phrase there that makes it easier to refer to.

Early UVIs adhered to Twitter's original 140-character limit. When Twitter doubled its character limit we decided to self-impose 160 characters as the max length for a UVI.

See tweets.glitch.me for how to import your Twitter archive into a progress log like this.

## Data structure for UVIs

```
f: featured                              [bool: default false]
s: sub-UVI                               [bool: default false]
n: new number                            [bool: default true]
x: text of UVI                           [string]
u: list of links (urls)                  [list of strings]
d: date deployed                         [YYYY-MM-DD string]
t: date tweeted/logged/announced/entered [YYYY-MM-DD string]
c: comment / note to selves              [string]
```

Planned refactor:

```
f: Featured / bolded / highlighted       [bool: default false]
i: sub-UVI / Indented                    [bool: default false]
c: Continuation / no new number          [bool: default false]
x: teXt of UVI / log entry               [string]
l: list of Links / urls                  [list of strings]
d: date Deployed                         [YYYY-MM-DD string]
e: date tweeted/logged/announced/Entered [YYYY-MM-DD string]
s: comment / note to Selves              [string]
```

So `f`, `x`, and `d` are unchanged;
`s`, `u`, `t`, and `c` become `i`, `l`, `e`, and `s`;
and `n` gets toggled and becomes `c`.

Migration plan for that refactoring:
 1. Leave "f" alone
 2. Change "s" to "i"
 3. Change "n" to "newnum"  
 4. Leave "x" alone
 5. Change "u" to "l"
 6. Leave "d" alone
 7. Change "t" to "e"
 8. Change "c" to "s"   
 9. Change "newnum" to "c" and toggle the true/false-ness

## TODO LIST

1. Show tweet times in Pacific (Central before 2012 Feb?) instead of UTC
1. Codemod `.*bug.*` -> append '#bugfix'
1. Pick featured UVIs through June 2013 when we started doing that
1. Filtering options like only showing bugfixes, non-bugfixes, featured, etc
1. Top-post! https://github.com/beeminder/beeminder/issues/1530
1. Refactor #regression to #zombie

## Acknowledgments

Thanks to Roman Kuzmichev for contributing the code to highlight UVIs when linked to as hyperlinks.
