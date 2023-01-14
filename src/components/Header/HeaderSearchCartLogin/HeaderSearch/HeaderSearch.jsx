import React from "react";
import "./HeaderSearch.scss";
import { ReactComponent as SearchSvg } from "../../../../style/icons/Search.svg"

function HeaderSearch() {
  return (
    <div className="header-search">
      <SearchSvg />
    </div>
  );
}

export default HeaderSearch;
