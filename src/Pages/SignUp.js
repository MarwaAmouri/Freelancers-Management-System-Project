import React from 'react'
import { Link } from 'react-router-dom';
import HomeNav from '../Components/HomePage/HomeNav';
import work from '../assets/work.png'
import hire from '../assets/hire.png'
import '../App.css'

export default function SignUp() {
  return (
    <div className='bg-bg-color'>
        <HomeNav />
        <div className='border border-gray-dark rounded-lg
      bg-white shadow-xl
        mt-52 mb-12
        lg:mx-[20%] md:mx-[10%] sm:mx-[5%] mx-[5%]'> 
          <div className='mb-24 mx-4'>
            <div className='flex justify-center p-2 mt-8'>
              <a href="/">
                <p className='font-font1 lg:text-4xl md:text-4xl sm:text-3xl text-4xl text-text-color'>WorkQuake</p>
              </a>
            </div>
            <div className='text-lg text-gray font-font my-4 flex justify-center'>
              Specify your role:
            </div>
            <div className='flex lg:gap-[5%] md:gap-[5%] sm:gap-[5%] justify-center
             text-text-color text-lg font-title1'>
              <div className='flex'>
                <Link 
                 to ="/client/Signup"
                 className='border border-gray-dark shadow-lg
               bg-bg-color rounded-lg 
                hover:outline hover:outline-offset-1 hover:outline-text-color
                 p-6'>
                  <div className='flex justify-center items-center m-4'>
                    <img src={hire} alt="Client" className="w-12 h-12" />
                    <button className='pl-6'>I want to hire</button>
                  </div>
                </Link>
              </div>
              <div className='flex'>
                <Link 
                 to ="/Contractor/Signup"
                 className='border border-gray-dark shadow-lg
               bg-bg-color rounded-lg 
                 p-6
                 hover:outline hover:outline-offset-1 hover:outline-text-color
                 lg:block md:block sm:block hidden'>
                  <div className='flex justify-center items-center m-4'>
                    <img src={work} alt="Client" className="w-12 h-12" />
                    <button className='pl-6'>I want to work</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className='lg:hidden md:hidden sm:hidden 
            flex justify-center 
            mt-4
            text-text-color text-lg font-title1'>
              <Link 
               to ="/Contractor/Signup"
               className='border border-gray-dark shadow-lg
              bg-bg-color rounded-lg 
               hover:outline hover:outline-offset-1 hover:outline-text-color
               p-6'>
                <div className='flex justify-center items-center m-4'>
                  <img src={work} alt="Contractor" className="w-12 h-12" />
                  <button className='pl-6'>I want to work</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}