import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Button2.css'
const Button2 = ({path}) => {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(`/${path}`)} className="button2">Become a Partner!</button>
  )
}

export default Button2