/*
Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.
*/

function mutation(arr) {
  arr = arr.map(function(x) {
    return x.toLowerCase();
  });
  for (i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1].charAt(i)) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"])); // returns false
console.log(mutation(["hello", "Hello"])); // returns true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // returns true
console.log(mutation(["Mary", "Army"])); // returns true
console.log(mutation(["Mary", "Aarmy"])); // returns true
console.log(mutation(["Alien", "line"])); // returns true
console.log(mutation(["floor", "for"])); // returns true
console.log(mutation(["hello", "neo"])); // returns false
