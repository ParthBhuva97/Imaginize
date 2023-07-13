import { useState } from 'react'
import MainPage from './components/MainPage'
import GetImage from './components/GetImage'
import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom'
import GetImage2 from './components/GetImage2'


function App() {

  return (
    <HashRouter>
    <Routes>
      <Route exact path='/' element={<MainPage/>} ></Route>
      {/* <Route exact path='/generate' element={<GetImage/>} ></Route> */}
      <Route exact path='/generate' element={<GetImage2/>} ></Route>
    </Routes>
    </HashRouter>
  )
}

export default App
