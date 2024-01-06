//1.  Normal recurive call using a varible
function print(i, n) {
  if (i > n) return;
  console.log(i);
  print(i + 1, n);
}
console.log(print(1, 4));

//2. Backtracking
function print1toN(N) {
  if (N === 0) return;
  print1toN(N - 1);
  console.log(N);
}
print1toN(5);
