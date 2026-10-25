import React from 'react';
import { SectionId } from '../types';
import {
  BookOpen,
  Calculator,
  Mountain,
  Trash2,
  BookmarkCheck,
  Award,
  Printer,
  FileText,
  Sparkles,
  GraduationCap
} from 'lucide-react';

interface HeaderProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onSelectSection }) => {
  const navItems: { id: SectionId; label: string; english: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'notes', label: 'ማስታወሻዎች', english: 'Notes & Examples', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'diagrams', label: 'ስዕላዊ ማብራሪያ', english: 'Diagrams & 5 MCQs', icon: <Sparkles className="w-4 h-4 text-amber-400" />, badge: '5 ምሳሌዎች' },
    { id: 'calculator', label: 'የሙቀት ስሌት', english: 'Calculator', icon: <Calculator className="w-4 h-4" />, badge: 'ስሌት' },
    { id: 'climate', label: '5ቱ ክልሎች', english: 'Climate Zones', icon: <Mountain className="w-4 h-4" /> },
    { id: 'waste-game', label: 'የቆሻሻ ጨዋታ', english: 'Waste Game', icon: <Trash2 className="w-4 h-4" />, badge: 'ጨዋታ' },
    { id: 'flashcards', label: 'ካርዶች', english: 'Flashcards', icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 'exam', label: 'ፈተናዎች', english: 'Exam Practice', icon: <Award className="w-4 h-4" />, badge: '21 ጥያቄዎች' },
    { id: 'cheat-sheet', label: 'ማጠቃለያ', english: 'Cheat Sheet', icon: <Printer className="w-4 h-4" /> },
    { id: 'pdf', label: 'ኦሪጅናል PDF', english: 'Textbook PDF', icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  4ኛ ክፍል
                </span>
                <span className="text-xs font-bold text-slate-500">አካባቢ ሳይንስ ምዕራፍ 3</span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                የተፈጥሮ አካባቢያችን (Our Natural Environment)
              </h1>
            </div>
          </div>

          {/* Quick Stat / Motivator */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>ለፈተና ዝግጁ የሚያደርግ የተሟላ የጥናት መመሪያ</span>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-500'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
