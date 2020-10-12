function merge(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  let sortedArr = newArray.sort();
  return sortedArr;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));