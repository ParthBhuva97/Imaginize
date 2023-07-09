import { useState } from 'react'
import MainPage from './components/MainPage'
import GetImage from './components/GetImage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<MainPage/>} ></Route>
      <Route exact path='/generate' element={<GetImage/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
