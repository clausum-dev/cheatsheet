import { CheatsheetMode, CheatsheetModeOption } from '@/types/cheatsheet';
import styles from './CheatsheetModeTabs.module.scss';

const MODE_OPTIONS: CheatsheetModeOption[] = [
  {
    value: 'nouns',
    label: 'Naamwoorden',
    description: 'Verbuigingspatronen voor zelfstandige naamwoorden.',
  },
  {
    value: 'verbs',
    label: 'Werkwoorden',
    description: 'Tegenwoordige tijd van veelgebruikte werkwoorden.',
  },
  {
    value: 'alphabet',
    label: 'Alfabet',
    description: 'Tsjechische letters met voorbeeldwoorden en uitspraak.',
  },
];

type CheatsheetModeTabsProps = {
  currentMode: CheatsheetMode;
  onChange: (mode: CheatsheetMode) => void;
};

export function CheatsheetModeTabs({
  currentMode,
  onChange,
}: CheatsheetModeTabsProps) {
  return (
    <div className={styles.root} aria-label="Cheatsheet-modus">
      {MODE_OPTIONS.map((option) => {
        const isActive = option.value === currentMode;
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
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
