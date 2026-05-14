import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import SimpleCounter from "@/app/components/SimpleCounter";
import CounterWithReducer from "@/app/components/CounterWithReducer";

export default function IndexPage() {
  return (<div>
    {/*<Greeting message={"Hello World!"} />*/}
    {/*<SimpleCounter />*/}
    <CounterWithReducer />
  </div>)
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
