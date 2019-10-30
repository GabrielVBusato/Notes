import { createStore } from 'redux'
import reducerNotas from '../reducers/notas'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducerNotas);
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };