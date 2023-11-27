import { useState } from "react"
import { useContext } from "react"

import { TypeIncome } from "../Context/TypeIncome"

import css from "../Styled.css"
const { InputFormCss } = css




function Income() {



  // const {onChange1} =useContext(TxtInputContext)
  // const [txt, setTxt] = useState()
  const [inputComment, setInputComment] = useState()
  const {togglInputComment} =useContext(TypeIncome)


  return (
    <>
      {/* инпут доход */}
      <InputFormCss
        value={inputComment}
        type={"text"}
        placeholder={"Введите тип дохода"}
        maxLength={"100"}
        onChange={event => {
          togglInputComment(event.target.value)
          setInputComment(event.target.value)
        }}
      />

    </>
  )
}

export default Income