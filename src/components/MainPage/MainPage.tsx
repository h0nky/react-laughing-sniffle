import { useState, useEffect, ChangeEvent, ReactElement, FC } from "react";
import SearchBox from "../SearchBox";
import ReleasesList from "../ReleasesList";
import Paginator from "../Paginator";
import useReleases from "../../hooks/useReleases";
import { ERROR_MESSAGE } from "../../constants";
import './index.css';

const getApiURL = (query: string): string => {
  return `https://api.discogs.com/database/search?artist=${query}&per_page=10&page=1&token=YjPhWqeaySPvOdqqwfyXyCDBvHXhFptXruhtYfYo`;
};

interface IMainPageProps {
  pagination: any,
  results: any,
  updateState: any,
  error: boolean
}

const MainPage: FC<IMainPageProps> = ({ pagination, results, updateState, error = false }): ReactElement => {
  const { fetchData } = useReleases(updateState); 
  const [searchValue, setSearchValue] = useState('');

  const onHandleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      if (searchValue) fetchData(getApiURL(searchValue));
    }, 1000);

    return () => clearTimeout(timerId);
  }, [fetchData, searchValue]);

  return (
    <section className="main-page__container">
      {error ? <p className="main-page__error">{ERROR_MESSAGE}</p> :
      <>
        <SearchBox value={searchValue} handleChange={onHandleSearchChange}/>
        <ReleasesList data={results} />
        <Paginator pages={pagination} updateState={updateState} />
      </>}
    </section>
  );
}

export default MainPage;