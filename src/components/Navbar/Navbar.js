import { useContext,  useState } from 'react'
import {roles, contact } from '../../data'
import {ThemeContext} from '../../contexts/theme'
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import './Navbar.css'

const Navbar = ()=> {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
    <ul
      style={{ display: showNavList ? 'flex' : null }}
      className='nav__list'
    >
      {roles.length ? (
        <li className='nav__list-item'>
          <a
            href='#roles'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Roles
          </a>
        </li>
      ) : null}

      {contact.email ? (
        <li className='nav__list-item'>
          <a
            href='#contact'
            onClick={toggleNavList}
            className='link link--nav'
          >
            Contact
          </a>
        </li>
      ) : null}
    </ul>

    <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <IoSunny/> : <IoMoon/>}
      </button>

    <button
      type='button'
      onClick={toggleNavList}
      className='btn btn--icon nav__hamburger'
      aria-label='toggle navigation'
    >
      {showNavList ? <IoClose/> : <IoMenu/>}
    </button>
  </nav>
  )
}

export default Navbar;
