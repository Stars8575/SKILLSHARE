import React from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  BookOpen,
  Users,
} from 'lucide-react';
import { useSkillSwap } from '../../context/SkillSwapContext';

export default function SkillDetailsModal() {
  const {
    activeSkillDetails,
    setActiveSkillDetails,
    students,
    setActiveSwapTarget,
    setSearchQuery,
    setSelectedCategory,
  } = useSkillSwap();

  if (!activeSkillDetails) return null;

  const skill = activeSkillDetails;

  // Find students teaching this skill category
  const relevantMentors = students.filter(
    (st) =>
      st.teachSkills.some((s) => s.category === skill.category) ||
      st.teachSkills.some((s) => s.name.toLowerCase().includes(skill.title.toLowerCase().split(' ')[0]))
  );

  const handleFindPartner = () => {
    setSelectedCategory(skill.category);
    setActiveSkillDetails(null);
    const el = document.getElementById('explore-skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleConnectWithMentor = (student: typeof students[0]) => {
    setActiveSkillDetails(null);
    setActiveSwapTarget(student);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E9DDF3] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveSkillDetails(null)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Banner */}
        <div className={`p-6 rounded-2xl bg-gradient-to-r ${skill.gradient} text-white mb-6 relative overflow-hidden`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/25">
              {skill.badge}
            </span>
            <span className="text-xs font-semibold bg-black/20 px-2.5 py-1 rounded-lg">
              {skill.difficulty}
            </span>
          </div>

          <span className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-1">
            {skill.category}
          </span>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            {skill.title}
          </h3>
        </div>

        {/* Overview */}
        <p className="text-xs sm:text-sm text-[#777184] leading-relaxed mb-6">
          {skill.description}
        </p>

        {/* Key Outcomes */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider mb-3">
            What You Will Learn & Practice
          </h4>
          <div className="space-y-2.5">
            {skill.learningOutcomes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FBF6FF] border border-[#E9DDF3] text-xs font-semibold text-[#29213B]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Peer Mentors */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Available Peer Mentors</span>
            <span className="text-[#777184] font-normal">{relevantMentors.length} found</span>
          </h4>

          <div className="space-y-2.5">
            {relevantMentors.slice(0, 3).map((mentor) => (
              <div
                key={mentor.id}
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E9DDF3] hover:border-[#C783F6] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-[#E9DDF3]"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-[#29213B]">{mentor.name}</h5>
                    <p className="text-[10px] text-[#777184]">{mentor.major} • {mentor.university}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleConnectWithMentor(mentor)}
                  className="px-3 py-1.5 rounded-xl gradient-purple-pink text-white text-xs font-bold hover:opacity-90 cursor-pointer shadow-2xs"
                >
                  Swap with {mentor.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#E9DDF3] flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-[#777184]">
            {skill.estimatedHours}
          </span>

          <div className="flex gap-2.5">
            <button
              onClick={() => setActiveSkillDetails(null)}
              className="px-4 py-2.5 rounded-xl border border-[#E9DDF3] text-xs font-semibold text-[#777184] hover:bg-gray-50 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleFindPartner}
              className="px-6 py-2.5 rounded-full gradient-purple-pink text-white text-xs font-bold shadow-md hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              Find a Learning Partner
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
