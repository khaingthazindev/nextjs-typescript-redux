'use client';

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {loadAllTodo, selectTodo} from "@/lib/features/todos/todoSlice";
import TodoListWithRedux from "@/app/components/redux/todo/TodoListWithRedux";
import TodoEntryWithRedux from "@/app/components/redux/todo/TodoEntryWithRedux";
import {useEffect} from "react";

export default function TodoListWithReduxDemo() {
	const dispatch = useAppDispatch();
	const todos = useAppSelector(selectTodo);
	
	useEffect(() => {
		dispatch(loadAllTodo());
	}, []);
	return (<div>
		<TodoEntryWithRedux />
		<TodoListWithRedux todos={todos} />
	</div>)
}