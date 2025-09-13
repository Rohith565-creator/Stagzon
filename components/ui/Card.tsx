
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <motion.div
            className={`bg-surface rounded-lg shadow-lg overflow-hidden ${className}`}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
