import React, { useState } from 'react';
import { CONCEPTS_DATA } from '../data/diagramsData';
import { ConceptDiagram } from '../types';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  Award,
  ChevronRight,
  RefreshCw,
  Compass,
  Layers,
  ArrowDown,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ConceptExplainerStudio: React.FC = () => {
  const [selectedConceptId, setSelectedConceptId] = useState<string>('altitude-climate');
  const [activeLabelId, setActiveLabelId] = useState<string | null>(null);

  // MCQ state for the selected concept
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [scoreCount, setScoreCount] = useState<number>(0);

  const activeConcept: ConceptDiagram =
    CONCEPTS_DATA.find((c) => c.id === selectedConceptId) || CONCEPTS_DATA[0];

  const handleSelectConcept = (id: string) => {
    setSelectedConceptId(id);
    setActiveLabelId(null);
    setUserAnswers({});
  };

  const handleAnswerMCQ = (questionId: string, optionIndex: number, correctIndex: number) => {
    if (userAnswers[questionId] !== undefined) return; // already answered

    const isCorrect = optionIndex === correctIndex;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));

    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
  };

  // SVG Diagram Renderers for each concept
  const renderSvgDiagram = () => {
    switch (activeConcept.id) {
      case 'altitude-climate':
        return (
          <div className="relative w-full aspect-[16/9] max-h-[380px] bg-gradient-to-b from-sky-200 via-sky-100 to-amber-50 rounded-2xl p-4 border border-sky-300 overflow-hidden flex items-end justify-center select-none shadow-inner">
            {/* Sun */}
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <div className="w-12 h-12 bg-amber-400 rounded-full shadow-lg animate-pulse flex items-center justify-center text-xl">
                ☀️
              </div>
              <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                የፀሐይ ሙቀት
              </span>
            </div>

            {/* Altitude & Cold Arrow on the left */}
            <div className="absolute left-6 top-24 bottom-12 flex flex-col items-center justify-between z-10">
              <span className="text-[11px] font-black text-blue-900 bg-blue-100 px-2 py-1 rounded-md shadow-sm">
                ከፍታ ሲጨምር ቅዝቃዜ ይጨምራል ❄️
              </span>
              <div className="w-1.5 flex-1 bg-gradient-to-t from-red-500 via-amber-400 to-blue-600 rounded-full my-2"></div>
              <span className="text-[11px] font-black text-red-900 bg-red-100 px-2 py-1 rounded-md shadow-sm">
                ከፍታ ሲቀንስ ሙቀት ይጨምራል 🔥
              </span>
            </div>

            {/* Mountain Layers SVG */}
            <svg viewBox="0 0 600 320" className="w-full h-full max-w-2xl drop-shadow-md">
              {/* Layer 5: Bereha (Bottom desert) */}
              <polygon points="50,320 550,320 500,260 100,260" fill="#f59e0b" opacity="0.8" />
              {/* Layer 4: Kolla (Dire Dawa) */}
              <polygon points="100,260 500,260 450,200 150,200" fill="#10b981" opacity="0.85" />
              {/* Layer 3: Weyna Dega */}
              <polygon points="150,200 450,200 400,140 200,140" fill="#06b6d4" opacity="0.9" />
              {/* Layer 2: Dega (Kulubi) */}
              <polygon points="200,140 400,140 350,70 250,70" fill="#3b82f6" opacity="0.95" />
              {/* Layer 1: Kur / Wurch (Snow Peak) */}
              <polygon points="250,70 350,70 300,15" fill="#6366f1" />
              <polygon points="280,35 320,35 300,15" fill="#ffffff" />

              {/* Labels on Diagram */}
              {/* Kur */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLabelId('l1')}
              >
                <circle cx="300" cy="45" r="14" fill="#ffffff" stroke="#4f46e5" strokeWidth="3" />
                <text x="300" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4f46e5">1</text>
                <rect x="330" y="35" width="130" height="22" rx="4" fill="#4f46e5" />
                <text x="395" y="50" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">ቁር/ውርጭ (&gt;3000m)</text>
              </g>

              {/* Dega */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveLabelId('l2')}
              >
                <circle cx="300" cy="105" r="14" fill="#ffffff" stroke="#2563eb" strokeWidth="3" />
                <text x="300" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">2</text>
                <rect x="330" y="95" width="150" height="22" rx="4" fill="#2563eb" />
                <text x="405" y="110" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">ደጋ - ቁሉቢ (2300-3300m)</text>
              </g>

              {/* Weyna Dega */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveLabelId('l3')}
              >
                <circle cx="300" cy="170" r="14" fill="#ffffff" stroke="#0891b2" strokeWidth="3" />
                <text x="300" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0891b2">3</text>
                <rect x="330" y="160" width="150" height="22" rx="4" fill="#0891b2" />
                <text x="405" y="175" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">ወይናደጋ (1500-2300m)</text>
              </g>

              {/* Kolla (Dire Dawa) */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveLabelId('l4')}
              >
                <circle cx="300" cy="230" r="14" fill="#ffffff" stroke="#059669" strokeWidth="3" />
                <text x="300" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#059669">4</text>
                <rect x="330" y="220" width="180" height="22" rx="4" fill="#059669" />
                <text x="420" y="235" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">ቆላ - ድሬዳዋ 950-1250m ★</text>
              </g>

              {/* Bereha */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveLabelId('l5')}
              >
                <circle cx="300" cy="290" r="14" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
                <text x="300" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#d97706">5</text>
                <rect x="330" y="280" width="140" height="22" rx="4" fill="#d97706" />
                <text x="400" y="295" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">በረሃ (&lt;500m | &gt;25°C)</text>
              </g>
            </svg>
          </div>
        );

      case 'cloud-seeding':
        return (
          <div className="relative w-full aspect-[16/9] max-h-[380px] bg-gradient-to-b from-slate-700 via-sky-800 to-emerald-900 rounded-2xl p-4 border border-slate-600 overflow-hidden flex flex-col justify-between shadow-inner">
            <svg viewBox="0 0 600 320" className="w-full h-full">
              {/* Cloud 1 */}
              <path
                d="M 120 100 A 40 40 0 0 1 180 80 A 50 50 0 0 1 270 80 A 40 40 0 0 1 310 110 A 30 30 0 0 1 290 140 L 130 140 A 30 30 0 0 1 120 100 Z"
                fill="#cbd5e1"
                opacity="0.9"
              />
              {/* Cloud 2 Main */}
              <path
                d="M 280 80 A 50 50 0 0 1 360 50 A 60 60 0 0 1 470 60 A 45 45 0 0 1 520 100 A 35 35 0 0 1 490 140 L 290 140 A 30 30 0 0 1 280 80 Z"
                fill="#94a3b8"
                opacity="0.95"
              />

              {/* Airplane */}
              <g transform="translate(180, 40) scale(0.8)">
                <path d="M 0 20 L 50 15 L 70 0 L 75 3 L 60 15 L 110 15 L 125 5 L 130 6 L 120 18 L 135 19 L 140 23 L 0 23 Z" fill="#ffffff" />
                {/* Chemical trail */}
                <path d="M -50 22 L 0 22" stroke="#facc15" strokeWidth="4" strokeDasharray="6,4" />
              </g>

              {/* Chemical Spray Drops (Yellow stars) */}
              <g fill="#facc15">
                <circle cx="330" cy="100" r="4" />
                <circle cx="360" cy="95" r="5" />
                <circle cx="390" cy="105" r="4" />
                <circle cx="420" cy="98" r="5" />
              </g>

              {/* Falling Rain drops (Blue lines) */}
              <g stroke="#38bdf8" strokeWidth="3" strokeLinecap="round">
                <line x1="200" y1="160" x2="190" y2="190" />
                <line x1="240" y1="170" x2="230" y2="200" />
                <line x1="300" y1="165" x2="290" y2="205" />
                <line x1="340" y1="175" x2="330" y2="215" />
                <line x1="380" y1="160" x2="370" y2="200" />
                <line x1="420" y1="180" x2="410" y2="220" />
                <line x1="460" y1="165" x2="450" y2="205" />
                <line x1="260" y1="210" x2="250" y2="245" />
                <line x1="320" y1="220" x2="310" y2="255" />
                <line x1="370" y1="215" x2="360" y2="250" />
                <line x1="430" y1="230" x2="420" y2="265" />
              </g>

              {/* Ground & Crops */}
              <rect x="0" y="270" width="600" height="50" fill="#15803d" />
              {/* Corn/crops */}
              <g fill="#22c55e">
                <path d="M 50 270 Q 55 240 60 270" stroke="#22c55e" strokeWidth="4" />
                <path d="M 100 270 Q 105 240 110 270" stroke="#22c55e" strokeWidth="4" />
                <path d="M 200 270 Q 205 235 210 270" stroke="#22c55e" strokeWidth="4" />
                <path d="M 350 270 Q 355 230 360 270" stroke="#22c55e" strokeWidth="4" />
                <path d="M 450 270 Q 455 235 460 270" stroke="#22c55e" strokeWidth="4" />
                <path d="M 520 270 Q 525 240 530 270" stroke="#22c55e" strokeWidth="4" />
              </g>

              {/* Diagram Labels */}
              {/* 1. Cloud */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cs1')}>
                <rect x="360" y="20" width="130" height="22" rx="4" fill="#0284c7" />
                <text x="425" y="35" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">1. የተከማቸ ደመና</text>
              </g>
              {/* 2. Airplane */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cs2')}>
                <rect x="50" y="20" width="120" height="22" rx="4" fill="#4f46e5" />
                <text x="110" y="35" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">2. አውሮፕላን</text>
              </g>
              {/* 3. Spray */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cs3')}>
                <rect x="180" y="115" width="130" height="22" rx="4" fill="#eab308" />
                <text x="245" y="130" textAnchor="middle" fontSize="11" fill="#854d0e" fontWeight="bold">3. ኬሚካል መርጨት</text>
              </g>
              {/* 4. Droplets condensation */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cs4')}>
                <rect x="380" y="125" width="170" height="22" rx="4" fill="#2563eb" />
                <text x="465" y="140" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">4. ጠብታዎች መከማቸት</text>
              </g>
              {/* 5. Rain to land */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cs5')}>
                <rect x="230" y="280" width="170" height="24" rx="4" fill="#16a34a" />
                <text x="315" y="296" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">5. ዝናብ ወደ መሬት መውረድ</text>
              </g>
            </svg>
          </div>
        );

      case 'soak-pit':
        return (
          <div className="relative w-full aspect-[16/9] max-h-[380px] bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl p-4 border border-amber-300 overflow-hidden shadow-inner flex items-center justify-center">
            <svg viewBox="0 0 600 320" className="w-full h-full">
              {/* Surface Ground */}
              <rect x="0" y="50" width="600" height="270" fill="#b45309" opacity="0.3" />
              <rect x="0" y="45" width="600" height="10" fill="#15803d" />

              {/* Pit Trench Body */}
              <rect x="160" y="50" width="280" height="250" fill="#fef3c7" stroke="#78350f" strokeWidth="4" />

              {/* Layer 3: Large Stones at Bottom (160 to 440, y 200 to 300) */}
              <rect x="160" y="200" width="280" height="100" fill="#94a3b8" opacity="0.7" />
              {/* Rocks drawn */}
              <g fill="#64748b" stroke="#475569" strokeWidth="2">
                <circle cx="190" cy="230" r="18" />
                <circle cx="235" cy="225" r="22" />
                <circle cx="285" cy="230" r="20" />
                <circle cx="335" cy="225" r="24" />
                <circle cx="385" cy="230" r="19" />
                <circle cx="420" cy="235" r="16" />
                <circle cx="205" cy="270" r="21" />
                <circle cx="255" cy="275" r="23" />
                <circle cx="305" cy="270" r="20" />
                <circle cx="360" cy="275" r="25" />
                <circle cx="410" cy="270" r="18" />
              </g>

              {/* Layer 2: Gravel / ኮረት (y 130 to 200) */}
              <rect x="160" y="130" width="280" height="70" fill="#cbd5e1" opacity="0.8" />
              <g fill="#475569">
                <circle cx="180" cy="150" r="6" /><circle cx="210" cy="145" r="5" /><circle cx="240" cy="155" r="6" />
                <circle cx="270" cy="148" r="5" /><circle cx="300" cy="152" r="7" /><circle cx="330" cy="146" r="5" />
                <circle cx="360" cy="154" r="6" /><circle cx="390" cy="147" r="5" /><circle cx="420" cy="153" r="6" />
                <circle cx="195" cy="175" r="7" /><circle cx="225" cy="170" r="6" /><circle cx="255" cy="180" r="5" />
                <circle cx="285" cy="172" r="6" /><circle cx="315" cy="178" r="7" /><circle cx="345" cy="173" r="5" />
                <circle cx="375" cy="182" r="6" /><circle cx="405" cy="174" r="6" />
              </g>

              {/* Layer 1: Sand / አሸዋ (y 80 to 130) */}
              <rect x="160" y="80" width="280" height="50" fill="#fde047" opacity="0.7" />
              <text x="300" y="105" textAnchor="middle" fontSize="11" fill="#854d0e" fontWeight="bold">ደቃቅ አሸዋ (Sand Layer)</text>

              {/* Inlet Pipe coming from Left */}
              <path d="M 40 70 L 190 70 L 190 95" stroke="#3b82f6" strokeWidth="12" fill="none" strokeLinecap="round" />
              <text x="100" y="60" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="bold">ፈሳሽ መግቢያ ቱቦ 💧</text>

              {/* Safety Cover Lid */}
              <rect x="150" y="40" width="300" height="14" rx="4" fill="#334155" stroke="#0f172a" strokeWidth="2" />
              <text x="300" y="32" textAnchor="middle" fontSize="11" fill="#0f172a" fontWeight="bold">🔒 ጠንካራ ክዳን (Sealed Lid)</text>

              {/* Labels on Diagram */}
              {/* 1. Inlet */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('sp1')}>
                <circle cx="80" cy="70" r="12" fill="#2563eb" />
                <text x="80" y="74" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">1</text>
              </g>
              {/* 2. Lid */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('sp2')}>
                <circle cx="420" cy="30" r="12" fill="#334155" />
                <text x="420" y="34" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">2</text>
              </g>
              {/* 3. Sand */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('sp3')}>
                <circle cx="410" cy="105" r="12" fill="#ca8a04" />
                <text x="410" y="109" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">3</text>
              </g>
              {/* 4. Gravel */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('sp4')}>
                <circle cx="410" cy="165" r="12" fill="#475569" />
                <text x="410" y="169" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">4</text>
              </g>
              {/* 5. Large Stones */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('sp5')}>
                <circle cx="410" cy="250" r="12" fill="#1e293b" />
                <text x="410" y="254" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">5</text>
              </g>
              {/* 6. Clean Absorption */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('sp6')}>
                <rect x="470" y="220" width="120" height="24" rx="4" fill="#15803d" />
                <text x="530" y="236" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">6. ወደ አፈር መስረግ</text>
              </g>
            </svg>
          </div>
        );

      case 'weather-instruments-diagram':
        return (
          <div className="relative w-full aspect-[16/9] max-h-[380px] bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-200 overflow-hidden flex items-center justify-around shadow-inner">
            <svg viewBox="0 0 600 300" className="w-full h-full">
              {/* 1. Thermometer */}
              <g
                className="cursor-pointer"
                transform="translate(40, 40)"
                onClick={() => setActiveLabelId('wi1')}
              >
                <rect x="25" y="10" width="20" height="160" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                <circle cx="35" cy="175" r="18" fill="#ef4444" />
                <rect x="31" y="60" width="8" height="110" fill="#ef4444" />
                <line x1="45" y1="40" x2="52" y2="40" stroke="#64748b" strokeWidth="2" />
                <line x1="45" y1="70" x2="52" y2="70" stroke="#64748b" strokeWidth="2" />
                <line x1="45" y1="100" x2="52" y2="100" stroke="#64748b" strokeWidth="2" />
                <line x1="45" y1="130" x2="52" y2="130" stroke="#64748b" strokeWidth="2" />
                <circle cx="35" cy="210" r="12" fill="#ef4444" />
                <text x="35" y="214" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">1</text>
                <text x="35" y="235" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">ቴርሞሜትር</text>
                <text x="35" y="248" textAnchor="middle" fontSize="9" fill="#64748b">ሙቀት (°C)</text>
              </g>

              {/* 2. Rain Gauge */}
              <g
                className="cursor-pointer"
                transform="translate(150, 40)"
                onClick={() => setActiveLabelId('wi2')}
              >
                {/* Cylinder with funnel */}
                <path d="M 10 10 L 60 10 L 45 40 L 45 180 L 25 180 L 25 40 Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" opacity="0.8" />
                <rect x="25" y="90" width="20" height="90" fill="#3b82f6" />
                <line x1="45" y1="60" x2="52" y2="60" stroke="#1e40af" strokeWidth="2" />
                <line x1="45" y1="90" x2="52" y2="90" stroke="#1e40af" strokeWidth="2" />
                <line x1="45" y1="120" x2="52" y2="120" stroke="#1e40af" strokeWidth="2" />
                <line x1="45" y1="150" x2="52" y2="150" stroke="#1e40af" strokeWidth="2" />
                <circle cx="35" cy="210" r="12" fill="#2563eb" />
                <text x="35" y="214" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">2</text>
                <text x="35" y="235" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">ሬይንጌጅ</text>
                <text x="35" y="248" textAnchor="middle" fontSize="9" fill="#64748b">ዝናብ (mm)</text>
              </g>

              {/* 3. Barometer */}
              <g
                className="cursor-pointer"
                transform="translate(260, 40)"
                onClick={() => setActiveLabelId('wi3')}
              >
                <circle cx="45" cy="100" r="50" fill="#ffffff" stroke="#7c3aed" strokeWidth="4" />
                <circle cx="45" cy="100" r="5" fill="#7c3aed" />
                <line x1="45" y1="100" x2="70" y2="75" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                <text x="45" y="70" textAnchor="middle" fontSize="9" fill="#6b7280">1013 hPa</text>
                <circle cx="45" cy="210" r="12" fill="#7c3aed" />
                <text x="45" y="214" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">3</text>
                <text x="45" y="235" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">ባሮሜትር</text>
                <text x="45" y="248" textAnchor="middle" fontSize="9" fill="#64748b">ግፊት (Pressure)</text>
              </g>

              {/* 4. Anemometer */}
              <g
                className="cursor-pointer"
                transform="translate(370, 40)"
                onClick={() => setActiveLabelId('wi4')}
              >
                <line x1="45" y1="40" x2="45" y2="180" stroke="#334155" strokeWidth="4" />
                {/* 3 rotating cups */}
                <line x1="15" y1="60" x2="75" y2="60" stroke="#334155" strokeWidth="3" />
                <path d="M 15 50 A 10 10 0 0 1 15 70 Z" fill="#0284c7" />
                <path d="M 75 50 A 10 10 0 0 0 75 70 Z" fill="#0284c7" />
                <circle cx="45" cy="210" r="12" fill="#0284c7" />
                <text x="45" y="214" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">4</text>
                <text x="45" y="235" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">አኒሞሜትር</text>
                <text x="45" y="248" textAnchor="middle" fontSize="9" fill="#64748b">ፍጥነት (Speed)</text>
              </g>

              {/* 5. Wind Vane */}
              <g
                className="cursor-pointer"
                transform="translate(480, 40)"
                onClick={() => setActiveLabelId('wi5')}
              >
                <line x1="45" y1="40" x2="45" y2="180" stroke="#334155" strokeWidth="4" />
                {/* Arrow */}
                <path d="M 10 60 L 65 60 L 65 52 L 85 60 L 65 68 L 65 60 Z" fill="#16a34a" />
                {/* Tail feather */}
                <polygon points="10,50 25,60 10,70" fill="#16a34a" />
                <text x="45" y="100" textAnchor="middle" fontSize="11" fill="#15803d" fontWeight="bold">ሰሜን N</text>
                <circle cx="45" cy="210" r="12" fill="#16a34a" />
                <text x="45" y="214" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">5</text>
                <text x="45" y="235" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">ዊንድቬን</text>
                <text x="45" y="248" textAnchor="middle" fontSize="9" fill="#64748b">አቅጣጫ (Direction)</text>
              </g>
            </svg>
          </div>
        );

      case 'composting-cycle':
        return (
          <div className="relative w-full aspect-[16/9] max-h-[380px] bg-gradient-to-br from-lime-50 via-emerald-50 to-amber-50 rounded-2xl p-4 border border-lime-300 overflow-hidden flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 600 300" className="w-full h-full">
              {/* Circular Cycle Flow */}
              {/* Step 1: Kitchen Peels */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cc1')}>
                <circle cx="120" cy="80" r="45" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
                <text x="120" y="75" textAnchor="middle" fontSize="24">🍌🍎</text>
                <text x="120" y="105" textAnchor="middle" fontSize="10" fill="#854d0e" fontWeight="bold">1. የፍራፍሬ ልጣጭ</text>
              </g>

              {/* Arrow 1 */}
              <path d="M 175 80 Q 240 60 280 80" stroke="#65a30d" strokeWidth="3" fill="none" markerEnd="url(#arrow)" />

              {/* Step 2: Leaves & Grass */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cc2')}>
                <circle cx="330" cy="80" r="45" fill="#fed7aa" stroke="#c2410c" strokeWidth="3" />
                <text x="330" y="75" textAnchor="middle" fontSize="24">🍂🌾</text>
                <text x="330" y="105" textAnchor="middle" fontSize="10" fill="#9a3412" fontWeight="bold">2. ደረቅ ቅጠሎች</text>
              </g>

              {/* Arrow 2 */}
              <path d="M 385 95 Q 460 120 480 160" stroke="#65a30d" strokeWidth="3" fill="none" />

              {/* Step 3: Decomposing Microorganisms */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cc3')}>
                <circle cx="480" cy="200" r="45" fill="#e2e8f0" stroke="#475569" strokeWidth="3" />
                <text x="480" y="195" textAnchor="middle" fontSize="22">🦠💨</text>
                <text x="480" y="222" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">3. ማበስበስ</text>
              </g>

              {/* Arrow 3 */}
              <path d="M 440 225 Q 360 260 300 230" stroke="#65a30d" strokeWidth="3" fill="none" />

              {/* Step 4: Rich Compost Soil */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cc4')}>
                <circle cx="280" cy="215" r="45" fill="#d7ccc8" stroke="#5d4037" strokeWidth="3" />
                <text x="280" y="210" textAnchor="middle" fontSize="24">🪴🪱</text>
                <text x="280" y="238" textAnchor="middle" fontSize="10" fill="#3e2723" fontWeight="bold">4. ለም ኮምፖስት</text>
              </g>

              {/* Arrow 4 */}
              <path d="M 230 215 Q 160 210 120 180" stroke="#65a30d" strokeWidth="3" fill="none" />

              {/* Step 5: Healthy Tree Growth */}
              <g className="cursor-pointer" onClick={() => setActiveLabelId('cc5')}>
                <circle cx="100" cy="200" r="45" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
                <text x="100" y="195" textAnchor="middle" fontSize="26">🌳🍊</text>
                <text x="100" y="225" textAnchor="middle" fontSize="10" fill="#14532d" fontWeight="bold">5. ጤናማ ዛፍ</text>
              </g>

              {/* Arrow 5 closing cycle back to fruit */}
              <path d="M 100 150 Q 95 120 110 115" stroke="#16a34a" strokeWidth="3" fill="none" strokeDasharray="4,3" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-700 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs uppercase tracking-wider font-bold bg-white/25 px-3 py-1 rounded-full">
            4ኛ ክፍል ሳይንስ • ስዕላዊ መግለጫና 5 ፈተናዎች
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          ስዕላዊ ማብራሪያ፣ 3 የህይወት ምሳሌዎች እና 5 የፈተና ጥያቄዎች
        </h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base leading-relaxed">
          እያንዳንዱን ቁልፍ ፅንሰ-ሃሳብ በግልጽ ስዕል እይ፣ በህይወትህ ውስጥ እንዴት እንደሚጠቅም ተረዳ፣ ከዚያም 5ቱን ጥያቄዎች ወዲያው ተፈተን!
        </p>
      </div>

      {/* Concept Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {CONCEPTS_DATA.map((concept) => {
          const isSelected = selectedConceptId === concept.id;
          return (
            <button
              key={concept.id}
              onClick={() => handleSelectConcept(concept.id)}
              className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500 shadow-sm'
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="text-[10px] font-bold text-slate-500 mb-1">
                {concept.badge}
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                {concept.conceptName}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Concept Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 md:p-8 space-y-8">
        {/* Title & Description */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 mb-1">
            <Compass className="w-4 h-4" />
            <span>{activeConcept.englishConcept}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
            {activeConcept.conceptName}
          </h3>
          <p className="text-sm md:text-base text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed">
            {activeConcept.description}
          </p>
        </div>

        {/* 1. DIAGRAM EXPLAINER */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
              ክፍል 1፡ ስዕላዊ መግለጫ (Labeled Diagram with Key Parts)
            </h4>
            <span className="text-xs text-slate-400">ስዕሉ ላይ ቁጥሮቹን ጠቅ አድርግ</span>
          </div>

          {/* SVG Diagram Canvas */}
          {renderSvgDiagram()}

          {/* Diagram Labels Legend */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeConcept.labels.map((lbl) => {
              const isSelected = activeLabelId === lbl.id;
              return (
                <div
                  key={lbl.id}
                  onClick={() => setActiveLabelId(lbl.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all text-xs ${
                    isSelected
                      ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-300'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-slate-900 flex items-center justify-between mb-1">
                    <span>{lbl.amharic}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{lbl.english}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{lbl.role}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. THREE REAL-WORLD EXAMPLES */}
        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h4 className="font-bold text-base md:text-lg text-slate-900">
              ክፍል 2፡ 3 የህይወት ምሳሌዎች (3 Real-World Everyday Examples)
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-600 mb-5">
            ይህ ትምህርት በ 4ኛ ክፍል ተማሪዎች እለት ተእለት ኑሮ ውስጥ እንዴት ጥቅም ላይ እንደሚውል ተመልከት፡
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeConcept.realWorldExamples.map((ex) => (
              <div
                key={ex.number}
                className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {ex.number}
                    </span>
                    <h5 className="font-extrabold text-sm text-amber-950">
                      {ex.title}
                    </h5>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                    {ex.story}
                  </p>
                </div>

                <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200/80 text-[11px] text-amber-900">
                  <span className="font-bold block">💡 ለምን አስፈለገ?</span>
                  {ex.whyItMatters}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. FIVE MULTIPLE-CHOICE QUESTIONS WITH IMMEDIATE FEEDBACK */}
        <div className="pt-6 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <h4 className="font-bold text-base md:text-lg text-slate-900">
                ክፍል 3፡ 5 የፈተና ጥያቄዎች ከቅጽበታዊ ማብራሪያ ጋር (5 MCQs with Immediate Feedback)
              </h4>
            </div>
            <button
              onClick={resetQuiz}
              className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 font-semibold cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> ፈተናውን እንደገና ጀምር
            </button>
          </div>

          <div className="space-y-4">
            {activeConcept.mcqQuestions.map((q, qIdx) => {
              const selectedOption = userAnswers[q.id];
              const isAnswered = selectedOption !== undefined;
              const isCorrect = selectedOption === q.correctIndex;
              const choiceLetters = ['ሀ', 'ለ', 'ሐ', 'መ'];

              return (
                <div
                  key={q.id}
                  className={`p-4 md:p-5 rounded-2xl border transition-all ${
                    isAnswered
                      ? isCorrect
                        ? 'bg-emerald-50/40 border-emerald-300'
                        : 'bg-red-50/40 border-red-300'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center">
                      {qIdx + 1}
                    </span>
                    <h5 className="font-bold text-sm md:text-base text-slate-900">
                      {q.question}
                    </h5>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                    {q.options.map((opt, optIdx) => {
                      const isThisSelected = selectedOption === optIdx;
                      let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                      if (isAnswered) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                        } else if (isThisSelected && !isCorrect) {
                          btnStyle = 'bg-red-500 text-white border-red-500 font-bold';
                        } else {
                          btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleAnswerMCQ(q.id, optIdx, q.correctIndex)}
                          disabled={isAnswered}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-medium text-left flex items-center justify-between transition-colors cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-md bg-black/10 flex items-center justify-center text-[10px] font-bold">
                              {choiceLetters[optIdx]}
                            </span>
                            <span>{opt}</span>
                          </div>
                          {isAnswered && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                          )}
                          {isAnswered && isThisSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-white shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Feedback Box */}
                  {isAnswered && (
                    <div
                      className={`mt-3.5 p-3 rounded-xl text-xs md:text-sm leading-relaxed border flex items-start gap-2.5 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                          : 'bg-red-100 text-red-950 border-red-300'
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <strong className="block mb-0.5">
                          {isCorrect ? 'ትክክል ነህ! 🎉' : 'ትክክል አይደለም! ❌'}
                        </strong>
                        {q.explanation}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
