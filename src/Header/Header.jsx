import React, { useState, useEffect } from "preact/compat";
import "./Header.css";

export const HeaderComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.classList.toggle("dark-theme", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <header>
            <nav>
                <div className="header-left-div">
                    <img src="/Group 20.png" alt="Logo" />
                </div>
                <div className={`header-center-div ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li></li>
                        <li>Product <i className="fa-solid fa-angle-down"></i></li>
                        <li>Customers <i className="fa-solid fa-angle-down"></i></li>
                        <li>Resources <i className="fa-solid fa-angle-down"></i></li>
                        <li>About us <i className="fa-solid fa-angle-down"></i></li>
                        <li>Plans <i className="fa-solid fa-angle-down"></i></li>
                    </ul>
                </div>
                <div className="header-right-div">
                    <button className="login-btn">Login</button>
                    <button className="demo-btn">Request a Demo</button>
                    <button className="theme-toggle-btn" onClick={toggleTheme}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    );
};
