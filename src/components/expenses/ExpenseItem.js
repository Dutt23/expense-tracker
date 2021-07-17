
import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../ui/Card'

const ExpenseItem = ({ title, amount, date }) => {

  const [name, setName] = useState(title);

  const [expenseAmount, setExpenseAmount] = useState(amount);

  const [expenseDate, setExpenseDate] = useState(date);

  const changeChangeNameHandler = (e) =>{
    setName('Updated!')
  }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate 
      date={expenseDate}
      />
      <div className="expense-item__description">
        <h2>
          {name}
        </h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <button onClick={changeChangeNameHandler}>Change title</button>
    </Card>
    </li>
  )
}

export default ExpenseItem