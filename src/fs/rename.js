import fs from "fs/promises";
import { exists } from "../utils.js";

const exists = async (path) => {
	try {
		await fs.access(path);
		return true;
	} catch {
		return false;
	}
};

const filePath = "./src/fs/files/wrongFilename.txt";
const newFilePath = "./src/fs/files/properFilename.md";

const rename = async () => {
	if (await exists(newFilePath)) {
		throw new Error("FS operation failed");
	}

	try {
		await fs.rename(filePath, newFilePath);
	} catch (err) {
		if (err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
	}
};

await rename();
