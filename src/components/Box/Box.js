import React from 'react'
import uniqid from 'uniqid'
import './Box.css'

const Box = ({ item }) => (
  <div className='role'>
    <h3>{item.name}</h3>

    <p className='role__description'>{item.description}</p>
    {item.stack && (
      <ul className='role__stack'>
        {item.stack.map((item) => (
          <li key={uniqid()} className='role__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default Box