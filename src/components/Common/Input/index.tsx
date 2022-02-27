import classNames from 'classnames';
import React, { forwardRef } from 'react';
import styles from './input.module.scss';

interface DropdownProps extends React.HTMLProps<HTMLInputElement> {
  value?: string;
}

const Input = forwardRef(
  (props: DropdownProps, ref: React.Ref<HTMLInputElement>) => {
    const { value, onChange, className, ...selectProps } = props;
    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        className={classNames(styles.input, className)}
        {...selectProps}
      />
    );
  },
);

export default Input;
