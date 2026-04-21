import { DeclensionPattern } from '@/types/declension';
import styles from './PatternButton.module.scss';

type PatternButtonProps = {
  pattern: DeclensionPattern;
  selected: boolean;
  onSelect: (patternId: string) => void;
};

export function PatternButton({
  pattern,
  selected,
  onSelect,
}: PatternButtonProps) {
  const className = [styles.button, selected ? styles.selected : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={className}
      aria-pressed={selected}
      onClick={() => onSelect(pattern.id)}
    >
      <span className={styles.name}>{pattern.name}</span>
    </button>
  );
}
