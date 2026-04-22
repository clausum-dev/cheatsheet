import { PatternButton } from '@/components/pattern-button/PatternButton';
import styles from './PatternList.module.scss';

export type PatternListItem = {
  id: string;
  name: string;
};

type PatternListProps = {
  ariaLabel: string;
  items: PatternListItem[];
  selectedItemId: string;
  title?: string;
  onSelect: (itemId: string) => void;
};

export function PatternList({
  ariaLabel,
  items,
  selectedItemId,
  title,
  onSelect,
}: PatternListProps) {
  return (
    <div className={styles.root} aria-label={ariaLabel}>
      {title ? (
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      ) : null}

      <div className={styles.list}>
        {items.map((item) => (
          <PatternButton
            key={item.id}
            id={item.id}
            label={item.name}
            selected={item.id === selectedItemId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
