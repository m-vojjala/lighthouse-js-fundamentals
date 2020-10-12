function range(start, end, step) {
  var newArray = [];
  if ((start === undefined && end === undefined && step === undefined) || (start > end) || (step <= 0)) {
    return newArray;
  } else {
    for (let i = start; i <= end; i += step) {
      newArray.push(i);
    }
  }
  return newArray;
}


console.log(range(10, 30, 5));