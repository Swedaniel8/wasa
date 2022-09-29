import React, { useCallback, useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


import { contactPosts } from '../../slices/apiReducer'
import { SubmitBtn } from '../index'
import './ContactForm.css'

const ContactForm = () => {
    const dispatch = useDispatch()
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [ tokenState, setTokenState ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        number:"",        
        company:"",    
        other:"",
        token:""
    })
    /*-----------------------RECAPTCH VERIFY-------------------*/
    const handleReCaptchaVerify = useCallback(async () => {
        if(!executeRecaptcha){
            console.log('Execute recaptcha not yet available');
            return;
        }
        const token = await executeRecaptcha('login_page');
        setTokenState(token)
    },[executeRecaptcha])
    useEffect(() => {
        handleReCaptchaVerify();
        }, [handleReCaptchaVerify]);
    /*-----------------------RECAPTCH VERIFY-------------------*/
    const handleChange = (e) => {
        //console.log("e.target: ",formData.number)
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
    }))}
    const submit = (e) => {
        e.preventDefault()
        
        var sendData = formData
        sendData["token"] = tokenState
        console.log("sendData: ",sendData)
        setErrorMessage("")
        dispatch(contactPosts(sendData))
            .then(unwrapResult)
            .then(res => {
                console.log("response careerPosts: ",res)
                if(res.success && !res.err){
                    setErrorMessage(res.message)
                }else{
                    setErrorMessage(res.message)
                }
                setFormData({
                    firstname:"daniel",
                    lastname:"heineras",
                    email:"daiel@live.se",
                    number:"123123",        
                    type:"",
                    company:"wasa",    
                    other:"nej det är lungt",
                    token:""
                })
            })
    }
  return (
    <div className='component__contactForm'>
        <h1>Contact Us!</h1>        
        <form>
        <div className='contact__section-input-name'>
            <div>                  
                <input type="text" id="fname1" placeholder="First name*" onChange={handleChange} value={formData.firstname} name="firstname" required></input>
            </div>
            <div>
                <input type="text" id="fname2" placeholder="Last name*" onChange={handleChange} value={formData.lastname} name="lastname" required></input>
            </div>
        </div>          

        <input type="email" id="fmail" placeholder="Email Address*" onChange={handleChange} value={formData.email} name="email" required></input>

        <input type="text" id="fcom" placeholder="Company name" onChange={handleChange} value={formData.company} name="company"></input>                    
        <PhoneInput
            flags={flags}
            defaultCountry="SE"
            initialValueFormat="national"
            id="fnumber" 
            placeholder="Number" onChange={(e)=>setFormData(prevState => ({...prevState,["number"]:e}))} value={formData.number} name="number" required></PhoneInput>

        <label htmlFor="currentWork">Product quote or other questions*</label>
        <select id="currentWork" onChange={handleChange} value={formData.type} name="type" required>
            <option value="default">Select an option</option>
            <option value="v45">V45 Amplifier</option>
            <option value="w110">W110 Amplifier</option>
            <option value="g10">G10 Multiplier</option>
            <option value="other">Other</option>
        </select>
        
        <textarea id="fother" placeholder="Other information..." onChange={handleChange} value={formData.other} name="other" maxLength="800"></textarea>

        <div onClick={submit}>
            <SubmitBtn />
        </div>
        </form>
  </div>
  )
}

export default ContactForm