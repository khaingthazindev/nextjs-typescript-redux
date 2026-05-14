'use client';

import {MyThemeContext, MyTheme, getMyThemeContext} from "@/app/components/context/MyThemeContext";
import React, {useState} from "react";

function Profile({changeThemeHandler}: {changeThemeHandler: React.MouseEventHandler<HTMLButtonElement>;}) {
	const currentTheme = getMyThemeContext();
	return (<div>
		Profile <br />
		Name: Thazin <br />
		Age: 30 <br />
		Theme Color : {currentTheme} <div style={{width: 200, height: 20, backgroundColor: currentTheme}}></div> <br/><br/>
		<button onClick={changeThemeHandler}>Change Theme</button>
	</div>)
}
export default function MyThemeContextDemo() {
	const [theme, setTheme] = useState<MyTheme>('green');
	const changeThemeHandler = () => {
		setTheme('blue');
	}
	return (<div>
		<MyThemeContext.Provider value={theme}>
			<Profile changeThemeHandler={changeThemeHandler} />
		</MyThemeContext.Provider>
	</div>)
}