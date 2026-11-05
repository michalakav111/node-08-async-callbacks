// Exercise 3: Countdown Timer
// Goal: print a countdown from 5 to 0, one number per second, using recursion + setTimeout.
// (no loops, no setInterval)
//
// Expected output:
//   5
//   4
//   3
//   2
//   1
//   0
//   Time's up!
//
// Run: node ex03.js

// write your code here

function countdown(n) {
    if (n < 0) {
        console.log("Time's up!");
    } else {
        console.log(`${n}\n`);
        setTimeout(() => countdown(n - 1), 1000);
    }   
}

countdown(5);