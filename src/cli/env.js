const PREFIX = "RSS_";

const parseEnv = () => {
	Object.values(process.env).forEach(([key, val]) => {
		if (key.startsWith(PREFIX)) {
			console.log(`${key}=${val}`);
		}
	});
};

parseEnv();
