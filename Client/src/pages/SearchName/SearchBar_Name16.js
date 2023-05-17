import React from "react";
import "../pages.css";

const SearchBarName16 = () => {
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-4 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">Nombre</label>
                </div>
                <div className="col-4 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">Cargo</label>
                </div>
                <div className="col-4 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">Edad</label>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button className="searchButton1"> BUSCAR </button>
            </div>

        </div>
    );
};
export default SearchBarName16;
