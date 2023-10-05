import { useState } from "react";
import { Link } from "react-router-dom";

import { HEADER_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [ loginBtn, setLoginBtn ] = useState("Login");
    const isOnline = useOnlineStatus();

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
                    <li className="nav-links">
                        Online status: {isOnline ? "🟢" : "🟠"}
                    </li>
                    <li className='nav-links'>
                       <Link to={'/'}>Home</Link> 
                    </li>
                    <li className='nav-links'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
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