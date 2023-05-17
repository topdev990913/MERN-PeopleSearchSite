import React from "react";
import "./pages.css";
// import logo from "../images/bff-robot.png";
// import main_pic from "../images/circle-main-pic.webp";
// import pic_1 from "../images/circle-pic-1.webp";
// import pic_2 from "../images/circle-pic-2.webp";
// import pic_3 from "../images/circle-pic-3.webp";
// import pic_4 from "../images/circle-pic-4.webp";
// import pic_5 from "../images/circle-pic-5.webp";
// import pic_6 from "../images/circle-pic-6.webp";
// import pic_7 from "../images/circle-pic-7.webp";

const Email = () => {
    return (
        <div className="container-fluid" style={{height: "500px"}}>
            <div className="name_title">
            Busque millones de direcciones <br />de correo electrónico
            </div>
            <div className="name_subtitle">
            Obtenga más información sobre la persona detrás del correo <br />electrónico: información de contacto, historial profesional y más.
            </div>
            <div className="searchbar_out">
                <div className="row">
                    <div className="col-9 position-relative">
                        <input type="text" alt="search" className="input_name" />
                        <label className="serach-bar-placeholder">correo electrónico</label>
                    </div>
                    <div className="col-3" style={{ display: "flex", justifyContent: "right" }}>
                        <button className="searchButton"> BUSCAR </button>
                    </div>
                </div>
            </div>
            <div className="bottom_description1">
            Ejemplo: johndoe@gmail.com
            </div>
            
        </div>
    );
};
export default Email;
