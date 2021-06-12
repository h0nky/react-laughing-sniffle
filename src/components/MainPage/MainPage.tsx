import { useState, useEffect, ChangeEvent, ReactElement, FC } from "react";
import SearchBox from "../SearchBox";
import ReleasesList from "../ReleasesList";
import APIService from "../../api/APIService";
import './index.css';

type TRelease = {
  [key: string]: string | number;
}

interface IMainPageState {
  pagination: any;
  results: Array<TRelease>;
}

const MainPage: FC = (): ReactElement => {
  const [ { pagination, results }, setData ] = useState<IMainPageState>({ pagination: null, results: [] });
  const [ searchValue, setSearchValue ] = useState('');

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