import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ArrowRight,
  Plus,
  CheckCircle2,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import { useSkillSwap } from '../../context/SkillSwapContext';

const commonOffered = [
  'Python Fundamentals',
  'React & Frontend',
  'Data Analysis',
  'Figma UI/UX Design',
  'Video Editing',
  'Graphic Design',
  'Public Speaking & Pitching',
  'AI & Machine Learning',
];

const commonWanted = [
  'Figma UI/UX Design',
  'Public Speaking & Pitching',
  'Video Editing',
  'Python Fundamentals',
  'AI & Machine Learning',
  'React & Frontend',
  'Presentation Design',
  '3D Creativity & Blender',
];

export default function OnboardingModal() {
  const {
    isOnboardingOpen,
    setIsOnboardingOpen,
    userProfile,
    updateUserProfile,
    addToast,
  } = useSkillSwap();

  const [name, setName] = useState(userProfile.name);
  const [university, setUniversity] = useState(userProfile.university);
  const [major, setMajor] = useState(userProfile.major);
  const [offered, setOffered] = useState<string[]>(userProfile.offeredSkills);
  const [wanted, setWanted] = useState<string[]>(userProfile.wantedSkills);
  const [customOffer, setCustomOffer] = useState('');
  const [customWant, setCustomWant] = useState('');

  if (!isOnboardingOpen) return null;

  const toggleOffered = (skill: string) => {
    if (offered.includes(skill)) {
      setOffered(offered.filter((s) => s !== skill));
    } else {
      setOffered([...offered, skill]);
    }
  };

  const toggleWanted = (skill: string) => {
    if (wanted.includes(skill)) {
      setWanted(wanted.filter((s) => s !== skill));
    } else {
      setWanted([...wanted, skill]);
    }
  };

  const handleAddCustomOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (customOffer.trim() && !offered.includes(customOffer.trim())) {
      setOffered([...offered, customOffer.trim()]);
      setCustomOffer('');
    }
  };

  const handleAddCustomWant = (e: React.FormEvent) => {
    e.preventDefault();
    if (customWant.trim() && !wanted.includes(customWant.trim())) {
      setWanted([...wanted, customWant.trim()]);
      setCustomWant('');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: name.trim() || 'Student Learner',
      university: university.trim() || 'Pacific Tech',
      major: major.trim() || 'Informatics',
      offeredSkills: offered.length > 0 ? offered : ['Python Fundamentals'],
      wantedSkills: wanted.length > 0 ? wanted : ['Figma UI/UX Design'],
    });

    setIsOnboardingOpen(false);

    // Scroll to reciprocal matching
    const el = document.getElementById('matching-engine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E9DDF3] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOnboardingOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl gradient-purple-pink text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-purple-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#29213B]">
            Join SkillSwap Free
          </h3>
          <p className="text-xs sm:text-sm text-[#777184] mt-1">
            Personalize your demo profile to discover peer matches for your university track.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Name & University */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-[#29213B] mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full text-xs p-2.5 rounded-xl bg-[#FBF6FF] border border-[#E9DDF3] focus:outline-none focus:border-[#A855F7]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#29213B] mb-1">
                College / University
              </label>
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                required
                className="w-full text-xs p-2.5 rounded-xl bg-[#FBF6FF] border border-[#E9DDF3] focus:outline-none focus:border-[#A855F7]"
              />
            </div>
          </div>

          {/* Skills I Can Teach */}
          <div className="p-4 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3]">
            <label className="block text-xs font-extrabold text-[#A855F7] uppercase tracking-wider mb-2">
              1. Skills You Can Teach (Select all that apply)
            </label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {commonOffered.map((sk) => {
                const isSelected = offered.includes(sk);
                return (
                  <button
                    key={sk}
                    type="button"
                    onClick={() => toggleOffered(sk)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#A855F7] text-white border-[#A855F7] shadow-xs'
                        : 'bg-white text-[#777184] border-[#E9DDF3] hover:border-[#C783F6]'
                    }`}
                  >
                    {isSelected && '✓ '}
                    {sk}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills I Want to Learn */}
          <div className="p-4 rounded-2xl bg-[#FFF5FA] border border-[#FFE1F2]">
            <label className="block text-xs font-extrabold text-[#F36CBF] uppercase tracking-wider mb-2">
              2. Skills You Want to Learn (Wishlist)
            </label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {commonWanted.map((sk) => {
                const isSelected = wanted.includes(sk);
                return (
                  <button
                    key={sk}
                    type="button"
                    onClick={() => toggleWanted(sk)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F36CBF] text-white border-[#F36CBF] shadow-xs'
                        : 'bg-white text-[#777184] border-[#FFE1F2] hover:border-[#F36CBF]'
                    }`}
                  >
                    {isSelected && '★ '}
                    {sk}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsOnboardingOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-[#E9DDF3] text-xs font-semibold text-[#777184] hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-7 py-3 rounded-full gradient-purple-pink text-white text-xs font-bold shadow-md hover:shadow-purple-500/25 hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Save & Find Reciprocal Matches
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
