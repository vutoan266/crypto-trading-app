import React from 'react';
import styles from './header.module.scss';
import { HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi';

const User: React.FC = () => {
  const isLoggedIn = true;
  return (
    <div className={styles.user}>
      {isLoggedIn ? (
        <>
          <span>
            Hello <b>User</b>
          </span>
          &nbsp;
          <HiOutlineLogout className={styles.logoutIcon} />
        </>
      ) : (
        <HiOutlineLogin className={styles.loginIcon} />
      )}
    </div>
  );
};

export default User;
