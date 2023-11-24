import { useState } from "react"
import ExpenseIncome from "./ExpenseIncome"
import InputForm from "./InputForm"
import css from "./Styled.css"
import TransactionType from "./TransactionType"

import { TypeContext } from "./Context/TypeContext"

import { TxtInputContext } from "./Context/TxtImput"
import { useContext } from "react"


function Form() {

  const [typeTransaction, setTypeTransaction] = useState()
  //   const toggle = (event) => {
  //   setTypeTransaction(event.target.value);
  // }
  const { FormCss, FormContainer, Button } = css

  const { txt } = useContext(TxtInputContext)
  

  return (
    <>
      <FormCss>
        <TypeContext.Provider
          value={{
            typeTransaction,
            toggle: setTypeTransaction
          }}>

          <FormContainer>
            <TransactionType />
          </FormContainer>

          <InputForm />

          тип расхода или дохода
          <FormContainer>
            <ExpenseIncome />
          </FormContainer>
       
        кнопка передачи
        <Button
        >
        Сохранить транзакцию
        </Button>

        тип:  {typeTransaction}<br/>
        сумма:  {txt} рублей<br/>
        тип расхода\дохода:  <br/>
        </TypeContext.Provider>
      </FormCss>
    </>
  )
}

export default Form