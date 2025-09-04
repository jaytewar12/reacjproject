"use client";
import './index.css';
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import LoginPage from "./login/LoginPage";
import Dashboard from "./dashboard/Dashboard";
import TeamDashboard from "./dashboard/myteams/TeamDashboard";
import Activity from "./dashboard/Activity";
import QuickActions from "./dashboard/QuickActions";
import MessageModal from "./components/MessageModal";
import { 
  coachesData, 
  preferredCustomers, 
  umsConsumers, 
  trialCustomers, 
  expiredUsersDataFromImage 
} from '../data/data';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleLoginSuccess = () => setIsLoggedIn(true);

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />

      <div className="flex-1 p-6 space-y-4 overflow-auto min-h-screen">
        {activeItem === "Dashboard" && <Dashboard />}
        {activeItem === "My Teams" && <TeamDashboard />}
        <Activity />
        <QuickActions />
        <MessageModal />
      </div>
    </div>
  );
}