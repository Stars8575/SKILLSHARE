import React from 'react';
import { Sparkles, Star, Quote, ArrowLeftRight } from 'lucide-react';
import { mockTestimonials } from '../data/mockData';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBF6FF] relative overflow-hidden border-t border-[#E9DDF3]">
      {/* Decorative blurred shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-purple-200/25 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-pink-200/25 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            PEER EXPERIENCES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            Better together,{' '}
            <span className="gradient-text-purple-pink">by design.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Authentic peer exchange stories demonstrating how university students traded expertise,
            built lasting friendships, and leveled up their capabilities.
          </p>
        </div>

        {/* Testimonials Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-[#E9DDF3] p-6 shadow-sm hover:shadow-xl hover:border-[#C783F6] transition-all duration-300 flex flex-col justify-between group card-hover-effect"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-[#A855F7] flex items-center justify-center">
                    <Quote className="w-4 h-4 fill-current opacity-70" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#29213B] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div>
                {/* Exchange summary pill */}
                <div className="mb-5 p-3 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] text-[11px] flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[#A855F7] font-semibold">
                    <span>Learned:</span>
                    <strong className="text-[#29213B]">{item.skillLearned}</strong>
                  </div>
                  <div className="flex items-center justify-between text-[#F36CBF] font-semibold">
                    <span>Taught:</span>
                    <strong className="text-[#29213B]">{item.skillTaught}</strong>
                  </div>
                </div>

                {/* Student Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#E9DDF3]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#C783F6]/40"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#29213B]">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-[#777184] font-medium leading-tight">
                      {item.major}
                    </p>
                    <p className="text-[10px] text-[#A855F7] font-semibold">
                      {item.university}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer */}
        <p className="text-center text-xs text-[#777184]/80 mt-10">
          * Fictional peer testimonials and demonstration metrics simulating student exchange outcomes.
        </p>

      </div>
    </section>
  );
}
