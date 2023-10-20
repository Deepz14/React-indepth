import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const cartCount = useSelector((state) => state.cart.totalCart);
    return (
        <div>
            {
                cartCount === 0 ?
               <EmptyCart /> : <CartItem />
            }
        </div>
    )    
}


export default Cart;