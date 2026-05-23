interface User {
	id: number;
	name: string;
	username?: string;
	email: string;
	address?: object;
}

export default async function UserPage() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: User[] = await response.json();
	return (<div>
		User Page
		{
			users.map((user) => <div key={user.id}>{user.name}</div>)
		}
	</div>);
}