import fs from "fs/promises";
import { promisify } from "util";
import stream from "stream";

const filePath = "./src/streams/files/fileToRead.txt";
const pipeline = promisify(stream.pipeline);

const read = async () => {
	const fileHandle = await fs.open(filePath);
	pipeline(fileHandle.createReadStream(), process.stdout);
};

await read();
