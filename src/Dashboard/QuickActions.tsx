import React from "react";

interface ActionItem {
  id: number;
  text: string;
  bgColor: string;
}

const actions: ActionItem[] = [
  { id: 1, text: "Schedule a new meeting", bgColor: "bg-green-100" },
  { id: 2, text: "Add new consumer", bgColor: "bg-blue-100" },
  { id: 3, text: "Review coach performance", bgColor: "bg-purple-100" },
];

const QuickActions: React.FC = () => {
  return (
    <div className="flex-1 p-5 bg-white border border-gray-300 rounded-xl shadow">
      <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
      <div className="space-y-3">
        {actions.map((action) => (
          <div
            key={action.id}
            className={`${action.bgColor} px-4 py-3 rounded-lg cursor-pointer hover:opacity-80`}
          >
            {action.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;