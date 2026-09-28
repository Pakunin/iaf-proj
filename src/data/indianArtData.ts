export interface TimelineArtifact {
  id: string;
  index: string;
  year: string;
  eraCategory: 'Ancient & Classical' | 'Medieval & Courtly' | 'Living Folk & Tribal';
  title: string;
  subtitle: string;
  type: string;
  region: string;
  medium: string;
  dimensions: string;
  accessionNo: string;
  desc: string;
  context: string;
  why: string;
  visualAnatomy: string[];
  tags: string[];
  svgMarkup: string;
}

export interface ArtMapLocation {
  id: string;
  index: string;
  name: string;
  lat: number;
  lng: number;
  region: string;
  zone: 'Western & Deccan' | 'Northern & Central' | 'Eastern' | 'Southern';
  tradition: string;
  era: string;
  summary: string;
  historicalContext: string;
  keyHighlights: string[];
  signatureMotif: string;
}

export interface FusionHotspot {
  id: string;
  label: string;
  tradition: 'Warli Element' | 'Kalamkari Element' | 'Harmonic Synthesis';
  x: number;
  y: number;
  description: string;
}

export const TIMELINE_ARTIFACTS: TimelineArtifact[] = [
  {
    id: 'indus-dancing-girl',
    index: '01',
    year: 'c. 2500 BCE',
    eraCategory: 'Ancient & Classical',
    title: 'Indus Valley — Dancing Girl of Mohenjo-daro',
    subtitle: 'Lost-Wax Bronze Statuette (Cire Perdue)',
    type: 'Bronze Sculpture',
    region: 'Mohenjo-daro, Indus Valley Civilization',
    medium: 'Cast Bronze (Lost-wax / Cire perdue technique)',
    dimensions: '10.5 cm × 5.0 cm × 2.5 cm',
    accessionNo: 'ACC. IVC-2500-HR',
    desc: 'A masterwork of prehistoric metallurgical art depicting a confident young woman standing in a relaxed contrapposto stance with her right hand on her hip and her left arm adorned with twenty-four bangles.',
    context: 'Created at the zenith of the Harappan urban civilization, where standardized brick cities, maritime trade with Mesopotamia, and specialized artisan guilds flourished. The cire perdue (lost-wax) process used here proves an advanced mastery of copper-tin alloying and thermal casting over four millennia ago.',
    why: 'Unlike monumental royal portraits of contemporaneous river civilizations, the Dancing Girl celebrates human poise, rhythmic bodily awareness, and naturalistic vitality in miniature scale.',
    visualAnatomy: [
      'Asymmetric stack of 24-25 bangles along the elongated left arm indicating ritual or performative adornment',
      'Confident tilted chin and right hand resting on the hip in an assertive, self-possessed posture',
      'Coiled hair gathered into a heavy bun resting on the right shoulder with cowrie-shell necklace'
    ],
    tags: ['Indus Valley', 'Bronze Casting', 'Sculpture'],
    svgMarkup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="240" fill="#E6DFD3"/>
      <circle cx="160" cy="120" r="92" fill="#EFECE6" stroke="#D84315" stroke-width="1.2" stroke-dasharray="4 4"/>
      <path d="M40 205 H280" stroke="#D84315" stroke-width="1" opacity="0.4"/>
      <g transform="translate(8, 0)">
        <ellipse cx="152" cy="205" rx="36" ry="7" fill="#C9BEAC"/>
        <circle cx="152" cy="46" r="16" fill="#6E3B1E"/>
        <circle cx="166" cy="49" r="9" fill="#522A14"/>
        <circle cx="147" cy="44" r="2" fill="#EFECE6"/>
        <circle cx="157" cy="44" r="2" fill="#EFECE6"/>
        <path d="M143 62 Q152 68 161 62" stroke="#D84315" stroke-width="2.5" fill="none"/>
        <path d="M152 62 C144 92 146 124 152 152" stroke="#6E3B1E" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="M148 74 L114 102 L138 118" stroke="#6E3B1E" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M156 74 L188 112 L180 144" stroke="#6E3B1E" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <g stroke="#D84315" stroke-width="2">
          <line x1="172" y1="88" x2="181" y2="83"/><line x1="175" y1="94" x2="184" y2="89"/>
          <line x1="178" y1="100" x2="187" y2="95"/><line x1="181" y1="106" x2="190" y2="101"/>
          <line x1="178" y1="118" x2="188" y2="120"/><line x1="176" y1="125" x2="186" y2="127"/>
          <line x1="174" y1="132" x2="184" y2="134"/>
        </g>
        <path d="M148 148 L134 202" stroke="#6E3B1E" stroke-width="10" stroke-linecap="round"/>
        <path d="M156 148 L170 202" stroke="#6E3B1E" stroke-width="10" stroke-linecap="round"/>
      </g>
      <text x="18" y="28" fill="#D84315" font-family="monospace" font-size="10" letter-spacing="1.5">FIG. 01 / MOHENJO-DARO</text>
    </svg>`
  },
  {
    id: 'ajanta-murals',
    index: '02',
    year: 'c. 2nd Century BCE – 6th Century CE',
    eraCategory: 'Ancient & Classical',
    title: 'Ajanta Caves — Bodhisattva Padmapani Mural',
    subtitle: 'Dry Fresco (Fresco-Secco) Narrative Wall Painting',
    type: 'Cave Mural Painting',
    region: 'Aurangabad District (Chhatrapati Sambhajinagar), Maharashtra',
    medium: 'Natural mineral & vegetable pigments on mud-plaster and lime slip',
    dimensions: 'Cave 1 Sanctuary Antechamber Wall',
    accessionNo: 'ACC. AJT-C01-480CE',
    desc: 'Monumental Buddhist wall paintings inside rock-cut horseshoe-shaped Basalt gorge caves, renowned for fluid calligraphic line work (rekha), subtle tonal shading (vartana), and deeply compassionate emotional expression.',
    context: 'Excavated across two major phases—early Hinayana (Satavahana era) and flourishing Mahayana (Vakataka dynasty under Emperor Harishena)—Ajanta served as a monastic retreat along ancient Deccan caravan trade routes.',
    why: 'Ajanta established the classical canon of Indian painting (Shadanga or Six Limbs of Painting), influencing Buddhist mural art across Tibet, Central Asia, China (Dunhuang), and Japan.',
    visualAnatomy: [
      'Downcast lotus-petal eyes conveying karuna (universal compassion) and inward meditative serenity',
      'Blue lotus (utpala) held delicately in the right hand with sinuous tribhanga (three-bend) posture',
      'Elaborate jewel-encrusted mukuta (crown) painted with lapis lazuli, red ochre, terre verte, and lampblack'
    ],
    tags: ['Ajanta Caves', 'Buddhist Art', 'Fresco-Secco'],
    svgMarkup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="240" fill="#3D261C"/>
      <path d="M24 240 V95 C24 38 296 38 296 95 V240 Z" fill="#593626" stroke="#D84315" stroke-width="1.5"/>
      <circle cx="160" cy="112" r="68" fill="none" stroke="#E09F5A" stroke-width="1.5" stroke-dasharray="5 3"/>
      <path d="M126 78 L160 32 L194 78 Z" fill="#D84315" stroke="#F4D092" stroke-width="2"/>
      <circle cx="160" cy="58" r="7" fill="#F4D092"/>
      <ellipse cx="160" cy="112" rx="34" ry="42" fill="#DFA76C"/>
      <path d="M136 104 Q147 97 156 104" stroke="#3D261C" stroke-width="2.2" fill="none"/>
      <path d="M164 104 Q173 97 184 104" stroke="#3D261C" stroke-width="2.2" fill="none"/>
      <path d="M138 108 Q147 113 155 108" stroke="#3D261C" stroke-width="1.8" fill="none"/>
      <path d="M165 108 Q173 113 182 108" stroke="#3D261C" stroke-width="1.8" fill="none"/>
      <path d="M152 132 Q160 138 168 132" stroke="#9E2E0B" stroke-width="2.5" fill="none"/>
      <path d="M102 198 Q160 154 218 198" stroke="#F4D092" stroke-width="5" fill="none"/>
      <g transform="translate(222, 118)">
        <path d="M0 45 Q8 18 0 0" stroke="#7A9A76" stroke-width="3" fill="none"/>
        <path d="M0 0 C-14 -8 -12 -26 0 -32 C12 -26 14 -8 0 0 Z" fill="#5B8291" stroke="#F4D092" stroke-width="1.5"/>
        <path d="M0 0 C-22 -2 -24 -18 -10 -26" fill="#5B8291" stroke="#F4D092" stroke-width="1.2"/>
        <path d="M0 0 C22 -2 24 -18 10 -26" fill="#5B8291" stroke="#F4D092" stroke-width="1.2"/>
      </g>
      <text x="18" y="26" fill="#F4D092" font-family="monospace" font-size="10" letter-spacing="1.5">FIG. 02 / CAVE I VAKATAKA</text>
    </svg>`
  },
  {
    id: 'chola-nataraja',
    index: '03',
    year: '9th – 13th Century CE',
    eraCategory: 'Ancient & Classical',
    title: 'Chola Period — Shiva Nataraja (Lord of the Cosmic Dance)',
    subtitle: 'Imperial Chola Sacred Processional Bronze (Utsava Murti)',
    type: 'Temple Bronze Sculpture',
    region: 'Thanjavur & Kaveri Delta, Tamil Nadu',
    medium: 'Panchaloha (Five-metal sacred bronze alloy)',
    dimensions: '96.5 cm × 82.8 cm × 28.4 cm',
    accessionNo: 'ACC. CHL-1010-TNJ',
    desc: 'An iconic bronze sculpture portraying Shiva performing the Ananda Tandava (Dance of Bliss) within an aureole of cosmic flames (Prabhamandala), harmonizing dynamic centrifugal motion with serene facial equilibrium.',
    context: 'Commissioned under Imperial Chola monarchs such as Rajaraja Chola I and Rajendra Chola I, temple bronzes were cast via solid lost-wax techniques so deities could be carried in ceremonial processions outside the sanctum.',
    why: 'Unites metaphysics, mathematical proportion (Talamana), and sculptural grace: the upper right hand holds the damaru (creation), upper left holds agni (destruction), lower right offers abhaya (protection), and the raised foot grants moksha (liberation).',
    visualAnatomy: [
      'Prabhamandala: Ring of 21-27 stylized tongues of cosmic fire symbolizing the cyclical universe',
      'Four-armed mudra choreography balancing drum of creation (damaru) and flame of dissolution (agni)',
      'Dwarf Apasmara Purusha beneath the planted right foot representing the conquest of spiritual ignorance'
    ],
    tags: ['Chola Dynasty', 'Panchaloha Bronze', 'Nataraja'],
    svgMarkup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="240" fill="#EDE4D3"/>
      <circle cx="160" cy="115" r="82" fill="none" stroke="#D84315" stroke-width="5"/>
      <circle cx="160" cy="115" r="90" fill="none" stroke="#9E2E0B" stroke-width="2" stroke-dasharray="4 8"/>
      <circle cx="160" cy="68" r="13" fill="#78350F"/>
      <path d="M120 70 Q140 64 147 68 M173 68 Q180 64 200 70" stroke="#D84315" stroke-width="2.5" fill="none"/>
      <path d="M160 82 L160 136" stroke="#78350F" stroke-width="10" stroke-linecap="round"/>
      <path d="M160 95 L112 78" stroke="#78350F" stroke-width="7" stroke-linecap="round"/>
      <path d="M160 95 L208 78" stroke="#78350F" stroke-width="7" stroke-linecap="round"/>
      <path d="M160 102 L126 122" stroke="#78350F" stroke-width="7" stroke-linecap="round"/>
      <path d="M160 102 L192 118" stroke="#78350F" stroke-width="7" stroke-linecap="round"/>
      <path d="M160 136 L166 184" stroke="#78350F" stroke-width="9" stroke-linecap="round"/>
      <path d="M160 136 L118 156" stroke="#78350F" stroke-width="9" stroke-linecap="round"/>
      <circle cx="110" cy="74" r="6" fill="#D84315"/>
      <path d="M208 66 C214 72 214 78 208 82 C202 78 202 72 208 66 Z" fill="#D84315"/>
      <ellipse cx="162" cy="192" rx="28" ry="8" fill="#9E2E0B"/>
      <rect x="122" y="198" width="76" height="14" rx="3" fill="#6E3B1E"/>
      <text x="18" y="26" fill="#D84315" font-family="monospace" font-size="10" letter-spacing="1.5">FIG. 03 / THANJAVUR BRONZE</text>
    </svg>`
  },
  {
    id: 'mughal-miniature',
    index: '04',
    year: '16th – 18th Century CE',
    eraCategory: 'Medieval & Courtly',
    title: 'Mughal Miniature — Imperial Karkhana Manuscript Folio',
    subtitle: 'Opaque Watercolor & Burnished Gold Leaf on Wasli Paper',
    type: 'Courtly Manuscript Painting',
    region: 'Agra, Fatehpur Sikri & Delhi (Mughal Imperial Ateliers)',
    medium: 'Natural mineral pigments, shell gold, and squirrel-hair brushwork on layered Wasli paper',
    dimensions: '36.2 cm × 24.8 cm',
    accessionNo: 'ACC. MGH-1615-JHG',
    desc: 'Exquisitely detailed manuscript illustrations and imperial portraits combining Persian Safavid compositional elegance, indigenous Indian naturalism, and European atmospheric perspective.',
    context: 'Established under Emperors Humayun and Akbar (Hamzanama, Akbarnama) and refined to jewel-like botanical and psychological portraiture under Jahangir and Shah Jahan inside collaborative royal workshops (taswirkhana).',
    why: 'Marks a watershed of Indo-Persian cultural synthesis, introducing empirical flora/fauna studies, individualized profile portraiture, and sumptuous floral hashia (illuminated borders).',
    visualAnatomy: [
      'Fine Pardaz shading achieved with single-hair squirrel brushes for lifelike facial modeling',
      'Illuminated Hashia border featuring golden arabesques, poppies, and irises framing the central scene',
      'Radiant gold nimbus (halo) behind the sovereign profile signifying divine royal light (Farr-i-Izadi)'
    ],
    tags: ['Mughal Atelier', 'Miniature Painting', 'Wasli Manuscript'],
    svgMarkup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="240" fill="#EBD8B7"/>
      <rect x="26" y="16" width="268" height="208" fill="#FBF3E4" stroke="#D84315" stroke-width="3"/>
      <rect x="36" y="26" width="248" height="188" fill="none" stroke="#B87B28" stroke-width="1.5" stroke-dasharray="3 3"/>
      <path d="M56 214 V96 C56 54 160 42 160 42 C160 42 264 54 264 96 V214 Z" fill="#2A4747"/>
      <circle cx="160" cy="108" r="32" fill="#E6B35A" opacity="0.85"/>
      <circle cx="160" cy="108" r="18" fill="#D59B6A"/>
      <path d="M144 98 C150 84 172 84 178 98 Z" fill="#D84315"/>
      <path d="M126 196 C132 146 188 146 194 196 Z" fill="#9E2E0B" stroke="#E6B35A" stroke-width="2"/>
      <path d="M76 208 Q160 178 244 208" stroke="#4D7A58" stroke-width="8" fill="none"/>
      <circle cx="88" cy="164" r="6" fill="#D84315"/><circle cx="232" cy="164" r="6" fill="#D84315"/>
      <text x="44" y="44" fill="#E6B35A" font-family="monospace" font-size="9" letter-spacing="1.5">FIG. 04 / TASWIRKHANA FOLIO</text>
    </svg>`
  },
  {
    id: 'madhubani-mithila',
    index: '05',
    year: '18th – 19th Century CE (Living Tradition)',
    eraCategory: 'Living Folk & Tribal',
    title: 'Madhubani / Mithila Painting — Kohbar & Kachni Motif',
    subtitle: 'Ritual Domestic Mural & Hand-Drawn Natural Dye Art',
    type: 'Regional Folk Painting',
    region: 'Mithila Region (Darbhanga, Madhubani, Sitamarhi), Bihar',
    medium: 'Bamboo twigs, nibs, matchsticks & natural pigments (turmeric, indigo, kusum flower, rice paste) on mud walls / handmade paper',
    dimensions: '56.0 cm × 76.0 cm',
    accessionNo: 'ACC. MDB-1890-MTH',
    desc: 'Vibrant geometric and mythological compositions defined by unmistakable double-line borders filled with cross-hatching (Kachni) or flat mineral color washes (Bharni), leaving zero empty background space (horror vacui).',
    context: 'Traditionally painted by women of the Mithila region on freshly plastered mud walls of the nuptial chamber (Kohbar Ghar) during weddings and seasonal festivals, and transitioned onto handmade paper following the 1934 Bihar earthquake.',
    why: 'Celebrates female artistic agency, ecological harmony (fish of fertility, peacocks of love, lotus of purity), and philosophical duality through intricate linework.',
    visualAnatomy: [
      'Do-Rekha (Double-line outline) filled with fine parallel hatching that prevents colors from bleeding',
      'Horror Vacui composition where every interstitial space is filled with floral leaves, birds, or stars',
      'Symbolic Kohbar iconography: twin fish (matsya), bamboo grove (vansha), and circular lotus mandala'
    ],
    tags: ['Madhubani', 'Mithila', 'Folk Tradition'],
    svgMarkup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="240" fill="#F2DFB6"/>
      <rect x="16" y="16" width="288" height="208" fill="none" stroke="#9E2E0B" stroke-width="3"/>
      <rect x="23" y="23" width="274" height="194" fill="none" stroke="#D84315" stroke-width="1.5" stroke-dasharray="4 2"/>
      <circle cx="160" cy="120" r="68" fill="#EFECE6" stroke="#9E2E0B" stroke-width="3"/>
      <circle cx="160" cy="120" r="58" fill="none" stroke="#D84315" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="160" cy="120" r="22" fill="#D84315" stroke="#221A15" stroke-width="2"/>
      <circle cx="160" cy="120" r="8" fill="#F2DFB6"/>
      <g stroke="#9E2E0B" stroke-width="2.2" fill="#E6B35A">
        <path d="M160 52 C172 72 172 86 160 98 C148 86 148 72 160 52 Z"/>
        <path d="M160 188 C172 168 172 154 160 142 C148 154 148 168 160 188 Z"/>
        <path d="M92 120 C112 108 126 108 138 120 C126 132 112 132 92 120 Z"/>
        <path d="M228 120 C208 108 194 108 182 120 C194 132 208 132 228 120 Z"/>
      </g>
      <path d="M46 65 C68 50 82 65 65 80 C48 65 62 50 46 65 Z" fill="#D84315"/>
      <path d="M274 65 C252 50 238 65 255 80 C272 65 258 50 274 65 Z" fill="#D84315"/>
      <path d="M46 175 C68 160 82 175 65 190 C48 175 62 160 46 175 Z" fill="#D84315"/>
      <path d="M274 175 C252 160 238 175 255 190 C272 175 258 160 274 175 Z" fill="#D84315"/>
      <text x="32" y="40" fill="#9E2E0B" font-family="monospace" font-size="9" letter-spacing="1.5">FIG. 05 / MITHILA MANDALA</text>
    </svg>`
  },
  {
    id: 'warli-painting',
    index: '06',
    year: '20th Century CE (Rooted in Neolithic Tradition)',
    eraCategory: 'Living Folk & Tribal',
    title: 'Warli Painting — Tarpa Dance & Sacred Chowk',
    subtitle: 'Austere Geometric Rice-Paste Narrative on Terracotta Ground',
    type: 'Indigenous Tribal Painting',
    region: 'Dahanu, Talasari & Jawhar (North Sahyadri Range), Maharashtra',
    medium: 'White rice-flour paste (bound with bamboo gum) on geru (red ochre) and cow-dung plastered surface',
    dimensions: '60.0 cm × 90.0 cm',
    accessionNo: 'ACC. WRL-1972-DHN',
    desc: 'A primal geometric visual vocabulary built strictly from the circle (sun and moon), triangle (conical mountains and pointed trees), and square (sacred human enclosure or chowk) to portray collective agrarian life and the spiral Tarpa dance.',
    context: 'Practiced for centuries as ritual wall murals by Warli women in the Thane/Palghar belt, and brought to global contemporary recognition in the 1970s by legendary master artist Jivya Soma Mashe.',
    why: 'Proves how extreme formal minimalism—two opposed triangles joined at the apex for the human torso—can generate extraordinary kinetic rhythm, ecological egalitarianism, and communal joy.',
    visualAnatomy: [
      'Two inverse triangles joined at the vertex representing the dynamic equilibrium of the human body',
      'Spiral Tarpa circle where dancers lock hands around the wind-instrument player in unbroken unity',
      'Stark white rice-paste pigment contrasting against warm earthy terracotta/geru wash'
    ],
    tags: ['Warli Art', 'Sahyadri Tribal', 'Sacred Geometry'],
    svgMarkup: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="240" fill="#9E3B1E"/>
      <rect x="14" y="14" width="292" height="212" fill="none" stroke="#F7F5F0" stroke-width="2"/>
      <path d="M14 24 L24 14 M24 24 L34 14 M34 24 L44 14 M44 24 L54 14 M54 24 L64 14" stroke="#F7F5F0" stroke-width="1.5"/>
      <circle cx="160" cy="122" r="64" fill="none" stroke="#F7F5F0" stroke-width="2" stroke-dasharray="4 4"/>
      <circle cx="160" cy="112" r="6" fill="#F7F5F0"/>
      <polygon points="150,120 170,120 160,134" fill="#F7F5F0"/>
      <polygon points="160,134 150,148 170,148" fill="#F7F5F0"/>
      <path d="M168 114 Q188 104 192 92" stroke="#F7F5F0" stroke-width="2.5" fill="none"/>
      <g fill="#F7F5F0" stroke="#F7F5F0" stroke-width="1.8">
        <circle cx="160" cy="42" r="4"/><polygon points="153,48 167,48 160,58"/><polygon points="160,58 153,68 167,68"/>
        <circle cx="160" cy="186" r="4"/><polygon points="153,192 167,192 160,202"/><polygon points="160,202 153,212 167,212"/>
        <circle cx="88" cy="114" r="4"/><polygon points="81,120 95,120 88,130"/><polygon points="88,130 81,140 95,140"/>
        <circle cx="232" cy="114" r="4"/><polygon points="225,120 239,120 232,130"/><polygon points="232,130 225,140 239,140"/>
      </g>
      <circle cx="52" cy="52" r="14" fill="none" stroke="#F7F5F0" stroke-width="2"/>
      <circle cx="52" cy="52" r="5" fill="#F7F5F0"/>
      <text x="26" y="214" fill="#F7F5F0" font-family="monospace" font-size="9" letter-spacing="1.5">FIG. 06 / TARPA MANDALA</text>
    </svg>`
  }
];

