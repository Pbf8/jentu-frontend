'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useRegion, Region } from '@/context/RegionContext';

const locations: { id: Region; name: string }[] = [
  { id: 'salento', name: 'Lecce' },
  { id: 'brindisi', name: 'Brindisi' },
];

export default function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentRegion, setCurrentRegion } = useRegion();

  const handleSelection = (locationId: Region) => {
    setCurrentRegion(locationId);
    setIsOpen(false);
  };

  const selectedLocationName = locations.find(l => l.id === currentRegion)?.name;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-jentu-teal transition-colors duration-200"
      >
        <span>{selectedLocationName}</span>
        <ChevronDown className={cn('w-4 h-4 text-jentu-teal transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-50 animate-fade-in-fast">
          <ul className="py-1">
            {locations.map(location => (
              <li key={location.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelection(location.id);
                  }}
                  className={cn(
                    'block px-4 py-2 text-sm text-gray-700 hover:bg-jentu-teal/10 hover:text-jentu-teal',
                    currentRegion === location.id && 'font-bold text-jentu-teal'
                  )}
                >
                  {location.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
