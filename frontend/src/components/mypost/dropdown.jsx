import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // Notify the parent component about the selected option
    onSelect && onSelect(option);
    // Close the dropdown after selecting an option
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedOption ? selectedOption.label : "Select Category "}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
