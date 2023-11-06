import {configureStore} from "@reduxjs/toolkit";
import {persistStore,persistReducer,FLUSH,REHYDRATE,PERSIST,PURGE,REGISTER, PAUSE} from 'redux-persist'
import storage from "redux-persist/lib/storage"
import {user} from './slice/user'
// import { Admin } from "./slice/admin";
import { host } from "./slice/Host";

const userPersistConfig = {key:"userAuth",storage,version:1}
const adminPersistConfig = {key:"adminAuth",storage,version:1}
const hostPersistConfig={key:'hostAuth',storage,version:1}

const userPersistReducer = persistReducer(userPersistConfig,user.reducer)
const hostPersistReducer = persistReducer(hostPersistConfig,host.reducer)

export const Store = configureStore({
    reducer: {
        User: userPersistReducer,
        Host:hostPersistReducer
        
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
});

export const persistor = persistStore(Store);