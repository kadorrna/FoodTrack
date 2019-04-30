import {createStore, compose /*, applyMiddleware*/} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import Reactotron from '../ReactotronConfig'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/root.reducer';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const composedEnhancer = compose(/* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/Reactotron.createEnhancer(), ...enhancerList);

const actualCreateStore = true
  ? Reactotron.createStore
  : createStore

const store = actualCreateStore(persistedReducer, {});

const persistor = persistStore(store)

export default store

export { persistor }


// export default () => {
//   let store = initStore
//   let persistor = persistStore(store)
//   return { store, persistor}
// }

// module.exports = {
//   initStore
// }
