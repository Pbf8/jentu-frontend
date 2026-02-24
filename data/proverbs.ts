export interface Proverb {
  salentino: string;
  italian: string;
  explanation: string;
  category?: 'mare' | 'meteo' | 'vita' | 'lavoro';
}

export const proverbs: Proverb[] = [
  // --- PROVERBI ORIGINALI ---
  {
    salentino: "Lu mare dae e lu mare llea",
    italian: "Il mare butta fuori e il mare porta",
    explanation: "Il mare toglie ma anche restituisce. Le cose vanno e vengono come le onde. Bisogna accettare i cambiamenti della vita.",
    category: 'mare',
  },
  {
    salentino: "Quandu lu mare è chinu, tuttu pare bbellu",
    italian: "Quando il mare è calmo, tutto sembra bello",
    explanation: "Nelle situazioni tranquille, tutto appare più facile e piacevole. Ma è nei momenti difficili che si vede il vero carattere.",
    category: 'mare',
  },
  {
    salentino: "Rispetta lu mare ca te campa",
    italian: "Rispetta il mare che ti fa campare",
    explanation: "Bisogna rispettare ciò che ci dà sostentamento. Il mare è vita per il Salento e va onorato.",
    category: 'mare',
  },

  // --- PROVERBI DAL FILE XLSX (CSV) ---
  {
    salentino: "Ci uei l'amicizia cu mantègna nù panaru cu bbae e unu cu bbegna",
    italian: "Se vuoi che l'amicizia si mantenga, un paniere deve andare e uno venire",
    explanation: "Per mantenere l’amicizia bisogna scambiarsi favori: dare e ricevere.",
    category: 'vita',
  },
  {
    salentino: "La malerba crisce sempre",
    italian: "L'erba cattiva cresce sempre",
    explanation: "Il male prolifera facilmente, come l’erba cattiva che cresce ovunque.",
    category: 'vita',
  },
  {
    salentino: "Ci vuè canusci li pene ti l'infiernu, a fare tre misi e mienzu ti trappitu",
    italian: "Se vuoi conoscere le pene dell'inferno, lavora tre mesi e mezzo nel frantoio",
    explanation: "Lavorare nel frantoio è così duro che viene paragonato all'inferno stesso.",
    category: 'lavoro',
  },
  {
    salentino: "Lu scopu te la guerra ete la pace, Cussì futte lu munnu ci la face",
    italian: "Lo scopo della guerra è la pace, così chi la fa inganna il mondo",
    explanation: "Chi fa la guerra dice di voler la pace, ma in realtà trae vantaggio ingannando il mondo.",
    category: 'vita',
  },
  {
    salentino: "Mpara l'arte e mintila de parte",
    italian: "Impara l'arte e mettila da parte",
    explanation: "Impara un mestiere anche se non lo usi subito: potrà sempre servire.",
    category: 'lavoro',
  },
  {
    salentino: "Nu fare mai lu passu cchiù lengu de l'anca toa",
    italian: "Non fare mai il passo più lungo della tua gamba",
    explanation: "Non cercare di fare più di quanto tu possa permetterti.",
    category: 'vita',
  },
  {
    salentino: "Ci tene, e dàe, am Paraisu ae",
    italian: "Chi ha e dà, va in Paradiso",
    explanation: "Chi è generoso e dona agli altri, va in Paradiso.",
    category: 'vita',
  },
  {
    salentino: "Senza Santi, nu sse ae am Paraisu",
    italian: "Senza i Santi non si va in Paradiso",
    explanation: "Nessuno si salva da solo: serve aiuto, anche spirituale.",
    category: 'vita',
  },
  {
    salentino: "Lettu, fimmene e focu nù sse ccunttentanu mai de pocu",
    italian: "Letto, donne e fuoco non si accontentano mai di poco",
    explanation: "Alcune cose richiedono sempre molta attenzione e non si accontentano mai del minimo.",
    category: 'vita',
  },
  {
    salentino: "Amore, tosse e rugna, nù sse potenu scunnere",
    italian: "Amore, tosse e rogna non si possono nascondere",
    explanation: "Ci sono cose che, per quanto si tenti, non si possono nascondere.",
    category: 'vita',
  },
  {
    salentino: "Lu bbusciardu à ttenìre bbona memoria",
    italian: "Il bugiardo deve avere buona memoria",
    explanation: "Chi mente spesso deve ricordarsi bene le proprie bugie.",
    category: 'vita',
  },
  {
    salentino: "Lu nnamuratu se caunsce de l'ecchi, lu muertu de fame de lu ssegnuttu",
    italian: "L'innamorato si riconosce dagli occhi, il morto di fame dal singhiozzo",
    explanation: "Lo sguardo rivela l’innamorato; il singhiozzo rivela la fame.",
    category: 'vita',
  },
  {
    salentino: "A stu mundu nu nde ai nienti se nu llu tiri cu lli tienti",
    italian: "In questo mondo non hai nulla se non lo stringi con i denti",
    explanation: "Nella vita, nulla viene regalato: bisogna lottare per ottenerlo.",
    category: 'vita',
  },
  {
    salentino: "Ognetunu à fare l'arte soa",
    italian: "Ognuno deve fare il proprio mestiere",
    explanation: "Ognuno deve occuparsi del proprio mestiere e non improvvisarsi.",
    category: 'lavoro',
  },
  {
    salentino: "Ci time le spine nù pòte amare le rose",
    italian: "Chi teme le spine non può amare le rose",
    explanation: "Non si possono ottenere cose belle senza accettarne anche i rischi.",
    category: 'vita',
  },
  {
    salentino: "Quannu lu diàulu te ncarizza l'anima nne ole",
    italian: "Quando il diavolo ti accarezza, vuole l'anima",
    explanation: "Quando qualcuno troppo losco è gentile con te, ha un secondo fine.",
    category: 'vita',
  },
  {
    salentino: "Nù tte mpicciare, nù tte ntricàre, nù fare bene ca trovi male",
    italian: "Non impicciarti, non intrigarti, non fare del bene che trovi del male",
    explanation: "A volte, anche facendo del bene, si finisce per ricevere del male.",
    category: 'vita',
  },
  {
    salentino: "Ci time l'amore, time la vita",
    italian: "Chi teme l'amore, teme la vita",
    explanation: "L’amore è parte essenziale della vita: chi lo teme, teme di vivere davvero.",
    category: 'vita',
  },
  {
    salentino: "Lu tirchiu è comu lu puercu; è buenu dopu muertu",
    italian: "L'avaro è come il maiale; è buono dopo morto",
    explanation: "L’avaro è utile solo dopo la morte, come il maiale.",
    category: 'vita',
  },
  {
    salentino: "Ci cangia ddefrisca",
    italian: "Chi cambia si rinfresca",
    explanation: "Cambiare fa bene; chi cambia si rinnova.",
    category: 'vita',
  },
  {
    salentino: "Lu pane cchiù è sudatu e cchiù bbinchia",
    italian: "Il pane più è sudato e più sazia",
    explanation: "Il pane guadagnato con fatica è quello che sazia di più.",
    category: 'lavoro',
  },
  {
    salentino: "Addù servenu li fatti nù bastanu le parole",
    italian: "Dove servono i fatti non bastano le parole",
    explanation: "Le parole non bastano quando servono azioni concrete.",
    category: 'vita',
  },
  {
    salentino: "La tramuntana dura 3 giurni: nasce pasce e more",
    italian: "La tramontana dura tre giorni: nasce, soffia e muore",
    explanation: "Ciclo tipico della tramontana nel Salento.",
    category: 'meteo',
  },
  {
    salentino: "Punente la Tramuntana si sente",
    italian: "Quando soffia il ponente, la tramontana si sente",
    explanation: "Quando soffia vento di ponente, probabilmente a seguire soffierà tramontana.",
    category: 'meteo',
  },
  {
    salentino: "Celu russu: o acqua, o troni, o frusciu",
    italian: "Cielo rosso: o pioggia, o tuoni, o vento",
    explanation: "Il cielo rosso preannuncia pioggia, tuoni o vento forte.",
    category: 'meteo',
  },
  {
    salentino: "Luna janca, chiove; luna russa, jentu; luna chiara, sirenu",
    italian: "Luna bianca, piove; luna rossa, vento; luna chiara, sereno",
    explanation: "Previsioni basate sul colore della luna.",
    category: 'meteo',
  },
  {
    salentino: "Acqua d’acustu, su bboni: oju, mele e mmustu",
    italian: "Se piove in agosto sono buoni olio, miele e mosto",
    explanation: "La pioggia di agosto è benefica per i raccolti autunnali.",
    category: 'meteo',
  },
  {
    salentino: "Se lu sciroccu rite fessa ci lu crite",
    italian: "Se lo scirocco ride, sciocco chi gli crede",
    explanation: "Non fidarti di un apparente miglioramento del tempo se c'è lo scirocco.",
    category: 'meteo',
  },
  {
    salentino: "Quannu gnorica ascianu fuci fuci allu pajaru",
    italian: "Quando si rannuvola a Uggiano, corri al riparo dei fichi",
    explanation: "Se il tempo si rannuvola a Uggiano, meglio affrettarsi a mettere al riparo i fichi secchi.",
    category: 'meteo',
  },
  {
    salentino: "De Santu Pati, o chiuviti o nivacati, tiempi boni nu ne spattati",
    italian: "A San Ippazio, o piove o nevica, tempi buoni non aspettartene",
    explanation: "Il 19 gennaio di solito il tempo è brutto: pioggia o neve.",
    category: 'meteo',
  },
  {
    salentino: "Diu cu ne guarda te Tramuntana chiuvire e te sciroccu nivicare",
    italian: "Dio ci guardi dalla tramontana che piove e dallo scirocco che nevica",
    explanation: "Condizioni meteorologiche rare e particolarmente fastidiose.",
    category: 'meteo',
  },
  {
    salentino: "Muntagne chiare, sciroccu a mare",
    italian: "Montagne chiare, scirocco in mare",
    explanation: "Quando le montagne si vedono chiaramente, significa che soffia lo scirocco verso il mare.",
    category: 'meteo',
  },
  {
    salentino: "Ci scinnaru no scinnarescia, febbraiu la malapensa",
    italian: "Se gennaio non fa il suo dovere (freddo), febbraio ci pensa male",
    explanation: "Se gennaio non è freddo, il maltempo arriverà peggiore a febbraio.",
    category: 'meteo',
  },
  {
    salentino: "Nurva de ponente, no se leva pe niente",
    italian: "Nuvola di ponente non si toglie per niente",
    explanation: "Le nuvole che vengono da ovest tendono a stazionare a lungo.",
    category: 'meteo',
  },
  {
    salentino: "Néja vàscia, bonu tiempu spera",
    italian: "Nebbia bassa, spera nel buon tempo",
    explanation: "La nebbia bassa preannuncia spesso una giornata di sole.",
    category: 'meteo',
  },
  {
    salentino: "Se lu sule la nive ndòra, nivica nivica ancora",
    italian: "Se il sole indora la neve, nevica ancora",
    explanation: "Se esce il sole mentre c'è ancora neve a terra, è probabile che nevicherà di nuovo.",
    category: 'meteo',
  },
  {
    salentino: "Scinnaru senza nive, acqua e iénti alla primavera spèttate",
    italian: "Gennaio senza neve, aspettati acqua e venti in primavera",
    explanation: "L'assenza di freddo invernale si paga con una primavera instabile.",
    category: 'meteo',
  },
  {
    salentino: "Sai addù nasci e nù ssai addù mueri",
    italian: "Sai dove nasci e non sai dove muori",
    explanation: "La vita è imprevedibile: puoi sapere dove nasci ma non dove finirai i tuoi giorni.",
    category: 'vita',
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
