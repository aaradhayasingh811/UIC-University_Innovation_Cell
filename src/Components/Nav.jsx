import React, { useState } from 'react'
import './Nav.css'
import iic from '../Images/IIC logo.png'
import uic from '../Images/uic black.png'
import Down from './Down'
const Nav = () => {
  const [isClick,setClick] = useState(false);
  return (
    <>
      <div className="mt-0 bg-[#005249]">
  <header className="site-header">
    <div className="header__content--flow">
      <section className="header-content--left">
        <a href="#" className="brand-logo">
          {/* <svg
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            xmlns={iic}
          >
            <path d={iic} />
          </svg> */}
          <img src={iic} className='h-20 w-20' alt="" />
          <img src={uic} className='h-20 w-20' alt="" />
          {/* <span className="logo-text">UIC</span> */}
        </a>
        <button className="nav-toggle flex " onClick={() => setClick(!isClick)}>
          <span className="toggle--icon" />
        </button>
      </section>
      <section className="header-content--right">
        <nav className="header-nav" role="navigation">
          <ul className="nav__list" aria-expanded="false">
            <li className="list-item">
              <a className="nav__link visited:text-[#005249]" href="/">
                Home
              </a>
            </li>
            <li className="list-item">
              <a className="nav__link visited:text-[#005249]" href="#about">
                About
              </a>
            </li>
            <li className="list-item">
              <a className="nav__link visited:text-[#005249]" href="/team">
                Team
              </a>
            </li>
            <li className="list-item">
              <a className="nav__link visited:text-[#005249]" href="#event">
                Events
              </a>
            </li>
            <li className="list-item">
              <a className="nav__link visited:text-[#005249]" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </header>
</div>
{/* down */}
  {isClick && <Down/>}


    </>
  )
}

export default Nav
