import React from 'react'
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import HomeSlider from '../Components/HomePage/HomeSlider';
import HomeNav from '../Components/HomePage/HomeNav';
import img1 from '../assets/SliderImages/img(1).jpg'
import img2 from '../assets/SliderImages/img(2).jpg'
import img3 from '../assets/SliderImages/img(3).jpg'
import img4 from '../assets/img(5).jpg'
import img5 from '../assets/img(4).jpg'
import img6 from '../assets/pexels-william-fortunato-6140676.jpg'
import check from '../assets/check-mark.png'
import icon1 from '../assets/Icons/facebook-app-symbol.png'
import icon2 from '../assets/Icons/instagram.png'
import icon3 from '../assets/Icons/linkedin (1).png'
import icon4 from '../assets/Icons/pinterest (1).png'
import icon5 from '../assets/Icons/tik-tok.png'
import icon6 from '../assets/Icons/twitter (1).png'

export default function Home() {
  const images = [img1, img2, img3];
  return ( 
    <div>
      <div className='mt-32 mx-[8%]'>
        <div>
          <div className='lg:flex lg:justify-between md:flex md:justify-between sm:flex sm:justify-between justify-center
          lg:pb-28 md:pb-28 sm:pb-16 pb-12
          border-b border-gray-dark gap-4'>   {/** slider  */}
            <div className='justify-center
            lg:hidden md:hidden sm:hidden block'>
              <img src={img5} alt="img1" className="h-80 w-w-90 shadow-lg rounded-md flex justify-center" />
            </div>
            <div className='lg:mt-32 mt-12 flex justify-center'>
              <div>
                <div className='font-title lg:text-4xl md:text-3xl sm:text-2xl text-4xl text-text-color'>
                  New Rules, New Work
                </div>
                <div className='text-gray lg:text-xl md:text-xl sm:text-lg text-xl pt-2'>
                  Unlock Excellence Instantly.
                </div>
                <div className='text-gray lg:text-xl md:text-xl sm:text-lg text-xl pt-2'>
                  The Best People, Right at Your Fingertips!
                </div>
                <div className='mt-14 flex items-center justify-center'>
                  <Link
                  className='flex items-center
                  text-md text-white 
                bg-text-color 
                  rounded-xl 
                  lg:py-2 lg:px-4 md:py-2 md:px-3 sm:py-1 sm:px-2 py-2 px-3
                  hover:bg-button-hover'
                  to ="/Signup">Get started</Link>
                </div>
              </div>
            </div>
            <div className='justify-center
            lg:block md:block sm:block hidden'>
              <img src={img5} alt="img1" className="lg:h-90 lg:w-91 md:h-80 md:w-90 sm:h-72 sm:w-80 shadow-lg rounded-md flex" />
            </div>
          </div> 
        </div>     {/** slider */}
        <Element name="whyUs">
          <div className='flex justify-center lg:mt-24 md:mt-24'>
            <div className='hidden sm:hidden md:block lg:block'>
              <HomeSlider images={images} />
            </div>
          </div>
        </Element>
        <div className='lg:mt-24 md:mt-24 mt-6'>
          <ul className='flex justify-between items-center gap-8 pt-3'>
            <li>
              <p className='text-text-color font-title1 lg:text-xl md:text-lg sm:text-md text-md'>Payment Security</p>
              <p className='text-gray font-font lg:text-md md:text-md sm:text-sm text-xs'>Clients benefit from the payment protection mechanisms, ensuring that they pay for satisfactory work and reducing the risk of fraud.</p>
            </li>
            <li>
              <p className='text-text-color font-title1 lg:text-xl md:text-lg sm:text-md text-md'>Communication Hub</p>
              <p className='text-gray font-font lg:text-md md:text-md sm:text-sm text-xs'>Centralized channel for project discussions.It typically supports file-sharing capabilities, enabling the exchange of project-related documents, designs, and other relevant files directly within the platform.</p>
            </li>
            <li>
              <p className='text-text-color font-title1 lg:text-xl md:text-lg sm:text-md text-md'>Notification System</p>
              <p className='text-gray font-font lg:text-md md:text-md sm:text-sm text-xs'> Includes a notification system to alert both parties about new messages, project updates, or upcoming deadlines, ensuring timely responses and actions</p>
            </li>
          </ul>
        </div>
        <div className='justify-between lg:flex md:flex 
        mt-24 gap-16
        lg:pb-28 md:pb-24 pb-12
        border-b border-gray-dark'>
          <div>
            <img src={img4} alt="img1" className="lg:h-90 lg:w-91 md:h-80 md:w-90 
            shadow-md rounded-md" />
          </div>
          <div className='flex justify-center 
          lg:mt-6 md:mt-0 sm:mt-0
          text-gray 
          lg:text-xl md:text-md
          lg:pt-2 md:pt-1 pt-8'>
            <ul>
              <li className='flex p-1 gap-1'>
              <img src={check} alt="check" className="h-6 w-6" />
                Global Reach: Access clients from around the world.
              </li>
              <li className='flex p-1 gap-1'>
              <img src={check} alt="check" className="h-6 w-6" />
                Diverse Jobs: Find projects matching your skills and interests.
              </li>
              <li className='flex p-1 gap-1'>
              <img src={check} alt="check" className="h-6 w-6" />
                Portfolio Building: Showcase your work and build credibility.
              </li>
              <li className='flex p-1 gap-1'>
              <img src={check} alt="check" className="h-6 w-6" />
                Payment Security: Platforms ensure you get paid for your work.
              </li>
              <li className='flex p-1 gap-1'>
              <img src={check} alt="check" className="h-6 w-6" />
                Communication Hub: Centralized channel for project discussions.
              </li>
              <li>
              <div className='mt-12 flex items-center justify-center'>
                <Link
                className='flex items-center
                text-md text-white
              bg-text-color 
                rounded-xl 
                py-2 px-4 
                hover:bg-button-hover'
                to ="/Signup">Get started</Link>
              </div>
              </li>
            </ul>
          </div>
        </div>  {/*part 2*/}
        <div className='mt-24 gap-16'>
          <div className='flex justify-center'>
            <img src={img6} alt="img1" className="lg:h-90 lg:w-92 shadow-lg rounded-md"/>
          </div>
          <div className='flex
          mt-12 lg:ml-[12%] md:ml-[12%] 
          text-gray 
          lg:text-2xl md:text-lg
          pt-2'>
            <ul>
              <li className='flex p-1 gap-2'>
              <img src={check} alt="check" className="h-8 w-8" />
                Diverse Talent: Access a global pool of skilled freelancers.
              </li>
              <li className='flex p-1 gap-2'>
              <img src={check} alt="check" className="h-8 w-8" />
                Scalability: Easily scale workforce based on project needs.
              </li>
              <li className='flex p-1 gap-2'>
              <img src={check} alt="check" className="h-8 w-8" />
                Quality Assurance: Assess freelancer quality through reviews.
              </li>
              <li className='flex p-1 gap-2'>
              <img src={check} alt="check" className="h-8 w-8" />
                Payment Security: Platforms ensure you get paid for your work.
              </li>
              <li className='flex p-1 gap-2'>
              <img src={check} alt="check" className="h-8 w-8" />
                Communication Hub: Centralized channel for project discussions.
              </li>
              <li>
              <div className='mt-12 flex items-center justify-center'>
                <Link
                className='flex items-center
                text-md text-white
              bg-text-color 
                rounded-xl 
                py-2 px-4 
                hover:bg-button-hover'
                to ="/Signup">
                  Get started
                </Link>
              </div>
              </li>
            </ul>
          </div>
        </div>  
      </div> {/*part 3*/}
      <div className='mt-24
      h-44 
    bg-text-color'>
      <div className='flex justify-between items-center
      mx-[10%] pt-16'>
        <div className='flex'>
          <a href="/">
            <p className='font-font1 lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white'>WorkQuake</p>
          </a>
        </div>
        <div className='flex lg:gap-3 md:gap-3 gap-1'>
        <a href="#">
          <img src={icon1} alt="" className="lg:w-6 lg:h-6 md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
        </a>
        <a href="#">
          <img src={icon2} alt="" className="lg:w-6 lg:h-6 md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
        </a>
        <a href="#">
          <img src={icon3} alt="" className="lg:w-6 lg:h-6 md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
        </a>
        <a href="#">
          <img src={icon4} alt="" className="lg:w-6 lg:h-6 md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
        </a>
        <a href="#">
          <img src={icon5} alt="" className="lg:w-6 lg:h-6 md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
        </a>
        <a href="#">
          <img src={icon6} alt="Menue" className="lg:w-6 lg:h-6 md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
        </a>
        </div>
      </div>

      </div>
      <HomeNav />
    </div> 
  )
}
