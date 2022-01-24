import { css } from '@emotion/react';
import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';

const styles = {
  mainWrap: css`
    z-index: 1;
    position: relative;
    background-image: url('./Images/Background.png');
    background-size: cover;
    height: 100vh;
  `,
  overlay: css`
    opacity: 0.7;
    width: 100%;
    height: 100vh;
    z-index: 2;
    position: absolute;
  `,
};

function LoginPage() {
  return (
    <div css={styles.mainWrap}>
      <img
        css={styles.overlay}
        src="./Images/BackgroundOverlay.png"
        alt="overlay"
      />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
