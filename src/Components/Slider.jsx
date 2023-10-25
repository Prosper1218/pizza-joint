import React from 'react'
import "./Slider.css"
import { ThemeContext } from '../App'
import { useState, useContext } from 'react'



const Slider = () => {
  const { Lightheme, setLightheme } = useContext(ThemeContext)
  const [Switch, setSwitch] = useState(false)


  const handletoggle = () => {
    setSwitch(!Switch)
    setLightheme(!Lightheme)
    
  }
  return (
    <div>
      <p id='themetext'>toggletheme</p>
      <label className="switch">
        <input type="checkbox" name="" id="" checked={Switch} onChange={handletoggle} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Slider