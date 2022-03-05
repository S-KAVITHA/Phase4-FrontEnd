var Employee = /** @class */ (function () {
    function class_1(id, name, salary, dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }
    class_1.prototype.fetchEmployee = function () {
        console.log("\n          The Employee details is as follows :\n          id : ".concat(this.id, "\n          name : ").concat(this.name, "\n          salary : ").concat(this.salary, "\n          dept : ").concat(this.dept, "\n      "));
    };
    Object.defineProperty(class_1.prototype, "Id", {
        // es5 onwards => get & set methods
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (salary) {
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "Dept", {
        get: function () {
            return this.dept;
        },
        set: function (dept) {
            this.dept = dept;
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
var employeeObj = new Employee();
// set values with setter methods as properties syntax
employeeObj.Id = 234356;
employeeObj.Name = 'John Snow';
employeeObj.Dept = 'Engineering';
employeeObj.Salary = 458946.5678;
// get vvalues from objects
console.log(employeeObj.Id);
console.log(employeeObj.Name);
console.log(employeeObj.Salary);
console.log(employeeObj.Dept);
console.log(employeeObj);
employeeObj.fetchEmployee();
