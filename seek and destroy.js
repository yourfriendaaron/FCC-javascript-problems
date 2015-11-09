/// removes supplied arguments from given array

function destroyer(arr) {
  arrMatch = [];
  for (var i = 1; i < arguments.length; i++) {
    arrMatch.push(arguments[i]);
  }
  return arr.filter(function(element) {
    return arrMatch.indexOf(element) === -1;
  });
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // returns [1, 5, 1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // returns ["hamburger"]
