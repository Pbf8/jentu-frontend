// Script per convertire CSV di proverbi in TypeScript
// Usa questo se hai un file CSV dei proverbi

// OPZIONE 1: CSV con header (salentino,italiano,spiegazione)
// Copia il contenuto del CSV e incollalo qui sotto tra i backtick

const csvData = `
salentino,italiano,spiegazione
Cu sse scota cu la menestra càudia, suffia pure a quidda fridda,Chi si scotta con la minestra calda soffia pure su quella fredda,Chi ha avuto una brutta esperienza diventa eccessivamente cauto
Quandu chhjoe a chhjoe nu bbale la pena de scire de sotta,Quando piove piove non vale la pena di uscire di sotto,Quando le cose vanno male vanno veramente male
`.trim();

// OPZIONE 2: Se il tuo CSV ha un formato diverso, modificalo qui
function parseCSV(csv: string) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  
  const proverbs = lines.slice(1).map(line => {
    const values = line.split(',');
    return {
      salentino: values[0]?.trim() || '',
      italian: values[1]?.trim() || '',
      explanation: values[2]?.trim() || '',
    };
  }).filter(p => p.salentino); // Rimuovi righe vuote

  return proverbs;
}

// Converti e stampa il risultato
const proverbs = parseCSV(csvData);

console.log('// Copia questo output in data/proverbs.ts\n');
console.log('export interface Proverb {');
console.log('  salentino: string;');
console.log('  italian: string;');
console.log('  explanation: string;');
console.log('}\n');
console.log('export const proverbs: Proverb[] = [');
proverbs.forEach((p, i) => {
  console.log('  {');
  console.log(`    salentino: "${p.salentino}",`);
  console.log(`    italian: "${p.italian}",`);
  console.log(`    explanation: "${p.explanation}"`);
  console.log(`  }${i < proverbs.length - 1 ? ',' : ''}`);
});
console.log('];');

// COME USARE QUESTO SCRIPT:
// 1. Salva questo file come convert-proverbs.ts
// 2. Incolla il tuo CSV nella variabile csvData
// 3. Esegui: npx ts-node convert-proverbs.ts > output.txt
// 4. Copia l'output in data/proverbs.ts

// ALTERNATIVA SEMPLICE:
// Se hai Excel/Google Sheets, esporta come CSV e usa questo formato:
// - Colonna A: Proverbio in salentino
// - Colonna B: Traduzione italiana
// - Colonna C: Spiegazione

export {};
