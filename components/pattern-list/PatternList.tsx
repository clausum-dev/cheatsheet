import { DeclensionPattern } from '@/types/declension';
import { PatternButton } from '@/components/pattern-button/PatternButton';
import styles from './PatternList.module.scss';

type PatternListProps = {
  patterns: DeclensionPattern[];
  selectedPatternId: string;
  onSelect: (patternId: string) => void;
};

export function PatternList({
  patterns,
  selectedPatternId,
  onSelect,
}: PatternListProps) {
  return (
    <section className={styles.root} aria-label="Verbuigingspatronen">
      <div className={styles.header}>
        <h2 className={styles.title}>Patronen</h2>
      </div>

      <div className={styles.list}>
        {patterns.map((pattern) => (
          <PatternButton
            key={pattern.id}
            pattern={pattern}
            selected={pattern.id === selectedPatternId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
