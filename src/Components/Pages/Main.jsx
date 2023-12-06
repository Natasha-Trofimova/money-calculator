import ExpenseIncome from "../Local/form/ExpenseIncome"
import InputForm from "../Local/form/InputForm"
import TransactionType from "../Local/form/TransactionType"
import css from "./Styled.css"
import { InputInfo } from "../Context/InputInfo"
import { useContext, useState } from "react"
import './PagStyle.css'
import Diagram from "../Local/Diagram/Diagram"


function Main() {

  const {
    PagCss, FormContainer, FormCss, Button,
    FormShowCss, } = css

  const { typeTransaction } = useContext(InputInfo)
  const { amountTransaction } = useContext(InputInfo)
  const { inputComment } = useContext(InputInfo)


  const [data1, setData1] = useState([])


  const validation = () => {
    if (typeTransaction.length > 0 && amountTransaction && inputComment) {
      console.log('validation proshla')


      const dataLine = `${typeTransaction}::${amountTransaction}::${inputComment}`

      setData1(
        prev => [...prev, dataLine]
      )


    } else console.log(' ne proshla')
  }

  return (
    <>
      <PagCss >

        <FormCss>

          <FormContainer>
            <TransactionType />
          </FormContainer>

          <InputForm />

          {/* тип расхода или дохода */}
          <ExpenseIncome />

          <Button
            backgroundColor={
              typeTransaction && amountTransaction && inputComment ?
                "#95DB7B" :
                "#B9B9B9"
            }
            onClick={validation}
          >
            Кнопка записи
          </Button>

        </FormCss>

        {/* накинуть стили */}
        <FormShowCss>


          <p>
            Список транзакций
          </p>
          {
            data1.map((item, index) => {
              return (
                <div className="line" key={index}>
                  {/* накинуть стиль на span */}
                  <span className="cell">{item.split('::')[0]}</span>
                  <span className="cell">{item.split('::')[1]}</span>
                  <span className="cell">{item.split('::')[2]}</span>
                </div>
              )
            }
            )
          }

          <Diagram />
        </FormShowCss>
      </PagCss>
    </>
  )
}

export default Main