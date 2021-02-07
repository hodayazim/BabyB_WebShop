import React from "react";
// import ReactDom from "ReactDom";
import "../css/search_1.css";

function Search() {
  return (
    <div className="container">
      <input type="text" placeholder="Search..." />
      <div className="search"></div>
    </div>

    /* <div class="input-group">
            <input type="text" name="term" id="liveSearch" class="form-control" placeholder="שם סדרה או חלק ממנה" autocomplete="off" data-provide="typeahead">
                <span class="input-group-btn">
                    <button class="btn btn-blue nontrans">
                        <span>חפש לי!</span>
                    </button>
                </span>
            </input>
        </div> */
  );
}

export default Search;
