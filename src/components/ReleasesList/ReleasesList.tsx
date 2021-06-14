import { ReactElement, FC } from "react";
import Notification from "../Notification";
import { TRelease, IReleasesListProps } from "../../types";
import { SEARCH_ERROR } from "../../constants";
import './index.css';


const ReleasesListItem: FC<{ release: TRelease }> = ({ release }): ReactElement => (
  <li className="release-list__item">
    <img alt="Album cover" src={release.thumb} />
    <span className="release-list__item--title">{release.title}</span>
    <span className="release-list__item--subtitle">{release.year}</span>
  </li>
);

const ReleasesList: FC<IReleasesListProps> = ({ data }): ReactElement | null => {
  if (!data) return null;
  return (
    <>
      {data.length ? 
      <ul className="releases-list__container">
        {data.map((release) => <ReleasesListItem key={release.id} release={release} />)}
      </ul> :
      <Notification text={SEARCH_ERROR} />}
    </>
  );
}

export default ReleasesList;