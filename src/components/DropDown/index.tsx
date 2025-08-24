import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

type DropdownProps = {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`dropdown-container ${className}`} ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {label}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, idx) => (
            <li
              key={idx}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
