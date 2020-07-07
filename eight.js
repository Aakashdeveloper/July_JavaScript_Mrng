if(condition){
    //do something
}else{
    //do something
}

var a = 8754
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var a = 8457
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}

var a = 12
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 12
if(a%2==0){
    console.log(`Number ${a} is even`)
}
if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}



var a = 12
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3===0 ||a%5===0){
   if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
   }else{
    console.log(`Number ${a} is divisible by 5`)
   }
}
else{
    console.log(`Number ${a} is odd`)
}
/////
var a = 1
if(a){
    console.log("hii")
}else{
    console.log("Bie")
}
VM112:3 hii
undefined
var a = 0
if(a){
    console.log("hii")
}else{
    console.log("Bie")
}
VM122:5 Bie


var a = true
if(a===true){

}
if(a){

}

//////Ternory///
var a = 10
a>10 ? "hii":"bie"
"bie"
var a = 10
a==10 ? "hii":"bie"
"hii"

var a = 10
a==10 ? a+1:a-1
"hii"
var a = 10
a==10 ? a+1:a-1
11