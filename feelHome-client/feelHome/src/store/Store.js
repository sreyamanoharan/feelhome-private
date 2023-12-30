import {configureStore} from "@reduxjs/toolkit";
import {persistStore,persistReducer,FLUSH,REHYDRATE,PERSIST,PURGE,REGISTER, PAUSE} from 'redux-persist'
import storage from "redux-persist/lib/storage"
import userSlice from './slice/user'
// import { Admin } from "./slice/admin";
import hostSlice from "./slice/Host";
import adminSlice from './slice/Admin'

const PersistConfig ={
    key:'root',
    storage
}


const userPersistReducer = persistReducer(PersistConfig,userSlice)
const hostPersistReducer = persistReducer(PersistConfig,hostSlice)
const adminPersistReducer= persistReducer(PersistConfig,adminSlice)

export const Store = configureStore({
    reducer: {
        User: userPersistReducer,
        Host: hostPersistReducer,
        Admin:adminPersistReducer
        
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
});

export const persistor = persistStore(Store);