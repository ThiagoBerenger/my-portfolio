import React, { useRef } from 'react'
import './ContactPage.modules.css'
import emailjs from "@emailjs/browser";


const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "replace with service id",
          "replace with template id",
          form.current,
          "replace with user id"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      
        <div className="contact-container">
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Nome</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Mensagem</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
            </div>
        </div>
      
    );
  };

export default ContactPage