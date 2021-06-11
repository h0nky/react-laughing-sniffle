import React, { ReactElement } from "react";
import './index.css';

const ReleasesListItem = (): ReactElement => (
  <li>
    <div />
  </li>
);

const ReleasesList = () => {
  return (
      <ul className="releases-list__container">
        {[].map((item) => <ReleasesListItem />)}
      </ul>
  );
}

export default ReleasesList;