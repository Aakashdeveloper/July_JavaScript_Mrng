for 
while
do while
for of
for in > (for objects)
////////after function////
map 
filter


for(i=0;i<5;i++){
    console.log(i)
}


var city = ["Delhi", "London", "Paris", "Venice", "Innsburg", "Amsterdam", "Nice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Delhi
VM77:4 London
VM77:4 Paris
VM77:4 Venice
VM77:4 Innsburg
VM77:4 Amsterdam
VM77:4 Nice


var city = ["Delhi", "London", "Paris",[1,2,3], "Venice", "Innsburg", "Amsterdam", "Nice"]

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
    
}

Delhi
VM87:9 London
VM87:9 Paris
VM87:6 1
VM87:6 2
VM87:6 3
VM87:9 Venice
VM87:9 Innsburg
VM87:9 Amsterdam
VM87:9 Nice


////////while///////
var i = 0
while(i<5){
    console.log(i);
    i++
}

///////Do While//////
var i = 0;
do{
    console.log(i);
    i++
}
while(i<5)

/////////
var city = ["Delhi", "London", "Paris",[1,2,3], "Venice", "Innsburg", "Amsterdam", "Nice"]
for(cities of city){
    console.log(cities)
}


for(cities of city){
    if(Array.isArray(cities)){
        for(cty of cities){
            console.log(cty)
        }
    }else{
        console.log(cities)
    }
}