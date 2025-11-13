import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from '@redux-devtools/extension'
import { rootReducer } from "./reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const enchancer = devToolsEnhancer()

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer)
export const persistor = persistStore(store)