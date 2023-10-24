import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { HEADER_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";

const HeaderComponent = () => {
    const isOnline = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    const cartCount = useSelector((state) => state.cart.totalCart)

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
                <ul className='nav-items flex mr-5 pr-5 font-semibold'>
                    <li className="nav-links cursor-pointer px-5">
                        Online status: {isOnline ? "🟢" : "🟠"}
                    </li>
                    <li className='nav-links cursor-pointer  px-5'>
                       <Link to={'/'}>Home</Link> 
                    </li>
                    <li className='nav-links cursor-pointer  px-5'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className='nav-links cursor-pointer  px-5'>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li className='nav-links relative cursor-pointer cart-link px-5 mr-5'>
                        <span>
                            <Link to={'/cart'}>
                                <svg className="stroke-2 stroke-black mr-3 cart-logo hover:stroke-yellow-500" viewBox="-1 0 37 32" height="28" width="30" fill="#fff">
                                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                                <span className="absolute top-0 left-7">{cartCount}</span>
                                <span className="absolute top-0 left-14">Cart</span>
                            </Link>
                        </span>
                    </li>
                    <li className="nav-links  px-5">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;