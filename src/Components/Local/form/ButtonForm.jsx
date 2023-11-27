import css from "./Styled.css"
import { useContext } from "react"
import { TypeContext } from "./Context/TypeContext"
import { TxtInputContext } from "./Context/TxtImput"
import {TypeIncome} from "./Context/TypeIncome"

function ButtonForm() {
  const { Button } = css

  const { typeTransaction } = useContext(TypeContext)
  const { amountTransaction } = useContext(TxtInputContext)

const {inputComment} = useContext(TypeIncome)

  return (
    <>
      кнопка передачи<br />
      <Button>
        Сохранить транзакцию
      </Button>
      тип:  {typeTransaction}<br />
      сумма:  {amountTransaction} рублей<br />
      тип расхода\дохода:  {inputComment}<br />
    </>
  )
}

export default ButtonForm

// const validation = () => {
//   if (typeTransaction.length > 0 && txt && typeIncome) {
//     console.log('validation proshla')

//     //так не стоит делать почему то, потому что это просто строка

//     const dataLine = `${typeTransaction}::${txt}::${typeIncome}`
//     const dataLine = `${inputValue}::${inputType}::${inpComment}`

//     firstAction(
//       prev => [...prev, dataLine]
//     )

//     setInputValue('')
//     setInputType('')
//     setInputComment('')

//   } else console.log(' ne proshla')
// }


{/* <Button
backgroundColor={
  inputValue && inputType && inpComment ?
    "#95DB7B" :
    "#B9B9B9"
}
onClick={validation}
>
Сохранить транзакцию
</Button> */}