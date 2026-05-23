async function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
	await delay(2000);
	return (<div>
		Computer Page
	</div>)
}