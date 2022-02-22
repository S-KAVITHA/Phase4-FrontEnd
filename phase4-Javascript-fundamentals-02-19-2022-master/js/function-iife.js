// Imediately invoked function expression. -> self executing function
(function(){
    console.log("Imediately invoked function expression.");
})();

// IIFE : initialization activity
(function() {
    let username = "Jhon Smith";
    let age = 30;
    console.log(`The user ${username}`);
    console.log(`And age ${age}`);

    // nested function
    function display() {
        console.log(`The user ${username} with age${age}`);
    }

    display();
})();

let accName;
let accEmail;

(function() {
    accName = "David Kim";
    accEmail ="david@gmail.com";
})();

console.log(accName + " => "+ accEmail);