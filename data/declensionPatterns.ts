import {
  CategoryOption,
  DeclensionCaseKey,
  DeclensionPattern,
  DeclensionRow,
  MainCategory,
  MasculineSubtype,
  SubtypeOption,
} from '@/types/declension';

const CASE_LABELS: Record<DeclensionCaseKey, string> = {
  nominative: 'Nominatief (1.)',
  genitive: 'Genitief (2.)',
  dative: 'Datief (3.)',
  accusative: 'Accusatief (4.)',
  vocative: 'Vocatief (5.)',
  locative: 'Locatief (6.)',
  instrumental: 'Instrumentaal (7.)',
};

const row = (
  caseKey: DeclensionCaseKey,
  singular: string,
  plural: string,
): DeclensionRow => ({
  caseKey,
  caseLabel: CASE_LABELS[caseKey],
  singular,
  plural,
});

export const CATEGORY_LABELS: Record<MainCategory, string> = {
  masculine: 'Mannelijk',
  feminine: 'Vrouwelijk',
  neuter: 'Onzijdig',
};

export const SUBTYPE_LABELS: Record<MasculineSubtype, string> = {
  animate: 'Bezield',
  inanimate: 'Onbezield',
};

export const MAIN_CATEGORY_OPTIONS: CategoryOption[] = [
  {
    value: 'masculine',
    label: 'Mannelijk',
    description: 'Patronen voor personen, objecten en plaatsen.',
  },
  {
    value: 'feminine',
    label: 'Vrouwelijk',
    description: 'De belangrijkste vrouwelijke verbuigingspatronen.',
  },
  {
    value: 'neuter',
    label: 'Onzijdig',
    description: 'Onzijdige uitgangen en bijzondere stamvormen.',
  },
];

export const MASCULINE_SUBTYPE_OPTIONS: SubtypeOption[] = [
  {
    value: 'animate',
    label: 'Bezield',
    description: 'Voor personen, dieren en andere levende wezens.',
  },
  {
    value: 'inanimate',
    label: 'Onbezield',
    description: 'Voor dingen, werktuigen, plaatsen en abstracta.',
  },
];

