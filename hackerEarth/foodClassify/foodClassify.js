// Duration 22 mins
function solution(n, ratings) {
  const ranking = ratings.map((dish) => {
    let count = 0;
    let sum = 0;
    let avr = 0;

    ratings.forEach((element) => {
      if (element[0] === dish[0]) {
        count++;
        sum += element[1];
        avr = sum / count;
      }
    });

    return [dish[0], avr];
  });

  ranking.sort((a, b) => a[0] - b[0]);
  ranking.sort((a, b) => b[1] - a[1]);

  return ranking[0][0];
}

//--------TESTS CASE--------

const array = [
  [512, 2],
  [123, 3],
  [987, 4],
  [123, 5],
];

console.log(solution(1, array));
