import { css } from '@emotion/react';
import React from 'react';
import colors from '../../Configs/Colors';
import { fontSize } from '../../Configs/Fonts';

const styles = {
  button: css`
    width: 100%;
    padding: 20px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: ${colors.primary};
    font-size: ${fontSize[18]};
    color: ${colors.secondary};
    font-weight: 700;
    transition: 0.2s;
    &:hover {
      background-color: ${colors.buttonHover};
    }
  `,
};

interface MainButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function MainButton({ text, type }: MainButtonProps) {
  return (
    <div>
      <button css={styles.button} type={type}>
        {text}
      </button>
    </div>
  );
}

export default MainButton;
