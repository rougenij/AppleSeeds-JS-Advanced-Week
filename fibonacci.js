function fibonacci(n) {
  let seq = [1, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq.at(-1) + seq.at(-2));
  }
  return seq[n - 1];
}

console.log(fibonacci(3));
