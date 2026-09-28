import React, { useState, useRef } from 'react';
import { FUSION_PROJECT_DATA, FusionHotspot } from '../data/indianArtData';
import { Eye, Download, Sparkles, Layers } from 'lucide-react';

interface WarliKalamkariCanvasProps {
  onSelectHotspot?: (hotspot: FusionHotspot) => void;
}

type PaletteMode = 'terracotta' | 'srikalahasti' | 'geru';

const PALETTES: Record<
  PaletteMode,
  {
    name: string;
    subtitle: string;
    bg: string;
    innerBg: string;
    kalamPrimary: string;
    kalamSecondary: string;
    kalamAccent: string;
    warliStroke: string;
    borderStroke: string;
  }
> = {
  terracotta: {
    name: 'Loket Terracotta & Alabaster',
    subtitle: 'Warm Parchment + Burnt Vermilion + Deep Espresso',
    bg: '#EFECE6',
    innerBg: '#9E2E0B',
    kalamPrimary: '#D84315',
    kalamSecondary: '#B87B28',
    kalamAccent: '#264653',
    warliStroke: '#F7F5F0',
    borderStroke: '#221A15',
  },
  srikalahasti: {
    name: 'Srikalahasti Natural Dye',
    subtitle: 'Myrobalan Cream + Madder Red + Indigo Kasim',
    bg: '#F4E8D1',
    innerBg: '#233947',
    kalamPrimary: '#B3321A',
    kalamSecondary: '#C88A2B',
    kalamAccent: '#3B6E5C',
    warliStroke: '#FBF6EC',
    borderStroke: '#221A15',
  },
  geru: {
    name: 'Sahyadri Geru & Ochre',
    subtitle: 'Red Earth Wash + Rice Paste Ivory + Turmeric Gold',
    bg: '#E8DAC5',
    innerBg: '#7A2815',
    kalamPrimary: '#C84B24',
    kalamSecondary: '#D99B38',
    kalamAccent: '#2F4842',
    warliStroke: '#FFFDF9',
    borderStroke: '#38180E',
  },
};

