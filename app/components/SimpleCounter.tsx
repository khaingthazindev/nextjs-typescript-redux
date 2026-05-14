'use client';

import {useState} from "react";

export default function SimpleCounter() {
	// const [count, setCount] = useState<number>(0); //<number> no need because of 'type inferencing'
	const [count, setCount] = useState(0);
	
	const btnIncHandler = (): void => {
		setCount(count + 1);
	}
	
	return (<div>
		<button onClick={btnIncHandler}>+1</button>
		&nbsp; {count} &nbsp;
		<button onClick={() => setCount(count - 1)}>-1</button>
	</div>);
}