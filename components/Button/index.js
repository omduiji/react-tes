import React from 'react';
import styles from './styles.module.scss';

const Button = ({ children, handleClick }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
);

export default Button;
