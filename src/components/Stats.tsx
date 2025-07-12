import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Productivity Increase',
      description: 'Average improvement in team productivity',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Active Teams',
      description: 'Teams worldwide trust AcePM',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      value: '2M+',
      label: 'Hours Saved',
      description: 'Time saved through automation',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="stats-section" className="py-20 lg:py-28 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by teams worldwide
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join thousands of successful teams who have transformed their 
            project management with AcePM's innovative platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Value */}
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold text-purple-100 mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-purple-200 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join the success stories?
            </h3>
            <p className="text-purple-100 mb-6">
              Start your free trial today and experience the AcePM difference.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;