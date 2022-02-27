import React from 'react';
import styles from './dropdown.module.scss';

export interface DropdownOptionsType {
  label: string | React.ReactNode;
  value: string;
}

interface DropdownProps {
  value: string;
  options: DropdownOptionsType[];
  onChange: (value: string) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { value, options, onChange } = props;
  return (
    <div className={styles.dropdown}>
      <select
        name="cars"
        id="cars"
        value={value}
        onChange={e => onChange(e.target.value)}>
        {options?.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
