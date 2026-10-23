import React from 'react';
import { ArrowRight, Sparkles, Users, Award, ShieldCheck } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';

export default function FinalCTA() {
  const { setIsOnboardingOpen } = useSkillSwap();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden gradient-purple-pink text-white">
      {/* Background patterns and glowing lights */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-pink-400/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-xs font-extrabold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          START YOUR PEER LEARNING JOURNEY
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Ready to learn something new?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Your next skill could start with a single conversation. Join hundreds of students exchanging coding,
          design, video, and speaking skills today.
        </p>

        {/* Main CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('matching-engine')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#29213B] hover:text-[#A855F7] font-extrabold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            Find Your Skill Match
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold text-base transition-all cursor-pointer"
          >
            Set Up Free Demo Profile
          </button>
        </div>

        {/* 3 Quick Benefit Pillars */}
        <div className="mt-14 pt-10 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm">100% Free Forever</div>
              <div className="text-xs text-white/75">Trade skills, not dollars</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm">Direct Student Mentors</div>
              <div className="text-xs text-white/75">From top universities</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm">Portfolio Verified</div>
              <div className="text-xs text-white/75">Build tangible real projects</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
