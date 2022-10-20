var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return console.log(snack);
   }
   return console.log(snack); // 'Meow Mix'
}

getFood(false);