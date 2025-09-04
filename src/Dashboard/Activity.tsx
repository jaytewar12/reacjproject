import React from "react";

interface ActivityItem {
  id: number;
  text: string;
}

const activities: ActivityItem[] = [
  { id: 1, text: "New consumer Sarah Johnson joined (2 hours ago)" },
  { id: 2, text: "Meeting scheduled with Mike Chen (4 hours ago)" },
  { id: 3, text: "Coach Emma completed training (1 day ago)" },
];

const Activity: React.FC = () => {
  return (
    <div className="flex-1 p-5 bg-white border border-gray-300 rounded-xl shadow">
      <h4 className="text-lg font-semibold mb-3">Recent Activity</h4>
      <h4 className="text-lg font-semibold mb-3">Latest Update from your fitness Business</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {activities.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Activity;