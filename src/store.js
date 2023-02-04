import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./apicall";
export const store=configureStore({
reducer:{
    users:userReducer
}
})