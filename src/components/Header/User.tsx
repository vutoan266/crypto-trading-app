import React, { useState } from 'react';
import styles from './header.module.scss';
import { HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi';
import Login from 'src/containers/Login';
import useUserStore from 'src/stores/userStore';

const User: React.FC = () => {
  const { user, logout, isLoginOpen, setIsLoginOpen } = useUserStore();

  const renderLoginLayout = () => {
    return (
      <>
        <span>Login</span>
        &nbsp;
        <HiOutlineLogin
          className={styles.loginIcon}
          onClick={() => setIsLoginOpen(true)}
        />
        <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </>
    );
  };

  const renderUserLayout = () => {
    return (
      <>
        <span>
          Hello <b>{user?.userName}</b>
        </span>
        &nbsp;
        <HiOutlineLogout
          className={styles.logoutIcon}
          onClick={() => logout()}
        />
      </>
    );
  };
  return (
    <div className={styles.user}>
      {user ? renderUserLayout() : renderLoginLayout()}
    </div>
  );
};

export default User;
