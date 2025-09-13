
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
    return (
        <div>
            {label && <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1">{label}</label>}
            <input
                id={id}
                className="w-full bg-background border border-secondary rounded-md px-3 py-2 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                {...props}
            />
        </div>
    );
};

export default Input;
