export const CASE_ORDER = [
  'nominative',
  'genitive',
  'dative',
  'accusative',
  'vocative',
  'locative',
  'instrumental',
] as const;

export type DeclensionCaseKey = (typeof CASE_ORDER)[number];
export type MainCategory = 'masculine' | 'feminine' | 'neuter';
export type MasculineSubtype = 'animate' | 'inanimate';

export type DeclensionRow = {
  caseKey: DeclensionCaseKey;
  caseLabel: string;
  singular: string;
  plural: string;
};

export type DeclensionPattern = {
  id: string;
  name: string;
  category: MainCategory;
  subtype?: MasculineSubtype;
  exampleNoun: string;
  shortExplanation: string;
  table: DeclensionRow[];
};

export type CategoryOption = {
  value: MainCategory;
  label: string;
  description: string;
};

export type SubtypeOption = {
  value: MasculineSubtype;
  label: string;
  description: string;
};
