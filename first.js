es 
Ecma Script 
Es5
Es6
Es7

////////////////////
DataTypes
//////////////
String = "gregr" 'rrgrg' '2434' "43534"
Number = 5  355345 45.34 565465654
Boolean = true/false
null
undefined


var a = "Hi"
var b = 10
var c = true
undefined
typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"
var d = 10.887
undefined
typeof(d)
"number"
var e = "10.887"
undefined
typeof(e)
"string"


////////////////////
var a = 10
undefined
var b = 20
undefined
a+b
30
a-b
-10
a/b
0.5
a*b
200
b%a (modules/reminder)
0

4%2
0
4%3
1
4%4
0
4%1
0

2%4
100%101
modules of smaller to higher is always smaller
//////////////
var a = "Hi"
var b = " JavaScript"
undefined
a+b
"Hi JavaScript"
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN
a%b
NaN

var a = "Hi"
undefined
var b = 10
undefined
a+b
"Hi10"
a-b
NaN
b+a
"10Hi"

String+String= String
Number+String= String
String+Number= String
Number+Number= Number

"10"+10+"10"
"101010"
10+10+"10"
"2010"
"10"+10+10
"101010"

"10"+10+"10"-1
101009
10+10+"10"-1
2009
"10"+10+10-1
101009

"10"-"a"
NaN
"10"+"1"
"101"
"10"-"1"
9
"10"*"2"
20
"10"/"2"
5
"10"/"2a"
NaN
"10a"-1
NaN
"10"-1
9
"10"-'qa'
NaN