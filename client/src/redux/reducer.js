import { createReducer } from "@reduxjs/toolkit";
import themes from "../themes/themeColors";
import { updateTheme} from "./action-creators";


const initialState = {
    theme: localStorage.getItem("theme") ? themes.filter(theme => theme.name === String(localStorage.getItem("theme")))[0] : themes[0]
}

const themesReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateTheme, (state, action) => {
        state.theme = themes.filter(theme => theme.name === action.payload)[0]
        localStorage.setItem("theme", action.payload);
    })
}) 

export { themesReducer };