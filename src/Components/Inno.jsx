import React from 'react'
import './Inno.css'
import inno from '../Images/inno.png'
const Inno = () => {
  return (
    <div>
      <section className="about section" id="about">
  <div className="about__container mx-auto container grid">
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
      <p className="about__description">
      The University Innovation Cell organizes its annual innovation fest INNOWIZION which primarily comprises of events based on innovation, inguenity and creativity. INNOWIZION first held in 2016, has grown with time to became the largest and one of the most awaited fests due to its uniqueness and exotic events, as well as due to the enthusiasm and creativity that is witnessed every year. 
      </p>
      <ul className="about__list">
        <li className="about__item text-lg">
        Innowizion aims to ignite passion for innovation and provide valuable insights into transforming ideas into impactful solutions. 
        </li>
      </ul>
      <div className="about__buttons">
        {/* <a href="#contact" className="button w-3/4">
          <i className="ri-send-plane-line" /> Explore more..
        </a> */}
        <button className='button w-1/2'>Explore more..</button>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Inno
