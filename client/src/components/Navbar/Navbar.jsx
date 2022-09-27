import React,{ useState, useEffect } from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

import { Icon } from '../../components/index'
import './Navbar.css'


const Navbar = () => {
  const [ navbar, setNavbar ] = useState({pointerEvents:"none",opacity:0})
  const [ reactIcon, setReactIcon ] = useState(true)
  const navigate = useNavigate()
  const hoverNavbar = ()=>{
    let mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", ()=> {
    let tl = gsap.timeline()
    tl
      .to('.component__navbar button',{
        opacity:1,
        x:0        
      },0)
      .to('.component__navbar p',{
        opacity:1,
        x:0        
      },0)
      .to('.component__navbar-full',{
        width:200,
        backgroundColor:"rgba(63, 63, 63, 0.9)"
      },0)
      .to('.component__navbar .component__icon svg',{
        width:65,
        height:65
      },0)
      
      
    })
  }
  const hoverNavbarLeave = ()=>{
    let mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", ()=> {
    let tl = gsap.timeline()
    tl
      .to('.component__navbar button',{
        opacity:0,
        x:-500        
      },0)
      .to('.component__navbar p',{
        opacity:0,
        x:-500        
      },0)
      .to('.component__navbar-full',{
        width:50,
        backgroundColor:"rgba(63, 63, 63, 0.322)"
      },0)
      .to('.component__navbar .component__icon svg',{
        width:30,
        height:30
      },0)
    })
  }
  const navigateClick = (location=false) => {
    if(location){
      
      navigate(location);
      
    }
    setNavbar({pointerEvents:"none",opacity:0})
    setReactIcon(!reactIcon)
  }
  const todayYear = new Date().getFullYear()
  return (
    <div className='component__navbar' >
      <div className='component__navbar-full' onMouseEnter={hoverNavbar} onMouseLeave={hoverNavbarLeave}>
        <Icon size="30px" id="logo" />
        <div className='navbar__btns'> 
          <button onClick={()=>navigate("/")}>Home</button>
          <button onClick={()=>navigate("/products")}>Products</button>
          <button onClick={()=>navigate("/about")}>Team Wasa</button>
          <button onClick={()=>navigate("/projects")}>Partners & Projects</button>
          <button onClick={()=>navigate("/contact")}>Contact</button>
        </div>
        <div className='navbar__info'>
          <p>© {todayYear} Daniel Heinerås. All Rights Reserved.</p>  
        </div> 
      </div>

      <div className='component__navbar-small'>
        <div className='component__navbar-small__icon'>                    
              {reactIcon ? 
              <GiHamburgerMenu id="react-icon" onClick={()=>{setNavbar({pointerEvents:"all",opacity:1});setReactIcon(!reactIcon)}}/>                            
              : 
              <ImCross id="react-icon" onClick={()=>navigateClick()}/>           
            }
              



        </div>
        
        <div className='component__navbar-small__menu' style={navbar}>          
          <button onClick={()=>{navigateClick("/")}}>Home</button>
          <button onClick={()=>{navigateClick("/products")}}>Products</button>
          <button onClick={()=>{navigateClick("/about")}}>Team Wasa</button>
          <button onClick={()=>{navigateClick("/projects")}}>Partners & Projects</button>
          <button onClick={()=>{navigateClick("/contact")}}>Contact</button>
        </div>        
      </div>
    </div>
  )
}

export default Navbar