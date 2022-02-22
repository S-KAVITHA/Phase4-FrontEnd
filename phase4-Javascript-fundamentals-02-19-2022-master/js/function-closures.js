// Closures : Nested Function defined in another parent function
// closures has access to three different scope chain.
// 1. inner variable/parameters  2.outer varaible/parameters  3. global varibles

let firstName = "John";  // global varibles

function fullNameMaker()  {
    let middleName = "William"; // local variable // outer varaible

    // nested function or closures
    function combine() {
        let lastName = "Smith"; // local variable // inner varaible
        return `${firstName} ${middleName} ${lastName}`;
    }

    return combine();
}

let response = fullNameMaker();
console.log(response);