function distributeGifts(weights) {
  const newWeights = [];
  for (const [i, row] of weights.entries()) {
    const newRow = [];

    for (const [j, cell] of row.entries()) {
      let neighbors = [];

      if (j - 1 >= 0) neighbors.push(weights[i][j - 1]);
      if (j + 1 < row.length) neighbors.push(weights[i][j + 1]);
      if (i - 1 >= 0) neighbors.push(weights[i - 1][j]);
      if (i + 1 < weights.length) neighbors.push(weights[i + 1][j]);
      neighbors.push(weights[i][j]);

      neighbors = neighbors.filter((neighbor) => Number.isInteger(neighbor));

      const newWeight = Math.round(
        neighbors.reduce((sum, current) => sum + current) / neighbors.length
      );

      newRow.push(newWeight);
    }

    newWeights.push(newRow);
  }
  return newWeights;
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];

console.log(distributeGifts(input));
