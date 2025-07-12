import React from 'react';
import { Rocket, Target, Cog, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: 'Project Launch',
      description: 'Get your projects off the ground with our expert setup and onboarding process.',
      features: ['Custom project templates', 'Team onboarding', 'Goal setting workshops'],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Align your projects with business objectives through strategic planning sessions.',
      features: ['Roadmap development', 'Risk assessment', 'Resource planning'],
      color: 'from-indigo-600 to-blue-600'
    },
    {
      icon: Cog,
      title: 'Process Optimization',
      description: 'Streamline your workflows and eliminate bottlenecks for maximum efficiency.',
      features: ['Workflow analysis', 'Automation setup', 'Performance tuning'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to keep your projects running smoothly.',
      features: ['Live chat support', 'Video consultations', 'Priority assistance'],
      color: 'from-cyan-600 to-teal-600'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-purple-200 mb-6 shadow-sm">
            <span className="text-sm font-medium text-purple-700">
              Professional Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Expert guidance for
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              project excellence
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our team of certified project management experts provides personalized 
            guidance to ensure your success from day one.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-200"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className="text-purple-600 hover:text-purple-700 font-semibold group-hover:underline transition-all duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Need a custom solution?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Our enterprise team can create tailored solutions that fit your unique 
            business requirements and scale with your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Sales
            </button>
            <button className="text-slate-700 hover:text-purple-600 font-semibold px-8 py-4 rounded-full border-2 border-slate-200 hover:border-purple-300 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;