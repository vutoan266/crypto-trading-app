import React from 'react';
import { useQuery } from 'react-query';
import { getAllAssetsAPI } from 'src/apis';
import HomeTable from './components/HomeTable';
import styles from './home.module.scss';

const HomePage: React.FC = () => {
  const { isLoading, error, data } = useQuery('assetList', getAllAssetsAPI);
  return (
    <div className={styles.home}>
      <HomeTable data={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
