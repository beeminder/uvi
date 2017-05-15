'use strict';
// --------------------------------- 80chars ---------------------------------->
const TURL = 'https://twitter.com/';
const BURL = TURL + 'beemuvi';
const BICON = // tiny twitter birdie icon
     'https://cdn.glitch.com/048f1230-830a-4702-9106-1d28c7e8a2c9%2Fbirdie.png';
const MONA = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', // month array
              'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const MONAF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
               'August', 'September', 'October', 'November', 'December'];

var n = 0; // global variable counting the UVIs as we generate them

// Wrap bare URLs in given string with "a href" tags; also Twitter @-mentions
// (Could play it safe and not try to do any magic if there's already markup?)
function linkify(s) {
  var alreadyMarkup = /[^\\]<a href/.test(s);

  // Find URLs that seem to be bare, not part of an a-href already, or for some
  // other reason having quotation marks or an html tag right before the http:
  s= s.replace(/([^"'>]|^)(https?:\/\/(?:www\.)?([\w\-\.!~#?&=+\*\'"(),\/]+))/g,
               '$1<a href="$2">$3</a>'); // 1 preceding char, 2 full url, 3 url
  // Don't try to do this magic if the string already had html because otherwise
  // it breaks if there was an @-mention inside a title attribute:
  if (!alreadyMarkup) {
    s = s.replace(/([^"'>]|^)@(\w+)\b/g, 
                  '$1<a href="https://twitter.com/$2">@$2</a>')
  }
  return s
}

// Add html to a featured tweet (given as a string) to make it bold/big
function embolden(s) {
  if (!/<strong>/.test(s)) { s =  '<strong>' + s + '</strong>' }
  s = '<font size="+1">' + s + '</font>'
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

// Takes UVI object and generates the html version, with anchor link
function render(uvi) {
  var num     = uvi.n;        // n: the number of the UVI (can omit if prev+1)
  var subl    = uvi.s;        // s: whether to put this UVI in a sublist
  var feat    = uvi.f;        // f: whether to highlight the UVI (boolean)
  var text    = uvi.x;        // x: the full text of the UVI
  var twurl   = uvi.u;        // u: URL of the tweet
  var date    = uvi.d;        // d: date the UVI was deployed
  var twate   = uvi.t;        // t: date the UVI was tweeted
  var comment = uvi.c;        // c: notes to selves / hovertext on link to tweet
  
  if (!text) { text = "ERROR: "+JSON.stringify(uvi) }
  
  return '<a name="'+num+'"></a>'
    + linkify(feat ? embolden(text) : text)
    + ' <a href="'+(twurl ? twurl : BURL)+'" title="'
    + (subl ? '(#'+num+') ' : '') 
    + genhov(date, twate, comment)
    + '">'
    + '<img src="'+BICON+'"/>'
    + '</a>'
}

// Update the global UVI counter and make sure uvi.n is set 
function numbum(uvi) {
  n += 1; // increment the global variable for the number of the UVI
  uvi.n = uvi.n || n; // let uvi.n default to the global counter if not set
  if (uvi.n !== n) { // let the specified number usurp the counter but complain
    if (uvi.n === n-1 && uvi.s) {
      console.log(`Sublist starting @ ${n-1}`);
    } else {
      console.log(`NUMBERING ERROR: ${n-1} -> ${uvi.n}`);
    }
    n = uvi.n 
  }
}

// Takes UVI object and generates the html <li> element
function genli(uvi) {
  numbum(uvi) 
  return '<li value="'+uvi.n+'">' + render(uvi) + '</li>\n'
}

// Generate html for the ordered list of UVIs
// Deprecated.
function gen(id, l) {
  var d = document.getElementById(id);
  // If we didn't need to deal with sublists we could just use this line:
  // l.forEach(function(x) { d.insertAdjacentHTML('beforeend', genli(x)) })
  for (var i = 0; i < l.length; i += 1) {
    if (i < l.length-1 && l[i+1].s) { // a UVI with sub-UVIs!
      numbum(l[i]);
      // At this point, i points to the "header" UVI for the sublist
      var chunk = '<li value="'+l[i].n+'">' + render(l[i]) + '<ol>\n';
      i += 1; // Increment i to point to the first UVI in the sublist
      for (; i < l.length && l[i].s; i += 1) { chunk += genli(l[i]) }
      // At this point, i points to the first UVI after the sublist is done
      i -= 1; // Scooch back to last UVI in sublist -- outer for-loop increments
      chunk += '\n</ol></li>\n';
      d.insertAdjacentHTML('beforeend', chunk);
    }
    else { d.insertAdjacentHTML('beforeend', genli(l[i])) }
  }
}

// Generate html for a batch of UVIs including the year/month header
function genbatch(year, mon) {
  //console.log('Generating html for '+year+'-'+mon+' batch');
  var d = document.getElementById(year + MONA[mon-1]);
  var l = eval("batch" + year + MONA[mon-1]);
  d.insertAdjacentHTML('beforeend', '<h3>'+year+' '+MONAF[mon-1]+'</h3>');
  var s = '';
  // If we didn't need to deal with sublists we could just use this line:
  // l.forEach(function(x) { s += genli(x) })
  for (var i = 0; i < l.length; i += 1) {
    if (i < l.length-1 && l[i+1].s) { // a UVI with sub-UVIs!
      numbum(l[i]);
      // At this point, i points to the "header" UVI for the sublist
      s += '<li value="'+l[i].n+'">' + render(l[i]) + '<ul>\n';
      i += 1; // Increment i to point to the first UVI in the sublist
      for (; i < l.length && l[i].s; i += 1) { s += genli(l[i]) }
      // At this point, i points to the first UVI after the sublist is done
      i -= 1; // Scooch back to last UVI in sublist -- outer for-loop increments
      s += '\n</ul></li>\n';
    }
    else { s += genli(l[i]) }
  }
  d.insertAdjacentHTML('beforeend', '\n<ol>\n' + s + '</ol>\n')
}
// --------------------------------- 80chars ---------------------------------->
