import React from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';

export const PdfViewerModal: React.FC = () => {
  const pdfUrl = '/assets/aistudio/Enviroment_science_chapter_three_bd295ad0.pdf';

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-50 text-red-600 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              ኦሪጅናል የተማሪ መጽሐፍ (Original Textbook PDF)
            </h3>
            <p className="text-xs text-slate-500">
              አካባቢ ሳይንስ 4ኛ ክፍል • ምዕራፍ 3 (ገጽ 60 - 90)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" /> በሙሉ ስክሪን ክፈት (Open Full)
          </a>
          <a
            href={pdfUrl}
            download="Grade4_Environment_Science_Chapter3.pdf"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" /> አውርድ (Download)
          </a>
        </div>
      </div>

      {/* PDF View Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-[700px] flex flex-col">
        <iframe
          src={pdfUrl}
          className="w-full h-full border-none"
          title="የተማሪ መጽሐፍ ገጽ 60 - 90"
        />
      </div>
    </div>
  );
};
