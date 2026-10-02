for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// -----------------------------

for (let i = 100; i >= 0; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// ------------------------------------
const x = 4;
const change = -1.5;
let arr = [];
for (let i = 0; i < 6; i++) {
  arr.push(4 + change * i);
}
console.log(arr);
// ------------------------------------

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// ------------------------------------

let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
}
console.log("factorial of 12 equals to " + product);
