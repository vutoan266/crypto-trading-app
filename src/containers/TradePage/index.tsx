import React, { useEffect, useMemo, useState } from 'react';
import Button from 'src/components/Common/Button';
import AssetNumberInput from './components/AssetNumberInput';
import styles from './trade.module.scss';
import { MdSwapVert } from 'react-icons/md';
import { useQuery } from 'react-query';
import { getTradeAssetsAPI, getTradeRateAPI } from 'src/apis';
import classNames from 'classnames';
import useUserStore from 'src/stores/userStore';

const FIAT_TYPE = 'USD';

const TradePage: React.FC = () => {
  const [isAssetFirst, setIsAssetFirst] = useState(true);
  const [assetAmount, setAssetAmount] = useState(0);
  const [assetType, setAssetType] = useState('');
  const [fiatAmount, setFiatAmount] = useState(0);
  const { data: assetList } = useQuery('tradeList', getTradeAssetsAPI);
  const { user, setIsLoginOpen } = useUserStore();

  const assetOptions = useMemo(() => {
    if (!assetList) return [];
    if (!assetType) setAssetType('BTC');
    return assetList
      .filter(item => item.type_is_crypto === 1)
      .map(item => ({ label: item.name, value: item.name }));
  }, [assetList]);

  useEffect(() => {
    // when Asset on Top
    if (assetAmount && isAssetFirst) {
      getTradeRateAPI({
        base: assetType,
        quote: FIAT_TYPE,
      }).then(res => {
        const { rate } = res;
        setFiatAmount(assetAmount * rate);
      });
    }
  }, [assetAmount, assetType, isAssetFirst]);

  useEffect(() => {
    // when Fiat on Top
    if (fiatAmount && !isAssetFirst) {
      getTradeRateAPI({
        base: FIAT_TYPE,
        quote: assetType,
      }).then(res => {
        const { rate } = res;
        setAssetAmount(fiatAmount * rate);
      });
    }
  }, [fiatAmount, isAssetFirst]);

  // can improve the input by use DEBOUNCE function to avoid call api too quickly
  return (
    <div className={styles.trade}>
      <fieldset
        disabled={!user}
        onClick={!user ? () => setIsLoginOpen(true) : undefined}>
        <div
          className={classNames(styles.tradeInputWrapper, {
            [styles.reverse]: !isAssetFirst,
          })}>
          <AssetNumberInput
            value={{ value: assetAmount, asset: assetType }}
            assetOptions={assetOptions}
            onChange={newValue => {
              setAssetAmount(newValue.value);
              setAssetType(newValue.asset);
            }}
            inputDisable={!isAssetFirst}
          />
          <AssetNumberInput
            value={{ value: fiatAmount, asset: FIAT_TYPE }}
            assetOptions={[{ label: FIAT_TYPE, value: FIAT_TYPE }]}
            onChange={newValue => setFiatAmount(newValue.value)}
            inputDisable={isAssetFirst}
          />
          <div
            className={styles.swapBtn}
            onClick={() => setIsAssetFirst(!isAssetFirst)}>
            <MdSwapVert />
          </div>
        </div>
        <Button className={styles.tradeBtn}>Trade</Button>
      </fieldset>
    </div>
  );
};

export default TradePage;
