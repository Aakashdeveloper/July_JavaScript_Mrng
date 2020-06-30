true  is equal to 1
false is equal to 0

var a = true
var b = 10

var a = true
var b = 10
undefined
a+b
11
true+true
2
true+false
1
true+'a'
"truea"
'true'+'true'
"truetrue"

///////////////
console.log => debugging or checking output
alert => message / popup message/ notification
prompt=> userInput
confirm

alert("Form Submitted")
undefined
alert("Form Submitted")
undefined
prompt('What is your age')
"44"
var age = prompt('What is your age')
undefined
age
"33"
var name = prompt('What is your name')
undefined
name
"John"
confirm("Do you want to leave")
true
confirm("Do you want to leave")
false
var output = confirm("Do you want to leave")
undefined
output
true
///////////////////
var first = prompt("Enter first number")
var second = prompt("Enter second number")
var output = (parseFloat(first)+parseFloat(second)).toFixed(2)
alert(output)

first
"44"
var a = "10"
undefined
parseInt(a)
10
var b = "10.44"
undefined
parseInt(b)
10
parseFloat(b)
10.44
parseFloat(a)
10

var a = 54.9966
undefined
a.toFixed(2)
"55.00"
var a = 55.23
undefined
var a = 55.23553
undefined
a.toFixed(2)
"55.24"


///////////////
isNaN > is not a number
isNaN('a')
true
isNaN(44)
false
isNaN('fdfvfvv')
true
isNaN(53454)
false

var a = NaN
undefined
var b = 20
undefined
a+b
NaN
a-b
NaN
var c = 'a'
undefined
a+c
"NaNa"
typeof(a)
"number"

var a = NaN
undefined
var b = 20
undefined
a+b
NaN
a-b
NaN
var c = 'a'
undefined
a+c
"NaNa"
typeof(a)
"number"
a-c
NaN
var d =NaN
undefined
a-d
NaN
a+d
NaN