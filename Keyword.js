// Keyword are three types.
// 1.let 
// 2.Var
// 3.Const

// let: Declares a variable with block scope.
// var: Declares a variable with function or global scope.
// const: Declares a constant variable with block scope.

// Using let:
function exampleLet() {
    let x = 10;
    if (true) {
      let x = 20; // Creates a new variable x scoped to this block
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10 (outer x remains unchanged)
  }
  exampleLet();
  
  // Using var:
  function exampleVar() {
    var y = 30;
    if (true) {
      var y = 40; // Updates the existing variable y
      console.log(y); // Output: 40
    }
    console.log(y); // Output: 40 (value of y updated)
  }
  exampleVar();
  
  // Using const:
  function exampleConst() {
    const z = 50;
    // Attempting to reassign a const variable will result in an error
    // z = 60; // Error: Assignment to constant variable.
    console.log(z); // Output: 50
  }
  exampleConst();
  