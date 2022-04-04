export const getFileExtension = (fileName) => fileName.split(".").pop();

export const frequencyCounter = (counts, array) => {
  for (const ext of array) {
    counts[ext] = counts[ext] ? counts[ext] + 1 : 1;
  }

  return counts;
};

export const formatTableData = (data) =>
  Object.entries(data).map((entry, idx) => ({ id: idx, name: entry[0], count: entry[1] }));
