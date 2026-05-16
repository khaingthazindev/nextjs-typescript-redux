'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import TodoUIWithRedux from "@/app/components/redux/todo/TodoUIWithRedux";

interface TodoListProps {
	todos: TodoModel[],
}
export default function TodoListWithRedux({todos}: TodoListProps) {
	return (<div>
		{
			todos.map(todo => <TodoUIWithRedux key={todo.id} todo={todo} />)
		}
	</div>)
}