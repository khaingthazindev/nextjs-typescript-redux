'use client';

import {useAppSelector} from "@/lib/hooks";
import {selectTodo} from "@/lib/features/todos/todoSlice";

export default function TodoCountWithRedux() {
	const todos = useAppSelector(selectTodo);
	return (<div>
		<h1>Count {todos.length}</h1>
	</div>);
}