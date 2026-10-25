import React from 'react';
import { Printer, Check, Star, AlertCircle, BookCheck } from 'lucide-react';

export const SummaryPrintable: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Action Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:hidden">
        <div>
          <h2 className="text-lg font-bold text-slate-800">የፈተና ቀን ፈጣን ማጠቃለያ (Cheat Sheet)</h2>
          <p className="text-xs text-slate-500">ለማተም (Print) ወይም ፈተና ከመግባትህ በፊት ለመከለስ የተዘጋጀ</p>
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
        >
          <Printer className="w-4 h-4" /> ማጠቃለያውን አትም (Print)
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm text-slate-800 print:border-none print:shadow-none print:p-0">
        {/* Header */}
        <div className="border-b-2 border-slate-900 pb-4 mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            የኢትዮጵያ ስርዓተ-ትምህርት • 4ኛ ክፍል
          </span>
          <h1 className="text-2xl font-black text-slate-900 mt-1">
            አካባቢ ሳይንስ ምዕራፍ 3፡ የተፈጥሮ አካባቢያችን
          </h1>
          <p className="text-xs text-slate-600 mt-0.5">
            የፈተና ወሳኝ ነጥቦች፣ ቁልፍ ቀመሮች እና እውነታዎች ማጠቃለያ
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs leading-relaxed">
          {/* Box 1 */}
          <div className="border border-slate-300 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-black text-sm text-blue-900 mb-2 border-b pb-1">
              1. አካባቢ፣ የአየር ሁኔታ እና አየር ንብረት
            </h3>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>አካባቢ፡</strong> አካላዊ (አየር፣ ውሃ፣ አፈር) + ህይወታዊ (ሰው፣ እፅዋት፣ እንስሳት) + ማህበራዊ/ባህላዊ (ህንፃ፣ ከተማ)።</li>
              <li>• <strong>የአየር ሁኔታ (Weather)፡</strong> ለአጭር ጊዜ በትንሽ ቦታ የሚከሰት (በደቂቃ፣ ሰዓት፣ ቀን)።</li>
              <li>• <strong>የአየር ንብረት (Climate)፡</strong> ለረጅም ጊዜ በሰፊ አካባቢ የሚከሰት አማካይ ጠባይ።</li>
              <li>• <strong>ወርቃማ ህግ፡</strong> ከፍታ በጨመረ ቁጥር ሙቀት ይቀንሳል (ይበርዳል)! ከፍታ ሲቀንስ ሙቀት ይጨምራል!</li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="border border-slate-300 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-black text-sm text-amber-900 mb-2 border-b pb-1">
              2. የሙቀት ቀመሮች እና መሳሪያዎች
            </h3>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>የቀኑ አማካይ ሙቀት =</strong> (ከፍተኛ ሙቀት + ዝቅተኛ ሙቀት) ÷ 2</li>
              <li>• <strong>የቀኑ ሙቀት ልዩነት =</strong> የቀኑ ከፍተኛ ሙቀት - የቀኑ ዝቅተኛ ሙቀት</li>
              <li>• <strong>የአመቱ ሙቀት ልዩነት =</strong> የአመቱ ከፍተኛ - የአመቱ ዝቅተኛ</li>
              <li>• <strong>ቴርሞሜትር፡</strong> የሙቀት መጠን መለኪያ</li>
              <li>• <strong>ሬይንጌጅ፡</strong> የዝናብ መጠን መለኪያ (በሚሊሜትር)</li>
              <li>• <strong>ባሮሜትር፡</strong> የአየር ግፊት መለኪያ</li>
              <li>• <strong>አኒሞሜትር፡</strong> የነፋስ ፍጥነት መለኪያ</li>
              <li>• <strong>ዊንድቬን፡</strong> የነፋስ አቅጣጫ መለያ</li>
            </ul>
          </div>

          {/* Box 3 */}
          <div className="border border-slate-300 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-black text-sm text-emerald-900 mb-2 border-b pb-1">
              3. የድሬዳዋ አስተዳደር ወሳኝ ቁጥሮች
            </h3>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>ከፍታ፡</strong> ከባህር ጠለል በላይ 950 - 1250 ሜትር</li>
              <li>• <strong>ዓመታዊ አማካይ ሙቀት፡</strong> 23.5°C</li>
              <li>• <strong>የአየር ንብረት ክልል፡</strong> ቆላ (Kolla)</li>
              <li>• <strong>ዓመታዊ አማካይ ዝናብ፡</strong> እስከ 604 ሚሜ (በልግና ክረምት)</li>
              <li>• <strong>የደን ሽፋን፡</strong> 28% ብቻ (ችግኝ መትከልና አረንጓዴ አሻራ ያስፈልጋል!)</li>
              <li>• <strong>ማዕድናት፡</strong> የኖራ ድንጋይ (ደጋጨብሳ)፣ የሸክላ አፈር (መልካ ጀብዱ)፣ እምነበረድ (ኢጀአነኒ)፣ ኳርትዝ (ኮርቱ)።</li>
            </ul>
          </div>

          {/* Box 4 */}
          <div className="border border-slate-300 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-black text-sm text-purple-900 mb-2 border-b pb-1">
              4. የተፈጥሮ ሃብት እና የቆሻሻ አወጋገድ
            </h3>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>ታዳሽ (ሊተኩ የሚችሉ)፡</strong> ዛፎች፣ ውሃ፣ እንስሳት፣ አየር።</li>
              <li>• <strong>የማይታደሱ (የማይተኩ)፡</strong> ወርቅ፣ ነዳጅ፣ ድንጋይ ከሰል፣ ብረት።</li>
              <li>• <strong>የቆሻሻ አይነቶች፡</strong> ደረቅ ቆሻሻ እና ፈሳሽ ቆሻሻ።</li>
              <li>• <strong>ማቃጠል፡</strong> የቆሻሻን መጠን በ 30% ይቀንሳል።</li>
              <li>• <strong>ማበስበስ (ኮምፖስት)፡</strong> የእፅዋት ቅሪትን አበስብሶ ለአፈር ማዳበሪያ ማድረግ።</li>
              <li>• <strong>ፈሳሽ ቆሻሻ፡</strong> ክዳን ባለው የማስረጊያ ጉድጓድ (Soak pit) ውስጥ መግባት አለበት።</li>
            </ul>
          </div>
        </div>

        {/* 5 Climate Zones quick reference table */}
        <div className="mt-5 border border-slate-300 rounded-xl p-4">
          <h3 className="font-black text-xs uppercase tracking-wider text-slate-700 mb-2">
            የኢትዮጵያ 5ቱ የአየር ንብረት ክልሎች ፈጣን ሰንጠረዥ (ገጽ 68)
          </h3>
          <div className="grid grid-cols-5 text-center text-[11px] divide-x divide-slate-200 bg-slate-100 p-2 rounded-lg font-bold">
            <div>
              <span className="block text-blue-700">ቁር / ውርጭ</span>
              <span className="font-normal block text-slate-600">&gt;3000 ሜትር</span>
              <span className="text-slate-800">&lt;10°C</span>
            </div>
            <div>
              <span className="block text-teal-700">ደጋ</span>
              <span className="font-normal block text-slate-600">2300-3300 ሜ</span>
              <span className="text-slate-800">10-15°C</span>
            </div>
            <div>
              <span className="block text-green-700">ወይናደጋ</span>
              <span className="font-normal block text-slate-600">1500-2300 ሜ</span>
              <span className="text-slate-800">15-20°C</span>
            </div>
            <div className="bg-amber-100 rounded">
              <span className="block text-amber-800">ቆላ (ድሬዳዋ)</span>
              <span className="font-normal block text-slate-600">500-1500 ሜ</span>
              <span className="text-slate-800">20-25°C</span>
            </div>
            <div>
              <span className="block text-red-700">በረሃ</span>
              <span className="font-normal block text-slate-600">&lt;500 ሜትር</span>
              <span className="text-slate-800">&gt;25°C</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t text-center text-[10px] text-slate-400">
          መልካም የፈተና ውጤት ለሁሉም የ4ኛ ክፍል ተማሪዎች! 🌟
        </div>
      </div>
    </div>
  );
};
