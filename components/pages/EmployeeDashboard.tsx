
import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import Header from '../ui/Header';
import Card from '../ui/Card';

const EmployeeDashboard: React.FC = () => {
    const { user } = useAuth();
    const employee = user?.details;

    if (!employee) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Could not load employee details.</p>
            </div>
        );
    }
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="min-h-screen bg-background">
            <Header title="My Profile" />

            <main className="container mx-auto p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="!p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                        <img src={employee.avatar} alt={employee.name} className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg" />
                        <div>
                            <h1 className="text-4xl font-bold text-text-primary">{employee.name}</h1>
                            <p className="text-2xl text-primary font-medium mt-1">{employee.role}</p>
                            <p className="text-text-secondary mt-2">{employee.email}</p>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                  className="mt-12"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-text-primary mb-6">Portfolio Works</motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {employee.portfolio.map(item => (
                            <motion.div key={item.id} variants={itemVariants}>
                                <Card>
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                                        <p className="text-text-secondary mt-2">{item.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-text-primary mt-12 mb-6">Achievements</motion.h2>
                    <motion.div variants={itemVariants} className="space-y-4">
                        {employee.achievements.map(achieve => (
                            <Card key={achieve.id} className="!p-6 flex items-start space-x-4">
                                <div className="bg-primary/20 text-primary p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-text-primary">{achieve.title} <span className="text-sm font-normal text-text-secondary ml-2">{achieve.date}</span></p>
                                    <p className="text-text-secondary mt-1">{achieve.description}</p>
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
};

export default EmployeeDashboard;
