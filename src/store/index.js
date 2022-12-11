import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import app from './app/app.reducer';
import record from './record/record.reducer';
import records from './records/records.reducer';

const reducers = combineReducers({
  app,
  record,
  records,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewareComponents = [thunk];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middlewareComponents.push(logger);
}

const middleware = applyMiddleware(...middlewareComponents);

const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default store;
