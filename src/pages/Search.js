import React, { useEffect, useState } from "react";

const Search = (props ) => {
  const [search, setSearch]  = useState("");
  console.log(search)
  useEffect(
    () => {
      props.onSearch(search);
    },
    [ search, props]
  );
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => {setSearch(e.target.value)}}

        />
        {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
      </form>
    </div>
  );
};

export default Search;
