let totalIncome = 0;
let totalExpense = 0;

const runfunctions = () => {
    getIncome();
    getExpenses();

}

const getIncome = () => {
    const income = document.getElementById("income") ;
    const incomeDisplay = document.getElementById("income-display");
    const incomeForm = document.getElementById("income-form");

    incomeForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        totalIncome = income.value
        incomeDisplay.innerHTML = totalIncome;
        calculateBalance();
        message(totalIncome)
        income.value = ""
    })    
}

const getExpenses = () => {
    const expensesData = [];
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");
    const expenseForm = document.getElementById("expense-form");

    expenseForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        expensesData.push({name:expenseName.value, amount:expenseAmount.value});
        generateExpenseList(expensesData);
        calculateBalance();
        message(expenseName.value)
        expenseName.value = ""
        expenseAmount.value = ""
    })
}

    const generateExpenseList = (expensesData) => {
        const expenseTableData = document.getElementById("expense-table-data");
        expenseTableData.innerHTML = expensesData.map(({name,amount})=>(
            `
                <tr>
                    <td>${name}</td>
                    <td>${amount}</td>
                </tr>
            `
        )).join("");
        calculateTotalExpense(expensesData);
    }

    const calculateTotalExpense = (expensesData) => {
        totalExpense = expensesData.map((expense)=>(+expense.amount)).reduce((acc, cur)=>(acc + cur))
        const totalExpenseDisplay = document.getElementById("expense-display");
        totalExpenseDisplay.innerHTML = totalExpense;
    }

const calculateBalance = () => {
    let totalBalance = +totalIncome - totalExpense;
    const totalBalanceDisplay = document.getElementById("balance-display");
    totalBalanceDisplay.innerHTML = totalBalance;
}

        const message = (message) => {
            alert(`${message} successfully added`)
        }
    
runfunctions();