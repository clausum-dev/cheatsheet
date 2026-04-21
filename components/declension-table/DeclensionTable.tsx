import { DeclensionRow } from '@/types/declension';
import styles from './DeclensionTable.module.scss';

type DeclensionTableProps = {
  patternName: string;
  rows: DeclensionRow[];
};

export function DeclensionTable({ patternName, rows }: DeclensionTableProps) {
  return (
    <div className={styles.wrapper}>
      <table
        className={styles.table}
        aria-label={`Verbuigingstabel voor het patroon ${patternName}`}
      >
        <thead>
          <tr>
            <th scope="col">Naamval</th>
            <th scope="col">Enkelvoud</th>
            <th scope="col">Meervoud</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.caseKey}>
              <th scope="row" className={styles.rowHeader}>
                <span className={styles.caseLabel}>{row.caseLabel}</span>
              </th>
              <td className={styles.cell}>{row.singular}</td>
              <td className={styles.cell}>{row.plural}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
