import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { Link } from "react-scroll";

import { AiOutlineDownload } from 'react-icons/ai'

import { DownloadBtn } from '../../components/index'
import { images } from '../../constants/images'
import './Products.css'


const Products = () => {
    window.scrollTo(0, 0);
    const beforeDiv = CSSRulePlugin.getRule(".products__navbar-progressbar:after");
    const ref = useRef(null)
    const vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))*3 // Multiply by number of items

    useEffect(()=> {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(CSSRulePlugin);
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": function() {
        let prTl = gsap.timeline({scrollTrigger: { scrub:1,start:320,end:vh-150}})
        prTl
        .fromTo(beforeDiv,
            {
                cssRule:{x:0},                
            }, 
            {
            cssRule:{x:290},                
        },0)
            


        let tl = gsap.timeline({scrollTrigger: {
            trigger:"#item2",
            toggleActions: 'play none none reverse',
            start: 'center 75%',
            scrub:1, 
            //markers:true
        }})        
        tl            
        
            .to(".products__navbar-text #Link1", {          
                opacity:0.2,
                                               
            },0)
            .to(".products__navbar-text #Link2", {          
                opacity:1,
                                              
            },0)

        let tl2 = gsap.timeline({scrollTrigger: {
            trigger:"#item3",
            toggleActions: 'play none none reverse',
            start: 'center 75%',
            scrub:1, 
            //markers:true
        }})        
        tl2
            .to(".products__navbar-text #Link2", {          
                opacity:0.2,
                                              
            },0)
            .to(".products__navbar-text #Link3", {          
                opacity:1,
                                               
            },0)        
        }})
    },[])

    

  return (
    <div className='container__products'>
        <div className='products__navbar'>
            <div className='products__navbar-progressbar'></div>
            <div className='products__navbar-text'>
                <Link className="products__navbar-text-Link" to="item1" id="Link1" spy={true} smooth={true}>V45 Amp</Link>
                <Link className="products__navbar-text-Link" to="item2" id="Link2" spy={true} smooth={true}>W110 Amp</Link>
                <Link className="products__navbar-text-Link" to="item3" id="Link3" spy={true} smooth={true}>G10 Multi</Link>
            </div>
            
        </div>

        <div className='products__item' id="item1">
            <div className='products__item-text'>
                <h1>Wasa V45 Amplifier</h1>                
                <h2>Frequency from 45 to 70 Ghz</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Datasheet: <DownloadBtn /></p>                                                
            </div>
            <div className='products__item-img'>
                <img src={images.amp1} alt=''/>
            </div>
        </div>

        <div className='products__item' id="item2">
            <div className='products__item-text'>
                <h1>Wasa W110 Amplifier</h1>                
                <h2>Frequency from 110 to 120 Ghz</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Datasheet: <DownloadBtn /></p>
            </div>
            <div className='products__item-img'>
                <img src={images.amp2} alt=''/>
            </div>
        </div>

        <div className='products__item' id="item3">
            <div className='products__item-text'>
                <h1>Wasa G10 Multiplier</h1>
                
                <h2>Frequency from 3 to 10 Thz</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Datasheet: <DownloadBtn /></p>
            </div>
            <div className='products__item-img'>
                <img src={images.amp3} alt=''/>
            </div>
        </div>

    </div>
  )
}

export default Products