"use client";
import { useState } from "react";
import Card from "./Card";
import Activity from "./Activity";
import QuickActions from "./QuickActions";
import Sidebar from "./Sidebar";
import { FaUsers, FaCalendar, FaHeartbeat } from "react-icons/fa";

export default function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      
      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-2">
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>


          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18v18H3V3zM12 3v18"
            />
          </svg>

        <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 w-72 border border-gray-300 rounded-md text-sm"
          />
        </div>

       <div className="relative flex items-center gap-3">
          {/* Bell Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>


          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer flex flex-col items-center p-1 rounded hover:bg-gray-200"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center bg-green-500 text-white font-bold rounded-full">
                J
              </span>
              <span className="font-bold">John Doe</span>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              NC Owner
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {showDropdown && (
            <div className="absolute top-16 right-0 bg-white border border-gray-200 rounded-md shadow-md w-40 z-50">
              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                My Account
              </div>
              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                Profile Setting
              </div>
              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                Billing
              </div>
              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                Supports
              </div>
              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                Sign Out
              </div>
            </div>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-1">Dashboard</h2>
      <p className="text-sm text-gray-600 mb-6">
        Welcome back! Here's what's happening with your fitness business.
      </p>

      <div className="flex gap-6 mb-6">
        <Card
          title="Total Consumers"
          count="248"
          change="+12% from last month"
          icon={<FaUsers className="text-blue-500 text-lg" />}
        />
        <Card
          title="Active Coaches"
          count="12"
          change="+2 from last month"
          icon={<FaCalendar className="text-blue-500 text-lg" />}
        />
        <Card
          title="Meetings This Week"
          count="34"
          change="+8% from last month"
          icon={<FaHeartbeat className="text-blue-500 text-lg" />}
        />
      </div>

      <div className="flex gap-6">
        <Activity />
        <QuickActions />
      </div>
    </div>
  );
}