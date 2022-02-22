// Arithmatic calculator = > add , sub , mul , div etc.

let add = function(num1, num2) {
    return num1 + num2;
}

let sub = function(num1, num2) {
    return num1 - num2;
}

let mul = function(num1, num2) {
    return num1 * num2;
}

let div = function(num1, num2) {
    return num1 / num2;
}

let avg = function(num1, num2) {
    return (num1 + num2 ) /2;
}

//proccessing function
let calculator = function(num1, num2, calType) {
    return calType(num1, num2);
}

let x = 5000;
let y = 3000;
//call calculator 
// let result = calculator(x,y,add) ;  // add is a callback fn
console.log(`The ${x} + ${y} = ${calculator(x,y,add)}`);  // add is a callback fn
console.log(`The ${x} - ${y} = ${calculator(x,y,sub)}`);  // sub is a callback fn
console.log(`The ${x} * ${y} = ${calculator(x,y,mul)}`);  // mul is a callback fn
console.log(`The ${x} / ${y} = ${calculator(x,y,div)}`);  // div is a callback fn
console.log(`The ${x} & ${y} avg is  ${calculator(x,y,avg)}`);  // avg is a callback fn