function createChristmasTree(ornaments, height) {
  let tree = "";
  let spaces = height - 1;
  let indexOrnament = 0;
  const lengthOrnament = ornaments.length;

  for (let i = 0; i < height; i++) {
    tree += " ".repeat(spaces--);

    for (let j = 0; j < i + 1; j++) {
      tree += ornaments[indexOrnament % lengthOrnament] + " ";
      indexOrnament++;
    }

    tree = tree.trimEnd() + "\n";
  }

  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}

// *** TEST CASES ***

result = createChristmasTree("xac", 4);
console.log(result);
