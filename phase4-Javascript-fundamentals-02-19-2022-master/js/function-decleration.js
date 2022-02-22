// function decleration  : define a task by a function
// syntax : function functName(params)  { // body }
// 1. Non Parametrised function  // 2. Parametrised function

// 1. Non Parametrised function
function showMessage() {
    console.log("Hello user , Welcome to javascript !");
}

//function calling
showMessage();

// 2. One Parametrised function
function displayMessage(username) {
    console.log("Hello user, '"+username +"' Welcome to JavaScript !");
}

displayMessage("Mike Smith");
displayMessage("John Smith");
displayMessage();


// 3. Parametrised function
function fetchContent(id,name,age) {
    console.log(`Hello user ${id} with name ${name} and age ${age}`);
}

fetchContent(500,'john smith',30);
fetchContent(500,'john smith');
fetchContent(500);
fetchContent();

// 4. default parametrised function
function displayContent(name="Tony", phone=9898989898){
    console.log("Hello user "+ name);
    console.log(`Your phone number is ${phone}`);
}

displayContent("David Kim",101010101010);
displayContent("John SMith");
displayContent();