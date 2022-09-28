import React,{useState} from 'react'

import { VscPassFilled } from 'react-icons/vsc'
import { TbCrown } from 'react-icons/tb'
import { ContactForm } from  '../../components/index'
import './Contact.css'
const Contact = () => {
  window.scrollTo(0, 0);

  

  return (
    <div className='container__contact'>
      <div className='contact-bg'/>
      <div className='contact__info'>      
        <h1 className='contact__title'><TbCrown id="react-icon-title" />Wasa Millimeter Wave</h1>
        <h2>Please fill in your details, then submit your questions or quote and we will take care of it. We look forward to welcoming you to Wasa Millimeter Wave </h2>
        <h3><VscPassFilled id="react-icon" />Qoute</h3>
        <p><span>- </span>Ask for a qoute and get an answear within 24 hours!</p>
        <h3><VscPassFilled id="react-icon" />Job Application</h3>
        <p><span>- </span>If you are looking for a new career opportuinity, dont hesitate to apply at Wasa Millimeter Wave.</p>
        <h3><VscPassFilled id="react-icon" />Any Other Questions?</h3>
        <p><span>- </span>Do you have anyother questions about the company or our products, please write to us. We are happy to answear all your questions.</p>
      </div>
      <div className='contact__form'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact