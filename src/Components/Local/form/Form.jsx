import { useState } from "react"
import ExpenseIncome from "./ExpenseIncome"
import InputForm from "./InputForm"
import TransactionType from "./TransactionType"

import { TypeContext } from "./TypeContext"

function Form() {

  const [typeTransaction, setTypeTransaction] = useState()
  //   const toggle = (event) => {
  //   setTypeTransaction(event.target.value);
  // }

  return (
    <>
    <br />
      form<br />
      <TypeContext.Provider
      value={{
        typeTransaction,
        toggle: setTypeTransaction
      }}>
      <br />
      <TransactionType/>
      <br />
      <InputForm />
      <br />
      тип расхода или дохода
      <ExpenseIncome/>
      </TypeContext.Provider>
    </>
  )
}

export default Form