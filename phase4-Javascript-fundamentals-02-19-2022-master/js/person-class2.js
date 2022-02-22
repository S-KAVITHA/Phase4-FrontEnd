// JavaScript class : It is added from es6 , as a new syntax to declare OOP
// class expression syntax
let Person = class {

    // constructor
    constructor(id,name,email,address) {
        //initialize properties 
        this.id = id;
        this.name= name;
        this.email = email;
        this.address = address;
    }

    // methods
    showDetails() {
        console.log(`
            The person details is as follows :
            id : ${this.id}
            name : ${this.name}
            email : ${this.email}
            address : ${this.address}
        `);
    }
}

let personObj = new Person(1000011, 'John smith', 'john.smith@gmail.com','John Street ABC');

console.log(personObj);
console.log(personObj.id);
console.log(personObj.name);
console.log(personObj.email);
console.log(personObj.address);

personObj.showDetails();
