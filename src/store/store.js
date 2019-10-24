import { createStore } from 'redux';
import reducerNotas from '../reducers/notas'

const store = createStore(reducerNotas);

export default store;