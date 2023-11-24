// ExpenseIncome
import { useContext } from "react"
import { TypeContext } from "./TypeContext"



function ExpenseIncome() {

  const { typeTransaction } = useContext(TypeContext)


  return (
    <>
      <div>
        FormShow<br />
        отображение <br/>
        {typeTransaction}
      </div>

    </>
  )
}

export default ExpenseIncome