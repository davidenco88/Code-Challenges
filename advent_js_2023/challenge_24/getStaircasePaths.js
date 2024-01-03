function getStaircasePaths(steps, maxJump) {
  return [];
}

//----------TESTS----------

console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2));
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
