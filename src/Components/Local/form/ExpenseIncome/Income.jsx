import { useState } from "react"
import { useContext } from "react"

import { TypeIncome } from "../Context/TypeIncome"

import css from "../Styled.css"
const { InputFormCss } = css




function Income() {



  // const {onChange1} =useContext(TxtInputContext)
  // const [txt, setTxt] = useState()
  const [typeIncome, setTypeIncome] = useState()
  const {togglTypeIncome} =useContext(TypeIncome)


  return (
    <>
      инпут доход
      <InputFormCss
        value={typeIncome}
        type={"text"}
        placeholder={"Введите тип дохода"}
        maxLength={"100"}
        onChange={event => {
          togglTypeIncome(event.target.value)
          setTypeIncome(event.target.value)
        }}
      />

    </>
  )
}

export default Income