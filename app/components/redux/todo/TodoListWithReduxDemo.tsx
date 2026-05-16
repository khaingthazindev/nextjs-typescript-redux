'use client';

import {useAppSelector} from "@/lib/hooks";
import {selectTodo} from "@/lib/features/todos/todoSlice";
import TodoListWithRedux from "@/app/components/redux/todo/TodoListWithRedux";
import TodoEntryWithRedux from "@/app/components/redux/todo/TodoEntryWithRedux";

export default function TodoListWithReduxDemo() {
	const todos = useAppSelector(selectTodo);
	return (<div>
		<TodoEntryWithRedux />
		<TodoListWithRedux todos={todos} />
	</div>)
}