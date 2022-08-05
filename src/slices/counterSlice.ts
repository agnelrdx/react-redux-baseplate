import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from 'types/index';

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value = state.value + 1;
		},
		decrement: state => {
			const currentValue = state.value - 1;
			state.value = currentValue < 0 ? 0 : currentValue;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
