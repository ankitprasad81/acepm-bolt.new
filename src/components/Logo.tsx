import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Custom AcePM Logo */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <div className="relative">
            {/* Ace symbol - stylized A */}
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <path d="M12 2L3 22h3l1.5-4h9l1.5 4h3L12 2zm-2.5 12L12 8l2.5 6h-5z"/>
                </svg>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
        {/* Floating accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"></div>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          AcePM
        </span>
        <span className="text-xs text-slate-500 font-medium -mt-1 tracking-wider">
          PROJECT EXCELLENCE
        </span>
      </div>
    </div>
  );
};

export default Logo;