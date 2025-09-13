
import React, { createContext, useState, useEffect } from 'react';
import type { User, AuthContextType, UserRole, Employee } from '../types';
import { MOCK_EMPLOYEES, MOCK_EMPLOYER } from '../constants';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [employees, setEmployees] = useState<Employee[]>(() => {
        const storedEmployees = localStorage.getItem('employees');
        return storedEmployees ? JSON.parse(storedEmployees) : MOCK_EMPLOYEES;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const login = async (username: string, password: string, role: UserRole): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (role === 'employer') {
                    if (username === MOCK_EMPLOYER.username && password === MOCK_EMPLOYER.password) {
                        const loggedInUser: User = { id: MOCK_EMPLOYER.id, username: MOCK_EMPLOYER.username, role: 'employer' };
                        setUser(loggedInUser);
                        resolve();
                    } else {
                        reject(new Error('Invalid employer credentials.'));
                    }
                } else if (role === 'employee') {
                    const foundEmployee = employees.find(emp => emp.username === username && emp.password === password);
                    if (foundEmployee) {
                        const loggedInUser: User = { id: foundEmployee.id, username: foundEmployee.username, role: 'employee', details: foundEmployee };
                        setUser(loggedInUser);
                        resolve();
                    } else {
                        reject(new Error('Invalid employee credentials.'));
                    }
                } else {
                    reject(new Error('Invalid role specified.'));
                }
            }, 500); // Simulate network delay
        });
    };

    const logout = () => {
        setUser(null);
    };

    const addEmployee = (employeeData: Omit<Employee, 'id' | 'avatar' | 'portfolio' | 'achievements'> & { password?: string }) => {
        const newEmployee: Employee = {
            ...employeeData,
            id: `emp-${new Date().getTime()}`,
            avatar: `https://picsum.photos/seed/${employeeData.username}/400/400`,
            portfolio: [],
            achievements: [],
            password: employeeData.password || 'password' // Default password for new employees
        };
        setEmployees(prev => [...prev, newEmployee]);
    };

    const updateEmployee = (updatedEmployee: Employee) => {
        setEmployees(prev => prev.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    };

    const deleteEmployee = (employeeId: string) => {
        setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
    };

    const value: AuthContextType = { user, employees, login, logout, addEmployee, updateEmployee, deleteEmployee };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
