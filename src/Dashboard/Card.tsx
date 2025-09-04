import React from "react";

interface CardProps {
  title: string;
  count: string | number;
  change?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, count, change,icon }) => {
  return (
   <div className="p-4 bg-white rounded-lg shadow-md w-64">
       <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-xl text-blue-500">{icon}</span>}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-2xl font-bold">{count}</p>
      {change && <p className="text-sm text-green-600">{change}</p>}
    </div>
  );
};

export default Card;