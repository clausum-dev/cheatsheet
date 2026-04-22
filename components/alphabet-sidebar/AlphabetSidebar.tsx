import { PatternList } from '@/components/pattern-list/PatternList';
import { AlphabetEntry } from '@/types/alphabet';
import styles from '@/components/study-layout/StudyLayout.module.scss';

type AlphabetSidebarProps = {
  letters: AlphabetEntry[];
  selectedLetter: string;
  onSelect: (letter: string) => void;
};

export function AlphabetSidebar({
  letters,
  selectedLetter,
  onSelect,
}: AlphabetSidebarProps) {
  const items = letters.map((entry) => ({
    id: entry.letter,
    name: entry.letter,
  }));

  return (
    <div className={styles.sidebar}>
      <section className={`${styles.section} ${styles.patternSection}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>1. Alfabet</p>
          <p className={styles.sectionHint}>
            Kies een letter en luister direct naar voorbeeldwoorden.
          </p>
        </div>

        <p className={styles.patternHint}>Beschikbare letters.</p>

        <PatternList
          ariaLabel="Tsjechische letters"
          items={items}
          selectedItemId={selectedLetter}
          onSelect={onSelect}
        />
      </section>
    </div>
  );
}
