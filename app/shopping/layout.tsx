import type {ReactNode} from "react";

interface Props {
	readonly children: ReactNode;
}

export default function ShoppingLayout({ children }: Props) {
	return (<section>
		<h1>Layout demo</h1>
		{children}
	</section>)
}