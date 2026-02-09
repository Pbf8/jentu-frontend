// ESEMPIO: Come integrare API Railway per la Top 3 dinamica
// Questo file mostra come connettere il frontend React al tuo backend Railway

// ===== OPZIONE 1: API Route (Raccomandato) =====
// Crea: app/api/top3/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Chiama il tuo endpoint Railway
    const response = await fetch('https://jentu-production.up.railway.app/api/top3', {
      next: { revalidate: 3600 } // Cache per 1 ora (3600 secondi)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch top 3');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching top 3:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

// ===== OPZIONE 2: Component Client-Side =====
// Modifica: app/page.tsx - sezione Top 3

'use client';
import { useEffect, useState } from 'react';

interface Top3Location {
  rank: number;
  name: string;
  score: number;
  conditions: string;
  sun: number;
  waves: number;
  wind: number;
}

export function Top3Section() {
  const [top3, setTop3] = useState<Top3Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTop3() {
      try {
        // Opzione A: Usa la tua API route
        const response = await fetch('/api/top3');
        
        // Opzione B: Chiama direttamente Railway (se hai CORS configurato)
        // const response = await fetch('https://jentu-production.up.railway.app/api/top3');
        
        const data = await response.json();
        setTop3(data);
      } catch (error) {
        console.error('Error:', error);
        // Fallback a dati statici
        setTop3([
          { rank: 1, name: "Torre dell'Orso", score: 95, conditions: "Ottime", sun: 10, waves: 3, wind: 5 },
          { rank: 2, name: "Porto Cesareo", score: 88, conditions: "Buone", sun: 9, waves: 2, wind: 4 },
          { rank: 3, name: "Gallipoli", score: 82, conditions: "Discrete", sun: 8, waves: 4, wind: 6 },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchTop3();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <div className="animate-pulse">Caricamento top 3...</div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {top3.map((location) => (
        <div
          key={location.rank}
          className={`bg-white rounded-lg shadow-lg p-6 text-center border-t-4 ${
            location.rank === 1 ? 'border-jentu-teal' :
            location.rank === 2 ? 'border-gray-400' :
            'border-orange-400'
          }`}
        >
          <h4 className={`text-5xl font-bold mb-2 ${
            location.rank === 1 ? 'text-jentu-teal' :
            location.rank === 2 ? 'text-gray-600' :
            'text-orange-600'
          }`}>
            {location.rank}°
          </h4>
          <p className="text-xl font-semibold">{location.name}</p>
          <p className="text-sm text-gray-600 mt-2">{location.conditions}</p>
          
          {/* Dettagli opzionali */}
          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <div>☀️ Sole: {location.sun}/10</div>
            <div>🌊 Onde: {location.waves}/10</div>
            <div>💨 Vento: {location.wind}/10</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ===== FORMATO DATI ATTESO DAL BACKEND =====
// Il tuo endpoint Railway dovrebbe restituire JSON tipo:
/*
[
  {
    "rank": 1,
    "name": "Torre dell'Orso",
    "score": 95,
    "conditions": "Ottime",
    "sun": 10,
    "waves": 3,
    "wind": 5,
    "latitude": 40.2944,
    "longitude": 18.4231
  },
  ...
]
*/

// ===== ESEMPIO BACKEND PYTHON (Flask/FastAPI) =====
/*
from flask import jsonify

@app.route('/api/top3')
def get_top3():
    # La tua logica qui
    top_locations = calculate_best_locations()
    
    return jsonify([
        {
            'rank': 1,
            'name': location.name,
            'score': location.score,
            'conditions': get_condition_text(location.score),
            'sun': location.sun_score,
            'waves': location.wave_score,
            'wind': location.wind_score
        }
        for location in top_locations[:3]
    ])
*/

// ===== CACHING E PERFORMANCE =====
// Per evitare di chiamare Railway ogni volta:
// 1. Usa Next.js revalidate (come sopra) per cache automatica
// 2. Imposta ISR (Incremental Static Regeneration):

export const revalidate = 7200; // Rigenera ogni 2 ore

// ===== GESTIONE ERRORI =====
// Sempre fornire un fallback in caso di errore API:
const fallbackData = [
  { rank: 1, name: "Caricamento...", score: 0, conditions: "Dati non disponibili" },
];

export {};
