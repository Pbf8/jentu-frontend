'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface RegionContextType {
  currentRegion: string;
  setCurrentRegion: (region: string) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [currentRegion, setCurrentRegion] = useState('salento');
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
