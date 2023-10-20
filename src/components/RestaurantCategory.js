import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantCategory = ({resInfo, data, isShowCategory, changeShowCategory}) => {

    return (
        <div> 
            <div className="flex justify-between py-2 
                cursor-pointer shadow px-2" onClick={changeShowCategory} >
                <h1 className="font-bold mb-[20] text-[22px]">{data?.title} ({data?.itemCards?.length})</h1>
                <span className="pt-2">{ isShowCategory ? "🔼" : "🔽"}</span>
            </div>
            {   isShowCategory &&
                data?.itemCards?.map((c) => <RestaurantItemCategory key={c?.card?.info?.id} item={c?.card?.info} resInfo={resInfo} />)
            }
        </div>
    )
}

export default RestaurantCategory;