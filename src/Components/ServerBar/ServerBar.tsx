import { css } from '@emotion/react';
import React from 'react';
import colors from '../../Configs/Colors';
import { fontSize } from '../../Configs/Fonts';

const styles = {
  item: css`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    color: ${colors.darkGray};
    font-size: ${fontSize[18]};
    font-weight: 300;
    border-bottom: ${colors.grayBorder} solid 1px;
  `,
};

interface Data {
  data: {
    [x: string]: string;
  };
}

function ServerBar({ data }: Data) {
  return (
    <div css={styles.item}>
      <p>{data.name}</p>
      <p>{data.distance}km</p>
    </div>
  );
}

export default ServerBar;
