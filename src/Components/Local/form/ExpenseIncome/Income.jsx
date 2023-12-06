import { useState } from "react"
import { useContext } from "react"
import { InputInfo } from "../../../Context/InputInfo"
import css from "../StyledForm.css"
const { InputFormCss } = css




function Income() {

  const [inputComment, ] = useState()
  const {togglInputComment} =useContext(InputInfo)

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
        }}
      />

    </>
  )
}

export default Income