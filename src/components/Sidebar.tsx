import React from 'react';
import { 
  BarChart3, 
  Target, 
  Calendar, 
  MessageSquare, 
  Zap, 
  Briefcase, 
  Award,
  Crown
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive = false }) => {
  return (
    <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      isActive 
        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
        : 'text-gray-600 hover:bg-gray-50'
    }`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="flex-1 py-6">
        <div className="space-y-6">
          {/* PREPARE Section */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              PREPARE
            </h3>
            <div className="space-y-1">
              <SidebarItem 
                icon={<BarChart3 className="w-4 h-4" />} 
                label="Dashboard" 
              />
              <SidebarItem 
                icon={<Target className="w-4 h-4" />} 
                label="Practice Challenges" 
              />
              <SidebarItem 
                icon={<Calendar className="w-4 h-4" />} 
                label="3-weeks PM Mastery" 
              />
              <SidebarItem 
                icon={<MessageSquare className="w-4 h-4" />} 
                label="Past Interview Questions" 
              />
            </div>
          </div>

          {/* COMPETE Section */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              COMPETE
            </h3>
            <div className="space-y-1">
              <SidebarItem 
                icon={<Zap className="w-4 h-4" />} 
                label="Product Hackathon" 
              />
            </div>
          </div>

          {/* APPLY Section */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              APPLY
            </h3>
            <div className="space-y-1">
              <SidebarItem 
                icon={<Briefcase className="w-4 h-4" />} 
                label="Apply for jobs" 
              />
            </div>
          </div>

          {/* CERTIFY Section */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              CERTIFY
            </h3>
            <div className="space-y-1">
              <SidebarItem 
                icon={<Award className="w-4 h-4" />} 
                label="Get certified" 
                isActive={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade to Pro Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Crown className="w-4 h-4 text-yellow-600 mr-1" />
            <h4 className="text-sm font-semibold text-yellow-800">Upgrade to Pro</h4>
          </div>
          <p className="text-xs text-yellow-700 mb-3">
            Unlock unlimited challenges, practice 100+ past interview questions, and more.
          </p>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-sm font-medium py-2 px-3 rounded-md transition-colors">
            👑 Upgrade
          </button>
          <p className="text-xs text-yellow-600 mt-2 text-center">
            4 free challenges remaining
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;