var moviename = "MadMax";
var movierating = 4
var movielang = "English"
//literal notation
//constructor notation

var movies = {
    name:'MadMax',
    rating:4,
    lang:"English"
}

movies.name
"MadMax"
movies
{name: "MadMax", rating: 4, lang: "English"}
typeof(movies)
"object"
movies.lang
"English"
movies.rating= 4.5
4.5
movies
{name: "MadMax", rating: 4.5, lang: "English"}
movies.genere="Action"
"Action"
movies
{name: "MadMax", rating: 4.5, lang: "English", genere: "Action"}
delete movies.lang
true
movies
{name: "MadMax", rating: 4.5, genere: "Action"}

movies['name']
"MadMax"
movies['rating']
4
movies['lang']
"English"

//JSON> JavaScript Object notation
var movies = [
    {
        name:'MadMax',
        rating:4,
        lang:"English"
    },
    {
        name:'Avengers',
        rating:4.5,
        lang:"English"
    },
    {
        name:'Death Race',
        rating:3.5,
        lang:"English"
    }
]

movies
(3) [{…}, {…}, {…}]
movies[1].name
"Avengers"
movies[2].rating
3.5


////////
var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say hi to everyone`
    }
}

sayhi.firstname
"John"
sayhi.lastname
"Ammy"
sayhi.greet()
"Say hi to everyone"


var calc={
    sum:(a,b) => {return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc.sum(3.5)
NaN
calc.sum(3,5)
8
calc.sum(5,2)
7
calc.sub(5,2)
3

var dbquery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,dbObj)=>{return `insert into ${table} name,city VALUES(${dbObj.name},${dbObj.city})`}
}

dbquery.find('Employee')
"Select * from Employee"
dbquery.insert('student',{name:'John',city:'Delhi'})
"insert into student name,city VALUES(John,Delhi)"