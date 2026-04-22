import { PatternList } from '@/components/pattern-list/PatternList';
import styles from '@/components/study-layout/StudyLayout.module.scss';
import { Verb } from '@/types/verb';

type VerbSidebarProps = {
  verbs: Verb[];
  selectedVerbId: string;
  onSelect: (verbId: string) => void;
};

export function VerbSidebar({
  verbs,
  selectedVerbId,
  onSelect,
}: VerbSidebarProps) {
  const items = verbs.map((verb) => ({
    id: verb.id,
    name: verb.infinitive,
  }));

  return (
    <div className={styles.sidebar}>
      <section className={`${styles.section} ${styles.patternSection}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>1. Werkwoord</p>
          <p className={styles.sectionHint}>
            Kies een werkwoord en bekijk direct de tegenwoordige tijd.
          </p>
        </div>

        <p className={styles.patternHint}>Beschikbare werkwoorden.</p>

        <PatternList
          ariaLabel="Werkwoordenlijst"
          items={items}
          selectedItemId={selectedVerbId}
          onSelect={onSelect}
        />
      </section>
    </div>
  );
}
