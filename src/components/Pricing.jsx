import React from 'react';
import { FiCheck, FiX, FiCpu, FiUsers, FiBarChart2, FiDownload } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "£49",
      period: "/month",
      description: "For solo practitioners and small projects",
      features: [
        { name: "5 designs per month", included: true },
        { name: "Basic optimisation", included: true },
        { name: "Eurocode compliance", included: true },
        { name: "PDF export", included: true },
        { name: "Carbon analytics", included: false },
        { name: "Team collaboration", included: false },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "£99",
      period: "/month",
      description: "For growing SMEs and frequent users",
      features: [
        { name: "Unlimited designs", included: true },
        { name: "Advanced optimisation", included: true },
        { name: "Eurocode compliance", included: true },
        { name: "PDF/CSV export", included: true },
        { name: "Carbon analytics", included: true },
        { name: "Team collaboration (3 users)", included: true },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large practices and custom needs",
      features: [
        { name: "Unlimited everything", included: true },
        { name: "Custom optimisation", included: true },
        { name: "Eurocode compliance", included: true },
        { name: "All export formats", included: true },
        { name: "Advanced carbon analytics", included: true },
        { name: "Unlimited team members", included: true },
        { name: "API access", included: true },
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-[var(--color-neutral-50)]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[var(--color-primary-100)] text-[var(--color-primary-700)] px-4 py-2 rounded-full mb-6">
            <FiBarChart2 />
            <span className="text-sm font-semibold">Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-900)] mb-4">
            Affordable for SMEs. <span className="text-[var(--color-primary-500)]">Valuable for all.</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-600)]">
            No hidden fees. No complex enterprise contracts. Just engineering tools that pay for themselves.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card relative ${
                plan.popular 
                  ? 'border-2 border-[var(--color-primary-500)] shadow-xl scale-105 lg:scale-110 z-10' 
                  : 'border-[var(--color-neutral-200)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[var(--color-accent-500)] text-white text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[var(--color-primary-800)] mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-[var(--color-primary-900)]">{plan.price}</span>
                  <span className="text-[var(--color-neutral-500)] mb-1">{plan.period}</span>
                </div>
                <p className="text-[var(--color-neutral-500)] mt-2">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    {feature.included ? (
                      <FiCheck className="text-[var(--color-accent-500)] mr-3 flex-shrink-0" />
                    ) : (
                      <FiX className="text-[var(--color-neutral-400)] mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-[var(--color-neutral-700)]' : 'text-[var(--color-neutral-400)]'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)]'
                    : 'bg-white text-[var(--color-primary-700)] border-2 border-[var(--color-primary-200)] hover:border-[var(--color-primary-500)]'
                }`}
              >
                {plan.cta}
              </button>

              {plan.name === "Starter" && (
                <p className="text-xs text-[var(--color-neutral-400)] text-center mt-4">
                  * £49/month = less than 1 hour of an engineer's time
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-soft">
            <FiCheck className="text-[var(--color-accent-500)]" />
            <span className="text-[var(--color-neutral-600)]">14-day money-back guarantee. No questions asked.</span>
          </div>
        </div>

        {/* Educational pricing note */}
        <div className="mt-8 text-center text-sm text-[var(--color-neutral-400)]">
          <p>🏛️ Educational and research discounts available. <a href="#contact" className="text-[var(--color-primary-500)] hover:underline">Contact us</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;