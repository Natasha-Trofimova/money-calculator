import Main from "../Pages/Main"
import Plan from "../Pages/Plan"
import Stat from "../Pages/Stat"

import css from "./Styled.css"

import { Routes, Route } from 'react-router-dom'
import { TxtInputContext } from '../Context/TxtImput'
import { useState } from 'react'

const { BodyrContainer } = css

function Body() {

  const [txt, setTxt] = useState()

  return (
    <>
    <TxtInputContext.Provider
    value={{
      txt,
      onChange1: setTxt
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
            element={<Stat/>}
          />
          <Route
            path='/plan'
            element={<Plan/>}
          />
          {/* заглушка  */}
          <Route
            path='*'
            element={<Main/>}
          />
        </Routes>

        {/* <Main />
        <Stat />
        <Plan /> */}

      </BodyrContainer>

    </TxtInputContext.Provider>
     
    </>
  )
}

export default Body
