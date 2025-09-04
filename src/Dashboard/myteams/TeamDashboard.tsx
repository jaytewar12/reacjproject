import React, { useState } from "react";
import { Mail, Phone, MessageCircle, Smartphone } from "lucide-react";
import {
  Member,
  coachesData,
  preferredCustomersData,
  umsConsumersData,
  trialCustomersData,
  expiredUsersData,
} from "../../data/data";
import { FaLink, FaCrown, FaUsers, FaClock, FaBan } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";


const counts = {
  Coaches: 12,
  "Preferred Customers": 89,
  "UMS Consumers": 248,
  "Trial Customers": 34,
  "Expired Users": 15,
};


const tabIcons: Record<string, JSX.Element> = {
  Coaches: <FaUsers className="text-white-600" />,
  "Preferred Customers": <FaCrown className="text-yellow-500" />,
  "UMS Consumers": <FaLink className="text-green-600" />,
  "Trial Customers": <FaClock className="text-orange-500" />,
  "Expired Users": <FaBan className="text-red-600" />,
};


const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case "active":
      return "bg-green-500 text-white";
    case "inactive":
      return "bg-red-500 text-white";
    case "expired":
      return "bg-gray-500 text-white";
    default:
      return "bg-blue-500 text-white";
  }
};

const TeamDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Coaches" | "Preferred Customers" | "UMS Consumers" | "Trial Customers" | "Expired Users"
  >("Coaches");
  const [searchTerm, setSearchTerm] = useState("");

  const currentData: Member[] =
    activeTab === "Coaches"
      ? coachesData
      : activeTab === "Preferred Customers"
      ? preferredCustomersData
      : activeTab === "UMS Consumers"
      ? umsConsumersData
      : activeTab === "Trial Customers"
      ? trialCustomersData
      : expiredUsersData;

  const filteredData = currentData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-2">My Teams</h2>
      <p className="text-gray-600 mb-4">
        Manage your coaches, consumers, and customers all in one place
      </p>

     
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Export Data
        </button>
      </div>

     <div className="flex gap-4 mb-6">
        {["Coaches", "Preferred Customers", "UMS Consumers", "Trial Customers", "Expired Users"].map(
          (tab) => (
            <div
              key={tab}
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setActiveTab(tab as any)}
            >
              <div className="flex justify-between items-center w-52 gap-2">
                {/* Tab Icon */}
                <span className="flex items-center gap-2">
                  {tabIcons[tab]} <span>{tab}</span>
                </span>
                <span className="ml-2 font-bold bg-gray-300 text-gray-800 px-2 py-1 rounded">
                  {counts[tab]}
                </span>
              </div>
            </div>
          )
        )}
      </div>

     
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md px-3 py-2 w-1/3"
        />
        <div className="flex items-center gap-2">
          <select className="border rounded-md px-3 py-2">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center gap-1">
            <Mail size={16} />
          </button>
          <button className="px-3 py-2 bg-green-600 text-white rounded-md flex items-center justify-center gap-1">
            <Phone size={16} />
          </button>
          <button className="px-3 py-2 bg-orange-600 text-white rounded-md flex items-center justify-center gap-1">
            <MessageCircle size={16} />
          </button>
          <button className="px-3 py-2 bg-teal-600 text-white rounded-md flex items-center justify-center gap-1">
            <Smartphone size={16} /> Message
          </button>
        </div>
      </div>

      
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              {/* Dynamic columns per tab */}
              {activeTab === "Coaches" && (
                <>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Regular Clients</th>
                  <th className="px-4 py-2">Trial Clients</th>
                </>
              )}
              {activeTab === "Preferred Customers" && (
                <>
                  <th className="px-4 py-2">Plan</th>
                  <th className="px-4 py-2">Expires</th>
                  <th className="px-4 py-2">Status</th>
                </>
              )}
              {activeTab === "UMS Consumers" && (
                <>
                  <th className="px-4 py-2">Plan</th>
                  <th className="px-4 py-2">Days Left</th>
                  <th className="px-4 py-2">Status</th>
                </>
              )}
              {activeTab === "Trial Customers" && (
                <>
                  <th className="px-4 py-2">Trial Status</th>
                  <th className="px-4 py-2">Trial Ends</th>
                  <th className="px-4 py-2">Days Left</th>
               </>
              )}
              {activeTab === "Expired Users" && (
                <>
                  <th className="px-4 py-2">Expired Date</th>
                  <th className="px-4 py-2">Last Plan</th>
                  <th className="px-4 py-2">Reason</th>
                  <th className="px-4 py-2">Status</th>
                </>
              )}
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((member) => (
              <tr key={member.id} className="border-t">
                <td className="px-4 py-3 flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200 font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.email}</div>
                  </div>
                </td>

               
  {activeTab === "Coaches" && (
  <>
    <td className="px-4 py-2 text-center">
      <span
        className={`inline-block px-4 py-2 text-lg font-medium rounded ${getStatusColor(member.status)}`}
      >
        {member.status}
      </span>
    </td>
    <td className="px-4 py-3">{member.regularClients || "-"}</td>
    <td className="px-4 py-3">{member.trialClients || "-"}</td>
  </>
)}

 {activeTab === "Preferred Customers" && (
  <>
    <td className="px-4 py-3">{member.plan || "-"}</td>
    <td className="px-4 py-3">{member.expires || "-"}</td>
    <td className="px-4 py-2 text-center">
      <span
        className={`inline-block px-4 py-2 text-lg font-medium rounded ${getStatusColor(member.status)}`}
      >
        {member.status}
      </span>
    </td>
  </>
)}

 {activeTab === "UMS Consumers" && (
  <>
    <td className="px-4 py-3">{member.plan || "-"}</td>
    <td className="px-4 py-3">{member.daysLeft || "-"}</td>
    <td className="px-4 py-2 text-center">
      <span
        className={`inline-block px-3 py-2 text-lg font-semibold rounded ${getStatusColor(member.status)}`}
      >
        {member.status}
      </span>
    </td>
  </>
)}

{activeTab === "Trial Customers" && (
  <>
    <td className="px-4 py-3">{member.trialStatus || "-"}</td>
    <td className="px-4 py-3">{member.trialEnds || "-"}</td>
    <td className="px-4 py-3">{member.daysLeft || "-"}</td>
    </>
)}

{activeTab === "Expired Users" && (
  <>
  <td className="px-4 py-3">{member.expiredDate || "-"}</td>
  <td className="px-4 py-3">{member.lastPlan || "-"}</td>
  <td className="px-4 py-3">{member.reason || "-"}</td>
  <td className="px-4 py-3">{member.status || "-"}</td>
  </>
  )}

               
                <td className="px-4 py-3 flex gap-2">
                  <button className="px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                     {member.actions || "No Action"}
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    ✉️
                  </button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded-md flex items-center gap-1">
                    <Phone size={16} />
                  </button>
                  <button className="px-3 py-1 bg-orange-600 text-white rounded-md flex items-center gap-1">
                    <MessageCircle size={16} />
                  </button>
                  <button className="px-3 py-1 bg-teal-600 text-white rounded-md flex items-center gap-1">
                    <Smartphone size={16} /> Message
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-600">
          Showing 1 to {filteredData.length} of {filteredData.length} results
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-md text-gray-500" disabled>
            {"<"} Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">1</button>
          <button className="px-3 py-1 border rounded-md">Next {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;