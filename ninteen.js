//global scope
var a = 10;

/*function add(){
    //local scope
    var b = 20;
    return a+b
}

console.log(add())*/

for(i=0;i<5;i++){
    let b = 20;
    console.log(a+b+i)
}
console.log("a>>>>",a)
console.log("b>>>>>",b)