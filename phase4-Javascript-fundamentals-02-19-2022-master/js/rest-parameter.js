// Rest Parameters (...) : lets you represent an infinite numbers of argument as an array.
function totalSum(...numbers) {
    console.log(numbers);
    let total =0;
    for(let num of numbers) {
        total += num;
    }
    console.log("The total sum : > "+total);
}

totalSum(10,20,30);  // 3 arguments
totalSum(10,20,30,40,50,60); // 6 arguments
totalSum(10,20,30,40,50,60,70,80,90,100); // 10 arguments