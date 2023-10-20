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
    let isItemExit = state.items.filter((item) => item.id == cartItem.id)
    isItemExit.length === 0 ? state.items.push(cartItem) : 
    state.items.filter((item) => item.id == cartItem.id).map((list) => list.quantity += 1);
    state.totalcartPrice += itemPrice;
    state.totalCart += 1;
}

export const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        add: (state, action) => {
            const {restaurantName, location, cartItem} = action.payload;
            state.restaurantName = restaurantName;
            state.location = location;
            handleAddItemCard(state, cartItem);
        },
        update: (state, action) => {
            
        },
        remove: (state) => {

        }
    }
})

export const { add, update, remove} = cartSlice.actions;

export default cartSlice.reducer;