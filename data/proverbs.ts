export interface Proverb {
  salentino: string;
  italian: string;
  explanation: string;
}

export const proverbs: Proverb[] = [
  {
    salentino: "Cu sse scota cu la menestra càudia, suffia pure a quidda fridda",
    italian: "Chi si scotta con la minestra calda, soffia pure su quella fredda",
    explanation: "Chi ha avuto una brutta esperienza diventa eccessivamente cauto, anche quando non serve."
  },
  {
    salentino: "Quandu chhjoe a chhjoe, nu bbale la pena de scire de sotta",
    italian: "Quando piove, piove, non vale la pena di uscire di sotto",
    explanation: "Quando le cose vanno male, vanno veramente male e non c'è nulla da fare."
  },
  {
    salentino: "Lu mare caccia e lu mare porta",
    italian: "Il mare butta fuori e il mare porta",
    explanation: "Il mare toglie ma anche restituisce. Le cose vanno e vengono come le onde."
  },
  {
    salentino: "Quandu lu mare è chinu, tuttu pare bbiellu",
    italian: "Quando il mare è calmo, tutto sembra bello",
    explanation: "Nelle situazioni tranquille, tutto appare più facile e piacevole."
  },
  {
    salentino: "Cu ha tempu nu aspetta tempu",
    italian: "Chi ha tempo non aspetta tempo",
    explanation: "Chi ha l'opportunità di fare qualcosa, deve farla subito senza rimandare."
  }
];

export function getTodayProverb(): Proverb {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % proverbs.length;
  return proverbs[index];
}
