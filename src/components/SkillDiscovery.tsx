import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
  Star,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';
import { SkillCategory, Student } from '../types';

const categories: SkillCategory[] = [
  'All Skills',
  'Programming',
  'UI/UX Design',
  'Graphic Design',
  'Video Editing',
  'Public Speaking',
  'Presentation Design',
  'Photography',
  'AI & Machine Learning',
];

const searchSuggestions = [
  'Python',
  'Figma',
  'Video Editing',
  'Public Speaking',
  'React',
  'Prompt Engineering',
  'Lightroom',
  'Pitch Decks',
];

export default function SkillDiscovery() {
  const {
    filteredStudents,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    experienceFilter,
    setExperienceFilter,
    availabilityFilter,
    setAvailabilityFilter,
    sortBy,
    setSortBy,
    clearFilters,
    setActiveStudentProfile,
    setActiveSwapTarget,
    hasSentRequestTo,
  } = useSkillSwap();

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <section id="explore-skills" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#A855F7] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            FIND YOUR PEOPLE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29213B] tracking-tight leading-tight mb-4">
            Learn from others.{' '}
            <span className="gradient-text-purple-pink">Share what you know.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#777184] leading-relaxed">
            Discover a community of students with skills to share and new skills to explore.
            Connect directly and start trading knowledge.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="max-w-4xl mx-auto mb-10">
          {/* Main Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#777184]" />
            <input
              type="text"
              placeholder="Search by skill name, software, major, or student interest..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] text-sm sm:text-base text-[#29213B] placeholder-[#777184]/70 shadow-xs focus:outline-none focus:border-[#A855F7] focus:ring-4 focus:ring-[#A855F7]/15 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#E9DDF3] text-[#777184] flex items-center justify-center hover:bg-[#C783F6] hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Search Suggestions Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-4 text-xs">
            <span className="text-[#777184] font-medium shrink-0">Popular:</span>
            {searchSuggestions.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={`px-3 py-1 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? 'bg-[#A855F7] text-white border-[#A855F7]'
                    : 'bg-white text-[#777184] border-[#E9DDF3] hover:border-[#C783F6] hover:text-[#A855F7]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'gradient-purple-pink text-white shadow-md shadow-purple-500/20 scale-[1.02]'
                      : 'bg-[#FBF6FF] text-[#29213B] border border-[#E9DDF3] hover:bg-white hover:border-[#C783F6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort & Advanced Filters Toggle Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E9DDF3] text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#29213B]">
                Showing <span className="text-[#A855F7] font-bold">{filteredStudents.length}</span> students
              </span>

              {(searchQuery || selectedCategory !== 'All Skills' || experienceFilter !== 'All' || availabilityFilter !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="text-[#F36CBF] hover:text-[#EC4899] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear all filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              {/* Sort selector */}
              <div className="flex items-center gap-1.5 bg-[#FBF6FF] border border-[#E9DDF3] rounded-lg px-2.5 py-1.5">
                <span className="text-[#777184]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-semibold text-[#29213B] focus:outline-none cursor-pointer text-xs"
                >
                  <option value="recommended">Recommended</option>
                  <option value="rating">Highest Rated</option>
                  <option value="swaps">Most Swaps</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>

              {/* Advanced Toggle */}
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer ${
                  showAdvancedFilters
                    ? 'bg-purple-100 text-[#A855F7] border-purple-300'
                    : 'bg-[#FBF6FF] text-[#777184] border-[#E9DDF3] hover:text-[#29213B]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                More filters
              </button>
            </div>
          </div>

          {/* Collapsible Advanced Filters */}
          {showAdvancedFilters && (
            <div className="mt-3 p-4 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3] grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
              <div>
                <label className="block text-xs font-bold text-[#29213B] mb-1.5">
                  Experience Level
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['All', 'Beginner', 'Intermediate', 'Advanced', 'Peer Guide'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setExperienceFilter(lvl)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        experienceFilter === lvl
                          ? 'bg-[#A855F7] text-white border-[#A855F7]'
                          : 'bg-white text-[#777184] border-[#E9DDF3] hover:border-[#C783F6]'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#29213B] mb-1.5">
                  Availability
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['All', 'Available this week', 'Weekends only', 'Flexible hours'].map((avail) => (
                    <button
                      key={avail}
                      onClick={() => setAvailabilityFilter(avail)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        availabilityFilter === avail
                          ? 'bg-[#A855F7] text-white border-[#A855F7]'
                          : 'bg-white text-[#777184] border-[#E9DDF3] hover:border-[#C783F6]'
                      }`}
                    >
                      {avail}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Student Cards Grid */}
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStudents.map((student) => {
              const alreadySent = hasSentRequestTo(student.id);

              return (
                <div
                  key={student.id}
                  className="rounded-3xl bg-white border border-[#E9DDF3] p-6 shadow-sm hover:shadow-xl hover:border-[#C783F6] transition-all duration-300 flex flex-col justify-between group card-hover-effect"
                >
                  <div>
                    {/* Top Row: Avatar, Name, Rating & Availability */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={student.avatar}
                            alt={student.name}
                            className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#E9DDF3] group-hover:ring-[#C783F6] transition-all shadow-xs"
                          />
                          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                        </div>
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

                      {/* Rating Badge */}
                      <div className="flex items-center gap-1 bg-[#FBF6FF] px-2.5 py-1 rounded-xl border border-[#E9DDF3]">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                        <span className="text-xs font-bold text-[#29213B]">{student.rating}</span>
                      </div>
                    </div>

                    {/* Short Bio */}
                    <p className="text-xs text-[#777184] line-clamp-2 leading-relaxed mb-4">
                      "{student.bio}"
                    </p>

                    {/* Can Teach Skills Tag Box */}
                    <div className="mb-3 p-3 rounded-2xl bg-[#FBF6FF] border border-[#E9DDF3]/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A855F7] block mb-1.5">
                        Can Teach
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {student.teachSkills.map((sk, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-white border border-[#E9DDF3] text-xs font-semibold text-[#29213B] shadow-2xs"
                          >
                            {sk.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Wants to Learn Skills Tag Box */}
                    <div className="mb-4 p-3 rounded-2xl bg-[#FFF5FA] border border-[#FFE1F2]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F36CBF] block mb-1.5">
                        Wants to Learn
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {student.wantSkills.map((sk, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-white border border-[#FFE1F2] text-xs font-medium text-[#29213B]"
                          >
                            {sk.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Swaps & Availability Mini Indicators */}
                    <div className="flex items-center justify-between text-[11px] text-[#777184] font-medium pb-4 border-b border-[#E9DDF3]">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        {student.swapsCompleted} swaps completed
                      </span>
                      <span className="flex items-center gap-1 text-[#29213B] bg-purple-50 px-2 py-0.5 rounded-md">
                        <Clock className="w-3 h-3 text-[#A855F7]" />
                        {student.availability}
                      </span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => setActiveStudentProfile(student)}
                      className="py-2.5 px-3 rounded-xl bg-white border border-[#E9DDF3] hover:border-[#C783F6] hover:bg-purple-50/50 text-xs font-bold text-[#29213B] transition-colors cursor-pointer text-center"
                    >
                      View Profile
                    </button>

                    <button
                      onClick={() => setActiveSwapTarget(student)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 shadow-xs ${
                        alreadySent
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : 'gradient-purple-pink text-white hover:shadow-purple-500/25 hover:scale-[1.02]'
                      }`}
                    >
                      {alreadySent ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" />
                          Request Sent
                        </>
                      ) : (
                        <>
                          Connect to Swap
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-[#A855F7] flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#29213B] mb-2">No students found</h3>
            <p className="text-sm text-[#777184] mb-6">
              We couldn't find any students matching "{searchQuery}" with the current filters. Try searching for "Python", "Figma", or reset your filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-full gradient-purple-pink text-white font-bold text-xs shadow-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
