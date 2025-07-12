import React from 'react';
import { GraduationCap, Building, Zap, Award, Bell } from 'lucide-react';
import FeatureCard from './FeatureCard';

const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-2xl mb-6 relative">
            <GraduationCap className="w-10 h-10 text-white" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">?</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Get Certified
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nailit's certification proves that you can{' '}
            <span className="font-semibold text-gray-900">think</span> like a PM,{' '}
            <br className="hidden sm:block" />
            not just talk like one.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<Building className="w-6 h-6 text-blue-500" />}
            title="Industry Aligned"
            description="No bootcamps. No filler content. Just the skills companies care about."
          />
          
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-orange-500" />}
            title="Fast Track"
            description="Solve realistic product challenges, and get certified in just a few hours."
          />
          
          <FeatureCard
            icon={<Award className="w-6 h-6 text-green-500" />}
            title="Recognition That Counts"
            description="Top candidates will be featured to partner companies actively hiring product talent."
          />
        </div>

        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">
            🟡 Coming Soon
          </span>
        </div>

        {/* Bottom Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
            <Bell className="w-8 h-8 text-blue-500" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get certified before everyone else.
          </h2>
          
          <p className="text-gray-600 max-w-lg mx-auto">
            Our certification program is almost here. Join the waitlist to be the first to know when it launches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;