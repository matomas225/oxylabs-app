import { css } from '@emotion/react';
import React, { useState } from 'react';
import colors from '../../Configs/Colors';
import viewSize from '../../Configs/Sizes';
import SearchInput from '../SearchInput/SearchInput';
import Selection from '../Selection/Selection';

const styles = {
  itemsHeader: css`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background: ${colors.grayBackground};
    color: ${colors.lightGray};
    font-weight: 300;
    letter-spacing: 2px;
    border-bottom: ${colors.grayBorder} solid 1px;
  `,
  sectionWrap: css`
    display: flex;
    align-items: center;
    @media (max-width: ${viewSize.tablet}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  items: css`
    display: flex;
    padding-left: 20px;
    @media (max-width: ${viewSize.tablet}) {
      padding-left: 0px;
      flex-direction: column;
    }
  `,
  itemsHidden: css`
    display: flex;
    padding-left: 20px;
    @media (max-width: ${viewSize.tablet}) {
      display: none;
      padding-left: 0px;
      flex-direction: column;
    }
  `,
  dropdownButton: css`
    padding: 15px 0px;
    cursor: auto;
    border: none;
    background: none;
    @media (max-width: ${viewSize.tablet}) {
      cursor: pointer;
    }
  `,
  text: css`
    color: ${colors.lightGray};
    font-weight: 300;
    letter-spacing: 2px;
  `,
};
interface HeaderProps {
  changeSearch: (search: string) => void;
  selectSorting: (choise: string) => void;
  option: string;
}

function Header({ changeSearch, selectSorting, option }: HeaderProps) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const resizeWindow = () => {
    setWindowSize(window.innerWidth);
  };

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  window.addEventListener('resize', resizeWindow);

  return (
    <div css={styles.itemsHeader}>
      <div css={styles.sectionWrap}>
        <button css={styles.dropdownButton} onClick={toggleDisplay}>
          <span css={styles.text}>
            SERVER {windowSize <= 768 && (isDisplayed ? '▲' : '▼')}
          </span>
        </button>
        <div css={isDisplayed ? styles.items : styles.itemsHidden}>
          <Selection selectSorting={selectSorting} option={option} />
          <SearchInput changeSearch={changeSearch} />
        </div>
      </div>
      <p>DISTANCE</p>
    </div>
  );
}

export default Header;
