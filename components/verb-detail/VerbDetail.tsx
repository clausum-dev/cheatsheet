import { VERB_CATEGORY_LABELS } from '@/data/verbs';
import { ConjugationTable } from '@/components/conjugation-table/ConjugationTable';
import { Verb } from '@/types/verb';
import styles from '@/components/pattern-details/PatternDetails.module.scss';

type VerbDetailProps = {
  verb: Verb;
};

export function VerbDetail({ verb }: VerbDetailProps) {
  return (
    <section className={styles.panel} aria-labelledby="verb-heading">
      <div className={styles.overview}>
        <div>
          <h2 id="verb-heading" className={styles.title}>
            {verb.infinitive}
          </h2>
          <p className={styles.explanation}>
            {VERB_CATEGORY_LABELS[verb.category]} werkwoord. Betekent in het
            Nederlands: {verb.translationNl}.
          </p>
        </div>
      </div>

      <div className={styles.tableBlock}>
        <div className={styles.tableHeader}>
          <div>
            <h3 className={styles.tableTitle}>Tegenwoordige tijd</h3>
          </div>
        </div>

        <ConjugationTable infinitive={verb.infinitive} rows={verb.conjugation} />
      </div>
    </section>
  );
}
