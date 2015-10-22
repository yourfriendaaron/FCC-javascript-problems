function findLongestWord(str) {
  str = str.split(" ").sort(function(a,b) {
    return b.length - a.length;
  });
  console.log(str);
  return str.shift().length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
