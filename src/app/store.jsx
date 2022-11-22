import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../features/restaurants/restaurantSlice';
import dishReducer from '../features/dishes/dishSlice';

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        dishes: dishReducer,
    },
});

export default store;