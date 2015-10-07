function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

palindrome("eye");
