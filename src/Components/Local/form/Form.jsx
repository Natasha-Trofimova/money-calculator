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

  const [amountTransaction, setAmountTransaction] = useState()
  const [typeTransaction, setTypeTransaction] = useState()
  const { FormCss, FormContainer } = css
  const [inputComment, setInputComment] = useState()

  return (
    <>
      <FormCss>
        <TxtInputContext.Provider
          value={{
            amountTransaction,
            onChange1: setAmountTransaction
          }}
        >
          <TypeContext.Provider
            value={{
              typeTransaction,
              toggle: setTypeTransaction
            }}>

            <TypeIncome.Provider
              value={{
                inputComment,
                togglInputComment: setInputComment
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