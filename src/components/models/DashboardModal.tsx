import React, { useState } from 'react';
import {
  X,
  User,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  RotateCcw,
  BookOpen,
  Calendar,
  Layers,
  Award,
  Video,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { useSkillSwap } from '../../context/SkillSwapContext';

export default function DashboardModal() {
  const {
    isDashboardOpen,
    setIsDashboardOpen,
    userProfile,
    updateUserProfile,
    addOfferedSkill,
    removeOfferedSkill,
    addWantedSkill,
    removeWantedSkill,
    resetDemoData,
    swapRequests,
    updateSwapRequestStatus,
    learningPaths,
    reciprocalMatches,
    setActiveSwapTarget,
  } = useSkillSwap();

  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'requests' | 'paths'>('overview');
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(userProfile.name);
  const [editedBio, setEditedBio] = useState(userProfile.bio);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [newOfferText, setNewOfferText] = useState('');
  const [newWantText, setNewWantText] = useState('');

  if (!isDashboardOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: editedName.trim() || userProfile.name,
      bio: editedBio.trim() || userProfile.bio,
    });
    setIsEditingName(false);
  };

  const handleAddOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newOfferText.trim()) {
      addOfferedSkill(newOfferText.trim());
      setNewOfferText('');
    }
  };

  const handleAddWant = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWantText.trim()) {
      addWantedSkill(newWantText.trim());
      setNewWantText('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#E9DDF3] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setIsDashboardOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Profile Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E9DDF3]">
          <div className="flex items-center gap-4">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#C783F6] shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#29213B]">
                  {userProfile.name}
                </h3>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-[#A855F7]">
                  Preview Account
                </span>
              </div>
              <p className="text-xs text-[#777184] mt-0.5">
                {userProfile.major} • {userProfile.university}
              </p>
              <div className="flex items-center gap-3 text-xs text-[#777184] mt-1.5 font-medium">
                <span>⭐ {userProfile.rating} Rating</span>
                <span>•</span>
                <span>{swapRequests.length} Total Swaps</span>
                <span>•</span>
                <span>{userProfile.hoursExchanged} hrs exchanged</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={() => setIsEditingName(!isEditingName)}
              className="px-3 py-1.5 rounded-xl border border-[#E9DDF3] text-xs font-bold text-[#29213B] hover:bg-[#FBF6FF] cursor-pointer"
            >
              {isEditingName ? 'Cancel' : 'Edit Profile'}
            </button>
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-3 py-1.5 rounded-xl border border-red-200 text-xs font-bold text-red-600 hover:bg-red-50 cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Demo
            </button>
          </div>
        </div>

        {/* Reset Confirmation Dialog */}
        {showResetConfirm && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 animate-in fade-in">
            <h4 className="text-xs font-bold text-red-800 mb-1">
              Reset Demo Data to Initial Defaults?
            </h4>
            <p className="text-xs text-red-600 mb-3">
              This will restore the initial offered skills, wanted skills, swap proposals, and learning path progress.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  resetDemoData();
                  setShowResetConfirm(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold cursor-pointer"
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3 py-1.5 rounded-lg bg-white border border-red-200 text-xs font-semibold text-gray-700 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Inline Profile Editor */}
        {isEditingName && (
          <form onSubmit={handleSaveProfile} className="mb-6 p-4 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] space-y-3">
            <div>
              <label className="block text-xs font-bold text-[#29213B] mb-1">Full Name</label>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="w-full text-xs p-2 rounded-xl bg-white border border-[#E9DDF3]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#29213B] mb-1">Bio</label>
              <textarea
                rows={2}
                value={editedBio}
                onChange={(e) => setEditedBio(e.target.value)}
                className="w-full text-xs p-2 rounded-xl bg-white border border-[#E9DDF3]"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsEditingName(false)}
                className="px-3 py-1.5 rounded-xl border border-gray-300 text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl gradient-purple-pink text-white text-xs font-bold"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#E9DDF3] mb-6 overflow-x-auto no-scrollbar pb-1 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#A855F7] text-[#A855F7]'
                : 'border-transparent text-[#777184] hover:text-[#29213B]'
            }`}
          >
            Overview & Activity
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'skills'
                ? 'border-[#A855F7] text-[#A855F7]'
                : 'border-transparent text-[#777184] hover:text-[#29213B]'
            }`}
          >
            My Skills & Wishlist ({userProfile.offeredSkills.length + userProfile.wantedSkills.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'requests'
                ? 'border-[#A855F7] text-[#A855F7]'
                : 'border-transparent text-[#777184] hover:text-[#29213B]'
            }`}
          >
            Swap Proposals ({swapRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('paths')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'paths'
                ? 'border-[#A855F7] text-[#A855F7]'
                : 'border-transparent text-[#777184] hover:text-[#29213B]'
            }`}
          >
            Learning Track Progress
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] text-center">
                <span className="text-[11px] font-semibold text-[#777184] block">Skills Offered</span>
                <span className="text-xl font-extrabold text-[#A855F7]">{userProfile.offeredSkills.length}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FFF5FA] border border-[#FFE1F2] text-center">
                <span className="text-[11px] font-semibold text-[#777184] block">Skills Wanted</span>
                <span className="text-xl font-extrabold text-[#F36CBF]">{userProfile.wantedSkills.length}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] text-center">
                <span className="text-[11px] font-semibold text-[#777184] block">Active Requests</span>
                <span className="text-xl font-extrabold text-[#29213B]">
                  {swapRequests.filter((r) => r.status === 'pending').length}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] text-center">
                <span className="text-[11px] font-semibold text-[#777184] block">Perfect Matches</span>
                <span className="text-xl font-extrabold text-emerald-600">
                  {reciprocalMatches.filter((m) => m.matchType === 'perfect').length}
                </span>
              </div>
            </div>

            {/* Reciprocal Matches Preview */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider">
                  Top Recommended Peer Swaps
                </h4>
                <button
                  onClick={() => {
                    setIsDashboardOpen(false);
                    const el = document.getElementById('matching-engine');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#A855F7] hover:underline"
                >
                  View all matches →
                </button>
              </div>

              <div className="space-y-2.5">
                {reciprocalMatches.slice(0, 3).map((m) => (
                  <div
                    key={m.student.id}
                    className="p-3.5 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={m.student.avatar}
                        alt={m.student.name}
                        className="w-10 h-10 rounded-xl object-cover ring-1 ring-purple-300"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#29213B]">{m.student.name}</span>
                          {m.matchType === 'perfect' && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                              Perfect Swap
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#777184]">
                          {m.reason}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setIsDashboardOpen(false);
                        setActiveSwapTarget(m.student);
                      }}
                      className="px-3 py-1.5 rounded-xl gradient-purple-pink text-white text-xs font-bold cursor-pointer"
                    >
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity Timeline */}
            <div>
              <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider mb-3">
                Recent Activity
              </h4>
              <div className="space-y-2 text-xs text-[#777184]">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#E9DDF3]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Proposed skill swap to <strong>Maya Lin</strong> (Python ⇄ Figma UI)</span>
                  <span className="ml-auto text-[10px] text-gray-400">2d ago</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#E9DDF3]">
                  <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                  <span>Completed module <strong>Tailwind CSS Utility Classes</strong></span>
                  <span className="ml-auto text-[10px] text-gray-400">3d ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SKILLS & WISHLIST */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            {/* Skills I Offer */}
            <div className="p-5 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3]">
              <h4 className="text-xs font-extrabold text-[#A855F7] uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Skills I Offer to Teach</span>
                <span className="text-[#777184] font-normal">{userProfile.offeredSkills.length} active</span>
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {userProfile.offeredSkills.map((sk) => (
                  <span
                    key={sk}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E9DDF3] text-xs font-semibold text-[#29213B] shadow-2xs"
                  >
                    {sk}
                    <button
                      onClick={() => removeOfferedSkill(sk)}
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>

              <form onSubmit={handleAddOffer} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a new skill you can teach (e.g. Next.js, Notion, Logic)..."
                  value={newOfferText}
                  onChange={(e) => setNewOfferText(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-[#E9DDF3] focus:outline-none focus:border-[#A855F7]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl gradient-purple-pink text-white text-xs font-bold cursor-pointer"
                >
                  Add Skill
                </button>
              </form>
            </div>

            {/* Skills I Want */}
            <div className="p-5 rounded-2xl bg-[#FFF5FA] border border-[#FFE1F2]">
              <h4 className="text-xs font-extrabold text-[#F36CBF] uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Skills I Want to Learn (Wishlist)</span>
                <span className="text-[#777184] font-normal">{userProfile.wantedSkills.length} active</span>
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {userProfile.wantedSkills.map((sk) => (
                  <span
                    key={sk}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#FFE1F2] text-xs font-semibold text-[#29213B] shadow-2xs"
                  >
                    {sk}
                    <button
                      onClick={() => removeWantedSkill(sk)}
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>

              <form onSubmit={handleAddWant} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a skill you wish to learn (e.g. 3D Blender, Pitching)..."
                  value={newWantText}
                  onChange={(e) => setNewWantText(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-[#FFE1F2] focus:outline-none focus:border-[#F36CBF]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#F36CBF] hover:bg-[#EC4899] text-white text-xs font-bold cursor-pointer"
                >
                  Add to Wishlist
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: PROPOSALS & REQUESTS */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            {swapRequests.length === 0 ? (
              <p className="text-center text-xs text-[#777184] py-8">
                No swap requests yet. Visit the directory and click "Connect to Swap" on any student!
              </p>
            ) : (
              swapRequests.map((req) => (
                <div
                  key={req.id}
                  className="p-4 rounded-2xl bg-white border border-[#E9DDF3] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={req.recipientAvatar}
                      alt={req.recipientName}
                      className="w-12 h-12 rounded-xl object-cover ring-1 ring-purple-200"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-sm text-[#29213B]">{req.recipientName}</h5>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            req.status === 'accepted'
                              ? 'bg-emerald-100 text-emerald-700'
                              : req.status === 'pending'
                              ? 'bg-amber-100 text-amber-700'
                              : req.status === 'completed'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {req.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-[#777184] mt-0.5">
                        Exchange: You teach <strong>{req.myOfferedSkill}</strong> ⇄ They teach{' '}
                        <strong>{req.requestedSkill}</strong>
                      </p>
                      <p className="text-[11px] text-[#777184] mt-1 italic">
                        "{req.message}"
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-2">
                        <span>{req.meetingFormat}</span>
                        <span>•</span>
                        <span>{req.durationMinutes} mins</span>
                        <span>•</span>
                        <span>{req.createdAt}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions to simulate response */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    {req.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateSwapRequestStatus(req.id, 'accepted')}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateSwapRequestStatus(req.id, 'declined')}
                          className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold cursor-pointer"
                        >
                          Decline
                        </button>
                      </>
                    )}

                    {req.status === 'accepted' && (
                      <button
                        onClick={() => updateSwapRequestStatus(req.id, 'completed')}
                        className="px-3 py-1.5 rounded-lg gradient-purple-pink text-white text-xs font-bold cursor-pointer"
                      >
                        Mark Completed
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 4: LEARNING PATHS PROGRESS */}
        {activeTab === 'paths' && (
          <div className="space-y-4">
            {learningPaths.map((path) => {
              const total = path.modules.length;
              const completed = path.modules.filter((m) => m.completed).length;
              const percent = Math.round((completed / total) * 100);

              return (
                <div
                  key={path.id}
                  className="p-4 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] flex items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h5 className="font-bold text-sm text-[#29213B]">{path.title}</h5>
                      <span className="text-xs font-bold text-[#A855F7]">{percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white border border-[#E9DDF3] overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full gradient-purple-pink"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-[#777184]">
                      {completed} of {total} checkpoints completed
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="pt-6 border-t border-[#E9DDF3] flex justify-end">
          <button
            onClick={() => setIsDashboardOpen(false)}
            className="px-6 py-2.5 rounded-full gradient-purple-pink text-white text-xs font-bold shadow-md cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
