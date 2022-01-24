import { css } from '@emotion/react';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fontNames } from '../../Configs/Fonts';
import Login from '../../Functions/Login';
import MainButton from '../FormButton/MainButton';
import FormInput from '../FormInput/FormInput';

const styles = {
  mainWraper: css`
    font-family: ${fontNames.roboto};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  formWraper: css`
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 3;
    width: 400px;
    margin-bottom: 100px;
  `,
  logo: css`
    max-width: 250px;
    margin: 50px auto;
  `,
};

interface Payload {
  [x: string]: string;
}

function LoginForm() {
  const [, setCookie] = useCookies(['x-access-token']);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = useMutation(async (data: Payload) => {
    await Login({ data, setCookie, navigate });
  });

  const useLoginMutation = (data: Payload) => {
    login.mutate(data);
  };

  return (
    <div css={styles.mainWraper}>
      <form css={styles.formWraper} onSubmit={handleSubmit(useLoginMutation)}>
        <img css={styles.logo} src="./Images/Logo.png" alt="logo" />
        <FormInput
          register={register}
          errors={errors}
          placeholder="Username"
          id="username"
          icon="./Images/UserLogo.svg"
        />
        <FormInput
          register={register}
          errors={errors}
          placeholder="Password"
          id="password"
          type="password"
          icon="./Images/PasswordLogo.svg"
        />
        <MainButton text="Login" type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
