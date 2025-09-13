
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  portfolio: PortfolioItem[];
  achievements: Achievement[];
  username: string;
  password?: string; // Should not be exposed in a real app
}

export interface User {
  id: string;
  username: string;
  role: 'employee' | 'employer';
  details?: Employee;
}

export type UserRole = 'employee' | 'employer';

export interface AuthContextType {
  user: User | null;
  employees: Employee[];
  login: (username: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  addEmployee: (employee: Omit<Employee, 'id' | 'avatar' | 'portfolio' | 'achievements'> & { password?: string }) => void;
  updateEmployee: (employee: Employee) => void;
  deleteEmployee: (employeeId: string) => void;
}
