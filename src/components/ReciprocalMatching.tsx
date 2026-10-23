import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeftRight,
  Plus,
  X,
  CheckCircle2,
  Zap,
  ArrowRight,
  Star,
  Users,
  Compass,
} from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';

const commonSuggestedSkills = [
  'Python Fundamentals',
  'Figma UI/UX Design',
  'Video Editing',
  'Public Speaking & Pitching',
  'React & Frontend',
  'AI & Machine Learning',
  'Graphic Design',
  'Presentation Design',
  'Photography',
];

export default function ReciprocalMatching() {
  const {
    userProfile,
    addOfferedSkill,
    removeOfferedSkill,
    addWantedSkill,
    removeWantedSkill,
    reciprocalMatches,
    setActiveSwapTarget,
    setActiveStudentProfile,
    hasSentRequestTo,
  } = useSkillSwap();

  const [newOfferInput, setNewOfferInput] = useState('');
  const [newWantInput, setNewWantInput] = useState('');
  const [showPreferenceEditor, setShowPreferenceEditor] = useState(false);

  const handleAddOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newOfferInput.trim()) {
      addOfferedSkill(newOfferInput.trim());
      setNewOfferInput('');
    }
  };

  const handleAddWant = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWantInput.trim()) {
      addWantedSkill(newWantInput.trim());
      setNewWantInput('');
    }
  };

  return (
    <section id="matching-engine" className="py-16 sm:py-24 bg-[#FBF6FF] relative overflow-hidden border-y border-[#E9DDF3]">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-purple-200/20 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-pink-200/20 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5 fill-current" />
            RECIPROCAL MATCHING ENGINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            Your next learning partner{' '}
            <span className="gradient-text-purple-pink">is here.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Real reciprocal matching powered by complementary skill exchange.
            Change your offered and wanted skills below to watch recommendations update in real time.
          </p>
        </div>

        {/* Interactive Demo User Preferences Bar */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-3xl p-6 sm:p-7 border border-[#E9DDF3] shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#E9DDF3] gap-3">
            <div className="flex items-center gap-3">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-11 h-11 rounded-2xl object-cover ring-2 ring-[#C783F6]"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#29213B] text-base">{userProfile.name}</span>
                  <span className="text-[11px] font-semibold bg-purple-100 text-[#A855F7] px-2 py-0.5 rounded-full">
                    Demo Profile
                  </span>
                </div>
                <p className="text-xs text-[#777184]">
                  Match recommendations recalculate instantly as you update your skills.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPreferenceEditor(!showPreferenceEditor)}
              className="text-xs font-bold text-[#A855F7] hover:text-[#9333ea] bg-purple-50 px-3.5 py-2 rounded-xl border border-purple-200 transition-colors cursor-pointer self-start sm:self-center"
            >
              {showPreferenceEditor ? 'Collapse Skill Editor' : 'Edit My Skills & Wishlist'}
            </button>
          </div>

          {/* Quick Skill Tags Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Skills I Offer */}
            <div className="bg-[#FBF6FF] p-4 rounded-2xl border border-[#E9DDF3]">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#A855F7] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  I Can Teach (Offered)
                </span>
                <span className="text-[11px] font-medium text-[#777184]">
                  {userProfile.offeredSkills.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {userProfile.offeredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white border border-[#E9DDF3] text-xs font-semibold text-[#29213B] shadow-2xs"
                  >
                    {skill}
                    {showPreferenceEditor && (
                      <button
                        onClick={() => removeOfferedSkill(skill)}
                        className="text-gray-400 hover:text-red-500 ml-1 cursor-pointer"
                        title="Remove"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {showPreferenceEditor && (
                <form onSubmit={handleAddOffer} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a skill you can teach..."
                    value={newOfferInput}
                    onChange={(e) => setNewOfferInput(e.target.value)}
                    className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-[#E9DDF3] focus:outline-none focus:border-[#A855F7]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl gradient-purple-pink text-white text-xs font-bold cursor-pointer hover:opacity-90"
                  >
                    Add
                  </button>
                </form>
              )}
            </div>

            {/* Skills I Want to Learn */}
            <div className="bg-[#FFF5FA] p-4 rounded-2xl border border-[#FFE1F2]">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#F36CBF] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  I Want to Learn (Wishlist)
                </span>
                <span className="text-[11px] font-medium text-[#777184]">
                  {userProfile.wantedSkills.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {userProfile.wantedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white border border-[#FFE1F2] text-xs font-semibold text-[#29213B] shadow-2xs"
                  >
                    {skill}
                    {showPreferenceEditor && (
                      <button
                        onClick={() => removeWantedSkill(skill)}
                        className="text-gray-400 hover:text-red-500 ml-1 cursor-pointer"
                        title="Remove"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {showPreferenceEditor && (
                <form onSubmit={handleAddWant} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a skill you want to learn..."
                    value={newWantInput}
                    onChange={(e) => setNewWantInput(e.target.value)}
                    className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-[#FFE1F2] focus:outline-none focus:border-[#F36CBF]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#F36CBF] hover:bg-[#EC4899] text-white text-xs font-bold cursor-pointer"
                  >
                    Add
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Reciprocal Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {reciprocalMatches.slice(0, 6).map((match, idx) => {
            const isPerfect = match.matchType === 'perfect';
            const student = match.student;
            const alreadySent = hasSentRequestTo(student.id);

            return (
              <div
                key={student.id}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group ${
                  isPerfect
                    ? 'bg-white border-2 border-[#C783F6] shadow-xl shadow-purple-500/10'
                    : 'bg-white border border-[#E9DDF3] shadow-sm hover:shadow-lg hover:border-[#C783F6]'
                }`}
              >
                {/* Match Type Badge */}
                {isPerfect ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-xs self-start">
                    <Sparkles className="w-3.5 h-3.5 fill-current text-yellow-200" />
                    PERFECT SKILL SWAP
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#A855F7] text-[11px] font-bold uppercase tracking-wider mb-4 self-start">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    COMPLEMENTARY MATCH
                  </div>
                )}

                <div>
                  {/* Student Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-13 h-13 rounded-2xl object-cover ring-2 ring-[#E9DDF3] group-hover:ring-[#C783F6] transition-all"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-[#29213B] group-hover:text-[#A855F7] transition-colors">
                          {student.name}
                        </h3>
                        <p className="text-xs text-[#777184] font-medium leading-tight">
                          {student.major}
                        </p>
                        <p className="text-[11px] text-[#A855F7] font-semibold mt-0.5">
                          {student.university}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-[#FBF6FF] px-2 py-1 rounded-xl border border-[#E9DDF3]">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                      <span className="text-xs font-bold text-[#29213B]">{student.rating}</span>
                    </div>
                  </div>

                  {/* Reciprocal Exchange Diagram */}
                  <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-[#FBF6FF] to-[#FFF5FA] border border-[#E9DDF3]">
                    <div className="text-[10px] font-bold text-[#777184] uppercase tracking-wider mb-2 text-center">
                      PROPOSED RECIPROCAL EXCHANGE
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      {/* You Teach */}
                      <div className="flex-1 bg-white p-2.5 rounded-xl border border-purple-200 text-center shadow-2xs">
                        <span className="text-[10px] font-bold text-[#A855F7] uppercase tracking-wider block">
                          You Teach
                        </span>
                        <span className="text-xs font-extrabold text-[#29213B] line-clamp-1">
                          {match.userTeaches}
                        </span>
                      </div>

                      {/* Animated Arrow */}
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#A855F7] to-[#F36CBF] flex items-center justify-center text-white shrink-0 shadow-xs">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>

                      {/* They Teach */}
                      <div className="flex-1 bg-white p-2.5 rounded-xl border border-pink-200 text-center shadow-2xs">
                        <span className="text-[10px] font-bold text-[#F36CBF] uppercase tracking-wider block">
                          They Teach
                        </span>
                        <span className="text-xs font-extrabold text-[#29213B] line-clamp-1">
                          {match.studentTeaches}
                        </span>
                      </div>
                    </div>

                    {/* Explanatory text */}
                    <p className="text-[11px] text-[#777184] text-center mt-2.5 font-medium leading-relaxed">
                      "{match.reason}"
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 grid grid-cols-2 gap-2.5 mt-2 border-t border-[#E9DDF3]">
                  <button
                    onClick={() => setActiveStudentProfile(student)}
                    className="py-2.5 px-3 rounded-xl bg-white border border-[#E9DDF3] hover:border-[#C783F6] hover:bg-purple-50/50 text-xs font-bold text-[#29213B] transition-colors cursor-pointer text-center"
                  >
                    View Bio
                  </button>

                  <button
                    onClick={() => setActiveSwapTarget(student)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 shadow-xs ${
                      alreadySent
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                        : isPerfect
                        ? 'gradient-purple-pink text-white hover:shadow-purple-500/25 hover:scale-[1.02]'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {alreadySent ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Request Sent
                      </>
                    ) : (
                      <>
                        Quick Swap
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
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
