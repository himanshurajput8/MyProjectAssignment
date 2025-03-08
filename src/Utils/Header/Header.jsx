import React from "preact/compat";
import './Header.css'

export const HeaderComponent = () => {
    return(
        <>

                <header>
                   <nav>
                        <div class="header-left-div"><img src="public/Group 20.png" alt="" /></div>
                        <div class="header-center-div">
                            <ul>
                                <li>Product <i class="fa-solid fa-angle-down"></i></li>
                                <li>Customers <i class="fa-solid fa-angle-down"></i></li>
                                <li>Resources <i class="fa-solid fa-angle-down"></i></li>
                                <li>About us <i class="fa-solid fa-angle-down"></i></li>
                                <li>Plans <i class="fa-solid fa-angle-down"></i></li>
                            </ul>
                        </div>
                        <div class="header-right-div">
                            <button className="login-btn">Login</button>
                            <button className="demo-btn">Request a Demo</button>
                        </div>
                        </nav>
                </header>
           
        </>
    )
}