import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import SimpleCounter from "@/app/components/SimpleCounter";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import ContextDemo from "@/app/components/context/ContextDemo";
import MyThemeContextDemo from "@/app/components/context/MyThemeContextDemo";
import TodoWithReducer from "@/app/components/reducer/TodoWithReducer";

export default function IndexPage() {
  return (<div>
    {/*<Greeting message={"Hello World!"} />*/}
    {/*<SimpleCounter />*/}
    {/*<CounterWithReducer />*/}
    {/*<ContextDemo />*/}
    {/*<MyThemeContextDemo />*/}
    <TodoWithReducer />
  </div>)
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
