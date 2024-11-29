import React from 'react'
import './CustomButton.css'
import state from '../../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../../config/helpers'

const CustomButton = ({type, title, handleClick, customStyles}) => {
    const snap = useSnapshot(state); 
    const generateStyle = (type) => {
      if(type === 'filled') {
        return {
          backgroundColor: snap.color,
          color: getContrastingColor(snap.color),
          customStyles
        }
      } else if(type === "outline") {
        return {
          borderWidth: '1px',
          borderColor: snap.color,
          color: snap.color,
          customStyles
        }
      }
    }

  return (
    <div className='custom'>
      <button className='custom-btn' 
      style={generateStyle(type)}
      onClick={handleClick}>
        {title}
      </button>
    </div>
  )
}

export default CustomButton
