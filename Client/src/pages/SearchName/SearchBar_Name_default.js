import React from "react";
import "../pages.css";
import { Link } from "react-router-dom";
const SearchBarNameDefault = () => {
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-9 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">Nombre</label>
                </div>
                <div className="col-3">
                    <Link to='/SearchResult' style={{ display: "flex", justifyContent: "right" }}><button className="searchButton"> BUSCAR </button></Link>
                </div>
            </div>
        </div>
    );
};
export default SearchBarNameDefault;
