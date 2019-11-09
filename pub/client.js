'use strict';
// --------------------------------- 80chars ---------------------------------->

// StackOverflow says this is how you check if a hash is empty in ES5
function isEmpty(obj) { return Object.keys(obj).length === 0 }

// Return the value for the given key in the querystring
function getQueryParam(key) {
  var v = false
  window.location.search.substring(1).split("&").some(function(s) {
    var pair = s.split("=")
    if (pair[0] === key) { v = pair[1]; return true }
    return false
  })
  return v
}

const MONA = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', // month array
              'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const MONAF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
               'August', 'September', 'October', 'November', 'December']
const NOTES = eval(getQueryParam('shownotes'))

var n = 0 // global variable counting the UVIs as we generate them

document.getElementById("shownotes").onclick = function() {
  Array.from(document.getElementsByClassName("note")).forEach(function(x) {
    x.classList.toggle("hidden")
  })
}

// Singular or Plural: Pluralize the given noun properly, if n is not 1. 
// Provide the plural version if irregular.
// Eg: splur(3, "boy") -> "3 boys", splur(3, "man", "men") -> "3 men"
function splur(n, noun, nounp='') {
  if (nounp === '') { nounp = noun+'s' }
  return n.toString()+' '+(n === 1 ? noun : nounp)
}

// Takes a number of days, returns human-friendly string like "over a year"
function undayify(n) {
  if (n <= 167) { return splur(n, "day") }
  if (n <= 182) { return "almost 6 months" }
  if (n <= 197) { return "over 6 months" }
  if (n <= 213) { return "almost 7 months" }
  if (n <= 228) { return "over 7 months" }
  if (n <= 243) { return "almost 8 months" }
  if (n <= 258) { return "over 8 months" }
  if (n <= 273) { return "almost 9 months" }
  if (n <= 289) { return "over 9 months" }
  if (n <= 364) { return "almost a year" }
  if (n <= 365) { return "365 days" }
  if (n <= 511) { return "over a year" }      // 511d = 1.399y
  if (n <= 547) { return "almost 1.5 years" } // 547d = 1.498y
  if (n <= 639) { return "over 1.5 years" }   // 639d = 1.749y
  if (n <= 729) { return "almost 2 years" }   // 730d = 1.999y
  if (n <= 731) { return "~2 years" }         // 366*2 = 732
  if (n <= 913) { return "over 2 years" }     // 913d = 2.4997y
  var y = Math.floor(n/365.25)
  if (n >= 365*y && n <= 365.25*y) { return `~${y} years` }
  if (n >= 365*(y+1) && n <= 365.25*(y+1)) { return `~${y+1} years` }
  if (n/365.25 - y >= .5) { return `almost ${y+1} years` }
  return `over ${y} years`
}

// Like undayify but returns like "17 days (over 2 weeks!)" or just "3 days"
function undayify_full(n) {
  var und = undayify(n)
  var spl = splur(n, "day")
  if (und === spl) { return und }
  return `${spl} (${und}!)`
}

