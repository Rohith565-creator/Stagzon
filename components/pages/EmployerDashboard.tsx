
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import type { Employee } from '../../types';
import Header from '../ui/Header';
import EmployeeCard from '../EmployeeCard';
import Modal from '../ui/Modal';
import EmployeeForm from '../EmployeeForm';
import Button from '../ui/Button';

const EmployerDashboard: React.FC = () => {
    const { employees, addEmployee, updateEmployee, deleteEmployee } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

    const handleOpenAddModal = () => {
        setEditingEmployee(null);
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (employee: Employee) => {
        setEditingEmployee(employee);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingEmployee(null);
    };

    const handleFormSubmit = (data: Omit<Employee, 'id' | 'avatar' | 'portfolio' | 'achievements'> & { id?: string; password?: string }) => {
        if (editingEmployee && data.id) {
            updateEmployee({ ...editingEmployee, ...data });
        } else {
            addEmployee(data);
        }
        handleCloseModal();
    };
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };

    return (
        <div className="min-h-screen bg-background">
            <Header title="Employer Dashboard">
                 <Button onClick={handleOpenAddModal}>Add Employee</Button>
            </Header>

            <main className="container mx-auto p-4 md:p-8">
                {employees.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {employees.map((employee) => (
                            <motion.div key={employee.id} variants={itemVariants}>
                                <EmployeeCard
                                    employee={employee}
                                    onEdit={handleOpenEditModal}
                                    onDelete={deleteEmployee}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold text-text-primary">No Employees Found</h2>
                        <p className="text-text-secondary mt-2">Click "Add Employee" to get started.</p>
                    </div>
                )}
            </main>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={editingEmployee ? 'Edit Employee' : 'Add New Employee'}
            >
                <EmployeeForm
                    employee={editingEmployee}
                    onSubmit={handleFormSubmit}
                    onClose={handleCloseModal}
                />
            </Modal>
        </div>
    );
};

export default EmployerDashboard;
