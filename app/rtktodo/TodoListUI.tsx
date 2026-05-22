'use client';

import {Todo} from "@/lib/features/todoApi/todoApiSlice";
import TodoUI from "@/app/rtktodo/TodoUI";

interface TodoListUIProps {
	todos: Todo[]
}

export default function TodoListUI({todos}: TodoListUIProps) {
	return (<div>
		{
			todos.map(todo => <TodoUI key={todo._id} todo={todo} />)
		}
	</div>);
}