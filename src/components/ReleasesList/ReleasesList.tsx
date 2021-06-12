import { ReactElement, FC } from "react";
import { TRelease, IReleasesListProps } from "../../types";
import './index.css';


const ReleasesListItem: FC<{ release: TRelease }> = ({ release }): ReactElement => (
  <li className="release-list__item">
    <img alt="cover" src={release.thumb} />
    <span className="release-list__item--title">{release.title}</span>
    <span className="release-list__item--subtitle">{release.year}</span>
  </li>
);

const ReleasesList: FC<IReleasesListProps> = ({ pages, data }): ReactElement => (
  <ul className="releases-list__container">
    {data.map((item) => <ReleasesListItem key={item.id} release={item} />)}
  </ul>
);

export default ReleasesList;