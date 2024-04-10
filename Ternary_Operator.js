// The ternary operator is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false>

let authenticated = true;

// let authenticated = false;
// Try changing the "authenticated" variable to false, and run the code

authenticated ? renderApp() : renderLogin();

function renderApp(){
    console.log("Welcome login")
}
function renderLogin() {
    console.log("Please login data")
}
