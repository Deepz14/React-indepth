const HeaderComponent = () => {
    return (
        <div className="header">
            <div className='logo'>
                <img 
                    className='logo-img'
                    src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Cchef-logo%2Crestaurant-logo%2Cfire-design-template-7648600f54c48617d64e973dd3af8cda_screen.jpg?ts=1663142017'
                    alt='logo-img'
                />
            </div>
            <div className='nav-container'>
                <ul className='nav-items'>
                    <li className='nav-links'>Home</li>
                    <li className='nav-links'>About Us</li>
                    <li className='nav-links'>Contact Us</li>
                    <li className='nav-links'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;