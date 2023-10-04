const RESTAURANTS_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3410364&lng=77.7171642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
const RESTAURANT_CARD_LOGO = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const HEADER_LOGO = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Cchef-logo%2Crestaurant-logo%2Cfire-design-template-7648600f54c48617d64e973dd3af8cda_screen.jpg?ts=1663142017"
const RESTAURANT_INFO = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.354624950160694&lng=77.7291676774621&restaurantId="
const RESTAURANT_INFO_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"
export {
    RESTAURANTS_API,
    RESTAURANT_INFO,
    RESTAURANT_CARD_LOGO,
    HEADER_LOGO,
    RESTAURANT_INFO_IMG
}


// data.cards[0].card.card.info

// id, name, city, locality, areaName, costForTwo, costForTwoMessage, cuisines
// avgRatingString, totalRatingsString, feeDetails, sla


// data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards


// card.info -> name, description, defaultPrice, imageId

// <img alt="Chocolate Oreo Milkshake" 
// class="styles_itemImage__3CsDL" loading="lazy" width="256" 
// src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gjccxljclkggdcmfdxkr">