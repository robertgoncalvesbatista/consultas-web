import { Button as ButtonFlowbite } from 'flowbite-react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, className, onClick }) => {
  return (
    <ButtonFlowbite
      type={type}
      color={'primary'}
      className={`bg-primary text-white rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </ButtonFlowbite>
  );
};

export default Button;
