function fac(number){
   
    if(number < 0)
    {
        return undefined;
    }
    
    let total = 1;
    for (let n = number; n > 1; n--)
    {
        total = total * n;
    }
    return total;
}

function fac_rec(n){
    if(n === 1 || n === 0 ){
        return 1
    }
    return n * fac_rec(n-1); 
}


//console.log(fac_rec(4));

function fibonacci_iterative(n){
    if(n < 1)
    {
        return 0
    }
    if(n <= 2){
        return 1
    }

    let fib_n1 = 0;
    let fib_n2 = 1;
    let fib_n = n

    for(let i = 2; i <= n; i++)
    {
        fib_n = fib_n2 + fib_n1;
        fib_n1 = fib_n2
        fib_n2 = fib_n;
    }
    return fib_n 
}

//console.log(fibonacci_iterative(5))



function fib_recursive(n){
    if(n < 1)
    {
        return 0
    }
    if(n <= 2){
        return 1
    }
    return (fib_recursive(n-1) + fib_recursive(n-2));
}
console.log(fib_recursive(5))
