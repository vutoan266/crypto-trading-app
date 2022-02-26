import React from 'react';
import HomeTable from './components/HomeTable';
import styles from './home.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <HomeTable />
    </div>
  );
};

export default HomePage;
