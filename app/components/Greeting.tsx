interface GreetingProps {
	message: string;
}
export default function Greeting({message}: GreetingProps) {
	return (<div>
		Greeting {message.toUpperCase()}
	</div>)
}