export const WarliKalamkariCanvas: React.FC<WarliKalamkariCanvasProps> = () => {
  const [showWarli, setShowWarli] = useState(true);
  const [showKalamkari, setShowKalamkari] = useState(true);
  const [showBorders, setShowBorders] = useState(true);
  const [showHotspots, setShowHotspots] = useState(true);
  const [paletteKey, setPaletteKey] = useState<PaletteMode>('terracotta');
  const [activeHotspot, setActiveHotspot] = useState<FusionHotspot | null>(
    FUSION_PROJECT_DATA.hotspots[0]
  );

  const svgRef = useRef<SVGSVGElement | null>(null);
  const p = PALETTES[paletteKey];

  const handleDownloadSvg = () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'warli-kalamkari-fusion-co2.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Generate 12 Warli dancers arranged in a circle around the center (500, 470)
  const dancerAngles = Array.from({ length: 12 }, (_, i) => (i * 30 * Math.PI) / 180);

  // Generate decorative triangle teeth along the Chowk border
  const topTriangles = Array.from({ length: 24 }, (_, i) => 140 + i * 30);
  const sideTriangles = Array.from({ length: 16 }, (_, i) => 130 + i * 30);

  return (
    <div className="space-y-6">
      {/* Interactive Studio Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#D84315]/20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#655246] mr-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#D84315]" />
            Tradition Layers:
          </span>
          <button
            type="button"
            onClick={() => setShowWarli((v) => !v)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              showWarli
                ? 'bg-[#D84315] text-[#EFECE6]'
                : 'bg-[#E6E1D6] text-[#655246] hover:text-[#221A15]'
            }`}
          >
            Warli Geometry {showWarli ? 'On' : 'Off'}
          </button>
          <button
            type="button"
            onClick={() => setShowKalamkari((v) => !v)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              showKalamkari
                ? 'bg-[#D84315] text-[#EFECE6]'
                : 'bg-[#E6E1D6] text-[#655246] hover:text-[#221A15]'
            }`}
          >
            Kalamkari Flora {showKalamkari ? 'On' : 'Off'}
          </button>
          <button
            type="button"
            onClick={() => setShowBorders((v) => !v)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              showBorders
                ? 'bg-[#D84315] text-[#EFECE6]'
                : 'bg-[#E6E1D6] text-[#655246] hover:text-[#221A15]'
            }`}
          >
            Dual Borders {showBorders ? 'On' : 'Off'}
          </button>
          <button
            type="button"
            onClick={() => setShowHotspots((v) => !v)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              showHotspots
                ? 'bg-[#221A15] text-[#EFECE6]'
                : 'bg-[#E6E1D6] text-[#655246] hover:text-[#221A15]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Callout Pins
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(['terracotta', 'srikalahasti', 'geru'] as PaletteMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setPaletteKey(mode)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                paletteKey === mode
                  ? 'bg-[#221A15] text-[#EFECE6]'
                  : 'bg-[#E6E1D6] text-[#655246] hover:text-[#221A15]'
              }`}
            >
              {mode === 'terracotta'
                ? 'Terracotta Studio'
                : mode === 'srikalahasti'
                ? 'Kalamkari Indigo'
                : 'Sahyadri Geru'}
            </button>
          ))}
          <button
            type="button"
            onClick={handleDownloadSvg}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#D84315] text-[#EFECE6] hover:bg-[#B8340B] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Export Artwork SVG
          </button>
        </div>
      </div>

      {/* Artwork Viewport + Hotspot Inspection Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 relative rounded-xl overflow-hidden border border-[#D84315]/25 bg-[#F7F5F0] shadow-sm">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 760"
            className="w-full h-auto block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="kalamHatch"
                width="8"
                height="8"
                patternTransform="rotate(45 0 0)"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="8"
                  stroke={p.borderStroke}
                  strokeWidth="1"
                  opacity="0.28"
                />
              </pattern>
            </defs>

            {/* Base Parchment Canvas */}
            <rect width="1000" height="760" fill={p.bg} />

            {/* ================= 1. DECORATIVE DUAL BORDERS ================= */}
            {showBorders && (
              <g id="decorative-dual-borders">
                {/* Outer Kalamkari Floral Vine Frame */}
                <rect
                  x="20"
                  y="20"
                  width="960"
                  height="720"
                  fill="none"
                  stroke={p.borderStroke}
                  strokeWidth="4"
                />
                <rect
                  x="30"
                  y="30"
                  width="940"
                  height="700"
                  fill="none"
                  stroke={p.kalamPrimary}
                  strokeWidth="2"
                />

                {/* Kalamkari Outer Vine Scroll & Lotus Buds along Top & Bottom */}
                <path
                  d="M 50 55 Q 90 35 130 55 T 210 55 T 290 55 T 370 55 T 450 55 T 530 55 T 610 55 T 690 55 T 770 55 T 850 55 T 950 55"
                  fill="none"
                  stroke={p.kalamPrimary}
                  strokeWidth="3"
                />
                <path
                  d="M 50 705 Q 90 685 130 705 T 210 705 T 290 705 T 370 705 T 450 705 T 530 705 T 610 705 T 690 705 T 770 705 T 850 705 T 950 705"
                  fill="none"
                  stroke={p.kalamPrimary}
                  strokeWidth="3"
                />

                {/* Floral Medallions on Top & Bottom Kalamkari Border */}
                {Array.from({ length: 11 }, (_, i) => 90 + i * 80).map((cx) => (
                  <g key={`lotus-border-${cx}`}>
                    <circle
                      cx={cx}
                      cy={55}
                      r="10"
                      fill={p.kalamSecondary}
                      stroke={p.borderStroke}
                      strokeWidth="1.8"
                    />
                    <circle cx={cx} cy={55} r="4" fill={p.kalamPrimary} />
                    <circle
                      cx={cx}
                      cy={705}
                      r="10"
                      fill={p.kalamSecondary}
                      stroke={p.borderStroke}
                      strokeWidth="1.8"
                    />
                    <circle cx={cx} cy={705} r="4" fill={p.kalamPrimary} />
                  </g>
                ))}

                {/* Left & Right Kalamkari Paisleys */}
                {Array.from({ length: 7 }, (_, i) => 120 + i * 85).map((cy) => (
                  <g key={`side-lotus-${cy}`}>
                    <circle
                      cx={58}
                      cy={cy}
                      r="10"
                      fill={p.kalamPrimary}
                      stroke={p.borderStroke}
                      strokeWidth="1.8"
                    />
                    <circle cx={58} cy={cy} r="4" fill={p.bg} />
                    <circle
                      cx={942}
                      cy={cy}
                      r="10"
                      fill={p.kalamPrimary}
                      stroke={p.borderStroke}
                      strokeWidth="1.8"
                    />
                    <circle cx={942} cy={cy} r="4" fill={p.bg} />
                  </g>
                ))}

                {/* Inner Warli Lagnacha Chowk Geometric Border */}
                <rect
                  x="88"
                  y="84"
                  width="824"
                  height="592"
                  fill={p.innerBg}
                  stroke={p.borderStroke}
                  strokeWidth="3"
                />
                <rect
                  x="102"
                  y="98"
                  width="796"
                  height="564"
                  fill="none"
                  stroke={p.warliStroke}
                  strokeWidth="2"
                />
                <rect
                  x="126"
                  y="122"
                  width="748"
                  height="516"
                  fill="none"
                  stroke={p.warliStroke}
                  strokeWidth="2"
                />

                {/* Warli Saw-Tooth Triangle Frieze */}
                {topTriangles.map((x) => (
                  <g key={`tri-tb-${x}`}>
                    <polygon
                      points={`${x},122 ${x + 15},98 ${x + 30},122`}
                      fill="none"
                      stroke={p.warliStroke}
                      strokeWidth="1.8"
                    />
                    <polygon
                      points={`${x},638 ${x + 15},662 ${x + 30},638`}
                      fill="none"
                      stroke={p.warliStroke}
                      strokeWidth="1.8"
                    />
                  </g>
                ))}
                {sideTriangles.map((y) => (
                  <g key={`tri-lr-${y}`}>
                    <polygon
                      points={`126,${y} 102,${y + 15} 126,${y + 30}`}
                      fill="none"
                      stroke={p.warliStroke}
                      strokeWidth="1.8"
                    />
                    <polygon
                      points={`874,${y} 898,${y + 15} 874,${y + 30}`}
                      fill="none"
                      stroke={p.warliStroke}
                      strokeWidth="1.8"
                    />
                  </g>
                ))}
              </g>
            )}

            {!showBorders && (
              <rect
                x="88"
                y="84"
                width="824"
                height="592"
                rx="12"
                fill={p.innerBg}
              />
            )}

            {/* ================= 2. KALAMKARI TREE OF LIFE & FLORA ================= */}
            {showKalamkari && (
              <g id="kalamkari-flora-layer">
                {/* Central Kalpavriksha Trunk & Scrolling Boughs */}
                <path
                  d="M 482 638 C 488 520 492 350 500 245 C 508 350 512 520 518 638 Z"
                  fill={p.kalamSecondary}
                  stroke={p.warliStroke}
                  strokeWidth="1.5"
                />
                {/* Sweeping Left & Right Kalamkari Branches */}
                <path
                  d="M 500 255 C 420 230 310 175 215 215 C 165 235 160 295 210 315 C 250 330 280 290 255 265"
                  fill="none"
                  stroke={p.kalamSecondary}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 500 255 C 580 230 690 175 785 215 C 835 235 840 295 790 315 C 750 330 720 290 745 265"
                  fill="none"
                  stroke={p.kalamSecondary}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 500 225 C 440 160 360 140 310 175"
                  fill="none"
                  stroke={p.kalamSecondary}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 500 225 C 560 160 640 140 690 175"
                  fill="none"
                  stroke={p.kalamSecondary}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Crown Lotus Medallion at Top of Tree of Life */}
                <g transform="translate(500, 195)">
                  <circle
                    r="42"
                    fill={p.bg}
                    stroke={p.kalamPrimary}
                    strokeWidth="3"
                  />
                  <circle
                    r="34"
                    fill="url(#kalamHatch)"
                    stroke={p.kalamSecondary}
                    strokeWidth="1.5"
                  />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <path
                      key={`petal-${deg}`}
                      d="M 0 -8 C 10 -22 10 -34 0 -40 C -10 -34 -10 -22 0 -8 Z"
                      fill={p.kalamPrimary}
                      stroke={p.bg}
                      strokeWidth="1.2"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                  <circle r="10" fill={p.kalamSecondary} stroke={p.borderStroke} strokeWidth="2" />
                </g>

                {/* Left & Right Kalamkari Blooming Lotuses & Mango Paisleys */}
                {[
                  { x: 310, y: 175, scale: 0.85 },
                  { x: 690, y: 175, scale: 0.85 },
                  { x: 210, y: 245, scale: 0.9 },
                  { x: 790, y: 245, scale: 0.9 },
                  { x: 365, y: 255, scale: 0.75 },
                  { x: 635, y: 255, scale: 0.75 },
                ].map((fl, idx) => (
                  <g
                    key={`kalam-bloom-${idx}`}
                    transform={`translate(${fl.x}, ${fl.y}) scale(${fl.scale})`}
                  >
                    <circle
                      r="26"
                      fill={p.bg}
                      stroke={p.kalamSecondary}
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 0 12 C -18 0 -16 -20 0 -28 C 16 -20 18 0 0 12 Z"
                      fill={p.kalamPrimary}
                      stroke={p.bg}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 0 12 C -28 8 -30 -10 -14 -20"
                      fill={p.kalamSecondary}
                      stroke={p.borderStroke}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 0 12 C 28 8 30 -10 14 -20"
                      fill={p.kalamSecondary}
                      stroke={p.borderStroke}
                      strokeWidth="1.5"
                    />
                    <circle cy="-6" r="5" fill={p.bg} />
                  </g>
                ))}

                {/* Twin Ornate Kalamkari Peacocks Flanking the Base */}
                {/* Left Peacock */}
                <g transform="translate(235, 520)">
                  <path
                    d="M -65 35 C -95 5 -85 -45 -35 -40 C 5 -35 20 5 -10 35 Z"
                    fill={p.kalamAccent}
                    stroke={p.warliStroke}
                    strokeWidth="2"
                  />
                  <circle cx="-55" cy="-12" r="10" fill={p.kalamSecondary} />
                  <circle cx="-55" cy="-12" r="4" fill={p.kalamPrimary} />
                  <circle cx="-35" cy="8" r="9" fill={p.kalamSecondary} />
                  <circle cx="-35" cy="8" r="4" fill={p.kalamPrimary} />
                  <path
                    d="M -10 15 C 20 15 35 -15 22 -42 C 14 -58 28 -68 38 -58"
                    fill="none"
                    stroke={p.kalamSecondary}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <polygon points="38,-58 52,-54 39,-48" fill={p.kalamPrimary} />
                  <line x1="-5" y1="35" x2="-12" y2="65" stroke={p.warliStroke} strokeWidth="2.5" />
                  <line x1="8" y1="35" x2="14" y2="65" stroke={p.warliStroke} strokeWidth="2.5" />
                </g>

                {/* Right Peacock (Mirrored) */}
                <g transform="translate(765, 520) scale(-1, 1)">
                  <path
                    d="M -65 35 C -95 5 -85 -45 -35 -40 C 5 -35 20 5 -10 35 Z"
                    fill={p.kalamAccent}
                    stroke={p.warliStroke}
                    strokeWidth="2"
                  />
                  <circle cx="-55" cy="-12" r="10" fill={p.kalamSecondary} />
                  <circle cx="-55" cy="-12" r="4" fill={p.kalamPrimary} />
                  <circle cx="-35" cy="8" r="9" fill={p.kalamSecondary} />
                  <circle cx="-35" cy="8" r="4" fill={p.kalamPrimary} />
                  <path
                    d="M -10 15 C 20 15 35 -15 22 -42 C 14 -58 28 -68 38 -58"
                    fill="none"
                    stroke={p.kalamSecondary}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <polygon points="38,-58 52,-54 39,-48" fill={p.kalamPrimary} />
                  <line x1="-5" y1="35" x2="-12" y2="65" stroke={p.warliStroke} strokeWidth="2.5" />
                  <line x1="8" y1="35" x2="14" y2="65" stroke={p.warliStroke} strokeWidth="2.5" />
                </g>
              </g>
            )}

            {/* ================= 3. WARLI GEOMETRIC FIGURES & NATURE ================= */}
            {showWarli && (
              <g id="warli-geometric-layer">
                {/* Celestial Sun (Surya) Left & Crescent Moon (Chandra) Right */}
                <g transform="translate(185, 165)">
                  <circle r="22" fill="none" stroke={p.warliStroke} strokeWidth="2.2" />
                  <circle r="8" fill={p.warliStroke} />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((d) => (
                    <line
                      key={`ray-${d}`}
                      x1="0"
                      y1="-25"
                      x2="0"
                      y2="-33"
                      stroke={p.warliStroke}
                      strokeWidth="2"
                      transform={`rotate(${d})`}
                    />
                  ))}
                </g>

                <g transform="translate(815, 165)">
                  <path
                    d="M -10 -22 A 24 24 0 1 0 18 18 A 18 18 0 1 1 -10 -22 Z"
                    fill={p.warliStroke}
                  />
                  <circle cx="14" cy="-10" r="3" fill={p.warliStroke} />
                </g>

                {/* Central Sacred Tarpa Spiral Dance Circle */}
                <g transform="translate(500, 445)">
                  <circle
                    r="138"
                    fill={p.innerBg}
                    stroke={p.warliStroke}
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <circle
                    r="98"
                    fill="none"
                    stroke={p.kalamSecondary}
                    strokeWidth="1.5"
                    strokeDasharray="3 5"
                  />

                  {/* Central Tarpa Wind-Instrument Player */}
                  <g>
                    <circle cx="0" cy="-26" r="7" fill={p.warliStroke} />
                    <polygon points="-11,-16 11,-16 0,2" fill={p.warliStroke} />
                    <polygon points="0,2 -12,20 12,20" fill={p.warliStroke} />
                    {/* Tarpa Horn */}
                    <path
                      d="M 6 -22 Q 32 -36 42 -52 L 49 -44 Q 34 -28 8 -16 Z"
                      fill={p.kalamSecondary}
                      stroke={p.warliStroke}
                      strokeWidth="1.5"
                    />
                    <line x1="-6" y1="20" x2="-12" y2="38" stroke={p.warliStroke} strokeWidth="2.5" />
                    <line x1="6" y1="20" x2="12" y2="38" stroke={p.warliStroke} strokeWidth="2.5" />
                  </g>

                  {/* 12 Geometric Warli Dancers Locked Hand-in-Hand */}
                  {dancerAngles.map((angle, i) => {
                    const deg = (angle * 180) / Math.PI + 90;
                    const cx = Math.cos(angle) * 105;
                    const cy = Math.sin(angle) * 105;
                    return (
                      <g
                        key={`dancer-${i}`}
                        transform={`translate(${cx}, ${cy}) rotate(${deg})`}
                      >
                        <circle cx="0" cy="-20" r="5" fill={p.warliStroke} />
                        {i % 2 === 0 && (
                          <circle cx="7" cy="-21" r="2.5" fill={p.warliStroke} />
                        )}
                        <polygon points="-9,-13 9,-13 0,0" fill={p.warliStroke} />
                        <polygon points="0,0 -9,13 9,13" fill={p.warliStroke} />
                        {/* Outstretched Joined Arms */}
                        <path
                          d="M -8 -11 Q -18 -6 -26 0"
                          fill="none"
                          stroke={p.warliStroke}
                          strokeWidth="2"
                        />
                        <path
                          d="M 8 -11 Q 18 -6 26 0"
                          fill="none"
                          stroke={p.warliStroke}
                          strokeWidth="2"
                        />
                        {/* Dancing Legs */}
                        <path
                          d="M -5 13 L -8 24 L -3 26"
                          fill="none"
                          stroke={p.warliStroke}
                          strokeWidth="2"
                        />
                        <path
                          d="M 5 13 L 9 24 L 14 23"
                          fill="none"
                          stroke={p.warliStroke}
                          strokeWidth="2"
                        />
                      </g>
                    );
                  })}
                </g>

                {/* Warli Conical Pine/Forest Trees Left & Right */}
                {[
                  { x: 175, y: 390 },
                  { x: 825, y: 390 },
                ].map((tree, idx) => (
                  <g key={`warli-tree-${idx}`} transform={`translate(${tree.x}, ${tree.y})`}>
                    <line x1="0" y1="-55" x2="0" y2="55" stroke={p.warliStroke} strokeWidth="3" />
                    <polygon
                      points="-34,20 0,-15 34,20"
                      fill="none"
                      stroke={p.warliStroke}
                      strokeWidth="2"
                    />
                    <polygon
                      points="-28,-2 0,-34 28,-2"
                      fill="none"
                      stroke={p.warliStroke}
                      strokeWidth="2"
                    />
                    <polygon
                      points="-20,-24 0,-54 20,-24"
                      fill={p.warliStroke}
                    />
                  </g>
                ))}

                {/* Warli Village Harvest Figures at Bottom Corners */}
                {[335, 665].map((vx, i) => (
                  <g key={`villager-${i}`} transform={`translate(${vx}, 585)`}>
                    <circle cx="0" cy="-22" r="5.5" fill={p.warliStroke} />
                    <polygon points="-10,-14 10,-14 0,0" fill={p.warliStroke} />
                    <polygon points="0,0 -10,14 10,14" fill={p.warliStroke} />
                    <line x1="-8" y1="-12" x2="-22" y2="-24" stroke={p.warliStroke} strokeWidth="2.2" />
                    <line x1="8" y1="-12" x2="22" y2="-2" stroke={p.warliStroke} strokeWidth="2.2" />
                    <line x1="-5" y1="14" x2="-9" y2="30" stroke={p.warliStroke} strokeWidth="2.2" />
                    <line x1="5" y1="14" x2="9" y2="30" stroke={p.warliStroke} strokeWidth="2.2" />
                    {/* Harvest Grain Basket above Head */}
                    <path
                      d="M -12 -30 Q 0 -22 12 -30 Z"
                      fill={p.kalamSecondary}
                      stroke={p.warliStroke}
                      strokeWidth="1.5"
                    />
                  </g>
                ))}
              </g>
            )}

            {/* Museum Accession Caption Strip inside SVG */}
            <text
              x="140"
              y="626"
              fill={p.warliStroke}
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              letterSpacing="1.5"
              opacity="0.85"
            >
              CO2 REGIONAL FUSION • WARLI (MAHARASHTRA) × KALAMKARI (ANDHRA PRADESH)
            </text>
          </svg>

          {/* Interactive HTML Hotspot Overlay Pins */}
          {showHotspots &&
            FUSION_PROJECT_DATA.hotspots.map((hs, idx) => {
              const isSelected = activeHotspot?.id === hs.id;
              return (
                <button
                  key={hs.id}
                  type="button"
                  onClick={() => setActiveHotspot(hs)}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className={`-translate-x-1/2 -translate-y-1/2 absolute w-8 h-8 rounded-full flex items-center justify-center font-mono-tabular text-xs font-bold transition-transform cursor-pointer shadow-md ${
                    isSelected
                      ? 'bg-[#D84315] text-[#EFECE6] scale-115 ring-4 ring-[#EFECE6]'
                      : 'bg-[#EFECE6] text-[#221A15] hover:scale-110 border border-[#D84315]'
                  }`}
                  title={hs.label}
                >
                  0{idx + 1}
                </button>
              );
            })}
        </div>

        {/* Right Column: Curatorial Layer & Hotspot Inspector */}
        <div className="lg:col-span-4 space-y-5">
          <div className="p-6 rounded-xl bg-[#F7F5F0] border border-[#D84315]/20 space-y-4">
            <div className="flex items-center justify-between border-b border-[#D84315]/15 pb-3">
              <span className="text-xs font-mono-tabular uppercase tracking-widest text-[#D84315]">
                Active Pigment Profile
              </span>
              <Sparkles className="w-4 h-4 text-[#D84315]" />
            </div>
            <div>
              <h4 className="font-editorial text-lg font-semibold text-[#221A15]">
                {p.name}
              </h4>
              <p className="text-xs text-[#655246] mt-1">{p.subtitle}</p>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-1">
              {[p.bg, p.innerBg, p.kalamPrimary, p.kalamSecondary, p.kalamAccent].map(
                (hex, i) => (
                  <div key={i} className="space-y-1">
                    <div
                      className="h-8 rounded border border-black/15"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="block text-[10px] font-mono-tabular text-center text-[#655246]">
                      {hex}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Hotspot Detail Card */}
          <div className="p-6 rounded-xl bg-[#F7F5F0] border border-[#D84315]/20 space-y-4">
            <div className="text-xs font-mono-tabular uppercase tracking-widest text-[#655246]">
              Interactive Motif Callout · Click Numbered Pins
            </div>
            {activeHotspot && (
              <div className="space-y-2.5">
                <div className="text-xs font-mono-tabular text-[#D84315]">
                  {activeHotspot.tradition}
                </div>
                <h3 className="font-editorial text-xl font-semibold text-[#221A15]">
                  {activeHotspot.label}
                </h3>
                <p className="text-sm text-[#4A3B31] leading-relaxed">
                  {activeHotspot.description}
                </p>
              </div>
            )}

            <div className="pt-3 border-t border-[#D84315]/15 grid grid-cols-2 gap-2">
              {FUSION_PROJECT_DATA.hotspots.map((hs, idx) => (
                <button
                  key={hs.id}
                  type="button"
                  onClick={() => setActiveHotspot(hs)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors truncate cursor-pointer ${
                    activeHotspot?.id === hs.id
                      ? 'bg-[#D84315] text-[#EFECE6]'
                      : 'bg-[#EFECE6] text-[#221A15] hover:bg-[#E6E1D6]'
                  }`}
                >
                  0{idx + 1}. {hs.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
