import React from 'react'
import './Inno.css'
import inno from '../Images/inno.png'
const Inno = () => {
  return (
    <div>
      <section className="about section w-full" id="about">
  <div className="about__container container grid">
    <h2 className="section__title-1">
      <span className='heading'>Innowizion</span>
    </h2>
    <div className="about__perfil">
      <div className="about__image">
        <img
          src={inno}
          alt="image"
          className="about__img"
        />
        <div className="about__shadow" />
        <div className="geometric-box" />
        <div className="about__box" />
      </div>
    </div>
    <div className="about__info">
      <p className="about__description text-xl">
      Innowizion, hosted by the Institution Innovation Council, is a vibrant event fostering creativity and entrepreneurship. It encourages students to present innovative ideas, collaborate with peers, and connect with industry experts, igniting passion for innovation and paving the way for impactful solutions.
      </p>
      <ul className="about__list">
        <li className="about__item text-lg">
        Innowizion aims to ignite passion for innovation and provide valuable insights into transforming ideas into impactful solutions. 
        </li>
      </ul>
      <div className="about__buttons">
        <a href="#contact" className="button text-center w-min">
          <i className="ri-send-plane-line" /> Explore more..
        </a>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Inno
