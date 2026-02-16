import React from 'react';
import { FiAward, FiBook, FiTarget, FiUsers, FiCheckCircle, FiTool, FiBriefcase } from 'react-icons/fi';

const Founder = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Founder Image/Placeholder */}
          <div className="relative">
            <div className="relative bg-[#e6f0f5] rounded-3xl p-8 border border-[#cce1eb]">
              <div className="flex flex-col items-center text-center">
                {/* Profile Circle */}
                <div className="w-32 h-32 bg-[#0A2F44] rounded-full mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">IM</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#02090d] mb-2">Israel Ifeanyi MICHAEL</h3>
                <p className="text-lg text-[#082636] mb-4">Founder / Structural Engineer / Product Manager</p>
                
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#cce1eb] text-[#061c28] border border-[#99c2d6]">B.ENG</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#cce1eb] text-[#061c28] border border-[#99c2d6]">University of Benin</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#cce1eb] text-[#061c28] border border-[#99c2d6]">MSc. International Project Management</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#cce1eb] text-[#061c28] border border-[#99c2d6]">Northumbria University</span>
                </div>

                <p className="text-[#4b5563] italic">
                  "We built this because we were tired of over-designing just to meet deadlines. 
                  There is a smarter way, one that respects both the engineer's expertise and the planet's limits."
                </p>

                {/* <div className="mt-6 w-full border-t border-[#cce1eb] pt-6">
                  <p className="text-sm text-[#6b7280]">
                    ⏳ Full-time dedication from <span className="font-semibold text-[#082636]">January 14th, 2026</span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Story & Team */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#cce1eb] text-[#082636] px-4 py-2 rounded-full mb-4">
                <FiAward />
                <span className="text-sm font-semibold">Built by an engineer,  For engineers.</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#02090d] mb-4">
                Founder-Led and <span className="text-[#0A2F44]">Engineer-Driven.</span>
              </h2>
              <p className="text-lg text-[#4b5563]">
                Israel Ifeanyi MICHAEL brings formal training in structural engineering alongside practical site supervision experience. 
                This combination enables a strong understanding of both design theory and real-world construction constraints.
              </p>
            </div>

            {/* Capabilities - Fixed icons */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <FiTool className="text-[#0A2F44] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-[#04131b]">Site Supervision</p>
                  <p className="text-sm text-[#6b7280]">Real-world construction constraints</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiBook className="text-[#0A2F44] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-[#04131b]">Eurocode Expert</p>
                  <p className="text-sm text-[#6b7280]">Deep compliance knowledge</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiTarget className="text-[#0A2F44] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-[#04131b]">Product Vision</p>
                  <p className="text-sm text-[#6b7280]">From concept to code</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiUsers className="text-[#0A2F44] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-[#04131b]">Team Leadership</p>
                  <p className="text-sm text-[#6b7280]">Multidisciplinary coordination</p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-[#f3f4f6] rounded-xl p-6 border border-[#e5e7eb]">
              <h4 className="font-bold text-[#04131b] mb-4 flex items-center">
                <FiUsers className="mr-2" /> Core Team 
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">AI & Machine Learning Lead</p>
                    <p className="text-sm text-[#6b7280]">Optimisation & explainability</p>
                  </div>
                  <FiCheckCircle className="text-[#2E7D32]" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Cybersecurity & Data Governance Lead</p>
                    <p className="text-sm text-[#6b7280]">GDPR & IP protection</p>
                  </div>
                  <FiCheckCircle className="text-[#2E7D32]" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Software & Civil Engineering Integration Lead</p>
                    <p className="text-sm text-[#6b7280]">Engineering logic → software</p>
                  </div>
                  <FiCheckCircle className="text-[#2E7D32]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;