import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import thunk from 'redux-thunk';

import counterReducer from 'slices/counterSlice';
import todosReducer from 'slices/todosSlice';
import { postsSlice } from 'slices/postsSlice';

const rootReducer = combineReducers({
	counter: counterReducer,
	todos: todosReducer,
	[postsSlice.reducerPath]: postsSlice.reducer,
});

const persistedReducer = persistReducer(
	{
		key: 'root',
		storage,
		blacklist: ['posts', 'todos'], // add any reducer you don't want to persist here
	},
	rootReducer
);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([thunk, postsSlice.middleware]);
	},
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
