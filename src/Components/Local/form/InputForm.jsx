import { useState } from "react"
import { useContext } from "react"
import { InputInfo } from "../../Context/InputInfo"
import css from "./StyledForm.css"

const { InputFormCss } = css

function InputForm() {

  const {onChange1} =useContext(InputInfo)
  const [amountTransaction, ] = useState()

  return (
    <>
      <InputFormCss
        value={amountTransaction}
        type={"text"}
        placeholder={"Введите сумму транзакции"}
        maxLength={"100"}
        onChange={event => {
          onChange1(event.target.value)
        }}
      />
    </>
  )
}

export default InputForm