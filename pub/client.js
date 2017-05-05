'use strict';
// --------------------------------- 80chars ---------------------------------->
const TURL = 'https://twitter.com/';
const BURL = TURL + 'beemuvi';
const BICON = // tiny twitter birdie icon
     'https://cdn.glitch.com/048f1230-830a-4702-9106-1d28c7e8a2c9%2Fbirdie.png';

var n = 0; // global variable counting the UVIs as we generate them

// Wrap bare URLs in string s with "a href" tags; also Twitter @-mentions
function linkify(s) {
  if (/\<a href\=/.test(s)) { return s } // must be already linkified
  s = s.replace(/https?:\/\/(?:www\.)?([\w\-\.!~#?&=+\*\'"(),\/]+)/g, 
                '<a href="$&">$1</a>');
  s = s.replace(/@(\w+)\b/g, '<a href="https://twitter.com/$1">@$1</a>');
  return s
}

// Helper to generate the hovertext given deploy date d, tweet date t, comment c
function genhov(d, t, c) { // if just d's given let it be ambiguous 
  var s;
  if      (!d && !t) { s = '' }
  else if (!d && t)  { s = 'Tweeted '+t }
  else if (d && !t)  { s = ''+d }
  else if (d === t)  { s = 'Deployed & tweeted '+d }
  else               { s = 'Deployed '+d+', tweeted '+t }
  if (c && s) { s += '\n'+c }
  else if (c) { s = c }
  return s
}

// Takes UVI object and generates the html <li> element
function genli(uvi) {
  n += 1; // increment the global variable for the number of the UVI

  var num     = uvi.n || n;   // n: the number of the UVI (can omit if prev+1)
  var feat    = uvi.f;        // f: whether to highlight the UVI (boolean)
  var text    = uvi.x;        // x: the full text of the UVI
  var twurl   = uvi.u;        // u: URL of the tweet
  var date    = uvi.d;        // d: date the UVI was deployed
  var twate   = uvi.t;        // t: date the UVI was tweeted
  var comment = uvi.c;        // c: notes to selves / hovertext on link to tweet

  if (num !== n) {
    console.log(`UVI NUMBERING ERROR: ${n-1} -> ${num}`);
    n = num
  }
  
  if (!text) { text = "ERROR: "+JSON.stringify(uvi) }
  
  return '<li value="'+n+'">' + '<a name="'+n+'"></a>'
    + linkify(feat ? '<strong>'+text+'</strong>' : text)
    + ' <a href="'+(twurl ? twurl : BURL)+'" title="'
    + genhov(date, twate, comment)
    + '">'
    + '<img src="'+BICON+'"/>'
    + '</a>'
    + '</li>\n'
}

// Generate html for the ordered list of UVIs
function gen(id, l) {
  var d = document.getElementById(id);
  l.forEach(function(x) { d.insertAdjacentHTML('beforeend', genli(x)) })
}
// --------------------------------- 80chars ---------------------------------->
