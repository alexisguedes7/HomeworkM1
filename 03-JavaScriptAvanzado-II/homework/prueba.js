function counter() {
    let contador=1;
    return function(){
      return contador++;
    }
  }

  var contador1 = counter();

  console.log(contador1());
  console.log(contador1());
  console.log(contador1());
  console.log(contador1());
  console.log(contador1());