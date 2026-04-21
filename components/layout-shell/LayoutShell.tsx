import { ReactNode } from 'react';
import styles from './LayoutShell.module.scss';

type LayoutShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export function LayoutShell({ sidebar, children }: LayoutShellProps) {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerCopy}>
            <p className={styles.kicker}>Tsjechische naamvallen</p>
            <h1 className={styles.title}>Cheatsheet</h1>
            <p className={styles.description}>
              Kies een patroon en bekijk direct alle vormen in enkelvoud en meervoud.
            </p>
          </div>
        </header>

        <div className={styles.body}>
          <aside className={styles.sidebar}>{sidebar}</aside>
          <main className={styles.content}>{children}</main>
        </div>
      </div>
    </div>
  );
}
