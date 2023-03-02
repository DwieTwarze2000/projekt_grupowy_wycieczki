import React from "react";
import headerImg from "../../images/header.jpg";
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={headerImg} className="logoPic" />
            </div>
        </div>
    );
};

export default HeaderComponent;
