'use client';

import {useParams} from "next/navigation";
import {todoApiSlice} from "@/lib/features/todoApi/todoApiSlice";

export default function TodoDetailPage() {
	const params = useParams<{id: string}>();
	// get data from cache not from server
	const {todo} = todoApiSlice.useGetAllTodosQuery(undefined, {
		selectFromResult: ({data}) => ({
			todo: data?.data?.find((todo) => todo._id === params.id),
		})
	})
	return (<div>
		<h3>TodoDetailPage {params.id}</h3>
		<div>
			Title {todo?.title}
		</div>
	</div>)
}