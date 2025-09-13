
import React from 'react';
import Logo from './Logo';
import Button from './Button';
import { useAuth } from '../../hooks/useAuth';

interface HeaderProps {
    title: string;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    const { logout, user } = useAuth();
    return (
        <header className="bg-surface shadow-md p-4 animate-fade-in">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Logo className="h-10 w-auto" />
                    <span className="text-xl font-semibold text-text-primary hidden sm:block">{title}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-text-secondary hidden md:block">Welcome, {user?.username}</span>
                    {children}
                    <Button onClick={logout} variant="secondary">Logout</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
