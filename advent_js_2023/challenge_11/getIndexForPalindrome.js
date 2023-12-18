function getIndexsForPalindrome(word) {
  function isPalindrome(word) {
    return word.split("").reverse().join("") === word;
  }

  const positionChange = [];

  if (isPalindrome(word)) return positionChange;

  for (const [i, char1] of [...word].entries()) {
    for (const [j, char2] of [...word].entries()) {
      const newWord = [...word];
      newWord[i] = char2;
      newWord[j] = char1;
      if (isPalindrome(newWord.join(""))) return [i, j];
    }
  }

  return null;
}

const result = getIndexsForPalindrome("rdeder");
console.log(result);

// This is other option to explore

// function getIndexsForPalindrome(word) {

//   function isPalindrome(word) {
//     return word.split("").reverse().join("") === word;
//   }

//   const slice1 = word.slice(0, Math.trunc(word.length / 2) - 1).split("");
//   const slice2 = word
//     .slice(Math.trunc(word.length / 2) + (word.length % 2), word.length - 1)
//     .split("")
//     .reverse();

//   const positionChange = [];

//   slice1.forEach((char, index) => {
//     if (char === slice2[index]) {
//       positionChange.push([index, index + slice1.length]);
//     }
//   });

//   if (positionChange.length === 1) return positionChange[0];

//   return null;
// }
