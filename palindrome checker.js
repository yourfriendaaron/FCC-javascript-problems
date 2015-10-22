function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

palindrome("racecar"); // returns true
palindrome("racecars"); // returns false
palindrome("A Man, A Plan, A Canal – Panama!"); // returns true
