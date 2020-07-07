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