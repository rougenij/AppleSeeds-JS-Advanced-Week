function math(a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * math(a, n - 1);
  }
}

console.log(math(8, 2));

function disemvowel(str) {
  let nStr = str.split("");
  for (let i = 0; i < nStr.length; i++) {
    if (nStr[i] === "e") {
      nStr[i].replace("e", "");
    } else if (nStr[i] === "o") {
      nStr[i].replace("o", "");
    } else if (nStr[i] === "u") {
      nStr[i].replace("u", "");
    } else if (nStr[i] === "a") {
      nStr[i].replace("a", "");
    } else if (nStr[i] === "i") {
      nStr[i].replace("i", "");
    }
  }
  nStr.join("");
  str = nStr;
  return str;
}

console.log(disemvowel("This website is ass"));

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => b - a);
  return console.log(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
