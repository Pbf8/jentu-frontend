'use client';

import Link from 'next/link';

export default function MasserieSalentinePage() {
  // Esempio di array per gestire facilmente più masserie affiliate in futuro
  const masserieInEvidenza = [
    {
      id: 1,
      nome: 'Masseria tra gli Ulivi',
      descrizione: 'Un rifugio di lusso immerso nella natura incontaminata del Salento.',
      linkAffiliato: 'INSERISCI_QUI_LINK_VILLANOVO_1'
    },
    {
      id: 2,
      nome: 'Dimora Storica',
      descrizione: 'Architettura in pietra viva e design contemporaneo per un relax assoluto.',
      linkAffiliato: 'INSERISCI_QUI_LINK_VILLANOVO_2'
    }
  ];

  return (
    <main className="container-jentu py-16 md:py-24 px-4 mx-auto max-w-6xl font-sans">
      
      {/* Intestazione Elegante */}
      <header className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
        <h1 className="text-4xl md:text-6xl font-light text-stone-900 mb-6 tracking-tight">
          Masserie Salentine
        </h1>
        <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed">
          Vivi l'autenticità del Salento. Abbiamo selezionato le dimore storiche e le masserie più esclusive per un soggiorno all'insegna del lusso discreto, tra ulivi secolari e architetture in pietra viva.
        </p>
      </header>

      {/* Sezione Call to Action Principale (Villanovo) */}
      <section className="bg-stone-50 border border-stone-100 rounded-2xl p-8 md:p-16 text-center mb-24 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-4">
          La Collezione Esclusiva
        </h2>
        <p className="text-stone-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          In collaborazione con <span className="font-medium">Villanovo</span>, ti offriamo un accesso privilegiato alle migliori strutture del territorio. Scopri tenute mozzafiato e prenota la tua oasi di pace con la garanzia di un servizio d'eccellenza.
        </p>
        <Link 
          href="INSERISCI_QUI_IL_TUO_LINK_AFFILIATO_GENERALE_VILLANOVO" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-stone-900 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors duration-300"
        >
          Esplora tutte le Masserie
        </Link>
      </section>

      {/* Griglia Opzionale per Strutture Specifiche */}
      <section>
        <h3 className="text-xl text-stone-800 mb-10 font-light border-b border-stone-200 pb-4">
          Strutture in Evidenza
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {masserieInEvidenza.map((masseria) => (
            <article key={masseria.id} className="group cursor-pointer flex flex-col">
              {/* Spazio per l'immagine (placeholder) */}
              <div className="w-full h-64 md:h-80 bg-stone-200 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500"></div>
                {/* Quando avrai le immagini, usa: <Image src="..." alt={masseria.nome} fill className="object-cover" /> */}
              </div>
              <h4 className="text-2xl font-light text-stone-900 mb-2">
                {masseria.nome}
              </h4>
              <p className="text-stone-500 font-light mb-4 flex-grow">
                {masseria.descrizione}
              </p>
              <Link 
                href={masseria.linkAffiliato}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 font-medium text-sm tracking-wide uppercase border-b border-stone-900 self-start pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors"
              >
                Scopri di più
              </Link>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}