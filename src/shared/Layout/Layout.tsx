import React, {ReactNode} from 'react';
import styles from './layout.module.css';

interface ILayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
