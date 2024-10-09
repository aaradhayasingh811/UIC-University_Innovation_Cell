import React from 'react';
import './About.css';

const About = () => {
  return (
   <>
<div className="about-section bg-[#005249]" id="about" >
  <div className="inner-container shadow-lg boder-8 boder-yellow-800">
    <h1 className='heading font-bold'>About Us</h1>
    <p className="text text-[#8f7546] font-bold">
    The University Innovation Cell, under the umbrella of the  Institution's Innovation Council  nurtures a dynamic community focused on innovation, creativity, and problem-solving. With the motto "Inspiring Individuals," the Cell promotes events that encourage new ways of thinking and practical learning. Its flagship event, INNOWIZION, unites students, professionals, and thought leaders to explore innovative ideas and cutting-edge technology. The Cell's mission is to empower individuals to push boundaries and make significant contributions to the ever-changing landscape of technology and innovation.
    </p>
    <div className="skills">
      <span>Innovation cell</span>
      <span>Center of Excellence</span>
      <span>Industry Institute Interface</span>
    </div>
  </div>
</div>


   </>
  )
}

export default About
