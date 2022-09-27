import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


import { SubmitBtn, DownloadBtn, Button2 } from '../../components/index'
import { images } from '../../constants/images'
import './Partners.css'
import { useNavigate } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger);
const Partners = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate()
/*
  useEffect(()=>{
    

    gsap.utils.toArray(".panel1").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false 
      });
    });
    
    
    ScrollTrigger.create({
      snap: 1 / 4 // snap whole page to the closest section!
    });
  },[])
 */
  return (
    <div className='container__partners'>

        

        <div className='partners__projects panel'>
          <h1>Wasa´s projects</h1>
          <div className='partners__projects-info'>
            <div className='partners__projects-left'>
              <div className='partners__projects-text'>
                <h2>James Webb Telescope</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>See full report<DownloadBtn /></p>
              </div>
              <div className='partners__projects-text'>
                <h2>NASA space station</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>See full report<DownloadBtn /></p>
              </div>
            </div>

            <div className='partners__projects-right'>
              <div className='partners__projects-text'>
                <h2>Chalmers high frequency radar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>See full report<DownloadBtn /></p>
              </div>
            </div>
          </div>
        </div>

        <div className='partners__card panel'>
            <div className='partners__card__info'>
                <h1>Our Partner Network</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Button2 path="contact" />
            </div>
            <div className='partners__card__logos'>
                <img src={images.partners1} alt=''/>
                <img src={images.partners2} alt=''/>
                <img src={images.partners3} alt=''/>
                <img src={images.partners4} alt=''/>
            </div>            
        </div>
          
    </div>
  )
}

export default Partners