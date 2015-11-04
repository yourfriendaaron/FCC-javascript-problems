// "Return the remaining elements of an array after chopping off n elements from the head."

function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);
}

console.log(slasher([1, 2, 3], 9)); // returns []
console.log(slasher([1, 2, 3, 4], 2)); // returns [3, 4]
