import React, { ReactNode, FC } from 'react';
import styles from './styles.module.css';

const Container: FC<ReactNode> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
