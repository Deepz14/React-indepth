
const RestaurantCard = (props) => {
    const { name, cuisine, ratings, eta, image} = props.resData
    return (
        <div className="res-card-container">
            <div className='res-card-img'>
                <img 
                    className='res-card-logo'
                    src={image}
                    alt="res-card-logo"
                />
            </div>
            <h3 className='res-title'>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{ratings} stars</h4>
            <h4>{eta} min</h4>
        </div>
    )
}

export default RestaurantCard;