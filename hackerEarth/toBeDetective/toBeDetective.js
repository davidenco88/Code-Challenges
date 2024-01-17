function solution(pin) {
  const pinString = String(pin);
  const numbers = {
    0: [0, 8],
    1: [1, 2, 4],
    2: [2, 1, 3, 5],
    3: [3, 2, 6],
    4: [4, 5, 1, 7],
    5: [5, 4, 6, 2, 8],
    6: [6, 5, 3, 9],
    7: [7, 8, 4],
    8: [8, 7, 9, 5, 0],
    9: [9, 8, 6],
  };

  function combineDigits(arrays, indice, aux) {
    if (indice === arrays.length) {
      pinOptions.push(Number(aux.join("")));
      return;
    }

    for (const digito of arrays[indice]) {
      combineDigits(arrays, indice + 1, [...aux, digito]);
    }
  }

  const arrayDigits = pinString.split("").map((digit) => {
    return numbers[digit];
  });

  const pinOptions = [];
  combineDigits(arrayDigits, 0, []);

  pinOptions.sort();

  return pinOptions;
}

console.log(solution("11"));
