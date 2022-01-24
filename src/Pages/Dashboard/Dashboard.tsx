import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useCookies } from 'react-cookie';
import { fontNames, fontSize } from '../../Configs/Fonts';
import ServerBar from '../../Components/ServerBar/ServerBar';
import ChangeSorting from '../../Functions/ChangeSorting';
import Navigation from '../../Components/Navigation/Navigation';
import FetchItems from '../../Functions/FetchItems';
import Header from '../../Components/Header/Header';
import colors from '../../Configs/Colors';

const styles = {
  mainWrap: css`
    font-family: ${fontNames.roboto};
  `,
  notFound: css`
    font-size: ${fontSize[16]};
    color: ${colors.lightGray};
    text-align: center;
  `,
};

interface Data {
  [x: string]: string;
}

function Dashboard() {
  const [cookies] = useCookies(['x-access-token']);

  const [fetchedData, setFetchedData] = useState<Data[]>([]);

  const [option, setOption] = useState('');

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    FetchItems({ cookies, setFetchedData });
  }, []);

  const selectSorting = (choise: string) => {
    setOption(choise);
  };

  const changeSearch = (search: string) => {
    setSearchValue(search);
  };

  return (
    <div css={styles.mainWrap}>
      <Navigation />
      <Header
        changeSearch={changeSearch}
        selectSorting={selectSorting}
        option={option}
      />
      {searchValue === '' ? (
        fetchedData &&
        fetchedData.sort(ChangeSorting(option)).map((data, index) => {
          const key = index + 1;
          return <ServerBar data={data} key={key} />;
        })
      ) : fetchedData &&
        fetchedData
          .sort(ChangeSorting(option))
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()),
          ).length === 0 ? (
        <p css={styles.notFound}>No Results :(</p>
      ) : (
        fetchedData
          .sort(ChangeSorting(option))
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((value, index) => {
            const key = index + 1;
            return <ServerBar data={value} key={key} />;
          })
      )}
    </div>
  );
}

export default Dashboard;
