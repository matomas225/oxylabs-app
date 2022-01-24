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
  const handleClick = (event: React.MouseEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLButtonElement;
    selectSorting(target.value);
  };

  return (
    <div>
      <select css={styles.selection} onClick={handleClick}>
        {option === '' && <option value="">Sort By: Default</option>}
        <option value="sortAscendingDistance">
          Sort By Distance: Ascending
        </option>
        <option value="sortDescendingDistance">
          Sort By Distance: Descending
        </option>
        <option value="sortAscendingName">Sort By Name: Ascending</option>
        <option value="sortDescendingName">Sort By Name: Descending</option>
      </select>
    </div>
  );
}

export default Selection;
