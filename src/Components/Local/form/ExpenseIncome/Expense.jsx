import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useContext } from "react"
import { useState } from 'react';
import { InputInfo } from '../../../Context/InputInfo';


function Expense() {

  const {togglInputComment} =useContext(InputInfo)
  const [inputComment] = useState()



  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Выберите тип расхода</FormLabel>
        <RadioGroup
          value={inputComment} 
          onChange={event => {
            togglInputComment(event.target.value) 
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