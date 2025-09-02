import React, { useState, useRef, useEffect, useCallback } from 'react';

import { ReactComponent as ArrowDownWard } from '../../assets/svg/chevron-down-surface-primary.svg';
import { ReactComponent as BrownArrowDownWard } from '../../assets/svg/dropDownArrow.svg';

import './styles.css';

type DropdownOption =
  | string
  | {
      label: string;
      image?: string;
    };

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  onSelect: (option: string) => void;
  className?: string;
  isScrolled: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  className = '',
  isScrolled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (option: string) => {
      onSelect(option);
      setIsOpen(false);
    },
    [onSelect],
  );

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

  const arrowClass = isOpen ? 'arrow open' : 'arrow';

  const renderOption = (option: DropdownOption, index: number) => {
    const label = typeof option === 'string' ? option : option.label;
    const image = typeof option === 'object' ? option.image : undefined;

    return (
      <li
        key={index}
        className={`dropdown-item ${image ? 'with-image' : ''}`}
        onClick={() => handleOptionClick(label)}
      >
        {image && (
          <img src={image} alt={label} className="dropdown-item-image" />
        )}
        {label}
      </li>
    );
  };

  return (
    <div className={`dropdown-container ${className}`} ref={dropdownRef}>
      <div className="dropdown-container-sub">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {label}
          {isScrolled ? (
            <BrownArrowDownWard className={arrowClass} />
          ) : (
            <ArrowDownWard className={arrowClass} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="dropdown-menu-container">
          <ul className="dropdown-menu">{options.map(renderOption)}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
