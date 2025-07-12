import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Limited Time Offer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Ready to ace your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  next project?
                </span>
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Join thousands of successful teams who have transformed their 
                project management with AcePM's intelligent platform.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Start free - no credit card required',
                'Setup in under 5 minutes',
                'Cancel anytime, no questions asked'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-purple-100 font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="text-white hover:text-purple-100 font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-200">
                Schedule Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-purple-200 mb-4">Trusted by industry leaders</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-bold text-white">Microsoft</div>
                <div className="text-lg font-bold text-white">Spotify</div>
                <div className="text-lg font-bold text-white">Airbnb</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Start Your Free Trial
                  </h3>
                  <p className="text-purple-200">
                    No commitment. Cancel anytime.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {[
                    'Unlimited projects & team members',
                    'AI-powered insights & analytics',
                    'Real-time collaboration tools',
                    'Advanced reporting & dashboards',
                    '24/7 priority support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Trial Info */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">
                      14 Days
                    </div>
                    <div className="text-purple-200 text-sm">
                      Full access to all features
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 py-4 rounded-full font-bold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Get Started Now
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              Free Trial!
            </div>

            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              No Credit Card
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;