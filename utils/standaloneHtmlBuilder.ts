import {
  TIMELINE_ARTIFACTS,
  ART_MAP_LOCATIONS,
  FUSION_PROJECT_DATA,
} from '../data/indianArtData';

export type AssignmentTab = 'timeline' | 'map' | 'fusion';

export function buildStandaloneAssignmentHtml(defaultTab: AssignmentTab): string {
  const titleMap: Record<AssignmentTab, string> = {
    timeline: 'CLA-I Activity 1 (CO1) — Interactive Indian Art Timeline | Kala Archive',
    map: 'CLA-I Activity 2 (CO1) — Interactive Indian Art Map (Leaflet) | Kala Archive',
    fusion: 'CLA-I Activity 3 (CO2) — Warli × Kalamkari Regional Painting Fusion | Kala Archive',
  };

  const heroWordMap: Record<AssignmentTab, string> = {
    timeline: 'CHRONICLE',
    map: 'HERITAGE',
    fusion: 'SANGAM',
  };

  const artifactsJson = JSON.stringify(TIMELINE_ARTIFACTS);
  const locationsJson = JSON.stringify(ART_MAP_LOCATIONS);
  const fusionJson = JSON.stringify(FUSION_PROJECT_DATA);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${titleMap[defaultTab]}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    :root {
      --bg: #EFECE6;
      --surface: #F7F5F0;
      --surface-alt: #E6E1D6;
      --ink: #221A15;
      --muted: #655246;
      --terracotta: #D84315;
      --terracotta-dark: #9E2E0B;
      --ochre: #B87B28;
      --line: rgba(216, 67, 21, 0.2);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--ink);
      font-family: 'Plus Jakarta Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      line-height: 1.6;
    }
    .topbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(239, 236, 230, 0.94);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--line);
      padding: 16px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    .brand {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 20px;
      color: var(--terracotta);
      text-decoration: none;
      letter-spacing: -0.03em;
    }
    .nav-tabs {
      display: flex;
      gap: 24px;
      align-items: center;
      flex-wrap: wrap;
    }
    .nav-btn {
      background: none;
      border: none;
      padding: 6px 0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: var(--muted);
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: color 0.18s ease, border-color 0.18s ease;
    }
    .nav-btn:hover, .nav-btn.active {
      color: var(--terracotta);
      border-bottom-color: var(--terracotta);
    }
    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 32px 28px 72px;
    }
    .editorial-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      padding: 20px 0 32px;
      border-bottom: 1px solid var(--line);
      color: var(--terracotta);
      font-size: 13px;
      line-height: 1.55;
    }
    .dot-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--terracotta);
      display: inline-block;
    }
    .monument-banner {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: clamp(54px, 12vw, 158px);
      line-height: 0.88;
      letter-spacing: -0.045em;
      color: var(--terracotta);
      text-transform: uppercase;
      margin: 18px 0 28px;
      user-select: none;
      transition: transform 0.3s ease;
    }
    .section-panel {
      display: none;
      animation: fadeUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .section-panel.active {
      display: block;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    /* Timeline Cards */
    .timeline-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 24px;
      margin-top: 24px;
    }
    .card {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 22px;
      cursor: pointer;
      transition: transform 0.18s ease, border-color 0.18s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      border-color: var(--terracotta);
    }
    .card-art {
      width: 100%;
      height: 200px;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 16px;
      border: 1px solid rgba(34,26,21,0.08);
    }
    .card-art svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .meta-line {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--terracotta);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .card h3 {
      font-family: 'Fraunces', serif;
      font-size: 21px;
      margin: 6px 0 4px;
      color: var(--ink);
    }
    .card p {
      font-size: 14px;
      color: var(--muted);
      margin: 8px 0 0;
    }
    /* Modal */
    .modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(34, 26, 21, 0.68);
      z-index: 2000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-backdrop.open {
      display: flex;
    }
    .modal-box {
      background: var(--surface);
      border: 1px solid var(--terracotta);
      border-radius: 16px;
      max-width: 780px;
      width: 100%;
      max-height: 88vh;
      overflow-y: auto;
      padding: 32px;
      position: relative;
    }
    .modal-close {
      position: absolute;
      top: 18px;
      right: 22px;
      background: var(--terracotta);
      color: var(--bg);
      border: none;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
    }
    /* Map Layout */
    .map-split {
      display: grid;
      grid-template-columns: 1.35fr 1fr;
      gap: 24px;
      margin-top: 20px;
    }
    #map {
      height: 540px;
      width: 100%;
      border-radius: 14px;
      border: 1px solid var(--line);
    }
    .warm-tiles {
      filter: sepia(0.25) saturate(0.88) contrast(0.98);
    }
    .loc-item {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: transform 0.15s ease, border-color 0.15s ease;
    }
    .loc-item:hover, .loc-item.active {
      border-color: var(--terracotta);
      transform: translateX(3px);
    }
    /* Fusion Layout */
    .fusion-split {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 28px;
      margin-top: 20px;
    }
    .fusion-canvas-wrap {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 16px;
    }
    .prose-box {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 24px;
      margin-bottom: 20px;
    }
    .prose-box h3 {
      font-family: 'Fraunces', serif;
      margin-top: 0;
      color: var(--ink);
    }
    .slide-point {
      border-top: 1px solid var(--line);
      padding: 12px 0;
    }
    @media (max-width: 900px) {
      .editorial-grid, .map-split, .fusion-split {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <a href="#" class="brand">KALA ARCHIVE</a>
    <nav class="nav-tabs">
      <button class="nav-btn" id="tab-btn-timeline" onclick="switchTab('timeline')">01. Timeline (CO1)</button>
      <button class="nav-btn" id="tab-btn-map" onclick="switchTab('map')">02. Heritage Map (CO1)</button>
      <button class="nav-btn" id="tab-btn-fusion" onclick="switchTab('fusion')">03. Warli × Kalamkari Fusion (CO2)</button>
    </nav>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--terracotta);">CLA-I PACKAGE</div>
  </header>

  <main class="container">
    <div class="dot-row">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <div class="editorial-grid">
      <div>
        <strong>CLA-I Indian Art Heritage Studio</strong><br/>
        Interactive archival study spanning 4,500 years of Indian sculptural, mural, courtly, and indigenous folk traditions.
      </div>
      <div>
        <strong>Course Outcomes CO1 &amp; CO2</strong><br/>
        Clickable chronological artifacts, Leaflet spatial cartography across 8 heritage centers, and Warli × Kalamkari digital fusion.
      </div>
      <div>
        <strong>Curatorial Edition · 2026</strong><br/>
        Self-contained HTML architecture with inbuilt vector illustrations, OpenStreetMap integration, and presentation notes.
      </div>
    </div>

    <div class="monument-banner" id="hero-word">${heroWordMap[defaultTab]}</div>

    <!-- SECTION 1: TIMELINE (CO1) -->
    <section id="panel-timeline" class="section-panel">
      <div class="meta-line">ACTIVITY 01 · COURSE OUTCOME 1 (CO1) · CLICK ANY ARTIFACT FOR HISTORICAL CONTEXT</div>
      <h2 style="font-family:'Fraunces',serif;font-size:32px;margin:6px 0 8px;">Interactive Indian Art Timeline</h2>
      <div class="timeline-grid" id="timeline-container"></div>
    </section>

    <!-- SECTION 2: MAP (CO1) -->
    <section id="panel-map" class="section-panel">
      <div class="meta-line">ACTIVITY 02 · COURSE OUTCOME 1 (CO1) · LEAFLET + OPENSTREETMAP</div>
      <h2 style="font-family:'Fraunces',serif;font-size:32px;margin:6px 0 8px;">Interactive Map: Important Locations in Indian Art History</h2>
      <div class="map-split">
        <div id="map"></div>
        <div id="locations-list"></div>
      </div>
    </section>

    <!-- SECTION 3: FUSION (CO2) -->
    <section id="panel-fusion" class="section-panel">
      <div class="meta-line">ACTIVITY 03 · COURSE OUTCOME 2 (CO2) · REGIONAL PAINTING FUSION</div>
      <h2 style="font-family:'Fraunces',serif;font-size:32px;margin:6px 0 8px;">Prakriti Sangam: Warli × Kalamkari Digital Fusion</h2>
      <div class="fusion-split">
        <div class="fusion-canvas-wrap" id="fusion-svg-holder"></div>
        <div>
          <div class="prose-box">
            <div class="meta-line">READY-MADE PROJECT DESCRIPTION</div>
            <h3>Curatorial Statement</h3>
            <p id="fusion-desc" style="font-size:14px;white-space:pre-line;color:var(--muted);"></p>
          </div>
          <div class="prose-box">
            <div class="meta-line">READY-MADE PRESENTATION POINTS (CO2)</div>
            <h3>Key Talking Points</h3>
            <div id="fusion-slides"></div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- MODAL FOR TIMELINE -->
  <div class="modal-backdrop" id="modal" onclick="if(event.target===this)closeModal()">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal()">×</button>
      <div class="meta-line" id="m-year"></div>
      <h2 style="font-family:'Fraunces',serif;font-size:28px;margin:6px 0;" id="m-title"></h2>
      <p id="m-subtitle" style="color:var(--terracotta);font-weight:600;margin:0 0 16px;font-size:14px;"></p>
      <div id="m-svg" style="height:220px;border-radius:12px;overflow:hidden;margin-bottom:18px;"></div>
      <p id="m-desc" style="font-size:15px;"></p>
      <h4 style="font-family:'Fraunces',serif;margin:18px 0 6px;color:var(--terracotta);">Historical Context</h4>
      <p id="m-context" style="font-size:14px;color:var(--muted);margin:0;"></p>
      <h4 style="font-family:'Fraunces',serif;margin:18px 0 6px;color:var(--terracotta);">Why It Matters (Significance)</h4>
      <p id="m-why" style="font-size:14px;color:var(--muted);margin:0;"></p>
    </div>
  </div>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script>
    const ARTIFACTS = ${artifactsJson};
    const LOCATIONS = ${locationsJson};
    const FUSION = ${fusionJson};
    let mapInstance = null;
    const markers = [];

    // Render Timeline
    const tlContainer = document.getElementById('timeline-container');
    ARTIFACTS.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = \`
        <div class="card-art">\${item.svgMarkup}</div>
        <div class="meta-line">\${item.index} · \${item.year} · \${item.type}</div>
        <h3>\${item.title}</h3>
        <p>\${item.desc}</p>
        <div style="margin-top:12px;font-size:12px;font-weight:600;color:var(--terracotta);">Click to inspect historical context →</div>
      \`;
      card.onclick = () => openModal(idx);
      tlContainer.appendChild(card);
    });

    function openModal(idx) {
      const x = ARTIFACTS[idx];
      document.getElementById('m-year').textContent = x.index + ' · ' + x.year + ' · ' + x.region;
      document.getElementById('m-title').textContent = x.title;
      document.getElementById('m-subtitle').textContent = x.subtitle + ' (' + x.medium + ')';
      document.getElementById('m-svg').innerHTML = x.svgMarkup;
      document.getElementById('m-desc').textContent = x.desc;
      document.getElementById('m-context').textContent = x.context;
      document.getElementById('m-why').textContent = x.why;
      document.getElementById('modal').classList.add('open');
    }
    function closeModal() {
      document.getElementById('modal').classList.remove('open');
    }

    // Render Fusion SVG & Notes
    document.getElementById('fusion-desc').textContent = FUSION.projectDescription;
    const slidesEl = document.getElementById('fusion-slides');
    FUSION.presentationPoints.forEach(pt => {
      const d = document.createElement('div');
      d.className = 'slide-point';
      d.innerHTML = \`<div class="meta-line">POINT \${pt.slide}</div><strong style="font-size:14px;">\${pt.heading}</strong><p style="font-size:13px;color:var(--muted);margin:4px 0 0;">\${pt.bullet}</p>\`;
      slidesEl.appendChild(d);
    });

    document.getElementById('fusion-svg-holder').innerHTML = \`
      <svg viewBox="0 0 800 640" style="width:100%;height:auto;display:block;border-radius:10px;" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="640" fill="#EFECE6"/>
        <rect x="18" y="18" width="764" height="604" fill="none" stroke="#221A15" stroke-width="4"/>
        <rect x="28" y="28" width="744" height="584" fill="none" stroke="#D84315" stroke-width="2" stroke-dasharray="8 4"/>
        <rect x="64" y="64" width="672" height="512" fill="#9E2E0B" stroke="#221A15" stroke-width="3"/>
        <rect x="80" y="80" width="640" height="480" fill="none" stroke="#F7F5F0" stroke-width="2"/>
        <!-- Kalamkari Tree of Life Boughs -->
        <path d="M 388 560 C 394 450 396 310 400 200 C 404 310 406 450 412 560 Z" fill="#B87B28" stroke="#F7F5F0" stroke-width="1.5"/>
        <path d="M 400 220 C 310 185 220 155 155 195 C 120 218 125 265 165 275" fill="none" stroke="#B87B28" stroke-width="5" stroke-linecap="round"/>
        <path d="M 400 220 C 490 185 580 155 645 195 C 680 218 675 265 635 275" fill="none" stroke="#B87B28" stroke-width="5" stroke-linecap="round"/>
        <circle cx="400" cy="165" r="38" fill="#EFECE6" stroke="#D84315" stroke-width="3"/>
        <circle cx="400" cy="165" r="16" fill="#D84315"/>
        <circle cx="240" cy="185" r="22" fill="#EFECE6" stroke="#B87B28" stroke-width="2.5"/>
        <circle cx="240" cy="185" r="9" fill="#D84315"/>
        <circle cx="560" cy="185" r="22" fill="#EFECE6" stroke="#B87B28" stroke-width="2.5"/>
        <circle cx="560" cy="185" r="9" fill="#D84315"/>
        <!-- Warli Sun & Moon -->
        <circle cx="135" cy="130" r="18" fill="none" stroke="#F7F5F0" stroke-width="2"/>
        <circle cx="135" cy="130" r="6" fill="#F7F5F0"/>
        <circle cx="665" cy="130" r="16" fill="#F7F5F0"/>
        <circle cx="672" cy="125" r="14" fill="#9E2E0B"/>
        <!-- Central Warli Tarpa Circle -->
        <circle cx="400" cy="380" r="115" fill="#9E2E0B" stroke="#F7F5F0" stroke-width="2" stroke-dasharray="5 4"/>
        <circle cx="400" cy="360" r="6" fill="#F7F5F0"/>
        <polygon points="390,368 410,368 400,384" fill="#F7F5F0"/>
        <polygon points="400,384 390,400 410,400" fill="#F7F5F0"/>
        <g fill="#F7F5F0" stroke="#F7F5F0" stroke-width="2">
          <circle cx="400" cy="282" r="5"/><polygon points="392,289 408,289 400,301"/><polygon points="400,301 392,313 408,313"/>
          <circle cx="400" cy="452" r="5"/><polygon points="392,459 408,459 400,471"/><polygon points="400,471 392,483 408,483"/>
          <circle cx="312" cy="368" r="5"/><polygon points="304,375 320,375 312,387"/><polygon points="312,387 304,399 320,399"/>
          <circle cx="488" cy="368" r="5"/><polygon points="480,375 496,375 488,387"/><polygon points="488,387 480,399 496,399"/>
          <circle cx="338" cy="308" r="5"/><polygon points="330,315 346,315 338,327"/><polygon points="338,327 330,339 346,339"/>
          <circle cx="462" cy="308" r="5"/><polygon points="454,315 470,315 462,327"/><polygon points="462,327 454,339 470,339"/>
          <circle cx="338" cy="430" r="5"/><polygon points="330,437 346,437 338,449"/><polygon points="338,449 330,461 346,461"/>
          <circle cx="462" cy="430" r="5"/><polygon points="454,437 470,437 462,449"/><polygon points="462,449 454,461 470,461"/>
        </g>
        <!-- Kalamkari Peacocks Left & Right -->
        <path d="M 135 470 C 110 445 120 405 160 412 C 190 418 200 450 175 470 Z" fill="#264653" stroke="#F7F5F0" stroke-width="2"/>
        <path d="M 665 470 C 690 445 680 405 640 412 C 610 418 600 450 625 470 Z" fill="#264653" stroke="#F7F5F0" stroke-width="2"/>
        <text x="100" y="545" fill="#F7F5F0" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="1.4">CO2 DIGITAL FUSION • WARLI GEOMETRY × KALAMKARI TREE OF LIFE</text>
      </svg>
    \`;

    function initMapIfNeeded() {
      if (mapInstance || !window.L) return;
      mapInstance = L.map('map').setView([22.2, 79.2], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        className: 'warm-tiles',
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstance);

      const listEl = document.getElementById('locations-list');
      LOCATIONS.forEach((loc, i) => {
        const m = L.marker([loc.lat, loc.lng]).addTo(mapInstance);
        m.bindPopup(\`<strong>\${loc.name}</strong><br/><em>\${loc.region} — \${loc.tradition}</em><p style="margin:6px 0 0;font-size:12px;">\${loc.summary}</p>\`);
        markers.push(m);

        const item = document.createElement('div');
        item.className = 'loc-item';
        item.innerHTML = \`
          <div class="meta-line">\${loc.index} · \${loc.region}</div>
          <strong style="font-family:'Fraunces',serif;font-size:17px;">\${loc.name}</strong>
          <div style="font-size:12px;color:var(--terracotta);font-weight:600;">\${loc.tradition}</div>
          <p style="font-size:12px;color:var(--muted);margin:4px 0 0;">\${loc.summary}</p>
        \`;
        item.onclick = () => {
          mapInstance.flyTo([loc.lat, loc.lng], 7, { duration: 0.8 });
          m.openPopup();
        };
        listEl.appendChild(item);
      });
    }

    function switchTab(tab) {
      ['timeline', 'map', 'fusion'].forEach(t => {
        document.getElementById('panel-' + t).classList.toggle('active', t === tab);
        document.getElementById('tab-btn-' + t).classList.toggle('active', t === tab);
      });
      const wordMap = { timeline: 'CHRONICLE', map: 'HERITAGE', fusion: 'SANGAM' };
      document.getElementById('hero-word').textContent = wordMap[tab];
      if (tab === 'map') {
        initMapIfNeeded();
        setTimeout(() => mapInstance && mapInstance.invalidateSize(), 150);
      }
    }

    switchTab('${defaultTab}');
  </script>
</body>
</html>`;
}

export function triggerHtmlDownload(tab: AssignmentTab, filename: string) {
  const html = buildStandaloneAssignmentHtml(tab);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
