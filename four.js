var name= "alvin"
undefined
name.toUpperCase()
"ALVIN"
name.toLowerCase()
"alvin"
a.length
undefined
name[0]
"a"
name[1]
"l"
var name= "   alvin     "
undefined
a.length
undefined
name.length
13

var name= "   alvin     "
undefined
name.trim()
"alvin"
var name= "   alvin .  "
undefined
name.trim()
"alvin ."


var name = "aLViN"
undefined

name.charAt(0)
"a"
name.charAt(1)
"L"
name.slice(1)
"LViN"
name.slice(2)
"ViN"

var name = "aLViN"
undefined
name.charAt
ƒ charAt() { [native code] }
name.charAt(0)
"a"
name.charAt(1)
"L"
name.slice(1)
"LViN"
name.slice(2)
"ViN"
name.slice(2,4)
"Vi"
name.slice(1,4)
"LVi"
name.slice(1,5)
"LViN"

name.slice(a)
a here is number of word to remove
name.slice(start,end)

var name = "aLViN"
undefined
name.charAt(0).toUpperCase()
"A"
name.slice(1).toLowerCase()
"lvin"
name.charAt(
    
).toUpperCase()+name.slice(1).toLowerCase()
"Alvin"

var a  = "  I am doing Javascript  "

var a  = "  I am doing Javascript  "
undefined
a.trim().toUpperCase()
"I AM DOING JAVASCRIPT"
var a  = "I am doing Javascript"
undefined
a.replace('Javascript','JS')
"I am doing JS"
var a  = "Javascript I am doing Javascript"
undefined
a.replace('Javascript','JS')
"JS I am doing Javascript"
a.replace(/Javascript/g,'JS')
"JS I am doing JS"

var a  = "  I am doing Javascript  "
undefined
a.trim().toUpperCase()
"I AM DOING JAVASCRIPT"
var a  = "I am doing Javascript"
undefined
a.replace('Javascript','JS')
"I am doing JS"
var a  = "Javascript I am doing Javascript"
undefined
a.replace('Javascript','JS')
"JS I am doing Javascript"
a.replace(/Javascript/g,'JS')
"JS I am doing JS"

var a = 74678         
undefined
var a = 74678         
undefined
a+1
74679
var b = " dgf . "
undefined
b+1
" dgf . 1"

///////////
slice(start,end)
substring(start,end)
substr(start,length)

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2,5)
"ste"
city.substring(1)
"msterdam"
city.substring(2,5)
"ste"
city.substr(1)
"msterdam"
city.substr(2,5)
"sterd"

//////////////
var city = "Amsterdam"
undefined
city.slice(-1)
"m"
city.slice(1)
"msterdam"
city.slice(-2)
"am"
city.slice(1,-3)
"mster"
city.slice(-3,2)
""
city.slice(-3,-2)
"d"
city.slice(-4,-1)
"rda"
city.slice(-1,-4)
""

var city = "Amsterdam"

city.slice(-1)
"m"
city.substring(-1)
"Amsterdam"
city.substring(1,-3)
"A"
city.substring(1,-4)
"A"
city.substring(-1,3)
"Ams"
city.substring(-1,3)
"Ams"
city.substring(-4,-1)
""
city.substring(-1,-4)
""
var city = "Amsterdam"

///////////////////////////
undefined
city.substr(-1)
"m"
city.substr(-3,-4)
""
city.substr(-4,-1)
""
city.substr(4,-1)
""
city.substr(-1,4)
"m"

//////////
var city = "Amsterdam"
undefined
city.indexOf('s')
2
city.indexOf('x')
-1
city.indexOf('d')
6

var city = "Amsterdam"
var mytxt = "My city is "
undefined
mytxt+city
"My city is Amsterdam"
mytxt.concat(city)
"My city is Amsterdam"

///////////////////
var url = "https://github.com/Aakashdeveloper/may_react_evng_20/blob/master/extra"
undefined
url.split('/')
(8) ["https:", "", "github.com", "Aakashdeveloper", "may_react_evng_20", "blob", "master", "extra"]
var tyy = "I am learning javascript"
undefined
tyy.split(' ')
(4) ["I", "am", "learning", "javascript"]
var name = "JavaScript"
undefined
name.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

var name = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
undefined
name.toString()
"J,a,v,a,S,c,r,i,p,t"
name.toString().replace(',','')
"Ja,v,a,S,c,r,i,p,t"
name.toString().replace(/,/g,'')
"JavaScript"