import React, { useState } from 'react';
import { ALL_EXAM_QUESTIONS, MATCHING_QUESTIONS } from '../data/examQuestions';
import { QuizQuestion } from '../types';
import { Award, CheckCircle2, XCircle, HelpCircle, RefreshCw, Sparkles, Filter, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExamSection: React.FC = () => {
  const [filterSource, setFilterSource] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, string | number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeHintId, setActiveHintId] = useState<string | null>(null);

  // Matching game state
  const [matchingSelections, setMatchingSelections] = useState<Record<string, string>>({});
  const [matchingSubmitted, setMatchingSubmitted] = useState<boolean>(false);

  const sources = [
    { id: 'all', label: 'ሁሉም ጥያቄዎች (All 21 Questions)' },
    { id: 'መልመጃ 3.1 (ገጽ 70)', label: 'መልመጃ 3.1 (ገጽ 70)' },
    { id: 'መልመጃ 3.2 (ገጽ 80)', label: 'መልመጃ 3.2 (ገጽ 80)' },
    { id: 'መልመጃ 3.3 (ገጽ 85)', label: 'መልመጃ 3.3 (ገጽ 85)' },
    { id: 'ማጠቃለያ ክለሳ (ገጽ 87)', label: 'የክለሳ ጥያቄዎች (ገጽ 87)' },
    { id: 'ማጠቃለያ ምርጫ (ገጽ 88)', label: 'የማጠቃለያ ምርጫ (ገጽ 88-89)' }
  ];

  const questions: QuizQuestion[] = filterSource === 'all'
    ? ALL_EXAM_QUESTIONS
    : ALL_EXAM_QUESTIONS.filter((q) => q.source.includes(filterSource));

  const handleSelectAnswer = (qId: string, answer: string | number) => {
    if (showResults) return; // locked once submitted
    setUserAnswers((prev) => ({ ...prev, [qId]: answer }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = calculateScore();
    const percent = (score / questions.length) * 100;
    if (percent >= 75) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
    setActiveHintId(null);
  };

  const score = calculateScore();
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
            <Award className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-bold bg-white/25 px-3 py-1 rounded-full">
            ፈተና እና መልመጃዎች (Exam & Exercises)
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          የ 4ኛ ክፍል አካባቢ ሳይንስ ፈተና መለማመጃ
        </h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed">
          በመጽሐፉ ውስጥ ያሉትን እያንዳንዱን መልመጃዎችና የክለሳ ጥያቄዎች እራስህን ፈትነህ ውጤትህን ወዲያው እወቅ!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
        {sources.map((src) => (
          <button
            key={src.id}
            onClick={() => {
              setFilterSource(src.id);
              setShowResults(false);
              setUserAnswers({});
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              filterSource === src.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {src.label}
          </button>
        ))}
      </div>

      {/* Score Summary Box (when results shown) */}
      {showResults && (
        <div
          className={`p-6 rounded-2xl border shadow-sm ${
            percentage >= 75
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : percentage >= 50
              ? 'bg-amber-50 border-amber-200 text-amber-950'
              : 'bg-red-50 border-red-200 text-red-950'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-full text-white ${
                  percentage >= 75 ? 'bg-emerald-600' : percentage >= 50 ? 'bg-amber-600' : 'bg-red-600'
                }`}
              >
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black">
                  ውጤትህ፡ {score} ከ {questions.length} ({percentage}%)
                </h3>
                <p className="text-xs font-medium mt-0.5">
                  {percentage >= 90
                    ? '🎉 እጅግ በጣም ጎበዝ! ትምህርቱን በሚገባ ተረድተሃል!'
                    : percentage >= 70
                    ? '👍 በጣም ጥሩ ውጤት ነው! የቀሩትን ማብራሪያዎች በጥንቃቄ አንብብ።'
                    : '💪 አይዞህ! የተሳሳትካቸውን ጥያቄዎች ማብራሪያ አይተህ እንደገና ሞክር።'}
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <RefreshCw className="w-4 h-4" /> እንደገና ተፈተን
            </button>
          </div>
        </div>
      )}

      {/* Question Cards List */}
      <div className="space-y-5">
        {questions.map((q, idx) => {
          const userAnswer = userAnswers[q.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = userAnswer === q.correctAnswer;
          const showExplanation = showResults;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-5 md:p-6 border transition-all ${
                showResults
                  ? isCorrect
                    ? 'border-emerald-300 ring-1 ring-emerald-200'
                    : 'border-red-300 ring-1 ring-red-200'
                  : 'border-slate-200 hover:border-slate-300'
              } shadow-sm`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-extrabold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {q.source}
                  </span>
                </div>

                {/* Hint Button */}
                <button
                  onClick={() => setActiveHintId(activeHintId === q.id ? null : q.id)}
                  className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> ፍንጭ (Hint)
                </button>
              </div>

              {/* Hint dropdown */}
              {activeHintId === q.id && (
                <div className="mb-3 p-3 bg-indigo-50/80 rounded-xl border border-indigo-200 text-xs text-indigo-900 animate-fadeIn">
                  💡 <strong>ፍንጭ፡</strong> {q.studentHint}
                </div>
              )}

              {/* Question Text */}
              <h4 className="text-base md:text-lg font-bold text-slate-900 mb-4 leading-relaxed">
                {q.question}
              </h4>

              {/* Answer Choices */}
              {q.type === 'true_false' ? (
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  {['እውነት', 'ሐሰት'].map((opt) => {
                    const isSelected = userAnswer === opt;
                    let btnColor = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

                    if (isSelected) {
                      btnColor = 'bg-blue-600 text-white border-blue-600';
                    }

                    if (showResults) {
                      if (opt === q.correctAnswer) {
                        btnColor = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnColor = 'bg-red-500 text-white border-red-500 font-bold';
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(q.id, opt)}
                        disabled={showResults}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-colors flex items-center justify-center gap-2 cursor-pointer ${btnColor}`}
                      >
                        {opt}
                        {showResults && opt === q.correctAnswer && <CheckCircle2 className="w-4 h-4 text-white" />}
                        {showResults && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-white" />}
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Multiple Choice */
                <div className="space-y-2.5">
                  {q.options?.map((opt, optIdx) => {
                    const isSelected = userAnswer === optIdx;
                    const choiceLetters = ['ሀ', 'ለ', 'ሐ', 'መ'];
                    let btnStyle = 'bg-slate-50/60 border-slate-200 text-slate-800 hover:bg-slate-100';

                    if (isSelected) {
                      btnStyle = 'bg-blue-50 border-blue-500 text-blue-900 ring-1 ring-blue-500';
                    }

                    if (showResults) {
                      if (optIdx === q.correctAnswer) {
                        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-400';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-red-50 border-red-500 text-red-900 ring-1 ring-red-400';
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(q.id, optIdx)}
                        disabled={showResults}
                        className={`w-full p-3 rounded-xl border text-left text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {choiceLetters[optIdx]}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {showResults && optIdx === q.correctAnswer && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {showResults && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Explanation after submission */}
              {showExplanation && (
                <div
                  className={`mt-4 p-3.5 rounded-xl text-xs md:text-sm leading-relaxed border ${
                    isCorrect
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                      : 'bg-red-50 text-red-900 border-red-200'
                  }`}
                >
                  <span className="font-bold block mb-1">
                    {isCorrect ? '✓ ትክክለኛ መልስ!' : '✗ የተሳሳተ መልስ!'}
                  </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Action Bar */}
      {!showResults && (
        <div className="sticky bottom-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-300 shadow-xl flex items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-slate-600 font-medium">
            የተመለሱ ጥያቄዎች፡ <strong className="text-slate-900">{answeredCount}</strong> ከ{' '}
            <strong className="text-slate-900">{questions.length}</strong>
          </div>
          <button
            onClick={handleSubmit}
            disabled={answeredCount === 0}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm text-white shadow-md transition-all flex items-center gap-2 cursor-pointer ${
              answeredCount === 0
                ? 'bg-slate-400 cursor-not-allowed opacity-60'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            ውጤቴን አሳይ <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Textbook Matching Drill Component (ገጽ 88) */}
      <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900">
            የመሳሪያዎች ማዛመጃ ልምምድ (Matching Exercise - ገጽ 88)
          </h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600 mb-6">
          በ "ሀ" ስር ያሉትን መሳሪያዎች በ "ለ" ስር ካሉት ጥቅሞቻቸው ጋር አዛምድ፡
        </p>

        <div className="space-y-4">
          {MATCHING_QUESTIONS.map((item, idx) => {
            const userChoice = matchingSelections[item.id];
            const isMatchedCorrect = userChoice === item.correctMeaning;

            return (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  {item.instrument}
                </div>

                <div className="flex-1 max-w-md">
                  <select
                    value={userChoice || ''}
                    disabled={matchingSubmitted}
                    onChange={(e) =>
                      setMatchingSelections((prev) => ({
                        ...prev,
                        [item.id]: e.target.value
                      }))
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs md:text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">-- ጥቅሙን ምረጥ --</option>
                    <option value="የሙቀት መጠንን ለመለካት">የሙቀት መጠንን ለመለካት</option>
                    <option value="የዝናብ መጠንን ለመለካት">የዝናብ መጠንን ለመለካት</option>
                    <option value="የአየር ግፊትን ለመለካት">የአየር ግፊትን ለመለካት</option>
                    <option value="የነፋስን ፍጥነት ለመለካት">የነፋስን ፍጥነት ለመለካት</option>
                    <option value="የነፋስን አቅጣጫ ለመለየት / ለማመልከት">የነፋስን አቅጣጫ ለመለየት / ለማመልከት</option>
                  </select>
                </div>

                {matchingSubmitted && (
                  <div className="shrink-0 text-xs font-bold">
                    {isMatchedCorrect ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <Check className="w-4 h-4" /> ትክክል
                      </span>
                    ) : (
                      <span className="text-red-500">
                        ትክክለኛ፡ {item.correctMeaning}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => setMatchingSubmitted(true)}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs md:text-sm rounded-xl transition-colors cursor-pointer"
          >
            የማዛመጃ መልሴን አረጋግጥ
          </button>
          <button
            onClick={() => {
              setMatchingSelections({});
              setMatchingSubmitted(false);
            }}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs md:text-sm rounded-xl transition-colors cursor-pointer"
          >
            አጽዳ
          </button>
        </div>
      </div>
    </div>
  );
};
