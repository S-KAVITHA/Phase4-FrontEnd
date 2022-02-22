// JavaScript class : It is added from es6 , as a new syntax to declare OOP
// class expression syntax
var PersonOpr = /** @class */ (function () {
    // constructor
    function class_1(id, name, email, address) {
        //initialize properties 
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
    // methods
    class_1.prototype.showDetails = function () {
        console.log("\n            The person details is as follows :\n            id : ".concat(this.id, "\n            name : ").concat(this.name, "\n            email : ").concat(this.email, "\n            address : ").concat(this.address, "\n        "));
    };
    return class_1;
}());
var personObj = new PersonOpr(1000011, 'John smith', 'john.smith@gmail.com', 'John Street ABC');
console.log(personObj);
console.log(personObj.id);
console.log(personObj.name);
console.log(personObj.email);
console.log(personObj.address);
personObj.showDetails();
