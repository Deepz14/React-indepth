import { useSelector, useDispatch } from "react-redux";
import { update } from "../store/cartSlice";

const CartItem = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleUpdateToCart = (item) => {
        dispatch(update(item));
    }

    return (
        <div className="relative cart-item-container w-7/12 mx-auto mt-8 mb-5 border-solid border-2 rounded">
            <div className="cart-item-header mb-5 px-3 py-5 shadow-sm">
                <h1 className="font-bold text-xl">{cartItems?.restaurantName}</h1>
                <h4 className="font-semibold text-gray-400">{cartItems?.location}</h4>
            </div>
            <div className="cart-item-list pt-3 mt-3 px-3 max-h-[290px] overflow-y-auto overflow-x-hidden">
                {
                    cartItems.items.length > 0 && 
                    cartItems.items.map((item) => (
                        <div key={item?.id} className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-md">{item?.name}</h3>
                            <div className="flex items-center border border-slate-300 cursor-pointer rounded">
                                <h1 className="px-2 text-slate-300 text-[1.2rem] font-bold"
                                    onClick={() => handleUpdateToCart(item)}>-</h1>
                                <h1 className="px-2 text-green-500 text-[1.2rem] font-semibold">{item?.quantity}</h1>
                                <h1 className="px-2 text-green-500 text-[1.2rem] font-bold z-0 hover:z-50"
                                    onClick={() => handleUpdateToCart(item)}>+</h1>
                            </div>
                            <h5 className="text-md font-semibold text-gray-400">&#8377; { 
                                item?.defaultPrice ?  (item?.defaultPrice / 100) * item?.quantity :  (item?.price / 100) * item?.quantity }
                            </h5>
                        </div>
                    ))
                }
          
            </div>
            <div className="cart-item-footer flex justify-between items-center 
                mt-3 p-3 shadow-sm">
                <h1 className="font-bold text-lg">TO PAY</h1>
                <h1 className="font-bold text-lg">&#8377; {cartItems?.totalcartPrice}</h1>
            </div>
        </div>
    )
}

export default CartItem;