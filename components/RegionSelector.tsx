"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

const regions = [
  { id: 'salento', name: 'Lecce' },
  { id: 'brindisi', name: 'Brindisi' },
  { id: 'taranto', name: 'Taranto' },
];

interface RegionSelectorProps {
  onRegionChange: (regionId: string) => void;
  initialRegion?: string;
}

export default function RegionSelector({ onRegionChange, initialRegion = 'salento' }: RegionSelectorProps) {
  const [activeRegion, setActiveRegion] = useState(initialRegion);

  const handleRegionClick = (regionId: string) => {
    setActiveRegion(regionId);
    onRegionChange(regionId);
  };

  const activeIndex = regions.findIndex(r => r.id === activeRegion);

  return (
    <div className="relative flex w-full max-w-sm mx-auto bg-gray-100 p-1 rounded-full">
      <div
        className="absolute top-1 bottom-1 left-0 bg-jentu-teal rounded-full shadow-md transition-transform duration-300 ease-in-out"
        style={{
          width: `calc(100% / ${regions.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => handleRegionClick(region.id)}
          className={cn(
            "relative z-10 flex-1 py-2 text-center text-sm font-semibold transition-colors duration-300",
            activeRegion === region.id ? "text-white" : "text-gray-600 hover:text-gray-800"
          )}
        >
          {region.name}
        </button>
      ))}
    </div>
  );
}
