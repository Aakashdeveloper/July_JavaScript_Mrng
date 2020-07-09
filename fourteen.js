function
method
arrow function
Iffi
Generator
//////////
var a = 10
var b = 20
a+b
30


////////Function//////
function add(a,b){
    return a+b
}

add(1,2)
3
add(2,2)
4
add('a','b')
"ab"


function isEven(userinput){
    var out;
    if(userinput%2==0){
        out = "even"
    }else{
        out = "odd"
    }
    return out
}


isEven(2)
"even"
isEven(4)
"even"
isEven(5)
"odd"



///////method///
var add = function(a,b){
    return a+b
}

add(1,2)
3


//////Es6=> arrow//////
var add = (a,b) =>  {return a+b}
add(1,2)
3