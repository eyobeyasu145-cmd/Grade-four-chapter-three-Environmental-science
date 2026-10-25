import React, { useState } from 'react';
import { Calculator, ArrowRight, RefreshCw, CheckCircle2, XCircle, Sparkles, HelpCircle } from 'lucide-react';

export const CalculatorSection: React.FC = () => {
  // Calculator 1: Daily Average & Difference
  const [maxTemp, setMaxTemp] = useState<number>(20);
  const [minTemp, setMinTemp] = useState<number>(10);

  // Calculator 2: Annual Difference
  const [annualMax, setAnnualMax] = useState<number>(36);
  const [annualMin, setAnnualMin] = useState<number>(20);

  // Practice drill state
  const [drillStep, setDrillStep] = useState<number>(0);
  const [userAvgAnswer, setUserAvgAnswer] = useState<string>('');
  const [userDiffAnswer, setUserDiffAnswer] = useState<string>('');
  const [drillFeedback, setDrillFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const dailyAvg = ((maxTemp + minTemp) / 2).toFixed(1);
  const dailyDiff = (maxTemp - minTemp).toFixed(1);
  const annualDiff = (annualMax - annualMin).toFixed(1);

  const practiceProblems = [
    { max: 24, min: 14, expAvg: 19, expDiff: 10, place: 'ድሬዳዋ በጥቅምት ወር' },
    { max: 18, min: 8, expAvg: 13, expDiff: 10, place: 'ቁሉቢ በክረምት ወር' },
    { max: 30, min: 16, expAvg: 23, expDiff: 14, place: 'ድሬዳዋ በግንቦት ወር' },
    { max: 28, min: 12, expAvg: 20, expDiff: 16, place: 'ሐረር ከተማ' }
  ];

  const currentProblem = practiceProblems[drillStep % practiceProblems.length];

  const checkDrill = () => {
    const avgNum = parseFloat(userAvgAnswer);
    const diffNum = parseFloat(userDiffAnswer);
    if (isNaN(avgNum) || isNaN(diffNum)) {
      setDrillFeedback({ isCorrect: false, message: 'እባክህ ሁለቱንም ሳጥኖች ቁጥር ሞላ!' });
      return;
    }
    const isAvgOk = Math.abs(avgNum - currentProblem.expAvg) < 0.1;
    const isDiffOk = Math.abs(diffNum - currentProblem.expDiff) < 0.1;

    if (isAvgOk && isDiffOk) {
      setDrillFeedback({
        isCorrect: true,
        message: `ጎበዝ! ድንቅ መልስ ነው! አማካይ = (${currentProblem.max} + ${currentProblem.min}) ÷ 2 = ${currentProblem.expAvg}°C እና ልዩነት = ${currentProblem.max} - ${currentProblem.min} = ${currentProblem.expDiff}°C!`
      });
    } else {
      setDrillFeedback({
        isCorrect: false,
        message: `እንደገና ሞክር! አማካይ ለመስራት ሁለቱን ደምረህ ለ 2 አካፍል፤ ልዩነት ለመስራት ደግሞ ትልቁን ከትንሹ ቀንስ።`
      });
    }
  };

  const nextProblem = () => {
    setDrillStep((prev) => prev + 1);
    setUserAvgAnswer('');
    setUserDiffAnswer('');
    setDrillFeedback(null);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
            <Calculator className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-bold bg-white/25 px-3 py-1 rounded-full">
            የተማሪ መጽሐፍ ገጽ 64-65
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          በይነተገናኝ የሙቀት ስሌት ማሳያ (Temperature Calculator)
        </h2>
        <p className="text-amber-100 mt-2 text-sm md:text-base leading-relaxed">
          በ 4ኛ ክፍል ሳይንስ ውስጥ የሙቀት አማካይ እና ልዩነት እንዴት እንደሚሰላ በተግባር እያየህ ተማር!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Module 1: Daily Average & Difference */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                1. የቀኑ አማካይ እና ልዩነት ስሌት
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-orange-50 text-orange-700 rounded-lg">
                ዕለታዊ
              </span>
            </div>

            <p className="text-xs text-slate-600 mt-3 mb-4">
              በ 24 ሰዓት ውስጥ የተመዘገበውን ከፍተኛ እና ዝቅተኛ ሙቀት በመጠቀም አማካይና ልዩነትን እናሰላለን።
            </p>

            {/* Sliders */}
            <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>የቀኑ ከፍተኛ ሙቀት (Max Temp):</span>
                  <span className="font-bold text-red-600 text-sm">{maxTemp} °C</span>
                </div>
                <input
                  type="range"
                  min={minTemp + 1}
                  max={45}
                  value={maxTemp}
                  onChange={(e) => setMaxTemp(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>የቀኑ ዝቅተኛ ሙቀት (Min Temp):</span>
                  <span className="font-bold text-blue-600 text-sm">{minTemp} °C</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={maxTemp - 1}
                  value={minTemp}
                  onChange={(e) => setMinTemp(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Preset buttons */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="text-slate-500 self-center">የመጽሐፉ ምሳሌ:</span>
                <button
                  onClick={() => { setMaxTemp(20); setMinTemp(10); }}
                  className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors"
                >
                  20°C & 10°C (የገጽ 64 ምሳሌ)
                </button>
                <button
                  onClick={() => { setMaxTemp(28); setMinTemp(16); }}
                  className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors"
                >
                  28°C & 16°C
                </button>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="mt-5 space-y-4">
              {/* Formula 1 */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4">
                <div className="text-xs font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                  <span>ቀመር 1: የቀኑ አማካይ ሙቀት</span>
                </div>
                <div className="font-mono text-xs text-amber-800 bg-white/70 p-2 rounded-lg border border-amber-200">
                  የቀኑ አማካይ = (ከፍተኛ + ዝቅተኛ) ÷ 2
                </div>
                <div className="mt-2 text-sm text-slate-700 flex items-center gap-2">
                  <span>አሰራር:</span>
                  <span className="font-semibold">({maxTemp} + {minTemp}) ÷ 2 = </span>
                  <span className="text-base font-extrabold text-amber-700 bg-amber-200/70 px-2 py-0.5 rounded">
                    {dailyAvg} °C
                  </span>
                </div>
              </div>

              {/* Formula 2 */}
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4">
                <div className="text-xs font-bold text-emerald-900 mb-1">
                  ቀመር 2: የቀኑ የሙቀት መጠን ልዩነት
                </div>
                <div className="font-mono text-xs text-emerald-800 bg-white/70 p-2 rounded-lg border border-emerald-200">
                  የቀኑ ልዩነት = ከፍተኛ ሙቀት - ዝቅተኛ ሙቀት
                </div>
                <div className="mt-2 text-sm text-slate-700 flex items-center gap-2">
                  <span>አሰራር:</span>
                  <span className="font-semibold">{maxTemp} - {minTemp} = </span>
                  <span className="text-base font-extrabold text-emerald-700 bg-emerald-200/70 px-2 py-0.5 rounded">
                    {dailyDiff} °C
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 2: Annual Temperature Difference */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                2. የአመቱ የሙቀት ልዩነት ስሌት
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg">
                ዓመታዊ
              </span>
            </div>

            <p className="text-xs text-slate-600 mt-3 mb-4">
              በአመቱ የተመዘገበው ከፍተኛ የሙቀት መጠን ሲቀነስ ዝቅተኛ የሙቀት መጠን (የተማሪ መጽሐፍ ገጽ 65)።
            </p>

            <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>በአመቱ የተመዘገበው ከፍተኛ ሙቀት:</span>
                  <span className="font-bold text-red-600 text-sm">{annualMax} °C</span>
                </div>
                <input
                  type="range"
                  min={annualMin + 1}
                  max={50}
                  value={annualMax}
                  onChange={(e) => setAnnualMax(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>በአመቱ የተመዘገበው ዝቅተኛ ሙቀት:</span>
                  <span className="font-bold text-blue-600 text-sm">{annualMin} °C</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={annualMax - 1}
                  value={annualMin}
                  onChange={(e) => setAnnualMin(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Preset buttons */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="text-slate-500 self-center">የመጽሐፉ ምሳሌ:</span>
                <button
                  onClick={() => { setAnnualMax(36); setAnnualMin(20); }}
                  className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors"
                >
                  36°C & 20°C (ገጽ 65 ምሳሌ = 16°C)
                </button>
              </div>
            </div>

            {/* Formula 3 */}
            <div className="mt-5 bg-blue-50/60 border border-blue-200/80 rounded-xl p-4">
              <div className="text-xs font-bold text-blue-900 mb-1">
                ቀመር: የአመቱ የሙቀት ልዩነት
              </div>
              <div className="font-mono text-xs text-blue-800 bg-white/70 p-2 rounded-lg border border-blue-200">
                የአመቱ ልዩነት = የአመቱ ከፍተኛ - የአመቱ ዝቅተኛ
              </div>
              <div className="mt-3 text-sm text-slate-700 flex items-center gap-2">
                <span>አሰራር:</span>
                <span className="font-semibold">{annualMax} - {annualMin} = </span>
                <span className="text-base font-extrabold text-blue-700 bg-blue-200/70 px-2 py-0.5 rounded">
                  {annualDiff} °C
                </span>
              </div>
            </div>

            {/* Additional note about Pressure */}
            <div className="mt-4 p-3.5 bg-purple-50 rounded-xl border border-purple-200 text-xs text-purple-900">
              <span className="font-bold block mb-1">📘 የአየር ግፊት ቀመር (ገጽ 67):</span>
              <p>ግፊት = ጉልበት (ክብደት) ÷ ስፋት</p>
              <p className="text-purple-700 mt-0.5">ከፍታ ሲጨምር የአየር ግፊት ይቀንሳል፤ ከፍታ ሲቀንስ የአየር ግፊት ይጨምራል።</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Drill for 4th Graders */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-200 shadow-sm">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              ራስህን ፈትን: የስሌት ልምምድ (Math Drill for Students)
            </h3>
          </div>
          <span className="text-xs bg-indigo-200 text-indigo-900 font-bold px-3 py-1 rounded-full">
            ጥያቄ { (drillStep % practiceProblems.length) + 1 } ከ { practiceProblems.length }
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm">
          <div className="text-sm text-slate-700 mb-3">
            <span className="font-bold text-indigo-900">{currentProblem.place}</span> ውስጥ የቀኑ ከፍተኛ ሙቀት{' '}
            <span className="font-bold text-red-600">{currentProblem.max}°C</span> እና ዝቅተኛ ሙቀት{' '}
            <span className="font-bold text-blue-600">{currentProblem.min}°C</span> ተመዝግቧል።
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                1. የቀኑ አማካይ ሙቀት ስንት ነው? (°C)
              </label>
              <input
                type="number"
                placeholder="ለምሳሌ: 15"
                value={userAvgAnswer}
                onChange={(e) => setUserAvgAnswer(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                2. የቀኑ የሙቀት ልዩነት ስንት ነው? (°C)
              </label>
              <input
                type="number"
                placeholder="ለምሳሌ: 10"
                value={userDiffAnswer}
                onChange={(e) => setUserDiffAnswer(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <button
              onClick={checkDrill}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
            >
              መልሴን አረጋግጥ <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={nextProblem}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> ወደ ቀጣዩ ጥያቄ እለፍ
            </button>
          </div>

          {drillFeedback && (
            <div
              className={`mt-4 p-4 rounded-xl text-sm flex items-start gap-3 border ${
                drillFeedback.isCorrect
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-red-50 text-red-900 border-red-200'
              }`}
            >
              {drillFeedback.isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              )}
              <div>{drillFeedback.message}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
