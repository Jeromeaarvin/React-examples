import React, { useState } from 'react';

const Dbutton = ({options,buttonContent}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  
    setIsOpen(false);
  };
  return (
    <div className="dropdown-menu">
       <button className={'dropdown-toggle'} onClick={toggleDropdown}>
        {buttonContent}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>  
      )}
      {selectedOption && <div>Selected: {selectedOption}</div>}
      
    </div>
  );
};
export default Dbutton;