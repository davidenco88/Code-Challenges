function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;

  const paterns = [/ /, /\./, /:/, /\+/, /#/, /[a-z/]/, /[A-Z]/];
  const uperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;

  const copyComparison = original.split("").map((char, index) => {
    const comparison = [];

    if (
      uperCase.test(char) &&
      lowerCase.test(copy[index]) &&
      char.toLowerCase() !== copy[index]
    ) {
      return [-1, 0];
    }

    comparison.push(
      paterns.findIndex((patern) => {
        return patern.test(String(char));
      })
    );

    comparison.push(
      paterns.findIndex((patern) => {
        return patern.test(String(copy[index]));
      })
    );
    return comparison;
  });

  return copyComparison.every((comparison) => comparison[0] >= comparison[1]);
}

// *** TEST CASES ***

checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#"); // true
checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#"); // false (due to the initial p)
checkIsValidCopy("Santa Claus", "s#+:. c:. s"); // true
checkIsValidCopy("Santa Claus", "s#+:.#c:. s"); // false (there is a # where it shouldn't be)
