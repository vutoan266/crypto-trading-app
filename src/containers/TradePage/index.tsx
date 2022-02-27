import React from 'react';
import Button from 'src/components/Common/Button';
import AssetNumberInput from './components/AssetNumberInput';
import styles from './trade.module.scss';
import { MdSwapVert } from 'react-icons/md';

const TradePage: React.FC = () => {
  return (
    <div className={styles.trade}>
      <div className={styles.tradeInputWrapper}>
        <AssetNumberInput
          value={{ value: 123, asset: 'hihi' }}
          assetOptions={[{ label: 'hjihi', value: 'hihi' }]}
          onChange={() => null}
        />
        <AssetNumberInput
          value={{ value: 123, asset: 'hihi' }}
          assetOptions={[{ label: 'hjihi', value: 'hihi' }]}
          onChange={() => null}
        />
        <div className={styles.swapBtn}>
          <MdSwapVert />
        </div>
      </div>
      <Button onClick={() => null}>Trade</Button>
    </div>
  );
};

export default TradePage;
