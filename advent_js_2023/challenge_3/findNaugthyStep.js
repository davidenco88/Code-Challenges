function findNaughtyStep(original, modified) {
  let naungthyStep = "";

  if (original === modified) return naungthyStep;

  const originalSteps = [...original];
  const modifiedSteps = [...modified];

  if (original.length > modified.length) {
    naungthyStep = originalSteps.find(
      (step, index) => step !== modifiedSteps[index]
    );
  } else {
    naungthyStep = modifiedSteps.find(
      (step, index) => step !== originalSteps[index]
    );
  }

  return naungthyStep;
}

// *** TEST CASES ***

const original2 = "abcd";
const modified2 = "abcde";
findNaughtyStep(original2, modified2); // 'e'

const original3 = "stepfor";
const modified3 = "stepor";
findNaughtyStep(original3, modified3); // 'f'

const original4 = "abcde";
const modified4 = "abcde";
findNaughtyStep(original4, modified4); // ''
