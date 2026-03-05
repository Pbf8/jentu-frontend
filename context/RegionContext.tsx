'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Region = "salento" | "brindisi";

interface RegionContextType {
  currentRegion: Region;
  setCurrentRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [currentRegion, setCurrentRegion] = useState<Region>('salento');
  return (
    <RegionContext.Provider value={{ currentRegion, setCurrentRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}
