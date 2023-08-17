import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const BodyLayout = () => {
    const [listRestaurant, setListRestaurant] = useState(RESTAURANT_LIST);

    return (
        <div className='main'>
            <div className='search-container'>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listRestaurant.filter((item) => item.ratings > 4)
                        setListRestaurant(filteredList)
                    }}
                >Top Rate Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {
                    listRestaurant.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.id} resData={restaurant} />
                        )
                    })
                }
            </div>
        </div>
    )

}

export default BodyLayout;