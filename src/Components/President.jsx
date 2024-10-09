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
      <h1 className="font-bold text-3xl text-center mb-1  heading">
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
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" className="mx-5">
                    <div aria-label="Github" role="img">
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
                        className="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="mx-5">
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
                  </a>
                  
                </div>
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
                The convenor's ability to foster open communication and collaboration has created an inclusive environment where every member feels valued and heard.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a href="javascript:void(0)" className="mx-5">
                    <div aria-label="Github" role="img">
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
                        className="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="mx-5">
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
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

        </div> 
      </div>
    </div>
 

  )
}

export default President
