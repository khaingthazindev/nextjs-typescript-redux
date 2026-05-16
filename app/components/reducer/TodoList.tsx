'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import TodoUI from "@/app/components/reducer/TodoUI";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";
import {Dispatch} from "react";

interface TodoListProps {
	todos: TodoModel[],
	dispatch: Dispatch<TodoActions>
}
export default function TodoList({todos, dispatch}: TodoListProps) {
	return (<div>
		{
			todos.map(todo => <TodoUI key={todo.id} todo={todo} dispatch={dispatch} />)
		}
	</div>)
}