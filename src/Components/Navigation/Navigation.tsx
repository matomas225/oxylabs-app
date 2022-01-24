import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../../Configs/Colors';
import { fontSize } from '../../Configs/Fonts';

const styles = {
  navigation: css`
    display: flex;
    justify-content: space-between;
    padding: 45px 20px;
    border-bottom: ${colors.grayBorder} solid 1px;
  `,
  logo: css`
    cursor: pointer;
    width: 140px;
  `,
  logout: css`
    cursor: pointer;
    font-size: ${fontSize[18]};
    border: none;
    background: none;
    transition: 0.2s;
    backface-visibility: hidden;
    &:hover {
      color: ${colors.buttonHover};
    }
  `,
  logoutIcon: css`
    width: 18px;
    vertical-align: -1px;
  `,
  logoutText: css`
    font-weight: 300;
    padding-left: 5px;
  `,
};

function Navigation() {
  const navigate = useNavigate();

  const Logout = () => {
    document.cookie = 'x-access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

    navigate('/');
  };

  return (
    <div>
      <nav css={styles.navigation}>
        <img css={styles.logo} src="./Images/LogoDark.png" alt="LogoDark" />
        <button onClick={Logout} css={styles.logout} type="button">
          <img css={styles.logoutIcon} src="./Images/Logout.svg" alt="Logout" />
          <span css={styles.logoutText}>Logout</span>
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
