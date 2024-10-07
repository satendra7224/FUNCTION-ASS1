// Curry function implementation
function curry(fn) {
    return function curried(...args) {
        // If the number of arguments provided is less than the original function's length
        if (args.length < fn.length) {
            return function(...nextArgs) {
                // Combine current and next arguments and call curried again
                return curried(...args, ...nextArgs);
            };
        }
        // If all arguments are provided, call the original function
        return fn(...args);
    };
}

// Example function to add two numbers
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(5)(10)); // Output: 15
console.log(curriedAdd(1)(2)(3)); // Output: 3 (only last two arguments are used)
