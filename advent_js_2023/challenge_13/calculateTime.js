function calculateTime(deliveries) {
  const totalTimeMilliseconds = deliveries.reduce(
    (accumulateTime, delivery) => {
      const [hours, minutes, seconds] = delivery.split(":");

      const timeMilliseconds =
        hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;

      return accumulateTime + timeMilliseconds;
    },
    0
  );

  const maxTimeMilliseconds = 7 * 60 * 60 * 1000;

  const deliveryTime = totalTimeMilliseconds - maxTimeMilliseconds;
  const offsetUTC = new Date().getTimezoneOffset() * 60 * 1000;

  const timeString = new Date(Math.abs(deliveryTime) + offsetUTC)
    .toTimeString()
    .match(/\d{2}\:\d{2}\:\d{2}/g);

  if (deliveryTime < 0) return `-${timeString[0]}`;

  return timeString[0];
}

const result = calculateTime(["06:30:00", "00:30:00", "01:30:00"]);
console.log(result);
//'-02:20:00'
