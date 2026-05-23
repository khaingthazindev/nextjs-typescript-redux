'use client';

import {useParams} from "next/navigation";

export default function ShoppingDynamicRoutePage() {
	const params = useParams<{slug: string}>();
	return (<div>
		<h1>ShoppingDynamicRoutePage {params.slug}</h1>
	</div>);
}