import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import SimpleCounter from "@/app/components/SimpleCounter";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import ContextDemo from "@/app/components/context/ContextDemo";
import MyThemeContextDemo from "@/app/components/context/MyThemeContextDemo";

export default function IndexPage() {
  return (<div>
    {/*<Greeting message={"Hello World!"} />*/}
    {/*<SimpleCounter />*/}
    {/*<CounterWithReducer />*/}
    {/*<ContextDemo />*/}
    <MyThemeContextDemo />
  </div>)
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
