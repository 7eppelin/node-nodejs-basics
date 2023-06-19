import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream";

const compress = async () => {
	const zip = zlib.createGzip();
	const source = fs.createReadStream("./src/zip/files/fileToCompress.txt");
	const archive = fs.createWriteStream("./src/zip/files/archive.gz");

	pipeline(source, zip, archive, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("file compressed");
		}
	});
};

await compress();
