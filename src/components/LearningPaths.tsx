import React from 'react';
import {
  Compass,
  ArrowRight,
  Clock,
  CheckCircle,
  Layers,
  Sparkles,
  Users,
  Code,
  PenTool,
  Brain,
  Video,
  Mic,
} from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';
import { LearningPath } from '../types';

export default function LearningPaths() {
  const { learningPaths, setActivePathDetails } = useSkillSwap();

  // Helper for icon based on iconName
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return Code;
      case 'PenTool':
        return PenTool;
      case 'Brain':
        return Brain;
      case 'Video':
        return Video;
      case 'Mic':
        return Mic;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="learning-paths" className="py-20 sm:py-28 bg-[#FBF6FF] relative overflow-hidden border-t border-[#E9DDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3.5 shadow-2xs">
            <Compass className="w-3.5 h-3.5" />
            STRUCTURED PEER ROADMAPS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            Choose your{' '}
            <span className="gradient-text-purple-pink">learning journey.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Step-by-step modular paths crafted with peer mentors. Track your progress,
            complete interactive checkpoints, and match with students ready to guide you.
          </p>
        </div>

        {/* 6 Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {learningPaths.map((path) => {
            const Icon = getIcon(path.iconName);
            const totalModules = path.modules.length;
            const completedCount = path.modules.filter((m) => m.completed).length;
            const progressPercent = Math.round((completedCount / totalModules) * 100);

            return (
              <div
                key={path.id}
                onClick={() => setActivePathDetails(path)}
                className="rounded-3xl bg-white border border-[#E9DDF3] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#C783F6] transition-all duration-300 flex flex-col justify-between group cursor-pointer card-hover-effect"
              >
                <div>
                  {/* Top: Icon Badge & Level */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${path.gradient} text-white flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold text-[#A855F7] bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                      {path.level}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-[#777184] uppercase tracking-wider block mb-1">
                      {path.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#29213B] group-hover:text-[#A855F7] transition-colors">
                      {path.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#777184] leading-relaxed mb-6 line-clamp-2">
                    {path.description}
                  </p>

                  {/* Duration & Module Count */}
                  <div className="flex items-center gap-4 text-xs font-medium text-[#777184] mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A855F7]" />
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#F36CBF]" />
                      {totalModules} modules
                    </span>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mb-6 p-3.5 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3]">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-[#29213B]">Journey Progress</span>
                      <span className="font-extrabold text-[#A855F7]">
                        {completedCount}/{totalModules} ({progressPercent}%)
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2.5 rounded-full bg-[#E9DDF3] overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-purple-pink transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-2 flex items-center justify-between border-t border-[#E9DDF3]">
                  <span className="text-xs text-[#777184] font-medium">
                    {path.mentorCount} peer guides active
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePathDetails(path);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#A855F7] group-hover:text-[#F36CBF] transition-colors"
                  >
                    {progressPercent > 0 ? 'Continue Path' : 'Explore Path'}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
