import {createContext, useContext} from "react";

export type MyTheme = 'red' | 'green' | 'blue';
export const MyThemeContext = createContext<MyTheme>('red');
export const getMyThemeContext = () => useContext(MyThemeContext);