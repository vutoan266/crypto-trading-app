import React from 'react';
import Dropdown, { DropdownOptionsType } from 'src/components/Common/Dropdown';
import styles from './assetNumberInput.module.scss';

interface AssetNumberInputProps {
  value: { value: number; asset: string };
  assetOptions: DropdownOptionsType[];
  onChange: (value: { value: number; asset: string }) => void;
  inputDisable?: boolean;
}

const AssetNumberInput = (props: AssetNumberInputProps) => {
  const { value, assetOptions, onChange, inputDisable } = props;

  return (
    <div className={styles.assetNumberInput}>
      <input
        type="number"
        value={value.value}
        onChange={e =>
          onChange({
            ...value,
            value: parseFloat(e.target.value),
          })
        }
        placeholder="0.0"
        disabled={inputDisable}
      />
      <Dropdown
        value={value.asset}
        options={assetOptions}
        onChange={(newAsset: string) => onChange({ ...value, asset: newAsset })}
        className={styles.assetDropdown}
      />
    </div>
  );
};

export default AssetNumberInput;
