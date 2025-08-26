import React, { ReactNode } from 'react';

import './styles.css';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  className = '',
  variant = 'primary | secondary',
  children,
}) => {
  const buttonClasses = `button ${variant}-button ${className}`;

  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
