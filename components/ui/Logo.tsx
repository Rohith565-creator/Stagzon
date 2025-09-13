
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => (
    <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="#0D9488">
            Bhavyaweb
            <tspan fill="#F1F5F9">Tech</tspan>
        </text>
    </svg>
);

export default Logo;
