function revealSabotage(store) {
  const matrixResult = [];

  for (const [i, rowStore] of store.entries()) {
    const row = [];

    for (const [j, cellStore] of rowStore.entries()) {
      if (cellStore === "*") {
        row.push("*");
        continue;
      }

      const zone = [];

      if (store[i - 1] !== undefined) {
        zone.push(...store[i - 1].slice(j - 1 < 0 ? 0 : j - 1, j + 2));
      }

      if (store[i + 1] !== undefined) {
        zone.push(...store[i + 1].slice(j - 1 < 0 ? 0 : j - 1, j + 2));
      }

      zone.push(...store[i].slice(j - 1 < 0 ? 0 : j - 1, j + 2));
      row.push(
        String(zone.join("").replaceAll(" ", "").length).replace("0", " ")
      );
    }

    matrixResult[i] = row;
  }

  return matrixResult;
}

//------------TEST-------------

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
