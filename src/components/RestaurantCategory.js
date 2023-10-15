import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantCategory = ({data, isShowCategory, changeShowCategory}) => {

    return (
        <div> 
            <div className="flex justify-between py-2 
                cursor-pointer shadow px-2" onClick={changeShowCategory} >
                <h1 className="font-bold mb-[20] text-[22px]">{data?.title} ({data?.itemCards?.length})</h1>
                <span className="pt-2">{ isShowCategory ? "🔼" : "🔽"}</span>
            </div>
            {   isShowCategory &&
                data?.itemCards?.map((c) => <RestaurantItemCategory item={c?.card?.info} />)
            }
        </div>
    )
}

export default RestaurantCategory;