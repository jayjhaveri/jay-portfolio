
import React from 'react';

interface TechItemProps {
  name: string;
  icon: React.ReactNode;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center">
      <div className="mb-3 text-3xl">{icon}</div>
      <div className="font-medium">{name}</div>
    </div>
  );
};

export default TechItem;
