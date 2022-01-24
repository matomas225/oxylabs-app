import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../Components/FormButton/MainButton';
import colors from '../../Configs/Colors';
import { fontNames, fontSize } from '../../Configs/Fonts';
import viewSize from '../../Configs/Sizes';

const styles = {
  mainWrap: css`
    color: ${colors.secondary};
    font-family: ${fontNames.roboto};
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2a2a2a;
    height: 100vh;
  `,
  title: css`
    font-size: ${fontSize[34]};
    margin: 50px 0px;
    @media (max-width: ${viewSize.tablet}) {
      font-size: ${fontSize[18]};
    }
  `,
  sadSmile: css`
    transform: rotate(90deg);
    font-size: ${fontSize[32]};
    margin: 25px 0px;
  `,
};

function NotFoundPage() {
  return (
    <div css={styles.mainWrap}>
      <div css={styles.title}>
        <h1>404 Page Not Found</h1>
      </div>
      <Link to="/">
        <div>
          <MainButton text="Go Home" type="button" />
        </div>
      </Link>
      <div css={styles.sadSmile}>
        <h1>:(</h1>
      </div>
    </div>
  );
}

export default NotFoundPage;
