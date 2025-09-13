
import React from 'react';
import type { Employee } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

interface EmployeeCardProps {
    employee: Employee;
    onEdit: (employee: Employee) => void;
    onDelete: (employeeId: string) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onEdit, onDelete }) => {
    return (
        <Card className="flex flex-col text-center">
            <div className="p-6 flex flex-col items-center flex-grow">
                <img src={employee.avatar} alt={employee.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary" />
                <h3 className="text-xl font-bold text-text-primary">{employee.name}</h3>
                <p className="text-primary font-medium">{employee.role}</p>
                <p className="text-text-secondary text-sm mt-1">{employee.email}</p>
            </div>
            <div className="bg-background/50 p-4 flex justify-center space-x-2">
                <Button variant="secondary" onClick={() => onEdit(employee)}>Edit</Button>
                <Button variant="danger" onClick={() => onDelete(employee.id)}>Delete</Button>
            </div>
        </Card>
    );
};

export default EmployeeCard;
