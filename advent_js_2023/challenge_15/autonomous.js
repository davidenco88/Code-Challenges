function autonomousDrive(store, movements) {
  const rowDimention = store.length;
  const columnDimention = store[0].length;

  let row = store.findIndex((row) => row.includes("!"));
  let column = store[row].split("").findIndex((cell) => cell === "!");

  for (const movement of movements) {
    if (movement === "R") {
      if (column + 1 < columnDimention && store[row][column + 1] === ".") {
        store[row] = store[row].replace("!", ".");
        column += 1;
        store[row] = [...store[row]];
        store[row][column] = "!";
        store[row] = store[row].join("");
        continue;
      }
    }

    if (movement === "L") {
      if (column - 1 >= 0 && store[row][column - 1] === ".") {
        store[row] = store[row].replace("!", ".");
        column -= 1;
        store[row] = [...store[row]];
        store[row][column] = "!";
        store[row] = store[row].join("");
        continue;
      }
    }

    if (movement === "U") {
      if (row - 1 >= 0 && store[row - 1][column] === ".") {
        store[row] = store[row].replace("!", ".");
        row -= 1;
        store[row] = [...store[row]];
        store[row][column] = "!";
        store[row] = store[row].join("");
        continue;
      }
    }

    if (movement === "D") {
      if (row + 1 < rowDimention && store[row + 1][column] === ".") {
        store[row] = store[row].replace("!", ".");
        row += 1;
        store[row] = [...store[row]];
        store[row][column] = "!";
        store[row] = store[row].join("");
        continue;
      }
    }
  }

  console.log(row, column);
  return store;
}

const store = ["..!....", "...*.*."];

const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",
  "...*!*."
]
*/

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.
