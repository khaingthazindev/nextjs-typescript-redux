'use client';

import {Todo, useDeleteTodoMutation, useUpdateTodoMutation} from "@/lib/features/todoApi/todoApiSlice";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";
import {log} from "next/dist/server/typescript/utils";

interface TodoUIProps {
	todo: Todo;
}

export default function TodoUI({todo}: TodoUIProps) {
	const router = useRouter();
	const [deleteTodo, deleteResult] = useDeleteTodoMutation();
	const [updateTodo, updateResult] = useUpdateTodoMutation();
	// const dispatch = useDispatch();
	const onEditHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const editedTodo = {
			...todo,
			title: 'Updated ' + todo.title,
		}
		// dispatch(updateTodo(editedTodo));
		updateTodo(editedTodo);
	}
	const onDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		deleteTodo(todo)
			.unwrap()
			.then((data) => console.log('deleteTodo data: ', data),
				(error) => console.log('deleteTodo error: ', error));
	}
	const onDetailHandler = (id: string | undefined) => {
		router.push(`/rtktodo/${id}`);
	}
	return (<div>
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				{todo.title}
				&nbsp; <Button variant={'contained'} onClick={onEditHandler}>Edit</Button>
				&nbsp; <Button variant={'contained'} onClick={onDeleteHandler}>Delete</Button>
				&nbsp; <Button variant={'contained'} onClick={() => onDetailHandler(todo._id)}>Detail</Button>
			</CardContent>
		</Card>
	</div>);
}