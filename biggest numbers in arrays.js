// this function returns an array consisting of the largest number in each given array.
// it takes as input any series of arrays of any lenth.

function largestOfArray(arr) {
  var arrNew = [];
  for (var i=0; i < arr.length; i++) {
    arrNew.push(arr[i].sort(function(a, b){return b-a})[0]);
  };
  return arrNew;
}

console.log(largestOfFour([[-2.3, 0, 1.1, 0], [70, 66, 67, 68, 69], [32, 35, 2067, 37, 39, 99], [12.1, 9, 0, -786], [-12, -0.015, -142, -3.6]]));
// the above returns "[1.1, 70, 2067, 12.1, -0.015]"
