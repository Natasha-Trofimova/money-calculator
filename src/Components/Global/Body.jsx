import Main from "../Pages/Main"
import Plan from "../Pages/Plan"

import css from "./Styled.css"

import { Routes, Route } from 'react-router-dom'
import { InputInfo } from "../Context/InputInfo"
import { useState } from "react"

const { BodyrContainer } = css

function Body() {

  const [typeTransaction, setTypeTransaction] = useState()
  const [amountTransaction, setAmountTransaction] = useState()
  const [inputComment, setInputComment] = useState()

  return (
    <>
      <InputInfo.Provider
        value={{
          typeTransaction,
          toggle: setTypeTransaction,
          amountTransaction,
          onChange1: setAmountTransaction,
          inputComment,
          togglInputComment: setInputComment,
        }}
      >
            <BodyrContainer >
              <Routes>
                <Route
                  path='/main'
                  element={<Main />}
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

      </InputInfo.Provider>
    </>
  )
}

export default Body
