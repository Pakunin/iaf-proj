import React, { useState } from 'react';
import {
  AssignmentTab,
  buildStandaloneAssignmentHtml,
  triggerHtmlDownload,
} from '../utils/standaloneHtmlBuilder';
import { Download, Copy, Check, X, FileCode, FolderDown } from 'lucide-react';

interface HtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FILES_META: {
  tab: AssignmentTab;
  filename: string;
  label: string;
  co: string;
  desc: string;
}[] = [
  {
    tab: 'timeline',
    filename: '1-indian-art-timeline-co1.html',
    label: 'Activity 1: Interactive Indian Art Timeline',
    co: 'CO1',
    desc: 'Opens directly to the Interactive Timeline (Indus Valley, Ajanta, Chola, Mughal, Madhubani, Warli) with inbuilt CSS/JS and navigation across the full site.',
  },
  {
    tab: 'map',
    filename: '2-indian-art-map-co1.html',
    label: 'Activity 2: Interactive Indian Art Map (Leaflet)',
    co: 'CO1',
    desc: 'Opens directly to the Leaflet + OpenStreetMap view covering Ajanta, Ellora, Thanjavur, Khajuraho, Madhubani, Warli region, Puri, and Jaipur.',
  },
  {
    tab: 'fusion',
    filename: '3-warli-kalamkari-fusion-co2.html',
    label: 'Activity 3: Warli × Kalamkari Painting Fusion',
    co: 'CO2',
    desc: 'Opens directly to the Warli × Kalamkari Digital Fusion artwork, ready-made Project Description, and Presentation Points.',
  },
];

export const HtmlExportModal: React.FC<HtmlExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [previewTab, setPreviewTab] = useState<AssignmentTab>('timeline');
  const [copiedTab, setCopiedTab] = useState<AssignmentTab | null>(null);

  if (!isOpen) return null;

  const handleCopyCode = (tab: AssignmentTab) => {
    const html = buildStandaloneAssignmentHtml(tab);
    navigator.clipboard.writeText(html);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const handleDownloadAllThree = () => {
    FILES_META.forEach((f, idx) => {
      setTimeout(() => {
        triggerHtmlDownload(f.tab, f.filename);
      }, idx * 280);
    });
  };

  const currentCode = buildStandaloneAssignmentHtml(previewTab);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#221A15]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#EFECE6] border border-[#D84315]/35 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#D84315] text-[#EFECE6] hover:bg-[#9E2E0B] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close export modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-wrap items-start justify-between gap-4 pr-10 border-b border-[#D84315]/20 pb-5">
          <div>
            <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
              CLA-I Submission Package · 3 Standalone Single-File HTML Exports
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#221A15] mt-1">
              Download 3 Inbuilt HTML Files for Portal Upload
            </h2>
            <p className="text-sm text-[#655246] mt-1 max-w-2xl">
              Each file has 100% inbuilt CSS &amp; JavaScript and shares the unified Kala Archive website while defaulting to its respective assignment (Timeline CO1, Map CO1, or Fusion CO2).
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownloadAllThree}
            className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#D84315] text-[#EFECE6] hover:bg-[#9E2E0B] transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-xs"
          >
            <FolderDown className="w-4 h-4" />
            Download All 3 HTML Files
          </button>
        </div>

        {/* 3 File Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FILES_META.map((item) => (
            <div
              key={item.tab}
              className={`p-5 rounded-xl border flex flex-col justify-between space-y-4 transition-colors ${
                previewTab === item.tab
                  ? 'bg-[#F7F5F0] border-[#D84315]'
                  : 'bg-[#F7F5F0]/70 border-[#D84315]/20'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[#D84315]">
                  <span>{item.co} ASSIGNMENT</span>
                  <FileCode className="w-4 h-4" />
                </div>
                <div className="font-mono-tabular text-xs font-semibold text-[#221A15] break-all">
                  {item.filename}
                </div>
                <h3 className="font-editorial text-base font-semibold text-[#221A15]">
                  {item.label}
                </h3>
                <p className="text-xs text-[#655246] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D84315]/15 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => triggerHtmlDownload(item.tab, item.filename)}
                  className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold bg-[#D84315] text-[#EFECE6] hover:bg-[#9E2E0B] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download .html
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPreviewTab(item.tab);
                    handleCopyCode(item.tab);
                  }}
                  className="px-3 py-2 rounded-lg text-xs font-semibold bg-[#221A15] text-[#EFECE6] hover:bg-[#3D3028] transition-colors flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
                >
                  {copiedTab === item.tab ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy HTML
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Code Preview Box */}
        <div className="bg-[#221A15] text-[#EFECE6] rounded-xl p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tabular text-[#F4A27E]">
                Inbuilt HTML + CSS + JS Source Preview:
              </span>
              {FILES_META.map((f) => (
                <button
                  key={f.tab}
                  type="button"
                  onClick={() => setPreviewTab(f.tab)}
                  className={`px-2.5 py-1 rounded text-xs font-mono-tabular cursor-pointer ${
                    previewTab === f.tab
                      ? 'bg-[#D84315] text-[#EFECE6]'
                      : 'bg-white/10 text-[#D6CFC4] hover:bg-white/20'
                  }`}
                >
                  {f.filename}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleCopyCode(previewTab)}
              className="text-xs font-mono-tabular text-[#F4A27E] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy Full Single-File Code
            </button>
          </div>
          <pre className="text-[11px] font-mono-tabular text-[#E6E1D6] overflow-x-auto max-h-48 leading-relaxed">
            {currentCode}
          </pre>
        </div>
      </div>
    </div>
  );
};
