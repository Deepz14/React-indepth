import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { RESTAURANT_INFO, RESTAURANT_INFO_IMG } from "../utils/constants";

const RestaurantInfo = () => {

    const [resInfo, setResInfo] = useState();
    const [recomntdInfo, setRecomntdInfo] = useState([]);
    const { resId }= useParams();

    useEffect(() => {
        fetchRestaurantInfo();
    }, []);

    const fetchRestaurantInfo = async() => {
        const data = await fetch(RESTAURANT_INFO + resId);
        const jsonData = await data.json();
        //console.log("RESTAURANT INFO: ", jsonData);
        setResInfo(jsonData?.data?.cards[0]?.card?.card?.info)
        //console.log("RECOMMENTED CONTAINER INFO: ", jsonData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        const recommContainerInfo = [];
        jsonData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.forEach((item) => {
            recommContainerInfo.push(item?.card?.info);
        });
        //console.log("RECOMMENTED CONTAINER ", recommContainerInfo);
        setRecomntdInfo(recommContainerInfo);

    }

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