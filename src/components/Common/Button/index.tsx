import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<ButtonProps> = props => {
  const { onClick, className, ...buttonProps } = props;
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      {...buttonProps}>
      {props.children}
    </button>
  );
};

export default Button;
