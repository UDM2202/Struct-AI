import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "£99.99",
      period: "/month",
      description: "For solo practitioners and small projects",
      features: [
        { name: "5 designs per month", included: true },
        { name: "Basic optimisation", included: true },
        { name: "Eurocode compliance", included: true },
        { name: "PDF/CSV/XSL export", included: true },
        { name: "Carbon analytics", included: true },
        { name: "Team collaboration", included: false },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "£249.99",
      period: "/month",
      description: "For growing SMEs and frequent users",
      features: [
        { name: "Unlimited designs", included: true },
        { name: "Advanced optimisation", included: true },
        { name: "Eurocode compliance", included: true },
        { name: "PDF/CSV/XSL export", included: true },
        { name: "Carbon analytics", included: true },
        { name: "Team collaboration ", included: true },
        { name: "API access", included: true },
      ],
      cta: "Start Free Trial",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#cce1eb] text-[#082636] px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#02090d] mb-3">
            Choose the plan that fits your practice
          </h2>
          <p className="text-lg text-[#4b5563]">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Two columns centered */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 border ${
                  plan.popular 
                    ? 'border-[#0A2F44] ring-2 ring-[#0A2F44] ring-opacity-20 scale-105 z-10' 
                    : 'border-[#e5e7eb]'
                } relative transition-all hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#2E7D32] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#02090d] mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold text-[#0A2F44]">{plan.price}</span>
                    <span className="text-[#6b7280] mb-1">{plan.period}</span>
                  </div>
                  <p className="text-[#4b5563] mt-2 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <FiCheck className="text-[#2E7D32] mr-3 flex-shrink-0" />
                      ) : (
                        <FiX className="text-[#d1d5db] mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-[#374151]' : 'text-[#9ca3af]'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[#0A2F44] text-white hover:bg-[#082636]'
                      : 'bg-white text-[#0A2F44] border-2 border-[#0A2F44] hover:bg-[#e6f0f5]'
                  }`}
                >
                  {plan.cta}
                </button>

                {plan.name === "Starter" && (
                  <p className="text-xs text-[#6b7280] text-center mt-4">
                    Perfect for getting started
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Money-back guarantee */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-soft">
            <FiCheck className="text-[#2E7D32]" />
            <span className="text-[#4b5563]">14-day money-back guarantee. No questions asked.</span>
          </div>
        </div> */}

        {/* Educational pricing note */}
        <div className="mt-8 text-center text-sm text-[#6b7280]">
          <p>🏛️ Educational and research discounts available. <a href="#contact" className="text-[#0A2F44] hover:underline">Contact us</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;