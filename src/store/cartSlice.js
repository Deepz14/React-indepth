import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurantName: "",
    location: "",
    items: [],
    totalCart: 0,
    totalcartPrice: 0,
}

const handleAddItemCard = (state, cartItem) => {
    let itemPrice = cartItem?.defaultPrice ?  cartItem?.defaultPrice / 100 :  cartItem?.price / 100;
    let isItemExit = state.items.filter((item) => item?.id == cartItem?.id)
    isItemExit.length === 0 ? state.items.push(cartItem) : 
    state.items.filter((item) => item.id == cartItem.id).map((list) => list.quantity += 1);
    state.totalcartPrice += itemPrice;
    state.totalCart += 1;
}

const handleRemoveFromCard = (state, cartItem) => {
    if(state.totalCart === 1){
        state.restaurantName = "";
        state.location = "";
        state.items.length = 0;
        state.totalCart = 0;
        state.totalcartPrice = 0;
    }else{
        let itemPrice = cartItem?.defaultPrice ? cartItem?.defaultPrice / 100 : cartItem?.price / 100;
        if(cartItem?.quantity === 1){
            let newItems = state.items.filter((item) => item.id !== cartItem?.id);
            state.items = newItems;
        }else{
            state.items.filter((item) => item.id == cartItem?.id).map((list) => list.quantity -= 1);
        }
        state.totalcartPrice -= itemPrice;
        state.totalCart -= 1;
    }
}

export const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const {restaurantName, location, cartItem} = action.payload;
            state.restaurantName = restaurantName;
            state.location = location;
            if(!cartItem?.hasOwnProperty('quantity')) {
                cartItem.quantity = 1;
            }
            handleAddItemCard(state, cartItem);
        },
        updateCart: (state, action) => {
            const { cartItem } = action.payload;
            handleAddItemCard(state, cartItem);
        },
        removeCart: (state, action) => {
            const { cartItem } = action.payload;
            handleRemoveFromCard(state, cartItem);
        }
    }
})

export const { addCart, updateCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;