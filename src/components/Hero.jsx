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

            {/* <div className="flex items-center space-x-6 pt-6">
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
            </div> */}
          </div>

          {/* Right Column - Input Form Preview */}
         {/* Right Column - Structural AI Code Base */}
<div className="relative lg:block hidden">
  {/* Main container - removed background glow */}
  <div className="relative bg-white rounded-2xl shadow-2xl border border-[#e5e7eb] overflow-hidden transform hover:scale-105 transition-transform duration-500">
    
    {/* Header - matching the Sign Up Free button color */}
    <div className="bg-[#0A2F44] p-4"> {/* Changed to match button color */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <span className="text-[#99c2d6] text-xs font-mono">v1.0</span>
      </div>
    </div>
    
    {/* Main content */}
    <div className="p-8">
      {/* Central Logo/Icon */}
      <div className="relative flex justify-center my-6">
        {/* Orbiting circle - only animation */}
        <div className="absolute w-40 h-40 border-2 border-[#2E7D32] rounded-full border-dashed animate-spin-slow"></div>
        
        {/* Main circle */}
        <div className="relative w-32 h-32 bg-gradient-to-br from-[#0A2F44] to-[#082636] rounded-full flex items-center justify-center shadow-xl">
          <div className="text-center">
            <span className="text-white text-3xl font-bold block leading-tight">SA</span>
          </div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-center space-y-2 mt-8">
        <h3 className="text-2xl font-bold text-[#0A2F44]">
          Structural AI
        </h3>
        <p className="text-lg font-mono text-[#082636] font-semibold tracking-wider">
          CODE BASE
        </p>
        
        {/* Simple divider */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          <div className="w-12 h-0.5 bg-[#0A2F44]"></div>
          <span className="text-xs text-[#6b7280]">v1.0</span>
          <div className="w-12 h-0.5 bg-[#2E7D32]"></div>
        </div>
      </div>
      
      {/* Bottom status bar - simplified */}
      <div className="mt-8 pt-4 border-t border-[#e5e7eb] flex justify-between items-center text-xs text-[#6b7280]">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-2"></span>
          AI Engine Ready
        </span>
        <span>Eurocode EC2/EC3</span>
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