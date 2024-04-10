// ES6 ne classes ko introduce kiya.

// Classes ek naye syntax hain JavaScript mein jo objects banane aur inheritance implement karne ke liye purani prototype-based approach ke muqable mein ek zyada familiar aur saaf syntax provide karte hain. Yeh constructor functions, methods, aur inheritance hierarchies ko intuitive tareeke se define karne ki suvidha dete hain.

// Class Declaration: Aap class keyword ke sath class ka naam likh kar class declare kar sakte hain.

// class MeraClass {
//     // class methods aur constructor
// }

// Constructor Method: constructor method ek special method hai jo class se banaye gaye objects ko create aur initialize karne ke liye hota hai. Ye khud ba khud execute hota hai jab class ka ek naya instance banaya jata hai.

// class MeraClass {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// Class Methods: Aap class ke andar methods ko define kar sakte hain, jaise ki functions. Ye methods class ke instances par call kiye ja sakte hain.


// class MeraClass {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }

//     meraMethod() {
//         // kuch karna
//     }
// }

// Inheritance: Classes extends keyword ke zariye inheritance ko support karte hain. Yeh ek subclass (child class) ko ek superclass (parent class) se inherit karne ki anumati deta hai.

// class MeraSubClass extends MeraClass {
//     constructor(prop1, prop2, prop3) {
//         super(prop1, prop2); // superclass constructor ko call karna
//         this.prop3 = prop3;
//     }

//     // subclass ke liye khas methods
// }

// Mukhyatah, ES6 mein classes JavaScript mein object-oriented programming ke concepts ko define karne ke liye ek zyada structured aur intuitive tareeka pradan karte hain. Ye syntax ko simplify karte hain aur complex code structures ke saath kaam karne ko aasan banate hain.


// Class declaration
class Animal {
    // Constructor method
    constructor(name) {
        this.name = name;
    }

    // Method
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

// Subclass which extends Animal class
class Dog extends Animal {
    // Constructor method
    constructor(name) {
        // Calling superclass constructor
        super(name);
    }

    // Overriding method
    speak() {
        console.log(this.name + ' barks.');
    }
}

// Creating instances of classes
const animal = new Animal('Animal');
const dog = new Dog('Dog');

// Calling methods

animal.speak(); // Output: Animal makes a noise.
dog.speak();    // Output: Dog barks.
