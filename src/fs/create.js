import fs from "fs/promises";

const filePath = "./src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";

const create = async () => {
	try {
		await fs.writeFile(filePath, fileContent, { flag: "wx" });
	} catch (err) {
		if (err?.code === "EEXIST") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

await create();
