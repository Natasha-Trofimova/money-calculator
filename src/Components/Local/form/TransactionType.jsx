import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
// import FormLabel from '@mui/material/FormLabel';
import { useContext } from "react"
import { TypeContext } from './Context/TypeContext';

function TransactionType() {

  const {toggle} =useContext(TypeContext)

  const [typeTransaction] = useState()

  return (
    <>
      <FormControl>
        Тип транзакции
        {/* <FormLabel id="demo-row-radio-buttons-group-label">Тип транзакции</FormLabel> */}
        <RadioGroup
          row
          value={typeTransaction}
          onChange={event => {
            toggle(event.target.value)
            typeTransaction(event.target.value)
          }}

        // aria-labelledby="demo-row-radio-buttons-group-label"
        // name="row-radio-buttons-group"
        >
          <FormControlLabel value="Доход" control={<Radio />} label="Доход" />
          <FormControlLabel value="Расход" control={<Radio />} label="Расход" />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default TransactionType