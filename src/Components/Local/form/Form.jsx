import { useState } from "react"
import ExpenseIncome from "./ExpenseIncome"
import InputForm from "./InputForm"
import css from "./Styled.css"
import TransactionType from "./TransactionType"

import { TypeContext } from "./Context/TypeContext"

import { TxtInputContext } from "./Context/TxtImput"
// import { useContext } from "react"
import { TypeIncome } from "./Context/TypeIncome"
import ButtonForm from "./ButtonForm"

function Form() {

  const [txt, setTxt] = useState()

  const [typeTransaction, setTypeTransaction] = useState()
  //   const toggle = (event) => {
  //   setTypeTransaction(event.target.value);
  // }
  const { FormCss, FormContainer } = css

  // const { txt } = useContext(TxtInputContext)
  const [typeIncome, setTypeIncome] = useState()


  return (
    <>
      <FormCss>
        <TxtInputContext.Provider
          value={{
            txt,
            onChange1: setTxt
          }}
        >
          <TypeContext.Provider
            value={{
              typeTransaction,
              toggle: setTypeTransaction
            }}>

            <TypeIncome.Provider
              value={{
                typeIncome,
                togglTypeIncome: setTypeIncome
              }}
            >
              <FormContainer>
                <TransactionType />
              </FormContainer>

              <InputForm />

              {/* тип расхода или дохода */}
              <FormContainer>
                <ExpenseIncome />
              </FormContainer>

              <ButtonForm/>

              {/* тип:  {typeTransaction}<br />
              сумма:  {txt} рублей<br />
              тип расхода\дохода:  {typeIncome}<br />  */}
            
            </TypeIncome.Provider>


          </TypeContext.Provider>
        </TxtInputContext.Provider>

      </FormCss>
    </>
  )
}

export default Form