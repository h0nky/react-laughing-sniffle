import { FC, ReactElement } from "react";
import { IPaginatorProps } from "../../types";
import useReleases from "../../hooks/useReleases";
import "./index.css";

const Paginator: FC<IPaginatorProps> = ({ pages, updateState }): ReactElement | null => {
  const { fetchData } = useReleases(updateState);
  if (!pages) return null;
  return (
    <div className="paginator__container">
      {pages?.map((button, index) => (
        <span
          key={index}
          className="paginator__button"
          onClick={() => fetchData(button[1])}
        >
          {button[0]}
        </span>
        ))}
    </div>
  );
};

export default Paginator;