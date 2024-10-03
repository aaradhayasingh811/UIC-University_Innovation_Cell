import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Card.css';
const Card = () => {
  return (
    <div className='full h-70 w-56 shadow-slate-600	 text-center rounded-lg shadow-md ' >
      <div className="card ">
  <div className="card-image mx-auto flex">
    <img
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      alt="card image" className='w-56 h-42 mx-auto self-center rounded-lg border-4 border-white'
    />
  </div>
  <div className="content">
    <h3 className='text-xl text-[#ca8a04] mt-1 font-normal'>Aaradhaya Singh</h3>
    <p className='text-[#78716c] italic mt-1 '> Editorial Head</p>
  </div>
  <div className="icons flex justify-around mt-1 py-2">
    <a href="#">
      <GitHubIcon className='hover:text-[#005249]' />
    </a>
    <a href="#">
      <LinkedInIcon className='hover:text-[#005249]'/>
    </a>
    <a href="#">
        <InstagramIcon className='hover:text-[#005249]'/>
    </a>
  </div>
</div>

    </div>
  )
}

export default Card
