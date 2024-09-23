import { ListSearchInputIcon, SearchIcon } from "@/assets/svgs";
import { React, useState } from "react";

const SearchInput = ({ placeholder = "Search", onSearch = () => {} }) => {
  // States
  const [searchText, setSearchText] = useState("");
  return (
    <div className="jt-location">
      <input
        placeholder={placeholder}
        className="form-control"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <i className="search-logo" onClick={() => onSearch(searchText)}>
        <SearchIcon />
      </i>
    </div>
  );
};

export default SearchInput;

export const ListSearchInput = ({
  searchText,
  onChangeSearchText,
  onSearch,
  placeholder = "Search here...",
}) => {
  return (
    <div className="search-block">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            value={searchText}
            onChange={({ target: { value } }) => onChangeSearchText(value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              onSearch();
            }}
            type="submit"
          >
            <ListSearchInputIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
