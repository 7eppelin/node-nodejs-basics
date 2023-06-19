import fs from "fs";

const filePath = "./src/streams/files/fileToWrite.txt";

const write = async () => {
	const writeStream = fs.createWriteStream(filePath);
	process.stdin.pipe(writeStream);
};

await write();
