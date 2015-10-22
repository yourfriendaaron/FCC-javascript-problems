function findLongestWord(str) {
  str = str.split(" ").sort(function(a,b) {
    return b.length - a.length;
  });
  return str.shift().length;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // returns 6
findLongestWord("1 222 333 999999999"); // returns 9
