'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n<2) return n;
   return n * nFactorial(n-1)
}

// EJERCICIO 2
function nFibonacci(n) {
   if(n<2) return n;
   return nFibonacci(n-1) + nFibonacci(n-2)
}

// EJERCICIO 3
function Queue() {
   this.arreglo = [];
}

Queue.prototype.enqueue= function(valor){
   this.arreglo.push(valor)
}
Queue.prototype.dequeue= function(){
   return this.arreglo.shift()
}
Queue.prototype.size= function(){
   return this.arreglo.length
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
