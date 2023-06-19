import fs from "fs";
import { createHash } from "crypto";
import { pipeline } from "stream";

const filePath = "./src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
	const hash = createHash("sha256").setEncoding("hex");
	const readStream = fs.createReadStream(filePath);

	pipeline(readStream, hash, () => {
		console.log(hash.read());
	});
};

await calculateHash();
