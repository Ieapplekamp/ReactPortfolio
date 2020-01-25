import React from "react";
import "../Header/Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <img className="me" src={require('../Images/me_feb_2018.jpg')} alt="Me"></img>
            <h3 className="">Ian Applekamp</h3>
        </div>
    )
}

export default Navbar;