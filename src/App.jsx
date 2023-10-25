import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './assets/Nav'
import Home from './assets/Home'
import Base from './assets/Base'
import Topping from './assets/Topping'
import YourOrder from './assets/YourOrder'
import { createContext, useState } from 'react'


export const MyPizzaContext = createContext()
export const ThemeContext = createContext()

function App() {
  const [B, setB] = useState([])
  const [T, setT] = useState([])
  const [Lightheme, setLightheme] = useState(true)

  const themestyles = {
    backgroundColor: Lightheme ? "white" : "black",
    color: Lightheme ? "black" : "white",
    height: "100vh",
  }

  return (
    <ThemeContext.Provider value={{ Lightheme, setLightheme }}>
      <MyPizzaContext.Provider value={{ B, T, setB, setT }}>
        <>
          <div style={themestyles}>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/Base' element={<Base />} />
              <Route path='/Topping' element={<Topping />} />
              <Route path='/YourOrder' element={<YourOrder />} />
            </Routes>

          </div>
        </>
      </MyPizzaContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
