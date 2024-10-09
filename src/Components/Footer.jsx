import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <>
    <div className="divide-y divide-slate-400/[.24]">
      <div className="flex bg-[#005249] text-[#dfe0df] flex justify-around text-center" >
        <div className="w-1/3  mx-auto self-center py-3 foot_content">
        The University Innovation Cell, under the umbrella of the  Institution's Innovation Council  nurtures a dynamic community focused on innovation, creativity, and problem-solving.        </div>
        <div className="flex flex-col w-1/3  mx-auto  self-center py-3">
            <a href="/team" className=' hover:text-[#daa426] my-1'>Team</a>
            <a href="#contact" className=' hover:text-[#daa426] my-1'>Contact Us</a>
            <a href="#event" className=' hover:text-[#daa426] my-1'>Events</a>
            <a href="" className=' hover:text-[#daa426] my-1'>Innowizion</a>
        </div>
      <div className="social flex flex-col w-1/3  mx-auto  self-center py-3">
              <a href="https://www.facebook.com//uicmmmut">
                <FacebookIcon className='hover:text-[#daa426] my-1'/>
              </a>
              <a href="https://x.com/uicmmmut">
                <XIcon />
             </a>
              <a href="https://www.instagram.com/uicmmmut/">
                <InstagramIcon className='hover:text-[#daa426] my-1'/>
              </a>
              <a href="https://www.linkedin.com/company/uicmmmut/">
                <LinkedInIcon className='hover:text-[#daa426] my-1'/>
              </a>
            </div>
            </div>
    <div className="bg-[#005249] text-[#dfe0df]  text-center text-sm p-4 ">
        <p>    © Copyright 2024 UIC MMMMUT. All rights reserved.</p>
    </div>
    </div>
    </>
  )
}

export default Footer
