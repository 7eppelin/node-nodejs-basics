import fs from "fs/promises";

const dirPath = "./src/fs/files";

const list = async () => {
	try {
		const files = await fs.readdir(dirPath);
		console.log(files);
	} catch (err) {
		if (err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
	}
};

await list();
