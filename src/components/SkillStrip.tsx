import React from 'react';
import { Code, Palette, Lightbulb, MessageSquare, Cpu, Video, Sparkles, BookOpen } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';
import { SkillCategory } from '../types';

interface StripItem {
  name: string;
  category: SkillCategory;
  icon: React.FC<{ className?: string }>;
  count: string;
}

const stripItems: StripItem[] = [
  { name: 'Programming', category: 'Programming', icon: Code, count: '140+ mentors' },
  { name: 'UI/UX Design', category: 'UI/UX Design', icon: Palette, count: '115+ mentors' },
  { name: 'Creativity', category: 'Graphic Design', icon: Lightbulb, count: '90+ mentors' },
  { name: 'Communication', category: 'Public Speaking', icon: MessageSquare, count: '85+ mentors' },
  { name: 'AI & Technology', category: 'AI & Machine Learning', icon: Cpu, count: '75+ mentors' },
  { name: 'Video Production', category: 'Video Editing', icon: Video, count: '65+ mentors' },
  { name: 'Presentation Design', category: 'Presentation Design', icon: Sparkles, count: '50+ mentors' },
  { name: 'Photography', category: 'Photography', icon: BookOpen, count: '45+ mentors' },
];

export default function SkillStrip() {
  const { setSelectedCategory } = useSkillSwap();

  const handleCategoryClick = (category: SkillCategory) => {
    setSelectedCategory(category);
    const el = document.getElementById('explore-skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full gradient-purple-pink py-5 sm:py-6 shadow-md text-white overflow-hidden relative">
      {/* Background subtle diagonal texture lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          {stripItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(item.category)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/12 hover:bg-white/25 border border-white/20 backdrop-blur-xs transition-all duration-200 cursor-pointer shrink-0 group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 group-hover:bg-white text-white group-hover:text-[#A855F7] flex items-center justify-center transition-colors shadow-2xs">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide block leading-tight whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-white/75 font-medium block whitespace-nowrap">
                    {item.count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
