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
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getSalary() {
    return this.salary;
  }
  setSalary(salary) {
    this.salary = salary;
  }

  getDept() {
    return this.dept;
  }
  setDept(dept) {
    this.dept = dept;
  }

};


let employeeObj = new Employee();

// set values with setter methods
employeeObj.setId('EMP234356');
employeeObj.setName('John Snow');
employeeObj.setDept('Engineering');
employeeObj.setDept('Dev');
employeeObj.setSalary(458946.5678);

// get vvalues from objects
console.log(employeeObj.getId());
console.log(employeeObj.getName());
console.log(employeeObj.getSalary());
console.log(employeeObj.getDept());

console.log(employeeObj);

employeeObj.fetchEmployee();