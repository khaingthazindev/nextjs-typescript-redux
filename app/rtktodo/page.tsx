'use client';

import {useGetAllTodosQuery} from "@/lib/features/todoApi/todoApiSlice";
import TodoListUI from "@/app/rtktodo/TodoListUI";
import Button from "@mui/material/Button";
import TodoEntry from "@/app/rtktodo/TodoEntry";

export default function NewTodoPage() {
	const { data: response, isError, isLoading, isSuccess, refetch } =
		useGetAllTodosQuery(undefined);
	
	if (isError) {
		return (
			<div>
				<h1>There was an error!!!</h1>
			</div>
		);
	}
	
	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}
	
	const onRefetchHandler = () => {
		console.log('Refetch');
		refetch();
	}
	if (isSuccess) {
		return (<div>
			<TodoEntry />
			<Button variant={'contained'} onClick={onRefetchHandler}>Force Refetch</Button>
			<TodoListUI todos={response.data} />
		</div>);
	}
}