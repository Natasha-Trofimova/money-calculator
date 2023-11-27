import css from "./Styled.css"

import ExpenseIncome from "./ExpenseIncome"
import InputForm from "./InputForm"
import TransactionType from "./TransactionType"
import ButtonRecording from "./Button/ButtonRecording"


function Form() {

  const { FormCss, FormContainer } = css


  return (
    <>
      <FormCss>
        <FormContainer>
          <TransactionType />
        </FormContainer>

        <InputForm />

        {/* тип расхода или дохода */}
        <ExpenseIncome />

        {/* <ButtonForm /> */}

        {/* запист */}
        <ButtonRecording />
      </FormCss>
    </>
  )
}

export default Form