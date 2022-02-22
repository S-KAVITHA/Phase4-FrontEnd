// var :  var keyword has function level scope -> reasign value
// let : let keyword has block level scope  -> reasign value
// const : const keyword has block level scope -> can not reasign value

function display() {
    var statusFlag = true;
    if(statusFlag) {
        var itemOne = 'Apple Mac book xyz series';
        let itemTwo = 'Dell bokk xyz series';
        const itemThree = 'Lenvo Slim book zbc';

        itemTwo = "Dell Book";
        // itemThree = "Lenvo Slim Book"; // Assignment to constant variable.
        // console.log(itemOne);
        // console.log(itemTwo);
        // console.log(itemThree);
    } //if block

    console.log(itemOne);
    // console.log(itemTwo);   // ReferenceError: itemTwo is not defined
    // console.log(itemThree);   // ReferenceError: itemThree is not defined

    console.log(statusFlag);
}

display();

// console.log(statusFlag); //ReferenceError: statusFlag is not defined