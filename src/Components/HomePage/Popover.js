import React from 'react';

const Popover = ({ content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='mr-12'>
        <div className="absolute z-10 p-2 bg-bg-color border border-gray-dark rounded-lg shadow-lg">
            {content}
        </div>
    </div>
  );
};

export default Popover;
