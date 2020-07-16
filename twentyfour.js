class geo{
    constructor(lat,long){
        this.lat = 10;
        this.long=20;
    }
}

class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country
    }
}


var English = new language('English','USA')