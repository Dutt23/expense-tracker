import { useState } from 'react'
import Card from '../ui/Card'
import ExpenseFilter from '../expenses-filter/ExpenseFilter'
import ExpensesList from '../expenses-list/ExpensesList'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterYearChange = year => setFilteredYear(year)

  const filterYear = (expense) => expense.date.getFullYear().toString() === filteredYear
  
  const filteredList = expenses.filter(filterYear)
  
  return (
    <div>
      <Card className="expenses">
        {/* If you do this without keys, then react first adds an extra div. After that it goes through every item, and updates the contents to match our array */}
        <ExpenseFilter selected={filteredYear} onYearChange={filterYearChange} />
        <ExpensesChart expenses ={filteredList} />
        <ExpensesList list={filteredList}/>
      </Card>
    </div>
  )
}

export default Expenses
