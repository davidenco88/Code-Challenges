function maxDistance(movements) {
  const arrayMovements = movements.split("");
  let rightMovements = 0;
  let leftMovements = 0;
  let randomMovements = 0;

  arrayMovements.forEach((movement) => {
    if (movement == ">") rightMovements++;
    if (movement == "<") leftMovements++;
    if (movement == "*") randomMovements++;
  });

  if (rightMovements >= leftMovements) {
    rightMovements = rightMovements + randomMovements;
  } else {
    leftMovements = leftMovements + randomMovements;
  }

  return Math.abs(rightMovements - leftMovements);
}

// *** TEST CASES ***

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
