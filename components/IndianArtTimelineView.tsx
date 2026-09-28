import React, { useState } from 'react';
import { TIMELINE_ARTIFACTS, TimelineArtifact } from '../data/indianArtData';
import { X, ArrowUpRight, BookOpen } from 'lucide-react';

export const IndianArtTimelineView: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('All');
  const [activeArtifact, setActiveArtifact] = useState<TimelineArtifact | null>(null);

  const eras = ['All', 'Ancient & Classical', 'Medieval & Courtly', 'Living Folk & Tribal'];

  const filteredArtifacts =
    selectedEra === 'All'
      ? TIMELINE_ARTIFACTS
      : TIMELINE_ARTIFACTS.filter((a) => a.eraCategory === selectedEra);

  return (
    <div className="space-y-8">
      {/* Interactive Era Filter Bar + Chronological Scrubber */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#D84315]/20">
        <div className="flex flex-wrap items-center gap-1.5">
          {eras.map((era) => (
            <button
              key={era}
              type="button"
              onClick={() => setSelectedEra(era)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedEra === era
                  ? 'bg-[#D84315] text-[#EFECE6]'
                  : 'bg-[#E6E1D6] text-[#655246] hover:text-[#221A15]'
              }`}
            >
              {era === 'All' ? 'All 6 Chronological Eras' : era}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono-tabular text-[#655246]">
          2500 BCE — 20th Century · Click any artifact card to open curatorial dossier
        </div>
      </div>

      {/* Horizontal Quick-Jump Chronological Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {TIMELINE_ARTIFACTS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveArtifact(item)}
            className="text-left p-3 rounded-lg bg-[#F7F5F0] border border-[#D84315]/15 hover:border-[#D84315] transition-all cursor-pointer group"
          >
            <div className="text-[11px] font-mono-tabular text-[#D84315] flex items-center justify-between">
              <span>{item.index}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-xs font-semibold text-[#221A15] truncate mt-1">
              {item.title.split('—')[0].trim()}
            </div>
            <div className="text-[11px] text-[#655246] truncate">{item.year}</div>
          </button>
        ))}
      </div>

      {/* Main Artifact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.map((artifact) => (
          <article
            key={artifact.id}
            onClick={() => setActiveArtifact(artifact)}
            className="group bg-[#F7F5F0] rounded-xl border border-[#D84315]/20 hover:border-[#D84315] p-5 transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Vector Artwork Frame */}
              <div
                className="w-full h-48 rounded-lg overflow-hidden border border-[#221A15]/10 mb-4"
                dangerouslySetInnerHTML={{ __html: artifact.svgMarkup }}
              />

              {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
              <div className="flex items-center gap-1.5 text-xs font-mono-tabular text-[#D84315]">
                <span>{artifact.index}</span>
                <span aria-hidden="true">·</span>
                <span>{artifact.year}</span>
                <span aria-hidden="true">·</span>
                <span>{artifact.type}</span>
              </div>

              <h3 className="font-editorial text-xl font-semibold text-[#221A15] mt-2 group-hover:text-[#D84315] transition-colors">
                {artifact.title}
              </h3>

              <p className="text-xs font-medium text-[#655246] mt-1">
                {artifact.subtitle}
              </p>

              <p className="text-sm text-[#3D3028] mt-3 leading-relaxed">
                {artifact.desc}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-[#D84315]/15 flex items-center justify-between text-xs">
              <span className="text-[#655246] truncate">
                {artifact.tags.join(' · ')}
              </span>
              <span className="font-semibold text-[#D84315] flex items-center gap-1 shrink-0">
                Inspect Context
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Artifact Accession Modal */}
      {activeArtifact && (
        <div
          className="fixed inset-0 z-50 bg-[#221A15]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveArtifact(null);
          }}
        >
          <div className="bg-[#F7F5F0] border border-[#D84315]/35 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-xl">
            <button
              type="button"
              onClick={() => setActiveArtifact(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#D84315] text-[#EFECE6] hover:bg-[#9E2E0B] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
              {activeArtifact.accessionNo} · {activeArtifact.year} · {activeArtifact.eraCategory}
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#221A15] mt-2 pr-10">
              {activeArtifact.title}
            </h2>
            <p className="text-sm font-medium text-[#655246] mt-1">
              {activeArtifact.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-start">
              <div className="md:col-span-5 space-y-4">
                <div
                  className="w-full rounded-xl overflow-hidden border border-[#221A15]/15"
                  dangerouslySetInnerHTML={{ __html: activeArtifact.svgMarkup }}
                />

                {/* Museum Accession Metadata DL */}
                <dl className="text-xs space-y-2 pt-2 border-t border-[#D84315]/15">
                  <div className="flex justify-between gap-2">
                    <dt className="text-[#655246]">Region:</dt>
                    <dd className="font-medium text-right text-[#221A15]">
                      {activeArtifact.region}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 border-t border-[#D84315]/10 pt-2">
                    <dt className="text-[#655246]">Medium:</dt>
                    <dd className="font-medium text-right text-[#221A15]">
                      {activeArtifact.medium}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 border-t border-[#D84315]/10 pt-2">
                    <dt className="text-[#655246]">Dimensions:</dt>
                    <dd className="font-mono-tabular text-right text-[#221A15]">
                      {activeArtifact.dimensions}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Artifact Overview
                  </h4>
                  <p className="text-sm text-[#221A15] leading-relaxed mt-1.5">
                    {activeArtifact.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D84315]/15">
                  <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
                    Historical Context
                  </h4>
                  <p className="text-sm text-[#3D3028] leading-relaxed mt-1.5">
                    {activeArtifact.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D84315]/15">
                  <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
                    Why It Matters (Artistic Significance)
                  </h4>
                  <p className="text-sm text-[#3D3028] leading-relaxed mt-1.5">
                    {activeArtifact.why}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D84315]/15">
                  <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#655246]">
                    Visual & Iconographic Anatomy
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#3D3028]">
                    {activeArtifact.visualAnatomy.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-mono-tabular text-[#D84315]">0{i + 1}.</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
