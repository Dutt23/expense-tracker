
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense({ onAddExpense }) {

  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false)

  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random()
    }
    console.log(expenseData)
    onAddExpense(expenseData)
  }



  const toggleExpenseForm = () => {
    console.log(showAddExpenseForm)
    setShowAddExpenseForm((toggle) => !toggle)
  }

  return (
    <div className="new-expense">
      {!showAddExpenseForm &&
        <div>
          <button onClick={toggleExpenseForm}>Add Expense</button>
        </div>
      }

      {showAddExpenseForm && <ExpenseForm
        toggleExpenseForm={toggleExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler} />
      }

    </div>
  )
}
