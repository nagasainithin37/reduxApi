# API CALLS USING REDUX

## Step 1:

intall @reduxjs/toolkit react-redux

cmd:
npm install @reduxjs/toolkit react-redux

## Step 2:

### Creating a redux store using configureStore from '@reduxjs/toolkit' in store.js

    import {configureStore} from '@reduxjs/toolkit'

    export const store=configureStore({})

## Step 3:

### Provide this store to application

    in index.js

    import {store} from '.\store'
    import {Provider} from 'react-redux'
    <provider store={store}>
    <App/>
    </provider>

## Step 4:

### Creating a Slice

    import {createSlice} from '@reduxjs/toolkit'

    export const apiSlice=createSlice({

    name:"api",
    initialState:{[], isPending: false, isError:false, errorMessage:"" },
    reducers:{},
    extraReducers:{}
    })

    //export reducers
    export default  apiSlice.reducer

//Add this slice in store

## Step 5:

### use CreateAsyncThunk

cmd:
import {createAsyncThunk} from '@reduxjs/toolkit'

install axios

in slice.js

    export const fetchUsers=createAsyncThunk("getUsers{name}",async('url',thunkApi)=>{
        try{
            let response=await axios.grt(url)
            let userList=response.data
            return userList
        }
        catch(err){
            return thunkApi.rejectWithValue("unable to get data)
        }
    })

        export const apiSlice=createSlice({

    name:"users",
    initialState:{[], isPending: false, isError:false, errorMessage:"" },
    reducers:{},
    extraReducers:{
        [fetchUsers.pending]:(state,action)=>{
            state.isPending=true;
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.isPending=false;
            state.isError=false;
            state.errorMessage="";
        },
        [fetchUsers.rejected]:(state,action)=>{
            state.api=[];
            state.isError=true;
            state.errorMessage=action.payload
        }
    }
    })

    //export reducers
    export default  apiSlice.reducer

## Step 6:

    import{useSelector,useDispatch} from 'rreact-redux'
    import {fetchUsers} from '/slice.js'


    let {users,isPending,isError,errorMessage}=useSelector(state=>state.users)

    let dispatch=useDispatch()
    useEffect(()=>{
        let actObj=fetchUsers('');
        dispatch(actObj)
    })
