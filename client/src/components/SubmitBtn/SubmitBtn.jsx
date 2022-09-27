import React from 'react'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import gsap from 'gsap'
import './SubmitBtn.css'
gsap.registerPlugin(CSSRulePlugin);
const SubmitBtn = () => {
    const hoverBtn = () => {
        
        
        const beforeDiv = CSSRulePlugin.getRule(".contact__button button:after");
    
        let tl = gsap.timeline()
        tl
            .fromTo(beforeDiv,{
                cssRule:{width:40}
            },
            {
                cssRule:{width:140}
            },0)
            .to(".svg-icon #line2",{
                attr:{x1:0}
            },0.1)
            .to(".svg-icon",{
                x:20
            },0)
            .to(".contact__button button p",{
                color:"white"
            },0)


    }
    const hoverBtnLeave = () => {
        
        
        const beforeDiv = CSSRulePlugin.getRule(".contact__button button:after");
    
        let tl = gsap.timeline()
        tl
            .to(beforeDiv,{
                cssRule:{width:40}
            },0)
            .to(".svg-icon #line2",{
                attr:{x1:20}
            },0)
            .to(".svg-icon",{
                x:0
            },0)
            .to(".contact__button button p",{
                color:"white"
            },0)

    }
  return (
    <div className='contact__button' onMouseEnter={()=>hoverBtn(true)} onMouseLeave={()=>hoverBtnLeave(false)}>
        <svg className='svg-icon' height="40" width="40">
            <line id="line1" x1="12" y1="12" x2="20" y2="20"  />
            <line id="line2" x1="20" y1="20" x2="20" y2="20"  /> 
            <line id="line3" x1="12" y1="28" x2="20" y2="20"  />                
        </svg>  
        <button ><p>Submit</p></button>
    </div>
  )
}

export default SubmitBtn