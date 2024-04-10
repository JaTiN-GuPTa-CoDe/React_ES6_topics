// An arrow function in JavaScript is like a shortcut way to write a function. Instead of using the function keyword, you use a shorter arrow =>. It's particularly handy for writing small functions quickly.

// Traditional function expression:
const traditionalFunction = function(parameter) {
    return parameter + 1;
};

// Arrow function equivalent:
const arrowFunction = parameter => parameter + 1;


const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Using the multiply function:
const product = multiply(5, 3);
console.log(product); // Output: 15