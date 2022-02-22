// bank account array  => bank database
let accounts = [
    { accNo: 100001, name:"John Smith", balance: 89089.56, email:'john@gmail.com'},
    { accNo: 100002, name:"David Smith", balance: 23089.56, email:'david@gmail.com'},
    { accNo: 100003, name:"Tony Stark", balance: 656089.56, email:'tony@gmail.com'},
    { accNo: 100004, name:"Aria Stark", balance: 100000.56, email:'aria@gmail.com'},
    { accNo: 100005, name:"John Snow", balance: 98978089.56, email:'johnsnow@gmail.com'},
];

console.log(accounts);

// find acc users
function findAccount(accNo) {
    for(let acc of accounts) {   // for(let i=0; i<account.lenth; i++)
        if(acc.accNo == accNo) {
            return acc;
        }
    }
    return null;
}

// show balance
function showBalance(accNo) {
    let accObj = findAccount(accNo);
    if(accObj!=null){
        console.log(`Hello user, ${accObj.name} - ${accObj.accNo} Your balance is ${accObj.balance}`);
    } else {
        console.error("Account does not exist with accNo : "+accNo);
    }
}

// deposit amount
function deposit(accNo, amount) {
    let accObj = findAccount(accNo);
    if(accObj!=null){
        // accObj.balance = accObj.balance + amount;
        accObj.balance  += amount;
        console.log(`Hello user, ${accObj.name}  Your updated balance is ${accObj.balance}`);
    } else {
        console.error("Account does not exist with accNo : "+accNo);
    }
}


// withdarw amount
let withdarw = function (accNo, amount) {
    let accObj = findAccount(accNo);
    if(accObj!=null){
        // accObj.balance = accObj.balance - amount;
        accObj.balance  -= amount;
        console.log(`Hello user, ${accObj.name}  Your updated balance is ${accObj.balance}`);
    } else {
        console.error("Account does not exist with accNo : "+accNo);
    }
}


// var response = findAccount(100001);
// console.log(response);

// showBalance(100004);
// showBalance(1000044);

// deposit(100004, 2000);
// deposit(100004, 1000);

withdarw(100004,2000);
withdarw(100004,5000);