import css from "./Styled.css"
import { useContext } from "react"
import { TypeContext } from "./Context/TypeContext"
import { TxtInputContext } from "./Context/TxtImput"
import {TypeIncome} from "./Context/TypeIncome"

function ButtonForm() {
  const { Button } = css

  const { typeTransaction } = useContext(TypeContext)
  const { txt } = useContext(TxtInputContext)

const {typeIncome} = useContext(TypeIncome)

  return (
    <>
      кнопка передачи<br />
      <Button>
        Сохранить транзакцию
      </Button>
      тип:  {typeTransaction}<br />
      сумма:  {txt} рублей<br />
      тип расхода\дохода:  {typeIncome}<br />
    </>
  )
}

export default ButtonForm