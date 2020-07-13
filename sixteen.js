Map
> Help to iterate over the array and play the logic
Filter
> Help to filter out the values from array

var a = [2,3,6,7,5,9]
a.map((data) => { return data*2})
(6) [4, 6, 12, 14, 10, 18]


var a = [2,3,6,7,5,9]
a.map((data) => { return data/2})
(6) [1, 1.5, 3, 3.5, 2.5, 4.5]


var a = [2,3,6,7,5,9,11,2,6,8,4,6]
a.map((data) => { return data>5})
[false, false, true, true, false, true, true, false, true, true, false, true]


var a = [2,3,6,7,5,9,11,2,6,8,4,6]
a.filter((data) => { return data>5})
(7) [6, 7, 9, 11, 6, 8, 6]

//////////////////////////////////////
var a = [0,1,2,3,4]
a.map((data) =>  { return data*2})
[0, 2, 4, 6, 8]
a.filter((data) =>  { return data*2})
[1, 2, 3, 4]