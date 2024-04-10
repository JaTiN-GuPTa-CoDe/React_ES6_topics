// Destructuring ek feature hai jo ES6 mein introduce hua hai aur yeh aapko arrays se values ko alag variables mein aur objects se properties ko alag variables mein extract karne ki suvidha deta hai. Isse aapka code concise aur readable ho jata hai, khaaskar jab aap complex data structures jaise arrays aur objects ko React mein use karte hain. Chaliye ek example ke saath isse samjhte hain

// Array Destructuring:
// Ek normal array
const myArray = [1, 2, 3];
// Destructuring assignment
const [first, second, third] = myArray;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3

// Object Destructuring:
// Ek normal object
const myObject = { name: 'John', age: 30 };
// Destructuring assignment
const { name, age } = myObject;
console.log(name); // Output: 'John'
console.log(age);  // Output: 30

// Function Parameters mein Destructuring ka Istemal (React mein aam hai):
// Object parameter wala function
function greet({ name, age, id }) {
    console.log(`Hello, ${name}! You are ${age} years old and my id is ${id}.`);
}
// Object
const person = { name: 'Alice', age: 25 ,id: 98};
// Object ko argument ke roop mein pass karna
greet(person);
// Output: Hello, Alice! You are 25 years old and my id is 98.
