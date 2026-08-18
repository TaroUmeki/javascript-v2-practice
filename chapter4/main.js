const isRaining = true;
if (isRaining) {
  console.log("It's raining, take an umbrella!");
} else {
  console.log("It's not raining, enjoy your day!");
}

const score = 75;
if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B!");
} else if (score >= 70) {
  console.log("You got a C!");
} else {
  console.log("You need to study more.");
}

const ok = true;
const maybeOk = true;
if (ok) {
  console.log("Everything is fine.");
} else if (maybeOk) {
  console.log("Maybe everything is fine.");
} else {
  console.log("Something is wrong.");
}

const age = 20;
if (age >= 20) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

console.log(1 === 1);
console.log(1 === 2);

console.log(1 !== 1);
console.log(1 !== 2);

const password = "1234";
if (password === "1234") {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

const age2 = 18;
if (age2 >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// how to differ object
const dog1 = { name: "pocha" };
const dog2 = { name: "pocha" };
console.log(dog1 === dog2);
console.log(dog1.name === dog2.name);

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b);
console.log(a[0] === b[0]);

const ok2 = "hello" && "はい";
if (ok2) {
  console.log("ok is true");
}

console.log(true && false);
console.log(false || true);
console.log(false || false);

console.log("cat" && "dog");
console.log(0 && "dog");
console.log("cat" || "dog");
console.log("" || "デフォルト");

const input = "Taro";
const result = input || "名無し";
console.log(result);

const result2 = 5 > 3 && 2 < 1;
console.log(result2);

const x = 15;
console.log(x > 10 && x < 20);

const x2 = 50;
if (x2 >= 0 && x2 <= 100) {
  console.log("x2 is between 0 and 100");
}
