const string = "Madam, I’m - Adam ";
console.log(string);
const stringReverse = Array.from(string)
  .reverse()
  .toString()
  .replace(/[,’ -]/g, "")
  .toLowerCase();
console.log(stringReverse);
const stringLower = string.toLowerCase().replace(/[", -?!’]/g, ""); //Либо просто .trim() если убрать в начале и конце
const stringReverseToLower = stringReverse
  .toLowerCase()
  .replace(/[", -?!’]/g, "");
stringLower === stringReverseToLower
  ? console.log("Это палиндром")
  : console.log("Это не палиндром");

const valueOfSymbol = Array.from(stringReverse).reduce((a, b) => {
  a[b] = (a[b] || 0) + 1;
  return a;
}, {});

console.log('Value of Symbols :',JSON.stringify(valueOfSymbol).replace(/[{}]/g, ""));

//Либо так, если вручную задать конкретное значение поиска

const symbol = "m";
console.log(
  Value of "${symbol}" specifically :,
  Array.from(stringReverse).filter((item) => item === symbol).length
);
