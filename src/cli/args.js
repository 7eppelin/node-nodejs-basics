const parseArgs = () => {
	const args = process.argv.slice(2);

	for (let i = 0; i < args.length; i += 2) {
		const arg = args[i].slice(2);
		const val = args[i + 1];

		console.log(`${arg} is ${val}`);
	}
};

parseArgs();
