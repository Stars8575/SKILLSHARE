import React, { useState } from 'react';
import {
  X,
  Heart,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Award,
  Users,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';
import { useSkillSwap } from '../../context/SkillSwapContext';

export default function ProjectDetailsModal() {
  const {
    activeProjectDetails,
    setActiveProjectDetails,
    students,
    setActiveSwapTarget,
    addToast,
  } = useSkillSwap();

  const [likes, setLikes] = useState<number>(() => activeProjectDetails?.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);

  if (!activeProjectDetails) return null;

  const project = activeProjectDetails;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      addToast('Project Applauded!', `You liked "${project.title}"`, 'purple');
    }
  };

  const handleFindCollab = () => {
    // Find either creator or collaborator in student list
    const matchedStudent =
      students.find((s) => s.name.toLowerCase().includes(project.creator.toLowerCase())) ||
      students[0];

    setActiveProjectDetails(null);
    setActiveSwapTarget(matchedStudent);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E9DDF3] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveProjectDetails(null)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Thumbnail */}
        <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 bg-purple-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#29213B]">
            {project.category}
          </span>

          <button
            onClick={handleLike}
            className={`absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              hasLiked
                ? 'bg-[#F36CBF] text-white shadow-md'
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current text-white' : 'text-[#F36CBF]'}`} />
            {likes} Likes
          </button>
        </div>

        {/* Title & Creators */}
        <div className="mb-4">
          <h3 className="text-2xl font-extrabold text-[#29213B] tracking-tight mb-2">
            {project.title}
          </h3>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src={project.creatorAvatar}
                alt={project.creator}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src={project.collaboratorAvatar}
                alt={project.collaborator}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
              />
            </div>
            <div className="text-xs text-[#777184]">
              Built by <strong className="text-[#29213B]">{project.creator}</strong> and{' '}
              <strong className="text-[#29213B]">{project.collaborator}</strong>
              <span className="mx-2">•</span>
              <span>{project.timeframe}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#777184] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Skills Combined */}
        <div className="mb-5">
          <span className="text-[11px] font-bold text-[#A855F7] uppercase tracking-wider block mb-2">
            Skills Combined in this Swap
          </span>
          <div className="flex flex-wrap gap-2">
            {project.skillsUsed.map((sk, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-[#FBF6FF] border border-[#E9DDF3] text-xs font-semibold text-[#29213B]"
              >
                {sk}
              </span>
            ))}
          </div>
        </div>

        {/* Impact callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-[#E9DDF3] flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-purple-pink text-white flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#A855F7] uppercase tracking-wider block">
              Outcome & Impact
            </span>
            <p className="text-xs sm:text-sm font-bold text-[#29213B]">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#E9DDF3] flex items-center justify-end gap-3">
          <button
            onClick={() => setActiveProjectDetails(null)}
            className="px-4 py-2.5 rounded-xl border border-[#E9DDF3] text-xs font-semibold text-[#777184] hover:bg-gray-50 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleFindCollab}
            className="px-6 py-2.5 rounded-full gradient-purple-pink text-white text-xs font-bold shadow-md hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5" />
            Find a Collaborator Like This
          </button>
        </div>

      </div>
    </div>
  );
}
