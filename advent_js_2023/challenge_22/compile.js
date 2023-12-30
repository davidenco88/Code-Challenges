function compile(code) {
  let counter = 0;
  let flag = true;
  let marker = null;
  let instructions = code.split("");

  const COMPILER = {
    "+": () => counter++,
    "-": () => counter--,
    "*": () => (counter *= 2),
    "%": () => (marker = i),

    "<": () => {
      if (marker !== null) {
        instructions.splice(i, 1);
        i = marker;
      }
    },

    "¿": () => (flag = counter > 0),
    "?": () => (flag = true),
  };

  let i = 0;
  while (i < instructions.length) {
    if (flag || instructions[i] === "?") COMPILER[instructions[i]]();
    i++;
  }

  return counter;
}

//--------TESTS--------

console.log(compile("--¿+++?+++¿--?")); // -1

// console.log(compile("++*-")); // 3
// // (1 + 1) * 2 - 1 = 3

// console.log(compile("++%++<")); // 6
// // 1 + 1 + 1 + 1 + 1 + 1 = 6

// console.log(compile("++<--")); // 0
// // 1 + 1 - 1 - 1 = 0

// console.log(compile("++¿+?")); // 3
// // 1 + 1 + 1 = 3

// console.log(compile("--¿+++?")); // -2
// // - 1 - 1 = -2
