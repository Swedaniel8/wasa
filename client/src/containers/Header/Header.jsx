import React, { useState } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'

import { Icon } from '../../components/index'
import { images } from '../../constants/images'
import './Header.css'


const Header = () => {
  const navigate = useNavigate()
  const [oldTarget, setOldTarget] = useState("")
 

  const onEnter = ({currentTarget}) => {
    let mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", ()=> {
      console.log(currentTarget.matches(".childh1"))
      setOldTarget(currentTarget)
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const selectedElem = (vw / 5)*2
      if(!oldTarget && currentTarget.className === "header__image wasa-img1"){return}
      if(oldTarget !== currentTarget ){
        let tl = gsap.timeline({})
      tl
        .to('.header__image',{width:selectedElem/2,ease:"back"},0)      
        .to(currentTarget,{width:selectedElem,ease:"back"},0)
        .to('.header__image .wasa-img-opacity',{ease:"power1",backgroundColor:"rgba(0, 0, 0, 0.726)"},0)
        .to(currentTarget.firstChild,{ease:"power1",backgroundColor:"rgba(0, 0, 0, 0.0"},0)    
        .to(".header__image-text",{opacity:0,duration:0},0)    
        .to(currentTarget.lastChild,{opacity:1,duration:0},0)    
      }

  })
  }

  
  return (
    <div className='container__header'>

      <div className='header__image wasa-img5' onMouseEnter={onEnter} onClick={() => navigate("/contact")}>
        <div className='wasa-img-opacity'></div>
        <div className='header__image-text'>
          <h1>Your Future With Wasa</h1>
        </div>
      </div>

      <div className='header__image wasa-img4' onMouseEnter={onEnter} onClick={() => navigate("/projects")}>
        <div className='wasa-img-opacity'></div>
        <div className='header__image-text'>
          <h1>Projects And Partners</h1>
        </div>
      </div>

      <div className='header__image wasa-img3' onMouseEnter={onEnter} onClick={() => navigate("/products")}>
        <div className='wasa-img-opacity'></div>
        <div className='header__image-text'>
          <h1>Products</h1>
        </div>
      </div>

      <div className='header__image wasa-img2' onMouseEnter={onEnter} onClick={() => navigate("/about")}>
        <div className='wasa-img-opacity'></div>
        <div className='header__image-text'>
          <h1>The Team Of Wasa</h1>
        </div>
      </div>

      <div className='header__image wasa-img1' onMouseEnter={onEnter} onClick={() => navigate("/")}>
        <div className='wasa-img-opacity'></div>
        <div className='header__image-text'>
          <h1><Icon />Wasa Millimeter Wave</h1>
          <h2>The Future of Millimeter Wave Technology</h2>
        </div>
        

      </div>

    </div>
  )
}

export default Header