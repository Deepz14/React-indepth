import { useState } from "react";

import { HEADER_LOGO } from "../utils/constants";

const HeaderComponent = () => {
    const [ loginBtn, setLoginBtn ] = useState("Login");

    return (
        <div className="header">
            <div className='logo'>
                <img 
                    className='logo-img'
                    src={HEADER_LOGO}
                    alt='logo-img'
                />
            </div>
            <div className='nav-container'>
                <ul className='nav-items'>
                    <li className='nav-links'>Home</li>
                    <li className='nav-links'>About Us</li>
                    <li className='nav-links'>Contact Us</li>
                    <li className='nav-links'>Cart</li>
                    <button className="login-btn" 
                        onClick={() => loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}>
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;