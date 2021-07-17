import ExpenseItem from '../expenses/ExpenseItem'
import './ExpensesList.css'
export default function ExpensesList({ list }) {

  if (list.length === 0)
    return <h2 className="expenses-list__fallback"> No Expenses Found</h2>

  return (
    <ul className="expenses-list">
      {
        list.map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />)
      }
    </ul>
  )
}
