import {createStore, compose /*, applyMiddleware*/} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import Reactotron, { SETTINGS } from '../ReactotronConfig'
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
  key: 'data',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const composedEnhancer = compose(/* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/Reactotron.createEnhancer(), ...enhancerList);

const maybeReactotronMiddleware = SETTINGS.useReactotron
  ? Reactotron.createEnhancer()
  : {}

const store = createStore(persistedReducer, maybeReactotronMiddleware);

const persistor = persistStore(store)

export default store

export { persistor }

