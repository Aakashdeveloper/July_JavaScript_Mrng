function human(name){
    this.name = name;
    this.city = "NewYork";
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.color="red"
}


var john = new human('john')
var pepper = new robot('pepper')
john
human {name: "john", city: "NewYork"}
pepper
robot {name: "pepper", legs: 2, color: "red"}

human.prototype = new robot()

john.legs
2
john.color
"red"


robot.prototype = new human()
robot {name: "pepper", legs: 2, color: "red"}
pepper.city
"NewYork"