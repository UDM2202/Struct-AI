import React from 'react';
import { FiCheckCircle, FiDownload, FiBarChart2, FiCpu, FiDollarSign, FiFeather } from 'react-icons/fi';

const DashboardPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#cce1eb] text-[#082636] px-4 py-2 rounded-full mb-6">
            <FiBarChart2 />
            <span className="text-sm font-semibold">From Parameters to Options</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#02090d] mb-4">
            In seconds.
          </h2>
          <p className="text-xl text-[#4b5563]">
            Engineer inputs. System calculates. Engineer decides. 
            <span className="font-semibold text-[#082636] block mt-2">
              Professional accountability is never automated.
            </span>
          </p>
        </div>

        {/* Dashboard Grid - Split Screen */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: INPUT PANEL */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#04131b] flex items-center">
                <span className="w-2 h-2 bg-[#0A2F44] rounded-full mr-2"></span>
                Project Setup
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e8f5e9] text-[#1c4b1e] border border-[#a1d6a5]">
                Mandatory Fields
              </span>
            </div>

            {/* Project Basics Section */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-3">
                  Project Basics
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#cce1eb] text-[#061c28] border border-[#99c2d6]">Residential</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f3f4f6] text-[#4b5563]">Commercial</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f3f4f6] text-[#4b5563]">Industrial</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Building Use</label>
                    <select className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5 text-sm">
                      <option>Office</option>
                      <option>Housing</option>
                      <option>Retail</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-[#4b5563] block mb-1">Number of Floors</label>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5 text-center font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[#4b5563] block mb-1">Span Lengths</label>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5 text-center font-semibold">
                    8 m
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[#4b5563] block mb-1">Storey Height</label>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5 text-center font-semibold">
                    3.0 m
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-3">
                  Location & Standards
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Location</label>
                    <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5 flex items-center">
                      <span className="mr-2">🇬🇧</span>
                      <span className="font-medium">London, UK</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Design Standard</label>
                    <div className="bg-[#e6f0f5] text-[#082636] border border-[#cce1eb] rounded-lg p-2.5 font-semibold">
                      Eurocode EC2/EC3
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-3">
                  Materials & Loads
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Material Type</label>
                    <div className="flex space-x-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#cce1eb] text-[#061c28] border border-[#99c2d6]">Concrete</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f3f4f6] text-[#4b5563]">Steel</span>
                    </div>
                    <p className="text-xs text-[#6b7280] mt-1">Grade: C30/37</p>
                  </div>
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Live Load</label>
                    <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5">
                      Office (2.5 kN/m²)
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget & Carbon Targets */}
              <div className="bg-[#e8f5e9] p-4 rounded-lg border border-[#a1d6a5]">
                <p className="text-xs font-semibold text-[#1c4b1e] uppercase tracking-wider mb-3 flex items-center">
                  <FiDollarSign className="mr-1" /> Budget & Carbon Targets
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Budget Limit</label>
                    <div className="bg-white border border-[#2E7D32] rounded-lg p-2.5 font-semibold text-[#1c4b1e]">
                      £500,000
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-[#4b5563] block mb-1">Carbon Target</label>
                    <div className="bg-white border border-[#2E7D32] rounded-lg p-2.5 font-semibold text-[#1c4b1e] flex items-center">
                      <FiFeather className="mr-1 text-[#2E7D32]" /> 20% Reduction
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimisation Settings */}
              <div className="pt-4 border-t border-[#e5e7eb]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-[#374151]">Optimisation Level</span>
                  <div className="flex space-x-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#cce1eb] text-[#061c28]">Fast</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f3f4f6] text-[#4b5563]">Standard</span>
                  </div>
                </div>
                
                <button className="w-full bg-[#0A2F44] hover:bg-[#082636] text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <FiCpu className="text-lg" />
                  <span>Run Optimisation → Generate 5 Designs</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: RESULTS PANEL */}
          <div className="space-y-6">
            {/* Headline Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#0A2F44] text-white rounded-xl p-4">
                <p className="text-xs uppercase opacity-90">Cost Optimisation</p>
                <p className="text-3xl font-bold mt-1">11.7%</p>
                <p className="text-xs mt-2 opacity-80">vs. standard design</p>
              </div>
              <div className="bg-[#2E7D32] text-white rounded-xl p-4">
                <p className="text-xs uppercase opacity-90">Carbon Reduction</p>
                <p className="text-3xl font-bold mt-1">30-40%</p>
                <p className="text-xs mt-2 opacity-80">embodied carbon</p>
              </div>
              <div className="bg-[#374151] text-white rounded-xl p-4">
                <p className="text-xs uppercase opacity-90">Eurocode</p>
                <p className="text-3xl font-bold mt-1">100%</p>
                <p className="text-xs mt-2 opacity-80">compliant</p>
              </div>
            </div>

            {/* Main Results Table */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#e5e7eb]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#04131b]">Optimised Design Options</h3>
                <span className="text-xs bg-[#f3f4f6] px-3 py-1 rounded-full">AI-Assisted Prioritisation</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#e5e7eb]">
                      <th className="text-left py-3 px-2 text-xs font-semibold text-[#6b7280] uppercase">Option</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-[#6b7280] uppercase">Est. Cost</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-[#6b7280] uppercase">Carbon</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-[#6b7280] uppercase">Material</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-[#6b7280] uppercase">EC</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-[#6b7280] uppercase"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#f3f4f6] hover:bg-[#e6f0f5] transition-colors">
                      <td className="py-3 px-2 font-bold text-[#082636]">Option A</td>
                      <td className="py-3 px-2">
                        <span className="font-semibold">£455,000</span>
                        <span className="text-xs text-[#2E7D32] block">11.7% lower</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e8f5e9] text-[#1c4b1e]">40% ✔</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e8f5e9] text-[#1c4b1e]">25% ✔</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-[#2E7D32] text-lg">✓</span>
                      </td>
                      <td className="py-3 px-2">
                        <input type="radio" name="design-option" className="w-4 h-4 accent-[#0A2F44]" />
                      </td>
                    </tr>
                    <tr className="border-b border-[#f3f4f6] hover:bg-[#e6f0f5] transition-colors bg-[#e6f0f5]">
                      <td className="py-3 px-2 font-bold text-[#082636]">Option B</td>
                      <td className="py-3 px-2">
                        <span className="font-semibold">£480,000</span>
                        <span className="text-xs text-[#2E7D32] block">£35k saved</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e8f5e9] text-[#1c4b1e]">35% ✔</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e8f5e9] text-[#1c4b1e]">20% ✔</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-[#2E7D32] text-lg">✓</span>
                      </td>
                      <td className="py-3 px-2">
                        <input type="radio" name="design-option" defaultChecked className="w-4 h-4 accent-[#0A2F44]" />
                      </td>
                    </tr>
                    <tr className="hover:bg-[#e6f0f5] transition-colors">
                      <td className="py-3 px-2 font-bold text-[#6b7280]">Option C</td>
                      <td className="py-3 px-2">
                        <span className="font-semibold">£515,000</span>
                        <span className="text-xs text-[#6b7280] block">Standard</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#f3f4f6] text-[#4b5563]">20% ✔</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#f3f4f6] text-[#4b5563]">0% ✔</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-[#2E7D32] text-lg">✓</span>
                      </td>
                      <td className="py-3 px-2">
                        <input type="radio" name="design-option" className="w-4 h-4 accent-[#0A2F44]" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Detailed View Card */}
              <div className="mt-6 p-4 bg-[#f9fafb] rounded-lg border border-[#e5e7eb]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#082636] uppercase">Selected</span>
                    <h4 className="text-lg font-bold text-[#04131b]">Steel Frame - Option A</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-2xl font-bold text-[#082636]">£455,000</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#e8f5e9] text-[#1c4b1e]">40% Carbon Reduction</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#e8f5e9] text-[#1c4b1e]">25% Material Savings</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-white border border-[#99c2d6] text-[#082636] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e6f0f5]">
                      View Detailed Report
                    </button>
                    <button className="bg-[#0A2F44] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#082636] flex items-center">
                      <FiDownload className="mr-1" /> Export
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 pt-2">
                <button className="text-[#082636] font-medium flex items-center hover:text-[#0A2F44]">
                  <span className="mr-1 text-xl">+</span> Generate More Designs
                </button>
                <button className="text-[#4b5563] font-medium flex items-center hover:text-[#082636]">
                  Compare Options <FiBarChart2 className="ml-1" />
                </button>
              </div>
            </div>

            {/* Engineer Review Notice */}
            <div className="bg-[#e6f0f5] border border-[#cce1eb] rounded-lg p-4 flex items-start">
              <FiCheckCircle className="text-[#0A2F44] text-xl mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#02090d]">Final approval remains with qualified engineer</p>
                <p className="text-sm text-[#4b5563]">Professional judgment and accountability are never automated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;