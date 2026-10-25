import React, { useState } from 'react';
import { CLIMATE_ZONES } from '../data/chapterContent';
import { Mountain, Compass, Sun, Snowflake, Wind, Check, AlertCircle } from 'lucide-react';

export const ClimateZoneExplorer: React.FC = () => {
  const [selectedZoneIndex, setSelectedZoneIndex] = useState<number>(3); // Default Kolla (Dire Dawa)
  const [showActivityAnswers, setShowActivityAnswers] = useState<boolean>(false);

  const selectedZone = CLIMATE_ZONES[selectedZoneIndex];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
            <Mountain className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-bold bg-white/25 px-3 py-1 rounded-full">
            የተማሪ መጽሐፍ ገጽ 68
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          የኢትዮጵያ 5ቱ የአየር ንብረት ክልሎች (Ethiopia Climate Zones)
        </h2>
        <p className="text-emerald-100 mt-2 text-sm md:text-base leading-relaxed">
          ከፍታ ሲጨምር ቅዝቃዜ ይጨምራል፤ ከፍታ ሲቀንስ ደግሞ ሙቀት ይጨምራል! ከታች ያሉትን ክልሎች እየመረጥክ ተመልከት።
        </p>
      </div>

      {/* Mountain Height Visualization Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {CLIMATE_ZONES.map((zone, idx) => {
          const isSelected = selectedZoneIndex === idx;
          return (
            <button
              key={zone.name}
              onClick={() => setSelectedZoneIndex(idx)}
              className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500 shadow-sm'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="text-xs font-bold text-slate-500 flex justify-between">
                <span>{5 - idx}ኛ ከፍታ</span>
                {zone.name === 'ቆላ' && (
                  <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.2 rounded font-bold">
                    ድሬዳዋ
                  </span>
                )}
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-1">
                {zone.name}
              </div>
              <div className="text-xs text-slate-600 font-mono mt-0.5">
                {zone.tempRange}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Zone Deep Dive Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className={`p-6 text-white bg-gradient-to-r ${selectedZone.color}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full">
                {selectedZone.english}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-2 flex items-center gap-2">
                {selectedZone.name}
                {selectedZone.altName && (
                  <span className="text-sm font-bold bg-white text-orange-600 px-2.5 py-0.5 rounded-full">
                    {selectedZone.altName}
                  </span>
                )}
              </h3>
            </div>
            <div className="text-right bg-white/15 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/20">
              <div className="text-xs text-emerald-100 font-medium">አማካይ ሙቀት</div>
              <div className="text-2xl font-black">{selectedZone.tempRange}</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 font-bold block mb-1">ከፍታ ከባህር ጠለል በላይ</span>
              <span className="text-base font-extrabold text-slate-800">{selectedZone.altitudeRange}</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 font-bold block mb-1">የአየር ሁኔታው ባሕርይ</span>
              <span className="text-sm font-semibold text-slate-800">{selectedZone.characteristics}</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 font-bold block mb-1">የቦታዎች ምሳሌ</span>
              <span className="text-sm font-semibold text-slate-800">{selectedZone.examplePlaces}</span>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <Sun className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-amber-900">
              <span className="font-bold">ለተማሪዎች የልብስና ጤና ምክር፡ </span>
              {selectedZone.clothingTip}
            </div>
          </div>
        </div>
      </div>

      {/* Dire Dawa vs Kulubi Comparison Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-sm">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
          <Compass className="w-6 h-6 text-emerald-400" />
          የፈተና ወሳኝ ንጽጽር፡ ድሬዳዋ ወይስ ቁሉቢ የበለጠ ይሞቃል? (ገጽ 68)
        </h3>
        <p className="text-slate-300 text-sm mb-6">
          የተማሪ መጽሐፍ ገጽ 68 ላይ ያለውን ተግባር 3.1 ለመመለስ ይህን ንጽጽር ተመልከት፡
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Dire Dawa */}
          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-lg text-amber-400">ድሬዳዋ (Dire Dawa)</h4>
              <span className="text-xs bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded font-bold">
                ቆላ (Kolla)
              </span>
            </div>
            <ul className="text-xs md:text-sm text-slate-300 space-y-2">
              <li>• ከፍታ፡ ከባህር ጠለል በላይ <strong className="text-white">950 - 1250 ሜትር</strong> (ዝቅተኛ)</li>
              <li>• ዓመታዊ አማካይ ሙቀት፡ <strong className="text-white">23.5°C</strong> (ሞቃት)</li>
              <li>• የአየር ንብረት፡ <strong className="text-white">ቆላ</strong></li>
              <li>• የዝናብ መጠን፡ ዓመታዊ እስከ 604 ሚሜ</li>
            </ul>
          </div>

          {/* Kulubi */}
          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-lg text-cyan-400">ቁሉቢ (Kulubi)</h4>
              <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2.5 py-0.5 rounded font-bold">
                ደጋ (Dega)
              </span>
            </div>
            <ul className="text-xs md:text-sm text-slate-300 space-y-2">
              <li>• ከፍታ፡ ከባህር ጠለል በላይ <strong className="text-white">ከ 2300 ሜትር በላይ</strong> (ከፍተኛ ተራራማ)</li>
              <li>• አማካይ ሙቀት፡ <strong className="text-white">10°C - 15°C</strong> (ቀዝቃዛ)</li>
              <li>• የአየር ንብረት፡ <strong className="text-white">ደጋ</strong></li>
              <li>• ድምዳሜ፡ ከድሬዳዋ እጅግ ይቀዘቅዛል!</li>
            </ul>
          </div>
        </div>

        {/* Activity 3.1 Reveal Button */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <button
            onClick={() => setShowActivityAnswers(!showActivityAnswers)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs md:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2"
          >
            {showActivityAnswers ? 'የተግባር 3.1 መልሶችን ደብቅ' : 'የመጽሐፉ ተግባር 3.1 ሙሉ መልሶች እይ (ገጽ 68)'}
          </button>

          {showActivityAnswers && (
            <div className="mt-4 bg-slate-800 p-4 rounded-xl space-y-3 text-xs md:text-sm border border-slate-700">
              <div>
                <span className="text-amber-400 font-bold block">1. በከፍታ እና በሙቀት መጠን መካከል ምን ዓይነት ግንኙነት ይታያል?</span>
                <span className="text-slate-200">
                  መልስ፡ የተገላቢጦሽ ግንኙነት ነው፤ ማለትም ከፍታ በጨመረ ቁጥር የሙቀት መጠን እየቀነሰ (ቅዝቃዜ እየጨመረ) ይሄዳል!
                </span>
              </div>
              <div>
                <span className="text-amber-400 font-bold block">2. የድሬዳዋ አየር ንብረት ከየትኛው ይመደባል?</span>
                <span className="text-slate-200">
                  መልስ፡ በ "ቆላ" የአየር ንብረት ክልል ውስጥ ይመደባል (ከፍታዋ 950-1250 ሜትር፣ ሙቀቷ 23.5°C በመሆኑ)።
                </span>
              </div>
              <div>
                <span className="text-amber-400 font-bold block">3. ከድሬዳዋና ከቁሉቢ ከፍተኛ ሙቀት የሚኖረው የትኛው አካባቢ ነው? ለምን?</span>
                <span className="text-slate-200">
                  መልስ፡ ድሬዳዋ ከፍተኛ ሙቀት ይኖራታል፤ ምክንያቱም ድሬዳዋ ከቁሉቢ ጋር ስትነፃፀር ዝቅተኛ ከፍታ (Low Altitude) ስላላት ነው።
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
