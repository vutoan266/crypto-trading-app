import React from 'react';
import { useQuery } from 'react-query';
import {
  getAllAssetIconsAPI,
  getAllAssetsAPI,
  getTradeAssetsAPI,
} from 'src/apis';
import HomeTable from './components/HomeTable';
import styles from './home.module.scss';

const HomePage: React.FC = () => {
  const { isLoading, error, data } = useQuery('assetList', getAllAssetsAPI);
  return (
    <div className={styles.home}>
      <HomeTable data={data?.data} />
    </div>
  );
};

export default HomePage;
