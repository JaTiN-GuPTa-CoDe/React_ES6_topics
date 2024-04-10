// In React, you often work with arrays of data, and ES6 provides several useful array methods that can simplify your code. Here are some commonly used ES6 array methods in React:

// map() method ek naye array ko banata hai jo di gayi function ko har ek array element par call karke banta hai.

const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(num => num * 2);
console.log(doubled)

// doubled: [2, 4, 6, 8, 10]

// filter() method ek naye array ko banata hai jo di gayi function ki sharten puri karne wale sabhi elements ko shamil karta hai.

const numbers2 = [1, 2, 3, 4, 5];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens)
// evens: [2, 4]

//find() method array mein se pehla element wapas karta hai jo di gayi testing function ko pura karta hai.

const numbers3 = [1, 2, 3, 4, 5];
const found = numbers3.find(num => num > 3);
console.log(found)
// found: 4

// reduce() method array ke har element par ek reducer function ko execute karta hai, jo ek single output value deta hai.

const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)
// sum: 15

// forEach() method array ke har ek element ke liye ek di gayi function ko ek baar execute karta hai.

const numbers5 = [1, 2, 3, 4, 5];
numbers5.forEach(num => console.log(num));
// Output: 1, 2, 3, 4, 5

//  some() method test karta hai ki kya array mein se kam se kam ek element di gayi testing function ko pura karta hai ya nahi.

const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven)
// hasEven: true