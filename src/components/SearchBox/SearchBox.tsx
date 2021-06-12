import { ReactElement, FC, ChangeEvent } from "react";
import './index.css';

interface ISearchBoxProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: FC<ISearchBoxProps> = ({ value, handleChange }): ReactElement => {
  return (
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
}

export default SearchBox;