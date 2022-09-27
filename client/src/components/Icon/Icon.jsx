import React from 'react'
import { TbCrown } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import './Icon.css'
const Icon = ({size}) => {
  const navigate = useNavigate()
  return (
    <div className='component__icon' >
        <TbCrown id="react-icon" style={{height:size, width:size}} onClick={()=>navigate("/")}/>
    </div>
  )
}

export default Icon