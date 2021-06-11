import { useState, useEffect } from "react";
import SearchBox from "../SearchBox";
import ReleasesList from "../ReleasesList";
import APIService from "../../api/APIService";
import './index.css';

const MainPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    APIService.fetchReleases();
  },[]);

  return (
    <section className="main-page__container">
      <SearchBox />
      <ReleasesList />
    </section>
  );
}

export default MainPage;