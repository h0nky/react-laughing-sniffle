import { ReactElement, FC } from "react";
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

const ReleasesList: FC<IReleasesListProps> = ({ data }): ReactElement => (
  <ul className="releases-list__container">
    {data?.length ? data.map((item) =>
      <ReleasesListItem key={item.id} release={item} />) :
      (<p>{SEARCH_ERROR}</p>)}
  </ul>
);

export default ReleasesList;