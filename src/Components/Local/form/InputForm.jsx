import { useState } from "react"
import { useContext } from "react"
import { TxtInputContext } from "./Context/TxtImput"
import css from "./Styled.css"

const { InputFormCss } = css

function InputForm() {



  const {onChange1} =useContext(TxtInputContext)
  const [txt, setTxt] = useState()

  return (
    <>
      <InputFormCss
        value={txt}
        type={"text"}
        placeholder={"Введите сумму транзакции"}
        maxLength={"100"}
        onChange={event => {
          onChange1(event.target.value)
          setTxt(event.target.value)
        }}
      />
    </>
  )
}

export default InputForm