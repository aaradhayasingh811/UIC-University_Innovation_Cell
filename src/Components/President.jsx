import React from 'react'
import './President.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const President = () => {
  return (
    <div className='grid justify-items-center'>
      <>
  {/* Our team Section */}
  <section id="team" className="team content-section w-full">
    <div className="">
    <h1 className='text-3xl text-center'>Meet our Team</h1>

      <div className="row text-center ">
       
        {/* /.col-md-12 */}
        <div className="total ">

          <div className="row flex sm:flex-row flex-col ">

            <div className="px-24 shadow-lg sm:mx-24">
              <div className="team-member">
                
                <figure>
                  <img
                    src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/lauren-cox.jpg"
                    alt=""
                    className="img-responsive rounded-lg"
                  />
                  <figcaption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae asperiores mollitia.
                    </p>
                    <ul>
                      <li>
                        <a href="">
                            <FacebookIcon/>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <XIcon/>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <LinkedInIcon/>
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <h4>Professor Jeoot Singh</h4>
                <p>President</p>
              </div>
              {/* /.team-member*/}
            </div>
            {/* /.col-md-4 */}
            <div className=" px-24 shadow-lg sm:mx-24">
              <div className="team-member">
                <figure>
                  <img
                    src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg"
                    alt=""
                    className="img-responsive rounded-lg"
                  />
                  <figcaption>
                    <p>
                      Neque minima ea, a praesentium saepe nihil maxime quod
                      esse numquam explicabo eligendi.
                    </p>
                    <ul>
                      <li>
                        <a href="">
                            <FacebookIcon/>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <XIcon/>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <LinkedInIcon/>
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <h4>Dr. Prasant Saini</h4>
                <p>Convenor</p>
              </div>
            </div>
           
              
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default President
