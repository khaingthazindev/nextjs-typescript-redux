import {TodoModel} from "@/app/components/reducer/TodoModel";
import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";

export interface TodoSliceState {
	todos: TodoModel[];
}
const initialState: TodoSliceState = {
	todos: []
}

export const todoSlice = createAppSlice({
	name: 'todo',
	initialState,
	reducers: (create) => {
		return ({
			loadAllTodo: create.asyncThunk(
				async () => {
					console.log('Fetching todos...');
					const response = await fetch('https://jsonplaceholder.typicode.com/todos');
					const json = await response.json();
					return json;
				},
				{
					pending: (state) => {
						console.log('Fetch todo pending');
					},
					fulfilled: (state, action) => {
						console.log('Fetch todo fulfilled');
						console.log('todos: ', action);
						state.todos = action.payload;
					},
					rejected: (state) => {
						console.log('Fetch todo rejected');
					},
				},
			),
			addTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
				state.todos.push(action.payload);
			}),
			deleteTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
				state.todos = state.todos.filter(td => td.id !== action.payload.id);
			}),
			updateTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
				state.todos = state.todos.map(td => (td.id === action.payload.id) ? action.payload : td);
			})
		});
	},
	selectors: {
		selectTodo: (state) => state.todos,
	},
});
export const { addTodo, deleteTodo, updateTodo, loadAllTodo } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;