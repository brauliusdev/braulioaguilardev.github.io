import React from 'react'
import unidid from 'uniqid'
import { roles } from '../../data'
import Box from '../Box/Box'
import './Role.css'

const Role = ()=> {
  if (!roles.length) return null

  return (
    <section id='roles' className='section roles'>
      <h2 className='section__title'>Roles</h2>

      <div className='roles__grid'>
      {roles.map((item) => (
        <Box key={unidid} item={item}/>
      ))}
      </div>
    </section>
  )
}

export default Role
