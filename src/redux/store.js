import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filterReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filterReducer,
    },
});