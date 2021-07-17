import React, { useState } from 'react'
import './App.css';
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/new-expense/NewExpense'

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]


function App() {

  

  const [expenseList, setExpenseList] = useState(expenses)
  // First is element tag
  // Second is properties you want to set
  // Third is the child element
  // Explains why we need wrapper also
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  const addExpenseHandler = (expense) => {
    console.log("in app js")
    console.log(expense)
    setExpenseList((expenses) =>{
      return [expense, ...expenses]
    })
    // expenses.push(expense)
    // console.log(expenses)
  }

  return (
    <div className="App">
      <NewExpense
        onAddExpense={addExpenseHandler}
      />
      <Expenses
        expenses={expenseList}
      />
    </div>
  );
}

export default App;
