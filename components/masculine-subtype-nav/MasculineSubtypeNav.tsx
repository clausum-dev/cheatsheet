import { MasculineSubtype, SubtypeOption } from '@/types/declension';
import styles from './MasculineSubtypeNav.module.scss';

type MasculineSubtypeNavProps = {
  options: SubtypeOption[];
  currentSubtype: MasculineSubtype;
  onChange: (subtype: MasculineSubtype) => void;
};

export function MasculineSubtypeNav({
  options,
  currentSubtype,
  onChange,
}: MasculineSubtypeNavProps) {
  return (
    <div className={styles.root} aria-label="Navigatie voor mannelijke subgroepen">
      {options.map((option) => {
        const isActive = option.value === currentSubtype;
        const className = [styles.button, isActive ? styles.active : '']
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={option.value}
            type="button"
            className={className}
            aria-pressed={isActive}
            aria-label={`${option.label}. ${option.description}`}
            onClick={() => onChange(option.value)}
          >
            <strong>{option.label}</strong>
          </button>
        );
      })}
    </div>
  );
}