// Wrap bare URLs in given string with "a href" tags; also Twitter @-mentions
// and UVI#123 -> <a href="#123">UVI#123</a>
// (Could play it safe and not try to do any magic if there's already markup?)
function linkify(s) {
  var alreadyMarkup = /[^\\]<a href/.test(s)

  // Find URLs that seem to be bare, not part of an a-href already, or for some
  // other reason having quotation marks or an html tag right before the http:
  s= s.replace(/([^"'>]|^)(https?:\/\/(?:www\.)?([\w\-\.!~#?&=+\*\'"(),\/]+))/g,
               '$1<a href="$2">$3</a>')  // 1 preceding char, 2 full url, 3 url
  // Don't try to do this magic if the string already had html because otherwise
  // it breaks if there was an @-mention inside a title attribute:
  if (!alreadyMarkup) {
    s = s.replace(/([^"'>\w]|^)@(\w+)\b/g, 
                  '$1<a href="https://twitter.com/$2">@$2</a>')
  }
  s = s.replace(/UVI#(\d+)/g, '<a href="#$1">UVI#$1</a>')
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
  c = c.replace(/\"/g, '&quot;')
  var s
  if      (!d && !t) { s = '' }
  else if (!d && t)  { s = 'Tweeted '+t }
  else if (d && !t)  { s = ''+d }
  else if (d === t)  { s = 'Deployed & tweeted '+d }
  else               { s = 'Deployed '+d+', tweeted '+t }
  if (c && s) { s += '\n'+c }
  else if (c) { s = c }
  return s
}

// Extract the hostname from a URL
function domain(u) {
  // var x = new URL(u); x.hostname // might be lot of overhead vs just a regex
  var m = u.match(/\:\/\/(?:www\d?\.)?([^\/]+)/)
  return m ? m[1] : ''
}

// Takes UVI object and generates the html version, with anchor link
function render(uvi) {
  var num   = uvi.n // n: the number of the UVI (can omit if prev+1)
  var subl  = uvi.s // s: whether to put this UVI in a sublist
  var feat  = uvi.f // f: whether to highlight the UVI (boolean)
  var text  = uvi.x // x: the full text of the UVI
  var urls  = uvi.u // u: URLs for this UVI, like for the corresponding tweet
  var date  = uvi.d // d: date the UVI was deployed
  var tate  = uvi.t // t: date the UVI was tweeted
  var note  = uvi.c // c: comment / note to selves / hovertext on permalink
  
  if (!text) { text = "ERROR: "+JSON.stringify(uvi) }
  else { text = linkify(feat ? embolden(text) : text) }
  if (!note) { note = '' }
  if (!urls) { urls = [] }
  if (urls.constructor !== Array) { urls = [urls] }
  urls.unshift('http://beeminder.com/changelog#'+num)
  var hovt = 'title="' + (subl ? '(#'+num+') ' : '') 
                       + genhov(date, tate, note) + '"'

  var css = { // map website to css classes including font-awesome icon
    'beeminder.com'       : 'fa fa-link        icon',
    'forum.beeminder.com' : 'fa fa-comments    icon',
    'help.beeminder.com'  : 'fa fa-info-circle icon',
    'blog.beeminder.com'  : 'fa fa-book        icon',
    'twitter.com'         : 'fa fa-twitter     icon',
    'github.com'          : 'fa fa-github      icon',
    'trello.com'          : 'fa fa-trello      icon',
    'dropbox.com'         : 'fa fa-dropbox     icon',
  }

  return '<a name="'+num+'"></a>'                        // anchor link
    + text + ' '                                         // full text, linkified
    + urls.map(function(u) {                             // icons as links
        return '<a href="'+u+'" '+hovt+'><i class="'+css[domain(u)]+'"></i></a>'
      }).join(' ') + ' '
    + '<span class="note'+(NOTES ? '' : ' hidden')+'">'
    + linkify(note)+'</span>'                            // notes to selves
}

// Convenience function. What Jquery's isNumeric does, I guess. Javascript wat?
function isnum(x) { return x - parseFloat(x) + 1 >= 0 }

// Update the global UVI counter and make sure uvi.n is set 
// --------------------------------- 80chars ---------------------------------->
function numbum(uvi) {
  if (isEmpty(uvi)) { return }
  if (uvi.n === undefined) {          // what happens if n isn't specified
    n += 1            // increment the global variable for the number of the UVI
    uvi.n = n         // uvi.n defaults to the global counter
  } else if (uvi.n === false) {       // explicit false means don't increment it
    uvi.n = n
  } else if (!isnum(uvi.n)) {
    console.log(`ERROR: Invalid value for n: ${uvi.n}`)
  } else if (uvi.n === n+1) { // n is specified explicitly but didn't need to be
    console.log(`Superfluously set n=${uvi.n} but could've let it default`)
    n += 1
  } else {
    console.log(`NUMBERING ERROR: ${n} -> ${uvi.n}`)
    
  }
  
  /*
  //uvi.n = uvi.n || n // let uvi.n default to the global counter if not set
  if (uvi.n !== n) { // let the specified number usurp the counter but complain
    if (uvi.n === n-1 && uvi.s) {
      //console.log(`Sublist starting @ ${n-1}`)
    } else {
      console.log(`NUMBERING ERROR: ${n-1} -> ${uvi.n}`)
      //document.getElementById('err2').innerHTML = "test2029"
      //var d = document.getElementById('err2037')
      //d.insertAdjacentHTML('beforeend',
      //  `<pre>NUMBERING ERROR: ${n-1} -> ${uvi.n}</pre>`)
    }
    n = uvi.n
  }
  */
}

// Takes UVI object and generates the html <li> element as a string
function genli(uvi) {
  if (isEmpty(uvi)) { return '' } // handy to have empty ones when staging them
  numbum(uvi) 
  return '<li value="'+uvi.n+'" id="'+uvi.n+'">' + render(uvi) + '</li>\n'
}

// Takes list of UVI objects and returns the stuff between the <ol> tags
function genol(l) {
  var s = ''
  // If we didn't need to deal with sublists we could just use this line:
  // l.forEach(function(x) { s += genli(x) })
  for (var i = 0; i < l.length; i += 1) {
    if (i < l.length-1 && l[i+1].s) { // a UVI with sub-UVIs!
      numbum(l[i])
      // At this point, i points to the "header" UVI for the sublist
      s += '<li value="'+l[i].n+'">' + render(l[i]) + '<ul>\n'
      i += 1 // Increment i to point to the first UVI in the sublist
      for (; i < l.length && l[i].s; i += 1) { s += genli(l[i]) }
      // At this point, i points to the first UVI after the sublist is done
      i -= 1 // Scooch back to last UVI in sublist -- outer for-loop increments
      s += '\n</ul></li>\n'
    }
    else { s += genli(l[i]) }
  }  
  return s
}

// Generate html for a batch of UVIs including the year/month header
function genbatch(year, mon) {
  var d = document.getElementById(year + MONA[mon-1])
  var l = eval("batch" + year + MONA[mon-1])
  d.insertAdjacentHTML('beforeend', '<h3>'+year+' '+MONAF[mon-1]+'</h3>')
  d.insertAdjacentHTML('beforeend', '\n<ol>\n' + genol(l) + '</ol>\n')
}

// Generate html for the batch of staged UVIs
function genstaged() {
  var d = document.getElementById('stg')
  var l = eval('staged')
  if (l.every(function(x) { return isEmpty(x) })) { return }
  d.insertAdjacentHTML('beforeend', '<h3 class="grayout">'
    +"<br>Staged UVIs (not official until tweeted as well as deployed)</h3>")
  d.insertAdjacentHTML('beforeend', '<ol class="grayout">\n'+genol(l)+'</ol>')
}

// --------------------------------- 80chars ---------------------------------->
