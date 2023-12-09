function decode(message) {
  const stack = [];
  let result = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];

    if (char === "(") {
      stack.push(result);
      result = "";
    } else if (char === ")") {
      const reversed = result.split("").reverse().join("");
      result = stack.pop() + reversed;
    } else {
      result += char;
    }
  }

  return result;
}

// *** TEST CASES ***

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// ********solución alternativa inconclusas********

// function decodeNested(arrayChar) {
//   let parenthesisIndex = [];

//   arrayChar.forEach((char, index) => {
//     if (char === "(" || char === ")") parenthesisIndex.push(index);
//   });

//   if (parenthesisIndex.length === 2) {
//     console.log(arrayChar);
//     const invertCharacters = arrayChar
//       .slice(parenthesisIndex[0] + 1, parenthesisIndex[1])
//       .reverse();

//     invertCharacters.forEach((char, index) => {
//       arrayChar[parenthesisIndex[0] + index + 1] = char;
//     });

//     console.log(arrayChar.join("").replace("(", "").replace(")", "").split(""));

//     return arrayChar.join("").replace("(", "").replace(")", "").split("");
//   } else {
//     console.log("ingrese else");
//     const initIndex = parenthesisIndex[0] + 1;
//     const finalIndex = parenthesisIndex[parenthesisIndex.length - 1];
//     const newArrayChar = arrayChar.slice(initIndex, finalIndex);

//     decodeNested(newArrayChar);
//   }
// }
