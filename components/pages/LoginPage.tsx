
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import type { UserRole } from '../../types';
import Logo from '../ui/Logo';
import Input from '../ui/Input';
import Button from '../ui/Button';

const LoginPage: React.FC = () => {
    const [role, setRole] = useState<UserRole>('employee');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        try {
            await login(username, password, role);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const tabClasses = (isActive: boolean) =>
        `w-1/2 py-3 text-center cursor-pointer transition-colors duration-300 font-semibold ${
            isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
        }`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 animate-fade-in">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-surface rounded-2xl shadow-2xl overflow-hidden"
            >
                <div className="p-8 text-center">
                    <Logo className="h-16 w-auto mx-auto mb-2" />
                    <p className="text-sm text-text-secondary">
                        #1 Best Web Development Agency in Hyderabad
                    </p>
                </div>

                <div className="flex border-b border-t border-secondary">
                    <div className={tabClasses(role === 'employee')} onClick={() => setRole('employee')}>
                        Employee
                    </div>
                    <div className={tabClasses(role === 'employer')} onClick={() => setRole('employer')}>
                        Employer
                    </div>
                    <motion.div
                        className="absolute bottom-0 h-1 bg-primary"
                        style={{ width: '50%' }}
                        animate={{ x: role === 'employee' ? '0%' : '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                </div>
                
                <form onSubmit={handleLogin} className="p-8 space-y-6">
                    <Input
                        id="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder={role === 'employee' ? 'e.g., alice' : 'e.g., employer'}
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                    />
                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                    <Button type="submit" className="w-full !mt-8" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </motion.div>
        </div>
    );
};

export default LoginPage;
