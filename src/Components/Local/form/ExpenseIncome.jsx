import { useContext } from "react"
import Expense from "./ExpenseIncome/Expense"
import Income from "./ExpenseIncome/Income"
import { InputInfo } from "../../Context/InputInfo"

function ExpenseIncome() {

  const { typeTransaction } = useContext(InputInfo)

  return (
    <>
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