import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './assets/Nav'
import Home from './assets/Home'
import Base from './assets/Base'
import Topping from './assets/Topping'
import YourOrder from './assets/YourOrder'
import { createContext, useState } from 'react'


export const MyPizzaContext = createContext()

function App() {
  const [B, setB] = useState([])
  const [T, setT] = useState([])



  return (
    <MyPizzaContext.Provider value={{ B, T, setB, setT }}>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Base' element={<Base />} />
          <Route path='/Topping' element={<Topping />} />
          <Route path='/YourOrder' element={<YourOrder />} />
        </Routes>

      </>
    </MyPizzaContext.Provider>
  )
}

export default App
