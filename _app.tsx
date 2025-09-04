"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import TeamDashboard from "../dashboard/myteams/TeamDashboard";
import Activity from "../dashboard/Activity";
import QuickActions from "../dashboard/QuickActions";
import LoginPage from "../app/LoginPage";
import { 
  coachesData, 
  preferredCustomers, 
  umsConsumers, 
  trialCustomers, 
  expiredUsersDataFromImage 
} from '../data/data';
import MessageModal from "../components/MessageModal"; 

export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [showModal, setShowModal] = useState(false);
  const handleLoginSuccess = () => setIsLoggedIn(true);

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

return(
  
    <div className="flex min-h-screen bg-gray-100">
    <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <div className="flex-1 p-6 space-y-4 overflow-auto min-h-screen">
        {activeItem === "Dashboard" && <Dashboard />}
        {activeItem === "My Teams" && <TeamDashboard />}
        <Activity />
        <QuickActions />
        
         <button 
          onClick={() => setShowModal(true)} 
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Open Message Modal
        </button>
        {showModal && (
          <MessageModal onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>

  );
}
