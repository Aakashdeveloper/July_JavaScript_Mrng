if you to match multiple condition and have multiple output
if one condition and multiple output


var name = "John"

switch(name){
    case 'Aakash':
        console.log('Your are user')
        break;
    case 'Eva':
        console.log('Your are Admin')
        break;
    case 'John':
        console.log('Your are Super Admin')
        break;
    default:
        console.log('I dont know you')
    
}


switch(new Date().getDay()){
    case 1:
        console.log('Today is monday')
        break;
    case 2:
        console.log('Today is Tuesday')
        break;
    case 3:
        console.log('Today is Wednesday')
        break;
    default:
        console.log('Wrong Input')
}