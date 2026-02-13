import React from 'react';
import { FiArrowRight, FiBarChart2, FiCpu } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary-50/30 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A2F44" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
              <FiCpu className="text-lg" />
              <span className="text-sm font-semibold">AI-Powered • Eurocode Compliant</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
              AI Structural Design
              <span className="text-primary-500 block">Assistant for UK Engineers</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-lg">
              Eurocode-compliant. Carbon-focused. 
              <span className="font-semibold text-primary-600"> 3-clicks from slab to savings.</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#signup" className="btn-primary group">
                Start Your First Design
                <FiArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="btn-secondary group">
                View Demo
                <FiBarChart2 className="inline ml-2" />
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center text-primary-700 font-semibold text-xs">
                    UK
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-neutral-800">✦ Used by 40+ UK SME practices</p>
                <p className="text-sm text-neutral-500 mb-4">Trusted by engineers nationwide</p>
              </div>
            </div>
          </div>

          {/* Right Column - Input Form Preview */}
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-neutral-100">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="ml-2 text-sm text-neutral-400">new-project.design</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-600">Project Type</span>
                  <div className="flex space-x-2">
                    <span className="badge badge-blue">Residential</span>
                    <span className="badge bg-neutral-100 text-neutral-600">Commercial</span>
                    <span className="badge bg-neutral-100 text-neutral-600">Industrial</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Span Lengths</p>
                    <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                      <span className="text-lg font-semibold text-primary-700">8 m</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Storey Height</p>
                    <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                      <span className="text-lg font-semibold text-primary-700">3.0 m</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-2">
                  <div>
                    <p className="text-xs text-neutral-500">Material</p>
                    <p className="font-semibold text-neutral-800">Concrete C30/37</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neutral-500">Budget Limit</p>
                    <p className="font-semibold text-accent-600">£500,000</p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="w-full bg-primary-500 text-white rounded-lg py-3 px-4 text-center font-semibold">
                    Run Optimisation →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;