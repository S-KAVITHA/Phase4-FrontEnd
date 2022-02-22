let Budget = class {

    constructor(budget, expenseName, expense) {
      this.budget = budget;
      this.expenseName = expenseName;
      this.expense = expense;
    }
  
    submitExpense() {
       const value = this.budgetInput.value;
      if(value === '' || value < 0){
        this.budgetFeedback.classList.add('showItem');
        this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;
        const self = this;
        setTimeout(function(){
          self.budgetFeedback.classList.remove('showItem');
        }, 3000);
      } else {
        this.budget.textContent = value;
        this.budgetInput.value = '';
        this.showBalance();
      }
    }

    addExpense(expName,expAmt){
       
        if(expName =="" || expAmt =="" ){
            alert("Please enter something first!");
        }else{
            var html="";
     
            html="<tr><td>"+expName+"</td><td>"+expAmt+"</td></tr>";
     
            document.getElementById('result').innerHTML+=html;
     
            document.getElementById('expName').value="";
            document.getElementById('expAmt').value="";
            
        }
         
    }


      showBalance(){
        
        console.log(`
        The bud details is as follows :
        id : ${this.budget}
        name : ${this.expensee}
         `);
      }
     
    // get & set methods
  
    setbudget(budget) {
      this.budget = budget;
    }
    getbudget() {
        return this.budget;
      }
  
    setexpenseName(expenseName) {
      this.expenseName = expenseName;
    }
    getexpenseName() {
        return this.expenseName;
      }
 
    setexpense(expense) {
      this.expense = expense;
    }  
    getexpense() {
        return this.expense;
      }

  };
  
  
  $(document).ready(function () {
    $('#Submit').click(function () {
        
let budgetObj = new Budget();
const value = document.form1.budget.value;

budgetObj.setbudget(value);
console.log(budgetObj.getbudget());
budgetObj.showBalance();
document.getElementById('budget-amount').innerHTML = budgetObj.getbudget();
    });
})



$(document).ready(function () {
    $('#ExpSubmit').click(function () {
        
let budgetObj = new Budget();
const expName = document.form2.expenseName.value;
const expAmt = document.form2.expenseAmt.value;
budgetObj.setexpenseName(expName);
budgetObj.setexpense(expAmt);
console.log(budgetObj.getexpenseName());
console.log(budgetObj.getexpense());

document.getElementById('expense-amount').innerHTML = budgetObj.getexpense();
document.getElementById('exp-Name').innerHTML = budgetObj.getexpenseName();
document.getElementById('exp-Amount').innerHTML = budgetObj.getexpense();
budgetObj.addExpense(expName,expAmt)
    });
})


