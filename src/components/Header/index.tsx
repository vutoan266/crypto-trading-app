import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE } from 'src/constants';
import styles from './header.module.scss';
import User from './User';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>CryptoTrade</div>
      <ul className={styles.nav}>
        <NavLink exact to={ROUTE.HOME_PAGE} activeClassName={styles.active}>
          <li className={styles.navItem}>Home</li>
        </NavLink>
        <NavLink exact to={ROUTE.TRADE_PAGE} activeClassName={styles.active}>
          <li className={styles.navItem}>Trade</li>
        </NavLink>
      </ul>
      <User />
    </div>
  );
};

export default Header;
