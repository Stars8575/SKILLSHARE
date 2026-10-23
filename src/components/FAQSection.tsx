import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { mockFaqs } from '../data/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            Everything you need <span className="gradient-text-purple-pink">to know.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Quick answers about peer exchanges, skill matching, session formats, and this interactive demo.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="flex flex-col gap-3.5">
          {mockFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FBF6FF] border-[#C783F6] shadow-sm'
                    : 'bg-white border-[#E9DDF3] hover:border-purple-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#29213B] pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-purple-200 text-[#A855F7] rotate-180'
                        : 'bg-gray-100 text-[#777184]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#777184] leading-relaxed border-t border-[#E9DDF3]/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
