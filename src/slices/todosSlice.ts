import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ToDo } from 'types/index';

interface ToDoState {
	data: ToDo[];
	isLoading: boolean;
}

const initialState: ToDoState = {
	data: [],
	isLoading: false,
};

export const fetchTodosThunk = createAsyncThunk('todos/fetchTodos', async () => {
	await new Promise(resolve => setTimeout(resolve, 1500));
	const cities = await fetch(`https://jsonplaceholder.typicode.com/todos`);
	const response = await cities.json();
	return response;
});

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchTodosThunk.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchTodosThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			});
	},
});

export default citySlice.reducer;
