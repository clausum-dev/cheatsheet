import {
  MAIN_CATEGORY_OPTIONS,
  MASCULINE_SUBTYPE_OPTIONS,
} from '@/data/declensionPatterns';
import { getSelectionLabel } from '@/lib/declension';
import { DeclensionPattern, MainCategory, MasculineSubtype } from '@/types/declension';
import { MainCategoryNav } from '@/components/main-category-nav/MainCategoryNav';
import { MasculineSubtypeNav } from '@/components/masculine-subtype-nav/MasculineSubtypeNav';
import { PatternList } from '@/components/pattern-list/PatternList';
import styles from '@/components/study-layout/StudyLayout.module.scss';

type NounSidebarProps = {
  category: MainCategory;
  masculineSubtype: MasculineSubtype;
  visiblePatterns: DeclensionPattern[];
  selectedPatternId: string;
  onCategoryChange: (category: MainCategory) => void;
  onSubtypeChange: (subtype: MasculineSubtype) => void;
  onPatternSelect: (patternId: string) => void;
};

export function NounSidebar({
  category,
  masculineSubtype,
  visiblePatterns,
  selectedPatternId,
  onCategoryChange,
  onSubtypeChange,
  onPatternSelect,
}: NounSidebarProps) {
  const activeSubtype = category === 'masculine' ? masculineSubtype : undefined;
  const groupLabel = getSelectionLabel(category, activeSubtype);
  const patternStepLabel = category === 'masculine' ? '3. Patroon' : '2. Patroon';

  return (
    <div className={styles.sidebar}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>1. Geslacht</p>
          <p className={styles.sectionHint}>Kies het geslacht.</p>
        </div>

        <MainCategoryNav
          options={MAIN_CATEGORY_OPTIONS}
          currentCategory={category}
          onChange={onCategoryChange}
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
            onChange={onSubtypeChange}
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
          ariaLabel="Verbuigingspatronen"
          items={visiblePatterns}
          selectedItemId={selectedPatternId}
          onSelect={onPatternSelect}
        />
      </section>
    </div>
  );
}
