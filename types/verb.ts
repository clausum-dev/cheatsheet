export type VerbCategory = 'regular' | 'irregular';

export type ConjugationRow = {
  dutchPronoun: string;
  czechPronoun: string;
  form: string;
};

export type Verb = {
  id: string;
  infinitive: string;
  translationNl: string;
  category: VerbCategory;
  conjugation: ConjugationRow[];
};
