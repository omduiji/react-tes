import React from 'react';
import styles from './styles.module.scss';

const Button = ({ children, handleClick }) => (
  <button type="button" onClick={handleClick} className={styles.button}>
    {children}
  </button>
);

export default Button;
