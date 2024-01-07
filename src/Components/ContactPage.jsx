import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


export default function ContactPage(){
    const form = useRef()
      
    const sendEmail = (e) => {
        e.preventDefault()
        console.log(form)
        emailjs.sendForm('service_cpv6c4i', 'template_hef92nx', form.current, 'bdqguHW8EY7fa9dlR')
            .then((result) => {
                alert("Message sent to Nahiyan")
            }, (error) => {
                console.log(error.text)
            })
    }
    return (
        <div id='contact' className='contactPage'>
            <form ref={form} onSubmit={sendEmail} className='contactForm'>
                <label>NAME</label>
                <input type="text" name="user_name" />
                <input type="email" name="user_email" value="nahiyanahmed11@gmail.com" style={{display: 'none'}}/>
                <label>MESSAGE</label>
                <textarea name="message" className='contactTextArea'/>
                <input type="submit" value="SEND" className='contactButton'/>
            </form>
        </div>
    )
}