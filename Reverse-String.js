// Normal JS methods
function reverseString(str) {
  let arr = Array.from(str).reverse();
  console.log(arr);
}
reverseString("Hello");

// With FOR LOOP

function reverseString(str) {
  let arr = Array.from(str);
  let arrTwo = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrTwo.push(arr[i]);
  }
  console.log(arrTwo);
}
reverseString("Hello");

// Recurssion

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));
