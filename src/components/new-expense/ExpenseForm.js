
import React, { useState, useRef } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm({ onSaveExpenseData, toggleExpenseForm }) {


  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const expenseForm = useRef(null)

  const [userInput, setUserInput] = useState({

  })

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  // Incase too many state updates are dispatched at once.
  // We could be using an outdated version of the state while doing this
  const updateObj = () => {
    // Wrong
    // setUserInput({
    //   ...userInput
    // })

    // All previous state will latest
    setUserInput((prevState) => {
      return { ...prevState }
    })
  }
  //When browser clicks, defsult behavior makes a request hance
  const onSubmit = (e) => {
    e.preventDefault()
    const expenseData = {
      title,
      amount : +amount,
      date: new Date(date)
    }
    onSaveExpenseData(expenseData)
    setTitle("")
    setAmount("")
    setDate("")
    toggleExpenseForm()
    // expenseForm.current.reset()
  }

  return (
    <form ref={expenseForm} onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={toggleExpenseForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
