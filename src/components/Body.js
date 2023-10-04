import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { RESTAURANTS_API } from "../utils/constants";

const BodyLayout = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(RESTAURANTS_API);
        const transData = await data.json();
        let restaurantData = transData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        let restaurantInfo = [];
        restaurantData.forEach(element => {
            restaurantInfo.push(element.info);
        });
        setListRestaurant(restaurantInfo);
        setFilteredRestaurant(restaurantInfo);
    }

    function searchHandler(evt){
        setSearchRestaurant(evt.target.value);
        const searchRes = listRestaurant.filter((item) => String(item.name).toLowerCase().includes(evt.target.value.toLowerCase()));
        setFilteredRestaurant(searchRes);
    }

    return listRestaurant.length === 0 ? <ShimmerUI /> : (
        <div className='main'>
            <div className='search-container'>
                <input type="search" value={searchRestaurant} onChange={searchHandler} />
                <button onClick={() => {
                    const searchRes = listRestaurant
                    .filter((item) => String(item.name).toLowerCase().includes(searchRestaurant.toLowerCase()));
                    setFilteredRestaurant(searchRes);

                }}>Search</button>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listRestaurant.filter((item) => item.avgRating > 4);
                        setFilteredRestaurant(filteredList);
                    }}
                >Top Rate Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {
                    filteredRestaurant.map((restaurant) => {
                        return (
                            <Link to={`restaurant/${restaurant.id}`} key={restaurant.id}>
                                <RestaurantCard resData={restaurant} />
                            </Link>
                          
                        )
                    })
                }
            </div>
        </div>
    )

}

export default BodyLayout;