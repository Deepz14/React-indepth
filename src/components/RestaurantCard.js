
const RestaurantCard = (props) => {
    const { name, cuisine, cloudinaryImageId, ratings, eta, areaName} = props.resData;

    const cuisineStr = cuisine.reduce((acc, curr) => {
        curr += ` ${acc}`; 
        return curr;
    }, '');
    return (
        <div className="res-card-container">
            <div className='res-card-img'>
                <img 
                    className='res-card-logo'
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                    alt="res-card-logo"
                />
            </div>
            <h3 className='res-title'>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{ratings} stars</h4>
            <h4>{eta}</h4>
            <h4>{areaName}</h4>
        </div>
    )
}

export default RestaurantCard;