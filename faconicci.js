[0,1,1,2,3,5,8,13]

var fibonacci = function(n){
    if(n==1){
        return [0,1]
    }else{
        var data = fibonacci(n-1)
        data.push(data[data.length-1]+data[data.length-1])
        return data
    }
}

fibonacci(6)
(7) [0, 1, 2, 4, 8, 16, 32]
fibonacci(9)
(10) [0, 1, 2, 4, 8, 16, 32, 64, 128, 256]