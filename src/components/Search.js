import React from "react";

const Search = ({ type, value, onChange, placeholder }) => {
  return (
    <div>
      <div className="search">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Search;
