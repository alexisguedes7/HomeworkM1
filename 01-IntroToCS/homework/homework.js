'use strict';

function BinarioADecimal(num) {
   var array = num.split('');
   var sum = 0;
   for (var i = 0;i<array.length;i++){
      sum += Math.pow(2, array.length-1-i) * array[i];
   }
   return sum;
}

function DecimalABinario(num) {
   // return num.toString(2);
   var binario = [];
   while(num>0){
      binario.unshift(num%2);
      num = Math.floor(num/2);
   }
   return binario.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
