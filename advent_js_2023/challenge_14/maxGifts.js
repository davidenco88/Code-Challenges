function maxGifts(houses) {
  const n = houses.length;

  let suma1 = houses[0] < houses[1] ? houses[1] : houses[0];
  let suma2 = houses[0];

  for (let i = 2; i < n; i++) {
    let sumTemp = suma1;

    if (suma1 < suma2 + houses[i]) {
      suma1 = suma2 + houses[i];
    }

    suma2 = sumTemp;
  }

  const set = [0, houses[0], suma1];
  return set[+(n > 0) + (n > 1)];
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
