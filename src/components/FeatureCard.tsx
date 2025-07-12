import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-lg bg-gray-50">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;