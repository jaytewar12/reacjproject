import React from 'react';
import { coachesData, preferredCustomers, umsConsumers, trialCustomers, expiredUsersDataFromImage } from './data';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        NEWLC
      </div>
      <ul className="mt-4">
        <li
          className={`p-3 cursor-pointer flex items-center gap-2 rounded ${
            activeItem === 'Dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
          onClick={() => onItemClick('Dashboard')}
        >
          <span>📊</span> Dashboard
        </li>
        <li
          className={`p-3 cursor-pointer flex items-center gap-2 rounded ${
            activeItem === 'My Teams' ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
          onClick={() => onItemClick('My Teams')}
        >
          <span>👥</span> My Teams
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;