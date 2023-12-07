function findFirstRepeated(gifts) {
  // Find elements which are repeted with indexOf Method
  const duplicatedElementsIndex = [];

  gifts.forEach((idNumber, index) => {
    if (gifts.indexOf(idNumber) !== index) {
      duplicatedElementsIndex.push(index);
    }
  });

  if (duplicatedElementsIndex.length === 0) {
    return -1;
  }

  return gifts[duplicatedElementsIndex[0]];
}

// *** TEST CASES ***

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
