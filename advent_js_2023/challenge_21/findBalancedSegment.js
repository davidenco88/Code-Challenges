function findBalancedSegment(message) {
  let balanceInterval = [];

  let sizeInterval = message.length - (message.length % 2);

  for (sizeInterval; sizeInterval > 0; sizeInterval -= 2) {
    const maxPosition = message.length - sizeInterval;

    for (let i = 0; i <= maxPosition; i++) {
      const interval = message.slice(i, i + sizeInterval);

      const countOnes = interval.reduce((prev, current) => prev + current);

      if (countOnes === sizeInterval / 2) {
        balanceInterval = [i, i + sizeInterval - 1];
        return balanceInterval;
      }
    }
  }

  return balanceInterval;
}

//-------TESTS------------
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
//                                     |________|
// posición del segmento:                [2, 5]
// más largo equilibrado
// de 0s y 1s

console.log(findBalancedSegment([1, 1, 0]));
//                                  |__|
//                                 [1, 2]

console.log(findBalancedSegment([1, 1, 1]));
// no hay segmentos equilibrados: []
