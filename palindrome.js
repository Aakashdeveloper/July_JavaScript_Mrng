7557

var palindrom = (data) => {
    var rem,temp,final=0;
    temp=data;
    while(data>0){
        rem=data%10
        data=parseInt(data/10)
        final = final*10+rem
    }
    if(final==temp){
        console.log(`Number ${temp} is palindrom`)
    }else{
        console.log(`Number ${temp} is not a palindrom`)
    }
}

palindrom(7887)
VM142:10 Number 7887 is palindrom
undefined
palindrom(78870)
VM142:12 Number 78870 is not a palindrom
undefined