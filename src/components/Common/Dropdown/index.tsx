import React from 'react';
import styles from './dropdown.module.scss';

export interface DropdownOptionsType {
  label: string | React.ReactNode;
  value: string;
}

interface DropdownProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange'> {
  value: string;
  options: DropdownOptionsType[];
  onChange: (value: string) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { value, options, onChange, placeholder, ...selectProps } = props;
  return (
    <div className={styles.dropdown}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        {...selectProps}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options?.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
