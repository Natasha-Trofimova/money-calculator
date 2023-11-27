import Main from "../Pages/Main"
import Plan from "../Pages/Plan"
import Stat from "../Pages/Stat"

import css from "./Styled.css"

import { Routes, Route } from 'react-router-dom'
import { FinalInputInfo } from "../Context/FinalInputInfo"
import { InputInfo } from "../Context/InputInfo"
import { useState } from "react"

const { BodyrContainer } = css

function Body() {

  const [typeTransaction, setTypeTransaction] = useState()
  const [amountTransaction, setAmountTransaction] = useState()
  const [inputComment, setInputComment] = useState()

  const [typeTransaction2, setTypeTransaction2] = useState()
  const [amountTransaction2, setAmountTransaction2] = useState()
  const [inputComment2, setInputComment2] = useState()
const firstAction = []

  return (
    <>

      <InputInfo.Provider
        value={{
          typeTransaction,
          toggle: setTypeTransaction,
          amountTransaction,
          onChange1: setAmountTransaction,
          inputComment,
          togglInputComment: setInputComment
        }}
      >

        <FinalInputInfo.Provider
          value={{
            typeTransaction2,
            toggle2: setTypeTransaction2,
            amountTransaction2,
            onChange12: setAmountTransaction2,
            inputComment2,
            togglInputComment2: setInputComment2,
            firstAction
          }}
        >
          <BodyrContainer >
            /
            <Routes>
              <Route
                path='/main'
                element={<Main />}
              />
              <Route
                path='/stat'
                element={<Stat />}
              />
              <Route
                path='/plan'
                element={<Plan />}
              />
              {/* заглушка  */}
              <Route
                path='*'
                element={<Main />}
              />
            </Routes>
          </BodyrContainer>
        </FinalInputInfo.Provider>
      </InputInfo.Provider>
    </>
  )
}

export default Body
