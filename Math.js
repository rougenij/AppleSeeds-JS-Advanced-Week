function math(a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * math(a, n - 1);
  }
}

console.log(math(8, 2));
