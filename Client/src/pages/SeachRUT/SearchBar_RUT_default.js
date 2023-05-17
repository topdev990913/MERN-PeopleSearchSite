import React from "react";
import "../pages.css";

const SearchBarRUTDefault = () => {
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-9 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">RUT</label>
                </div>
                <div className="col-3" style={{ display: "flex", justifyContent: "right" }}>
                    <button className="searchButton"> BUSCAR </button>
                </div>
            </div>
        </div>
    );
};
export default SearchBarRUTDefault;
