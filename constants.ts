
import type { Employee } from './types';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: 'emp-1',
    name: 'Alice Johnson',
    email: 'alice.j@bhavyaweb.tech',
    role: 'Senior Frontend Developer',
    avatar: 'https://picsum.photos/seed/alice/400/400',
    username: 'alice',
    password: 'password',
    portfolio: [
      { id: 'p1-1', title: 'E-commerce Platform', description: 'Built a responsive front-end using React and Redux.', imageUrl: 'https://picsum.photos/seed/project1/600/400' },
      { id: 'p1-2', title: 'Data Visualization Dashboard', description: 'Developed interactive charts with D3.js.', imageUrl: 'https://picsum.photos/seed/project2/600/400' },
    ],
    achievements: [
      { id: 'a1-1', title: 'Employee of the Month', description: 'Recognized for outstanding performance and teamwork.', date: '2023-08' },
      { id: 'a1-2', title: 'Innovation Award', description: 'Awarded for developing a new internal tool that improved productivity by 20%.', date: '2024-01' },
    ],
  },
  {
    id: 'emp-2',
    name: 'Bob Williams',
    email: 'bob.w@bhavyaweb.tech',
    role: 'Backend Developer',
    avatar: 'https://picsum.photos/seed/bob/400/400',
    username: 'bob',
    password: 'password',
    portfolio: [
      { id: 'p2-1', title: 'REST API for Mobile App', description: 'Designed and implemented a scalable Node.js API.', imageUrl: 'https://picsum.photos/seed/project3/600/400' },
      { id: 'p2-2', title: 'Database Migration', description: 'Successfully migrated legacy database to a new cloud infrastructure.', imageUrl: 'https://picsum.photos/seed/project4/600/400' },
    ],
    achievements: [
      { id: 'a2-1', title: 'Top Performer Q3 2023', description: 'Exceeded all performance targets for the quarter.', date: '2023-09' },
    ],
  },
  {
    id: 'emp-3',
    name: 'Charlie Brown',
    email: 'charlie.b@bhavyaweb.tech',
    role: 'UI/UX Designer',
    avatar: 'https://picsum.photos/seed/charlie/400/400',
    username: 'charlie',
    password: 'password',
    portfolio: [
        { id: 'p3-1', title: 'Mobile Banking App Redesign', description: 'Led the UI/UX redesign, resulting in a 30% increase in user engagement.', imageUrl: 'https://picsum.photos/seed/project5/600/400' },
        { id: 'p3-2', title: 'Corporate Branding Guide', description: 'Created a new branding guide adopted company-wide.', imageUrl: 'https://picsum.photos/seed/project6/600/400' },
    ],
    achievements: [
        { id: 'a3-1', title: 'Design Excellence Award', description: 'Won an industry award for the mobile banking app design.', date: '2023-11' },
    ],
  },
];

export const MOCK_EMPLOYER = {
  id: 'employer-1',
  username: 'employer',
  password: 'password',
  role: 'employer',
};
