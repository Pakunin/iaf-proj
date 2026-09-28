import React, { useState } from 'react';
import { WarliKalamkariCanvas } from './WarliKalamkariCanvas';
import { FUSION_PROJECT_DATA } from '../data/indianArtData';
import { Copy, Check, Presentation, FileText } from 'lucide-react';

export const RegionalFusionView: React.FC = () => {
  const [copiedDesc, setCopiedDesc] = useState(false);
  const [copiedPoints, setCopiedPoints] = useState(false);

  const handleCopyDescription = () => {
    navigator.clipboard.writeText(FUSION_PROJECT_DATA.projectDescription);
    setCopiedDesc(true);
    setTimeout(() => setCopiedDesc(false), 2000);
  };

  const handleCopyPresentationPoints = () => {
    const text = FUSION_PROJECT_DATA.presentationPoints
      .map((p) => `${p.slide}. ${p.heading}\n${p.bullet}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedPoints(true);
    setTimeout(() => setCopiedPoints(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Interactive Warli x Kalamkari Digital Fusion Artwork Studio */}
      <WarliKalamkariCanvas />

      {/* Ready-Made Project Description & Presentation Points Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#D84315]/20">
        {/* Left 6 Cols: Ready-Made Project Description */}
        <div className="lg:col-span-6 bg-[#F7F5F0] rounded-xl border border-[#D84315]/20 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 border-b border-[#D84315]/15 pb-4">
              <div>
                <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  CO2 Ready-Made Submission Copy
                </div>
                <h3 className="font-editorial text-2xl font-semibold text-[#221A15] mt-1">
                  Project Description
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCopyDescription}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#221A15] text-[#EFECE6] hover:bg-[#D84315] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                {copiedDesc ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied Description
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Description
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#2E231D] leading-relaxed">
              {FUSION_PROJECT_DATA.projectDescription.split('\n\n').map((para, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'first-letter:text-4xl first-letter:font-editorial first-letter:font-semibold first-letter:text-[#D84315] first-letter:float-left first-letter:mr-3 first-letter:leading-none'
                      : ''
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#D84315]/15 text-xs font-mono-tabular text-[#655246]">
            TITLE: &ldquo;{FUSION_PROJECT_DATA.title}&rdquo; · MEDIUM: DIGITAL VECTOR SYNTHESIS
          </div>
        </div>

        {/* Right 6 Cols: Ready-Made Presentation Points */}
        <div className="lg:col-span-6 bg-[#F7F5F0] rounded-xl border border-[#D84315]/20 p-6 sm:p-8 space-y-5">
          <div className="flex items-center justify-between gap-4 border-b border-[#D84315]/15 pb-4">
            <div>
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315] flex items-center gap-1.5">
                <Presentation className="w-3.5 h-3.5" />
                CO2 Viva &amp; Slide Deck Guide
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-[#221A15] mt-1">
                Ready-Made Presentation Points
              </h3>
            </div>

            <button
              type="button"
              onClick={handleCopyPresentationPoints}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#D84315] text-[#EFECE6] hover:bg-[#9E2E0B] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              {copiedPoints ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied Points
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy All 5 Points
                </>
              )}
            </button>
          </div>

          <div className="divide-y divide-[#D84315]/15">
            {FUSION_PROJECT_DATA.presentationPoints.map((pt) => (
              <div key={pt.slide} className="py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono-tabular text-xs font-semibold text-[#D84315]">
                    {pt.slide}.
                  </span>
                  <h4 className="font-editorial text-base font-semibold text-[#221A15]">
                    {pt.heading}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4A3B31] mt-1 pl-6 leading-relaxed">
                  {pt.bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparative Synthesis Table */}
      <div className="bg-[#F7F5F0] rounded-xl border border-[#D84315]/20 p-6 sm:p-8 space-y-4">
        <div>
          <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
            CO2 Analytical Matrix
          </div>
          <h3 className="font-editorial text-2xl font-semibold text-[#221A15] mt-1">
            Regional Dialogue: Warli Tradition vs. Kalamkari Tradition
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#D84315]/25 text-xs font-mono-tabular uppercase text-[#655246]">
                <th className="py-3 pr-4">Artistic Dimension</th>
                <th className="py-3 px-4">Warli (Maharashtra)</th>
                <th className="py-3 px-4">Kalamkari (Andhra Pradesh)</th>
                <th className="py-3 pl-4 text-[#D84315]">Prakriti Sangam Fusion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D84315]/15">
              {FUSION_PROJECT_DATA.comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="align-top">
                  <td className="py-3.5 pr-4 font-semibold text-[#221A15]">
                    {row.dimension}
                  </td>
                  <td className="py-3.5 px-4 text-[#4A3B31]">{row.warli}</td>
                  <td className="py-3.5 px-4 text-[#4A3B31]">{row.kalamkari}</td>
                  <td className="py-3.5 pl-4 font-medium text-[#221A15]">
                    {row.fusionSynthesis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
