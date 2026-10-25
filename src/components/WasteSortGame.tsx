import React, { useState } from 'react';
import { Trash2, Recycle, Leaf, Droplets, CheckCircle, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WasteItem {
  id: string;
  name: string;
  category: 'dry' | 'liquid';
  bestDisposal: 'compost' | 'recycle' | 'bury' | 'soak_pit';
  icon: string;
  explanation: string;
}

const WASTE_ITEMS: WasteItem[] = [
  {
    id: 'w1',
    name: 'የሙዝ እና የብርቱካን ልጣጭ',
    category: 'dry',
    bestDisposal: 'compost',
    icon: '🍌',
    explanation: 'የፍራፍሬ ልጣጭ በቀላሉ ስለሚበሰብስ አበስብሶ (ኮምፖስት) ለአትክልት ማዳበሪያ ማድረግ ይመረጣል!'
  },
  {
    id: 'w2',
    name: 'የፕላስቲክ ውሃ ጠርሙስ',
    category: 'dry',
    bestDisposal: 'recycle',
    icon: '🍾',
    explanation: 'ፕላስቲክ አይበሰብስም፤ ስለዚህ አጥቦ መልሶ መጠቀም ወይም ፋብሪካ ወስዶ ሪሳይክል ማድረግ አለበት!'
  },
  {
    id: 'w3',
    name: 'ከእቃ ማጠቢያ የሚወጣ ሳሙናማ ውሃ',
    category: 'liquid',
    bestDisposal: 'soak_pit',
    icon: '🧼',
    explanation: 'ፈሳሽ ቆሻሻ በቦይ ተወስዶ ክዳን ባለው የማስረጊያ ጉድጓድ (Soak pit) ውስጥ መግባት አለበት።'
  },
  {
    id: 'w4',
    name: 'የምግብ ቆርቆሮዎችና የብረት ቁርጥራጭ',
    category: 'dry',
    bestDisposal: 'recycle',
    icon: '🥫',
    explanation: 'ቆርቆሮዎችን ቀልጠው አዲስ ብረት እንዲሆኑ መልሶ መጠቀም (ሪሳይክል) ይቻላል።'
  },
  {
    id: 'w5',
    name: 'የደረቁ የጓሮ ቅጠሎች እና ሳር',
    category: 'dry',
    bestDisposal: 'compost',
    icon: '🍂',
    explanation: 'የእፅዋት ቅሪቶችና ሳር ሲበሰብሱ ለአፈር እጅግ ጠቃሚ ንጥረ ነገር ይሰጣሉ።'
  },
  {
    id: 'w6',
    name: 'መጥፎ ሽታ ያለው የበሰበሰ ቆሻሻ',
    category: 'dry',
    bestDisposal: 'bury',
    icon: '🕳️',
    explanation: 'አደገኛ ሽታ የሚያስከትሉ ቆሻሻዎች በጥንቃቄ በተዘጋጀ ቦታ ተወስደው መቀበር አለባቸው።'
  },
  {
    id: 'w7',
    name: 'የመጸዳጃ ቤት ፈሳሽ ቆሻሻ',
    category: 'liquid',
    bestDisposal: 'soak_pit',
    icon: '🚽',
    explanation: 'በቱቦ ተወስዶ ጥልቅ ክዳን ባለው የማስረጊያ ጉድጓድ ውስጥ ተከድኖ መግባት አለበት።'
  },
  {
    id: 'w8',
    name: 'የድሮ ጋዜጣ እና የደብተር ወረቀቶች',
    category: 'dry',
    bestDisposal: 'recycle',
    icon: '📰',
    explanation: 'ወረቀትን መልሶ መጠቀም ዛፎች እንዳይቆረጡ ከፍተኛ አስተዋጽኦ ያደርጋል!'
  }
];

export const WasteSortGame: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  const currentItem = WASTE_ITEMS[currentIndex];

  const handleSelectBin = (bin: 'compost' | 'recycle' | 'bury' | 'soak_pit') => {
    if (feedback) return; // Prevent multiple clicks during feedback

    if (bin === currentItem.bestDisposal) {
      setScore((prev) => prev + 1);
      setFeedback({
        isCorrect: true,
        text: `ትክክል ነህ! 🎉 ${currentItem.explanation}`
      });
    } else {
      setFeedback({
        isCorrect: false,
        text: `ትክክል አይደለም! ❌ ${currentItem.explanation}`
      });
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 < WASTE_ITEMS.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setGameFinished(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 2800);
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setGameFinished(false);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
            <Trash2 className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-bold bg-white/25 px-3 py-1 rounded-full">
            የተማሪ መጽሐፍ ገጽ 81-85
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          የቆሻሻ መለያ እና አወጋገድ ጨዋታ (Waste Sorting Game)
        </h2>
        <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed">
          እያንዳንዱን ቆሻሻ ትክክለኛውን የአወጋገድ ዘዴ በመምረጥ አካባቢህን ከብክለት አድን!
        </p>
      </div>

      {!gameFinished ? (
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm text-center">
          {/* Progress */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-6 pb-3 border-b border-slate-100">
            <span>ደረጃ፡ {currentIndex + 1} ከ {WASTE_ITEMS.length}</span>
            <span className="text-emerald-600">ውጤት፡ {score} / {currentIndex}</span>
          </div>

          {/* Current Item Card */}
          <div className="bg-slate-50 border-2 border-dashed border-emerald-300 rounded-2xl p-6 max-w-md mx-auto mb-8">
            <div className="text-6xl mb-3 animate-bounce">{currentItem.icon}</div>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-1">
              {currentItem.name}
            </h3>
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {currentItem.category === 'dry' ? 'ደረቅ ቆሻሻ (Dry)' : 'ፈሳሽ ቆሻሻ (Liquid)'}
            </span>
            <p className="text-xs text-slate-500 mt-2">
              ይህን ቆሻሻ እንዴት ማስወገድ ይመረጣል? ከስር ምረጥ፡
            </p>
          </div>

          {/* Feedback banner */}
          {feedback && (
            <div
              className={`mb-6 p-4 rounded-xl text-sm font-semibold max-w-md mx-auto ${
                feedback.isCorrect
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {feedback.text}
            </div>
          )}

          {/* Disposal Bins Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <button
              onClick={() => handleSelectBin('compost')}
              disabled={!!feedback}
              className="p-4 bg-lime-50 hover:bg-lime-100 border border-lime-300 text-lime-900 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-colors cursor-pointer text-sm"
            >
              <Leaf className="w-5 h-5 text-lime-600" />
              1. ማበስበስ (ኮምፖስት / ማዳበሪያ)
            </button>

            <button
              onClick={() => handleSelectBin('recycle')}
              disabled={!!feedback}
              className="p-4 bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-900 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-colors cursor-pointer text-sm"
            >
              <Recycle className="w-5 h-5 text-blue-600" />
              2. መልሶ መጠቀም / ሪሳይክል
            </button>

            <button
              onClick={() => handleSelectBin('bury')}
              disabled={!!feedback}
              className="p-4 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-colors cursor-pointer text-sm"
            >
              <Trash2 className="w-5 h-5 text-amber-600" />
              3. መቅበር (ጥልቅ ጉድጓድ ውስጥ)
            </button>

            <button
              onClick={() => handleSelectBin('soak_pit')}
              disabled={!!feedback}
              className="p-4 bg-cyan-50 hover:bg-cyan-100 border border-cyan-300 text-cyan-900 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-colors cursor-pointer text-sm"
            >
              <Droplets className="w-5 h-5 text-cyan-600" />
              4. የማስረጊያ ጉድጓድ (Soak Pit)
            </button>
          </div>
        </div>
      ) : (
        /* Game Summary */
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-2">ጨዋታውን ጨርሰሃል!</h3>
          <p className="text-slate-600 text-sm mb-4">
            የአካባቢ ንጽህና ጥበቃ ሻምፒዮን ሆነሃል!
          </p>
          <div className="text-4xl font-black text-emerald-600 mb-6">
            {score} / {WASTE_ITEMS.length}
          </div>
          <button
            onClick={restartGame}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <RefreshCw className="w-5 h-5" /> እንደገና ተጫወት
          </button>
        </div>
      )}

      {/* Dire Dawa Waste Stats Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          በድሬዳዋ አስተዳደር የቆሻሻ አወጋገድ እውነታዎች (የገጽ 84 ሰንጠረዥ)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-4">
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <span className="text-2xl font-black text-red-600">77.7%</span>
            <span className="text-xs text-slate-600 block mt-1">በሜዳ ላይ የሚጣል</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <span className="text-2xl font-black text-orange-500">12%</span>
            <span className="text-xs text-slate-600 block mt-1">በሽንት ቤት ውስጥ</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <span className="text-2xl font-black text-amber-600">5.8%</span>
            <span className="text-xs text-slate-600 block mt-1">በውሃ ቦይ የሚጣል</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <span className="text-2xl font-black text-emerald-600">4.5%</span>
            <span className="text-xs text-slate-600 block mt-1">በገንዳና ጉድጓድ ብቻ</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          * በድሬዳዋ ወደ 84% የሚሆነው ቆሻሻ በግዴለሽነት በሜዳና በቦይ የሚጣል በመሆኑ የአካባቢን ንጽህና ለመጠበቅ የ4ኛ ክፍል ተማሪዎች በትምህርት ቤታቸውና በመኖሪያቸው አርአያ መሆን አለባቸው!
        </p>
      </div>
    </div>
  );
};
