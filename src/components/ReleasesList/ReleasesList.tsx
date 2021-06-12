import React, { ReactElement, FC } from "react";
import './index.css';

type TRelease = {
  [key: string]: string | number;
}

interface IReleasesListProps {
  data: Array<TRelease>;
  pages: any;
}

const ReleasesListItem: FC<{ release: TRelease }> = ({ release }): ReactElement => {
  console.log(release);
  return (
    <>
      <span></span>
    </>
  )
}

const ReleasesList: FC<IReleasesListProps> = ({ pages, data }) => {
  return (
      <ul className="releases-list__container">
        {data.map((item) => <ReleasesListItem release={item} />)}
      </ul>
  );
}

export default ReleasesList;