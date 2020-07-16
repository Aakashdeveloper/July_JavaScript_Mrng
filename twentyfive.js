var person = {
    fullname:function(){
        return `${this.firstname} ${this.lastname}`
    }
}


var john = {
    firstname:'John',
    lastname:'Zoe'
}


person.fullname.call(john)
person.fullname.apply(john)


/////////
var person = {
    fullname:function(city,country){
        return `${this.firstname} ${this.lastname} ${city} ${country}`
    }
}


var john = {
    firstname:'John',
    lastname:'Zoe'
}

person.fullname.call(john,['Delhi',"India"])
"John Zoe Delhi,India undefined"
person.fullname.apply(john,['Delhi',"India"])
"John Zoe Delhi India"
person.fullname.apply(john,'Delhi',"India")
VM297:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:17
person.fullname.call(john,'Delhi',"India")
"John Zoe Delhi India"