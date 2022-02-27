import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';
interface ButtonProps {
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { onClick, className } = props;
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default Button;
