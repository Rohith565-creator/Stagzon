
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import LoginPage from './components/pages/LoginPage';
import EmployerDashboard from './components/pages/EmployerDashboard';
import EmployeeDashboard from './components/pages/EmployeeDashboard';

const AppContent: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <LoginPage />;
    }

    if (user.role === 'employer') {
        return <EmployerDashboard />;
    }

    if (user.role === 'employee') {
        return <EmployeeDashboard />;
    }

    return <LoginPage />;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <div className="min-h-screen w-full">
                <AppContent />
            </div>
        </AuthProvider>
    );
};

export default App;
