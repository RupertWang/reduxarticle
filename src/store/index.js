import { createStore } from 'redux';
import rootReducer from '../reducer/index';
//import rootReducer from '../reducer/articleHandler';

const store = createStore(rootReducer);

export default store;