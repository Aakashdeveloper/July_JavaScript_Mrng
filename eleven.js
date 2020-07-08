Array 
var a =['a','b','c','d']
var b =[1,2,3,4]
var c =[true,false,false,true]
var d =[3,"f",true,false,4,5,'r','r',3,'f']

var city = ["Delhi","London","Paris","Venice","Innsburg"]
undefined
city.length
5
city[0]
"Delhi"
city[3]
"Venice"

city.push('Amsterdam')
6
city
(6) ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam"]
city.push("Nice")
7
city
(7) ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]

city.pop()
"Nice"
city
["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam"]
city.pop(3)


["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam"]
city.pop(3)
"Amsterdam"

var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
undefined
city.shift()
"Delhi"
city.shift(2)
"London"
city.unshift('Dubai')
6
city
(6) ["Dubai", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]


push> Add the value at the end of the Array
pop> Remove the value from the end of the Array
Shift> Remove the value from the begining of the Array
unshift> Add value at the begining of the array


var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
undefined
city.slice(3,6)
(3) ["Venice", "Innsburg", "Amsterdam"]
city
(7) ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
undefined
city.splice(3,0,'Mumbai','Helsinki')
[]
city
(9) ["Delhi", "London", "Paris", "Mumbai", "Helsinki", "Venice", "Innsburg", "Amsterdam", "Nice"]
city.splice(2,2)
(2) ["Paris", "Mumbai"]
city
(7) ["Delhi", "London", "Helsinki", "Venice", "Innsburg", "Amsterdam", "Nice"]
city.splice(2,2,'Pune','Boston')
(2) ["Helsinki", "Venice"]
city
(7) ["Delhi", "London", "Pune", "Boston", "Innsburg", "Amsterdam", "Nice"]

var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]

undefined
city.indexOf('Mumbai')
-1
city.indexOf('Pune')
-1
city.indexOf('London')
1
city.indexOf('Amsterdam')
5

var a = ['a','b',3,4,'c']
var b =[5,'d','c',1,'f']
undefined
a+b
"a,b,3,4,c5,d,c,1,f"
a.concat(b)
(10) ["a", "b", 3, 4, "c", 5, "d", "c", 1, "f"]
var c = [4,5,6]
undefined
a.concat(b,c)
(13) ["a", "b", 3, 4, "c", 5, "d", "c", 1, "f", 4, 5, 6]
c.concat(a,b)
(13) [4, 5, 6, "a", "b", 3, 4, "c", 5, "d", "c", 1, "f"]

var url = "https://developerfunnel.herokuapp.com/restaurants"
undefined
url.split('/')
(4) ["https:", "", "developerfunnel.herokuapp.com", "restaurants"]
var a = url.split('/')
undefined
a[a.length-1]
"restaurants"

var subject="JavaScript"
undefined
subject.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

var a = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
undefined
a.toString()
"J,a,v,a,S,c,r,i,p,t"
a.toString().replace(/,/g,'')
"JavaScript"

var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]

undefined
city.sort()
(7) ["Amsterdam", "Delhi", "Innsburg", "London", "Nice", "Paris", "Venice"]
city.sort().reverse()
(7) ["Venice", "Paris", "Nice", "London", "Innsburg", "Delhi", "Amsterdam"]
city
(7) ["Venice", "Paris", "Nice", "London", "Innsburg", "Delhi", "Amsterdam"]

var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]

undefined
city.reverse()
(7) ["Nice", "Amsterdam", "Innsburg", "Venice", "Paris", "London", "Delhi"]
var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
undefined
city.includes('Delhi')
true
city.includes('Mumbai')
false


var a = Array.of(6,8,9)
undefined
a
(3) [6, 8, 9]

//Es7
var city = ["Delhi", "London",[1,2,3,['a','b','c'],4], "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
undefined
city[2][3][0]
"a"
city.flat()
(12) ["Delhi", "London", 1, 2, 3, Array(3), 4, "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
city.flat(2)
(14) ["Delhi", "London", 1, 2, 3, "a", "b", "c", 4, "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]