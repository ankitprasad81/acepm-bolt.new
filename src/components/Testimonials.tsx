import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'TechFlow Inc.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'AcePM transformed how our engineering team manages projects. The AI insights helped us identify bottlenecks before they became problems, improving our delivery time by 40%.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Project Director',
      company: 'Global Solutions',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The collaboration features are game-changing. Our distributed team feels more connected than ever, and the real-time updates keep everyone aligned on project goals.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Operations Manager',
      company: 'StartupXYZ',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'As a growing startup, we needed a solution that could scale with us. AcePM\'s flexibility and powerful automation features have been instrumental in our 300% growth.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full border border-purple-200 mb-6">
            <span className="text-sm font-medium text-purple-700">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What our customers
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders 
            have to say about their experience with AcePM.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-purple-100 dark:border-slate-600 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-indigo-600/5 dark:from-purple-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join 50,000+ satisfied customers
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Experience the difference that intelligent project management 
              can make for your team's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="text-white hover:text-purple-100 font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-200">
              <button className="text-white hover:text-purple-100 dark:hover:text-purple-200 font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;