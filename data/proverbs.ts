export interface Proverb {
  salentino: string;
  italian: string;
  explanation: string;
  category?: 'mare' | 'meteo' | 'vita' | 'lavoro';
}

export const proverbs: Proverb[] = [
  {
    salentino: "Lu mare caccia e lu mare porta",
    italian: "Il mare butta fuori e il mare porta",
    explanation: "Il mare toglie ma anche restituisce. Le cose vanno e vengono come le onde. Bisogna accettare i cambiamenti della vita.",
    category: 'mare',
  },
  {
    salentino: "Quandu lu mare è chinu, tuttu pare bbiellu",
    italian: "Quando il mare è calmo, tutto sembra bello",
    explanation: "Nelle situazioni tranquille, tutto appare più facile e piacevole. Ma è nei momenti difficili che si vede il vero carattere.",
    category: 'mare',
  },
  {
    salentino: "Cu sse scota cu la menestra càudia, suffia pure a quidda fridda",
    italian: "Chi si scotta con la minestra calda, soffia pure su quella fredda",
    explanation: "Chi ha avuto una brutta esperienza diventa eccessivamente cauto, anche quando non serve. L'esperienza rende saggi ma a volte troppo prudenti.",
    category: 'vita',
  },
  {
    salentino: "Quandu chhjoe a chhjoe, nu bbale la pena de scire de sotta",
    italian: "Quando piove, piove, non vale la pena di uscire di sotto",
    explanation: "Quando le cose vanno male, vanno veramente male e non c'è nulla da fare se non aspettare che passi.",
    category: 'meteo',
  },
  {
    salentino: "Cu ha tempu nu aspetta tempu",
    italian: "Chi ha tempo non aspetta tempo",
    explanation: "Chi ha l'opportunità di fare qualcosa, deve farla subito senza rimandare. Il tempo non aspetta nessuno.",
    category: 'vita',
  },
  {
    salentino: "A jentu tuttu se mporta",
    italian: "Al vento tutto si porta via",
    explanation: "Il vento porta via tutto, come i problemi e le preoccupazioni. Bisogna lasciare andare ciò che non possiamo controllare.",
    category: 'meteo',
  },
  {
    salentino: "Quandu lu jentu cambia, cambia puru lu mare",
    italian: "Quando il vento cambia, cambia pure il mare",
    explanation: "Tutto è connesso in natura. Un piccolo cambiamento può portare a grandi conseguenze.",
    category: 'meteo',
  },
  {
    salentino: "Lu sciroccu porta acqua, la tramuntana la porta bbia",
    italian: "Lo scirocco porta acqua, la tramontana la porta via",
    explanation: "Ogni vento ha le sue caratteristiche. Lo scirocco dal sud porta pioggia, la tramontana dal nord porta bel tempo.",
    category: 'meteo',
  },
  {
    salentino: "Mare calmu nu face mai bonu marinaru",
    italian: "Mare calmo non fa mai buon marinaio",
    explanation: "Le difficoltà e le sfide sono ciò che ci rende più forti e capaci. Senza ostacoli non si cresce.",
    category: 'mare',
  },
  {
    salentino: "Cu vole pesci, si àgna bagnare",
    italian: "Chi vuole pesci, si deve bagnare",
    explanation: "Per ottenere qualcosa bisogna essere disposti a correre dei rischi e a fare sacrifici.",
    category: 'mare',
  },
  {
    salentino: "Jentu de matina, acqua pe' a sirata",
    italian: "Vento di mattina, acqua per la sera",
    explanation: "Il vento mattutino è spesso foriero di pioggia nel pomeriggio. Osservare i segni della natura aiuta a prevedere il tempo.",
    category: 'meteo',
  },
  {
    salentino: "Rispetta lu mare ca tie te campa",
    italian: "Rispetta il mare che ti fa campare",
    explanation: "Bisogna rispettare ciò che ci dà sostentamento. Il mare è vita per il Salento e va onorato.",
    category: 'mare',
  },
];

/**
 * Ottieni il proverbio del giorno basato sulla data
 */
export function getTodayProverb(): Proverb {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % proverbs.length;
  return proverbs[index];
}

/**
 * Ottieni un proverbio casuale
 */
export function getRandomProverb(): Proverb {
  return proverbs[Math.floor(Math.random() * proverbs.length)];
}

/**
 * Ottieni proverbi per categoria
 */
export function getProverbsByCategory(category: Proverb['category']): Proverb[] {
  return proverbs.filter(p => p.category === category);
}

/**
 * Cerca proverbi per testo
 */
export function searchProverbs(query: string): Proverb[] {
  const lowerQuery = query.toLowerCase();
  return proverbs.filter(p => 
    p.salentino.toLowerCase().includes(lowerQuery) ||
    p.italian.toLowerCase().includes(lowerQuery) ||
    p.explanation.toLowerCase().includes(lowerQuery)
  );
}
