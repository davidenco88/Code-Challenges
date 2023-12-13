function drawGift(size, symbol) {
  const columnsSize = size * 2 - 2;
  const rowsSize = size * 2 - 1;
  const arrayDraw = [];

  for (let i = 0; i <= rowsSize; i++) {
    const row = [];

    for (let j = 0; j <= columnsSize; j++) {
      let rowRule = false;
      let columnRule = false;
      let faseRule = false;

      // Dibuja la primera fila de la grilla
      rowRule = i == 0;
      columnRule = j >= size - 1;
      if (rowRule && columnRule) {
        row[j] = "#";
      }

      faseRule = j < size - 1 - i;
      if (rowRule && faseRule) {
        row[j] = " ";
      }

      //dibuja las filas intermedias superiores de la grilla
      rowRule = i > 0 && i < size - 1;
      columnRule =
        j == size - 1 - i || j == columnsSize - i || j == columnsSize;
      if (rowRule && columnRule) {
        row[j] = "#";
      }

      faseRule = !columnRule && j >= size - i;
      if (rowRule && faseRule) {
        row[j] = symbol;
      }

      faseRule = j < size - 1 - i;
      if (rowRule && faseRule) {
        row[j] = " ";
      }

      // Dibuja la fila del medio de la grilla
      rowRule = i == size - 1;
      columnRule = j <= size - 1 || j == columnsSize;
      if (rowRule && columnRule) {
        row[j] = "#";
      }
      faseRule = !columnRule;
      if (rowRule && faseRule) {
        row[j] = symbol;
      }

      // Dibuja las filas intermedias inferiores de la grilla
      rowRule = i > size - 1 && i < rowsSize;
      columnRule = j == 0 || j == size - 1 || j == columnsSize + size - i - 1;
      if (rowRule && columnRule) {
        row[j] = "#";
      }
      faseRule = !columnRule && j < columnsSize + size - i - 1;
      if (rowRule && faseRule) {
        row[j] = symbol;
      }

      // Dibuja la fila final de la grilla
      rowRule = i == rowsSize - 1;
      columnRule = j <= size - 1;
      if (rowRule && columnRule) {
        row[j] = "#";
      }
    }

    if (i != rowsSize) {
      arrayDraw[i] = row.join("");
    } else {
      arrayDraw[i] = "";
    }
  }

  return arrayDraw.join("\n");
}

// *** TEST CASES ***

console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, "^"));
/*
#
*/
