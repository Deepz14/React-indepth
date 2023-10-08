import { useState } from "react";
import { Link } from "react-router-dom";

import { HEADER_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [ loginBtn, setLoginBtn ] = useState("Login");
    const isOnline = useOnlineStatus();

    return (
        <div className="flex justify-between items-center shadow mb-3">
            <div className='logo ml-5 pl-5'>
                <img 
                    className='w-[130]'
                    src={HEADER_LOGO}
                    alt='logo-img'
                />
            </div>
            <div className='nav-container'>
                <ul className='nav-items flex mr-5 pr-5'>
                    <li className="nav-links px-5">
                        Online status: {isOnline ? "🟢" : "🟠"}
                    </li>
                    <li className='nav-links  px-5'>
                       <Link to={'/'}>Home</Link> 
                    </li>
                    <li className='nav-links  px-5'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className='nav-links  px-5'>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li className='nav-links  px-5'>Cart</li>
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