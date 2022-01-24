import { css } from '@emotion/react';
import React from 'react';
import colors from '../../Configs/Colors';
import viewSize from '../../Configs/Sizes';

const styles = {
  inputWrap: css`
    padding-left: 20px;
    @media (max-width: ${viewSize.tablet}) {
      margin-top: 10px;
      padding-left: 0px;
      flex-direction: column;
    }
  `,
  input: css`
    padding: 5px;
    border: ${colors.lightGray} 1px solid;
    border-radius: 6px;
    width: calc(100% - 12px);
    &:focus {
      border: ${colors.primary} 2px solid;
      outline: none;
    }
  `,
};

interface SearchProps {
  changeSearch: (search: string) => void;
}

interface Event {
  target: {
    value: string;
  };
}

function SearchInput({ changeSearch }: SearchProps) {
  const handleChange = (event: Event) => {
    changeSearch(event.target.value);
  };
  return (
    <div css={styles.inputWrap}>
      <input
        css={styles.input}
        placeholder="Search Server..."
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
