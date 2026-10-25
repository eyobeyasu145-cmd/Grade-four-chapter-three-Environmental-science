import React, { useState } from 'react';
import { SectionId } from './types';
import { Header } from './components/Header';
import { NotesSection } from './components/NotesSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ClimateZoneExplorer } from './components/ClimateZoneExplorer';
import { WasteSortGame } from './components/WasteSortGame';
import { FlashcardsSection } from './components/FlashcardsSection';
import { ExamSection } from './components/ExamSection';
import { ConceptExplainerStudio } from './components/ConceptExplainerStudio';
import { SummaryPrintable } from './components/SummaryPrintable';
import { PdfViewerModal } from './components/PdfViewerModal';
import {
  BookOpen,
  Calculator,
  Award,
  Trash2,
  Mountain,
  BookmarkCheck,
  Heart,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('notes');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Top Navigation */}
      <Header
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8">
        {activeSection === 'notes' && <NotesSection />}
        {activeSection === 'diagrams' && <ConceptExplainerStudio />}
        {activeSection === 'calculator' && <CalculatorSection />}
        {activeSection === 'climate' && <ClimateZoneExplorer />}
        {activeSection === 'waste-game' && <WasteSortGame />}
        {activeSection === 'flashcards' && <FlashcardsSection />}
        {activeSection === 'exam' && <ExamSection />}
        {activeSection === 'cheat-sheet' && <SummaryPrintable />}
        {activeSection === 'pdf' && <PdfViewerModal />}

        {/* Quick Route Cards for seamless learning discovery */}
        {activeSection === 'notes' && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="font-extrabold text-slate-900 text-lg">
                ቀጣይ የመማሪያ ደረጃዎች (Recommended Next Steps)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              <button
                onClick={() => { setActiveSection('diagrams'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="p-4 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-2xl text-left transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">ስዕላዊ ማብራሪያና 5 MCQs</div>
                <div className="text-xs text-slate-500 mt-1">የተብራሩ ስዕሎችና ምሳሌዎች</div>
                <div className="mt-3 text-xs font-bold text-indigo-600 flex items-center gap-1">
                  እይ <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={() => { setActiveSection('calculator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="p-4 bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 rounded-2xl text-left transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Calculator className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">የሙቀት ስሌት ልምምድ</div>
                <div className="text-xs text-slate-500 mt-1">አማካይና ልዩነትን እራስህ አስላ</div>
                <div className="mt-3 text-xs font-bold text-orange-600 flex items-center gap-1">
                  አስላ <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={() => { setActiveSection('climate'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="p-4 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-2xl text-left transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Mountain className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">5ቱ የአየር ንብረት ክልሎች</div>
                <div className="text-xs text-slate-500 mt-1">የድሬዳዋና ቁሉቢ ልዩነት</div>
                <div className="mt-3 text-xs font-bold text-teal-600 flex items-center gap-1">
                  ተመልከት <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={() => { setActiveSection('waste-game'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="p-4 bg-white hover:bg-green-50 border border-slate-200 hover:border-green-300 rounded-2xl text-left transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">የቆሻሻ መለያ ጨዋታ</div>
                <div className="text-xs text-slate-500 mt-1">ቆሻሻን በትክክለኛው ገንዳ ለይ</div>
                <div className="mt-3 text-xs font-bold text-green-600 flex items-center gap-1">
                  ተጫወት <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={() => { setActiveSection('exam'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="p-4 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-2xl text-left transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">የፈተና ጥያቄዎች (21 ጥያቄ)</div>
                <div className="text-xs text-slate-500 mt-1">እውነት/ሐሰት፣ ምርጫና ማዛመጃ</div>
                <div className="mt-3 text-xs font-bold text-blue-600 flex items-center gap-1">
                  ተፈተን <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <span className="font-bold text-slate-700">የ 4ኛ ክፍል አካባቢ ሳይንስ • ምዕራፍ 3</span> — የተፈጥሮ አካባቢያችን
          </div>
          <div className="flex items-center gap-1">
            <span>ለተማሪዎች ጥናትና ለፈተና ስኬት በጥንቃቄ የተዘጋጀ</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </footer>
    </div>
  );
}
