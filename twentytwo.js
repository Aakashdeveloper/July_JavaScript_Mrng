function language(name,country){
    this.name=name;
    this.country =country;
    this.sayhi=function(a,b){return a+b}
}

var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India"}

///////Es6/////
class language1{
    constructor(name,country){
        this.name=name;
        this.country =country;  
    }
    
    sayhi(a,b){
        return a+b
    }
}

var English = new language1('English','USA')
English
language1 {name: "English", country: "USA"}