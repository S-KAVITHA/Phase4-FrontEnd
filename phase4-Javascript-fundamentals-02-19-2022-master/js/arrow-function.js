var showData =  () => {
    console.log("Hello user , Welcome to javascript arrow function !");
}

showData();
 
let ageCalculator =  (username,yearOfBirth) => {
    let currentYear = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`Hello user, ${username} , & your age is ${age}`);
    return age; // return valu is associate function calling.
}

// function call
let result = ageCalculator('Mike Kim',1990);
console.log(result);
ageCalculator('Marry Kim',1994);

// console.log(ageCalculator);


// one liner arrow function
let dataLoad = ()=>  console.log("This is a one liner arrow function");

// one liner arrow function with implicit return 
let fullNameMaker = (firstname, middlename,lastname) => `${firstname} ${middlename} ${lastname}`;

dataLoad();
let response = fullNameMaker("Johny","William","Smith");
console.log(response);