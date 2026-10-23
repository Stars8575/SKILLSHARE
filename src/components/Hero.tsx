import React from 'react';
import { ArrowRight, Sparkles, Star, Users, CheckCircle2, Play } from 'lucide-react';
import HeroScene3D from './HeroScene3D';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
      {/* Background radial blurs */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-purple-200/30 filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-pink-200/25 filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Small Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200/80 mb-5 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#A855F7] animate-ping" />
              <span className="text-xs font-bold tracking-widest text-[#A855F7] uppercase">
                LEARN. SHARE. GROW.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#29213B] tracking-tight leading-[1.12] mb-6">
              Develop your skills through the{' '}
              <span className="gradient-text-purple-pink inline-block relative">
                power of sharing.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#F36CBF]/40"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C50 2 150 2 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#777184] leading-relaxed mb-8 max-w-xl">
              Discover students who can teach you what you want to learn, and share your own skills in return.
              Build connections, create projects, and grow together — without expensive courses.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('explore-skills')}
                className="px-7 py-3.5 rounded-full gradient-purple-pink text-white font-bold text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Explore Skills
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('how-it-works')}
                className="px-6 py-3.5 rounded-full bg-white text-[#29213B] border border-[#E9DDF3] font-bold text-base hover:bg-purple-50/50 hover:border-[#C783F6] hover:text-[#A855F7] shadow-2xs hover:shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[#A855F7]">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                How It Works
              </button>
            </div>

            {/* Compact Social-Proof Row */}
            <div className="pt-5 border-t border-[#E9DDF3]/80 w-full flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Overlapping Student Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  alt="Student Maya"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Student Alex"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  alt="Student Chloe"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Student Liam"
                />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 ring-2 ring-white text-xs font-bold shadow-xs">
                  +2.4k
                </div>
              </div>

              {/* Text & Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#29213B] ml-1">4.9/5 rating</span>
                </div>
                <span className="text-xs font-semibold text-[#777184]">
                  Learn together. Grow together.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (3D Student Composition) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <HeroScene3D />
          </div>

        </div>
      </div>
    </section>
  );
}
