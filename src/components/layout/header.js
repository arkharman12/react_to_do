import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}> 
            <h1>TodoList</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    fontFamily: "Monaco, sans-serif",
	background: "#56d2f4",
	color: "#000",
	textAlign: "center",
    padding: "10px",
    marginTop: "10px"
}

export default Header;