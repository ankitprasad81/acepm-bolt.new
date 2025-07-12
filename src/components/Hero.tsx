import React from 'react';
import { ArrowRight, Play, CheckCircle, Zap, Target, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full border border-purple-200">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                #1 Project Management Platform 2024
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Project Success
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                AcePM revolutionizes project management with AI-powered insights, 
                seamless collaboration, and intelligent automation that delivers 
                results 3x faster.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                'AI-powered project insights',
                'Real-time team collaboration',
                '99.9% uptime guarantee'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group flex items-center justify-center space-x-2 text-slate-700 hover:text-purple-600 font-semibold px-8 py-4 rounded-full border-2 border-slate-200 hover:border-purple-300 transition-all duration-200">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Trusted by 50,000+ teams worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-bold text-slate-600">Microsoft</div>
                <div className="text-lg font-bold text-slate-600">Spotify</div>
                <div className="text-lg font-bold text-slate-600">Airbnb</div>
                <div className="text-lg font-bold text-slate-600">Slack</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="flex-1 text-center">
                    <span className="text-white font-medium">AcePM Dashboard</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="text-green-600 text-sm font-medium">Completed</div>
                    <div className="text-2xl font-bold text-green-700">24</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="text-blue-600 text-sm font-medium">In Progress</div>
                    <div className="text-2xl font-bold text-blue-700">12</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div className="text-orange-600 text-sm font-medium">Pending</div>
                    <div className="text-2xl font-bold text-orange-700">8</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Website Redesign</span>
                      <span className="text-slate-500">85%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Mobile App</span>
                      <span className="text-slate-500">62%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '62%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Marketing Campaign</span>
                      <span className="text-slate-500">40%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200 animate-bounce">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-slate-700">Goal Achieved!</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200 animate-pulse">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">Team Online: 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;