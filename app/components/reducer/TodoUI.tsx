'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {TodoModel} from "@/app/components/reducer/TodoModel";
import Button from "@mui/material/Button";
import React, {Dispatch} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";

interface TodoUIProps {
	todo: TodoModel,
	dispatch: Dispatch<TodoActions>
}
export default function TodoUI({todo, dispatch}: TodoUIProps) {
	const onEditHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log('edit: ', todo.title);
	}
	const onDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log('delete: ', todo.title);
		dispatch({
			type: 'DELETE_TODO',
			payload: todo
		})
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