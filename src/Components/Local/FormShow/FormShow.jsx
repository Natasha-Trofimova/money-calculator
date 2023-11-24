// import { useContext } from "react"
// import { TxtInputContext } from "../../Context/TxtImput"
import css from "./Styled.css"


function FormShow() {
  // const { txt } = useContext(TxtInputContext)
  const { FormCss} = css
  return (
    <>
      <div>
        FormShow<br />
        
      </div>
      <FormCss>
      отображение cуммы :
       {/* {txt} */}
      </FormCss>

    </>
  )
}

export default FormShow