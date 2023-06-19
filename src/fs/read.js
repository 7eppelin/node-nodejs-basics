import fs from "fs/promises";

const filePath = "./src/fs/files/fileToRead.txt";

const read = async () => {
	try {
		const contents = await fs.readFile(filePath, { encoding: "utf-8" });
		console.log(contents);
	} catch (err) {
		if (err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
	}
};

await read();
