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
        <div className="mx-auto grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 justify-items-center my-8 px-16" >
  
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Copywriting</h2>
      <p>
        Introduction to Copywriting’ workshop focuses on the theory and
        processes of professional copywriting as applied to persuasion,
        reasoning, and rhetoric. This workshop is best-suited to learning how to
        write and think about consumer-driven functions.
      </p>
    </div>
    <div className="front mx-auto">
      <div className="image">
        <img classname="img" src={bytegram} />
        <h2>Copywriting</h2>
      </div>
    </div>
  </div>
  {/* 2 */}
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Copywriting</h2>
      <p>
        Introduction to Copywriting’ workshop focuses on the theory and
        processes of professional copywriting as applied to persuasion,
        reasoning, and rhetoric. This workshop is best-suited to learning how to
        write and think about consumer-driven functions.
      </p>
    </div>
    <div className="front">
      <div className="image">
        <img classname="img" src={malviyan} />
        <h2>Copywriting</h2>
      </div>
    </div>
  </div>
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Innowizion</h2>
      <p>
        Introduction to Content Marketing workshop focuses on building content
        frameworks that are designed for and directed at communication
        engagement. This interdisciplinary workshop is best-suited to learning
        visual and written communication strategies.
      </p>
    </div>
    <div className="front">
      <div className="image">
        <img classname="img" src={inno} />
        <h2>Content Marketing</h2>
      </div>
    </div>
  </div>
  <div className="maincontainer rounded">
    <div className="back">
      <h2>Induction</h2>
      <p>
        Introduction to Web-Writing workshop focuses on building creative and
        systemic digital content through online user experiences that benefit
        people and robots. This workshop is best-suited to creating content for
        digital platforms and devices — websites, mobile, game consoles, and
        virtual reality engines.
      </p>
    </div>
    <div className="front">
      <div className="image">
        <img classname="img" src={induction} />
        <h2>Web Writing</h2>
      </div>
    </div>
  </div>
  </div>
</div>


    </>
  )
}

export default Event
