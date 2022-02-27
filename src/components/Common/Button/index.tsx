import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default Button;
