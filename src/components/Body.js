import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyLayout = () => {
    return (
        <div className='main'>
            <div className='search-container'>Search</div>
            <div className='restaurant-container'>
                {
                    RESTAURANT_LIST.map((restaurant) => {
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