'use client';

import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import React, {useEffect, useRef, useState} from "react";
import {Todo, useSaveTodoMutation} from "@/lib/features/todoApi/todoApiSlice";


let id = 3;
function getUniqueId() {
	return id++;
}

export default function TodoEntry() {
	const [saveTodo, result] = useSaveTodoMutation();
	const [todoText, setTodoText] = useState('');
	const onTaskChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodoText(event.target.value);
	}
	const onAddTodoHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const newTodo:Todo = {
			title: todoText,
			completed: false
		};
		saveTodo(newTodo)
		.then(() => alert('New todo added successfully.'), (error) => console.log('error'));
		setTodoText('');
	}
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	
	useEffect(() => {
		todoTextInputRef.current?.focus();
	}, []);
	return (<div>
		<Box
			component="form"
			sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
			noValidate
			autoComplete="off"
		>
			<TextField id="standard-basic"
			           label="Task"
			           variant="standard"
			           value={todoText}
			           onChange={onTaskChangeHandler}
			           inputRef={todoTextInputRef}/>
			<Button variant={'contained'} onClick={onAddTodoHandler}>Add</Button>
		</Box>
	</div>)
}