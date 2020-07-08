RegExp


^[a-z]$

var a = "hi"

var a = "hi"
undefined
a.match("^[a-z]$")
null
var a = "h"
undefined
a.match("^[a-z]$")
["h", index: 0, input: "h", groups: undefined]
a.match("^[a-z]+$")
["h", index: 0, input: "h", groups: undefined]
var a = "hi"
undefined
a.match("^[a-z]+$")
["hi", index: 0, input: "hi", groups: undefined]
a.match("^[a-z]{2,6}$")

a.match("^[a-zA-Z0-9]{2,6}$")


var phone = 9678597689
phone.match("^[0-9]{10}$")
VM1213:3 Uncaught TypeError: phone.match is not a function
    at <anonymous>:3:7
(anonymous) @ VM1213:3
phone.toString().match("^[0-9]{10}$")
["9678597689", index: 0, input: "9678597689", groups: undefined]

var email="a@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email="a@.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email="a@a"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email="a@a."

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null



