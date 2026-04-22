import { ConjugationRow } from '@/types/verb';
import styles from '@/components/declension-table/DeclensionTable.module.scss';

type ConjugationTableProps = {
  infinitive: string;
  rows: ConjugationRow[];
};

export function ConjugationTable({
  infinitive,
  rows,
}: ConjugationTableProps) {
  return (
    <div className={styles.wrapper}>
      <table
        className={styles.table}
        aria-label={`Vervoegingstabel voor het werkwoord ${infinitive}`}
      >
        <thead>
          <tr>
            <th scope="col">Nederlands</th>
            <th scope="col">Tsjechisch</th>
            <th scope="col">Vorm</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.dutchPronoun}-${row.czechPronoun}`}>
              <th scope="row" className={styles.rowHeader}>
                <span className={styles.caseLabel}>{row.dutchPronoun}</span>
              </th>
              <td className={styles.cell}>{row.czechPronoun}</td>
              <td className={styles.cell}>{row.form}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
