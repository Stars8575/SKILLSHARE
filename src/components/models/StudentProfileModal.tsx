import React from 'react';
import {
  X,
  Star,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Calendar,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { useSkillSwap } from '../../context/SkillSwapContext';

export default function StudentProfileModal() {
  const {
    activeStudentProfile,
    setActiveStudentProfile,
    setActiveSwapTarget,
    hasSentRequestTo,
  } = useSkillSwap();

  if (!activeStudentProfile) return null;

  const student = activeStudentProfile;
  const alreadySent = hasSentRequestTo(student.id);

  const handleOpenSwap = () => {
    const target = student;
    setActiveStudentProfile(null);
    setActiveSwapTarget(target);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E9DDF3] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Close */}
        <button
          onClick={() => setActiveStudentProfile(null)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Profile Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#E9DDF3]">
          <div className="relative">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-[#C783F6]/30 shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-2xl font-extrabold text-[#29213B]">{student.name}</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-[#A855F7]">
                {student.experienceLevel}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#777184] font-medium">
              {student.major} • <strong className="text-[#A855F7]">{student.university}</strong>
            </p>
            <div className="flex items-center gap-3 text-xs text-[#777184] mt-2">
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-3.5 h-3.5 fill-current" />
                {student.rating} ({student.reviewCount} peer reviews)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {student.swapsCompleted} swaps
              </span>
              <span>•</span>
              <span>{student.joinedDate}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider mb-2">
            About Me
          </h4>
          <p className="text-xs sm:text-sm text-[#777184] leading-relaxed bg-[#FBF6FF] p-4 rounded-2xl border border-[#E9DDF3]">
            "{student.bio}"
          </p>
        </div>

        {/* Skills Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Can Teach */}
          <div className="p-4 rounded-2xl bg-white border border-[#E9DDF3]">
            <span className="text-[11px] font-bold text-[#A855F7] uppercase tracking-wider block mb-2">
              Skills Offered
            </span>
            <div className="space-y-2">
              {student.teachSkills.map((sk, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-xl bg-[#FBF6FF] text-xs font-semibold text-[#29213B]"
                >
                  <span>{sk.name}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-[#A855F7]">
                    {sk.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Wants to learn */}
          <div className="p-4 rounded-2xl bg-white border border-[#FFE1F2]">
            <span className="text-[11px] font-bold text-[#F36CBF] uppercase tracking-wider block mb-2">
              Skills Wanted
            </span>
            <div className="space-y-2">
              {student.wantSkills.map((sk, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-xl bg-[#FFF5FA] text-xs font-semibold text-[#29213B]"
                >
                  <span>{sk.name}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-pink-100 text-[#F36CBF]">
                    {sk.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio / Project Highlight */}
        {student.portfolioHighlight && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-[#E9DDF3] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#A855F7] uppercase tracking-wider block mb-0.5">
                Featured Student Project
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#29213B]">
                {student.portfolioHighlight}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#A855F7] shadow-2xs">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        )}

        {/* Logistics & Availability */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[#777184] mb-6 pt-4 border-t border-[#E9DDF3] gap-3">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-[#A855F7]" />
            {student.availability}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <MessageSquare className="w-4 h-4 text-[#F36CBF]" />
            {student.responseTime}
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => setActiveStudentProfile(null)}
            className="px-4 py-2.5 rounded-xl border border-[#E9DDF3] text-xs font-semibold text-[#777184] hover:bg-gray-50 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={handleOpenSwap}
            className={`px-6 py-2.5 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer flex items-center gap-1.5 ${
              alreadySent
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                : 'gradient-purple-pink text-white hover:shadow-purple-500/30 hover:scale-[1.02]'
            }`}
          >
            {alreadySent ? (
              <>
                <CheckCircle className="w-3.5 h-3.5" />
                Request Pending
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                Connect to Swap
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
