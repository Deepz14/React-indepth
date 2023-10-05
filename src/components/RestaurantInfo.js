import { useParams } from "react-router-dom";
import { RESTAURANT_INFO_IMG } from "../utils/constants";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantInfo = () => {

    const { resId }= useParams();
    const getRestaurantInfo = useRestaurantInfo(resId);
    const resInfo = getRestaurantInfo?.cards[0]?.card?.card?.info;
    const recomntdInfo = [];
    getRestaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards[1]?.card?.card?.itemCards.forEach((item) => {
        recomntdInfo.push(item?.card?.info);
    });

    return (
        <div>
            <div className="res-info-top-container">
                <h1>{resInfo?.name}</h1>
                <h5>{resInfo?.cuisines.join(',')}</h5>
                <h5>{resInfo?.areaName}, {resInfo?.sla?.lastMileTravelString}</h5>
                <h5>{resInfo?.avgRatingString}</h5>
                <h5>{resInfo?.totalRatingsString}</h5>
                <h5>{resInfo?.sla?.slaString}  {resInfo?.costForTwo}</h5>
            </div>
            <div className="res-info-recomm-container">
                {
                    recomntdInfo.length > 0 ? 
                    <div className="res-info-recomm-list">
                        <h1>Recommented ({recomntdInfo?.length})</h1>
                        {recomntdInfo.map((item) => {
                            console.log("item", item);
                            return (
                                <div className="res-info-recomm-data" key={item?.id}>
                                    <div className="img-container">
                                        <img src={`${RESTAURANT_INFO_IMG}${item?.imageId}`} />
                                    </div>
                                    <h3>{item?.name}</h3>
                                    <p>{item?.description}</p>
                                    <p> &#8377; { 
                                        item?.defaultPrice ? 
                                            item?.defaultPrice / 100 : 
                                            item?.price / 100
                                        }
                                    </p>
                                </div>

                            )
                        })}
                    </div> 
                    
                    : ""
                }
            </div>
        </div>

    )
}


export default RestaurantInfo;