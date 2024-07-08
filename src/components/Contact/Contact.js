import React from 'react'
import { contact } from '../../data'
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='links'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            <FaEnvelope />
          </span>
        </a>

        <a href={`${contact.phone}`}>
          <span type='button' className='btn btn--outline'>
            <FaWhatsapp />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact