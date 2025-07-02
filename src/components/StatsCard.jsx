import React from 'react';

const StatsCard = ({ title, value, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    indigo: 'bg-indigo-500',
    pink: 'bg-pink-500',
  };

  const bgColorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    red: 'bg-red-50',
    yellow: 'bg-yellow-50',
    orange: 'bg-orange-50',
    indigo: 'bg-indigo-50',
    pink: 'bg-pink-50',
  };

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg border hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`p-3 rounded-md ${colorClasses[color] || colorClasses.blue}`}>
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="text-2xl font-bold text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className={`${bgColorClasses[color] || bgColorClasses.blue} px-5 py-3`}>
      </div>
    </div>
  );
};

export default StatsCard;
