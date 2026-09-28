/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { IndianArtTimelineView } from './components/IndianArtTimelineView';
import { IndianArtMapView } from './components/IndianArtMapView';
import { RegionalFusionView } from './components/RegionalFusionView';
import { HtmlExportModal } from './components/HtmlExportModal';
import { AssignmentTab, triggerHtmlDownload } from './utils/standaloneHtmlBuilder';
import { Download, FileCode } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<AssignmentTab>('timeline');
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const heroWordMap: Record<AssignmentTab, string> = {
    timeline: 'CHRONICLE',
    map: 'HERITAGE',
    fusion: 'SANGAM',
  };

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#221A15] flex flex-col">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#EFECE6]/95 backdrop-blur-md border-b border-[#D84315]/20 px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('timeline');
          }}
          className="font-display-monument text-xl font-extrabold tracking-tight text-[#D84315] whitespace-nowrap"
        >
          Kala Archive
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#655246]">
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`py-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === 'timeline'
                ? 'text-[#D84315] border-[#D84315] font-semibold'
                : 'border-transparent hover:text-[#221A15]'
            }`}
          >
            01. Timeline CO1
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('map')}
            className={`py-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === 'map'
                ? 'text-[#D84315] border-[#D84315] font-semibold'
                : 'border-transparent hover:text-[#221A15]'
            }`}
          >
            02. Art Map CO1
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fusion')}
            className={`py-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === 'fusion'
                ? 'text-[#D84315] border-[#D84315] font-semibold'
                : 'border-transparent hover:text-[#221A15]'
            }`}
          >
            03. Regional Fusion CO2
          </button>
          <button
            type="button"
            onClick={() => setExportModalOpen(true)}
            className="py-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 border-transparent hover:text-[#D84315]"
          >
            HTML Package
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setExportModalOpen(true)}
            className="px-4 py-2 text-xs font-semibold text-[#EFECE6] bg-[#D84315] hover:bg-[#9E2E0B] rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Download 3 HTML Files
          </button>
        </div>
      </header>

      {/* Mobile Navigation Strip */}
      <div className="md:hidden flex items-center justify-around border-b border-[#D84315]/20 bg-[#F7F5F0] px-3 py-2 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setActiveTab('timeline')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
            activeTab === 'timeline' ? 'bg-[#D84315] text-[#EFECE6]' : 'text-[#655246]'
          }`}
        >
          01. Timeline
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('map')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
            activeTab === 'map' ? 'bg-[#D84315] text-[#EFECE6]' : 'text-[#655246]'
          }`}
        >
          02. Art Map
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('fusion')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
            activeTab === 'fusion' ? 'bg-[#D84315] text-[#EFECE6]' : 'text-[#655246]'
          }`}
        >
          03. Fusion CO2
        </button>
      </div>

      {/* Main Content Container */}
      <main id="top" className="flex-1 max-w-[1340px] w-full mx-auto px-6 lg:px-12 pt-8 pb-20">
        {/* Loket-Inspired Warm Editorial Upper Architecture */}
        <section className="pb-6 border-b border-[#D84315]/20">
          {/* Terracotta Rhythmic Dots + Miniature Artifact Stamp */}
          <div className="flex items-center justify-between mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D84315]" />
            <div className="w-14 h-14 rounded-lg bg-[#E6DCD0] border border-[#D84315]/25 flex items-center justify-center overflow-hidden shadow-2xs">
              <svg viewBox="0 0 64 64" className="w-12 h-12">
                <rect width="64" height="64" fill="#E9C46A" />
                <circle cx="32" cy="32" r="20" fill="none" stroke="#D84315" strokeWidth="2.5" />
                <polygon points="24,24 40,24 32,34" fill="#9E2E0B" />
                <polygon points="32,34 24,44 40,44" fill="#9E2E0B" />
                <circle cx="32" cy="18" r="3.5" fill="#9E2E0B" />
              </svg>
            </div>
            <div className="flex items-center gap-16">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D84315]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D84315]" />
            </div>
          </div>

          {/* 3-Column Editorial Grid in Warm Terracotta Ink */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-[13px] leading-relaxed text-[#D84315]">
            <p className="max-w-sm">
              We present a curated digital archive of Indian Art History—spanning 2500 BCE Harappan bronzes and Ajanta murals to living Madhubani, Warli, and Kalamkari folk traditions.
            </p>
            <p className="max-w-sm">
              From chronological inquiry (CO1) and interactive OpenStreetMap cartography (CO1) to regional Warli × Kalamkari visual synthesis (CO2). Designed for interactive academic exploration.
            </p>
            <div className="space-y-1 font-mono-tabular">
              <div>CLA-I Assignment Package · CO1 &amp; CO2</div>
              <div>01. Timeline · 02. Leaflet Map · 03. Regional Fusion</div>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    triggerHtmlDownload('timeline', '1-indian-art-timeline-co1.html')
                  }
                  className="underline hover:text-[#221A15] cursor-pointer"
                >
                  1-timeline.html
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => triggerHtmlDownload('map', '2-indian-art-map-co1.html')}
                  className="underline hover:text-[#221A15] cursor-pointer"
                >
                  2-map.html
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() =>
                    triggerHtmlDownload('fusion', '3-warli-kalamkari-fusion-co2.html')
                  }
                  className="underline hover:text-[#221A15] cursor-pointer"
                >
                  3-fusion.html
                </button>
              </div>
            </div>
          </div>

          {/* Monumental Display Word + Sculptural Terracotta Kalasha Vessel Overlap */}
          <div className="relative mt-6 pt-2 pb-2 select-none overflow-hidden">
            <h1
              className="font-display-monument font-extrabold text-[#D84315] uppercase text-center leading-[0.86] tracking-tighter"
              style={{ fontSize: 'clamp(3.6rem, 13.5vw, 11.2rem)' }}
            >
              {heroWordMap[activeTab]}
            </h1>

            {/* Overlapping Sculptural Terracotta Kalasha / Vessel Motif (Echoing Loket Hero Composition) */}
            <div className="hidden sm:flex justify-center -mt-16 lg:-mt-24 pointer-events-none relative z-10">
              <svg
                viewBox="0 0 180 120"
                className="w-36 lg:w-44 h-auto drop-shadow-md animate-float-slow"
              >
                {/* Kalasha Neck & Rim */}
                <rect x="64" y="8" width="52" height="10" rx="5" fill="#F09D83" />
                <rect x="60" y="18" width="60" height="14" rx="4" fill="#E58568" />
                {/* Ribbed Terracotta Vessel Body */}
                <path
                  d="M 62 32 C 52 55 44 85 40 118 L 140 118 C 136 85 128 55 118 32 Z"
                  fill="#EB8C70"
                />
                {/* Cord Loop Handle (like reference image) */}
                <path
                  d="M 118 34 C 152 28 168 58 148 66 C 134 72 126 44 118 38"
                  fill="none"
                  stroke="#EB8C70"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                {/* Subtle Warli / Kalasha Rib Lines */}
                <line x1="56" y1="54" x2="124" y2="54" stroke="#D84315" strokeWidth="1.5" opacity="0.45" />
                <line x1="50" y1="78" x2="130" y2="78" stroke="#D84315" strokeWidth="1.5" opacity="0.45" />
                <line x1="45" y1="100" x2="135" y2="100" stroke="#D84315" strokeWidth="1.5" opacity="0.45" />
                <circle cx="90" cy="43" r="6" fill="#F4A991" stroke="#D84315" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </section>

        {/* Assignment Switcher & Instant HTML File Download Strip */}
        <section className="py-6 mb-6 border-b border-[#D84315]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#E6E1D6] rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-[#D84315] text-[#EFECE6] shadow-xs'
                  : 'text-[#4A3B31] hover:text-[#221A15]'
              }`}
            >
              01. Interactive Indian Art Timeline (CO1)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('map')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'map'
                  ? 'bg-[#D84315] text-[#EFECE6] shadow-xs'
                  : 'text-[#4A3B31] hover:text-[#221A15]'
              }`}
            >
              02. Interactive Indian Art Map (CO1)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('fusion')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'fusion'
                  ? 'bg-[#D84315] text-[#EFECE6] shadow-xs'
                  : 'text-[#4A3B31] hover:text-[#221A15]'
              }`}
            >
              03. Warli × Kalamkari Fusion (CO2)
            </button>
          </div>

          {/* Direct Single-Click Download for Current Activity HTML */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const fileMap: Record<AssignmentTab, string> = {
                  timeline: '1-indian-art-timeline-co1.html',
                  map: '2-indian-art-map-co1.html',
                  fusion: '3-warli-kalamkari-fusion-co2.html',
                };
                triggerHtmlDownload(activeTab, fileMap[activeTab]);
              }}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#F7F5F0] text-[#221A15] border border-[#D84315]/30 hover:border-[#D84315] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5 text-[#D84315]" />
              Download This Activity (.html)
            </button>
          </div>
        </section>

        {/* Active Assignment View */}
        {activeTab === 'timeline' && (
          <section aria-labelledby="heading-timeline" className="space-y-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
                Activity 01 · Course Outcome 1 (CO1)
              </div>
              <h2
                id="heading-timeline"
                className="font-editorial text-3xl sm:text-4xl font-semibold text-[#221A15] mt-1"
              >
                Interactive Indian Art Timeline
              </h2>
              <p className="text-sm text-[#655246] mt-2 leading-relaxed">
                Explore six defining epochs of Indian art—Indus Valley, Ajanta, Chola, Mughal, Madhubani, and Warli. Click any artifact card to inspect its historical context, medium, and enduring cultural significance.
              </p>
            </div>
            <IndianArtTimelineView />
          </section>
        )}

        {activeTab === 'map' && (
          <section aria-labelledby="heading-map" className="space-y-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
                Activity 02 · Course Outcome 1 (CO1) · Leaflet + OpenStreetMap
              </div>
              <h2
                id="heading-map"
                className="font-editorial text-3xl sm:text-4xl font-semibold text-[#221A15] mt-1"
              >
                Interactive Indian Art Heritage Map
              </h2>
              <p className="text-sm text-[#655246] mt-2 leading-relaxed">
                Navigate eight landmark centers of Indian art history—Ajanta, Ellora, Thanjavur, Khajuraho, Madhubani, the Warli region, Puri, and Jaipur—with interactive OpenStreetMap markers and regional filters.
              </p>
            </div>
            <IndianArtMapView />
          </section>
        )}

        {activeTab === 'fusion' && (
          <section aria-labelledby="heading-fusion" className="space-y-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D84315]">
                Activity 03 · Course Outcome 2 (CO2) · Regional Painting Fusion
              </div>
              <h2
                id="heading-fusion"
                className="font-editorial text-3xl sm:text-4xl font-semibold text-[#221A15] mt-1"
              >
                Prakriti Sangam: Warli × Kalamkari Digital Fusion
              </h2>
              <p className="text-sm text-[#655246] mt-2 leading-relaxed">
                An interactive digital fusion artwork uniting geometric Warli tribal figures and nature with floral Kalamkari Tree of Life motifs and dual decorative borders, accompanied by a ready-made project description and presentation points.
              </p>
            </div>
            <RegionalFusionView />
          </section>
        )}
      </main>

      {/* Quiet Archival Footer */}
      <footer className="border-t border-[#D84315]/20 bg-[#E6E1D6]/60 py-8 px-6 lg:px-12 mt-auto">
        <div className="max-w-[1340px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-[#655246]">
          <div>
            Kala Archive · CLA-I Indian Art History &amp; Regional Painting Fusion Package (CO1 &amp; CO2)
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setExportModalOpen(true)}
              className="text-[#D84315] font-semibold hover:underline cursor-pointer"
            >
              Download 3 Standalone HTML Files (Inbuilt CSS &amp; JS)
            </button>
          </div>
        </div>
      </footer>

      {/* Modal for Downloading / Copying the 3 Standalone HTML Files */}
      <HtmlExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />
    </div>
  );
}
