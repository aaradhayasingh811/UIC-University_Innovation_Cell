import React from 'react'
// import './President.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import prasant_saini from "../Images/prasant_saini.jpeg"
import jeoot_singh from "../Images/jeoot_singh.jpeg"
const President = () => {
  return (
//     <div className='grid justify-items-center '>
//       <>
//   {/* Our team Section */}
//   <section id="team" className="team content-section w-screen">
//     <div className="">
//     <h1 className='text-3xl text-center'>Meet our Team</h1>

//       <div className="row text-center ">
       
//         {/* /.col-md-12 */}
//         <div className="total ">

//           <div className="row flex sm:flex-row flex-col ">

//             <div className="px-24 shadow-lg sm:mx-24">
//               <div className="team-member">
                
//                 <figure>
//                   <img
//                     src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/lauren-cox.jpg"
//                     alt=""
//                     className="img-responsive rounded-lg"
//                   />
//                   <figcaption>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       Recusandae asperiores mollitia.
//                     </p>
//                     <ul>
//                       <li>
//                         <a href="">
//                             <FacebookIcon/>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="">
//                             <XIcon/>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="">
//                             <LinkedInIcon/>
//                         </a>
//                       </li>
//                     </ul>
//                   </figcaption>
//                 </figure>
//                 <h4>Professor Jeoot Singh</h4>
//                 <p>President</p>
//               </div>
//               {/* /.team-member*/}
//             </div>
//             {/* /.col-md-4 */}
//             <div className=" px-24 shadow-lg sm:mx-24">
//               <div className="team-member">
//                 <figure>
//                   <img
//                     src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg"
//                     alt=""
//                     className="img-responsive rounded-lg"
//                   />
//                   <figcaption>
//                     <p>
//                       Neque minima ea, a praesentium saepe nihil maxime quod
//                       esse numquam explicabo eligendi.
//                     </p>
//                     <ul>
//                       <li>
//                         <a href="">
//                             <FacebookIcon/>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="">
//                             <XIcon/>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="">
//                             <LinkedInIcon/>
//                         </a>
//                       </li>
//                     </ul>
//                   </figcaption>
//                 </figure>
//                 <h4>Dr. Prasant Saini</h4>
//                 <p>Convenor</p>
//               </div>
//             </div>
           
              
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </>

//     </div>
  
    <div className="w-full bg-gray-100 px-10 ">
      <div className="mx-auto flex-col">
      <div className="my-8">
      <h1 className="font-bold text-3xl text-center mt-8 pb-10 heading">
      Meet the team</h1>
      </div>
        <div
          role="list"
          aria-label="Behind the scenes People "
          className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around flex-"
        >
          <div
            role="listitem"
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src={jeoot_singh}
                    alt="Display Picture of Andres Berlin"
                    role="img"
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                Dr. Jeeoot Singh                                                     
                </h1>
                <p className="text-gray-800 text-sm text-center">
                President                                                                  
               </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal text">
                The president's dedication and vision have significantly shaped our society, inspiring us all to work together towards a brighter future.                </p>
                {/* <div className="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" className="mx-5">
                    <div aria-label="Github" role="img">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
>
  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg>

   </div>
                  </a> */}
                  {/* <a href="javascript:void(0)" className="mx-5">
                    <div aria-label="Twitter" role="img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a> */}
                  
                {/* </div> */}
              </div>
            </div>
          </div>
          <div
            role="listitem"
            className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src={prasant_saini}
                    alt="Display Picture of Silene Tokyo"
                    role="img"
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                Dr. Prashant Saini     
                </h1>
                <p className="text-gray-800 text-sm text-center">
                Convenor
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal text">
                The convenor's ability to foster open collaboration has created an inclusive environment where every member feels valued and heard.
                </p>
                {/* <div className="w-full flex justify-center pt-5 pb-5"> */}
                  {/* <a href="javascript:void(0)" className="mx-5">
                    <div aria-label="Github" role="img">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
>
  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg>

                    </div>
                  </a> */}
                  {/* <a href="javascript:void(0)" className="mx-5">
                    <div aria-label="Twitter" role="img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </a> */}
                  
                {/* </div> */}
              </div>
            </div>
          </div>

        </div> 
      </div>
    </div>
 

  )
}

export default President
