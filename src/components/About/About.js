import React from 'react'
import {about} from '../../data'
import { FaGithubAlt,FaLinkedinIn } from "react-icons/fa";
import './About.css'

export default function About() {
  const {name, role, description, social} = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hello, I'm <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
              <FaGithubAlt/>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <FaLinkedinIn />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
  
}

