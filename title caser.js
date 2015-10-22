function titleCase(str) {
  str = str.split(" ").map(function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }).join(" ");
  return str;
}

titleCase("i wiLL be turNEd inTo TiTle cASE");
