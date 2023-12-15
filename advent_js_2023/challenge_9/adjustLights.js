function adjustLights(lights) {
  const changes = [];
  let countFirstLight = 0;
  let countSecondLight = 0;

  countFirstLight = lights.filter(
    (light, index) => light !== "🟢" && index % 2 === 0
  ).length;

  countSecondLight = lights.filter(
    (light, index) => light !== "🔴" && index % 2 !== 0
  ).length;

  changes.push(countFirstLight + countSecondLight);

  countFirstLight = lights.filter(
    (light, index) => light !== "🔴" && index % 2 === 0
  ).length;

  countSecondLight = lights.filter(
    (light, index) => light !== "🟢" && index % 2 !== 0
  ).length;

  changes.push(countFirstLight + countSecondLight);

  return Math.min(...changes);
}

adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
// -> 1 (you change the fourth light to 🔴)

adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
// -> 0 (they are already alternating)

adjustLights(["🔴", "🔴", "🔴"]);
// -> 1 (you change the second light to 🟢)
