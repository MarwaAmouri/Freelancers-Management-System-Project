import React, { useState } from 'react'
import Logout from './Logout';
import { Link, NavLink } from 'react-router-dom';
import Popover from './HomePage/Popover';
import down from '../assets/down.png'
import user from '../assets/user.png'
import LeftSidebar from './LeftSidebar';
import menu from '../assets/menu.png'

export default function ContractorNav() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const openPopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const popoverContent = (
        <div className='py-4 pl-4 pr-2 text-text-color'>
            <div className='text-md p-2 hover:bg-button-color hover:text-white rounded'>
                <Link className=' active:bg-text-color' to ="/contractor/profile">View Profile</Link>
            </div>
            <div className='text-md p-2 hover:bg-button-color hover:text-white rounded'>
                <Logout />
            </div>
        </div>
    );

    const sideBarContent = (
        <div className='py-8 pl-4 pr-2 text-text-color'>
            <div>
                <a href="/">
                    <p className='font-font1 text-3xl mb-4'>WorkQuake</p>
                </a>
            </div>
            <div className='md:hidden 
            text-md p-4 mx-3 
            hover:bg-button-color hover:text-white 
            rounded rounded-b-none border-b border-gray-dark'>
                <Link 
                className='active:bg-text-color focus:bg-button-color' 
                to ="/contractor/profile">
                    View Profile
                </Link>
            </div>
            <div className='text-md p-4 mx-3 
            hover:bg-button-color hover:text-white 
            rounded rounded-b-none border-b border-gray-dark'>
                <Link to ="/contractor/dashboard">Dashboard</Link>
            </div>
            <div className='text-md p-4 mx-3 
            hover:bg-button-color hover:text-white 
            rounded rounded-b-none border-b border-gray-dark'>
                <Link to ="/contractor/history">Transaction History</Link>
            </div>
            <div className='md:hidden text-md p-4 mx-5 
            hover:bg-button-color hover:text-white 
            rounded rounded-t-none border-t border-gray-dark mt-48'>
                <Logout />
            </div>
        </div>
    );

  return (
    <div className="bg-stone fixed top-0 left-0 w-full shadow-lg">
        <nav>
            <div className='lg:block md:hidden sm:hidden hidden'>
                <ul className="py-5 mx-16
                text-base text-text-color
                flex items-center justify-between">
                    <li className="flex items-baseline ml-6">
                        <a href="/">
                            <p className='font-font1 text-4xl text-text-color'>WorkQuake</p>
                        </a>
                        <div className='ml-12 gap-1'>
                            <Link 
                            className='p-4 py-3 
                            active:bg-text-color focus:bg-button-color active:text-white focus:text-white
                            hover:bg-button-color hover:text-white 
                            rounded' 
                            to ="/contractor/dashboard">
                                Dashboard
                            </Link>
                            <Link 
                            className='p-4 py-3 hover:bg-button-color hover:text-white rounded
                            active:bg-text-color focus:bg-button-color active:text-white focus:text-white' 
                            to ="/contractor/history">
                                Transaction History
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="lg:block md:hidden sm:hidden hidden">
                            <div className='flex justify-center items-center ml-16'>
                                <button
                                    onClick={openPopover}
                                    className="rounded-lg hover:bg-blue-600 flex items-center gap-3"
                                >
                                    <img src={user} alt="User" className="w-10 h-10 flex" /> 
                                    <img src={down} alt="Dropdown" className="w-4 h-4 flex hover:bg-gray-dark" /> 
                                </button>
                            </div>
                            <div className='mr-16 mt-4 flex justify-center'>
                                <Popover content={popoverContent} isOpen={isPopoverOpen}/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='lg:hidden md:block sm:block block'>
                <ul className='flex justify-between items-baseline'>
                    <li className="ml-12">
                        <LeftSidebar content={sideBarContent} isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
                        <div>
                            <button onClick={handleSidebarToggle} >
                                <img src={menu} alt="Menue" className="w-6 h-6" />
                            </button>
                        </div>
                    </li>
                    <li>
                        <a href="/">
                            <p className='font-font1 text-4xl text-text-color p-4'>WorkQuake</p>
                        </a>
                    </li>
                    <li className='mr-12'>
                        <div className='md:block sm:hidden hidden'>
                            <div className='flex items-center p-4'>
                                <button
                                    onClick={openPopover}
                                    className="rounded-lg hover:bg-blue-600 flex items-center gap-3"
                                >
                                    <img src={user} alt="User" className="w-10 h-10 flex" /> 
                                    <img src={down} alt="Dropdown" className="w-4 h-4 flex hover:bg-gray-dark" /> 
                                </button>
                            </div>
                            <div className='mr-12 mt-4 flex justify-center'>
                                <Popover content={popoverContent} isOpen={isPopoverOpen}/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
