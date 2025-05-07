// Define the Calculator class
class Calculator {
    // Method to add two numbers
    add(a, b) {
      return a + b;
    }
  
    // Method to subtract two numbers
    subtract(a, b) {
      return a - b;
    }
  
    // Method to multiply two numbers
    multiply(a, b) {
      return a * b;
    }
  
    // Method to divide two numbers
    divide(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "Division by zero is not allowed.";
      }
    }
  }
  
  // Create an instance of the Calculator class
  const calc = new Calculator();
  
  // Use the methods
  console.log("Addition:", calc.add(5, 3));        // Output: 8
  console.log("Subtraction:", calc.subtract(5, 3)); // Output: 2
  console.log("Multiplication:", calc.multiply(5, 3)); // Output: 15
  console.log("Division:", calc.divide(5, 0));     // Output: Division by zero is not allowed.
  console.log("Division:", calc.divide(5, 2));     // Output: 2.5
  