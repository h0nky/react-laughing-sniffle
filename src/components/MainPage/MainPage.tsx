import { useState, useEffect, ChangeEvent, ReactElement, FC } from "react";
import SearchBox from "../SearchBox";
import ReleasesList from "../ReleasesList";
import APIService from "../../api/APIService";
import { IMainPageState } from "../../types";
import './index.css';


const MainPage: FC = (): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const [{ pagination, results }, setData] = useState<IMainPageState>({ pagination: null, results: [] });

  const onHandleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await APIService.fetchReleases(searchValue);
      setData(response);
    };

    let timerId = setTimeout(() => {
      if (searchValue) fetchData();
    }, 1000);

    return () => clearTimeout(timerId);
  }, [searchValue]);

  return (
    <section className="main-page__container">
      <SearchBox value={searchValue} handleChange={onHandleSearchChange}/>
      <ReleasesList pages={pagination} data={results} />
    </section>
  );
}

export default MainPage;