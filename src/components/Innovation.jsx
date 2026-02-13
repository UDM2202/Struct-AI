import React from 'react';
import { FiUsers, FiGlobe, FiShield, FiCpu, FiAward, FiFeather } from 'react-icons/fi';

const Innovation = () => {
  const innovations = [
    {
      icon: <FiFeather className="text-3xl" />,
      title: "Carbon as Currency",
      description: "30-40% reduction isn't a target, it's the output. Embodied carbon calculated alongside cost, not as an afterthought."
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Destress Engineer",
      description: "We're not replacing engineers. We're replacing spreadsheets. Professional accountability is never automated."
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Export in Change Model",
      description: "Seamless integration with existing workflows. Export decisions, compare options, and maintain control."
    }
  ];

  const principles = [
    {
      icon: <FiShield />,
      text: "Eurocode compliance embedded in optimisation logic"
    },
    {
      icon: <FiCpu />,
      text: "Responsible AI—pattern recognition, not black-box decisions"
    },
    {
      icon: <FiAward />,
      text: "Built by engineers, for engineers"
    }
  ];

  return (
    <section className="py-16 bg-[#0A2F44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#082636] text-[#cce1eb] px-4 py-2 rounded-full mb-6">
            <FiCpu />
            <span className="text-sm font-semibold">Responsible Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We are not replacing engineers.
          </h2>
          <p className="text-xl text-[#99c2d6]">
            We are giving them <span className="text-white font-semibold">superpowers</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {innovations.map((item, index) => (
            <div key={index} className="bg-[#082636] rounded-xl p-8 border border-[#0a3a55] hover:bg-[#0a3a55] transition-colors">
              <div className="w-16 h-16 bg-[#0a3a55] rounded-lg flex items-center justify-center mb-6">
                <div className="text-[#2E7D32] text-3xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-[#99c2d6]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div key={index} className="flex items-center space-x-3 bg-[#082636] rounded-lg p-4">
              <div className="text-[#2E7D32] text-xl">
                {principle.icon}
              </div>
              <span className="font-medium text-white">{principle.text}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center border-t border-[#0a3a55] pt-12">
          <p className="text-2xl italic text-[#99c2d6]">
            "Most structural software gives you an answer. Struct-AI gives you the <span className="text-white font-semibold">best answer</span> for the budget, for the planet, and for Eurocode."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Innovation;