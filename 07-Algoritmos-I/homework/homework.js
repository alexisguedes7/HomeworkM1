'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var factor = 2; 
  var factorarray = [];

  while (num > 1){
    if(num % factor === 0){
      factorarray.push(factor);
      num = num / factor;
    }else{
      factor++
    }
  }
  factorarray.unshift(1)
  return factorarray;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 0; i <= array.length-1; i++){
    for(var j = 0;j < array.length-i-1;j++){
      if(array[j] > array[j+1]){
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;

      }
    }
  }
  return array

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 0; i < array.length;i++){
    for(var j = i; j >= 0; j--){
      if(array[j] > array[j + 1]){
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    // var j = i;
    // while(j>=0 && array[j] > array[j + 1]){
    //   var temp = array[j];
    //   array[j] = array[j + 1];
    //   array[j + 1] = temp;
    //   j--
    // }
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length - 1; i++){
    let min = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[min]) min= j;
    }

    if(i !== min){
      let aux= array[i];
      array[i]= array[min];
      array[min]= aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
