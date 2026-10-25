import React, { useState } from 'react';
import { NOTE_TOPICS, WEATHER_INSTRUMENTS, DIRE_DAWA_MINERALS } from '../data/chapterContent';
import { Globe, CloudSun, Trees, Trash2, BookOpen, Volume2, VolumeX, Lightbulb, CheckCircle2, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

export const NotesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('intro-env');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [selectedMineralCategory, setSelectedMineralCategory] = useState<string>('ሁሉም');

  const currentTopic = NOTE_TOPICS.find((t) => t.id === activeTabId) || NOTE_TOPICS[0];

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    // Ethiopian Amharic or default fallback
    utterance.lang = 'am-ET';
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'intro-env': return <Globe className="w-5 h-5" />;
      case 'weather-climate': return <CloudSun className="w-5 h-5" />;
      case 'natural-resources': return <Trees className="w-5 h-5" />;
      case 'waste-management': return <Trash2 className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const filteredMinerals = selectedMineralCategory === 'ሁሉም'
    ? DIRE_DAWA_MINERALS
    : DIRE_DAWA_MINERALS.filter((m) => m.category === selectedMineralCategory);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-bold bg-white/20 px-3 py-1 rounded-full">
              4ኛ ክፍል አካባቢ ሳይንስ
            </span>
            <span className="text-xs text-blue-200">ምዕራፍ 3</span>
          </div>
          <button
            onClick={() => handleSpeak(`${currentTopic.title}. ${currentTopic.summary}`)}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-xl backdrop-blur-sm transition-colors cursor-pointer"
          >
            {isSpeaking ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4" />}
            {isSpeaking ? 'ንባብ አቁም' : 'ድምፁን አዳምጥ (Listen)'}
          </button>
        </div>

        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          ምርጥ የተብራሩ ማስታወሻዎች ከምሳሌዎች ጋር
        </h2>
        <p className="text-blue-100 mt-2 text-sm md:text-base leading-relaxed">
          ለ 4ኛ ክፍል ተማሪዎች በቀላሉ እንዲገባና እንዳይረሳ በምሳሌዎችና በስዕላዊ ማብራሪያዎች የተዘጋጀ።
        </p>
      </div>

      {/* Topics Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {NOTE_TOPICS.map((topic) => {
          const isActive = activeTabId === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => {
                setActiveTabId(topic.id);
                if (isSpeaking) window.speechSynthesis.cancel();
                setIsSpeaking(false);
              }}
              className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500 shadow-sm'
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-xl ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {getTopicIcon(topic.id)}
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-blue-200 text-blue-900' : 'bg-slate-100 text-slate-600'
                }`}>
                  {topic.badge}
                </span>
              </div>
              <div>
                <div className="font-extrabold text-sm text-slate-900 line-clamp-1">{topic.title}</div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{topic.englishTitle}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-8">
        {/* Title and Summary */}
        <div className="border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
            <BookOpen className="w-4 h-4" />
            <span>{currentTopic.englishTitle}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
            {currentTopic.title}
          </h3>
          <p className="text-sm md:text-base text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed">
            {currentTopic.summary}
          </p>
        </div>

        {/* Detailed Key Points with Real Life Examples */}
        <div className="space-y-6">
          <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            ዋና ዋና ነጥቦች እና የህይወት ምሳሌዎች (Key Concepts & Real-life Examples)
          </h4>

          <div className="grid grid-cols-1 gap-5">
            {currentTopic.keyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 hover:border-slate-300 transition-colors"
              >
                <h5 className="font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  {point.title}
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {point.description}
                </p>

                {/* Real life example callout */}
                <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 text-xs md:text-sm text-amber-950 flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900">ከእለት ተእለት ኑሮ ምሳሌ፡</strong> {point.example}
                  </div>
                </div>

                {point.examTip && (
                  <div className="mt-2.5 bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>የፈተና ጥቆማ (Exam Alert):</strong> {point.examTip}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Interactive Sub-modules depending on topic */}
        {activeTabId === 'weather-climate' && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="font-extrabold text-slate-900 text-base mb-4 flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-amber-500" />
              5ቱ የአየር ሁኔታ መለኪያ መሳሪያዎች (Weather Instruments - ገጽ 64-67)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WEATHER_INSTRUMENTS.map((inst) => (
                <div
                  key={inst.name}
                  className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-sm">{inst.name}</span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {inst.english}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-blue-600 mb-2">
                      ጥቅሙ፡ {inst.use}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {inst.description}
                    </p>
                  </div>
                  <div className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-100">
                    💡 <strong>ምሳሌ፡</strong> {inst.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTabId === 'natural-resources' && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <Trees className="w-5 h-5 text-emerald-600" />
                በድሬዳዋ አስተዳደር የሚገኙ ማዕድናት ዝርዝር (ገጽ 74 ሰንጠረዥ)
              </h4>

              {/* Category filter */}
              <div className="flex flex-wrap gap-1 text-xs">
                {['ሁሉም', 'ግንባታ', 'ሴራሚክስና መስታወት', 'ጌጣጌጥ', 'ሀይል'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedMineralCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                      selectedMineralCategory === cat
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="p-3">የማዕድኑ ስም</th>
                    <th className="p-3">የሚሰጠው ጥቅም</th>
                    <th className="p-3">የሚገኝበት ቦታ በድሬዳዋ</th>
                    <th className="p-3">ክፍል</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredMinerals.map((m) => (
                    <tr key={m.name} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">{m.name}</td>
                      <td className="p-3 text-slate-700">{m.use}</td>
                      <td className="p-3 font-medium text-emerald-700">{m.foundIn}</td>
                      <td className="p-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {m.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Vocabulary / Key Terms Table */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <h4 className="font-extrabold text-slate-900 text-base mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            የዚህ ርዕስ ቁልፍ ቃላትና ፍቺዎች (Key Vocabulary)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentTopic.importantTerms.map((t) => (
              <div key={t.term} className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-indigo-900 text-sm">{t.term}</span>
                  <span className="text-[11px] font-semibold text-slate-500">{t.english}</span>
                </div>
                <p className="text-slate-700 mb-1.5">{t.meaning}</p>
                <span className="text-slate-500 italic block">ምሳሌ፡ {t.example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
