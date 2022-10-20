function nFactorial (n){
    var resultado = 1;
    for(var i = 1;i<n;i++){
        resultado = resultado + i * resultado;
    }
    console.log(resultado)
}

nFactorial(5)

function nFibonacci (n){
    var resultado = [0, 1]
    for(var i = 2; i<=n;i++){
        resultado[i] = resultado[i -1] + resultado[i -2] 
    }
    console.log(resultado[n])
}

nFibonacci(6)