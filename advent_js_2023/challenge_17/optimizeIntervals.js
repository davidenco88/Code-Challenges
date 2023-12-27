function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];

  for (const interval of intervals) {
    const currentInterval = interval;
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

// function optimizeIntervals(intervals) {
//   const newIntervals = [];
//   let auxInterval = [];

//   let stack = intervals.reduce((previousValue, currentValue) => {
//     return [...previousValue, ...currentValue];
//   }, []);

//   stack.sort();
//   stack = stack.filter((value, index) => stack.indexOf(value) === index);

//   for (const [index, value] of stack.entries()) {
//     const subs = stack[index + 1] - stack[index];
//     if (subs !== 1) {
//       if (auxInterval.length === 0) auxInterval.push(value);

//       if (auxInterval.length === 1) {
//         auxInterval.push(value);
//         newIntervals.push(auxInterval);
//         auxInterval = [];
//       }
//     }
//   }

//   console.log(stack);
//   console.log(newIntervals);

//   return newIntervals;
// }

// optimizeIntervals([
//   [5, 8],
//   [2, 7],
//   [3, 4],
// ]); // [[2, 8]]
