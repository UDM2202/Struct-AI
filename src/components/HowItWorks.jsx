import React from 'react';
import { FiEdit3, FiCpu, FiBarChart2, FiDownload, FiArrowRight } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiEdit3 className="text-2xl" />,
      title: "Input",
      description: "Project parameters. Spans. Loads. Materials.",
      details: "Type it. Import it. Your way.",
      color: "primary"
    },
    {
      icon: <FiCpu className="text-2xl" />,
      title: "Engine",
      description: "Eurocode logic runs. Rule-based. Reliable.",
      details: "No AI black-box. Just engineering.",
      color: "primary"
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Output",
      description: "3-5 compliant designs. Cost + Carbon savings.",
      details: "Compare. Choose. Decide.",
      color: "accent"
    },
    {
      icon: <FiDownload className="text-2xl" />,
      title: "Export",
      description: "Save as PDF/CSV. Share with client.",
      details: "Own your work. Always.",
      color: "primary"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#cce1eb] text-[#082636] px-4 py-2 rounded-full mb-6">
            <FiCpu />
            <span className="text-sm font-semibold">Simple. Transparent. Powerful.</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#02090d] mb-4">
            Four steps. <span className="text-[#0A2F44]">Zero guesswork.</span>
          </h2>
          <p className="text-xl text-[#4b5563]">
            From parameters to optimized options. No fluff. Just engineering.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 text-xs font-bold text-[#0A2F44] border border-[#cce1eb] rounded-full z-10">
                Step {index + 1}
              </div>
              
              {/* Icon Circle - Fixed hover effect */}
              <div className="w-20 h-20 bg-[#cce1eb] rounded-full flex items-center justify-center mb-4 relative z-0 transition-all duration-300 group-hover:bg-[#0A2F44]">
                <div className="text-[#0A2F44] group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#04131b]">{step.title}</h3>
                <p className="text-[#4b5563] text-sm">{step.description}</p>
                <p className="text-sm font-semibold text-[#2E7D32]">{step.details}</p>
              </div>

              {/* Arrow for mobile/tablet - hidden on desktop */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <FiArrowRight className="text-[#99c2d6] text-xl rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Connector Line (hidden on mobile) */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-[#cce1eb]"></div>
        </div>

        {/* MVP Note */}
        <div className="mt-16 bg-[#e6f0f5] rounded-2xl p-8 border border-[#cce1eb]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 bg-[#0A2F44] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">MVP</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#02090d] mb-2">Minimum Viable Product — Done Right</h4>
              <p className="text-[#4b5563]">
                We're starting with the core: <span className="font-semibold text-[#0A2F44]">Input → Process → Display → Save</span>. 
                No complex import features yet. Just reliable, Eurocode-compliant calculations that work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;