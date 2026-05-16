'use client';

import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import React, {Dispatch, useEffect, useRef, useState} from "react";
import {TodoModel} from "@/app/components/reducer/TodoModel";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";

interface TodoEntryProps {
	dispatch: Dispatch<TodoActions>
}

let id = 3;
function getUniqueId() {
	return id++;
}

export default function TodoEntry({dispatch}: TodoEntryProps) {
	const [todoText, setTodoText] = useState('');
	const onTaskChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodoText(event.target.value);
	}
	const onAddTodoHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const newTodo: TodoModel = {
			id: getUniqueId() + '',
			title: todoText,
		};
		dispatch({
			type: 'ADD_TODO',
			payload: newTodo
		});
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