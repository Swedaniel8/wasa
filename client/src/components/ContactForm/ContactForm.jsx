import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import { SubmitBtn } from '../index'

import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        number:"",
        occupation:"",
        company:"",    
        other:"",
        token:""
    })
    const handleChange = (e) => {
        //console.log("e.target: ",formData.number)
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
    }))}
    
  return (
    <div className='component__contactForm'>
        <h1>Contact Ous!</h1>        
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
        <select id="currentWork" onChange={handleChange} value={formData.occupation} name="occupation" required>
            <option value="default">Select an option</option>
            <option value="v45">V45 Amplifier</option>
            <option value="w110">W110 Amplifier</option>
            <option value="g10">G10 Multiplier</option>
            <option value="other">Other</option>
        </select>
        
        <textarea id="fother" placeholder="Other information..." onChange={handleChange} value={formData.other} name="other" maxLength="800"></textarea>
        
        <SubmitBtn />

        </form>
  </div>
  )
}

export default ContactForm