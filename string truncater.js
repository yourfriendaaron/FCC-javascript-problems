// if string length is longer than num.length truncates and replaces with "..."

function truncate(str, num) {
  var strNew = str.slice(0, num);
  if (str === strNew) {
    return str;
  }
  if (strNew.length <= 3) {
    return strNew + "...";
  } else {
    return strNew.slice(0, strNew.length - 3) + "...";
  }
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 11)); // returns "A-tisket..."
console.log(truncate("A-", 1)); // returns "A..."
