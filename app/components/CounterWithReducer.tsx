'use client';

import {useReducer} from "react";

interface CounterState {
	count: number;
}

type CounterAction = {
	type: 'INCREMENT' | 'DECREMENT'
}

function counterReducer(state: CounterState, action: CounterAction): CounterState {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1
			}
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1
			}
	}
}

const initialState: CounterState = {
	count: 0
}
export default function CounterWithReducer() {
	const [state, dispatch] = useReducer(counterReducer, initialState);
	const incHandler = () => {
		dispatch({
			type: 'INCREMENT',
		});
	}
	const decHandler = () => {
		dispatch({
			type: 'DECREMENT',
		});
	}
	return (<div>
		Counter with reducer
		<br />
		<br />
		<button onClick={incHandler}>+1</button>
		&nbsp;{state.count}&nbsp;
		<button onClick={decHandler}>-1</button>
	</div>)
}