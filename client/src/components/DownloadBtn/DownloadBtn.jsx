import React from 'react'
import gsap from 'gsap'
import { AiOutlineDownload } from 'react-icons/ai'
import './DownloadBtn.css'
const DownloadBtn = () => {

    const progressBarHover = ({currentTarget}) =>{
        //console.log("currentValue: ",currentTarget.lastChild.lastChild)
        let tl = gsap.timeline()
        tl
            .to(currentTarget.lastChild.lastChild,{
                strokeDashoffset:"0",
                stroke:"rgba(247, 244, 76, 0.76)"
            },0)
            .to(currentTarget.firstChild,{
                color:"rgba(247, 244, 76, 0.76)"
            },0)
    }
    const progressBarLeave = ({currentTarget}) =>{
        let tl = gsap.timeline()
        tl
            .to(currentTarget.lastChild.lastChild,{
                strokeDashoffset:"100",
                stroke:"rgba(233, 231, 95, 0.349)"
            },0)
            .to(currentTarget.firstChild,{
                color:"rgba(99, 98, 98, 0.349)"
            },0)
    }

  return (
    <span className='component__downloadBar' onMouseEnter={progressBarHover} onMouseLeave={progressBarLeave}>                    
        <AiOutlineDownload id='react-icon'/>
        <svg className='downloadSvg' width="50" height="50" viewBox="0 0 50 50">            
            <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(99, 98, 98, 0.349)" strokeWidth="3" />
            <circle className="percent" cx="25" cy="25" r="20" fill="none" stroke="grey" strokeWidth="3" pathLength="100" style={{strokeDashoffset:"100"}} />
        </svg>
    </span>
)
}

export default DownloadBtn