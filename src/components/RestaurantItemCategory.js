import { useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice";
import { RESTAURANT_INFO_IMG } from "../utils/constants";

const RestaurantItemCategory = ({resInfo, item}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        const payload = {
            restaurantName: resInfo?.name,
            location: resInfo?.areaName,
            cartItem: item
        }
        dispatch(addCart(payload));
    }

    return (
        <div className="pt-2 px-2">
            <div className="res-info-recomm-data flex justify-between items-center
                    flex-wrap max-w-[850]" key={item?.id}>
                <div className="">
                    <h1 className="font-semibold">{item?.name}</h1>
                    <p className="font-semibold"> &#8377; { 
                        item?.defaultPrice ? 
                            item?.defaultPrice / 100 : 
                            item?.price / 100
                        }
                    </p>
                    <p className="font-semibold text-slate-400 max-w-[550] pt-[16]">{item?.description}</p>
                </div>
                { item?.imageId ?
                    <div className="img-container relative">
                        <img className="h-[120] w-[150] rounded-md" src={`${RESTAURANT_INFO_IMG}${item?.imageId}`} />
                        <div className="absolute left-8 bottom-0">
                            <button className="text-green-500 font-bold bg-white
                            border border-gray-300 px-5 py-1 rounded-md"
                            onClick={() => handleAddToCart(item)}>Add +</button>
                        </div>
                    </div> : 
                    <button className="text-green-500 font-bold bg-white 
                    border border-gray-300 px-5 py-1 rounded-md"
                    onClick={() => handleAddToCart(item)}>Add +</button>
                }
            </div>
            <hr className="my-[20] border border-dotted border-t-transparent border-r-transparent 
            border-l-transparent border-b-gray-700" />
        </div>
    )
}

export default RestaurantItemCategory;