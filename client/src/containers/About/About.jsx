import React, { useEffect,useLayoutEffect  } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { TbCrown } from 'react-icons/tb'
import { images } from '../../constants/images'
import './About.css'



const About = () => {
  window.scrollTo(0, 0);
  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    //ScrollTrigger.saveStyles(".about__item__img, .about__item__text, .about__title")
    //console.log("ABPIT!!!!!!!!")
    
    let mm = ScrollTrigger.matchMedia(
    {
      "(min-width: 1024px)": function() {      
        let tlArray = gsap.utils.toArray(".about__item").forEach((item, i) => {
          var imgX;
          var textX;
          if(i%2 === 1){
            imgX = 100;
            textX = -100;
          }else{
            imgX = -100;
            textX = 100;
          }
          //console.log("item: ",item.id)
          //console.log("i: ",i)
          //console.log("DESKTOP")
          let tl = gsap.timeline({scrollTrigger: {
            trigger:`.container__about #${item.id}`,
            toggleActions: 'play reverse play reverse ',
            start: "50px center",
            end: "bottom center",
            //markers:true
            
          }})
          tl
            .fromTo(`#${item.id} .about__item__img`,{
              x:imgX,
              autoAlpha:0.01,                      
            },
            {
              x:0,
              autoAlpha:1,                    
            },0
            )
            .fromTo(`#${item.id} .about__item__text`,{
              x:textX,
              autoAlpha:0.01,                      
            },
            {
              x:0,
              autoAlpha:1,                    
            },0
            )                
        })
        let tlTitle = gsap.timeline({scrollTrigger:{
            trigger:`.container__about #item1`,
            toggleActions: 'play reverse play reverse ',
            start: "50px center",
            end: "400px center",
            //markers:true
        }})
        tlTitle
          .fromTo(".about__title",{
            y:-100,
            autoAlpha:0.01
          },{
            y:0,
            autoAlpha:1
          }
          )
    }    
  },
  {
    "(max-width: 1023px)": function() {
      let tlMobile = gsap.timeline()
      //console.log("MOBILE")
      tlMobile.set('.about__title',{
        autoAlpha:1,
        opacity:1,
        y:0
      },0)
      .set('.about__item__text',{
        autoAlpha:1,
        x:0
      },0)
      .set('.about__item__img',{
        autoAlpha:1,
        x:0
      },0)
    }})

    return ()=>{
      mm.kill()        
    }
    
    
  },[])

  return (
    <div className='container__about'>
      
      <div className='about__title'>        
        <h1>The Minds Behind Wasa Millimeter  Wave AB</h1>                
      </div>

      <div className='about__item' id="item1">
       
        <div className='about__item__img'>
          <img src={images.about1} alt=''/>
        </div>
        <div className='about__item__text'>
          <h1>Dr. Anna Eriksson</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <div className='about__item' id="item2">        
       
        <div className='about__item__text'>
          <h1>Dr. Bengt Andersson</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='about__item__img'>
          <img src={images.about2} alt=''/>
        </div>
      </div>

      <div className='about__item' id="item3">
       
        <div className='about__item__img'>
          <img src={images.about3} alt=''/>
        </div>
        <div className='about__item__text'>
          <h1>Dr. Fredrik Karlsson</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

    </div>
  )
}

export default About