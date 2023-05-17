import React from "react";
import "./pages.css";
import "../App.css";
import Header from "../navbar/navbar";
import Home from "../pages/Home";


const Main = () => {
    return (
        <div className="background">
            <Header />
            <Home />
        </div>
    );
};
export default Main;
