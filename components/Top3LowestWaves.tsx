'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/Skeleton';

interface WaveData {
  name: string;
  side: 'ionian' | 'adriatic';
  wave: number;
}

export default function Top3LowestWaves() {
  const [data, setData] = useState<WaveData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/get_lowest_waves');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getSideLabel = (side: 'ionian' | 'adriatic') => {
    return side === 'ionian' ? 'Ionio' : 'Adriatico';
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-4 px-6 bg-red-100 rounded-lg">
        <p className="text-red-700 font-medium">⚠️ Errore nel caricamento dei dati (v3). Il proxy non funziona.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {data.map((item, index) => (
        <li key={item.name} className="p-4 rounded-xl shadow-lg bg-white border border-gray-100 flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
          <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white ${item.side === 'ionian' ? 'bg-blue-500' : 'bg-cyan-500'}`}>
            {index + 1}
          </div>
          <div className="flex-grow">
            <p className="font-bold text-lg text-gray-800">{item.name}</p>
            <p className={`text-sm font-medium ${item.side === 'ionian' ? 'text-blue-600' : 'text-cyan-600'}`}>
              {getSideLabel(item.side)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-800">{item.wave.toFixed(2)}m</p>
            <p className="text-xs text-gray-500">Onda</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
