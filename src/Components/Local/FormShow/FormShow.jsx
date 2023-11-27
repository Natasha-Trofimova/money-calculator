import css from "./Styled.css"


function FormShow() {
  const { FormCss} = css
  return (
    <>
      <div>
        FormShow<br />
      </div>
      <FormCss>
      отображение 
      </FormCss>
    </>
  )
}

export default FormShow