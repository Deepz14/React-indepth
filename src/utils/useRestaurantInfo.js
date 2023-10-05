import { useEffect, useState } from "react"
import { RESTAURANT_INFO } from "../utils/constants";


const useRestaurantInfo = (resId) => {

    const [resInfo, setResInfo] = useState();

    useEffect(() => {
        fetchRestaurantInfo();
    }, []);

    const fetchRestaurantInfo = async() => {
        const data = await fetch(RESTAURANT_INFO + resId);
        const jsonData = await data.json();
        setResInfo(jsonData?.data);
    }

    return resInfo;
}


export default useRestaurantInfo;