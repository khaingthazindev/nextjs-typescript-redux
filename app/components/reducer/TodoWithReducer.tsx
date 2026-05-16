'use client';

import TodoList from "@/app/components/reducer/TodoList";
import TodoEntry from "@/app/components/reducer/TodoEntry";
import {TodoModel} from "@/app/components/reducer/TodoModel";
import {useReducer} from "react";

interface TodoState {
	todos: TodoModel[]
}

export type TodoActions = {
	type: 'ADD_TODO',
	payload: TodoModel
}
| {
	type: 'UPDATE_TODO',
	payload: TodoModel
}
| {
	type: 'DELETE_TODO',
	payload: TodoModel
}

function todoReducer(state: TodoState, action: TodoActions): TodoState {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				todos: [...state.todos, action.payload]
			}
		case 'UPDATE_TODO':
			return {
				todos: state.todos.map((todo: TodoModel) => (todo.id === action.payload.id) ? action.payload : todo)
			}
		case 'DELETE_TODO':
			return {
				todos: state.todos.filter((todo: TodoModel) => todo.id !== action.payload.id)
			}
		default:
			return {
				todos: [...state.todos]
			}
	}
}


const initialTodos: TodoModel[] = [
	{
		id: '1',
		title: 'Task 1',
	},
	{
		id: '2',
		title: 'Task 2',
	},
]
const initialState = {
	todos: initialTodos
}
export default function TodoWithReducer() {
	const [state, dispatch] = useReducer(todoReducer, initialState);
	return (<div>
		<TodoEntry dispatch={dispatch} />
		<TodoList todos={state.todos} dispatch={dispatch} />
	</div>);
}