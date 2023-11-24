// ExpenseIncome
import { useContext } from "react"
import Expense from "./ExpenseIncome/Expense"
import Income from "./ExpenseIncome/Income"
import { TypeContext } from "./TypeContext"



function ExpenseIncome() {

  const { typeTransaction } = useContext(TypeContext)


  return (
    <>
      <div>
        {typeTransaction}
      </div>

      {
        typeTransaction === 'Доход' &&
        <Income />
      }

      {
        typeTransaction === 'Расход' &&
        <Expense />
      }

    </>
  )
}

export default ExpenseIncome