export const ART_MAP_LOCATIONS: ArtMapLocation[] = [
  {
    id: 'ajanta',
    index: '01',
    name: 'Ajanta Caves',
    lat: 20.552,
    lng: 75.703,
    region: 'Maharashtra',
    zone: 'Western & Deccan',
    tradition: 'Buddhist Murals & Rock-Cut Cave Architecture',
    era: '2nd Century BCE – 6th Century CE',
    summary: 'Ajanta is famous for narrative Buddhist paintings, expressive mudras, and rock-cut chaitya and vihara architecture developed over several centuries.',
    historicalContext: 'Carved into a 76-meter horseshoe-shaped basalt cliff overlooking the Waghora River, the 30 caves of Ajanta preserve India’s finest surviving ancient mural cycles illustrating the Jataka tales of the Buddha’s previous births.',
    keyHighlights: [
      'Cave 1: Bodhisattva Padmapani and Vajrapani mural masterpieces',
      'Cave 17: Wheel of Life and narrative Jataka storytelling friezes',
      'Cave 19 & 26: Sculpted Mahayana chaitya facades with ribbed stone vaults'
    ],
    signatureMotif: 'Blue Lotus & Compassionate Gaze'
  },
  {
    id: 'ellora',
    index: '02',
    name: 'Ellora Caves',
    lat: 20.026,
    lng: 75.179,
    region: 'Maharashtra',
    zone: 'Western & Deccan',
    tradition: 'Multi-Faith Rock-Cut Architecture & Monolithic Sculpture',
    era: '6th – 10th Century CE',
    summary: 'Ellora brings together Buddhist, Hindu, and Jain monuments in a continuous two-kilometer basalt escarpment, demonstrating exceptional monolithic rock-cut craftsmanship.',
    historicalContext: 'Patronized by the Rashtrakuta and Yadava dynasties, Ellora’s 34 caves stand as an architectural testament to interfaith artistic harmony in ancient India.',
    keyHighlights: [
      'Cave 16 (Kailasa Temple): World’s largest single monolithic rock excavation carved top-down',
      'Caves 1–12: Multi-storey Buddhist viharas and the Vishvakarma (Carpenter’s) Cave',
      'Caves 30–34: Intricately carved Jain Indra Sabha sanctuary'
    ],
    signatureMotif: 'Monolithic Kailasa Shikara'
  },
  {
    id: 'thanjavur',
    index: '03',
    name: 'Thanjavur',
    lat: 10.787,
    lng: 79.137,
    region: 'Tamil Nadu',
    zone: 'Southern',
    tradition: 'Chola Bronze Casting, Brihadeeswarar Temple & Tanjore Painting',
    era: '9th – 18th Century CE',
    summary: 'Thanjavur was the imperial capital of the Chola dynasty and a premier center of panchaloha bronze sculpture, towering granite Dravidian temple architecture, and gold-foiled Tanjore paintings.',
    historicalContext: 'Situated in the fertile Kaveri delta, Thanjavur gave birth to the Brihadeeswarar Temple (1010 CE) and later evolved the Maratha-patronized Tanjore gesso-and-gold-leaf devotional icon tradition.',
    keyHighlights: [
      'Brihadeeswarar Vimana: 66-meter granite tower crowned by an 80-ton monolithic stone',
      'Sacred Chola lost-wax bronzes including Shiva Nataraja and Parvati',
      'Tanjore relief paintings embellished with 22-karat gold leaf and semi-precious stones'
    ],
    signatureMotif: 'Prabhamandala Flame Ring'
  },
  {
    id: 'khajuraho',
    index: '04',
    name: 'Khajuraho',
    lat: 24.831,
    lng: 79.919,
    region: 'Madhya Pradesh',
    zone: 'Northern & Central',
    tradition: 'Nagara Temple Architecture & Figurative Sandstone Sculpture',
    era: '950 – 1050 CE (Chandela Dynasty)',
    summary: 'The Khajuraho group of monuments is celebrated for soaring Nagara-style sandstone spires and richly carved temple surfaces depicting divine, celestial, and everyday human life.',
    historicalContext: 'Built by the Chandela Rajput rulers in Bundelkhand, the temples integrate sculpture seamlessly into rising architectural bands (jangha) symbolizing cosmic mountain peaks (Mount Meru).',
    keyHighlights: [
      'Kandariya Mahadeva Temple: Crowned by 84 miniature urushringa subsidiary spires',
      'Expressive Surasundaris (celestial nymphs) writing letters, applying kohl, or removing thorns',
      'Harmonious integration of Hindu and Jain temple complexes (Lakshmana & Parsvanatha)'
    ],
    signatureMotif: 'Nagara Urushringa Spire'
  },
  {
    id: 'madhubani',
    index: '05',
    name: 'Madhubani / Mithila',
    lat: 26.35,
    lng: 86.07,
    region: 'Bihar',
    zone: 'Eastern',
    tradition: 'Mithila Folk & Ritual Wall Painting',
    era: 'Ancient Origins – Living Contemporary Tradition',
    summary: 'The Mithila region is synonymous with Madhubani painting, recognized for symbolic fertility motifs, bold double outlines, and densely patterned geometric borders.',
    historicalContext: 'Practiced across villages such as Jitwarpur and Ranti in northern Bihar, Madhubani evolved from ritual Kohbar and Aripan floor/wall diagrams into a GI-tagged international art form.',
    keyHighlights: [
      'Five distinct styles: Bharni, Kachni, Tantrik, Godna (tattoo-inspired), and Kohbar',
      'Natural pigments derived from soot, turmeric, indigo, palash flowers, and rice paste',
      'Pioneering women artists including Sita Devi, Ganga Devi, and Baua Devi'
    ],
    signatureMotif: 'Twin Matsya (Fish) & Lotus Mandala'
  },
  {
    id: 'warli',
    index: '06',
    name: 'Warli Region (Dahanu / Palghar)',
    lat: 19.8,
    lng: 73.0,
    region: 'Maharashtra',
    zone: 'Western & Deccan',
    tradition: 'Indigenous Warli Geometric Tribal Painting',
    era: 'Prehistoric Roots – Living Tradition',
    summary: 'Warli visual traditions in the northern Sahyadri foothills use austere geometric forms—circles, triangles, and lines—to portray community life, agriculture, nature, and ritual dance.',
    historicalContext: 'Centered around Dahanu, Talasari, and Jawhar in Palghar district, the Warli Adivasi community paints white rice-paste narratives on red ochre walls to honor Palaghata (goddess of fertility) and nature.',
    keyHighlights: [
      'Lagnacha Chowk: Sacred marriage square enclosed by geometric jewelry motifs',
      'Tarpa Dance: Spiraling chain of men and women moving in unison with the harvest wind horn',
      'Ecological worldview where humans, trees, birds, and tigers share equal visual scale'
    ],
    signatureMotif: 'Twin-Triangle Human & Tarpa Spiral'
  },
  {
    id: 'puri',
    index: '07',
    name: 'Puri & Raghurajpur',
    lat: 19.813,
    lng: 85.831,
    region: 'Odisha',
    zone: 'Eastern',
    tradition: 'Pattachitra Scroll Painting & Tala Pattachitra (Palm Leaf Etching)',
    era: '12th Century CE – Present',
    summary: 'Pattachitra is a classic Odisha painting tradition on treated cotton canvas (patta) associated with Jagannath temple narratives, disciplined calligraphic linework, and floral borders.',
    historicalContext: 'Centered around the Jagannath Temple in Puri and the heritage crafts village of Raghurajpur, Chitrakars prepare canvas using tamarind-seed gum and chalkstone before applying mineral colors.',
    keyHighlights: [
      'Anasara Patti: Ritual paintings substituting the triad deities during the annual temple seclusion',
      'Hingula (vermilion), Haritala (orpiment yellow), and conch-shell white mineral palette',
      'Tala Pattachitra: Intricate iron-stylus engravings on stitched palm-leaf manuscripts'
    ],
    signatureMotif: 'Jagannath Chakra & Creeper Border'
  },
  {
    id: 'jaipur',
    index: '08',
    name: 'Jaipur (Dhundhar School)',
    lat: 26.912,
    lng: 75.787,
    region: 'Rajasthan',
    zone: 'Northern & Central',
    tradition: 'Rajasthani Miniature Painting, Ragamala & Fresco Haveli Art',
    era: '16th – 19th Century CE',
    summary: 'Jaipur and the wider Rajput courts developed vibrant miniature painting traditions featuring lyrical Radha-Krishna devotion, musical Ragamala series, royal processions, and architectural frescoes.',
    historicalContext: 'Founded by Sawai Jai Singh II in 1727 with its Suratkhana (royal painting atelier), the Jaipur school synthesized bold Rajput color fields with delicate mineral pigments and gold embossing.',
    keyHighlights: [
      'Baramasa & Ragamala Folios: Visual personifications of musical modes and the twelve seasonal months',
      'Pratap Singh era life-size cartoons and multi-figure Raslila compositions',
      'Arashisha (Jaipur wet-lime fresco technique) polished with agate stones to mirror-like luster'
    ],
    signatureMotif: 'Peacock Pavilion & Lotus Pond'
  }
];

