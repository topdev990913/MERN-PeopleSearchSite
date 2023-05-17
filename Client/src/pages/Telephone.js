import React from "react";
import "./pages.css";

const Telephone = () => {
    return (
        <div className="container-fluid" style={{height: "500px"}}>
            <div className="name_title">
                Revelar quién llama
            </div>
            <div className="name_subtitle">
                ¡Reúna información más profunda sobre quienes están detrás del número: <br />nombre del propietario, historial laboral, educación, perfiles sociales y mucho más!
            </div>
            <div className="searchbar_out">
                <div className="row">
                    <div className="col-9 position-relative">
                        {/* <input type="text" alt="search" className="input_name" /> */}
                        <input type="number" pattern="[0-9]*" inputmode="numeric" alt="search" className="input_name" />
                        <label className="serach-bar-placeholder">número de teléfono</label>
                    </div>
                    <div className="col-3" style={{ display: "flex", justifyContent: "right" }}>
                        <button className="searchButton"> BUSCAR </button>
                    </div>
                </div>
            </div>            
        </div>
    );
};
export default Telephone;
