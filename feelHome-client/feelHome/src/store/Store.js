import {configureStore} from "@reduxjs/toolkit";
import {persistStore,persistReducer,FLUSH,REHYDRATE,PERSIST,PURGE,REGISTER, PAUSE} from 'redux-persist'
import storage from "redux-persist/lib/storage"
import {user} from './slice/user'
// import { Admin } from "./slice/admin";
import hostSlice from "./slice/Host";

const PersistConfig ={
    key:'root',
    storage
}


const userPersistReducer = persistReducer(PersistConfig,user.reducer)
const hostPersistReducer = persistReducer(PersistConfig,hostSlice)

export const Store = configureStore({
    reducer: {
        User: userPersistReducer,
        Host: hostPersistReducer
        
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
});

export const persistor = persistStore(Store);