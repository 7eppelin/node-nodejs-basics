import fs from "fs/promises";

const srcPath = "./src/fs/files";
const copyPath = "./src/fs/files-copy";

const copy = async () => {
	try {
		await fs.cp(srcPath, copyPath, {
			force: false,
			errorOnExist: true,
			recursive: true,
		});
	} catch (err) {
		if (err?.code === "ERR_FS_CP_EEXIST" || err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

await copy();
