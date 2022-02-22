// The spread operator (...) helps you expand iterables into individual elements.

let numbers  = [100, 200, 300, 400];

// add four numbers
function calSum (num1, num2 ,num3 , num4) {
    return (num1 + num2 + num3 + num4) ;
}

console.log("Total sum : ", calSum(numbers[0], numbers[1], numbers[2], numbers[3]));
console.log("Total sum :> ", calSum(...numbers));


// split string into character arrays
let username = "johnsmith123";
console.log([...username]);

//merging array elements
let companies = ['Dell', 'Simplilearn', 'Google','Microsoft'];
let otherComps = ['Amazon', 'Infosys', 'TCS'];

// for(let comp of otherComps){
//     companies.push(comp);
// }
companies = [...companies , ...otherComps];
console.log(companies);

