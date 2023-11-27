import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useContext } from "react"
// import { TypeContext } from '../Context/TypeContext'; 
import { useState } from 'react';

import { TypeIncome } from "../Context/TypeIncome"


// Type of expenses
function Expense() {

  const {togglInputComment} =useContext(TypeIncome)
  const [inputComment] = useState()



  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Выберите тип расхода</FormLabel>
        <RadioGroup
          value={inputComment} 
          onChange={event => {
            togglInputComment(event.target.value) 
            inputComment(event.target.value) 
          }}

        // aria-labelledby="demo-row-radio-buttons-group-label"
        // name="row-radio-buttons-group"
        >
          <FormControlLabel value="Транспорт" control={<Radio />} label="Транспорт" />
          <FormControlLabel value="Развлечения" control={<Radio />} label="Развлечения" />
          <FormControlLabel value="Оплата счетов" control={<Radio />} label="Оплата счетов" />
          <FormControlLabel value="Рестораны" control={<Radio />} label="Рестораны" />
          <FormControlLabel value="Путешествия" control={<Radio />} label="Путешествия" />
          <FormControlLabel value="Одежда" control={<Radio />} label="Одежда" />
          <FormControlLabel value="Продукты" control={<Radio />} label="Продукты" />

        </RadioGroup>
      </FormControl>
    </>
  )
}

export default Expense

// import { useState } from 'react';
//  import FormLabel from '@mui/material/FormLabel';
// import { useContext } from "react"
// import { TypeContext } from './Context/TypeContext';


  // const {toggle} =useContext(TypeContext)

  // const [typeTransaction] = useState()

  // return (
    // <>
      // 
    // </>
  // )
// }
