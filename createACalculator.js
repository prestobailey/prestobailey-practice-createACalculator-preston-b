const readline = require("readline");

// Absolute Value Calculation
function getAbsoluteValue(number) {
    return Math.abs(number);
    }
// Power Calculation
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
    }
// Square Root Finder
function findSquareRoot(number) {
    return Math.sqrt(number);
    }
 // Maximum and Minimum Finder
function findMaxMin(numbers) {
    return {
    max: Math.max(...numbers),
    min: Math.min(...numbers)
    };
    }
// Random Number Generator
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
// Custom Rounding
function roundToDecimals(number, decimals) {
    return Number(number.toFixed(decimals));
    }

// Sample Tests
console.log("Absolute value of -45.67:", getAbsoluteValue(-45.67));
console.log("5 raised to the power of 3:", calculatePower(5, 3));
console.log("Square root of 144:", findSquareRoot(144));
const numList = [3, 78, -12, 0.5, 27];
const { max, min } = findMaxMin(numList);
console.log("Maximum number:", max);
console.log("Minimum number:", min);
console.log("Random number between 1 and 50:", generateRandom(1,
50));
console.log("Round 23.67891 to 2 decimal places:",
roundToDecimals(23.67891, 2));

function calculator() {
    const choice = prompt(
      "Select an operation:\n" +
      "1 - Absolute Value\n" +
      "2 - Power Calculation\n" +
      "3 - Square Root\n" +
      "4 - Max and Min Finder\n" +
      "5 - Random Number Generator\n" +
      "6 - Custom Rounding"
    );
  
    switch (choice) {
      case "1":
        const absInput = parseFloat(prompt("Enter a number:"));
        alert("Absolute Value: " + absoluteValue(absInput));
        break;
  
    }
  }
  
  // calculator();