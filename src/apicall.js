import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers=createAsyncThunk("getUsers",async(url,thunkApi)=>{
    try{
        let response=await axios.get(url)
        let userList=response.data
        return userList
    }
    catch(err){
        return thunkApi.rejectWithValue("Unable to fetch data")
    }
})


export const userApi=createSlice({

    name:"users",
    initialState:{"users":[],isPending:false,isError:false,errorMessage:''},
    reducers:{},
    extraReducers:{
        [fetchUsers.pending]:(state,action)=>{
            state.isPending=true;
            state.isError=false;
            state.errorMessage='';
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.users=action.payload;
            state.isPending=false;
            state.isError=false;
            state.errorMessage='';
        },
        [fetchUsers.rejected]:(state,action)=>{
            state.isError=true;
            state.errorMessage=action.payload;
            state.users=[];
        },
    }
})

export default userApi.reducer