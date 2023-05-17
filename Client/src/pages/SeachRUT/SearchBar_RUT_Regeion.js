import React from "react";
import "../pages.css";

const SearchBarRUTRegeion = () => {
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-6 position-relative">
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">RUT</label>
                </div>
                <div className="col-6 position-relative">
                    {/* <input type="text" alt="search" className="input_name" /> */}
                    <div className="crypto_dropdown">
                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                            <option selected className="Selected_item">Alabama</option>
                            <option value="1" className="Selected_item">Alaska</option>
                            <option value="2" className="Selected_item">Arizona</option>
                            <option value="3" className="Selected_item">Arkansas</option>
                            <option value="4" className="Selected_item">Georgia</option>
                            <option value="5" className="Selected_item">Illinois</option>
                            <option value="6" className="Selected_item">Iowa</option>
                            <option value="7" className="Selected_item">Kentucky</option>
                            <option value="8" className="Selected_item">Louisiana</option>
                        </select>
                    </div>
                    <label className="serach-bar-placeholder1">Región</label>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button className="searchButton1"> BUSCAR </button>
            </div>

        </div>
    );
};
export default SearchBarRUTRegeion;
