'use client';

import {useEffect, useState} from "react";
import {TodoModel} from "@/app/components/reducer/TodoModel";

export default function TodosPage() {
	const [todos, setTodos] = useState<TodoModel[]>([]);
	
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(response => response.json())
			.then(json => setTodos(json));
	}, []);
	
	return (<div>
		<h3>Todos Page</h3>
		{
			todos?.map((todo: TodoModel) => <div key={todo.id}>{todo.title}</div>)
		}
	</div>);
}