import { RESTAURANT_CARD_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRatingString, sla, areaName} = props.resData;
    const cuisineStr = cuisines.reduce((acc, curr) => {
        curr += ` ${acc}`; 
        return curr;
    }, '');
    return (
        <div className="res-card-container">
            <div className='res-card-img'>
                <img 
                    className='res-card-logo'
                    src={`${RESTAURANT_CARD_LOGO}${cloudinaryImageId}`}
                    alt="res-card-logo"
                />
            </div>
            <h3 className='res-title'>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{areaName}</h4>
        </div>
    )
}

export default RestaurantCard;