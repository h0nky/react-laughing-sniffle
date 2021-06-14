import { FC, ReactElement } from "react";
import useReleases from "../../hooks/useReleases";

const Paginator: FC<any> = ({ pages, updateState }): ReactElement | null => {
  const { fetchData } = useReleases(updateState);
  
  const handleClick = () => {
    fetchData(pages.urls.next);
  };
  
  return (
    <div>
      <span onClick={handleClick}>Next</span>
      <span>Last</span>
    </div>
  );
};

export default Paginator;