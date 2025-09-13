
import React, { useState, useEffect } from 'react';
import type { Employee } from '../types';
import Input from './ui/Input';
import Button from './ui/Button';

interface EmployeeFormProps {
    employee?: Employee | null;
    onSubmit: (data: Omit<Employee, 'id' | 'avatar' | 'portfolio' | 'achievements'> & { id?: string; password?: string }) => void;
    onClose: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        username: '',
        password: '',
    });

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name,
                email: employee.email,
                role: employee.role,
                username: employee.username,
                password: '', // Don't pre-fill password for security
            });
        } else {
             setFormData({ name: '', email: '', role: '', username: '', password: '' });
        }
    }, [employee]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ id: employee?.id, ...formData });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input id="name" name="name" label="Full Name" value={formData.name} onChange={handleChange} required />
            <Input id="email" name="email" type="email" label="Email Address" value={formData.email} onChange={handleChange} required />
            <Input id="role" name="role" label="Job Role" value={formData.role} onChange={handleChange} required />
            <Input id="username" name="username" label="Username" value={formData.username} onChange={handleChange} required />
            <Input id="password" name="password" type="password" label="Password" placeholder={employee ? "Leave blank to keep current" : "Enter password"} value={formData.password} onChange={handleChange} required={!employee} />
            <div className="flex justify-end space-x-3 pt-4">
                <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                <Button type="submit">{employee ? 'Update' : 'Add'} Employee</Button>
            </div>
        </form>
    );
};

export default EmployeeForm;
