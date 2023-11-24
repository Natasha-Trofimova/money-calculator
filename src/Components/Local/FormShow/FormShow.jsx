import { useContext } from "react"
import { TxtInputContext } from "../../Context/TxtImput"

function FormShow() {
  const { txt } = useContext(TxtInputContext)
  return (
    <>
      <div>
        FormShow<br />
        отображение cуммы<br/>
        {txt}
      </div>

    </>
  )
}

export default FormShow