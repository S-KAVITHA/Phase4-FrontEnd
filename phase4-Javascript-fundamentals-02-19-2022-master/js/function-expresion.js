// function expression : A expression syntax is used to declare a fuction with vairable assignment.
// 1. labled function expression  2. Anonymous function expression

// function expression  : define a function by varaible assigment
// syntax : var x = function functName(params)  { // body }
// 1. Non Parametrised function  expression // 2. Parametrised function expression

// 1. Non Parametrised labeled function expression
var showData = function showMessage() {
    console.log("Hello user , Welcome to javascript fn expression !");
}

console.log(showData);
// function calling
showData();
// showMessage(); //  Uncaught ReferenceError: showMessage is not

// 2. Anonymous function expression
var displayData = function () {
    console.log("Hello user , Welcome to javascript fn Anonymous expression !");
}

displayData();


// 2. Parameterised function expression with 
var loadData = function (name,age,gender) {
    console.log(`Hello user , ${name} & you have age ${age} & gender ${gender}`);    
}

loadData("Mike Smith",30,'male');