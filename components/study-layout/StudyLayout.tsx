'use client';

import { useState } from 'react';
import { alphabetData } from '@/data/alphabet';
import { nounPatterns } from '@/data/declensionPatterns';
import { verbs } from '@/data/verbs';
import { getDefaultPatternId, getPatternsBySelection } from '@/lib/declension';
import { MainCategory, MasculineSubtype } from '@/types/declension';
import { CheatsheetMode } from '@/types/cheatsheet';
import { LayoutShell } from '@/components/layout-shell/LayoutShell';
import { CheatsheetModeTabs } from '@/components/cheatsheet-mode-tabs/CheatsheetModeTabs';
import { AlphabetSidebar } from '@/components/alphabet-sidebar/AlphabetSidebar';
import { NounSidebar } from '@/components/noun-sidebar/NounSidebar';
import { VerbSidebar } from '@/components/verb-sidebar/VerbSidebar';
import { AlphabetDetail } from '@/components/alphabet-detail/AlphabetDetail';
import { NounDetail } from '@/components/noun-detail/NounDetail';
import { VerbDetail } from '@/components/verb-detail/VerbDetail';
import styles from './StudyLayout.module.scss';

const defaultCategory: MainCategory = 'masculine';
const defaultSubtype: MasculineSubtype = 'animate';
const defaultPatternId =
  getDefaultPatternId(nounPatterns, defaultCategory, defaultSubtype) ?? nounPatterns[0].id;
const defaultMode: CheatsheetMode = 'nouns';
const defaultVerbId = verbs[0]?.id ?? '';
const defaultLetter = alphabetData[0]?.letter ?? '';

export function StudyLayout() {
  const [mode, setMode] = useState<CheatsheetMode>(defaultMode);
  const [category, setCategory] = useState<MainCategory>(defaultCategory);
  const [masculineSubtype, setMasculineSubtype] =
    useState<MasculineSubtype>(defaultSubtype);
  const [selectedPatternId, setSelectedPatternId] =
    useState<string>(defaultPatternId);
  const [selectedVerbId, setSelectedVerbId] = useState<string>(defaultVerbId);
  const [selectedLetter, setSelectedLetter] = useState<string>(defaultLetter);

  const activeSubtype = category === 'masculine' ? masculineSubtype : undefined;
  const visiblePatterns = getPatternsBySelection(
    nounPatterns,
    category,
    activeSubtype,
  );
  const selectedPattern =
    visiblePatterns.find((pattern) => pattern.id === selectedPatternId) ??
    visiblePatterns[0];
  const selectedVerb = verbs.find((verb) => verb.id === selectedVerbId) ?? verbs[0];
  const selectedAlphabetEntry =
    alphabetData.find((entry) => entry.letter === selectedLetter) ?? alphabetData[0];
  const modeDescription =
    mode === 'nouns'
      ? 'Kies een patroon en bekijk direct alle vormen in enkelvoud en meervoud.'
      : mode === 'verbs'
        ? 'Kies een werkwoord en bekijk direct de vormen in de tegenwoordige tijd.'
        : 'Kies een letter en luister direct naar voorbeeldwoorden met browseruitspraak.';

  const handleCategoryChange = (nextCategory: MainCategory) => {
    if (nextCategory === category) {
      return;
    }

    const nextPatternId = getDefaultPatternId(
      nounPatterns,
      nextCategory,
      nextCategory === 'masculine' ? masculineSubtype : undefined,
    );

    setCategory(nextCategory);

    if (nextPatternId) {
      setSelectedPatternId(nextPatternId);
    }
  };

  const handleSubtypeChange = (nextSubtype: MasculineSubtype) => {
    if (nextSubtype === masculineSubtype) {
      return;
    }

    const nextPatternId = getDefaultPatternId(nounPatterns, 'masculine', nextSubtype);

    setMasculineSubtype(nextSubtype);

    if (nextPatternId) {
      setSelectedPatternId(nextPatternId);
    }
  };

  if (!selectedPattern || !selectedVerb || !selectedAlphabetEntry) {
    return null;
  }

  const sidebarContent =
    mode === 'nouns' ? (
      <NounSidebar
        category={category}
        masculineSubtype={masculineSubtype}
        visiblePatterns={visiblePatterns}
        selectedPatternId={selectedPattern.id}
        onCategoryChange={handleCategoryChange}
        onSubtypeChange={handleSubtypeChange}
        onPatternSelect={setSelectedPatternId}
      />
    ) : mode === 'verbs' ? (
      <VerbSidebar
        verbs={verbs}
        selectedVerbId={selectedVerb.id}
        onSelect={setSelectedVerbId}
      />
    ) : (
      <AlphabetSidebar
        letters={alphabetData}
        selectedLetter={selectedAlphabetEntry.letter}
        onSelect={setSelectedLetter}
      />
    );
  const detailContent =
    mode === 'nouns' ? (
      <NounDetail key={selectedPattern.id} pattern={selectedPattern} />
    ) : mode === 'verbs' ? (
      <VerbDetail key={selectedVerb.id} verb={selectedVerb} />
    ) : (
      <AlphabetDetail
        key={selectedAlphabetEntry.letter}
        entry={selectedAlphabetEntry}
      />
    );

  return (
    <LayoutShell
      kicker="Tsjechische grammatica"
      description={modeDescription}
      modeTabs={<CheatsheetModeTabs currentMode={mode} onChange={setMode} />}
      sidebar={sidebarContent}
    >
      <div className={styles.content}>{detailContent}</div>
    </LayoutShell>
  );
}
