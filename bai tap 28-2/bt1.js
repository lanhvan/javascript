function findMinMax(arr) {
    return [Math.max(...arr), Math.min(...arr)];
  }
  
  const inputArray = [2, 3, 4, 5];
  const [maxValue, minValue] = findMinMax(inputArray);
  console.log(maxValue, minValue);
  