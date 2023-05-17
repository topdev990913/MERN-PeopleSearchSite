import React from "react";
import "../pages.css";

const SearchBarRUTPosition = () => {
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-6 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">RUT</label>
                </div>
                <div className="col-6 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">posición</label>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button className="searchButton1"> BUSCAR </button>
            </div>

        </div>
    );
};
export default SearchBarRUTPosition;
