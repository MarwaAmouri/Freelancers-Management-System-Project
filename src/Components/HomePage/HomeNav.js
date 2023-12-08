import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import LeftSidebar from '../LeftSidebar';
import menue from '../../assets/menu.png'

export default function HomeNav() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const sideBarContent = (
        <div className='py-8 pl-4 pr-2 text-text-color'>
            <div>
                <a href="/">
                    <p className='font-font1 text-3xl mb-4'>WorkQuake</p>
                </a>
            </div>
            <div className='text-md p-4 mx-4 hover:bg-button-color hover:text-white rounded rounded-b-none border-b border-gray-dark'>
                <Link to ="/Login">Login</Link>
            </div>
            <div className='text-md p-4 mx-4 hover:bg-button-color hover:text-white rounded rounded-b-none border-b border-gray-dark'>
                <Link to ="/Signup">SignUp</Link>
            </div>
        </div>
    );

  return (
    <div className="fixed top-0 left-0 w-full  text-text-color shadow-md bg-white">
        <nav className="flex justify-between items-center 
        border border-gray-dark">
            <div className='lg:block md:block sm:hidden hidden'>
                <ul className="flex items-center gap-[3vw] 
                ml-[30%] lg:ml-[50%] md:ml-[30%] py-5
                text-base font-medium">
                    <li>
                        <a href="/">
                           <p className='font-font1 text-4xl'>WorkQuake</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='hidden sm:hidden md:block lg:block'>
                <ul className="flex float-right gap-[3vw] grid-cols-2
                lg:text-lg font-medium md:text-md
                lg:mr-[40%] md:mr-[40%] sm:mr-[40%] mr-[40%]">
                    <li className='hover:text-white hover:bg-text-color rounded-sm p-2 px-4'>
                        <Link to ="/Login">Login</Link>
                    </li>
                    <li className='text-sm text-white bg-text-color rounded-sm py-2 pt-3 px-4 hover:bg-button-hover'>
                        <Link to ="/Signup">SignUp</Link>
                    </li>
                </ul>
            </div>
            <div className='md:hidden lg:hidden
            flex justify-center items-center'>
                <div className="flex p-8 z-60">
                    <LeftSidebar content={sideBarContent} isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
                    <div>
                        <button onClick={handleSidebarToggle} >
                            <img src={menue} alt="Menue" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className='flex'>
                    <a href="/">
                        <p className='font-font1 text-4xl'>WorkQuake</p>
                    </a>
                </div>
            </div>
            
        </nav>
    </div>
  )
}
