import React from 'react';
import { FiClock, FiAlertTriangle, FiTrendingDown, FiDollarSign, FiFeather } from 'react-icons/fi';

const Problem = () => {
  return (
    <section className="py-16 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F44] mb-4">
            Spreadsheets are slow and <span className="text-[#0A2F44]">Over-design is costly.</span>
          </h2>
          <p className="text-xl text-[#4b5563]">
            UK structural engineering SMEs face recurring operational challenges that impact profits, timelines, and sustainability.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#cce1eb] rounded-lg flex items-center justify-center mb-6">
              <FiClock className="text-2xl text-[#0A2F44]" />
            </div>
            <h3 className="text-xl font-bold text-[#04131b] mb-3">Manual, Repetitive Workflows</h3>
            <p className="text-[#4b5563]">
              Engineers waste hours on repetitive calculations and spreadsheet-based designs instead of focusing on innovation and client needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#cce1eb] rounded-lg flex items-center justify-center mb-6">
              <FiAlertTriangle className="text-2xl text-[#0A2F44]" />
            </div>
            <h3 className="text-xl font-bold text-[#04131b] mb-3">Conservative Over-Design</h3>
            <p className="text-[#4b5563]">
              To manage liability risks and time constraints, engineers over-specify materials, driving up costs and embodied carbon.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#cce1eb] rounded-lg flex items-center justify-center mb-6">
              <FiTrendingDown className="text-2xl text-[#0A2F44]" />
            </div>
            <h3 className="text-xl font-bold text-[#04131b] mb-3">Inequality in Tools</h3>
            <p className="text-[#4b5563]">
              Advanced optimisation tools are locked behind high paywalls, accessible only to large consultancies, leaving SMEs behind.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-[#e5e7eb]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FiDollarSign className="text-2xl text-[#2E7D32]" />
                <span className="text-3xl font-bold text-[#0A2F44]">15-20%</span>
              </div>
              <p className="text-[#4b5563]">Average material cost savings missed</p>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FiFeather className="text-2xl text-[#2E7D32]" />
                <span className="text-3xl font-bold text-[#0A2F44]">30-40%</span>
              </div>
              <p className="text-[#4b5563]">Embodied carbon reduction potential</p>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FiClock className="text-2xl text-[#2E7D32]" />
                <span className="text-3xl font-bold text-[#0A2F44]">10+ hrs</span>
              </div>
              <p className="text-[#4b5563]">Saved per project with optimisation</p>
            </div>
          </div>
        </div> */}

        {/* Quote */}
        <div className="mt-12 text-center">
          <p className="text-lg italic text-[#6b7280]">
            "As sustainability targets tighten, these inefficiencies reduce the competitiveness of SME practices."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;