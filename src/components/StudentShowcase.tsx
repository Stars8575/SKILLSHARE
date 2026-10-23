import React from 'react';
import { Sparkles, Heart, ArrowRight, Eye, Users, Layers, ExternalLink } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';
import { ProjectShowcase } from '../types';

export default function StudentShowcase() {
  const { projectShowcases, setActiveProjectDetails, setIsOnboardingOpen } = useSkillSwap();

  return (
    <section id="community" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            PEER COLLABORATION RESULTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            Small skills.{' '}
            <span className="gradient-text-purple-pink">Big ideas.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Real student projects designed and coded together through SkillSwap exchanges.
            See what happens when complementary minds unite.
          </p>
        </div>

        {/* 6 Project Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectShowcases.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectDetails(project)}
              className="rounded-3xl bg-white border border-[#E9DDF3] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C783F6] transition-all duration-300 flex flex-col justify-between group cursor-pointer card-hover-effect"
            >
              <div>
                {/* Thumbnail Image with Category Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-purple-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#29213B] shadow-xs">
                    {project.category}
                  </span>

                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-medium text-white flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#F36CBF] fill-current" />
                    {project.likes}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Creators Avatars & Names */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex -space-x-2">
                      <img
                        src={project.creatorAvatar}
                        alt={project.creator}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                      />
                      <img
                        src={project.collaboratorAvatar}
                        alt={project.collaborator}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#777184]">
                      By <strong className="text-[#29213B]">{project.creator}</strong> &{' '}
                      <strong className="text-[#29213B]">{project.collaborator}</strong>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#29213B] group-hover:text-[#A855F7] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#777184] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.skillsUsed.map((sk, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#FBF6FF] border border-[#E9DDF3] text-[11px] font-semibold text-[#29213B]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Impact Note */}
                  <div className="text-[11px] font-semibold text-[#A855F7] bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200/60 mb-2">
                    ★ {project.impact}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-[#E9DDF3] grid grid-cols-2 gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProjectDetails(project);
                  }}
                  className="py-2 px-3 rounded-xl bg-[#FBF6FF] hover:bg-purple-100/70 border border-[#E9DDF3] text-xs font-bold text-[#29213B] transition-colors cursor-pointer text-center"
                >
                  View Story
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProjectDetails(project);
                  }}
                  className="py-2 px-3 rounded-xl gradient-purple-pink text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 hover:opacity-90 shadow-2xs"
                >
                  Collaborate
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-purple-100 via-[#FFE1F2] to-purple-100 border border-[#E9DDF3] text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="text-xl font-extrabold text-[#29213B] mb-1">
              Have an idea you want to build?
            </h4>
            <p className="text-xs sm:text-sm text-[#777184]">
              Match with a student who has the coding or design skill you need to launch it.
            </p>
          </div>
          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="px-6 py-3 rounded-full gradient-purple-pink text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer shrink-0"
          >
            Post a Project Swap
          </button>
        </div>

      </div>
    </section>
  );
}
