// JavaScript Function Constructor  : It is utilized as a blueprint to create multple objects of same type.
// 1. Non Parametrised Constructor  // 2. Parametrised Constructor

// 1. Non Parametrised Constructor 
function Person() { };   // zero argument constructor => return empty object.

//create of constructor
var personObj = new Person();
console.log(personObj);


// 2. Parametrised Constructor
function Account(id,name,balance,email) {
    this.id = id;
    this.name=name;
    this.balance=balance;
    this.email=email;
}

let accObj1 = new Account(1001,"Mike Smith",45445.45,'mike@gmail.com');
let accObj2 = new Account(1002,"William Smith",785445.45,'wiiliam@gmail.com');
let accObj3 = new Account(1003,"David Smith",5677445.45,'david@gmail.com');

console.log(accObj1);
console.log(accObj2);
console.log(accObj3);
console.log(accObj1.id);
console.log(accObj1.name);
console.log(accObj1.email);