import { createAction } from "@reduxjs/toolkit";
import { UPDATE_THEME } from "./action-types";

const updateTheme = createAction(UPDATE_THEME);

export {
    updateTheme
}