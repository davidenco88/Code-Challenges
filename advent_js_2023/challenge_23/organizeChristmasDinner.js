function organizeChristmasDinner(dishes) {
  let groupIngredient = [];

  dishes.forEach((dish) => {
    for (let i = 1; i < dish.length; i++) {
      const ingredient = dish[i];
      const index = groupIngredient.findIndex((item) => item[0] === ingredient);

      if (index !== -1) {
        groupIngredient[index].push(dish[0]);

        const head = [groupIngredient[index].shift()];
        groupIngredient[index].sort();

        groupIngredient[index] = head.concat(groupIngredient[index]);
      } else {
        groupIngredient.push([ingredient, dish[0]]);
      }
    }
  });

  groupIngredient.sort((a, b) => {
    const itemA = a[0].toUpperCase();
    const itemB = b[0].toUpperCase();

    if (itemA < itemB) return -1;
    if (itemA > itemB) return 1;
    return 0;
  });

  groupIngredient = groupIngredient.filter((item) => item.length > 2);

  return groupIngredient;
}

// ----------TESTS ----------------

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));

/*

"sauce" está en 2 platos: "christmas turkey" y "pizza".
"sugar" está en 2 platos: "cake" y "hot chocolate".
El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
Y los platos de cada ingrediente también están ordenados alfabéticamente.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/
