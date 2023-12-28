function optimizeIntervals(intervals) {
  const newIntervals = [];
  let auxInterval = [];

  intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);

  for (const interval of intervals) {
    if (interval[0] <= auxInterval[1]) {
      auxInterval[1] = Math.max(auxInterval[1], interval[1]);
      newIntervals[newIntervals.length - 1] = auxInterval;
    } else {
      newIntervals.push(interval);
      auxInterval = interval;
    }
  }

  return newIntervals;
}

// ------- TEST ---------

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]); // [[1, 2], [3, 4], [5, 6]]
