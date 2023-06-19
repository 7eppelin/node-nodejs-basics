import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream";

const decompress = async () => {
	const unzip = zlib.createUnzip();
	const archive = fs.createReadStream("./src/zip/files/archive.gz");
	const dest = fs.createWriteStream("./src/zip/files/fileToCompress.txt");

	pipeline(archive, unzip, dest, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("file decompressed");
		}
	});
};

await decompress();
