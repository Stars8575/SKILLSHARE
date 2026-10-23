import React from 'react';
import {
  X,
  CheckCircle,
  Circle,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Users,
  Award,
} from 'lucide-react';
import { useSkillSwap } from '../../context/SkillSwapContext';

export default function PathDetailsModal() {
  const {
    activePathDetails,
    setActivePathDetails,
    learningPaths,
    toggleModuleCompletion,
    students,
    setActiveSwapTarget,
  } = useSkillSwap();

  if (!activePathDetails) return null;

  // Retrieve latest state from learningPaths context array
  const currentPath = learningPaths.find((p) => p.id === activePathDetails.id) || activePathDetails;

  const total = currentPath.modules.length;
  const completedCount = currentPath.modules.filter((m) => m.completed).length;
  const progressPercent = Math.round((completedCount / total) * 100);

  // Suggested mentors
  const pathMentors = students.filter((st) =>
    currentPath.recommendedMentorIds.includes(st.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E9DDF3] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setActivePathDetails(null)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-6 border-b border-[#E9DDF3]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A855F7]">
              {currentPath.category}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs font-semibold text-[#777184]">
              {currentPath.duration}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#29213B] tracking-tight mb-2">
            {currentPath.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#777184] leading-relaxed">
            {currentPath.description}
          </p>

          {/* Interactive Progress Bar */}
          <div className="mt-5 p-4 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3]">
            <div className="flex items-center justify-between text-xs font-bold text-[#29213B] mb-2">
              <span className="flex items-center gap-1.5 text-[#A855F7]">
                <Award className="w-4 h-4" />
                Track Completion
              </span>
              <span>{completedCount} of {total} completed ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#E9DDF3] overflow-hidden">
              <div
                className="h-full rounded-full gradient-purple-pink transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Ordered Modules with Checkboxes */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider">
              Roadmap Checkpoints
            </h4>
            <span className="text-[11px] text-[#777184]">
              Click checkboxes to toggle your progress
            </span>
          </div>

          <div className="space-y-3">
            {currentPath.modules.map((module, idx) => (
              <div
                key={module.id}
                onClick={() => toggleModuleCompletion(currentPath.id, module.id)}
                className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                  module.completed
                    ? 'bg-purple-50/60 border-purple-200 text-[#29213B]'
                    : 'bg-white border-[#E9DDF3] hover:border-[#C783F6]'
                }`}
              >
                {/* Checkbox */}
                <div className="mt-0.5 shrink-0">
                  {module.completed ? (
                    <div className="w-5 h-5 rounded-lg gradient-purple-pink text-white flex items-center justify-center shadow-2xs">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-lg border-2 border-gray-300 hover:border-[#A855F7] transition-colors" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className={`text-xs sm:text-sm font-bold ${module.completed ? 'line-through text-[#777184]' : 'text-[#29213B]'}`}>
                      {idx + 1}. {module.title}
                    </h5>
                    <span className="text-[11px] text-[#777184] font-medium shrink-0 ml-2">
                      {module.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#777184] mt-1 leading-relaxed">
                    {module.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Mentors for this path */}
        {pathMentors.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-[#FFF5FA] border border-[#FFE1F2]">
            <h4 className="text-xs font-extrabold text-[#F36CBF] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              Recommended Peer Mentors for this Track
            </h4>
            <div className="space-y-2">
              {pathMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#FFE1F2]"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-8 h-8 rounded-lg object-cover ring-1 ring-pink-300"
                    />
                    <div>
                      <span className="text-xs font-bold text-[#29213B] block leading-tight">
                        {mentor.name}
                      </span>
                      <span className="text-[10px] text-[#777184]">
                        {mentor.university}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActivePathDetails(null);
                      setActiveSwapTarget(mentor);
                    }}
                    className="px-3 py-1 rounded-lg gradient-purple-pink text-white text-[11px] font-bold cursor-pointer hover:opacity-90"
                  >
                    Swap with {mentor.name.split(' ')[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-[#E9DDF3] flex items-center justify-end gap-3">
          <button
            onClick={() => setActivePathDetails(null)}
            className="px-4 py-2.5 rounded-xl border border-[#E9DDF3] text-xs font-semibold text-[#777184] hover:bg-gray-50 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              setActivePathDetails(null);
              const el = document.getElementById('explore-skills');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-full gradient-purple-pink text-white text-xs font-bold shadow-md hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
          >
            Find Track Partner
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
