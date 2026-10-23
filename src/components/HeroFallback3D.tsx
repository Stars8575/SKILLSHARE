import React from 'react';
import { Code2, PenTool, Video, Mic, Sparkles, CheckCircle, Zap } from 'lucide-react';

export default function HeroFallback3D() {
  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-center select-none overflow-hidden">
      {/* Dreamy Ambient Backdrops */}
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#C783F6]/25 filter blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#F36CBF]/20 filter blur-3xl pointer-events-none animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFE1F2]/50 filter blur-2xl pointer-events-none" />

      {/* Central Composition Container */}
      <div className="relative w-[340px] sm:w-[420px] md:w-[460px] h-[380px] flex items-center justify-center">
        {/* Soft Circular Studio Podium */}
        <div className="absolute bottom-8 w-[280px] sm:w-[360px] h-[100px] rounded-[100%] bg-gradient-to-b from-white to-[#E9DDF3] shadow-xl border border-white/60 transform -rotate-1" />

        {/* Central Stylized Student Illustration Card */}
        <div className="relative z-10 w-[240px] sm:w-[280px] p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#E9DDF3] shadow-2xl flex flex-col items-center text-center">
          {/* Student Avatar with gradient ring */}
          <div className="relative mb-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-gradient-to-tr from-[#A855F7] via-[#C783F6] to-[#F36CBF] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Student Peer Learner"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            {/* Active peer pulse */}
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-r from-[#A855F7] to-[#F36CBF] border-2 border-white items-center justify-center text-[10px] text-white">
                ✓
              </span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#29213B]">Sam Rivera</h3>
          <p className="text-xs text-[#777184] mb-3">Interactive Media • Peer Mentor</p>

          {/* Active Swap Exchange Pill */}
          <div className="w-full py-2 px-3 rounded-xl bg-[#FBF6FF] border border-[#E9DDF3] flex items-center justify-between text-xs">
            <div className="text-left">
              <span className="text-[10px] font-semibold text-[#A855F7] uppercase tracking-wider block">Offers</span>
              <span className="font-semibold text-[#29213B]">Python</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#A855F7] to-[#F36CBF] flex items-center justify-center text-white shadow-xs">
              ⇄
            </div>
            <div className="text-right">
              <span className="text-[10px] font-semibold text-[#F36CBF] uppercase tracking-wider block">Wants</span>
              <span className="font-semibold text-[#29213B]">Figma UI</span>
            </div>
          </div>
        </div>

        {/* 4 Floating Skill Badges surrounding character */}

        {/* 1. Python (Top-Left) */}
        <div className="absolute -top-4 -left-4 sm:-left-8 z-20 animate-float">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9DDF3] shadow-lg hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-[#A855F7]">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="text-left pr-1">
              <div className="text-xs font-bold text-[#29213B] leading-tight">Python</div>
              <div className="text-[10px] text-[#777184]">Data & Scripts</div>
            </div>
          </div>
        </div>

        {/* 2. UI/UX Design (Top-Right) */}
        <div className="absolute -top-6 -right-4 sm:-right-8 z-20 animate-float-delayed">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9DDF3] shadow-lg hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-[#F36CBF]">
              <PenTool className="w-4 h-4" />
            </div>
            <div className="text-left pr-1">
              <div className="text-xs font-bold text-[#29213B] leading-tight">UI/UX Design</div>
              <div className="text-[10px] text-[#777184]">Figma Prototyping</div>
            </div>
          </div>
        </div>

        {/* 3. Video Editing (Bottom-Left) */}
        <div className="absolute bottom-2 -left-6 sm:-left-12 z-20 animate-float-slow">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9DDF3] shadow-lg hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
              <Video className="w-4 h-4" />
            </div>
            <div className="text-left pr-1">
              <div className="text-xs font-bold text-[#29213B] leading-tight">Video Editing</div>
              <div className="text-[10px] text-[#777184]">Premiere & Cuts</div>
            </div>
          </div>
        </div>

        {/* 4. Public Speaking (Bottom-Right) */}
        <div className="absolute bottom-4 -right-4 sm:-right-10 z-20 animate-float">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9DDF3] shadow-lg hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
              <Mic className="w-4 h-4" />
            </div>
            <div className="text-left pr-1">
              <div className="text-xs font-bold text-[#29213B] leading-tight">Public Speaking</div>
              <div className="text-[10px] text-[#777184]">Pitch Decks & Voice</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
