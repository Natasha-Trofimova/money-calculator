import css from "./../Styled.css"
import { useContext } from "react"
import { InputInfo } from "../../../Context/InputInfo"
import { FinalInputInfo } from "../../../Context/FinalInputInfo"


function ButtonRecording() {

  const { Button } = css

  const { typeTransaction } = useContext(InputInfo)
  const { amountTransaction } = useContext(InputInfo)
  const { inputComment } = useContext(InputInfo)

  const { toggle2 } = useContext(FinalInputInfo)
  const { onChange12 } = useContext(FinalInputInfo)
  const { togglInputComment2 } = useContext(FinalInputInfo)


  const validation = () => {
    if (typeTransaction.length > 0 && amountTransaction && inputComment) {
      console.log('validation proshla')


      toggle2(`${typeTransaction}`)
      onChange12(`${amountTransaction}`)
      togglInputComment2(`${inputComment}`)


    } else console.log(' ne proshla')
  }

  return (
    <>
      кнопка запис<br />
      <Button
        backgroundColor={
          typeTransaction && amountTransaction && inputComment ?
            "#95DB7B" :
            "#B9B9B9"
        }
        onClick={validation}
      >
        кнопка запи
      </Button>
      тип:  {typeTransaction}<br />
      сумма:  {amountTransaction} рублей<br />
      тип расхода\дохода:  {inputComment}<br />


    </>
  )
}

export default ButtonRecording