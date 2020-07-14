var firstname="Michal";
var lastname="Zoe";

var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say hi to ${firstname} ${lastname}`
    }
}
sayhi.greet()
"Say hi to Michal Zoe"


var firstname="Michal";
var lastname="Zoe";

var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}
sayhi.greet()
"Say hi to John Ammy"



///////constructor////
var car = new Object()
car.color="red"
car.brand="BMW"

car
{color: "red", brand: "BMW"}