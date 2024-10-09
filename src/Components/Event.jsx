import React from 'react'
import './Eve.css'
import induction from '../Images/induction.jpg'
import inno from '../Images/Innowizion coming soon .jpg'
import malviyan from "../Images/malviyan.jpg"
import bytegram from '../Images/bytegram main poster.jpg'
const Event = () => {
  return (
    <>

      <div className='bg-[#f3f4f6]' id="event">
        <h1 className='text-center text-3xl mb-3 mt-12 heading'>Events</h1>
        <div className="mx-auto grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 justify-items-center my-8  sm:px-18 mx-auto" >
  
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Bytegram</h2>
      <p>
      Bytegram, organized by the University Innovation Cell, comprises three engaging rounds. The first round, "Tick the Bit," is an online quiz hosted on Unstop, featuring 40 questions to be answered in 20 minutes. The second round, "Flash the Brain," is an offline quiz focusing on rapid one-liner responses. The final buzzer round " Guess the Logic" tests participants' ability to guess logic-based answers swiftly, making for an exciting and intellectually stimulating experience.
      </p>
    </div>
    <div className="front mx-auto">
      <div className="image">
        <img classname="img mx-auto" src={bytegram} />
        <h2>BYTEGRAM</h2>
      </div>
    </div>
  </div>
  {/* 2 */}
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Malviyan Prodigy</h2>
      <p>
      Malaviyan Prodigy is the event which brings forward the best of the Malaviyan talent who are currently placed in top positions across their domains and are the alumnus of this college and give a chance to the freshmen to interact and learn from their experiences
      These sessions aim to motivate and guide students as they begin their college journey, offering them the unique opportunity to engage directly with alumni and gain valuable direction and knowledge.
      </p>
    </div>
    <div className="front  mx-auto">
      <div className="image">
        <img classname="img" src={malviyan} />
        <h2>MALVIYAN PRODIGY</h2>
      </div>
    </div>
  </div>
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Innowizion</h2>
      <p>
      Innowizion is a dynamic fest organized by the University Innovation Cell, featuring a diverse array of engaging and entertaining events. It fosters creativity and collaboration, offering participants opportunities to learn, innovate, and showcase their talents in solving real world problems  while promoting knowledge exchange and networking among students.
      INNOWIZION first held in 2016, has grown with time to became the largest and one of the most awaited fests due to its uniqueness and exotic events, as well as due to the enthusiasm and creativity that is witnessed every year. 
      </p>
    </div>
    <div className="front  mx-auto">
      <div className="image">
        <img classname="img" src={inno} />
        <h2>INNOWIZION</h2>
      </div>
    </div>
  </div>
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Induction</h2>
      <p>
      The objective of this process is to identify passionate, creative, and dedicated individuals capable of contributing to the innovation and entrepreneurial ecosystem within the university. The induction process is divided into two rounds, with a detailed focus on form evaluation and personal interviews.
      </p>
    </div>
    <div className="front">
      <div className="image  mx-auto">
        <img classname="img" src={induction} />
        <h2>INDUCTION</h2>
      </div>
    </div>
  </div>
  </div>
</div>


    </>
  )
}

export default Event
