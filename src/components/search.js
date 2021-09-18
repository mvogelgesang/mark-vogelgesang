import React from "react";

export default function Search(props) {
  return (
    <div role="search" className={`${props.className} search-box`}>
      <label className="sr-only" htmlFor="query">
        {props.searchText}
      </label>
      <input
        id="query"
        className="search-input"
        name="query"
        type="search"
        placeholder={props.searchText}
      />
    </div>
  );
}
