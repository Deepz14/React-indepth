import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantInfoHeader from "./RestaurantInfoHeader";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {

    const { resId }= useParams();
    const getRestaurantInfo = useRestaurantInfo(resId);
    const resInfo = getRestaurantInfo?.cards[0]?.card?.card?.info;
    console.log("restaurantInfo: ", getRestaurantInfo);
    const restaurantCategory = getRestaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(restaurantCategory);

    return (
        <div className="max-w-[800] min-h-[800] mt-[20] mr-auto ml-[auto] p-[20]">
            <RestaurantInfoHeader resInfo={resInfo} />
            {
                restaurantCategory?.length > 0 ?
                restaurantCategory?.map((c) => <RestaurantCategory key={c?.card?.card?.title} data={c?.card?.card} />) :
                ""
            }
        </div>

    )
}


export default RestaurantInfo;