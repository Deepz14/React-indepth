import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { RESTAURANTS_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyLayout = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    useEffect(() => {
        fetchData();

    // const bodyTimer = setInterval(() => {
    // console.log('Body component timer');
    // }, 1000);

        return () => {
            // Below code will execute if the component gets destroyed.
            console.log("BODY COMPONENT DESTROYED!");
            //clearInterval(bodyTimer);
        }
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

    const isOnline = useOnlineStatus(); 
    if (isOnline === false){
        return <h3>You're offline. Check your Internet Connection!</h3>
    }
    
    return listRestaurant.length === 0 ? <ShimmerUI /> : (
        <div className='main justify-self-center'>
            <div className='search-container my-3 mx-6 px-8 '>
                <input className="border border-solid border-gray-400 w-[280] h-[40] px-4 outline-transparent rounded" type="search" 
                   placeholder="Search for restaurants" value={searchRestaurant} onChange={searchHandler} />
                <button className="bg-yellow-500 text-white hover:text-black mx-2  
                    border-r-gray-400 border-b-gray-400 px-8 h-[40] font-semibold rounded" onClick={() => {
                    const searchRes = listRestaurant
                    .filter((item) => String(item.name).toLowerCase().includes(searchRestaurant.toLowerCase()));
                    setFilteredRestaurant(searchRes);

                }}>Search</button>
                <button className="filter-btn ml-3
                    px-5 py-2 rounded font-semibold bg-yellow-500 outline-transparent text-white hover:text-black"
                    onClick={() => {
                        const filteredList = listRestaurant.filter((item) => item.avgRating > 4);
                        setFilteredRestaurant(filteredList);
                    }}
                >Top Rate Restaurant</button>
            </div>
            <div className='restaurant-container flex flex-wrap px-5 mx-5'>
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