import { useState } from "react"

import css from "./Styled.css"

import ExpenseIncome from "./ExpenseIncome"
import InputForm from "./InputForm"
import TransactionType from "./TransactionType"
import ButtonForm from "./ButtonForm"

import { TypeContext } from "./Context/TypeContext"
import { TxtInputContext } from "./Context/TxtImput"
import { TypeIncome } from "./Context/TypeIncome"

function Form() {

  const [txt, setTxt] = useState()
  const [typeTransaction, setTypeTransaction] = useState()
  const { FormCss, FormContainer } = css
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
              <ExpenseIncome />

              <ButtonForm />

            </TypeIncome.Provider>
          </TypeContext.Provider>
        </TxtInputContext.Provider>

      </FormCss>
    </>
  )
}

export default Form