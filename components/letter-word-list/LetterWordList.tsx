import { SpeakerButton } from '@/components/speaker-button/SpeakerButton';
import styles from './LetterWordList.module.scss';

type LetterWordListProps = {
  words: string[];
};

export function LetterWordList({ words }: LetterWordListProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list} aria-label="Voorbeeldwoorden">
        {words.map((word) => (
          <li key={word} className={styles.row}>
            <span className={styles.word}>{word}</span>
            <SpeakerButton word={word} />
          </li>
        ))}
      </ul>
    </div>
  );
}
