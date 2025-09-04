"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/dashboard/Dashboard";
import TeamDashboard from "@/dashboard/myteams/TeamDashboard";
import LoginPage from "./login/LoginPage"; 
import MessageModal from "@/components/MessageModal";
import QuickActions from "@/Dashboard/QuickActions";
import Activity from "@/Dashboard/Activity";
import Card from "@/dashboard/Card"; 
import Login from "./login/Login";
import { 
  coachesData, 
  preferredCustomers, 
  umsConsumers, 
  trialCustomers, 
  expiredUsersDataFromImage 
} from "@/data/data";


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [showMessageModal, setShowMessageModal] = useState(true); 
  const handleLoginSuccess = () => {
  setIsLoggedIn(true);

  };
  const [showHeader, setShowHeader] = useState(true);
  const [showButton, setShowButton] = useState(true);

  if (!isLoggedIn) 
  {
    
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;

  }

  return (
    <div className="flex min-h-screen bg-gray-50">
    <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <div className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
      {showHeader && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Hello Tailwind!
            </h1>
            <p className="text-lg text-gray-700">
              If you see this styled text, Tailwind CSS is working!
            </p>
          </div>
        )}
       
       
        {showButton && (
          <button
            onClick={() => setShowMessageModal(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
          >
            Show Message
          </button>
        )}

       
        {showMessageModal && (
          <MessageModal onClose={() => setShowMessageModal(true)} /> 
        )}

        
        {activeItem === "Dashboard" &&(
         <> 
            <Dashboard />
            
          </>
        )}
        {activeItem === "My Teams" && <TeamDashboard />}
      </div>
    </div>
  );
}
