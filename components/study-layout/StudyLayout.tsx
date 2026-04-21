'use client';

import { useState } from 'react';
import {
  MAIN_CATEGORY_OPTIONS,
  MASCULINE_SUBTYPE_OPTIONS,
  declensionPatterns,
} from '@/data/declensionPatterns';
import {
  getDefaultPatternId,
  getPatternsBySelection,
  getSelectionLabel,
} from '@/lib/declension';
import { MainCategory, MasculineSubtype } from '@/types/declension';
import { LayoutShell } from '@/components/layout-shell/LayoutShell';
import { MainCategoryNav } from '@/components/main-category-nav/MainCategoryNav';
import { MasculineSubtypeNav } from '@/components/masculine-subtype-nav/MasculineSubtypeNav';
import { PatternList } from '@/components/pattern-list/PatternList';
import { PatternDetails } from '@/components/pattern-details/PatternDetails';
import styles from './StudyLayout.module.scss';

const defaultCategory: MainCategory = 'masculine';
const defaultSubtype: MasculineSubtype = 'animate';
const defaultPatternId =
  getDefaultPatternId(declensionPatterns, defaultCategory, defaultSubtype) ??
  declensionPatterns[0].id;

export function StudyLayout() {
  const [category, setCategory] = useState<MainCategory>(defaultCategory);
  const [masculineSubtype, setMasculineSubtype] =
    useState<MasculineSubtype>(defaultSubtype);
  const [selectedPatternId, setSelectedPatternId] =
    useState<string>(defaultPatternId);

  const activeSubtype = category === 'masculine' ? masculineSubtype : undefined;
  const visiblePatterns = getPatternsBySelection(
    declensionPatterns,
    category,
    activeSubtype,
  );
  const selectedPattern =
    visiblePatterns.find((pattern) => pattern.id === selectedPatternId) ??
    visiblePatterns[0];
  const groupLabel = getSelectionLabel(category, activeSubtype);
  const patternStepLabel = category === 'masculine' ? '3. Patroon' : '2. Patroon';

  const handleCategoryChange = (nextCategory: MainCategory) => {
    if (nextCategory === category) {
      return;
    }

    const nextPatternId = getDefaultPatternId(
      declensionPatterns,
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

    const nextPatternId = getDefaultPatternId(
      declensionPatterns,
      'masculine',
      nextSubtype,
    );

    setMasculineSubtype(nextSubtype);

    if (nextPatternId) {
      setSelectedPatternId(nextPatternId);
    }
  };

  if (!selectedPattern) {
    return null;
  }

  return (
    <LayoutShell
      sidebar={
        <div className={styles.sidebar}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>1. Geslacht</p>
              <p className={styles.sectionHint}>Kies het geslacht.</p>
            </div>

            <MainCategoryNav
              options={MAIN_CATEGORY_OPTIONS}
              currentCategory={category}
              onChange={handleCategoryChange}
            />
          </section>

          {category === 'masculine' ? (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionLabel}>2. Subgroep</p>
                <p className={styles.sectionHint}>Alleen voor mannelijke woorden.</p>
              </div>

              <MasculineSubtypeNav
                options={MASCULINE_SUBTYPE_OPTIONS}
                currentSubtype={masculineSubtype}
                onChange={handleSubtypeChange}
              />
            </section>
          ) : null}

          <section className={`${styles.section} ${styles.patternSection}`}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>{patternStepLabel}</p>
              <p className={styles.sectionHint}>{groupLabel}</p>
            </div>

            <p className={styles.patternHint}>Kies een patroon.</p>

            <PatternList
              patterns={visiblePatterns}
              selectedPatternId={selectedPattern.id}
              onSelect={setSelectedPatternId}
            />
          </section>
        </div>
      }
    >
      <div className={styles.content}>
        <PatternDetails key={selectedPattern.id} pattern={selectedPattern} />
      </div>
    </LayoutShell>
  );
}
