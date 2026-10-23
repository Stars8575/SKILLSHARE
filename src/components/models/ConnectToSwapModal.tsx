import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowLeftRight,
  Sparkles,
  Calendar,
  Clock,
  Video,
  MapPin,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useSkillSwap } from '../../context/SkillSwapContext';

export default function ConnectToSwapModal() {
  const {
    activeSwapTarget,
    setActiveSwapTarget,
    userProfile,
    sendSwapRequest,
    hasSentRequestTo,
    addToast,
  } = useSkillSwap();

  if (!activeSwapTarget) return null;

  const recipient = activeSwapTarget;
  const alreadySent = hasSentRequestTo(recipient.id);

  // Default suggested skills based on overlap
  const defaultOfferSkill = userProfile.offeredSkills[0] || 'Python Fundamentals';
  const defaultRequestSkill = recipient.teachSkills[0]?.name || 'Figma UI/UX Design';

  const [mySkill, setMySkill] = useState(defaultOfferSkill);
  const [requestedSkill, setRequestedSkill] = useState(defaultRequestSkill);
  const [meetingFormat, setMeetingFormat] = useState<'Online (Zoom / Meet)' | 'On Campus (Library / Lab)'>('Online (Zoom / Meet)');
  const [durationMinutes, setDurationMinutes] = useState<30 | 45 | 60>(45);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Smart prefill message
  useEffect(() => {
    const firstName = recipient.name.split(' ')[0];
    setMessage(
      `Hi ${firstName}! I'd love to learn ${requestedSkill} from you. I can help you with ${mySkill} in return. Would you be interested in a skill swap session?`
    );
  }, [recipient, mySkill, requestedSkill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || message.length < 15) {
      setError('Please provide a message introducing yourself (at least 15 characters).');
      return;
    }

    const success = sendSwapRequest(
      recipient,
      mySkill,
      requestedSkill,
      meetingFormat,
      durationMinutes,
      message.trim()
    );

    if (success) {
      setIsSubmitted(true);
      // Trigger confetti if available
      try {
        import('canvas-confetti').then((confetti) => {
          confetti.default({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#A855F7', '#C783F6', '#F36CBF', '#FFE1F2'],
          });
        }).catch(() => {});
      } catch {}

      setTimeout(() => {
        setActiveSwapTarget(null);
      }, 1800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E9DDF3] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveSwapTarget(null)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-3xl gradient-purple-pink text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#29213B] mb-2">
              Swap Request Proposed!
            </h3>
            <p className="text-sm text-[#777184] max-w-md mx-auto mb-6">
              Your request was delivered to <strong className="text-[#29213B]">{recipient.name}</strong>.
              You can review and manage this proposal in your <strong>Dashboard</strong>.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-[#A855F7]">
              <Sparkles className="w-3.5 h-3.5" />
              Closing preview window...
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#E9DDF3]">
              <img
                src={recipient.avatar}
                alt={recipient.name}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#C783F6] shadow-xs"
              />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A855F7]">
                  PROPOSE PEER EXCHANGE
                </span>
                <h3 className="text-xl font-extrabold text-[#29213B]">
                  Connect with {recipient.name}
                </h3>
                <p className="text-xs text-[#777184]">
                  {recipient.major} • {recipient.university}
                </p>
              </div>
            </div>

            {/* Reciprocal Skills Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5 p-4 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3]">
              {/* You Teach */}
              <div>
                <label className="block text-[11px] font-bold text-[#A855F7] uppercase tracking-wider mb-1.5">
                  I will teach:
                </label>
                <select
                  value={mySkill}
                  onChange={(e) => setMySkill(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-[#E9DDF3] text-[#29213B] focus:outline-none focus:border-[#A855F7]"
                >
                  {userProfile.offeredSkills.map((sk) => (
                    <option key={sk} value={sk}>
                      {sk}
                    </option>
                  ))}
                </select>
              </div>

              {/* They Teach */}
              <div>
                <label className="block text-[11px] font-bold text-[#F36CBF] uppercase tracking-wider mb-1.5">
                  They will teach:
                </label>
                <select
                  value={requestedSkill}
                  onChange={(e) => setRequestedSkill(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-[#E9DDF3] text-[#29213B] focus:outline-none focus:border-[#F36CBF]"
                >
                  {recipient.teachSkills.map((sk) => (
                    <option key={sk.name} value={sk.name}>
                      {sk.name} ({sk.level})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Meeting Preference & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                {/* Format */}
                <div>
                  <label className="block text-xs font-bold text-[#29213B] mb-1.5">
                    Meeting Format
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setMeetingFormat('Online (Zoom / Meet)')}
                      className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        meetingFormat.startsWith('Online')
                          ? 'bg-purple-100 text-[#A855F7] border-purple-300 font-bold'
                          : 'bg-white text-[#777184] border-[#E9DDF3]'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      Online
                    </button>
                    <button
                      type="button"
                      onClick={() => setMeetingFormat('On Campus (Library / Lab)')}
                      className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        meetingFormat.startsWith('On Campus')
                          ? 'bg-purple-100 text-[#A855F7] border-purple-300 font-bold'
                          : 'bg-white text-[#777184] border-[#E9DDF3]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Campus
                    </button>
                  </div>
                </div>

                {/* Session Duration */}
                <div>
                  <label className="block text-xs font-bold text-[#29213B] mb-1.5">
                    Session Duration
                  </label>
                  <div className="flex gap-2">
                    {[30, 45, 60].map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        onClick={() => setDurationMinutes(mins as any)}
                        className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                          durationMinutes === mins
                            ? 'bg-purple-100 text-[#A855F7] border-purple-300 font-bold'
                            : 'bg-white text-[#777184] border-[#E9DDF3]'
                        }`}
                      >
                        {mins}m
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-[#29213B] mb-1.5 flex items-center justify-between">
                  <span>Introduction Message</span>
                  <span className="text-[10px] text-[#777184]">Editable preview</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full p-3 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] text-xs text-[#29213B] focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/15 leading-relaxed"
                />
                {error && (
                  <p className="text-xs text-red-500 font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {error}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSwapTarget(null)}
                  className="px-4 py-2.5 rounded-xl border border-[#E9DDF3] text-xs font-semibold text-[#777184] hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={alreadySent}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer flex items-center gap-1.5 ${
                    alreadySent
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed shadow-none'
                      : 'gradient-purple-pink text-white hover:shadow-purple-500/30 hover:scale-[1.02]'
                  }`}
                >
                  {alreadySent ? (
                    'Request Already Sent'
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      Send Swap Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
