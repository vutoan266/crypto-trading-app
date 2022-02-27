import React from 'react';
import styles from './login.module.scss';
import Modal from 'react-modal';
import Input from 'src/components/Common/Input';
import { useForm } from 'react-hook-form';
import Button from 'src/components/Common/Button';
import useUserStore from 'src/stores/userStore';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormType {
  userName: string;
  password: string;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { isOpen, onClose } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>();

  const login = useUserStore(state => state.login);

  const onSubmit = (data: FormType) => {
    login(data.userName);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.login}
      contentLabel="Login">
      <div className={styles.loginForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.title}>Login</h3>
          <div className={styles.formItem}>
            <div>Username</div>
            <Input
              {...register('userName', { required: true })}
              placeholder="Username"
            />
          </div>
          <div className={styles.formItem}>
            <div>Password</div>
            <Input
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
            />
          </div>
          {(errors.userName || errors.password) && (
            <span className={styles.errorMessage}>This fields is required</span>
          )}
          <Button type="submit" className={styles.loginBtn}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
