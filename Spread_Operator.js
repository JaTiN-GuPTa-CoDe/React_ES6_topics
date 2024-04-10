// The spread operator in ES6 is a useful syntax that allows an iterable (like an array or string) to be expanded or spread into individual elements. In React, the spread operator is often used for props spreading, array manipulation, and object merging.

// Array Spreading:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Object Spreading:
const obj1 = { name: 'John', age: 30 };
const obj2 = { ...obj1, city: 'New York' };
console.log(obj2); // Output: { name: 'John', age: 30, city: 'New York' }


import React from 'react';

// ChildComponent
const ChildComponent = ({ name, age }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
};

// Parent Component (MyComponent)
const MyComponent = (props) => {
    // Props to be passed down to ChildComponent
    const childProps = {
        name: 'John',
        age: 30
    };

    // Using spread operator to pass props down to ChildComponent
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent {...childProps} />
        </div>
    );
};

export default MyComponent;
