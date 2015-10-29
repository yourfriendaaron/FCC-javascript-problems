// this function changes a supplied one-dimensional array into a two-dimensional array with chunks of supplied size

function chunk(arr, size) {
  var newArr = [];
  for(var i = 0, len = arr.length; i < len; i+=size) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}

console.log(chunk([0, 1, 2, 3, 4, 5], 2)); // returns "[[0, 1], [2, 3], [4, 5]]"
