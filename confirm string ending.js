// this function checks if given string ends with a different string

function end(str, target) {
  if (str.substr(str.length - target.length) === target) {
    return true;
  } else {
    return false;
  };

}

console.log(end("bake the jello", "jello")); // returns true
console.log(end("bake the jello", "pizza")); // returns false
