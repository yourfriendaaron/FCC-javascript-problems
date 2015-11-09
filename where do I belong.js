```
Return the lowest index at which a value (second argument) should
be inserted into an array (first argument) once it has been sorted.
```

function where(arr, num) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i; 
    } else if (num > arr[arr.length - 1]) {
      return arr.length;
    }
  }
}

console.log(where([40, 60], 50)); // returns 1
console.log(where([10, 20, 30, 40, 50], 30)); // returns 2
console.log(where([5, 3, 20, 3], 5)); // returns 2
console.log(where([2, 5, 10], 15)); // returns 3
