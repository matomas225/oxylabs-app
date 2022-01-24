import { css } from '@emotion/react';
import React from 'react';
import colors from '../../Configs/Colors';

const styles = {
  selection: css`
    border: ${colors.lightGray} 1px solid;
    border-radius: 6px;
    padding: 5px;
  `,
};

interface SelectionProps {
  selectSorting: (choise: string) => void;
  option: string;
}

function Selection({ selectSorting, option }: SelectionProps) {
  const handleClick = (choise: string) => {
    selectSorting(choise);
  };

  return (
    <div>
      <select css={styles.selection} name="cars" id="cars">
        {option === '' && (
          <option onClick={() => handleClick('')}>Sort By: Default</option>
        )}
        <option onClick={() => handleClick('sortAscendingDistance')}>
          Sort By Distance: Ascending
        </option>
        <option onClick={() => handleClick('sortDescendingDistance')}>
          Sort By Distance: Descending
        </option>
        <option onClick={() => handleClick('sortAscendingName')}>
          Sort By Name: Ascending
        </option>
        <option onClick={() => handleClick('sortDescendingName')}>
          Sort By Name: Descending
        </option>
      </select>
    </div>
  );
}

export default Selection;