export const declensionPatterns: DeclensionPattern[] = [
  {
    id: 'pán',
    name: 'pán',
    category: 'masculine',
    subtype: 'animate',
    exampleNoun: 'pán',
    shortExplanation:
      'Harde mannelijke bezielde woorden, vaak gebruikt voor personen, titels en sociale rollen.',
    table: [
      row('nominative', 'pán', 'páni / pánové'),
      row('genitive', 'pána', 'pánů'),
      row('dative', 'pánovi / pánu', 'pánům'),
      row('accusative', 'pána', 'pány'),
      row('vocative', 'páne', 'páni / pánové'),
      row('locative', 'pánovi / pánu', 'pánech'),
      row('instrumental', 'pánem', 'pány'),
    ],
  },
  {
    id: 'muž',
    name: 'muž',
    category: 'masculine',
    subtype: 'animate',
    exampleNoun: 'muž',
    shortExplanation:
      'Zachte mannelijke bezielde woorden op een medeklinker, vaak met zachte meervoudsvormen.',
    table: [
      row('nominative', 'muž', 'muži'),
      row('genitive', 'muže', 'mužů'),
      row('dative', 'muži', 'mužům'),
      row('accusative', 'muže', 'muže'),
      row('vocative', 'muži', 'muži'),
      row('locative', 'muži', 'mužích'),
      row('instrumental', 'mužem', 'muži'),
    ],
  },
  {
    id: 'předseda',
    name: 'předseda',
    category: 'masculine',
    subtype: 'animate',
    exampleNoun: 'předseda',
    shortExplanation:
      'Mannelijke bezielde woorden op -a met mannelijke betekenis maar vrouwelijke uitgangen.',
    table: [
      row('nominative', 'předseda', 'předsedové'),
      row('genitive', 'předsedy', 'předsedů'),
      row('dative', 'předsedovi', 'předsedům'),
      row('accusative', 'předsedu', 'předsedy'),
      row('vocative', 'předsedo', 'předsedové'),
      row('locative', 'předsedovi', 'předsedech'),
      row('instrumental', 'předsedou', 'předsedy'),
    ],
  },
  {
    id: 'soudce',
    name: 'soudce',
    category: 'masculine',
    subtype: 'animate',
    exampleNoun: 'soudce',
    shortExplanation:
      'Mannelijke bezielde woorden op -ce of -e met zachte uitgangen en meerdere enkelvoudsvarianten.',
    table: [
      row('nominative', 'soudce', 'soudci / soudcové'),
      row('genitive', 'soudce', 'soudců'),
      row('dative', 'soudci / soudcovi', 'soudcům'),
      row('accusative', 'soudce', 'soudce'),
      row('vocative', 'soudce', 'soudci / soudcové'),
      row('locative', 'soudci / soudcovi', 'soudcích'),
      row('instrumental', 'soudcem', 'soudci'),
    ],
  },
  {
    id: 'hrdina',
    name: 'hrdina',
    category: 'masculine',
    subtype: 'animate',
    exampleNoun: 'hrdina',
    shortExplanation:
      'Mannelijke bezielde woorden op -a of -ina, vaak voor personen en karaktertypen.',
    table: [
      row('nominative', 'hrdina', 'hrdinové'),
      row('genitive', 'hrdiny', 'hrdinů'),
      row('dative', 'hrdinovi', 'hrdinům'),
      row('accusative', 'hrdinu', 'hrdiny'),
      row('vocative', 'hrdino', 'hrdinové'),
      row('locative', 'hrdinovi', 'hrdinech'),
      row('instrumental', 'hrdinou', 'hrdiny'),
    ],
  },
  {
    id: 'hrad',
    name: 'hrad',
    category: 'masculine',
    subtype: 'inanimate',
    exampleNoun: 'hrad',
    shortExplanation:
      'Harde mannelijke onbezielde woorden, een veelvoorkomend basispatroon voor concrete dingen.',
    table: [
      row('nominative', 'hrad', 'hrady'),
      row('genitive', 'hradu', 'hradů'),
      row('dative', 'hradu', 'hradům'),
      row('accusative', 'hrad', 'hrady'),
      row('vocative', 'hrade', 'hrady'),
      row('locative', 'hradě / hradu', 'hradech'),
      row('instrumental', 'hradem', 'hrady'),
    ],
  },
  {
    id: 'stroj',
    name: 'stroj',
    category: 'masculine',
    subtype: 'inanimate',
    exampleNoun: 'stroj',
    shortExplanation:
      'Zachte mannelijke onbezielde woorden op een zachte medeklinker of op -j.',
    table: [
      row('nominative', 'stroj', 'stroje'),
      row('genitive', 'stroje', 'strojů'),
      row('dative', 'stroji', 'strojům'),
      row('accusative', 'stroj', 'stroje'),
      row('vocative', 'stroji', 'stroje'),
      row('locative', 'stroji', 'strojích'),
      row('instrumental', 'strojem', 'stroji'),
    ],
  },
  {
    id: 'žena',
    name: 'žena',
    category: 'feminine',
    exampleNoun: 'žena',
    shortExplanation: 'Harde vrouwelijke woorden op -a, een van de meest voorkomende patronen.',
    table: [
      row('nominative', 'žena', 'ženy'),
      row('genitive', 'ženy', 'žen'),
      row('dative', 'ženě', 'ženám'),
      row('accusative', 'ženu', 'ženy'),
      row('vocative', 'ženo', 'ženy'),
      row('locative', 'ženě', 'ženách'),
      row('instrumental', 'ženou', 'ženami'),
    ],
  },
  {
    id: 'růže',
    name: 'růže',
    category: 'feminine',
    exampleNoun: 'růže',
    shortExplanation:
      'Zachte vrouwelijke woorden op -e of -ě, met langere -í-vormen in meerdere meervoudsnaamvallen.',
    table: [
      row('nominative', 'růže', 'růže'),
      row('genitive', 'růže', 'růží'),
      row('dative', 'růži', 'růžím'),
      row('accusative', 'růži', 'růže'),
      row('vocative', 'růže', 'růže'),
      row('locative', 'růži', 'růžích'),
      row('instrumental', 'růží', 'růžemi'),
    ],
  },
  {
    id: 'píseň',
    name: 'píseň',
    category: 'feminine',
    exampleNoun: 'píseň',
    shortExplanation:
      'Vrouwelijke woorden op een zachte medeklinker, vaak met een stamwisseling in het enkelvoud.',
    table: [
      row('nominative', 'píseň', 'písně'),
      row('genitive', 'písně', 'písní'),
      row('dative', 'písni', 'písním'),
      row('accusative', 'píseň', 'písně'),
      row('vocative', 'písni', 'písně'),
      row('locative', 'písni', 'písních'),
      row('instrumental', 'písní', 'písněmi'),
    ],
  },
  {
    id: 'kost',
    name: 'kost',
    category: 'feminine',
    exampleNoun: 'kost',
    shortExplanation:
      'Vrouwelijke woorden op een harde medeklinker, met korte -i-vormen in het enkelvoud en -em in de datief meervoud.',
    table: [
      row('nominative', 'kost', 'kosti'),
      row('genitive', 'kosti', 'kostí'),
      row('dative', 'kosti', 'kostem'),
      row('accusative', 'kost', 'kosti'),
      row('vocative', 'kosti', 'kosti'),
      row('locative', 'kosti', 'kostech'),
      row('instrumental', 'kostí', 'kostmi'),
    ],
  },
  {
    id: 'město',
    name: 'město',
    category: 'neuter',
    exampleNoun: 'město',
    shortExplanation: 'Harde onzijdige woorden op -o.',
    table: [
      row('nominative', 'město', 'města'),
      row('genitive', 'města', 'měst'),
      row('dative', 'městu', 'městům'),
      row('accusative', 'město', 'města'),
      row('vocative', 'město', 'města'),
      row('locative', 'městě', 'městech'),
      row('instrumental', 'městem', 'městy'),
    ],
  },
  {
    id: 'moře',
    name: 'moře',
    category: 'neuter',
    exampleNoun: 'moře',
    shortExplanation:
      'Zachte onzijdige woorden op -e, meestal met -i in datief, locatief en instrumentaal meervoud.',
    table: [
      row('nominative', 'moře', 'moře'),
      row('genitive', 'moře', 'moří'),
      row('dative', 'moři', 'mořím'),
      row('accusative', 'moře', 'moře'),
      row('vocative', 'moře', 'moře'),
      row('locative', 'moři', 'mořích'),
      row('instrumental', 'mořem', 'moři'),
    ],
  },
  {
    id: 'kuře',
    name: 'kuře',
    category: 'neuter',
    exampleNoun: 'kuře',
    shortExplanation:
      'Onzijdige woorden op -e met een uitgebreide stam op -et- in de verbogen enkelvoudsvormen.',
    table: [
      row('nominative', 'kuře', 'kuřata'),
      row('genitive', 'kuřete', 'kuřat'),
      row('dative', 'kuřeti', 'kuřatům'),
      row('accusative', 'kuře', 'kuřata'),
      row('vocative', 'kuře', 'kuřata'),
      row('locative', 'kuřeti', 'kuřatech'),
      row('instrumental', 'kuřetem', 'kuřaty'),
    ],
  },
  {
    id: 'stavení',
    name: 'stavení',
    category: 'neuter',
    exampleNoun: 'stavení',
    shortExplanation:
      'Onzijdige verbale zelfstandige naamwoorden op -í, met grotendeels gelijke nominatief- en accusatiefvormen.',
    table: [
      row('nominative', 'stavení', 'stavení'),
      row('genitive', 'stavení', 'stavení'),
      row('dative', 'stavení', 'stavením'),
      row('accusative', 'stavení', 'stavení'),
      row('vocative', 'stavení', 'stavení'),
      row('locative', 'stavení', 'staveních'),
      row('instrumental', 'stavením', 'staveními'),
    ],
  },
];
