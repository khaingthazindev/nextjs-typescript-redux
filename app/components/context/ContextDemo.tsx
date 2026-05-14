'use client';

import {Theme, ThemeContext, useGetTheme} from "@/app/components/context/ThemeContext";
import React, {useState} from "react";

function MyComponent({onClickHandler}: {
	onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}) {
	const theme = useGetTheme();
	
	return (<div>
		<p>Current theme: {theme}</p>
		<button onClick={onClickHandler}>Change theme</button>
	</div>);
}

export default function ContextDemo() {
	const [theme, setTheme] = useState<Theme>('light');
	const changeThemeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		setTheme('dark');
	}
	
	return (<div>
		<ThemeContext.Provider value={theme}>
			<MyComponent onClickHandler={changeThemeHandler} />
		</ThemeContext.Provider>
	</div>);
}
