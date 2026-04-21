import { CategoryOption, MainCategory } from '@/types/declension';
import styles from './MainCategoryNav.module.scss';

type MainCategoryNavProps = {
  options: CategoryOption[];
  currentCategory: MainCategory;
  onChange: (category: MainCategory) => void;
};

export function MainCategoryNav({
  options,
  currentCategory,
  onChange,
}: MainCategoryNavProps) {
  return (
    <div className={styles.root} aria-label="Navigatie voor hoofdgroepen">
      {options.map((option) => {
        const isActive = option.value === currentCategory;
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
