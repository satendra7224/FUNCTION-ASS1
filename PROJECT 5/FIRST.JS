// Function to calculate the factorial of a non-negative integer using recursion
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// Test the function with different inputs
console.log(`Factorial of 0: ${factorial(0)}`);  // 1
console.log(`Factorial of 1: ${factorial(1)}`);  // 1
console.log(`Factorial of 5: ${factorial(5)}`);  // 120
console.log(`Factorial of 6: ${factorial(6)}`);  // 720
console.log(`Factorial of 10: ${factorial(10)}`); // 3628800
