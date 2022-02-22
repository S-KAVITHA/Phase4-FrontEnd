// Run typescript 
// Install type script globally
// Transpile typescript into javascript.
// run javascript -> client & node.

console.log("Hello, welcome to TypeScript world!");

// 1. Non Parametrised function
function showMessage() {
    console.log("Hello user , Welcome to TypeScript !");
}

//function calling
showMessage();

// 2. One Parametrised function
function displayMessage(username) {
    console.log("Hello user, '"+username +"' Welcome to TypeScript !");
}

displayMessage("Mike Smith");
displayMessage("John Smith");
