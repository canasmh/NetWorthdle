import { configureStore } from '@reduxjs/toolkit';
import { themesReducer }from "./reducer";

const store = configureStore({
    reducer: {
        theme: themesReducer
    }});

export default store;