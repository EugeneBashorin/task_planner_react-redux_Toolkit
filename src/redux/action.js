import { createAction } from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

export const addTask = createAction("task/addTask", text => {
    return{
        payload:{
            id: nanoid(),
            completed: false,
            text,
        },
    }
});

export const deleteTask = createAction("task/deleteTask");
export const toggleCompleted = createAction("task/toggleCompleted");
export const setStatusFilter = createAction("filters/setStatusFilter");