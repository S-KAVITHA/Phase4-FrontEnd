// list of students -> id name , rollno, age, PCBM, attendence
// show a student marks and attendence by roll number.
// show student is pass or failed.
// calculate total marks for student.

let Student = class {

    constructor(name, rollno, age, phymark, compmark, mathmark, scimark, attendence) {
        this.name = name;
        this.rollno = rollno;
        this.age = age;
        this.phymark = phymark;
        this.compmark = compmark;
        this.mathmark = mathmark;
        this.scimark = scimark;
        this.attendence = attendence;
    }
    // get & set methods
    
liststudents(){
    console.log(`
    The Student details is as follows :
    name : ${this.name}
    rollno : ${this.rollno}
    age : ${this.age}
    phymark:${this.phymark}
    compmark: ${this.compmark}
    mathmark: ${this.mathmark}
    scimark:${this.scimark}
    attendence:${this.attendence}
`);
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
  getname() {
    return this.name;
  }
  setname(name) {
    this.name = name;
  }

  getrollno() {
    return this.rollno;
  }
  setrollno(rollno) {
    this.rollno = rollno;
  }

  getage() {
    return this.age;
  }
  setage(age) {
    this.age = age;
  }

  getphymark() {
    return this.phymark;
  }
  setphymark(phymark) {
    this.phymark = phymark;
  }

  getcompmark() {
    return this.compmark;
  }
  setcompmark(compmark) {
    this.compmark = compmark;
  }

  getmathmark() {
    return this.mathmark;
  }
  setmathmark(mathmark) {
    this.mathmark = mathmark;
  }

  getscimark() {
    return this.scimark;
  }
  setscimark(scimark) {
    this.scimark = scimark;
  }

  getattendence() {
    return this.attendence;
  }
  setattendence(attendence) {
    this.attendence = attendence;
  }
};

let studentObj = new Student();

// set values with setter methods
studentObj.setname('John Snow');
studentObj.setrollno(100147);
studentObj.setage(20);
studentObj.setphymark(94);
studentObj.setcompmark(92);
studentObj.setmathmark(95);
studentObj.setscimark(91);
studentObj.setattendence(98);

// get vvalues from objects
console.log(studentObj.getname());
console.log(studentObj.getrollno());
console.log(studentObj.getage());
console.log(studentObj.getphymark());
console.log(studentObj.getcompmark());
console.log(studentObj.getmathmark());
console.log(studentObj.getscimark());
console.log(studentObj.getattendence());

let studentObj1 = new Student("Raja",100148,19,85,75,72,71,96);
console.log(studentObj);
console.log(studentObj1);

studentObj.liststudents();

