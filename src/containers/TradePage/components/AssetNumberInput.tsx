import React from 'react';
import Dropdown, { DropdownOptionsType } from 'src/components/Common/Dropdown';
import styles from './assetNumberInput.module.scss';

interface AssetNumberInputProps {
  value: { value: number; asset: string };
  assetOptions: DropdownOptionsType[];
  onChange: (value: { value: number; asset: string }) => void;
}

const AssetNumberInput = (props: AssetNumberInputProps) => {
  const { value, assetOptions, onChange } = props;

  return (
    <div className={styles.assetNumberInput}>
      <input
        type="number"
        value={value.value}
        onChange={e =>
          onChange({
            ...value,
            value: parseFloat(e.target.value) || 0,
          })
        }
        placeholder="0.0"
      />
      <Dropdown
        value={value.asset}
        options={assetOptions}
        onChange={(newAsset: string) => onChange({ ...value, asset: newAsset })}
      />
    </div>
  );
};

export default AssetNumberInput;
