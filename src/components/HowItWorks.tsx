import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Users, Compass, BookOpen, Layers, Laptop, Coffee } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';

const steps = [
  {
    step: '01',
    title: 'Share Your Skills',
    subtitle: "Tell us what you know and what you'd love to learn.",
    detail: 'Add your existing skills (like Python, video editing, or graphic design) and pick what you want to master next. No professional certifications required.',
    icon: Sparkles,
    tag: 'Profile Setup',
  },
  {
    step: '02',
    title: 'Find Your Match',
    subtitle: 'Connect with students whose skills complement yours.',
    detail: 'Our reciprocal matching engine pairs you with peers where your knowledge fills their gap, and their experience fills yours.',
    icon: Users,
    tag: 'Smart Matching',
  },
  {
    step: '03',
    title: 'Learn by Exchanging',
    subtitle: 'Meet online or on campus, practise together, and build real projects.',
    detail: 'Schedule 30, 45, or 60-minute swap sessions. Pair program, review slide decks, critique design files, and build awesome portfolio pieces.',
    icon: BookOpen,
    tag: 'Collaborative Growth',
  },
];

export default function HowItWorks() {
  const { setIsOnboardingOpen } = useSkillSwap();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs">
            <Compass className="w-3.5 h-3.5" />
            THE RECIPROCAL MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            How SkillSwap <span className="gradient-text-purple-pink">works.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Three straightforward steps to trade knowledge, level up your portfolio, and expand your student network.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Visual Exchange Illustration */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#FBF6FF] via-[#F5ECFD] to-[#FFE1F2] border border-[#E9DDF3] shadow-lg overflow-hidden">
              {/* Decorative background blurs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/30 rounded-full filter blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300/30 rounded-full filter blur-3xl pointer-events-none" />

              {/* Student Exchange Visual Scene */}
              <div className="relative z-10 flex flex-col gap-6">
                
                {/* Header preview pill */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E9DDF3]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#A855F7]" />
                    <span className="text-xs font-bold text-[#29213B]">Active Swap Session</span>
                  </div>
                  <span className="text-xs font-semibold text-[#A855F7] bg-white px-2.5 py-1 rounded-lg border border-[#E9DDF3]">
                    45 min • Online Video
                  </span>
                </div>

                {/* Two Students Exchanging */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Student 1 */}
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#E9DDF3] shadow-xs text-center flex flex-col items-center">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Sam"
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#A855F7] mb-2"
                    />
                    <span className="text-xs font-bold text-[#29213B]">Sam Rivera</span>
                    <span className="text-[10px] text-[#777184]">Interactive Media</span>
                    <div className="mt-2.5 w-full py-1.5 px-2 rounded-lg bg-purple-50 text-[11px] font-bold text-[#A855F7] border border-purple-200">
                      Teaching: Python
                    </div>
                  </div>

                  {/* Student 2 */}
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#E9DDF3] shadow-xs text-center flex flex-col items-center">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                      alt="Maya"
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#F36CBF] mb-2"
                    />
                    <span className="text-xs font-bold text-[#29213B]">Maya Lin</span>
                    <span className="text-[10px] text-[#777184]">Product Design</span>
                    <div className="mt-2.5 w-full py-1.5 px-2 rounded-lg bg-pink-50 text-[11px] font-bold text-[#F36CBF] border border-pink-200">
                      Teaching: Figma UI
                    </div>
                  </div>
                </div>

                {/* Animated Bridge / Collaborative Shared Output */}
                <div className="bg-white/95 rounded-2xl p-4 border border-[#E9DDF3] shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-[#29213B] mb-2">
                    <span className="flex items-center gap-1.5 text-[#A855F7]">
                      <Laptop className="w-4 h-4" />
                      Collaborative Project in Progress
                    </span>
                    <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                      Live
                    </span>
                  </div>
                  <div className="w-full bg-[#FBF6FF] p-3 rounded-xl border border-[#E9DDF3] text-xs text-[#777184] font-mono leading-relaxed">
                    <span className="text-purple-600 font-semibold">Maya:</span> "Check the auto-layout on the modal card!"<br />
                    <span className="text-pink-600 font-semibold">Sam:</span> "Hooked up the API parser function in Python now."
                  </div>
                </div>

                {/* Reciprocal benefit badge */}
                <div className="py-2.5 px-4 rounded-xl bg-white/80 border border-[#E9DDF3] flex items-center justify-between text-xs font-semibold text-[#29213B]">
                  <span>Cost: $0 (Reciprocal Exchange)</span>
                  <span className="text-[#A855F7] font-bold">100% Peer Verified</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Three Steps */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStepIndex === index;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-6 rounded-3xl transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#FBF6FF] border-[#C783F6] shadow-md scale-[1.01]'
                      : 'bg-white border-[#E9DDF3] hover:border-purple-200 hover:bg-[#FBF6FF]/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number Circle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-sm shrink-0 transition-colors shadow-2xs ${
                        isActive
                          ? 'gradient-purple-pink text-white shadow-purple-500/25'
                          : 'bg-purple-100 text-[#A855F7]'
                      }`}
                    >
                      {item.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-[#29213B]">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#A855F7] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-[#29213B] mb-1.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-[#777184] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsOnboardingOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full gradient-purple-pink text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Start Swapping Skills
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('matching-engine')}
                className="text-xs font-bold text-[#777184] hover:text-[#A855F7] transition-colors cursor-pointer"
              >
                Or check live reciprocal matches →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
