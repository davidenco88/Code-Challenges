function solution(seconds) {
  if (seconds < 0) throw new Error("value should be positive");
  if (seconds === 0) return "now";

  const segments = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  let timeString = "";

  for (const [unit, divisor] of Object.entries(segments)) {
    const value = Math.floor(seconds / divisor);
    seconds %= divisor;

    if (value > 0) {
      timeString += `${value} ${unit}`;
      if (value > 1) timeString += "s";

      const nextUnit = Object.keys(segments).find(
        (key) => segments[key] < divisor
      );

      if (seconds > 0 && nextUnit) {
        const separator = nextUnit === "second" ? " and " : ", ";
        timeString += separator;
      }
    }
  }

  return timeString;
}

//-------------TESTS-----------------

console.log(solution(60));
console.log(solution(3662));
console.log(solution(0));
console.log(solution(15731080));
