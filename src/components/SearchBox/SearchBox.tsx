import { ReactElement, FC } from "react";
import { ISearchBoxProps } from "../../types";
import './index.css';


const SearchBox: FC<ISearchBoxProps> = ({ value, handleChange }): ReactElement => (
  <div className="search-box__container">
    <input
      type="text"
      placeholder="Search"
      value={value}
      className="search-box__input"
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;