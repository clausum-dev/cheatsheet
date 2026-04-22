import { ReactNode } from 'react';
import styles from './LayoutShell.module.scss';

type LayoutShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
  description: string;
  kicker?: string;
  modeTabs?: ReactNode;
};

export function LayoutShell({
  sidebar,
  children,
  description,
  kicker = 'Tsjechische grammatica',
  modeTabs,
}: LayoutShellProps) {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerCopy}>
            <p className={styles.kicker}>{kicker}</p>

            <div className={styles.heading}>
              <h1 className={styles.title}>
                <span>Learn Czech</span>
                <span className={styles.flag} aria-hidden="true" />
              </h1>
              {modeTabs ? <div className={styles.modeTabs}>{modeTabs}</div> : null}
            </div>

            <p className={styles.description}>{description}</p>
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
