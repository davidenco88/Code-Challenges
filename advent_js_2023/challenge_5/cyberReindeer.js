function cyberReindeer(road, time) {
  let roadState = road.split("");
  let arrayRoadStates = [];

  let originalState = road.replaceAll("S", ".").split("");
  let reindeerPosition = 0;

  for (let i = 0; i < time; i++) {
    arrayRoadStates.push(roadState.join(""));
    // console.log(roadState);
    if (i === 4) {
      roadState = roadState.join("").replaceAll("|", "*").split("");
      originalState = originalState.join("").replaceAll("|", "*").split("");
    }

    if (roadState[reindeerPosition + 1] !== "|") {
      roadState[reindeerPosition + 1] = "S";
      roadState[reindeerPosition] = originalState[reindeerPosition];
      reindeerPosition++;
    }
  }
  return arrayRoadStates;
}

// *** TEST CASES ***

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);
