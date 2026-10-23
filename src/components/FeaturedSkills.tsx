import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Layers, Users, Star } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';
import { FeaturedSkill } from '../types';

export default function FeaturedSkills() {
  const { featuredSkills, setActiveSkillDetails } = useSkillSwap();

  return (
    <section className="py-20 sm:py-28 gradient-purple-pink-featured relative overflow-hidden">
      {/* Background soft ambient orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-purple-300/20 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-300/20 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E9DDF3] text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            TOP PEER OPPORTUNITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            Explore skills{' '}
            <span className="gradient-text-purple-pink">worth sharing.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Curated hands-on student tracks designed for reciprocal learning.
            Zero course fees, zero paywalls — just pure student-to-student collaboration.
          </p>
        </div>

        {/* 6 Featured Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setActiveSkillDetails(skill)}
              className="rounded-3xl bg-white border border-[#E9DDF3] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C783F6] transition-all duration-300 flex flex-col justify-between group cursor-pointer card-hover-effect"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className={`p-6 bg-gradient-to-r ${skill.gradient} text-white relative overflow-hidden`}>
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/25">
                      {skill.badge}
                    </span>
                    <span className="text-xs font-semibold text-white/90 bg-black/15 px-2.5 py-1 rounded-lg">
                      {skill.difficulty}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-1">
                      {skill.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-[#777184] leading-relaxed mb-6 line-clamp-3">
                    {skill.description}
                  </p>

                  {/* Modules count & estimated hours */}
                  <div className="flex items-center gap-4 text-xs text-[#29213B] font-semibold mb-6 pb-5 border-b border-[#E9DDF3]">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#A855F7]" />
                      <span>{skill.modulesCount} Learning Modules</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#777184]">
                      <BookOpen className="w-4 h-4 text-[#F36CBF]" />
                      <span>{skill.estimatedHours}</span>
                    </div>
                  </div>

                  {/* Mentors Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2 overflow-hidden">
                        {skill.mentorAvatars.map((av, idx) => (
                          <img
                            key={idx}
                            src={av}
                            alt="Mentor"
                            className="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-2xs"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[#777184] font-medium">
                        {skill.mentorCount} peer partners
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSkillDetails(skill);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#A855F7] group-hover:text-[#F36CBF] transition-colors"
                    >
                      Explore Skill
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
