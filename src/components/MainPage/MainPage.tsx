import { useState, useEffect, ChangeEvent, ReactElement, FC } from "react";
import SearchBox from "../SearchBox";
import ReleasesList from "../ReleasesList";
import Paginator from "../Paginator";
import Notification from "../Notification";
import { getApiURL } from "../../api/apiConfig";
import useReleases from "../../hooks/useReleases";
import { ERROR_MESSAGE } from "../../constants";
import { IMainPageProps } from "../../types";
import './index.css';


const MainPage: FC<IMainPageProps> = ({ pagination, results, updateState, error }): ReactElement => {
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
      {error ? <Notification text={ERROR_MESSAGE} /> :
      <>
        <SearchBox value={searchValue} handleChange={onHandleSearchChange}/>
        <Paginator pages={pagination} updateState={updateState} />
        <ReleasesList data={results} />
      </>}
    </section>
  );
}

export default MainPage;