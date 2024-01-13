import React, { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children,icon, ...props }) => {
  return (
    <button {...props}>
      {children} {icon}
    </button>
  );
};

export default Button;
