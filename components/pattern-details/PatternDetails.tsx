import { DeclensionPattern } from '@/types/declension';
import { DeclensionTable } from '@/components/declension-table/DeclensionTable';
import styles from './PatternDetails.module.scss';

type PatternDetailsProps = {
  pattern: DeclensionPattern;
};

export function PatternDetails({ pattern }: PatternDetailsProps) {
  return (
    <section className={styles.panel} aria-labelledby="pattern-heading">
      <div className={styles.overview}>
        <div>
          <h2 id="pattern-heading" className={styles.title}>
            {pattern.name}
          </h2>
          <p className={styles.explanation}>{pattern.shortExplanation}</p>
        </div>
      </div>

      <div className={styles.tableBlock}>
        <div className={styles.tableHeader}>
          <div>
            <h3 className={styles.tableTitle}>Volledige verbuiging</h3>
          </div>
        </div>

        <DeclensionTable patternName={pattern.name} rows={pattern.table} />
      </div>
    </section>
  );
}