export const FUSION_PROJECT_DATA = {
  title: 'Prakriti Sangam: Warli × Kalamkari Digital Fusion',
  subtitle: 'CO2 Regional Painting Fusion — Bridging Maharashtra’s Tribal Geometry with Andhra’s Floral Narrative',
  projectDescription: `This digital fusion artwork, titled "Prakriti Sangam" (Confluence of Nature), synthesizes two iconic Indian folk art traditions: Warli tribal painting from the northern Sahyadri range of Maharashtra and Kalamkari hand-painted/block-printed textile art from Srikalahasti and Machilipatnam in Andhra Pradesh.

At the structural heart of the composition lies the sacred Warli geometry—constructed from circles (the sun and moon), triangles (conical trees, hills, and human torsos), and squares (the ritual Chowk enclosure). Inside the central mandala, a community of Warli figures performs the spiral Tarpa harvest dance alongside scenes of sowing, winnowing, and village musicians. Encircling and interweaving with these austere white rice-paste figures is the lush, lyrical vocabulary of Kalamkari: anarching Tree of Life (Vriksha) laden with curving creepers, blooming lotuses, mango paisleys, and twin peacocks rendered in warm natural-dye tones of madder red (alizarin), myrobalan ochre, indigo blue-black, and pomegranate rind gold.

The outer frame unites both traditions through a dual-band border: an exterior Kalamkari floral vine and temple-arch (gopuram) frieze paired with an interior Warli pointed-triangle mountain-and-grain border. Together, the artwork demonstrates how tribal minimalism and ornamental botanical storytelling share a profound, unified reverence for ecological harmony and sacred community rhythm.`,
  presentationPoints: [
    {
      slide: '01',
      heading: 'Concept & Artistic Rationale (Why Warli × Kalamkari?)',
      bullet: 'Contrasts yet harmonizes two foundational visual languages of peninsular India: Warli’s austere rectilinear geometry (Maharashtra) and Kalamkari’s organic, curvilinear botanical ornamentation (Andhra Pradesh).'
    },
    {
      slide: '02',
      heading: 'Warli Elements Integrated (Form & Community)',
      bullet: 'Features the iconic two-triangle human figures joined at the apex, the spiraling Tarpa harvest dance circle, solar/lunar celestial discs, and agrarian village life rendered in crisp rice-paste ivory lines.'
    },
    {
      slide: '03',
      heading: 'Kalamkari Elements Integrated (Flora & Natural Dyes)',
      bullet: 'Incorporates the overarching Tree of Life (Kalpavriksha), winding floral creepers (butti), stylized peacocks, lotus medallions, and kalam (pen-drawn) contour hatching in earthy madder red, ochre, and indigo.'
    },
    {
      slide: '04',
      heading: 'Compositional Architecture & Dual Borders',
      bullet: 'Built on a concentric Chowk-Mandala grid framed by a compound decorative border: an outer Kalamkari floral creeper and temple-kalasha band nesting an inner Warli chevron triangle pattern.'
    },
    {
      slide: '05',
      heading: 'Thematic Synthesis & Cultural Significance (CO2)',
      bullet: 'Both traditions use 100% natural, earth-derived pigments (rice paste & geru vs. myrobalan, madder & iron-jaggery kasim) to celebrate Prakriti (Nature) as a living, sacred ecosystem.'
    }
  ],
  comparisonMatrix: [
    {
      dimension: 'Geographic Origin',
      warli: 'North Sahyadri (Dahanu, Palghar, Jawhar), Maharashtra',
      kalamkari: 'Srikalahasti & Machilipatnam, Andhra Pradesh',
      fusionSynthesis: 'Deccan-Peninsular corridor uniting Western Ghats & Coromandel aesthetics'
    },
    {
      dimension: 'Core Line & Form',
      warli: 'Strict Euclidean geometry: circle, triangle, square, straight sticks',
      kalamkari: 'Sensuous S-curves, scrolling vines, scalloped petals, fine hatching',
      fusionSynthesis: 'Geometric Warli villagers dancing beneath overarching Kalamkari floral boughs'
    },
    {
      dimension: 'Traditional Palette',
      warli: 'Monochrome white rice paste on warm terracotta/geru red earth',
      kalamkari: 'Natural dyes: madder red, myrobalan yellow, kasim black, indigo',
      fusionSynthesis: 'Warm parchment & terracotta canvas accented by ochre gold, indigo, and ivory'
    },
    {
      dimension: 'Narrative Focus',
      warli: 'Collective agrarian life, Tarpa dance, harvest, forest ecology',
      kalamkari: 'Tree of Life (Kalpavriksha), sacred fauna, epic & cosmic motifs',
      fusionSynthesis: 'Human community embedded within an abundant cosmic Tree of Life'
    }
  ],
  hotspots: [
    {
      id: 'hs-tree',
      label: 'Kalamkari Tree of Life Canopy',
      tradition: 'Kalamkari Element',
      x: 50,
      y: 20,
      description: 'Srikalahasti-inspired curving branches bearing stylized lotus buds, paisley leaves, and cross-hatched petals symbolizing cosmic shelter.'
    },
    {
      id: 'hs-tarpa',
      label: 'Warli Tarpa Spiral Dance',
      tradition: 'Warli Element',
      x: 50,
      y: 54,
      description: 'Twelve geometric Warli dancers formed from inverted triangles lock hands in an unbroken clockwise spiral around the central Tarpa horn player.'
    },
    {
      id: 'hs-peacock',
      label: 'Twin Kalamkari Peacocks & Fauna',
      tradition: 'Kalamkari Element',
      x: 24,
      y: 68,
      description: 'Ornate plumed peacocks rendered with fine kalam pen contours stand alongside geometric Warli deer and forest birds.'
    },
    {
      id: 'hs-border',
      label: 'Dual-Tradition Chowk & Creeper Border',
      tradition: 'Harmonic Synthesis',
      x: 84,
      y: 84,
      description: 'Outer band features Kalamkari scrolling lotus vines while the inner frame uses Warli saw-tooth mountain triangles and cross-hatched sacred Chowk bands.'
    }
  ] as FusionHotspot[]
};
