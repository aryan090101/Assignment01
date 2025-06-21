// JavaScript Extra Challenges for Conditional Statements and Loops

// 1. Accept two integers and display the larger
function displayLarger(a, b) {
  return (a > b) ? a : b;
}

// 2. Find the sign of product of three numbers
function signOfProduct(a, b, c) {
  let product = a * b * c;
  return (product >= 0) ? "+" : "-";
}

// 3. Sort three numbers
function sortThree(a, b, c) {
  return [a, b, c].sort((x, y) => y - x); // descending order
}

// 4. Find the largest of five numbers
function largestOfFive(a, b, c, d, e) {
  return Math.max(a, b, c, d, e);
}

// 5. For loop to check even or odd from 0 to 15
function evenOddLoop() {
  let result = [];
  for (let i = 0; i <= 15; i++) {
    result.push(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`);
  }
  return result;
}

// 6. Compute average marks and grade
function computeGrades(students) {
  let total = 0;
  for (let student of students) total += student.marks;
  let avg = total / students.length;
  let grade = "";
  if (avg < 60) grade = "F";
  else if (avg < 70) grade = "D";
  else if (avg < 80) grade = "C";
  else if (avg < 90) grade = "B";
  else grade = "A";
  return { average: avg, grade: grade };
}

// 7. FizzBuzz from 1 to 100
function fizzBuzz() {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}

// 8. First 5 happy numbers
function isHappy(n) {
  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n.toString().split('').reduce((sum, digit) => sum + Math.pow(+digit, 2), 0);
  }
  return n === 1;
}

function firstFiveHappyNumbers() {
  let result = [];
  let num = 1;
  while (result.length < 5) {
    if (isHappy(num)) result.push(num);
    num++;
  }
  return result;
}

// 9. Find 3-digit Armstrong numbers
function armstrongNumbers() {
  let result = [];
  for (let i = 100; i <= 999; i++) {
    let sum = i.toString().split('').reduce((acc, d) => acc + Math.pow(+d, 3), 0);
    if (sum === i) result.push(i);
  }
  return result;
}

// 10. Print triangle pattern with nested loop
function trianglePattern(rows) {
  let pattern = [];
  for (let i = 1; i <= rows; i++) {
    pattern.push("* ".repeat(i).trim());
  }
  return pattern;
}

// 11. Compute GCD of two numbers
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 12. Sum of multiples of 3 and 5 under 1000
function sumMultiplesOf3And5() {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}
