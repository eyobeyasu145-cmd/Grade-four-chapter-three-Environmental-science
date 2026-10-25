import React, { useState } from 'react';
import { FLASHCARDS_DATA } from '../data/chapterContent';
import { RotateCw, CheckCircle2, ChevronLeft, ChevronRight, Shuffle, BookmarkCheck } from 'lucide-react';

export const FlashcardsSection: React.FC = () => {
  const [cards, setCards] = useState(FLASHCARDS_DATA);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('ሁሉም');

  const categories = ['ሁሉም', ...Array.from(new Set(FLASHCARDS_DATA.map((c) => c.category)))];

  const filteredCards = selectedCategory === 'ሁሉም'
    ? cards
    : cards.filter((c) => c.category === selectedCategory);

  const activeCard = filteredCards[currentIdx] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const toggleMastered = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const shuffleCards = () => {
    setIsFlipped(false);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIdx(0);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
            <BookmarkCheck className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-bold bg-white/25 px-3 py-1 rounded-full">
            ፈጣን ማስታወሻ (Flashcards)
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          የቃላትና ፍቺዎች ማስታወሻ ካርዶች (Study Flashcards)
        </h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed">
          ካርዱን ጠቅ በማድረግ መልሱን ገልበጥ፤ ቁልፍ የፈተና ነጥቦችን በቀላሉ አጥናና አስታውስ!
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIdx(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={shuffleCards}
          className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5" /> ደባልቀው
        </button>
      </div>

      {/* Flashcard Box */}
      {filteredCards.length > 0 && (
        <div className="space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`min-h-[280px] sm:min-h-[320px] rounded-2xl p-8 flex flex-col justify-between border cursor-pointer transition-all duration-300 shadow-md ${
              isFlipped
                ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300 ring-2 ring-indigo-200'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                {activeCard.category}
              </span>
              <button
                onClick={(e) => toggleMastered(activeCard.id, e)}
                className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border transition-colors ${
                  masteredIds.has(activeCard.id)
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                {masteredIds.has(activeCard.id) ? 'ተቆጣጥሬዋለሁ ✓' : 'አጥናው'}
              </button>
            </div>

            {/* Content (Question or Answer) */}
            <div className="my-6 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                {isFlipped ? 'ትክክለኛው መልስ' : 'ጥያቄ / ጽንሰ-ሃሳብ'}
              </span>
              <p
                className={`font-extrabold leading-relaxed ${
                  isFlipped ? 'text-lg sm:text-xl text-indigo-950' : 'text-xl sm:text-2xl text-slate-900'
                }`}
              >
                {isFlipped ? activeCard.answer : activeCard.question}
              </p>
            </div>

            {/* Bottom prompt */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? 'ጥያቄውን ለማየት ንካ' : 'መልሱን ለማየት ንካ'}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="p-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
            >
              <ChevronLeft className="w-4 h-4" /> ያለፈው
            </button>

            <span className="text-xs font-bold text-slate-500">
              ካርድ {currentIdx + 1} ከ {filteredCards.length} (የተካኑበት: {masteredIds.size})
            </span>

            <button
              onClick={handleNext}
              className="p-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
            >
              ቀጣዩ <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
