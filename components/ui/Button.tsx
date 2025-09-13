
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const baseClasses = "px-4 py-2 rounded-md font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantClasses = {
        primary: 'bg-primary hover:bg-primary-hover focus:ring-primary',
        secondary: 'bg-secondary hover:bg-slate-500 focus:ring-secondary',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
