import { useContext } from "react"
import css from "./Styled.css"
import { FinalInputInfo } from "../../Context/FinalInputInfo"


function FormShow() {

  const { FormCss } = css
  const { typeTransaction2 } = useContext(FinalInputInfo)
  const { amountTransaction2 } = useContext(FinalInputInfo)
  const { inputComment2 } = useContext(FinalInputInfo)



  const data = [
    `${typeTransaction2}`,
    `${amountTransaction2}`,
    `${inputComment2}`
  ];
  const dolbaeb = data.map((number) =>
    number,
  );

  
  const tests = [
    { id: 0, type: "Р", sum: "100", com: "транспорт" },
    { id: 1, type: "Р", sum: "500", com: "развлечения" },
    { id: 2, type: "д", sum: "1000", com: "зп" }
  ]

  let list = tests.map(test =>
    <li key={test.id}>
      {test.type}
      {test.sum}
      {test.com}
    </li>
  )



  return (
    <>
      <div>
        FormShow<br />
      </div>
      <FormCss>
        отображение<br />
        тип:  {typeTransaction2}<br />
        сумма:  {amountTransaction2} рублей<br />
        тип расхода\дохода:  {inputComment2}<br />
      </FormCss>
      <FormCss>
        маневры<br />
        {dolbaeb}
        <br />
        {list}


      </FormCss>
    </>
  )
}

export default FormShow