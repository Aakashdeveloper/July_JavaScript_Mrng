/*function greet(){
    console.log("Hiiii")
}

greet()*/

///IFFI///

(function(){
    console.log("Hiiii")
}())


//////////////
function looping(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}


function* looping(userinput){
    for(i=0;i<userinput;i++){
       yield i
    }
}

looping(4)
looping {<suspended>}
var data = looping(4)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: undefined, done: true}