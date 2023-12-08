import React, { useState } from 'react';
import close from '../assets/close (1).png'
import hoverclose from '../assets/close (2).png'

const LeftSidebar = ({ content, isOpen, onClose }) => {
    const [isHovered, setIsHovered] = useState(false);

    const sidebarClasses = isOpen
        ? 'transform translate-x-0'
        : 'transform -translate-x-full';

    return (
        <div className={`z-50 
        border border-gray-dark shadow-sm 
        bg-gray-light 
        h-screen w-60 
        text-text-color 
        ${sidebarClasses} fixed top-0 left-0 transition-transform ease-in-out duration-300`}>
            <button 
            className="absolute top-3 right-3 text-text-color hover:text-white hover:bg-text-color rounded-sm p-1" 
            onClick={onClose}>
                <img
                src={isHovered ? hoverclose : close}
                alt="Close"
                className="w-4 h-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                />
            </button>
            <p className="text-lg text-center mt-20">{content}</p>
        </div>
    );
};

export default LeftSidebar;
