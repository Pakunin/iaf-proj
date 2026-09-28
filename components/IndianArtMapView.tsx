import React, { useEffect, useRef, useState } from 'react';
import { ART_MAP_LOCATIONS, ArtMapLocation } from '../data/indianArtData';
import { MapPin, Compass, RotateCcw, Navigation } from 'lucide-react';

declare global {
  interface Window {
    L: any;
  }
}

export const IndianArtMapView: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});

  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [activePlace, setActivePlace] = useState<ArtMapLocation>(ART_MAP_LOCATIONS[0]);

  const zones = ['All', 'Western & Deccan', 'Northern & Central', 'Eastern', 'Southern'];

  const filteredLocations =
    selectedZone === 'All'
      ? ART_MAP_LOCATIONS
      : ART_MAP_LOCATIONS.filter((loc) => loc.zone === selectedZone);

  useEffect(() => {
    if (!mapContainerRef.current || !window.L) return;
    if (mapInstanceRef.current) return;

    const L = window.L;
    const map = L.map(mapContainerRef.current, {
      center: [22.2, 79.2],
      zoom: 5,
      scrollWheelZoom: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      className: 'warm-map-tiles',
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    ART_MAP_LOCATIONS.forEach((loc) => {
      const customIcon = L.divIcon({
        className: 'custom-art-marker',
        html: `<div style="
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          background: #D84315;
          color: #EFECE6;
          border: 2.5px solid #EFECE6;
          box-shadow: 0 4px 12px rgba(34,26,21,0.32);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 600;
        ">${loc.index}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -14],
      });

      const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);
      marker.bindPopup(`
        <div style="min-width:210px;max-width:260px;">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:#D84315;letter-spacing:0.08em;text-transform:uppercase;">
            ${loc.index} · ${loc.region}
          </div>
          <h3 style="font-family:'Fraunces',serif;font-size:17px;font-weight:600;margin:3px 0 4px;color:#221A15;">
            ${loc.name}
          </h3>
          <div style="font-size:12px;font-weight:600;color:#655246;margin-bottom:6px;">
            ${loc.tradition}
          </div>
          <p style="font-size:12px;color:#4A3B31;margin:0;line-height:1.45;">
            ${loc.summary}
          </p>
        </div>
      `);

      marker.on('click', () => {
        setActivePlace(loc);
      });

      markersRef.current[loc.id] = marker;
    });

    mapInstanceRef.current = map;

    setTimeout(() => {
      map.invalidateSize();
    }, 150);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handleSelectLocation = (loc: ArtMapLocation) => {
    setActivePlace(loc);
    if (mapInstanceRef.current && markersRef.current[loc.id]) {
      mapInstanceRef.current.flyTo([loc.lat, loc.lng], 7, {
        duration: 0.9,
      });
      markersRef.current[loc.id].openPopup();
    }
  };

  const handleResetMap = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([22.2, 79.2], 5, { duration: 0.8 });
      mapInstanceRef.current.closePopup();
    }
  };

  return (
    <div className="space-y-8">
      {/* Filter & Map Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#D84315]/20">
        <div className="flex flex-wrap items-center gap-1.5">
          {zones.map((zone) => (
            <button
              key={zone}
              type="button"
              onClick={() => setSelectedZone(zone)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedZone === zone
                  ? 'bg-[#D84315] text-[#EFECE6]'
                  : 'bg-[#E6E1D6] text-[#655246] hover:text-[#221A15]'
              }`}
            >
              {zone === 'All' ? 'All 8 Heritage Sites' : zone}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleResetMap}
          className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#221A15] text-[#EFECE6] hover:bg-[#3A2E26] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset All-India View
        </button>
      </div>

      {/* Main Split: Leaflet Map + Interactive Site Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 7 Cols: Leaflet Map Container */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-xl overflow-hidden border border-[#D84315]/25 shadow-sm bg-[#E6E1D6]">
            <div
              ref={mapContainerRef}
              className="w-full h-[520px] z-10"
              aria-label="Interactive Map of Indian Art History"
            />
            <div className="px-4 py-3 bg-[#F7F5F0] border-t border-[#D84315]/15 flex flex-wrap items-center justify-between gap-2 text-xs text-[#655246]">
              <span>
                Leaflet 1.9.4 + OpenStreetMap · Click numbered markers or directory cards to fly to coordinates
              </span>
              <span className="font-mono-tabular text-[#D84315]">
                {activePlace.lat.toFixed(3)}° N, {activePlace.lng.toFixed(3)}° E
              </span>
            </div>
          </div>

          {/* Active Location Deep Curatorial Dossier */}
          <div className="p-6 rounded-xl bg-[#F7F5F0] border border-[#D84315]/20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tabular text-[#D84315]">
              <span>
                SITE {activePlace.index} · {activePlace.region.toUpperCase()} · {activePlace.era}
              </span>
              <span>MOTIF: {activePlace.signatureMotif}</span>
            </div>

            <div>
              <h3 className="font-editorial text-2xl font-semibold text-[#221A15]">
                {activePlace.name}
              </h3>
              <p className="text-sm font-medium text-[#D84315] mt-0.5">
                {activePlace.tradition}
              </p>
            </div>

            <p className="text-sm text-[#3D3028] leading-relaxed">
              {activePlace.historicalContext}
            </p>

            <div className="pt-3 border-t border-[#D84315]/15 space-y-2">
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#655246]">
                Architectural & Artistic Highlights
              </div>
              <ul className="space-y-1.5 text-xs text-[#4A3B31]">
                {activePlace.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D84315] font-mono-tabular">0{i + 1}.</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Clickable 8-Site Directory */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#655246]">
              CO1 Cultural Geography Index ({filteredLocations.length} Sites)
            </span>
            <Compass className="w-4 h-4 text-[#D84315]" />
          </div>

          <div className="space-y-2.5">
            {filteredLocations.map((loc) => {
              const isSelected = activePlace.id === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => handleSelectLocation(loc)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#221A15] text-[#EFECE6] border-[#221A15]'
                      : 'bg-[#F7F5F0] text-[#221A15] border-[#D84315]/20 hover:border-[#D84315]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div
                        className={`text-xs font-mono-tabular ${
                          isSelected ? 'text-[#F4A27E]' : 'text-[#D84315]'
                        }`}
                      >
                        {loc.index} · {loc.region} · {loc.zone}
                      </div>
                      <h4 className="font-editorial text-lg font-semibold leading-snug">
                        {loc.name}
                      </h4>
                      <p
                        className={`text-xs font-medium ${
                          isSelected ? 'text-[#E6E1D6]' : 'text-[#655246]'
                        }`}
                      >
                        {loc.tradition}
                      </p>
                    </div>
                    <span
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected
                          ? 'bg-[#D84315] text-[#EFECE6]'
                          : 'bg-[#EFECE6] text-[#D84315]'
                      }`}
                    >
                      {isSelected ? (
                        <Navigation className="w-4 h-4" />
                      ) : (
                        <MapPin className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-2.5 leading-relaxed ${
                      isSelected ? 'text-[#D6CFC4]' : 'text-[#4A3B31]'
                    }`}
                  >
                    {loc.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
