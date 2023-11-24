// import { Routes, Route } from 'react-router-dom'

import './App.css'
import Body from './Components/Global/Body'
import Foot from './Components/Global/Foot'
import Head from './Components/Global/Head'

// import Main from './Components/Pages/Main'
// import Stat from './Components/Pages/Stat'
// import Plan from './Components/Pages/Plan'

// import css from './Components/Global/Styled.css'
// const { BodyrContainer } = css

function App() {

  return (
    <>
      <div className='divApp'>
        <Head />
        <Body/>
        {/* <BodyrContainer >
        инпут поля
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
          {/*<Route
            path='*'
            element={<Main/>}
          />
        </Routes> */}
{/* 
        <Main />
        <Stat />
        <Plan /> */}
        {/* </BodyrContainer> */}
        <Foot />
      </div>
    </>
  )
}

export default App
