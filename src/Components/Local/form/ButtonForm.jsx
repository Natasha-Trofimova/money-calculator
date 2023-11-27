import css from "./Styled.css"
import { useContext } from "react"
import { InputInfo } from "../../Context/InputInfo"

function ButtonForm() {

  const { Button } = css

  const { typeTransaction } = useContext(InputInfo)
  const { amountTransaction } = useContext(InputInfo)
  const { inputComment } = useContext(InputInfo)

  const validation = () => {
    if (typeTransaction.length > 0 && amountTransaction && inputComment) {
      console.log('validation proshla')
    } else console.log(' ne proshla')
  }

  return (
    <>
      кнопка передачи<br />
      <Button
        backgroundColor={
          typeTransaction && amountTransaction && inputComment ?
            "#95DB7B" :
            "#B9B9B9"
        }
        onClick={validation}
      >
        Сохранить транзакцию
      </Button>
      тип:  {typeTransaction}<br />
      сумма:  {amountTransaction} рублей<br />
      тип расхода\дохода:  {inputComment}<br />
    </>
  )
}

export default ButtonForm