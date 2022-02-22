let Employee = class {

  constructor(id, name, salary, dept) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
  }

  fetchEmployee() {
    console.log(`
        The Employee details is as follows :
        id : ${this.id}
        name : ${this.name}
        salary : ${this.salary}
        dept : ${this.dept}
    `);
  }

  // get & set methods
  get Id() {
    return this.id;
  }
  set Id(id) {
    this.id = id;
  }

  get Name() {
    return this.name;
  }
  set Name(name) {
    this.name = name;
  }

  get Salary() {
    return this.salary;
  }
  set Salary(salary) {
    this.salary = salary;
  }

  get Dept() {
    return this.dept;
  }
  set Dept(dept) {
    this.dept = dept;
  }

};


let employeeObj = new Employee();

// set values with setter methods as properties syntax
employeeObj.Id ='EMP234356';
employeeObj.Name ='John Snow';
employeeObj.Dept ='Engineering';
employeeObj.Salary =458946.5678;

// get vvalues from objects
console.log(employeeObj.Id);
console.log(employeeObj.Name);
console.log(employeeObj.Salary);
console.log(employeeObj.Dept);

console.log(employeeObj);

employeeObj.fetchEmployee();