import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowLeftRight, User, Bell, Sparkles } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';

export default function Navbar() {
  const {
    userProfile,
    setIsOnboardingOpen,
    setIsDashboardOpen,
    swapRequests,
    setSearchQuery,
  } = useSkillSwap();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [navSearchInput, setNavSearchInput] = useState('');

  const pendingRequestsCount = swapRequests.filter((r) => r.status === 'pending').length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchInput.trim()) {
      setSearchQuery(navSearchInput.trim());
      scrollTo('explore-skills');
      setQuickSearchOpen(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-[#E9DDF3]'
            : 'bg-[#FBF6FF]/95 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Left: Brand Logo & Title */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
            aria-label="SkillSwap Home"
          >
            <div className="w-10 h-10 rounded-xl gradient-purple-pink flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#29213B] flex items-center gap-1">
                Skill<span className="gradient-text-purple-pink font-extrabold">Swap</span>
                <span className="w-2 h-2 rounded-full bg-[#F36CBF]" />
              </span>
              <span className="text-[10px] font-medium text-[#777184] -mt-1 hidden sm:block">
                Peer-to-Peer Learning
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => scrollTo('hero')}
              className="px-3 py-2 text-sm font-semibold text-[#29213B] hover:text-[#A855F7] rounded-lg hover:bg-purple-50/60 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('explore-skills')}
              className="px-3 py-2 text-sm font-semibold text-[#777184] hover:text-[#A855F7] rounded-lg hover:bg-purple-50/60 transition-colors cursor-pointer"
            >
              Explore Skills
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="px-3 py-2 text-sm font-semibold text-[#777184] hover:text-[#A855F7] rounded-lg hover:bg-purple-50/60 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('learning-paths')}
              className="px-3 py-2 text-sm font-semibold text-[#777184] hover:text-[#A855F7] rounded-lg hover:bg-purple-50/60 transition-colors cursor-pointer"
            >
              Learning Paths
            </button>
            <button
              onClick={() => scrollTo('community')}
              className="px-3 py-2 text-sm font-semibold text-[#777184] hover:text-[#A855F7] rounded-lg hover:bg-purple-50/60 transition-colors cursor-pointer"
            >
              Community
            </button>
          </nav>

          {/* Right: Actions, Search, Dashboard & Join CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => {
                setQuickSearchOpen(!quickSearchOpen);
                if (!quickSearchOpen) scrollTo('explore-skills');
              }}
              className="w-9 h-9 rounded-full bg-white border border-[#E9DDF3] text-[#777184] hover:text-[#A855F7] hover:border-[#C783F6] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              title="Search skills & mentors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dashboard / Profile Button */}
            <button
              onClick={() => setIsDashboardOpen(true)}
              className="relative flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white border border-[#E9DDF3] hover:border-[#C783F6] text-xs font-semibold text-[#29213B] shadow-2xs transition-all cursor-pointer hover:shadow-xs"
              title="Open Student Dashboard"
            >
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-6 h-6 rounded-full object-cover border border-[#E9DDF3]"
              />
              <span className="hidden sm:inline font-medium">{userProfile.name.split(' ')[0]}</span>
              {pendingRequestsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#F36CBF] text-white text-[10px] font-bold flex items-center justify-center">
                  {pendingRequestsCount}
                </span>
              )}
            </button>

            {/* Join For Free Button (Purple-to-Pink gradient) */}
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-4.5 py-2 rounded-full gradient-purple-pink text-white text-sm font-bold shadow-md shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Join for Free
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white border border-[#E9DDF3] text-[#29213B] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown Bar */}
        {quickSearchOpen && (
          <div className="border-t border-[#E9DDF3] bg-white/95 backdrop-blur-md px-4 py-3 shadow-inner">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777184]" />
                <input
                  type="text"
                  placeholder="Search by skill (e.g. Python, Figma, Video Editing, Public Speaking)..."
                  value={navSearchInput}
                  onChange={(e) => setNavSearchInput(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-[#FBF6FF] border border-[#E9DDF3] focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all text-[#29213B]"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl gradient-purple-pink text-white text-xs font-bold cursor-pointer hover:opacity-95"
              >
                Find Peers
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/30 backdrop-blur-xs flex justify-end">
          <div className="w-[280px] h-full bg-white p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E9DDF3]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-purple-pink flex items-center justify-center text-white">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#29213B]">SkillSwap</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-2 mt-6">
                <button
                  onClick={() => scrollTo('hero')}
                  className="text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-[#29213B] hover:bg-[#FBF6FF]"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollTo('explore-skills')}
                  className="text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-[#777184] hover:bg-[#FBF6FF]"
                >
                  Explore Skills
                </button>
                <button
                  onClick={() => scrollTo('matching-engine')}
                  className="text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-[#777184] hover:bg-[#FBF6FF]"
                >
                  Smart Matching
                </button>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-[#777184] hover:bg-[#FBF6FF]"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollTo('learning-paths')}
                  className="text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-[#777184] hover:bg-[#FBF6FF]"
                >
                  Learning Paths
                </button>
                <button
                  onClick={() => scrollTo('community')}
                  className="text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-[#777184] hover:bg-[#FBF6FF]"
                >
                  Community & Projects
                </button>
                <button
                  onClick={() => scrollTo('faq')}
                  className="text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-[#777184] hover:bg-[#FBF6FF]"
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-4 border-t border-[#E9DDF3] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDashboardOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-[#E9DDF3] font-semibold text-xs text-[#29213B] flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-[#A855F7]" />
                My Dashboard ({swapRequests.length} swaps)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsOnboardingOpen(true);
                }}
                className="w-full py-3 rounded-xl gradient-purple-pink text-white font-bold text-sm shadow-md shadow-purple-500/20 text-center"
              >
                Join for Free
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
