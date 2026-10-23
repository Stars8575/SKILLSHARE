import React, { useState } from 'react';
import { ArrowLeftRight, Heart, Sparkles, Send, Check } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';

export default function Footer() {
  const { addToast } = useSkillSwap();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      addToast('Subscribed!', `Updates will be simulated to ${newsletterEmail}`, 'success');
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-[#E9DDF3] pt-16 pb-12 text-[#29213B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E9DDF3]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2.5 mb-4 group cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl gradient-purple-pink flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#29213B] flex items-center gap-1">
                Skill<span className="gradient-text-purple-pink font-extrabold">Swap</span>
                <span className="w-2 h-2 rounded-full bg-[#F36CBF]" />
              </span>
            </button>

            <p className="text-xs sm:text-sm text-[#777184] leading-relaxed mb-6 max-w-sm">
              The peer-to-peer student skill exchange platform. Trade Python for Figma, video editing for public speaking, and grow together without course fees.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#A855F7] bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              Built for university peer learning
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#777184]">
              <li>
                <button
                  onClick={() => scrollTo('explore-skills')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  Explore Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('matching-engine')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  Reciprocal Matching
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('learning-paths')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  Learning Paths
                </button>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#777184]">
              <li>
                <button
                  onClick={() => scrollTo('community')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  Student Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  Frequently Asked
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  Campus Guidelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  Peer Mentors
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Mock Campus Updates */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold text-[#29213B] uppercase tracking-wider mb-2">
              Campus Swap Digest
            </h4>
            <p className="text-xs text-[#777184] mb-4">
              Get weekly curated skill swap pairings and popular hackathon collaboration requests.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter university email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FBF6FF] border border-[#E9DDF3] text-xs text-[#29213B] focus:outline-none focus:border-[#A855F7]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl gradient-purple-pink text-white text-xs font-bold cursor-pointer hover:opacity-95 flex items-center gap-1 shadow-xs"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                {subscribed ? 'Joined' : 'Join'}
              </button>
            </form>
            <span className="text-[10px] text-[#777184]/70 mt-2 block">
              Frontend demo simulation. No emails sent.
            </span>
          </div>

        </div>

        {/* Bottom copyright & Privacy demo note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777184] gap-4">
          <p>© {new Date().getFullYear()} SkillSwap Platform. Frontend Peer-to-Peer Learning Demo.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo('faq')}
              className="hover:text-[#A855F7] transition-colors cursor-pointer"
            >
              Privacy Demo
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="hover:text-[#A855F7] transition-colors cursor-pointer"
            >
              Terms of Exchange
            </button>
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-[#A855F7] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
