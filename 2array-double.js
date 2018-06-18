function doubleArray (arr) {
  if (arr.length === 0) {
    return [];
  }

  let doubled = arr[0] * 2;
  return [doubled, ...doubleArray(arr.slice(1))];

}

doubleArray([1,2,3]);