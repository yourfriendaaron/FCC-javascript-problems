function repeat(strOrig, num) {
  var i = 0;
  strNew = strOrig;
  if (num < 0) {
    return '';
  }
  while (i < (num - 1)) {
    strNew += strOrig;
    i++;
  }
  return strNew;
}

console.log(repeat("abc", 3)); // returns "abcabcabc"
console.log(repeat("abc", -1)); // returns ""
