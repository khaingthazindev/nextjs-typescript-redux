import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Todo {
	_id?: string,
	title: string,
	completed: boolean
}

export interface TodosApiResponse {
	data: Todo[]
}

export interface TodoApiResponse {
	message: string,
	data: Todo
}

export const todoApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
	reducerPath: "todosApi",
	tagTypes: ['Todos'],
	endpoints: (build) => ({
		getAllTodos: build.query<TodosApiResponse, undefined>({
			query: (undefined) => `/todos`,
			providesTags: ['Todos']
		}),
		saveTodo: build.mutation<TodoApiResponse, Todo>({
			query: (newTodo: Todo) => ({
				url: `/todos`,
				method: 'POST',
				body: newTodo
			}),
			// invalidatesTags: ['Todos']
			async onQueryStarted(todo: Todo, {dispatch, queryFulfilled}) {
				try {
					const {data: savedTodo} = await queryFulfilled;
					console.log('savedTodo: ', savedTodo);
					const createResult = dispatch(
						todoApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
							draft.data.push(savedTodo);
						})
					);
				} catch {
				
				}
			}
		}),
		/*
		with invalidatesTags
		deleteTodo: build.mutation<TodoApiResponse, Todo>({
			query: (todo: Todo) => ({
				url: `/todos/${todo._id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Todos']
		}),
		 */
		// with Optimistic update
		deleteTodo: build.mutation<TodoApiResponse, Todo>({
			query: (todo: Todo) => ({
				// url: `/todos/10`,
				url: `/todos/${todo._id}`,
				method: 'DELETE',
			}),
			async onQueryStarted(todo: Todo, {dispatch, queryFulfilled}) {
				console.log('onQueryStarted deleteTodo: ', todo);
				const deleteResult = dispatch(
					todoApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
						let data: Todo[] = draft?.data?.filter((td: Todo) => td._id !== todo._id);
						draft.data = data;
					})
				);
				try {
					await queryFulfilled;
				} catch {
					deleteResult.undo();
				}
			}
		}),
		updateTodo: build.mutation<TodoApiResponse, Todo>({
			query: (todo: Todo) => ({
				url: `/todos/${todo._id}`,
				method: 'PUT',
				body: todo
			}),
			// invalidatesTags: ['Todos']
			async onQueryStarted(todo: Todo, {dispatch, queryFulfilled}) {
				const updateResult = dispatch(
					todoApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
						let data: Todo[] = draft.data.map((td: Todo) => (td._id === todo._id) ? todo : td);
						draft.data = data;
					})
				);
				try {
					await queryFulfilled;
				} catch {
					updateResult.undo();
				}
			}
		})
	})
});

export const {
	useGetAllTodosQuery,
	useSaveTodoMutation,
	useDeleteTodoMutation,
	useUpdateTodoMutation,
} = todoApiSlice;