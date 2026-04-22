import { LetterWordList } from '@/components/letter-word-list/LetterWordList';
import { SpeakerButton } from '@/components/speaker-button/SpeakerButton';
import { AlphabetEntry } from '@/types/alphabet';
import styles from '@/components/pattern-details/PatternDetails.module.scss';

type AlphabetDetailProps = {
  entry: AlphabetEntry;
};

export function AlphabetDetail({ entry }: AlphabetDetailProps) {
  const description =
    entry.description ?? `Luister naar voorbeeldwoorden met de letter ${entry.letter}.`;

  return (
    <section className={styles.panel} aria-labelledby="alphabet-heading">
      <div className={styles.overview}>
        <div>
          <div className={styles.titleRow}>
            <h2
              id="alphabet-heading"
              className={`${styles.title} ${styles.inlineTitle}`}
            >
              {entry.letter}
            </h2>
            <SpeakerButton
              word={entry.letter}
              speechText={entry.letter.toLowerCase()}
              buttonLabel={`Spreek de letter ${entry.letter} uit`}
            />
          </div>
          <p className={styles.explanation}>{description}</p>
        </div>
      </div>

      <div className={styles.tableBlock}>
        <div className={styles.tableHeader}>
          <div>
            <h3 className={styles.tableTitle}>Voorbeeldwoorden</h3>
          </div>
        </div>

        <LetterWordList words={entry.words} />
      </div>
    </section>
  );
}
