import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './redux/rootReducer';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);

export default store;