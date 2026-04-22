import styles from './PatternButton.module.scss';

type PatternButtonProps = {
  id: string;
  label: string;
  selected: boolean;
  onSelect: (itemId: string) => void;
};

export function PatternButton({ id, label, selected, onSelect }: PatternButtonProps) {
  const className = [styles.button, selected ? styles.selected : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={className}
      aria-pressed={selected}
      aria-label={label}
      onClick={() => onSelect(id)}
    >
      <span className={styles.name}>{label}</span>
    </button>
  );
}
