'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {TodoModel} from "@/app/components/reducer/TodoModel";
import Button from "@mui/material/Button";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "@/lib/features/todos/todoSlice";

interface TodoUIProps {
	todo: TodoModel,
}
export default function TodoUIWithRedux({todo}: TodoUIProps) {
	const dispatch = useDispatch();
	const onEditHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log('edit: ', todo.title);
		const editedTodo = {
			...todo,
			title: 'Updated ' + todo.title,
		}
		dispatch(updateTodo(editedTodo));
	}
	const onDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(deleteTodo(todo));
	}
	return (<div>
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				{todo.title}
				&nbsp; <Button variant={'contained'} onClick={onEditHandler}>Edit</Button>
				&nbsp; <Button variant={'contained'} onClick={onDeleteHandler}>Delete</Button>
			</CardContent>
		</Card>
	</div>);
}